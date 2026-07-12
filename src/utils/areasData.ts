export interface AreaDetail {
  slug: string;
  name: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  nearbySlugs: string[];
}

// Data details representing key unique features of each neighborhood to construct natural text
const localTraits: Record<string, { desc: string; housingType: string; localizedDetail: string }> = {
  "anna-nagar": {
    desc: "Anna Nagar is a premium, highly planned residential zone in Chennai known for its leafy avenues and upscale multi-story apartments.",
    housingType: "premium residential apartments and low-rise blocks",
    localizedDetail: "With many active families and young children playing around open balconies, child-safe netting is a top local priority.",
  },
  "adyar": {
    desc: "Adyar is an affluent residential neighborhood located close to the coast, featuring high-density housing blocks and villas.",
    housingType: "modern high-rise condominiums and coastal housing blocks",
    localizedDetail: "Close proximity to the coast means safety net installations here must feature high resistance to damp salty sea breezes.",
  },
  "velachery": {
    desc: "Velachery is a major commercial and residential hub in South Chennai, witnessing massive apartment growth over the last decade.",
    housingType: "densely packed multi-story residential blocks and flats",
    localizedDetail: "Due to dense urban nesting grounds, balconies here are frequently visited by pigeons, creating immediate bird exclusions needs.",
  },
  "tambaram": {
    desc: "Tambaram is a major transit gate and residential zone, witnessing rapid real estate expansion with newly built family complexes.",
    housingType: "modern residential flats and commercial shop structures",
    localizedDetail: "Newly constructed flats here require early child and pet balcony protection planning before move-ins.",
  },
  "porur": {
    desc: "Porur is an active IT and manufacturing hub in Chennai, seeing high residential demand from professionals in high-rise buildings.",
    housingType: "high-rise IT professional apartments and family blocks",
    localizedDetail: "Many residents own active pets, necessitating heavy-gauge scratch-resistant pet safety nets along balcony rails.",
  },
  "omr": {
    desc: "OMR is Chennai's primary IT corridor, lined with massive high-rise apartment townships going up to 30 stories high.",
    housingType: "premium high-rise gated community townships",
    localizedDetail: "High-floor wind pressures and children playing on high balconies make high-tensile safety netting and invisible grills crucial.",
  },
  "ecr": {
    desc: "ECR is a scenic coastal highway and luxury residential belt, lined with premium sea-view bungalows and apartments.",
    housingType: "coastal view apartments and luxury beach villas",
    localizedDetail: "Severe exposure to salty sea winds means that JSA's SS316 marine-grade invisible grills are the only rustproof solution here.",
  },
  "sholinganallur": {
    desc: "Sholinganallur is a crucial IT node along OMR, housing major tech hubs and massive residential complexes.",
    housingType: "massive IT professional gated communities and flats",
    localizedDetail: "With tall apartment structures, installing fall protection netting is a primary check for resident safety committees.",
  },
  "perungudi": {
    desc: "Perungudi is an IT-centric suburb near the Pallikaranai marshland, blending tech parks with residential complexes.",
    housingType: "modern residential townships and multi-story blocks",
    localizedDetail: "Pigeon populations near the wetlands are highly active, requiring heavy-duty monofilament netting in open ducts.",
  },
  "pallikaranai": {
    desc: "Pallikaranai is a rapidly developing residential suburb, located adjacent to the marshlands in South Chennai.",
    housingType: "newly constructed mid-rise and high-rise apartments",
    localizedDetail: "The nearby wetlands increase local bird activities, making pigeon-exclusion nets a necessity for balcony hygiene.",
  },
  "medavakkam": {
    desc: "Medavakkam is a fast-growing residential hotspot in Chennai, housing thousands of IT professionals in newly built apartments.",
    housingType: "new multi-family apartments and mid-rise complexes",
    localizedDetail: "Open vertical duct spaces in these developments attract birds, making JSA duct safety net covers a popular local setup.",
  },
  "mylapore": {
    desc: "Mylapore is a historic residential and cultural heart of Chennai, characterized by traditional houses and dense modern flats.",
    housingType: "traditional flats and close-quarter residential blocks",
    localizedDetail: "Compact apartment designs in this dense area make space-saving ceiling cloth hangers a highly requested installation.",
  },
  "t-nagar": {
    desc: "T. Nagar is Chennai's primary commercial shopping hub, surrounded by busy residential streets and dense housing.",
    housingType: "congested residential apartments and commercial structures",
    localizedDetail: "Close proximity to commercial buildings increases bird nesting on open windows, requiring window netting setup.",
  },
  "vadapalani": {
    desc: "Vadapalani is a bustling residential and commercial zone in Chennai, known for shopping centers and apartment complexes.",
    housingType: "busy residential flats and multi-story buildings",
    localizedDetail: "Families with young children here request active balcony safety checks to prevent accidents on open balconies.",
  },
  "ambattur": {
    desc: "Ambattur is a major industrial hub in Chennai, featuring residential layouts built around factories and IT complexes.",
    housingType: "industrial warehouse layouts and family apartments",
    localizedDetail: "Large warehouses here utilize JSA's heavy-duty industrial fall containment nets to meet industrial safety norms.",
  },
  "avadi": {
    desc: "Avadi is a developing residential suburb in West Chennai, known for military establishments and housing layouts.",
    housingType: "budget apartments and family housing complexes",
    localizedDetail: "Affordable and fast safety net setups are popular among homeowners securing balconies for peace of mind.",
  },
  "kolathur": {
    desc: "Kolathur is a dense residential neighborhood in North Chennai, witnessing rapid mid-rise apartment developments.",
    housingType: "mid-rise family apartments and residential streets",
    localizedDetail: "Families here install balcony safety nets to protect children and pets from accidental railing slips.",
  },
  "mogappair": {
    desc: "Mogappair is a highly structured residential zone in Chennai, housing thousands of families in apartment blocks.",
    housingType: "planned residential complexes and low-rise flats",
    localizedDetail: "Clean, tensioned balcony grids are favored by local residents to exclude nesting pigeons without blocking air.",
  },
  "nungambakkam": {
    desc: "Nungambakkam is a premium, commercialized residential district in Chennai, featuring luxury apartment blocks.",
    housingType: "premium luxury apartments and corporate buildings",
    localizedDetail: "To secure windows and balconies cleanly, invisible grills are selected to match the premium architectural aesthetics.",
  },
  "guindy": {
    desc: "Guindy is a major commercial node in Chennai, hosting IT parks, hotels, and upscale apartments.",
    housingType: "commercial complexes and premium residential towers",
    localizedDetail: "High-rise apartments require professional safety netting setups to safeguard high window frames.",
  },
  "alandur": {
    desc: "Alandur is a residential zone in South Chennai, close to Guindy, housing close-knit residential streets.",
    housingType: "mid-rise flats and residential layouts",
    localizedDetail: "Ceiling-mounted pulley cloth hangers are frequently installed here to optimize compact utility balcony layouts.",
  },
  "chromepet": {
    desc: "Chromepet is a bustling residential suburb in Chennai, housing student populations and families alike.",
    housingType: "multi-story student hostels and family apartments",
    localizedDetail: "Balcony safety nets and window pigeon nets are key installations to maintain hostel and flat hygiene.",
  },
  "pallavaram": {
    desc: "Pallavaram is a developing residential node in South Chennai, witnessing substantial apartment real estate growth.",
    housingType: "newly constructed apartment complexes and flats",
    localizedDetail: "Installing balcony fall-prevention netting is a primary checklist item for new property owners in this area.",
  },
  "thoraipakkam": {
    desc: "Thoraipakkam is a prominent IT hub along OMR, housing thousands of tech workers in multi-story apartments.",
    housingType: "modern multi-story apartments and tech-worker flats",
    localizedDetail: "Active pet owners here require bite-proof cat and dog safety netting along balcony rail gaps.",
  },
  "siruseri": {
    desc: "Siruseri is the southern IT gateway of Chennai, housing the massive SIPCOT IT Park and vast residential towers.",
    housingType: "ultra high-rise gated township towers",
    localizedDetail: "Strong winds at high-rise levels make reinforced tensioned netting and invisible grills a safety must-have.",
  },
  "navalur": {
    desc: "Navalur is an active residential suburb on OMR, surrounded by shopping malls and high-rise apartments.",
    housingType: "high-rise residential blocks and commercial complexes",
    localizedDetail: "Balcony protection nets are commonly requested here by families looking to secure high-floor balconies.",
  },
  "karapakkam": {
    desc: "Karapakkam is a residential suburb along OMR, close to major software parks and IT flats.",
    housingType: "modern tech-worker flats and residential layouts",
    localizedDetail: "Sealing balcony ducts and ventilation shafts helps local flats combat pigeon nesting issues.",
  },
  "injambakkam": {
    desc: "Injambakkam is a coastal residential locality along ECR, featuring sea-facing villas and premium apartments.",
    housingType: "coastal apartments and premium sea-facing villas",
    localizedDetail: "High exposure to coastal humidity requires marine-grade SS316 invisible grills to avoid rust issues.",
  },
  "besant-nagar": {
    desc: "Besant Nagar is an upscale beachside residential neighborhood, featuring clean parks and premium flats.",
    housingType: "premium coastal flats and seaside residences",
    localizedDetail: "Aesthetic invisible grills are preferred by beachside residents to retain sea views cleanly without rusting.",
  },
  "madipakkam": {
    desc: "Madipakkam is a dense residential hub in South Chennai, populated by families and professionals in apartment blocks.",
    housingType: "dense residential apartments and family layouts",
    localizedDetail: "Balcony safety nets are standard requirements here to safeguard children from railing slips.",
  },
  "kodambakkam": {
    desc: "Kodambakkam is a thriving residential and commercial neighborhood in Chennai, famous as the heart of the Tamil film industry.",
    housingType: "mix of traditional houses and modern multi-story apartments",
    localizedDetail: "With bustling streets and closely packed apartments, balcony safety nets are crucial for families with children.",
  },
  "k-k-nagar": {
    desc: "K.K. Nagar is a well-planned residential neighborhood with wide roads, parks, and numerous apartment complexes.",
    housingType: "planned residential complexes and multi-family apartments",
    localizedDetail: "Large trees and parks attract birds, making pigeon exclusion nets a popular choice for balconies and windows.",
  },
  "ashok-nagar": {
    desc: "Ashok Nagar is a central residential hub in Chennai known for its excellent connectivity and established housing layouts.",
    housingType: "established family apartments and residential streets",
    localizedDetail: "Many families opt for invisible grills to maintain unobstructed views of the tree-lined avenues while ensuring safety.",
  },
  "saidapet": {
    desc: "Saidapet is one of Chennai's oldest residential areas, featuring a blend of traditional markets and new apartment buildings.",
    housingType: "dense mix of traditional housing and new residential flats",
    localizedDetail: "Space-saving ceiling cloth hangers are highly requested in these compact residential layouts.",
  },
  "thiruvanmiyur": {
    desc: "Thiruvanmiyur is a coastal residential neighborhood in South Chennai, offering premium housing near the beach.",
    housingType: "premium coastal apartments and residential layouts",
    localizedDetail: "Exposure to sea breezes means SS316 marine-grade invisible grills are essential to prevent rust.",
  },
};

// Master list of 30 Chennai areas
export const areasList = Object.keys(localTraits);

// Dynamically generate the full data dictionary for 30 areas
export const areasData: Record<string, AreaDetail> = areasList.reduce((acc, slug) => {
  const trait = localTraits[slug];
  const areaName = slug
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Generate 5 nearby areas dynamically by slicing the master list
  const currentIdx = areasList.indexOf(slug);
  const nearbySlugs = [
    areasList[(currentIdx + 1) % areasList.length],
    areasList[(currentIdx + 2) % areasList.length],
    areasList[(currentIdx + 3) % areasList.length],
    areasList[(currentIdx + 4) % areasList.length],
    areasList[(currentIdx + 5) % areasList.length],
  ];

  acc[slug] = {
    slug,
    name: areaName,
    overview: `${trait.desc} As more families relocate to ${areaName} for its excellent infrastructure and proximity to work hubs, apartment living has become the standard. JSA Enterprises provides premium safety netting and invisible grill solutions in ${areaName} to ensure safe spaces.`,
    apartmentLiving: `Living in modern high-rise apartments in ${areaName} offers convenience, but open balconies and windows pose safety risks. Balconies constructed with low handrail heights represent potential hazards for active children and pets. JSA Enterprises installs custom-fit protective netting to secure these spaces.`,
    balconySafety: `Accidental balcony slips are a major concern. Our child safety nets and bite-resistant pet safety nets seal open balcony gaps in ${areaName} homes. ${trait.localizedDetail}`,
    birdProblem: `Pigeons and other urban birds nesting in open ducts and window ledges present severe health risks. In ${areaName}, our transparent monofilament bird nets block pigeons out from duct shafts and windows, maintaining balcony cleanliness and hygiene.`,
    weatherDetails: `Chennai's hot weather, heavy monsoons, and high humidity require robust materials. For ${areaName} homes, JSA installs UV-treated netting and rustproof SS316 marine-grade invisible grills that withstand the local climate without degrading.`,
    nearbySlugs,
  };

  return acc;
}, {} as Record<string, AreaDetail>);
