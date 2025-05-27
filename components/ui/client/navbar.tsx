"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import UserMenu from "./user-menu";
import TextHover from "./text-hover";
import { footerLogo } from "@/public";
import { ShoppingBag } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useCart } from "@/context/cart-context";
import { dropdownVariants, navVariants } from "@/motion";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
	const { scrollY } = useScroll();
	const { toggleCart, cartCount } = useCart();
	const [hidden, setHidden] = useState(false);
	// const [showStarsDropdown, setShowStarsDropdown] = useState(false);
	const [showAstrologyDropdown, setShowAstrologyDropdown] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.nav
			variants={navVariants}
			className="w-full padding-x py-2 fixed top-0 left-0 z-[999] flex items-center justify-between xm:hidden sm:hidden md:hidden backdrop-blur-sm"
			animate={hidden ? "hidden" : "visible"}
			transition={{
				duration: 0.5,
				type: "tween",
			}}>
			<div className="w-full flex items-center justify-between">
				<div>
					<Link href="/">
						<Image
							src={footerLogo}
							className="w-20 h-20 object-cover"
							alt="margerite-footerLogo"
							width={80}
							height={80}
						/>
					</Link>
				</div>
				<ul className="flex items-center gap-7">
					<Link
						href="/about-us"
						className="paragraph font-normal montserrat hover">
						<TextHover
							title1="About Us"
							title2="About Us"
						/>
					</Link>
					<Link
						href="/services"
						className="paragraph font-normal montserrat hover">
						<TextHover
							title1="Services"
							title2="Services"
						/>
					</Link>
					<div
						className="relative"
						onMouseEnter={() => setShowAstrologyDropdown(true)}
						onMouseLeave={() => setShowAstrologyDropdown(false)}>
						<button className="paragraph font-normal montserrat flex items-center">
							Blogs
						</button>
						<AnimatePresence>
							{showAstrologyDropdown && (
								<motion.div
									initial="hidden"
									animate="visible"
									exit="hidden"
									variants={dropdownVariants}
									className="absolute top-full left-1/2 bg-[#7A75EF] shadow-lg rounded-md min-w-[170px] mt-1">
									<Link
										href="/blogs/astrology"
										className="block paragraph montserrat text-white font-normal leading-tight tracking-tight p-3 hover:bg-white/20 whitespace-nowrap">
										Monthly Astrology
									</Link>
									<Link
										href="/blogs/astrodialogues"
										className="block paragraph montserrat text-white font-normal leading-tight tracking-tight p-3 hover:bg-white/20">
										Astro Dialogues
									</Link>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<Link
						href="/planetary-meditations"
						className="paragraph font-normal montserrat hover">
						<TextHover
							title1="Planetary Meditations"
							title2="Planetary Meditations"
						/>
					</Link>
					<Link
						href="/products"
						className="paragraph font-normal montserrat hover">
						<TextHover
							title1="Products"
							title2="Products"
						/>
					</Link>
					<Link
						href="/life-healing"
						className="paragraph font-normal montserrat hover">
						<TextHover
							title1="Life Alignment Balances"
							title2="Life Alignment Balances"
						/>
					</Link>
					<Link
						href="/stars/star-guidance"
						className="paragraph font-normal montserrat hover">
						<TextHover
							title1="Planetary Guidance"
							title2="Planetary Guidance"
						/>
					</Link>
					{/* <div
						className="relative"
						onMouseEnter={() => setShowStarsDropdown(true)}
						onMouseLeave={() => setShowStarsDropdown(false)}>
						<button className="paragraph font-normal montserrat flex items-center">
							Stars
						</button>
						<AnimatePresence>
							{showStarsDropdown && (
								<motion.div
									initial="hidden"
									animate="visible"
									exit="hidden"
									variants={dropdownVariants}
									className="absolute top-full left-1/2 bg-[#7A75EF] shadow-lg rounded-md min-w-[180px] mt-1">
									<Link
										href="/stars/star-&-planets"
										className="block paragraph montserrat text-white font-normal leading-tight tracking-tight p-3 hover:bg-white/20">
										Star & Planets
									</Link>
									<Link
										href="/stars/star-guidance"
										className="block paragraph montserrat text-white font-normal leading-tight tracking-tight p-3 hover:bg-white/20">
										Star Guidance
									</Link>
								</motion.div>
							)}
						</AnimatePresence>
					</div> */}
				</ul>
				<div className="flex items-center gap-2">
					<div
						onClick={toggleCart}
						className="bg-[#7a74ef] px-4 py-2 relative rounded-lg text-white">
						<span className="absolute right-3 top-1 px-[5px] py-[2px] text-white font-Monstrate rounded-full bg-black text-[8px]">
							{cartCount}
						</span>
						<ShoppingBag size={30} />
					</div>
					<Link
						href="/contact-us"
						className="w-fit px-6 py-3 bg-[#7a74ef] rounded-lg cursor-pointer text-white paragraph font-normal montserrat">
						Contact Us
					</Link>
					<UserMenu />
				</div>
			</div>
		</motion.nav>
	);
}
