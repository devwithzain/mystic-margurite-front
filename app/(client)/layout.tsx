"use client";
import "@/styles/globals.css";
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
