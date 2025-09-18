import { Metadata } from "next";
import BlogsForm from "../components/blog-form";

export const metadata: Metadata = {
	title: "Admin Blog - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Blog",
};

export async function generateStaticParams() {
	const res = await fetch("http://127.0.0.1:8000/api/blogs", {
		cache: "no-store",
	});
	const { blogs } = await res.json();

	const dynamicRoutes = blogs.map((blog: any) => ({
		id: blog.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function BlogFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return <BlogsForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
