import { Metadata } from "next";
import Hero from "@/container/order/hero";
import Marquee from "@/container/home/marquee";
import OrderPage from "@/container/order/order";

export const metadata: Metadata = {
	title: "My Orders - Mystice Marguerite",
	description: "Mystice Marguerite - My Orders",
};

export default function Orders() {
	return (
		<>
			<Hero />
			<Marquee />
			<OrderPage />
		</>
	);
}
