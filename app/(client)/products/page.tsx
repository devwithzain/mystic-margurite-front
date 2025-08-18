import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import Hero from "@/container/products/hero";
import { Marquee } from "@/components/ui/client";
import Products from "@/container/products/products";

export const metadata: Metadata = {
	title: "Products - Mystice Marguerite",
	description: "Mystice Marguerite - Products",
};

export default async function ProductsPage() {
	const products = await prismadb.products.findMany({
		orderBy: {
			created_at: "desc",
		},
	});
	return (
		<>
			<Hero />
			<Marquee />
			<Products products={products} />
		</>
	);
}
