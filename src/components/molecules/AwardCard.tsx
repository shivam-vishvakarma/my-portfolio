import { AwardIcon } from "lucide-react";
import Card from "../atoms/Card";
import Typography from "../atoms/Typography";
import { Award } from "@/lib/types";

interface AwardCardProps {
  award: Award;
}

export default function AwardCard({ award }: AwardCardProps) {
  return (
    <Card variant="black">
      <div className="p-8">
        <AwardIcon className="w-12 h-12 text-purple-400 mb-4" />
        <Typography variant="card-title" className="mb-2">
          {award.title}
        </Typography>
        <p className="text-purple-400 mb-4">
          {award.organization} • {award.date}
        </p>
        <Typography variant="card-desc">{award.description}</Typography>
      </div>
    </Card>
  );
}
