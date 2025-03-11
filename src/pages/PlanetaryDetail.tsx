import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Hero from "@/container/planatery-detail/hero";
import Planetry from "@/container/planatery-detail/planetry";

export default function PlanetaryDetailPage() {
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
			<Planetry />
			<NewsLetter />
			<Footer />
		</>
	);
}
