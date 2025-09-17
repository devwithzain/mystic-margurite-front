import { Metadata } from "next";
import Hero from "@/container/blog/hero";
import Blogs from "@/container/blog/blogs";
import { Marquee } from "@/components/ui/client";

export const metadata: Metadata = {
	title: "Astrology Blogs - Mystice Marguerite",
	description: "Mystice Marguerite - Astrology Blogs",
};

export default async function BlogsAstrology() {
	return (
		<>
			<Hero />
			<Marquee />
			<Blogs />
		</>
	);
}
