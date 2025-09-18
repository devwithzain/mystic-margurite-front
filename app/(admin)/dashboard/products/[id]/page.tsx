import { Metadata } from "next";
import ProductForm from "../components/product-form";

export const metadata: Metadata = {
	title: "Admin Products - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Products",
};

export async function generateStaticParams() {
	const res = await fetch("http://127.0.0.1:8000/api/products", {
		cache: "no-store",
	});
	const { products } = await res.json();

	const dynamicRoutes = products.map((product: any) => ({
		id: product.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function ProductFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <ProductForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
