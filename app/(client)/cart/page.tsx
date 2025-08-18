import { Metadata } from "next";
import Hero from "@/container/cart/hero";
import CartPage from "@/container/cart/cart";
import { Marquee } from "@/components/ui/client";
import { prismadb } from "@/lib/prismadb";
import { getUserData } from "@/lib/get-user-data";

export const metadata: Metadata = {
	title: "Cart - Mystice Marguerite",
	description: "Mystice Marguerite - Cart",
};

export default async function Cart() {
	const token = await getUserData("authToken");
	const carts = await prismadb.carts.findMany();
	console.log(carts);
	return (
		<>
			<Hero />
			<Marquee />
			<CartPage />
		</>
	);
}
