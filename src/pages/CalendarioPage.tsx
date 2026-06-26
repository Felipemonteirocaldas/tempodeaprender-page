import PageHero from '@/components/PageHero'
import SEO from '@/components/SEO'
import { IconCalendar } from '@/components/icons'

interface Event {
  day: string
  name: string
  type: 'nacional' | 'estadual' | 'municipal' | 'escolar'
}

interface Month {
  name: string
  events: Event[]
}

const CALENDAR_2026: Month[] = [
  {
    name: 'Janeiro',
    events: [
      { day: '01', name: 'Confraternização Universal', type: 'nacional' },
      { day: '02 a 31', name: 'Férias Escolares', type: 'escolar' },
    ]
  },
  {
    name: 'Fevereiro',
    events: [
      { day: '02', name: 'Início das Aulas', type: 'escolar' },
      { day: '16', name: 'Carnaval', type: 'nacional' },
      { day: '17', name: 'Carnaval', type: 'nacional' },
      { day: '18', name: 'Quarta-feira de Cinzas', type: 'nacional' },
    ]
  },
  {
    name: 'Março',
    events: [
      { day: '06', name: 'Data Magna de Pernambuco', type: 'estadual' },
    ]
  },
  {
    name: 'Abril',
    events: [
      { day: '03', name: 'Sexta-feira Santa', type: 'nacional' },
      { day: '05', name: 'Páscoa', type: 'nacional' },
      { day: '21', name: 'Tiradentes', type: 'nacional' },
    ]
  },
  {
    name: 'Maio',
    events: [
      { day: '01', name: 'Dia do Trabalhador', type: 'nacional' },
      { day: '10', name: 'Dia das Mães', type: 'escolar' },
      { day: '24', name: 'Emancipação Política de Escada', type: 'municipal' },
    ]
  },
  {
    name: 'Junho',
    events: [
      { day: '24', name: 'São João', type: 'estadual' },
      { day: '29', name: 'São Pedro', type: 'municipal' },
    ]
  },
  {
    name: 'Julho',
    events: [
      { day: '01 a 15', name: 'Recesso Escolar (Férias de Inverno)', type: 'escolar' },
    ]
  },
  {
    name: 'Agosto',
    events: [
      { day: '09', name: 'Dia dos Pais', type: 'escolar' },
      { day: '11', name: 'Dia do Estudante', type: 'escolar' },
    ]
  },
  {
    name: 'Setembro',
    events: [
      { day: '07', name: 'Independência do Brasil', type: 'nacional' },
    ]
  },
  {
    name: 'Outubro',
    events: [
      { day: '12', name: 'Nossa Sra. Aparecida / Dia das Crianças', type: 'nacional' },
      { day: '15', name: 'Dia do Professor', type: 'escolar' },
      { day: '30', name: 'Dia do Funcionário Público', type: 'nacional' },
    ]
  },
  {
    name: 'Novembro',
    events: [
      { day: '02', name: 'Finados', type: 'nacional' },
      { day: '15', name: 'Proclamação da República', type: 'nacional' },
      { day: '20', name: 'Dia da Consciência Negra', type: 'nacional' },
    ]
  },
  {
    name: 'Dezembro',
    events: [
      { day: '08', name: 'Nossa Senhora da Escada (Padroeira)', type: 'municipal' },
      { day: '25', name: 'Natal', type: 'nacional' },
    ]
  }
]

const TYPE_COLORS = {
  nacional: 'bg-brand-orange text-white',
  estadual: 'bg-brand-sky text-white',
  municipal: 'bg-brand-green text-white',
  escolar: 'bg-brand-yellow text-brand-navy',
}

const TYPE_LABELS = {
  nacional: 'Nacional',
  estadual: 'Estadual',
  municipal: 'Municipal (Escada)',
  escolar: 'Escolar',
}

export default function CalendarioPage() {
  return (
    <>
      <SEO
        title="Calendário Escolar — Escola Tempo de Aprender"
        description="Fique por dentro das datas mais importantes, feriados e eventos escolares do ano letivo da Escola Tempo de Aprender em Escada, PE."
      />
      <PageHero
        title="Calendário 2026"
        subtitle="Confira todas as datas importantes, feriados e eventos escolares da Tempo de Aprender."
        breadcrumb="Calendário"
      />

      <section className="py-16 sm:py-24 bg-brand-sky-pale/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Legenda */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12">
            {(Object.keys(TYPE_COLORS) as Array<keyof typeof TYPE_COLORS>).map(type => (
              <div key={type} className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                <span className={`w-3 h-3 rounded-full ${TYPE_COLORS[type].split(' ')[0]}`} />
                {TYPE_LABELS[type]}
              </div>
            ))}
          </div>

          {/* Grid de Meses */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CALENDAR_2026.map((month) => (
              <div key={month.name} className="bg-white rounded-[2rem] p-6 shadow-sm shadow-brand-navy/5 border border-brand-sky-light/30 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-sky-light/30">
                  <div className="w-10 h-10 rounded-full bg-brand-sky-pale flex items-center justify-center text-brand-sky">
                    <IconCalendar className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-black text-xl text-brand-navy">{month.name}</h3>
                </div>

                <ul className="space-y-4">
                  {month.events.length > 0 ? (
                    month.events.map((ev, i) => (
                      <li key={i} className="flex flex-col gap-1">
                        <div className="flex items-start gap-3">
                          <span className="font-display font-black text-lg text-brand-sky min-w-[2rem]">
                            {ev.day}
                          </span>
                          <span className="text-sm font-medium text-brand-gray-dark mt-0.5 leading-tight">
                            {ev.name}
                          </span>
                        </div>
                        <div className="pl-11">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${TYPE_COLORS[ev.type]}`}>
                            {TYPE_LABELS[ev.type]}
                          </span>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-brand-gray-mid italic">Nenhum evento previsto.</li>
                  )}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
