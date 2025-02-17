import { Experience } from "@/lib/types";
import MainHeading from "../molecules/MainHeading";
import ExperienceCard from "../molecules/ExperienceCard";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section className="py-32 relative" id="journey">
      <div className="max-w-7xl mx-auto px-4">
        <MainHeading primary="Professional" secondary="Journey" />
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
