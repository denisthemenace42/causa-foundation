# Deploying to Netlify

This guide will help you deploy your Causa Foundation website to Netlify.

## Prerequisites

1. A Netlify account (free at [netlify.com](https://netlify.com))
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended for first deployment)

1. **Sign in to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Sign in with your account

2. **Create a new site**
   - Click "Add new site"
   - Choose "Import an existing project"

3. **Connect your Git repository**
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select the `causa-foundation` repository

4. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 (or higher)

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Build Configuration

The project is configured with:
- `output: 'export'` in `next.config.js` for static site generation
- `netlify.toml` for build settings and redirects
- Optimized build scripts in `package.json`

## Important Notes

1. **Static Export**: This configuration exports your Next.js app as static files, which is required for Netlify hosting.

2. **Internationalization**: The i18n configuration has been temporarily removed as it's not compatible with static export. You may need to implement a different internationalization strategy.

3. **Image Optimization**: Images are set to `unoptimized: true` for static export compatibility.

4. **Build Output**: The build will create an `out/` directory that Netlify will serve.

## Custom Domain (Optional)

1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Environment Variables

If you need environment variables:
1. Go to "Site settings" > "Environment variables" in Netlify
2. Add your variables (e.g., API keys, database URLs)

## Troubleshooting

### Build Fails
- Check the build logs in Netlify
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### 404 Errors
- Check that the `netlify.toml` redirects are correct
- Ensure the publish directory is set to `.next`

### Performance Issues
- Consider enabling Netlify's CDN features
- Optimize images and assets
- Enable compression in Netlify settings

## Support

For more help:
- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Netlify Community](https://community.netlify.com/)
