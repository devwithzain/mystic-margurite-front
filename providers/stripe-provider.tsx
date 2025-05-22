"use client";
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { getToken } from "@/lib/get-token";
import { TcartColumnProps } from "@/types";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
	"pk_test_51PQnA4Bl1kKDHG46wmfNhBF2OmIp4OgFFIjwZLPQ3fjJ07Iq1FDHJZzZTUesP74qaRfxQj3befQVk2bry4I8Xv4W00GvQ3saqV",
);

export default function StripeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const token = getToken("authToken");
	const [clientSecret, setClientSecret] = React.useState("");
	const [cartTotal, setCartTotal] = React.useState<number>(0);

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

				const total = data.reduce((total: number, item: TcartColumnProps) => {
					return total + item.product.price * (item.quantity ?? 1);
				}, 0);

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

	useEffect(() => {
		const fetchClientSecret = async () => {
			try {
				const response = await fetch(
					"https://mysticmarguerite.com/new/backend/api/payment-intent",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Accept": "application/json",
							"Authorization": `Bearer ${token}`,
						},
						body: JSON.stringify({
							amount: Math.round(cartTotal * 100),
							currency: "usd",
						}),
					},
				);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setClientSecret(data.clientSecret);
				console.log(data.clientSecret);
			} catch (error) {
				console.error("Error fetching clientSecret:", error);
			}
		};

		if (cartTotal > 0) {
			fetchClientSecret();
		}
	}, [cartTotal, token]);

	if (!clientSecret) {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				<Loader2 className="h-10 w-10 animate-spin text-gray-500" />
			</div>
		);
	}

	return (
		<Elements
			stripe={stripePromise}
			options={{ clientSecret }}>
			{children}
		</Elements>
	);
}
