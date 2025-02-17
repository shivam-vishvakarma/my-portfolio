import { Project } from "@/lib/types";
import Card from "../atoms/Card";
import CardGradient from "../atoms/CardGradient";
import Typography from "../atoms/Typography";
import ChipContainer from "./ChipContainer";
import Button from "../atoms/Button";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <Image width={500} height={300} className="w-full" src={project.image} alt={project.title} />
      <CardGradient color={project.color} />
      <div className="space-y-4 p-4 h-full flex flex-col">
        <Typography variant="card-title">{project.title}</Typography>
        <Typography variant="card-desc">{project.description}</Typography>

        <ChipContainer chips={project.tech} />

        <div className="pt-4 flex gap-4 mt-auto">
          <Button
            href={project.github}
            variant="icon-text"
            component="a"
            target="_blank"
            leftIcon={<Github className="w-5 h-5 mr-1" />}
          >
            Code
          </Button>
          <Button
            href={project.live}
            variant="icon-text"
            component="a"
            target="_blank"
            leftIcon={<Globe className="w-5 h-5 mr-1" />}
          >
            Live
          </Button>
        </div>
      </div>
    </Card>
  );
}
