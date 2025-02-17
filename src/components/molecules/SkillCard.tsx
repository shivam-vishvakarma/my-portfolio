import { Skill } from "@/lib/types";
import Card from "../atoms/Card";
import Typography from "../atoms/Typography";
import ChipContainer from "./ChipContainer";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card>
      <div className="p-6">
      <div className="text-4xl mb-4">{skill.icon}</div>
      <Typography variant="card-title2" className="mb-4">{skill.title}</Typography>
      <ChipContainer chips={skill.skills} />
      </div>
    </Card>
  );
}
