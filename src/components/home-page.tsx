import { useEffect } from "react";
import NewsLetter from "./news-letter";
import Hero from "@/container/home/hero";
import Form from "@/container/home/form";
import Video from "@/container/home/video";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import Services from "@/container/home/services";
import Articles from "@/container/home/articles";
import Reviews from "@/container/home/testimonials";
import HoroScope from "@/container/home/horo-scope";
import StackedCards from "@/container/home/stacke-cards";

export default function HomePage() {
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
			<Form />
			<HoroScope />
			<Reviews />
			<StackedCards />
			<Video />
			<Articles />
			<NewsLetter />
			<Footer />
		</>
	);
}
