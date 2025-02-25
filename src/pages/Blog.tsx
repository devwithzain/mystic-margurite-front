import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "@/container/blog/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Categories from "@/container/blog/categories";

export default function Blog() {
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
			<Categories />
			<NewsLetter />
			<Footer />
		</>
	);
}
