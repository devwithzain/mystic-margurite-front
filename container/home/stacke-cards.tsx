import { useState } from "react";
import { motion } from "framer-motion";
import { cardsItems } from "@/constants";

export default function StackedCards() {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<div className="w-full flex justify-center items-center min-h-screen overflow-hidden bg-white z-50 relative">
			<div className="relative flex justify-center items-center">
				{cardsItems.map((card, index) => {
					const baseRotation = -10 + index * 5;

					return (
						<motion.img
							key={card.id}
							src={hovered === index ? card.src.src : card.img.src}
							alt={`Card ${card.id}`}
							className="object-cover rounded-lg shadow-lg cursor-pointer border"
							style={{
								zIndex: hovered === index ? 10 : index,
							}}
							initial={{
								rotateZ: baseRotation,
								y: Math.abs(index - cardsItems.length / 2) * 5,
								scale: 1,
							}}
							animate={{
								rotateZ: hovered === index ? 0 : baseRotation,
								rotateY: hovered === index ? 180 : 0,
								scale: hovered === index ? 1.1 : 1,
								transition: { duration: 0.5, ease: "easeInOut" },
							}}
							onMouseEnter={() => setHovered(index)}
							onMouseLeave={() => setHovered(null)}
						/>
					);
				})}{" "}
			</div>
		</div>
	);
}
