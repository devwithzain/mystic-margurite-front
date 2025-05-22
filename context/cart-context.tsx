"use client";
import axios from "axios";
import { getToken } from "@/lib/get-token";
import { TcartColumnProps, TcartContextType } from "@/types";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

const CartContext = createContext<TcartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const token = getToken("authToken");
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState<TcartColumnProps[]>([]);

	const closeCart = useCallback(() => setIsCartOpen(false), []);
	const toggleCart = () => setIsCartOpen(!isCartOpen);

	const fetchCartItems = useCallback(async () => {
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
		}
	}, [token]);

	useEffect(() => {
		fetchCartItems();
	}, [isCartOpen, closeCart, fetchCartItems]);

	const cartCount = cartItems.length;

	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				toggleCart,
				closeCart,
				cartCount,
				refreshCart: fetchCartItems,
			}}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
