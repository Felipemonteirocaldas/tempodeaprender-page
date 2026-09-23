import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import { IconArrowRight, IconHeart } from '@/components/icons'

/* ─── Types ─── */

interface StaffMember {
  name: string
  role: string
  initials: string
  bio: string
  accentBg: string
  accentText: string
}

/* ─── Data ─── */

const DIRECTOR: StaffMember = {
  name: 'A definir',
  role: 'Diretora Geral',
  initials: 'DG',
  bio: 'À frente da escola há mais de 20 anos, lidera com amor, visão pedagógica e compromisso com o desenvolvimento integral de cada criança. Formada em Pedagogia com especialização em Gestão Escolar.',
  accentBg: 'bg-brand-navy',
  accentText: 'text-brand-sky',
}

const TEACHERS: StaffMember[] = [
  {
    name: 'Professora 1',
    role: 'Educação Infantil',
    initials: 'P1',
    bio: 'Especialista em alfabetização e letramento, transforma cada aula em uma experiência lúdica e acolhedora para os pequenos.',
    accentBg: 'bg-brand-sky',
    accentText: 'text-white',
  },
  {
    name: 'Professora 2',
    role: 'Ensino Fundamental I — 1º e 2º ano',
    initials: 'P2',
    bio: 'Pedagoga dedicada, utiliza metodologias ativas para estimular a curiosidade e o pensamento crítico dos alunos.',
    accentBg: 'bg-brand-green',
    accentText: 'text-white',
  },
  {
    name: 'Professor 3',
    role: 'Ensino Fundamental I — 3º e 4º ano',
    initials: 'P3',
    bio: 'Especialista em ciências e matemática, inspira os alunos com experimentos práticos e desafios criativos.',
    accentBg: 'bg-brand-orange',
    accentText: 'text-white',
  },
  {
    name: 'Professora 4',
    role: 'Ensino Fundamental I — 5º ano',
    initials: 'P4',
    bio: 'Prepara os alunos para a transição ao Fundamental II com base sólida em português e redação.',
    accentBg: 'bg-brand-sky-mid',
    accentText: 'text-white',
  },
  {
    name: 'Professor 5',
    role: 'Educação Física',
    initials: 'P5',
    bio: 'Promove saúde, cooperação e alegria através de atividades esportivas e recreativas adaptadas a cada faixa etária.',
    accentBg: 'bg-brand-navy',
    accentText: 'text-brand-sky',
  },
  {
    name: 'Professora 6',
    role: 'Artes e Cultura',
    initials: 'P6',
    bio: 'Responsável pelo calendário cultural e artístico, estimula a criatividade e a expressão de cada criança.',
    accentBg: 'bg-brand-sky-light',
    accentText: 'text-brand-navy',
  },
]

const COLLABORATORS: StaffMember[] = [
  {
    name: 'Colaborador 1',
    role: 'Coordenação Pedagógica',
    initials: 'C1',
    bio: 'Acompanha o planejamento pedagógico e apoia os professores na implementação de práticas inovadoras.',
    accentBg: 'bg-brand-sky',
    accentText: 'text-white',
  },
  {
    name: 'Colaborador 2',
    role: 'Secretaria Escolar',
    initials: 'C2',
    bio: 'Gerencia matrículas, documentação e o atendimento às famílias com eficiência e simpatia.',
    accentBg: 'bg-brand-green',
    accentText: 'text-white',
  },
  {
    name: 'Colaborador 3',
    role: 'Auxiliar de Sala',
    initials: 'C3',
    bio: 'Apoia as atividades diárias em sala, garantindo atenção individualizada a cada aluno.',
    accentBg: 'bg-brand-orange',
    accentText: 'text-white',
  },
  {
    name: 'Colaborador 4',
    role: 'Serviços Gerais',
    initials: 'C4',
    bio: 'Cuida do ambiente escolar com dedicação, mantendo os espaços limpos, seguros e acolhedores.',
    accentBg: 'bg-brand-navy',
    accentText: 'text-brand-sky',
  },
]

/* ─── Sub-components ─── */

function StaffCard({ member }: { member: StaffMember }) {
  return (
    <article className="bg-white rounded-2xl p-6 flex flex-col gap-4 border-2 border-brand-sky-light hover:border-brand-sky hover:shadow-lg hover:shadow-brand-sky/10 transition-all duration-300 group">
      {/* Avatar + Info */}
      <div className="flex items-center gap-4">
        <span
          className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-lg flex-shrink-0 ${member.accentBg} ${member.accentText} transition-transform duration-300 group-hover:scale-105`}
          aria-hidden="true"
        >
          {member.initials}
        </span>
        <div className="min-w-0">
          <h3 className="font-display font-bold text-brand-navy text-base truncate">{member.name}</h3>
          <p className="text-brand-gray-mid text-xs font-medium">{member.role}</p>
        </div>
      </div>
      <p className="text-sm text-brand-gray-mid leading-relaxed">{member.bio}</p>
    </article>
  )
}

function DirectorCard({ member }: { member: StaffMember }) {
  return (
    <article className="bg-brand-navy rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left overflow-hidden relative">
      {/* Decoração */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-sky/10 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-brand-orange/5 blur-3xl" />

      {/* Avatar grande */}
      <div className="relative z-10 flex-shrink-0">
        <span
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex items-center justify-center font-display font-extrabold text-3xl bg-brand-sky text-white shadow-lg shadow-brand-sky/30"
          aria-hidden="true"
        >
          {member.initials}
        </span>
        {/* Badge */}
        <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center shadow-md">
          <IconHeart className="w-4 h-4 text-white" />
        </span>
      </div>

      {/* Info */}
      <div className="relative z-10 flex-1 min-w-0">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/80 font-display font-bold text-xs uppercase tracking-wider mb-3">
          Direção
        </span>
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">{member.name}</h3>
        <p className="text-brand-sky font-display font-bold text-sm mt-1">{member.role}</p>
        <p className="mt-4 text-white/75 leading-relaxed text-sm sm:text-base">{member.bio}</p>
      </div>
    </article>
  )
}

/* ─── Page ─── */

export default function EquipePage() {
  return (
    <>
      <PageHero
        title="Nossa Equipe"
        subtitle="Conheça os profissionais dedicados que fazem da Tempo de Aprender uma escola especial. Cada membro da nossa equipe contribui com amor e profissionalismo para o crescimento dos nossos alunos."
        breadcrumb="Equipe"
      />

      {/* Direção */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-orange">
              Liderança
            </span>
            <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy">
              Direção da Escola
            </h2>
            <p className="mt-3 text-brand-gray-mid leading-relaxed max-w-lg mx-auto">
              À frente de cada decisão, garantindo que nossa escola continue sendo referência em educação em Escada-PE.
            </p>
          </div>
          <DirectorCard member={DIRECTOR} />
        </div>
      </section>

      {/* Corpo Docente */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky-mid">
              Corpo Docente
            </span>
            <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy">
              Nossos Professores
            </h2>
            <p className="mt-3 text-brand-gray-mid leading-relaxed max-w-lg mx-auto">
              Profissionais qualificados e apaixonados pela educação, que fazem a diferença na vida de cada aluno.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map(member => (
              <StaffCard key={member.initials} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Colaboradores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-green">
              Time de apoio
            </span>
            <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy">
              Colaboradores
            </h2>
            <p className="mt-3 text-brand-gray-mid leading-relaxed max-w-lg mx-auto">
              Cada pessoa da nossa equipe contribui para que o dia a dia da escola funcione com excelência.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLABORATORS.map(member => (
              <StaffCard key={member.initials} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-sky-pale">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy">
            Quer fazer parte da nossa família?
          </h2>
          <p className="mt-3 text-brand-gray-mid leading-relaxed">
            Venha conhecer nossa equipe pessoalmente. Agende uma visita e descubra o carinho que colocamos em cada detalhe.
          </p>
          <Link
            to="/contato"
            className="tap-target mt-6 inline-flex items-center gap-2 px-8 rounded-xl bg-brand-navy text-white font-display font-bold text-base hover:bg-brand-navy-light transition-colors shadow-lg"
          >
            Agendar visita <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
