import Image from "next/image";
import { guide06 } from "@/public";
import { RoundButton, AnimatedText, TextMask } from "@/components/ui/client";

export default function StarGuidance06() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<Image
								src={guide06}
								alt="Ask the Stars: What Will Happen or Where is It?"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<div className="">
								<AnimatedText
									text="Ask the Stars: What Will Happen or Where is It?"
									className="text-[#2E073F] heading font-semibold papyrus leading-tight"
								/>
							</div>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The stars can speak about matters of fate, destiny and timing in a very precise way. Basically, a concern is posited as a question and then a horoscope chart for the time and place of the question is erected. Wierdly enough, if someone is asking an astrologer to do it for them, the chart should be erected for the astrologer's local time and place. By using intuition and tuning into the astral Akasha, along with consideration of planetary position and aspects, a reading can be done that serves to divine what is going on or likely to happen in the real world, relative to the question asked. This sort of query to the stars is known as horary astrology and the technique has a long and honerable history of use among the elite.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"How could astrology work this way? Consider the notion that all things in nature, cosmos and mind are connected together in some way, are pieces of the same web of wholeness. In fact, all of astrology could be said to come from stellar observations made over many thousands of years, in which it could be seen that the movements of heavenly bodies and the harmonic and electromagnetic vibrations they make alone and in aspect to one another serve as a mirror for cosmic intent, all activity here on earth and even the workings of inner self. Deviating somewhat from the current PC position that the stars do not directly make us do anything, if we are part of a larger collective that exists in some form of the past, present and future and includes all things manifest, there cannot help but be an interaction and influence going on between them. If we are particularly unconscious, unaccustomed to operating without bias and conditioned to boot, we are easily influenced by most anything that cares to make its imprint upon us.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The next question often asked is if the planets and stars are 'making' us do stuff. Some of us would also infer that all power of influence necessarily belongs to God, while others of us will place our trust in the measurement and mechanics of science, that is to say human eyes and logic. Therefore, much debate and many wars have been generated over the role of Fate, the hand of God and the extent of free will in life.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Speaking as a former scientific researcher and now as an astrologer, I have witnessed that nothing in apparent reality is really separate from anything else; neither is the substrate of reality indefinitely controllable by human will or explained by human definitions. Forces both manifest and from dimensions invisible to this world have influence on everything that happens, as do the collective forces of the society and culture around us. Over and over again I and others have also witnessed the workings of what is so far best explained by the concept of reincarnation; not all ingrained habits, compulsions, relationship choices and repetitive patterns in life circumstances can be explained solely by reference to heredity, environmental factors or childhood upbringing.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"There is something both 'out there' and 'within myself' that participates in bringing events into being or phasing them out of existence, invokes destiny in a synchronous, in-your-face way which cannot be avoided; the outcome of which often lies outside of ones conscious control. Free will can and should be exercised in the choice of action taken in responding to the event, but it cannot overcome limitations imposed by a person's place in space, one's current state of mind, choice of company, outstanding karmic business or social conditioning. On that note, some of the questions for a horary reading could include:",
								]}
							</TextMask>
						</p>
						<ul className="flex flex-col list-disc list-inside">
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Should I marry this person?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Should I start, continue or end this relationship?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Will I win the lawsuit?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								This person is missing; will I ever see them again?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Will I get this job?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Will my sickness pass?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Is surgery necessary?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Do I have a hidden enemy?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Will I ever have children?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Where are my lost keys?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Should I move to another state, or overseas?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Should I go to school?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Should we buy this house, acquire this business?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Will this investment yield good returns?
							</li>
						</ul>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"There are some limitations to obtaining a good result. The question should contain specific detail, and be asked with serious intent. Wanting to know just when you are going to win the lottery will not work, however charting times and dates when the currents of abundance are aligned with your natal stars does have quite some merit. Success can be obtained with some sporting questions, such as 'which team will win this soccer match?' The question should concern one matter at a time; asking about a marriage proposition and a new job all at once will not bring a clear answer about anything. You can ask two questions if they are related, for example, will I find this missing object and if so, where? If you have two serious questions, ask the most important one first, then wait a couple weeks to ask the other. Repeating a question because the first outcome is unsatisfactory generally does not yield a better answer the next time, unless other circumstances have dramatically changed.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"If one is interested in obtaining an accurate horary reading, the time and date when one's attention first became very focused on the issue at hand should be noted down. Then a divinatory horoscope chart can be cast for the time and location of the person asking the question. Sometimes the astrologer may use the time and place at which they receive the question from the inquirer anyway, as that chart will yield a clearer reading. The querient is represented by the sign on the Ascendent and its planetary ruler; the Moon functions as a secondary indicator for the querient and may on occasion serve as the stronger indicator of outcome.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"It is also wise to obtain the planetary Day and Hour in affect during the time in which the question was posited, as a strong indicator for the strength and legitimacy of the question. Occasionally a chart will indicate that there is no use in proceeding with serious consideration of the query; either the outcome is moot or there is no point to pursuing the matter, as indicated by Saturn in the seventh house or a void-of-course Moon anywhere. It is too early to get a good answer if the chart Ascendant is at 0-3° and too late if the Ascendant is at 27-30° of the sign. Sometimes a scamp is moved to query nonsense just for fun; so interesting how the heavenly bodies can give notice of this probability in play also.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"(1) Best book for learning Horary and Electional Astrology: Simplified Horary Astrology by Ivy M. Goldstein Jacobson, Pasadena Lithographers, Pasadena, California, 1970.",
									"(2) An Absolute Classic: Christian Astrology, by William Lilly, Astrology Center of America, Bel Air MD, 21014. This book was first published in 1647.",
									"(3) On Reception, edited and translated by Robert Hand, ARHAC Publications, 1998. This translation was done from the Latin edition of Joachim Heller published in 1549, however the original Arabic version would have been written sometime around 780-800 CE, and the information in it came from still older sources.",
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
