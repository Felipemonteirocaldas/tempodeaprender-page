# AUDITORIA.md

# Objetivo

Executar uma auditoria completa do projeto.

Para cada item identificado:

1. Descrever o problema.
2. Explicar o impacto.
3. Classificar a gravidade.
4. Sugerir solução.
5. Corrigir quando possível.

Classificações:

- Crítica
- Alta
- Média
- Baixa

---

# 1. ARQUITETURA DO PROJETO

## Estrutura

Verificar:

- Organização de pastas
- Escalabilidade
- Separação de responsabilidades
- Convenções de nomenclatura

Identificar:

- Arquivos órfãos
- Código morto
- Estruturas redundantes

---

## Componentização

Verificar:

- Reutilização
- Coesão
- Acoplamento

Identificar:

- Componentes duplicados
- Componentes excessivamente grandes
- Componentes com múltiplas responsabilidades

---

# 2. FUNCIONALIDADE

## Navegação

Verificar:

- Links internos
- Links externos
- Menus
- Breadcrumbs

Identificar:

- Links quebrados
- Rotas inválidas
- Loops de navegação

---

## Formulários

Verificar:

- Envio
- Validação
- Mensagens de erro
- Mensagens de sucesso

Identificar:

- Campos sem validação
- Feedback insuficiente
- Fluxos interrompidos

---

# 3. RESPONSIVIDADE

Validar:

- 320px
- 375px
- 768px
- 1024px
- 1366px
- 1920px

Verificar:

- Quebras de layout
- Overflow horizontal
- Conteúdo cortado
- Menus responsivos
- Formulários

---

# 4. UX

## Jornada do Usuário

Mapear:

- Entrada
- Navegação
- Descoberta
- Conversão
- Contato

Identificar:

- Fricções
- Confusão
- Etapas desnecessárias

---

## Navegação

Verificar:

- Clareza
- Consistência
- Profundidade

Perguntas:

- O usuário sabe onde está?
- O usuário sabe para onde ir?

---

## Carga Cognitiva

Avaliar:

- Complexidade
- Excesso de informação
- Excesso de escolhas

Identificar:

- Sobrecarga visual
- Conteúdo redundante

---

# 5. HOME PAGE

## Primeira Impressão

Avaliar:

- Clareza da proposta
- Credibilidade
- Diferenciação

Pergunta:

Em menos de 5 segundos é possível entender:

- Quem é a empresa?
- O que ela faz?
- Para quem ela faz?
- O que fazer em seguida?

---

## Hero Section

Verificar:

- Headline
- Subheadline
- CTA principal
- Imagem principal

Identificar:

- Mensagens vagas
- CTA fraco
- Hero sem foco

---

# 6. CONVERSÃO

## CTA

Verificar:

- Clareza
- Posicionamento
- Frequência

Identificar:

- CTA escondido
- CTA genérico
- CTA conflitante

---

## Geração de Leads

Verificar:

- Formulários
- WhatsApp
- Agendamento
- Contato

Identificar:

- Barreiras
- Atritos
- Campos desnecessários

---

## Prova Social

Verificar:

- Clientes
- Cases
- Depoimentos
- Avaliações
- Estatísticas

Identificar:

- Falta de confiança
- Falta de credibilidade

---

# 7. DESIGN SYSTEM

## Consistência

Verificar:

- Componentes
- Cores
- Tipografia
- Espaçamento

Identificar:

- Inconsistências
- Variações sem padrão

---

## Componentes

Verificar:

- Botões
- Inputs
- Cards
- Modais
- Alertas

Identificar:

- Duplicações
- Estados ausentes

---

# 8. TIPOGRAFIA

Verificar:

- Escala tipográfica
- Hierarquia
- Legibilidade

Identificar:

- Muitos tamanhos
- Muitos pesos
- Falta de contraste

---

# 9. CORES

Verificar:

- Consistência
- Contraste
- Harmonia

Identificar:

- Saturação excessiva
- Baixo contraste
- Uso inconsistente

---

# 10. ESPAÇAMENTO

Verificar:

- Margens
- Padding
- Ritmo visual

Identificar:

- Elementos colados
- Espaços excessivos
- Falta de consistência

---

# 11. ACESSIBILIDADE

## WCAG 2.2 AA

Verificar:

- Contraste
- Navegação por teclado
- Focus states
- Labels
- Alt text
- ARIA

---

## HTML Semântico

Verificar:

- header
- nav
- main
- section
- article
- footer

Identificar:

- Estruturas incorretas
- Semântica ausente

---

# 12. PERFORMANCE

## Core Web Vitals

Verificar:

- LCP
- CLS
- INP

---

## Recursos

Analisar:

- Imagens
- CSS
- JavaScript
- Fontes

Identificar:

- Arquivos grandes
- Recursos não utilizados
- Carregamento desnecessário

---

# 13. SEO

## SEO Técnico

Verificar:

- Sitemap
- Robots.txt
- Canonical
- Open Graph

---

## SEO On Page

Verificar:

- Title
- Meta Description
- H1
- H2
- H3

Identificar:

- Duplicações
- Ausências
- Estrutura incorreta

---

## Conteúdo

Avaliar:

- Escaneabilidade
- Relevância
- Clareza

Identificar:

- Conteúdo fraco
- Conteúdo duplicado

---

# 14. SEGURANÇA

Verificar:

- HTTPS
- Validação de formulários
- Sanitização de entradas

Identificar:

- Riscos conhecidos
- Exposição desnecessária

---

# 15. QUALIDADE DE CÓDIGO

Verificar:

- Legibilidade
- Organização
- Modularidade

Identificar:

- Código duplicado
- Código morto
- Complexidade excessiva

---

# 16. ESTADOS DA INTERFACE

Verificar:

## Loading

- Skeleton
- Spinner
- Feedback

## Empty State

- Orientação
- Clareza

## Error State

- Mensagens claras
- Recuperação

## Success State

- Feedback positivo

---

# 17. DOCUMENTAÇÃO

Verificar:

- README
- Estrutura do projeto
- Comentários necessários

Identificar:

- Ausência de documentação
- Instruções incompletas

---

# RELATÓRIO FINAL

Para cada problema encontrado apresentar:

## Categoria

Exemplo:

- UX
- SEO
- Performance

## Problema

Descrição objetiva.

## Impacto

Consequência para usuário ou negócio.

## Gravidade

- Crítica
- Alta
- Média
- Baixa

## Solução

Ação recomendada.

## Status

- Corrigido
- Pendente
- Não aplicável

---

# Resultado Esperado

Ao concluir a auditoria:

- Nenhum problema crítico.
- Nenhum problema alto.
- UX consistente.
- SEO otimizado.
- Performance otimizada.
- Acessibilidade validada.
- Design System consistente.
- Código sustentável.
