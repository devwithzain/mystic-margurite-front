import { Metadata } from "next";
import Setting from "@/container/setting/setting";

export const metadata: Metadata = {
	title: "Profile Setting - Mystice Marguerite",
	description: "Mystice Marguerite - Profile Setting",
};

export default function SettingsPage() {
	return (
		<>
			<Setting />
		</>
	);
}
