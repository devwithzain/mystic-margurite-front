import { motion } from "framer-motion";
import { TextMask } from "@/components";
import { circle1, circle2, star } from "@/assets";
import AnimatedText from "@/components/animated-text";

export default function Hero() {
	return (
		<div className="w-full h-screen flex items-center justify-between padding-x heroBg">
			<div className="flex-1 flex flex-col gap-5">
				<div className="flex flex-col">
					<AnimatedText
						text="Energy"
						className="text-[#936d42] heading font-normal forum uppercase leading-tight tracking-tight"
					/>
					<div className="flex items-center gap-5">
						<AnimatedText
							text="Balance With"
							className="text-[#936d42] heading font-normal forum uppercase leading-tight tracking-tight"
						/>
					</div>
					<div className="flex items-center gap-5">
						<AnimatedText
							text="Life Alignment"
							className="text-[#936d42] heading font-normal forum uppercase leading-tight tracking-tight"
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
				<a
					href="/contact-us"
					className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef]">
					<img
						src={star}
						alt="star"
						className="w-5 h-5 object-cover"
					/>
					<button className="text-center text-white paragraph font-normal leading-tight tracking-tight montserrat">
						Appointment
					</button>
				</a>
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
						className="absolute w-full h-full object-contain"
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
						className="absolute w-[80%] h-[80%]"
					/>
				</div>
			</div>
		</div>
	);
}
