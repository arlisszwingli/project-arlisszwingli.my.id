import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Arliss Zwingli`,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

function ArticleContent({ content }: { content: string }) {
  const paragraphs = content.split(/\n\n+/).filter(Boolean);
  return (
    <div className="prose prose-invert max-w-none">
      {paragraphs.map((block, i) => {
        if (block.startsWith("**") && block.endsWith("**")) {
          return (
            <h3
              key={i}
              className="mt-8 text-lg font-semibold text-white first:mt-0"
            >
              {block.replace(/\*\*/g, "")}
            </h3>
          );
        }
        return (
          <p key={i} className="mt-4 leading-relaxed text-white/85">
            {block}
          </p>
        );
      })}
    </div>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen text-white">
      <Section className="pt-4">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C6F10E] transition-colors mb-8"
          >
            ← Back to blog
          </Link>

          <article className="mx-auto max-w-3xl">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <header>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {post.title}
              </h1>
              <time
                dateTime={post.date}
                className="mt-3 block text-sm text-white/60"
              >
                {formattedDate}
              </time>
            </header>

            <div className="mt-10">
              <ArticleContent content={post.content} />
            </div>
          </article>
        </Container>
      </Section>
    </div>
  );
}
