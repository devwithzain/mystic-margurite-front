import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import TimeSlotsListings from "./components/timeslots";

export const metadata: Metadata = {
	title: "Admin TimeSlots - Mystic Marguerite",
	description: "Mystic Marguerite - Admin TimeSlots",
};

export default async function TimeslotsPage() {
	const timeslots = await prismadb.time_slots.findMany();
	return (
		<>
			<TimeSlotsListings timeslots={timeslots} />
		</>
	);
}
