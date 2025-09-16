import { Metadata } from "next";
import { Marquee } from "@/components/ui/client";
import Hero from "@/container/booking-form/hero";
import Form from "@/container/booking-form/form";
import StripeProvider from "@/providers/stripe-provider";

export const metadata: Metadata = {
	title: "Booking - Mystice Marguerite",
	description: "Mystice Marguerite - Booking",
};

export default async function BookingForm({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<Hero />
			<Marquee />
			<StripeProvider serviceId={id}>
				<Form slug={{ id }} />
			</StripeProvider>
		</>
	);
}
