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
import { Loader2, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import getProduct from "@/actions/get-product";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertModal from "@/components/admin/alert-modal";
import { productsColumnSchema, TproductsColumnProps } from "@/schemas";

export default function ProductForm({
	slug,
}: {
	slug: { id: string; new: string };
}) {
	const router = useRouter();
	const productId = slug.id;
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState<string[]>([]);
	const [imageError, setImageError] = useState<string>("");
	const [products, setProducts] = useState<TproductsColumnProps | null>(null);
	const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				if (productId) {
					const response = await getProduct(productId);
					if (response && response.product) {
						setProducts(response.product);

						if (response.product.image) {
							try {
								const imagePaths = JSON.parse(response.product.image);
								const imageUrls = imagePaths.map(
									(imgPath: string) =>
										`https://mysticmarguerite.com/new/backend/storage/${imgPath}`,
								);
								setImage(imageUrls);
							} catch (error) {
								console.error("Error parsing image field:", error);
								setImage([]);
							}
						} else {
							setImage([]);
						}
					}
				}
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, [productId]);

	const formatedProduct = products
		? {
				title: products.title,
				price: products.price,
				description: products.description,
		  }
		: null;

	const form = useForm<TproductsColumnProps>({
		resolver: zodResolver(productsColumnSchema),
		defaultValues: formatedProduct || {
			price: "",
			title: "",
			image: "",
			description: "",
		},
	});

	useEffect(() => {
		if (products) {
			form.reset({
				title: products.title,
				price: products.price,
				description: products.description,
				image: products.image || [],
			});
		}
	}, [products, form.reset, form]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setImageError("");
		const files = Array.from(e.target.files || []);

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
		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				const base64 = reader.result as string;
				newImages.push(base64);

				if (newImages.length === files.length) {
					setImage((prevImage) => [...prevImage, ...newImages]);
				}
			};
			reader.readAsDataURL(file);
		});
	};

	const handleDeleteImage = (imageUrl: string) => {
		setImage((prevImages) => prevImages.filter((img) => img !== imageUrl));
		setImagesToDelete((prev) => [...prev, imageUrl]);
	};

	const {
		formState: { isSubmitting },
	} = form;

	const initialData = formatedProduct;
	const action = initialData ? "Save changes" : "Create";
	const title = initialData ? "Edit product" : "Create product";
	const description = initialData ? "Edit product" : "Add a new product";
	const toastMessage = initialData ? "Product updated." : "Product created.";

	const onSubmits = async (data: TproductsColumnProps) => {
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
		if (fileInput && fileInput.files) {
			for (let i = 0; i < fileInput.files.length; i++) {
				formData.append("image[]", fileInput.files[i]);
			}
		}

		formData.append("images_to_delete", JSON.stringify(imagesToDelete));

		try {
			if (initialData) {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/product/${productId}`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
							"Accept": "application/json",
						},
					},
				);
			} else {
				await axios.post(
					`https://mysticmarguerite.com/new/backend/api/product`,
					formData,
					{
						headers: { "Content-Type": "multipart/form-data" },
					},
				);
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
			await axios.delete(
				`https://mysticmarguerite.com/new/backend/api/product/${productId}`,
			);
			router.push(`/dashboard/products`);
			toast.success("Product deleted");
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
					<div className="w-full flex items-center gap-2">
						{image.map((imageUrl, index) => (
							<div
								key={index}
								className="relative">
								<Image
									src={imageUrl}
									className="w-40 h-40 object-cover"
									alt={`Preview ${index}`}
									style={{ objectFit: "cover" }}
									width={250}
									height={250}
								/>
								{initialData && (
									<button
										type="button"
										onClick={() => handleDeleteImage(imageUrl)}
										className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-md">
										<Trash className="h-4 w-4" />
									</button>
								)}
							</div>
						))}
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
