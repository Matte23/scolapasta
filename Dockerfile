# --- Build frontend ---
FROM node:24-slim AS frontend-builder
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# --- Backend setup ---
FROM node:24-slim

# Install ping for backend
RUN apt-get update && \
    apt-get install -y iputils-ping && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy backend code
COPY backend/package*.json ./
RUN npm install
COPY backend/ .

# Copy built frontend into backend expected location
COPY --from=frontend-builder /frontend/dist /frontend/dist

EXPOSE 5000

CMD ["node", "index.js"]