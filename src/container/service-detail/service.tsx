import axios from "axios";
import toast from "react-hot-toast";
import parse from "html-react-parser";
import { Loader2 } from "lucide-react";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getService from "@/actions/get-service";
import { getUserData } from "@/actions/get-user";
import useLoginModal from "@/hooks/use-login-modal";
import { TServicesColumnProps, TuserProps } from "@/types";

export default function Blog() {
	const token = getToken();
	const { id } = useParams();
	const loginModal = useLoginModal();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<TuserProps>();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [cartItems, setCartItems] = useState<any[]>([]);
	const [service, setService] = useState<TServicesColumnProps | null>(null);
	console.log(cartItems);

	useEffect(() => {
		const fetchService = async () => {
			try {
				if (id) {
					const response = await getService(id);
					setService(response.service);
				}
			} catch (err) {
				console.error("Error fetching service:", err);
			}
		};
		fetchService();
	}, [id]);

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(
					`https://freequote4financialprotection.com/backend/api/cart`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				const data = await response.json();
				setCartItems(data);
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.log(error.message);
				} else {
					console.log("An unknown error occurred");
				}
			}
		};
		fetchCartItems();
	}, [token]);

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	}, [token]);

	const addToCart = async (productId: string | bigint | undefined) => {
		if (!user || !token) {
			loginModal.onOpen();
		} else {
			try {
				setLoading(true);
				const response = await axios.post(
					`https://freequote4financialprotection.com/backend/api/cart`,
					{
						user_id: user?.id,
						service_id: productId,
					},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				toast.success(response.data.success);
				setLoading(false);
			} catch (error: unknown) {
				if (error instanceof Error) {
					toast.error(error.message);
				} else {
					toast.error("An unknown error occurred");
				}
			}
		}
	};
	return (
		<div className="w-full padding-y padding-x">
			<div className="w-full flex justify-between gap-10">
				<div className="flex flex-1 items-center justify-center flex-col gap-10">
					<img
						src={`https://freequote4financialprotection.com/backend/${service?.image}`}
						alt={service?.title}
						className="w-full h-[600px] object-cover object-center rounded-2xl"
					/>
				</div>
				<div className="flex flex-1 flex-col gap-5">
					<h3 className="text-black heading font-normal leading-tight forum tracking-tight">
						{service?.title}
					</h3>
					<div className="flex flex-col gap-4">
						<span className="text-3xl text-black leading-tight tracking-tight montserrat font-semibold">
							Price: ${service?.price}.00
						</span>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							{[service?.description ? parse(service.description) : ""]}
						</p>
					</div>
					<div className="w-full flex items-center gap-4 flex-col">
						<button
							className={`w-full bg-[#936d42] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] montserrat leading-tight tracking-tight`}
							onClick={() => addToCart(service?.id?.toString())}>
							{loading ? (
								<Loader2 className="animate-spin mx-auto" />
							) : (
								"Add to Cart"
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
