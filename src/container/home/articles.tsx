import { Link } from "react-router-dom";
import { articleItems } from "@/constants";

export default function Articles() {
	return (
		<div className="w-full min-h-screen padding-x padding-y flex items-center justify-center flex-col gap-20 bg-white z-50 relative">
			<div className="flex flex-col gap-2 items-center">
				<h1 className="heading text-[#936D42] forum leading-tight tracking-tight uppercase">
					Latest Articles
				</h1>
				<p className="text-center paragraph text-[#433E37] montserrat leading-normal tracking-tight">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry
				</p>
			</div>
			<div className="w-full flex items-center justify-center gap-5">
				{articleItems.map((item) => (
					<div
						className={`flex flex-col gap-5 items-start`}
						key={item.id}>
						<img
							src={item.img}
							alt={item.title}
							className="w-full h-[600px] object-cover"
						/>
						<h1 className="subHeading text-[#936D42] forum leading-tight tracking-tight uppercase">
							{item.title}
						</h1>
						<div className="flex items-center gap-2 box">
							<img
								src={item.src}
								alt={item.title}
								className="w-5 h-5 object-cover"
							/>
							<Link
								to="/astrology-blog"
								className="no-underline cursor-pointer outline-none border-none bg-transparent text-center text-[#936d42] paragraph font-normal leading-tight tracking-tight montserrat capitalize z-50 relative">
								{item.btn}
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
