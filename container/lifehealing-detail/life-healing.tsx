"use client";
import { lifehealingItems } from "@/constants";
import Lifehealing01 from "@/components/ui/client/lifeandhealing/lifehealing01";
import Lifehealing02 from "@/components/ui/client/lifeandhealing/lifehealing02";
import Lifehealing03 from "@/components/ui/client/lifeandhealing/lifehealing03";
import Lifehealing04 from "@/components/ui/client/lifeandhealing/lifehealing04";

export default function LifeHealingDetail({ slug }: { slug: { id: string } }) {
	const id = slug.id;
	const lifehealingItem = lifehealingItems.find(
		(item) => item.id === Number(id),
	);
	if (!lifehealingItem) {
		return <div>LifeHealing not found</div>;
	}

	const renderHealingComponent = () => {
		switch (Number(id)) {
			case 1:
				return <Lifehealing01 />;
			case 2:
				return <Lifehealing02 />;
			case 3:
				return <Lifehealing03 />;
			case 4:
				return <Lifehealing04 />;
			default:
				return null;
		}
	};

	return (
		<div className="w-full padding-y padding-x">{renderHealingComponent()}</div>
	);
}
