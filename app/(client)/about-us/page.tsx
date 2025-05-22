"use client";
import Hero from "@/container/about/hero";
import Video from "@/container/about/video";
import Marquee from "@/container/home/marquee";
import Reading from "@/container/about/reading";
import NewsLetter from "@/components/ui/client/news-letter";
import Planetary from "@/container/about/planetry";

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
