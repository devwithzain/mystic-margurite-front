import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "@/container/products/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Products from "@/container/products/products";

export default function ProductsPage() {
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
			<Products />
			<NewsLetter />
			<Footer />
		</>
	);
}
