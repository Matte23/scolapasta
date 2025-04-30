FROM node:23-slim AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:23-slim
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
CMD ["serve", "-s", "dist"]
EXPOSE 3000
