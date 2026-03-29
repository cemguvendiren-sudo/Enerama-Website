import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react"

const timeline = [
  { year: "2013", event: "Core design validated — first operational unit" },
  { year: "2015", event: "First commercial liquid desiccant system deployed" },
  { year: "2017", event: "PCT patent filed for LiCl + Solar Thermal + PEM" },
  { year: "2019", event: "International expansion — projects in 3 countries" },
  { year: "2021", event: "Dragon platform ecosystem fully developed" },
  { year: "2023", event: "Mekasera SCADA launched for 24/7 monitoring" },
  { year: "2026", event: "11+ years of operation, zero critical failures" },
]

const values = [
  {
    icon: Target,
    title: "Outcome-Driven",
    description: "We measure success by your facility's performance, not by units shipped."
  },
  {
    icon: Users,
    title: "Full Accountability",
    description: "Every project includes design, manufacturing, installation, commissioning, and ongoing support."
  },
  {
    icon: Lightbulb,
    title: "Engineering Excellence",
    description: "Our systems are built with Grade-A Titanium and designed to last decades."
  },
  {
    icon: Shield,
    title: "Long-Term Partnership",
    description: "We stay with you post-commissioning through our 6-month babysitting program."
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1B3A6B] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl text-balance">
              We didn&apos;t set out to build a better air conditioner.
            </h1>
            <p className="mt-6 text-2xl text-[#E07B39] font-semibold">
              We set out to rethink what air can do.
            </p>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Enerama was founded on the belief that atmospheric control shouldn&apos;t be an afterthought. 
              We engineer complete environments — systems that dehumidify, sterilize, recover water, 
              and manage climate as an integrated whole.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                To deliver complete atmospheric resource management solutions that enable our clients 
                to achieve unprecedented control over their facility environments — while dramatically 
                reducing energy consumption and recovering valuable water resources.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We don&apos;t sell products. We deliver outcomes. Every Enerama project is designed, 
                manufactured, installed, and commissioned by our own engineers. We take full 
                responsibility for your facility&apos;s atmospheric performance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="rounded-lg border border-border bg-card p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D7377]/10">
                      <Icon className="h-5 w-5 text-[#0D7377]" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary">Our Journey</h2>
          <p className="mt-4 text-center text-muted-foreground">From vision to global deployment</p>
          
          <div className="mt-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-border lg:left-1/2 lg:-ml-px" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`relative flex items-start gap-6 lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`flex flex-1 ${index % 2 === 0 ? 'lg:justify-start lg:text-left' : 'lg:justify-end lg:text-right'}`}>
                      <div className="rounded-lg border border-border bg-card p-6 max-w-md">
                        <div className="text-sm font-bold text-[#0D7377]">{item.year}</div>
                        <p className="mt-2 text-foreground">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-[#1B3A6B] lg:relative lg:left-0">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div className="hidden flex-1 lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary">Manufacturing Excellence</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every Enerama system is manufactured in-house at our Turkish production facility. 
              We use Grade-A Titanium construction throughout our core systems — not because it&apos;s 
              easy, but because it&apos;s necessary for the corrosive environments where liquid 
              desiccant systems operate.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our vertical integration means we control every aspect of production quality. 
              When we say we take full responsibility for your project, we mean it — from 
              the raw materials that enter our factory to the final commissioning at your site.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B3A6B] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Work With Us?</h2>
          <p className="mt-4 text-white/80">Let&apos;s discuss how we can transform your facility&apos;s atmospheric performance.</p>
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
