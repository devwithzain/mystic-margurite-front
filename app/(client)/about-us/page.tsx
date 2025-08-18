import { Metadata } from "next";
import Hero from "@/container/about/hero";
import { Marquee } from "@/components/ui/client";
import Reading from "@/container/about/reading";
import Planetary from "@/container/about/planetry";

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
			<Planetary />
		</>
	);
}
