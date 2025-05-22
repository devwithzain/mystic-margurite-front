import Image from "next/image";
import { plan01 } from "@/public";
import { AnimatedText, MediaPlayer, TextMask } from "@/components/ui/client";

export default function Planetary01() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<MediaPlayer src="/Aurora_Full.mp3" />
				<div className="">
					<AnimatedText
						text="Meditation on the Sun"
						className="text-[#2E073F] heading font-semibold papyrus leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<Image
								src={plan01}
								alt="Meditation on the Sun"
								className="w-full h-full object-cover rounded-t-full"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The Sun is also called a luminary or the Greater Light. As viewed from earth the star completes a circuit of the zodiac once a year, spending about a month in each sign. The mean daily motion is 59 minutes and 8 seconds of arc. In the Age of Pisces the Sun has been thought of as symbolizing an authoritative masculine force (a function that belongs to Mars), and the principle of linear-rational logic (which is the domain of Mercury).",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Traditional Western astrology and religion also have a habit of using the Sun to symbolize influence of the father and the Father God, but perhaps the golden orb should not be saddled with that designation too vigorously.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"More precisely, the Sun represents the androgynous, vital life force, creative abilities and the drive for genuine self-expression. It is the essential, spiritually attuned self, the individuated self each one of us is striving to become. Individuated self is not the ego-centric construct of self that can be mistaken for the only self one has. How can the true self be hidden? It is easily lost behind the constant chatter of the mind, and buffered out by a sort of hypnosis originating from societal conditioning, poisoned by collective currents of fear and greed. The Sun symbolizes authority as in self-empowerment, not the dictates of an external authority.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"A Sun well-placed in a supportive house and augmented by strong aspects from other planets is indicative of leadership and sovereignty; the capacity to take charge of affairs, and the ability to retain control when challenged.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The natal Sun rules in Leo and is exalted in Aries; the solar principle is strong in these signs so can flow freely as vigorous health and enthusiastic gamesmanship, or overflow into a quest for dominance and extreme displays of flamboyance. Those graced with a natal Sun in Aquarius, the sign of Detriment or Libra, the sign of Fall or a Sun in hard aspect to malefic planets can have difficulty expressing basic drives and talents, or may operate with some sort of distortion in play. ",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Someone with an afflicted Sun might not know where they leave off and others begin, or conversely, be so burdened with ego that the individual so blessed cannot tolerate the company or equal status of others. Someone with an unaspected Sun can operate as a loose cannon, driven by impulse; a Sun receiving nothing but easy aspects can indicate one who operates on subconscious autopilot, taking good fortune as a matter of course and otherwise waiting for others to do it for them.",
								]}
							</TextMask>
						</p>
					</div>
					<div className="w-full flex flex-col gap-10">
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Aries:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Explores and conquers, stimulates and inspires. Starts but does
								not necessarily finish.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Taurus:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Grows and stabilizes; sensual gratification, the power of
								attraction and a taste for luxury, loves to be alone.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Cancer:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Acquires via finance, nurturing, travel or collections;
								development of individuality and the quest for maturity.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Leo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Refinement of the ego, or refusal to take responsibility for an
								ego; center stage, warmth and generosity.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Virgo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Health and organizational skills; perfectionism, discrimination
								and judgement, then sexual issues in a double life.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Scorpio:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Penetration and survival; struggles with power, control, sex,
								crime, and fruitful union with others.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Sagittarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Adventurer, entrepreneur, scholar or athelete. Quest for truth
								or the ability to twist it, skillfully.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Capricorn:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Hard beginnings in a climb to the top. Keen on status but loves
								a loss of control in safe settings.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Aquarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Common man or genius, alternative sexuality or stringent
								dictator. Progressive mind or reactionary quack.....
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Libra:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Balance and harmony seeker; partnership oriented with a focus on
								fairness, beauty, and diplomatic relations.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Sun in Pisces:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Sublimely spiritual or low down in the depths of delusion, the
								ends will definitely justify the means. <br /> <br /> The Solar
								Spirit can function as a channel of focus in a horoscope for all
								planetary energies to the extent indicated by aspects between
								the Sun and other planets. As an archetype it rules the heart,
								back, spinal cord and right side of the body; it plays a key
								role in the support of health, vitality and longevity. The solar
								luminary also has dominion over governing authority,
								speculation, the metal gold and the pursuit of pleasure. It
								favors children in general, and the firstborn in particular. It
								emits life-sustaining light and heat and is essential to life on
								Earth. But an excess of Sun energy can incinerate anything into
								ash. Therefore, Sun energy can sustain and invigorate us, or
								burn us alive. Therein lies a test of right choice, right
								application of will and keeping a dynamic balance with darkness.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
