import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Arliss Zwingli Sitanggang",
  description: "Thoughts on design, development, and multimedia.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen text-white">
      <Section>
        <Container>
          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Blog
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              Notes on design, tools, and the path from editing to development.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
