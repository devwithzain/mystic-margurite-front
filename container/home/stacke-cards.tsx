"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { cardsItems } from "@/constants";
import TextReveal from "@/components/ui/client/text-reveal";

export default function StackedCards() {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<div className="w-full padding-x padding-y flex items-center justify-center flex-col gap-20 relative bg-white z-50">
			<div className="w-full flex flex-col gap-2 items-center">
				<TextReveal>
					<h1 className="text-[#2E073F] heading capitalize papyrus font-semibold tracking-tight text-center">
						Today&apos;s Horoscope
					</h1>
				</TextReveal>
				<TextReveal>
					<p className="text-center paragraph text-[#433E37] montserrat leading-normal tracking-tight">
						Discover your daily astrological insights and guidance for a more
						enlightened path ahead
					</p>
				</TextReveal>
			</div>
			<div className="relative flex justify-center items-center pb-5">
				{cardsItems.map((card, index) => {
					const baseRotation = -10 + index * 5;
					return (
						<Link
							href={card.link}
							key={card.id}>
							<motion.img
								src={hovered === index ? card.src.src : card.img.src}
								alt={`Card ${card.id}`}
								className="object-cover rounded-lg shadow-lg cursor-pointer border"
								style={{
									zIndex: hovered === index ? 10 : index,
									transform:
										hovered === index ? "rotateY(180deg) scaleX(-1)" : "none",
								}}
								initial={{
									rotateZ: baseRotation,
									y: Math.abs(index - cardsItems.length / 2) * 5,
									scale: 1,
								}}
								animate={{
									rotateZ: hovered === index ? 0 : baseRotation,
									rotateY: hovered === index ? 180 : 0,
									scaleX: hovered === index ? -1 : 1,
									scale: hovered === index ? 1.1 : 1,
									transition: { duration: 0.5, ease: "easeInOut" },
								}}
								onMouseEnter={() => setHovered(index)}
								onMouseLeave={() => setHovered(null)}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
