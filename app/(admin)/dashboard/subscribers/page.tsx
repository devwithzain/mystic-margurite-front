import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import Subscriber from "./components/subscriber";

export const metadata: Metadata = {
	title: "Admin Subscribers - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Subscribers",
};

export default async function SubscriberPage() {
	const subscribers = await prismadb.newsletter_subscribers.findMany({
		orderBy: {
			created_at: "desc",
		},
	});
	return (
		<>
			<Subscriber subscribers={subscribers} />
		</>
	);
}
