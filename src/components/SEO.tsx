import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogType?: string
  ogImage?: string
}

export default function SEO({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/og-image.jpg' // Default OG image path
}: SEOProps) {
  const location = useLocation()
  const siteUrl = 'https://escolatempodeaprender.com.br'
  const currentUrl = `${siteUrl}${location.pathname}`

  useEffect(() => {
    // 1. Update Document Title
    document.title = title

    // Helper to update or create a meta tag
    const updateOrCreateMeta = (nameOrProperty: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.head.querySelector(`meta[${attribute}="${nameOrProperty}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, nameOrProperty)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // 2. Standard Meta Tags
    updateOrCreateMeta('description', description)
    if (keywords) {
      updateOrCreateMeta('keywords', keywords)
    }

    // 3. Open Graph (Facebook / WhatsApp / Instagram previews)
    updateOrCreateMeta('og:title', title, true)
    updateOrCreateMeta('og:description', description, true)
    updateOrCreateMeta('og:url', currentUrl, true)
    updateOrCreateMeta('og:type', ogType, true)

    // Resolve absolute path for ogImage
    const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`
    updateOrCreateMeta('og:image', absoluteOgImage, true)
    updateOrCreateMeta('og:image:width', '1200', true)
    updateOrCreateMeta('og:image:height', '630', true)

    // 4. Twitter Card Tags
    updateOrCreateMeta('twitter:card', 'summary_large_image')
    updateOrCreateMeta('twitter:title', title)
    updateOrCreateMeta('twitter:description', description)
    updateOrCreateMeta('twitter:image', absoluteOgImage)

  }, [title, description, keywords, ogType, ogImage, currentUrl])

  return null
}
