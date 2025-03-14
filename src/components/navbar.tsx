import { logo } from "@/assets";
import UserMenu from "./user-menu";
import TextHover from "./text-hover";
import { motion } from "framer-motion";
import { navVarients } from "@/motion";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
	const token = getToken();
	const [cartItems, setCartItems] = useState<any[]>([]);
	const [showStarsDropdown, setShowStarsDropdown] = useState(false);
	const [showAstrologyDropdown, setShowAstrologyDropdown] = useState(false);

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(
					`https://freequote4financialprotection.com/backend/api/cart`,
					{
						headers: { Authorization: `Bearer ${token}` },
					},
				);
				const data = await response.json();
				setCartItems(data);
			} catch (error) {
				console.log(
					error instanceof Error ? error.message : "An unknown error occurred",
				);
			}
		};
		fetchCartItems();
	}, [token]);

	const dropdownVariants = {
		hidden: { opacity: 0, x: "-50%", y: -5, transition: { duration: 0.2 } },
		visible: { opacity: 1, x: "-50%", y: 0, transition: { duration: 0.2 } },
	};

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
						className="text-lg font-normal montserrat hover">
						<TextHover
							title1="About Us"
							title2="About Us"
						/>
					</Link>
					<Link
						to="/services"
						className="text-lg font-normal montserrat hover">
						<TextHover
							title1="Services"
							title2="Services"
						/>
					</Link>
					<div
						className="relative"
						onMouseEnter={() => setShowAstrologyDropdown(true)}
						onMouseLeave={() => setShowAstrologyDropdown(false)}>
						<button className="text-lg font-normal montserrat flex items-center">
							Blogs
						</button>
						<AnimatePresence>
							{showAstrologyDropdown && (
								<motion.div
									initial="hidden"
									animate="visible"
									exit="hidden"
									variants={dropdownVariants}
									className="absolute top-full left-1/2 bg-[#7A75EF] shadow-lg rounded-md p-3 min-w-[170px] mt-1">
									<Link
										to="/blogs/astrology"
										className="block text-lg montserrat text-white font-normal leading-tight tracking-tight px-3 py-2 hover:bg-white/20">
										Astrology
									</Link>
									{/* <Link
										to="/blogs/astrodialogues"
										className="block text-lg montserrat text-white font-normal leading-tight tracking-tight px-3 py-2 hover:bg-white/20">
										Astrodialogues
									</Link> */}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<Link
						to="/planetary-meditations"
						className="text-lg font-normal montserrat hover">
						<TextHover
							title1="Planetary Meditations"
							title2="Planetary Meditations"
						/>
					</Link>
					<Link
						to="/products"
						className="text-lg font-normal montserrat hover">
						<TextHover
							title1="Products"
							title2="Products"
						/>
					</Link>
					<Link
						to="/life-healing"
						className="text-lg font-normal montserrat hover">
						<TextHover
							title1="Life & Balances"
							title2="Life & Balances"
						/>
					</Link>

					{/* Stars and Planets Dropdown */}
					<div
						className="relative"
						onMouseEnter={() => setShowStarsDropdown(true)}
						onMouseLeave={() => setShowStarsDropdown(false)}>
						<button className="text-lg font-normal montserrat flex items-center">
							Stars and Planets
						</button>
						<AnimatePresence>
							{showStarsDropdown && (
								<motion.div
									initial="hidden"
									animate="visible"
									exit="hidden"
									variants={dropdownVariants}
									className="absolute top-full left-1/2 bg-[#7A75EF] shadow-lg rounded-md p-3 min-w-[170px] mt-1">
									<Link
										to="/stars-and-planets/solar-system"
										className="block text-lg montserrat text-white font-normal leading-tight tracking-tight px-3 py-2 hover:bg-white/20">
										Solar System
									</Link>
									<Link
										to="/stars-and-planets/constellations"
										className="block text-lg montserrat text-white font-normal leading-tight tracking-tight px-3 py-2 hover:bg-white/20">
										Constellations
									</Link>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
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
						<button className="text-white text-lg font-normal montserrat">
							Contact Us
						</button>
					</Link>
					<UserMenu />
				</div>
			</div>
		</motion.nav>
	);
}
