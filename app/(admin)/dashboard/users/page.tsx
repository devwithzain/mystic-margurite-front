import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import UserListings from "./components/user";

export const metadata: Metadata = {
	title: "Admin Users - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Users",
};

export default async function UsersPage() {
	const users = await prismadb.users.findMany({
		where: {
			role: {
				not: "admin",
			},
		},
	});
	return (
		<>
			<UserListings users={users} />
		</>
	);
}
