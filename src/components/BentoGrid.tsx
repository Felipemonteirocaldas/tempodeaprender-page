import type { ComponentType } from 'react'
import { IconFlask, IconSport, IconLanguage, IconTech } from './icons'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'
import ImageWithSkeleton from './ImageWithSkeleton'

interface PhotoCardProps {
  id: string; tag: string; tagColor: string; title: string
  body: string; textColor: string; imgSrc: string; imgAlt: string; span: string
}

interface ColorCardData {
  id: string; icon: ComponentType<{ className?: string }>; tag: string; title: string
  body: string; bg: string; textColor: string; tagColor: string; iconColor: string; span: string
}

function PhotoCard({ id, tag, tagColor, title, body, textColor, imgSrc, imgAlt, span }: PhotoCardProps) {
  return (
    <article className={`${span} rounded-2xl overflow-hidden relative min-h-[240px] flex flex-col justify-end group`} aria-labelledby={`card-title-${id}`}>
      <div className="absolute inset-0 w-full h-full z-0">
        <ImageWithSkeleton 
          src={imgSrc} 
          alt={imgAlt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy" 
          wrapperClassName="w-full h-full"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/30 to-transparent z-10 pointer-events-none" />
      <div className="relative z-20 p-7 flex flex-col gap-2">
        <span className={`self-start ${tagColor} px-2.5 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wide`}>{tag}</span>
        <h3 id={`card-title-${id}`} className={`font-display font-bold text-xl ${textColor}`}>{title}</h3>
        <p className={`text-sm leading-relaxed ${textColor}`}>{body}</p>
      </div>
    </article>
  )
}

function ColorCard({ card }: { card: ColorCardData }) {
  const Icon = card.icon
  return (
    <article className={`${card.bg} ${card.span} rounded-2xl p-7 flex flex-col gap-4 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1`} aria-labelledby={`card-title-${card.id}`}>
      <div className="flex items-start justify-between gap-4">
        <span className={`${card.iconColor} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}><Icon className="w-8 h-8" /></span>
        <span className={`${card.tagColor} px-2.5 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wide`}>{card.tag}</span>
      </div>
      <div>
        <h3 id={`card-title-${card.id}`} className={`font-display font-bold text-xl ${card.textColor}`}>{card.title}</h3>
        <p className={`mt-2 text-sm leading-relaxed ${card.textColor}`}>{card.body}</p>
      </div>
    </article>
  )
}

const COLOR_CARDS: ColorCardData[] = [
  { id: 'esportes', icon: IconSport, tag: 'Esportes', title: 'Educação Física', body: 'Atividades físicas que desenvolvem coordenação motora, trabalho em equipe e hábitos saudáveis.', bg: 'bg-brand-navy', textColor: 'text-white', tagColor: 'bg-white/20 text-white', iconColor: 'text-brand-sky', span: '' },
  { id: 'cultura', icon: IconLanguage, tag: 'Cultura \u0026 Datas', title: 'Calendário Cultural', body: 'Data Magna de PE, São João, Dia da Escola e muito mais, celebrando com toda a comunidade.', bg: 'bg-brand-orange', textColor: 'text-white', tagColor: 'bg-white/25 text-white', iconColor: 'text-white', span: '' },
  { id: 'inclusao', icon: IconTech, tag: 'Inclusão', title: 'Escola para Todos', body: 'Comprometida com a diversidade: Abril Azul, Síndrome de Down e a diferença de cada um.', bg: 'bg-brand-sky-light', textColor: 'text-brand-navy', tagColor: 'bg-brand-sky/30 text-brand-navy', iconColor: 'text-brand-sky-mid', span: '' },
  { id: 'ciencias', icon: IconFlask, tag: 'Ciências', title: 'Ciclo da Água e Mais', body: 'Experimentos práticos que despertam a curiosidade científica desde os primeiros anos.', bg: 'bg-white border-2 border-brand-sky-light', textColor: 'text-brand-dark', tagColor: 'bg-brand-sky-light text-brand-navy', iconColor: 'text-brand-sky-mid', span: '' },
]

interface BentoGridProps { compact?: boolean }

export default function BentoGrid({ compact = false }: BentoGridProps) {
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>()
  const [gridRef, gridVisible, staggerDelay] = useStaggerReveal<HTMLDivElement>({ threshold: 0.08 })

  return (
    <section id="diferenciais" aria-labelledby="bento-heading" className="py-24 bg-brand-gray border-b border-brand-sky-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`reveal max-w-xl mb-16 ${headingVisible ? 'visible' : ''}`}
        >
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-orange">
            {compact ? 'Nossos diferenciais' : 'Por que nos escolher'}
          </span>
          <h2 id="bento-heading" className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy">
            {compact ? 'Uma escola feita para o seu filho brilhar' : 'Tudo o que seu filho precisa para crescer feliz e aprender'}
          </h2>
          {!compact && (
            <p className="mt-4 text-brand-gray-mid leading-relaxed">
              Atividades lúdicas, cultura regional, ciências e inclusão para o desenvolvimento integral de cada criança.
            </p>
          )}
        </div>

        <div
          ref={gridRef}
          className={`reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${gridVisible ? 'visible' : ''}`}
        >
          <div className="reveal-scale lg:col-span-2" style={{ transitionDelay: staggerDelay(0) }}>
            <PhotoCard id="atividades" tag="Atividades Lúdicas" tagColor="bg-brand-sky/90 text-white" title="Aprender Brincando" body="Pescaria, atividades sensoriais e jogos pedagógicos que tornam o aprendizado uma aventura diária." textColor="text-white" imgSrc="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&h=400&q=85&auto=format&fit=crop" imgAlt="Criança fazendo atividade artística com guaches e materiais coloridos" span="" />
          </div>
          {COLOR_CARDS.map((card, i) => (
            <div key={card.id} className="reveal-scale" style={{ transitionDelay: staggerDelay(i + 1) }}>
              <ColorCard card={card} />
            </div>
          ))}
          <div className="reveal-scale lg:col-span-2" style={{ transitionDelay: staggerDelay(5) }}>
            <PhotoCard id="comunidade" tag="Comunidade" tagColor="bg-brand-green/90 text-white" title="Família na Escola" body="Canal aberto com os pais, eventos e reuniões para acompanhar de perto cada etapa do seu filho." textColor="text-white" imgSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=400&q=85&auto=format&fit=crop" imgAlt="Professor com turma de alunos em sala de aula" span="" />
          </div>
        </div>
      </div>
    </section>
  )
}
