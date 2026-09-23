import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App, { ROUTES } from './App'
import { getPageMeta, renderHeadTags, SITE_URL } from './seo'

export { ROUTES, getPageMeta, renderHeadTags, SITE_URL }

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
