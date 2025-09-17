import { Metadata } from "next";
import Hero from "@/container/cart/hero";
import CartPage from "@/container/cart/cart";
import { Marquee } from "@/components/ui/client";

export const metadata: Metadata = {
	title: "Cart - Mystice Marguerite",
	description: "Mystice Marguerite - Cart",
};

export default async function Cart() {
	return (
		<>
			<Hero />
			<Marquee />
			<CartPage />
		</>
	);
}
