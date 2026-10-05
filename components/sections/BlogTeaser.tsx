import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Post } from "@/lib/types";

interface BlogTeaserProps {
  post?: Post;
}

export function BlogTeaser({ post }: BlogTeaserProps) {
  if (!post) return null;

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
        <SectionHeader
          tag="The Treatment // 12"
          title="EDITORIAL & FILM SCIENCE"
          description="Essays and technical teardowns on cinematography, color grading chemistry, and narrative rhythm."
          className="mb-0"
        />

        <Link
          href="/blog"
          className="mt-6 sm:mt-0 text-xs font-mono uppercase tracking-wider text-[#ff2d2d] hover:underline flex items-center gap-1.5 shrink-0"
        >
          <span>All Articles</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="group relative grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#ff2d2d]/50 transition-all duration-500 shadow-2xl"
      >
        {/* Cover Image (7 cols) */}
        <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
          <Image
            src={post.coverUrl}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
        </div>

        {/* Article Details (5 cols) */}
        <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#8a8a8a] mb-4">
              <span className="px-2.5 py-0.5 rounded bg-white/[0.06] text-white">
                {post.tags[0]}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#ff2d2d]" />
                {post.readingTime}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 leading-tight group-hover:text-[#ff2d2d] transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-[#8a8a8a] font-light leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-mono">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-medium text-white">{post.author}</p>
                <p className="text-[10px] font-mono text-[#8a8a8a]">
                  {post.authorRole}
                </p>
              </div>
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-[#ff2d2d] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Read Essay</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
