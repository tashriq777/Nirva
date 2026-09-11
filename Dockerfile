# ---------- Stage 1: build frontend assets (Vite + React + TS) ----------
FROM node:20-alpine AS frontend
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---------- Stage 2: PHP runtime ----------
FROM php:8.4-cli
WORKDIR /var/www/html

# System deps + PHP extensions Laravel needs
RUN apt-get update && apt-get install -y \
        git unzip libzip-dev libpng-dev libonig-dev libxml2-dev sqlite3 libsqlite3-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_sqlite mbstring zip exif pcntl bcmath gd \
    && rm -rf /var/lib/apt/lists/*

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# App code
COPY . .

# Compiled frontend assets from stage 1
COPY --from=frontend /app/public/build ./public/build

# PHP deps
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Writable dirs Laravel needs
RUN mkdir -p storage/framework/sessions storage/framework/views storage/framework/cache storage/logs bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 10000

# Ensure the sqlite file exists, run migrations, then serve.
# Render injects $PORT at runtime — we fall back to 10000 for local testing.
CMD ["sh", "-c", "mkdir -p database && touch database/database.sqlite && php artisan config:cache && php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=${PORT:-10000}"]
