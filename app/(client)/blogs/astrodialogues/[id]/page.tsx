import { Metadata } from "next";
import { Marquee } from "@/components/ui/client";
import Hero from "@/container/astrodialogues-blog/hero";
import AstrodialogueBlogDetail from "@/container/astrodialogues-blog/astrodialogues";

export const metadata: Metadata = {
	title: "Astrodialogue Blog Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Astrodialogue Blog Detail",
};

export async function generateStaticParams() {
	const res = await fetch(
		"https://mysticmarguerite.com/new/backend/api/blogs",
		{
			next: { revalidate: 60 },
		},
	);
	const { blogs } = await res.json();

	const dynamicRoutes = blogs.map((blog: any) => ({
		id: blog.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function AstrodialoguesDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<Hero />
			<Marquee />
			<AstrodialogueBlogDetail id={id} />
		</>
	);
}
