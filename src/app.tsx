import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Planatery from "./pages/Planatery";
import BlogDetail from "./pages/BlogDetail";
import ServiceDetailPage from "./pages/ServiceDetail";
import StarsAndPlanets from "./pages/StarsAndPlanets";
import PlanetaryDetailPage from "./pages/PlanetaryDetail";

export default function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/about-us"
				element={<About />}
			/>
			<Route
				path="/astrology-blog"
				element={<Blog />}
			/>
			<Route
				path="/astrology-blog/:id"
				element={<BlogDetail />}
			/>
			<Route
				path="/services"
				element={<Services />}
			/>
			<Route
				path="/services/:id"
				element={<ServiceDetailPage />}
			/>
			<Route
				path="/planetary-meditations"
				element={<Planatery />}
			/>
			<Route
				path="/planetary-meditations/:id"
				element={<PlanetaryDetailPage />}
			/>
			<Route
				path="/stars-and-planets"
				element={<StarsAndPlanets />}
			/>
			<Route
				path="/contact-us"
				element={<Contact />}
			/>
		</Routes>
	);
}
