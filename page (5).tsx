import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Heart, Warehouse, Factory, CloudRain, TreePine, Server, Pill } from "lucide-react"

const applications = [
  {
    icon: Leaf,
    name: "Indoor Farming",
    challenge: "Indoor farms require precise humidity control, CO₂ enrichment, and pathogen suppression — while minimizing energy costs and maximizing water efficiency.",
    solution: "The Dragon platform delivers integrated humidity control, CO₂ generation, natural air sterilization, and water recovery in a single system. This combination is unique globally.",
    benefits: [
      "Complete atmospheric control in one platform",
      "Water recovery for irrigation reuse",
      "Natural pathogen suppression without chemicals",
      "CO₂ enrichment for optimized plant growth",
      "40-70% energy savings vs. conventional HVAC"
    ],
    target: "For: vertical farms, plant factories, indoor grow operations, cannabis cultivation",
    color: "#1A7A4A"
  },
  {
    icon: Heart,
    name: "Healthcare",
    challenge: "Healthcare facilities require strict air quality standards, multi-zone climate control, and continuous pathogen suppression — often with limited space and high energy costs.",
    solution: "Dragon systems provide natural LiCl-based air sterilization with precise multi-zone temperature and humidity control. No chemical treatments required.",
    benefits: [
      "Natural pathogen suppression via LiCl properties",
      "Multi-zone climate control",
      "No chemical air treatments",
      "Hospital-grade air quality",
      "Reduced cross-contamination risk"
    ],
    target: "For: hospitals, clinics, surgical centers, long-term care facilities",
    color: "#E07B39"
  },
  {
    icon: Warehouse,
    name: "Food Storage & Drying",
    challenge: "Food storage demands precise humidity control to prevent spoilage. Drying operations need low-temperature processing to preserve product quality.",
    solution: "Dragon provides stable humidity control for storage and low-temperature drying capabilities that preserve product quality while reducing energy consumption.",
    benefits: [
      "Precise humidity control for storage",
      "Low-temperature drying capability",
      "Product quality preservation",
      "Extended shelf life",
      "Export-quality output"
    ],
    target: "For: cold storage facilities, food processing plants, agricultural drying operations",
    color: "#1B3A6B"
  },
  {
    icon: Factory,
    name: "Industrial",
    challenge: "Industrial facilities — from factories to cold storage to data centers — face diverse atmospheric challenges that conventional HVAC cannot efficiently address.",
    solution: "Dragon systems provide customized atmospheric control for any industrial application, with particular strengths in high-humidity environments and corrosive atmospheres.",
    benefits: [
      "Factory climate control",
      "Cold storage optimization",
      "High-humidity environment management",
      "Corrosive atmosphere handling",
      "Corrosion-resistant construction"
    ],
    target: "For: manufacturing plants, cold storage, industrial facilities",
    color: "#0D7377"
  },
  {
    icon: CloudRain,
    name: "Water from Air",
    challenge: "Water-stressed regions need reliable, efficient water generation. Conventional atmospheric water generators are energy-intensive and produce limited output.",
    solution: "Dragon systems extract 100+ liters per hour from atmospheric moisture, with up to 80% water recovery — critical for water-stressed regions.",
    benefits: [
      "100+ L/h water extraction",
      "80% water recovery",
      "Critical for water-stressed regions",
      "Solar thermal compatible",
      "Sustainable water source"
    ],
    target: "For: remote communities, agricultural operations, emergency water supply",
    color: "#0D7377"
  },
  {
    icon: TreePine,
    name: "Greenhouses",
    challenge: "Commercial greenhouses require humidity control, CO₂ enrichment, and water management — traditionally addressed by multiple separate systems.",
    solution: "A single Dragon platform delivers humidity control, CO₂ enrichment, and water recovery for greenhouse operations — simplifying operations while reducing costs.",
    benefits: [
      "Integrated humidity + CO₂ + water recovery",
      "Single unified platform",
      "Simplified operations",
      "Reduced system complexity",
      "Year-round climate optimization"
    ],
    target: "For: commercial greenhouses, nurseries, research facilities",
    color: "#1A7A4A"
  },
  {
    icon: Server,
    name: "Data Centers",
    challenge: "Server rooms require precise humidity control 24/7 — too dry causes static discharge, too humid causes condensation and hardware corrosion. Conventional HVAC creates temperature fluctuations that make this balance impossible to maintain.",
    solution: "LiCl-based surgical humidity precision without overcooling. Simultaneous air sterilization removes airborne particulates that damage sensitive electronics.",
    benefits: [
      "Precise RH control within ±5% tolerance, 24/7",
      "No overcooling — eliminates condensation risk on hardware",
      "Natural air sterilization removes damaging particulates",
      "40-70% energy savings vs conventional precision cooling",
      "24/7 remote Mekasera monitoring — instant alarm response"
    ],
    target: "For: hyperscale data centers, colocation facilities, enterprise server rooms",
    color: "#1B3A6B"
  },
  {
    icon: Pill,
    name: "Pharmaceutical & Cleanrooms",
    challenge: "Pharmaceutical manufacturing and cleanroom environments require GMP-compliant humidity and air quality standards. Any deviation causes batch failure, regulatory non-compliance, and product loss. Conventional systems use aggressive chemical filtration that itself introduces contamination risk.",
    solution: "Chemical-free LiCl pathogen suppression combined with precision humidity control. No filter replacement means no contamination risk from maintenance cycles. Multi-zone independent control allows simultaneous GMP zones within a single facility.",
    benefits: [
      "GMP-compliant humidity precision — continuous, documented",
      "Chemical-free sterilization — no contamination from filter maintenance",
      "Multi-zone: different GMP standards in different areas, one system",
      "Mekasera: full audit trail of all environmental parameters",
      "40-70% energy savings vs conventional cleanroom HVAC"
    ],
    target: "For: pharmaceutical manufacturing, medical device production, hospital cleanrooms, laboratories",
    color: "#E07B39"
  },
]

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1B3A6B] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Applications
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              The Dragon platform serves industries where conventional HVAC falls short. Each application 
              benefits from our integrated approach — combining dehumidification, water recovery, air 
              sterilization, and climate control in a single engineered solution.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {applications.map((app) => {
              const Icon = app.icon
              return (
                <div key={app.name} className="rounded-lg border border-border bg-card overflow-hidden">
                  <div 
                    className="flex items-center gap-4 px-6 py-4"
                    style={{ backgroundColor: app.color }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{app.name}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Challenge</h4>
                        <p className="mt-2 text-foreground">{app.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#0D7377]">Dragon Solution</h4>
                        <p className="mt-2 text-foreground">{app.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Benefits</h4>
                        <ul className="mt-2 space-y-1">
                          {app.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span 
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: app.color }}
                              />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        {app.target && (
                          <p className="mt-3 text-xs font-medium text-muted-foreground italic">{app.target}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B3A6B] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">Have a Different Application?</h2>
          <p className="mt-4 text-white/80">Our engineering team can design solutions for any atmospheric control challenge.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-[#E07B39] text-white hover:bg-[#E07B39]/90">
              <Link href="/contact">
                Start Your Project Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
