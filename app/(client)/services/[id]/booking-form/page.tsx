import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import Hero from "@/container/service-detail/hero";
import NewsLetter from "@/components/ui/client/news-letter";
import Service from "@/container/service-detail/service";

export const metadata: Metadata = {
	title: "Service Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Service Detail",
};

export default function ServiceDetailPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Service />
			<NewsLetter />
		</>
	);
}
