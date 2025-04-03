# Dockerfile

# 1. Build-Stage
FROM node:latest AS builder

WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package.json package-lock.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den restlichen Anwendungscode
COPY . .

# Generiere Prisma Client mit den neuen Binary Targets
RUN npx prisma generate

# Baue die Anwendung (nur erforderlich, wenn du TypeScript verwendest)
RUN npm run build

# 2. Produktions-Stage
FROM node:latest

WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package.json package-lock.json ./

# Installiere nur Produktionsabhängigkeiten
RUN npm install

# Kopiere die gebaute Anwendung und Prisma-Verzeichnis vom Builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Exponiere den Port
EXPOSE 3000

# Setze Umgebungsvariablen
ENV NODE_ENV=production

# Definiere den Startbefehl
CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && node dist/index.js"]