import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/lifehealing/hero";
import NewsLetter from "@/components/ui/client/news-letter";
import LifeHealing from "@/container/lifehealing/lifehealing";

export const metadata: Metadata = {
	title: "Life Alignment - Mystice Marguerite",
	description: "Mystice Marguerite - Life Alignment",
};

export default function LifeHealingPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<LifeHealing />
			<NewsLetter />
		</>
	);
}
