import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import LogoLoop from "@/components/LogoLoop";

export const metadata: Metadata = {
  title: "About — Arliss Zwingli Sitanggang",
  description:
    "Learn about Arliss Zwingli Sitanggang",
};

const skills = [
  "Graphic Design",
  "UI/UX Design",
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
  "Canva",
  "Adobe Premiere Pro",
  "CapCut",
  "DaVinci Resolve",
];

const toolLogos = [
  { src: "images/logos/ilustrator.png" },
  { src: "images/logos/photoshop.png" },
  { src: "images/logos/lightroomclassic.png" },
  { src: "https://cdn.simpleicons.org/adobeindesign" },
  { src: "https://cdn.simpleicons.org/figma", alt: "Figma" },
  { src: "https://cdn.simpleicons.org/canva" },
  { src: "images/logos/premierepro.png" },
  { src: "https://cdn.simpleicons.org/davinciresolve" },
];


const timeline = [
  {
    year: "2023",
    title: "UKM Multimedia",
    org: "IT VERSE",
    description: "Completed basic graphic design editing training and learned to use Adobe Premiere Pro, along with Adobe Photoshop, Lightroom, and Snapseed for photo and video editing.",
  },
  {
    year: "April 2024",
    title: "Cyber Cup 4.0 IT Competition",
    org: "By HIMA FTI",
    description: "Won an IT competition with a team of friends, competing in a category covering web development and basic algorithms. The competition was open to students from the Faculty of Information Technology (FTI)."
  },
  {
    year: "August 2024",
    title: "PKKMB Universitas Advent Indonesia",
    org: "Multimedia Division",
    description: "Designed social media content, publication posters, merchandise, and banners for the PPKMB 2024 event using Adobe Photoshop, Illustrator, and Canva. Collaborated with the multimedia team to maintain visual consistency across all event promotional materials.",
  },
  {
    year: "May - August 2025",
    title: "Kantor GMAHK Konferens Jakarta",
    org: "Multimedia Intership",
    description: "Designed social media content (feed and story posts) and edited office documentation videos. Designed a logo for the podcast. Documented activities both outside the office and recordings in the office studio..",
  },
  {
    year: "May 2026",
    title: "Multimedia Staff",
    org: "Altiora Senior Class Universitas Advent Indonesia 2026",
    description: "Designed a new logo for Altiora 2026. Designed publication materials (posters) and social media content, and edited documentation photos/videos for the Senior Class 2026 event. Edited the Altiora 2026 Kaleidoscope video."
  },
  {
     year: "2022 - 2026",
    title: "S1 Information Systems",
    org: "Universitas Advent Indonesia",
    description: "Completed a Bachelor's degree in Information Systems from Universitas Advent Indonesia, Bandung, earning the title S.Kom (Sarjana Komputer)."
  }
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
                  src="/images/arliss.jpeg"
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
                I&apos;m an Information Systems graduate from Universitas Advent Indonesia. I work in graphic design and editorial, with a focus on crafting visual identities and shaping stories through thoughtful, structured work.
              </p>
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-[#C6F10E]">
                  My story
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Information Technology was never part of the plan. When I enrolled in Information Systems, it wasn't out of passion—it was just where I ended up. And for a while, it felt that way too. The technical, code-heavy side of the major never quite clicked with me.
                  <br/><br/>Then, almost by accident, I heard about "multimedia." I looked into it out of curiosity, and something clicked—this was it. This was the thing I'd been doing all along without realizing it had a name. Back in middle school, I was already editing videos on my phone, piecing clips together just because I enjoyed it, with no bigger goal in mind.
                  <br/><br/>That curiosity eventually led me to a workshop organized by my faculty's student organization, where I got my first real introduction to professional Adobe software. What started as casual phone editing turned into something I could actually learn, refine, and take seriously.
                  <br/><br/>Since then, multimedia design—editing, visuals, storytelling—has been what I've stuck with, even though my degree says Information Systems. It's a bit of an unusual path, but it's the one that actually fits.
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

          <div className="mt-10">
            <LogoLoop
              logos={toolLogos}
              speed={90}
              direction="left"
              pauseOnHover
              fadeOut
              fadeOutColor="FFFFFF05"
              scaleOnHover
              ariaLabel="Tools and software logos"
            />
          </div>
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
