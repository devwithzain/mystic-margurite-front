import { useState } from "react";
import { motion } from "framer-motion";
import { cardsItems } from "@/constants";

export default function StackedCards() {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<div className="w-full flex justify-center items-center h-screen">
			<div className="relative flex justify-center items-center">
				{cardsItems.map((card, index) => {
					// Curve the cards slightly using rotateZ
					const baseRotation = -10 + index * 5; // Adjust for a fan effect

					return (
						<motion.img
							key={card.id}
							src={hovered === index ? card.src : card.img}
							alt={`Card ${card.id}`}
							className="object-cover rounded-lg shadow-lg cursor-pointer"
							style={{
								zIndex: hovered === index ? 10 : index,
							}}
							initial={{
								rotateZ: baseRotation, // Curved stack effect
								y: Math.abs(index - cardsItems.length / 2) * 5, // Adjust Y for depth
								scale: 1,
							}}
							animate={{
								rotateZ: hovered === index ? 0 : baseRotation, // Reset rotation on hover
								rotateY: hovered === index ? 180 : 0, // Flip effect
								scale: hovered === index ? 1.1 : 1, // Slight scale up on hover
								transition: { duration: 0.5, ease: "easeInOut" },
							}}
							onMouseEnter={() => setHovered(index)}
							onMouseLeave={() => setHovered(null)}
						/>
					);
				})}
			</div>
		</div>
	);
}
