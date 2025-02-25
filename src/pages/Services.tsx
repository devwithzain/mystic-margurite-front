import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "@/container/service/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Services from "@/container/service/services";

export default function ServicesPage() {
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
			<Services />
			<NewsLetter />
			<Footer />
		</>
	);
}
