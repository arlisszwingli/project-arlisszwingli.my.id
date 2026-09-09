import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  image,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#C6F10E]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C6F10E]/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19222D]/80 to-transparent opacity-60" />
        <span className="absolute bottom-3 left-4 text-xs font-medium text-white/90">
          {formattedDate}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white group-hover:text-[#C6F10E] transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  );
}
