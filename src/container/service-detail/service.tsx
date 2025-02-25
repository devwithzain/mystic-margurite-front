import { TextMask } from "@/components";
import { servicesItems } from "@/constants";
import { Link, useParams } from "react-router-dom";
import AnimatedText from "@/components/animated-text";

export default function Service() {
	const { id } = useParams();
	const blogItem = servicesItems.find((item) => item.id === Number(id));
	if (!blogItem) {
		return <div>Blog not found</div>;
	}

	return (
		<div className="w-full padding-y padding-x">
			<div className="w-full flex flex-col gap-10">
				<div className="w-full flex justify-center gap-10 items-center">
					<div className="flex-1">
						<img
							src={blogItem.src}
							alt="formBgImg"
							className="w-full object-cover"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-8">
						<div className="flex flex-col gap-2">
							<div className="flex flex-col">
								<AnimatedText
									text={`${blogItem.title}`}
									className="text-[#936d42] heading font-normal forum capitalize leading-tight"
								/>
							</div>
							<div>
								<h3 className="text-black paragraph font-normal leading-loose tracking-normal montserrat">
									The science and art of astrology can be used to explore so
									many avenues of our life experience. On its own merits, an
									analysis of the birth chart can yield much in-depth
									information about the natal challenges, talents and potentials
									unique to each individual. Ancestral inheritance, family of
									origin, karmic and developmental themes, past lives and path
									of soul growth can be delineated from the heavens, as can the
									nature of relationship,
								</h3>
							</div>
						</div>
						<div className="w-full flex items-center gap-4">
							<Link
								to="/contact-us"
								className="w-full flex items-center justify-center gap-2 px-6 py-4 text-center bg-[#7a74ef]">
								<button className="text-center text-white text-lg font-medium leading-tight tracking-tight montserrat">
									Explore More
								</button>
							</Link>
							<Link
								to="/contact-us"
								className="w-full flex items-center justify-center gap-2 px-6 py-4 text-center border-black border">
								<button className="text-center text-black text-lg font-medium leading-tight tracking-tight montserrat">
									Contact Now
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col gap-5">
						<div className="w-full flex items-center justify-between gap-5">
							<h3 className="text-black heading font-normal leading-tight forum">
								Best Service for You
							</h3>
						</div>
						<div className="flex flex-col gap-4">
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
									]}
								</TextMask>
							</p>
							<p className="text-black paragraph font-normal montserrat leading-loose tracking-normal">
								<TextMask>
									{[
										"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
									]}
								</TextMask>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
