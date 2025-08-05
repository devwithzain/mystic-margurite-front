import Image from "next/image";
import parse from "html-react-parser";
import { TextMask } from "@/components/ui";
import { TblogsColumnProps } from "@/types";

export default function AstrodialogouesBlogDetail({
	blog,
}: {
	blog: TblogsColumnProps;
}) {
	return (
		<div className="w-full padding-y padding-x">
			<div className="flex flex-col gap-10">
				<div className="flex items-center justify-center flex-col gap-10">
					<Image
						src={`https://mysticmarguerite.com/new/backend/${blog?.image}`}
						alt={blog?.title}
						className="w-full h-[600px] object-cover object-center"
						width={600}
						height={600}
					/>
				</div>
				<div className="flex flex-col gap-5">
					<div className="w-full flex items-center justify-between gap-5">
						<h3 className="text-[#2E073F] subHeading font-semibold papyrus leading-tight">
							{blog?.title}
						</h3>
						<div className="flex items-center gap-4 shrink-0">
							<div className="flex items-center">
								<div className="w-12 h-4 bg-[#7A75EF]" />
								<div className="w-32 h-1 bg-[#A8948E]" />
							</div>
							<h3 className="text-[#2E073F] subHeading font-semibold papyrus leading-tight">
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
							{blog?.description ? parse(blog.description) : ""}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
