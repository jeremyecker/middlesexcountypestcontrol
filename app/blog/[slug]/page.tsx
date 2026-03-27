import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, PHONE, PHONE_RAW, SITE_NAME, DOMAIN } from '@/lib/data';
import { blogContentExtra } from '@/lib/blog-content-extra';

const blogContentBase: Record<string, { body: string; faqs: { q: string; a: string }[] }> = {
  'how-to-get-rid-of-bed-bugs-new-brunswick-nj': {
    body: `New Brunswick presents one of Middlesex County's most challenging environments for bed bug control. The city's combination of dense student housing near Rutgers University, multi-family apartment buildings in the downtown corridor, and a steady flow of transient residents creates conditions where bed bugs spread rapidly and persistently.

## Why New Brunswick Has a Bed Bug Problem

The core challenge in New Brunswick is density and turnover. Student apartments change occupants every semester. Furnished rentals near the university allow bed bugs to hitchhike from building to building. Downtown apartments with shared walls and laundry facilities make containment difficult once an infestation is established.

Unlike suburban communities where bed bug problems are often isolated to a single unit, infestations in New Brunswick frequently span multiple units in the same building.

## How Bed Bugs Spread in Urban Environments

Bed bugs spread through direct contact with infested items — used furniture is one of the most common introduction routes in college communities. Buying a used couch, mattress, or upholstered chair without inspection is a significant risk. They also spread through shared laundry facilities when infested clothing or bedding is not transported in sealed bags.

In multi-family housing, bed bugs travel through wall voids, electrical conduits, and plumbing chases. A single infested unit can spread to adjacent units within weeks if not treated comprehensively.

## What Actually Works

Over-the-counter sprays and diatomaceous earth applications are largely ineffective against established bed bug infestations. They may kill exposed bugs on contact but do not reach eggs or bugs hiding deep in mattress seams, box spring interiors, or wall crevices.

Professional treatment options include:

**Heat Treatment:** The most effective single-treatment option. The entire room or unit is heated to 120°F+ for several hours, penetrating every hiding spot. Heat treatment kills all life stages — eggs, nymphs, and adults — in a single visit.

**Chemical Treatment:** Professional-grade insecticide application with residual activity, combined with insect growth regulators (IGR) that prevent nymphs from reaching reproductive maturity. Multiple applications are typically required.

**Combined Protocol:** Many severe infestations benefit from a combination of heat and targeted chemical treatment for the longest residual protection.

## Preparing for Treatment

Professional bed bug treatment requires preparation. You will need to:
- Launder and bag all clothing and bedding in sealed bags before treatment
- Remove clutter from floors and under beds
- Empty closets so treatment can reach all areas
- Vacate the premises during treatment

Your pest control provider will give you a detailed checklist. Following preparation instructions carefully is critical — improper preparation is one of the most common reasons treatments underperform.

## What to Do Right Now

If you suspect bed bugs in your New Brunswick home or apartment, act immediately. The population doubles approximately every 16 days under favorable conditions. A small infestation that could be treated in a single visit becomes a severe infestation within a few months.

Contact Middlesex County Pest Control for a professional bed bug inspection. We serve all of New Brunswick and the surrounding Middlesex County area with fast response times and licensed technicians experienced in urban bed bug control.`,
    faqs: [
      { q: 'How do I know if I have bed bugs?', a: 'Look for small rust-colored stains on mattress seams, tiny shed skins, waking with itchy welts in a line or cluster, and a musty sweet odor in the bedroom.' },
      { q: 'Can I treat bed bugs myself?', a: 'Over-the-counter products are generally ineffective against established infestations. Professional heat or chemical treatment is required for complete elimination.' },
      { q: 'How long does bed bug treatment take in New Brunswick?', a: 'Heat treatments typically take a full day. Chemical treatments require 2–3 visits spaced 2 weeks apart.' },
      { q: 'My landlord won\'t treat — what can I do?', a: 'In New Jersey, landlords are legally required to maintain premises free from pest infestation. Contact your local code enforcement office or the NJ Department of Community Affairs.' },
    ],
  },
  'signs-you-have-rats-middlesex-county': {
    body: `Rat infestations are one of the most serious pest problems Middlesex County homeowners face. Rats contaminate food, damage structures, chew through electrical wiring (creating fire hazards), and carry pathogens including leptospirosis and salmonella. Early detection is critical — rat populations grow quickly and establish themselves rapidly once they find a food and shelter source.

## Rats in Middlesex County: Where They Come From

Middlesex County's geography makes it particularly susceptible to rat pressure. The county's extensive waterfront along the Raritan Bay and Raritan River, its industrial areas in Carteret and Sayreville, its dense urban neighborhoods in New Brunswick and Perth Amboy, and its major commercial corridors all create favorable rat habitat.

Norway rats (the most common species) are burrowers — they dig underground dens near building foundations, under slabs, and along retaining walls. They enter homes through gaps as small as half an inch around pipes, under doors, or through foundation cracks.

## Warning Signs of a Rat Infestation

**Droppings:** Rat droppings are the most reliable early indicator. Norway rat droppings are dark, capsule-shaped, and approximately 3/4 inch long. Find them along walls, behind appliances, in cabinets, and near food storage areas.

**Gnaw marks:** Rats gnaw constantly to keep their teeth sharp. Look for gnaw marks on food packaging, wood, plastic pipes, and — critically — electrical wiring. Fresh gnaw marks are lighter in color.

**Burrows:** Look for holes 2–3 inches in diameter along your foundation, under slabs, or in dense vegetation near the building. Active burrows have smooth, compacted earth around the entrance.

**Grease marks:** Rats have poor eyesight and follow the same pathways repeatedly. They leave dark grease marks along walls and baseboards where their fur contacts surfaces.

**Sounds:** Scratching, squeaking, or running sounds in walls or ceilings — especially at night, when rats are most active.

**Tracks:** In dusty basement or garage areas, you may see rat footprints or tail drag marks.

## What Not to Do

Avoid relying solely on snap traps for active infestations. Traps are useful but insufficient for large populations. Bait placed without proper bait station enclosures puts children and pets at risk. And critically — never seal entry points before the infestation is eliminated, as this can trap rats inside the structure.

## Professional Rat Control in Middlesex County

Effective rat control requires a three-part approach: elimination of the existing population, exclusion to prevent re-entry, and sanitation recommendations to remove attractants.

Middlesex County Pest Control's rodent control programs address all three phases. Our technicians are experienced in the specific rat pressures throughout Middlesex County — from waterfront industrial areas to suburban residential neighborhoods.

Contact us for a free rodent inspection throughout Middlesex County.`,
    faqs: [
      { q: 'How do rats get into homes in Middlesex County?', a: 'Rats enter through gaps around pipes, under doors, through foundation cracks, and through utility line entries. They can squeeze through a gap the size of a quarter.' },
      { q: 'How do I know if I have rats vs. mice?', a: 'Rat droppings are much larger (3/4") than mouse droppings (1/4"). Rat gnaw marks are larger and deeper. Rats are larger and heavier — you\'ll hear louder movement in walls.' },
      { q: 'Are snap traps enough to eliminate a rat infestation?', a: 'For large infestations, traps alone are insufficient. A comprehensive program including bait stations, exclusion work, and sanitation is required.' },
      { q: 'How long does rat control take?', a: 'Initial population reduction typically takes 2–4 weeks. Complete elimination depends on the size of the infestation and thoroughness of exclusion work.' },
    ],
  },
  'cockroach-problem-nj-apartment': {
    body: `Cockroach infestations in New Jersey apartments are among the most persistent pest challenges homeowners and renters face. Across Middlesex County's dense communities — Edison, Woodbridge, Piscataway, New Brunswick, Perth Amboy — multi-family housing creates conditions where cockroach populations establish, spread between units, and resist standard treatment approaches.

## Why Apartment Cockroach Problems Are Different

Single-family home cockroach problems are manageable with targeted professional treatment. Apartment cockroach infestations are fundamentally different because the source is often another unit. You can treat your apartment perfectly, but if a neighboring unit has an untreated infestation, cockroaches will re-enter through shared walls, plumbing chases, and utility conduits within weeks.

Effective apartment cockroach control requires building-wide coordination — or at minimum, treatment of adjacent units simultaneously.

## Species Matters

**German Cockroaches** are the most common apartment species in New Jersey. They are small (about 1/2 inch), extremely fast-reproducing, and almost exclusively indoors. A single female can produce hundreds of offspring in her lifetime. German cockroaches prefer warm, humid areas near food and water — kitchens and bathrooms. They develop resistance to insecticides over time, which is why rotating treatment methods is important.

**American Cockroaches** are larger (up to 2 inches) and prefer basements, sewers, and damp areas. They are less common in apartments but do enter through sewer systems in older buildings.

**Oriental Cockroaches** prefer cool, damp environments and are commonly found in basements and lower levels of buildings.

## What Actually Works

**Professional Gel Bait:** The most effective modern treatment for German cockroaches. Bait placed in small dots in harborage areas (hinge areas of cabinets, under appliances, near plumbing) is consumed by cockroaches and passed to other colony members. When applied correctly, gel bait provides faster and more complete control than spray treatments.

**Insect Growth Regulator (IGR):** IGR products prevent cockroach nymphs from reaching reproductive maturity, breaking the breeding cycle over several weeks. IGR is almost always combined with gel bait for comprehensive treatment.

**Crack and Crevice Treatment:** Professional residual insecticide applied into harborage points provides immediate knockdown and ongoing control.

## What Tenants Can Do

- Report infestations to your landlord immediately (NJ law requires landlords to address pest infestations)
- Keep kitchen clean — eliminate food sources and moisture
- Seal under-sink areas and around plumbing penetrations
- Don't use over-the-counter sprays — these scatter cockroaches and make professional treatment less effective

## Getting Professional Help

If you're dealing with cockroaches in your Middlesex County apartment or condo, contact Middlesex County Pest Control. We serve all communities in Middlesex County and have extensive experience in multi-family pest management.`,
    faqs: [
      { q: 'Why do I keep getting cockroaches even after treatment?', a: 'Re-infestation from adjacent units is the most common cause. Without treating neighboring units or sealing shared wall conduits, cockroaches will return.' },
      { q: 'Are cockroaches dangerous?', a: 'Yes. Cockroaches carry pathogens that contaminate food and surfaces, and cockroach allergens are a significant trigger for asthma, particularly in children.' },
      { q: 'Is my landlord responsible for cockroach treatment?', a: 'In New Jersey, landlords are legally required to maintain rental properties free from pest infestation. Documented infestations should be reported in writing.' },
      { q: 'How quickly does professional cockroach treatment work?', a: 'Gel bait treatment typically shows significant results within 1–2 weeks. A follow-up service at 3–4 weeks is recommended.' },
    ],
  },
  'termite-prevention-middlesex-county': {
    body: `Termite damage is one of the most expensive and devastating problems Middlesex County homeowners can face. Eastern subterranean termites — the primary species in our area — work silently and invisibly for years, hollowing out structural wood from the inside. By the time visible damage appears, the infestation may have been active for a decade.

## Termite Risk in Middlesex County

Middlesex County has significant termite pressure. The county's substantial stock of older homes — particularly in established communities like Highland Park, Metuchen, Milltown, and downtown New Brunswick — provides ample wood-soil contact points for subterranean termite colonies. The county's humid climate and abundant rainfall create ideal moisture conditions for termite activity.

New construction is not immune. Any wood-soil contact or moisture intrusion creates termite entry opportunity, regardless of a home's age.

## How Eastern Subterranean Termites Work

Eastern subterranean termites live in underground colonies that can number in the hundreds of thousands. Worker termites build mud tubes — pencil-diameter tunnels of soil, termite saliva, and wood particles — from the ground to structural wood, protecting themselves from open air while they feed.

Termites consume wood from the inside out, following the grain. A beam that looks intact from the outside may be entirely hollow. They prefer soft wood and moisture-damaged wood, which is why basement sills and joists are most commonly affected.

## Warning Signs

- **Mud tubes** on foundation walls, piers, or crawl space wood — this is the most reliable indicator
- **Discarded wings** near windows, doors, or foundation vents (following a swarm event)
- **Hollow-sounding wood** when tapped
- **Distorted doors or windows** caused by wood that has been weakened and shifted
- **Visible damage** — wood that crumbles or appears honeycombed

## Prevention Strategies

**Eliminate wood-soil contact.** Any direct contact between structural wood and soil creates a termite entry pathway. Remove wood debris from around the foundation, maintain mulch at least 6 inches from the foundation, and ensure wood siding doesn't contact soil.

**Manage moisture.** Fix plumbing leaks promptly, ensure proper drainage away from the foundation, maintain working gutters and downspouts, and address basement moisture issues.

**Maintain ventilation.** Adequate crawl space ventilation prevents moisture buildup that attracts termites.

**Annual inspection.** Professional termite inspections detect early activity before structural damage occurs. NJ mortgage lenders typically require a Wood-Destroying Insect (WDI) inspection before home sale.

## Treatment Options

Liquid termiticide (Termidor or equivalent) creates a treated zone in the soil surrounding the foundation that eliminates termites as they pass through. It provides protection for 5+ years.

Bait systems place cellulose stations in the soil around the perimeter. Worker termites find the stations, consume the bait, and transfer it to the colony. Bait systems require annual monitoring.

Contact Middlesex County Pest Control for a professional termite inspection throughout Middlesex County.`,
    faqs: [
      { q: 'How do I know if I have termites or carpenter ants?', a: 'Termite swarmers have straight antennae, equal-length wings, and a straight waist. Carpenter ants have elbowed antennae, unequal wings, and a pinched waist.' },
      { q: 'How long does termite treatment last?', a: 'Liquid termiticide treatments typically provide 5+ years of protection. Bait systems require annual monitoring and bait replacement.' },
      { q: 'Do I need a termite inspection to sell my home in NJ?', a: 'Most NJ mortgage lenders require a WDI (Wood-Destroying Insect) inspection as part of the home purchase process.' },
      { q: 'How much does termite damage cost to repair?', a: 'Termite repair costs in NJ average $3,000–$8,000 for moderate infestations and can exceed $30,000 for severe structural damage. Prevention is far less expensive.' },
    ],
  },
  'mosquito-control-edison-piscataway-nj': {
    body: `Edison and Piscataway are two of Middlesex County's largest communities — and two of its most challenging environments for mosquito control. Their combination of suburban wetlands, retention ponds, Raritan River tributaries, and extensive residential landscaping creates exceptional mosquito habitat across both communities.

## Why Edison and Piscataway Have Mosquito Problems

The geography of central Middlesex County works against mosquito reduction. Edison sits at the center of a county crisscrossed by streams, retention basins, and stormwater infrastructure that creates standing water. Piscataway's proximity to the Raritan River and Raritan Canal, combined with significant parkland at Rutgers University and Johnson Park, creates substantial wetland mosquito breeding habitat.

Beyond natural water sources, the dense suburban landscaping of both communities — ornamental gardens, wooded lot borders, irrigation systems — creates abundant resting and harborage sites for adult mosquitoes.

## Mosquito Species in Middlesex County

**Culex mosquitoes** are the primary summer mosquito species and the most important West Nile virus vectors. They breed in standing, organically-rich water — exactly the conditions found in many suburban drainage systems, neglected bird baths, clogged gutters, and low spots in yards.

**Aedes mosquitoes** include the container-breeding Aedes albopictus (Asian tiger mosquito), an aggressive daytime biter that breeds in small containers — flower pot saucers, tarps, tree holes, and children's outdoor toys.

## Professional Mosquito Control Programs

Effective residential mosquito control in Edison and Piscataway addresses both the breeding sites and the adult mosquito population.

**Barrier Treatment:** Application of professional insecticide to vegetation — trees, shrubs, ornamental plantings — where adult mosquitoes rest during the day. Barrier treatments using backpack mist blowers provide 3–4 weeks of adult mosquito control per application.

**Larvicide:** Treatment of standing water sources that cannot be eliminated (retention ponds, ditches, ornamental water features) with biological or chemical larvicide that prevents larvae from developing into adults.

**Source Reduction:** Eliminating breeding sites on your property — clearing gutters, removing standing water in containers, addressing drainage problems — reduces mosquito populations at the source.

**Seasonal Program:** Monthly treatments from May through October provide continuous control through the peak mosquito season. Most program clients see 80–90% reduction in yard mosquito activity.

## Event Treatment

We also offer one-time treatment for specific events — backyard parties, outdoor weddings, graduation celebrations. Contact us at least a week before your event for best results.

## Mosquito-Borne Disease in Middlesex County

The Middlesex County Mosquito Control Commission monitors for West Nile virus and Eastern Equine Encephalitis (EEE) throughout the season. Professional mosquito control reduces your family's exposure to these pathogens. If you are concerned about mosquito activity near your home in Edison or Piscataway, contact Middlesex County Pest Control for a free yard assessment.`,
    faqs: [
      { q: 'How often do I need mosquito treatment?', a: 'Monthly treatments from May through October provide continuous control. Some clients opt for every-3-week service during peak summer months.' },
      { q: 'Is the treatment family-friendly?', a: 'Yes. Our professional mosquito barrier treatments use EPA-registered products applied by licensed technicians. Treated areas are ready for re-entry when dry, typically 30 minutes.' },
      { q: 'Can you eliminate all mosquitoes on my property?', a: 'No treatment eliminates 100% of mosquitoes, but professional programs consistently achieve 80–90% reduction. New mosquitoes can fly in from untreated areas.' },
      { q: 'Do you treat retention ponds?', a: 'Yes — we offer larvicide treatment for retention ponds, ditches, and other standing water sources on residential and commercial properties.' },
    ],
  },
  'how-to-tell-if-you-have-an-ant-infestation': {
    body: `Spotting a few ants in your kitchen is not necessarily a sign of an infestation — but knowing the difference matters. A few foraging ants can quickly become a major infestation without intervention. Understanding what you're seeing is the first step toward effective treatment.

## Foraging Ants vs. Active Infestation

Individual ants in your kitchen are typically scouts — workers from an outdoor or nearby indoor colony searching for food sources. Seeing a few scouts is normal and doesn't necessarily mean the colony is inside your home.

An active infestation is characterized by:
- Persistent ant trails leading to a food or water source
- Ants appearing in multiple locations throughout the home
- Ants present after repeated cleaning and removal
- Winged reproductive ants (swarmers) emerging indoors
- A large number of ants appearing after any food is left out

## Common Ant Species in Middlesex County

**Odorous House Ants** are the most common indoor ant species in Middlesex County. They smell like coconut when crushed, prefer sweets, and follow trails religiously. Their colonies are large (up to 100,000 workers) and spread easily through wall voids.

**Carpenter Ants** are large black ants that excavate wood for nesting. Seeing large carpenter ants inside your home — especially from late winter through spring — is a significant warning sign of an indoor nest. Look for sawdust-like frass near baseboards, window frames, or structural wood.

**Pavement Ants** nest under sidewalks, driveways, and slabs and can enter homes through foundation cracks. They are common in basements and first-floor areas.

**Pharaoh Ants** are tiny amber-colored ants that infest multi-family housing and healthcare facilities. They are extremely difficult to control with conventional spray treatments.

## Why Over-the-Counter Products Often Fail

Contact spray products kill worker ants on contact but do not affect the colony. Spraying ants you can see may scatter the colony and make the infestation harder to locate. For most ant species, professional bait treatments — which are carried back to the colony by forager ants — are far more effective.

## Signs Specific to Carpenter Ants

Carpenter ant infestations warrant specific attention. Warning signs include:
- Large black ants (about 1/2 to 5/8 inch) indoors, especially at night
- Sawdust-like frass below wooden structural elements
- Rustling sounds in walls
- Ants emerging near windows or doors in late winter (indoor nesting)

Carpenter ants indicate moisture-damaged wood. Finding the moisture source is as important as treating the ants.

## Professional Treatment for Ant Infestations in Middlesex County

Effective professional ant treatment begins with species identification. The right bait formulation, application method, and follow-up schedule depends entirely on the species involved.

Middlesex County Pest Control treats all common ant species throughout Middlesex County. Contact us for a free inspection if you're dealing with persistent ant activity.`,
    faqs: [
      { q: 'Why are ants so hard to control with store products?', a: 'Spray products kill worker ants on contact but don\'t reach the colony. Professional bait treatments are carried back to the queen and eliminate the source.' },
      { q: 'Are carpenter ants dangerous?', a: 'Carpenter ants don\'t eat wood but excavate it for nesting, causing structural damage over time. An indoor carpenter ant colony requires prompt professional treatment.' },
      { q: 'When is ant season in Middlesex County?', a: 'Ants are most active from spring through early fall in NJ. Carpenter ants often appear indoors in late winter when an established indoor colony becomes active.' },
      { q: 'How do professionals treat ant infestations?', a: 'After identifying the species, professionals use the appropriate bait formulation, crack-and-crevice treatment, and exterior perimeter treatment to eliminate the colony.' },
    ],
  },
  'tick-season-middlesex-county-nj': {
    body: `Ticks are a serious health concern for Middlesex County residents. New Jersey consistently ranks among the top states for Lyme disease cases, and Middlesex County's abundant parks, wooded edges, and suburban green spaces create significant tick exposure opportunities for families and pets.

## Tick Species in Middlesex County

**Deer Tick (Black-Legged Tick, Ixodes scapularis):** The primary Lyme disease vector in New Jersey. Deer ticks are small — nymphs (most likely to transmit disease) are about the size of a poppy seed. Adults are roughly the size of a sesame seed. Despite their name, deer ticks feed on a variety of hosts including white-footed mice (the primary reservoir for Lyme bacteria), birds, deer, and humans.

**American Dog Tick (Dermacentor variabilis):** Larger than the deer tick, primarily active in spring and summer. Can transmit Rocky Mountain spotted fever and tularemia.

**Lone Star Tick (Amblyomma americanum):** Increasingly common in NJ, identified by a white dot on the female's back. Aggressive biters. Associated with ehrlichiosis and alpha-gal syndrome.

## Tick Season in NJ

While deer ticks can be active year-round in mild conditions, peak activity occurs:
- **Spring (April–June):** Nymphs become active — this is when transmission risk is highest
- **Fall (September–November):** Adults are active and seeking hosts before winter

## Where Ticks Are Found in Middlesex County

Ticks don't jump or fly — they wait on vegetation for a host to brush past (a behavior called "questing"). They are concentrated in:
- The transitional zone between lawn and woods (the most dangerous area)
- Dense leaf litter and ornamental plantings
- Stone walls and woodpiles
- Long grass and overgrown vegetation
- Parks with significant deer populations

Middlesex County's extensive parkland — including Cheesequake State Park, Johnson Park, and South Brunswick's open spaces — all have significant tick populations.

## Protecting Your Family

**Landscape management:** Maintain a 3-foot buffer of wood chips or gravel between wooded areas and the lawn. Keep grass mowed short. Remove leaf litter from around the home.

**Personal protection:** Use EPA-registered repellents (DEET or picaridin) during outdoor activity. Do full-body tick checks after being outdoors. Shower within 2 hours of coming in from tick habitat.

**Pet protection:** Keep pets on tick preventative year-round in NJ. Pets are a primary route for tick introduction into homes.

**Professional yard treatment:** Yard tick treatments targeting the transitional zone and ornamental beds can reduce property tick populations by 80–90%.

## When to Seek Medical Attention

If you find an attached tick or develop symptoms after a tick bite — fever, fatigue, bullseye rash — seek medical attention promptly. Lyme disease is treatable with antibiotics when caught early.

Contact Middlesex County Pest Control for a professional tick control program for your property.`,
    faqs: [
      { q: 'When is tick season in Middlesex County, NJ?', a: 'Deer ticks are active year-round in mild conditions. Peak nymph activity (highest disease risk) is spring through early summer. Adult ticks peak in fall.' },
      { q: 'What diseases do ticks in NJ carry?', a: 'Deer ticks carry Lyme disease, anaplasmosis, babesiosis, and Powassan virus. American dog ticks can carry Rocky Mountain spotted fever. Lone star ticks carry ehrlichiosis.' },
      { q: 'How effective is professional yard tick treatment?', a: 'Treatments targeting tick harborage zones (wooded edges, ornamental beds, leaf litter) typically reduce property tick populations by 80–90% in treated areas.' },
      { q: 'How do I remove a tick properly?', a: 'Use fine-tipped tweezers, grasp the tick as close to the skin as possible, and pull upward with steady pressure. Do not twist. Clean the bite area thoroughly afterward.' },
    ],
  },
  'commercial-pest-control-nj-restaurants': {
    body: `Pest control is not optional for New Jersey restaurants — it is a health code requirement. Middlesex County food service operators face strict NJ Department of Health inspection standards, and a pest violation during a health inspection can result in fines, required closure, and permanent reputational damage.

## NJ Restaurant Pest Control Requirements

New Jersey's food service regulations require that all licensed food establishments maintain pest-free conditions. Key requirements include:

**Pest-free premises:** No evidence of pests — no droppings, no live insects, no gnaw marks — is permitted in food preparation, storage, or service areas.

**Written pest management program:** Most health inspection frameworks expect documented evidence of an ongoing pest management program for food service operations.

**Pest documentation:** Keeping records of pest management service visits, technician reports, and treatment logs is advisable and may be required during an inspection.

**Immediate reporting:** If pest activity is discovered, it must be addressed immediately — not at the next scheduled service visit.

## Pests of Concern in Middlesex County Restaurants

**Cockroaches** are the most serious pest issue for food service operations. German cockroaches in particular thrive in commercial kitchens with abundant heat, moisture, and food debris. They spread pathogens and trigger severe health code violations. Under-appliance harborage, drain crevices, and delivery cardboard are primary introduction routes.

**Rodents** (mice and rats) can enter through utility penetrations, delivery dock gaps, and foundation voids. Their presence in a commercial kitchen represents both a health code violation and a serious food contamination risk.

**Fruit flies and drain flies** breed in floor drains, mop buckets, and overripe produce. While less catastrophic than cockroaches, they are a consistent nuisance in restaurant environments.

**Stored product pests** (grain weevils, flour beetles) enter through deliveries and infest dry storage areas.

## Building a Compliant Pest Management Program

A compliant commercial pest management program for NJ restaurants includes:

1. **Regular scheduled service** — typically monthly or bi-monthly for restaurants
2. **Written service reports** after each visit documenting findings and treatments
3. **IPM approach** — Integrated Pest Management emphasizes non-chemical controls and targeted chemical application
4. **Emergency response** — your provider should offer rapid response to unexpected pest activity
5. **Staff training** recommendations — sanitation practices matter enormously
6. **Health inspection support** — documentation ready for inspector review

## Middlesex County Restaurant Areas

The dining corridors of New Brunswick (French Street, George Street), Edison's Oak Tree Road and Route 27 food service areas, and Woodbridge's Route 1 corridor all represent high-density restaurant environments where Middlesex County Pest Control provides scheduled commercial service.

Contact us to discuss a commercial pest management program tailored to your Middlesex County food service operation.`,
    faqs: [
      { q: 'How often should a NJ restaurant have pest control service?', a: 'Most restaurants require monthly service at minimum. High-volume operations or those with historical pest issues benefit from bi-monthly service.' },
      { q: 'What happens if a restaurant fails a pest-related health inspection?', a: 'Violations result in written citations and may require immediate corrective action. Serious violations can result in required closure until resolved.' },
      { q: 'What documents should I keep for health inspections?', a: 'Keep service reports from every pest control visit, the written pest management agreement, and any treatment logs. These should be available at the facility for inspection.' },
      { q: 'Can you provide same-day emergency service for a restaurant?', a: 'Yes — we prioritize emergency service requests for commercial food service clients throughout Middlesex County.' },
    ],
  },
  'wasp-nest-removal-when-to-call-professional': {
    body: `Summer in Middlesex County brings wasps — and with them, the temptation to handle nest removal yourself. That temptation can result in serious injury. Understanding when a wasp situation requires professional intervention is important for every homeowner.

## Types of Wasps in Middlesex County

**Yellow jackets** are the most aggressive common wasp species. They frequently nest underground, in wall voids, and in hollow trees. A single yellow jacket nest can contain thousands of workers, and disturbing the nest triggers immediate mass defensive response. Yellow jackets can sting repeatedly and will pursue threats well away from the nest.

**Paper wasps** build the familiar open, umbrella-shaped gray nests under eaves, on deck railings, and in shrubs. They are generally less aggressive than yellow jackets and will only sting if directly threatened or if the nest is disturbed. Small paper wasp nests can sometimes be handled carefully by homeowners, but any nest with more than a few cells warrants professional attention.

**Bald-faced hornets** build large, papery enclosed nests in trees and on structures. They are highly aggressive when disturbed and can spray venom at the eyes of perceived threats.

**Cicada killers** are large, solitary wasps that dig burrows in sandy soil. They look alarming but are not aggressive toward people — males cannot sting, and females rarely do.

## When to Call a Professional

**Always call a professional when:**
- The nest is in a wall void, ceiling, attic, or other enclosed structure
- The nest is underground
- The nest is large (larger than a baseball)
- Anyone in your household has a known allergy to bee or wasp stings
- The nest is in a high-traffic area like a children's play area
- The nest belongs to yellow jackets or hornets

**You may be able to handle yourself when:**
- A single paper wasp queen is building a small nest (2–5 cells) early in the season
- The nest is fully accessible, with no risk of disturbing a large colony
- You have appropriate protective equipment and a commercial wasp spray

## What Professional Treatment Involves

Professional wasp nest removal includes:
1. Identification of species and nest location
2. Treatment with professional-grade insecticide directly into or around the nest
3. Allowing time for residual activity to kill foragers returning to the nest
4. Removal of the nest structure when conditions allow
5. Sealing of entry points to prevent new nests in the same location

Same-day service is typically available for wasp nest calls throughout Middlesex County.`,
    faqs: [
      { q: 'Is it dangerous to remove a wasp nest myself?', a: 'Yes — especially for yellow jackets and hornets. A disturbed nest can release thousands of stinging insects within seconds. Professional protective equipment and product is strongly recommended.' },
      { q: 'How quickly can you remove a wasp nest?', a: 'We offer same-day and next-day service for wasp nest removal throughout Middlesex County.' },
      { q: 'What time of year are wasps most active?', a: 'Wasp colonies build through spring and summer, reaching peak size in late summer (August–September) before declining in fall. Late summer is when stinging encounters are most common.' },
      { q: 'What if the nest is inside my wall?', a: 'Wall void nests require professional treatment through a small opening to reach the nest interior. Never seal an active nest from the outside — it will force wasps into your living space.' },
    ],
  },
  'flea-infestations-new-jersey': {
    body: `New Jersey's climate and high rate of pet ownership make flea infestations a year-round concern for Middlesex County homeowners. Unlike some pests that are strictly seasonal, fleas can persist indoors throughout the year in heated homes — and a small problem can become a significant infestation remarkably quickly.

## The Flea Life Cycle

Understanding the flea life cycle is essential to understanding why professional treatment is necessary. Adult fleas — the ones you see jumping — represent only about 5% of the total flea population in an infested home. The other 95% are eggs, larvae, and pupae in your carpet, furniture, and bedding.

**Eggs** hatch within 1–10 days. **Larvae** develop in carpet fibers and cracks, feeding on adult flea feces. **Pupae** form within a cocoon that is highly resistant to insecticides — pupae can remain dormant for months, waiting for a vibration stimulus (vacuuming, footsteps) to trigger emergence. This is why flea problems often seem to reappear 2–3 weeks after treatment.

**Insect Growth Regulator (IGR)** is the key to breaking this cycle. IGR prevents larvae from developing into reproducing adults, stopping the population cycle over several weeks.

## How Fleas Enter Homes

**Pets** are the primary route. Cats and dogs pick up fleas from outdoor environments and other animals. A single infested pet introduced to a clean home will establish fleas in the environment within days.

**Wildlife:** Even homes without pets can develop flea infestations from raccoons, opossums, or stray cats that spend time near or under the structure. Wildlife-sourced flea infestations are often discovered after the wildlife leaves — the fleas remain and seek new hosts.

**Previous occupants:** Flea pupae can remain dormant in carpet for months. Moving into a previously infested home can result in a sudden adult flea emergence.

## What Professional Treatment Includes

Effective professional flea treatment:
1. Pre-treatment preparation (owner must vacuum and launder before treatment)
2. Application of professional-grade residual insecticide to all floor surfaces, furniture, and pet areas
3. IGR application to break the breeding cycle
4. Detailed follow-up instructions
5. Follow-up service at 2–3 weeks to address emerging adults from pupae

**Important:** Pet treatment by a veterinarian or with veterinarian-approved products must occur simultaneously with the home treatment. Treating the home without treating the pet will result in re-infestation.

## Why NJ Winters Don't Solve Flea Problems

Unlike outdoor insects, fleas in heated NJ homes remain active year-round. Winter provides no natural relief for an established indoor flea infestation. Professional treatment is required regardless of season.

Contact Middlesex County Pest Control for professional flea extermination throughout Middlesex County, NJ.`,
    faqs: [
      { q: 'Can I have fleas without pets?', a: 'Yes. Wildlife under decks or around the foundation can introduce fleas. Previous occupants of a home can leave dormant flea pupae in carpet.' },
      { q: 'Why do fleas come back after treatment?', a: 'Flea pupae are resistant to insecticides and hatch over 2–3 weeks after treatment. This is normal — a follow-up visit addresses emerging adults and confirms elimination.' },
      { q: 'Do I need to treat my pet too?', a: 'Yes — home treatment and pet treatment must occur together. A treated home will be re-infested within days if the pet is not also treated.' },
      { q: 'How should I prepare for flea treatment?', a: 'Vacuum all floors and furniture thoroughly, launder all pet bedding, and have all pets out of the home during treatment. Your technician will provide a complete preparation checklist.' },
    ],
  },
  'pest-control-tips-edison-woodbridge': {
    body: `Edison and Woodbridge are the two largest communities in Middlesex County, together home to well over 200,000 residents. Their size, diversity of housing types, and geographic characteristics create a wide range of pest pressures that homeowners in both communities deal with year-round.

## Edison: Pest Challenges in Middlesex County's Largest Township

Edison's enormous size — from the dense Route 1 corridor to quieter residential neighborhoods in the north — means pest pressures vary significantly by neighborhood.

**Rodents** are a concern throughout Edison, particularly near the Raritan Center business park and along major commercial corridors. Dense food service operations attract rodents, and adjacent residential areas can experience spillover pressure.

**Mosquitoes** are significant in Edison due to the township's numerous retention basins, drainage channels, and suburban landscaping that creates ideal standing water breeding habitat. Edison's warm summer months support large Culex mosquito populations.

**Termites** are a consistent concern in Edison's older established neighborhoods, where homes from the 1950s–1980s may have wood-soil contact points from original construction.

**Ants** — particularly carpenter ants and odorous house ants — are a top residential complaint in Edison throughout the spring and summer months.

## Woodbridge: Pest Pressures Near the Waterfront

Woodbridge Township's proximity to Staten Island, its Arthur Kill waterfront, and its major Route 9 and Garden State Parkway commercial corridors create distinct pest pressures.

**Rodents** are a significant concern in Woodbridge, particularly near the waterfront industrial areas, the Woodbridge Center mall corridor, and in older neighborhoods adjacent to commercial areas.

**Bed bugs** are a consistent concern in densely populated neighborhoods and multi-family housing.

**Cockroaches** affect commercial and multi-family properties throughout Woodbridge's denser communities including Avenel, Iselin, and Port Reading.

## Year-Round Pest Control Tips for Edison and Woodbridge Homeowners

**Spring:** This is prime ant and termite swarm season. Schedule a perimeter treatment and termite inspection. Repair any wood-soil contact from winter damage.

**Summer:** Mosquito and tick pressure peaks. Begin mosquito program in May. Keep gutters clean to eliminate standing water. Check for yellow jacket nests under eaves.

**Fall:** Rodent exclusion is critical as temperatures drop. Inspect the foundation and crawl space for gaps. Seal around all pipe penetrations.

**Winter:** Be alert for mouse activity indoors. Keep an eye for cockroach activity in kitchens. Bed bug inspections are appropriate any time of year.

Contact Middlesex County Pest Control for year-round residential and commercial pest management throughout Edison, Woodbridge, and all of Middlesex County.`,
    faqs: [
      { q: 'What pests are most common in Edison, NJ?', a: 'Ants, mosquitoes, rodents, termites, and wasps are the most common pest complaints in Edison throughout the year.' },
      { q: 'What pests are most common in Woodbridge, NJ?', a: 'Rodents (mice and rats), cockroaches, bed bugs, and ants are the most frequently reported pest issues in Woodbridge Township.' },
      { q: 'When should I schedule pest control in Middlesex County?', a: 'Schedule a spring perimeter treatment in April, mosquito treatments May–October, a fall rodent exclusion inspection, and a termite inspection annually.' },
      { q: 'Do you serve all neighborhoods in Edison and Woodbridge?', a: 'Yes — Middlesex County Pest Control serves every neighborhood in both Edison and Woodbridge Township.' },
    ],
  },
  'wildlife-removal-middlesex-county': {
    body: `Middlesex County's mix of suburban development and natural areas creates regular wildlife intrusion problems for homeowners throughout the county. Squirrels in attics, raccoons in trash cans, birds nesting in commercial buildings — these are not isolated incidents. They are predictable outcomes of suburban development pressing up against wildlife habitat.

## Most Common Wildlife Intrusions in Middlesex County

**Squirrels** are the most frequent attic intruder in Middlesex County. Gray squirrels are active year-round and seek warm, protected nesting sites — your attic is ideal. They typically enter through roof vents, gaps at fascia boards, and deteriorated soffit areas. Once inside, they build nests of leaves and insulation, gnaw on structural wood and wiring, and create entry pathways for mice and insects.

**Raccoons** are intelligent, adaptable, and strong. They are excellent climbers and can access roofs, remove poorly secured soffit panels, and gain entry through power vent openings. Raccoon mothers seek attics for denning, particularly in spring. A raccoon in an attic typically means juveniles are present as well.

**Birds** — primarily European starlings and house sparrows — nest in vents, soffits, and commercial building mechanical equipment. Nesting material in dryer vents is a fire hazard. Bird feces are corrosive and create slip hazards.

**Groundhogs** dig extensive burrow systems under decks, sheds, and concrete slabs. Their tunneling can undermine foundations and create significant structural risk over time.

**Opossums** are typically found under decks and in crawl spaces. They are not aggressive but their presence attracts fleas and can contaminate living areas.

## Why Professional Wildlife Removal Is Necessary

DIY wildlife removal attempts are dangerous and often ineffective. Animals that feel cornered can inflict serious bites and scratches. Improper exclusion — sealing entry points while animals are still inside — can result in animals dying in the structure (creating odor and secondary pest problems) or in animals breaking through adjacent areas to escape.

In New Jersey, specific wildlife species are protected and can only be legally trapped and relocated by a licensed wildlife control professional. Working without proper licensing risks significant fines.

## Our Wildlife Removal Process

Middlesex County Pest Control's licensed wildlife removal process:
1. Inspection to identify species, entry points, and extent of intrusion
2. Humane live trapping and removal per NJ DEP guidelines
3. One-way exclusion devices allowing animals to exit but not re-enter
4. Entry point sealing after all animals have vacated
5. Nest and fecal cleanup recommendations
6. Structural repair coordination referrals as needed

Contact us for wildlife removal service throughout Middlesex County.`,
    faqs: [
      { q: 'Is it legal to trap and relocate wildlife in NJ?', a: 'NJ DEP requires specific permits for trapping and relocating certain species. Our licensed wildlife control professionals are fully permitted for New Jersey wildlife removal.' },
      { q: 'What do I do if I find a squirrel in my attic?', a: 'Don\'t attempt to chase it out or seal the entry while it\'s inside. Call a professional — we use one-way exclusion devices that allow the squirrel to exit but not re-enter, then seal the opening.' },
      { q: 'Can raccoons damage my home?', a: 'Yes. Raccoons can tear off soffit panels, damage roof vents, crush insulation, and contaminate attic areas with feces that can carry Baylisascaris (raccoon roundworm).' },
      { q: 'How do I keep wildlife from returning?', a: 'After removal, professional exclusion work — sealing all potential entry points — is essential. We identify and seal every viable entry point to prevent re-infestation.' },
    ],
  },
  'how-often-should-you-get-pest-control-nj': {
    body: `New Jersey's four-season climate means pest pressure never fully stops. The question of how often to schedule professional pest control depends on your home type, location, pest history, and tolerance for risk — but there are general guidelines that serve most Middlesex County homeowners well.

## The Case for Year-Round Pest Management

Many homeowners think of pest control as a reactive service — you call when you have a problem. The most effective pest management is proactive. Scheduled treatments prevent infestations rather than responding to them.

Consider what happens to pest pressure in Middlesex County through the year:

**Spring:** Ant colonies become active and send out scouts. Termite swarms occur on warm days. Stinging insect queens begin building new nests. Mice that overwintered in your home become more active.

**Summer:** Mosquito, tick, and wasp populations peak. Flea season is at its height. Japanese beetles and other surface feeders emerge.

**Fall:** Rodents — mice and rats — actively seek winter harborage inside structures. Stink bugs begin entering homes through any available gap. Spiders move indoors.

**Winter:** Rodents remain active indoors. Cockroach populations in heated kitchens continue year-round. Bed bugs are unaffected by season.

## Recommended Service Frequency by Situation

**Standard residential home:** Quarterly interior and exterior service provides comprehensive year-round protection. This is the baseline recommendation for most Middlesex County single-family homes.

**Home with active pest history:** Bi-monthly service provides tighter coverage for homes that have had recurring ant, roach, or rodent activity.

**Home with specific concerns:** Supplemental monthly mosquito program (May–October), annual termite inspection, and fall rodent exclusion inspection are commonly added to a base quarterly program.

**Multi-family residential:** Monthly service is standard for apartments and condominiums.

**Commercial food service:** Monthly or bi-monthly service is typically required by NJ health codes.

## Seasonal Priority Schedule

For Middlesex County homeowners not on a regular program:

- **April:** Spring perimeter treatment for ants and exterior pests; termite inspection
- **May:** Begin mosquito program
- **June–September:** Monthly mosquito treatments
- **October:** Fall perimeter treatment; rodent exclusion inspection
- **As needed:** Wasp nest treatment, bed bug inspection, wildlife removal

The most cost-effective approach is a year-round program that includes scheduled visits and emergency response. Contact Middlesex County Pest Control to discuss a program that fits your home and budget.`,
    faqs: [
      { q: 'Is quarterly pest control enough for NJ homes?', a: 'For most single-family homes without specific pest history, quarterly service is an appropriate baseline. Homes with active issues may benefit from more frequent visits.' },
      { q: 'Do I need pest control in winter?', a: 'Yes — particularly for rodents and cockroaches, which remain active indoors year-round. Rodent activity typically peaks in fall and winter.' },
      { q: 'How much does regular pest control cost in Middlesex County?', a: 'Contact us for current pricing. Programs are priced based on home size and the services included. Most homeowners find the cost of regular service is far less than the cost of treating a major infestation.' },
      { q: 'Can I pause service and restart if I have a problem?', a: 'You can always call reactively, but reactive-only treatment is more expensive and less effective than prevention. Regular service is the best long-term value.' },
    ],
  },
  'bed-bug-prevention-guide-middlesex-county': {
    body: `Bed bugs are one of the most challenging pests to prevent and eliminate — and in Middlesex County's dense rental markets and multi-family housing, they are a persistent reality for both renters and landlords. Understanding how bed bugs spread and what both parties are responsible for is essential for managing the risk.

## How Bed Bugs Spread

Bed bugs are hitchhikers. They do not jump or fly — they transfer between hosts through direct contact with infested items. Primary spread routes include:

**Luggage and travel:** Hotels, motels, Airbnb rentals, and even high-end accommodations can harbor bed bugs. Infested luggage brought home is one of the most common introduction routes.

**Used furniture:** Purchasing used mattresses, upholstered furniture, or bed frames without inspection is extremely high risk. Free furniture left on the street should be avoided entirely.

**Laundry facilities:** Shared laundry facilities in multi-family buildings are a spread pathway. Bed bug-infested clothing can infest a dryer, which then transfers bugs to subsequent users.

**Multi-family housing:** Bed bugs travel through wall voids, electrical conduits, and plumbing chases. A single infested unit in New Brunswick, Perth Amboy, or any Middlesex County apartment building can spread to multiple adjacent units.

## Prevention for Renters

**Inspect before moving in:** Before moving into a new rental, inspect the mattress seams, box spring, and bed frame with a flashlight. Look for rust-colored staining, shed skins, and live bugs.

**Protect your mattress:** Mattress encasements designed for bed bug protection eliminate the mattress as a harborage site and make inspections easier.

**Inspect secondhand items:** Never bring home used furniture without careful inspection. Even new-looking items can harbor bugs.

**Use caution with laundry:** Transport clothing to and from shared laundry in sealed bags. Transfer laundry directly from dryer to bag — don't lay items on laundry facility surfaces.

**Report immediately:** In New Jersey, renters are required to report pest infestations to landlords promptly. Prompt reporting is in your interest — infestations are far easier to treat when caught early.

## Landlord Responsibilities in New Jersey

Under NJ housing codes, landlords are responsible for maintaining rental properties free from pest infestation. This includes bed bugs. Key landlord responsibilities include:

- Responding promptly to tenant pest reports
- Hiring a licensed pest control professional (not treating the unit yourself)
- Treating adjacent units when an infestation is confirmed
- Documenting all pest management activity

Landlords who fail to address reported infestations may face legal liability and housing code violations.

## When Prevention Fails

If you discover bed bugs despite taking precautions, contact a licensed pest control professional immediately. Do not use over-the-counter sprays — they are largely ineffective and may scatter bugs to new areas.

Middlesex County Pest Control provides professional bed bug inspections and treatment throughout Middlesex County for both individual units and multi-building programs.`,
    faqs: [
      { q: 'Are landlords in NJ required to treat bed bugs?', a: 'Yes. NJ housing codes require landlords to maintain rental units free from pest infestation, including bed bugs. A documented infestation must be professionally treated.' },
      { q: 'Can I see bed bugs without a magnifying glass?', a: 'Adult bed bugs are visible to the naked eye — about the size of an apple seed when fully fed. Eggs and nymphs are very small and harder to see without magnification.' },
      { q: 'Should I throw away my mattress if I have bed bugs?', a: 'Not necessarily. Mattress disposal is rarely required when professional heat or chemical treatment is performed. Your technician will advise based on the condition of the mattress.' },
      { q: 'How long does a bed bug inspection take?', a: 'A professional bed bug inspection typically takes 30–60 minutes per bedroom. Canine inspections can be faster for large properties.' },
    ],
  },
  'common-pests-perth-amboy-sayreville-nj': {
    body: `Perth Amboy and Sayreville are neighboring waterfront communities along the Raritan Bay in northern Middlesex County, and they share some distinctive pest challenges rooted in their geography, density, and character as established waterfront communities.

## Perth Amboy: Urban Waterfront Pest Challenges

Perth Amboy is one of New Jersey's oldest cities — a densely populated urban community with historic row houses, waterfront infrastructure, and a large multi-family housing stock. This environment creates specific pest pressures:

**Rodents** are a significant concern in Perth Amboy. Norway rats thrive in urban waterfront environments, establishing burrow networks near the Raritan Bay waterfront, in vacant lots, and in the older infrastructure areas of the city. Rats move readily between commercial and residential areas.

**Cockroaches** — particularly German cockroaches — are a persistent issue in Perth Amboy's multi-family housing and food service operations. The density and age of the housing stock creates ample harborage and interconnection opportunities.

**Bed bugs** are a consistent issue in Perth Amboy's rental housing market. High turnover rental properties with older furnishings create elevated bed bug exposure risk.

**Mosquitoes** and waterfront insects are significant near the Raritan Bay waterfront and the city's low-lying areas.

## Sayreville: Suburban Riverfront Pest Challenges

Sayreville is a more suburban community than Perth Amboy, with a mix of residential neighborhoods and industrial areas along the Raritan River and Raritan Bay. Key pest concerns in Sayreville include:

**Rodents** are present throughout Sayreville, particularly near the waterfront industrial areas and in older residential neighborhoods adjacent to the Raritan River corridor. The river provides both habitat and transportation corridors for rats.

**Mosquitoes** are a significant quality-of-life pest in Sayreville. The borough's waterfront character, numerous wetlands, and Raritan Bay proximity support large mosquito populations throughout summer.

**Ticks** are present in Sayreville's wooded residential areas and along the edges of the Cheesequake State Park area in southern Sayreville.

**Ants** — particularly carpenter ants — are common in Sayreville's older housing stock and in areas where moisture damage has created favorable nesting conditions.

## Prevention and Treatment Recommendations

For Perth Amboy homeowners and renters:
- Inspect for bed bugs when moving into or acquiring new furnishings
- Report rodent activity to landlords promptly (renters) or schedule professional exclusion (owners)
- Keep food in sealed containers and eliminate harborage near your property

For Sayreville homeowners:
- Schedule a spring mosquito program beginning in May
- Have a fall rodent exclusion inspection before temperatures drop
- Check for tick activity in wooded border areas

Middlesex County Pest Control provides expert residential and commercial pest management throughout Perth Amboy, Sayreville, and all 25 Middlesex County municipalities.`,
    faqs: [
      { q: 'What pests are most common in Perth Amboy?', a: 'Rodents (particularly Norway rats), German cockroaches, and bed bugs are the most frequently reported pest issues in Perth Amboy\'s urban residential and commercial environments.' },
      { q: 'What pests are most common in Sayreville?', a: 'Mosquitoes, rodents, ticks, and ants are the primary pest concerns for Sayreville homeowners, with waterfront location driving mosquito and rodent pressure.' },
      { q: 'Do you serve all neighborhoods in Perth Amboy and Sayreville?', a: 'Yes — Middlesex County Pest Control serves every neighborhood in both communities.' },
      { q: 'Is proximity to the Raritan Bay a pest risk factor?', a: 'Yes. Waterfront locations support higher Norway rat populations, larger mosquito breeding populations, and create moisture conditions that attract certain insects.' },
    ],
  },
};

const blogContent = { ...blogContentBase, ...blogContentExtra };

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title}`,
    description: post.excerpt,
    alternates: { canonical: `${DOMAIN}/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) notFound();

  const content = blogContent[post.slug];
  if (!content) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: DOMAIN },
  };

  // Convert basic markdown to paragraphs
  const paragraphs = content.body.split('\n\n').map((para, i) => {
    if (para.startsWith('## ')) {
      return <h2 key={i} className="text-2xl font-bold text-dark mt-8 mb-4">{para.replace('## ', '')}</h2>;
    }
    if (para.startsWith('**') && para.endsWith('**')) {
      return <p key={i} className="font-bold text-dark">{para.slice(2, -2)}</p>;
    }
    // Handle inline bold
    const parts = para.split(/\*\*(.*?)\*\*/g);
    if (parts.length > 1) {
      return (
        <p key={i} className="text-gray-700 leading-relaxed mb-4">
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
        </p>
      );
    }
    return <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>;
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-dark text-white py-12">
        <div className="container-main">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{post.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-400 text-sm">{post.readTime} read</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-400 text-sm">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        </div>
      </section>

      <section className="section-light">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <p className="text-lg text-gray-600 leading-relaxed mb-6 italic border-l-4 border-primary pl-4">{post.excerpt}</p>
              <div>{paragraphs}</div>

              <div className="mt-12 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-dark mb-6">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-4">
                  {content.faqs.map(faq => (
                    <div key={faq.q} className="bg-lightgray rounded-lg p-5">
                      <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside>
              <div className="bg-navy rounded-xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-3">Get Help Now</h3>
                <p className="text-blue-100 text-sm mb-5">Same-day service available throughout Middlesex County, NJ.</p>
                <Link href="/contact" className="block bg-primary text-white text-center px-6 py-3 rounded font-bold hover:bg-ctahover transition-colors mb-3">
                  Book Now
                </Link>
                <a href={`tel:${PHONE_RAW}`} className="block border-2 border-white text-white text-center px-6 py-3 rounded font-bold hover:bg-navyhover transition-colors">
                  {PHONE}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
