'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export default function Analytics() {
  const analyticsProvider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || 'google'
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  return (
    <>
      {/* Google Analytics */}
      {analyticsProvider === 'google' && googleAnalyticsId && (
        <GoogleAnalytics gaId={googleAnalyticsId} />
      )}

      {/* Plausible Analytics */}
      {analyticsProvider === 'plausible' && plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
        />
      )}
    </>
  )
}
