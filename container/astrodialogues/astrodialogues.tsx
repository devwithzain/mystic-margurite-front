"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import getBlogs from "@/actions/get-blogs";
import { TblogsColumnProps } from "@/types";
import { useEffect, useState } from "react";

export default function Astrodialogues() {
	const [blogs, setBlogs] = useState<TblogsColumnProps[]>([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await getBlogs();
				const astroDialoguesBlogs = response.blogs.filter(
					(blog) => blog.category === "Astro dialogues Blogs",
				);
				setBlogs(astroDialoguesBlogs);
			} catch (err) {
				console.error("Error fetching blogs:", err);
			}
		};
		fetchBlogs();
	}, []);

	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex justify-center gap-10 items-start">
				<div className="flex flex-col w-full">
					<div className="grid grid-cols-3 gap-6">
						{blogs?.length > 0 ? (
							blogs.map((item, index) => (
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
												src={`https://mysticmarguerite.com/new/backend/${item?.image}`}
												alt="blog"
												className="w-full h-full object-cover"
												width={1000}
												height={1000}
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
													href={`/blogs/astrodialogues/${item?.id}`}
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
