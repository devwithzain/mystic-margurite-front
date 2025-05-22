"use client";
import "@/styles/globals.css";
import { useEffect } from "react";
import { CartProvider } from "@/context/cart-context";
import { Footer, Navbar } from "@/components/ui/client";

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
	return (
		<CartProvider>
			<html lang="en">
				<body>
					<Navbar />
					{children}
					<Footer />
				</body>
			</html>
		</CartProvider>
	);
}
