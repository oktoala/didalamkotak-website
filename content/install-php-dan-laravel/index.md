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

## Instalasi LAMP

Install PHP, Apache, dan MariaDB menggunakan Pacman.

{{<shell "$">}}sudo pacman -S php apache mariadb{{</shell>}}

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

    **MySQL/MariaDB**

    ```bash
    extension=pdo_mysql
    extension=mysqli
    ```

## Konfigurasi MariaDB

Setelah kalian menginstall MariaDB, jalankan dulu perintah dibawah.

{{<shell "#">}}mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql{{</shell>}}







