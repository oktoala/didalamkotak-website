---
title: "Mari Install Hugo"
date: 2021-07-01T14:38:29+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Belajar]
topik: [hugo, programming, web]
type: post
thumbnail: "/mari-install-hugo/img/mari-install-hugo.webp"
description: "Belajar Hugo, karena website ini dibuat pakai Hugo"
summary: "Belajar Hugo, karena website ini dibuat pakai Hugo"
---

![mari-install-hugo](/mari-install-hugo/img/mari-install-hugo.webp)

## Pendahuluan 

Hugo mengklaim bahwa mereka adalah framework tercepat untuk membangun sebuah website.

Klaim itu mungkin benar karena Hugo memang sangat cepat dan fleksibel.

Hugo juga dilengkapi dengan banyak tema yang bisa kalian install dengan mudah.

## Instalasi di Windows

Terdapat tiga cara untuk menginstall Hugo di Windows dan semuanya bisa kalian pilih.

### Cara Tradisional

Pertama, buat folder bernama ``Hugo`` dan buat lagi folder yang bernama ``bin`` di dalam folder Hugo tadi.

Kalian bebas mau membuat foldernya dimanapun, saya sendiri manaruhnya di drive ``C:\ ``

Buka browser kalian dan pergi ke alamat [https://github.com/gohugoio/hugo/releases](https://github.com/gohugoio/hugo/releases)
dan cari pada bagian Windows dan unduh sesuai arsitektur kalian.

![github-hugo-windows](/mari-install-hugo/img/github-hugo-windows.webp)

Extract filenya dan masukkan kedalam ``C:\Hugo\bin ``

![hugo-bin](/mari-install-hugo/img/hugo-bin.webp)

Lalu tambahkan ``C:\Hugo\bin`` ke dalam PATH.

Kalian bisa cek melalui CMD apakah hugo sudah terinstall atau belum.

![cmd-hugo](/mari-install-hugo/img/cmd-hugo.webp)

<!-- Masih Lanjut -->

### Dengan Package Manager

Kalian juga bisa menginstall Hugo dengan [chocolatey](/chocolatey-package-manager-untuk-windows), sebuah package manager untuk Windows.

Cukup ketikan perintah ini di Powershell (Run as Administrator ).

```Powershell 
choco install hugo -confirm
```

Jika kalian ingin mendapatkan fitur Sass/SCSS, jalankan perintah di bawah ini.

```Powershell 
choco install hugo-extended -confirm
```


## Instalasi di Linux

Untuk Debian/Ubuntu tidak disarankan untuk menginstallnya melalui apt, karena versi Hugo di apt adalah versi yang sedikit lebih lama dari rilisan terbaru Hugo. 

Lebih baik untuk mengunduh binary nya langsung dari [github](https://github.com/gohugoio/hugo/releases) Hugo.

Kalian bisa menggunakan snap untuk menginstallnya.

```Shell {user="$"}
snap install hugo --channel=extended
```

Untuk Arch Linux, bisa langsung melalui pacman.

```Shell {user="$"}
sudo pacman -S hugo
```

## Konfigurasi 

Walaupun hugo sudah terinstall, rasanya tidak seru jika websitenya belum terlihat hasilnya.

Kita akan membuat sebuah website baru bernama ``coba-coba``.

### Membuat Website

```Shell {file"Terminal"}
hugo new site coba-coba
```

![coba-coba](/mari-install-hugo/img/new-site.webp)

### Menambahkan Tema

Saya menyarankan untuk menggunakan git supaya lebih cepat. Cukup jalankan perintah dibawah.

```Shell {user="$"}
cd coba-coba
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
```

Jika kalian tidak menggunakan git:

+ Pertama, unduh temanya dari [sini](https://github.com/theNewDynamic/gohugo-theme-ananke/archive/master.zip)
+ Extract File .zip nya
+ Ubah nama folder menjadi ``ananke`` lalu pindahkan ke dalam folder themes
+ Edit ``config.toml">}} dan tambahkan ``theme = \"ananke\"``
	![toml](/mari-install-hugo/img/toml.webp)

### Membuat Konten Pertama

Kalian bisa menambahkan konten kalian di ``content/`` tapi lebih baik menggunakan terminal karena lebih cepat⚡

```Bash {file"Terminal"}
hugo new post/konten-pertama.md
```

Buka ``konten-pertama.md`` dan ubah pada bagian draft menjadi ``draft: false``
Kalian juga bisa menambahkan tulisan kalian di bawah garis ``---``

![konten-pertama](/mari-install-hugo/img/konten-pertama.webp)

### Menjalankan Hugo Server 

Saatnya menjalankan server Hugo.

```Bash {file"Terminal"}
hugo server -D
```

![hugo-server](/mari-install-hugo/img/hugo-server.webp)

Website kalian sudah bisa diakses di [http://localhost:1313/](http://localhost:1313/)

![localhost](/mari-install-hugo/img/localhost.webp)

Selamat, kalian sudah membuat website Hugo kalian sendiri. 

## Apa Lagi?

Sebenarnya masih banyak yang bisa kita bahas, tapi tidak mungkin akan kita bahas lagi.

Mungkin untuk kedepannya kita akan membahas tentang struktur folder, template, shortcode, dll.

Oke, itu aja, **_Smell ya later._**