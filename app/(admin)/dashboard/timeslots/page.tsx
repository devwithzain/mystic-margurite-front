import { Metadata } from "next";
import TimeSlotsListings from "./components/timeslots";

export const metadata: Metadata = {
	title: "Admin TimeSlots - Mystic Marguerite",
	description: "Mystic Marguerite - Admin TimeSlots",
};

export default function TimeslotsPage() {
	return (
		<>
			<TimeSlotsListings />
		</>
	);
}
