"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { zodiacSigns } from "@/constants";
import { TextMask } from "@/components/ui/client";
import AnimatedText from "@/components/ui/client/animated-text";
import { arrowLeft1, arrowRight1, lineDown, lineUp } from "@/public";

export default function Slider() {
	const [direction, setDirection] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showContent, setShowContent] = useState(false);
	console.log(direction);

	const nextSlide = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % zodiacSigns.length);
	};

	const prevSlide = () => {
		setDirection(-1);
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + zodiacSigns.length) % zodiacSigns.length,
		);
	};

	const toggleContent = () => {
		setShowContent(!showContent);
	};

	const currentSign = zodiacSigns[currentIndex];

	const getAngle = (index: number) => {
		const startAngle = -90;
		const angleStep = 360 / zodiacSigns.length;
		return startAngle + index * angleStep;
	};

	const getCoordinates = (angle: number, radius = 50) => {
		const radians = (angle * Math.PI) / 180;
		const x = 50 + radius * Math.cos(radians);
		const y = 50 + radius * Math.sin(radians);
		return { x, y };
	};

	return (
		<div className="w-full h-screen flex justify-between items-center padding-x padding-y relative gap-10">
			<button
				onClick={prevSlide}
				className="absolute left-20 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md z-10">
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="w-full h-full rounded-full flex items-center justify-center">
					<span className="text-xl">
						<Image
							src={arrowRight1}
							alt="arrowRight1"
							className="w-3 object-cover"
						/>
					</span>
				</motion.div>
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-20 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md z-10">
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="w-full h-full rounded-full flex items-center justify-center">
					<span className="text-xl">
						<Image
							src={arrowLeft1}
							alt="arrowLeft1"
							className="w-3 object-cover"
						/>
					</span>
				</motion.div>
			</button>
			{/* left div */}
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -100 }}
				transition={{ duration: 0.5 }}
				className="w-[450px] min-w-[450px] h-full flex flex-col justify-between gap-5 relative">
				<div className="flex flex-col gap-2">
					<AnimatedText
						text={currentSign.sign}
						className="text-[#000] heading font-normal forum uppercase leading-tight tracking-normal"
					/>
					<p className="text-black text-md font-normal montserrat leading-normal tracking-normal">
						<TextMask>{[currentSign.description]}</TextMask>
					</p>
				</div>
				<div className="">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="absolute top-1/2 -right-[200px]">
						<Image
							src={lineDown}
							alt={currentSign.sign}
							className="w-full object-cover"
							width={500}
							height={500}
						/>
					</motion.div>
				</div>
				<div className="flex flex-col gap-2">
					<AnimatedText
						text={currentSign.specialEffects}
						className="text-[#000] subHeading font-normal forum capitalize leading-tight tracking-normal"
					/>
					<p className="text-black text-md font-normal montserrat leading-normal tracking-normal">
						<TextMask>{[currentSign.additionalInfo]}</TextMask>
						<br />
						<TextMask>{[currentSign.longDescription]}</TextMask>
					</p>
				</div>
			</motion.div>
			{/* center div */}
			<div className="w-full flex flex-col lg:flex-row items-center mx-auto p-4 relative bg-white z-[9999]">
				<div className="w-full max-w-3xl lg:w-1/2 p-14 flex justify-center items-center">
					<div className="w-full aspect-square relative">
						<div className="w-full h-full flex items-center justify-center p-4">
							<div className="w-full h-full relative">
								<div className="w-full h-full rounded-full border-2 border-[#7A75EF44] flex items-center justify-center relative">
									<div className="w-[97%] h-[97%] rounded-full border-2 border-[#7A75EF44] flex items-center justify-center relative">
										{zodiacSigns.map((sign, index) => {
											const angle = getAngle(index);
											const innerRadius = 44;
											const outerRadius = 65;
											const innerCoords = getCoordinates(angle, innerRadius);
											const outerCoords = getCoordinates(angle, outerRadius);
											const isActive = currentIndex === index;

											return (
												<React.Fragment key={sign.id}>
													<div
														className={`absolute rounded-full ${
															isActive
																? "bg-[#7A75EF] w-3 h-3"
																: "bg-purple-200 w-2 h-2"
														}`}
														style={{
															left: `${innerCoords.x}%`,
															top: `${innerCoords.y}%`,
															transform: "translate(-50%, -50%)",
															transition: "all 0.3s ease",
														}}
													/>

													<div
														className={`absolute text-md font-medium ${
															isActive ? "text-purple-600" : "text-gray-500"
														}`}
														style={{
															left: `${outerCoords.x}%`,
															top: `${outerCoords.y}%`,
															transform: "translate(-50%, -50%)",
														}}>
														{sign.sign}
													</div>
												</React.Fragment>
											);
										})}
										<motion.div
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											initial={{ opacity: 0, scale: 0.5 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.5 }}
											className="w-60 object-cover cursor-pointer"
											onClick={toggleContent}>
											<Image
												src={currentSign.src}
												alt={currentSign.sign}
												className="w-60 object-cover cursor-pointer"
												width={240}
												height={240}
											/>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* right div */}
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : 100 }}
				transition={{ duration: 0.5 }}
				className="w-[450px] min-w-[450px] h-full flex flex-col justify-between gap-5 relative">
				<div className="flex flex-col gap-2">
					<p className="text-black text-md font-normal montserrat leading-normal tracking-normal">
						<TextMask>{[currentSign.longDescription]}</TextMask>
					</p>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="absolute top-32 -left-[200px]">
					<Image
						src={lineUp}
						alt={currentSign.sign}
						className="w-full object-cover"
					/>
				</motion.div>
				<div className="w-full flex items-end justify-end">
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="w-60 object-cover cursor-pointer"
						onClick={toggleContent}>
						<Image
							src={currentSign.src}
							alt={currentSign.sign}
							className="w-20 object-cover"
							width={240}
							height={240}
						/>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
