"use client";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Loader2, Trash } from "lucide-react";
import Heading from "@/components/admin/heading";
import { Button } from "@/components/ui/button";
import getTimeSlot from "@/actions/get-timeslot";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertModal from "@/components/admin/alert-modal";
import { timeslotColumnSchema, TtimeslotColumnProps } from "@/schemas";

export default function TimeSlotsForm({
	slug,
}: {
	slug: { id: string; new: string };
}) {
	const token = getToken("adminAuthToken");
	const timeslotsId = slug.id;
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const [timeslot, setTimeslot] = useState<TtimeslotColumnProps | null>(null);

	useEffect(() => {
		const fetchTimeSlot = async () => {
			try {
				const response = await getTimeSlot(timeslotsId);
				setTimeslot(response.timeslot);
			} catch (err) {
				console.error("Error fetching categories:", err);
			}
		};
		fetchTimeSlot();
	}, [timeslotsId, token]);

	const formatedTimeSlot = timeslot
		? {
				date: timeslot.date,
				start_time: timeslot.start_time,
				end_time: timeslot.end_time,
				status: timeslot.status,
		  }
		: null;

	const form = useForm<TtimeslotColumnProps>({
		resolver: zodResolver(timeslotColumnSchema),
		defaultValues: formatedTimeSlot || {
			date: "",
			start_time: "",
			end_time: "",
			status: "",
		},
	});

	useEffect(() => {
		if (timeslot) {
			form.reset({
				date: timeslot.date,
				end_time: timeslot.end_time,
				start_time: timeslot.start_time,
				status: timeslot.status,
			});
		}
	}, [timeslot, form, form.reset]);

	const {
		formState: { isSubmitting },
	} = form;

	const initialData = formatedTimeSlot;
	const action = initialData ? "Save changes" : "Create";
	const title = initialData ? "Edit timeslot" : "Create timeslot";
	const description = initialData ? "Edit timeslot" : "Add a new timeslot";
	const toastMessage = initialData ? "Timeslot updated." : "Timeslot created.";

	const onSubmits = async (data: TtimeslotColumnProps) => {
		const formData = new FormData();
		formData.append("date", data.date);
		formData.append("end_time", data.end_time);
		formData.append("start_time", data.start_time);
		formData.append("status", data.status);
		console.log(data);
		try {
			if (initialData) {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/timeslot/${timeslotsId}`,
					formData,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
			} else {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/timeslot`,
					formData,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
			}
			toast.success(toastMessage);
			router.push(`/dashboard/timeslots`);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	const onDelete = async () => {
		try {
			await axios.delete(
				`https://mysticmarguerite.com/new/backend/api/timeslot/${timeslotsId}`,
			);
			router.push(`/dashboard/timeslots`);

			toast.success("Category deleted");
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		} finally {
			setOpen(false);
		}
	};

	return (
		<>
			<AlertModal
				isOpen={open}
				loading={isSubmitting}
				onClose={() => setOpen(false)}
				onConfirm={onDelete}
			/>
			<div className="flex items-center justify-between px-5 py-2">
				<Heading
					title={title}
					description={description}
				/>
				{initialData && (
					<Button
						disabled={isSubmitting}
						variant="destructive"
						size="sm"
						onClick={() => setOpen(true)}>
						<Trash className="h-4 w-4" />
					</Button>
				)}
			</div>
			<Separator />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmits)}
					className="space-y-4 w-full p-5">
					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Date</FormLabel>
								<FormControl>
									<Input
										placeholder="Date"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="start_time"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Start Time</FormLabel>
								<FormControl>
									<Input
										placeholder="Start Time"
										{...field}
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
							<FormItem>
								<FormLabel>End Time</FormLabel>
								<FormControl>
									<Input
										placeholder="End Time"
										{...field}
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
							<FormItem>
								<FormLabel>Status</FormLabel>
								<FormControl>
									<select
										defaultValue=""
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
										{...field}>
										<option
											value=""
											disabled>
											Select a status
										</option>
										<option value="available">Available</option>
										<option value="unavailable">Unavailable</option>
										<option value="booked">Booked</option>
									</select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						disabled={isSubmitting}
						type="submit">
						{isSubmitting ? (
							<Loader2 className="animate-spin mx-auto" />
						) : (
							action
						)}
					</Button>
				</form>
			</Form>
		</>
	);
}
