---
title: "Install LAMP Stack"
date: 2021-09-03T08:12:06+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Programming]
topik: [programming, php, laravel, mariadb, apache]
type: post
thumbnail: "/install-lamp-dan-phpmyadmin/img/thumbnail.webp"
description: "Install Php Dan Laravel"
summary: Ini adalah cara untuk memulai pemrograman PHP dengan beberapa tambahan.
---

Kali ini adalah tutorial untuk memulai pemrograman PHP tapi kita akan menginstall semuanya secara terpisah.

Kita akan menginstall dan menkonfigurasi PHP, Apache, MariaDB, dan juga Laravel.

## Installasi

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

![mysql1](/install-lamp-dan-phpmyadmin/img/mysql1.webp)

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

```Apache {file="phpmyadmin.conf"}
Alias /phpmyadmin "/usr/share/webapps/phpMyAdmin"
<Directory "/usr/share/webapps/phpMyAdmin">
    DirectoryIndex index.php
    AllowOverride All
    Options FollowSymlinks
    Require all granted
</Directory>
```

Lalu _include_ di dalam `/etc/httpd/conf/httpd.conf`.

{{<fileCode "Apache" "httpd.conf">}}# PHPMyAdmin configuration
Include conf/extra/phpmyadmin.conf{{</fileCode>}}

Untuk file konfigurasi dari phpmyadmin ada di `/usr/share/webapps/phpMyAdmin/config.inc.php`.

## Test Jalankan

Pastikan `httpd.service` dan `mariadb.service` kalian sudah dijalankan.

{{<shell "$">}}systemctl start httpd.service mariadb.service{{</shell>}}

### Test PHP dan Apache

Coba buat file `index.php` di folder `~/public_html` atau di folder `/srv/http` dan isi dengan code di bawah ini.

{{<fileCode "PHP" "index.php">}}&lt;?php phpinfo(); ?>{{</fileCode>}}

Jika sudah, buka [http://localhost](http://localhost) jika kalian membuatnya di folder `/srv/http`.

Atau buka **localhost/~username** jika kalian membuatnya di `~/public_html`.

![phpinfo](/install-lamp-dan-phpmyadmin/img/phpinfo.webp)

Sebenarnya kalian juga bisa menjalankan PHP dengan web server yang ada di PHP tanpa perlu Apache.

Cukup jalankan perintah di bawah ini di dalam folder yang memiliki `index.php` dengan perintah `php -S localhost:<port>`.

Contoh:

{{<shell "$">}}php -S localhost:8080{{</shell>}}

![phpinfo2](/install-lamp-dan-phpmyadmin/img/phpinfo2.webp)


Kalian bisa mengubah folder default `~/public_html` ke folder lain dengan cara mengaturnya di `/etc/httpd/conf/extra/httpd-userdir.conf`.

### Test MariaDB dan PHPMyAdmin

Pergi [localhost/phpmyadmin](http://localhost/phpmyadmin) untuk membuka PHPMyAdmin.

Jika kalian mendapatkan masalah **AllowNoPassword**, pergi ke `/usr/share/webapps/phpMyAdmin/config.inc.php` lalu edit baris di bawah ini menjadi TRUE.

{{<fileCode "PHP" "config.inc.php">}}$cfg['Servers'][$i]['AllowNoPassword'] = TRUE;{{</fileCode>}}

Kalau masih tidak bisa, maka kalian harus mengatur password di MySQL server.

Masuk ke MySQL server, lalu set password dengan perintah di bawah.

```sql
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('PASSWORD BARU KALIAN');
```

Jika sudah, seharusnya kalian bisa masuk ke phpMyAdmin.

![phpmyadmin](/install-lamp-dan-phpmyadmin/img/phpmyadmin.webp)

## Tambahan++

Ini adalah tambahan yang tidak perlu kalian ikuti.

### Composer

Composer adalah package manager untuk PHP, mirip NPM kalau di NodeJS.

Untuk menginstallnya dengan pacman, ikuti perintah di bawah atau kalian bisa unduh dari {{<linkBlank "websitenya" "https://getcomposer.org/download/">}} langsung.

{{<shell "$">}}sudo pacman -S composer{{</shell>}}

Jika kalian ingin menginstall sebuah package secara global, cukup ketikkan perintah `composer global require package/name`.

Contoh:

{{<shell "$">}}composer global require laravel/installer{{</shell>}}

Kalian mungkin harus menambahkan direktori `bin` dari composer ke PATH. 

```bash
PATH="$HOME/.config/composer/vendor/bin:$PATH"
```

Perintah di atas bisa kalian eksekusi langsung di terminal atau ditambahan ke file`.*rc` file kalian.

### Shortcut untuk service

Kalian bisa membuat sebuah fungsi untuk mengaktikan service di file `.bashrc` atau `.zshrc` kalian.

Contoh:

```bash
apachemariadb ()
{
    systemctl $1 httpd.service mariadb.service
}
```

Dan jika kalian ingin menjalankan cukup jalankan `apachemariadb start`.

```bash
apachemariadb start # untuk menjalankan service
apachemariadb stop # untuk menghentikan service
apachemariadb restart # untuk menjalankan kembali service
```




