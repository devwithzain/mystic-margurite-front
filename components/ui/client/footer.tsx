import Link from "next/link";
import Image from "next/image";
import { footerLogo } from "@/public";
import { MdEmail } from "react-icons/md";

export default function Footer() {
	return (
		<footer className="w-full bg-white pb-8 relative z-50">
			<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-5 padding-y padding-x">
				<div className="flex flex-col gap-6">
					<Image
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
					<h3 className="text-[#2E073F] subHeading mb-4 forum font-semibold">
						Quick Links
					</h3>
					<ul className="space-y-2">
						<li>
							<Link
								href="/"
								className="flex gap-3 items-center text-black hover:text-[#7E78FF] montserrat paragraph">
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about-us"
								className="flex gap-3 items-center text-black hover:text-[#7E78FF] montserrat paragraph">
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/services"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Services
							</Link>
						</li>
						<li>
							<Link
								href="/blogs/astrology"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Astrology Blog
							</Link>
						</li>
						<li>
							<Link
								href="/planetary-meditations"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Planetary Meditation
							</Link>
						</li>
						<li>
							<Link
								href="/products"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Products
							</Link>
						</li>
						<li>
							<Link
								href="/life-healing"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Life & Balance
							</Link>
						</li>
						<li>
							<Link
								href="/stars/star-&-planets"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Stars And Planets
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-[#2E073F] subHeading mb-4 forum font-semibold">
						Privacy
					</h3>
					<ul className="space-y-2">
						<li>
							<Link
								href="/fees"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Disclaimers
							</Link>
						</li>
						<li>
							<Link
								href="/fees"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								FAQs
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-[#2E073F] subHeading mb-4 forum font-semibold">
						Contact Us
					</h3>
					<ul className="space-y-3">
						<li>
							<Link
								href="/fees"
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
			<div className="w-full mt-8 border-t border-[#C3BEB6] pt-8 flex sm:flex-col xm:flex-col items-center justify-between padding-x">
				<p className="text-center md:text-left text-black paragraph montserrat leading-tight tracking-tight font-normal">
					© {new Date().getFullYear()} Mysticmarguerite. All rights reserved.
				</p>
				<div className="flex items-center gap-2">
					<Link
						className="text-center md:text-left text-black paragraph montserrat leading-tight tracking-tight font-normal"
						href="/privacy-policy">
						Privacy Policy
					</Link>
					<p className="text-center md:text-left text-black paragraph montserrat leading-tight tracking-tight font-normal">
						|
					</p>
					<Link
						href="/terms-and-condition"
						className="text-center md:text-left text-black paragraph montserrat leading-tight tracking-tight font-normal">
						Terms & Conditions
					</Link>
				</div>
			</div>
		</footer>
	);
}
