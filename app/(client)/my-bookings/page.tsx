import { Metadata } from "next";
import Hero from "@/container/bookings/hero";
import Marquee from "@/container/home/marquee";
import BookingPage from "@/container/bookings/booking";

export const metadata: Metadata = {
	title: "My Bookings - Mystice Marguerite",
	description: "Mystice Marguerite - My Bookings",
};

export default function Bookings() {
	return (
		<>
			<Hero />
			<Marquee />
			<BookingPage />
		</>
	);
}
