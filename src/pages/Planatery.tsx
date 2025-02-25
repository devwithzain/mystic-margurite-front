import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "@/container/planatery/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Planetary from "@/container/planatery/planetry";

export default function Planatery() {
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
			<Planetary />
			<NewsLetter />
			<Footer />
		</>
	);
}
