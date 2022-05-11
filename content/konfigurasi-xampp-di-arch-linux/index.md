---
title: "Konfigurasi XAMPP Di Arch Linux"
date: 2021-07-29T19:40:11+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Programming]
topik: [php, xampp, pemrograman, linux]
type: post
thumbnail: "/konfigurasi-xampp-di-arch-linux/img/thumbnail.webp"
description: "Konfigurasi Xampp Di Arch Linux"
summary: Ini adalah artikel tentang cara install dan konfigurasi XAMPP di Arch Linux
---

![konfigurasi-xampp-di-arch-linux](/konfigurasi-xampp-di-arch-linux/img/thumbnail.webp)

Untuk memulai pemrograman PHP di Linux sebenarnya ada beberapa cara. 

Kalian bisa menginstall semuanya secara terpisah yang akan membuat kalian 
kelihatan lebih keren 😎 atau kalian bisa
menggunakan cara yang lebih gampang yaitu dengan XAMPP.

XAMPP adalah sebuah package yang di dalamnya sudah terdapat Apache, MariaDB, PHP, dan Perl. Jadi kalian tidak perlu untuk menginstall semua hal tadi.

## Installasi

Kalian bisa menginstallnya menggunakan AUR helper.

```Shell {user="$"}
yay -S xampp
```

Untuk cara manual, unduh dulu [xampp.](https://www.apachefriends.org/index.html)

Lalu buat agar dapat dieksekusi dan jalankan.

```Shell {user="$"}
sudo chmod +x xampp-linux-version-installer.run
sudo ./xampp-linux-version-installer.run
```

Cukup tekan next saja.

## Coba jalankan

Jika kalian menginstallnya dari menggunakan AUR helper, seharusnya ada shortcut desktop yang terbuat. Untuk yang manual kalian bisa buat sendiri.

Tapi kalian bisa menjalankannya dengan menggunakan perintah di bawah ini.

```Shell {user="$"}
sudo /opt/lampp/lampp start
```

Lalu cobalah buka [localhost](http://localhost) kalian.

## Uninstall

Jangan lupa untuk menghentikan service XAMPP kalian

```Shell {user="$"}
sudo /opt/lampp/lampp stop
```

Jika kalian install menggunakan AUR helper maka hapus menggunakan AUR helper juga.

```Shell {user="$"}
yay -Ru xampp
```

Dan jika kalian menginstallnya dengan cara manual, maka kalian harus menghapus semua foldernya. Biasanya ada di `/opt/lampp`

```Shell {user="$"}
sudo rm -rf /opt/lampp
```

## Konfigurasi

### Hosting file selain di htdocs

Root document XAMPP berada di `/opt/lampp/htdocs`. Semua file yang diletakkan di sana akan di proses oleh web server.

Untuk hosting file di tempat lain, kalian bisa mengaturnya dengan mengikuti langkah di bawah.

+ Buka `opt/lampp/etc/httpd.conf` dan edit dengan editor favorit kalian.
+ Cari `DocumentRoot`, dan kalian akan melihat yang seperti ini.

```XML {file="httpd.conf"}
DocumentRoot "/opt/lampp/htdocs"
<Directory "/opt/lampp/htdocs">
    ...    
    ...

</Directory>
```

Ubah menjadi seperti gambar di bawah ini.

![root](/konfigurasi-xampp-di-arch-linux/img/root.webp)

Ubah foldernya mengikuti struktur folder kalian sendiri.

Setelah itu, carilah `<IfModule unixd_module>`.

```XML
<IfModule unixd_module>
  ...  
  ...
    User daemon
    Group daemon
</IfModule>
```

Lalu ubah `daemon` menjadi nama username dan group kalian.

```XML
<IfModule unixd_module>
  ...  
  ...
    User yourUsername
    Group yourGroup
</IfModule>
```

Jika kalian tidak tahu apa username name kalian, cek menggunakan perintah `whoami` dan untuk mengetahui group, cek menggunakan perintah `groups <yourUsername>`.


## Kesimpulan

Oke, mungkin itu aja yang bisa saya sampaikan. Untuk kedepannya mungkin akan saya tambahkan lagi.

Baik, itu aja, **_Smell ya later_**.
