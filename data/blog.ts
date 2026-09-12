export const blogPosts = [
  {
    slug: "first-post-myopentrip",
    title: "One Platform, Every Journey",
    excerpt: "A short reflection on choosing the path of multimedia design and how it combines my love for visual storytelling and technology.",
    content: `Halo semua, ini adalah artikel pertamaku di blog ini.

              Yaa bisa dibilang ini juga adalah sebuah wadah bagiku sendiri untuk bercerita atau curhat hehe :). So, jangan bosan lihat seluruh ceritaku yaaaa. Ini menjadi artikel perkenalan sekaligus cerita tentang perjalanan saya membangun platform MyOpentrip.

              7 Juni 2026 saya Wisuda dari Universitas Advent Indonesia Bandung dengan membawa gelar S.kom (Sarjana Komputer).

              Sebagai seorang fresh graduate Sistem Informasi yang punya kecintaan besar terhadap alam dan dunia wisata, khususnya hiking/pendakian gunung. Beberapa waktu terakhir, saya melihat tren hiking dan opentrip semakin populer di kalangan anak muda gen Z. Sayangnya, di balik euforia ini, masih banyak keresahan soal keamanan opentrip mulai dari penyedia yang kurang jelas track record-nya, minimnya informasi wisata yang akurat, sampai sulitnya akses transportasi menuju lokasi.

              Dari situ, muncul keinginan untuk membuat sesuatu yang bisa membantu para pendaki dan pecinta alam merasa lebih aman dan nyaman saat merencanakan perjalanan. Bersama abang saya yang berprofesi sebagai Web Developer, kami mulai membangun sebuah wadah/platform yang menghadirkan:

              🧭 Opentrip — dengan informasi penyedia trip yang lebih transparan

              🏞️ Pengalaman wisata (experience) — cerita dan review dari para pendaki

              ℹ️ Info wisata — data seputar destinasi, jalur, dan persiapan pendakian

              🚗 Sewa kendaraan — memudahkan akses transportasi ke lokasi wisata

              💬 Forum — ruang diskusi antar pendaki untuk berbagi tips, bertanya, dan saling terhubung

  

Sebagai fresh graduate yang butuh pengalaman dan harus berjuang di dalam karir, ini menjadi salah satu langkah awal saya untuk menggabungkan passion di bidang teknologi (Sistem Informasi) dengan kecintaan saya terhadap alam. Semoga platform ini bisa menjadi wadah yang bermanfaat bagi teman-teman pecinta alam di luar sana, agar setiap perjalanan bisa lebih aman, terencana, dan berkesan.



Untuk platformnya juga sudah mulai kelihatan yang bisa dilihat di https://myopentrip.com/

tentunya untuk website ini belum sempurna, masih pengembangan terlebih di pembayaran langsung di website tanpa harus beralih ke WhatsApp terlebih dahulu.



Terima kasih untuk siapa pun yang sudah mendukung proses ini. Mari terus berkarya!

In this field, every project is a puzzle. You balance aesthetics with usability, creativity with constraints, and personal style with client needs. Whether I'm designing a poster, building a website, or editing a video, the same principles apply: clarity, consistency, and intention.

I'm excited to keep learning and to share more of my process and thoughts here. Thanks for reading.`,
    date: "2026-09-12",
    image: "/images/blogIMG/myopentrip.png",
  },
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
