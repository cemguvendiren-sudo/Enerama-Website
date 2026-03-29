import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, RotateCcw, Sun, Thermometer, CircleCheck } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Absorption",
    icon: Droplets,
    description: "Humid air passes through our liquid desiccant solution (Lithium Chloride). The LiCl absorbs moisture from the air, delivering dry, conditioned air to your facility."
  },
  {
    number: "02",
    title: "Water Recovery",
    icon: Droplets,
    description: "The absorbed moisture is extracted from the diluted desiccant solution, producing clean water that can be collected and reused — up to 100+ liters per hour."
  },
  {
    number: "03",
    title: "Regeneration",
    icon: RotateCcw,
    description: "The diluted desiccant is heated to evaporate the absorbed water, regenerating the solution for continuous operation in a closed-loop cycle."
  },
  {
    number: "04",
    title: "Solar Advantage",
    icon: Sun,
    description: "Our patented solar thermal integration enables regeneration at just 50-70°C — low enough to utilize solar thermal collectors, dramatically reducing electrical consumption."
  },
  {
    number: "05",
    title: "Climate Output",
    icon: Thermometer,
    description: "The complete system delivers precise temperature and humidity control while simultaneously providing air sterilization and water recovery."
  },
]

const performanceData = [
  { metric: "Energy Savings", value: "40-70%", condition: "Compared to conventional HVAC" },
  { metric: "Water Extraction", value: "~100 L/h", condition: "At 13 kW input power" },
  { metric: "Water Efficiency", value: "4.1 L/kWh", condition: "At 26°C / 55% RH" },
  { metric: "Water Recovery", value: "Up to 80%", condition: "Of extracted moisture" },
  { metric: "Regeneration Temp", value: "50-70°C", condition: "Enables solar thermal" },
  { metric: "Operational Validation", value: "11+ years", condition: "Zero critical failures" },
  { metric: "Construction", value: "Grade-A Titanium", condition: "Corrosion-resistant" },
]

export default function TechnologyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1B3A6B] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl text-balance">
              Why conventional HVAC is broken — and what we did about it.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Traditional air conditioning wastes enormous amounts of energy cooling air just to remove moisture. 
              Our liquid desiccant technology separates dehumidification from cooling, achieving dramatic 
              efficiency gains while recovering water and providing natural air sterilization.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">How It Works</h2>
            <p className="mt-4 text-muted-foreground">Our five-step process for atmospheric resource management</p>
          </div>
          
          <div className="mt-16 space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              return (
                <div key={step.number} className={`flex flex-col gap-6 lg:flex-row lg:items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-flex items-center gap-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      <span className="text-4xl font-bold text-[#0D7377]/20">{step.number}</span>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg ml-auto">{step.description}</p>
                  </div>
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#0D7377]">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1 lg:block hidden" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Data */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Performance Data</h2>
            <p className="mt-4 text-muted-foreground">Validated specifications under real-world conditions</p>
          </div>
          
          <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-[#1B3A6B]">
                  <th className="px-6 py-5 text-left text-base font-semibold text-white">Metric</th>
                  <th className="px-6 py-5 text-left text-base font-semibold text-white">Value</th>
                  <th className="px-6 py-5 text-left text-base font-semibold text-white hidden md:table-cell">Conditions</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((row, index) => (
                  <tr key={row.metric} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/50'}>
                    <td className="px-6 py-5 text-base font-medium text-foreground">{row.metric}</td>
                    <td className="px-6 py-5 text-lg font-bold text-[#0D7377]">{row.value}</td>
                    <td className="px-6 py-5 text-base text-muted-foreground hidden md:table-cell">{row.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center italic">
            All values stated with operating conditions. Performance varies by facility parameters.
          </p>
        </div>
      </section>

      {/* Patent Section */}
      <section className="bg-[#1B3A6B] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Protected Innovation — <span className="text-[#0D7377]">PCT Patent Filed</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
              Our patent covers the unique integration of four breakthrough technologies into a single unified system.
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">LiCl Liquid Desiccant</h3>
              <p className="mt-2 text-sm text-white/70">Natural humidity absorption with inherent antimicrobial properties</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">Solar Thermal Regeneration</h3>
              <p className="mt-2 text-sm text-white/70">Low-temperature regeneration enables renewable energy integration</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">PCM Thermal Storage (SAT)</h3>
              <p className="mt-2 text-sm text-white/70">Phase change materials for efficient thermal energy storage</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">PEM Energy Optimization</h3>
              <p className="mt-2 text-sm text-white/70">Advanced membrane technology for efficient water extraction</p>
            </div>
          </div>
          
          <p className="mt-10 text-center text-lg font-semibold text-[#0D7377]">
            No known global equivalent for this integrated system architecture.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B3A6B] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to See the Technology in Action?</h2>
          <p className="mt-4 text-white/80">Request a project assessment to see how our technology can transform your facility.</p>
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
