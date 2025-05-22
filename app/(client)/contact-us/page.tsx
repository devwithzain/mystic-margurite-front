import Form from "@/container/contact/form";
import Hero from "@/container/contact/hero";
import Marquee from "@/container/home/marquee";
import { NewsLetter } from "@/components/ui/client";

export default function Contact() {
	return (
		<>
			<Hero />
			<Marquee />
			<Form />
			<NewsLetter />
		</>
	);
}
