import { AuroraFull, plan09 } from "@/assets";
import { MediaPlayer, TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function Planetary09() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<MediaPlayer src={AuroraFull} />
				<div className="">
					<AnimatedText
						text="Meditation on the Uranus"
						className="text-[#2E073F] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={plan09}
								alt="Meditation on the Uranus"
								className="w-full h-full object-cover rounded-t-full"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Uranus is the seventh planet from the Sun and is considered one of the ice giants. It was discovered in 1781 by William Herschel, making it the first planet discovered using a telescope. In astrology, Uranus represents revolution, innovation, sudden changes, and breakthroughs.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"As the ruler of Aquarius, Uranus brings forth qualities of originality, independence, and unconventional thinking. It challenges us to break free from traditional patterns and embrace new possibilities.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The energy of Uranus is electric, unpredictable, and often disruptive. It pushes us towards personal and collective evolution, sometimes through unexpected events or sudden realizations. This planet governs technology, scientific discoveries, and humanitarian causes.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"When Uranus is prominent in a natal chart, it can indicate someone who is ahead of their time, a revolutionary thinker, or someone who challenges societal norms. These individuals often have a strong drive for freedom and independence.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The placement of Uranus in different houses and its aspects to other planets can show where and how a person experiences sudden changes, breakthroughs, or revolutionary ideas in their life. Its influence can bring both exciting opportunities and challenging disruptions.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Uranus takes approximately 84 years to complete one orbit around the Sun, spending about 7 years in each zodiac sign. This slow movement means that people born within a few years of each other share similar Uranus placements, connecting them to larger generational themes and changes.",
								]}
							</TextMask>
						</p>
					</div>
					<div className="w-full flex flex-col gap-10">
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Aries:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Pioneers new frontiers, brings sudden breakthroughs in
								leadership and individual expression.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Taurus:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Revolutionary changes in finance, values, and material
								resources. Innovation in sustainability.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Gemini:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Breakthroughs in communication, radical new ideas, and
								revolutionary learning methods.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Cancer:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Unexpected changes in home life, emotional breakthroughs, and
								innovative nurturing approaches.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Leo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Revolutionary creative expression, sudden fame, unexpected
								leadership opportunities.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Virgo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Innovative health practices, revolutionary work methods, sudden
								improvements in daily routines.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Libra:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Unexpected partnerships, revolutionary approaches to
								relationships, sudden balance shifts.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Scorpio:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Sudden transformations, revolutionary insights into power
								dynamics, unexpected regeneration.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Sagittarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Breakthroughs in philosophy, unexpected journeys, revolutionary
								educational approaches.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Capricorn:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Revolutionary changes in structure, sudden career shifts,
								unexpected authority roles.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Aquarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Innovative social reforms, revolutionary group dynamics, sudden
								humanitarian breakthroughs.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Uranus in Pisces:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Unexpected spiritual insights, revolutionary artistic
								expression, sudden intuitive breakthroughs. <br /> <br />
								Uranus's influence in astrology represents our need for freedom,
								individuality, and authentic self-expression. It challenges us
								to think differently and embrace change, even when it feels
								uncomfortable. This planet's energy can be both liberating and
								destabilizing, teaching us that growth often comes through
								disruption of the familiar. Understanding Uranus in our charts
								helps us navigate periods of sudden change and harness our
								innovative potential for personal and collective evolution.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
