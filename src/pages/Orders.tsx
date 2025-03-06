import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "@/container/order/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import OrderPage from "@/container/order/order";
import NewsLetter from "@/components/news-letter";

export default function Orders() {
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
			<OrderPage />
			<NewsLetter />
			<Footer />
		</>
	);
}
