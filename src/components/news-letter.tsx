import { MdEmail } from "react-icons/md";

export default function NewsLetter() {
	return (
		<section className="flex items-center justify-center padding-x padding-y testimonialsBg">
			<div className="w-full max-w-7xl flex flex-col gap-5 padding-x py-14 bg-white shadow-lg rounded-2xl text-center">
				<div className="flex flex-col">
					<h2 className="heading font-semibold text-[#936d42] tracking-tight leading-tight forum">
						Subscribe to our <br /> Newsletter
					</h2>
				</div>
				<p className="paragraph text-black font-normal montserrat leading-normal">
					Subscribe to our newsletter and be the first to receive exclusive
					updates, <br /> special offers, and expert insights straight to your
					inbox.
				</p>
				<div className="flex items-center gap-2 justify-center pt-3">
					<div className="relative">
						<MdEmail
							className="text-[#000] absolute left-3 top-1/2 transform -translate-y-1/2"
							size={24}
						/>
						<input
							type="email"
							placeholder="Enter Your Email"
							className="paragraph text-black font-normal montserrat leading-tight tracking-tight pl-12 pr-4 py-3 border-[2px] border-[#000] outline-none rounded-full"
						/>
					</div>
					<button className="paragraph bg-[#000] font-normal montserrat leading-tight tracking-tight px-6 py-3 text-white hover:bg-[#000] transition rounded-full">
						Subscribe
					</button>
				</div>
			</div>
		</section>
	);
}
