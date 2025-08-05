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
import { Button } from "@/components/ui/button";
import { TtimeslotsColumnProps } from "@/types";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertModal from "@/components/admin/alert-modal";
import { timeslotColumnSchema, TtimeslotColumnProps } from "@/schemas";

export default function TimeSlotsForm({
	slug,
	timeslot,
}: {
	slug: { id: string; new: string };
	timeslot: TtimeslotsColumnProps | null;
}) {
	const token = getToken("adminAuthToken");
	const timeslotsId = slug.id;
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const formatedTimeSlot = timeslot
		? {
				date: new Date(timeslot.date),
				start_time: timeslot.start_time,
				end_time: timeslot.end_time,
				status: timeslot.status,
		  }
		: null;

	const form = useForm<TtimeslotColumnProps>({
		resolver: zodResolver(timeslotColumnSchema),
		defaultValues: formatedTimeSlot || {
			date: new Date(),
			start_time: new Date(),
			end_time: new Date(),
			status: "",
		},
	});

	useEffect(() => {
		if (timeslot) {
			form.reset({
				date: new Date(timeslot.date),
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
		try {
			if (initialData) {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/timeslot/${timeslotsId}`,
					data,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
			} else {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/timeslot`,
					data,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
			}
			toast.success(toastMessage);
			router.push(`/dashboard/timeslots`);
			console.log(data);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	console.log(data);

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
										value={field.value?.toString()}
										onChange={field.onChange}
										type="date"
										min={new Date().toISOString().split("T")[0]}
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
										value={field.value?.toString()}
										onChange={field.onChange}
										type="time"
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
										value={field.value?.toString()}
										onChange={field.onChange}
										type="time"
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
