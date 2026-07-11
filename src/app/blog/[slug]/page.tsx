import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Home, Calendar, Clock, User, ArrowLeft, ArrowRight, HelpCircle, BookOpen } from "lucide-react";
import { blogData } from "@/utils/blogData";
import { getRelatedServices, getRelatedAreas, getRelatedBlogs } from "@/utils/relatedContent";
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQPageSchema } from "@/utils/schema";
import { fetchContent, fetchSiteSettings } from "@/sanity/client";
import ShareButtons from "@/components/ui/ShareButtons";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import ContactForm from "@/components/forms/ContactForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await fetchContent("blogs", resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | JSA Enterprises",
    };
  }

  return {
    title: `${post.title} | JSA Blog`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://www.jsaenterpriseschennai.com/blog/${resolvedParams.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  const posts = await fetchContent("blogs");
  return posts.map((post: any) => ({
    slug: post.slug.current || post.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await fetchContent("blogs", resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const siteSettings = await fetchSiteSettings();

  // Related contents locator
  const relatedServices = getRelatedServices(post.category);
  const relatedAreas = getRelatedAreas().slice(0, 5);
  const relatedBlogs = getRelatedBlogs(post.category, post.slug);

  // Dynamic Navigation (Previous / Next article links)
  const allPosts = Object.values(blogData);
  const currentIdx = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const nextPost = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;

  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: post.categoryLabel, item: `/blog/${post.slug}` },
  ];

  // Dynamic Schemas
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbLinks);
  const articleSchema = generateArticleSchema(
    post.title,
    post.summary,
    post.image,
    new Date(post.publishedAt).toISOString()
  );
  const faqSchema = generateFAQPageSchema(post.faqs);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-accent-orange">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold truncate max-w-[200px]">
            {post.title}
          </span>
        </nav>

        {/* Hero Title Container */}
        <div className="max-w-4xl mb-10 text-left flex flex-col gap-4">
          <span className="bg-orange-50 text-accent-orange text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block self-start border border-orange-100">
            {post.categoryLabel}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight font-sans">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-bold uppercase pt-1">
            <span className="flex items-center gap-1.5 text-slate-500">
              <User className="w-4 h-4 text-slate-400" />
              <span>{post.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{post.publishedAt}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{post.readingTime}</span>
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-96 md:h-[480px] w-full rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-200 mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
          />
        </div>

        {/* Split Content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Body Column (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-10 text-left">
            {/* Table of Contents & Body content */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-8">
              {/* Dynamic Table of Contents */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-accent-orange" />
                  <span>Table of Contents</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-primary-700 font-bold">
                  {post.contentBlocks.map((block: any, i: number) => {
                    const anchorId = `section-${i}`;
                    return (
                      <li key={i} className="hover:text-accent-orange transition-colors">
                        <a href={`#${anchorId}`}>
                          {i + 1}. {block.heading}
                        </a>
                      </li>
                    );
                  })}
                  <li className="hover:text-accent-orange transition-colors">
                    <a href="#faq-section">FAQs & Custom Answers</a>
                  </li>
                </ul>
              </div>

              {/* Introduction */}
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed border-l-4 border-accent-orange pl-4 italic">
                {post.introduction}
              </p>

              {/* Dynamic Content blocks */}
              <div className="flex flex-col gap-8">
                {post.contentBlocks.map((block: any, idx: number) => {
                  const anchorId = `section-${idx}`;
                  return (
                    <div key={idx} id={anchorId} className="flex flex-col gap-3 scroll-mt-24">
                      <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight border-b border-slate-50 pb-2">
                        {block.heading}
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                        {block.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Share links */}
              <ShareButtons title={post.title} slug={post.slug} />
            </div>

            {/* Custom local FAQs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-6 scroll-mt-24" id="faq-section">
              <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-accent-orange shrink-0" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-5">
                {post.faqs.map((faq: any, idx: number) => (
                  <div key={idx} className="pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                    <h4 className="text-sm font-bold text-slate-800 mb-1.5">{faq.question}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next Article Navigation */}
            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-8">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="flex items-center gap-3 p-4 bg-white hover:bg-orange-50 border border-slate-200 rounded-2xl hover:border-accent-orange/20 text-left group"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" />
                  <div className="flex flex-col gap-0.5 truncate">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Previous</span>
                    <span className="text-xs font-bold text-slate-700 group-hover:text-accent-orange transition-colors truncate">
                      {prevPost.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="bg-slate-100 rounded-2xl p-4 opacity-40 select-none"></div>
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="flex items-center justify-between p-4 bg-white hover:bg-orange-50 border border-slate-200 rounded-2xl hover:border-accent-orange/20 text-right group"
                >
                  <div className="flex flex-col gap-0.5 truncate text-right w-full">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Next</span>
                    <span className="text-xs font-bold text-slate-700 group-hover:text-accent-orange transition-colors truncate block">
                      {nextPost.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
                </Link>
              ) : (
                <div className="bg-slate-100 rounded-2xl p-4 opacity-40 select-none"></div>
              )}
            </div>
          </div>

          {/* Sidebar Column (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Related Services */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col gap-4">
              <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
                Related Services
              </h3>
              <div className="flex flex-col gap-2.5">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-orange-50/50 border border-slate-100 rounded-xl transition-all group"
                  >
                    <span className="text-xs font-bold text-slate-700 group-hover:text-accent-orange transition-colors truncate">
                      {service.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-accent-orange transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Areas */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col gap-4">
              <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
                Coverage Locations
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="text-[11px] font-semibold px-2.5 py-2 bg-slate-50 hover:bg-orange-50 border border-slate-200 rounded-lg text-slate-600 hover:text-accent-orange hover:border-accent-orange/30 transition-all truncate"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col gap-4">
                <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2">
                  Related Articles
                </h3>
                <div className="flex flex-col gap-3">
                  {relatedBlogs.map((blog) => (
                    <Link
                      key={blog.slug}
                      href={`/blog/${blog.slug}`}
                      className="flex flex-col gap-1 text-left p-3 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-xl transition-all group"
                    >
                      <span className="text-xs font-bold text-slate-850 group-hover:text-accent-orange transition-colors leading-snug line-clamp-2">
                        {blog.title}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">
                        {blog.publishedAt}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Signup (Controlled dynamically via CMS configurations) */}
        {siteSettings.showNewsletter && <NewsletterSignup />}

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}
