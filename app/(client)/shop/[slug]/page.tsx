import { Metadata } from "next";
import { More, ProductDetail } from "@/container";

export const metadata: Metadata = {
	title: "Product Detail - Mystic",
	description: "Mystic",
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
		slug: product.id.toString(),
	}));

	return [...dynamicRoutes, { slug: "new" }];
}

export default async function ProductDetailPage({
	params,
}: {
	params: Promise<{ slug: bigint }>;
}) {
	const productId = (await params).slug;

	return (
		<>
			<ProductDetail productId={productId} />
			<More />
		</>
	);
}
