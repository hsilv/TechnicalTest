FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y git
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    corepack enable
RUN apt-get update && apt-get install -y curl php-cli php-mbstring php-xml unzip && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN COMPOSER_ALLOW_SUPERUSER=1 composer global require phpunit/phpunit
USER jenkins