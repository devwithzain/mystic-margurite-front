import { Metadata } from "next";
import Hero from "@/container/products/hero";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";
import Products from "@/container/products/products";

export const metadata: Metadata = {
	title: "Products - Mystice Marguerite",
	description: "Mystice Marguerite - Products",
};

export default function ProductsPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Products />
			<NewsLetter />
		</>
	);
}
