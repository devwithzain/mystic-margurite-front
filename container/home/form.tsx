"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import TextReveal from "@/components/ui/client/text-reveal";
import { bookNowFormSchema, TbookNowFormData } from "@/schemas";
import { footerLogo, formBg, gradientCircle, star } from "@/public";

export default function Form() {
	const form = useForm<TbookNowFormData>({
		resolver: zodResolver(bookNowFormSchema),
	});
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const {
		handleSubmit,
		register,
		reset,
		formState: { isSubmitting },
	} = form;

	const onSubmits = async (data: TbookNowFormData) => {
		try {
			const response = await axios.post(
				`https://mysticmarguerite.com/new/backend/api/book-now`,
				data,
			);
			if (response.data.success) {
				toast.success(response.data.success);
				reset();
			} else {
				toast.error("Failed to send data");
			}
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				toast.error(err.response.data.message);
			} else {
				toast.error("An error occurred");
			}
			console.error("Error:", err);
		}
	};

	return (
		<div className="w-full border-b border-[#C3BEB6]">
			<div className="w-full flex xm:flex-col-reverse sm:flex-col-reverse">
				<div className="w-1/2 xm:w-full sm:w-full">
					<Image
						src={formBg}
						alt="formBgImg"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col padding-x py-8 gap-10">
					<div className="w-full flex items-center justify-between gap-2">
						<Image
							src={gradientCircle}
							alt="gradientCircleImg"
							className="w-[150px] lg:w-[100px] md:w-[80px] object-cover xm:w-20 sm:w-20"
						/>
						<TextReveal>
							<h1 className="text-[#2E073F] subHeading papyrus font-semibold capitalize tracking-tight text-center">
								Energy Balance with <br /> Life Alignment
							</h1>
						</TextReveal>
						<Image
							src={footerLogo}
							alt="footerLogoImg"
							className="w-[150px] lg:w-[100px] md:w-[80px] object-cover xm:w-20 sm:w-20"
						/>
					</div>
					<form
						onSubmit={handleSubmit(onSubmits)}
						className="w-full flex flex-col gap-5">
						<div className="w-full flex items-center justify-between gap-5">
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="name"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									First Name
								</label>
								<input
									type="text"
									{...register("name", { required: true })}
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
									{...register("lastName", { required: true })}
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
						</div>
						<div className="w-full flex flex-col gap-3">
							<label
								htmlFor="email"
								className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
								Your Email
							</label>
							<input
								type="email"
								{...register("email", { required: true })}
								className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
							/>
						</div>
						<div className="w-full flex items-center justify-between gap-5">
							<div className="w-full flex flex-col gap-3 relative">
								<label
									htmlFor="services"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Services
								</label>
								<select
									onClick={() => setIsFilterOpen((prev) => !prev)}
									{...register("services", { required: true })}
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat appearance-none">
									<option value="">Select a service</option>
									<option value="Service 1">60-70 Minute Consultation</option>
									<option value="Service 1">130-140 Minute Consultation</option>
								</select>
								<ChevronDown
									className={`absolute right-3 top-1/2 translate-y-1/2 w-5 h-5 pointer-events-none transform transition-transform ${
										isFilterOpen ? "rotate-180" : ""
									}`}
								/>
								<ChevronDown
									className={`absolute right-3 top-1/2 translate-y-1/2 w-5 h-5 pointer-events-none transform transition-transform ${
										isFilterOpen ? "rotate-180" : ""
									}`}
								/>
							</div>
							{/* <div className="w-full flex flex-col gap-3 relative">
								<label
									htmlFor="healingTopics"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Balance Topics
								</label>
								<select
									onClick={() => setIsFilterOpen1((prev) => !prev)}
									{...register("healingTopics", { required: true })}
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat appearance-none">
									<option value="">Select a balance topic</option>
									<option value="Balance Topic 1">Balance Topic 1</option>
									<option value="Balance Topic 2">Balance Topic 2</option>
									<option value="Balance Topic 3">Balance Topic 3</option>
								</select>
								<ChevronDown
									className={`absolute right-3 top-1/2 translate-y-1/2 w-5 h-5 pointer-events-none transform transition-transform ${
										isFilterOpen1 ? "rotate-180" : ""
									}`}
								/>
								<ChevronDown
									className={`absolute right-3 top-1/2 translate-y-1/2 w-5 h-5 pointer-events-none transform transition-transform ${
										isFilterOpen1 ? "rotate-180" : ""
									}`}
								/>
							</div> */}
						</div>
						<div className="w-full flex items-center justify-between gap-5">
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="preferredTime"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Preferred Time
								</label>
								<input
									type="date"
									{...register("preferredTime", { required: true })}
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
									{...register("cityAndState", { required: true })}
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
									{...register("specialMessage", { required: true })}
									rows={8}
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
							</div>
						</div>
						<button
							type="submit"
							className="w-fit flex items-center gap-2 px-6 py-3 bg-[#7a74ef] cursor-pointer"
							disabled={isSubmitting}>
							<Image
								src={star}
								alt="star"
								className="w-5 h-5 object-cover"
							/>
							<span className="text-center text-white paragraph font-normal leading-tight tracking-tight montserrat">
								{isSubmitting ? "Booking..." : "Book Now"}
							</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
