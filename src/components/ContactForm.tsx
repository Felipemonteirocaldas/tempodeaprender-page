import type { ReactNode } from 'react'
import { useState } from 'react'
import { IconWhatsApp, IconInstagram, IconCheck } from './icons'
import { useReveal } from '@/hooks/useReveal'

const SERIES: string[] = ['Educação Infantil', '1º ao 5º ano (Fundamental I)']

/* WhatsApp da secretaria (destino de whats.link/escolatempodeaprender) */
const WHATSAPP_NUMBER = '558191121015'

const INPUT_CLASS = 'tap-target w-full px-4 rounded-xl border-2 border-brand-sky-light text-sm text-brand-dark placeholder:text-brand-gray-mid focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition aria-[invalid=true]:border-[#C8102E]'

type FieldName = 'nome' | 'email' | 'telefone' | 'serie'
type FormErrors = Partial<Record<FieldName, string>>

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  const nome = String(data.get('nome') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const telefone = String(data.get('telefone') ?? '').replace(/\D/g, '')
  if (nome.length < 3) errors.nome = 'Informe seu nome completo.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Informe um e-mail válido, como nome@email.com.'
  if (telefone.length < 10 || telefone.length > 13) errors.telefone = 'Informe o WhatsApp com DDD, como (81) 90000-0000.'
  if (!data.get('serie')) errors.serie = 'Selecione o segmento de interesse.'
  return errors
}

function buildWhatsAppUrl(data: FormData): string {
  const linhas = [
    'Olá! Vim pelo site e gostaria de informações sobre matrícula.',
    '',
    `*Nome:* ${String(data.get('nome')).trim()}`,
    `*E-mail:* ${String(data.get('email')).trim()}`,
    `*WhatsApp:* ${String(data.get('telefone')).trim()}`,
    `*Segmento:* ${String(data.get('serie'))}`,
  ]
  const mensagem = String(data.get('mensagem') ?? '').trim()
  if (mensagem) linhas.push(`*Mensagem:* ${mensagem}`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(linhas.join('\n'))}`
}

interface FieldProps { id: string; label: string; required?: boolean; error?: string; children: ReactNode }

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-brand-navy">
        {label}
        {required && <span className="text-brand-orange ml-1" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (obrigatório)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-[#C8102E]">
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [sent, setSent] = useState<boolean>(false)
  const [whatsUrl, setWhatsUrl] = useState<string>('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [infoRef, infoVisible] = useReveal<HTMLDivElement>()
  const [formRef, formVisible] = useReveal<HTMLDivElement>({ threshold: 0.08 })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const found = validate(data)
    setErrors(found)

    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus()
      return
    }

    const url = buildWhatsAppUrl(data)
    setWhatsUrl(url)
    /* Aberto no próprio clique para não ser bloqueado como pop-up */
    const win = window.open(url, '_blank', 'noopener')
    if (!win) window.location.href = url
    setSent(true)
  }

  /* Liga o campo à mensagem de erro para leitores de tela */
  const errorProps = (name: FieldName) => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <section id="contato" aria-labelledby="contact-heading" className="py-24 bg-white">
      {/* Faixa do uniforme */}
      <div aria-hidden="true" className="flex h-1 mb-0">
        <span className="flex-[3] bg-brand-sky" />
        <span className="flex-[2] bg-brand-navy" />
        <span className="flex-[1] bg-white border-y border-brand-sky-light" />
        <span className="flex-[1] bg-brand-green" />
        <span className="flex-[1] bg-brand-orange" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-start">

        {/* Sidebar */}
        <div
          ref={infoRef}
          className={`reveal ${infoVisible ? 'visible' : ''}`}
        >
          <div className="reveal-left">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky-mid">Fale conosco</span>
            <h2 id="contact-heading" className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy">
              Matrículas abertas para 2026
            </h2>
            <p className="mt-4 text-brand-gray-mid leading-relaxed">
              Entre em contato pelo formulário, WhatsApp ou Instagram. Nossa equipe responde em até 1 dia útil.
            </p>
          </div>

          {/* Quick action buttons */}
          <div className="reveal-left mt-8 flex flex-col gap-3" style={{ transitionDelay: '120ms' }}>
            <a
              href="https://whats.link/escolatempodeaprender"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar pelo WhatsApp da secretaria"
              className="tap-target flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-brand-green text-white font-display font-black text-sm transition-all shadow-[0_4px_0_rgba(20,160,80,1)] hover:translate-y-0.5 hover:shadow-[0_2px_0_rgba(20,160,80,1)] active:translate-y-1 active:shadow-none"
            >
              <IconWhatsApp className="w-5 h-5" />
              Conversar pelo WhatsApp
            </a>
            <a
              href="https://www.instagram.com/escolatempodeaprender24/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil no Instagram"
              className="tap-target flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-brand-orange text-brand-navy font-display font-black text-sm transition-all shadow-[0_4px_0_rgba(200,60,40,1)] hover:translate-y-0.5 hover:shadow-[0_2px_0_rgba(200,60,40,1)] active:translate-y-1 active:shadow-none"
            >
              <IconInstagram className="w-5 h-5" />
              Ver no Instagram
            </a>
          </div>

          <div
            className="reveal-left mt-8 p-5 rounded-2xl bg-brand-sky-pale border-2 border-brand-sky-light"
            style={{ transitionDelay: '200ms' }}
          >
            <p className="font-display font-bold text-brand-navy text-sm mb-2">Horário de atendimento</p>
            <p className="text-sm text-brand-gray-mid">
              Segunda a sexta: 07h às 17h<br />
              Sábados: 08h às 12h
            </p>
          </div>
        </div>

        {/* Form */}
        <div
          ref={formRef}
          className={`reveal ${formVisible ? 'visible' : ''}`}
        >
          <div className="reveal-right">
            {sent ? (
              <div
                role="alert"
                aria-live="polite"
                className="h-full flex flex-col items-center justify-center text-center gap-4 rounded-2xl bg-brand-sky-light p-10"
              >
                <span className="w-16 h-16 rounded-full bg-brand-sky flex items-center justify-center">
                  <IconCheck className="w-8 h-8 text-white" />
                </span>
                <h3 className="font-display font-bold text-2xl text-brand-navy">Quase lá!</h3>
                <p className="text-brand-gray-mid text-sm">
                  Abrimos o WhatsApp da secretaria com a sua mensagem pronta. É só tocar em <strong>enviar</strong> por lá para concluir.
                </p>
                <a
                  href={whatsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-target mt-2 inline-flex items-center justify-center gap-2 px-6 rounded-lg bg-[#1E8E4A] text-white font-display font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  <IconWhatsApp className="w-5 h-5" />
                  Abrir o WhatsApp de novo
                </a>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="tap-target px-6 rounded-lg text-brand-navy font-display font-bold text-sm hover:underline"
                >
                  Voltar ao formulário
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulário de contato e matrícula"
                className="flex flex-col gap-5"
              >
                <Field id="nome" error={errors.nome} label="Nome completo" required>
                  <input
                    id="nome" {...errorProps('nome')} type="text" name="nome" autoComplete="name" required
                    className={INPUT_CLASS}
                    placeholder="Ex: Maria da Silva"
                    aria-required="true"
                  />
                </Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="email" error={errors.email} label="E-mail" required>
                    <input
                      id="email" {...errorProps('email')} type="email" name="email" autoComplete="email" required
                      className={INPUT_CLASS}
                      placeholder="seu@email.com"
                      aria-required="true"
                    />
                  </Field>
                  <Field id="telefone" error={errors.telefone} label="WhatsApp" required>
                    <input
                      id="telefone" {...errorProps('telefone')} type="tel" name="telefone" autoComplete="tel" required
                      className={INPUT_CLASS}
                      placeholder="(81) 90000-0000"
                      aria-required="true"
                    />
                  </Field>
                </div>
                <Field id="serie" error={errors.serie} label="Segmento de interesse" required>
                  <select
                    id="serie" {...errorProps('serie')} name="serie" required defaultValue=""
                    className={`${INPUT_CLASS} bg-white`}
                    aria-required="true"
                  >
                    <option value="" disabled>Selecione o segmento</option>
                    {SERIES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field id="mensagem" label="Mensagem">
                  <textarea
                    id="mensagem" name="mensagem" rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-sky-light text-sm text-brand-dark placeholder:text-brand-gray-mid focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition resize-none"
                    placeholder="Conte-nos mais sobre o que procura..."
                  />
                </Field>
                <button
                  type="submit"
                  className="tap-target w-full rounded-xl bg-brand-navy text-white font-display font-bold text-base hover:bg-brand-navy-light transition-colors shadow-lg shadow-brand-navy/25"
                >
                  Enviar pelo WhatsApp
                </button>
                <p className="text-xs text-brand-gray-mid text-center">
                  Ao enviar, abrimos o WhatsApp da secretaria com sua mensagem pronta. Seus dados são usados apenas para o atendimento, conforme a LGPD.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
