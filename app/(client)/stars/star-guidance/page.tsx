import Marquee from "@/container/home/marquee";
import Hero from "@/container/star-guidance/hero";
import NewsLetter from "@/components/ui/client/news-letter";
import StarGuidance from "@/container/star-guidance/star-guidance";

export default function StarGuidancePage() {
	return (
		<>
			<Hero />
			<Marquee />
			<StarGuidance />
			<NewsLetter />
		</>
	);
}
