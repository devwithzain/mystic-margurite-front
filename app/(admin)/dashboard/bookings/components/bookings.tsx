"use client";
import { TbookingsProps } from "@/types";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/booking/columns";

export default function BookingsListings({
	bookings,
}: {
	bookings: TbookingsProps[];
}) {
	const formattedBookings = bookings.map((booking) => ({
		...booking,
		name: booking.booking_details?.first_name,
		email: booking.booking_details?.email || "N/A",
		phone_number: booking.booking_details?.phone || "N/A",
		status: booking.status,
		price: booking.booking_items.map((item) => item.services.price) || "N/A",
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
