import { life04 } from "@/assets";
import { TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function Lifehealing04() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="w-full flex items-center gap-10 flex-col">
				<div className="flex flex-col gap-10">
					<div className="w-full flex items-center justify-center gap-8">
						<div className="flex-1">
							<img
								src={life04}
								alt="Metatron Cube"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<div className="">
								<AnimatedText
									text="Metatron Cube."
									className="text-[#2E073F] heading font-normal forum capitalize leading-tight"
								/>
							</div>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"One example of the many patterns used in Life Alignment energy balances.  Alternatively, cards can be placed on the body or on an image of the body to perform a particular sequence dedicated to priorities identified by muscle testing or pendulum work.  Points located either on the body or in the subtle bodies and chakras associated with the body can be identified and “entered in” as part of the procedure of focusing in on the priority at hand.  The practitioner also commonly helps the client create a story out of selected life experience information, in service to taking down blockages, healing emotional pain, catalyzing transmutations or igniting new inspirational experiences.",
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
