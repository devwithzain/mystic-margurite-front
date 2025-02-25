import { TextMask } from "@/components";
import { blogItems } from "@/constants";
import { useParams } from "react-router-dom";

export default function Blog() {
	const { id } = useParams();
	const blogItem = blogItems.find((item) => item.id === Number(id));
	if (!blogItem) {
		return <div>Blog not found</div>;
	}

	return (
		<div className="w-full padding-y padding-x">
			<div className="flex flex-col gap-10">
				<div className="flex items-center justify-center flex-col gap-10">
					<img
						src={blogItem.src}
						alt={blogItem.title}
						className="w-full h-[600px] object-cover object-center"
					/>
				</div>
				<div className="flex flex-col gap-5">
					<div className="w-full flex items-center justify-between gap-5">
						<h3 className="text-black heading font-normal leading-tight forum">
							{blogItem.title}
						</h3>
						<div className="flex items-center gap-4">
							<div className="flex items-center">
								<div className="w-12 h-4 bg-[#7A75EF]" />
								<div className="w-32 h-1 bg-[#A8948E]" />
							</div>
							<h3 className="text-black heading font-normal leading-tight forum">
								18 Nov 2024
							</h3>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>{[`${blogItem.para}`]}</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>{[`${blogItem.para2}`]}</TextMask>
						</p>
						<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
							<TextMask>{[`${blogItem.para3}`]}</TextMask>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
