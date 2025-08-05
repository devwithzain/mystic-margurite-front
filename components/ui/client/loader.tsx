"use client";
import Link from "next/link";
import Image from "next/image";
import { arrowGo } from "@/public";
import LoaderTwo from "./loader-two";
import { motion } from "framer-motion";
import AnimatedText from "./animated-text";
import { useState, useEffect } from "react";
import HomePage from "@/container/home/home-page";
import { useLocalStorage } from "@/hooks/use-local-storage";

export default function Loader() {
	const [showText, setShowText] = useState(false);
	const [exploreClicked, setExploreClicked] = useState(false);
	const [contactClicked, setContactClicked] = useState(false);

	const [loaderCompleted, setLoaderCompleted, isStorageLoaded] =
		useLocalStorage("loaderCompleted", false);

	useEffect(() => {
		if (isStorageLoaded && !loaderCompleted) {
			setLoaderCompleted(false);
		}
	}, [isStorageLoaded, loaderCompleted, setLoaderCompleted]);

	const handleExploreClick = () => {
		setExploreClicked(true);
		setLoaderCompleted(true);
	};

	const handlePlametaryClick = () => {
		setLoaderCompleted(true);
	};

	const handleContactClick = () => {
		setContactClicked(true);
	};

	const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
		const currentTime = (event.target as HTMLVideoElement).currentTime;
		if (currentTime >= 2.5 && !showText) {
			setShowText(true);
		}
	};

	if (!isStorageLoaded) {
		return (
			<div className="w-full h-screen flex items-center justify-center bg-black">
				<div className="text-white">Loading...</div>
			</div>
		);
	}

	if (contactClicked) {
		return <LoaderTwo />;
	}

	if (exploreClicked || loaderCompleted === true) {
		return <HomePage />;
	}

	return (
		<>
			<div className="w-full h-screen flex items-center justify-center">
				<div className="w-full h-full flex flex-col items-center justify-center gap-5 relative">
					<video
						className="w-full h-full object-cover absolute top-0 left-0 z-0"
						muted
						autoPlay
						onTimeUpdate={handleTimeUpdate}>
						<source
							src="https://mysticmarguerite.com/new/intro.mp4"
							type="video/mp4"
						/>
					</video>
					{showText && (
						<div className="flex flex-col gap-4 z-10 items-center">
							<AnimatedText
								text="Mystic Marguerite Certified Astrologer"
								className="text-[#fff] heading font-semibold papyrus capitalize tracking-tight"
							/>
							<AnimatedText
								text="Life Alignment Balances"
								className="text-[#fff] heading font-semibold papyrus capitalize tracking-tight"
							/>
						</div>
					)}
					{showText && (
						<motion.div
							className="flex items-center gap-4 z-10"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}>
							<motion.div
								onClick={handlePlametaryClick}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}>
								<Link
									href="/planetary-meditations"
									className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef]">
									<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
										Planetary Maditation
									</button>
									<Image
										src={arrowGo}
										alt="arrowGoImg"
									/>
								</Link>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}>
								<Link
									href="/"
									className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef]"
									onClick={handleExploreClick}>
									<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
										Enter Website
									</button>
									<Image
										src={arrowGo}
										alt="arrowGoImg"
									/>
								</Link>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.6 }}>
								<div
									className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef] cursor-pointer"
									onClick={handleContactClick}>
									<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
										Life Aligment & Balances
									</button>
									<Image
										src={arrowGo}
										alt="arrowGoImg"
									/>
								</div>
							</motion.div>
						</motion.div>
					)}
				</div>
			</div>
		</>
	);
}
