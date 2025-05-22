import Link from "next/link";
import Image from "next/image";
import { servicesItems } from "@/constants";
import TextReveal from "@/components/ui/client/text-reveal";

export default function Services() {
	return (
		<div className="w-full">
			<div className="w-full items-end justify-between flex">
				{servicesItems.map((item) => (
					<div
						className={`w-1/2 flex flex-col gap-5 items-center  padding-x padding-y border-b border-[#C3BEB6] ${
							item.id === 2
								? "border-l border-[#C3BEB6]"
								: "bg-[#FFFCFA] border-l border-[#C3BEB6]"
						}`}
						key={item.id}>
						<Image
							src={item.src}
							alt={item.title}
							className="w-[500px] object-cover"
						/>
						<TextReveal>
							<h1 className="text-[#2E073F] subHeading font-semibold papyrus tracking-tight">
								{item.title}
							</h1>
						</TextReveal>
						<TextReveal>
							<p className="text-center paragraph text-[#000] montserrat leading-normal tracking-tight">
								{item.desc}
							</p>
						</TextReveal>
						<Link
							className="flex items-center gap-2 box"
							href={item.href}>
							<Image
								src={item.img}
								alt={item.title}
								className="w-5 h-5 object-cover"
							/>
							<p className="no-underline cursor-pointer outline-none border-none bg-transparent text-center text-[#936d42] paragraph font-normal leading-tight tracking-tight montserrat capitalize z-50 relative">
								{item.btn}
							</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
