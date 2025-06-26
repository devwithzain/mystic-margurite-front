"use client";
import "@/styles/globals.css";
import { useEffect } from "react";
import { Footer, Navbar, NewsLetter } from "@/components/ui/client";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	const loaderState = localStorage.getItem("loaderCompleted");

	if (!loaderState) {
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
