import { Metadata } from "next";
import ServiceListings from "./components/services";

export const metadata: Metadata = {
	title: "Admin Services - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Services",
};

export default async function ServicesPage() {
	return (
		<>
			<ServiceListings />
		</>
	);
}
