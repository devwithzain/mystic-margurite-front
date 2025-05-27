import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/astrodialogues-blog/hero";
import NewsLetter from "@/components/ui/client/news-letter";
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

export default function AstrodialoguesDetail({
	params,
}: {
	params: { id: string };
}) {
	return (
		<>
			<Hero />
			<Marquee />
			<AstrodialogueBlogDetail slug={{ id: params.id }} />
			<NewsLetter />
		</>
	);
}
