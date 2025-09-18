"use client";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TserviceColumnProps } from "@/types";
import { Button } from "@/components/ui/button";
import getServices from "@/actions/get-services";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/services/columns";

export default function ServiceListings() {
	const router = useRouter();
	const [services, setServices] = useState<TserviceColumnProps[]>([]);

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await getServices();
				setServices(response.services);
			} catch (error: unknown) {
				console.error("Error fetching services:", error);
			}
		};

		fetchServices();
	}, []);

	const formatedServices = services.map((service) => ({
		id: service.id,
		title: service.title,
		description: service.description,
		price: service.price,
		image: service.image,
		created_at: service.created_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex items-center justify-between">
				<Heading
					title={`Services (${formatedServices.length})`}
					description="Manage Services for your website."
				/>
				<Button
					className="flex items-center gap-x-2"
					onClick={() => router.push(`/dashboard/services/new`)}>
					<Plus className="w-4 h-4" />
					Add new
				</Button>
			</div>
			<Separator />
			<div className="flex gap-4 flex-col">
				<DataTable
					columns={columns}
					data={formatedServices}
					searchKey="title"
				/>
			</div>
		</div>
	);
}
