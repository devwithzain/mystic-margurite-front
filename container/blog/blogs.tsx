"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TblogsColumnProps } from "@/types";

export default function Blogs({ blogs }: { blogs: TblogsColumnProps[] }) {
	const blogsPerPage = 6;
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedMonth, setSelectedMonth] = useState("");
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("");
	const categories = [...new Set(blogs?.map((item) => item.category))];

	const sortedBlogs = [...blogs].sort((a, b) => {
		return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
	});

	const filteredBlogs = sortedBlogs?.filter((blog) => {
		const matchCategory = selectedCategory
			? blog.category === selectedCategory
			: true;
		const matchMonth = selectedMonth
			? new Date(blog.created_at).toLocaleString("default", {
					month: "long",
			  }) === selectedMonth
			: true;
		const blogMonth = new Date(blog.created_at).toLocaleString("default", {
			month: "long",
		});
		const matchSearch = searchTerm.trim()
			? blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			  blog.short_description
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
			  (blog.description &&
					blog.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
			  blogMonth.toLowerCase().includes(searchTerm.toLowerCase())
			: true;
		return matchCategory && matchMonth && matchSearch;
	});

	const latestBlog =
		filteredBlogs && filteredBlogs.length > 0 ? filteredBlogs[0] : null;
	const otherBlogs = latestBlog ? filteredBlogs.slice(1) : [];
	const totalPages = Math.ceil(otherBlogs.length / blogsPerPage);
	const paginatedBlogs = otherBlogs.slice(
		(currentPage - 1) * blogsPerPage,
		currentPage * blogsPerPage,
	);

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
					<div className="flex w-full items-center justify-between mb-10">
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Search blogs..."
							className="placeholder:text-black p-3 border border-black rounded outline-none montserrat w-64"
						/>
						<div className="self-end relative flex items-center gap-4">
							<button
								onClick={() => {
									setSelectedMonth("");
									setSelectedCategory("");
									setSearchTerm("");
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
					</div>
					{latestBlog && (
						<div className="w-full mb-10 p-6 rounded-lg shadow-lg border border-[#7a74ef] bg-white flex gap-8 items-center">
							<div className="w-[400px] h-[300px] relative">
								<Image
									src={`http://127.0.0.1:8000/storage/${latestBlog?.image}`}
									alt={latestBlog?.title || "blog"}
									className="w-full h-full object-cover rounded-lg"
									width={400}
									height={300}
								/>
							</div>
							<div className="flex flex-col gap-2 w-full">
								<h2 className="text-[#7a74ef] text-2xl">Latest Blog</h2>
								<h3 className="text-[#2E073F] subHeading font-semibold forum leading-tight text-xl">
									{latestBlog?.title}
								</h3>
								<p className="text-black montserrat paragraph font-normal forum leading-normal">
									{latestBlog?.short_description}
								</p>
								<p className="text-gray-500 text-sm">
									{new Date(latestBlog.created_at).toLocaleDateString("en-US", {
										day: "numeric",
										month: "short",
										year: "numeric",
									})}
								</p>
								<Link
									href={`/blogs/astrology/${latestBlog?.id}`}
									className="text-blue-600 hover:underline">
									Read Full Blog
								</Link>
							</div>
						</div>
					)}
					<div className="grid grid-cols-3 gap-6">
						{paginatedBlogs?.length > 0 ? (
							paginatedBlogs.map((item, index) => (
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
											<Image
												src={`http://127.0.0.1:8000/storage/${item?.image}`}
												alt="blog"
												className="w-full h-full object-cover"
												width={1000}
												height={1000}
											/>
										</div>
										<div className="flex flex-col">
											<h3 className="text-[#2E073F] subHeading font-medium forum leading-tight">
												{item?.title?.split(" ").slice(0, 3).join(" ")}
											</h3>
											<p className="text-black montserrat paragraph font-normal forum leading-normal">
												{item?.short_description
													.split(" ")
													.slice(0, 10)
													.join(" ")}
												...{" "}
												<Link
													href={`/blogs/astrology/${item?.id}`}
													className="text-blue-600 hover:underline">
													Read More
												</Link>
											</p>
										</div>
									</div>
								</motion.div>
							))
						) : (
							<div className="paragraph col-span-4 text-center text-[#2E073F] font-normal montserrat">
								{(() => {
									if (selectedCategory) {
										const categoryBlogs = sortedBlogs.filter(
											(blog) => blog.category === selectedCategory,
										);
										if (categoryBlogs.length > 0 && selectedMonth) {
											return `No blogs found for "${selectedCategory}" in "${selectedMonth}". Remove month filter to see all blogs in this category.`;
										} else if (categoryBlogs.length > 0 && searchTerm) {
											return `No blogs found for "${selectedCategory}" matching your search. Remove search filter to see all blogs in this category.`;
										} else if (categoryBlogs.length > 0) {
											return `No blogs found for "${selectedCategory}" with current filters.`;
										} else {
											return `No blogs found in this category.`;
										}
									}
									return "No blogs found.";
								})()}
							</div>
						)}
					</div>
					{/* Pagination Controls */}
					{totalPages > 1 && (
						<div className="flex justify-center items-center gap-2 mt-8">
							<button
								className="px-4 py-2 border rounded bg-[#7a74ef] text-white disabled:bg-gray-300"
								onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
								disabled={currentPage === 1}>
								Previous
							</button>
							{[...Array(totalPages)].map((_, idx) => (
								<button
									key={idx}
									className={`px-3 py-1 border rounded mx-1 ${
										currentPage === idx + 1
											? "bg-[#2E073F] text-white"
											: "bg-white text-[#2E073F]"
									}`}
									onClick={() => setCurrentPage(idx + 1)}>
									{idx + 1}
								</button>
							))}
							<button
								className="px-4 py-2 border rounded bg-[#7a74ef] text-white disabled:bg-gray-300"
								onClick={() =>
									setCurrentPage((p) => Math.min(totalPages, p + 1))
								}
								disabled={currentPage === totalPages}>
								Next
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
