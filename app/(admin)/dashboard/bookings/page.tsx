import { Metadata } from "next";
import TimeSlotsListings from "./components/bookings";

export const metadata: Metadata = {
	title: "Admin Booking - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Booking",
};

export default function BookingsPage() {
	return (
		<>
			<TimeSlotsListings />
		</>
	);
}
