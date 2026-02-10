'use client'

import Head from 'next/head'
import { useContent } from '@/lib/content-context'
import { usePathname } from 'next/navigation'

export default function SEOMetadata() {
  const { content } = useContent()
  const pathname = usePathname()

  const seoConfig = content.seo
  const baseUrl = 'https://amaalsahari.com'
  const currentUrl = `${baseUrl}${pathname}`

  // Get page-specific SEO or use general settings
  const pageSEO = seoConfig.pages.find((p) => p.slug === pathname.replace('/', ''))
  const metaTitle = pageSEO?.metaTitle || seoConfig.general.defaultMetaTitle
  const metaDescription = pageSEO?.metaDescription || seoConfig.general.defaultMetaDescription
  const metaKeywords = pageSEO?.metaKeywords || seoConfig.general.metaKeywords
  const ogImage = pageSEO?.ogImage || seoConfig.general.faviconUrl
  const canonicalUrl = pageSEO?.canonicalUrl || currentUrl

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={ogImage} />

      {/* Google Analytics */}
      {seoConfig.integrations.googleAnalyticsId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${seoConfig.integrations.googleAnalyticsId}`}
          ></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${seoConfig.integrations.googleAnalyticsId}');
            `,
          }} />
        </>
      )}

      {/* Google Tag Manager */}
      {seoConfig.integrations.googleTagManagerId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${seoConfig.integrations.googleTagManagerId}`}></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${seoConfig.integrations.googleTagManagerId}');
            `,
          }} />
        </>
      )}
    </Head>
  )
}
