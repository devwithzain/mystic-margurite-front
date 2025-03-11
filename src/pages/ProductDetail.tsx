import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import Hero from "@/container/product-detail/hero";
import Product from "@/container/product-detail/product";

export default function ProductDetailPage() {
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
			<Product />
			<NewsLetter />
			<Footer />
		</>
	);
}
