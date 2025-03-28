import { motion } from "framer-motion";
import { horoScopeItems } from "@/constants";
import { containerVariants, itemVariants } from "@/motion";

export default function HoroScope() {
	return (
		<div className="w-full padding-x padding-y flex items-center justify-center flex-col gap-20">
			<div className="flex flex-col gap-2 items-center">
				<h1 className="heading text-[#936D42] forum leading-tight tracking-tight">
					TODAY'S HOROSCOPE
				</h1>
				<p className="text-center paragraph text-[#433E37] montserrat leading-normal tracking-tight">
					Discover your daily astrological insights and guidance for a more
					enlightened path ahead
				</p>
			</div>
			<motion.div
				className="w-full flex items-center justify-center gap-20 shrink-0 flex-wrap pb-20"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}>
				{horoScopeItems.map((item) => (
					<motion.div
						className="flex flex-col items-center w-[200px]"
						key={item.id}
						variants={itemVariants}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.3 },
						}}>
						<img
							src={item.src}
							alt={item.title}
							className="w-full h-full object-cover"
						/>
						<h1 className="subHeading text-[#936D42] forum leading-tight tracking-tight">
							{item.title}
						</h1>
						<p className="text-center paragraph text-[#433E37] montserrat leading-normal tracking-tight">
							{item.desc}
						</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
