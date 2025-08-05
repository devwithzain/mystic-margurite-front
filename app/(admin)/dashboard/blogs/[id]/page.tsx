import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import BlogsForm from "../components/blog-form";

export const metadata: Metadata = {
	title: "Admin Blog - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Blog",
};

export default async function BlogFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const blog = await prismadb.blogs.findUnique({
		where: {
			id: Number(id),
		},
	});
	return (
		<BlogsForm
			blog={blog}
			slug={{ id, new: id === "new" ? "yes" : "no" }}
		/>
	);
}
