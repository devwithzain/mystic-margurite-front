"use client";
import {
	arrowLeft,
	arrowRight,
	client02,
	client03,
	client04,
	footerLogo,
} from "@/public";
import "swiper/css";
import { useRef } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import TextReveal from "@/components/ui/client/text-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

export default function Testimonials() {
	const swiperRef = useRef<SwiperType | null>(null);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.slidePrev();
	};
	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.slideNext();
	};

	return (
		<div className="w-full testimonialsBg padding-y">
			<div className="flex flex-col items-center justify-between gap-20">
				<div className="w-full flex items-center justify-center padding-x">
					<Image
						src={footerLogo}
						alt="eyesImg"
						className="w-[150px] object-cover"
					/>
				</div>
				<div className="w-full padding-x">
					<Swiper
						modules={[Navigation]}
						loop
						autoplay
						draggable
						onSwiper={(swiper) => (swiperRef.current = swiper)}>
						<SwiperSlide>
							<div className="w-full flex items-center justify-between	xm:hidden sm:hidden">
								<button
									onClick={handlePrev}
									className="cursor-pointer">
									<Image
										src={arrowLeft}
										alt="arrowLeftImg"
										className="w-full object-cover"
									/>
								</button>
								<div className="p-7 rounded-[30px] min-h-[250px] flex flex-col items-center">
									<TextReveal>
										<p className="subHeading text-[#2E073F] forum text-center leading-tight tracking-tight">
											Sit amet luctus venenatis letus magna <br /> fringilla
											urna porttor rhoncus.
										</p>
									</TextReveal>
									<TextReveal>
										<p className="text-center paragraph text-[#000] montserrat leading-normal tracking-tight">
											- Angie Miller, Writer
										</p>
									</TextReveal>
								</div>
								<button
									onClick={handleNext}
									className="cursor-pointer">
									<Image
										src={arrowRight}
										alt="arrowRightImg"
										className="w-full object-cover xm:hidden sm:hidden"
									/>
								</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full flex items-center justify-between	xm:hidden sm:hidden">
								<button
									onClick={handlePrev}
									className="cursor-pointer">
									<Image
										src={arrowLeft}
										alt="arrowLeftImg"
										className="w-full object-cover xm:hidden sm:hidden"
									/>
								</button>
								<div className="p-7 rounded-[30px] min-h-[250px] flex flex-col items-center">
									<TextReveal>
										<p className="subHeading text-[#2E073F] forum text-center leading-tight tracking-tight">
											Sit amet luctus venenatis letus magna <br /> fringilla
											urna porttor rhoncus.
										</p>
									</TextReveal>
									<TextReveal>
										<p className="text-center paragraph text-[#000] montserrat leading-normal tracking-tight">
											- Angie Miller, Writer
										</p>
									</TextReveal>
								</div>
								<button
									onClick={handleNext}
									className="cursor-pointer">
									<Image
										src={arrowRight}
										alt="arrowRightImg"
										className="w-full object-cover xm:hidden sm:hidden"
									/>
								</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full flex items-center justify-between	xm:hidden sm:hidden">
								<button
									onClick={handlePrev}
									className="cursor-pointer">
									<Image
										src={arrowLeft}
										alt="arrowLeftImg"
										className="w-full object-cover"
									/>
								</button>
								<div className="p-7 rounded-[30px] min-h-[250px] flex flex-col items-center">
									<TextReveal>
										<p className="subHeading text-[#2E073F] forum text-center leading-tight tracking-tight">
											Sit amet luctus venenatis letus magna <br /> fringilla
											urna porttor rhoncus.
										</p>
									</TextReveal>
									<TextReveal>
										<p className="text-center paragraph text-[#000] montserrat leading-normal tracking-tight">
											- Angie Miller, Writer
										</p>
									</TextReveal>
								</div>
								<button
									onClick={handleNext}
									className="cursor-pointer">
									<Image
										src={arrowRight}
										alt="arrowRightImg"
										className="w-full object-cover"
									/>
								</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full flex items-center justify-between	xm:hidden sm:hidden">
								<button
									onClick={handlePrev}
									className="cursor-pointer">
									<Image
										src={arrowLeft}
										alt="arrowLeftImg"
										className="w-full object-cover"
									/>
								</button>
								<div className="p-7 rounded-[30px] min-h-[250px] flex flex-col items-center">
									<TextReveal>
										<p className="subHeading text-[#2E073F] forum text-center leading-tight tracking-tight">
											Sit amet luctus venenatis letus magna <br /> fringilla
											urna porttor rhoncus.
										</p>
									</TextReveal>
									<TextReveal>
										<p className="text-center paragraph text-[#000] montserrat leading-normal tracking-tight">
											- Angie Miller, Writer
										</p>
									</TextReveal>
								</div>
								<button
									onClick={handleNext}
									className="cursor-pointer">
									<Image
										src={arrowRight}
										alt="arrowRightImg"
										className="w-full object-cover"
									/>
								</button>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="w-full flex items-center">
					<div className="w-full h-[1.3px] bg-[#C3BEB6]" />
					<div className="flex items-center relative z-3">
						<Image
							src={client04}
							alt="client04Img"
							className="w-[100px] object-cover"
						/>
						<Image
							src={client02}
							alt="client02Img"
							className="w-[100px] object-cover"
						/>
						<Image
							src={client03}
							alt="client03Img"
							className="w-[100px] object-cover"
						/>
					</div>
					<div className="w-full h-[1.3px] bg-[#C3BEB6]" />
				</div>
			</div>
		</div>
	);
}
