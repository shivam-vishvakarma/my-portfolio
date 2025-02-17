import { Timeline } from "@/lib/types";
import MainHeading from "../molecules/MainHeading";

interface CareerTimelineSectionProps {
  timeLine: Timeline[];
}

export default function CareerTimelineSection({
  timeLine,
}: CareerTimelineSectionProps) {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <MainHeading primary="Career" secondary="Timeline" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-500 to-pink-500" />
          <div className="space-y-24">
            {timeLine.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
                <div
                  className={`absolute top-0 w-1/2 ${
                    idx % 2 === 0 ? "left-0 pr-8 text-right" : "right-0 pl-8"
                  }`}
                >
                  <span className="text-purple-400 font-bold">{item.year}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-gray-400">{item.company}</p>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
