import { Skill } from "@/lib/types";
import MainHeading from "../molecules/MainHeading";
import SkillCard from "../molecules/SkillCard";

interface SkillSectionProps {
  skills: Skill[];
}

export default function SkillSection({ skills }: SkillSectionProps) {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <MainHeading primary="Technical" secondary="Expertise" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
