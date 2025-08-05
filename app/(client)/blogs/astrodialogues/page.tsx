import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/astrodialogues/hero";
import Astrodialogues from "@/container/astrodialogues/astrodialogues";

export const metadata: Metadata = {
	title: "Astrodialogues - Mystice Marguerite",
	description: "Mystice Marguerite - Astrodialogues",
};

export default async function AstrodialoguesPage() {
	const blogs = await prismadb.blogs.findMany({
		where: {
			category: "Astro dialogues Blogs",
		},
		orderBy: {
			created_at: "asc",
		},
	});
	return (
		<>
			<Hero />
			<Marquee />
			<Astrodialogues blogs={blogs} />
		</>
	);
}
