import { Project } from "@/lib/types";
import MainHeading from "../molecules/MainHeading";
import ProjectCard from "../molecules/ProjectCard";

export default function ProjectSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <MainHeading primary="Featured" secondary="Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
