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
      {
        // هذا السطر يعالج الرابط المكسور في جوجل ويحوله للرئيسية
        source: '/page',
        destination: '/',
        permanent: true, // 301 redirect لإخبار جوجل أن الرابط انتقل نهائياً
      },
    ]
  },
}

export default nextConfig
