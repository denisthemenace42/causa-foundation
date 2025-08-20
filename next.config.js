/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export for Netlify compatibility
  output: 'export',
  // Remove trailingSlash for proper routing
  // trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove assetPrefix for Netlify compatibility
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://causafoundation.com' : '',
}

module.exports = nextConfig
