import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} — Arliss Zwingli`,
    description: project.description,
    openGraph: {
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen text-white">
      <Section className="pt-4">
        <Container>

          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C6F10E] transition-colors mb-8"
          >
            ← Back to projects
          </Link>

          {/* Main Image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Project Information */}
          <div className="mt-10 max-w-3xl">

            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>

            {/* Year & Role */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
              <span>{project.year}</span>
              <span>·</span>
              <span>{project.role}</span>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tools */}
            {project.tools && project.tools.length > 0 && (
              <p className="mt-4 text-sm text-white/60">
                <span className="font-medium text-white/80">
                  Tools:
                </span>{" "}
                {project.tools.join(", ")}
              </p>
            )}

            {/* Description */}
            <div className="mt-8 prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-white/80">
                {project.content}
              </p>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-16">

              {/* Gallery Title */}
              <h2 className="text-xl font-semibold text-white mb-6">
                Gallery
              </h2>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="flex justify-center"
                  >
                    {/* Image + Border */}
                    <div className="w-[85%] overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <Image
                        src={src}
                        alt={`${project.title} gallery ${i + 1}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 640px) 70vw, 40vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </Container>
      </Section>
    </div>
  );
}