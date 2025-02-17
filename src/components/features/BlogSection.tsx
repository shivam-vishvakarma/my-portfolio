import { Blog } from "@/lib/types";
import MainHeading from "../molecules/MainHeading";
import BlogCard from "../molecules/BlogCard";

interface BlogSectionProps {
  blogs: Blog[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
  return (
    <section className="py-32 relative bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <MainHeading primary="Latest" secondary="Articles" />
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((post, idx) => (
            <BlogCard blog={post} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
