import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import TimeslotForm from "../components/timeslot-form";

export const metadata: Metadata = {
	title: "Admin TimeSlot - Mystic Marguerite",
	description: "Mystic Marguerite - Admin TimeSlot",
};

export default async function TimeSlotsFormPage({
	params,
}: {
	params: Promise<{ id: bigint | number | string }>;
}) {
	const { id } = await params;

	let timeslot = null;

	if (id !== "new") {
		timeslot = await prismadb.time_slots.findUnique({
			where: {
				id: id,
			},
		});
	}

	return (
		<TimeslotForm
			slug={{ id, new: id === "new" ? "yes" : "no" }}
			timeslot={timeslot}
		/>
	);
}
