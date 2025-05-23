import { Metadata } from "next";
import BookingForm from "../components/bookings-form";

export const metadata: Metadata = {
	title: "Admin Booking - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Booking",
};

export async function generateStaticParams() {
	const res = await fetch(
		"https://mysticmarguerite.com/new/backend/api/bookings",
		{
			cache: "no-store",
		},
	);
	const { bookings } = await res.json();

	const dynamicRoutes = bookings.map((booking: any) => ({
		id: booking.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function ServiceFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return <BookingForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
