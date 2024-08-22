FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y git \
    curl php-cli php-mbstring php-xml unzip php-pgsql php-zip php-intl php-curl php-gd php-sqlite3 \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && corepack enable \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && COMPOSER_ALLOW_SUPERUSER=1 composer global require phpunit/phpunit \
    && curl -sS https://get.symfony.com/cli/installer | bash \
    && mv /root/.symfony*/bin/symfony /usr/local/bin/symfony
USER jenkins