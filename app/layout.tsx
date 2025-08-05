"use client";
import "@/styles/globals.css";
import { useEffect } from "react";
import { SideCart } from "@/components/ui/client";
import AuthModal from "@/components/auth/auth-model";
import { CartProvider } from "@/context/cart-context";
import ToastProvider from "@/providers/toast-provider";

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
			<html
				lang="en"
				suppressHydrationWarning>
				<body>
					<ToastProvider />
					<AuthModal />
					<SideCart />
					{children}
				</body>
			</html>
		</CartProvider>
	);
}
