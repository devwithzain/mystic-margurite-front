"use client";
import {
	bookingColumnSchema,
	TbookingFormData,
	TtimeslotColumnProps,
} from "@/schemas";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { TbookingsProps } from "@/types";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import getBooking from "@/actions/get-booking";
import Heading from "@/components/admin/heading";
import getTimeSlot from "@/actions/get-timeslot";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";

export default function BookingForm({
	slug,
}: {
	slug: { id: string; new: string };
}) {
	const bookingId = slug.id;
	const [bookings, setBookings] = useState<TbookingsProps>();
	const [timeslot, setTimeslot] = useState<TtimeslotColumnProps | null>(null);

	useEffect(() => {
		const fetchBookings = async () => {
			try {
				const response = await getBooking(bookingId);
				setBookings(response);
			} catch (err) {
				console.error("Error fetching bookings:", err);
			}
		};
		fetchBookings();
	}, [bookingId]);

	useEffect(() => {
		const fetchTimeSlot = async () => {
			try {
				if (bookings?.booking_detail?.time_slot_id) {
					const response = await getTimeSlot(
						bookings.booking_detail.time_slot_id,
					);
					setTimeslot(response.timeslot);
				}
			} catch (err) {
				console.error("Error fetching categories:", err);
			}
		};
		fetchTimeSlot();
	}, [bookings]);

	const form = useForm<TbookingFormData>({
		resolver: zodResolver(bookingColumnSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			phone: "",
			email: "",
			birth_date: "",
			birth_place: "",
			birth_time: "",
			country: "",
			meeting_link: "",
			notes: "",
			state: "",
			street_address: "",
			timezone: "",
			town_city: "",
			zip: "",
			status: "",
			price: "",
			start_time: "",
			end_time: "",
			date: "",
		},
	});

	useEffect(() => {
		if (bookings && timeslot) {
			form.reset({
				first_name: bookings.booking_detail?.first_name,
				last_name: bookings.booking_detail?.last_name,
				phone: bookings.booking_detail?.phone,
				email: bookings.booking_detail?.email,
				birth_date: bookings.booking_detail?.birth_date,
				birth_place: bookings.booking_detail?.birth_place,
				birth_time: bookings.booking_detail?.birth_time,
				country: bookings.booking_detail?.country,
				meeting_link: bookings.booking_detail?.meeting_link,
				notes: bookings.booking_detail?.notes,
				state: bookings.booking_detail?.state,
				street_address: bookings.booking_detail?.street_address,
				timezone: bookings.booking_detail?.timezone,
				town_city: bookings.booking_detail?.town_city,
				zip: bookings.booking_detail?.zip,
				meeintg_status: bookings.booking_detail?.status,
				status: bookings.status,
				price: bookings.items[0]?.service?.price,
				start_time: timeslot.start_time,
				end_time: timeslot.end_time,
				date: timeslot.date,
			});
		}
	}, [bookings, timeslot, form]);

	return (
		<>
			<div className="flex items-center justify-between px-5 py-2">
				<Heading
					title="Booking Overview"
					description="Booking Details"
				/>
			</div>
			<Separator />
			<Form {...form}>
				<form className="space-y-4 w-full p-5">
					<div className="w-full flex items-center justify-between gap-5">
						<FormField
							control={form.control}
							name="first_name"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="last_name"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="meeintg_status"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Meeting Status</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="w-full flex items-center justify-between gap-5">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="status"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Status</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="w-full flex items-center justify-between gap-5">
						<FormField
							control={form.control}
							name="birth_date"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Birth Date</FormLabel>
									<FormControl>
										<Input
											type="date"
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="birth_place"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Birth Place</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="birth_time"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Birth Time</FormLabel>
									<FormControl>
										<Input
											type="time"
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="w-full flex items-center justify-between gap-5">
						<FormField
							control={form.control}
							name="country"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Country</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="state"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>State</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="street_address"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Street Address</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="w-full flex items-center justify-between gap-5">
						<FormField
							control={form.control}
							name="town_city"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Town City</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="timezone"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Time Zone</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="zip"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Zip Code</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="w-full flex items-center justify-between gap-5">
						<FormField
							control={form.control}
							name="start_time"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Start Time</FormLabel>
									<FormControl>
										<Input
											type="time"
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="end_time"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>End Time</FormLabel>
									<FormControl>
										<Input
											type="time"
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="date"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Date</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="w-full flex items-center justify-between gap-5">
						<FormField
							control={form.control}
							name="meeting_link"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Meeting Link</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input
											type="number"
											min="0"
											step="0.01"
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>notes</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</form>
			</Form>
		</>
	);
}
