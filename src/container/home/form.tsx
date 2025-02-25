import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookNowFormSchema, TbookNowFormData } from "@/schemas";
import { footerLogo, formBg, gradientCircle, star } from "@/assets";

export default function Form() {
	const form = useForm<TbookNowFormData>({
		resolver: zodResolver(bookNowFormSchema),
	});

	const {
		handleSubmit,
		register,
		reset,
		formState: { isSubmitting },
	} = form;

	const onSubmits = async (data: TbookNowFormData) => {
		try {
			const response = await axios.post(
				`https://freequote4financialprotection.com/backend/api/book-now`,
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
		console.log(data);
	};
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
						onSubmit={handleSubmit(onSubmits)}
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
						<div className="w-full flex items-center justify-between gap-5">
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="services"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Services
								</label>
								<select
									{...register("services", { required: true })}
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat">
									<option value="">Select a service</option>
									<option value="Service 1">Service 1</option>
									<option value="Service 2">Service 2</option>
									<option value="Service 3">Service 3</option>
								</select>
							</div>
							<div className="w-full flex flex-col gap-3">
								<label
									htmlFor="healingTopics"
									className="text-[#040112] paragraph font-normal montserrat leading-tight tracking-tight">
									Healing Topics
								</label>
								<select
									{...register("healingTopics", { required: true })}
									className="w-full px-5 py-2 bg-white/20 border border-[#040112]/30 backdrop-blur-xl outline-none  montserrat">
									<option value="">Select a healing topic</option>
									<option value="Healing Topic 1">Healing Topic 1</option>
									<option value="Healing Topic 2">Healing Topic 2</option>
									<option value="Healing Topic 3">Healing Topic 3</option>
								</select>
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
							<img
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
