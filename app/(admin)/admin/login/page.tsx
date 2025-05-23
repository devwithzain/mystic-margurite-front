import { Metadata } from "next";
import LoginForm from "@/components/admin/login-form";

export const metadata: Metadata = {
	title: "Admin LogIn - Mystic Marguerite",
	description: "Mystic Marguerite - Admin LogIn",
};

export default function AdminLogIn() {
	return (
		<div className="w-full h-screen flex justify-center items-center overflow-hidden">
			<LoginForm />
		</div>
	);
}
