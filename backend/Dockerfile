FROM php:8.3-fpm
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libpq-dev \
    libzip-dev \
    unzip \
    git \
    wget \
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
RUN composer require symfony/maker-bundle --dev
RUN composer dump-autoload --optimize
RUN chown -R www-data:www-data /var/www/html
EXPOSE 8000
CMD symfony server:start --port=8000 --allow-http