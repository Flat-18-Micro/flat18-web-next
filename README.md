# Flat 18 Website

This is a Next.js-based rebuild of the Flat 18 website, originally created in Webflow.

## Project Structure

```
flat18/
├── public/              # Static assets
│   ├── images/         # Image files
│   ├── fonts/          # Font files
│   ├── static/         # Static files
│   └── videos/         # Video files
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.js   # Root layout
│   │   ├── page.js     # Homepage
│   │   └── globals.css # Global styles
│   └── components/     # React components
│       └── Navbar.js   # Navigation component
└── README.md           # Project documentation
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Modern Next.js app directory structure
- Responsive design
- Optimized images and assets
- Client-side analytics integration
- SEO-friendly metadata

## Technologies Used

- Next.js 14
- React
- CSS Modules
- Framer Motion
- JavaScript
- GitHub Actions (for deployment)

## Development

The project uses the following tools and configurations:

- ESLint for code linting
- CSS Modules for styling
- Next.js Image component for optimized images
- Client-side analytics tracking (Umami and Ackee)
- GitHub Actions for CI/CD

## Deployment

### GitHub Pages Deployment

This website is configured to be deployed to GitHub Pages using GitHub Actions.

#### Environment Variables

The website uses environment variables for the contact form functionality. These need to be set up as GitHub Secrets to be available during the build process. See [GitHub Pages Deployment Guide](docs/github-pages-deployment.md) for detailed instructions.

**Required GitHub Secrets:**
- `MAILGUN_API_KEY`: Your Mailgun API key
- `MAILGUN_DOMAIN`: Your Mailgun domain

#### Automatic Deployment

When you push changes to the `main` branch, the site will be automatically built and deployed to GitHub Pages using the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

#### Manual Deployment

If you need to deploy manually, you can run:

```bash
npm run deploy
```

This will build the site and create the necessary files for GitHub Pages deployment.

### Custom Domain

The site is configured to use the custom domain `flat18.co.uk`. This is set in the `public/CNAME` file.

### Other Platforms

The site can also be deployed to any platform that supports Next.js, such as Vercel, Netlify, or AWS Amplify.

## License

All rights reserved. This project is proprietary and confidential.