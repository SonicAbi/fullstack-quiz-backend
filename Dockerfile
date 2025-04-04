# Dockerfile

# 1. Build-Stage
FROM oven/bun:1
WORKDIR /app

COPY package.json bun.lock /app/
RUN bun install
COPY . .

EXPOSE 3000

ENTRYPOINT [ "sh", "-c", "bun run db:push && bun run db:seed && bun run dev" ]