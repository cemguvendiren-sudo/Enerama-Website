import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const processSummary = [
  { step: "01", name: "Project Design", duration: "4-8 weeks", who: "Enerama Engineers", output: "System Architecture" },
  { step: "02", name: "Custom Manufacturing", duration: "8-12 weeks", who: "Enerama Factory", output: "Project-Specific Equipment" },
  { step: "03", name: "Installation", duration: "2-4 weeks", who: "Enerama Engineers", output: "Installed System" },
  { step: "04", name: "Commissioning", duration: "1-2 weeks", who: "Enerama Engineers", output: "Operational System" },
  { step: "05", name: "6-Month Babysitting", duration: "6 months", who: "Enerama Engineers", output: "Optimized Performance" },
  { step: "06", name: "Optional MSA", duration: "Ongoing", who: "Enerama Support", output: "Continued Excellence" },
]

const processDetails = [
  {
    step: "01",
    title: "PROJECT DESIGN",
    color: "#1B3A6B",
    description: "Every project begins with a comprehensive facility assessment. Our engineers analyze your space, requirements, and operational parameters to design a system architecture that delivers exactly the performance you need.",
    details: [
      "On-site facility assessment",
      "Psychrometric analysis",
      "Load calculations and system sizing",
      "Complete system architecture design",
      "Performance specifications and guarantees"
    ]
  },
  {
    step: "02",
    title: "CUSTOM MANUFACTURING",
    color: "#0D7377",
    description: "Your Dragon system is manufactured in-house at our Turkish production facility. Every unit is built specifically for your project using Grade-A Titanium construction.",
    details: [
      "Project-specific manufacturing",
      "Grade-A Titanium construction",
      "In-house quality control",
      "Factory testing and validation",
      "Custom configuration for your facility"
    ]
  },
  {
    step: "03",
    title: "INSTALLATION",
    color: "#1B3A6B",
    description: "Enerama engineers install your system directly. We do not subcontract installation — the same team that designed and built your system will install it.",
    details: [
      "Direct Enerama engineer installation",
      "No subcontracting",
      "Integrated with existing infrastructure",
      "Complete mechanical and electrical installation",
      "On-site supervision throughout"
    ]
  },
  {
    step: "04",
    title: "COMMISSIONING",
    color: "#0D7377",
    description: "After installation, our engineers perform comprehensive commissioning to verify performance, calibrate systems, and train your operators.",
    details: [
      "Performance verification testing",
      "System calibration and optimization",
      "Operator training program",
      "Documentation handover",
      "Performance baseline establishment"
    ]
  },
  {
    step: "05",
    title: "6-MONTH BABYSITTING",
    color: "#E07B39",
    description: "Every Enerama project includes six months of intensive post-commissioning support. Real engineers, seasonal calibration, and monthly performance reports — all included.",
    details: [
      "Included in every project",
      "Real engineers (not call centers)",
      "Seasonal calibration adjustments",
      "Monthly performance reports",
      "Proactive issue identification"
    ]
  },
  {
    step: "06",
    title: "OPTIONAL MSA",
    color: "#1A7A4A",
    description: "After your babysitting period, you can continue with an optional Maintenance Service Agreement for ongoing support and performance optimization.",
    details: [
      "Post-babysitting maintenance agreement",
      "Performance-linked options available",
      "Preventive maintenance schedules",
      "Priority support access",
      "Continuous system optimization"
    ]
  },
]

export default function HowWeWorkPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1B3A6B] py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-[28px] leading-tight font-bold tracking-tight text-white text-left md:text-4xl lg:text-5xl text-balance">
              From concept to commissioning — and beyond.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              We don&apos;t just install equipment and leave. Every Enerama project follows a structured 
              six-step process that takes you from initial assessment through commissioning and into 
              long-term operational support.
            </p>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-[#1B3A6B]">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Step</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Phase</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white hidden md:table-cell">Team</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white hidden lg:table-cell">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {processSummary.map((row, index) => (
                    <tr key={row.step} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/50'}>
                      <td className="px-6 py-4 text-sm font-bold text-[#0D7377]">{row.step}</td>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{row.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{row.duration}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground hidden md:table-cell">{row.who}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground hidden lg:table-cell">{row.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-8">
            {processDetails.map((process) => (
              <div key={process.step} className="rounded-lg border border-border bg-card overflow-hidden">
                <div 
                  className="px-4 py-3 md:px-6 md:py-4"
                  style={{ backgroundColor: process.color }}
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                    <span className="text-lg md:text-2xl font-bold text-white/50">STEP {process.step}</span>
                    <h3 className="text-base md:text-xl font-bold text-white">{process.title}</h3>
                  </div>
                </div>
                <div className="p-4 md:p-6 lg:p-8">
                  <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                  <ul className="mt-4 md:mt-6 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {process.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-foreground pl-2 md:pl-0">
                        <span 
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" 
                          style={{ backgroundColor: process.color }} 
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability Statement */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="text-2xl font-semibold text-primary leading-relaxed lg:text-3xl">
              &ldquo;We are not interested in selling units. We are interested in delivering outcomes.&rdquo;
            </blockquote>
            <p className="mt-6 text-xl text-[#E07B39] font-medium">
              The difference is accountability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B3A6B] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to Start Your Project?</h2>
          <p className="mt-4 text-white/80">Begin with a free facility assessment — the first step in our proven process.</p>
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
