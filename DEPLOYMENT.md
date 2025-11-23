# Build and deployment scripts

## Local development with Docker

```bash
# Start development environment
docker-compose up

# Rebuild after code changes
docker-compose up --build

# Stop containers
docker-compose down
```

## Production deployment

### Option 1: Vercel (recommended for simplicity)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Option 2: Self-hosting with Docker

```bash
# Build production image
docker build -t acbleskdc-web:latest .

# Tag for registry
docker tag acbleskdc-web:latest ghcr.io/YOUR_USERNAME/acbleskdc-web:latest

# Push to GitHub Container Registry
docker push ghcr.io/YOUR_USERNAME/acbleskdc-web:latest

# On production server
docker pull ghcr.io/YOUR_USERNAME/acbleskdc-web:latest
docker-compose -f docker-compose.prod.yml up -d
```

### Option 3: Production with nginx

```bash
# Start with nginx reverse proxy
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop
docker-compose -f docker-compose.prod.yml down
```

## SSL Certificates (Let's Encrypt)

For production with nginx, generate SSL certificates:

```bash
# Create ssl directory
mkdir -p ssl

# Generate certificates with certbot
docker run -it --rm \
  -v $(pwd)/ssl:/etc/letsencrypt \
  -v $(pwd)/ssl-challenge:/var/www/certbot \
  certbot/certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  -d acbleskdc.cz \
  -d www.acbleskdc.cz \
  --email your-email@example.com \
  --agree-tos

# Copy certificates to ssl directory
cp ssl/live/acbleskdc.cz/fullchain.pem ssl/
cp ssl/live/acbleskdc.cz/privkey.pem ssl/
```

## Environment setup

```bash
# Copy example env file
cp .env.example .env.local

# Edit with your values
nano .env.local
```

## GitHub Actions setup

Required secrets in GitHub repository:

- `VERCEL_TOKEN` - Vercel deployment token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID

GitHub Container Registry is automatically authenticated via `GITHUB_TOKEN`.

## Health check

```bash
# Check if application is running
curl http://localhost:3000/api/health

# Expected response:
# {"status":"healthy","timestamp":"2024-11-23T...","service":"acbleskdc-web"}
```

## Monitoring

```bash
# View application logs
docker logs acbleskdc-web -f

# View nginx logs (if using nginx)
docker logs acbleskdc-nginx -f

# Check container status
docker ps

# Check resource usage
docker stats
```

