import { Metadata } from "next";
import BlogListings from "./components/blog";

export const metadata: Metadata = {
	title: "Mystic - Admin Blog",
	description: "Mystic Admin Blog",
};

export default function BlogPage() {
	return (
		<>
			<BlogListings />
		</>
	);
}
