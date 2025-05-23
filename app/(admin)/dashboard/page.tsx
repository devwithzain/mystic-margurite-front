import { Metadata } from "next";
import Dashboard from "./components/dashboard";

export const metadata: Metadata = {
	title: "Admin Dashboard - Mystic Marguerite",
	description: "Mystic Marguerite Admin Dashboard",
};

export default function DashboardPage() {
	return (
		<>
			<Dashboard />
		</>
	);
}
