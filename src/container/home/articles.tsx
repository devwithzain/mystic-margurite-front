import { Link } from "react-router-dom";
import getBlogs from "@/actions/get-blogs";
import { useEffect, useState } from "react";
import { TblogsColumnProps } from "@/types";

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
				<h1 className="heading text-[#936D42] forum leading-tight tracking-tight uppercase">
					Latest Articles
				</h1>
				<p className="text-center paragraph text-[#433E37] montserrat leading-normal tracking-tight">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry
				</p>
			</div>
			<div className="w-full flex items-center justify-center gap-5">
				{blogs.slice(0, 3).map((item) => (
					<div
						className={`flex flex-col gap-2`}
						key={item.id}>
						<img
							src={`http://127.0.0.1:8000/${item?.image}`}
							alt="blog"
							className="w-full h-[500px] object-cover"
						/>
						<h3 className="text-black subHeading font-normal forum leading-tight">
							{item?.title?.split(" ").slice(0, 3).join(" ")} ...
						</h3>
						<p className="text-black montserrat  font-normal paragraph leading-normal tracking-tight">
							{item?.short_description.split(" ").slice(0, 15).join(" ")}
							...{" "}
							<Link
								to={`/blogs/astrology/${item?.id}`}
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
