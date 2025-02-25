import Loader from "@/components/loader";

export default function Home() {
	const hasLoaderBeenShown = localStorage.getItem("loaderShown");
	return !hasLoaderBeenShown && <Loader />;
}
