FROM node:23-slim

RUN apt update && \
    apt install -y iputils-ping \
    && apt clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node", "index.js"]
