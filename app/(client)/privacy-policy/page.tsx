import { Metadata } from "next";
import Hero from "@/container/privacy/hero";
import Marquee from "@/container/home/marquee";
import Privacy from "@/container/privacy/privacy";
import { NewsLetter } from "@/components/ui/client";

export const metadata: Metadata = {
	title: "Privacy Policy - Mystice Marguerite",
	description: "Mystice Marguerite - Privacy Policy",
};

export default function PrivacyPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Privacy />
			<NewsLetter />
		</>
	);
}
