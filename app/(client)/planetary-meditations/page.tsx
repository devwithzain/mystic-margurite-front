import Hero from "@/container/planatery/hero";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";
import Planetary from "@/container/planatery/planetry";

export default function Planatery() {
	return (
		<>
			<Hero />
			<Marquee />
			<Planetary />
			<NewsLetter />
		</>
	);
}
