import { useEffect } from "react";
import Hero from "@/container/service/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Services from "@/container/service/services";

export default function ServicesPage() {
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
			<Services />
			<NewsLetter />
			<Footer />
		</>
	);
}
