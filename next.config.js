/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for better Netlify compatibility
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://causafoundation.com' : '',
}

module.exports = nextConfig
