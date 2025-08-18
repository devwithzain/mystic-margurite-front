import { Metadata } from "next";
import Hero from "@/container/thank/hero";
import { Marquee } from "@/components/ui/client";

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
