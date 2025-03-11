import { useEffect } from "react";
import Hero from "@/container/about/hero";
import Video from "@/container/about/video";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import Reading from "@/container/about/reading";
import Planetary from "@/container/about/planetry";
import NewsLetter from "@/components/news-letter";

export default function About() {
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
			<Reading />
			<Video />
			<Planetary />
			<NewsLetter />
			<Footer />
		</>
	);
}
