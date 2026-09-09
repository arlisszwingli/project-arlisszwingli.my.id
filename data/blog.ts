export const blogPosts = [
  {
    slug: "first-post",
    title: "Why I Chose Multimedia Design",
    excerpt: "A short reflection on choosing the path of multimedia design and how it combines my love for visual storytelling and technology.",
    content: `Multimedia design sits at the intersection of visual art, technology, and communication. For me, it was the natural choice—I've always been drawn to both the precision of code and the expressiveness of design.

In this field, every project is a puzzle. You balance aesthetics with usability, creativity with constraints, and personal style with client needs. Whether I'm designing a poster, building a website, or editing a video, the same principles apply: clarity, consistency, and intention.

I'm excited to keep learning and to share more of my process and thoughts here. Thanks for reading.`,
    date: "2026-01-15",
    image: "/images/experience/cbWin.jpg",
  },
  {
    slug: "design-tools-2025",
    title: "Design Tools I Use in 2025",
    excerpt: "An overview of the software and tools I rely on for graphic design, web development, and multimedia work.",
    content: `Here’s a quick rundown of the tools that stay open on my machine most days.

**Graphic design:** Adobe Illustrator and Photoshop for vector work, photo editing, and compositing. Figma for UI design and collaboration.

**Web development:** Next.js and React for building fast, maintainable sites. Tailwind CSS for styling. TypeScript for type safety.

**Multimedia & editorial:** Adobe InDesign for layouts and long-form content. DaVinci Resolve or Premiere for video when needed.

**Other:** Notion for notes and project tracking. Git for version control. The goal is to keep the stack simple and deep rather than broad and shallow.`,
    date: "2026-01-10",
    image: "/images/experience/UKM MULMED.jpg",
  },
  {
    slug: "from-editor-to-developer",
    title: "From Editor to Developer",
    excerpt: "How my experience as an editor at Winfonesia shaped my approach to building websites and user experiences.",
    content: `Editing taught me that every word and every pixel has to earn its place. When I moved into web development, that mindset stayed with me.

As an editor, you think about flow, hierarchy, and clarity. Readers should never feel lost. The same is true for users on a website: navigation should feel obvious, content should be scannable, and actions should be clear.

Winfonesia gave me hands-on experience with deadlines, feedback loops, and working with writers and designers. Those soft skills—communication, prioritization, attention to detail—translate directly into how I approach development and design today.`,
    date: "2026-01-01",
    image: "/images/experience/Badiminton-Poster_01.jpg",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}
