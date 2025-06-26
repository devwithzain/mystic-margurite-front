"use client";
import Link from "next/link";
import Image from "next/image";
import getBlogs from "@/actions/get-blogs";
import { useEffect, useState } from "react";
import { TblogsColumnProps } from "@/types";
import TextReveal from "@/components/ui/client/text-reveal";

export default function Articles() {
	const [blogs, setBlogs] = useState<TblogsColumnProps[]>([]);

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
	return (
		<div className="w-full min-h-screen padding-x padding-y flex items-center justify-center flex-col gap-20 bg-white z-50 relative">
			<div className="flex flex-col gap-2 items-center">
				<TextReveal>
					<h1 className="heading text-[#2E073F] papyrus tracking-tight font-semibold">
						Latest Articles
					</h1>
				</TextReveal>
				<TextReveal>
					<p className="text-center paragraph text-[#000] montserrat leading-normal tracking-tight">
						Discover our latest insights and articles about astrology and
						spirituality
					</p>
				</TextReveal>
			</div>
			<div className="w-full flex items-center justify-center gap-5 xm:flex-col sm:flex-col">
				{blogs.slice(0, 3).map((item) => (
					<div
						className={`flex flex-col gap-2`}
						key={item.id}>
						<Image
							src={`https://mysticmarguerite.com/new/backend/${item?.image}`}
							alt="blog"
							className="w-full h-[500px] object-cover"
							width={500}
							height={500}
						/>
						<h3 className="text-[#2E073F] subHeading font-medium forum leading-tight">
							{item?.title?.split(" ").slice(0, 3).join(" ")} ...
						</h3>
						<p className="text-black montserrat  font-normal paragraph leading-normal tracking-tight">
							{item?.short_description.split(" ").slice(0, 15).join(" ")}
							...{" "}
							<Link
								href={`/blogs/astrology/${item?.id}`}
								className="text-blue-600 hover:underline">
								Read More
							</Link>
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
