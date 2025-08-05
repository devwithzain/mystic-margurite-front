import { Metadata } from "next";
import Account from "./components/account";
import { prismadb } from "@/lib/prismadb";
import { getUserData } from "@/lib/get-user-data";

export const metadata: Metadata = {
	title: "Admin Account - Mystic Marguerite",
	description: "Mystic Marguerite Admin Account",
};

export default async function AccountPage() {
	const token = getUserData("adminAuthToken");
	if (!token) {
		return <p>Unauthorized</p>;
	}
	const admin = await prismadb.users.findFirst({
		where: {
			role: "ADMIN",
		},
	});
	return (
		<>
			<Account admin={admin} />
		</>
	);
}
