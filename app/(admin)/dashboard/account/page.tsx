import { Metadata } from "next";
import Account from "./components/account";
import { getUserData } from "@/lib/get-user-data";

export const metadata: Metadata = {
	title: "Admin Account - Mystic Marguerite",
	description: "Mystic Marguerite Admin Account",
};

export default function AccountPage() {
	return (
		<>
			<Account />
		</>
	);
}
