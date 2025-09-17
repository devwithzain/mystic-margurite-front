import { Metadata } from "next";
import { Marquee } from "@/components/ui/client";
import Hero from "@/container/product-detail/hero";
import ProductDetail from "@/container/product-detail/product";

export const metadata: Metadata = {
	title: "Product Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Product Detail",
};

export default async function ProductDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<>
			<Hero />
			<Marquee />
			<ProductDetail id={id} />
		</>
	);
}
