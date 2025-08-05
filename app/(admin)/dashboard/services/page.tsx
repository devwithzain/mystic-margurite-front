import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import ServiceListings from "./components/services";

export const metadata: Metadata = {
	title: "Admin Services - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Services",
};

export default async function ServicesPage() {
	const services = await prismadb.services.findMany({
		orderBy: {
			created_at: "desc",
		},
	});
	return (
		<>
			<ServiceListings services={services} />
		</>
	);
}
