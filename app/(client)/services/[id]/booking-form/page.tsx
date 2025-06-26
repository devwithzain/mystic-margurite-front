import { Metadata } from "next";
import { Suspense } from "react";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/booking-form/hero";
import Form from "@/container/booking-form/form";
import StripeProvider from "@/providers/stripe-provider";

export const metadata: Metadata = {
	title: "Booking - Mystice Marguerite",
	description: "Mystice Marguerite - Booking",
};

export async function generateStaticParams() {
	const res = await fetch(
		"https://mysticmarguerite.com/new/backend/api/services",
		{
			cache: "no-store",
		},
	);
	const { services } = await res.json();

	const dynamicRoutes = services.map((service: any) => ({
		id: service.id.toString(),
	}));

	return dynamicRoutes;
}

export default async function BookingForm({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Hero />
				<Marquee />
				<StripeProvider>
					<Form slug={{ id }} />
				</StripeProvider>
			</Suspense>
		</>
	);
}
