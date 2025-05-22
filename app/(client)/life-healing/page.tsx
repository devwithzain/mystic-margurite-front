import Marquee from "@/container/home/marquee";
import Hero from "@/container/lifehealing/hero";
import NewsLetter from "@/components/ui/client/news-letter";
import LifeHealing from "@/container/lifehealing/lifehealing";

export default function LifeHealingPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<LifeHealing />
			<NewsLetter />
		</>
	);
}
