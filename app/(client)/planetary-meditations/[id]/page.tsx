import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";
import Hero from "@/container/planatery-detail/hero";
import Planetry from "@/container/planatery-detail/planetry";

export default function PlanetaryDetailPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Planetry />
			<NewsLetter />
		</>
	);
}
