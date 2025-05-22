import { AnimatedText } from "@/components/ui/client";

export default function Hero() {
	return (
		<div className="w-full h-[60vh] flex items-center justify-center heroBg">
			<AnimatedText
				text="Life Alignment Energy Balances"
				className="text-[#2E073F] heading font-semibold papyrus leading-tight tracking-normal"
			/>
		</div>
	);
}
