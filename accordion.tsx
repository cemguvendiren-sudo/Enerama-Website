import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, Wind, Thermometer, Zap, Leaf, Heart, Warehouse, Factory, CloudRain, TreePine, Server, Pill } from "lucide-react"

const stats = [
  { value: "40-70%", label: "Energy Savings" },
  { value: "100+ L/h", label: "Water Extraction" },
  { value: "2-4 Year", label: "Client ROI" },
  { value: "6-Month", label: "Babysitting Included" },
]

const functions = [
  { name: "Dehumidification", description: "Precise humidity control using liquid desiccant absorption" },
  { name: "Water Recovery", description: "Extract and recover water from atmospheric moisture" },
  { name: "Air Sterilization", description: "Natural pathogen suppression through LiCl properties" },
  { name: "Climate Control", description: "Full temperature and humidity management" },
  { name: "Energy Efficiency", description: "Solar thermal integration reduces electrical consumption" },
]

const sectors = [
  { name: "Indoor Farming", icon: Leaf },
  { name: "Healthcare", icon: Heart },
  { name: "Food Storage", icon: Warehouse },
  { name: "Industrial", icon: Factory },
  { name: "Water Generation", icon: CloudRain },
  { name: "Greenhouses", icon: TreePine },
  { name: "Data Centers", icon: Server },
  { name: "Pharmaceutical", icon: Pill },
]

const trustItems = [
  { value: "16", label: "Projects" },
  { value: "3", label: "Countries" },
  { value: "11+", label: "Years Zero Failures" },
  { value: "PCT", label: "Patent" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1B3A6B] py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Technical grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A6B] via-transparent to-[#0D7377]/20" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-[28px] leading-tight font-bold tracking-tight text-white md:text-4xl lg:text-6xl text-balance text-left">
              We don&apos;t sell climate systems. We deliver working environments.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Enerama takes full responsibility for your facility&apos;s atmospheric performance — from first design to final handover and beyond.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-[#E07B39] text-white hover:bg-[#E07B39]/90">
                <Link href="/contact">
                  Start Your Project Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0D7377] py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[32px] font-bold text-white md:text-3xl lg:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Platform Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl">One Platform. Five Functions.</h2>
            <p className="mt-4 text-muted-foreground">Complete atmospheric control from a single integrated system</p>
          </div>
          
          <div className="mt-10 md:mt-12 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {functions.map((func, index) => {
              const icons = [Droplets, CloudRain, Wind, Thermometer, Zap]
              const Icon = icons[index]
              return (
                <div key={func.name} className="rounded-lg border-2 border-[#0D7377]/30 bg-card p-6 md:p-8 text-center transition-all hover:border-[#0D7377]/60 hover:shadow-md">
                  <div className="mx-auto flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#0D7377]/10">
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-[#0D7377]" />
                  </div>
                  <h3 className="mt-4 md:mt-5 text-lg font-semibold text-foreground">{func.name}</h3>
                  <p className="mt-2 md:mt-3 text-base text-muted-foreground leading-relaxed">{func.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-primary lg:text-3xl">Industries We Serve</h2>
          <div className="mt-10 md:mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8 md:gap-x-8 md:gap-y-10">
            {sectors.map((sector) => {
              const Icon = sector.icon
              return (
                <div key={sector.name} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className="h-8 w-8 md:h-9 md:w-9 text-[#1B3A6B]" />
                  </div>
                  <span className="mt-3 md:mt-4 text-sm font-semibold text-foreground">{sector.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold text-primary lg:text-3xl">{item.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B3A6B] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">Ready to Transform Your Facility?</h2>
          <p className="mt-4 text-white/80">Every project starts with a free facility assessment — no commitment required.</p>
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
