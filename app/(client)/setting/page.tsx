import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import Hero from "@/container/setting/hero";
import Setting from "@/container/setting/setting";
import { getUserData } from "@/lib/get-user-data";

export const metadata: Metadata = {
	title: "Profile Setting - Mystice Marguerite",
	description: "Mystice Marguerite - Profile Setting",
};

export default async function SettingsPage() {
	const token = getUserData("authToken");
	if (!token) {
		return <p>Unauthorized</p>;
	}
	const user = await prismadb.users.findFirst({
		where: {
			role: "USER",
		},
	});
	return (
		<>
			<Hero />
			<Setting user={user} />
		</>
	);
}
