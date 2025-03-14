import parse from "html-react-parser";
import { TextMask } from "@/components";
import getBlog from "@/actions/get-blog";
import { useEffect, useState } from "react";
import { TblogsColumnProps } from "@/types";
import { useParams } from "react-router-dom";

export default function Blog() {
	const { id } = useParams();
	const [blog, setBlog] = useState<TblogsColumnProps | null>(null);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				if (id) {
					const response = await getBlog(id);
					setBlog(response.blog);
				}
			} catch (err) {
				console.error("Error fetching blog:", err);
			}
		};
		fetchBlog();
	}, [id]);

	return (
		<div className="w-full padding-y padding-x">
			<div className="flex flex-col gap-10">
				<div className="flex items-center justify-center flex-col gap-10">
					<img
						src={`https://freequote4financialprotection.com/backend/${blog?.image}`}
						alt={blog?.title}
						className="w-full h-[600px] object-cover object-center"
					/>
				</div>
				<div className="flex flex-col gap-5">
					<div className="w-full flex items-center justify-between gap-5">
						<h3 className="text-black heading font-normal leading-tight forum">
							{blog?.title}
						</h3>
						<div className="flex items-center gap-4 shrink-0">
							<div className="flex items-center">
								<div className="w-12 h-4 bg-[#7A75EF]" />
								<div className="w-32 h-1 bg-[#A8948E]" />
							</div>
							<h3 className="text-black heading font-normal leading-tight forum">
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
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							{/* @tss-ignore */}
							<TextMask>
								{[blog?.description ? parse(blog.description) : ""]}
							</TextMask>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
