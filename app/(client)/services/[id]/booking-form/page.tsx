import Marquee from "@/container/home/marquee";
import Hero from "@/container/service-detail/hero";
import NewsLetter from "@/components/ui/client/news-letter";
import Service from "@/container/service-detail/service";

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
