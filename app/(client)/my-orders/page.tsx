import { Metadata } from "next";
import Hero from "@/container/order/hero";
import OrderPage from "@/container/order/order";
import { Marquee } from "@/components/ui/client";

export const metadata: Metadata = {
	title: "My Orders - Mystice Marguerite",
	description: "Mystice Marguerite - My Orders",
};

export default async function Orders() {
	return (
		<>
			<Hero />
			<Marquee />
			<OrderPage />
		</>
	);
}
