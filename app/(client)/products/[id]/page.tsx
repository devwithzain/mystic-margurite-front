import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";
import Hero from "@/container/product-detail/hero";
import ProductDetail from "@/container/product-detail/product";

export const metadata: Metadata = {
	title: "Product Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Product Detail",
};

export default function ProductDetailPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<ProductDetail />
			<NewsLetter />
		</>
	);
}
