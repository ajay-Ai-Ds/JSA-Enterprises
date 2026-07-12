export interface FAQItem {
  question: string;
  answer: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  categoryName: string;
  title: string;
  description: string;
  longDescription: string;
  aiOverview: string;
  image: string; // Hero image
  supportingImages: string[]; // 4 images
  gallery: string[]; // 6 images
  beforeImage: string;
  afterImage: string;
  benefits: string[];
  specsTable: SpecItem[];
  faqs: FAQItem[];
}

// Helper to generate 12 standard, voice-search-friendly FAQs for any service to avoid writing 168 repetitive structures,
// while keeping customization for each service category.
function generateFAQsForService(serviceName: string, category: string): FAQItem[] {
  return [
    {
      question: `What is the cost of ${serviceName} installation in Chennai?`,
      answer: "Content Required From Client. Pricing is custom-calculated based on total square footage, material specification selection, height, and specific anchoring complexity. Contact our support team for a free on-site estimate.",
    },
    {
      question: `Do you provide a warranty on ${serviceName}?`,
      answer: "Content Required From Client. JSA Enterprises offers warranties on specific netting grades and stainless steel cable grills. Exact warranty terms, duration, and certificates will be shared during site inspection.",
    },
    {
      question: `How long does it take to install ${serviceName} in an apartment?`,
      answer: `Most residential ${serviceName} setups are completed within 2 to 4 hours. Our certified technicians bring all necessary drilling equipment and clean up the work area immediately after installation.`,
    },
    {
      question: `Are your materials for ${serviceName} rust-proof and weatherproof?`,
      answer: `Yes, we use copolymer nylon or UV-treated HDPE for nets, and SS316 marine-grade steel cables for grills. These materials are engineered to survive Chennai's high humidity, direct sunlight, and salty sea breezes.`,
    },
    {
      question: `Do you charge for site inspection visits and measurements in Chennai?`,
      answer: `No, our site inspection, measurements, and material sample showcases are 100% free of charge across Chennai. There is no obligation to book after the quotation is shared.`,
    },
    {
      question: `How do you anchor ${serviceName} to concrete walls?`,
      answer: "We drill precise holes using industrial hammer drills and secure expansion hooks or aluminium tracks. This anchoring setup handles high load tensions without damaging the structural strength of your walls.",
    },
    {
      question: `Is ${serviceName} safe for toddlers and small children?`,
      answer: `Absolutely. Securing balconies, windows, or shafts with ${serviceName} forms a highly durable safety barrier. It prevents accidental falls, providing peace of mind for families with active toddlers and children.`,
    },
    {
      question: `Can pets chew or tear through ${serviceName}?`,
      answer: category === "invisible-grills" 
        ? "SS316 steel wire invisible grills are completely bite-proof and scratch-proof, making them the ultimate safety solution for cats, dogs, and other active household pets."
        : "For houses with pets, we recommend our thick-gauge netting. Nylon and HDPE safety nets are highly tear-resistant, keeping pets safe from slipping through railings.",
    },
    {
      question: `Will ${serviceName} block my scenic view or light?`,
      answer: category === "invisible-grills"
        ? "No, invisible grills feature ultra-slim 2.0mm steel cables, making them virtually invisible from a short distance. You enjoy unobstructed views, light, and ventilation."
        : "No, our nets are translucent or color-matched to ensure they do not obstruct fresh breeze, natural light, or views from your balconies and windows.",
    },
    {
      question: `Do you have certified technicians to work at high floors?`,
      answer: `Yes, all JSA Enterprises field technicians are trained in safety harness usage and high-rise installation guidelines. They are fully insured and handle high-floor setups professionally.`,
    },
    {
      question: `What maintenance is required for ${serviceName}?`,
      answer: "Practically zero maintenance. You can occasionally clean the net or grill wires with a damp microfiber cloth to remove dust. Do not use acid or abrasive chemicals.",
    },
    {
      question: `How do we contact JSA Enterprises for booking?`,
      answer: "You can book a free measurement session by calling us directly at +91 77026 94269, sending a message on WhatsApp, or submitting our contact request form.",
    },
  ];
}

export const servicesData: Record<string, ServiceDetail> = {
  // Safety Nets (9 Services)
  "balcony-safety-nets": {
    slug: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Premium Balcony Safety Nets Installation in Chennai | JSA",
    description: "Secure your balconies from accidental falls with heavy-duty UV-stabilized safety netting. Fast, expert installation in Chennai.",
    longDescription: "JSA Enterprises is Chennai's trusted installer for balcony safety nets. Our safety nets are fabricated using premium high-density polyethylene (HDPE) with built-in UV stabilizers. They are engineered to endure Chennai's hot sun, heavy monsoon rains, and salty sea breezes without losing tensile strength. They form a secure barrier for high-rise apartment balconies, preventing children, pets, or household items from falling.",
    aiOverview: "JSA Balcony Safety Nets provide a heavy-duty fall barrier using UV-stabilized copolymer nylon mesh. Custom-anchored by high-rise safety experts, they prevent falls by children and pets while allowing 100% natural ventilation. Available with free site visits and measurements in Chennai.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Child Safety Protection", "Pet Balcony Safety", "UV-Stabilized HDPE Mesh", "Rustproof Steel Hooks", "Clear Ventilation Flow", "5+ Years Durability (Client Required)"],
    specsTable: [
      { label: "Material", value: "HDPE Copolymer Nylon" },
      { label: "Thickness", value: "0.8mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable (SS Anchors Rustproof)" },
      { label: "Maintenance", value: "Wash with water/microfiber wipe" },
    ],
    faqs: generateFAQsForService("Balcony Safety Nets", "safety-nets"),
  },
  "children-safety-nets": {
    slug: "children-safety-nets",
    name: "Children Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Toddler & Children Fall Protection Nets Chennai | JSA",
    description: "Secure windows, stairwells, and balconies from accidental kid falls. Heavy load shock-absorbing children safety nets.",
    longDescription: "Our children safety nets provide vital protection for families living in high-rise buildings. Designed with thick-gauge netting, tight mesh structures, and closer anchoring points, they absorb high impact forces. Perfect for securing open stairwells, terraces, balconies, and windows where kids play.",
    aiOverview: "JSA Children Safety Nets are heavy-duty protective grids designed to absorb sudden impact shocks. Woven with double-locked nodes, they secure balconies, windows, and banisters, creating a kid-proof play zone without blocking light or air.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Fall Prevention", "High Impact Shock Absorption", "Zero Sharp Edges", "Closer Anchor Spacing", "100% Breathable Mesh", "Kid-Safe Locking System"],
    specsTable: [
      { label: "Material", value: "Braided Nylon / HDPE" },
      { label: "Thickness", value: "1.5mm to 3.0mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Periodic tension check & wash" },
    ],
    faqs: generateFAQsForService("Children Safety Nets", "safety-nets"),
  },
  "pet-safety-nets": {
    slug: "pet-safety-nets",
    name: "Pet Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cat & Dog Balcony Protection Nets Chennai | JSA",
    description: "Prevent cats, dogs, and pets from falling through high-rise balcony railings. Scratch-resistant fine netting.",
    longDescription: "Keep your active pets safe. Our pet safety nets are designed with fine mesh sizes that prevent kittens or puppies from squeezing through banister slots. They use highly scratch-resistant, bite-proof materials that hold tight under impact.",
    aiOverview: "JSA Pet Safety Nets create a secure boundary around balconies and windows, preventing dogs, cats, and birds from falling or escaping. Crafted with fine, claws-safe mesh, they are highly bite-resistant and firmly anchored.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Prevents Pet Falls", "Claw & Scratch Resistant", "No Claw Snagging Mesh", "UV-Stabilized Lifespan", "Maintains Bright Views", "Custom Frame Tight Anchors"],
    specsTable: [
      { label: "Material", value: "HDPE monofilament core" },
      { label: "Thickness", value: "1.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Microfiber wipe down" },
    ],
    faqs: generateFAQsForService("Pet Safety Nets", "safety-nets"),
  },
  "pigeon-safety-nets": {
    slug: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Transparent Pigeon Exclusion Nets Chennai | JSA",
    description: "Exclude pigeons from nesting on balconies and window sills. Translucent, long-lasting bird safety netting.",
    longDescription: "Pigeon nesting creates severe hygiene and health risks. Our transparent pigeon netting blocks birds out cleanly. Woven with thin, high-strength monofilament ropes, these nets are practically invisible, maintaining your building's external view.",
    aiOverview: "JSA Pigeon Safety Nets offer a translucent, eco-friendly barrier to keep birds off balconies and AC shafts. Woven with monofilament copolymer, they prevent droppings and nesting hazards without ruining the visual layout.",
    image: "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Hygienic Clean Balcony", "Transparent Aesthetics", "No Harm to Pigeons", "Blocks AC Shaft Nesting", "Rust-Free Anchors", "Weather Resistant Mesh"],
    specsTable: [
      { label: "Material", value: "Monofilament Copolymer Nylon" },
      { label: "Thickness", value: "0.7mm to 1.2mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Vacuum or light dust wipe" },
    ],
    faqs: generateFAQsForService("Pigeon Safety Nets", "safety-nets"),
  },
  "sports-nets": {
    slug: "sports-nets",
    name: "Sports Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cricket Practice & Sports Ground Nets Chennai | JSA",
    description: "Heavy impact-resistant sports boundary netting for cricket turf, football pitches, and open grounds.",
    longDescription: "High-grade cricket, football, and multi-sport safety boundary nets. Woven with premium high-density nylon cord, these nets are designed to withstand constant ball impacts and protect nearby properties and spectators.",
    aiOverview: "JSA Sports Nets provide impact-resistant enclosing barriers for cricket pitches, terraced sports grounds, and school courts. Made of high-grade braided nylon, they absorb huge strike forces while surviving outdoor sun.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["High Ball-Impact Absorption", "UV-treated Braided Nylon", " spectator Protection", "Terrace Enclosures", "Custom Height Options", "Sturdy Structural Steel Framework"],
    specsTable: [
      { label: "Material", value: "Braided Nylon Cord" },
      { label: "Thickness", value: "2.0mm to 4.0mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Inspect boundary knots periodically" },
    ],
    faqs: generateFAQsForService("Sports Nets", "safety-nets"),
  },
  "construction-safety-nets": {
    slug: "construction-safety-nets",
    name: "Construction Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Industrial Fall & Debris Containment Nets Chennai | JSA",
    description: "Certified construction safety netting to secure site workers and catch falling debris on building sites.",
    longDescription: "Ensure security compliance at your building sites. Our industrial-grade construction safety nets are fabricated to catch falling tools, dust, cement chunks, and support labor falls. Tested under rigorous load tests.",
    aiOverview: "JSA Construction Safety Nets are heavy-duty industrial mesh borders designed to prevent work-site falls. Conforming to site safety codes, they act as active protection layers on high-rise constructions.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Worker Fall Protection", "Debris & Tool Catching", "Meets ISO Safety Norms", "Dual Border Anchor Lines", "Highly Durable Materials", "Large Site Coverage Capacity"],
    specsTable: [
      { label: "Material", value: "High-Tensile Polypropylene (PP)" },
      { label: "Thickness", value: "3.0mm to 6.0mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "Medium to High" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Inspect for cuts and loading wear" },
    ],
    faqs: generateFAQsForService("Construction Safety Nets", "safety-nets"),
  },
  "duct-area-safety-nets": {
    slug: "duct-area-safety-nets",
    name: "Duct Area Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Apartment Duct & Open Ventilation Shaft Nets Chennai | JSA",
    description: "Seal open building ducts to block pigeons, nesting, and trash drops. Custom-sized safety netting.",
    longDescription: "Central ventilation shafts in apartments easily accumulate garbage and harbor pigeons. We seal these open vertical shafts with premium-quality safety nets, ensuring zero pest intrusion while keeping shafts breathable.",
    aiOverview: "JSA Duct Area Safety Nets prevent pigeons and falling household waste from building up in open building shafts. Anchored across multi-story ducts, they optimize hygiene while allowing ventilation.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Blocks Pigeon Nesting", "Prevents Dropped Trash", "Permits Light & Airflow", "Rustproof Steel Eyelets", "Insured High-Rise Team", "UV-Stabilized Durability"],
    specsTable: [
      { label: "Material", value: "HDPE monofilament mesh" },
      { label: "Thickness", value: "1.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Clear debris if piled on mesh" },
    ],
    faqs: generateFAQsForService("Duct Area Safety Nets", "safety-nets"),
  },
  "monkey-safety-nets": {
    slug: "monkey-safety-nets",
    name: "Monkey Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Thick Steel-Reinforced Monkey Exclusion Nets Chennai | JSA",
    description: "Prevent wild monkeys from breaching balconies, kitchens, and terraces. Heavy-gauge reinforced safety nets.",
    longDescription: "Monkeys present a significant problem in specific Chennai residential zones. Normal netting can be torn or chewed by them. Our monkey safety netting uses thick-gauge, steel-wire reinforced nylon to secure entryways.",
    aiOverview: "JSA Monkey Safety Nets provide animal exclusion using steel-core wire reinforced meshes. Strongly anchored to withstand pulling and chewing forces, they keep wild monkeys out of balconies.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Bite & Chew Proof Wires", "Strong Heavy-duty Anchoring", "Prevents Monkey Intrusions", "Restricts Property Damage", "Permits Light Ventilation", "Secure Lockdown Frame"],
    specsTable: [
      { label: "Material", value: "HDPE Nylon with Steel-Wire Cores" },
      { label: "Thickness", value: "2.0mm to 3.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Steel core rust-protected by Nylon sheath" },
      { label: "Maintenance", value: "Wipe clean" },
    ],
    faqs: generateFAQsForService("Monkey Safety Nets", "safety-nets"),
  },
  "cricket-practice-nets": {
    slug: "cricket-practice-nets",
    name: "Cricket Practice Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cricket Practice Nets Installation in Chennai | JSA",
    description: "Professional cricket practice nets for indoor & outdoor setups, academies, schools, and residences in Chennai.",
    longDescription: "JSA Enterprises offers professional cricket practice netting solutions across Chennai. We install durable, impact-absorbing nets for sports academies, educational clubs, corporate turfs, and residential terraces. Our cricket nets are made of high-quality UV-stabilized nylon ropes and braided twine that absorb strong ball strikes without tearing.",
    aiOverview: "JSA Cricket Practice Nets offer heavy-impact ball containment using UV-treated braided nylon mesh. Engineered for commercial sports turfs and home terraces, they provide durable practice zones in Chennai.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Absorbs High Ball Impact", "UV-Stabilized Weatherproof Ropes", "Spectator & Property Protection", "Indoor & Outdoor Custom Frames", "Durable Heavy-Duty Nylon Twine", "Free Site Measurement Visits"],
    specsTable: [
      { label: "Material", value: "Braided Nylon Twine / HDPE" },
      { label: "Thickness", value: "2.5mm to 4.0mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "SS eyelets & galvanized frame rustproof" },
      { label: "Maintenance", value: "Inspect frame ropes periodically" },
    ],
    faqs: generateFAQsForService("Cricket Practice Nets", "safety-nets"),
  },

  // Invisible Grills (3 Services)
  "balcony-invisible-grills": {
    slug: "balcony-invisible-grills",
    name: "Balcony Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Balcony Invisible Grills Installation Chennai | JSA",
    description: "Rustproof marine-grade SS316 cable grills for balcony security. Enjoy unobstructed panoramic views.",
    longDescription: "Elevate your high-rise balcony security. Our invisible grills utilize pre-tensioned, marine-grade SS316 stainless steel wires wrapped in a clear nylon protective casing. They offer absolute security for children and pets without spoiling the scenic view of your balcony.",
    aiOverview: "JSA Balcony Invisible Grills feature high-strength SS316 steel wires wrapped in protective nylon coatings. They replace heavy iron grids to secure balconies for children and pets while preserving unobstructed view layouts.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["99% Unobstructed Views", "SS316 Rustproof Steel Wires", "Anti-scratch Nylon Sheath", "Toddler & Pet Safety", "Easy Fire Escape Option", "Built-in Burglar Alarm Hook (Optional)"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Tension Limit)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (Nylon UV-protected sheath)" },
      { label: "Rust Resistance", value: "100% Rustproof (Marine grade)" },
      { label: "Maintenance", value: "Wipe with damp microfiber cloth" },
    ],
    faqs: generateFAQsForService("Balcony Invisible Grills", "invisible-grills"),
  },
  "window-invisible-grills": {
    slug: "window-invisible-grills",
    name: "Window Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Aesthetic Window Invisible Grills Chennai | JSA",
    description: "Replace dark iron bars with modern window invisible steel grills. Admire unobstructed breezes and light.",
    longDescription: "An elegant alternative to traditional iron safety bars. Window invisible grills use vertical or horizontal SS316 steel wires. They offer security from falls and intruders without looking bulky or obstructing ventilation.",
    aiOverview: "JSA Window Invisible Grills offer safety without dark prison-like bars. Utilizing thin-profile SS316 wires clamped in aluminum anchor tracks, they optimize lighting and air circulation.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Minimalist Appearance", "Allows Maximum Ventilation", "Zero Paint Peeling or Corrosion", "Safe Fire Escape Exit", "Stainless Steel SS316 Core", "Easy Glass Cleaning Access"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (Coated Sheath)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Dust with micro cloth" },
    ],
    faqs: generateFAQsForService("Window Invisible Grills", "invisible-grills"),
  },
  "staircase-invisible-grills": {
    slug: "staircase-invisible-grills",
    name: "Staircase Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Interior Staircase Handrail Invisible Grills Chennai | JSA",
    description: "Secure open banisters and stair handrails with vertical safety steel cables. Sleek indoor security.",
    longDescription: "Stairwells in open-concept duplex villas, malls, and schools present significant height fall hazards. Our vertical invisible grills close up these open spaces cleanly without compromising modern interior designs.",
    aiOverview: "JSA Staircase Invisible Grills secure stair railings using sleek vertical SS316 wires. Providing high tension safety for children, they blend seamlessly into premium modern architectural interiors.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Duplex Home Safety", "Aesthetic Vertical Alignment", "Heavy-Duty Cable Tensioning", "Rust-Free Indoor Fittings", "Protects Toddlers & Pets", "Dust-Resistant Coatings"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (Indoor UV protection)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Damp cloth wipe" },
    ],
    faqs: generateFAQsForService("Staircase Invisible Grills", "invisible-grills"),
  },

  // Cloth Hangers (2 Services)
  "ceiling-cloth-hangers": {
    slug: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Pulley-operated Ceiling Cloth drying Hangers Chennai | JSA",
    description: "Install dual-pipe pulley ceiling cloth drying hangers. Premium space optimization for balconies.",
    longDescription: "Dry clothes effortlessly without cluttering your balcony floor space. Our ceiling-mounted pulley cloth drying systems use a heavy-duty nylon pulley cord and dual stainless steel pipes, allowing you to lower and raise laundry to ceiling height in seconds.",
    aiOverview: "JSA Ceiling Cloth Hangers maximize balcony space using a dual-pipe pulley system. Crafted with rust-free stainless steel rods and braided nylon ropes, they lift wet laundry out of sight with ease.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Saves 100% Floor Space", "Independent Dual Pulley Rails", "Premium Stainless Steel Pipes", "Heavy Load Pulley Gears", "Clean Ceiling Aesthetic", "Easy Height Adjustability"],
    specsTable: [
      { label: "Rod Material", value: "SS304 / SS202 Stainless Steel" },
      { label: "Cord Thickness", value: "3.5mm nylon braided rope" },
      { label: "Weight Capacity", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "Not Applicable" },
      { label: "Rust Resistance", value: "100% Rust-proof rods" },
      { label: "Maintenance", value: "Keep nylon pulleys lubricated" },
    ],
    faqs: generateFAQsForService("Ceiling Cloth Hangers", "cloth-hangers"),
  },
  "balcony-cloth-hangers": {
    slug: "balcony-cloth-hangers",
    name: "Balcony Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Wall-Mounted & Railing Balcony drying Hangers Chennai | JSA",
    description: "Foldable wall-mounted drying systems and railing hooks for apartment balconies. Rustproof finishes.",
    longDescription: "Maximize your balcony utilities. Our wall-mounted balcony hangers fold flat against the wall when not in use. Engineered with premium anti-corrosive coatings to withstand maritime humidity.",
    aiOverview: "JSA Balcony Cloth Hangers provide space-efficient drying using wall-mounted accordion grids or railing hooks. Built with rustproof coated steel, they collapse flat to keep balcony spaces clean.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    ],
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Collapses Flat When Empty", "Heavy-Duty Wall Anchors", "Anti-Corrosion Coated", "Ideal for Low Ceilings", "Railing Hook Custom Fit", "Durable Heavy Weight Support"],
    specsTable: [
      { label: "Material", value: "Epoxy/Chrome Coated Steel" },
      { label: "Mechanism", value: "Accordion Folding / Rigid Frame" },
      { label: "Weight Capacity", value: "Content Required From Client" },
      { label: "Durability", value: "Content Required From Client" },
      { label: "UV Resistance", value: "High (Epoxy anti-UV coating)" },
      { label: "Rust Resistance", value: "High (Rust-resistant coating)" },
      { label: "Maintenance", value: "Clean hinge rivets periodically" },
    ],
    faqs: generateFAQsForService("Balcony Cloth Hangers", "cloth-hangers"),
  },
};

// Dynamically override all generic placeholders with JSA's real, client-uploaded safety installation photos
const imageOverrides: Record<string, string> = {
  "balcony-safety-nets": "/images/hero/balconysafetynet.jpg",
  "children-safety-nets": "/images/hero/childrensafetynet.webp",
  "pet-safety-nets": "/images/hero/pet.jpg",
  "pigeon-safety-nets": "/images/hero/pigeonnet.jpg",
  "sports-nets": "/images/hero/sports-safety.webp",
  "cricket-practice-nets": "/images/hero/cricketpracticenet.jpg",
  "construction-safety-nets": "/images/hero/constructionnet.webp",
  "duct-area-safety-nets": "/images/hero/ductarea.webp",
  "monkey-safety-nets": "/images/hero/monkeysafetynet.webp",
  "balcony-invisible-grills": "/images/hero/balconygrill.jpg",
  "window-invisible-grills": "/images/hero/windowgrill.webp",
  "staircase-invisible-grills": "/images/hero/childrensafetygrill.jpg",
  "ceiling-cloth-hangers": "/images/hero/cloth-hanger1.jpg",
  "balcony-cloth-hangers": "/images/hero/cloth-hanger2.webp",
};

const categoryImages = {
  "safety-nets": [
    "/images/hero/safetynets.webp",
    "/images/hero/safetynets2.jpg",
    "/images/hero/team-net-install.png",
    "/images/hero/childrensafetynet.webp",
    "/images/hero/pigeonnet.jpg",
    "/images/hero/balconysafetynet.jpg"
  ],
  "invisible-grills": [
    "/images/hero/customgrill.jpg",
    "/images/hero/invisible-grill.png",
    "/images/hero/team-grill-install.png",
    "/images/hero/balconygrill.jpg",
    "/images/hero/windowgrill.webp",
    "/images/hero/childrensafetygrill.jpg"
  ],
  "cloth-hangers": [
    "/images/hero/cloth-hanger.png",
    "/images/hero/team-hanger-install.png",
    "/images/hero/cloth-hanger1.jpg",
    "/images/hero/cloth-hanger2.webp",
    "/images/hero/cloth-hanger.png",
    "/images/hero/cloth-hanger1.jpg"
  ]
};

Object.keys(servicesData).forEach((slug) => {
  const service = servicesData[slug];
  const overrideImage = imageOverrides[slug];
  
  if (overrideImage) {
    service.image = overrideImage;
    service.afterImage = overrideImage;
    service.beforeImage = overrideImage;
  }
  
  const cats = categoryImages[service.category as keyof typeof categoryImages] || [];
  const galleryImgs = overrideImage ? [overrideImage, ...cats.filter(img => img !== overrideImage)] : cats;
  
  while(galleryImgs.length < 6) {
    galleryImgs.push(cats[0] || overrideImage || "");
  }
  
  service.supportingImages = galleryImgs.slice(0, 4);
  service.gallery = galleryImgs.slice(0, 6);
});
