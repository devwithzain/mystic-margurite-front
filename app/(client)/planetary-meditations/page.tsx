import { Metadata } from "next";
import Hero from "@/container/planatery/hero";
import { Marquee } from "@/components/ui/client";
import Video from "@/container/planatery/video";
import Planetary from "@/container/planatery/planetry";

export const metadata: Metadata = {
	title: "Planetary Meditations - Mystice Marguerite",
	description: "Mystice Marguerite - Planetary Meditations",
};

export default function Planatery() {
	return (
		<>
			<Hero />
			<Marquee />
			<Planetary />
			<Video />
		</>
	);
}
