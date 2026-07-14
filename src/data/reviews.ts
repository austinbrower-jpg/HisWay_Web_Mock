import type { ServiceSlug } from "@/types";

/**
 * Verified Google-review system for HisWay Press or Print.
 *
 * Use only the supplied reviewer names, quoted text, rating, and review-count
 * facts. Do not invent dates, photos, extra claims, or public media approval.
 */

export type ReviewVerificationStatus = "verified";

export type ReviewCategory =
  | "apparel-and-shirt-printing"
  | "hats-and-embroidery"
  | "stickers-and-labels"
  | "signs-banners-and-graphics"
  | "service-and-turnaround"
  | "long-term-business-relationships";

export type ReviewDisplayStyle = "quote" | "summary";

export interface GoogleReview {
  id: string;
  reviewerName: string;
  /** Full supplied review text or supplied summary text. */
  reviewText: string;
  /** Optional shortened version for tighter cards. Must include ellipses when trimmed. */
  shortDisplayText?: string;
  starRating: 5;
  /** Relative date text is intentionally omitted until supplied. */
  relativeReviewDate: string | null;
  serviceCategories: ServiceSlug[];
  reviewCategories: ReviewCategory[];
  featured: boolean;
  featuredRank?: number;
  sourceLabel: "Google review";
  ownerResponse: string | null;
  googleReviewUrl: string | null;
  verificationStatus: ReviewVerificationStatus;
  displayStyle: ReviewDisplayStyle;
}

export interface ReviewCollection {
  id: string;
  title: string;
  lead: string;
  reviewIds: string[];
}

export interface GoogleReviewsConfig {
  exactGoogleRating: number;
  exactGoogleReviewCount: number;
  googleBusinessProfileUrl: string;
  googleReviewRequestUrl: string;
  reviewSourceLabel: string;
  reviews: GoogleReview[];
}

export const reviewCategoryLabels: Record<ReviewCategory, string> = {
  "apparel-and-shirt-printing": "Apparel and shirt printing",
  "hats-and-embroidery": "Hats and embroidery",
  "stickers-and-labels": "Stickers and labels",
  "signs-banners-and-graphics": "Signs, banners and graphics",
  "service-and-turnaround": "Service and turnaround",
  "long-term-business-relationships": "Long-term business relationships",
};

export const googleReviews: GoogleReviewsConfig = {
  exactGoogleRating: 5.0,
  exactGoogleReviewCount: 26,
  googleBusinessProfileUrl: "",
  googleReviewRequestUrl: "",
  reviewSourceLabel: "Google review",
  reviews: [
    {
      id: "geri-garcia",
      reviewerName: "Geri Garcia",
      reviewText:
        "A wonderful experience with my first T-shirts for my art. The care, patience and professionalism was unmatched by any other print shop I have worked with dealing with my paintings.",
      shortDisplayText:
        "A wonderful experience with my first T-shirts for my art. The care, patience and professionalism was unmatched...",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["screen-printing-apparel"],
      reviewCategories: ["apparel-and-shirt-printing", "service-and-turnaround"],
      featured: true,
      featuredRank: 1,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "regina-porter",
      reviewerName: "Regina Porter",
      reviewText:
        "Expressed gratitude for an exceptional custom order, attention to detail and dedication to meeting her specific needs.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [],
      reviewCategories: ["service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "summary",
    },
    {
      id: "adam-harris",
      reviewerName: "Adam Harris",
      reviewText:
        "We had an incredible experience with HisWay Printing! They absolutely nailed our custom t-shirts and caps—the quality is top-notch, the turnaround was fast, and people can't stop complimenting them.",
      shortDisplayText:
        "They absolutely nailed our custom t-shirts and caps—the quality is top-notch, the turnaround was fast...",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["screen-printing-apparel", "embroidery"],
      reviewCategories: [
        "apparel-and-shirt-printing",
        "hats-and-embroidery",
        "service-and-turnaround",
      ],
      featured: true,
      featuredRank: 2,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "jesse-mendoza",
      reviewerName: "Jesse Mendoza",
      reviewText:
        "We love working with His Way Press or Print. We've gotten several custom products from them that have made our business better. Their team is amazing, friendly, professional, and they care about the businesses they serve.",
      shortDisplayText:
        "We've gotten several custom products from them that have made our business better. Their team is amazing, friendly, professional...",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [],
      reviewCategories: ["service-and-turnaround", "long-term-business-relationships"],
      featured: true,
      featuredRank: 3,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "meredith-moore",
      reviewerName: "Meredith Moore",
      reviewText:
        "We've been using HisWay for 5 years now. Between several businesses, they've completely been our go-to. They've helped us with employee shirts, merch shirts, hats, stickers, seasonal items and more. Their communication is top notch.",
      shortDisplayText:
        "They've helped us with employee shirts, merch shirts, hats, stickers, seasonal items and more. Their communication is top notch.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [
        "screen-printing-apparel",
        "embroidery",
        "banners-decals-stickers",
        "promotional-products",
      ],
      reviewCategories: [
        "apparel-and-shirt-printing",
        "hats-and-embroidery",
        "stickers-and-labels",
        "long-term-business-relationships",
      ],
      featured: true,
      featuredRank: 4,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "rachel-calamaco",
      reviewerName: "Rachel Calamaco",
      reviewText:
        "HisWay did an outstanding job on the redesign of my business T-shirts for Breaking Darkness Apparel. The customer service and personable experience was indescribable.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["screen-printing-apparel"],
      reviewCategories: ["apparel-and-shirt-printing", "service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "thirty-grind",
      reviewerName: "Thirty Grind",
      reviewText:
        "This print shop has been a game changer for my business! From custom stickers for my cups to high-quality T-shirts, they consistently deliver fast, reliable service with incredible attention to detail.",
      shortDisplayText:
        "From custom stickers for my cups to high-quality T-shirts, they consistently deliver fast, reliable service...",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["screen-printing-apparel", "banners-decals-stickers"],
      reviewCategories: [
        "apparel-and-shirt-printing",
        "stickers-and-labels",
        "service-and-turnaround",
      ],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "doryvcakes",
      reviewerName: "Doryvcakes",
      reviewText:
        "I own a Christian clothing brand, and after trying multiple screen printers, His Way Press & Print stands out by far. Their quality, consistency and care are unmatched. Their communication and patience keep me coming back.",
      shortDisplayText:
        "Their quality, consistency and care are unmatched. Their communication and patience keep me coming back.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["screen-printing-apparel"],
      reviewCategories: ["apparel-and-shirt-printing", "service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "gabriel-medellin",
      reviewerName: "Gabriel Medellin",
      reviewText:
        "I reached out to Sadrac for my business sign and trailer graphics. He was very helpful and knowledgeable. I highly recommend HisWay Press and Print.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["custom-signs", "vehicle-graphics"],
      reviewCategories: ["signs-banners-and-graphics", "service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "jennifer-zdeb",
      reviewerName: "Jennifer Zdeb",
      reviewText:
        "I'd give a million stars if that was an option. These guys go above and beyond for me and so many others. We have had nothing but great experiences with them.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [],
      reviewCategories: ["service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "rey-cardenas",
      reviewerName: "Rey Cardenas",
      reviewText:
        "I am so glad I decided to go with HisWay Sign Shop. The service I received from Sadrac and his team was truly above and beyond. They were highly responsive, attentive to my needs and delivered high-quality work within the promised timeframe.",
      shortDisplayText:
        "The service I received from Sadrac and his team was truly above and beyond. They were highly responsive, attentive to my needs...",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [],
      reviewCategories: ["service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "julio-munoz",
      reviewerName: "Julio Munoz",
      reviewText:
        "The service and quality of work offered by HisWay is first class! They have an ability to take an idea and make amazing designs for shirts, signs, stickers or any marketing needs. The staff is absolutely amazing. The only company I trust and will use.",
      shortDisplayText:
        "They have an ability to take an idea and make amazing designs for shirts, signs, stickers or any marketing needs...",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [
        "custom-signs",
        "screen-printing-apparel",
        "banners-decals-stickers",
        "graphic-design-content",
      ],
      reviewCategories: [
        "apparel-and-shirt-printing",
        "stickers-and-labels",
        "signs-banners-and-graphics",
        "service-and-turnaround",
      ],
      featured: true,
      featuredRank: 5,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "his-collection",
      reviewerName: "His Collection",
      reviewText:
        "His Way has been printing our apparel and stickers for local retailers since 2019. We cannot praise their products, service and people enough. They work with excellence in everything they do and build relationships with each client.",
      shortDisplayText:
        "His Way has been printing our apparel and stickers for local retailers since 2019. We cannot praise their products, service and people enough.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["screen-printing-apparel", "banners-decals-stickers"],
      reviewCategories: [
        "apparel-and-shirt-printing",
        "stickers-and-labels",
        "long-term-business-relationships",
      ],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "audrey-arredondo",
      reviewerName: "Audrey Arredondo",
      reviewText:
        "TLC Kids Therapy loves HisWay! We needed a banner for a work event, and they had it ready the next day. They can do anything you need—flyers, stickers, shirts, banners and more. Wonderful and helpful staff.",
      shortDisplayText:
        "We needed a banner for a work event, and they had it ready the next day. They can do anything you need—flyers, stickers, shirts, banners and more.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [
        "custom-signs",
        "screen-printing-apparel",
        "banners-decals-stickers",
      ],
      reviewCategories: [
        "apparel-and-shirt-printing",
        "stickers-and-labels",
        "signs-banners-and-graphics",
        "service-and-turnaround",
      ],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "jennifer-stone",
      reviewerName: "Jennifer Stone",
      reviewText:
        "I highly recommend this business. Their customer service is second to none. The product quality is outstanding and exceeded my expectations both times I have used them. I was completely impressed with their professionalism.",
      shortDisplayText:
        "Their customer service is second to none. The product quality is outstanding and exceeded my expectations both times I have used them.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [],
      reviewCategories: ["service-and-turnaround"],
      featured: true,
      featuredRank: 6,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "black-swan-yoga-san-antonio",
      reviewerName: "Black Swan Yoga San Antonio",
      reviewText:
        "We love working with HisWay for our banners! Each time they have provided fast responses and lead time.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["banners-decals-stickers"],
      reviewCategories: ["signs-banners-and-graphics", "service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "esmeralda-ramahi",
      reviewerName: "Esmeralda Ramahi",
      reviewText:
        "The original company creating my real estate signs kept delaying and I wasn't going to have them in time for my listing. The HisWay team saved me and honestly did a much better job. I am so grateful and will not go anywhere else for my sign needs.",
      shortDisplayText:
        "The HisWay team saved me and honestly did a much better job. I am so grateful and will not go anywhere else for my sign needs.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["custom-signs"],
      reviewCategories: ["signs-banners-and-graphics", "service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "kelly-shymaranca",
      reviewerName: "Kelly ShyMaranca",
      reviewText:
        "Our go-to shop for all of our needs! We have received top-notch customer service, quick turnaround and reliable service always.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [],
      reviewCategories: ["service-and-turnaround", "long-term-business-relationships"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "nathan-steelman",
      reviewerName: "Nathan Steelman",
      reviewText:
        "The gentlemen at HisWay Signshop put together an excellent banner for a family event. They went to great lengths to ensure what I got was what I wanted.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["custom-signs", "banners-decals-stickers"],
      reviewCategories: ["signs-banners-and-graphics", "service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "priscilla",
      reviewerName: "Priscilla",
      reviewText:
        "Highly recommend. Amazing customer service, clear and honest communication. Sign quality was great and the price was affordable.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["custom-signs"],
      reviewCategories: ["signs-banners-and-graphics", "service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "laura-castleton",
      reviewerName: "Laura Castleton",
      reviewText:
        "Excellent communication and service. Very pleased with the ease of the process and the quality is great. Fast turnaround as well.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [],
      reviewCategories: ["service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "ms-marta",
      reviewerName: "Ms Marta",
      reviewText: "Great customer service. Timely response on orders.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [],
      reviewCategories: ["service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "ashok-dhakal",
      reviewerName: "Ashok Dhakal",
      reviewText:
        "Very professional and prompt services. They have reasonable pricing on their products and their staff is super friendly.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: [],
      reviewCategories: ["service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "kelly-courtney",
      reviewerName: "Kelly Courtney",
      reviewText: "Very fast and helped me with a design and layout.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["graphic-design-content"],
      reviewCategories: ["signs-banners-and-graphics", "service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
    {
      id: "dj-gumby",
      reviewerName: "DJ_GUMBY",
      reviewText: "They offer fast turnarounds on custom stickers! Can't beat it.",
      starRating: 5,
      relativeReviewDate: null,
      serviceCategories: ["banners-decals-stickers"],
      reviewCategories: ["stickers-and-labels", "service-and-turnaround"],
      featured: false,
      sourceLabel: "Google review",
      ownerResponse: null,
      googleReviewUrl: null,
      verificationStatus: "verified",
      displayStyle: "quote",
    },
  ],
};

export const reviewCollections: ReviewCollection[] = [
  {
    id: "apparel-hats-and-merch",
    title: "Apparel, hats, and merch",
    lead: "Feedback tied to shirts, apparel programs, caps, and recurring merch support.",
    reviewIds: ["rachel-calamaco", "thirty-grind", "doryvcakes", "his-collection"],
  },
  {
    id: "signs-banners-and-stickers",
    title: "Signs, banners, and stickers",
    lead: "Projects where responsiveness, clarity, and usable finished pieces mattered most.",
    reviewIds: [
      "gabriel-medellin",
      "audrey-arredondo",
      "black-swan-yoga-san-antonio",
      "esmeralda-ramahi",
      "nathan-steelman",
      "priscilla",
      "kelly-courtney",
      "dj-gumby",
    ],
  },
  {
    id: "service-turnaround-and-relationships",
    title: "Service, turnaround, and repeat trust",
    lead: "Shorter notes from customers who called out communication, speed, and consistency.",
    reviewIds: [
      "regina-porter",
      "jennifer-zdeb",
      "rey-cardenas",
      "kelly-shymaranca",
      "laura-castleton",
      "ms-marta",
      "ashok-dhakal",
    ],
  },
] as const;

const serviceReviewOrder: Partial<Record<ServiceSlug, string[]>> = {
  "screen-printing-apparel": [
    "geri-garcia",
    "adam-harris",
    "doryvcakes",
    "meredith-moore",
    "rachel-calamaco",
    "his-collection",
    "thirty-grind",
  ],
  embroidery: ["adam-harris", "meredith-moore"],
  "custom-signs": [
    "gabriel-medellin",
    "esmeralda-ramahi",
    "priscilla",
    "nathan-steelman",
    "audrey-arredondo",
    "julio-munoz",
  ],
  "vehicle-graphics": ["gabriel-medellin"],
  "banners-decals-stickers": [
    "thirty-grind",
    "dj-gumby",
    "audrey-arredondo",
    "black-swan-yoga-san-antonio",
    "nathan-steelman",
    "his-collection",
    "meredith-moore",
  ],
  "promotional-products": ["meredith-moore", "julio-munoz"],
  "graphic-design-content": ["julio-munoz", "kelly-courtney"],
};

/** Safe trust statements that do not overreach beyond the supplied review set. */
export const trustSignals = [
  {
    label: "Local service",
    description: "San Antonio production partner",
  },
  {
    label: "Friendly communication",
    description: "Repeatedly praised for patience and responsiveness",
  },
  {
    label: "Broad capability",
    description: "Reviews mention shirts, hats, signs, banners, and stickers",
  },
  {
    label: "Repeat trust",
    description: "Several reviewers describe ongoing or return business",
  },
] as const;

export function hasVerifiedReviewMetrics(): boolean {
  return googleReviews.exactGoogleRating > 0 && googleReviews.exactGoogleReviewCount > 0;
}

export function hasGoogleBusinessProfileUrl(): boolean {
  return googleReviews.googleBusinessProfileUrl.trim().length > 0;
}

export function hasGoogleReviewRequestUrl(): boolean {
  return googleReviews.googleReviewRequestUrl.trim().length > 0;
}

export function getVerifiedReviews(): GoogleReview[] {
  return googleReviews.reviews.filter((review) => review.verificationStatus === "verified");
}

export function getReviewById(reviewId: string): GoogleReview | undefined {
  return googleReviews.reviews.find((review) => review.id === reviewId);
}

export function getReviewsByIds(reviewIds: string[]): GoogleReview[] {
  return reviewIds
    .map((reviewId) => getReviewById(reviewId))
    .filter((review): review is GoogleReview => Boolean(review));
}

export function getFeaturedReviews(): GoogleReview[] {
  return getVerifiedReviews()
    .filter((review) => review.featured)
    .sort((a, b) => (a.featuredRank ?? Number.MAX_SAFE_INTEGER) - (b.featuredRank ?? Number.MAX_SAFE_INTEGER));
}

export function getReviewsForService(service: ServiceSlug): GoogleReview[] {
  const matched = getVerifiedReviews().filter((review) => review.serviceCategories.includes(service));
  const explicitOrder = serviceReviewOrder[service] ?? [];
  const ordered = getReviewsByIds(explicitOrder);
  const matchedIds = new Set(matched.map((review) => review.id));
  const prioritized = ordered.filter((review) => matchedIds.has(review.id));
  const prioritizedIds = new Set(prioritized.map((review) => review.id));

  return [
    ...prioritized,
    ...matched.filter((review) => !prioritizedIds.has(review.id)),
  ];
}

export function getReviewsForCategory(category: ReviewCategory): GoogleReview[] {
  return getVerifiedReviews().filter((review) => review.reviewCategories.includes(category));
}
