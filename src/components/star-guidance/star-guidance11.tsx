import { guide11 } from "@/assets";
import { TextMask } from "@/components";
import AnimatedText from "@/components/animated-text";

export default function StarGuidance11() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="The Astrology of Asteroids"
						className="text-[#936d42] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={guide11}
								alt="The Astrology of Asteroids"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Once we know more about the major themes in our horoscope chart, much more detail can be added through examining the placement of certain asteroids at the time of birth. When many natal planets are in aspect to a certain asteroid, the social, personal or relational dynamics represented by the asteroid and its transits seem to work as a powerful mirror and/or force of influence in a person's life.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"DegrDebunkers would be quick to point out that there are zillions of little pieces of rock out in space; how could asteroids with names like Misterrogers or Maynard remotely have a bearing on human affairs? The asteroids of prime interest generally are the larger ones, some even technically referred to as planetoids or dwarf planets. Others maintain a wonderfully odd orbit pattern between major planets, that becomes incorporated into the archetypal meanings associated with the rocks in question. Following the synchronic pattern observed in the discovery and naming the planets, every symbolically or mythically named asteroid does seem to carry the deeper meanings attached to the name given it as the asteroid makes aspects by orbit to other heavenly bodies, even though a science geek of non-mystical inclination bestowed the name. Actually, the process has become so laden with meaning lately in the collective conscious, that prominent astronomers allowed the privledge of naming their discoveries are vetted by international governing organizations for the quality and merit of their proposed name first before official acceptance.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"An easy example is the asteroid Chiron, which orbits between the planets Saturn (the material world, frustration, limitation, debt, tradition, stick-in-the mud people) and Uranus (cosmic spirit, the new, untried, creative or revolutionary). The old Greek story behind Chiron has to do with a centaur who was the product of rape. A nymph named Philyia attracted the attention of the God Chronos, who always got what he wanted. She turned into a horse in order to get away, but Chronos (Saturn)caught up with her and had his way. Chiron was thus a half-breed abandoned at bith by his mother and who never knew his father. Further down the road he supported his cohart Hercules in fighting monsters but was accidently shot in the leg by one of the hero's poisoned arrows. Chiron went on to become a wounded healer and teacher; he was very wise and good but was constantly bothered by a painful wound that never healed; he was an immortal and so would never die. Paradoxically, he could heal anyone but himself. One can extend this principle into real life, as aren't we always struggling between the desire to find and express a higher level of creative inspiration (Uranus)and the barriers erected by our station in life, physical handicaps, social beliefs, earthly desires, income or level of learning (Saturn).",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Where Chiron is in the birth chart, is generally where one very strongly wants to do, be or attain something, but has a very hard and frustrating time getting there. Chiron can also come to represent where we feel entitled to expect results or where we expect someone else will step in and do or facilitate for us; when the rescuer does not appear one might feel justified in being a victim of circumstances. Periodically throughout life we are all treated to Chiron lessons, wherein a challenge arises that must be met with an attempt to master that which eludes us. At its highest expression of mastery Chiron becomes the sage, shaman, sacred warrior or savy entrepeneur, the one who has experienced a quantum shift in their apparent reality through the activation of their own mature, magical self, and through healing the wound via taking the matter up to a higher level and transmuting it into something with which we can make progress.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							Since the planets and asteroids are always in movement across the
							heavens, each person has a different combination of asteroid
							influences in their birth chart, Studying the asteroids is not for
							everyone; one would need to feel comfortable exploring the shadow
							issues of self and psyche. The major asteroids in general
							symbolize behaviors, reactions, obsessions and compulsions that
							have their roots in historical, family or social life, sometimes
							brought forward through many generations. Through exposure to such
							information someone can get to know themselves a little better,
							bring a little more love around in the struggle for awakening,
							personal growth and change.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
