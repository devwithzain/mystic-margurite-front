import { about01 } from "@/assets";
import { TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";
import { Link } from "react-router-dom";

export default function Reading() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex justify-center gap-10 items-center">
				<div className="flex-1">
					<img
						src={about01}
						alt="formBgImg"
						className="w-full object-cover"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-10">
					<div className="flex flex-col">
						<AnimatedText
							text="Astrology Readings"
							className="text-[#936d42] heading font-normal forum capitalize leading-tight"
						/>
						<AnimatedText
							text="for You"
							className="text-[#936d42] heading font-normal forum capitalize leading-tight"
						/>
					</div>
					<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
						<TextMask>
							{[
								"The science and art of astrology can be used to explore so many avenues of our life experience. On its own merits, an analysis of the birth chart can yield much in-depth information about the natal challenges, talents and potentials unique to each individual. Ancestral inheritance, family of origin, karmic and developmental themes, past lives and path of soul growth can be delineated from the heavens, as can the nature of relationship.",
							]}
						</TextMask>
					</p>
					<div className="w-full flex items-center gap-4">
						<Link
							to="/astrology-blog"
							className="w-full flex items-center justify-center gap-2 px-6 py-4 text-center bg-[#7a74ef]">
							<button className="text-center text-white text-lg font-medium leading-tight tracking-tight montserrat">
								Explore More
							</button>
						</Link>
						<Link
							to="/contact-us"
							className="w-full flex items-center justify-center gap-2 px-6 py-4 text-center border-black border">
							<button className="text-center text-black text-lg font-medium leading-tight tracking-tight montserrat">
								Contact Now
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
