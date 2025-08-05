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
import { TcategoryProps } from "@/types";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Loader2, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertModal from "@/components/admin/alert-modal";
import { categoryColumnSchema, TcategoryColumnProps } from "@/schemas";

export default function CategoryForm({
	category,
	slug,
}: {
	category: TcategoryProps | null;
	slug: { id: string; new: string };
}) {
	const router = useRouter();
	const isNewCategory = slug.id === "new";
	const [open, setOpen] = useState(false);

	const form = useForm<TcategoryColumnProps>({
		resolver: zodResolver(categoryColumnSchema),
		defaultValues: {
			title: category?.title || "",
		},
	});

	const {
		formState: { isSubmitting },
	} = form;

	useEffect(() => {
		if (category) {
			form.reset({
				title: category.title,
			});
		}
	}, [category, form]);

	const action = category ? "Save changes" : "Create";
	const title = category ? "Edit Category" : "Create Category";
	const description = category ? "Edit Category" : "Add a new Category";
	const toastMessage = category ? "Category updated." : "Category created.";

	const onSubmit = async (data: TcategoryColumnProps) => {
		try {
			if (category && !isNewCategory) {
				await axios.put(
					`https://mysticmarguerite.com/new/backend/api/category/${slug.id}`,
					data,
				);
			} else {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/category`,
					data,
				);
			}
			toast.success(toastMessage);
			router.push(`/dashboard/categories`);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	const onDelete = async () => {
		try {
			if (!isNewCategory) {
				await axios.delete(
					`https://mysticmarguerite.com/new/backend/api/category/${slug.id}`,
				);
				router.push(`/dashboard/categories`);
				toast.success("Category deleted");
			}
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
				{category && !isNewCategory && (
					<Button
						disabled={isSubmitting}
						variant="destructive"
						size="sm"
						onClick={() => setOpen(true)}>
						<Trash className="h-4 w-4 text-white" />
					</Button>
				)}
			</div>
			<Separator />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4 w-full p-5">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input
										placeholder="Title"
										{...field}
									/>
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
