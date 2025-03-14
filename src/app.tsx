import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Thank from "./pages/Thank";
import About from "./pages/About";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Product from "./pages/Products";
import Checkout from "./pages/Checkout";
import Services from "./pages/Services";
import Planatery from "./pages/Planatery";
import BlogDetail from "./pages/BlogDetail";
import LifeHealing from "./pages/LifeHealing";
import ProductDetailPage from "./pages/ProductDetail";
import ServiceDetailPage from "./pages/ServiceDetail";
import StarsAndPlanets from "./pages/StarsAndPlanets";
import PlanetaryDetailPage from "./pages/PlanetaryDetail";
import LifeHealingDetailPage from "./pages/LifeHealingDetail";

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
				path="/blogs/astrology"
				element={<Blog />}
			/>
			<Route
				path="/blogs/astrology/:id"
				element={<BlogDetail />}
			/>
			<Route
				path="/blogs/astrodialogues"
				element={<Blog />}
			/>
			<Route
				path="/blogs/astrodialogues/:id"
				element={<BlogDetail />}
			/>
			<Route
				path="/services"
				element={<Services />}
			/>
			<Route
				path="/cart"
				element={<Cart />}
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
				path="/life-healing"
				element={<LifeHealing />}
			/>
			<Route
				path="/life-healing/:id"
				element={<LifeHealingDetailPage />}
			/>
			<Route
				path="/planetary-meditations/:id"
				element={<PlanetaryDetailPage />}
			/>
			<Route
				path="/products"
				element={<Product />}
			/>
			<Route
				path="/product/:id"
				element={<ProductDetailPage />}
			/>
			<Route
				path="/stars-and-planets"
				element={<StarsAndPlanets />}
			/>
			<Route
				path="/checkout"
				element={<Checkout />}
			/>
			<Route
				path="/thank-you"
				element={<Thank />}
			/>
			<Route
				path="/my-orders"
				element={<Orders />}
			/>
			<Route
				path="/contact-us"
				element={<Contact />}
			/>
		</Routes>
	);
}
