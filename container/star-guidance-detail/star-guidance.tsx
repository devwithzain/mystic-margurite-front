"use client";
import { useParams } from "next/navigation";
import { starGuidanceItems } from "@/constants";
import StarGuidance01 from "@/components/ui/client/star-guidance/star-guidance01";
import StarGuidance02 from "@/components/ui/client/star-guidance/star-guidance02";
import StarGuidance03 from "@/components/ui/client/star-guidance/star-guidance03";
import StarGuidance04 from "@/components/ui/client/star-guidance/star-guidance04";
import StarGuidance05 from "@/components/ui/client/star-guidance/star-guidance05";
import StarGuidance06 from "@/components/ui/client/star-guidance/star-guidance06";
import StarGuidance07 from "@/components/ui/client/star-guidance/star-guidance07";
import StarGuidance08 from "@/components/ui/client/star-guidance/star-guidance08";
import StarGuidance09 from "@/components/ui/client/star-guidance/star-guidance09";
import StarGuidance10 from "@/components/ui/client/star-guidance/star-guidance10";
import StarGuidance11 from "@/components/ui/client/star-guidance/star-guidance11";
import StarGuidance12 from "@/components/ui/client/star-guidance/star-guidance12";
import StarGuidance13 from "@/components/ui/client/star-guidance/star-guidance13";

export default function StarGuidanceDetail() {
	const { id } = useParams();
	const planetaryItem = starGuidanceItems.find(
		(item) => item.id === Number(id),
	);
	if (!planetaryItem) {
		return <div>Planetary not found</div>;
	}

	const renderPlanetaryComponent = () => {
		switch (Number(id)) {
			case 1:
				return <StarGuidance01 />;
			case 2:
				return <StarGuidance02 />;
			case 3:
				return <StarGuidance03 />;
			case 4:
				return <StarGuidance04 />;
			case 5:
				return <StarGuidance05 />;
			case 6:
				return <StarGuidance06 />;
			case 7:
				return <StarGuidance07 />;
			case 8:
				return <StarGuidance08 />;
			case 9:
				return <StarGuidance09 />;
			case 10:
				return <StarGuidance10 />;
			case 11:
				return <StarGuidance11 />;
			case 12:
				return <StarGuidance12 />;
			case 13:
				return <StarGuidance13 />;
			default:
				return null;
		}
	};

	return (
		<div className="w-full padding-y padding-x">
			{renderPlanetaryComponent()}
		</div>
	);
}
