"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { TcartColumnProps } from "@/types";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import { X, Minus, Plus } from "lucide-react";
import { formatUSD } from "@/lib/formate-price";
import { useCart } from "@/context/cart-context";
import { motion, AnimatePresence } from "framer-motion";

export default function SideCart() {
	const token = getToken("authToken");
	const { isCartOpen, closeCart } = useCart();
	const [isLoading, setIsLoading] = useState(false);
	const [cartTotal, setCartTotal] = useState<number>(0);
	const [cartItems, setCartItems] = useState<TcartColumnProps[]>([]);
	const [updatingItems, setUpdatingItems] = useState<Record<string, boolean>>(
		{},
	);

	useEffect(() => {
		if (cartItems && cartItems.length > 0) {
			const total = cartItems.reduce(
				(total: number, item: TcartColumnProps) => {
					return total + item.product.price * (item.quantity ?? 1);
				},
				0,
			);
			setCartTotal(total);
		} else {
			setCartTotal(0);
		}
	}, [cartItems, isCartOpen]);

	useEffect(() => {
		const fetchCartItems = async () => {
			if (!isCartOpen) return;

			setIsLoading(true);
			try {
				const response = await axios.get(
					"https://mysticmarguerite.com/new/backend/api/cart",
					{
						headers: { Authorization: `Bearer ${token}` },
					},
				);
				setCartItems(response.data);
			} catch (error) {
				console.error("Error fetching cart items:", error);
				setCartItems([]);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCartItems();
	}, [isCartOpen, token]);

	useEffect(() => {
		if (isCartOpen) {
			document.body.style.position = "fixed";
			document.body.style.width = "100%";
		} else {
			document.body.style.position = "static";
			document.body.style.width = "auto";
		}
		return () => {
			document.body.style.position = "static";
			document.body.style.width = "auto";
		};
	}, [isCartOpen]);

	const updateQuantity = async (id: bigint, newQuantity: number) => {
		if (newQuantity < 1) return;

		setUpdatingItems((prev) => ({ ...prev, [id.toString()]: true }));

		try {
			await axios.post(
				`https://mysticmarguerite.com/new/backend/api/cart/${id}`,
				{ quantity: newQuantity },
				{ headers: { Authorization: `Bearer ${token}` } },
			);

			setCartItems(
				cartItems.map((item) =>
					item.id === id ? { ...item, quantity: newQuantity } : item,
				),
			);
		} catch (error) {
			console.error("Error updating quantity:", error);
		} finally {
			setUpdatingItems((prev) => ({ ...prev, [id.toString()]: false }));
		}
	};

	const deleteCartItem = async (id: bigint) => {
		try {
			await axios.delete(
				`https://mysticmarguerite.com/new/backend/api/cart/${id}`,
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			setCartItems(cartItems.filter((item) => item.id !== id));
		} catch (error) {
			console.log("Delete error", error);
		}
	};

	const getProductImage = (imageData: string) => {
		try {
			const parsed = JSON.parse(imageData);
			if (Array.isArray(parsed)) return parsed[0]?.replace(/\\/g, "");
			const doubleParsed = JSON.parse(parsed);
			if (Array.isArray(doubleParsed))
				return doubleParsed[0]?.replace(/\\/g, "");

			return null;
		} catch (error) {
			console.error("Error parsing image data:", error);
			return null;
		}
	};

	return (
		<AnimatePresence>
			{isCartOpen && (
				<>
					<div
						className="fixed inset-0 bg-black overflow-hidden scroll-auto opacity-20 z-[9998]"
						onClick={closeCart}
					/>
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "tween", duration: 1, ease: "backInOut" }}
						className="h-screen w-[500px] bg-white fixed top-0 right-0 shadow-2xl p-8 z-[99999]"
						onClick={(e) => e.stopPropagation()}>
						<div className="w-full h-full flex flex-col justify-between gap-5">
							<div className="flex flex-col gap-10">
								<div className="flex flex-col gap-10">
									<div
										className="w-fit flex items-center gap-2 cursor-pointer"
										onClick={closeCart}>
										<X
											size={25}
											aria-label="Close"
										/>
										<p className="text-black paragraph leading-tight tracking-tight font-gradient-regular mt-1">
											Close
										</p>
									</div>
									<h2 className="paragraph leading-tight tracking-tight font-gradient-regular text-black/60 uppercase">
										{cartItems.length} product (s) in your cart.
									</h2>
								</div>
								<div className="overflow-y-hidden h-[300px]">
									{isLoading ? (
										<div className="flex justify-center items-center h-full">
											<p>Loading cart items...</p>
										</div>
									) : cartItems.length === 0 ? (
										<Link
											className="w-full px-1 py-4 bg-black flex items-center justify-center paragraph uppercase text-center font-gradient-regular tracking-tight leading-tight text-white"
											href="/shop"
											onClick={closeCart}>
											Continue Browsing
										</Link>
									) : (
										<div className="flex flex-col gap-4">
											{cartItems.map((item) => {
												const imagePath = item.product?.image
													? getProductImage(item.product.image)
													: null;
												const isUpdating = updatingItems[item.id.toString()];

												return (
													<div
														key={item.id.toString()}
														className="w-full flex items-start gap-5">
														{imagePath && (
															<Image
																src={`https://mysticmarguerite.com/new/backend/storage/${imagePath}`}
																alt={item.product?.title}
																width={300}
																height={300}
																className="w-auto h-24 object-contain"
															/>
														)}
														<div className="w-full flex items-center justify-between gap-5">
															<div className="flex flex-col gap-10">
																<div className="flex flex-col gap-3">
																	<div className="flex flex-col">
																		<h1 className="text-2xl font-gradient-medium tracking-tight leading-tight text-black">
																			{item.product?.title}
																		</h1>
																		<h1 className="paragraph font-gradient-regular tracking-normal leading-normal text-black">
																			Size: {item.size}
																		</h1>
																	</div>
																	<div>
																		<h1 className="paragraph font-grradient-semi tracking-tight leading-tight text-black">
																			{formatUSD(
																				item.product.price *
																					(item.quantity || 1),
																			)}
																		</h1>
																	</div>
																</div>
															</div>
															<div className="flex items-center gap-2">
																<div className="flex items-center gap-2 mt-2">
																	<button
																		onClick={() =>
																			updateQuantity(item.id, item.quantity - 1)
																		}
																		disabled={isUpdating || item.quantity <= 1}
																		className="disabled:opacity-50">
																		<Minus size={16} />
																	</button>
																	<div className="w-8 h-8 flex items-center justify-center outline-none text-center border leading-tight tracking-tight text-black font-gradient-regular font-normal !appearance-none">
																		{isUpdating ? "..." : item.quantity}
																	</div>
																	<button
																		onClick={() =>
																			updateQuantity(item.id, item.quantity + 1)
																		}
																		disabled={isUpdating}
																		className="disabled:opacity-50">
																		<Plus size={16} />
																	</button>
																</div>
																<button
																	onClick={() => deleteCartItem(item.id)}
																	className="mt-2"
																	disabled={isUpdating}>
																	<X size={20} />
																</button>
															</div>
														</div>
													</div>
												);
											})}
										</div>
									)}
								</div>
								{cartItems.length > 0 && (
									<div className="w-full border border-black">
										<textarea
											rows={3}
											className="w-full p-5 outline-none border-none paragraph leading-tight tracking-tight text-black font-gradient-medium font-normal"
											placeholder="Special instructions for seller"
										/>
									</div>
								)}
							</div>
							{cartItems.length > 0 && (
								<div className="flex flex-col gap-4">
									<div className="flex items-center gap-4">
										<span className="subHeading font-gradient-medium tracking-tight leading-tight text-black">
											Total:
										</span>
										<span className="subHeading font-gradient-medium tracking-tight leading-tight text-black">
											{formatUSD(cartTotal)}
										</span>
									</div>
									<div>
										<p className="paragraph leading-tight tracking-tight font-gradient-regular text-black">
											Shipping & taxes calculated at checkout
										</p>
									</div>
									<div className="w-full flex justify-between items-center gap-3">
										<Link
											onClick={closeCart}
											href="/cart"
											className="w-full px-1 py-4 border border-black">
											<h1 className="paragraph text-center font-gradient-regular tracking-tight leading-tight text-black">
												View Cart
											</h1>
										</Link>
										<Link
											href="/checkout"
											className="w-full px-1 py-4 bg-black"
											onClick={closeCart}>
											<h1 className="paragraph text-center font-gradient-regular tracking-tight leading-tight text-white">
												Checkout
											</h1>
										</Link>
									</div>
								</div>
							)}
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
