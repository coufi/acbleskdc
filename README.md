# ACbleskDC - Oficiální webová prezentace

Moderní Next.js aplikace pro tribute skupinu ACbleskDC. Aplikace je optimalizována pro SSR/ISR, plně dockerizovaná a připravená na deployment na Vercel nebo self-hosting.

## 🎸 O projektu

Webová prezentace české tribute skupiny ACbleskDC věnující se hudbě legendární kapely AC/DC. Stránky obsahují:

- **Biografie** - historie a informace o kapele
- **Koncerty** - dynamický seznam nadcházejících a minulých koncertů
- **Playlist** - repertoár písní
- **Ke stažení** - promo materiály a média

## 🏗️ Architektura

### Rendering strategie

- **Static Generation** - biografie, ke stažení (build-time)
- **Incremental Static Regeneration (ISR)** - koncerty, playlist (revalidace 24h)
- **Client-side** - pouze pro interaktivní komponenty (menu, apod.)

### Technologie

- **Next.js 15** - React framework s App Router
- **TypeScript** - type-safe development
- **Tailwind CSS** - utility-first styling
- **Docker** - containerizace a deployment

### Data Layer

Aplikace používá repository pattern pro abstrakci datových zdrojů:

```typescript
// Aktuální implementace: JSON soubory
import { getConcerts } from '@/lib/data/repository';

// Budoucí: API nebo databáze - stačí změnit implementaci v repository.ts
```

## 🚀 Spuštění

### Docker (doporučeno)

```bash
# Development
docker-compose up

# Production s nginx reverse proxy
docker-compose -f docker-compose.prod.yml up -d
```

Aplikace běží na `http://localhost:3000`

### Lokální development (vyžaduje Node.js 20+)

```bash
# Instalace závislostí
npm install

# Development server
npm run dev

# Production build
npm run build
npm start
```

## 🐳 Docker

### Multi-stage Dockerfile

- **Stage 1 (deps)**: Instalace production dependencies
- **Stage 2 (builder)**: Build Next.js aplikace
- **Stage 3 (runner)**: Optimalizovaný runtime (~150MB)

### Docker Compose varianty

- `docker-compose.yml` - základní setup pro development/simple production
- `docker-compose.prod.yml` - production s nginx reverse proxy a SSL

## 📦 Build & Deployment

### Vercel (zero-config)

```bash
# Instalace Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Self-hosting (Docker)

```bash
# Build image
docker build -t acbleskdc-web .

# Push to registry
docker tag acbleskdc-web ghcr.io/username/acbleskdc-web:latest
docker push ghcr.io/username/acbleskdc-web:latest

# Deploy na server
docker pull ghcr.io/username/acbleskdc-web:latest
docker-compose -f docker-compose.prod.yml up -d
```

### GitHub Actions CI/CD

Automatický build a deploy při push do main branch:

1. Build a test aplikace
2. Build Docker image
3. Push do GitHub Container Registry
4. Deploy na Vercel (nebo trigger webhook pro self-hosting)

## 📁 Struktura projektu

```
acbleskdc/
├── app/                      # Next.js App Router
│   ├── biografie/           # Statická stránka
│   ├── koncerty/            # ISR stránka s koncerty
│   ├── playlist/            # ISR stránka s playlistem
│   ├── ke-stazeni/          # Statická stránka
│   ├── api/                 # API routes (health check)
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── shared/              # Sdílené komponenty (Header, Footer)
│   └── features/            # Feature-specific komponenty
├── lib/
│   └── data/
│       └── repository.ts    # Data abstraction layer
├── data/                    # JSON data soubory
│   ├── concerts.json
│   └── playlist.json
├── types/                   # TypeScript typy
├── public/                  # Statické assets
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml       # Docker Compose konfigurace
└── next.config.ts           # Next.js konfigurace
```

## 🔧 Konfigurace

### Environment Variables

```bash
# .env.local (pro lokální development)
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_SITE_URL=https://acbleskdc.cz
NEXT_PUBLIC_SITE_NAME=ACbleskDC
```

### Next.js konfigurace

- `output: 'standalone'` - optimalizace pro Docker
- ISR revalidace: 86400s (24h)
- Image optimization s AVIF/WebP

## 🔄 Rozšíření na API/DB

Pro přechod z JSON na API nebo databázi:

1. Upravte funkce v `lib/data/repository.ts`
2. Implementujte API calls nebo DB queries
3. Zachovejte stejné rozhraní (návratové typy)
4. Komponenty zůstanou beze změny

Příklad:

```typescript
// Původní: JSON
export async function getConcerts(): Promise<Concert[]> {
  return Promise.resolve(concertsData as Concert[]);
}

// Nový: API
export async function getConcerts(): Promise<Concert[]> {
  const res = await fetch(`${API_URL}/concerts`, {
    headers: { 'Authorization': `Bearer ${API_KEY}` }
  });
  return res.json();
}
```

## 📄 License

© 2024 ACbleskDC. All rights reserved.

## 🤝 Kontakt

- Facebook: [ACbleskDC](https://www.facebook.com/acbleskdc)
- YouTube: [@acbleskdc](https://www.youtube.com/@acbleskdc)

