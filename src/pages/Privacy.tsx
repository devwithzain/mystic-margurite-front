import { useEffect } from "react";
import Hero from "@/container/privacy/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Privacy from "@/container/privacy/privacy";

export default function PrivacyPage() {
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
			<Privacy />
			<NewsLetter />
			<Footer />
		</>
	);
}
