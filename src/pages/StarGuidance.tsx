import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/star-guidance/hero";
import NewsLetter from "@/components/news-letter";
import StarGuidance from "@/container/star-guidance/star-guidance";

export default function StarGuidancePage() {
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
			<StarGuidance />
			<NewsLetter />
			<Footer />
		</>
	);
}
