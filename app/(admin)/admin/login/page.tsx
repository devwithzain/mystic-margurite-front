import { Metadata } from "next";
import LoginForm from "@/components/admin/login-form";

export const metadata: Metadata = {
	title: "Mystic - Admin LogIn",
	description: "Mystic Admin LogIn Dashboard",
};

export default function AdminLogIn() {
	return (
		<div className="w-full h-screen flex justify-center items-center overflow-hidden">
			<LoginForm />
		</div>
	);
}
