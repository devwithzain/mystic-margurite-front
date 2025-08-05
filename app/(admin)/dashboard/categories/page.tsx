import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import CategoryListings from "./components/category";

export const metadata: Metadata = {
	title: "Admin Categories - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Categories",
};

export default async function CategoryPage() {
	const categories = await prismadb.categories.findMany({
		orderBy: {
			created_at: "desc",
		},
	});
	return (
		<>
			<CategoryListings categories={categories} />
		</>
	);
}
