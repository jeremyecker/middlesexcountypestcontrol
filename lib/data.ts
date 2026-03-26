export const PHONE = '(732) 856-5142';
export const PHONE_RAW = '7328565142';
export const SITE_NAME = 'Middlesex County Pest Control';
export const DOMAIN = 'https://www.middlesexcountypestcontrol.com';
export const YEAR_FOUNDED = '2018';
export const FOUNDED = '2018';
export const TAGLINE = 'Serving Middlesex County Since 2018';
export const COUNTY = 'Middlesex County';
export const STATE = 'NJ';
export const WEBHOOK_URL = 'https://omcdxpqhnrhgnkxafgtn.supabase.co/functions/v1/webhook-middlesex';
export const GA4_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-78JJTPVFRD';

export const towns = [
  { name: 'Carteret', slug: 'carteret', county: 'Middlesex County', state: 'NJ', population: 24000, description: 'Industrial borough near Raritan Bay with unique waterfront pest challenges.' },
  { name: 'Cranbury', slug: 'cranbury', county: 'Middlesex County', state: 'NJ', population: 4000, description: 'Historic township in southern Middlesex County with rural and suburban character.' },
  { name: 'Dunellen', slug: 'dunellen', county: 'Middlesex County', state: 'NJ', population: 7500, description: 'Small residential borough in central Middlesex County.' },
  { name: 'East Brunswick', slug: 'east-brunswick', county: 'Middlesex County', state: 'NJ', population: 48000, description: 'Large suburban township with diverse residential neighborhoods.' },
  { name: 'Edison', slug: 'edison', county: 'Middlesex County', state: 'NJ', population: 107000, description: 'Largest township in Middlesex County and a major suburban hub.' },
  { name: 'Helmetta', slug: 'helmetta', county: 'Middlesex County', state: 'NJ', population: 2500, description: 'Small quiet borough near Jamesburg in central Middlesex County.' },
  { name: 'Highland Park', slug: 'highland-park', county: 'Middlesex County', state: 'NJ', population: 14000, description: 'Borough situated on the Raritan River across from New Brunswick.' },
  { name: 'Jamesburg', slug: 'jamesburg', county: 'Middlesex County', state: 'NJ', population: 6500, description: 'Small historic borough in central Middlesex County.' },
  { name: 'Middlesex', slug: 'middlesex', county: 'Middlesex County', state: 'NJ', population: 14000, description: 'Central county borough with well-established residential neighborhoods.' },
  { name: 'Milltown', slug: 'milltown', county: 'Middlesex County', state: 'NJ', population: 7200, description: 'Small borough situated along the South River in Middlesex County.' },
  { name: 'Monroe', slug: 'monroe', county: 'Middlesex County', state: 'NJ', population: 47000, description: 'Large township in the southern part of Middlesex County.' },
  { name: 'New Brunswick', slug: 'new-brunswick', county: 'Middlesex County', state: 'NJ', population: 57000, description: 'County seat of Middlesex County and home to Rutgers University.' },
  { name: 'North Brunswick', slug: 'north-brunswick', county: 'Middlesex County', state: 'NJ', population: 43000, description: 'Suburban township along the Route 1 corridor in Middlesex County.' },
  { name: 'Old Bridge', slug: 'old-bridge', county: 'Middlesex County', state: 'NJ', population: 68000, description: 'One of the largest suburban townships in Middlesex County.' },
  { name: 'Perth Amboy', slug: 'perth-amboy', county: 'Middlesex County', state: 'NJ', population: 55000, description: 'Waterfront city on Raritan Bay with rich history and urban density.' },
  { name: 'Piscataway', slug: 'piscataway', county: 'Middlesex County', state: 'NJ', population: 57000, description: 'Major suburban township hosting the Rutgers University Busch and Livingston campuses.' },
  { name: 'Plainsboro', slug: 'plainsboro', county: 'Middlesex County', state: 'NJ', population: 24000, description: 'Affluent township near Princeton with executive housing and corporate campuses.' },
  { name: 'Sayreville', slug: 'sayreville', county: 'Middlesex County', state: 'NJ', population: 46000, description: 'Suburban borough near the Raritan River with a mix of industrial and residential areas.' },
  { name: 'South Amboy', slug: 'south-amboy', county: 'Middlesex County', state: 'NJ', population: 9000, description: 'Small city situated on Raritan Bay in eastern Middlesex County.' },
  { name: 'South Brunswick', slug: 'south-brunswick', county: 'Middlesex County', state: 'NJ', population: 46000, description: 'Large suburban township located between New Brunswick and Princeton.' },
  { name: 'South Plainfield', slug: 'south-plainfield', county: 'Middlesex County', state: 'NJ', population: 24000, description: 'Industrial and residential borough along the Route 287 corridor.' },
  { name: 'South River', slug: 'south-river', county: 'Middlesex County', state: 'NJ', population: 16000, description: 'Borough with a waterfront character situated along the South River.' },
  { name: 'Spotswood', slug: 'spotswood', county: 'Middlesex County', state: 'NJ', population: 8500, description: 'Small suburban borough near Old Bridge in central Middlesex County.' },
  { name: 'Woodbridge', slug: 'woodbridge', county: 'Middlesex County', state: 'NJ', population: 100000, description: 'Second largest township in Middlesex County, near Staten Island and the Arthur Kill.' },
];

export const services = [
  {
    slug: 'bed-bugs',
    title: 'Bed Bug Extermination',
    shortDesc: 'Expert bed bug treatments using heat and chemical methods to eliminate infestations quickly.',
    icon: 'Bug',
    emoji: '\uD83D\uDECF\uFE0F',
  },
  {
    slug: 'rodents',
    title: 'Rodent Control',
    shortDesc: 'Comprehensive rat and mice control including exclusion, trapping, and sanitation.',
    icon: 'Rat',
    emoji: '\uD83D\uDC00',
  },
  {
    slug: 'cockroaches',
    title: 'Cockroach Extermination',
    shortDesc: 'Proven cockroach elimination using advanced gel baits and residual treatments.',
    icon: 'Bug',
    emoji: '\uD83E\uDEB3',
  },
  {
    slug: 'ants',
    title: 'Ant Control',
    shortDesc: 'Targeted ant control solutions for carpenter ants, pavement ants, and fire ants.',
    icon: 'Bug',
    emoji: '\uD83D\uDC1C',
  },
  {
    slug: 'termites',
    title: 'Termite Treatment',
    shortDesc: 'Liquid and baiting system termite treatments to protect your home\'s structure.',
    icon: 'Home',
    emoji: '\uD83E\uDEB5',
  },
  {
    slug: 'mosquitoes',
    title: 'Mosquito Control',
    shortDesc: 'Seasonal mosquito reduction programs to take back your yard all summer long.',
    icon: 'Droplets',
    emoji: '\uD83E\uDD9F',
  },
  {
    slug: 'wasps',
    title: 'Wasp & Bee Removal',
    shortDesc: 'Expert removal of wasp nests, yellow jackets, and hornets from your property.',
    icon: 'AlertTriangle',
    emoji: '\uD83D\uDC1D',
  },
  {
    slug: 'ticks',
    title: 'Tick Control',
    shortDesc: 'Targeted tick treatments for yards and wooded areas to reduce Lyme disease risk.',
    icon: 'Shield',
    emoji: '\uD83D\uDD77\uFE0F',
  },
  {
    slug: 'fleas',
    title: 'Flea Extermination',
    shortDesc: 'Comprehensive flea treatment for your home and yard to protect pets and family.',
    icon: 'Bug',
    emoji: '\uD83E\uDDA7',
  },
];

export const wildlifeServices = [
  {
    slug: 'bird-control',
    title: 'Bird Control',
    shortDesc: 'Humane bird deterrent and exclusion services for commercial and residential properties.',
  },
  {
    slug: 'wildlife-removal',
    title: 'Wildlife Removal',
    shortDesc: 'Humane removal of nuisance wildlife including opossums, skunks, and more.',
  },
  {
    slug: 'squirrel-removal',
    title: 'Squirrel Removal',
    shortDesc: 'Expert squirrel exclusion and removal to protect your attic and home.',
  },
  {
    slug: 'raccoon-removal',
    title: 'Raccoon Removal',
    shortDesc: 'Humane raccoon trapping and removal with full exclusion services.',
  },
];

export const blogPosts = [
  {
    slug: 'how-to-get-rid-of-bed-bugs-new-brunswick-nj',
    title: 'How to Get Rid of Bed Bugs in New Brunswick, NJ',
    excerpt: "New Brunswick's high-density housing and constant student population create challenging bed bug conditions. Here's what actually works.",
    date: '2025-09-15',
    category: 'Bed Bugs',
    readTime: '8 min',
  },
  {
    slug: 'signs-you-have-rats-middlesex-county',
    title: 'Signs You Have Rats in Middlesex County',
    excerpt: "Middlesex County's dense suburban corridors and waterfront areas make it prime territory for rat activity. Learn to spot the warning signs early.",
    date: '2025-10-02',
    category: 'Rodents',
    readTime: '6 min',
  },
  {
    slug: 'cockroach-problem-nj-apartment',
    title: 'Cockroach Problem in Your NJ Apartment? What Actually Works',
    excerpt: 'Multi-family housing across Edison, Woodbridge, and Piscataway creates persistent cockroach challenges. Here\'s the effective approach.',
    date: '2025-10-18',
    category: 'Cockroaches',
    readTime: '7 min',
  },
  {
    slug: 'termite-prevention-middlesex-county',
    title: 'Termite Prevention for Middlesex County Homeowners',
    excerpt: "Middlesex County's suburban neighborhoods and older housing stock create significant termite risk. Prevention starts before you see damage.",
    date: '2025-11-05',
    category: 'Termites',
    readTime: '8 min',
  },
  {
    slug: 'mosquito-control-edison-piscataway-nj',
    title: 'Mosquito Control in Edison and Piscataway, NJ',
    excerpt: "Edison and Piscataway's wetlands, retention ponds, and suburban landscaping create serious mosquito pressure. Professional programs make a real difference.",
    date: '2025-11-20',
    category: 'Mosquitoes',
    readTime: '6 min',
  },
  {
    slug: 'how-to-tell-if-you-have-an-ant-infestation',
    title: 'How to Tell If You Have an Ant Infestation (And What to Do)',
    excerpt: 'Spotting a few ants is one thing — an active infestation is another. Here\'s how to tell the difference and what treatment looks like.',
    date: '2025-12-08',
    category: 'Ants',
    readTime: '6 min',
  },
  {
    slug: 'tick-season-middlesex-county-nj',
    title: 'Tick Season in Middlesex County: What Homeowners Need to Know',
    excerpt: "Middlesex County's parks, wooded areas, and suburban green spaces harbor significant tick populations. Protecting your family starts with awareness.",
    date: '2025-12-22',
    category: 'Ticks',
    readTime: '7 min',
  },
  {
    slug: 'commercial-pest-control-nj-restaurants',
    title: 'Commercial Pest Control Requirements for NJ Restaurants',
    excerpt: 'New Jersey health code requirements for pest control are strict. Here\'s what Middlesex County restaurant owners need to know to stay compliant.',
    date: '2026-01-10',
    category: 'Commercial',
    readTime: '8 min',
  },
  {
    slug: 'wasp-nest-removal-when-to-call-professional',
    title: 'Wasp Nest Removal: When to Call a Professional',
    excerpt: 'DIY wasp removal is dangerous and often ineffective. Learn when the nest is too big to handle yourself and what professional treatment involves.',
    date: '2026-01-25',
    category: 'Wasps',
    readTime: '5 min',
  },
  {
    slug: 'flea-infestations-new-jersey',
    title: 'Flea Infestations in New Jersey: Causes and Treatment',
    excerpt: "New Jersey's climate and dense pet ownership make flea infestations common. Professional treatment addresses both the infestation and re-infestation risk.",
    date: '2026-02-08',
    category: 'Fleas',
    readTime: '6 min',
  },
  {
    slug: 'pest-control-tips-edison-woodbridge',
    title: 'Pest Control Tips for Edison and Woodbridge Homeowners',
    excerpt: "Middlesex County's two largest communities face unique pest pressures from their size, density, and proximity to major waterways. Here's how to protect your home.",
    date: '2026-02-20',
    category: 'Prevention',
    readTime: '7 min',
  },
  {
    slug: 'wildlife-removal-middlesex-county',
    title: 'Wildlife Removal in Middlesex County: Squirrels, Raccoons, and More',
    excerpt: "Middlesex County's mix of suburban development and natural areas creates regular wildlife intrusion problems. Licensed removal is the only reliable solution.",
    date: '2026-03-05',
    category: 'Wildlife',
    readTime: '6 min',
  },
  {
    slug: 'how-often-should-you-get-pest-control-nj',
    title: 'How Often Should You Get Pest Control Treatments in NJ?',
    excerpt: "New Jersey's four-season climate means pest pressure never fully stops. The right treatment frequency depends on your home, location, and pest history.",
    date: '2026-03-12',
    category: 'Prevention',
    readTime: '6 min',
  },
  {
    slug: 'bed-bug-prevention-guide-middlesex-county',
    title: 'Bed Bug Prevention Guide for Middlesex County Renters and Landlords',
    excerpt: 'Whether you rent in New Brunswick or own a multi-family property in Perth Amboy, bed bug prevention starts with understanding how they spread.',
    date: '2026-03-18',
    category: 'Bed Bugs',
    readTime: '7 min',
  },
  {
    slug: 'common-pests-perth-amboy-sayreville-nj',
    title: 'Most Common Pests in Perth Amboy and Sayreville, NJ',
    excerpt: 'Waterfront communities along the Raritan Bay face distinct pest challenges. Perth Amboy and Sayreville homeowners should know what to watch for.',
    date: '2026-03-22',
    category: 'General',
    readTime: '6 min',
  },
];

export const testimonials = [
  {
    name: 'John D.',
    location: 'Edison, NJ',
    rating: 5,
    text: 'Middlesex County Pest Control resolved our termite problem quickly. The technician was thorough, professional, and explained every step. Highly recommend!',
  },
  {
    name: 'Sarah L.',
    location: 'Piscataway, NJ',
    rating: 5,
    text: 'Finally mosquito-free in our Piscataway backyard thanks to this team. Called them in May and have been comfortable outside all summer. Outstanding service.',
  },
  {
    name: 'Michael S.',
    location: 'Woodbridge, NJ',
    rating: 5,
    text: 'Professional and thorough with our ant infestation in Woodbridge. They identified the colony, treated the entry points, and the ants have not come back. Excellent service.',
  },
  {
    name: 'Rachel K.',
    location: 'New Brunswick, NJ',
    rating: 5,
    text: 'Called about bed bugs and they came out same day. Very impressed with the response time and the technician was extremely knowledgeable. Problem resolved.',
  },
  {
    name: 'Tom M.',
    location: 'Old Bridge, NJ',
    rating: 5,
    text: 'Best pest control company in Middlesex County. Used them for 3 years running for seasonal mosquito control. My backyard is actually enjoyable again.',
  },
  {
    name: 'Linda C.',
    location: 'Edison, NJ',
    rating: 5,
    text: 'Had a rodent problem that two other companies failed to solve. Middlesex County Pest Control found the entry points, sealed them, and eliminated the mice completely.',
  },
  {
    name: 'David R.',
    location: 'Perth Amboy, NJ',
    rating: 5,
    text: 'Very professional cockroach treatment. Multi-unit building with a persistent problem. They treated every unit effectively and the results lasted. Will use again.',
  },
  {
    name: 'Karen T.',
    location: 'Sayreville, NJ',
    rating: 5,
    text: 'Squirrels had gotten into our attic and were chewing wires. They came out fast, removed them humanely, and sealed all the entry points. No issues since.',
  },
];
