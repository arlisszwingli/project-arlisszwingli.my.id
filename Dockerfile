FROM node:22-alpine AS base

FROM base AS deps
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

FROM base AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN pnpm run build

FROM base AS production

WORKDIR /app

RUN addgroup --system --gid 1001 arliss-zwingli-sitanggang
RUN adduser --system --uid 1001 arliss-zwingli-sitanggang

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV PORT=3007

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN chown -R arliss-zwingli-sitanggang:arliss-zwingli-sitanggang /app

USER arliss-zwingli-sitanggang

EXPOSE 3007

CMD ["node", "server.js"]