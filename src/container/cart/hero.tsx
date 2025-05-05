import AnimatedText from "@/components/animated-text";

export default function Hero() {
	return (
		<div className="w-full h-[60vh] flex items-center justify-center heroBg">
			<AnimatedText
				text="Cart"
				className="text-[#2E073F] heading font-normal forum uppercase leading-tight tracking-normal"
			/>
		</div>
	);
}
