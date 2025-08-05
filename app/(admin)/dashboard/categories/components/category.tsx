"use client";
import { Plus } from "lucide-react";
import { TcategoryProps } from "@/types";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/categories/columns";

export default function CategoryListings({
	categories,
}: {
	categories: TcategoryProps[];
}) {
	const router = useRouter();

	const formatedCategories = categories.map((category) => ({
		id: category.id,
		title: category.title,
		created_at: category.created_at,
		updated_at: category.updated_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex items-center justify-between">
				<Heading
					title={`Categories (${formatedCategories.length})`}
					description="Manage Categories for your products."
				/>
				<Button
					className="flex items-center gap-x-2"
					onClick={() => router.push(`/dashboard/categories/new`)}>
					<Plus className="w-4 h-4" />
					Add new
				</Button>
			</div>
			<Separator />
			<div className="flex gap-4 flex-col">
				<DataTable
					columns={columns}
					data={formatedCategories}
					searchKey="title"
				/>
			</div>
		</div>
	);
}
