import { motion } from "framer-motion";
import { planetryItems } from "@/constants";
import AnimatedText from "@/components/animated-text";
import { Link } from "react-router-dom";

export default function Planetary() {
	return (
		<div className="w-full padding-y padding-x bg-white relative z-50">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="Planetary Meditation"
						className="text-[#936d42] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="grid grid-cols-4 gap-6">
					{planetryItems.map((item, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1, ease: "linear" }}
							viewport={{ once: true }}
							key={index}
							className="flex flex-col items-center gap-4">
							<Link
								to={`/planetary-meditations/${item.id}`}
								className="w-full relative">
								<img
									src={item.src}
									alt={item.title}
									className="w-full h-[250px] object-cover"
								/>
								<div className="absolute bottom-5 left-5">
									<h3 className="text-white paragraph font-normal montserrat leading-tight">
										{item.title}
									</h3>
								</div>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
