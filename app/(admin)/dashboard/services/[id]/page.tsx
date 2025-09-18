import { Metadata } from "next";
import ServiceForm from "../components/service-form";

export const metadata: Metadata = {
	title: "Admin Service - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Service",
};

export async function generateStaticParams() {
	const res = await fetch("http://127.0.0.1:8000/api/services", {
		cache: "no-store",
	});
	const { services } = await res.json();

	const dynamicRoutes = services.map((service: any) => ({
		id: service.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function ServiceFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <ServiceForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
