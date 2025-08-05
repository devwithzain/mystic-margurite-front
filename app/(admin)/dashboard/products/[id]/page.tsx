import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import ProductForm from "../components/product-form";

export const metadata: Metadata = {
	title: "Admin Products - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Products",
};

export default async function ProductFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const product =
		id === "new"
			? null
			: await prismadb.products.findUnique({
					where: { id: BigInt(id) },
			  });

	return (
		<ProductForm
			product={product}
			slug={{ id, new: id === "new" ? "yes" : "no" }}
		/>
	);
}
