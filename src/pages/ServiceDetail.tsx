import Lenis from "lenis";
import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/service-detail/hero";
import NewsLetter from "@/components/news-letter";
import Service from "@/container/service-detail/service";

export default function ServiceDetailPage() {
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
			<Service />
			<NewsLetter />
			<Footer />
		</>
	);
}
