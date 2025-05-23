import { Metadata } from "next";
import Hero from "@/container/about/hero";
import Video from "@/container/about/video";
import Marquee from "@/container/home/marquee";
import Reading from "@/container/about/reading";
import Planetary from "@/container/about/planetry";
import NewsLetter from "@/components/ui/client/news-letter";

export const metadata: Metadata = {
	title: "About Us - Mystice Marguerite",
	description: "Mystice Marguerite - About Us",
};

export default function About() {
	return (
		<>
			<Hero />
			<Marquee />
			<Reading />
			<Video />
			<Planetary />
			<NewsLetter />
		</>
	);
}
