import { Order, OrderItem } from "@/types";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import getOrders from "@/actions/get-orders";
import RoundButton from "@/components/round-button";

export default function OrderPage() {
	const token = getToken();
	const [orders, setOrders] = useState<Order[]>([]);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await getOrders(token);
				setOrders(response);
			} catch (err) {
				console.error("Error fetching orders:", err);
			}
		};
		fetchOrders();
	}, [token]);

	return (
		<div className="w-full p-4 flex gap-2">
			<div className="w-full gap-1 flex flex-col px-6 pb-5">
				{orders.length === 0 ? (
					<div className="flex py-10 flex-col">
						<h1 className="text-xl montserrat">
							You don't have any orders yet.
						</h1>
						<div className="w-fit bg-[#7a74ef] flex items-center justify-between bg-secondry cursor-pointer rounded-md group">
							<RoundButton
								href="/products"
								title="Brows Products"
								className="bg-white text-black"
								bgcolor="#000"
								style={{ color: "#fff" }}
							/>
						</div>
					</div>
				) : (
					<div className="w-full overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left montserrat">
										IMAGE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left montserrat">
										SERVICE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left montserrat">
										NAME
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left montserrat">
										EMAIL
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left montserrat">
										PRICE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left montserrat">
										QUANTITY
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left montserrat">
										STATUS
									</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order: Order) => (
									<tr key={order.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												{order.items.slice(0, 1).map((item: OrderItem) => (
													<img
														src={`http://127.0.0.1:8000/storage/${
															item?.product.image
																? JSON.parse(item.product.image)[0]
																: ""
														}`}
														alt="serviceImg"
														className="w-full h-20 object-cover"
													/>
												))}
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												{order.items.slice(0, 1).map((item: OrderItem) => (
													<h1 className="text-[15px] text-black font-medium montserrat">
														{item.product.title}
													</h1>
												))}
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium montserrat">
													{order.checkout_detail.first_name}{" "}
													{order.checkout_detail.last_name}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium montserrat">
													{order.checkout_detail.email}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												{order.items.slice(0, 1).map((item: OrderItem) => (
													<h1 className="text-[15px] text-black font-medium montserrat">
														${item.product.price}.00
													</h1>
												))}
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												{order.items.slice(0, 1).map((item: OrderItem) => (
													<h1 className="text-[15px] text-black font-medium montserrat">
														{item.quantity}
													</h1>
												))}
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium montserrat capitalize">
													{order.status}
												</h1>
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
