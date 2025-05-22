import {
	Banner,
	ChapterFour,
	ChapterOne,
	ChapterThree,
	ChapterTwo,
	Products,
	SideQuest,
} from "@/container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Limited Edition Clothing. No Restocks - Mystic",
	description: "Mystic",
};

export default function Shop() {
	return (
		<>
			<Products />
			<ChapterFour />
			<ChapterThree />
			<ChapterTwo />
			<ChapterOne />
			<SideQuest />
			<Banner />
		</>
	);
}
