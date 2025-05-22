import { Metadata } from "next";
import Orders from "./components/orders";

export const metadata: Metadata = {
	title: "Mystic - Admin Orders",
	description: "Mystic Admin Orders",
};

export default function OrdersPage() {
	return (
		<>
			<Orders />
		</>
	);
}
