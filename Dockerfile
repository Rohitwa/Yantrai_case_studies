# Stage 1: Build the Vite React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# SPA: serve index.html for all routes (Cloud Run port 8080)
RUN echo 'events { worker_connections 1024; }' > /etc/nginx/nginx.conf && \
    echo 'http { include /etc/nginx/mime.types; default_type application/octet-stream; sendfile on; keepalive_timeout 65; server { listen 8080; root /usr/share/nginx/html; index index.html; location / { try_files $uri $uri/ /index.html; } } }' >> /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
