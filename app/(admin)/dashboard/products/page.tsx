import { Metadata } from "next";
import ProductListings from "./components/product";

export const metadata: Metadata = {
	title: "Mystic - Admin Products",
	description: "Mystic Admin Products",
};

export default function ProductPage() {
	return (
		<>
			<ProductListings />
		</>
	);
}
