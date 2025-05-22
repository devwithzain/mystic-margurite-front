import { Metadata } from "next";
import TimeSlotsListings from "./components/bookings";

export const metadata: Metadata = {
	title: "Mystic - Admin Bookings",
	description: "Mystic Admin Bookings",
};

export default function BookingsPage() {
	return (
		<>
			<TimeSlotsListings />
		</>
	);
}
