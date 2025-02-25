import VideoModal from "@/components/video-modal";
import { introVideo2, videoThumbnail } from "@/assets";

export default function Video() {
	return (
		<>
			<VideoModal
				thumbnail={videoThumbnail}
				videoSrc={introVideo2}
			/>
		</>
	);
}
