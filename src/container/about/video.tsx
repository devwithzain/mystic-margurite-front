import { introVideo2 } from "@/assets";
import PlayVideo from "@/components/play-video";

export default function Video() {
	return (
		<div className="w-full">
			<PlayVideo videosrc={introVideo2} />
		</div>
	);
}
