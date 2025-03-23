# Slack Landing Page Clone

This is a responsive Slack landing page clone built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive components including:
  - Navigation with dropdown menus
  - Hero section with call-to-action buttons
  - Company logo carousel
  - Future section with video call-to-action
  - Cookie consent popup
  - Interactive chat bot
- Pixel-perfect recreation of Slack's design language
- Optimized images and SVG icons

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

- /app - Next.js app router pages
- /public - Static assets like images and logos
- /src/components - Reusable UI components
- /src/constants - Data files for components

## Key Components

- Navbar - Main navigation with responsive mobile menu
- NotificationBanner - Top banner with dismissible notification
- HeroSection - Main landing section with CTA buttons
- CompanyCarousel - Showcase of companies using Slack
- FutureSection - Section with video call-to-action
- CookieConsent - Cookie consent popup
- ChatBot - Interactive chat assistant

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks
- Next.js Image Optimization

## Deployment

The easiest way to deploy this app is to use the Vercel Platform .

## License

This project is for educational purposes only. Slack is a trademark of Slack Technologies, LLC.
