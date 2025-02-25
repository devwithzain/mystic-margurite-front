import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { arrowGo, introVideo2 } from "@/assets";
import { motion, AnimatePresence } from "framer-motion";

export default function LoaderTwo() {
	const [showText, setShowText] = useState(false);
	const [currentLine, setCurrentLine] = useState(0);
	const [showButton, setShowButton] = useState(false);

	const textLines = [
		"All is the creation of Divine Love",
		"life and cosmos",
		"beings manifest or etheric",
		"dwellers in light and darkness",
		"We dance together",
		"weaving an infinite web of Becoming.",
	];

	const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
		const currentTime = (event.target as HTMLVideoElement).currentTime;
		if (currentTime >= 0.5 && !showText) {
			setShowText(true);
		}
	};

	const handleContactClick = () => {
		localStorage.setItem("loaderCompleted", "true");
	};

	useEffect(() => {
		if (showText) {
			const interval = setInterval(() => {
				setCurrentLine((prev) => {
					if (prev < textLines.length - 1) return prev + 1;
					clearInterval(interval);
					setShowButton(true);
					return prev;
				});
			}, 2000);

			return () => clearInterval(interval);
		}
	}, [showText, textLines.length]);

	return (
		<div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
			<video
				className="absolute w-full h-full object-cover top-0 left-0 z-0"
				muted
				autoPlay
				loop
				onTimeUpdate={handleTimeUpdate}>
				<source
					src={introVideo2}
					type="video/mp4"
				/>
			</video>
			<div className="relative z-10 flex flex-col items-center justify-center h-fit overflow-hidden">
				<AnimatePresence mode="wait">
					{textLines.map(
						(text, index) =>
							index === currentLine && (
								<motion.div
									key={index}
									initial={{ y: 50, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -50, opacity: 0 }}
									transition={{ duration: 2, ease: "easeInOut" }}
									className="text-[#fff] heading font-normal smythe capitalize leading-tight tracking-tight">
									{text}
								</motion.div>
							),
					)}
				</AnimatePresence>
				{showButton && (
					<Link
						to="/contact-us"
						onClick={handleContactClick}
						className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef]">
						<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
							Contact Us
						</button>
						<img
							src={arrowGo}
							alt="arrowGoImg"
						/>
					</Link>
				)}
			</div>
		</div>
	);
}
