import { Metadata } from "next";
import HomeLoader from "@/container/loader/home-loader";

export const metadata: Metadata = {
	title: "Home - Mystice Marguerite",
	description: "Mystice Marguerite Home",
};

export default function Loader() {
	return (
		<>
			<HomeLoader />
		</>
	);
}
