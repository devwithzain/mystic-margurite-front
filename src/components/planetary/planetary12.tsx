import { AuroraFull, plan12 } from "@/assets";
import { MediaPlayer, TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function Planetary12() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<MediaPlayer src={AuroraFull} />
				<div className="">
					<AnimatedText
						text="Meditation on the Chiron"
						className="text-[#2E073F] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={plan12}
								alt="Meditation on the Chiron"
								className="w-full h-full object-cover rounded-t-full"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Chiron is known as the 'Wounded Healer' in astrology. It represents our deepest wounds and our capacity to heal ourselves and others through those very wounds. Discovered in 1977, Chiron was named after the wise centaur in Greek mythology who was skilled in medicine but unable to heal his own immortal wound.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"In our birth chart, Chiron points to where we carry deep-seated pain, trauma, or insecurity. This placement often indicates areas where we've experienced significant hurt, yet paradoxically, it's through understanding and working with these wounds that we develop our greatest healing gifts.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Chiron's orbit between Saturn and Uranus symbolically bridges the gap between our limitations (Saturn) and our higher consciousness (Uranus). This unique position makes Chiron a powerful teacher, helping us integrate our physical and spiritual experiences.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The process of working with Chironic energy involves acknowledging our wounds without becoming defined by them. It's about transforming pain into wisdom and using our experiences to help others navigate similar challenges.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Chiron's placement in different houses and signs of the natal chart reveals specific areas where we might experience our deepest wounds and greatest potential for healing. Understanding these placements can help us navigate our healing journey more consciously.",
								]}
							</TextMask>
						</p>
					</div>
					<div className="w-full flex flex-col gap-10">
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Aries:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds related to identity, self-assertion, and personal
								initiative. Healing through developing authentic
								self-expression.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Taurus:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds connected to self-worth, material security, and physical
								pleasure. Healing through developing inner values and
								self-sufficiency.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Gemini:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds related to communication, learning, and self-expression.
								Healing through developing authentic voice and wisdom sharing.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Cancer:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds connected to emotional security, nurturing, and family.
								Healing through emotional authenticity and self-nurturing.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Leo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds related to self-expression, creativity, and recognition.
								Healing through authentic self-expression and creative
								endeavors.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Virgo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds connected to perfectionism, service, and self-criticism.
								Healing through self-acceptance and practical wisdom.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Libra:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds related to relationships, harmony, and balance. Healing
								through developing healthy partnerships and inner peace.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Scorpio:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds connected to power, intimacy, and transformation. Healing
								through emotional depth and spiritual regeneration.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Sagittarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds related to belief systems, truth-seeking, and expansion.
								Healing through developing personal philosophy and wisdom.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Capricorn:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds connected to authority, achievement, and responsibility.
								Healing through balanced ambition and authentic leadership.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Aquarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds related to belonging, individuality, and group dynamics.
								Healing through embracing uniqueness and humanitarian service.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Chiron in Pisces:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Wounds connected to spirituality, boundaries, and universal
								suffering. Healing through spiritual connection and
								compassionate service.
								<br />
								<br />
								Chiron's journey through our chart reminds us that our greatest
								wounds can become our greatest gifts. Through understanding and
								working with Chironic energy, we can transform our personal pain
								into universal healing wisdom. This process requires courage,
								compassion, and a willingness to face our vulnerabilities. When
								we embrace our Chiron placement, we not only heal ourselves but
								become capable of helping others navigate their own healing
								journeys. The wisdom gained through this process becomes a
								bridge between personal transformation and collective healing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
