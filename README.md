# Developer Portfolio

A modern, professional developer portfolio showcasing projects in audio engineering, web development, and music technology.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimization
- **Smooth Animations**: Fade-in and slide-up animations for engaging user experience
- **Contact Form**: Fully functional contact form with validation
- **Professional Design**: Clean, minimal aesthetic inspired by modern portfolio best practices

## Sections

1. **Hero** - Strong introduction with call-to-action buttons
2. **About** - Personal story and professional highlights
3. **Projects** - Featured projects with detailed descriptions, tech stacks, and links
4. **Skills** - Comprehensive tech stack visualization
5. **Contact** - Contact form with validation and direct email link
6. **Footer** - Social links and copyright information

## Projects Showcased

1. **Distortion Audio Plugin** - Professional JUCE VST3 audio processing
2. **Melody Generator** - AI-powered music composition tool
3. **Monolit Beatz Portfolio** - Modern music artist website
4. **Aurora Fine Art Services** - Luxury business landing page

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/elarmuzik1993/developer-portfolio.git
cd developer-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
# Create optimized production build
npm run build

# The static site will be in the /out directory
```

## Deployment

This portfolio is configured for static export and can be deployed to:

- **Vercel** (Recommended - zero config deployment)
- **GitHub Pages**
- **Netlify**
- **Any static hosting provider**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy on every push

### Deploy to GitHub Pages

1. Update `next.config.ts` if using a custom domain
2. Build the project: `npm run build`
3. Deploy the `/out` directory to GitHub Pages

## Customization

### Update Personal Information

Edit the following files:

- `components/Hero.tsx` - Your name, title, and social links
- `components/About.tsx` - Your bio and professional highlights
- `components/Projects.tsx` - Your project details
- `components/Skills.tsx` - Your skills and technologies
- `components/Contact.tsx` - Your email address
- `components/Footer.tsx` - Footer social links
- `app/layout.tsx` - SEO metadata

### Change Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --card-bg: #111111;
  --border: #1f1f1f;
}
```

### Add More Projects

Edit `components/Projects.tsx` and add new project objects to the `projects` array:

```typescript
{
  title: "Your Project",
  tagline: "Short description",
  description: "Detailed description...",
  tags: ["Tech", "Stack"],
  liveUrl: "https://...",
  githubUrl: "https://github.com/...",
  category: "Category"
}
```

## Project Structure

```
developer-portfolio/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page
├── components/
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── Navigation.tsx    # Navigation bar
│   ├── Projects.tsx      # Projects showcase
│   └── Skills.tsx        # Skills section
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Performance

- **Static Export**: Optimized for blazing-fast page loads
- **Responsive Images**: Unoptimized for static export compatibility
- **Minimal JavaScript**: Only essential client-side code
- **SEO Friendly**: Proper meta tags and semantic HTML

## License

MIT License - feel free to use this portfolio template for your own projects.

## Contact

For questions or feedback:
- Email: your.email@example.com
- GitHub: [@elarmuzik1993](https://github.com/elarmuzik1993)
- LinkedIn: [Boris Mishchenko](https://linkedin.com/in/yourusername)

---

Built with ❤️ using Next.js and Tailwind CSS
