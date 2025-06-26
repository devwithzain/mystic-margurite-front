import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/star-guidance/hero";
import StarGuidance from "@/container/star-guidance/star-guidance";

export const metadata: Metadata = {
	title: "Stars Guidance - Mystice Marguerite",
	description: "Mystice Marguerite - Stars Guidance",
};

export default function StarGuidancePage() {
	return (
		<>
			<Hero />
			<Marquee />
			<StarGuidance />
		</>
	);
}
