import Hero from "@/container/products/hero";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";
import Products from "@/container/products/products";

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
