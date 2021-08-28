---
title: "Install PHP Dan Laravel"
date: 2021-08-28T11:12:06+08:00
comments: true
draft: true
author: "Yoga"
toc: true
kategori: [Programming]
topik: [programming, php, laravel, mariadb, apache]
type: post
thumbnail: "/install-php-dan-laravel/img/thumbnail.webp"
description: "Install Php Dan Laravel"
summary: Ini adalah cara untuk memulai pemrograman PHP dengan cara terpisah.
---

![install-php-dan-laravel](/install-php-dan-laravel/img/thumbnail.webp)

Kali ini adalah tutorial untuk memulai pemrograman PHP tapi kita akan menginstall semuanya secara terpisah.

Kita akan menginstall dan menkonfigurasi PHP, Apache, MariaDB, dan juga Laravel.

## Instalasi LAMPP

Install PHP, Apache, MariaDB, dan PHPMyAdmin menggunakan Pacman.

{{<shell "$">}}sudo pacman -S php apache mariadb phpmyadmin {{</shell>}}

## Konfigurasi PHP

Semua konfigurasi PHP bisa dilakukan di `/etc/php/php.ini`.

+ Kalian bisa mengatur timezone seperti ini.

```bash
date.timezone = Asia/Kuala_Lumpur
```

+ Beberapa extension juga bisa diaktifkan dengan cara uncomment baris.

    **Extension gd**

    ```bash
    extension=gd
    ```

    **Extension iconv**

    ```bash
    extension=iconv
    ```

    **Extension bz2 dan zip**

    ```bash
    extension=bz2
    extension=zip
    ```

    **MySQL/MariaDB**

    ```bash
    extension=pdo_mysql
    extension=mysqli
    ```

## Konfigurasi MariaDB

Setelah kalian menginstall MariaDB, jalankan dulu perintah dibawah.

{{<shell "#">}}mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql{{</shell>}}

![mysql1](/install-php-dan-laravel/img/mysql1.webp)

Untuk menjalankannya servicenya, jalankan `mariadb.service`.

Untuk masuk ke MySQL server jalankan perintah di bawah.

{{<shell "#">}}mysql -u root -p{{</shell>}}

Password defaultnya kosong, jadi cukup tekan enter saja.

## Konfigurasi Apache

Ada tiga cara untuk konfigurasi Apache dengan PHP:
+ Menggunakan **libphp**
+ Menggunakan **apache2-mpm-worker** dan **mod_fcgid**
+ Menggunakan **php-fpm** dan **mod_proxy_fcgi**

Kali ini saya akan pakai cara yang pertama, karena yang paling gampang tapi juga memiliki beberapa kekurangan.

Buka file `/etc/httpd/conf/httpd.conf` lalu comment baris di bawah ini.

{{<fileCode "Apache" "httpd.conf">}}#LoadModule mpm_event_module modules/mod_mpm_event.so{{</fileCode>}}

dan uncomment baris di bawah ini.

{{<fileCode "Apache" "httpd.conf">}}LoadModule mpm_prefork_module modules/mod_mpm_prefork.so{{</fileCode>}}

Jika sudah, tambahkan kalimat di bawah ini di akhir dari list `LoadModule`.

{{<fileCode "Apache" "httpd.conf">}}LoadModule php_module modules/libphp.so
AddHandler php-script .php{{</fileCode>}}

Lalu tambahkan baris di bawah ini di akhir dari list `Include`.

{{<fileCode "Apache" "httpd.conf">}}Include conf/extra/php_module.conf{{</fileCode>}}

Jika sudah, jalankan atau restart `httpd.service`.

## Konfigurasi PHPMyAdmin

Buat sebuah file di `/etc/httpd/conf/extra/` dengan nama `phpmyadmin.conf` lalu isi sebagai berikut.

{{<fileCode "Apache" "phpmyadmin.conf">}}Alias /phpmyadmin "/usr/share/webapps/phpMyAdmin"
<Directory "/usr/share/webapps/phpMyAdmin">
    DirectoryIndex index.php
    AllowOverride All
    Options FollowSymlinks
    Require all granted
</Directory>{{</fileCode>}}

Lalu _include_ di dalam `/etc/httpd/conf/httpd.conf`.

{{<fileCode "Apache" "httpd.conf">}}# PHPMyAdmin configuration
Include conf/extra/phpmyadmin.conf{{</fileCode>}}

Untuk file konfigurasi dari phpmyadmin ada di `/usr/share/webapps/phpMyAdmin/config.inc.php`.

## Test Jalankan

Coba buat file `index.php` di folder `~/public_html` atau di folder `/srv/http` dan isi dengan code di bawah ini.

{{<fileCode "PHP" "index.php">}}<?php phpinfo(); ?>{{</fileCode>}}

Jika sudah, buka [http://localhost](http://localhost) jika kalian membuatnya di folder `/srv/http`.

Atau buka **localhost/~username** jika kalian membuatnya di `~/public_html`.

Kalian bisa mengubah dari folder `~/public_html` ke folder lain dengan cara mengaturnya di `/etc/httpd/conf/extra/httpd-userdir.conf`.





