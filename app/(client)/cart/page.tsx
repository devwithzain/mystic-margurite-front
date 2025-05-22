import Hero from "@/container/cart/hero";
import CartPage from "@/container/cart/cart";
import Marquee from "@/container/home/marquee";
import { NewsLetter } from "@/components/ui/client";

export default function Cart() {
	return (
		<>
			<Hero />
			<Marquee />
			<CartPage />
			<NewsLetter />
		</>
	);
}
