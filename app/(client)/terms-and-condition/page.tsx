import { Metadata } from "next";
import Hero from "@/container/terms/hero";
import Terms from "@/container/terms/terms";
import Marquee from "@/container/home/marquee";

export const metadata: Metadata = {
	title: "Terms and Conditions - Mystice Marguerite",
	description: "Mystice Marguerite - Terms and Conditions",
};

export default function TermsPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Terms />
		</>
	);
}
