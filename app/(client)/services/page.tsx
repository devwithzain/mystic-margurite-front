import { Metadata } from "next";
import Hero from "@/container/service/hero";
import Marquee from "@/container/home/marquee";
import Services from "@/container/service/services";

export const metadata: Metadata = {
	title: "Services - Mystice Marguerite",
	description: "Mystice Marguerite - Services",
};

export default function ServicesPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Services />
		</>
	);
}
