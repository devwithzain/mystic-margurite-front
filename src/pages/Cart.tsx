import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "@/container/cart/hero";
import CartPage from "@/container/cart/cart";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";

export default function Cart() {
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
			<CartPage />
			<NewsLetter />
			<Footer />
		</>
	);
}
