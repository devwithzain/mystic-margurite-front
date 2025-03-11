import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/service-detail/hero";
import NewsLetter from "@/components/news-letter";
import Service from "@/container/service-detail/service";

export default function ServiceDetailPage() {
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
			<Service />
			<NewsLetter />
			<Footer />
		</>
	);
}
