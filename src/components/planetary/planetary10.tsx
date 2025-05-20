import { NightConcertFull, plan10 } from "@/assets";
import { MediaPlayer, TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function Planetary10() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<MediaPlayer src={NightConcertFull} />
				<div className="">
					<AnimatedText
						text="Meditation on Neptune"
						className="text-[#2E073F] heading font-semibold papyrus leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={plan10}
								alt="Meditation on Neptune"
								className="w-full h-full object-cover rounded-t-full"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Between February of 1979 to February of 1999 Neptune in Sagittarius was the most distant planet from the Sun, due to the extremely elliptical orbit of Pluto, who has since been demoted to planetoid status. Even if distant, the Neptunian song was weaving quite serviceable dreams of capitalistic, religious and sex-drugs-party excess, at least in the West and depending on one's own penchant, of course. At the time of this writing about 22 years later the planet is moving though the Scorpio decan of Pisces, home to planetary ruler Neptune, and the world is awash with Neptunian themes such as a collective refusal to accept certain uncomfortable truths, thousands of displaced, unwelcome refugees and homeless roaming around, a disease pandemic, major pollution problems, sex slavery, child abuse, legalization of mind-altering drugs and escapism directed into virtual electronic realities (the latter item acquired during Neptune's transit of Aquarius).",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Like Uranus, Neptune's color comes from methane in the atmosphere which absorbs red light, in this case scattering out in blue tones. The tipped magnetic field common to both planets might originate in a conducting shell located just below the surface of the cloud cover, rather than from the interior of the rocky core. If so, the shell might be composed of water, methane and ammonia held at just the right pressure to become magnetized. Neptune also sports a couple of large, mysterious dark spots, thought to be long-lived, giant storm systems.1 One of the more esoteric explanations is that the spots are actually time gates, portals to other worlds.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									'Neptune takes 165 years to cross the zodiac, spending about fourteen years in each sign. The planet covers about 2° out of the 360° ecliptic each year. It is retrograde (in apparent backward motion) for about five months at a time. It is the second in order of the "transpersonal" planets, the others being Uranus and Pluto; classically these outer planets are symbolic of natural and social-collective forces operating seemingly beyond control of the individual. However longer astrological familiarity with studying their affects indicates that outer planet energies certainly operate at a personal level, especially when one or more of them is in hard aspect with one or more personal planets (Mercury, Mars, Venus) or the luminaries (Moon, Sun).',
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Astrologically, the Neptunian field of resonance appears wrapped in lavender fog, its true intent hidden behind wafting veils of glamour. Neptune influence is always nebulous and elusive, its mode of action remains obscure and hidden; it can leave great destruction in its wake that becomes apparent only after the damage is done. It governs the deep seas, sleep, poisons, drugs, photography, rubber, the oil industry, the criminal underworld (with Pluto) and all activity that is clandestine and secret in nature. In health issues, it is implicated in foot problems, hard-to-diagnose ailments, hypochondria, catalepsy, drowning and any mishaps associated with ingesting toxic substances or inhaling noxious fumes. Neptune in hard aspect to Mars can be associated with surgical mistakes, con jobs, bad romance and no inclination to tell the truth without embellishments.",
								]}
							</TextMask>
						</p>
					</div>
					<div className="w-full flex items-start justify-start">
						<AnimatedText
							text="A Snappish Shot of Neptune Through the Signs"
							className="text-[#000] subHeading font-normal capitalize leading-tight smythe"
						/>
					</div>
					<div className="w-full flex flex-col gap-10">
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Aries:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Glamorization of freedom, questing, conquering or war. Not sure of self-identity but assertive of the right to do one's own thing on one's own time.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Taurus:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Glamorization of property ownership, stability, permanence or luxury. Great skill in hands-on craftsmanship; study of the erotic arts in depth.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Gemini:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								<TextMask>
									{[
										"Master or disciple of propaganda; devotion to the collection of data but not necessarily doing anything with it. Artistry at being two-faced, or saying one thing while doing another. A master at vivid, stirring imagery using words, voice or electronic media.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Cancer:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								<TextMask>
									{[
										"Idealization of the mother and all matters attached to family; acumen in financial maneuvers, romantization of the traveling life; here today and gone tomorrow.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Leo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Belief in the divine right of kings, especially if wanting to be one; great dramatic talent upon the stage; glamorization of movie stars, the elite or aristocracy.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Virgo:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The idealization of purity and industry; adept in the healing arts and natural magics. Indulging in various vices behind the scenes while maintaining a PC-appropriate business image.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Libra:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								<TextMask>
									{[
										"Idealization of romance, relationship and the formal social contract. Questing after the fairy prince or fey princess; when they betray you, stay on for more and bear the cross until the soul is sucked dry. Quest for a social utopia with the perfect community.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Scorpio:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Glamorization of sexual conquest, beauty, revenge and the dangerous life; the zealots to a cause can become terrorists. Loss of self-definition in others or in a cause. No scruples in business because the ends will justify the means.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Sagittarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-tight tracking-normal">
								<TextMask>
									{[
										"The romance of adventure, freedom and endless new horizons. Idealization of an ideology and/or zealotry and the ability to rotate belief systems in and out of operation, depending on what suits the situation.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Capricorn:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Glorification of the corporate, the buttoned up managerial and the power lunch, accompanied by masterful pulling strings behind the scenes. Willing to pay a fortune for a fantasy world in which one can loose control safely, out of sight.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Aquarius:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Glamorization of the intellect, high tech and robotization; the brave new world on another planet. The darling of eccentrics, the hippest of new agers but not always emotionally available.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="In Pisces:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<div className="flex flex-col gap-2">
								<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
									<TextMask>
										{[
											"The peak in artistry, musicianship, enchantment, illusion, delusion, mystic revelation and preoccupation with vice. Loss of self in the gestalt of heaven, earth or hell comes so easy.",
										]}
									</TextMask>
								</p>
								<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
									<TextMask>
										{[
											"Neptune has dominion over the subconscious and is the planet of mystical spiritual practice and personal interface with the Divine. Generally, Neptune's place in the natal horoscope is exactly where the person is most likely to be deceived by others, to harbor false illusions, be blind to what is really going on. It rules escapism of all types, from drug addiction, through alcoholism to any sort of delusionary tendency. If Neptune is retrograde in the natal horoscope chart, the urge to escapism and self-delusion may be more pronounced, while artistic talents and psychic ability may also be enhanced. Neptune in aspect to Mercury in a natal chart is said to be the mark of the liar; however it could also delineate a tendency to gaslight ones own self or be gullible to every rosy phrase offered up by others. Natal Neptune retrograde in aspect to Mercury can also denote overly blunt honesty, reinforced with a rampant urge to preach some righteous dogma.",
										]}
									</TextMask>
								</p>
								<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
									<TextMask>
										{[
											"Neptune is found at seances, is at home with the con or scam artist and delights in lending a steady hand to fine designs in clairvoyance, hypnotism or camouflage. It is the patron saint of tarot card readers, artists, musicians, poets, dancers, movie stars and magicians. Neptune rules the natural twelfth house of the zodiac where places of isolation and confinement are found such as hospitals, prisons, monasteries and nursing homes. The twelfth house is where Cosmic Mind and the collective mind of society seeps through porous boundaries of the unconscious. The ancestral skeletons in the closet are kept there, and is also is where one meets up with karma and self-undoing. Paradoxically the same cruel ground can be made to yield up our greatest feats of worldly mastery, if only we can get over ourselves.",
										]}
									</TextMask>
								</p>
								<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
									<TextMask>
										{[
											'Esoterically, Neptune represents the higher octave of Venus, therefore resonates to transcendental planes of love, compassion and harmony. Strangly enough Neptune rules both the dissilution of life and the nurturing of new seeds for the next cycle of life experience. Neptune rules the pineal gland and the astral body. Located in the brain, the pineal gland is part of the endocrine system of hormone-producing organs. The pineal gland is most commonly known for producing melatonin, a susceptance associated with sleep induction.2 More importantly, the pineal gland is the seat of the seventh Sahasrara or crown chakra. All chakras are channels for higher energies, however the crown chakra channels energy from the causal plane and when fully active can reverse itself and radiate "like a central sun creating energy and forming above the head of the individual a veritable crown of pure light and divine energy".3',
										]}
									</TextMask>
								</p>
								<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
									<TextMask>
										{[
											"When this center is fully activated, the individual has stopped choosing self unconsciously from moment to moment, and graduates to the place where the entire universe is contained within the self. There is no ultimate understanding of the universe, because to understand is to function as an observer detached from what is beheld; one ceases to be at one with all. This most sacred aspect of Neptunian endeavor is mentioned precisely because astrologically the planet is often implicated in an incredibly nefarious repertoire of activities that perform best in the presence of abject denial. One unifying factor might be that Neptune operates as a dissolving field, eroding away both the highest and lowest products of manifestation when the time has come to fall back into Source.",
										]}
									</TextMask>
								</p>
								<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
									<TextMask>
										{[
											"Just like the Uranian field of frequencies, resistance to the siren call of Neptune can cause far greater harm to the individual than consenting to listen with discrimination. When Neptune takes over, surrender becomes a necessary skill, along with exploring the pratfalls of one's own inevitable delusions about life and one's own compulsive habits of escape. True enough, some drink Neptune's brew to the very dregs and do not live long to tell about it. Positively, consider the cultivation of one's own authentic, healthy, consciously accessible emotional (auric) body; learn to dance to the music of the spheres, sing out the vibrations of harmony in the universe. It was the generation born with Neptune aligned next to Saturn that was inspired to put heavenly harmonies (Neptune) into the material form (Saturn) of the 20th century rock-n-roll renaissance.",
										]}
									</TextMask>
								</p>
								<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
									<TextMask>
										{[
											"Tarot Cards: The Moon, The Hanged Man.",
											"Sepharoth: Va’Daath (the fallen or hidden Sepahroth; bridge over the Abyss, abode of the High Priestess).",
											"Gods/Goddesses: Anubi, Khephra, Sobek, Shiva, Saraswati, Fland, Cyhiraeth, Danu.",
											"Planetary Angels: Asariel, Zadkiel,.",
											"Stone: Pearl, Opal.",
											"Key Sounds: 211.44 Hz, 310.7 Hz, Higher octives of B.",
											"Colors: stone, ultra-violet, lavender, heliotrope.",
										]}
									</TextMask>
								</p>
								<p className="text-black paragraph font-medium montserrat leading-loose tracking-normal">
									<TextMask>{["by Marguerite Hafeman © 2005"]}</TextMask>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
