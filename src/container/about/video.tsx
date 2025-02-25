import { about02, introVideo2 } from "@/assets";
import VideoModal from "@/components/video-modal";
import AnimatedText from "@/components/animated-text";

export default function Video() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="">
					<AnimatedText
						text="Watch Our Video"
						className="text-[#936d42] heading font-normal forum capitalize leading-tight"
					/>
				</div>
				<div className="">
					<VideoModal
						thumbnail={about02}
						videoSrc={introVideo2}
					/>
				</div>
			</div>
		</div>
	);
}
