"use client";

import HomeLoader from "@/container/loader/home-loader";
import { CreditCard } from "react-square-web-payments-sdk";

// export const metadata: Metadata = {
// 	title: "Home - Mystice Marguerite",
// 	description: "Mystice Marguerite Home",
// };

export default function Loader() {
	return (
		<>
			{/* <HomeLoader /> */}
			<CreditCard />
		</>
	);
}
