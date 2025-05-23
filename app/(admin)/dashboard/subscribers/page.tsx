import { Metadata } from "next";
import Subscriber from "./components/subscriber";

export const metadata: Metadata = {
	title: "Admin Subscribers - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Subscribers",
};

export default function SubscriberPage() {
	return (
		<>
			<Subscriber />
		</>
	);
}
