import { Metadata } from "next";
import Hero from "@/container/products/hero";
import { Marquee } from "@/components/ui/client";
import Products from "@/container/products/products";

export const metadata: Metadata = {
	title: "Products - Mystice Marguerite",
	description: "Mystice Marguerite - Products",
};

export default async function ProductsPage() {
	return (
		<>
			<Hero />
			<Marquee />
			<Products />
		</>
	);
}
