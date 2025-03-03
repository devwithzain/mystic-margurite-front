import { Order, OrderItem } from "@/types";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import getOrders from "@/actions/get-orders";

export default function OrderPage() {
	const token = getToken();
	const [orders, setOrders] = useState<Order[]>([]);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await getOrders(token);
				setOrders(response);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchOrders();
	}, [token]);

	return (
		<div className="w-full p-4 flex gap-2">
			<div className="w-full gap-1 flex flex-col px-6 pb-5">
				{orders.length === 0 ? (
					<div className="w-full flex py-10">
						<h1 className="text-xl font-MonstrateMedium">
							You don't have any orders yet.
						</h1>
					</div>
				) : (
					<div className="w-full overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left font-MonstrateMedium">
										IMAGE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left font-MonstrateMedium">
										SERVICE
									</th>

									<th className="border border-gray-200 px-4 py-2 text-left font-MonstrateMedium">
										NAME
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left font-MonstrateMedium">
										EMAIL
									</th>

									<th className="border border-gray-200 px-4 py-2 text-left font-MonstrateMedium">
										PRICE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left font-MonstrateMedium">
										QUANTITY
									</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((item: Order) => (
									<tr>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												{item.items.slice(0, 1).map((item: OrderItem) => (
													<img
														src={`https://mobilednanow.com/backend/public/${item.service.image}`}
														alt="serviceImg"
														className="w-full h-14"
													/>
												))}
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												{item.items.slice(0, 1).map((item) => (
													<h1 className="text-[15px] text-black font-medium font-MonstrateMedium">
														{item.service.title}
													</h1>
												))}
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-MonstrateMedium">
													{item.user.name}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-MonstrateMedium">
													{item.user.email}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												{item.items.slice(0, 1).map((item) => (
													<h1 className="text-[15px] text-black font-medium font-MonstrateMedium">
														{item.service.price}$
													</h1>
												))}
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												{item.items.slice(0, 1).map((item) => (
													<h1 className="text-[15px] text-black font-medium font-MonstrateMedium">
														{item.quantity}
													</h1>
												))}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}
