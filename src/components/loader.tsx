import { useState, useEffect } from "react";
import HomePage from "./home-page";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "./animated-text";
import { arrowGo, introVideo } from "@/assets";
import LoaderTwo from "./loader-two";

export default function Loader() {
	const [showText, setShowText] = useState(false);
	const [exploreClicked, setExploreClicked] = useState(false);
	const [contactClicked, setContactClicked] = useState(false);

	const hasLoaderCompleted = localStorage.getItem("loaderCompleted");

	useEffect(() => {
		if (!hasLoaderCompleted) {
			localStorage.setItem("loaderCompleted", "false");
		}
	}, [hasLoaderCompleted]);

	const handleExploreClick = () => {
		setExploreClicked(true);
		localStorage.setItem("loaderCompleted", "true");
	};

	const handlePlametaryClick = () => {
		localStorage.setItem("loaderCompleted", "true");
	};

	const handleContactClick = () => {
		setContactClicked(true);
	};

	const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
		const currentTime = (event.target as HTMLVideoElement).currentTime;
		if (currentTime >= 2.7 && !showText) {
			setShowText(true);
		}
	};

	if (contactClicked) {
		return <LoaderTwo />;
	}

	if (exploreClicked || hasLoaderCompleted === "true") {
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
							src={introVideo}
							type="video/mp4"
						/>
					</video>
					{showText && (
						<div className="flex flex-col gap-4 z-10 items-center">
							<AnimatedText
								text="Mystic Marguerite Certified Astrologer"
								className="text-[#fff] heading font-normal smythe capitalize leading-tight tracking-tight"
							/>
							<AnimatedText
								text="Life Alignment Healing"
								className="text-[#fff] heading font-normal smythe capitalize leading-tight tracking-tight"
							/>
						</div>
					)}
					{showText && (
						<motion.div
							className="flex items-center gap-4 z-10"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, easings: "easeInOut" }}>
							<motion.div
								onClick={handlePlametaryClick}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}>
								<Link
									to="/planetary-meditations"
									className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef]">
									<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
										Planetary Maditation
									</button>
									<img
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
									to="/"
									className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef]"
									onClick={handleExploreClick}>
									<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
										Enter Website
									</button>
									<img
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
										Life Aligment & Healing
									</button>
									<img
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
