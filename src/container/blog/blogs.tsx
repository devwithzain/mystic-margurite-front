import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import getBlogs from "@/actions/get-blogs";
import { TblogsColumnProps } from "@/types";
import { useEffect, useState } from "react";

export default function Blogs() {
	const [selectedMonth, setSelectedMonth] = useState("");
	const [isFilterOpen, setIsFilterOpen] = useState(false);
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

	const filteredBlogs = blogs?.filter((blog) => {
		const matchCategory = selectedCategory
			? blog.category === selectedCategory
			: true;
		const matchMonth = selectedMonth
			? new Date(blog.created_at).toLocaleString("default", {
					month: "long",
			  }) === selectedMonth
			: true;
		return matchCategory && matchMonth;
	});

	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex justify-center gap-10 items-start">
				<div className="min-w-[320px] border border-black rounded">
					<h3
						className="text-black subHeading font-normal montserrat leading-tight border-b border-black p-4 cursor-pointer"
						onClick={() => setSelectedCategory("")}>
						Categories
					</h3>
					<div className="flex flex-col gap-6 p-5">
						{categories.map((category, index) => (
							<div
								key={index}
								className={`flex items-center gap-2`}>
								<button
									onClick={() => setSelectedCategory(category)}
									className={`paragraph font-normal montserrat leading-tight cursor-pointer ${
										selectedCategory === category
											? "text-[#7a74ef]"
											: "text-black"
									} ${
										index === categories.length - 1
											? ""
											: "border-b border-black"
									}`}>
									{category}
								</button>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col w-full">
					<div className="self-end mb-6 relative flex items-center gap-4">
						<button
							onClick={() => {
								setSelectedMonth("");
								setSelectedCategory("");
							}}
							className="p-3 border border-black cursor-pointer rounded outline-none montserrat">
							Reset Filters
						</button>
						<select
							value={selectedMonth}
							onClick={() => setIsFilterOpen((prev) => !prev)}
							onChange={(e) => {
								setSelectedMonth(e.target.value);
								setIsFilterOpen(false);
							}}
							className="p-3 pr-10 border border-black cursor-pointer rounded outline-none montserrat appearance-none">
							<option value="">All Months</option>
							{[
								"January",
								"February",
								"March",
								"April",
								"May",
								"June",
								"July",
								"August",
								"September",
								"October",
								"November",
								"December",
							].map((month, index) => (
								<option
									key={index}
									value={month}>
									{month}
								</option>
							))}
						</select>
						<ChevronDown
							className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transform transition-transform ${
								isFilterOpen ? "rotate-180" : ""
							}`}
						/>
						<ChevronDown
							className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transform transition-transform ${
								isFilterOpen ? "rotate-180" : ""
							}`}
						/>
					</div>
					<div className="grid grid-cols-3 gap-6">
						{filteredBlogs?.length > 0 ? (
							filteredBlogs.map((item, index) => (
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
									className="w-full flex flex-col items-center gap-4">
									<div className="w-full relative flex flex-col gap-4">
										<div className="w-full h-[300px]">
											<img
												src={`https://mysticmarguerite.com/new/backend/${item?.image}`}
												alt="blog"
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="flex flex-col">
											<h3 className="text-[#2E073F] subHeading font-medium forum leading-tight">
												{item?.title?.split(" ").slice(0, 3).join(" ")} ...
											</h3>
											<p className="text-black montserrat text-sm font-normal forum leading-normal">
												{item?.short_description
													.split(" ")
													.slice(0, 13)
													.join(" ")}
												...{" "}
												<Link
													to={`/blogs/astrology/${item?.id}`}
													className="text-blue-600 hover:underline">
													Read More
												</Link>
											</p>
										</div>
									</div>
								</motion.div>
							))
						) : (
							<div className="col-span-4 text-center text-[#2E073F] subHeading font-normal montserrat">
								No blogs found in this category
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
