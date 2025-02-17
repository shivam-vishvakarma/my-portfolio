import { Blog } from "@/lib/types";
import { BookOpen, Clock } from "lucide-react";
import Card from "../atoms/Card";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card variant="black">
      <div className="p-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <BookOpen className="w-4 h-4 mr-2" />
          {blog.category}
          <span className="mx-2">•</span>
          <Clock className="w-4 h-4 mr-2" />
          {blog.readTime}
        </div>
        <Typography
          variant="card-title2"
          className="mb-3 group-hover:text-purple-400 transition-colors"
        >
          {blog.title}
        </Typography>
        <Typography variant="card-desc" className="mb-4">
          {blog.preview}
        </Typography>
        <time className="text-sm text-gray-500">{blog.date}</time>
        <br />
        <Button
          variant="icon-text"
          component="a"
          href="#"
          className="mt-auto text-purple-400 hover:text-purple-300"
          arrow="right"
        >
          Read More
        </Button>
      </div>
    </Card>
  );
}
