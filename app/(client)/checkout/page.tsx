import Hero from "@/container/checkout/hero";
import Form from "@/container/checkout/form";
import Marquee from "@/container/home/marquee";
import { NewsLetter } from "@/components/ui/client";
import StripeProvider from "@/providers/stripe-provider";

export default function Checkout() {
	return (
		<>
			<Hero />
			<Marquee />
			<StripeProvider>
				<Form />
			</StripeProvider>
			<NewsLetter />
		</>
	);
}
