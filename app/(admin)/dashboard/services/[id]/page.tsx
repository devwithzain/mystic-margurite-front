import { Metadata } from "next";
import ServiceForm from "../components/service-form";

export const metadata: Metadata = {
	title: "Admin Service - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Service",
};

export default async function ServiceFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <ServiceForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
