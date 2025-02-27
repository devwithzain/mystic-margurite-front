import { Link } from "react-router-dom";
import AnimatedText from "@/components/animated-text";

export default function Hero() {
	return (
		<div className="w-full h-[60vh] flex items-center justify-center heroBg">
			<div className="w-full flex flex-col gap-5 items-center justify-center">
				<AnimatedText
					text="Thank You"
					className="text-[#936d42] heading font-normal forum uppercase leading-tight tracking-normal text-center"
				/>
				<div className="flex flex-col gap-4 items-center">
					<p className="paragraph montserrat tracking-tight leading-tight text-black text-center">
						Your order has been successfully placed.
					</p>
					<Link
						to="/"
						className="w-fit bg-[#7a74ef] mt-4 flex items-center gap-2 btn transition-all duration-300 ease-in-out text-white px-4 py-4 capitalize montserrat paragraph leading-tight tracking-tight rounded-md mx-auto">
						Continue
					</Link>
				</div>
			</div>
		</div>
	);
}
