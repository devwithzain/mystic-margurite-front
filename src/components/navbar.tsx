import TextHover from "./text-hover";
import { motion } from "framer-motion";
import { navVarients } from "@/motion";
import { Link } from "react-router-dom";
import { arrowGo, logo } from "@/assets";

export default function Navbar() {
	return (
		<motion.nav
			initial="initial"
			whileInView="vissible"
			viewport={{ once: true }}
			variants={navVarients}
			className="w-full padding-x py-5 absolute top-0 left-0 z-[999]">
			<div className="w-full flex items-center justify-between">
				<div>
					<Link to="/">
						<img
							src={logo}
							className="w-20 h-20 object-cover"
							alt="margerite-logo"
						/>
					</Link>
				</div>
				<ul className="flex items-center gap-10">
					<Link
						to="/"
						className="text-center text-black text-lg leading-tight tracking-tight font-normal montserrat hover">
						<TextHover
							title1="Home"
							title2="Home"
						/>
					</Link>
					<Link
						to="/about-us"
						className="text-center text-black text-lg leading-tight tracking-tight font-normal montserrat hover">
						<TextHover
							title1="About Us"
							title2="About Us"
						/>
					</Link>
					<Link
						to="/services"
						className="text-center text-black text-lg leading-tight tracking-tight font-normal montserrat hover">
						<TextHover
							title1="Services"
							title2="Services"
						/>
					</Link>
					<Link
						to="/astrology-blog"
						className="text-center text-black text-lg leading-tight tracking-tight font-normal montserrat hover">
						<TextHover
							title1="Astrology Blog"
							title2="Astrology Blog"
						/>
					</Link>
					<Link
						to="/planetary-meditations"
						className="text-center text-black text-lg leading-tight tracking-tight font-normal montserrat hover">
						<TextHover
							title1="Planetary Meditations"
							title2="Planetary Meditations"
						/>
					</Link>
				</ul>
				<Link
					to="/contact-us"
					className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef]">
					<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
						Contact Us
					</button>
					<img
						src={arrowGo}
						alt="arrowGoImg"
					/>
				</Link>
			</div>
		</motion.nav>
	);
}
