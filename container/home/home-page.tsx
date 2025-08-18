"use client";
import Navbar from "../../components/ui/client/navbar";
import Footer from "../../components/ui/client/footer";
import NewsLetter from "../../components/ui/client/news-letter";
import Hero from "@/container/home/hero";
import Form from "@/container/home/form";
import { Suspense } from "react";
import { Marquee } from "@/components/ui/client";
import Services from "@/container/home/services";
import Articles from "@/container/home/articles";
import Reviews from "@/container/home/testimonials";
import StackedCards from "@/container/home/stacke-cards";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<Hero />
			<Marquee />
			<Services />
			<Form />
			{/* <HoroScope /> */}
			<Reviews />
			<StackedCards />
			{/* <Video /> */}
			<Articles />
			<Suspense fallback={"Loading..."}>
				<NewsLetter />
			</Suspense>
			<Footer />
		</>
	);
}
