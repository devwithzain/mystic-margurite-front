import { footerLogo } from "@/assets";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="w-full bg-white pb-8">
			<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-5 padding-y padding-x">
				<div className="flex flex-col gap-6">
					<img
						src={footerLogo}
						alt="Footer Logo"
						className="w-[150px] object-cover"
					/>
					<p className="paragraph tracking-tight montserrat text-black leading-normal">
						Discover the mystical guidance of our expert <br />
						astrologer, offering profound insights into your cosmic
						<br />
						journey.Let the stars illuminate your path forward.{" "}
					</p>
				</div>
				<div>
					<h3 className="text-[#7E78FF] subHeading mb-4 forum uppercase">
						Quick Links
					</h3>
					<ul className="space-y-2">
						<li>
							<Link
								to="/"
								className="flex gap-3 items-center text-black hover:text-[#7E78FF] montserrat paragraph">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about-us"
								className="flex gap-3 items-center text-black hover:text-[#7E78FF] montserrat paragraph">
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="/services"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Services
							</Link>
						</li>
						<li>
							<Link
								to="/astrology-blog"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Astrology Blog
							</Link>
						</li>
						<li>
							<Link
								to="/planetary-meditations"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Planetary Meditation
							</Link>
						</li>
						<li>
							<Link
								to="/products"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Products
							</Link>
						</li>
						<li>
							<Link
								to="/life-healing"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Life & Balance
							</Link>
						</li>
						<li>
							<Link
								to="/stars-and-planets"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Stars And Planets
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-[#7E78FF] subHeading mb-4 forum uppercase">
						Privacy
					</h3>
					<ul className="space-y-2">
						<li>
							<Link
								to="/fees"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Disclaimers
							</Link>
						</li>
						<li>
							<Link
								to="/fees"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								FAQs
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-[#7E78FF] subHeading mb-4 forum uppercase">
						Contact Us
					</h3>
					<ul className="space-y-3">
						<li>
							<Link
								to="/fees"
								className="text-black hover:text-[#7E78FF] montserrat paragraph flex items-center gap-3">
								<MdEmail
									className="text-[#7E78FF]"
									size={24}
								/>
								info@mysticmarguerite.com
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full mt-8 border-t border-[#C3BEB6] pt-8 flex sm:flex-col xm:flex-col items-center justify-center">
				<p className="text-center md:text-left text-black paragraph montserrat leading-tight tracking-tight font-normal">
					© {new Date().getFullYear()} Mysticmarguerite. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
