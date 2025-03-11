import { useEffect } from "react";
import Hero from "@/container/checkout/hero";
import Form from "@/container/checkout/form";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";
import StripeProvider from "@/providers/stripe-provider";

export default function Checkout() {
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
			<StripeProvider>
				<Form />
			</StripeProvider>
			<NewsLetter />
			<Footer />
		</>
	);
}
