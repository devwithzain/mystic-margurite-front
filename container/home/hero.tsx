"use client";
import { motion } from "framer-motion";
import { circle1, circle2 } from "@/public";
import TextReveal from "@/components/ui/client/text-reveal";
import RoundButton from "@/components/ui/client/round-button";

export default function Hero() {
	return (
		<div className="w-full h-screen flex items-center justify-between padding-x heroBg">
			<div className="flex-1 flex flex-col gap-5">
				<div className="flex flex-col">
					<TextReveal>
						<h1 className="text-[#2E073F] heading font-semibold papyrus leading-tight tracking-tight">
							Energy Balance
							<br />
							with Life Alignment
						</h1>
					</TextReveal>
				</div>
				<TextReveal>
					<h1 className="text-black paragraph font-normal montserrat leading-normal">
						Learn about astrology, zodiac signs, retrogrades, and more! Your,
						world becomes clear once you understand how the universe influences
						it.
					</h1>
				</TextReveal>
				<div className="w-fit bg-[#7a74ef] flex items-center justify-between bg-secondry cursor-pointer rounded-md group">
					<RoundButton
						href="/contact-us"
						title="Appointment"
						className="bg-white text-black"
						bgcolor="#000"
						style={{ color: "#fff" }}
					/>
				</div>
			</div>
			<div className="w-full h-full flex-1 flex justify-center items-center relative">
				<div className="relative w-[80%] max-w-[600px] aspect-square flex justify-center items-center">
					<motion.img
						animate={{ rotate: 360 }}
						transition={{
							repeat: Infinity,
							duration: 20,
							ease: "linear",
						}}
						src={circle1.src}
						alt=""
						className="absolute w-full h-full object-contain transform-origin-center"
					/>
					<motion.img
						animate={{ rotate: -360 }}
						transition={{
							repeat: Infinity,
							duration: 20,
							ease: "linear",
						}}
						src={circle2.src}
						alt=""
						className="absolute w-full h-full object-contain transform-origin-center"
					/>
				</div>
			</div>
		</div>
	);
}
