import { motion } from "framer-motion";
import { TextMask } from "@/components";
import { circle1, circle2 } from "@/assets";
import RoundButton from "@/components/round-button";
import AnimatedText from "@/components/animated-text";

export default function Hero() {
	return (
		<div className="w-full h-screen flex items-center justify-between padding-x heroBg">
			<div className="flex-1 flex flex-col gap-5">
				<div className="flex flex-col">
					<AnimatedText
						text="Energy"
						className="text-[#000000] heading font-normal forum uppercase leading-tight tracking-tight"
					/>
					<div className="flex items-center gap-5">
						<AnimatedText
							text="Balance With"
							className="text-[#000000] heading font-normal forum uppercase leading-tight tracking-tight"
						/>
					</div>
					<div className="flex items-center gap-5">
						<AnimatedText
							text="Life Alignment"
							className="text-[#000000] heading font-normal forum uppercase leading-tight tracking-tight"
						/>
					</div>
				</div>
				<p className="text-[#433e37] paragraph font-normal montserrat leading-normal">
					<TextMask>
						{[
							"Learn about astrology, zodiac signs, retrogrades, and more! Your ",
							"world becomes clear once you understand how the universe influences ",
							"it.",
						]}
					</TextMask>
				</p>
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
						src={circle1}
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
						src={circle2}
						alt=""
						className="absolute w-full h-full object-contain transform-origin-center"
					/>
				</div>
			</div>
		</div>
	);
}
