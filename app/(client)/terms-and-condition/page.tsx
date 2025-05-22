import Hero from "@/container/terms/hero";
import Terms from "@/container/terms/terms";
import Marquee from "@/container/home/marquee";
import { NewsLetter } from "@/components/ui/client";

export default function TermsPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Terms />
			<NewsLetter />
		</>
	);
}
