import { guide05 } from "@/assets";
import { TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function StarGuidance05() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="Relating: It's Showtime!"
						className="text-[#2E073F] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={guide05}
								alt="Relating: It's Showtime!"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Any relationship can be studied in the stars by casting a composite horoscope chart based on the Midpoints of any two birth charts. For example, suppose the natal Mars of Romeo is at 5° Taurus 30 minutes, and the natal Mars of Juliet is at 7°Virgo 08 minutes.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"A composite Mars would be calculated for the degrees and minutes midway between the two natal positions; in this example the 'Romeo and Juliet relationship Mars' would be at 6° Cancer 19 minutes.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"All points and planets in the composite chart are determined in this way; even the boundary lines separating the twelve houses will represent a composite created from the house cusps of the two charts in question. In this case, Mars in Cancer indicates a relationship of high emotional tone; a tendency to high drama and immature reactions, amongst other possibilities.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"What does the composite chart say about a relationship? It does not describe each of the two people involved; a composite is a picture of the relationship itself, the creative and karmic product of two people as they interact with one another. A composite can address any type of relationship, be it between lovers, parent and child or one friend to another. Some of the factors that could be discussed in a composite reading include:",
								]}
							</TextMask>
						</p>
						<ul className="flex flex-col gap-5 list-disc list-inside">
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								The elemental balance; how many planets and which ones in Fire
								(passion, creativity), Water(emotion, nurturing, dreams),
								Air(communication, thinking) or Earth(grounding in reality,
								sensual pleasures, practicality)? Consider also the chart
								Ascendant sign and planetary ruler, as it plays a prominent role
								in how the relationship presents itself to the outer world, and
								the image to uphold in front of others. Hard planetary aspects
								to either the Ascendant or Midheaven will indicate conflict
								between the two individuals that will need to be mitigated, or
								not, in such matters.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Basic energy flow; change and grow (Cardinal), bend and flow
								(Mutable), static and rigid (fixed); or a mixture, which we
								would hope for?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								How the relationship is defined; why have these two people come
								together? In a relationship midpoint chart the position of Pluto
								and the aspects he makes is the key player. This because his
								placement indicates whether or not the two souls involved have
								tangoed together before and if so, what life lessons in relating
								are they in the process of learning? For that matter, had there
								been relationship failure before and if so, what were the
								mitigating factors? Are the two involved in support of active
								growth for the unit, or hooked up due to the advantages one
								partner offers another?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Is the self-esteem of both people supported? Difficult aspects
								involving Mars, Saturn or the outer planets indicate where
								compassion and sensitively are needed to better respect each
								other's state of being.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								What is the relationship communication style? A composite
								Mercury in Leo and in trine with Uranus will groove with way
								more drama, spontaneity and surprises than composite Mercury in
								Virgo in conjunction with Mars, which will tend to quarrel and
								nit-pick. A prominent Neptune in aspect to Venus, Mars or
								Mercury will translate into challenges with honesty, inflation,
								responsibility, high expectations and/or the withholding of
								information.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								If applicable, will the sexual attraction last over time?
								Generally, a nice sextile or trine between composite Venus and
								Mars will be hard pressed to keep the erotic flame burning over
								the long haul, unless one or the other is hooked up with Pluto
								in workable fashion.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Homebodies or social butterflys? A majority of planets in the
								lower two quadrants of a composite chart bespeak a relationship
								definitely geared to private life and activities at home. An
								array in the upper two quadrants indicate a couple accustomed
								and comfortable with a higher profile life with emphasis on
								career, community service or friends. The majority of charts
								will have some admixture of both spheres of influence, however
								many hard planetary aspects in play denotes challenges in
								finding the right balance.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Having fun, taking risks, being creative and raising children is
								found in the composite fifth house. If there is a karmic history
								of hardship or tragedy involving family it will also be in this
								house and/or the forth house next door.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Are there ongoing unresolved issues concerning money, health or
								work concerns? This is sixth house territory and if significant
								action originates out of that house, one should perhaps think
								twice about sticking around.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Partnership status; each on their own, me on top and you on
								bottom, teacher and student or give and take?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Sex, ancestral inheritance and joint finances, sexual habits and
								transformational potential are all found in the domain of the
								eighth house and its ruler thereof. A concentration of energies
								in this house or related back to it will translate into sex,
								power, money or control struggles of some kind.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								The relationship status quo, past life record and path of soul
								growth. The Moon's Nodes play a very important role in the
								composite chart, with the South Node indicating how relations
								were handled in the past, and North Node indicating the path of
								evolutionary growth to follow in this lifetime. The Nodes
								planetary rulers and their position in the composite chart offer
								a great deal of information on the ease or difficulty in
								following through with the developmental tasks at hand. If Pluto
								is also in aspect to the Nodes or their planetary rulers, the
								current relationship is very important in karmic terms, for
								working on and resolving difficulties or shortcomings
								encountered in other lifetimes.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Karmic factors that can lead to discord or harmony in relating.
								Of course here Saturn and its position in the chart is the heavy
								hitter. If located in an angular house or in hard aspect to
								other midpoint planets like say, Mercury (communication), Venus
								(lack of trust, poor at sharing), Mars (resistance and abuse) or
								Moon (cold, distant, withholding)the couple in question would
								have a lot of work ahead in staying together and engaged.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								It would be a mistake to go looking for a composite partner that
								yields a chart with few prominent aspects between planets, or
								just a lot of sextiles and trines. This sort of combination may
								bode well for a casual friendship, but without the frisson of
								hard aspects and complex patterns, the path together will become
								boring and tedious in no time, not to mention largely
								unconscious in relating activity. This astrologer has
								encountered many clients who know just enough astrology to hurt
								themselves, commonly in looking for that "perfect" person that
								can guarantee some sort of Camelot which, as we all know did not
								play so peacefully after the shine wore off.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
