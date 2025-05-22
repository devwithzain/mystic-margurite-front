import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";
import Hero from "@/container/product-detail/hero";
import ProductDetail from "@/container/product-detail/product";

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
