# Kenjie P. Lazo - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Bento Grid Layout** - Modern card-based design inspired by bryllim.com
- **Dark/Light Mode** - System preference detection with manual toggle
- **Responsive Design** - Mobile-first approach, works on all devices
- **Animations** - Smooth transitions and micro-interactions with Framer Motion
- **SEO Optimized** - Meta tags and semantic HTML
- **TypeScript** - Type-safe development
- **Fast Performance** - Optimized builds with Next.js

## 📁 Project Structure

```
LAZO-PORTFOLIO/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Homepage with bento grid
│   ├── projects/page.tsx    # Projects page
│   ├── tech-stack/page.tsx  # Tech stack page
│   ├── certifications/page.tsx
│   └── blog/page.tsx        # Blog page
├── components/
│   ├── sections/            # Bento grid sections
│   │   ├── hero.tsx
│   │   ├── profile-card.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── tech-stack.tsx
│   │   ├── certifications.tsx
│   │   ├── projects.tsx
│   │   ├── testimonials.tsx
│   │   ├── associations.tsx
│   │   ├── gallery.tsx
│   │   ├── social-links.tsx
│   │   ├── quick-info.tsx
│   │   └── currently.tsx
│   ├── navbar.tsx           # Navigation bar
│   ├── footer.tsx           # Footer component
│   ├── floating-cta.tsx     # Floating chat button
│   ├── theme-toggle.tsx     # Dark/light mode toggle
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── profile.jpg          # Add your profile image here
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your profile image:**
   - Add a `profile.jpg` image to the `public/` folder

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Theme Colors
Edit CSS variables in `app/globals.css`:
- Light mode colors in `:root`
- Dark mode colors in `.dark`

### Content
Update the data in each section component:
- `components/sections/hero.tsx` - Name, title, location
- `components/sections/experience.tsx` - Work history
- `components/sections/tech-stack.tsx` - Technologies
- `app/projects/page.tsx` - Project list
- `app/certifications/page.tsx` - Certifications

### Social Links
Update links in:
- `components/sections/social-links.tsx`
- `components/footer.tsx`

## 📦 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm run start
```

## 🧰 Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes
- **Language:** TypeScript

## 📝 License

© 2024 Kenjie P. Lazo. All rights reserved.
# kenjielazo
