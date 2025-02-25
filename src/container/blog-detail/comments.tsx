import { comment01 } from "@/assets";
import { Link } from "react-router-dom";

export default function Comments() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex items-center gap-5">
				<div>
					<img
						src={comment01}
						alt="comment01"
					/>
				</div>
				<div className="w-full flex flex-col gap-5">
					<div className="w-full flex flex-col gap-2">
						<div className="w-full flex items-center justify-between">
							<h3 className="text-black subHeading font-normal leading-tight forum">
								Jeffrey P. McAllister
							</h3>
							<h3 className="text-black subHeading font-normal leading-tight forum">
								18 Nov 2024
							</h3>
						</div>
						<div>
							<p className="text-black paragraph font-normal leading-normal tracking-normal montserrat">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a
								galley.
							</p>
						</div>
						<div className="border-t border-black pt-4">
							<div className="flex items-center gap-4">
								<Link
									to=""
									className="paragraph text-black font-normal montserrat tracking-tight leading-tight">
									Edit
								</Link>
								<Link
									to=""
									className="paragraph text-black font-normal montserrat tracking-tight leading-tight">
									Reply
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
