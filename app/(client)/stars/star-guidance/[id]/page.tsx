import Marquee from "@/container/home/marquee";
import { NewsLetter } from "@/components/ui/client";
import Hero from "@/container/star-guidance-detail/hero";
import StarGuidance from "@/container/star-guidance-detail/star-guidance";

export default function StarGuidanceDetailPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<StarGuidance />
			<NewsLetter />
		</>
	);
}
