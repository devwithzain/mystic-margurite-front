"use client";
import { TbookingsProps } from "@/types";
import { useEffect, useState } from "react";
import getBookings from "@/actions/get-bookings";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/booking/columns";

export default function BookingsListings() {
	const [bookings, setBookings] = useState<TbookingsProps[]>([]);

	useEffect(() => {
		const fetchBookings = async () => {
			try {
				const response = await getBookings();
				setBookings(response);
			} catch (error: unknown) {
				console.error("Error fetching bookings:", error);
			}
		};

		fetchBookings();
	}, []);

	const formattedBookings = bookings.map((booking) => ({
		...booking,
		name: booking.booking_detail?.first_name,
		email: booking.booking_detail?.email || "N/A",
		phone_number: booking.booking_detail?.phone || "N/A",
		status: booking.status,
		price: booking.items.map((item) => item.service.price) || "N/A",
		created_at: booking.created_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex gap-4 flex-col">
				<div className="flex items-center justify-between">
					<Heading
						title={`Bookings (${formattedBookings.length})`}
						description="Manage Bookings for your website."
					/>
				</div>
				<Separator />
				<DataTable
					columns={columns}
					data={formattedBookings}
					searchKey="name"
				/>
			</div>
		</div>
	);
}
