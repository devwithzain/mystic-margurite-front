import { plan03 } from "@/assets";
import { TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function Planetary03() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="Meditation on the Venus"
						className="text-[#936d42] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={plan03}
								alt="Meditation on the Venus"
								className="w-full h-full object-cover rounded-t-full"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Venus is the second planet from the Sun and is often called Earth's sister planet due to their similar size and mass. Named after the Roman goddess of love and beauty, Venus is the brightest natural object in Earth's night sky after the Moon, casting shadows and visible to the naked eye in broad daylight under clear conditions.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Key facts about Venus:",
										"Mass: 0.815 Earths",
										"Diameter: 12,104 km",
										"Surface Temperature: 462°C (864°F)",
										"Atmospheric Pressure: 90 times Earth's",
										"Day Length: 243 Earth days",
										"Year Length: 225 Earth days",
										"Distance from Sun: 108.2 million km",
										"Number of Moons: 0",
										"Rotation: Retrograde (opposite to Earth)",
										"Composition: Rocky planet with thick atmosphere",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Venus has a thick atmosphere composed mainly of carbon dioxide, creating an intense greenhouse effect that makes it the hottest planet in our solar system. The surface is dominated by volcanic features, mountains, and vast plains of solidified lava. The planet's surface is hidden beneath perpetual clouds of sulfuric acid.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"In astrology, Venus represents love, beauty, pleasure, and relationships. It governs artistic expression, aesthetics, luxury, and material comforts. Venus's influence extends to harmony in partnerships, both romantic and platonic, and our capacity for appreciation and enjoyment.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Venus's retrograde periods, occurring approximately every 18 months, are significant times for reviewing relationships, values, and self-worth. During these periods, old lovers may return, or unresolved relationship issues may resurface for healing and closure.",
								]}
							</TextMask>
						</p>
					</div>
					<div className="w-full flex flex-col gap-10">
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Venus in Love:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Venus governs how we express and receive love, our romantic style, and what we find attractive in others.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Venus in Art:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The planet's influence extends to all forms of artistic expression, creativity, and aesthetic appreciation.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Venus in Finance:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Venus rules our relationship with money, material possessions, and our sense of value and worth.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Venusian Energy:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Meditating with Venus's energy can enhance our capacity for love, creativity, and abundance. It helps balance relationships and increases our appreciation for beauty in all forms.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Venus rules the signs of Taurus and Libra, is exalted in Pisces, and finds its fall in Virgo. The planet's energy is expressed most harmoniously in matters of love, art, beauty, and relationships. Understanding Venus's placement in your natal chart can provide insights into your love language, artistic inclinations, and approach to relationships.",
									]}
								</TextMask>
							</p>

							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Working with Venusian energy through meditation can help enhance self-love, attract harmonious relationships, and increase abundance in all areas of life. The best times for Venus meditation are during the planet's favorable aspects, particularly on Fridays (Venus's day) and during the hours of Venus.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
