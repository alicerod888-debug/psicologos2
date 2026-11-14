# Dra. Helena Martins — Site demonstrativo de psicologia

Site institucional premium (Next.js 14 · React 18 · TypeScript · Tailwind CSS). **Identidade, CRP, depoimentos, telefone e redes são fictícios.**

## Rodar localmente
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Personalizar para um cliente
- `lib/site.ts`: nome, CRP, WhatsApp (DDI+DDD+número), Instagram, e-mail, cidade, URL do site.
- `components/*.tsx`: textos de cada seção (Hero, About, Service, Testimonials…).
- `public/helena-hero.svg` e `helena-sobre.svg`: imagens ilustrativas. Troque por fotos reais (`.jpg/.webp`).
- `tailwind.config.ts`: paleta (sage, cream, beige, brown).
- Antes de publicar: substitua depoimentos por relatos reais autorizados e confira as normas de publicidade do CFP.

## Publicar no Cloudflare (GitHub + Cloudflare)
O site é 100% estático (`output: "export"`): o build gera a pasta `out/`.

1. `git init && git add . && git commit -m "feat: site psicóloga"` → crie o repositório no GitHub e faça `git push`.
2. No painel da Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
3. Configuração de build:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Variável de ambiente (opcional): `NODE_VERSION` = `20`
4. Cada `git push` na branch principal publica automaticamente.
5. Depois de publicar, ajuste `url` em `lib/site.ts` para o domínio final (`*.pages.dev` ou domínio próprio) para SEO, sitemap e Open Graph.

**Alternativa via CLI (Workers com assets estáticos):** `npm run build && npx wrangler deploy` (usa o `wrangler.jsonc` incluído).

> Não use recursos que exigem servidor (API routes, SSR, `next/image` com otimização) — não funcionam em export estático.
