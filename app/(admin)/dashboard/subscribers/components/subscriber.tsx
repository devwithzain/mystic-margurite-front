"use client";
import { useEffect, useState } from "react";
import Heading from "@/components/admin/heading";
import { TsubscribersColumnProps } from "@/types";
import getSubscriber from "@/actions/get-subscriber";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/subscriber/columns";

export default function Subscriber() {
	const [subscribers, setSubscriber] = useState<TsubscribersColumnProps[]>([]);

	useEffect(() => {
		const fetchSubscriber = async () => {
			try {
				const response = await getSubscriber();
				setSubscriber(response.data);
			} catch (err) {
				console.error("Error fetching initial data:", err);
			}
		};

		fetchSubscriber();
	}, []);

	const formatedSubscriber = subscribers.map((subscriber) => ({
		id: subscriber.id,
		email: subscriber.email,
		created_at: subscriber.created_at,
		updated_at: subscriber.updated_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex gap-4 flex-col">
				<div className="flex items-center justify-between">
					<Heading
						title={`Subscribers (${formatedSubscriber.length})`}
						description="Manage Newsletter Subscriber for your website."
					/>
				</div>
				<Separator />
				<DataTable
					columns={columns}
					data={formatedSubscriber}
					searchKey="name"
				/>
			</div>
		</div>
	);
}
