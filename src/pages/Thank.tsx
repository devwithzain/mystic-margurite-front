import { useEffect } from "react";
import Hero from "@/container/thank/hero";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";

export default function Thank() {
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
			<Footer />
		</>
	);
}
