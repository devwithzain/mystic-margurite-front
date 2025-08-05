"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { TproductsColumnProps } from "@/types";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/product/columns";

export default function ProductPage({
	products,
}: {
	products: TproductsColumnProps[];
}) {
	const router = useRouter();

	const formatedProduct = products.map((product) => ({
		id: product.id,
		title: product.title,
		price: product.price,
		description: product.description,
		image: product.image,
		created_at: product.created_at,
		updated_at: product.updated_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex items-center justify-between">
				<Heading
					title={`Products (${formatedProduct.length})`}
					description="Manage Products for your product page."
				/>
				<Button
					className="flex items-center gap-x-2"
					onClick={() => router.push(`/dashboard/products/new`)}>
					<Plus className="w-4 h-4" />
					Add new
				</Button>
			</div>
			<Separator />
			<div className="flex gap-4 flex-col">
				<DataTable
					columns={columns}
					data={formatedProduct}
					searchKey="title"
				/>
			</div>
		</div>
	);
}
