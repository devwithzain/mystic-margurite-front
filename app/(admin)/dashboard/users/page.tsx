import { Metadata } from "next";
import UserListings from "./components/user";

export const metadata: Metadata = {
	title: "Admin Users - Mystic Marguerite",
	description: "Mystic Marguerite - Admin Users",
};

export default async function UsersPage() {
	return (
		<>
			<UserListings />
		</>
	);
}
