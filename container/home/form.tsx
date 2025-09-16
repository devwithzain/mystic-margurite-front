"use client";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextReveal from "@/components/ui/client/text-reveal";
import { contactFormSchema, TcontactFormData } from "@/schemas";
import { footerLogo, formBg, gradientCircle, star } from "@/public";

export default function Form() {
	const form = useForm<TcontactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const {
		handleSubmit,
		register,
		formState: { isSubmitting, errors },
	} = form;

	const onSubmits = async (data: TcontactFormData) => {
		try {
			const response = await axios.post(
				`http://127.0.0.1:8000/api/contact`,
				data,
			);
			if (response.data.success) {
				toast.success(response.data.success);
			}
		} catch (err) {
			console.log(err);
			if (axios.isAxiosError(err) && err.response) {
				toast.error(err.response.data.message);
			} else {
				toast.error("An error occurred");
			}
		}
	};

	return (
		<div className="w-full border-b border-[#C3BEB6]">
			<div className="w-full flex xm:flex-col-reverse sm:flex-col-reverse">
				<div className="w-1/2 xm:w-full sm:w-full">
					<Image
						src={formBg}
						alt="formBgImg"
						className="w-full h-[850px] object-cover"
					/>
				</div>
				<div className="w-1/2 xm:w-full sm:w-full flex flex-col items-center justify-center padding-x py-8 gap-10">
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
									Full Name
								</label>
								<input
									type="text"
									{...register("name", { required: true })}
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
								{errors.name && (
									<span className="text-red-500 text-sm">
										{errors.name.message?.toString()}
									</span>
								)}
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
							{errors.name && (
								<span className="text-red-500 text-sm">
									{errors.name.message?.toString()}
								</span>
							)}
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
									rows={10}
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat"
								/>
								{errors.name && (
									<span className="text-red-500 text-sm">
										{errors.name.message?.toString()}
									</span>
								)}
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
								{isSubmitting ? "Sending..." : "Send Message"}
							</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
