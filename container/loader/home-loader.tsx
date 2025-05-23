"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/client/loader";

export default function HomeLoader() {
	const [showLoader, setShowLoader] = useState(false);

	useEffect(() => {
		const hasLoaderBeenShown = localStorage.getItem("loaderShown");
		setShowLoader(!hasLoaderBeenShown);
	}, []);

	if (!showLoader) return null;

	return <Loader />;
}
