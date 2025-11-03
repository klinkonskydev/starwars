![Star_Wars_Logo](https://github.com/user-attachments/assets/596cf7e7-6443-433e-8fa5-3990b52ca397)

Aplicação Next.js que consome a SWAPI (Star Wars API) via GraphQL para listar planetas com:
- Paginação de 10 itens por página
- Busca por nome com debounce de 600ms
- Cache no Next.js e Apollo Client para melhor performance

Stack: Next.js 16, React 19, TypeScript, GraphQL (graphql-yoga), Apollo Client, Tailwind CSS, Bun, Biome, Cypress, Testing Library. Hooks de Git com Lefthook para formatar/checar código a cada commit.

---
### Requisitos obrigatórios
- Pagina para a listagem dos planetas
- Pagina para os detalhes do planeta
- Mobile-First
- Funcionalidade de rotass
- Paginacao com 10 planetas por pagina
- Busca por nome
- Sem pacotes terceiros para busca do SWAPI

---
### Requisitos opcionais implementados
- Testes E2E
- Testes Unitários
- Utilização de SAAS (globals.css)
- Programação funcional

---

### Requisitos para instalação
- Bun instalado: [bun.sh](https://bun.sh/)
- (Opcional) Cypress para E2E
- Variaveis de ambiente
  - NEXT_PUBLIC_SWAPI="https://swapi.dev/api"
  - NEXT_PUBLIC_HOST="http://localhost:3000"
---

### Instalação e Execução
1) Instalar dependências
```bash
bun install
```

2) Ambiente de desenvolvimento
```bash
bun run dev
# http://localhost:3000
```

3) Build e produção
```bash
bun run build
bun run start
```

---

### Comandos Úteis
- Lint e formatação (Biome):
```bash
bun run lint
bun run format
```

- Testes (Testing Library + bun test):
```bash
bun run test
bun run test:watch
```

- E2E (Cypress):
```bash
bun run cypress:open
```

---

### Principais Tecnologias
- Frontend: Next.js, React, Tailwind CSS
- Dados: GraphQL (graphql-yoga), Apollo Client, SWAPI
- Qualidade: Biome, Lefthook
- Testes: bun test (Testing Library), Cypress

---

### Observações
- Paginação: 10 planetas por página
- Busca: por nome com debounce de 600ms
- Cache: Next.js + Apollo para respostas rápidas
