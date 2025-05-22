"use client";
import { planetryItems } from "@/constants";
import { useParams } from "next/navigation";
import Planetary01 from "@/components/ui/client/planetary/planetary01";
import Planetary02 from "@/components/ui/client/planetary/planetary02";
import Planetary03 from "@/components/ui/client/planetary/planetary03";
import Planetary04 from "@/components/ui/client/planetary/planetary04";
import Planetary05 from "@/components/ui/client/planetary/planetary05";
import Planetary06 from "@/components/ui/client/planetary/planetary06";
import Planetary07 from "@/components/ui/client/planetary/planetary07";
import Planetary08 from "@/components/ui/client/planetary/planetary08";
import Planetary09 from "@/components/ui/client/planetary/planetary09";
import Planetary10 from "@/components/ui/client/planetary/planetary10";
import Planetary11 from "@/components/ui/client/planetary/planetary11";
import Planetary12 from "@/components/ui/client/planetary/planetary12";

export default function Planetary() {
	const { id } = useParams();
	const planetaryItem = planetryItems.find((item) => item.id === Number(id));
	if (!planetaryItem) {
		return <div>Planetary not found</div>;
	}

	const renderPlanetaryComponent = () => {
		switch (Number(id)) {
			case 1:
				return <Planetary01 />;
			case 2:
				return <Planetary02 />;
			case 3:
				return <Planetary03 />;
			case 4:
				return <Planetary04 />;
			case 5:
				return <Planetary05 />;
			case 6:
				return <Planetary06 />;
			case 7:
				return <Planetary07 />;
			case 8:
				return <Planetary08 />;
			case 9:
				return <Planetary09 />;
			case 10:
				return <Planetary10 />;
			case 11:
				return <Planetary11 />;
			case 12:
				return <Planetary12 />;
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
