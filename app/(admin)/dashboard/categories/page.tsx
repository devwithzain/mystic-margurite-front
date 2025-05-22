import { Metadata } from "next";
import CategoryListings from "./components/category";

export const metadata: Metadata = {
	title: "Mystic - Admin Category",
	description: "Mystic Admin Category",
};

export default function CategoryPage() {
	return (
		<>
			<CategoryListings />
		</>
	);
}
