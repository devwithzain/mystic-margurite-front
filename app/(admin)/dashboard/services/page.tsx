import { Metadata } from "next";
import ServiceListings from "./components/services";

export const metadata: Metadata = {
	title: "Mystic - Admin Services",
	description: "Mystic Admin Services",
};

export default function ServicesPage() {
	return (
		<>
			<ServiceListings />
		</>
	);
}
