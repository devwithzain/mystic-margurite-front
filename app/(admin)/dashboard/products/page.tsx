import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import ProductListings from "./components/product";

export const metadata: Metadata = {
	title: "Admin Products - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Products",
};

export default async function ProductPage() {
	const products = await prismadb.products.findMany({
		orderBy: {
			created_at: "desc",
		},
	});
	return (
		<>
			<ProductListings products={products} />
		</>
	);
}
