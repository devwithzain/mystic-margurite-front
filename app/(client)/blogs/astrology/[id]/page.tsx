import { Metadata } from "next";
import Hero from "@/container/blog-detail/hero";
import { Marquee } from "@/components/ui/client";
import BlogDetail from "@/container/blog-detail/blog";

export const metadata: Metadata = {
	title: "Astrology Blog Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Astrology Blog Detail",
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
			<BlogDetail id={id} />
		</>
	);
}
