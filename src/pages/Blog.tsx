import { useEffect } from "react";
import Hero from "@/container/blog/hero";
import Blogs from "@/container/blog/blogs";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/news-letter";

export default function Blog() {
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
			<Blogs />
			<NewsLetter />
			<Footer />
		</>
	);
}
