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
  "Videography",
  "Photography",
  "Multimedia Production",
  "HTML",
  "CSS",
];

const tools = [
];

const toolLogos = [
  { src: "images/logos/ilustrator.png" },
  { src: "images/logos/photoshop.png" },
  { src: "images/logos/premierepro.png" },
  { src: "images/logos/lightroomclassic.png" },
  { src: "images/logos/indesign.png" },
  { src: "https://cdn.simpleicons.org/figma", alt: "Figma" },
  { src: "images/logos/canva.png" },
  { src: "https://cdn.simpleicons.org/davinciresolve" },
];


const timeline = [
    {
    year: "August 2022",
    title: "S1 Information Systems",
    org: "Universitas Advent Indonesia",
    description: "Starting my college journey by majoring in Information Systems",
  },
  {
    year: "November 2023",
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
     year: "June 2026",
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
                  Sistem Informasi sebenarnya tidak pernah masuk dalam rencana saya. Setelah lulus SMA di tahun 2022, ketika mendaftar di jurusan Sistem Informasi, itu bukan karena passion, melainkan karena di situlah akhirnya saya berlabuh. Dan untuk sementara waktu, memang terasa seperti aneh menjalaninya. Sisi teknis dan penuh coding dari jurusan ini memang tidak sesuai dengan saya.
                  <br/><br/>Lalu, hampir tidak sengaja, saya mendengar tentang "Multimedia." Saya mencoba mencari tahu karena penasaran, dan tiba-tiba terasa pas ini yang saya cari selama ini. Ternyata ini hal yang sudah saya lakukan sejak dulu tanpa sadar kalau ternyata ada namanya. Sejak SMP saya sudah suka mengedit video di HP, menyusun klip-klip hanya karena menikmatinya, tanpa ada tujuan besar apa pun.
                  <br/><br/>Rasa penasaran itu akhirnya membawa saya ke sebuah workshop yang diadakan oleh organisasi mahasiswa di fakultas, di mana saya pertama kali benar-benar dikenalkan dengan software Adobe secara profesional. Yang tadinya hanya editing santai di HP, berubah menjadi sesuatu yang benar-benar bisa saya pelajari, asah, dan tekuni dengan serius.
                  <br/><br/>Saya mencoba ikut beberapa kegiatan termasuk bergabung dengan organisasi yang berhubungan dengan Multimedia di kampus. Dan ya benar saja, saya lebih banyak di tolak dan tidak sedikit orang-orang yang meremehkan saya. Tapi itu tidak masalah, karena dengan itu saya yakin bisa semakin kuat untuk diri saya menekuni bidang ini.
                  <br/><br/>Sejak saat itu, dunia desain, editing, visual, storytelling bahkan filmaking menjadi hal yang terus saya jalani, meskipun gelar saya tetap Sistem Informasi (S.kom). Memang jalannya tidak biasa, tapi inilah perjalanan hidup yang penuh dengan misteri dan inilah yang paling sesuai dengan diri saya.
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
