"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/client/loader";
import { useLocalStorage } from "@/hooks/use-local-storage";

export default function HomeLoader() {
	const [showLoader, setShowLoader] = useState(false);

	const [loaderShown, setLoaderShown, isStorageLoaded] = useLocalStorage(
		"loaderShown",
		false,
	);

	useEffect(() => {
		if (isStorageLoaded) {
			setShowLoader(!loaderShown);
		}
	}, [isStorageLoaded, loaderShown]);

	if (!isStorageLoaded) {
		return null;
	}

	if (!showLoader) return null;

	return <Loader />;
}
