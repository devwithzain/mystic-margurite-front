import { Metadata } from "next";
import { Marquee } from "@/components/ui/client";
import Hero from "@/container/lifehealing-detail/hero";
import LifeHealing from "@/container/lifehealing-detail/life-healing";

export const metadata: Metadata = {
	title: "Life Alignment Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Life Alignment Detail",
};

export default async function LifeHealingDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<Hero />
			<Marquee />
			<LifeHealing slug={{ id }} />
		</>
	);
}
