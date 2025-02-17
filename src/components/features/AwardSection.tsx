import { Award } from "@/lib/types";
import MainHeading from "../molecules/MainHeading";
import AwardCard from "../molecules/AwardCard";

interface AwardSectionProps {
  awards: Award[];
}

export default function AwardSection({ awards }: AwardSectionProps) {
  return (
    <section className="py-32 relative bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <MainHeading primary="Awards" secondary="Recognition" />
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, idx) => (
            <AwardCard key={idx} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}
