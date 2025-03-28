import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import AnimatedText from "@/components/animated-text";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, TcontactFormData } from "@/schemas";

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
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="Leave A Message"
						className="text-[#936d42] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="w-full flex items-center justify-center">
					<form
						onSubmit={handleSubmit(onSubmits)}
						className="w-full max-w-5xl flex flex-col gap-5">
						<input
							{...register("name")}
							type="text"
							placeholder="Your Name"
							className="w-full border border-[#C2BAB5] rounded-md px-6 py-4 tracking-tight leading-tight font-normal montserrat"
						/>
						{errors.name && (
							<span className="text-red-500 text-sm">
								{errors.name.message?.toString()}
							</span>
						)}
						<input
							type="email"
							{...register("email")}
							placeholder="Your Email"
							className="w-full border border-[#C2BAB5] rounded-md px-6 py-4 tracking-tight leading-tight font-normal montserrat"
						/>
						{errors.email && (
							<span className="text-red-500 text-sm">
								{errors.email.message}
							</span>
						)}
						<textarea
							{...register("specialMessage")}
							rows={10}
							placeholder="Your Message"
							className="w-full border border-[#C2BAB5] rounded-md px-6 py-4 tracking-tight leading-tight font-normal montserrat"
						/>
						{errors.specialMessage && (
							<span className="text-red-500 text-sm">
								{errors.specialMessage.message?.toString()}
							</span>
						)}
						<button
							disabled={isSubmitting}
							type="submit"
							className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#7a74ef]">
							<button className="text-center text-white text-lg font-normal leading-tight tracking-tight montserrat">
								{isSubmitting ? "Sending..." : "Send Message"}
							</button>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
