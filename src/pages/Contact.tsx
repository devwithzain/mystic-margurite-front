import { useEffect } from "react";
import Form from "@/container/contact/form";
import Hero from "@/container/contact/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";

export default function Contact() {
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
			<Form />
			<NewsLetter />
			<Footer />
		</>
	);
}
