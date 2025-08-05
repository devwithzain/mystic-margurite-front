import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import CategoryForm from "../components/category-form";

export const metadata: Metadata = {
	title: "Admin Categories - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Categories",
};

export default async function CategoryFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const category =
		id === "new"
			? null
			: await prismadb.categories.findUnique({
					where: { id: BigInt(id) },
			  });

	return (
		<CategoryForm
			category={category}
			slug={{ id, new: id === "new" ? "yes" : "no" }}
		/>
	);
}
