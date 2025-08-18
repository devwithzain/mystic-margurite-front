import { Metadata } from "next";
import Hero from "@/container/order/hero";
import { prismadb } from "@/lib/prismadb";
import OrderPage from "@/container/order/order";
import { Marquee } from "@/components/ui/client";

export const metadata: Metadata = {
	title: "My Orders - Mystice Marguerite",
	description: "Mystice Marguerite - My Orders",
};

export default async function Orders() {
	const orders = await prismadb.orders.findMany({
		include: {
			users: true,
			order_items: {
				include: {
					orders: true,
					products: true,
				},
			},
		},
		orderBy: {
			created_at: "desc",
		},
	});
	return (
		<>
			<Hero />
			<Marquee />
			<OrderPage />
		</>
	);
}
