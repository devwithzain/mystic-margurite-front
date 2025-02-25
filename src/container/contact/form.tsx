import { arrowGo } from "@/assets";
import AnimatedText from "@/components/animated-text";
import { Link } from "react-router-dom";

export default function Form() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="Leave A Message"
						className="text-[#936d42] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="w-full max-w-5xl flex flex-col gap-5">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full border border-[#C2BAB5] rounded-md px-6 py-4 tracking-tight leading-tight font-normal montserrat"
						/>
						<input
							type="text"
							placeholder="Your Name"
							className="w-full border border-[#C2BAB5] rounded-md px-6 py-4 tracking-tight leading-tight font-normal montserrat"
						/>
						<textarea
							rows={10}
							placeholder="Your Name"
							className="w-full border border-[#C2BAB5] rounded-md px-6 py-4 tracking-tight leading-tight font-normal montserrat"
						/>
						<Link
							to="/contact-us"
							className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#7a74ef]">
							<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
								Send Message
							</button>
							<img
								src={arrowGo}
								alt="arrowGoImg"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
