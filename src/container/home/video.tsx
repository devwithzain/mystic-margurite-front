import { introVideo2 } from "@/assets";
import PlayVideo from "@/components/play-video";

export default function Video() {
	return (
		<>
			{/* <VideoModal
				thumbnail={videoThumbnail}
				videoSrc={introVideo2}
			/> */}
			<PlayVideo videosrc={introVideo2} />
		</>
	);
}
