import Link from "next/link";
import Image from "next/image";
import { aboutImg } from "@/public";
import { ArrowUpRight } from "lucide-react";
import { RoundButton, Rounded, TextReveal } from "@/components/ui";

export default function Reading() {
	return (
		<div className="w-full padding-x padding-y bg-white relative z-50">
			<div className="w-full flex flex-col justify-center gap-10 items-center">
				<div className="w-full">
					<Image
						src={aboutImg}
						alt="aboutImg"
						className="w-full object-cover"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="w-full flex flex-col gap-5">
					<TextReveal>
						<h1 className="heading text-[#2E073F] papyrus font-semibold tracking-tight">
							Who Is Marguerite?
						</h1>
					</TextReveal>
					<TextReveal className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							Spirit song has called to me from earliest memory, leading to many
							encounters with synchronicity as I grew up. To this day my
							practice is to witness, learn from and participate with the
							in-breath and out-breath of the intelligent Life force vitalizing
							all things. Astrology service with clients began in 1980 and has
							continued since that time; my best effort is directed towards
							journeying with others to their own portals of expanded awareness.
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							Formal education includes a Bachelors of Science in Horticulture
							from Colorado State University and a Masters of Science degree in
							Horticulture, awarded from Pennsylvania State University. Becoming
							a horticulturist requires an understanding of the chemistry,
							physiology, pathology, anatomy and Latin of plants, plus a dose of
							practical business savvy thrown in. Formal scientific training
							also expanded my ability to follow developments in other fields
							such as physics and astronomy. Many years were spent working as a
							commercial horticulturist, newspaper writer and editor, office
							manager, and other assorted jobs; restless, curious Gemini rules
							my natal second house of money, values and asset management.
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							I have been an NCGR (National Council for Geocosmic Research)Level
							4 Certified Professional Consulting Astrologer since 2005.
							Practical experience accrued from doing several years of
							international phone service with AstroLive Link, over 10 years of
							service at numerous metaphysical fair venues, and a private
							practice stretching over 30 years. I enjoy giving astrology
							presentations and have taught classes in various esoteric
							subjects, in addition to teaching beginning and advanced astrology
							classes at Colorado Free University. Published writing projects
							include contributions made to local astrology club newsletters,
							essays published in Dell Horoscope Magazine and a piece published
							in the Mountain Astrologer. I do have aspirations to produce a
							book or two.
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							Along the way I realized that although astrology does an excellent
							job of delineating the blue print of incarnation and how planetary
							transits can paint a useful picture of past, present and future
							experience, it cannot address all levels of healing and releasing
							experience needed to free up baggage. I was guided to develop
							proficiency in energy balancing through Life Alignment. This is an
							extensive healing technique developed over 30 years and more by
							Jeff Kline, an extremely talented healer from South Africa.,
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							Along the way I realized that although astrology does an excellent
							job of delineating the blue print of incarnation and how planetary
							transits can paint a useful picture of past, present and future
							experience, it cannot address all levels of healing and releasing
							experience needed to free up baggage. I was guided to develop
							proficiency in energy balancing through Life Alignment. This is an
							extensive healing technique developed over 30 years and more by
							Jeff Kline, an extremely talented healer from South Africa.
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							Along the way I realized that although astrology does an excellent
							job of delineating the blue print of incarnation and how planetary
							transits can paint a useful picture of past, present and future
							experience, it cannot address all levels of healing and releasing
							experience needed to free up baggage. I was guided to develop
							proficiency in energy balancing through Life Alignment. This is an
							extensive healing technique developed over 30 years and more by
							Jeff Kline, an extremely talented healer from South Africa.
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							The remarkable package of healing skills and expansion of soul
							consciousness that Jeff has put together cannot be praised enough.
							His methods apply to healing not only people and pets, but to
							cleansing and energising water and food, restoring right balance
							to any dwelling or professional space, even re-aligning the
							frequencies of whole cities and waterworks. Today as a Level 3
							Certified Practitioner I can offer balancing sessions in person
							and long-distance. A specific Life Alignment balance can be paired
							with astrology to facilitate catalytic experiences, preferably in
							support of a preliminary astrology reading.
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							The art work displayed on this site are channelings of the
							resonance that moves through my visions. I continue to absorb
							technique and insight from many sources including global myth, the
							Golden Dawn, Kabbala, tale-tellers, mystics and philosophers. I
							have past-life affinity for Neolithic stones, sacred springs, the
							Tao, also classical Egyptian, Indian and Old European culture.
							Colorado is my native home, I love the spirits of the high
							mountains; but the song of the sea enchants me too.
						</p>
					</TextReveal>
					<div className="w-full flex items-center gap-4">
						<div className="w-fit bg-[#7a74ef] flex items-center justify-between bg-secondry cursor-pointer rounded-md group">
							<RoundButton
								href="/blogs/astrodialogues"
								title="Explore More"
								className="bg-white text-black"
								bgcolor="#000"
								style={{ color: "#fff" }}
							/>
						</div>
						<div className="flex items-center justify-between bg-transparent cursor-pointer rounded-md group border border-[#936D42]">
							<Link
								className="text-center text-white paragraph font-normal leading-tight tracking-tight montserrat"
								href="/contact-us">
								<Rounded
									className="py-[4px]"
									backgroundColor="#936D42">
									<p className="z-10 px-[10px] ml-[15px] py-[6px] group-hover:text-white text-black">
										Contact Now
									</p>
									<div className="bg-black group-hover:bg-white text-black p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]">
										<ArrowUpRight
											strokeWidth={1.5}
											size={30}
											className="scale-[0] group-hover:scale-[1]"
										/>
									</div>
								</Rounded>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
