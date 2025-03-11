import { useEffect } from "react";
import Hero from "@/container/planatery/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Planetary from "@/container/planatery/planetry";

export default function Planatery() {
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
			<Planetary />
			<NewsLetter />
			<Footer />
		</>
	);
}
