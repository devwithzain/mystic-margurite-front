import TimeslotForm from "../components/timeslot-form";

export async function generateStaticParams() {
	const res = await fetch(
		"https://mysticmarguerite.com/new/backend/api/timeslots",
		{
			cache: "no-store",
		},
	);
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
