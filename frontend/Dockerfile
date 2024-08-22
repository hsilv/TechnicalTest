FROM node:18.12
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable
RUN pnpm install
COPY . .
EXPOSE 5173
CMD ["pnpm", "run", "dev"]