import { logo } from "@/assets";
import TextHover from "./text-hover";
import { motion } from "framer-motion";
import { navVarients } from "@/motion";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import UserMenu from "./user-menu";

export default function Navbar() {
	const token = getToken();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [cartItems, setCartItems] = useState<any[]>([]);
	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(`http://127.0.0.1:8000/api/cart`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const data = await response.json();
				setCartItems(data);
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.log(error.message);
				} else {
					console.log("An unknown error occurred");
				}
			}
		};
		fetchCartItems();
	}, [token]);
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
				<ul className="flex items-center gap-7">
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
					<Link
						to="/products"
						className="text-center text-black text-lg leading-tight tracking-tight font-normal montserrat hover">
						<TextHover
							title1="Products"
							title2="Products"
						/>
					</Link>
					<Link
						to="/life-healing"
						className="text-center text-black text-lg leading-tight tracking-tight font-normal montserrat hover">
						<TextHover
							title1="Life & Healing"
							title2="Life & Healing"
						/>
					</Link>
					<Link
						to="/stars-and-planets"
						className="text-center text-black text-lg leading-tight tracking-tight font-normal montserrat hover">
						<TextHover
							title1="Stars and Planets"
							title2="Stars and Planets"
						/>
					</Link>
				</ul>
				<div className="flex items-center gap-2">
					<Link
						to="/cart"
						className="bg-[#7a74ef] px-4 py-2 relative rounded-lg text-white">
						<span className="absolute right-3 top-1 px-[5px] py-[2px] text-white font-Monstrate rounded-full bg-black text-[8px]">
							{cartItems.length}
						</span>
						<ShoppingBag size={30} />
					</Link>
					<Link
						to="/contact-us"
						className="w-fit px-6 py-3 bg-[#7a74ef] rounded-lg">
						<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
							Contact Us
						</button>
					</Link>
					<UserMenu />
				</div>
			</div>
		</motion.nav>
	);
}
