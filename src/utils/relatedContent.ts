import { servicesData, ServiceDetail } from "./servicesData";
import { areasData, AreaDetail } from "./areasData";
import { projectsData, ProjectDetail } from "./projectsData";
import { blogData, BlogArticle } from "./blogData";

/**
 * Returns related services based on a category tag.
 */
export function getRelatedServices(category: string, currentSlug?: string): ServiceDetail[] {
  return Object.values(servicesData)
    .filter((s) => s.category === category && s.slug !== currentSlug)
    .slice(0, 5);
}

/**
 * Returns related projects based on a category tag.
 */
export function getRelatedProjects(category: string, currentSlug?: string): ProjectDetail[] {
  return Object.values(projectsData)
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, 3);
}

/**
 * Returns related blog posts based on a category tag.
 */
export function getRelatedBlogs(category: string, currentSlug?: string): BlogArticle[] {
  return Object.values(blogData)
    .filter((b) => b.category === category && b.slug !== currentSlug)
    .slice(0, 3);
}

/**
 * Returns related Chennai areas (random or sliced based on area indexes)
 */
export function getRelatedAreas(currentSlug?: string): AreaDetail[] {
  return Object.values(areasData)
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 5);
}
