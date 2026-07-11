import { SpecItem } from "./servicesData";

export interface ProjectDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  service: string;
  serviceName: string;
  location: string;
  locationSlug: string;
  date: string; // Will display Content Required From Client
  description: string;
  problem: string;
  solution: string;
  materialsUsed: string[];
  process: string[];
  image: string;
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  specs: SpecItem[];
}

export const projectsData: Record<string, ProjectDetail> = {
  "balcony-safety-nets-adyar": {
    slug: "balcony-safety-nets-adyar",
    name: "Balcony Safety Nets Installation in Adyar Residential Complex",
    category: "safety-nets",
    service: "balcony-safety-nets",
    serviceName: "Balcony Safety Nets",
    location: "Adyar",
    locationSlug: "adyar",
    date: "Content Required From Client",
    description: "Installation of heavy-duty double-locked HDPE safety netting on the 7th and 8th floor balconies of a luxury apartment complex in Adyar.",
    problem: "The client resided on a high-floor apartment in Adyar. Due to open balcony railings, there was an active hazard for children and domestic cats. Pigeons were also nesting on the AC ledge, causing noise and hygiene issues.",
    solution: "JSA Enterprises installed a custom-fit, high-tensile HDPE safety netting barrier across the entire balcony frame. The net was anchored securely into concrete ceilings and walls using stainless steel expansion bolts and border ropes.",
    materialsUsed: [
      "100% UV-Stabilized HDPE Nylon netting",
      "0.8mm mesh border ropes",
      "SS304 wall anchoring brackets",
    ],
    process: [
      "Conducted a free site inspection and measurements of balcony boundaries.",
      "Prepared concrete anchor points and drilled hooks at regular intervals.",
      "Tensioned and tied the HDPE mesh across border ropes.",
      "Conducted load testing on the netting anchors to ensure child-safe tension.",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Material Used", value: "HDPE Monofilament" },
      { label: "Mesh Diameter", value: "35mm x 35mm" },
      { label: "Tensile Strength", value: "Content Required From Client" },
      { label: "Project Warranty", value: "Content Required From Client" },
    ],
  },
  "invisible-grills-omr": {
    slug: "invisible-grills-omr",
    name: "Window and Balcony Invisible Grills in OMR High-Rise Apartment",
    category: "invisible-grills",
    service: "balcony-invisible-grills",
    serviceName: "Balcony Invisible Grills",
    location: "OMR (Old Mahabalipuram Rd)",
    locationSlug: "omr",
    date: "Content Required From Client",
    description: "Elegant invisible steel wire grill installation along balcony railings of a high-rise IT corridor apartment on OMR.",
    problem: "The resident of a 14th-floor OMR apartment wanted to secure their balcony for pet safety. Traditional heavy iron grills blocked the view and clashed with the modern glass facade of the building.",
    solution: "JSA installed SS316 marine-grade invisible steel wire grills spaced 3 inches apart. The wires are wrapped in a clear nylon sleeve to prevent scratches, clamped firmly in heavy aluminium base tracking.",
    materialsUsed: [
      "SS316 Stainless Steel wire core",
      "High-elastic Nylon protective sheath",
      "Heavy-duty Aluminium track clamps",
    ],
    process: [
      "Mapped and measured the balcony railing profile.",
      "Mounted the heavy aluminium tracking rails at the ceiling and floor base.",
      "Threaded and tensioned the SS316 cables through tracking guides.",
      "Locked the cables at high tension using internal copper sleeves.",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Grill Core", value: "316 Stainless Steel" },
      { label: "Spacing", value: "3 inches (75mm)" },
      { label: "Cable Diameter", value: "2.5mm" },
      { label: "Strength Rating", value: "Content Required From Client" },
    ],
  },
  "ceiling-hangers-velachery": {
    slug: "ceiling-hangers-velachery",
    name: "Ceiling-Mounted Pulley Cloth Hanger Setup in Velachery Flat",
    category: "cloth-hangers",
    service: "ceiling-cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    location: "Velachery",
    locationSlug: "velachery",
    date: "Content Required From Client",
    description: "Installation of a 6-pipe dual-rope pulley ceiling drying hanger in a compact utility balcony of a Velachery residence.",
    problem: "The resident faced severe drying space constraints. Standard metal floor racks blocked the utility balcony, restricting access to the washing machine and blocking ventilation.",
    solution: "JSA installed a premium ceiling-mounted pulley cloth drying system with 6 rustproof stainless steel pipes, allowing the resident to lift damp clothes easily to ceiling height.",
    materialsUsed: [
      "SS304 rustproof stainless steel rods",
      "Braided high-strength nylon ropes",
      "Dual rope pulley lockers & rollers",
    ],
    process: [
      "Inspected ceiling structure to confirm secure anchoring spots.",
      "Drilled and mounted pulley pulleys into concrete ceiling.",
      "Threaded the braided nylon cords and locked SS304 rods in place.",
      "Tested vertical lift weight limit (up to 15kg per rod).",
    ],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Rod Count", value: "6 Pipes" },
      { label: "Rod Length", value: "6 feet (SS304)" },
      { label: "Rope material", value: "Braided Nylon cord" },
      { label: "Warranty", value: "Content Required From Client" },
    ],
  },
};

// Dynamically override all generic project photo placeholders with JSA's real, client-uploaded safety installation photos
Object.keys(projectsData).forEach((slug) => {
  const project = projectsData[slug];
  if (project.category === "safety-nets") {
    project.image = "/images/hero/balconysafetynet.jpg";
    project.afterImage = "/images/hero/balconysafetynet.jpg";
  } else if (project.category === "invisible-grills") {
    project.image = "/images/hero/balconygrill.jpg";
    project.afterImage = "/images/hero/balconygrill.jpg";
  } else if (project.category === "cloth-hangers") {
    project.image = "/images/hero/cloth-hanger1.jpg";
    project.afterImage = "/images/hero/cloth-hanger1.jpg";
  }
});
