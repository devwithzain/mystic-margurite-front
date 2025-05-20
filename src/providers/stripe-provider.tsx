import React, { useEffect } from "react";
import { getToken } from "@/lib/get-token";
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
	const token = getToken();
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

				const total = data.reduce((total: number, item: any) => {
					const quantity = item.quantity || 1;
					const price = parseFloat(item.product?.price || "0");
					return total + quantity * price;
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
						},
						body: JSON.stringify({ amount: cartTotal * 100, currency: "usd" }),
					},
				);
				const data = await response.json();
				setClientSecret(data.clientSecret);
			} catch (error) {
				console.error("Error fetching clientSecret:", error);
			}
		};

		fetchClientSecret();
	}, [cartTotal]);

	if (!clientSecret) {
		return <div>Loading payment information...</div>;
	}

	return (
		<Elements
			stripe={stripePromise}
			options={{ clientSecret }}>
			{children}
		</Elements>
	);
}
