import { motion } from "framer-motion";
import { blogItems } from "@/constants";
import { Link } from "react-router-dom";

export default function Categories() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex justify-center gap-10 items-start">
				<div className="min-w-[320px] border border-black">
					<h3 className="text-black subHeading font-normal montserrat leading-tight border-b border-black p-4">
						Categories
					</h3>
					<div className="flex flex-col gap-8 p-5">
						{[
							"Meditation on the Sun",
							"Meditation on Mercury",
							"Meditation on Venus",
							"Meditation on Gaia",
							"Meditation on the Moon",
							"Meditation on Mars",
							"Meditation on Jupiter",
							"Meditation on Saturn",
							"Meditation on Uranus",
							"Meditation on Neptune",
							"Meditation on Pluto",
						].map((item, index) => (
							<div
								key={index}
								className={`border-b border-black flex items-center gap-2 pb-3 ${
									index === 10 ? "border-none" : ""
								}`}>
								<h3 className="text-black paragraph font-normal montserrat leading-tight">
									{item}
								</h3>
							</div>
						))}
					</div>
				</div>
				<div className="grid grid-cols-4 gap-6">
					{blogItems.map((item, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1, ease: "linear" }}
							viewport={{ once: true }}
							key={index}
							className="flex flex-col items-center gap-4">
							<div className="w-full relative flex flex-col gap-4">
								<img
									src={item.src}
									alt="blog"
									className="w-full object-cover"
								/>
								<div className="flex flex-col">
									<h3 className="text-black subHeading font-normal forum leading-tight">
										{item.title}
									</h3>
									<p className="text-black montserrat text-sm font-normal forum leading-normal">
										{item.para.split(" ").slice(0, 13).join(" ")}...{" "}
										<Link
											to={`/astrology-blog/${item.id}`}
											className="text-blue-600 hover:underline">
											Read More
										</Link>
									</p>
								</div>
							</div>
						</motion.div>
					))}{" "}
				</div>
			</div>
		</div>
	);
}
