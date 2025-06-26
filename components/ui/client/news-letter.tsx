"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function NewsLetter() {
	const [email, setEmail] = useState("");
	const searchParams = useSearchParams();
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		const status = searchParams.get("status");
		const message = searchParams.get("message");

		if (status === "success") {
			toast.success(message || "Your subscription has been confirmed!");
		} else if (status === "error") {
			toast.error(message || "Something went wrong!");
		}
	}, [searchParams]);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await axios.post(
				"https://mysticmarguerite.com/new/backend/api/newsletter/subscribe",
				{
					email,
					redirect_url: window.location.href,
				},
			);
			if (response.data.success) {
				toast.success(response.data.success);
				setEmail("");
			} else {
				toast.error("Subscription failed.");
			}
		} catch (err: unknown) {
			if (axios.isAxiosError(err) && err.response?.data?.error) {
				toast.error(err.response.data.error);
			} else {
				toast.error("An error occurred.");
			}
		} finally {
			setIsSubmitting(false);
		}
	};
	return (
		<section className="flex items-center justify-center padding-x padding-y testimonialsBg relative z-50">
			<div className="w-full max-w-7xl flex flex-col gap-5 padding-x py-14 bg-white shadow-lg rounded-2xl text-center">
				<div className="flex flex-col">
					<h2 className="heading leading-tight font-semibold text-[#2E073F] tracking-tight papyrus">
						Subscribe to our <br /> Newsletter
					</h2>
				</div>
				<p className="paragraph text-black font-normal montserrat leading-normal">
					Subscribe to our newsletter and be the first to receive exclusive
					updates, <br /> special offers, and expert insights straight to your
					inbox.
				</p>
				<form
					onSubmit={handleSubmit}
					className="flex items-center gap-2 justify-center pt-3 xm:flex-col sm:flex-col">
					<div className="xm:w-full sm:w-full relative">
						<MdEmail
							className="text-[#000] absolute left-3 top-1/2 transform -translate-y-1/2"
							size={24}
						/>
						<input
							type="email"
							placeholder="Enter Your Email"
							className="paragraph text-black font-normal montserrat leading-tight tracking-tight pl-12 pr-4 py-3 border-[2px] border-[#000] outline-none rounded-full xm:w-full sm:w-full"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<button
						disabled={isSubmitting}
						type="submit"
						className="paragraph bg-[#000] font-normal montserrat leading-tight tracking-tight px-6 py-3 text-white hover:bg-[#000] transition rounded-full xm:w-full sm:w-full">
						{isSubmitting ? "Subscribing..." : "Subscribe"}
					</button>
				</form>
			</div>
		</section>
	);
}
