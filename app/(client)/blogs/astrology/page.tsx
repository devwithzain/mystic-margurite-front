import { Metadata } from "next";
import Hero from "@/container/blog/hero";
import { prismadb } from "@/lib/prismadb";
import Blogs from "@/container/blog/blogs";
import { Marquee } from "@/components/ui/client";

export const metadata: Metadata = {
	title: "Astrology Blogs - Mystice Marguerite",
	description: "Mystice Marguerite - Astrology Blogs",
};

export default async function BlogsAstrology() {
	const blogs = await prismadb.blogs.findMany({
		where: {
			NOT: {
				category: "Astro dialogues Blogs",
			},
		},
		orderBy: {
			created_at: "asc",
		},
	});
	return (
		<>
			<Hero />
			<Marquee />
			<Blogs blogs={blogs} />
		</>
	);
}
