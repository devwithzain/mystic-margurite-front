import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/blog-detail/hero";
import BlogDetail from "@/container/blog-detail/blog";

export const metadata: Metadata = {
	title: "Astrology Blog Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Astrology Blog Detail",
};

export default async function BlogDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const blog = await prismadb.blogs.findUnique({
		where: {
			id: Number(id),
			NOT: {
				category: "Astro dialogues Blogs",
			},
		},
	});
	return (
		<>
			<Hero />
			<Marquee />
			<BlogDetail blog={blog} />
		</>
	);
}
