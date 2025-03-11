import { useEffect } from "react";
import Hero from "@/container/order/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import OrderPage from "@/container/order/order";
import NewsLetter from "@/components/news-letter";

export default function Orders() {
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
			<OrderPage />
			<NewsLetter />
			<Footer />
		</>
	);
}
