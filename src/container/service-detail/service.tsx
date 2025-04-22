import parse from "html-react-parser";
import { useEffect, useState } from "react";
import getService from "@/actions/get-service";
import { TServicesColumnProps } from "@/types";
import { Link, useParams } from "react-router-dom";

export default function Blog() {
	const { id } = useParams();
	const [service, setService] = useState<TServicesColumnProps | null>(null);

	useEffect(() => {
		const fetchService = async () => {
			try {
				if (id) {
					const response = await getService(id);
					setService(response.service);
				}
			} catch (err) {
				console.error("Error fetching service:", err);
			}
		};
		fetchService();
	}, [id]);

	return (
		<div className="w-full padding-y padding-x">
			<div className="w-full flex justify-between gap-10">
				<div className="flex flex-1 items-center justify-center flex-col gap-10">
					<img
						src={`http://127.0.0.1:8000/${service?.image}`}
						alt={service?.title}
						className="w-full h-[600px] object-cover object-center rounded-2xl"
					/>
				</div>
				<div className="flex flex-1 flex-col gap-5">
					<h3 className="text-black heading font-normal leading-tight forum tracking-tight">
						{service?.title}
					</h3>
					<div className="flex flex-col gap-4">
						<span className="text-3xl text-black leading-tight tracking-tight montserrat font-semibold">
							Price: ${service?.price}.00
						</span>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							{[service?.description ? parse(service.description) : ""]}
						</p>
					</div>
					<div className="w-full flex items-center gap-4 flex-col">
						<Link
							to={`/services/${id}/booking-form`}
							className={`w-full bg-[#936d42] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] montserrat leading-tight tracking-tight`}>
							Book Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
