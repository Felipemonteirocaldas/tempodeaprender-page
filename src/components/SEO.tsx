import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, getPageMeta } from '@/seo'

/**
 * Mantém title, description, canonical e Open Graph sincronizados com a rota
 * durante a navegação no cliente. O HTML inicial de cada rota já sai com essas
 * tags da pré-renderização (scripts/prerender.mjs).
 */
export default function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getPageMeta(pathname)
    const url = `${SITE_URL}${pathname}`

    document.title = meta.title

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (meta.noindex) {
      canonical?.remove()
      if (!robots) {
        robots = document.createElement('meta')
        robots.name = 'robots'
        document.head.appendChild(robots)
      }
      robots.content = 'noindex, follow'
    } else {
      robots?.remove()
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = url
    }
  }, [pathname])

  return null
}
