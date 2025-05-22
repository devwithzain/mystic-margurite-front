import { TgraphData } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getGraphRevenue = (orders: any[]): TgraphData[] => {
	const monthlyRevenue: { [key: number]: number; } = {};

	// Filter orders with status "paid"
	const paidOrders = orders.filter((order) => order.status === "paid");

	// Grouping the paid orders by month and summing the revenue
	for (const order of paidOrders) {
		const month = new Date(order.created_at).getMonth(); // 0 for Jan, 1 for Feb, ...
		let revenueForOrder = 0;

		for (const item of order.items) {
			revenueForOrder += Number(item.product.price) * item.quantity;
		}

		// Adding the revenue for this order to the respective month
		monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
	}

	// Converting the grouped data into the format expected by the graph
	const graphData: TgraphData[] = [
		{ name: "Jan", total: 0 },
		{ name: "Feb", total: 0 },
		{ name: "Mar", total: 0 },
		{ name: "Apr", total: 0 },
		{ name: "May", total: 0 },
		{ name: "Jun", total: 0 },
		{ name: "Jul", total: 0 },
		{ name: "Aug", total: 0 },
		{ name: "Sep", total: 0 },
		{ name: "Oct", total: 0 },
		{ name: "Nov", total: 0 },
		{ name: "Dec", total: 0 },
	];

	// Filling in the revenue data
	for (const month in monthlyRevenue) {
		graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
	}

	return graphData;
};