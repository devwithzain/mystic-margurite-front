import { marqueeItems } from "@/constants";
import LogoMarquee from "@/components/logo-marquee";

export default function Marquee() {
	return (
		<div className="w-full bg-[#7A75EF] py-5">
			<LogoMarquee baseVelocity={1}>
				<div className="flex items-center">
					{marqueeItems.map((item) => (
						<div
							className="flex items-center mx-10 gap-3"
							key={item.id}>
							<img
								src={item.img}
								alt="star"
								className="w-8 h-8 object-cover"
							/>
							<p className="subHeading text-white leading-tight papyrus capitalize font-semibold">
								{item.title}
							</p>
						</div>
					))}
				</div>
			</LogoMarquee>
		</div>
	);
}
