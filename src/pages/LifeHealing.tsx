import Lenis from "lenis";
import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/lifehealing/hero";
import NewsLetter from "@/components/news-letter";
import LifeHealing from "@/container/lifehealing/lifehealing";

export default function LifeHealingPage() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
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
