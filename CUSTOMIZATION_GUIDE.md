# Customization Guide

This guide will help you personalize your portfolio with your own information, links, and styling preferences.

## Quick Customization Checklist

### 1. Personal Information

#### Hero Section (`components/Hero.tsx`)

Replace placeholder links:

```typescript
// Line 35 - GitHub
href="https://github.com/YOUR_GITHUB_USERNAME"

// Line 41 - LinkedIn
href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"

// Line 47 - Email
href="mailto:YOUR_EMAIL@example.com"
```

Update your name and title:
```typescript
// Lines 11-17
<h1>Your Name</h1>
<h2>Your Professional Title</h2>
<p>Your personal tagline or elevator pitch...</p>
```

#### About Section (`components/About.tsx`)

Update your bio (Lines 39-52):
```typescript
<p>
  Write your first paragraph about your background...
</p>
<p>
  Second paragraph about your journey...
</p>
<p>
  Third paragraph about your interests...
</p>
```

#### Projects Section (`components/Projects.tsx`)

Update project URLs (Lines 20-60):
```typescript
{
  title: "Your Project Name",
  tagline: "Short catchy description",
  description: "Detailed 2-3 sentence description...",
  tags: ["React", "TypeScript", "etc"],
  liveUrl: "https://your-project-live-url.com",
  githubUrl: "https://github.com/yourusername/project-name",
  category: "Web Development" // or "Audio Engineering", "Music Technology"
}
```

To add more projects, copy the project object and paste it in the array.

#### Contact Section (`components/Contact.tsx`)

Update email address:
```typescript
// Line 125
href="mailto:YOUR_EMAIL@example.com"
```

#### Footer (`components/Footer.tsx`)

Update social links (Lines 16, 22, 28):
```typescript
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/YOUR_USERNAME"
href="mailto:YOUR_EMAIL@example.com"
```

#### Metadata (`app/layout.tsx`)

Update SEO information (Lines 8-17):
```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your portfolio description for search engines...",
  keywords: ["keyword1", "keyword2", "etc"],
  authors: [{ name: "Your Name" }],
  // ... rest of metadata
};
```

### 2. Skills & Technologies

#### Skills Section (`components/Skills.tsx`)

Update your skills (Lines 6-26):
```typescript
const skillCategories = [
  {
    category: "Your Category Name",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  // Add more categories...
];
```

### 3. Color Scheme

#### Global Colors (`app/globals.css`)

Customize the color palette (Lines 4-10):
```css
:root {
  --background: #0a0a0a;        /* Dark background */
  --foreground: #ededed;        /* Text color */
  --accent: #3b82f6;            /* Primary blue */
  --accent-hover: #2563eb;      /* Hover state blue */
  --card-bg: #111111;           /* Card background */
  --border: #1f1f1f;            /* Border color */
}
```

**Popular Color Schemes:**

**Green Tech:**
```css
--accent: #10b981;
--accent-hover: #059669;
```

**Purple Creative:**
```css
--accent: #8b5cf6;
--accent-hover: #7c3aed;
```

**Orange Energy:**
```css
--accent: #f97316;
--accent-hover: #ea580c;
```

**Red Bold:**
```css
--accent: #ef4444;
--accent-hover: #dc2626;
```

### 4. Typography

#### Font Family (`app/layout.tsx` and `app/globals.css`)

Change the font:

1. Import new font in `app/layout.tsx`:
```typescript
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
```

2. Apply font:
```typescript
<body className={poppins.className}>
```

**Popular Font Choices:**
- **Poppins**: Modern, friendly, professional
- **Montserrat**: Clean, geometric, contemporary
- **Roboto**: Neutral, readable, tech-focused
- **Raleway**: Elegant, stylish, artistic
- **Work Sans**: Professional, corporate

### 5. Animations

#### Animation Timing (`tailwind.config.ts`)

Adjust animation speed:
```typescript
animation: {
  'fade-in': 'fadeIn 0.8s ease-out',  // Slower fade
  'slide-up': 'slideUp 0.4s ease-out', // Faster slide
}
```

Disable animations (set to 0s):
```typescript
animation: {
  'fade-in': 'fadeIn 0s',
}
```

### 6. Adding New Sections

To add a new section:

1. Create component file `components/YourSection.tsx`:
```typescript
"use client";

export default function YourSection() {
  return (
    <section id="your-section" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Section Title
        </h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Import and add to `app/page.tsx`:
```typescript
import YourSection from "@/components/YourSection";

// In the main component:
<YourSection />
```

3. Add to navigation in `components/Navigation.tsx`:
```typescript
const navLinks = [
  // ... existing links
  { href: "#your-section", label: "Your Section" },
];
```

### 7. Project Images

To add project screenshots:

1. Save images to `/public` folder:
   - `public/project1.png`
   - `public/project2.png`
   - etc.

2. Update `components/Projects.tsx`:
```typescript
<div className="relative h-64 bg-[var(--card-bg)] rounded-t-xl overflow-hidden">
  <img
    src="/project1.png"
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
```

### 8. Contact Form Integration

To connect the contact form to a backend:

#### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `components/Contact.tsx`:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    setSubmitted(true);
  }
};
```

#### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Follow their React integration guide

#### Option 3: Custom API

Create `/app/api/contact/route.ts` and implement your email service.

### 9. Analytics (Optional)

#### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Create `components/Analytics.tsx`:
```typescript
import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  )
}
```
3. Add to `app/layout.tsx`

### 10. Resume/CV Download

Add a download button to the Hero or About section:

```typescript
<a
  href="/resume.pdf"
  download
  className="px-8 py-4 border border-blue-500 rounded-lg"
>
  Download Resume
</a>
```

Save your PDF resume to `/public/resume.pdf`.

## Advanced Customizations

### Dark/Light Mode Toggle

Would require adding theme context and toggle button. This is a medium-complexity addition.

### Blog Section

Create `/app/blog` directory with markdown files or integrate a headless CMS like Sanity or Contentful.

### Animation Library

Install Framer Motion for more advanced animations:
```bash
npm install framer-motion
```

### 3D Elements

Add Three.js or React Three Fiber for 3D graphics:
```bash
npm install three @react-three/fiber
```

## Testing Your Changes

After each customization:

```bash
# Check for errors
npm run dev

# Build to ensure no production errors
npm run build
```

Visit http://localhost:3000 and verify your changes work correctly.

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- React Docs: https://react.dev

---

Happy customizing! 🎨
