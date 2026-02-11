/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect old /page route to home
      {
        source: '/page',
        destination: '/',
        permanent: true,
      },
      // Redirect old page variations to home
      {
        source: '/page/:path*',
        destination: '/:path*',
        permanent: true,
      },
      // Redirect any double slashes
      {
        source: '//:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
