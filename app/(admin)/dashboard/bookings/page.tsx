import { Metadata } from "next";
import BookingsListings from "./components/bookings";

export const metadata: Metadata = {
	title: "Admin Booking - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Booking",
};

export default async function BookingsPage() {
	return (
		<>
			<BookingsListings />
		</>
	);
}
