import { Metadata } from "next";
import Account from "./components/account";

export const metadata: Metadata = {
	title: "Mystic - Admin Account",
	description: "Mystic Admin Account",
};

export default function AccountPage() {
	return (
		<>
			<Account />
		</>
	);
}
