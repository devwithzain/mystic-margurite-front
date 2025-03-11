import { about01 } from "@/assets";
import { TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";
import RoundButton from "@/components/round-button";
import Rounded from "@/components/rounded";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Reading() {
	return (
		<div className="w-full padding-x padding-y bg-white relative z-50">
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
						<div className="w-fit bg-[#7a74ef] flex items-center justify-between bg-secondry cursor-pointer rounded-md group">
							<RoundButton
								href="/astrology-blog"
								title="Explore More"
								className="bg-white text-black"
								bgcolor="#000"
								style={{ color: "#fff" }}
							/>
						</div>
						<div className="flex items-center justify-between bg-transparent cursor-pointer rounded-md group border border-[#936D42]">
							<Link
								className="text-center text-white paragraph font-normal leading-tight tracking-tight montserrat"
								to="/contact-us">
								<Rounded
									className="py-[4px]"
									backgroundColor="#936D42">
									<p className="z-10 px-[10px] ml-[15px] py-[6px] group-hover:text-white text-black">
										Contact Now
									</p>
									<div className="bg-black group-hover:bg-white text-black p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]">
										<ArrowUpRight
											strokeWidth={1.5}
											size={30}
											className="scale-[0] group-hover:scale-[1]"
										/>
									</div>
								</Rounded>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
