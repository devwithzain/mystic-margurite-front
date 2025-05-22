import { Metadata } from "next";
import Dashboard from "./components/dashboard";

export const metadata: Metadata = {
	title: "Mystic - Admin Dashboard",
	description: "Mystic Admin Dashboard",
};

export default function DashboardPage() {
	return (
		<>
			<Dashboard />
		</>
	);
}
