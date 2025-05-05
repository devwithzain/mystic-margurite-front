import { NightConcertFull, plan05 } from "@/assets";
import { MediaPlayer, TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function Planetary05() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<MediaPlayer src={NightConcertFull} />
				<div className="">
					<AnimatedText
						text="Meditation on the Moon"
						className="text-[#2E073F] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={plan05}
								alt="Meditation on the Moon"
								className="w-full h-full object-cover rounded-t-full"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The Moon is the only satellite of Earth and is anciently considered to be a mirror of the Sun. On a deeper level, the Sun represents God's presence made manifest and all things material are reflected images of the Grand Design. The movement and phasing of the Moon does literally affect us through gravitational pull and the water content of our bodies, vibrating the instinctual and emotional rhythms of existence also. Therefore, early on the 28 day cycle of the the Moon in its various phases served as a perfect, easily accessible calendar and template for anything from navigation and crop cultivation to linking up by menstrual cycle or determining a timeline for projects.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"A few interesting factoids about the Moon:",
										"Mass: .012 Earths.",
										"Volume: .020 Earths.",
										"Mean Radius: .273 Earths.",
										"Circumference: 10,921 km.",
										"Surface Gravity: 1.62 meters per second.",
										"Revolution Period 27.3217 days.",
										"Synodic Period: 29.3217 days.",
										"Sidereal Rotation Period: 655.728 hours.",
										"Mean Distance from Earth: 378,000 km at the equator.",
										"Surface Temperature: -290° F to +240° F.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The same face is always seen from Earth as the Moon rotates on its axis in the same amount of time it takes to orbit Earth. The Moon’s gravitational pull generates a tidal force, which causes the Earth’s water to bulge out on the side, as a high tide. The satellite has a very weak interior magnetic field but very strong magnetic surface spots. The solar wind and impact dust induces a magnetic field of sorts that adds a bit of aura of the Moon, but there is no atmosphere. There is lots of water there in the form of hydrates and hydroxides.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Over the course of roughly a month the Moon appears to wax from a crescent of lighted surface on the right side to a gibbous Full Moon, then wanes gradually to a visible crescent on the left side followed by a three day period of total darkness. This caused by the position of the Moon relative to the Sun as the Moon orbits the Earth. The ancients used this movement to create a 13 month lunar calendar by which to track time. This movement also came to be correlated with cycles of birth, growth, maturity and ending.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The birth of the New Moon is not seen, as it occurs during that three day period of darkness when things are said to end, then transform miraculously into new life. Once a right side crescent is seen, the rest of the First Quarter is a good time to get new projects up and running and the Second Quarter good for bringing projects to fruition. The time of Full Moon marks a culmination of efforts and a climax of activity, while the Third Quarter is for a release of product out into the world; the Fourth Quarter is a time for conclusion, rest and an evaluation. Correspondingly, when in rhythm with nature a woman is fertile and ready to conceive in the days coming up to Full Moon, in rest, repose and rejuvenation at the Balsamic Moon.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Although generally the scientists sneer, timing one’s activities by the position of the Moon relative to phase and place in the heavens is definitely recommended for good timing in all major affairs. All ritual, meditation, visualization and ceremonial magic benefits from right timing as determined both by phase and placement of the Moon, and placement of a specific planet that represents the god/goddess or energetic influences desired for interaction. There are Light Moon Magics for the promotion of growth, connections and abundance and Dark Moon magics for wisdom, contact with the fairies, banishment of obstacles and rejuvenation. If a Void of Course Moon is in play (the Moon will not make any more Ptolemaic aspects to other planets before reaching the end of the zodiac sign in which it is in residence), it is not a time to try and get things done or firm up new commitments.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"In astrology the Moon as an archetype correlates with influence of the Mother, the past, ancestral conditioning, feelings, instincts and intuition, also security needs. The Moon is the fastest moving body in an astrology chart and its movement by transit definitely serves as a trigger for events both collective and personal on earth. Any planet meeting by major aspect with the Moon can have a strong effect on emotional and actionable expression so symbolized by the two planets in question, as the Moon is a strong receiver of energy.",
								]}
							</TextMask>
						</p>
					</div>
					<div className="w-full flex flex-col gap-10">
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Moon/Mercury:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Expression of feelings, desires, fears, opinions; the need to learn, teach or express in general.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Moon/Venus:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Expression of attraction, love, beauty, femininity, values, mother-daughter relations.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Moon/Mars:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Expression of passion, reaction, anger, fear, assertiveness, the desire to acquire.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Moon/Jupiter:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Expression of religious or political fervor, do it more, bigger, better; expansiveness and exaggeration.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Moon/Earth:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The phases as viewed from earth do have an effect on earthly timing, action and mood. An eclipse occurs when the Moon's Nodes (where the Moon crosses the ecliptic as it orbits the earth)land very close to a New or Full Moon. A lunar eclipse (Earth passing between Moon and Sun) often signals change happening via a loss of some kind; a solar eclipse (Moon passing between Earth and Sun) can signal a change in consciousness, change in fortune good or bad or change in leadership especially on the world stage.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Moon/Saturn:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Expression of conservatism, pragmatism, repression, withholding of love, depression, conditional love, identity sublimated to Father or parents in general.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Moon/Uranus:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Expression of reaction, volatility, experimentation, control, upset, sudden change, sudden destruction, innovation, quirky moods.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Moon/Neptune:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Expression of the dreamy, other-worldly, spiritual; fascination with magic, enchantments and seductions, music or art. An ambiguous sense of self-identity, drawn to various vices.",
									]}
								</TextMask>
							</p>
						</div>
						<div className="w-full border-t border-black/20 pt-2">
							<AnimatedText
								text="Moon/Pluto:"
								className="text-[#000] subHeading font-normal forum capitalize leading-tight smythe"
							/>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Expression of power or powerlessness; control or lack of control; political power struggles and mass mob movements. Power and control issues with a parent or authorities in general.Fascination with the shady side of life.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The Moon's frequency is also highly colored by the zodiac sign it is in; a Moon transiting in Aries pushes us out the door to start new projects or otherwise assert ourselves out in the world, whereas a Moon in Leo is more interested in holding a show at center stage or ruling over whatever domain it commands. The natal Moon placement in a birth horoscope carries a lot of impact in the overall gestalt of individual character and psyche. It is called a Luminary along with the Sun, and is commonly defined as the Id, whereas the Sun represents Ego. For those who believe in reincarnation, the Moon's position relative to the Sun at birth provides much information about the personality gestalt, relational orientation, deployment style and shadow traits of the soul in the current lifetime.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The natal South Node of the Moon points to past lives; planetary aspects to it associate with gifts, compulsions, blockages or karma still active in the current life. The natal North Node of the Moon points to the path of soul growth and evolution; planetary aspects to it associate with drives, ambitions or blockages still active in the current life in addition to signaling the way forward if looking for the purpose for being here. In mundane astrology the Moon represents the public at large and its position figures greatly in the natal charts of whole nations and any business or institution. It is always active by transit in a major earth event such as a hurricane or earthquake. It is always active by transit at the time of a major accident or commitment of a crime of passion, and at the time of death.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The Moon Rules in Cancer, is Exalted in Taurus, in Detriment in Capricorn and in Fall in Scorpio. A well placed and aspected natal Moon lends itself to empathetic connection, making people feel at ease and doing well with women in general; an afflicted Moon has great difficulty connecting with the public and can be very tiresome with moods, tantrums and drama. In a natal chart it stands for the influence of the Mother, feelings, emotions, security needs, the past and ancestors. The Moon rules silver and silverplate, the opal, pearl and moonstone. It delights in kitchenware, collections, laundry and bathrooms, besides boats, sleighs and submarines. It also rules scaly fish, turtles, birds, cattle and sheep. It supports whatever is brewed or stewed, and whatever is cultivated in the garden. The Moon rules the stomach, breasts, mammary glands, the womb, conception, blood serum, the fluids of the body and the left side of the body.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Calling down the Moon can be an excellent training exercise for learning to work with magical ritual. The Moon is associated with the Sephira Yesod and as such is the gateway to communion with Archangel Gabriel, the ancestors, access to the Akasha and experience of the astral plane as the first creative, formative interface between the material and the non-incarnate. A Moon rite also brings delight to the local fairies and carries a healing vibration that promotes inner peace.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The purpose of doing any ritual is to still the usual monkey brain and render it open to connection with other dimensions; to experience the Divine in nature directly, to experience incoming archetypal frequencies directly, or to invite a spirit guide, angel or divinity of choice in for communion and fresh creative inspiration, for example. Meditate too, on the presence and place of the Moon between two towers in the Tarot Arcanum XVIII; also the Moon and Sun as depicted in old Masonic drawings, shining on either side of an arch supported by two pillars, as there is much hidden power there. If one has serious control issues or fear of the state of surrendar this sort of activity will not yield much result. It is also not wise to undertake such a project with others who are simply interested in a lark or having fun at another’s expense. Every action has a reaction, every cause an effect; dancing in half-way measures tends to draw the more mischievious entities into one's own astral plane, which can lead to further deviations from the path of awakening.",
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
