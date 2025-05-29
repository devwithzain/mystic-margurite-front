import { Metadata } from "next";
import { Suspense } from "react";
import Marquee from "@/container/home/marquee";
import BlogDetail from "@/container/blog-detail/blog";
import Hero from "@/container/blog-detail/hero";
import NewsLetter from "@/components/ui/client/news-letter";

export async function generateStaticParams() {
	const res = await fetch(
		"https://mysticmarguerite.com/new/backend/api/blogs",
		{
			cache: "no-store",
		},
	);
	const { blogs } = await res.json();

	const dynamicRoutes = blogs.map((blog: any) => ({
		id: blog.id.toString(),
	}));

	return dynamicRoutes;
}

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
	return (
		<>
			<Hero />
			<Marquee />
			<Suspense fallback={<div>Loading...</div>}>
				<BlogDetail slug={{ id }} />
			</Suspense>
			<NewsLetter />
		</>
	);
}
