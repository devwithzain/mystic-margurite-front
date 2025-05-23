import { Metadata } from "next";
import Orders from "./components/orders";

export const metadata: Metadata = {
	title: "Admin Orders - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Orders",
};

export default function OrdersPage() {
	return (
		<>
			<Orders />
		</>
	);
}
