import Hero from "@/container/blog/hero";
import Blogs from "@/container/blog/blogs";
import Marquee from "@/container/home/marquee";
import NewsLetter from "@/components/ui/client/news-letter";

export default function BlogsAstrology() {
	return (
		<>
			<Hero />
			<Marquee />
			<Blogs />
			<NewsLetter />
		</>
	);
}
