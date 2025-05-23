import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import { NewsLetter } from "@/components/ui/client";
import Hero from "@/container/star-guidance-detail/hero";
import StarGuidance from "@/container/star-guidance-detail/star-guidance";

export const metadata: Metadata = {
	title: "Star Guidance Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Star Guidance Detail",
};

export default function StarGuidanceDetailPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<StarGuidance />
			<NewsLetter />
		</>
	);
}
