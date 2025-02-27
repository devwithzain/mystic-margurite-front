import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "@/container/checkout/hero";
import Form from "@/container/checkout/form";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import StripeProvider from "@/providers/stripe-provider";

export default function Checkout() {
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
			<StripeProvider>
				<Form />
			</StripeProvider>
			<NewsLetter />
			<Footer />
		</>
	);
}
