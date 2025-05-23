import { Metadata } from "next";
import Hero from "@/container/thank/hero";
import Marquee from "@/container/home/marquee";

export const metadata: Metadata = {
	title: "Thank You - Mystice Marguerite",
	description: "Mystice Marguerite - Thank You",
};

export default function Thank() {
	return (
		<>
			<Hero />
			<Marquee />
		</>
	);
}
