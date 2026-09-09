import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About — Arliss Zwingli Sitanggang",
  description:
    "Learn about Arliss Zwingli — Multimedia Designer, Graphic Designer, and Web Developer.",
};

const skills = [
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Video Editing",
  "Branding",
  "Typography",
  "Illustration",
  "Multimedia Production",
];

const tools = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Figma",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "DaVinci Resolve",
];

const timeline = [
  {
    year: "2024 – Present",
    title: "Editor & Content",
    org: "Winfonesia",
    description: "Managing content and visual direction for the online magazine.",
  },
  {
    year: "2024 – Present",
    title: "Student",
    org: "Universitas Advent Indonesia",
    description: "Information Systems, focused on multimedia design and development.",
  },
  {
    year: "2023",
    title: "Design & Multimedia",
    org: "UKM MULMED",
    description: "Active in the multimedia community and event branding.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <Section className="pt-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="relative aspect-square max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src="/arliss.jpg"
                  alt="Arliss Zwingli Sitanggang"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Hi, I&apos;m{" "}
                <span className="text-[#C6F10E]">Arliss Zwingli Sitanggang</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                I&apos;m an Information Systems student at Universitas Advent
                Indonesia, with a focus on multimedia design. I work across
                graphic design, web development, and editorial—currently as an
                Editor at Winfonesia, an online magazine. I&apos;m looking for
                opportunities to grow as an Editor and Designer.
              </p>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-[#C6F10E]">
                  My story
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  I got into design through a mix of curiosity and necessity:
                  making posters, editing visuals, and later building websites.
                  That path led me to multimedia—where I can combine layout,
                  motion, and code in one place. I care about clarity, consistency,
                  and making things that are both useful and visually strong.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/5 bg-white/[0.02]">
        <Container>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Skills
          </h2>
          <p className="mt-2 text-white/70">
            Areas I work in every day.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-[#C6F10E]/30 hover:bg-white/10"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Tools
          </h2>
          <p className="mt-2 text-white/70">
            Software and tech I use.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="border-t border-white/5 bg-white/[0.02]">
        <Container>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Experience & journey
          </h2>
          <p className="mt-2 text-white/70">
            A short timeline of what I&apos;ve been up to.
          </p>
          <div className="mt-10 space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-[#C6F10E]"
              >
                <span className="text-sm font-medium text-[#C6F10E]">
                  {item.year}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {item.title} · {item.org}
                </h3>
                <p className="mt-1 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
