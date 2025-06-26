import { Metadata } from "next";
import Hero from "@/container/cart/hero";
import CartPage from "@/container/cart/cart";
import Marquee from "@/container/home/marquee";

export const metadata: Metadata = {
	title: "Cart - Mystice Marguerite",
	description: "Mystice Marguerite - Cart",
};

export default function Cart() {
	return (
		<>
			<Hero />
			<Marquee />
			<CartPage />
		</>
	);
}
