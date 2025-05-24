import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/booking-form/hero";
import Form from "@/container/booking-form/form";
import { NewsLetter } from "@/components/ui/client";
import StripeProvider from "@/providers/stripe-provider";

export const metadata: Metadata = {
	title: "Booking - Mystice Marguerite",
	description: "Mystice Marguerite - Booking",
};

export default function BookingForm() {
	return (
		<>
			<Hero />
			<Marquee />
			<StripeProvider>
				<Form />
			</StripeProvider>
			<NewsLetter />
		</>
	);
}
