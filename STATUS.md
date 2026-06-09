# Status do Projeto: Tempo de Aprender

Este documento serve como um registro do progresso atual da reestruturação do site institucional da escola Tempo de Aprender, detalhando as melhorias implementadas até o momento e o roteiro de próximos passos.

---

## 🕒 Última Sessão (Hoje)

**Foco em Polimento e Experiência do Usuário:**
- ✅ **Elementos Lúdicos e Ilustrações:** Criação de componentes SVG escaláveis (estrelas, rabiscos, aviões de papel) incorporados de forma sutil com animações (flutuação e pulso) nas páginas Início, Sobre e Cabeçalhos para trazer uma sensação mais acolhedora e infantil.
- ✅ **Carrossel Interativo de Depoimentos:** Substituição da grade estática por um carrossel responsivo e nativo (CSS scroll snapping) com navegação fluida por botões ou deslize.
- ✅ **Timeline Histórica Interativa:** Otimização da seção de Marcos Históricos na página `/sobre` para funcionar como um *accordion*, permitindo que pais cliquem em cada ano para ler os detalhes e visualizar fotos da época.

## 🎯 Próxima Sessão (Sugestão de Foco)

Podemos continuar o polimento visual na "Fase Extra" ou começar a preparar para o lançamento "Fase 3":
1. ✅ **Transições de Rotas (Page Transitions)**: Adicionar animações elegantes (ex: framer-motion ou classes nativas) ao navegar entre páginas, evitando a quebra brusca de tela.
2. **Skeleton Loaders ou Theming do Google Maps**: Garantir que as imagens e o mapa carreguem sem "pular" o layout da página ou destoar das cores do design.
3. **Revisão de Build e Testes Finais**: Iniciar os testes preparatórios e o build final, deixando a plataforma 100% pronta para receber os conteúdos definitivos da direção.

---

## ✅ O que foi feito até agora

### 1. Estrutura e Fundação Tecnológica
- **Migração para Multi-page**: Arquitetura de site institucional completo com React Router — rotas para Início, Sobre Nós, Equipe, Diferenciais, Depoimentos e Contato.
- **Configuração TypeScript**: Código totalmente tipado para maior estabilidade.

### 2. Design System e Identidade
- **Paleta de Cores**: Cores da marca definidas no Tailwind (`brand-sky`, `brand-navy`, `brand-green`, `brand-orange`).
- **Sistema de Animações (Scroll Reveal)**: Hook customizado (`useReveal` e `useStaggerReveal`) com IntersectionObserver, fade-up, scale e slide lateral, com respeito ao `prefers-reduced-motion`.
- **Navbar inteligente**: Fundo transparente no topo que se torna sólido ao rolar; menu mobile funcional; botão de matrícula em destaque.

### 3. Páginas Internas — Conteúdo e Polimento Visual ✅ *Concluído*
- **Sobre Nós (`/sobre`)**: Seção About com Missão/Visão/Valores e galeria de fotos; timeline animada com marcos históricos (2003–2024); strip de estatísticas (20+ anos, fundação, avaliação); CTA dark navy ao final.
- **Diferenciais (`/diferenciais`)**: Seção de destaques (Metodologia Ativa, Comunidade, Excelência) antes do BentoGrid; CTA dark navy ao final — todos com animações reveal.
- **Depoimentos (`/depoimentos`)**: Expandido de 3 para **6 depoimentos** de famílias; strip de estatísticas (300+ famílias, 5★, 20+ anos); CTA dark navy ao final.
- **Equipe (`/equipe`)**: Cards de direção, corpo docente e colaboradores com avatares coloridos e bios; layout responsivo com card de destaque para a Diretora.

### 4. Página de Contato (`/contato`) ✅ *Concluído*
- Formulário funcional com validação nativa (nome, e-mail, WhatsApp, segmento, mensagem) e estado de sucesso com feedback visual.
- **Botões de ação rápida** em destaque: WhatsApp (verde #25D366) e Instagram (gradiente) com animações slide-in.
- **Mapa embed** do Google Maps com a localização em Escada-PE, card de endereço e horários de atendimento.
- Animações reveal no sidebar e no formulário.
- **Layout equilibrado**: grid assimétrico `[5fr_7fr]` — sidebar com título, botões de ação rápida e horários; formulário com largura proporcional ao conteúdo. Lista de contatos removida do sidebar (duplicada no mapa e rodapé).

### 7. Modal de Boas-vindas ✅ *Concluído*
- **Componente `WelcomeModal`**: banner em modal exibido 900ms após cada carregamento de página (aparece novamente a cada atualização — sem sessionStorage).
- **Tema Copa do Mundo 2026**: imagem de estádio, badge laranja com ícone de esporte, headline "Garanta a vaga antes do apito final!", faixa decorativa com as cores da marca.
- **Acessibilidade completa**: `role="dialog"`, `aria-modal`, `aria-labelledby`, foco automático ao abrir, fechamento com Escape e clique no backdrop, scroll do body travado enquanto aberto.
- **Animação**: escala + translateY com `cubic-bezier(0.16, 1, 0.3, 1)`, fundo escurecido com `bg-black/75 backdrop-blur-md`.
- **Integrado ao `MainLayout.tsx`**: renderizado após `<Footer />`, presente em todas as rotas.

### 5. Acessibilidade ✅ *Auditoria e Correções Concluídas*
- **Contrastes corrigidos** (WCAG AA):
  - `brand-orange` escurecido de `#C85A00` → `#A84800` (5.84:1 em branco ✓)
  - `brand-sky-mid` escurecido de `#3498DB` → `#2471A3` (5.29:1 em branco ✓)
  - Botões primários migrados de `bg-brand-sky` para `bg-brand-sky-mid` (branco: 5.29:1 ✓)
  - `opacity-80/85` removido do texto de corpo no BentoGrid
- **Alt texts**: todos os `<img>` possuem `alt` descritivo ou `alt=""` + `aria-hidden` para decorativos.
- **Teclado / Foco**: `:focus-visible` global implementado; skip-link "pular para conteúdo"; mobile menu com `aria-expanded` / `aria-controls`.
- **ARIA**: landmark regions, `aria-label` em todos os elementos interativos, `role="alert" aria-live="polite"` no formulário.
- **Semântica**: `<section>`, `<article>`, `<nav>`, `<address>`, hierarquia de headings h1→h2→h3 consistente.

### 6. Responsividade ✅ *Revisão e Correções Concluídas*
- **Hero**: H1 reduzido de `text-4xl` para `text-3xl` na base mobile.
- **PageHero**: Títulos de `text-3xl` → `text-2xl` na base mobile.
- **About**: Grade de fotos migrada para `grid-cols-1 sm:grid-cols-2`; gap do layout `gap-20` → `gap-10 lg:gap-20`.
- **ContactForm**: Gap do layout `gap-16` → `gap-10 lg:gap-16`.
- **Testimonials**: Padding dos cards `p-8` → `p-5 sm:p-8`.
- **SobrePage stats strip**: Migrado para `grid-cols-1 sm:grid-cols-3` com `divide-y sm:divide-y-0 sm:divide-x` — empilha verticalmente no mobile com divisores horizontais.
- **Footer**: Gap `gap-10` → `gap-6 lg:gap-10`.
- **HomePage, DiferenciaisPage, DepoimentosPage**: Gaps e `py-*` ajustados para mobile (`gap-6 md:gap-10`, `py-12 sm:py-20`).
- Header, botões, formulários e imagens já eram responsivos — confirmado e mantido.

---

## 🚀 O que ainda precisa ser feito

### Fase 1: Conteúdo Real da Escola *(Depende da diretoria)*
- [ ] **Dados reais da Equipe (`/equipe`)**: Substituir nomes genéricos ("Professora 1", "A definir") pelos nomes, fotos e bios reais da diretora, professores e colaboradores. Os cards já estão prontos para receber os dados.
- [ ] **Revisão de copy completa**: Revisar todos os textos com a diretoria — bios, depoimentos, datas da timeline, descrições de diferenciais e mensagem da home. Confirmar que o WhatsApp (`whats.link/escolatempodeaprender`) e o Instagram (`@escolatempodeaprender24`) estão corretos.
- [ ] **Fotos reais**: Substituir as imagens do Unsplash por fotos reais da escola, das salas de aula, dos eventos e dos alunos (com autorização dos responsáveis).

### Fase 2: SEO Local *(Crucial para conversão orgânica)* ✅ *Concluído*
- [x] **Meta Tags**: Configurar `<title>`, `<meta description>` e Open Graph (preview para WhatsApp/redes sociais) em cada rota — otimizados para pesquisas como "escola infantil em Escada PE" e "matrícula fundamental Escada".
- [x] **Favicon**: Adicionado favicon real em SVG em conformidade com as cores da identidade visual.
- [x] **`sitemap.xml` e `robots.txt`**: Configurar para indexação correta pelo Google.

### Fase Extra: Design & Experiência Visual *(Oportunidades de Polimento)*
- [x] **Elementos Lúdicos e Ilustrações**: Adicionar pequenos grafismos vetoriais em SVG (rabiscos estilo giz de cera, estrelas, aviões de papel) usando as cores da marca para quebrar a seriedade e tornar o visual mais infantil e acolhedor.
- [x] **Carrossel Interativo de Depoimentos**: Em vez de uma grade estática na página de depoimentos, implementar um componente slider/carrossel dinâmico com transições suaves para melhor leitura dos feedbacks das famílias.
- [x] **Timeline Histórica Interativa**: Tornar a linha do tempo da história da escola na página `/sobre` interativa, permitindo cliques para expandir fotos e detalhes de cada ano/marco.
- [x] **Transição de Rotas (Page Transitions)**: Adicionar transições de fade ou slide suave ao navegar entre diferentes páginas para aumentar a percepção de fluidez e refinamento.
- [x] **Customização Temática do WelcomeModal**: Permitir que o banner inicial seja facilmente alternável para campanhas sazonais (Volta às Aulas, Festa Junina, Dia das Crianças, Matrículas Abertas) sem quebrar o layout.
- [x] **Estilo Personalizado do Google Maps**: Aplicar um tema visual personalizado (via CSS/overlay ou mapas estilizados) no mapa incorporado da página de contato para combinar com a paleta azul-marinho e azul-celeste da escola.
- [x] **Skeletons para Carregamento de Imagens**: Adicionar estados de carregamento animados (shimmer patterns/skeletons) nas galerias e fotos da equipe para evitar saltos visuais na tela enquanto as fotos reais carregam.

### Fase 3: Build e Deploy *(Lançamento)*
- [ ] **Teste em dispositivos reais**: Confirmar experiência em iPhone, Android e tablets físicos além da simulação por código.
- [ ] **Build de produção**: Rodar `npm run build` e validar que não há erros ou warnings críticos.
- [ ] **Deploy**: Publicar na plataforma definitiva (Vercel ou Netlify recomendados — integração direta com o repositório Git).
- [ ] **Domínio personalizado**: Configurar domínio próprio (ex: `escolatempodeaprender.com.br`) apontando para o deploy.
- [ ] **Analytics**: Adicionar Google Analytics ou Plausible para acompanhar visitas e conversões de matrícula após o lançamento.
