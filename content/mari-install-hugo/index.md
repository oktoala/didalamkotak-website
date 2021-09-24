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
description: "Mari Install Hugo"
---

Kali ini kita akan belajar cara membuat sebuah website menggunakan Hugo.

<!--more-->

![mari-install-hugo](/mari-install-hugo/img/mari-install-hugo.webp)

## Pendahuluan 

Hugo mengklaim bahwa mereka adalah framework tercepat untuk membangun sebuah website.

Klaim itu mungkin benar karena Hugo memang sangat cepat dan fleksibel.

Hugo juga dilengkapi dengan banyak tema yang bisa kalian install dengan mudah.

## Instalasi di Windows

Terdapat tiga cara untuk menginstall Hugo di Windows dan semuanya bisa kalian pilih.

### Cara Tradisional

Pertama, buat folder bernama {{<dir "Hugo">}} dan buat lagi folder yang bernama {{<dir "bin">}} di dalam folder Hugo tadi.

Kalian bebas mau membuat foldernya dimanapun, saya sendiri manaruhnya di drive {{<dir "C:\ ">}}

Buka browser kalian dan pergi ke alamat [https://github.com/gohugoio/hugo/releases](https://github.com/gohugoio/hugo/releases)
dan cari pada bagian Windows dan unduh sesuai arsitektur kalian.

![github-hugo-windows](/mari-install-hugo/img/github-hugo-windows.webp)

Extract filenya dan masukkan kedalam {{<dir "C:\Hugo\bin ">}}

![hugo-bin](/mari-install-hugo/img/hugo-bin.webp)

Lalu tambahkan {{<dir "C:\Hugo\bin">}} ke dalam PATH.

Kalian bisa cek melalui CMD apakah hugo sudah terinstall atau belum.

![cmd-hugo](/mari-install-hugo/img/cmd-hugo.webp)

<!-- Masih Lanjut -->

### Dengan Package Manager

Kalian juga bisa menginstall Hugo dengan [chocolatey](/chocolatey-package-manager-untuk-windows), sebuah package manager untuk Windows.

Cukup ketikan perintah ini di Powershell (Run as Administrator ).

{{<scCode "Powershell">}}choco install hugo -confirm{{</scCode>}}

Jika kalian ingin mendapatkan fitur Sass/SCSS, jalankan perintah di bawah ini.

{{<scCode "Powershell">}}choco install hugo-extended -confirm{{</scCode>}}


## Instalasi di Linux

Untuk Debian/Ubuntu tidak disarankan untuk menginstallnya melalui apt, karena versi Hugo di apt adalah versi yang sedikit lebih lama dari rilisan terbaru Hugo. 

Lebih baik untuk mengunduh binary nya langsung dari [github](https://github.com/gohugoio/hugo/releases) Hugo.

Kalian bisa menggunakan snap untuk menginstallnya.

{{<scCode "Shell">}}snap install hugo --channel=extended{{</scCode>}}

Untuk Arch Linux, bisa langsung melalui pacman.

{{<scCode "Shell">}}sudo pacman -S hugo{{</scCode>}}

## Konfigurasi 

Walaupun hugo sudah terinstall, rasanya tidak seru jika websitenya belum terlihat hasilnya.

Kita akan membuat sebuah website baru bernama {{<dir "coba-coba">}}.

### Membuat Website

{{<fileCode "Shell" "Terminal">}}hugo new site coba-coba{{</fileCode>}}

![coba-coba](/mari-install-hugo/img/new-site.webp)

### Menambahkan Tema

Saya menyarankan untuk menggunakan git supaya lebih cepat. Cukup jalankan perintah dibawah.

{{<fileCode "Bash" "Terminal">}}cd coba-coba
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke{{</fileCode>}}

Jika kalian tidak menggunakan git:

+ Pertama, unduh temanya dari [sini](https://github.com/theNewDynamic/gohugo-theme-ananke/archive/master.zip)
+ Extract File .zip nya
+ Ubah nama folder menjadi {{<dir "ananke">}} lalu pindahkan ke dalam folder themes
+ Edit {{<dir "config.toml">}} dan tambahkan {{<dir "theme = \"ananke\"">}}
	![toml](/mari-install-hugo/img/toml.webp)

### Membuat Konten Pertama

Kalian bisa menambahkan konten kalian di {{<dir "content/">}} tapi lebih baik menggunakan terminal karena lebih cepat⚡

{{<fileCode "Bash" "Terminal">}}hugo new post/konten-pertama.md{{</fileCode>}}

Buka {{<dir "konten-pertama.md">}} dan ubah pada bagian draft menjadi {{<dir "draft: false">}}
Kalian juga bisa menambahkan tulisan kalian di bawah garis {{<dir "---">}}

![konten-pertama](/mari-install-hugo/img/konten-pertama.webp)

### Menjalankan Hugo Server 

Saatnya menjalankan server Hugo.

{{<fileCode "Bash" "Terminal">}}hugo server -D{{</fileCode>}}

![hugo-server](/mari-install-hugo/img/hugo-server.webp)

Website kalian sudah bisa diakses di [http://localhost:1313/](http://localhost:1313/)

![localhost](/mari-install-hugo/img/localhost.webp)

Selamat, kalian sudah membuat website Hugo kalian sendiri. 

## Apa Lagi?

Sebenarnya masih banyak yang bisa kita bahas, tapi tidak mungkin akan kita bahas lagi.

Mungkin untuk kedepannya kita akan membahas tentang struktur folder, template, shortcode, dll.

Oke, itu aja, **_Smell ya later._**