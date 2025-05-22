import Image from "next/image";
import { guide12 } from "@/public";
import { RoundButton, AnimatedText, TextMask } from "@/components/ui/client";

export default function StarGuidance12() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="Four Faces of Lilith"
						className="text-[#2E073F] heading font-semibold papyrus leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<Image
								src={guide12}
								alt="Four Faces of Lilith"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"A Lilith reading can include four archetypal variations of Lilith energy in the birth chart. For more information on the Goddess aspect of Lilith, please follow this Link. The four faces of Lilith are explained in further detail below.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"I. Asteroid Lilith: Asteroid Lilith orbits around the Sun about every four years. She seems to be related to the suffering that comes from the traditional judgement leveled by society and community, of the active, creative, individuated and sexually independent spirit.1 This would include social rules that intend to tell a man or woman what their proper place, appearance and behavior should be in order to fit in with 'normal' people. Thus in a horoscope chart, asteroid Lilith can represent a place of personal sorrow or weakness that comes from what we were taught in childhood, about how we should look and what we should do in the world.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Suppose a woman could not show her true strong, passionate self to others, instead putting her frustration and anger onto her daughter by saying that her dreams were 'impractical' or 'something nice women don't do'; this could be reflected by asteroid Lilith's place in the daughter's birth chart. Lilith also speaks for the anguish of a man who cannot follow his dream to become an airplane pilot because when he was young, jealous people said he was 'too stupid' or 'that was not his place'. In general, issues of equality in relationship between men's and women's function in society are the domain of this Lilith.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Owning asteroid Lilith energy does not necessarily mean rushing out after a fabulous career; it can be the simple ability to know and value your true self freely, instead of getting lost in a false image made from fear, rebellion or what parents and teachers told you to do. These defenses are created from being attacked with disrespect by others in the family and/or community; the child's honest self-expression was devalued, ignored or silenced. Or the child witnessed this nasty social pressure being applied to others. Asteroid Lilith could be thought of as the patron of prostitutes, gigolos and the sex industry in general. These days in the west it is easier to find a woman car mechanic or truck driver, but Lilith can also represent the heterosexual male who was born to be a dancer or clothes designer none the less. She can also be powerful in the chart of a man who rescues 'women of the night' or in hard aspect, one who delights in dominating or hurting women.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"II. Dark Moon Lilith: Sightings of a mysterious second Moon orbiting Earth were reported starting in 1618. It is only seen when positioned opposite the Sun or when its shadow flits across the face of the Sun. Its existence has not been verified; it is supposed to be a mistaken observation made by a Jesuit astronomer using bad equipment or a Prussian civil servant with faulty vision. Those who claim to have seen it say the Dark Moon is a fourth the size of our Moon and three times as far away. It takes 119 days to complete an orbit of Earth, spending about ten days in one sign of the zodiac. Perhaps this Moon represents a cosmic source of creative energy that does not come from our own world. 1 If expressed without awareness, where it is placed in the birth chart shows exactly where we are led to disaster through our own weaknesses or a lack of enthusiasm for self-sacrifice.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"For sure, this Lilith must be addressed with polite respect and never used to selfish, self-serving ends. If directed by the ego, the energy expresses as matters not turning out as was intended, efforts bringing useless results or even outright disaster. If directed towards a purpose higher than your own personal gain or egotistical bias, the Dark Moon energy symbolizes where we can surrender to the divine cosmic fire that inspires all superior products of human effort. Perhaps the present difficulty in using this energy wisely has to do with the average human preoccupation with power, control, influence over others and/or for more and better stuff as a measure of self-worth; while the necessity for personal limits and endings tends to be denied outright or even declared evil. The Dark Moon's place in the natal horoscope is where conditioned habits and behaviors commonly shown by the birth Moon must be deactivated, in order for the person to grow into a fully open channel for inspired creativity, clear thought and spirituality.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"III. Black Moon Lilith: The Black Moon is the most well-known Lilith energy in astrology; her place in the heavens is based on a calculated geometrical point. The Moon's path around the Earth is elliptical and has two foci, the Earth being one and Black Moon Lilith the other. Black Moon Lilith transits where the Moon's orbit is at its furthest out from Earth, however at its closest reach to the Sun. 1 If expressed in healthy manner, maybe she would represent where we are learning to live in harmony with nature and our own personal limits. This Lilith energy requires cultivation of a gut-level inner wisdom that feels, sees and tastes reality on earth, accepting things just the way they are instead of making them over into false creations shaped and colored by fears, ideals or desires.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Astrologers of the late 19th and most of the 20th century viewed Lilith in mostly negative terms lifted directly from the Hebrew biblical version of the myth that demonized her. The best that could be said of her had to do with awareness of how we give into certain temptations, and therefore need to carefully make wise choices in life.3But what is 'wise' these days? Is it what government, church, parents or peers say? Is it found in Oprah Winfrey endorsements, a well-marketed New Age prophesy or the legal language CEOs use? Actually the biblical version of Lilith aptly describes what happens to people who repress their sex drive or natural creativity in service to conditioned definitions of appropriate behavior, for example noting that a 'good' woman is one who 'lays beneath her mate'. biblical Lilith also provides a good working description of the dysfunctional character traits and health problems to be expected of a woman or man who does not seek to know what their own set of authentic, self-sufficient and creative inner values might be, let alone put them into action. Certainly a certain sort of safety may be found by projecting inner deadness onto various bodily functions, one's genetic inheritance, other people or peculiar compulsions.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"But it is also true that often when one does take up the challenge of authentic self-expression and personal creativity, neither they or their product are necessarily welcomed or positively acknowledged by the family, tribe, clan or social group; take the artist Vincent Van Gough for example. Today his paintings are valued at the level of nearly priceless; during his lifetime in the nineteenth century he could not sell a single piece and lived on the generosity of his brother. A vital part of of this authentication process includes one's creative expression being honed and trimmed into lean, mean archetypal shape by the material forces and substances to which it is exposed. It cannot rest at being merely eccentric or alone; it must strive to find a way to be expressed or function in a useful and socially tractable form within civilization. This process also brings pain to the nascent individual because cherished dreams, immature emotional patterns, denials, noble but impractical ideals and generally silly notions must be laid aside on the journey. On the other hand, like Van Gough one may simply be a phenomena ahead of its time.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Where the Black Moon resides in the birth chart, is exactly where we don't even see certain personal life situations as a source of temptation or personal weakness in the first place. We see what we want to believe or we will force change on our terms, ignore it, apply a glossy 'positive' spin to it or label it 'Their Fault'. So the Black Moon can represent heartbreak, frustration and wide detours in life around cherished goals one assumed one was going to achieve, be or have. Instead, in certain circumstances one may be treated to the whims of sheer injustice; an area of life over which one intended to have full control remains out of reach, mired in failure or under constant revision. Certain endeavors close to the heart remain a constant source of grief or embarrassment; weirdos and freaks populate the very arena in which you expected gracious company.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Relationships of all kinds get tangled in Lilith's snare, bringing on intense unions with dangerous or unsuitable others, denying quality companionship or disrupting harmonious interaction and honest talk. This happens because one has judged the creative parts of oneself and found them to be unsuitable, especially if held up in comparison to conventionally approved images.This process can be helped along by an abusive parent or sibling who by their actions will imprint a dysfunctional program about the nature of love and ones own lovableness upon the individual. As an adult one projects these rejected parts of self that have been judged as evil onto someone else, often through the choice of lovers. Let someone else express this dirty stuff for you. The lover or love affair can take on an ugly, perverted or abusive form because you have judged your own inner content thusly.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"In a man's chart Black Moon Lilith can represent his creative muse or the type of woman most suited to him; but only if he is completely honest with himself. Therefore Lilith often indicates exactly the kind of woman a man would be most terrified of. In a woman's chart Black Moon Lilith is also a potent indicator for female diseases such as cancer or tumors in the reproductive organs, miscarriage, abortion, sexual psychosis and eating disorders. All this related to judgement and rejection of the feminine body; a lethal sort of poison that can be passed down from mother to daughter. On the flip side, strong Lilith energy can bring blessings of sex appeal, personal charisma or intense magnetism. Sometimes she can show where an Amazon's courage can be applied to break free from abuse or restriction and where slow healing can craft a life built on one's own terms.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"IV. Selena the White Moon:The White Moon is a calculated point originally brought to modern attention by some Russian astrologers who in turn were influenced by Avestan astrology, which is based on Zurvanite texts representing an extinct heretical branch of Zoroastrianism(5). It is a polarity point of the Black Moon, that is associated with a hypothetical perfect circular orbit of the Moon around the Earth. It is also not to be confused with Priapus which is a calculated point directly opposite the Black Moon, which is supposed to be a celebration of inherited traits and masculine energy, more or less. Both the Black Moon and Priapus positions are taken from the oscillating apogee of the Moon's true orbit, which is elliptical rather than spherical. There is also debate between the location of a Mean Selena and a True Selena, just as there is a sizable difference in location between the Mean Black Moon and the True one. For both, the Mean location is based on an average of oscillation movements over time, whereas the True location is taken from one designated moment in time and therefore is considered more accurate.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"In a natal chart the White Moon would represent a point reflective of one's higher self in as integrated state of grace instead of split out and schizophrenic; it also designates an area of general good luck and beneficial karma that can come from pursuing the high road relative to the affairs of the house and sign in which the White Moon is found. However there is disagreement over which side of the fence the benefits of Selena's position will fall. For example, according to one astrologer a White Moon located in Taurus or the second house would be encouraged to find spiritual sources of abundance rather than be overly preoccupied with the pursuit of material gain, whereas another suggests that due to past life karma the native will materially benefit from being a good steward of financial affairs. This astrologer notes that wherever Selena is located either natally or by transit she can function as a sort of 'Get Out of Jail Free' card, if one is sincerely interested in awakening, evolving and doing right by natural and spiritual law; but then the same could be said for an enlightened Black Moon position also.",
								]}
							</TextMask>
						</p>
						<ul className="flex flex-col gap-2">
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								(1) The Dark Goddess Lilith, by M. Kelly Hunter, The Mountain
								Astrologer Magazine, April/May 1999.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								(2) The Dark Moon Lilith in Astrology, by Ivy M.
								Goldstein-Jacobson, Graphics United, Covina, California, 1961.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								(3) Lilith Insight, New Light on the Dark Moon, by Mae R.
								Wilson-Ludlum, Macoy Publishing and Masonic Supply Co., Inc.,
								1979.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								(4) Black Moon Lilith Through the Houses, by Claude Weiss,
								Mountain Astrologer Magazine; Part I, Aug/Sept. 1999 and Part
								II, Oct./Nov. 1999.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								(5) Lilith and the Black Moon, by Juan Antonio Revilla,
								http://expreso.co.cr/centaurs/blackmoon/lilith.html
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								(6) Selene, by Suzanna Meel,
								https://beyondbinary.fandom.com/wiki/Selene.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-fit bg-[#936d42] flex items-center justify-between bg-secondry cursor-pointer rounded-md group mt-5">
				<RoundButton
					href={`/stars/star-guidance`}
					title="Go Back"
					className="bg-white text-black"
					bgcolor="#7a74ef"
					style={{ color: "#fff" }}
				/>
			</div>
		</div>
	);
}
