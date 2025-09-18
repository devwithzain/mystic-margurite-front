import { Metadata } from "next";
import TimeslotForm from "../components/timeslot-form";

export const metadata: Metadata = {
	title: "Admin TimeSlot - Mystic Marguerite",
	description: "Mystic Marguerite - Admin TimeSlot",
};

export async function generateStaticParams() {
	const res = await fetch("http://127.0.0.1:8000/api/timeslots", {
		cache: "no-store",
	});
	const { timeslots } = await res.json();

	const dynamicRoutes = timeslots.map((timeslot: any) => ({
		id: timeslot.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function TimeSlotsFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <TimeslotForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
