import Script from "next/script";
import { getData } from "@/lib/get-zoom-token";
import VideoChatClientWrapper from "@/components/ui/client/video-chat-client-wrapper";

export default async function Call(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
	const jwt = await getData(params.slug);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<VideoChatClientWrapper
				slug={params.slug}
				JWT={jwt}
			/>
			<Script
				src="/coi-serviceworker.js"
				strategy="beforeInteractive"
			/>
		</main>
	);
}
