"use client";
import "@/styles/globals.css";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Footer, Navbar, NewsLetter } from "@/components/ui/client";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [loaderCompleted, , isStorageLoaded] = useLocalStorage(
		"loaderCompleted",
		false,
	);

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	if (!isStorageLoaded || loaderCompleted !== true) {
		return null;
	}

	return (
		<>
			<Navbar />
			{children}
			<NewsLetter />
			<Footer />
		</>
	);
}
