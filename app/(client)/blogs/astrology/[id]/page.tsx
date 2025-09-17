import { Metadata } from "next";
import { Marquee } from "@/components/ui/client";
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
	return (
		<>
			<Hero />
			<Marquee />
			<BlogDetail id={id} />
		</>
	);
}
