import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import { lifehealingItems } from "@/constants";
import { NewsLetter } from "@/components/ui/client";
import Hero from "@/container/lifehealing-detail/hero";
import LifeHealing from "@/container/lifehealing-detail/life-healing";

export async function generateStaticParams() {
	return lifehealingItems.map((item) => ({
		id: item.id.toString(),
	}));
}

export const metadata: Metadata = {
	title: "Life Alignment Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Life Alignment Detail",
};

export default function LifeHealingDetailPage({
	params,
}: {
	params: { id: string };
}) {
	return (
		<>
			<Hero />
			<Marquee />
			<LifeHealing slug={{ id: params.id }} />
			<NewsLetter />
		</>
	);
}
