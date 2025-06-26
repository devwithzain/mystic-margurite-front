import { Metadata } from "next";
import Hero from "@/container/blog/hero";
import Blogs from "@/container/blog/blogs";
import Marquee from "@/container/home/marquee";

export const metadata: Metadata = {
	title: "Astrology Blogs - Mystice Marguerite",
	description: "Mystice Marguerite - Astrology Blogs",
};

export default function BlogsAstrology() {
	return (
		<>
			<Hero />
			<Marquee />
			<Blogs />
		</>
	);
}
