import { Metadata } from "next";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";
import Hero from "@/container/product-detail/hero";
import ProductDetail from "@/container/product-detail/product";

export const metadata: Metadata = {
	title: "Product Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Product Detail",
};

export async function generateStaticParams() {
	const res = await fetch(
		"https://mysticmarguerite.com/new/backend/api/products",
		{
			cache: "no-store",
		},
	);
	const { products } = await res.json();

	const dynamicRoutes = products.map((product: any) => ({
		id: product.id.toString(),
	}));

	return dynamicRoutes;
}

export default async function ProductDetailPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	return (
		<>
			<Hero />
			<Marquee />
			<ProductDetail slug={{ id }} />
			<NewsLetter />
		</>
	);
}
