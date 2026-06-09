import { useReveal } from '@/hooks/useReveal'
import { IllustrationStar, IllustrationScribble } from './Illustrations'
import ImageWithSkeleton from './ImageWithSkeleton'
interface Pillar { number: string; color: string; title: string; body: string }
interface Photo { src: string; alt: string; caption: string; span: string; height: string }

const PILLARS: Pillar[] = [
  { number: '01', color: 'text-brand-sky-mid', title: 'Missão', body: 'Proporcionar educação de excelência com amor, criatividade e compromisso com o desenvolvimento integral de cada criança em Escada-PE.' },
  { number: '02', color: 'text-brand-green', title: 'Visão', body: 'Ser referência regional por oferecer um ambiente seguro, inclusivo e estimulante, onde cada aluno descobre seu potencial.' },
  { number: '03', color: 'text-brand-orange', title: 'Valores', body: 'Amor, respeito, alegria, inclusão e comprometimento com as famílias que confiam a nós seus filhos.' },
]

const PHOTOS: Photo[] = [
  { src: 'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?w=600&h=360&q=85&auto=format&fit=crop', alt: 'Letras de madeira e massinha colorida para aprendizado infantil', caption: 'Material pedagógico', span: 'col-span-2', height: 'h-56' },
  { src: 'https://images.unsplash.com/photo-1601339434203-130259102db6?w=400&h=300&q=85&auto=format&fit=crop', alt: 'Sala de aula colorida da educação infantil', caption: 'Nosso espaço', span: '', height: 'h-40' },
  { src: 'https://images.unsplash.com/photo-1613950190144-4f2a84c75e8c?w=400&h=300&q=85&auto=format&fit=crop', alt: 'Criança montando mosaico colorido em atividade artística', caption: 'Arte e criatividade', span: '', height: 'h-40' },
]

export default function About() {
  const [photosRef, photosVisible] = useReveal<HTMLDivElement>()
  const [textRef, textVisible] = useReveal<HTMLDivElement>()

  return (
    <section id="sobre" aria-labelledby="about-heading" className="relative py-28 bg-white overflow-hidden">
      {/* Elementos Lúdicos decorativos */}
      <div aria-hidden="true" className="absolute top-16 left-8 lg:left-20 text-brand-orange/30 w-16 h-16 animate-[spin_10s_linear_infinite] z-0 pointer-events-none">
        <IllustrationStar className="w-full h-full" />
      </div>
      <div aria-hidden="true" className="absolute bottom-20 right-8 lg:right-20 text-brand-green/30 w-24 h-24 -rotate-12 z-0 pointer-events-none">
        <IllustrationScribble className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Grade de fotos — slide in from left */}
        <div
          ref={photosRef}
          className={`reveal grid grid-cols-1 sm:grid-cols-2 gap-3 ${photosVisible ? 'visible' : ''}`}
        >
          {PHOTOS.map(({ src, alt, caption, span, height }, i) => (
            <div
              key={caption}
              className={`${span} reveal-left relative rounded-2xl overflow-hidden ${height} group`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <ImageWithSkeleton 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                loading="lazy" 
                wrapperClassName="w-full h-full"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent pointer-events-none z-20" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-display font-bold bg-brand-sky/80 backdrop-blur-sm px-2 py-1 rounded-lg z-30">{caption}</span>
            </div>
          ))}
        </div>

        {/* Texto — slide in from right */}
        <div
          ref={textRef}
          className={`reveal ${textVisible ? 'visible' : ''}`}
        >
          <div className="reveal-right">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky-mid">Nossa história</span>
            <h2 id="about-heading" className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy leading-tight">
              Mais de 20 anos educando com amor em Escada-PE
            </h2>
            <p className="mt-5 text-brand-gray-mid leading-relaxed text-base">
              A Escola Tempo de Aprender nasceu do sonho de oferecer educação de qualidade,
              acessível e transformadora para a Educação Infantil e o Ensino Fundamental I.
              Hoje somos referência em Escada-PE, com metodologia ativa e foco no
              desenvolvimento humano integral.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            {PILLARS.map(({ number, color, title, body }, i) => (
              <div
                key={number}
                className="reveal-right flex gap-5"
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <span className={`flex-shrink-0 font-display font-extrabold text-3xl ${color} opacity-50 w-10`} aria-hidden="true">{number}</span>
                <div>
                  <h3 className="font-display font-bold text-brand-navy text-lg">{title}</h3>
                  <p className="mt-1.5 text-sm text-brand-gray-mid leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
