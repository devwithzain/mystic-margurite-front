import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import BlogListings from "./components/blog";

export const metadata: Metadata = {
	title: "Admin Blog - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Blog",
};

export default async function BlogPage() {
	const blogs = await prismadb.blogs.findMany({
		orderBy: {
			created_at: "desc",
		},
	});
	return (
		<>
			<BlogListings blogs={blogs} />
		</>
	);
}
