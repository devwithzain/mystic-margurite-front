import { arrowLeft1, arrowRight1 } from "@/assets";
// @ts-expect-error - Temporary workaround for type mismatch
import "swiper/css";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { starItems } from "@/constants";

export default function Slider() {
	const swiperRef = useRef<SwiperType | null>(null);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.slidePrev();
	};
	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.slideNext();
	};

	return (
		<div className="w-full padding-y">
			<div className="flex flex-col items-center justify-between gap-20">
				<div className="w-full px-10">
					<Swiper
						modules={[Navigation]}
						loop
						autoplay
						draggable
						onSwiper={(swiper) => (swiperRef.current = swiper)}>
						{starItems.map((item) => (
							<SwiperSlide>
								<div className="w-full flex items-center justify-between	">
									<button
										onClick={handlePrev}
										className="px-4 py-3 bg-[#7A75EF]/20 rounded-full cursor-pointer">
										<img
											src={arrowRight1}
											alt="arrowLeftImg"
											className="w-4 object-cover"
										/>
									</button>
									<div className="p-7 rounded-[30px] min-h-[250px] flex flex-col items-center">
										<img
											src={item.src}
											alt="star"
											className="w-full object-cover"
										/>
									</div>
									<button
										onClick={handleNext}
										className="px-4 py-3 bg-[#7A75EF]/20 rounded-full cursor-pointer">
										<img
											src={arrowLeft1}
											alt="arrowRightImg"
											className="w-4 object-cover"
										/>
									</button>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}
