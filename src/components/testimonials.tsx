import {
	arrowLeft,
	arrowRight,
	client02,
	client03,
	client04,
	eyes,
} from "@/assets";
// @ts-expect-error - Temporary workaround for type mismatch
import "swiper/css";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import TextReveal from "@/components/text-reveal";
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
					<img
						src={eyes}
						alt="eyesImg"
						className="w-[150px] object-cover"
					/>
				</div>
				<div className="w-full px-10">
					<Swiper
						modules={[Navigation]}
						loop
						autoplay
						draggable
						onSwiper={(swiper) => (swiperRef.current = swiper)}>
						<SwiperSlide>
							<div className="w-full flex items-center justify-between	">
								<button
									onClick={handlePrev}
									className="cursor-pointer">
									<img
										src={arrowLeft}
										alt="arrowLeftImg"
										className="w-full object-cover"
									/>
								</button>
								<div className="p-7 rounded-[30px] min-h-[250px] flex flex-col items-center">
									<TextReveal>
										<p className="subHeading text-[#2E073F] forum text-center leading-tight tracking-tight">
											"Sit amet luctus venenatis letus magna <br /> fringilla
											urna porttor rhoncus."
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
									<img
										src={arrowRight}
										alt="arrowRightImg"
										className="w-full object-cover"
									/>
								</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full flex items-center justify-between	">
								<button
									onClick={handlePrev}
									className="cursor-pointer">
									<img
										src={arrowLeft}
										alt="arrowLeftImg"
										className="w-full object-cover"
									/>
								</button>
								<div className="p-7 rounded-[30px] min-h-[250px] flex flex-col items-center">
									<TextReveal>
										<p className="subHeading text-[#2E073F] forum text-center leading-tight tracking-tight">
											"Sit amet luctus venenatis letus magna <br /> fringilla
											urna porttor rhoncus."
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
									<img
										src={arrowRight}
										alt="arrowRightImg"
										className="w-full object-cover"
									/>
								</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full flex items-center justify-between	">
								<button
									onClick={handlePrev}
									className="cursor-pointer">
									<img
										src={arrowLeft}
										alt="arrowLeftImg"
										className="w-full object-cover"
									/>
								</button>
								<div className="p-7 rounded-[30px] min-h-[250px] flex flex-col items-center">
									<TextReveal>
										<p className="subHeading text-[#2E073F] forum text-center leading-tight tracking-tight">
											"Sit amet luctus venenatis letus magna <br /> fringilla
											urna porttor rhoncus."
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
									<img
										src={arrowRight}
										alt="arrowRightImg"
										className="w-full object-cover"
									/>
								</button>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="w-full flex items-center justify-between	">
								<button
									onClick={handlePrev}
									className="cursor-pointer">
									<img
										src={arrowLeft}
										alt="arrowLeftImg"
										className="w-full object-cover"
									/>
								</button>
								<div className="p-7 rounded-[30px] min-h-[250px] flex flex-col items-center">
									<TextReveal>
										<p className="subHeading text-[#2E073F] forum text-center leading-tight tracking-tight">
											"Sit amet luctus venenatis letus magna <br /> fringilla
											urna porttor rhoncus."
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
									<img
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
						<img
							src={client04}
							alt="client04Img"
							className="w-[100px] object-cover"
						/>
						<img
							src={client02}
							alt="client02Img"
							className="w-[100px] object-cover"
						/>
						<img
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
