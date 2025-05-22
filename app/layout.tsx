import "@/styles/globals.css";
import AuthModal from "@/components/auth/auth-model";
import ToastProvider from "@/providers/toast-provider";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html
				lang="en"
				suppressHydrationWarning>
				<body>
					<ToastProvider />
					<AuthModal />
					{children}
				</body>
			</html>
		</>
	);
}
