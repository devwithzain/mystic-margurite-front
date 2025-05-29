import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import { starGuidanceItems } from "@/constants";
import { NewsLetter } from "@/components/ui/client";
import Hero from "@/container/star-guidance-detail/hero";
import StarGuidance from "@/container/star-guidance-detail/star-guidance";

export const metadata: Metadata = {
	title: "Star Guidance Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Star Guidance Detail",
};

export async function generateStaticParams() {
	return starGuidanceItems.map((item) => ({
		id: item.id.toString(),
	}));
}

export default async function StarGuidanceDetailPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	return (
		<>
			<Hero />
			<Marquee />
			<StarGuidance slug={{ id }} />
			<NewsLetter />
		</>
	);
}
