import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import getBlogs from "@/actions/get-blogs";
import { TblogsColumnProps } from "@/types";
import { useEffect, useState } from "react";

export default function Blogs() {
	const [blogs, setBlogs] = useState<TblogsColumnProps[]>([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await getBlogs();
				setBlogs(response.blogs);
			} catch (err) {
				console.error("Error fetching blogs:", err);
			}
		};
		fetchBlogs();
	}, []);

	const categories = [...new Set(blogs?.map((item) => item.category))];

	const filteredBlogs = selectedCategory
		? blogs?.filter((blog) => blog.category === selectedCategory)
		: blogs;

	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex justify-center gap-10 items-start">
				<div className="min-w-[320px] border border-black">
					<h3
						className="text-black subHeading font-normal montserrat leading-tight border-b border-black p-4 cursor-pointer"
						onClick={() => setSelectedCategory("")}>
						Categories
					</h3>
					<div className="flex flex-col gap-8 p-5">
						{categories.map((category, index) => (
							<div
								key={index}
								className={`border-b border-black flex items-center gap-2 pb-3`}>
								<button
									className={`text-black paragraph font-normal montserrat leading-tight cursor-pointer ${
										selectedCategory === category ? "text-[#7a74ef]" : ""
									}`}
									onClick={() => setSelectedCategory(category)}>
									{category}
								</button>
							</div>
						))}
					</div>
				</div>
				<div className="grid grid-cols-4 gap-6">
					{filteredBlogs?.map((item, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1, ease: "linear" }}
							viewport={{ once: true }}
							key={index}
							className="flex flex-col items-center gap-4">
							<div className="w-full relative flex flex-col gap-4">
								<img
									src={`https://freequote4financialprotection.com/backend/${item?.image}`}
									alt="blog"
									className="w-full object-cover"
								/>
								<div className="flex flex-col">
									<h3 className="text-black subHeading font-normal forum leading-tight">
										{item?.title}
									</h3>
									<p className="text-black montserrat text-sm font-normal forum leading-normal">
										{item?.short_description.split(" ").slice(0, 13).join(" ")}
										...{" "}
										<Link
											to={`/astrology-blog/${item?.id}`}
											className="text-blue-600 hover:underline">
											Read More
										</Link>
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
