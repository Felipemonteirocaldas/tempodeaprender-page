import { IconRibbon, IconHeart, IconUsers, IconPhone, IconWhatsApp, IconArrowRight } from './icons'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'

const PILLARS = [
  {
    icon: IconHeart,
    title: 'Acolhimento & Escuta Ativa',
    text: 'Criamos um ambiente seguro onde cada criança e jovem aprende que expressar o que sente é um ato de coragem, nunca de fraqueza.',
    accent: 'bg-amber-400/20 text-amber-600',
  },
  {
    icon: IconUsers,
    title: 'Educação Socioemocional',
    text: 'Por meio de rodas de conversa, dinâmicas e histórias lúdicas, ensinamos o autocuidado, o respeito às diferenças e a regulação das emoções.',
    accent: 'bg-brand-sky-pale text-brand-sky-mid',
  },
  {
    icon: IconHeart,
    title: 'Parceria Escola & Família',
    text: 'Apoiamos pais e responsáveis no diálogo aberto, fortalecendo a confiança e a identificação precoce de momentos de dor ou isolamento.',
    accent: 'bg-emerald-50 text-brand-green',
  },
  {
    icon: IconRibbon,
    title: 'Valorização da Vida Todos os Dias',
    text: 'O Setembro Amarelo é um marco importante, mas o carinho, a empatia e a proteção ao bem-estar dos nossos alunos são práticas diárias.',
    accent: 'bg-amber-100 text-amber-700',
  },
]

export default function SetembroAmarelo() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>()
  const [pillarsRef, pillarsVisible, staggerDelay] = useStaggerReveal<HTMLDivElement>()
  const [cvvRef, cvvVisible] = useReveal<HTMLDivElement>()

  return (
    <section
      id="setembro-amarelo"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF5] via-[#FFF9E6] to-white border-y border-amber-200/70 overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-300/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-400/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-radial from-amber-200/20 to-transparent blur-2xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div
          ref={headerRef}
          className={`reveal text-center max-w-3xl mx-auto mb-14 sm:mb-20 ${headerVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-display font-bold text-xs uppercase tracking-wider shadow-sm mb-4">
            <IconRibbon className="w-4 h-4 text-amber-600 fill-amber-500" />
            Setembro Amarelo na Tempo de Aprender
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
            Cuidar do que sentimos é cultivar a vida
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-gray-mid leading-relaxed font-medium">
            Na <span className="text-amber-600 font-bold">Escola Tempo de Aprender</span>, acreditamos que falar sobre sentimentos, acolher as dores e praticar a escuta ativa são sementes fundamentais para uma infância feliz e uma vida saudável.
          </p>
        </div>

        {/* Destaque: Banner Oficial + Pilares */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Card do Banner Oficial */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Brilho ao redor */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 opacity-30 blur-lg group-hover:opacity-50 transition duration-500"
              />

              <div className="relative bg-white rounded-3xl p-3 shadow-xl border border-amber-200 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden shadow-inner bg-amber-50">
                  <picture>
                    <source srcSet="/banner-set-amarelo.webp" type="image/webp" />
                    <img
                      src="/banner-set-amarelo.png"
                      alt="Campanha Setembro Amarelo - Escola Tempo de Aprender. Juntos por mais vida! Falar sobre o que sentimos também é um ato de coragem."
                      width={720}
                      height={1245}
                      className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </picture>
                  {/* Selo sobreposto */}
                  <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <IconRibbon className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    Campanha Oficial
                  </div>
                </div>

                {/* Frase de carinho do banner */}
                <div className="p-4 text-center">
                  <p className="font-display font-black text-brand-navy text-base">
                    &ldquo;A vida importa. Sua história importa. Você importa.&rdquo;
                  </p>
                  <p className="text-xs text-amber-700 font-bold mt-1 uppercase tracking-wide">
                    Você não está só • Juntos por mais vida
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pilares da Escola */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="mb-2">
              <span className="text-xs font-display font-bold uppercase tracking-widest text-amber-600">
                Nosso compromisso diário
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy mt-1">
                Como apoiamos o bem-estar emocional na escola
              </h3>
            </div>

            <div
              ref={pillarsRef}
              className={`reveal grid sm:grid-cols-2 gap-4 ${pillarsVisible ? 'visible' : ''}`}
            >
              {PILLARS.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className="reveal-child p-5 rounded-2xl bg-white border border-amber-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                    style={{ transitionDelay: staggerDelay(index) }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${pillar.accent} flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-brand-navy text-base leading-tight">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-sm text-brand-gray-mid leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Citação em destaque */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-300/60 flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-brand-navy font-black flex-shrink-0 shadow-sm">
                💛
              </div>
              <div>
                <h4 className="font-display font-bold text-amber-950 text-sm">
                  Falar sobre sentimentos é um ato de coragem
                </h4>
                <p className="text-xs sm:text-sm text-amber-900/80 mt-1 leading-relaxed">
                  Tristeza, medo e ansiedade fazem parte de toda caminhada humana. Ensinar as crianças a nomear o que sentem e pedir ajuda é o maior escudo para a vida inteira.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco de Apoio & Canais de Ajuda */}
        <div
          ref={cvvRef}
          className={`reveal bg-gradient-to-br from-brand-navy via-[#1F4478] to-[#122A4E] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-brand-sky-mid/30 ${cvvVisible ? 'visible' : ''}`}
        >
          {/* Brilhos decorativos no card */}
          <div aria-hidden="true" className="absolute top-0 right-0 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 bg-brand-sky/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm border border-white/10">
                <IconRibbon className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                Precisa de ajuda ou quer conversar?
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Você nunca está sozinho. Há sempre alguém pronto para ouvir.
              </h3>
              <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
                Se você ou alguém que você ama estiver passando por um momento difícil, procure acolhimento. O <strong className="text-amber-300 font-bold">Centro de Valorização da Vida (CVV)</strong> oferece apoio emocional gratuito, 24 horas por dia, de forma anônima e confidencial.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3.5 justify-center">
              {/* Botão Ligue 188 */}
              <a
                href="tel:188"
                className="tap-target flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-amber-400 text-brand-dark font-display font-black text-base hover:bg-amber-300 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Ligar para o Centro de Valorização da Vida no número 188 gratuito"
              >
                <IconPhone className="w-5 h-5 text-brand-dark" />
                <span>Ligue 188 • CVV (Gratuito)</span>
              </a>

              {/* Botão Conversar com a Escola */}
              <a
                href="https://whats.link/escolatempodeaprender"
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-display font-bold text-sm backdrop-blur-sm border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Falar com a coordenação pedagógica da Escola Tempo de Aprender pelo WhatsApp"
              >
                <IconWhatsApp className="w-5 h-5 text-[#25D366]" />
                <span>Conversar com a Escola</span>
                <IconArrowRight className="w-4 h-4 text-white/70" />
              </a>

              <p className="text-[11px] text-white/60 text-center sm:text-left md:text-center mt-1">
                Atendimento do CVV disponível 24 horas por dia em todo o Brasil.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
