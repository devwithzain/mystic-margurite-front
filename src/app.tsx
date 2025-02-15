import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./components/public-route";
import { AuthProvider } from "./providers/auth-provider";

export default function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route element={<PublicRoute />}>
					<Route
						path="/"
						element={<Home />}
					/>
				</Route>
			</Routes>
		</AuthProvider>
	);
}
