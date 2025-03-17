import { guide10 } from "@/assets";
import { TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function StarGuidance10() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="Exotic Nuts and Bolts"
						className="text-[#936d42] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={guide10}
								alt="Exotic Nuts and Bolts"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"All sorts of interesting information about ourselves is hidden in the patterns and points that can be generated out of a natal horoscope. The features listed below are quite useful for exploring in-depth personal characteristics and gathering further insight otherwise not readily apparent from analysing the geometric aspects made by the planets. These additional items can do much to explain how the presence of a transiting planet can coincide with some very dramatic action in mundane life, yet those planets or asteroids customarily involved under such circumstances are not in line of contact at the time.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Degree Symbols for the natal Ascendant and Midheaven: There are several sets of degree symbols available in the world of astrology resource. Degree symbols are created by individuals channeling a psychic vision during singular contemplations of each degree of the zodiac, numbering 360 in total. Strange though it may seem, the symbols corresponding to the pertinent sign, degree and minute can shine much light on basic motivating attitudes, along with the subsequent expression these motivators might display in mundane life. They can also point to elements of inherited predisposition and/or the role of fate as concerns the purpose of one's existence here on earth.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"As with most anything in a birth horoscope, these points can be expressed positively or negatively in life, depending on our conscious awareness and intensions. The most commonly used set is the Sabian Symbols compiled by Dr. Marc Edmund Jones, from work done with a clairvoyant back in 1922.1 These are frequently charming in content but rather abstract in form; it can be difficult to understand and apply the meanings provided with each degree symbol. One of the most stimulating sets of degree symbols comes from Sepharial, a well-known 19th century astrologer, clairvoyant and occultist who claimed to have translated his from a Renaissance-era work entitled La Volasfera. Another often-used set was channeled by Charubel, a 19th century Welsh clairvoyant, astrologer and healer. Both sets can make useful contributions to chart interpretation, however these symbols require a strong constitution not easily offended, as they can be chillingly dramatic and even fatalistic in tone.2",
								]}
							</TextMask>
						</p>
						<div className="w-full flex items-center justify-center">
							<p className="text-black subHeading font-semibold montserrat leading-tight tracking-normal">
								<TextMask>
									{[
										"Example: Degree Symbols for the birth chart of the late hotel magnate Leona Helmsley:",
									]}
								</TextMask>
							</p>
						</div>
						<ul className="flex flex-col gap-5 list-disc list-inside">
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Ascendant: 18°Cancer 0'.The chart Ascendant gives a very potent
								indication about the basic persona and public image the person
								presents, not necessarily their true character. From La
								Volasfera: "A cluster of faded exotics, very sweet and sickly to
								the smell." It indicates a person of extreme frailty of
								character, unable to hold his own in the broad fields of life,
								and very timid of exposure to the keen winds of criticism. One
								who will live in luxury even when of small means; a person with
								very little mettle, fond of pleasures and of fictitious
								stimulants. The native will eventually fall on evil days. It is
								a degree of SATIETY.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Midheaven: 27 ° Pisces 48', which is rounded up to 28° for the
								degree symbol. The Midheaven forms the cusp or boundary of the
								tenth house of career management and public reputation; it
								indicates how the native will express authority and carry
								themselves in public life. "A serpent standing erect within a
								circle of fire". This is the index of a mind of more than usual
								powers of intellect and a soul disposed to searching out the
								deeper secrets of nature...From him, as through a lens, the rays
								of a higher truth and deeper understanding will converge and be
								dispersed again for the better instruction of the world and its
								manifest advantage. He will take life at the crisis and turn it
								back from the Gates of Death. It is a degree of KNOWLEDGE.
							</li>
						</ul>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Midpoints: A direct midpoint consists of the sign, degree and minute situated exactly in the middle of the shortest distance between two planets. The location and meaning of some of these midpoints is worth knowing, since a transiting or progressed planet passing over the point can activate issues represented by the two planets from which the midpoint was made. If a midpoint happens to fall within one degree of another natal planet, the influence of the midpoint can be quite powerful in affecting the expression of the energies symbolized by that planet also. Midpoint contacts can explain why there may be no major transits aspecting to natal planets at a certain time, however matters are in a tumult none the less.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Composite charts are created from the midpoints of two natal charts, commonly of individuals in relationship. Composites are useful for analysing the nature and quality of a relationship between two people, rather than denoting characteristics about the individuals themselves. A composite can even be made between the natal horoscope of a city and of an individual interested in learning more about whether a particular urban location will be favorable for him or not.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Antiscia: These are defined as the mirror image of a given planetary position, with the zodiac signs Cancer and Capricorn serving as the central axis. The pairs of signs that mirror each other this way are as follows: Gemini-Cancer, Taurus-Leo, Aries-Virgo, Pisces-Libra, Aquarius-Scorpio and Capricorn-Sagittarius. Suppose the natal Sun is located at 4 ° Capricorn; the antiscia for this position would be 26 ° Sagittarius. A transiting or progressed planet making an aspect to this antiscia, especially by opposition or by passing over it, will be felt as powerfully as a transit to the natal position. The difference is in the 'flavor' of the sign involved and the house location. A ninth house Sun in Capricorn could be indicative of one who loves to engage in higher learning; its antisica point would have a flavor of dogmatism and restlessness to it. Uranus passing slowly over this point could trigger radical ranting or wanderlust in an otherwise staid Capricornian native, even though there is no major aspect being made by Uranus or to the natal Sun otherwise.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Sun-Moon Blend: Where the Moon is located in the natal chart symbolizes the strongest survival needs of the personality, besides giving indications on influences of the past, ancestors and how one ticks emotionally and intuitively. The location of the natal Sun indicates the prime energy focus of the true spiritual center of identity here on earth. These two points of self-expression may or may not function in harmony. They are further affected by the 'tone and flavor' bestowed by the sign and house each luminary occupies; a possible 144 different combinations makes each of us unique; additionally so when adding in the positions of the Ascendant (how you present to others) and Midheaven (public image and reputation).",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The phase of the Sun and Moon relative to one another can be used to determine where an individual is located along a path of soul development spanning several lifetimes in a reincarnational cycle. Some astrologers suggest that there are eight primary lifetimes spent working on a single developmental theme, along with numerous 'secondary lives' wherein the pressure to transform and grow is not so pronounced or the native is working on other issues. For example, a new moon individual is in the process of exploration and experience; he is just beginning to formulate the nature of his goals. A balsamic moon individual is met with a more pressing necessity of balancing any outstanding karmic business, as this lifetime may be the last working on a particular theme. The phase relationship between the luminaries can also provide much useful information for determining compatability potential in couples.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Crucial Planetary Pairs: The signs and houses occupied by two planets at birth, aspects they might make to one another and the phase relationship the two form together can provide much information about how we relate to one another intimately, the pursuit and expression of desire and how one might go about weaving inspiration into earthly necessity. The planetary pairs commonly examined could include Venus-Mars (love-desire-ambition), Mars-Pluto (ambition-violence-power) and Saturn-Uranus (earth versus heaven; practicality versus creativity).",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Fixed Stars: Any prominent stars located close by planets and points at birth can serve as potent indicators for destiny and disposition. The constellations to which certain high magnitude stars belong can denote archetypal collective myths that can play an important role in determining the life direction, whether with conscious permission or not. A native born with the constellation Pleiades prominent in the first house for example, may be drawn to a career in agriculture. Ancient farmers of the northern hemisphere waited for the appearance of this constellation on the eastern horizon near dawn before planting their crops, as the risk of frost was then likely to be over for the season. Note also that central Washington DC was likely laid out and built to be in alignment with the constellation Virgo, with homage also given to the major stars Spica of Virgo, Arcturus of Bootes and Regulus of Leo.3",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Transneptunians: No, these aren't boogeyman that hid under the bed when you were born. Transneps represent sensitive 'energy vortex' points which also can be plotted in regular orbital patterns at some distance out past Pluto. They were originally discovered and developed by Alfred Witte during free time in the trenches of World War I. Even though none so far have been correlated to an actual physical object, their position in the horoscope chart can indicate potent foci of influence. Astrologer Blake Finley's descriptives for them include the following: Cupido (family, relations); Hades (hidden matters, the past, decay, atrocity); Zeus (spontaneous, purposeful, energetic); Kronos (self-reliant, prominent, arrogant); Apollon (liberal, versatile, scholarly); Admetos (inhibited, restricted, self-disciplined); Vulkanus (powerful, influential, in control); Poseidon (intuitive, idealistic, spirit-conscious).",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Note that astronomers have lately defined a category of objects that orbit in the region beyond the planet Neptune as Transneptunians also. These include objects of the Kuiper Belt, Scattered Disk and the Oort Cloud. The major planetoids discovered and named so far in this area include Pluto and Charon; also Sedna, Eris, Orcus and Ixion. Each one of these relates well astrologically to development of the higher mind and seeking interface with cosmic intelligence, often through experiences that involve suffering and transformation.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"(1) The Sabian Symbols in Astrology, by Marc Edmond Jones, Aurora Press, Santa Fe, NM, 1993.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"(2) The Degrees of the Zodiac Symbolized, compiled by Alan Leo, Astrological Manuals No. 8, The Astrology Center of America, 2004.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"(3)The Secret Architecture of our Nation's Capital, by David Ovason, Perennial Harper-Collins Publishers, New York, NY, 2002.",
								]}
							</TextMask>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
