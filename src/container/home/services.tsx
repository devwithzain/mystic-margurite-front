import { servicesItems } from "@/constants";

export default function Services() {
	return (
		<div className="w-full">
			<div className="w-full items-end justify-between flex">
				{servicesItems.map((item) => (
					<div
						className={`flex flex-col gap-5 items-center  padding-x padding-y border-b border-[#C3BEB6] ${
							item.id === 2
								? "border-l border-[#C3BEB6]"
								: "bg-[#FFFCFA] border-l border-[#C3BEB6]"
						}`}
						key={item.id}>
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
						<div className="flex items-center gap-2">
							<img
								src={item.img}
								alt={item.title}
								className="w-5 h-5 object-cover"
							/>
							<p className="text-center paragraph text-[#433E37] montserrat leading-normal tracking-tight">
								{item.btn}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
