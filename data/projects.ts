export const projects = [
  {
    slug: "sports-poster-project",
    title: "Sports Poster Project",
    description: "Poster tentang Sports",
    image: "/images/experience/sports/Badiminton-Poster_01.jpg",
    tags: ["Graphic Design", "Poster", "Sports"],
    role: "Designer & Illustrator",
    content: "Poster ini dibuat untuk mengikuti sebuah tantangan dari komunitas desainer sport tentang bagaimana bobroknya Federasi Badminton Indonesia dengan membuat poster yang hanya modal AI (Artificial Inteligence). Padahal banyaknya desainer handal di Indonesia yang bisa di rekrut.",
    tools: ["Adobe Photoshop"],
    gallery: [
      "/images/experience/sports/Badiminton-Poster_01.jpg",
      "/images/experience/sports/Badiminton-Poster_02.jpg",
      "/images/experience/sports/marquez.png",
      "/images/experience/sports/messi.png"
    ],
  },
  {
    slug: "branding-altiora",
    title: "Altiora UNAI 2026",
    description: "Create New Logo identity visual assets for Altiora Senior Class Universitas Advent Indonesia.",
    image: "/images/experience/logoaltiora.png",
    tags: ["Branding", "Multimedia", "Identity"],
    year: "Mei 2026",
    role: "Staff Multimedia",
    content: "Developed the visual identity for UKM MULMED, including logo concepts, color systems, and application across digital and print media. The identity reflects creativity and technical excellence in multimedia design.",
    tools: ["Adobe Illustrator", "Figma"],
    gallery: [
      "/images/experience/logoaltiora.png",
      "/images/experience/altiora/altiora1.png",
      "/images/experience/altiora/altiora2.png",
      "/images/experience/altiora/altiora3.png",
      "/images/experience/altiora/altiora4.png",
      "/images/experience/altiora/altiora5.png",
      "/images/experience/altiora/postergatheringaltiora.png"
    ],
  },
  {
    slug: "pkkmb-unai-2024",
    title: "PKKMB 2024 Universitas Advent Indonesia",
    description: "Campaign visuals and digital assets for SS Purwadhika initiative.",
    image: "/images/experience/pkkmb24/stiker.png",
    tags: ["Multimedia", "Digital Design", "PKKMB"],
    year: "August 2024",
    role: "Multimedia Division",
    content: "Created campaign visuals and supported web presence for the SS Purwadhika project. Combined graphic design with front-end development to deliver a cohesive digital experience.",
    tools: ["Adobe Photoshop", "Canva"],
    gallery: [
      "/images/experience/pkkmb24/stiker.png",
      "/images/experience/pkkmb24/backdrop.png",
      "/images/experience/pkkmb24/gerbangdepan.png",
      "/images/experience/pkkmb24/poster.jpg",
      "/images/experience/pkkmb24/filterig.png",
      "/images/experience/pkkmb24/poster1.jpg",
      "/images/experience/pkkmb24/tas.png"
    ],
  },
  {
    slug: "online-magazine-project",
    title: "Online Magazine Project",
    description: "Multimedia project showcasing event coverage and creative documentation.",
    image: "/images/experience/magazine/WOM1_01.jpg",
    tags: ["Graphic Desain"],
    year: "2025",
    role: "Graphic Designer",
    content: "Led editorial and visual direction for the CB Win project, including photo selection, layout design, and publication preparation. This project highlighted the intersection of design and storytelling.",
    tools: ["Adobe InDesign", "Adobe Lightroom", "Photoshop"],
    gallery: [
      "/images/experience/magazine/WOM1_01.jpg",
      "/images/experience/magazine/WOM1_02.jpg",
      "/images/experience/magazine/WOM1_03.jpg",
      "/images/experience/magazine/WOM1_04.jpg"
    ],
  },
    {
    slug: "poster-projects",
    title: "Poster Projects",
    description: "Multimedia project showcasing event coverage and creative documentation.",
    image: "/images/experience/cbWin.jpg",
    tags: ["Multimedia", "Editorial", "Photography"],
    year: "2024",
    role: "Editor & Multimedia Designer",
    content: "Led editorial and visual direction for the CB Win project, including photo selection, layout design, and publication preparation. This project highlighted the intersection of design and storytelling.",
    tools: ["Adobe InDesign", "Adobe Lightroom", "Photoshop"],
    gallery: ["/images/experience/cbWin.jpg"],
  },
    {
    slug: "rantosstad-brand-project",
    title: "Rantosstad Fashion Brand Local",
    description: "Multimedia project showcasing event coverage and creative documentation.",
    image: "/images/experience/rantosstad/10TAngels.png",
    tags: ["Fashion", "Design"],
    year: "2024",
    role: "Designer",
    content: "Led editorial and visual direction for the CB Win project, including photo selection, layout design, and publication preparation. This project highlighted the intersection of design and storytelling.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    gallery: [
      "/images/experience/rantosstad/10TAngels.png",
      "/images/experience/rantosstad/mockup10t.png",
      "/images/experience/rantosstad/nbnl.png",
      "/images/experience/rantosstad/mockupnbnl.png",
      "/images/experience/rantosstad/nbnlbelakang.png"
    ],
  },
  {
    slug: "redesign-uiux-website-pt-mfi",
    title: "Redesign UI/UX Website PT Meerkats Flexipack Indonesia",
    description: "Multimedia project showcasing event coverage and creative documentation.",
    image: "/images/experience/redesignuiux/all.png",
    tags: ["User Interface", "User Experience", "Design"],
    year: "2026",
    role: "UI/UX Designer",
    content: "Led editorial and visual direction for the CB Win project, including photo selection, layout design, and publication preparation. This project highlighted the intersection of design and storytelling.",
    tools: ["Figma"],
    gallery: ["/images/experience/redesignuiux/all.png",
      "/images/experience/redesignuiux/homepage.png",
      "/images/experience/redesignuiux/about.png",
      "/images/experience/redesignuiux/products.png",
      "/images/experience/redesignuiux/machinery.png",
      "/images/experience/redesignuiux/contact.png",
      "/images/experience/redesignuiux/career.png"
    ],
  },
    {
    slug: "cbwin-pr",
    title: "CB Win Project",
    description: "Multimedia project showcasing event coverage and creative documentation.",
    image: "/images/experience/cbWin.jpg",
    tags: ["Multimedia", "Editorial", "Photography"],
    year: "2024",
    role: "Editor & Multimedia Designer",
    content: "Led editorial and visual direction for the CB Win project, including photo selection, layout design, and publication preparation. This project highlighted the intersection of design and storytelling.",
    tools: ["Adobe InDesign", "Adobe Lightroom", "Photoshop"],
    gallery: ["/images/experience/cbWin.jpg"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}