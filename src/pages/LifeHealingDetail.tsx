import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Hero from "@/container/lifehealing-detail/hero";
import LifeHealing from "@/container/lifehealing-detail/life-healing";

export default function LifeHealingDetailPage() {
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
