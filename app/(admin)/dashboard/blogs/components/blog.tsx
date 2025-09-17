"use client";
import { Plus } from "lucide-react";
import getBlogs from "@/actions/get-blogs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TblogsColumnProps } from "@/types";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/blogs/columns";

export default function BlogListings() {
	const router = useRouter();
	const [blogs, setBlogs] = useState<TblogsColumnProps[]>([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await getBlogs();
				setBlogs(response.blogs);
			} catch (error: unknown) {
				console.error("Error fetching blogs:", error);
			}
		};

		fetchBlogs();
	}, []);

	const formatedBlog = blogs.map((blog) => ({
		id: blog.id,
		title: blog.title,
		description: blog.description,
		category: blog.category,
		image: blog.image,
		short_description: blog.short_description,
		created_at: blog.created_at,
		updated_at: blog.updated_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex items-center justify-between">
				<Heading
					title={`Blogs (${formatedBlog.length})`}
					description="Manage Blogs for your website."
				/>
				<Button
					className="flex items-center gap-x-2"
					onClick={() => router.push(`/dashboard/blogs/new`)}>
					<Plus className="w-4 h-4" />
					Add new
				</Button>
			</div>
			<Separator />
			<div className="flex gap-4 flex-col">
				<DataTable
					columns={columns}
					data={formatedBlog}
					searchKey="title"
				/>
			</div>
		</div>
	);
}
