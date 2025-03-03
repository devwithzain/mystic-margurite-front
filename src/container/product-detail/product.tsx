import axios from "axios";
import toast from "react-hot-toast";
import { TextMask } from "@/components";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import getProduct from "@/actions/get-product";
import { getUserData } from "@/actions/get-user";
import AnimatedText from "@/components/animated-text";
import { TproductColumnProps, TuserProps } from "@/types";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function ProductDetail() {
	const token = getToken();
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<TuserProps>();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [cartItems, setCartItems] = useState<any[]>([]);
	const [product, setProduct] = useState<TproductColumnProps | null>(null);
	console.log(cartItems);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				if (id) {
					const response = await getProduct(id);
					setProduct(response.product);
				} else {
					console.error("Product ID is undefined");
				}
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, [id]);

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

	const addToCart = async (productId: string | bigint | undefined) => {
		if (!token) {
			navigate("/login", { state: { from: location.pathname } });
		} else {
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
			<div className="w-full flex justify-center gap-10">
				<>
					<div className="w-1/2">
						<img
							src={`http://127.0.0.1:8000/storage/${
								product?.image ? JSON.parse(product.image)[0] : ""
							}`}
							alt={product?.title}
							className="w-full object-cover"
						/>
					</div>
					<div className="w-1/2 flex flex-col gap-5">
						<AnimatedText
							text={product?.title || ""}
							className="text-black heading font-normal smythe leading-tight tracking-tight"
						/>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>{[`${product?.description}`]}</TextMask>
						</p>
						<span className="paragraph text-black leading-tight tracking-tight montserrat font-medium">
							Price: ${product?.price}
						</span>
						<div className="w-full flex items-center gap-4 flex-col">
							<Link
								className={`w-full bg-[#936d42] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] montserrat leading-tight tracking-tight`}
								onClick={() => addToCart(product?.id?.toString())}
								to={`/product/${product?.id}`}>
								{loading ? (
									<Loader2 className="animate-spin mx-auto" />
								) : (
									"add to cart"
								)}
							</Link>
						</div>
					</div>
				</>
			</div>
		</div>
	);
}
