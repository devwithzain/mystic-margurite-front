import { Metadata } from "next";
import Subscriber from "./components/subscriber";

export const metadata: Metadata = {
	title: "Mystic - Admin Subscribers",
	description: "Mystic Admin Subscribers",
};

export default function SubscriberPage() {
	return (
		<>
			<Subscriber />
		</>
	);
}
