import { Metadata } from "next";
import TimeSlotsListings from "./components/timeslots";

export const metadata: Metadata = {
	title: "Mystic - Admin Timeslots",
	description: "Mystic Admin Timeslots",
};

export default function TimeslotsPage() {
	return (
		<>
			<TimeSlotsListings />
		</>
	);
}
