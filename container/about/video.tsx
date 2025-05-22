import PlayVideo from "@/components/ui/client/play-video";

export default function Video() {
	return (
		<div className="w-full">
			<PlayVideo videosrc={"/intro2.mp4"} />
		</div>
	);
}
