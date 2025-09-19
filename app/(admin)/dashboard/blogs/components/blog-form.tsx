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
import Image from "next/image";
import toast from "react-hot-toast";
import getBlog from "@/actions/get-blog";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Loader2, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { Textarea } from "@/components/ui/textarea";
import getCategories from "@/actions/get-categories";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertModal from "@/components/admin/alert-modal";
import TextEditor from "@/components/admin/text-editor";
import { blogsColumnSchema, TblogsColumnProps } from "@/schemas";

export default function BlogsForm({
	slug,
}: {
	slug: { id: string; new: string };
}) {
	const blogId = slug.id;
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState<string | null>(null);
	const [imageError, setImageError] = useState<string>("");
	const [previewImage, setPreviewImage] = useState<string | null>(null);
	const [categories, setCategories] = useState<{ id: number; title: string }[]>(
		[],
	);
	const [services, setBlog] = useState<TblogsColumnProps | null>(null);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const data = await getCategories();
				setCategories(data.categories);
			} catch (err) {
				console.error("Error fetching categories:", err);
			}
		};
		fetchCategories();
	}, []);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const response = await getBlog(blogId);
				setBlog(response.blog);
				setImage(response.blog.image);
			} catch (err) {
				console.error("Error fetching blog:", err);
			}
		};
		fetchBlog();
	}, [blogId]);

	const formatedBlog = services
		? {
				title: services.title,
				description: services.description,
				short_description: services.short_description,
				category: services.category,
				image: services.image || "",
		  }
		: null;

	const form = useForm<TblogsColumnProps>({
		resolver: zodResolver(blogsColumnSchema),
		defaultValues: formatedBlog || {
			title: "",
			description: "",
			short_description: "",
			category: "",
			image: "",
		},
	});

	useEffect(() => {
		if (services) {
			form.reset({
				title: services.title,
				description: services.description,
				short_description: services.short_description,
				category: services.category,
				image: services.image || "",
			});
		}
	}, [services, form, form.reset]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setImageError("");
		const file = e.target.files?.[0];
		const allowedTypes = [
			"image/jpeg",
			"image/png",
			"image/jpg",
			"image/gif",
			"image/svg+xml",
		];

		if (file) {
			if (!file.type.startsWith("image/")) {
				setImageError("The file must be an image");
				return;
			}

			if (!allowedTypes.includes(file.type)) {
				setImageError("Only jpeg, png, jpg, gif, svg images are allowed");
				return;
			}

			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result as string;
				setImage(base64);
				setPreviewImage(base64);
			};
			reader.readAsDataURL(file);
		}
	};

	const {
		formState: { isSubmitting },
	} = form;

	const initialData = formatedBlog;
	const action = initialData ? "Save changes" : "Create";
	const title = initialData ? "Edit blogs" : "Create blogs";
	const description = initialData ? "Edit blogs" : "Add a new blogs";
	const toastMessage = initialData ? "Blogs updated." : "Blogs created.";

	const dataURLtoBlob = (dataURL: string): Blob => {
		const byteString = atob(dataURL.split(",")[1]);
		const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
		const ab = new ArrayBuffer(byteString.length);
		const ia = new Uint8Array(ab);
		for (let i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		return new Blob([ab], { type: mimeString });
	};

	const onSubmits = async (data: TblogsColumnProps) => {
		if (!image) {
			setImageError("Image is required");
			return;
		}

		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("short_description", data.short_description);
		formData.append("description", data.description);
		formData.append("category", data.category);

		if (image.startsWith("data:")) {
			const blob = dataURLtoBlob(image);
			formData.append("image", blob, "image.png");
		}
		try {
			if (initialData) {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/blog/${blogId}`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
							"Accept": "Application/json",
						},
					},
				);
			} else {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/blog`,
					formData,
					{
						headers: { "Content-Type": "multipart/form-data" },
					},
				);
			}
			toast.success(toastMessage);
			router.push(`/dashboard/blogs`);
			router.refresh();
		} catch (error) {
			toast.error(
				axios.isAxiosError(error) && error.response?.data?.error
					? error.response.data.error
					: "An unexpected error occurred.",
			);
		}
	};

	const onDelete = async () => {
		try {
			await axios.delete(
				`https://mysticmarguerite.com/new/backend/api/blog/${blogId}`,
			);
			toast.success("Service deleted");
			router.refresh();
			router.push(`/dashboard/blogs`);
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
					<FormField
						control={form.control}
						name="short_description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Short Description</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Short Description"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<TextEditor
										value={field.value}
										onChange={(html) => {
											field.onChange(html);
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<FormControl>
									<select
										{...field}
										className="w-full p-2 border rounded">
										<option value="">Select a category</option>
										{categories.length > 0 ? (
											categories.map((category) => (
												<option
													key={category.id}
													value={category.title}>
													{category.title}
												</option>
											))
										) : (
											<option disabled>Please create a category first</option>
										)}
									</select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="image"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Image</FormLabel>
								<FormControl>
									<Input
										placeholder="Image"
										type="file"
										accept="image/jpeg,image/png,image/jpg,image/gif,image/svg+xml"
										onChange={(e) => {
											handleFileChange(e);
											field.onChange(e.target.files);
										}}
									/>
								</FormControl>
								{imageError && (
									<p className="text-red-500 text-sm">{imageError}</p>
								)}
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex items-center gap-2">
						{previewImage ? (
							<Image
								src={previewImage}
								alt="Preview"
								className="w-40 h-40 object-cover"
								width={250}
								height={250}
							/>
						) : (
							image && (
								<Image
									src={`https://mysticmarguerite.com/new/backend/${image}`}
									alt="Preview"
									className="w-40 h-40 object-cover"
									width={250}
									height={250}
								/>
							)
						)}
					</div>
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
