# GitHub Pages Deployment Guide

This guide explains how to deploy the Flat 18 website to GitHub Pages.

## Prerequisites

Before deploying to GitHub Pages, you need to set up the following:

1. A GitHub repository for the project
2. GitHub Pages enabled for the repository

## Enabling GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. Click on "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "gh-pages" and "/ (root)"
6. Click "Save"

## Custom Domain Setup

If you want to use a custom domain (e.g., `flat18.co.uk`):

1. Go to your GitHub repository
2. Click on "Settings"
3. Click on "Pages" in the left sidebar
4. Under "Custom domain", enter your domain name (e.g., `flat18.co.uk`)
5. Click "Save"
6. Check "Enforce HTTPS" if you want to enable HTTPS

### DNS Configuration

You'll also need to configure your DNS settings with your domain provider:

1. Add an `A` record pointing to GitHub Pages IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

2. Or add a `CNAME` record pointing to your GitHub Pages URL (e.g., `username.github.io`)

## Automatic Deployment

The website is configured to automatically deploy to GitHub Pages when you push changes to the `main` branch. The GitHub Actions workflow will:

1. Check out the code
2. Set up Node.js
3. Install dependencies
4. Build the website with the environment variables
5. Deploy the built files to the `gh-pages` branch

## Manual Deployment

If you need to deploy manually, you can run:

```bash
npm run deploy
```

This will build the site and create the necessary files for GitHub Pages deployment.

## Troubleshooting

If you encounter issues with the deployment:

1. Check the GitHub Actions logs for errors
2. Verify that the GitHub Secrets are set up correctly
3. Make sure the GitHub Pages settings are configured properly
4. Check that the DNS settings are correct if using a custom domain

## Contact Form Functionality

The contact form uses a Cloudflare Workers serverless function to handle form submissions. This approach works seamlessly with GitHub Pages since the form submission is handled by an external service.

### How the Contact Form Works

1. When a user submits the contact form, the data is sent to the Cloudflare Workers endpoint at `https://mailgun-contact.cloudflare-7fd.workers.dev`
2. The Cloudflare Workers function processes the form data and sends an email using Mailgun
3. The user receives a confirmation message on the website

### Benefits of Using Cloudflare Workers

- **Works with Static Hosting**: Since the form processing happens on Cloudflare's infrastructure, it works perfectly with GitHub Pages static hosting
- **No Environment Variables Needed**: The API keys and credentials are stored securely in the Cloudflare Workers environment
- **Improved Security**: Sensitive information like API keys are not exposed in the client-side code
- **Scalability**: Cloudflare's global network ensures reliable form processing even under high load
- **Low Latency**: Cloudflare's edge network provides fast response times worldwide

### Maintenance and Updates

If you need to update the Cloudflare Workers function:

1. Access the Cloudflare Workers dashboard at [workers.cloudflare.com](https://workers.cloudflare.com)
2. Locate the `mailgun-contact` worker
3. Make the necessary changes to the worker code
4. Deploy the updated worker
