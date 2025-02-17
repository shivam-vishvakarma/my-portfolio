import { Experience } from "@/lib/types";
import Card from "../atoms/Card";
import Typography from "../atoms/Typography";
import ChipContainer from "./ChipContainer";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 p-8">
        <div>
          <Typography variant="card-title" className="text-purple-400">
            {experience.company}
          </Typography>
          <Typography variant="card-title2" className="mt-2 font-normal">
            {experience.role}
          </Typography>
          <Typography variant="card-desc" className="mt-1">
            {experience.period}
          </Typography>
        </div>

        <div>
          <Typography variant="card-desc" className="mb-4">
            {experience.description}
          </Typography>
          <ul className="space-y-2 mb-4">
            {experience.achievements.map((achievement, achIdx) => (
              <Typography key={achIdx} variant="list">
                {achievement}
              </Typography>
            ))}
          </ul>
          <ChipContainer chips={experience.tech} />
        </div>
      </div>
    </Card>
  );
}
