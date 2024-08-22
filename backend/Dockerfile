FROM php:8.3-fpm

# Instalar dependencias del sistema
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

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instalar Symfony CLI
RUN wget https://get.symfony.com/cli/installer -O - | bash && \
    mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Copiar el código fuente
COPY . .

# Establecer la variable de entorno para permitir superusuario en Composer
ENV COMPOSER_ALLOW_SUPERUSER=1

# Instalar dependencias de PHP
RUN composer install --no-scripts --no-autoloader
RUN composer require symfony/maker-bundle --dev
RUN composer dump-autoload --optimize

# Cambiar permisos
RUN chown -R www-data:www-data /var/www/html

# Exponer el puerto
EXPOSE 8000

# Servir la aplicación
CMD symfony server:start --port=8000 --allow-http