import { Metadata } from "next";
import { Suspense } from "react";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";
import Hero from "@/container/planatery-detail/hero";
import Planetry from "@/container/planatery-detail/planetry";
import { planetryItems } from "@/constants";

export async function generateStaticParams() {
	return planetryItems.map((item) => ({
		id: item.id.toString(),
	}));
}

export const metadata: Metadata = {
	title: "Planetary Meditation Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Planetary Meditation Detail",
};

export default async function PlanetaryDetailPage({
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
				<Planetry slug={{ id }} />
			</Suspense>
			<NewsLetter />
		</>
	);
}
