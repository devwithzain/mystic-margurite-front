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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Loader2, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import getCategory from "@/actions/get-category";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertModal from "@/components/admin/alert-modal";
import { categoryColumnSchema, TcategoryColumnProps } from "@/schemas";

export default function CategoryForm({
	slug,
}: {
	slug: { id: string; new: string };
}) {
	const router = useRouter();
	const categoryId = slug.id;
	const [open, setOpen] = useState(false);
	const [categories, setcategories] = useState<TcategoryColumnProps>();

	const form = useForm<TcategoryColumnProps>({
		resolver: zodResolver(categoryColumnSchema),
		defaultValues: categories || {
			title: "",
		},
	});

	const {
		formState: { isSubmitting },
	} = form;

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await getCategory(categoryId);
				setcategories(response.category);
				form.reset({
					title: response.category.title,
				});
			} catch (err) {
				console.error("Error fetching initial data:", err);
			}
		};
		fetchCategories();
	}, [categoryId, form]);

	const initialData = categories;
	const action = initialData ? "Save changes" : "Create";
	const title = initialData ? "Edit Category" : "Create Category";
	const description = initialData ? "Edit Category" : "Add a new Category";
	const toastMessage = initialData ? "Category updated." : "Category created.";

	const onSubmits = async (data: TcategoryColumnProps) => {
		try {
			if (initialData) {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/category/${categoryId}`,
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
			await axios.delete(
				`https://mysticmarguerite.com/new/backend/api/category/${categoryId}`,
			);
			router.push(`/dashboard/categories`);
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
