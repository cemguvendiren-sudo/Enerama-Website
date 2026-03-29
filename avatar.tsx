import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Thermometer, Wind, Leaf, Snowflake, Sun, Fan, Monitor } from "lucide-react"

const products = [
  {
    icon: Thermometer,
    name: "Dragon Climate Control System",
    description: "The core liquid desiccant platform that forms the heart of every Dragon installation.",
    features: [
      "50-1,200 L/h dehumidification capacity",
      "Integrated water recovery system",
      "Grade-A Titanium construction",
      "Low-temperature regeneration (50-70°C)"
    ],
    color: "#1B3A6B"
  },
  {
    icon: Wind,
    name: "Dragon Air Purifier",
    description: "Natural pathogen suppression through Lithium Chloride properties — no chemicals required.",
    features: [
      "LiCl-based natural sterilization",
      "Effective against bacteria and viruses",
      "No chemical treatments needed",
      "Continuous air treatment"
    ],
    color: "#0D7377"
  },
  {
    icon: Leaf,
    name: "Dragon CO₂ Generator",
    description: "Controlled CO₂ enrichment specifically designed for indoor farming applications.",
    features: [
      "Precise CO₂ level control",
      "Optimized for plant growth",
      "Integration with climate system",
      "Automated monitoring"
    ],
    color: "#1A7A4A"
  },
  {
    icon: Snowflake,
    name: "Dragon Air & Water Cooled Chillers",
    description: "Sensible load management using premium Hanbell compressors for reliable cooling.",
    features: [
      "Hanbell compressor technology",
      "Air and water cooled options",
      "High efficiency operation",
      "Integrated with Dragon platform"
    ],
    color: "#1B3A6B"
  },
  {
    icon: Sun,
    name: "Dragon Solar Thermal + PEM",
    description: "Patented solar thermal integration that replaces electrical heaters with renewable energy.",
    features: [
      "PCT patented technology",
      "PCM thermal storage",
      "Replaces electrical heaters",
      "40-70% energy reduction"
    ],
    color: "#E07B39"
  },
  {
    icon: Fan,
    name: "Dragon Fresh Air & Exhaust Units",
    description: "Pre-conditioned fresh air intake systems for optimal indoor air quality.",
    features: [
      "Pre-conditioning of outside air",
      "Energy recovery capabilities",
      "Balanced ventilation",
      "Custom airflow design"
    ],
    color: "#0D7377"
  },
  {
    icon: Monitor,
    name: "Mekasera SCADA Platform",
    description: "24/7 remote monitoring and control across web, iOS, and Android platforms. The nerve center of every Dragon installation.",
    features: [
      "Web, iOS, and Android apps",
      "Real-time monitoring & alerts",
      "Remote system control",
      "Performance analytics & reporting",
      "Full audit trail for compliance"
    ],
    color: "#0D7377"
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1B3A6B] py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[#0D7377]">Dragon Platform</p>
            <h1 className="mt-4 text-[28px] leading-tight font-black tracking-tight text-white text-left md:text-4xl lg:text-6xl">
              Dragon is not a product.<br />
              <span className="text-[#E07B39]">It is an ecosystem.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              The Dragon platform is a complete atmospheric management ecosystem. Each component 
              is designed to work seamlessly with the others, delivering integrated climate control, 
              dehumidification, air purification, water recovery, and monitoring from a single unified system.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon
              const isPCTPatented = product.name === "Dragon Solar Thermal + PEM"
              const isMekasera = product.name === "Mekasera SCADA Platform"
              return (
                <div key={product.name} className={`group rounded-lg border border-border border-t-4 border-t-[#0D7377] bg-card p-6 md:p-8 transition-all hover:shadow-lg ${isMekasera ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div 
                      className="flex h-14 w-14 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${product.color}15` }}
                    >
                      <Icon className="h-7 w-7" style={{ color: product.color }} />
                    </div>
                    {isPCTPatented && (
                      <span className="rounded-full bg-[#E07B39] px-3 py-1 text-xs font-semibold text-white">
                        PCT Patented
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{product.name}</h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{product.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: product.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-[#1B3A6B] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">Integrated by Design</h2>
            <p className="mt-8 text-xl text-white leading-relaxed">
              Every Dragon component is engineered to work as part of a unified system. We don&apos;t 
              sell individual units — we design and commission complete solutions tailored to your 
              facility&apos;s specific requirements.
            </p>
            <p className="mt-6 text-xl text-white leading-relaxed">
              Your Dragon installation is specified, manufactured, installed, and commissioned by 
              Enerama engineers. We take full responsibility for system performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B3A6B] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Configure Your Dragon Platform</h2>
          <p className="mt-4 text-white/80">Let our engineers design the optimal system configuration for your facility.</p>
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
