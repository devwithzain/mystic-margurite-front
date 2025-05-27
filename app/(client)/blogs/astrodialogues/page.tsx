import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/astrodialogues/hero";
import NewsLetter from "@/components/ui/client/news-letter";
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
			<NewsLetter />
		</>
	);
}
