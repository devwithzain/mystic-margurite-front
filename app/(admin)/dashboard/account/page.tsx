import { Metadata } from "next";
import Account from "./components/account";

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
