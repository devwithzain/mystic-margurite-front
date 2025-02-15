import { footerLogo, formBg, gradientCircle, star } from "@/assets";

export default function Form() {
	return (
		<div className="w-full border-b border-[#C3BEB6]">
			<div className="w-full flex">
				<div className="flex-1">
					<img
						src={formBg}
						alt="formBgImg"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="flex-1 flex flex-col p-10 gap-10">
					<div className="w-full flex items-center justify-between gap-2">
						<img
							src={gradientCircle}
							alt="gradientCircleImg"
							className="w-[150px] lg:w-[100px] md:w-[80px] object-cover"
						/>
						<h3 className="text-[#7E78FF] subHeading forum capitalize leading-tight tracking-tight text-center">
							Energy Healing with <br /> Life Alignment
						</h3>
						<img
							src={footerLogo}
							alt="footerLogoImg"
							className="w-[150px] lg:w-[100px] md:w-[80px] object-cover"
						/>
					</div>
					<form
						action=""
						className="w-full flex flex-col gap-5">
						<div className="w-full flex items-center justify-between gap-5">
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="name"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="lastName"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									id="lastName"
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
						</div>
						<div className="w-full flex items-center justify-between gap-5">
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="services"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Services
								</label>
								<input
									type="text"
									name="services"
									id="services"
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="healingTopics"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Healing Topics
								</label>
								<input
									type="text"
									name="healingTopics"
									id="healingTopics"
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
						</div>
						<div className="w-full flex items-center justify-between gap-5">
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="preferredTime"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Preferred Time
								</label>
								<input
									type="text"
									name="preferredTime"
									id="preferredTime"
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="cityAndState"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									City And State
								</label>
								<input
									type="text"
									name="cityAndState"
									id="cityAndState"
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
						</div>
						<div className="w-full flex items-center justify-between gap-5">
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="services"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Services
								</label>
								<input
									type="text"
									name="services"
									id="services"
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
						</div>
						<div className="w-full flex items-center justify-between gap-5">
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="message"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Message
								</label>
								<textarea
									name="message"
									rows={8}
									id="message"
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
						</div>
						<div className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef] cursor-pointer">
							<img
								src={star}
								alt="star"
								className="w-5 h-5 object-cover"
							/>
							<input
								type="submit"
								className="text-center text-white paragraph font-normal leading-tight tracking-tight montserrat"
								value="Book A Consultation"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
