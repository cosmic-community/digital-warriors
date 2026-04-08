# Digital Warriors - Professional Services Website

![App Preview](https://imgix.cosmicjs.com/4c61c9e0-32e6-11f1-b4af-3d6c0f4821ef-autopilot-photo-1598550874175-4d0ef436c909-1775610013046.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A stunning, modern professional services company website built with **Next.js 16** and **Cosmic CMS**. Digital Warriors showcases services, team members, case studies, and client testimonials in a beautifully designed, fully responsive layout.

## Features

- 🏠 **Dynamic Homepage** — Hero section, featured services, team highlights, case studies grid, and testimonial carousel
- 🛠️ **Services Directory** — Browse all services with individual detail pages
- 👥 **Team Showcase** — Meet the team with photos, bios, roles, and LinkedIn links
- 📊 **Case Studies** — Filterable project showcases with challenge/solution/results breakdowns
- ⭐ **Client Testimonials** — Star ratings and client feedback with photos
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- 🎨 **Modern Design** — Bold navy and electric blue palette with smooth transitions
- ⚡ **Server-Side Rendering** — Fast page loads with Next.js App Router
- 🖼️ **Optimized Images** — Automatic image optimization via Cosmic's imgix integration

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69d5a82ee286d037e503684d&clone_repository=69d5a996e286d037e5036887)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials."

### Code Generation Prompt

> "Build a Next.js application for a company website called 'Digital Warriors'. The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic CMS](https://www.cosmicjs.com/docs) — Headless content management
- [Cosmic SDK](https://www.npmjs.com/package/@cosmicjs/sdk) — JavaScript SDK for Cosmic

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a configured bucket

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd digital-warriors
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file with your Cosmic credentials:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Case Study
```typescript
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug: 'my-case-study' })
  .props(['id', 'title', 'slug', 'metadata', 'content'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses 4 Cosmic object types:

| Object Type | Slug | Description |
|------------|------|-------------|
| Services | `services` | Company service offerings |
| Team Members | `team-members` | Staff profiles with photos and bios |
| Case Studies | `case-studies` | Project showcases with results |
| Testimonials | `testimonials` | Client feedback with ratings |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the repository in [Netlify](https://netlify.com)
3. Set build command to `bun run build`
4. Set publish directory to `.next`
5. Add environment variables
6. Deploy!

<!-- README_END -->