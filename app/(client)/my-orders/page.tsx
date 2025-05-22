import Hero from "@/container/order/hero";
import Marquee from "@/container/home/marquee";
import OrderPage from "@/container/order/order";
import { NewsLetter } from "@/components/ui/client";

export default function Orders() {
	return (
		<>
			<Hero />
			<Marquee />
			<OrderPage />
			<NewsLetter />
		</>
	);
}
