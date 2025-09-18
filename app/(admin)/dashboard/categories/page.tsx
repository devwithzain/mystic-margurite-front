import { Metadata } from "next";
import CategoryListings from "./components/category";

export const metadata: Metadata = {
	title: "Admin Categories - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Categories",
};

export default async function CategoryPage() {
	return (
		<>
			<CategoryListings />
		</>
	);
}
