import { useEffect } from "react";
import Hero from "@/container/stars/hero";
import Slider from "@/container/stars/slider";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";

export default function StarsAndPlanets() {
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
			<Slider />
			<NewsLetter />
			<Footer />
		</>
	);
}
