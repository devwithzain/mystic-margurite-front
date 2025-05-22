import Marquee from "@/container/home/marquee";
import { NewsLetter } from "@/components/ui/client";
import Hero from "@/container/lifehealing-detail/hero";
import LifeHealing from "@/container/lifehealing-detail/life-healing";

export default function LifeHealingDetailPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<LifeHealing />
			<NewsLetter />
		</>
	);
}
