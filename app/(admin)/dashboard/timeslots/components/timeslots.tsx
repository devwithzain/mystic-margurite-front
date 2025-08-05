"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Heading from "@/components/admin/heading";
import { Button } from "@/components/ui/button";
import { TtimeslotsColumnProps } from "@/types";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/timeslots/columns";

export default function TimeSlotsListings({
	timeslots,
}: {
	timeslots: TtimeslotsColumnProps[];
}) {
	const router = useRouter();

	const formatedTimeSlots = timeslots.map((timeslot) => ({
		id: timeslot.id,
		date: timeslot.date,
		end_time: timeslot.end_time,
		start_time: timeslot.start_time,
		status: timeslot.status,
		created_at: timeslot.created_at,
		updated_at: timeslot.updated_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex items-center justify-between">
				<Heading
					title={`Time Slots (${formatedTimeSlots.length})`}
					description="Manage Time Slots for your Services."
				/>
				<Button
					className="flex items-center gap-x-2"
					onClick={() => router.push(`/dashboard/timeslots/new`)}>
					<Plus className="w-4 h-4" />
					Add new
				</Button>
			</div>
			<Separator />
			<div className="flex gap-4 flex-col">
				<DataTable
					columns={columns}
					data={formatedTimeSlots}
					searchKey="title"
				/>
			</div>
		</div>
	);
}
