"use client";
import { TordersProps } from "@/types";
import { useEffect, useState } from "react";
import getorders from "@/actions/get-orders";
import TotalSales from "@/components/admin/sales";
import TotalRevenue from "@/components/admin/revenue";
import { Overview } from "@/components/admin/overview";
import TotalProducts from "@/components/admin/products";
import { columns } from "@/container/admin/sales/columns";
import TotalSubscribers from "@/components/admin/subscriber";
import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { CustomersChart } from "@/components/admin/customer-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
	const [orders, setOrders] = useState<TordersProps[]>([]);
	const graphData = getGraphRevenue(orders);

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
		...order,
		name: order.checkout_detail?.first_name || "N/A",
		email: order.checkout_detail?.email.toLowerCase() || "N/A",
		phone_number: order.checkout_detail?.phone || "N/A",
		status: order.status,
		price: new Intl.NumberFormat("en-US", {
			currency: "USD",
		}).format(
			order.items?.reduce(
				(total, item) => total + Number(item.product?.price) * item.quantity,
				0,
			) || 0,
		),
		checkout_detail: order.checkout_detail,
		created_at: order.created_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0 h-full justify-between">
			<div className="grid auto-rows-min gap-4 grid-cols-4">
				<div className="rounded-xl">
					<TotalRevenue />
				</div>
				<div className="rounded-xl">
					<TotalSales />
				</div>
				<div className="rounded-xl">
					<TotalProducts />
				</div>
				<div className="rounded-xl">
					<TotalSubscribers />
				</div>
			</div>
			<div className="w-full flex gap-4 rounded-xl h-full">
				<Card className="flex-1 flex flex-col">
					<CardHeader>
						<CardTitle>Overview</CardTitle>
					</CardHeader>
					<CardContent className="flex-1">
						<Overview data={graphData} />
					</CardContent>
				</Card>
				<Card className="flex-1">
					<CustomersChart
						columns={columns}
						data={formattedOrders}
					/>
				</Card>
			</div>
		</div>
	);
}
