import type { Service, ServiceSlug } from "@/types";

/**
 * Service content for the overview page and dynamic detail pages.
 * Copy is written to be realistic without making unsupported claims
 * (no turnaround guarantees, pricing promises, or credentials).
 */
export const services: Service[] = [
  {
    slug: "custom-signs",
    name: "Custom Signs",
    shortName: "Signs",
    icon: "signpost",
    tagline: "Storefront signage, interior signs, and site signage built to be seen.",
    summary:
      "Storefront signage, lobby signs, and site signage, from design through installation.",
    overview: [
      "Your sign is usually the first thing a customer sees. We design and produce signage that reads clearly from the street, holds up outdoors, and matches the rest of your brand.",
      "Every sign project starts with a conversation about your location, your budget, and what the sign has to do. From there we handle design, proofs, production, and installation scheduling so you have one point of contact for the whole job.",
    ],
    heroImage: "/images/services/custom-signs.svg",
    heroImageAlt: "Placeholder for a photo of a storefront sign installation",
    projectNoun: "sign",
    useCases: [
      "New storefront or building signage",
      "Rebrands that need existing signage replaced",
      "Lobby and reception signs",
      "Wayfinding and door signage",
      "Site and yard signs",
      "Window graphics and hours-of-operation lettering",
    ],
    options: [
      {
        name: "Storefront signage",
        description:
          "Exterior building signs sized and positioned for visibility from the road.",
      },
      {
        name: "Dimensional letters and logos",
        description:
          "Raised lettering and logo marks for storefronts and interior walls.",
      },
      {
        name: "Interior and lobby signs",
        description:
          "Reception signs, wall graphics, and directional signage for your space.",
      },
      {
        name: "Window and door graphics",
        description:
          "Cut vinyl lettering, frosted films, and printed window displays.",
      },
      {
        name: "Yard and site signs",
        description:
          "Post-and-panel, real estate, and jobsite signage for short or long-term use.",
      },
    ],
    faqs: [
      {
        question: "Do you handle permits and landlord approvals?",
        answer:
          "Requirements vary by property and municipality. Tell us where the sign is going and we will walk through what approvals apply and what the process looks like for your location.",
      },
      {
        question: "Can you install the sign, or just make it?",
        answer:
          "We quote projects through installation. If your project needs a site survey first, we schedule that as part of the process.",
      },
      {
        question: "What if I do not have a logo or artwork yet?",
        answer:
          "Design is part of what we do. We can create sign artwork from scratch or clean up existing files so they are production ready.",
      },
      {
        question: "How long does a sign project take?",
        answer:
          "It depends on the sign type, materials, and any approvals involved. When we quote your project we confirm a realistic schedule before anything goes into production.",
      },
    ],
    relatedProjects: ["storefront-signage-local-business", "event-banners-directional-signage"],
  },
  {
    slug: "screen-printing-apparel",
    name: "Screen Printing & Apparel",
    shortName: "Screen Printing",
    icon: "shirt",
    tagline: "Branded shirts and uniforms your team will actually want to wear.",
    summary:
      "Screen-printed tees, uniforms, and crew apparel printed to match your brand.",
    overview: [
      "Work shirts, event tees, uniforms, and merch. Screen printing is the workhorse of branded apparel: durable prints, consistent color, and pricing that works at quantity.",
      "We help you pick garments that fit your budget and your crew, dial in artwork and placement, and proof everything before it hits the press.",
    ],
    heroImage: "/images/services/screen-printing-apparel.svg",
    heroImageAlt: "Placeholder for a photo of the screen printing press",
    projectNoun: "apparel",
    useCases: [
      "Crew and uniform shirts for service businesses",
      "Event and fundraiser tees",
      "Company merch and giveaways",
      "School spirit wear and team shirts",
      "Retail-ready branded apparel",
    ],
    options: [
      {
        name: "T-shirts and tees",
        description:
          "Standard, premium, and performance tees across a range of brands and price points.",
      },
      {
        name: "Work shirts and uniforms",
        description: "Durable garments for crews that wear their brand daily.",
      },
      {
        name: "Hoodies and outerwear",
        description: "Fleece, hoodies, and jackets printed or paired with embroidery.",
      },
      {
        name: "Multi-color and specialty prints",
        description:
          "Multi-color designs, oversized prints, and specialty inks, quoted per project.",
      },
    ],
    faqs: [
      {
        question: "Is there a minimum order?",
        answer:
          "Minimums depend on the print and garment. Small runs are often better suited to other methods, so tell us your quantity and we will recommend the right approach.",
      },
      {
        question: "Can you match my brand colors?",
        answer:
          "Yes. Bring us your brand colors or existing printed pieces and we will match inks as closely as the garment and process allow, with a proof before production.",
      },
      {
        question: "Can I mix sizes and garment styles in one order?",
        answer:
          "Mixed sizes are standard. Mixing garment styles or colors within one print run is often possible too, and we will flag any cost impact when we quote.",
      },
      {
        question: "What artwork do you need from me?",
        answer:
          "Vector files are ideal, but we work with what you have. If your artwork needs to be rebuilt for printing, our design team handles that.",
      },
    ],
    relatedProjects: ["branded-work-shirts-service-company", "promotional-merch-community-event"],
  },
  {
    slug: "embroidery",
    name: "Embroidery",
    shortName: "Embroidery",
    icon: "spool",
    tagline: "Stitched logos for polos, caps, and gear that needs to look sharp.",
    summary:
      "Embroidered polos, caps, and workwear with a clean, professional finish.",
    overview: [
      "Embroidery gives your logo texture and permanence. It is the standard for polos, caps, and outerwear where a printed look will not do.",
      "We digitize your logo for stitching, run a sew-out so you can approve how it looks in thread, and then produce your order with consistent placement across every garment.",
    ],
    heroImage: "/images/services/embroidery.svg",
    heroImageAlt: "Placeholder for a photo of the embroidery machine running",
    projectNoun: "embroidery",
    useCases: [
      "Polos for office and sales teams",
      "Caps and beanies",
      "Jackets, vests, and outerwear",
      "Uniform name and title personalization",
      "Bags and accessories",
    ],
    options: [
      {
        name: "Left-chest logos",
        description: "The classic placement for polos, button-downs, and outerwear.",
      },
      {
        name: "Caps and headwear",
        description: "Structured and unstructured caps with front, side, or back stitching.",
      },
      {
        name: "Names and personalization",
        description: "Individual names, titles, or numbers added per garment.",
      },
      {
        name: "Logo digitizing",
        description:
          "One-time conversion of your artwork into a stitch file, reusable on every future order.",
      },
    ],
    faqs: [
      {
        question: "What is digitizing and do I have to pay for it every time?",
        answer:
          "Digitizing converts your logo into a stitch file the machines can sew. It is typically a one-time setup for a given logo and size, then reused on future orders.",
      },
      {
        question: "Will my logo work as embroidery?",
        answer:
          "Most logos do, though fine detail and small text may need simplification to stitch cleanly. We will review your artwork and recommend adjustments before anything is sewn.",
      },
      {
        question: "Can I supply my own garments?",
        answer:
          "Ask us first. Supplied garments carry some risk on the machine, so we handle them case by case.",
      },
    ],
    relatedProjects: ["embroidered-polos-professional-team", "branded-work-shirts-service-company"],
  },
  {
    slug: "vehicle-graphics",
    name: "Vehicle Graphics",
    shortName: "Vehicles",
    icon: "truck",
    tagline: "Turn your trucks and vans into signage that works while you drive.",
    summary:
      "Vehicle lettering, partial wraps, and fleet graphics that advertise on the move.",
    overview: [
      "A lettered truck advertises everywhere it parks and every mile it drives. Vehicle graphics range from simple cut-vinyl lettering with your name and number to printed partial and full wraps.",
      "We design around your vehicle's actual body lines, proof the layout on a template of your make and model, and schedule installation so your vehicle is back to work as quickly as possible.",
    ],
    heroImage: "/images/services/vehicle-graphics.svg",
    heroImageAlt: "Placeholder for a photo of a vehicle wrap in progress",
    projectNoun: "vehicle graphics",
    useCases: [
      "Contractor trucks and service vans",
      "Fleet lettering with consistent branding",
      "Door logos and DOT numbers",
      "Partial and full wraps",
      "Trailer graphics",
    ],
    options: [
      {
        name: "Cut vinyl lettering",
        description:
          "Company name, phone, and license numbers. The budget-friendly starting point.",
      },
      {
        name: "Door and tailgate logos",
        description: "Printed or cut logo graphics placed for maximum visibility.",
      },
      {
        name: "Partial wraps",
        description:
          "Printed graphics covering key panels for a big look without full-wrap cost.",
      },
      {
        name: "Full wraps",
        description: "Complete coverage that transforms the whole vehicle.",
      },
      {
        name: "Fleet programs",
        description:
          "Consistent layouts across multiple vehicles, added as your fleet grows.",
      },
    ],
    faqs: [
      {
        question: "Will graphics damage my paint?",
        answer:
          "Quality vinyl on healthy factory paint removes cleanly in normal conditions. Repainted or damaged surfaces carry more risk, and we will flag any concerns when we see the vehicle.",
      },
      {
        question: "How long does my vehicle need to be at the shop?",
        answer:
          "Simple lettering and larger wraps have very different install times. We confirm the schedule when we quote so you can plan around it.",
      },
      {
        question: "Can you match graphics across different vehicle models?",
        answer:
          "Yes. Fleet layouts are adapted per make and model so the brand reads consistently even when the vehicles differ.",
      },
    ],
    relatedProjects: ["vehicle-graphics-local-contractor", "storefront-signage-local-business"],
  },
  {
    slug: "banners-decals-stickers",
    name: "Banners, Decals & Stickers",
    shortName: "Banners & Decals",
    icon: "flag",
    tagline: "Fast, flexible printed graphics for events, promotions, and packaging.",
    summary:
      "Vinyl banners, custom decals, and sticker runs for events and everyday marketing.",
    overview: [
      "Some jobs need signage that moves: a grand-opening banner, directional signs for an event, decals for equipment, or stickers that go out with every order.",
      "These are some of the most flexible products we print. We help you choose the right material and finishing, whether it hangs for a weekend or stays on equipment for years.",
    ],
    heroImage: "/images/services/banners-decals-stickers.svg",
    heroImageAlt: "Placeholder for a photo of banner production",
    projectNoun: "banner or decal",
    useCases: [
      "Grand openings and promotions",
      "Event backdrops and directional signage",
      "Equipment and asset labeling",
      "Product and packaging stickers",
      "Sponsor banners for teams and events",
    ],
    options: [
      {
        name: "Vinyl banners",
        description:
          "Hemmed and grommeted banners in custom sizes, for indoor or outdoor use.",
      },
      {
        name: "Retractable banner stands",
        description: "Self-contained stands for lobbies, events, and trade shows.",
      },
      {
        name: "Custom decals",
        description:
          "Die-cut and printed decals for windows, walls, floors, and equipment.",
      },
      {
        name: "Sticker runs",
        description:
          "Branded stickers in quantity for packaging, giveaways, and merch.",
      },
    ],
    faqs: [
      {
        question: "What size banner should I order?",
        answer:
          "It depends on viewing distance and where it hangs. Tell us the location and we will recommend a size and layout that stays readable.",
      },
      {
        question: "Do banners come ready to hang?",
        answer:
          "Standard finishing is hems and grommets. Pole pockets and other options are available depending on how you plan to mount it.",
      },
      {
        question: "Are your decals removable?",
        answer:
          "We print on both permanent and removable materials. Tell us the surface and how long it needs to last, and we will pick the right vinyl.",
      },
    ],
    relatedProjects: ["event-banners-directional-signage", "promotional-merch-community-event"],
  },
  {
    slug: "promotional-products",
    name: "Promotional Products",
    shortName: "Promo Products",
    icon: "gift",
    tagline: "Branded merchandise your customers keep, chosen to fit your budget.",
    summary:
      "Drinkware, pens, bags, and thousands of branded items from our extended catalog.",
    overview: [
      "Promotional products put your brand in someone's hand and keep it there: drinkware on desks, pens that circulate, bags that travel. The catalog is enormous, and that is exactly the problem.",
      "We narrow it down. Tell us your budget, who the items are for, and when you need them, and we will shortlist products that fit instead of leaving you to scroll ten thousand options.",
    ],
    heroImage: "/images/services/promotional-products.svg",
    heroImageAlt: "Placeholder for a photo of branded merchandise",
    projectNoun: "promo product",
    useCases: [
      "Trade show and event giveaways",
      "Employee onboarding and appreciation gifts",
      "Customer thank-you and holiday gifts",
      "Community event merchandise",
      "Grand-opening handouts",
    ],
    options: [
      {
        name: "Drinkware",
        description: "Tumblers, bottles, and mugs across every price tier.",
      },
      {
        name: "Pens and desk items",
        description: "Everyday carry items that keep your name in circulation.",
      },
      {
        name: "Bags and totes",
        description: "Totes, backpacks, and coolers with real walking-billboard reach.",
      },
      {
        name: "Tech and gadgets",
        description: "Chargers, speakers, and accessories for higher-end gifting.",
      },
      {
        name: "Full catalog access",
        description:
          "Our PromoPlace catalog covers thousands more items when you want to browse.",
      },
    ],
    faqs: [
      {
        question: "How do I keep from overspending on giveaways?",
        answer:
          "Start with the audience. A handout for foot traffic and a gift for a key client deserve different budgets. We help you tier items so the spend matches the relationship.",
      },
      {
        question: "Can I see the item before ordering a full run?",
        answer:
          "For many products we can arrange samples or pre-production proofs. Tell us what you are considering and we will confirm what is available.",
      },
      {
        question: "What if I already found something in the catalog?",
        answer:
          "Perfect. Send us the item number from our PromoPlace catalog and we will quote it with your branding.",
      },
    ],
    relatedProjects: ["promotional-merch-community-event", "branded-work-shirts-service-company"],
  },
  {
    slug: "graphic-design-content",
    name: "Graphic Design & Content",
    shortName: "Design & Content",
    icon: "pen",
    tagline: "Artwork, brand assets, and social content to back up your print work.",
    summary:
      "Logo cleanup, print-ready artwork, and video or social content for your brand.",
    overview: [
      "Good production starts with good files. Our design work ranges from cleaning up an old logo so it prints correctly to building complete artwork for signs, apparel, and vehicles from scratch.",
      "Beyond print, we produce video and social content that keeps your brand active between projects, using the same visual language as your physical branding.",
    ],
    heroImage: "/images/services/graphic-design-content.svg",
    heroImageAlt: "Placeholder for a photo of a design workstation",
    projectNoun: "design",
    useCases: [
      "Logo cleanup and vector conversion",
      "Sign, apparel, and wrap artwork",
      "Menu, flyer, and business card layouts",
      "Social media content",
      "Short-form video for your business",
    ],
    options: [
      {
        name: "Production artwork",
        description:
          "Print-ready files built for the exact product they will go on.",
      },
      {
        name: "Logo and brand refresh",
        description:
          "Updating existing marks so they work across signs, stitching, and screens.",
      },
      {
        name: "Marketing collateral",
        description: "Cards, flyers, menus, and handouts designed to match your brand.",
      },
      {
        name: "Video and social content",
        description:
          "Short-form video and post graphics produced for your channels.",
      },
    ],
    faqs: [
      {
        question: "I only have a screenshot of my logo. Is that a problem?",
        answer:
          "It is common, and fixable. We rebuild low-quality logos as vector artwork so they stay sharp at any size, on any product.",
      },
      {
        question: "Do I own the artwork you create?",
        answer:
          "We will be upfront about file ownership and usage when we scope your project, so there are no surprises later.",
      },
      {
        question: "Can you just do the design without the printing?",
        answer:
          "Yes. Design-only projects are welcome, though most clients find it easier to keep design and production under one roof.",
      },
    ],
    relatedProjects: ["storefront-signage-local-business", "promotional-merch-community-event"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServices(slugs: ServiceSlug[]): Service[] {
  return slugs
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
}
