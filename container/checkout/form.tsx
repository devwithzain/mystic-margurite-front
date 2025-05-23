"use client";
import {
	PaymentElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { TuserProps } from "@/types";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { getToken } from "@/lib/get-token";
import { useRouter } from "next/navigation";
import { getUserData } from "@/actions/get-user";
import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/ui/client/animated-text";

export default function Form() {
	const token = getToken("authToken");
	const navigate = useRouter();
	const [user, setUser] = useState<TuserProps>();
	const [cartItems, setCartItems] = useState<any[]>([]);
	const [cartTotal, setCartTotal] = useState<number>(0);

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	}, [token]);

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(
					`https://mysticmarguerite.com/new/backend/api/cart`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				const data = await response.json();
				const total = data.reduce((total: number, item: any) => {
					const quantity = item.quantity || 1;
					const price = parseFloat(item.product?.price || "0");
					return total + quantity * price;
				}, 0);
				setCartItems(data);
				setCartTotal(total);
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.log(error.message);
				} else {
					console.log("An unknown error occurred");
				}
			}
		};
		fetchCartItems();
	}, [token]);

	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		country: "",
		streetAddress: "",
		townCity: "",
		state: "",
		zip: "",
		agreedTerms: false,
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setLoading(true);

		try {
			const amountInCents = cartTotal * 100;
			const { data } = await axios.post(
				"https://mysticmarguerite.com/new/backend/api/payment-intent",
				{
					amount: amountInCents,
					currency: "usd",
				},
			);
			console.log(data);

			const { error, paymentIntent } = await stripe.confirmPayment({
				elements,
				confirmParams: {
					payment_method_data: {
						billing_details: {
							name: `${formData.firstName} ${formData.lastName}`,
							email: formData.email,
						},
					},
				},
				redirect: "if_required",
			});

			if (error) {
				toast.error(error.message || "Payment failed. Try again.");
			} else if (paymentIntent?.status === "succeeded") {
				const orderData = {
					user_id: user?.id,
					cart_items: cartItems.map((item) => ({
						product_id: item.product.id,
						quantity: item.quantity || 1,
					})),
					first_name: formData.firstName,
					last_name: formData.lastName,
					email: formData.email,
					phone: formData.phone,
					country: formData.country,
					street_address: formData.streetAddress,
					town_city: formData.townCity,
					state: formData.state,
					zip: formData.zip,
					agreed_terms: formData.agreedTerms,
				};

				const orderResponse = await axios.post(
					"https://mysticmarguerite.com/new/backend/api/placedOrder",
					orderData,
				);
				await axios.put(
					`https://mysticmarguerite.com/new/backend/api/orders/${orderResponse.data.order_id}/status`,
					{
						status: "paid",
					},
				);

				toast.success("Payment successful!");

				await axios.delete(
					"https://mysticmarguerite.com/new/backend/api/cart",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				setCartItems([]);
				setCartTotal(0);
			}
		} catch (err) {
			toast.error("Payment failed. Try again.");
			console.error("Error during payment or order placement:", err);
		} finally {
			setLoading(false);
			navigate.push("/thank-you");
		}
	};

	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex items-center justify-around">
				<div className="w-fit pb-2 border-b-4 border-[#2E073F]">
					<AnimatedText
						className="text-[#2E073F] papyrus heading font-semibold leading-tight capitalize"
						text="Billing details"
					/>
				</div>
				<div className="w-fit pb-2 border-b-4 border-[#2E073F]">
					<AnimatedText
						className="text-[#2E073F] papyrus heading font-semibold leading-tight capitalize"
						text="Card details"
					/>
				</div>
			</div>
			<div className="w-full flex gap-10 justify-between padding-y">
				<form
					onSubmit={handleSubmit}
					className="w-full flex flex-col gap-5">
					<div className="w-full flex items-center gap-5">
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="firstName">
								First Name *
							</label>
							<input
								onChange={handleInputChange}
								value={formData.firstName}
								type="text"
								id="firstName"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="lastName">
								Last Name *
							</label>
							<input
								onChange={handleInputChange}
								value={formData.lastName}
								type="text"
								id="lastName"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
					</div>
					<div className="w-full flex items-center gap-5">
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="phone">
								Phone *
							</label>
							<input
								onChange={handleInputChange}
								value={formData.phone}
								type="tel"
								id="phone"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="email">
								Email*
							</label>
							<input
								onChange={handleInputChange}
								value={formData.email}
								type="email"
								id="email"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
					</div>
					<div className="w-full flex items-center gap-5">
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="country">
								Country / Region *
							</label>
							<input
								onChange={handleInputChange}
								value={formData.country}
								type="text"
								id="country"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
					</div>
					<div className="w-full flex items-center gap-5">
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="streetAddress">
								Street address *
							</label>
							<input
								onChange={handleInputChange}
								value={formData.streetAddress}
								type="text"
								id="streetAddress"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
					</div>
					<div className="w-full flex items-center gap-5">
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="townCity">
								Town / City*
							</label>
							<input
								onChange={handleInputChange}
								value={formData.townCity}
								type="text"
								id="townCity"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="state">
								State*
							</label>
							<input
								onChange={handleInputChange}
								value={formData.state}
								type="text"
								id="state"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="zip">
								Zip
							</label>
							<input
								onChange={handleInputChange}
								value={formData.zip}
								type="text"
								id="zip"
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
					</div>
					<p className="text-black paragraph leading-normal tracking-tight font-MonstrateRegular">
						Your personal data will be used to process your order, support your
						experience throughout this website, and for other purposes described
						in our privacy policy.
					</p>
					<div className="flex items-center gap-2">
						<input
							onChange={handleInputChange}
							checked={formData.agreedTerms}
							id="agreedTerms"
							type="checkbox"
							required
							className="w-5 h-5 outline-none border-none"
						/>
						<label
							htmlFor="agreedTerms"
							className="paragraph text-[#000] leading-tight tracking-tight font-MonstrateRegular">
							I have read and agree to the website terms and conditions.
						</label>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="w-fit bg-[#7a74ef] mt-4 flex items-center gap-2 btn transition-all duration-300 ease-in-out text-white px-4 py-4 capitalize montserrat paragraph leading-tight tracking-tight rounded-md">
						{loading ? (
							<Loader2 className="animate-spin mx-auto" />
						) : (
							"Place Order"
						)}
					</button>
				</form>
				<div className="w-full border-l-2 border-black/10 pl-10 py-10">
					<PaymentElement />
				</div>
			</div>
		</div>
	);
}
