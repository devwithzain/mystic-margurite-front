import { Metadata } from "next";
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
	return <BlogsForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
