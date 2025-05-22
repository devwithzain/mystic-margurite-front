import { TordersProps } from "@/types";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TordersProps>[] = [
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Status
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "price",
		header: "Amount",
		cell: ({ row }) => {
			return `$${row.getValue("price")}.00`;
		},
	},
	{
		accessorKey: "created_at",
		header: "Date",
	},
];
