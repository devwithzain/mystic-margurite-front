import { Metadata } from "next";
import { Marquee } from "@/components/ui/client";
import Hero from "@/container/astrodialogues-blog/hero";
import AstrodialogueBlogDetail from "@/container/astrodialogues-blog/astrodialogues";

export const metadata: Metadata = {
	title: "Astrodialogue Blog Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Astrodialogue Blog Detail",
};

export default async function AstrodialoguesDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<Hero />
			<Marquee />
			<AstrodialogueBlogDetail id={id} />
		</>
	);
}
