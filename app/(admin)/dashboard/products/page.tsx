import { Metadata } from "next";
import ProductListings from "./components/product";

export const metadata: Metadata = {
	title: "Admin Products - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Products",
};

export default function ProductPage() {
	return (
		<>
			<ProductListings />
		</>
	);
}
