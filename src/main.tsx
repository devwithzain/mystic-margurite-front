import App from "@/app";
import "@/styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ScrollToTop from "./components/scroll-to-top";
import ToastProvider from "@/providers/toast-provider";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router>
			<ScrollToTop />
			<ToastProvider />
			<App />
		</Router>
	</StrictMode>,
);
