import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#C6F10E]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C6F10E]/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19222D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white group-hover:text-[#C6F10E] transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
