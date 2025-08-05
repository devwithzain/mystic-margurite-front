import { Metadata } from "next";
import BookingsListings from "./components/bookings";
import { prismadb } from "@/lib/prismadb";

export const metadata: Metadata = {
	title: "Admin Booking - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Booking",
};

export default async function BookingsPage() {
	const bookings = await prismadb.bookings.findMany({
		include: {
			booking_details: true,
			booking_items: {
				include: {
					services: true,
				},
			},
		},
		orderBy: {
			created_at: "desc",
		},
	});
	return (
		<>
			<BookingsListings bookings={bookings} />
		</>
	);
}
