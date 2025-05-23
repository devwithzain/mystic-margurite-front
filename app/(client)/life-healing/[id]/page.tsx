import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import { NewsLetter } from "@/components/ui/client";
import Hero from "@/container/lifehealing-detail/hero";
import LifeHealing from "@/container/lifehealing-detail/life-healing";

export const metadata: Metadata = {
	title: "Life Alignment Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Life Alignment Detail",
};

export default function LifeHealingDetailPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<LifeHealing />
			<NewsLetter />
		</>
	);
}
