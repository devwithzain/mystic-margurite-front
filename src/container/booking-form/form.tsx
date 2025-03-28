import {
	TServicesColumnProps,
	TtimeslotsColumnProps,
	TuserProps,
} from "@/types";
import {
	PaymentElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { getToken } from "@/lib/get-token";
import getService from "@/actions/get-service";
import { getUserData } from "@/actions/get-user";
import getTimeSlots from "@/actions/get-timeslots";
import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/animated-text";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
	const token = getToken();
	const { id } = useParams();
	const stripe = useStripe();
	const navigate = useNavigate();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<TuserProps>();
	const [timeslots, setTimeSlot] = useState<TtimeslotsColumnProps[]>([]);
	const [service, setService] = useState<TServicesColumnProps | null>(null);

	useEffect(() => {
		const fetchTimeSlots = async () => {
			try {
				const response = await getTimeSlots();
				setTimeSlot(response.timeslots);
			} catch (err) {
				console.error("Error fetching timeslots:", err);
			}
		};
		fetchTimeSlots();
	}, [token]);

	useEffect(() => {
		const fetchService = async () => {
			try {
				if (id) {
					const response = await getService(id);
					setService(response.service);
				}
			} catch (err) {
				console.error("Error fetching service:", err);
			}
		};
		fetchService();
	}, [id]);

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	}, [token]);

	const [formData, setFormData] = useState({
		birth_date: "",
		birth_time: "",
		birth_place: "",
		first_name: "",
		last_name: "",
		phone: "",
		email: "",
		country: "",
		street_address: "",
		town_city: "",
		state: "",
		zip: "",
		notes: "",
		status: "pending",
		time_slot_id: "",
		meeting_link: "",
		timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
	});

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { id, value, type } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]:
				type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
		}));
	};

	const generateJitsiMeeting = async () => {
		try {
			const response = await axios.get(
				"http://127.0.0.1:8000/api/generate-meeting",
			);
			const link = response.data.meetingLink;
			return link;
		} catch (error) {
			console.error("Error generating Jitsi meeting:", error);
			toast.error("Failed to create meeting room");
			throw error;
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setLoading(true);

		try {
			const meetingLink = await generateJitsiMeeting();

			const amountInCents = service?.price
				? Math.round(Number(service.price) * 100)
				: 100;

			await axios.post("http://127.0.0.1:8000/api/payment-intent", {
				amount: amountInCents,
				currency: "usd",
			});

			const { error, paymentIntent } = await stripe.confirmPayment({
				elements,
				confirmParams: {
					return_url: window.location.origin + "/thank-you",
					payment_method_data: {
						billing_details: {
							name: `${formData.first_name} ${formData.last_name}`,
							email: formData.email,
						},
					},
				},
				redirect: "if_required",
			});

			if (error) {
				toast.error(error.message || "Payment failed. Try again.");
				return;
			}

			if (paymentIntent?.status === "succeeded") {
				const bookingData = {
					user_id: user?.id,
					service_id: service?.id,
					cart_items: [
						{
							service_id: service?.id,
						},
					],
					time_slot_id: formData.time_slot_id,
					birth_date: formData.birth_date,
					birth_time: formData.birth_time,
					birth_place: formData.birth_place,
					first_name: formData.first_name,
					last_name: formData.last_name,
					phone: formData.phone,
					email: formData.email,
					country: formData.country,
					street_address: formData.street_address,
					town_city: formData.town_city,
					state: formData.state,
					zip: formData.zip,
					timezone: formData.timezone,
					notes: formData.notes,
					meeting_link: meetingLink,
					status: "",
				};

				const bookingResponse = await axios.post(
					"http://127.0.0.1:8000/api/placedBooking",
					bookingData,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);

				await axios.post(
					`http://127.0.0.1:8000/api/send-book-form`,
					bookingData,
				);

				toast.success(
					"Booking successful! Check your email for meeting details.",
				);

				await axios.put(
					`http://127.0.0.1:8000/api/bookings/${bookingResponse.data.booking_id}/status`,
					{
						status: "paid",
					},
				);

				await axios.put(
					`http://127.0.0.1:8000/api/bookings/${bookingResponse.data.booking_id}/status`,
					{
						status: "paid",
					},
				);

				await axios.post(
					`http://127.0.0.1:8000/api/timeslot/${timeslots[0].id}`,
					{
						status: "booked",
					},
				);

				navigate("/thank-you");
			}
		} catch (err) {
			console.log("Error processing payment:", err);
			toast.error("Booking failed. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex items-center justify-around">
				<div className="w-fit pb-2 border-b-4 border-black">
					<AnimatedText
						className="text-[#080808] smythe heading font-medium leading-tight capitalize"
						text="Booking details"
					/>
				</div>
				<div className="w-fit pb-2 border-b-4 border-black">
					<AnimatedText
						className="text-[#080808] smythe heading font-medium leading-tight capitalize"
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
								htmlFor="first_name">
								First Name *
							</label>
							<input
								onChange={handleInputChange}
								value={formData.first_name}
								type="text"
								id="first_name"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="last_name">
								Last Name *
							</label>
							<input
								onChange={handleInputChange}
								value={formData.last_name}
								type="text"
								id="last_name"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
					</div>
					<div className="w-full flex items-center gap-5">
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="birth_date">
								Birth Date *
							</label>
							<input
								onChange={handleInputChange}
								value={formData.birth_date}
								type="date"
								id="birth_date"
								required
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="birth_time">
								Birth Time *
							</label>
							<input
								onChange={handleInputChange}
								value={formData.birth_time}
								type="time"
								id="birth_time"
								className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
							/>
						</div>
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="birth_place">
								Birth Place
							</label>
							<input
								onChange={handleInputChange}
								value={formData.birth_place}
								type="text"
								id="birth_place"
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
					<div className="w-full flex flex-col gap-3">
						<label
							className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
							htmlFor="time_slot_id">
							Select Time Slot *
						</label>
						<select
							onChange={handleInputChange}
							value={formData.time_slot_id}
							id="time_slot_id"
							required
							className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular">
							<option value="">Select a time slot</option>
							{timeslots.map((slot) => (
								<option
									key={slot.id}
									value={slot.id}
									disabled={
										slot.status === "booked" || slot.status === "unavailable"
									}
									className={`${
										slot.status === "booked" || slot.status === "unavailable"
											? "line-through"
											: ""
									}`}>
									{new Date(slot.date).toLocaleDateString("en-US", {
										day: "numeric",
										month: "long",
										year: "numeric",
									})}{" "}
									-{" "}
									{new Date(`1970-01-01T${slot.start_time}`).toLocaleTimeString(
										"en-US",
										{
											hour: "2-digit",
											minute: "2-digit",
											hour12: true,
										},
									)}{" "}
									-{" "}
									{new Date(`1970-01-01T${slot.end_time}`).toLocaleTimeString(
										"en-US",
										{
											hour: "2-digit",
											minute: "2-digit",
											hour12: true,
										},
									)}{" "}
									{slot.status === "unavailable"
										? " (Unavailable)"
										: slot.status === "booked"
										? " (Booked)"
										: ""}
								</option>
							))}
						</select>
					</div>
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
					<div className="w-full flex flex-col gap-3">
						<label
							className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
							htmlFor="street_address">
							Street address *
						</label>
						<input
							onChange={handleInputChange}
							value={formData.street_address}
							type="text"
							id="street_address"
							required
							className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
						/>
					</div>
					<div className="w-full flex items-center gap-5">
						<div className="w-full flex flex-col gap-3">
							<label
								className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
								htmlFor="town_city">
								Town / City*
							</label>
							<input
								onChange={handleInputChange}
								value={formData.town_city}
								type="text"
								id="town_city"
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
								ZIP/Postal Code
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
					<div className="w-full flex flex-col gap-3">
						<label
							className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
							htmlFor="timezone">
							Timezone
						</label>
						<select
							onChange={handleInputChange}
							value={formData.timezone}
							id="timezone"
							className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular">
							<option value="America/New_York">Eastern Time (ET)</option>
							<option value="America/Chicago">Central Time (CT)</option>
							<option value="America/Denver">Mountain Time (MT)</option>
							<option value="America/Los_Angeles">Pacific Time (PT)</option>
							<option value="UTC">UTC/GMT</option>
						</select>
					</div>
					<div className="w-full flex flex-col gap-3">
						<label
							className="text-black paragraph leading-tight tracking-tight font-medium montserrat"
							htmlFor="notes">
							Notes
						</label>
						<textarea
							onChange={handleInputChange}
							value={formData.notes}
							id="notes"
							rows={3}
							className="border-[#C6C6C6] border-2 px-4 py-2 w-full outline-none paragraph font-MonstrateRegular"
						/>
					</div>

					<p className="text-black paragraph leading-normal tracking-tight font-MonstrateRegular">
						Your personal data will be used to process your order, support your
						experience throughout this website, and for other purposes described
						in our privacy policy.
					</p>
					<button
						type="submit"
						disabled={loading}
						className="w-fit bg-[#7a74ef] mt-4 flex items-center gap-2 btn transition-all duration-300 ease-in-out text-white px-4 py-4 capitalize montserrat paragraph leading-tight tracking-tight rounded-md">
						{loading ? (
							<div className="flex items-center gap-2">
								<Loader2 className="animate-spin mx-auto" /> Loading...
							</div>
						) : (
							"Book Now"
						)}
					</button>
				</form>
				<div className="w-1/2 border-l-2 border-black/10 pl-10 py-10">
					<PaymentElement />
				</div>
			</div>
		</div>
	);
}
