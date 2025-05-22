import Marquee from "@/container/home/marquee";
import Blog from "@/container/blog-detail/blog";
import Hero from "@/container/blog-detail/hero";
import NewsLetter from "@/components/ui/client/news-letter";

export default function BlogDetail() {
	return (
		<>
			<Hero />
			<Marquee />
			<Blog />
			<NewsLetter />
		</>
	);
}
