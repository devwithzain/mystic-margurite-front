import Link from "next/link";
import Image from "next/image";
import { guide08 } from "@/public";
import { RoundButton, AnimatedText, TextMask } from "@/components/ui/client";

export default function StarGuidance08() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="Career and Money"
						className="text-[#2E073F] heading font-semibold papyrus leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<Image
								src={guide08}
								alt="Career and Money"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Some of us are to the boardroom born, others never settle on any one field of endeavor. Or, one might hold the same job for twenty years, only to be laid of in the twenty-first year with no new prospects on the horizon. Perhaps one slaved away getting the prestigious college degree or did what the parents expected, only to end up one day wheeling and dealing on the taboo side of the tracks.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Astrology can also provide suggestions for the methods and modes of making money to which one might be most naturally suited; predictions can be offered as to how long unemployment might last, if a particular school or class might lead to the desired good fortune, what to expect from challenging job politics, or if relocation would improve employment prospects.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Whether one is a job refugee or a student just getting ready to take that first dive into the working world, an astrological peek at the work and money potentials delineated both in the natal chart and current planetary transits can provide valuable information towards steering the next steps in profession. The primary chart houses to consider include the sixth house of work, co-workers and health, any planets found in there and the location of the sixth house planetary ruler. The sixth refers to the work situation per sae, whereas career and leadership potentials are to be found in the tenth house. Business partnerships can be sussed out of seventh house affairs, whereas the eighth and eleventh houses contain corporate potentials. The potential for businesses or work run from home is most strongely figured in both the fourth home of home base and the tenth, as one may also be the boss. Strangely enough, information on the ultimate career goal for a mature individual is excavated out of the twelfth house of karma and self-undoing. This because once more fully conscious and in hand of self-mastery, one is also able to tap into and use talents and skills otherwise not embraced earlier in life.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Of course, astrological analysis cannot guarantee an end to work problems or automatically deter a business failure. But the stars can help to determine solutions to work problems and also which path of personal direction is most likely to lead to job satisfaction and/or financial gain. One can gain great insight into the scope of personal talents and limitations; finding where and when the positive potentials are can help one choose the best direction to take in making the most of that dynamic dance between fate, free will and destiny. Issues that can be addressed in a work and money consultation include:",
								]}
							</TextMask>
						</p>
						<ul className="flex flex-col list-disc list-inside">
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Which professions might be most suited to the natural talents
								and inclinations?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Is one a worker bee, CEO material or the power behind the
								throne?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Would it be better to work alone, or as part of a team?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Would greater success be obtained by seeking a managerial or
								financial partnership?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Should one be their own boss or work for someone else?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Is a large company or a small one more suited to the
								native&apos;s skill set and relating style?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Is there another location in the country that would better
								support what one want&apos;s to do?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								What are the chances of becoming a financial success in business
								or accumulating substantial wealth?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								What is the innate style and skill in money management?
							</li>
							<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								Would talents previously neglected or not approved of by parents
								or peers actually be the key to future success?
							</li>
						</ul>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							For questions concerning business timing such as when to close a
							specific deal, start a new business or sign a contract, please go
							to{" "}
							<Link
								className="font-semibold underline"
								href="/stars/star-guidance/6">
								When Should I Do It?
							</Link>{" "}
							If you want to know about the probable outcome of a business deal,
							law suit or change in investment strategy, please go to{" "}
							<Link
								href="/stars/star-guidance/7"
								className="font-semibold underline">
								What Will Happen or Where Is It?
							</Link>
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
