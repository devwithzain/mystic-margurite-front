"use client";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Heading from "@/components/admin/heading";
import { Button } from "@/components/ui/button";
import { TtimeslotsColumnProps } from "@/types";
import getTimeSlots from "@/actions/get-timeslots";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/timeslots/columns";

export default function TimeSlotsListings() {
	const token = getToken("adminAuthToken");
	const router = useRouter();
	const [timeslots, setTimeSlot] = useState<TtimeslotsColumnProps[]>([]);

	useEffect(() => {
		const fetchTimeSlots = async () => {
			try {
				const response = await getTimeSlots(token);
				setTimeSlot(response.timeslots);
			} catch (err) {
				console.error("Error fetching timeslots:", err);
			}
		};
		fetchTimeSlots();
	}, [token]);

	const formatedTimeSlots = timeslots.map((timeslot) => ({
		id: timeslot.id,
		date: timeslot.date,
		end_time: timeslot.end_time,
		start_time: timeslot.start_time,
		status: timeslot.status,
		user_id: timeslot.user_id,
		created_at: format(timeslot.created_at ?? new Date(), "MMMM do, yyyy"),
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
