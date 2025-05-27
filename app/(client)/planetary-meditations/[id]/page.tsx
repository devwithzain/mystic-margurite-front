import { Metadata } from "next";
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

export default function PlanetaryDetailPage({
	params,
}: {
	params: { id: string };
}) {
	return (
		<>
			<Hero />
			<Marquee />
			<Planetry slug={{ id: params.id }} />
			<NewsLetter />
		</>
	);
}
