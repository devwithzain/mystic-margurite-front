import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TproductColumnProps } from "@/types";
import getProducts from "@/actions/get-products";

export default function Products() {
	const [products, setProducts] = useState<TproductColumnProps[] | null>([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProducts();
				setProducts(response.products);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="w-full padding-y padding-x">
			<div className="flex items-center justify-center flex-col gap-10">
				<div className="grid grid-cols-4 gap-6">
					{products &&
						products.map((item, index) => (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.8,
									delay: index * 0.1,
									ease: "linear",
								}}
								viewport={{ once: true }}
								key={index}
								className="flex flex-col items-center gap-4 bg-[#000] relative rounded-lg overflow-hidden shadow-lg hover:shadow-lg cursor-pointer group">
								<Link
									to={`/product/${item.id}`}
									className="w-full relative">
									<img
										src={`http://127.0.0.1:8000/storage/${
											JSON.parse(item?.image)[0]
										}`}
										alt={item?.title}
										className="w-full h-[350px] object-cover"
									/>
									<div className="p-4 w-full flex flex-col justify-between gap-4">
										<h3 className="text-white subHeading font-normal smythe leading-tight tracking-tight">
											{item?.title}
										</h3>
										<p className="paragraph leading-normal text-white font-normal montserrat">
											{item?.description.split(" ").slice(0, 8).join(" ")}...
										</p>
										<div className="flex items-center justify-between">
											<span className="paragraph text-white leading-tight tracking-tight montserrat font-semibold">
												${item?.price}.00
											</span>
											<Link
												className={`w-fit bg-[#936d42] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] montserrat leading-tight tracking-tight`}
												to={`/product/${item?.id}`}>
												View Detail
											</Link>
										</div>
									</div>
								</Link>
							</motion.div>
						))}
				</div>
			</div>
		</div>
	);
}
