import Lenis from "lenis";
import { useEffect } from "react";
import Form from "@/container/contact/form";
import Hero from "@/container/contact/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";

export default function Contact() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
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
