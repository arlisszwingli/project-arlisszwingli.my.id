import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Arliss Zwingli Sitanggang",
  description: "Selected design and development projects by Arliss Zwingli.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-white">
      <Section>
        <Container>
          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Projects
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              A selection of design and development work—from branding and
              posters to web and multimedia.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
