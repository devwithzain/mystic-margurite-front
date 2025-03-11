import { useEffect } from "react";
import { Footer, Navbar } from "@/components";
import Marquee from "@/container/home/marquee";
import Blog from "@/container/blog-detail/blog";
import Hero from "@/container/blog-detail/hero";
import NewsLetter from "@/components/news-letter";

export default function BlogDetail() {
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
			<Blog />
			{/* <Comments /> */}
			<NewsLetter />
			<Footer />
		</>
	);
}
