import { mystic } from "@/assets";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import { TextMask } from "@/components";
import { useEffect, useState } from "react";
import { TServicesColumnProps } from "@/types";
import getServices from "@/actions/get-services";
import RoundButton from "@/components/round-button";
import AnimatedText from "@/components/animated-text";

export default function Services() {
	const [services, setServices] = useState<TServicesColumnProps[] | null>([]);
	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await getServices();
				setServices(response.services);
			} catch (err) {
				console.error("Error fetching services:", err);
			}
		};
		fetchServices();
	}, []);
	return (
		<div className="w-full padding-y padding-x">
			<div className="w-full flex justify-center flex-col gap-10">
				<div className="flex flex-col gap-5">
					<AnimatedText
						text="Contact for Questions or to Schedule a Consultation:"
						className="text-[#936d42] subHeading font-semibold forum capitalize leading-tight"
					/>
					<ul className="flex flex-col gap-3 list-disc list-inside">
						<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							If interested in a consultation, please be prepared to provide the
							birth date, time of birth and place (nearest city and state or
							country) for all persons of interest. If the birth time is
							unknown, a natal chart timed for noon can be used with good
							results. A likely time of birth can also be rectified for an
							additional fee, by working with important timed events in life.
							Payment can be done via Pay Pal on this website, or by sending a
							check or by credit card over the phone at the time of reading.
						</li>
						<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							Readings can be done in person by appointment for those who live
							in the Denver, Colorado area.
						</li>
						<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							For readings done long distance, the session can be shared by
							computer screen via Zoom and all sessions are sound recorded.
							Clients will connect at the agreed upon time of consultation from
							a Zoom link provided via e-mail. Clients will receive an MP3 file
							of the session, pdf copies of the charts used for consultation and
							some information sheets that can be useful for understanding the
							symbology of astrology charts in general.
						</li>
						<li className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							Please note your time zone when making a request for a reading by
							phone or Internet. My time zone is Mountain Standard or Mountain
							Daylight Time, depending on the time of year.
						</li>
					</ul>
				</div>
				<AnimatedText
					text="Booking for Consultation."
					className="text-[#936d42] subHeading font-semibold forum capitalize leading-tight"
				/>
				<div className="w-full flex gap-4 justify-between">
					{services?.map((item) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "linear" }}
							viewport={{ once: true }}
							className="w-full flex flex-col items-center gap-4 bg-[#000] relative rounded-lg overflow-hidden shadow-lg hover:shadow-lg">
							<div className="w-full relative">
								<img
									src={`https://freequote4financialprotection.com/backend/${item?.image}`}
									alt="service"
									className="w-full h-[500px] object-cover"
								/>
								<div className="p-4 w-full flex flex-col justify-between gap-5">
									<h3 className="text-white subHeading font-normal smythe leading-tight tracking-tight">
										{item.title}
									</h3>
									<p className="paragraph leading-normal text-white font-normal montserrat">
										{[item?.description ? parse(item.description) : ""]}
									</p>
									<div className="w-full flex items-center justify-between gap-5">
										<span className="paragraph text-white leading-tight tracking-tight montserrat font-semibold w-fit bg-[#936d42] flex items-center justify-between bg-secondry rounded-md pointer-events-none p-5">
											Price: ${item.price}.00
										</span>
										<div className="w-fit bg-[#936d42] flex items-center justify-between cursor-pointer rounded-md group">
											<RoundButton
												href={`/services/${item.id}`}
												title="View Detail"
												className="bg-white text-black"
												bgcolor="#7a74ef"
												style={{ color: "#fff" }}
											/>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				<div className="w-full flex items-center gap-10 flex-col">
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex-1">
							<img
								src={mystic}
								alt="The Solar Return Chart"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 flex flex-col gap-5">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"The science and art of astrology can be used to explore so many avenues of our life experience. On its own merits, an analysis of the birth chart can yield much in-depth information about the natal challenges, talents and potentials unique to each individual. Ancestral inheritance, family of origin, karmic and developmental themes, past lives and path of soul growth can be delineated from the heavens, as can the nature of relationship, opportunities in life-direction, schooling, career, health, financial issues and orientation of psyche.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Astrology is a versatile tool that can help when needing to make major decisions involving any kind of future deployment in money, time, energy or resource. It can also be used to examine compatability and behavioral dynamics between partners, whether referring to friendships, business associates, marriage prospects or family members. It can reveal past life dynamics, both the blocks and potentials for mental, emotional and spiritual growth and go into the deep waters of karmic issues and path of soul growth.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Relocation techniques can be used to examine whether moving elsewhere would improve career prospects or encourage personal potentials that might not otherwise have an easy opportunity to blossom. Electional technique can help determine the best times for major activities such as marriage, starting a business, taking a trip, scheduling surgery, planning a pregnancy or making a major purchase. Just getting a 'heads up' on trends to expect in coming months can help in making useful course-corrections. For information on other specialty applications in astrology, please click on Star Guidance for a list of topics.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"To understand how astrology works, consider the ancient dictum 'As it is above, so it is below,' which implies that life both manifest and other-worldly arises out of the same unified web of living energy; a supremely intelligent, illuminating field of eternal potential that structures and animates everything from the largest galaxies down to the smallest microbe. Thus all things exist in a dynamic, relationship of exchange with one another; all life experience is animated by Divine Love and all things participate in a grand cosmic dance, undergoing cycles of evolution, transformation and rebirth that are unique to each being.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"The planets and other heavenly bodies do not make us do or be anything in accordance with blind fate or a jealous god; however planetary form, intelligence and electromagnetic fields of resonance are interacting with our own, in a relative exchange of influence and synchronicity enfolded in an infinite embrace of co-creation. Nothing happens in a vacuum, all is animated by Divine Love; all that exists interacts with all else that is, and with all that is not. Each being has a mandate and a mission; all life experience is precious. As the star constellation Ophiucus the Snake Handler implies, the highest evolutionary purpose for man can be realized through mastery of self in harmony with nature, body, mind, soul and spirit. The archetype of the coming Age of Aquarius implies that as humans we cannot exist indefinitely as an entitlement, separate from the rest of creation; but rather are designed to participate responsibly in stewardship of self, each other, plants, animals and the earth.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Long ago in more holistic times, ancient star-gazers understood that there were 'power zones' in the stars and that planetary movement could be correlated quite accurately with the ebb and flow of earthly affairs. The science of astrological analysis through astronomical observation has been refined over thousands of years, whether referring to the politics of whole countries or the occurrence of natural phenomenon such as earthquakes; complex themes in human relationship or the progress of a business. Through exploring the planetary patterns of behavior, inheritance, timing and potential that are unique to each one of us and to various endeavors in life, light can be cast on various illusions and self-limitations; fresh options and possibilities can open up for consideration, adjustments in life direction made in timely fashion.",
								]}
							</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>
								{[
									"Working to increase self-awareness leads to openings and alterations in the quantum fabric of what has been in life experience and what may yet come to pass. Earthly life is not a matter of cruel fate or simple luck of the draw, nor is experience determined merely by free will; a conscious path of destiny would embrace all these elements and wisely consider a few more. Through exploring the cosmic blueprint of planetary placement, our own karmic challenges can be tackled with greater clarity and compassion; with increased depth of perception, more informed choices can be made on the field of play.",
								]}
							</TextMask>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
