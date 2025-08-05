import { TordersProps } from "@/types";
import { formatUSD } from "@/lib/formate-price";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/orders/columns";

export default function Orders({ orders }: { orders: TordersProps[] }) {
	const formattedOrders = orders.map((order) => ({
		id: order.id,
		name: order.checkout_details?.first_name || "N/A",
		email: order.checkout_details?.email.toLowerCase() || "N/A",
		phone_number: order.checkout_details?.phone || "N/A",
		status: order.status,
		order_items: order.order_items,
		price: formatUSD(
			order.order_items?.reduce(
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
