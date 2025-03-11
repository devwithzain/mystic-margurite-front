import { useEffect } from "react";
import Hero from "@/container/cart/hero";
import CartPage from "@/container/cart/cart";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";

export default function Cart() {
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
			<CartPage />
			<NewsLetter />
			<Footer />
		</>
	);
}
