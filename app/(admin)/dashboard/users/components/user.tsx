import { TuserProps } from "@/types";
import Heading from "@/components/admin/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/user/columns";

export default function UserListings({ users }: { users: TuserProps[] }) {
	const formatedUsers = users.map((user) => ({
		id: user.id,
		name: user.name,
		email: user.email,
		role: user.role,
		image: user.image,
		created_at: user.created_at,
		updated_at: user.updated_at,
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex gap-4 flex-col">
				<div className="flex items-center justify-between">
					<Heading
						title={`Users (${formatedUsers.length})`}
						description="Manage Users for your website."
					/>
				</div>
				<Separator />
				<DataTable
					columns={columns}
					data={formatedUsers}
					searchKey="name"
				/>
			</div>
		</div>
	);
}
