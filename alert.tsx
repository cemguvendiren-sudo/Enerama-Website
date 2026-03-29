export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#1B3A6B] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/80">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Enerama Environmental Technologies (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is 
              committed to protecting your personal data. This privacy policy explains how we collect, 
              use, and safeguard your information when you visit our website or engage with our services.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-primary">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Fill out our contact form</li>
              <li>Request a project assessment</li>
              <li>Subscribe to our communications</li>
              <li>Correspond with us via email or phone</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This information may include your name, company name, email address, phone number, 
              country, and details about your project requirements.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-primary">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Provide project assessments and technical consultations</li>
              <li>Send relevant communications about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-primary">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              data against unauthorized access, alteration, disclosure, or destruction. However, no 
              method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-primary">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              for which it was collected, including to satisfy legal, accounting, or reporting requirements.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-primary">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-primary">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this privacy policy or wish to exercise your rights, 
              please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: <a href="mailto:info@enerama.com" className="text-[#0D7377] hover:underline">info@enerama.com</a><br />
              Phone: <a href="tel:+18333637262" className="text-[#0D7377] hover:underline">+1 833-363-7262</a>
            </p>

            <h2 className="mt-10 text-2xl font-bold text-primary">Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
