import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
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
	const service =
		id === "new"
			? null
			: await prismadb.services.findUnique({
					where: { id: BigInt(id) },
			  });

	return (
		<ServiceForm
			service={service}
			slug={{ id, new: id === "new" ? "yes" : "no" }}
		/>
	);
}
