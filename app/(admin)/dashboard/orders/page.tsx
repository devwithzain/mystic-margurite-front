import { Metadata } from "next";
import Orders from "./components/orders";
import { prismadb } from "@/lib/prismadb";

export const metadata: Metadata = {
	title: "Admin Orders - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Orders",
};

export default async function OrdersPage() {
	const orders = await prismadb.orders.findMany({
		orderBy: {
			created_at: "desc",
		},
	});
	return (
		<>
			<Orders orders={orders} />
		</>
	);
}
