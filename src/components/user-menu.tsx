import Cookies from "js-cookie";
import Modal from "./modal.tsx";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import LoginForm from "./login-form.tsx";
import { getToken } from "@/lib/get-token.ts";
import { GoListOrdered } from "react-icons/go";
import { TuserProps } from "../types/index.ts";
import RegisterForm from "./register-form.tsx";
import { placeholder } from "../assets/index.ts";
import { MdLogin, MdLogout } from "react-icons/md";
import { getUserData } from "@/actions/get-user.ts";
import useLoginModal from "@/hooks/use-login-modal.ts";
import useRegisterModal from "@/hooks/use-register-modal.ts";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { actionIconVariants, iconVariants, wrapperVariants } from "@/motion";

export default function UserMenu() {
	const token = getToken();
	const loginModal = useLoginModal();
	const [open, setOpen] = useState(false);
	const registerModal = useRegisterModal();
	const [user, setUser] = useState<TuserProps>();

	const logOut = () => {
		Cookies.remove("authToken");
		toast.success("Logged out");
		setOpen(false);
	};

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	}, [token]);

	return (
		<div>
			<motion.div
				animate={open ? "open" : "closed"}
				className="relative">
				<button onClick={() => setOpen((pv) => !pv)}>
					<motion.span>
						<img
							src={placeholder}
							alt="user"
							width={50}
							height={50}
							className="rounded-full"
						/>
					</motion.span>
				</button>
				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: "top", translateX: "-50%" }}
					className="flex flex-col p-2 rounded-lg bg-[#7a74ef] text-white shadow-xl absolute top-[120%] -left-full w-40 overflow-hidden">
					{user ? (
						<>
							<Link to="/my-orders">
								<Option
									setOpen={setOpen}
									Icon={GoListOrdered}
									text="My Orders"
								/>
							</Link>
							<button
								type="button"
								onClick={logOut}>
								<Option
									setOpen={setOpen}
									Icon={MdLogout}
									text="Log Out"
								/>
							</button>
						</>
					) : (
						<button
							type="button"
							onClick={() => {
								setOpen(false);
								loginModal.onOpen();
							}}>
							<Option
								setOpen={setOpen}
								Icon={MdLogin}
								text="LogIn"
							/>
						</button>
					)}
				</motion.ul>
			</motion.div>
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
		</div>
	);
}

const Option = ({
	text,
	Icon,
	setOpen,
}: {
	text: string;
	Icon: IconType;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<motion.li
			variants={iconVariants}
			onClick={() => setOpen(false)}
			className="flex items-center gap-2 w-full p-2 text-[17px] font-medium montserrat whitespace-nowrap rounded-md hover:bg-indigo-100 text-white hover:text-indigo-500 transition-colors cursor-pointer">
			<motion.span variants={actionIconVariants}>
				<Icon />
			</motion.span>
			<span>{text}</span>
		</motion.li>
	);
};
