import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#C6F10E]">404</h1>
          <p className="mt-2 text-white/70">This page could not be found.</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-[#C6F10E] px-4 py-2 font-medium text-[#19222D] hover:bg-[#d4f83a] transition-colors"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </div>
  );
}
