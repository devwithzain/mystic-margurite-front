import { Metadata } from "next";
import { Suspense } from "react";
import Marquee from "@/container/home/marquee";
import { lifehealingItems } from "@/constants";
import { NewsLetter } from "@/components/ui/client";
import Hero from "@/container/lifehealing-detail/hero";
import LifeHealing from "@/container/lifehealing-detail/life-healing";

export async function generateStaticParams() {
	return lifehealingItems.map((item) => ({
		id: item.id.toString(),
	}));
}

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
			<Suspense fallback={<div>Loading...</div>}>
				<LifeHealing slug={{ id }} />
			</Suspense>
			<NewsLetter />
		</>
	);
}
