import { Metadata } from "next";
import { starGuidanceItems } from "@/constants";
import { Marquee } from "@/components/ui/client";
import Hero from "@/container/star-guidance-detail/hero";
import StarGuidance from "@/container/star-guidance-detail/star-guidance";

export const metadata: Metadata = {
	title: "Star Guidance Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Star Guidance Detail",
};

export async function generateStaticParams() {
	const dynamicRoutes = starGuidanceItems.map((item: any) => ({
		id: item.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function StarGuidanceDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<Hero />
			<Marquee />
			<StarGuidance slug={{ id }} />
		</>
	);
}
