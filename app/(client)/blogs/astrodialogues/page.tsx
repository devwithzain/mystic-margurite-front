import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/astrodialogues/hero";
import Astrodialogues from "@/container/astrodialogues/astrodialogues";

export const metadata: Metadata = {
	title: "Astrodialogues - Mystice Marguerite",
	description: "Mystice Marguerite - Astrodialogues",
};

export default function AstrodialoguesPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Astrodialogues />
		</>
	);
}
