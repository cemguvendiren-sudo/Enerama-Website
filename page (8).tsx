"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Globe } from "lucide-react"

const applicationTypes = [
  "Indoor Farming",
  "Healthcare",
  "Food Storage & Drying",
  "Industrial",
  "Water Generation",
  "Greenhouses",
  "Data Centers",
  "Pharmaceutical & Cleanrooms",
  "Other"
]

const primaryGoals = [
  "Energy Savings",
  "Water Recovery",
  "Air Quality",
  "Humidity Control",
  "Full Atmospheric Control"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    country: "",
    applicationType: "",
    primaryGoal: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1B3A6B] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Every project starts with a conversation.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Our engineering team provides a free facility assessment — no commitment required. 
              Tell us about your project and we&apos;ll show you what Dragon can do for your facility.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Reach out directly or fill out the form and our engineering team will respond within 24 hours.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D7377]/10">
                    <Phone className="h-5 w-5 text-[#0D7377]" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <a href="tel:+18333637262" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 833-363-7262
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D7377]/10">
                    <Mail className="h-5 w-5 text-[#0D7377]" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a href="mailto:info@enerama.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@enerama.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D7377]/10">
                    <Globe className="h-5 w-5 text-[#0D7377]" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Website</div>
                    <a href="https://www.enerama.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      www.enerama.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="rounded-lg border border-border bg-card p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1A7A4A]/10">
                    <svg className="h-8 w-8 text-[#1A7A4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We&apos;ve received your request and our engineering team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-8">
                  <h2 className="text-xl font-bold text-foreground">Request Project Assessment</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                  
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="you@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-foreground">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your country"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="applicationType" className="block text-sm font-medium text-foreground">
                        Application Type *
                      </label>
                      <select
                        id="applicationType"
                        name="applicationType"
                        required
                        value={formData.applicationType}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select application type</option>
                        {applicationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="primaryGoal" className="block text-sm font-medium text-foreground">
                        Primary Goal *
                      </label>
                      <select
                        id="primaryGoal"
                        name="primaryGoal"
                        required
                        value={formData.primaryGoal}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select primary goal</option>
                        {primaryGoals.map((goal) => (
                          <option key={goal} value={goal}>{goal}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#E07B39] text-white hover:bg-[#E07B39]/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request Project Assessment"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
