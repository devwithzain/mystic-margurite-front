import { Metadata } from "next";
import Form from "@/container/contact/form";
import Hero from "@/container/contact/hero";
import Marquee from "@/container/home/marquee";

export const metadata: Metadata = {
	title: "Contact Us - Mystice Marguerite",
	description: "Mystice Marguerite - Contact Us",
};

export default function Contact() {
	return (
		<>
			<Hero />
			<Marquee />
			<Form />
		</>
	);
}
