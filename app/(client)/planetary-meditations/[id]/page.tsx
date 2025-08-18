import { Metadata } from "next";
import { Marquee } from "@/components/ui/client";
import Hero from "@/container/planatery-detail/hero";
import Planetry from "@/container/planatery-detail/planetry";

export const metadata: Metadata = {
	title: "Planetary Meditation Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Planetary Meditation Detail",
};

export default async function PlanetaryDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<Hero />
			<Marquee />
			<Planetry slug={{ id }} />
		</>
	);
}
