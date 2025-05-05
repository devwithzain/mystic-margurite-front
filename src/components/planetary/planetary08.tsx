import { AuroraFull, plan08 } from "@/assets";
import { MediaPlayer, TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function Planetary08() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<MediaPlayer src={AuroraFull} />
				<div className="">
					<AnimatedText
						text="Meditation on the Saturn"
						className="text-[#2E073F] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={plan08}
								alt="Meditation on the Saturn"
								className="w-full h-full object-cover rounded-t-full"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Saturn is the most distant of the visible planets, taking approximately 29.5 years to complete one orbit of the zodiac. Its mean daily motion is 2 minutes of arc. Saturn represents the principle of limitation, restriction and structure. It is associated with time, aging, maturity, wisdom, and the crystallization of experience into form.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"In traditional astrology, Saturn was known as the Greater Malefic, bringing hardship, delays, and obstacles. However, modern astrology recognizes Saturn's role as a teacher, helping us develop discipline, responsibility, and perseverance through facing life's challenges.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Saturn rules both Capricorn and Aquarius in traditional astrology. It is exalted in Libra, where its qualities of balance, justice, and structure are enhanced. Saturn's influence helps us build lasting foundations, master our craft, and achieve long-term goals through patient, methodical work.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Saturn's placement in a natal chart indicates areas where we face our greatest challenges and where we must work hardest to achieve mastery. These are also the areas where we can develop our greatest strengths through persistence and dedication.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The Saturn Return, occurring around ages 29-30, 58-59, and 87-88, marks significant periods of transition and maturation in one's life. These times often bring major life changes and the opportunity to reassess one's path and purpose.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Saturn's influence can manifest as fear, depression, or restriction when poorly aspected, but it can also bring stability, authority, and lasting achievement when well-placed. It teaches us the value of patience, discipline, and accepting responsibility for our lives.",
								]}
							</TextMask>
						</p>
					</div>
					<div className="w-full flex flex-col gap-10">
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Aries:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Challenges in self-assertion and initiative. Learning patience
								and strategic timing.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Taurus:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Lessons in material security and self-worth. Building lasting
								resources through careful management.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Cancer:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Emotional security challenges. Learning to build emotional
								boundaries and self-nurturing.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Leo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Creative expression restricted. Developing authentic
								self-expression through discipline.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Virgo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Perfectionism and self-criticism. Mastering skills through
								methodical practice.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Scorpio:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Deep emotional transformation. Learning to handle power and
								intimacy responsibly.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Sagittarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Restricted expansion and beliefs. Building wisdom through
								practical experience.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Capricorn:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Strong ambition and authority. Mastering structure and
								responsibility.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Aquarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Innovation through structure. Building lasting social reforms
								and group contributions.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn in Pisces:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Spiritual discipline required. Learning to structure imagination
								and compassion.
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Saturn's Influence:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								Saturn governs structure, boundaries, and limitations in life.
								It rules bones, teeth, skin, and the skeletal system. Its metal
								is lead, and it's associated with the color black. Saturn
								teaches us through restriction and delay, helping us develop
								patience, wisdom, and mastery. <br /> <br />
								The placement of Saturn in a natal chart shows where we face our
								greatest challenges and where we must work to develop discipline
								and responsibility. Saturn's aspects to other planets indicate
								how we handle authority, structure, and long-term commitments.
								Through Saturn's influence, we learn to build lasting
								foundations and achieve meaningful accomplishments through
								sustained effort and dedication.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
