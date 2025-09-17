"use client";
import Image from "next/image";
import getBlog from "@/actions/get-blog";
import { TextMask } from "@/components/ui";
import { TblogsColumnProps } from "@/types";
import { useEffect, useState } from "react";
import parse, { Element } from "html-react-parser";

export default function BlogDetail({ id }: { id: string }) {
	const [blog, setBlog] = useState<TblogsColumnProps | null>(null);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const response = await getBlog(id);
				setBlog(response.blog);
			} catch (error: unknown) {
				console.error("Error fetching blog:", error);
			}
		};

		fetchBlog();
	}, [id]);

	return (
		<div className="w-full padding-y padding-x">
			<div className="flex flex-col gap-10">
				<div className="flex items-center justify-center flex-col gap-10">
					<Image
						src={`http://127.0.0.1:8000/${blog?.image}`}
						alt={blog?.title}
						className="w-full h-[600px] object-contain object-center"
						width={600}
						height={600}
					/>
				</div>
				<div className="flex flex-col gap-5">
					<div className="w-full flex items-center justify-between gap-5">
						<h3 className="text-[#2E073F] heading font-semibold papyrus leading-tight">
							{blog?.title}
						</h3>
						<div className="flex items-center gap-4 shrink-0">
							<div className="flex items-center">
								<div className="w-12 h-4 bg-[#7A75EF]" />
								<div className="w-32 h-1 bg-[#A8948E]" />
							</div>
							<h3 className="text-[#2E073F] heading font-semibold papyrus leading-tight">
								{new Date(blog?.created_at || "").toLocaleDateString("en-US", {
									day: "numeric",
									month: "short",
									year: "numeric",
								})}
							</h3>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>{[blog?.short_description || ""]}</TextMask>
						</p>
						<div className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							{blog?.description
								? parse(blog.description, {
										replace: (domNode) => {
											if (
												domNode instanceof Element &&
												domNode.attribs &&
												domNode.name === "img"
											) {
												const { src, alt } = domNode.attribs;
												return (
													<Image
														src={`http://127.0.0.1:8000${src}`}
														alt={alt || "Blog content image"}
														width={800}
														height={400}
														className="my-4 w-full h-auto rounded-md"
													/>
												);
											}
										},
								  })
								: ""}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
