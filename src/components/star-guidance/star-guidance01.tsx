import { guide01 } from "@/assets";
import { TextMask } from "@/components";
import RoundButton from "../round-button";
import AnimatedText from "@/components/animated-text";

export default function StarGuidance01() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="The Birthday Horoscope"
						className="text-[#2E073F] heading font-semibold papyrus leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={guide01}
								alt="The Birthday Horoscope"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"If you are new to the world of astrology or haven't had your natal chart analysed in awhile, a birth chart reading can provide a useful platform for exploration of life past, present and future. Given the date, place and time of birth, a horoscope chart is cast that shows a map of the heavenly bodies at that time. The astrologer examines the positions of birth planets, key asteroids and certain calculated points in the heavens, along with whatever major geometrical aspects they may make to one another.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"This process translates into to learning more about oneself both in terms of inner life and outer circumstances that may befall us. We can find out about why we are the way we are; we can also explore the opportunities and challenges that might play out in our life in times to come.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The zodiac signs that rule the houses in a chart indicate where unique kinds of archetypal vibrations are 'singing' in the heavens. Two examples of vibrations that can be measured by scientific instruments are harmonic (literally cascades of sound) and electromagnetic resonance. This music mixes with the unique vibrational energies emitted by each planet and everything on the plane of manifestation. The planets also make angles to one another as they orbit the Sun, so they are making music together, sometimes sweetly and sometimes in discord. No part of the horoscope map can be treated as separate; every part of it affects everything else. The astrologer can look at the 'music' represented in a chart and tell the one who was born under a particular composition what it all might mean for their life here on earth.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Why does astrology work? I really can't say using mere words, in the end one knows by feeling, intuition, visions and experiencing. An astrologer must have some mathematical and astronomical ability and it is geometric angles that are examined in order to deliver information to the inquirer; however no skilled astrologer can operate from a mere ability to read angles and consult a cookbook of definitions. Alternative healing methodology and astrology are so far the only science where quantitative measurement and physical phenomena are combined with inner intuition and outright psychic ability to obtain the correct picture. This is the true nature of participating in a holistic universe; hopefully one day other scientific disciplines will employ similar techniques, especially as pertains to how we interact with the earth.",
								]}
							</TextMask>
						</p>
						<p className="text-black subHeading font-semibold montserrat leading-loose tracking-normal">
							<TextMask>
								{["Some of topics a good natal reading can consider:"]}
							</TextMask>
						</p>
						<ul className="flex flex-col list-disc list-inside">
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Your social style and public image.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Your Fire (passion, ambition), Water (feelings, intuition), Air
								(thinking, speaking, memory) and Earth (everyday life,
								pleasure).
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Personal strengths and weaknesses.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Chances for good fortune and challenge.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Mom and Dad.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Past lives and the ancestors; path of the future.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Brother and sister issues.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Education and career.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Life at home.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Love, creativity and children.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Health and work.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Relationships.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								The mystical and spiritual life.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Friends, groups and travel.
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Karma and self-undoing; the hand of Fate.
							</li>
						</ul>{" "}
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The natal chart is a blueprint of individual potentials and challenges; it shows the soul's progress in defining and growing itself, likely over millenia. But what about right now? To find out about current conditions and future potentials the astrologer uses other techniques that evolve the birth chart forward in time. The most common one used involves looking at how the transiting planets and points are currently aspecting the natal chart placements; this is an excellent tool for timing and snooping out challenges and potentials.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Good astrologers also back up the promise shown in transits with Secondary Progressions; these show internal processes, as one's inner world creates a theme before it manifests in the exterior environment. Themes will likely not manifest exactly as envisioned or on time, since the design must of necessity be tweaked by Divine Intelligence to abide by natural law, and adjusted for what one's own higher mind requires, besides the issues of unfinished Karmic business and the necessity for balance in experience. Another useful technique is called Directed Solar Arcs; these will show what is likely to manifest in the exterior environment and when it will, whether one had a conscious hand in directing the process or not.",
								]}
							</TextMask>
						</p>
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
