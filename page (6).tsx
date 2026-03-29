import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lock, MapPin, TrendingUp } from "lucide-react"

const caseStudies = [
  {
    sector: "Dry Goods Storage",
    location: "Turkey",
    description: "A large-scale dry goods storage facility required precise humidity control to prevent product degradation while minimizing energy costs.",
    results: [
      "40-55% energy savings compared to previous HVAC system",
      "Stable humidity levels year-round",
      "Water recovery system provides facility water needs",
      "Zero product loss due to humidity issues since installation"
    ],
    metrics: {
      energy: "40-55%",
      label: "Energy Savings"
    }
  },
  {
    sector: "Fresh Produce Drying",
    location: "Kozan, Turkey",
    description: "A fresh produce drying operation needed low-temperature drying capabilities to produce export-quality dried products while preserving nutritional value.",
    results: [
      "Low-temperature drying preserves product quality",
      "Export-quality output achieved consistently",
      "Reduced drying time compared to conventional methods",
      "Year-round operation regardless of weather"
    ],
    metrics: {
      energy: "Export",
      label: "Quality Output"
    }
  },
  {
    sector: "Indoor Farming",
    location: "USA, Switzerland, Turkey",
    description: "Multiple indoor farming facilities across three countries deployed the full Dragon platform for integrated atmospheric control.",
    results: [
      "Full Dragon platform deployment",
      "Year-round production capability",
      "Integrated humidity, CO₂, and sterilization",
      "Water recovery for irrigation reuse",
      "Consistent crop quality across all locations"
    ],
    metrics: {
      energy: "3",
      label: "Countries"
    }
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1B3A6B] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Case Studies
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Real projects. Real results. See how the Dragon platform delivers measurable outcomes 
              across industries and geographies.
            </p>
            <div className="mt-8 flex items-center gap-3 text-white/60">
              <Lock className="h-5 w-5" />
              <span className="text-sm">Client names protected by NDA — described by sector and geography only.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={study.sector} className="rounded-lg border border-border bg-card overflow-hidden">
                <div className="grid lg:grid-cols-4">
                  {/* Metric Block */}
                  <div className="bg-[#0D7377] p-8 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-bold text-white">{study.metrics.energy}</div>
                    <div className="mt-2 text-sm text-white/80">{study.metrics.label}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-3 p-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="text-2xl font-bold text-foreground">{study.sector}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {study.location}
                      </div>
                    </div>
                    
                    <p className="mt-4 text-muted-foreground leading-relaxed">{study.description}</p>
                    
                    <div className="mt-6">
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#0D7377]">
                        <TrendingUp className="h-4 w-4" />
                        Results
                      </h4>
                      <ul className="mt-3 grid gap-2 md:grid-cols-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E07B39]" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary lg:text-4xl">16</div>
              <div className="mt-2 text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary lg:text-4xl">3</div>
              <div className="mt-2 text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary lg:text-4xl">11+</div>
              <div className="mt-2 text-sm text-muted-foreground">Years Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1A7A4A] lg:text-4xl">0</div>
              <div className="mt-2 text-sm font-semibold text-foreground">Critical Failures</div>
              <div className="mt-1 text-xs text-muted-foreground">Across 16 projects, 11+ years of continuous operation.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B3A6B] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Be Our Next Success Story?</h2>
          <p className="mt-4 text-white/80">Start with a free facility assessment to see what Dragon can do for you.</p>
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
