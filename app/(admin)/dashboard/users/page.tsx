import { Metadata } from "next";
import UserListings from "./components/user";

export const metadata: Metadata = {
	title: "Mystic - Admin Users",
	description: "Mystic Admin Users",
};

export default function UsersPage() {
	return (
		<>
			<UserListings />
		</>
	);
}
