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
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TproductColumnProps } from "@/types";
import { Loader2, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertModal from "@/components/admin/alert-modal";
import { productsColumnSchema, TproductsColumnProps } from "@/schemas";

export default function ProductForm({
	product,
	slug,
}: {
	product: TproductColumnProps | null;
	slug: { id: string; new: string };
}) {
	const router = useRouter();
	const isNewProduct = slug.id === "new";
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState<string[]>([]);
	const [imageError, setImageError] = useState<string>("");
	const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);

	useEffect(() => {
		if (product?.image) {
			try {
				const imagePaths = JSON.parse(product.image);
				const imageUrls = imagePaths.map(
					(imgPath: string) => `http://127.0.0.1:8000/storage/${imgPath}`,
				);
				setImage(imageUrls);
			} catch (error) {
				console.error("Error parsing image field:", error);
				setImage([]);
			}
		} else {
			setImage([]);
		}
	}, [product?.image]);

	const form = useForm<TproductsColumnProps>({
		resolver: zodResolver(productsColumnSchema),
		defaultValues: {
			title: product?.title || "",
			price: product?.price || "",
			description: product?.description || "",
			image: "",
		},
	});

	useEffect(() => {
		if (product) {
			form.reset({
				title: product.title,
				price: product.price,
				description: product.description,
				image: "",
			});
		}
	}, [product, form]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setImageError("");
		const files = Array.from(e.target.files || []);

		if (files.length === 0) return;

		const allowedTypes = [
			"image/jpeg",
			"image/png",
			"image/jpg",
			"image/gif",
			"image/svg+xml",
		];

		for (const file of files) {
			if (!file.type.startsWith("image/")) {
				setImageError("Each file must be an image");
				return;
			}

			if (!allowedTypes.includes(file.type)) {
				setImageError("Only jpeg, png, jpg, gif, svg images are allowed");
				return;
			}
		}

		const newImages: string[] = [];
		let processedCount = 0;

		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result as string;
				newImages.push(base64);
				processedCount++;

				if (processedCount === files.length) {
					setImage((prevImage) => [...prevImage, ...newImages]);
				}
			};
			reader.readAsDataURL(file);
		});
	};

	const handleDeleteImage = (imageUrl: string) => {
		setImage((prevImages) => prevImages.filter((img) => img !== imageUrl));

		if (imageUrl.startsWith("https://mysticmarguerite.com")) {
			setImagesToDelete((prev) => [...prev, imageUrl]);
		}
	};

	const {
		formState: { isSubmitting },
	} = form;

	const action = product ? "Save changes" : "Create";
	const title = product ? "Edit product" : "Create product";
	const description = product ? "Edit product" : "Add a new product";
	const toastMessage = product ? "Product updated." : "Product created.";

	const onSubmit = async (data: TproductsColumnProps) => {
		if (image.length === 0) {
			setImageError("At least one image is required");
			return;
		}

		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("description", data.description);
		formData.append("price", data.price);

		const fileInput = document.querySelector(
			'input[type="file"]',
		) as HTMLInputElement;

		if (fileInput?.files && fileInput.files.length > 0) {
			for (let i = 0; i < fileInput.files.length; i++) {
				formData.append("image[]", fileInput.files[i]);
			}
		}

		if (product && imagesToDelete.length > 0) {
			formData.append("images_to_delete", JSON.stringify(imagesToDelete));
		}

		try {
			if (product && !isNewProduct) {
				await axios.put(
					`http://127.0.0.1:8000/api/product/${slug.id}`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
							"Accept": "application/json",
						},
					},
				);
			} else {
				await axios.post(`http://127.0.0.1:8000/api/product`, formData, {
					headers: { "Content-Type": "multipart/form-data" },
				});
			}
			router.push(`/dashboard/products`);
			toast.success(toastMessage);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	const onDelete = async () => {
		try {
			if (!isNewProduct) {
				await axios.delete(`http://127.0.0.1:8000/api/product/${slug.id}`);
				router.push(`/dashboard/products`);
				toast.success("Product deleted");
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
				{product && !isNewProduct && (
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
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Description"
										{...field}
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
										placeholder="Price"
										type="number"
										min="0"
										step="0.01"
										{...field}
									/>
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
										multiple
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

					{image.length > 0 && (
						<div className="w-full">
							<FormLabel>Current Images</FormLabel>
							<div className="flex items-center gap-2 flex-wrap mt-2">
								{image.map((imageUrl, index) => (
									<div
										key={index}
										className="relative">
										<Image
											src={imageUrl}
											className="w-40 h-40 object-cover rounded-md"
											alt={`Preview ${index}`}
											width={160}
											height={160}
										/>
										<button
											type="button"
											onClick={() => handleDeleteImage(imageUrl)}
											className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white p-1 rounded-md transition-colors">
											<Trash className="h-4 w-4" />
										</button>
									</div>
								))}
							</div>
						</div>
					)}

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
