"use client";
import Link from "next/link";
import { AnimatedText } from "@/components/ui/client";

export default function Hero() {
	return (
		<div className="w-full h-[60vh] flex items-center justify-center heroBg">
			<div className="w-full flex flex-col items-center justify-center">
				<AnimatedText
					text="Thank You"
					className="text-[#2E073F] heading font-semibold papyrus leading-tight tracking-normal text-center"
				/>
				<Link
					href="/"
					className="w-fit bg-[#7a74ef] mt-4 flex items-center gap-2 btn transition-all duration-300 ease-in-out text-white px-4 py-4 capitalize montserrat paragraph leading-tight tracking-tight rounded-md mx-auto">
					Continue
				</Link>
			</div>
		</div>
	);
}
