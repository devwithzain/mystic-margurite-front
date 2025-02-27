import Lenis from "lenis";
import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Hero from "@/container/product-detail/hero";
import Product from "@/container/product-detail/product";

export default function ProductDetailPage() {
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
			<Product />
			<NewsLetter />
			<Footer />
		</>
	);
}
