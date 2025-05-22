"use client";
import Modal from "../ui/client/modal";
import { LoginForm } from "../ui/client";
import useLoginModal from "@/hooks/use-login-modal";
import RegisterForm from "../ui/client/register-form";
import useRegisterModal from "@/hooks/use-register-modal";

export default function AuthModal() {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	return (
		<>
			<Modal
				isOpen={loginModal.isOpen}
				onClose={loginModal.onClose}
				body={<LoginForm onClose={loginModal.onClose} />}
			/>
			<Modal
				isOpen={registerModal.isOpen}
				onClose={registerModal.onClose}
				body={<RegisterForm onClose={registerModal.onClose} />}
			/>
		</>
	);
}
