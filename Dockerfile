# Dockerfile

# 1. Build-Stage
FROM oven/bun:1
WORKDIR /app

COPY package.json bun.lock /app/
RUN bun install
COPY . .

ENV DATABASE_URL=postgresql://admin:password@postgres:5432/FullstackQuizDB?schema=public

ENTRYPOINT [ "sh", "-c", "bun run db:push && bun run db:seed && bun run dev" ]