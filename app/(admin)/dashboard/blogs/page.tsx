import { Metadata } from "next";
import BlogListings from "./components/blog";

export const metadata: Metadata = {
	title: "Admin Blog - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Blog",
};

export default async function BlogPage() {
	return (
		<>
			<BlogListings />
		</>
	);
}
