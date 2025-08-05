import { Metadata } from "next";
import { Suspense } from "react";
import { prismadb } from "@/lib/prismadb";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/astrodialogues-blog/hero";
import AstrodialogueBlogDetail from "@/container/astrodialogues-blog/astrodialogues";

export const metadata: Metadata = {
	title: "Astrodialogue Blog Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Astrodialogue Blog Detail",
};

export default async function AstrodialoguesDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const blog = await prismadb.blogs.findUnique({
		where: {
			id: Number(id),
			category: "Astro dialogues Blogs",
		},
	});
	return (
		<>
			<Hero />
			<Marquee />
			<AstrodialogueBlogDetail blog={blog} />
		</>
	);
}
