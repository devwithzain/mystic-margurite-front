import { useEffect } from "react";
import Hero from "@/container/terms/hero";
import Terms from "@/container/terms/terms";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";

export default function TermsPage() {
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
			<Terms />
			<NewsLetter />
			<Footer />
		</>
	);
}
