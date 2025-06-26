import Image from "next/image";
import { guide07 } from "@/public";
import { RoundButton, AnimatedText, TextMask } from "@/components/ui/client";

export default function StarGuidance07() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<Image
								src={guide07}
								alt="When Should I Do It?"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<div className="">
								<AnimatedText
									text="When Should I Do It?"
									className="text-[#2E073F] heading font-semibold papyrus leading-tight"
								/>
							</div>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Electional astrology is used for choosing the best time to do something you have already decided to do. It is different from horary technique in that horary addresses the question of whether you should do something at all, or determines the likely outcome of circumstances already set in motion. With electional concerns, we are trying to run in sync with the natural cyclic energy flow of the universe, to determine the best times we might ride the wave towards a beneficial outcome.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"This means, of course, that certain rules of the game must be observed. One can't ask about something that is patently outside the limitations of everyday life. Also, the natural cosmic balance can't be distorted to provide something that is not going to occur under natural circumstances. Also, a question concerning precisely when one will win the lottery is not likely to be answered with workable results; however it can be discerned from studying transits over the natal chart, when the individual is more likely to experience good fortune or an opportune development of some kind.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The more exact you can be about what you want to know, the better the electional results can be. For example, 'When is the best time to take that trip to Canada? I want to go for two weeks during June, July or August of this year.' Avoid questions such as 'When should I murder Marjorie?' as any astrologer with an ounce of integrity will not deal with these or any other unethical concerns. Also, electional astrology works best around the really big crossroads events in life, not so well for petty concerns, e.g. 'Which day should I go shopping for my beer cooler?' Keep in mind that wanting something badly does not insure that you will get it, or that the venture will be an automatic success. You can pick the best time of the year to start law school in New York, but if past karma dictates that you need to end up managing a bowling alley in Des Moines, that is what will prevail. The sort of questions best suited for electional astrology involve asking for the optimal date and time for activities such as:",
								]}
							</TextMask>
						</p>
						<ul className="flex flex-col list-disc list-inside">
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Getting married
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Taking a trip
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Starting an investment project
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Starting school
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Initiating a law suit
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Moving the mother-in-law
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Selling or buying the house
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Confronting the boss
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Hiring new employees
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Starting or selling the business, opening or closing the store
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Finalizing the business deal, signing the contract
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Scheduling surgery
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Getting pregnant
							</li>
						</ul>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"To ask an electional question the inquirer needs to be as specific as possible regarding the circumstances surrounding the question; also where the intended event is to take place and the time frame within which one must work. For example, many couples cannot easily conduct a wedding during the work week. The natal charts of all those to be included as key participants in the endeavor at hand should be included, to determine optimal dates that will be favorable for all concerned.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Good references for learning how to do electional astrology are the same ones listed for horary astrology in 'Ask the Stars- What is Happening or Where is It?'",
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
