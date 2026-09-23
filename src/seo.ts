export const SITE_URL = 'https://www.escolatempodeaprender.com.br'
export const DEFAULT_OG_IMAGE = '/og-image.jpg'

export interface PageMeta {
  title: string
  description: string
  noindex?: boolean
}

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Escola Tempo de Aprender — Educação Infantil e Fundamental I em Escada, PE',
    description: 'Escola Tempo de Aprender em Escada-PE: Educação Infantil e Ensino Fundamental I com metodologias ativas, afeto e mais de 20 anos de tradição. Matrículas abertas.',
  },
  '/sobre': {
    title: 'Sobre Nós — Escola Tempo de Aprender em Escada, PE',
    description: 'Nossa história, missão, visão e valores. Com mais de 20 anos de tradição em Escada, PE, a Tempo de Aprender oferece educação de excelência.',
  },
  '/galeria': {
    title: 'Galeria de Fotos — Escola Tempo de Aprender em Escada, PE',
    description: 'Veja fotos da estrutura, das turmas e das atividades realizadas na Escola Tempo de Aprender em Escada, PE.',
  },
  '/noticias': {
    title: 'Notícias — Escola Tempo de Aprender',
    description: 'Acompanhe as últimas novidades, eventos e comunicados da Escola Tempo de Aprender em Escada, PE.',
    /* Página ainda sem conteúdo — liberar para o Google quando houver notícias publicadas */
    noindex: true,
  },
  '/calendario': {
    title: 'Calendário Escolar 2026 — Escola Tempo de Aprender em Escada, PE',
    description: 'Fique por dentro das datas mais importantes, feriados e eventos escolares do ano letivo da Escola Tempo de Aprender em Escada, PE.',
  },
  '/depoimentos': {
    title: 'Depoimentos das Famílias — Escola Tempo de Aprender',
    description: 'Veja o que dizem as famílias que confiam na Escola Tempo de Aprender em Escada, PE. Mais de 20 anos de educação de excelência e afeto.',
  },
  '/equipe': {
    title: 'Nossa Equipe — Escola Tempo de Aprender em Escada, PE',
    description: 'Conheça os professores, a coordenação e a direção da escola Tempo de Aprender em Escada, PE. Educadores qualificados que ensinam com amor.',
  },
  '/contato': {
    title: 'Contato e Matrículas — Escola Tempo de Aprender em Escada, PE',
    description: 'Fale conosco para agendar uma visita e fazer a matrícula na Educação Infantil ou no Fundamental I em Escada, PE. Localização, horário de atendimento e WhatsApp.',
  },
}

export const NOT_FOUND_META: PageMeta = {
  title: 'Página não encontrada — Escola Tempo de Aprender',
  description: 'A página que você procurou não existe. Volte ao início para conhecer a Escola Tempo de Aprender em Escada, PE.',
  noindex: true,
}

export function getPageMeta(pathname: string): PageMeta {
  return PAGE_META[pathname] ?? NOT_FOUND_META
}

/** Tags do <head> por rota — usadas na pré-renderização (build) */
export function renderHeadTags(pathname: string): string {
  const meta = getPageMeta(pathname)
  const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
  const image = `${SITE_URL}${DEFAULT_OG_IMAGE}`
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Escola Tempo de Aprender" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Escola Tempo de Aprender — Educação Infantil e Ensino Fundamental I em Escada, PE" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join('\n    ')
}
