import { useEffect } from "react";
import Hero from "@/container/products/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Products from "@/container/products/products";

export default function ProductsPage() {
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
			<Products />
			<NewsLetter />
			<Footer />
		</>
	);
}
