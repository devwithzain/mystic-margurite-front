"use client";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import getProduct from "@/actions/get-product";
import { formatUSD } from "@/lib/formate-price";
import { useCart } from "@/context/cart-context";
import useLoginModal from "@/hooks/use-login-modal";
import { TproductColumnProps, TuserProps } from "@/types";
import { TextMask, TextReveal } from "@/components/ui/client";

export default function ProductDetail({ id }: { id: string }) {
	const loginModal = useLoginModal();
	const token = getToken("authToken");
	const { toggleCart, refreshCart } = useCart();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<TuserProps>();
	const [product, setProduct] = useState<TproductColumnProps>();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:8000/api/profile", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setUser(response.data.data);
			} catch (error: unknown) {
				console.error("Error fetching user:", error);
			}
		};

		fetchUser();
	}, []);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProduct(id);
				setProduct(response.product);
			} catch (error: unknown) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);

	const addToCart = async (productId) => {
		if (!user || !token) {
			loginModal.onOpen();
			return;
		}

		try {
			setLoading(true);
			const response = await axios.post(
				`http://127.0.0.1:8000/api/cart`,
				{
					user_id: user?.id,
					product_id: productId,
					quantity: 1,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			if (response.data.success === false) {
				toast.error(response.data.message);
			} else {
				toast.success(response.data.success);
				refreshCart();
				toggleCart();
			}
			setLoading(false);
		} catch (error: unknown) {
			if (error instanceof Error) {
				toast.error(error.message);
			} else {
				toast.error("An unknown error occurred");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full padding-y padding-x">
			<div className="w-full flex justify-center gap-10 items-center">
				<>
					<div className="w-[700px]">
						<Image
							src={`http://127.0.0.1:8000/storage/${
								product?.image ? JSON.parse(product.image)[0] : ""
							}`}
							alt={product?.title || "product img"}
							className="w-full object-cover"
							width={500}
							height={500}
						/>
					</div>
					<div className="w-[40%] flex flex-col gap-5">
						<TextReveal>
							<h1 className="text-[#2E073F] subHeading font-semibold papyrus tracking-tight">
								{product?.title || ""}
							</h1>
						</TextReveal>
						<div>
							<p className="text-[#2E073F] subHeading font-semibold forum tracking-tight">
								Description:
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>{[`${product?.description}`]}</TextMask>
							</p>
						</div>
						<div className="w-full flex items-center justify-between">
							<p className="text-[#2E073F] subHeading font-semibold forum tracking-tight">
								Price:
							</p>
							<span className="text-3xl text-black leading-tight tracking-tight montserrat font-medium">
								{formatUSD(product?.price)}
							</span>
						</div>
						<div className="w-full flex items-center gap-4 flex-col">
							<button
								className={`w-full bg-[#2E073F] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] montserrat leading-tight tracking-tight cursor-pointer`}
								onClick={() => addToCart(product?.id)}>
								{loading ? (
									<Loader2 className="animate-spin mx-auto" />
								) : (
									"Add to Cart"
								)}
							</button>
						</div>
					</div>
				</>
			</div>
		</div>
	);
}
