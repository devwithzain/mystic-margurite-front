import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/lifehealing/hero";
import NewsLetter from "@/components/news-letter";
import LifeHealing from "@/container/lifehealing/lifehealing";

export default function LifeHealingPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Navbar />
			<Hero />
			<Marquee />
			<LifeHealing />
			<NewsLetter />
			<Footer />
		</>
	);
}
