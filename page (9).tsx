@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  /* Enerama Brand Colors */
  --navy: #1B3A6B;
  --teal: #0D7377;
  --orange: #E07B39;
  --green: #1A7A4A;
  
  /* Semantic tokens using brand colors */
  --background: #ffffff;
  --foreground: #1B3A6B;
  --card: #ffffff;
  --card-foreground: #1B3A6B;
  --popover: #ffffff;
  --popover-foreground: #1B3A6B;
  --primary: #1B3A6B;
  --primary-foreground: #ffffff;
  --secondary: #0D7377;
  --secondary-foreground: #ffffff;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --accent: #E07B39;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --destructive-foreground: #ffffff;
  --border: #e2e8f0;
  --input: #e2e8f0;
  --ring: #1B3A6B;
  --chart-1: #1B3A6B;
  --chart-2: #0D7377;
  --chart-3: #E07B39;
  --chart-4: #1A7A4A;
  --chart-5: #64748b;
  --radius: 0.5rem;
}

.dark {
  --background: #0f172a;
  --foreground: #f8fafc;
  --card: #1e293b;
  --card-foreground: #f8fafc;
  --popover: #1e293b;
  --popover-foreground: #f8fafc;
  --primary: #E07B39;
  --primary-foreground: #ffffff;
  --secondary: #0D7377;
  --secondary-foreground: #ffffff;
  --muted: #334155;
  --muted-foreground: #94a3b8;
  --accent: #1B3A6B;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --destructive-foreground: #ffffff;
  --border: #334155;
  --input: #334155;
  --ring: #E07B39;
}

@theme inline {
  --font-sans: 'Inter', 'Geist', 'Geist Fallback', sans-serif;
  --font-mono: 'Geist Mono', 'Geist Mono Fallback', monospace;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  
  /* Brand color utilities */
  --color-navy: var(--navy);
  --color-teal: var(--teal);
  --color-orange: var(--orange);
  --color-green: var(--green);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
