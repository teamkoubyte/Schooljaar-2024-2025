FROM php:8.2-apache

# Installeer PHP extensies die vaak gebruikt worden
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Schakel Apache rewrite module in
RUN a2enmod rewrite

# Kopieer alle bestanden naar de Apache webserver directory
COPY ./src/ /var/www/html/

# Zorg ervoor dat de Apache server toegang heeft tot de bestanden
RUN chown -R www-data:www-data /var/www/html
