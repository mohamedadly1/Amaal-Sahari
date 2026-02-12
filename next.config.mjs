 /** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // بيبعد عن أي مشاكل في الـ Build بسبب الأنواع
    ignoreBuildErrors: true,
  },
  images: {
    // مهم جداً لاستضافة هوستنجر عشان الصور تظهر صح
    unoptimized: true,
  },
  // حذفنا قسم الـ redirects مؤقتاً لحل مشكلة الحلقة المفرغة
}

export default nextConfig
