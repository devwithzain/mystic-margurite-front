import AnimatedText from "@/components/animated-text";

export default function Hero() {
	return (
		<div className="w-full h-[60vh] flex items-center justify-center heroBg">
			<AnimatedText
				text="Services"
				className="text-[#936d42] heading font-normal forum uppercase leading-tight tracking-normal"
			/>
		</div>
	);
}
