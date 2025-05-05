import { guide02 } from "@/assets";
import { TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function StarGuidance02() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="The Solar Return Chart"
						className="text-[#2E073F] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={guide02}
								alt="The Solar Return Chart"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Each year the Sun returns to the same sign, degrees and minutes it occupied when you were born. A horoscope chart generated for this special moment during the most recent birthday can be used to forecast the tone, activity emphasis and challenges for the year ahead.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Except for the Sun being in the same position as it was natally, every other planetary position and house cusp would likely be different from the natal chart placements, because the planets are always on the move. The time at which the Sun will align with it's natal spot will have shifted somewhat; this is why we lose a day from the month of February every four years, so the calendar we employ doesn't get too far out of line with the movement of the Sun along the ecliptic.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The return chart can give indications as to whether the pace of life in the coming year will be fast or slow, easy going or full of change. Health issues, relationship status, job changes, moving or travel and more can all be discerned from reading the chart. Still, the chart should be read from a perspective different from that used in the consideration of transiting planets relative to a natal chart. The solar return is the reflection of a developmental theme; it will show where and how all the essential action will take place, but the picture should be taken more as a gestalt of presence, a structure of several levels upon which more or less growth or loss can occur, depending on what the native is willing to embrace. The following features should be considered:",
								]}
							</TextMask>
						</p>
						<ul className="flex flex-col gap-3 list-disc list-inside">
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								First, consider the balance of fire (passion, inspiration,
								entrepreneurial ability, creativity), air(mental health,
								speaking, writing, commerce and travel), water (feelings,
								intuition, emotional health, artistry)and earth (tangibles such
								as the job, house, pleasure, kids, etc.)in the chart as this
								shows where to expect the most movement.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								The pace and nature of activity to be expected can be determined
								from the signs ruling the angles of the chart and the houses in
								each quadrant of the chart that hold planets. Energy expression
								for change can be quick and purposeful, even impulsive (Cardinal
								Aries, Cancer, Libra, Capricorn); flowing, compromising and
								adaptive (Gemini, Virgo, Sagittarius, Pisces) or fixed,
								stubborn, materialistic, hard to sway (Taurus, Leo, Scorpio,
								Aquarius).
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Many planets in the angular houses indicate greater challenge
								likely in the first four months of the year; in succedent
								houses, the middle four months of the year; in cadent houses the
								last four months of the year. If the planets are well scattered
								through out the chart and making many hard aspects to one
								another (as in a conjunction, square or opposition) one can
								expect to be kept hopping on a regular basis for much of the
								year.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								The central theme of focus for the year is determined by the
								solar return Sun and the Moon's Nodes. Suppose the return Sun is
								located in the eleventh house; much energy and effort will
								likely be directed into networking, community affairs, friends,
								lovers, fantasies and wishes during the upcoming year. The
								Moon's Nodes are relationship and status quo indicators; for
								example if placed across the second and eighth houses,one will
								have many interpersonal dealings centered around money,
								investments, assets or debts; also personal values versus
								control, power, sex and intimacy, or powerful institutions and
								people. One should also consider the planetary rulers of the
								Return Nodes; where they are placed and what aspects are made to
								other planets. The Return Nodes will tend to run like a
								secondary program relative to where the nodes in the natal chart
								are located.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								The zodiac sign on the Ascendant or eastern horizon line of the
								return chart, along with its planetary ruler is considered the
								chart ruler; as such the energy represented by the sign and the
								location and aspects of its ruling planet will play an important
								role in influencing the proceedings. Suppose Scorpio is on the
								Ascendant; the traditional planetary ruler Mars is in the first
								house of basic persona; one is likely to have intensified drive
								and ambition this year; if other factors agree health, vitality
								and libido will be in excellent shape. The modern ruler Pluto is
								in the second house of values, self-esteem and ways of making
								money. Much energy is likely to be directed into transforming
								how one goes about making money; along the way some ethical
								dilemma will likely need to be addressed, or not.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Key planetary influences shift over the course the year, for
								example as in action (Mars) and money (Venus). As the energies
								represented by these faster moving planets visit the various
								solar return houses, they lend their resonance to the issues
								represented in that house. For example, during the five weeks
								Mars will visit the sixth house, the native will likely be more
								than usually active in dealing with work, co-workers, service,
								mental or physical health or small animals.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Questions to ask include what processes are under way or in what
								way is the individual moving on to a new phase in life? Are the
								individual's plans and hopes supported or challenged by the
								Return chart? concisely, how practical and realistic is one
								being about proposed projects? What are areas of limitation that
								one might need to work around? Saturn in the Solar return fourth
								house indicates an increase in burdens and responsibilities
								associated with home base; a child could be acting up, the
								spouse isn't working or a parent needs home care. Conversely,
								one could be kept so busy in public life that hearth and home
								are neglected. Positively, Saturn in the fourth always indicates
								laying new foundations for future success, especially as
								pertains to real estate or business.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								How do the birth chart planets and points tie in with the Solar
								Return chart? For this part of the analysis, the natal planets
								and points are arranged around the outside of a bi-wheel,
								relative to the Return chart. If there are many major aspects
								formed between natal points and the solar return pattern, the
								year in question is likely to be quite challenging and very
								pivotal in the conduct of affairs. One is definitely being asked
								to work on unfinished business or further develop some latent
								potentials evident in the natal chart.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Major planetary transiting and eclipse events during the year do
								impact on themes presented in the solar return chart. Transits
								involving the big boys from Jupiter on out or some of the major
								asteroids, hitting on the angles of the chart or sitting in
								major aspect to Return planets will be actively felt and acted
								out on the stage of life as indicated by the themes shown in the
								Return chart. Ditto eclipses, especially if falling within three
								degrees either side of a Return or natal planet or angle. An
								average year has four eclipses; they usually occur in pairs
								consisting of a solar eclipse (change in direction or essence)
								and a lunar eclipse (change in form) about two and a half weeks
								apart.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								The month within which an eclipse occurs is likely to be quite
								changeable. If at all possible it is better to wait until the
								eclipse period is over if wanting to implement major decisions
								or changes. A common theme can involve information that has been
								with held or hidden circumstances which are likely to be
								revealed as the eclipse period gets underway. Souls may elect to
								be born or die close to an eclipse. Those who are born near one
								will face a major crossroads of destiny at some point of their
								life anyhow. Suppose a solar eclipse occurs on the Return chart
								Moon; this can translate into changes involving the native's
								mother; a change in residence, status or a change in heart that
								ends a relationship.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
