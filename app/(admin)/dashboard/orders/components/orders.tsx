"use client";
import { TordersProps } from "@/types";
import { useEffect, useState } from "react";
import getorders from "@/actions/get-orders";
import { formatUSD } from "@/lib/formate-price";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/orders/columns";

export default function Orders() {
	const [orders, setOrders] = useState<TordersProps[]>([]);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await getorders();
				setOrders(response);
			} catch (err) {
				console.error("Error fetching orders:", err);
			}
		};
		fetchOrders();
	}, []);

	const formattedOrders = orders.map((order) => ({
		id: order.id,
		name: order.checkout_detail?.first_name || "N/A",
		email: order.checkout_detail?.email.toLowerCase() || "N/A",
		phone_number: order.checkout_detail?.phone || "N/A",
		status: order.status,
		order_items: order.items,
		price: formatUSD(
			order.items?.reduce(
				(total: number, item) =>
					total +
					(Number(item.product?.price) || 0) * (Number(item.quantity) || 0),
				0,
			) ?? 0,
		),
		created_at: order.created_at,
		updated_at: order.updated_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex gap-4 flex-col">
				<div className="flex items-center justify-between">
					<Heading
						title={`Orders (${formattedOrders.length})`}
						description="Manage Orders for your website."
					/>
				</div>
				<Separator />
				<DataTable
					columns={columns}
					data={formattedOrders}
					searchKey="name"
				/>
			</div>
		</div>
	);
}
