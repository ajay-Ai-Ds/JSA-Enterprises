import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Home, MapPin, Calendar, Wrench, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import { projectsData } from "@/utils/projectsData";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/utils/schema";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import LightboxGallery from "@/components/ui/lightbox-gallery";
import ContactForm from "@/components/forms/ContactForm";

interface PageProps {
  params: Promise<{ project: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.project];

  if (!project) {
    return {
      title: "Project Not Found | JSA Enterprises",
    };
  }

  return {
    title: `${project.name} | JSA Case Study`,
    description: project.description,
    alternates: {
      canonical: `/projects/${resolvedParams.project}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    project: slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.project];

  if (!project) {
    notFound();
  }

  // Related Projects (excluding current project)
  const relatedProjects = Object.values(projectsData)
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
    { name: project.location, item: `/projects/${project.slug}` },
  ];

  // Dynamic Article Schema
  const articleSchema = generateArticleSchema(
    project.name,
    project.description,
    project.image,
    new Date().toISOString()
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-orange flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-accent-orange">
            Projects
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold truncate max-w-[200px]">
            {project.location}
          </span>
        </nav>

        {/* Project Header Title */}
        <div className="flex flex-col gap-4 mb-10 text-left">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-bold uppercase">
            <span className="bg-accent-orange text-white text-[10px] px-3 py-1 rounded-full">
              {project.serviceName}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-accent-orange shrink-0" />
              <span>{project.location} Installation</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              {project.date === "Content Required From Client" ? (
                <span className="text-accent-orange bg-orange-50 px-2 py-0.5 rounded-sm border border-orange-100">
                  Content Required From Client
                </span>
              ) : (
                <span>{project.date}</span>
              )}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            {project.name}
          </h1>
        </div>

        {/* Split Layout: Image & Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Main Case Photo */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-200">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          {/* Overview Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-6">
              <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
                Project Overview
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>

              {/* specs table */}
              <div className="flex flex-col gap-3">
                {project.specs.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs pb-2 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">{item.label}</span>
                    <span className="font-bold text-slate-700">
                      {item.value === "Content Required From Client" ? (
                        <span className="text-accent-orange bg-orange-50 px-1.5 py-0.5 rounded-sm text-[9px] uppercase font-extrabold leading-none">
                          Client Content Required
                        </span>
                      ) : (
                        item.value
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Call support direct trigger */}
              <div className="pt-2">
                <a
                  href="tel:+917702694269"
                  className="w-full flex items-center justify-center gap-2.5 bg-accent-orange hover:bg-accent-hover text-white font-bold py-3.5 rounded-xl transition-colors text-xs shadow-xs"
                >
                  Request Similar Installation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Problem and Solution Grid (AEO / GEO styled answers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Problem */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col gap-4">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-accent-orange shrink-0" />
              <span>Safety Problem Identified</span>
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col gap-4">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success-green shrink-0" />
              <span>JSA Enterprises Solution</span>
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Material Specs & Timeline Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Materials Used */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col gap-5">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <Wrench className="w-4.5 h-4.5 text-accent-orange" />
              <span>Materials Utilized</span>
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
              {project.materialsUsed.map((mat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0"></div>
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline Process */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col gap-5">
            <h3 className="text-base font-bold text-slate-800">Precision Installation Work steps</h3>
            <div className="flex flex-col gap-4">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start text-xs sm:text-sm">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 font-bold text-slate-500 text-xs">
                    {idx + 1}
                  </div>
                  <p className="text-slate-500 leading-relaxed mt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Before & After comparison slider */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800">
              Visual Before & After Comparison
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
            />
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="mb-20">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-8 text-center">
            Project Snapshots Portfolio
          </h2>
          <LightboxGallery images={project.gallery} serviceName={project.name} />
        </div>

        {/* Testimonial reviews placeholder */}
        <div className="bg-slate-100 rounded-3xl p-8 border border-dashed border-slate-300 text-center flex flex-col items-center gap-3 mb-20 max-w-2xl mx-auto">
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Project Review</h4>
          <span className="text-xs font-extrabold text-accent-orange uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-md">
            Content Required From Client
          </span>
          <p className="text-[10px] text-slate-500 leading-relaxed">
            Verified review logs for this project will be populated as soon as the client submits logs.
          </p>
        </div>

        {/* Related projects list */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-slate-200 pt-16 mb-20">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-8">
              Other Related Installations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProjects.map((item) => (
                <div
                  key={item.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-slate-100 transition-all group flex flex-col h-full"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-slate-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-accent-orange transition-colors">
                      {item.location} - {item.serviceName}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
                      {item.description}
                    </p>
                    <Link
                      href={`/projects/${item.slug}`}
                      className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary-700 hover:text-accent-orange transition-colors group/btn pt-3 border-t border-slate-50 mt-auto"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}
