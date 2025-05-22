import { Metadata } from "next";
import {
	Chapter,
	FAQs,
	Hero,
	Subs,
	Protagonist,
	Lore,
	Slider,
} from "@/container";

export const metadata: Metadata = {
	title: "Mystic",
	description: "Mystic",
};

export default function Landing() {
	return (
		<>
			<Hero />
			<Lore />
			<Slider />
			<Protagonist />
			<Chapter />
			<FAQs />
			<Subs />
		</>
	);
}
