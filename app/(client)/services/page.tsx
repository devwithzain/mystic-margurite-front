import Hero from "@/container/service/hero";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";
import Services from "@/container/service/services";

export default function ServicesPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Services />
			<NewsLetter />
		</>
	);
}
