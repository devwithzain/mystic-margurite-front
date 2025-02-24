import { footerLogo } from "@/assets";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="w-full bg-white padding-y">
			<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-5 padding-x">
				<div className="flex flex-col gap-6">
					<img
						src={footerLogo}
						alt="Footer Logo"
						className="w-[150px] object-cover"
					/>
					<p className="paragraph tracking-tight montserrat text-black leading-normal">
						Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.{" "}
						Aenean commodo <br /> ligula eget dolor.
					</p>
				</div>
				<div>
					<h3 className="text-[#7E78FF] subHeading mb-4 forum uppercase">
						Quick Links
					</h3>
					<ul className="space-y-3">
						<li>
							<Link
								to="/about-us"
								className="flex gap-3 items-center text-black hover:text-[#7E78FF] montserrat paragraph">
								About
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
								to="/fees"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Meditations
							</Link>
						</li>
						<li>
							<Link
								to="/services"
								className="text-black hover:text-[#7E78FF] montserrat paragraph">
								Blogs
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-[#7E78FF] subHeading mb-4 forum uppercase">
						Privacy
					</h3>
					<ul className="space-y-3">
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
								name@yourwebsite.com
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full mt-8 border-t border-[#C3BEB6] pt-8 flex sm:flex-col xm:flex-col items-center justify-center">
				<p className="text-center md:text-left text-black paragraph montserrat leading-tight tracking-tight font-normal">
					Copyright &copy; 2025. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
