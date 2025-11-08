# Deployment Guide

This portfolio is configured for static export and can be deployed to various platforms.

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy your Next.js portfolio:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Professional developer portfolio"
   git branch -M main
   git remote add origin https://github.com/elarmuzik1993/developer-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy automatically
   - Your site will be live at `https://your-project.vercel.app`

3. **Custom Domain (Optional)**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

## Deploy to GitHub Pages

1. **Update next.config.ts** (if using custom domain):
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     basePath: '/developer-portfolio', // Only if not using custom domain
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy the /out directory**:
   ```bash
   # Install gh-pages package
   npm install --save-dev gh-pages

   # Add deploy script to package.json
   # "scripts": {
   #   "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
   # }

   # Deploy
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: gh-pages / (root)
   - Save

Your site will be available at `https://elarmuzik1993.github.io/developer-portfolio/`

## Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Deploy
   netlify deploy --prod --dir=out
   ```

   Or use Netlify's drag-and-drop: Visit [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `/out` folder.

## Before Deploying

### 1. Update Personal Information

Replace placeholder text in these files:

- `components/Hero.tsx` - Line 35, 41, 47: GitHub, LinkedIn, Email links
- `components/About.tsx` - Update bio text
- `components/Projects.tsx` - Lines 24, 32: Update GitHub URLs
- `components/Contact.tsx` - Line 125: Email address
- `components/Footer.tsx` - Lines 16, 22, 28: Social links
- `app/layout.tsx` - Update SEO metadata
- `README.md` - Update all placeholder links

### 2. Add Screenshots (Optional)

Add project screenshots to the `/public` folder:
- `public/distortion.png`
- `public/melody-generator.png`
- `public/monolit-beatz.png`
- `public/aurora.png`

Then update `components/Projects.tsx` to include images.

### 3. Test Locally

```bash
# Development server
npm run dev

# Production build test
npm run build
npm run start
```

Visit http://localhost:3000 and test:
- [ ] All navigation links work
- [ ] Contact form validation works
- [ ] Mobile menu works
- [ ] All external links work
- [ ] Smooth scrolling works
- [ ] Animations trigger properly

### 4. Environment Variables (If needed)

If you add backend functionality (e.g., contact form API):

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your-api-url
```

Add to `.gitignore` (already included).

## Post-Deployment Checklist

- [ ] Test all links on live site
- [ ] Verify mobile responsiveness
- [ ] Test contact form
- [ ] Check page load speed (use [PageSpeed Insights](https://pagespeed.web.dev/))
- [ ] Verify SEO metadata (use [Open Graph Debugger](https://www.opengraph.xyz/))
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console (optional)

## Updating Your Portfolio

After making changes:

```bash
# Vercel (auto-deploys on git push)
git add .
git commit -m "Update: description of changes"
git push

# GitHub Pages
npm run deploy

# Netlify
npm run build
netlify deploy --prod --dir=out
```

## Performance Tips

1. **Optimize Images**: Use WebP format, compress images before upload
2. **Lazy Load**: Large images/videos should use lazy loading
3. **Minimize JavaScript**: Remove unused dependencies
4. **CDN**: Use Vercel/Netlify edge network for faster global delivery
5. **Caching**: Leverage browser caching with proper headers

## Troubleshooting

**Build fails with TypeScript errors:**
```bash
# Check for errors
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

**404 on GitHub Pages:**
- Ensure `basePath` in `next.config.ts` matches repository name
- Check that `.nojekyll` file exists in `/out` directory

**Styles not loading:**
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

**Slow build times:**
- Remove unused dependencies
- Check for circular imports
- Use `npm ci` instead of `npm install`

## Support

For deployment issues:
- Next.js: https://nextjs.org/docs/deployment
- Vercel: https://vercel.com/docs
- GitHub Pages: https://docs.github.com/en/pages
- Netlify: https://docs.netlify.com

---

Good luck with your deployment! 🚀
