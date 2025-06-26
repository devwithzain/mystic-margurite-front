import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, Eye, EyeOff, Lock } from "lucide-react";
import { loginFormSchema, TloginFormData } from "@/schemas";

export default function LoginFormComponent({
	setShowForgotPassword,
}: {
	setShowForgotPassword: (value: boolean) => void;
}) {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TloginFormData>({
		resolver: zodResolver(loginFormSchema),
	});

	const onSubmits = async (data: TloginFormData) => {
		await axios
			.post(`https://mysticmarguerite.com/new/backend/api/login`, data)
			.then((response) => {
				if (response?.data?.success) {
					const { access_token, user } = response.data;
					if (user.role === "admin") {
						toast.success(response.data.success);
						Cookies.set("adminAuthToken", access_token, { expires: 1 });
						router.refresh();
					} else {
						toast.error("You do not have permission to access dashboard.");
					}
				}
			})
			.catch((err) => {
				if (err.response) {
					toast.error(err.response.data.error);
				}
			});
	};

	return (
		<div className="w-full padding-x flex justify-center flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h1 className="text-[40px] text-white font-medium leading-tight tracking-tight">
					Welcome back
				</h1>
				<div className="flex items-center gap-2">
					<p className="text-sm text-[#ADABB8] font-normal leading-tight tracking-tight">
						LogIn to continue to Admin Dashboard.
					</p>
				</div>
			</div>
			<form
				onSubmit={handleSubmit(onSubmits)}
				className="flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<div
								className={`w-full flex items-center bg-[#3c375269] rounded-lg p-4 focus-within:border-[#2f1d88] focus-within:border-[1px] focus-within:ring-1 ${
									errors.email && "border-red-500 border-[1px]"
								}`}>
								<AtSign className="text-[#6D6980] mr-3" />
								<input
									type="email"
									{...register("email")}
									placeholder="Email"
									className={`bg-transparent text-white placeholder:text-[#6D6980] focus:outline-none outline-none w-full font-Monstrate`}
									autoComplete="off"
								/>
							</div>
							{errors.email && (
								<span className="text-red-500 text-sm font-Monstrate">
									{errors.email.message}
								</span>
							)}
						</div>
						<div className="flex flex-col gap-2">
							<div
								className={`w-full flex items-center bg-[#3c375269] rounded-lg p-4 focus-within:border-[#2f1d88] focus-within:border-[1px] focus-within:ring-1 ${
									errors.password && "border-red-500 border-[1px]"
								}`}>
								<Lock className="text-[#6D6980] mr-3" />
								<input
									type={showPassword ? "text" : "password"}
									{...register("password")}
									placeholder="Enter your password"
									className={`bg-transparent text-white placeholder:text-[#6D6980] focus:outline-none outline-none w-full font-Monstrate`}
								/>
								<button
									type="button"
									onClick={togglePasswordVisibility}
									className="ml-2">
									{showPassword ? (
										<EyeOff className="text-[#6D6980]" />
									) : (
										<Eye className="text-[#6D6980]" />
									)}
								</button>
							</div>
							{errors.password && (
								<span className="text-red-500 text-sm font-Monstrate">
									{errors.password.message}
								</span>
							)}
						</div>
					</div>
					<div className="w-full flex justify-end items-end">
						<button
							type="button"
							className="text-sm text-[#ADABB8] font-normal leading-tight tracking-tight"
							onClick={() => setShowForgotPassword(true)}>
							forgot password?
						</button>
					</div>
				</div>
				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-[#2f1d88] rounded-lg p-4 text-[16px] text-white font-normal text-center leading-tight tracking-tight cursor-pointer">
					{isSubmitting ? (
						<Loader2 className="animate-spin mx-auto" />
					) : (
						"Log In"
					)}
				</button>
			</form>
		</div>
	);
}
