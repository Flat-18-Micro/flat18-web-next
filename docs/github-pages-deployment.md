# GitHub Pages Deployment Guide

This guide explains how to deploy the Flat 18 website to GitHub Pages.

## Prerequisites

Before deploying to GitHub Pages, you need to set up the following:

1. A GitHub repository for the project
2. GitHub Secrets for environment variables
3. GitHub Pages enabled for the repository

## Setting Up GitHub Secrets

The website uses environment variables for the contact form functionality. These need to be set up as GitHub Secrets to be available during the build process.

1. Go to your GitHub repository
2. Click on "Settings"
3. Click on "Secrets and variables" in the left sidebar
4. Click on "Actions"
5. Click on "New repository secret"
6. Add the following secrets:

   - Name: `MAILGUN_API_KEY`
     - Value: Your Mailgun API key (e.g., `xxx`)

   - Name: `MAILGUN_DOMAIN`
     - Value: Your Mailgun domain (e.g., `xxx`)

7. Click "Add secret" for each one

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

Note that the contact form uses Mailgun for sending emails. The API endpoint is a serverless function that requires the Mailgun API key and domain to be set as environment variables.

Since GitHub Pages is a static hosting service, the contact form API endpoint will not work. The website includes a fallback mechanism that detects when it's deployed on GitHub Pages and automatically switches to a static contact form that opens the user's email client with a pre-filled message.

### How the Fallback Works

1. The `ContactWrapper` component attempts to make a request to the API endpoint
2. If the request fails (which it will on GitHub Pages), it displays the static contact form
3. When the user submits the static form, it opens their default email client with a pre-filled message

### Alternative Solutions

If you want a more seamless contact form experience on GitHub Pages, consider one of these options:

1. **Use a form submission service**:
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [Getform](https://getform.io/)
   - [FormSubmit](https://formsubmit.co/)

2. **Create a serverless function**:
   - Deploy the API endpoint to a serverless platform like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [AWS Lambda](https://aws.amazon.com/lambda/)
   - Update the form to submit to the serverless function URL

3. **Use a third-party service**:
   - [Tally](https://tally.so/)
   - [Typeform](https://www.typeform.com/)
   - [JotForm](https://www.jotform.com/)
