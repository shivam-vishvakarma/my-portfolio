import { Testimonial } from "@/lib/types";
import Card from "../atoms/Card";
import CardGradient from "../atoms/CardGradient";
import { MessageCircle } from "lucide-react";
import Typography from "../atoms/Typography";
import Avatar from "../atoms/Avatar";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card variant="grey">
      <div className="p-8 flex flex-col h-full">
        <CardGradient color="from-purple-500 to-pink-500" />
        <MessageCircle className="w-8 h-8 text-purple-400 mb-6" />
        <Typography variant="card-desc2" className="mb-6">
          {testimonial.content}
        </Typography>
        <div className="flex items-center mt-auto">
          <Avatar
            src={testimonial.image}
            alt={testimonial.name}
            className="mr-4"
          />
          <div>
            <Typography variant="h4">{testimonial.name}</Typography>
            <Typography variant="card-desc" className="text-sm">
              {testimonial.role}
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
}
