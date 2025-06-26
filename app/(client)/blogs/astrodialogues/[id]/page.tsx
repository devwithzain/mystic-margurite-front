import { Metadata } from "next";
import { Suspense } from "react";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/astrodialogues-blog/hero";
import AstrodialogueBlogDetail from "@/container/astrodialogues-blog/astrodialogues";

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
	title: "Astrodialogue Blog Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Astrodialogue Blog Detail",
};

export default async function AstrodialoguesDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<Suspense fallback={"Loading..."}>
				<Hero />
				<Marquee />
				<AstrodialogueBlogDetail slug={{ id }} />
			</Suspense>
		</>
	);
}
