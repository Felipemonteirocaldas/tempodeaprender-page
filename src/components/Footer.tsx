import { Link } from 'react-router-dom'
import { IconPhone, IconMail, IconPin } from './icons'
import SmilingClock from './SmilingClock'

interface NavSection { title: string; links: { label: string; to: string }[] }
interface SocialLink { label: string; href: string; svgPath: string }

const NAV_SECTIONS: NavSection[] = [
  { title: 'Escola', links: [
    { label: 'Sobre nós', to: '/sobre' },
    { label: 'Nossa Equipe', to: '/equipe' },
    { label: 'Diferenciais', to: '/diferenciais' },
    { label: 'Depoimentos', to: '/depoimentos' },
    { label: 'Matrículas 2026', to: '/contato' },
  ]},
  { title: 'Segmentos', links: [
    { label: 'Educação Infantil', to: '/contato' },
    { label: 'Ensino Fundamental I', to: '/contato' },
  ]},
]

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/escolatempodeaprender24/', svgPath: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z' },
  { label: 'WhatsApp', href: 'https://whats.link/escolatempodeaprender', svgPath: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.5 2.19 2 2 0 012.47 2H5.5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' },
]

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-brand-navy text-white">
      <h2 id="footer-heading" className="sr-only">Rodapé — Escola Tempo de Aprender</h2>

      {/* Faixa do uniforme */}
      <div aria-hidden="true" className="flex h-1">
        <span className="flex-[3] bg-brand-sky" />
        <span className="flex-[2] bg-brand-navy-light" />
        <span className="flex-[1] bg-white/40" />
        <span className="flex-[1] bg-brand-green" />
        <span className="flex-[1] bg-brand-orange" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {/* Identidade */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 tap-target group" aria-label="Tempo de Aprender — Voltar ao início">
              <SmilingClock className="w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col select-none leading-none text-left">
                <span className="text-[9px] tracking-[0.25em] font-extrabold text-white/80">
                  ESCOLA
                </span>
                <span className="text-xs font-black tracking-wide text-white">
                  TEMPO DE
                </span>
                <span className="text-sm font-black tracking-wider flex">
                  <span className="text-brand-red">A</span>
                  <span className="text-brand-green">P</span>
                  <span className="text-brand-yellow">R</span>
                  <span className="text-brand-sky">E</span>
                  <span className="text-brand-red">N</span>
                  <span className="text-brand-green">D</span>
                  <span className="text-brand-yellow">E</span>
                  <span className="text-brand-sky">R</span>
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">Educando com amor em Escada-PE há mais de 20 anos. Educação Infantil e Fundamental I.</p>
            <div className="mt-6 flex gap-2" aria-label="Redes sociais">
              {SOCIAL_LINKS.map(({ label, href, svgPath }) => (
                <a key={label} href={href} className="tap-target w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-brand-sky/30 transition-colors" aria-label={`Nos siga no ${label}`} target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={svgPath} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          {NAV_SECTIONS.map(({ title, links }) => (
            <nav key={title} aria-label={`Links: ${title}`}>
              <p className="font-display font-bold text-sm text-white mb-4">{title}</p>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="tap-target inline-flex items-center text-sm text-white/70 hover:text-brand-sky transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contato */}
          <address className="not-italic">
            <p className="font-display font-bold text-sm text-white mb-4">Contato</p>
            <ul className="flex flex-col gap-3" aria-label="Informações de contato">
              <li>
                <a href="https://whats.link/escolatempodeaprender" target="_blank" rel="noopener noreferrer" className="tap-target flex items-center gap-2 text-sm text-white/70 hover:text-brand-sky transition-colors" aria-label="WhatsApp da escola">
                  <IconPhone className="w-4 h-4 flex-shrink-0" /> whats.link/escolatempodeaprender
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/escolatempodeaprender24/" target="_blank" rel="noopener noreferrer" className="tap-target flex items-start gap-2 text-sm text-white/70 hover:text-brand-sky transition-colors" aria-label="Instagram: @escolatempodeaprender24">
                  <IconMail className="w-4 h-4 flex-shrink-0 mt-0.5" /> @escolatempodeaprender24
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Avenida+Paulo+Leite+485+Escada+Pernambuco" target="_blank" rel="noopener noreferrer" className="tap-target flex items-start gap-2 text-sm text-white/70 hover:text-brand-sky transition-colors" aria-label="Ver endereço no mapa">
                  <IconPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> Av. Paulo Leite, 485<br />Escada — Pernambuco
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Escola Tempo de Aprender. Todos os direitos reservados.</p>
          <p>Escada — Pernambuco</p>
        </div>
      </div>
    </footer>
  )
}
