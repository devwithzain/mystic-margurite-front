import axios from "axios";
import toast from "react-hot-toast";
import { TuserProps } from "@/types";
import { TextMask } from "@/components";
import { getToken } from "@/lib/get-token";
import { productsItems } from "@/constants";
import { useEffect, useState } from "react";
import { getUserData } from "@/actions/get-user";
import AnimatedText from "@/components/animated-text";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export default function Product() {
	const token = getToken();
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const [user, setUser] = useState<TuserProps>();
	const [cartItems, setCartItems] = useState<any[]>([]);
	const productsItem = productsItems.find((item) => item.id === Number(id));

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch(`http://127.0.0.1:8000/api/cart`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
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

	const addToCart = async (productId: string) => {
		if (!token) {
			navigate("/login", { state: { from: location.pathname } });
		} else {
			try {
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
				toast.success(response.data.success);
			} catch (error: unknown) {
				if (error instanceof Error) {
					toast.error(error.message);
				} else {
					toast.error("An unknown error occurred");
				}
			}
		}
	};

	if (!productsItem) {
		return <div>Product not found</div>;
	}

	return (
		<div className="w-full padding-y padding-x">
			<div className="w-full flex justify-center gap-10">
				<>
					<div className="w-1/2">
						<img
							src={productsItem.src}
							alt={productsItem.title}
							className="w-full object-cover"
						/>
					</div>
					<div className="w-1/2 flex flex-col gap-5">
						<AnimatedText
							text={productsItem.title}
							className="text-black heading font-normal smythe leading-tight tracking-tight"
						/>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>{[`${productsItem.desc}`]}</TextMask>
						</p>
						<div className="flex items-center justify-between">
							<span className="paragraph text-black leading-tight tracking-tight montserrat font-medium">
								Price: ${productsItem.price}
							</span>
							<Link
								className={`w-fit bg-[#936d42] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] montserrat leading-tight tracking-tight`}
								onClick={() => addToCart(productsItem?.id.toString())}
								to={`/product/${productsItem.id}`}>
								add to cart
							</Link>
						</div>
					</div>
				</>
			</div>
		</div>
	);
}
