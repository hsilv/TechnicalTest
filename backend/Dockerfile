FROM php:8.3-fpm
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libpq-dev \
    libzip-dev \
    unzip \
    git \
    wget \
    openssl \
    && docker-php-ext-install \
    intl \
    pdo \
    pdo_pgsql \
    pdo_mysql \
    zip
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN wget https://get.symfony.com/cli/installer -O - | bash && \
    mv /root/.symfony*/bin/symfony /usr/local/bin/symfony
WORKDIR /var/www/html
COPY . .
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN composer install --no-scripts --no-autoloader
RUN composer dump-autoload --optimize
RUN mkdir -p config/jwt && \
    chown -R www-data:www-data config/jwt
RUN chown -R www-data:www-data /var/www/html
EXPOSE 8000
CMD composer install && \
    php bin/console lexik:jwt:generate-keypair --overwrite && \
    if [ -z "$(ls -A migrations)" ]; then \
    php bin/console make:migration; \
    fi && \
    if [ -z "$(ls -A migrations)" ]; then \
    php bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration; \
    fi && \
    symfony server:start --port=8000 --allow-http