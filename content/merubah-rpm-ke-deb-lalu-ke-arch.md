---
title: "Merubah Rpm Ke Deb Lalu Ke Arch"
date: 2020-10-17T02:01:17+08:00
draft: false
author: "Yoga"
toc: true
thumbnail: /img/thumbnail/merubah-rpm-ke-deb-lalu-ke-arch.png
categories: ["Linux"]
---

Kita akan membahas bagaiman cara menjalankan rpm di Debian dan Arch.
<!--more-->

![merubah-rpm-ke-deb-ke-arch](/img/thumbnail/merubah-rpm-ke-deb-lalu-ke-arch.png)

Kelas Saya ada mata kuliah basis data dan dosen meminta kelas saya untuk menginstall {{< linkBlank "Oracle Data Modeler" `https://www.oracle.com/tools/downloads/sql-data-modeler-downloads.html` >}}.

Oke, karena Saya pakai Arch Linux harusnya packagenya ada di Package Manager ataupun di AUR.

![coba-oracle-di-aur](/img/SS-odm-aur.png)

Dan ternyata gak bisa.

Oke, disitu tertulis kalau kita harus download manual dari situsnya langsung. Jadi saya pun langsung ke websitenya.

Saat saya lihat, ternyata aplikasinya bisa berjalan di Windows, Mac OSX, dan Linux!!.

Tetapi...

![odm-web](/img/SS-odm-website.png)

Format untuk Linuxnya **rpm.**

## Pendahuluan

Untuk yang belum tahu, jadi Linux itu punya banyak _Distributions_/_Distro_ dan setiap _distro_ punya _package manager_ sendiri dan format binary sendiri. Debian based punya  **.deb**, Red Hat punya **.rpm**, dan Arch punya **pkg.tar.\***.

Karena saya pakai Arch Linux dan format data modelernya .rpm, otomatis gak bisa langsung terinstall ke OS saya.

Sebenarnya kalau mau gampang saya bisa langsung pakai yang untuk Windows dengan menggunakan [Wine](/wine-bukan-emulator).

Tapi saya malas kalau programnya gak stabil, apalagi data modelernya butuh JDK, jadinya malah ribet.

Hingga pada akhirnya saya menemukan caranya!

## Installasi

Jadi pertama kalian harus menginstall beberapa aplikasi.
+ **alien**
+ **debtap**

Kalau kalian memakai Debian/Ubuntu based cukup install **alien** saja. Install dpkg untuk memasang packagenya nanti.
{{< scCode `#d70751` `Debian/Ubuntu` cp1 >}}
sudo apt alien dpkg-dev
{{< /scCode >}}

Dan jika kalian memakai Arch based, kalian harus install dua-duanya. Keduanya ada di AUR.

{{< scCode `#1793d1` `Arch Based` cp2 >}}
yay -S alien_package_converter debtap
{{< /scCode >}}

Kita akan pakai Oracle Data Modeler sebagai contohnya. Kalian bisa download {{< linkBlank "disini" `https://www.oracle.com/tools/downloads/sql-data-modeler-downloads.html` >}}

## Konfigurasi

Pertama kita akan convert dari **.rpm** ke **.deb** menggunakan alien.

Baik di Ubuntu dan Arch caranya sama.

Saya menyimpannya di folder Downloads. Kalian bisa simpan dimanapun kalian suka.

![SS-odm-place.png](/img/SS-odm-place.png)

{{< scCode `#13fb17` `Terminal` cp3 >}}
sudo alien datamodeler-20.2.0.167.1538-noarch.rpm
{{< /scCode >}}

Tunggu sampai proses converting selesai.

Jika sudah, kalian bisa mengecek file **.deb** kalian.

![SS-odm-place-deb](/img/SS-odm-place-deb.png)

Jika kalian di Debian/Ubuntu, kalian bisa install langsung menggunakan dpkg.

{{< scCode `#d70751` `Debian/Ubuntu` cp4 >}}
sudo dpkg -i datamodeler_20.2.0.167.1538-2_all.deb
{{< /scCode >}}

Tapi jika kalian di Arch, maka kalian harus convert lagi.

{{< scCode `#1793d1` `Arch Based` cp5 >}}
debtap datamodeler_20.2.0.167.1538-2_all.deb
{{< /scCode >}}

Kalian bisa isi nama package dan lisensinya sesuka kalian, sisanya kalian bisa tekan _enter_ aja.

Kalian bisa cek apakah sudah terconvert atau tidak.

![SS-odm-place-arch](/img/SS-odm-place-arch.png)

Sekarang kalian sudah bisa menginstall package tersebut dengan _pacman_.

{{< scCode `#1793d1` `Arch Based` cp6 >}}
sudo pacman -U datamodeler-20.2.0.167.1538-1-any.pkg.tar.zst
{{< /scCode >}}

Sekarang kalian bisa cek di **start menu**.

![SS-odm-whisker](/img/SS-odm-whisker.png)

Mari kita buka, apakah berfungsi dengan baik atau tidak.

![SS-odm-review](/img/SS-odm-review.png)

Ternyata berhasil!!

Selamat! Kalian telah menginstall **.rpm** di dua distro yang berbeda :+1:

## Kesimpulan

Walaupun aplikasinya tersedia untuk Linux, belum tentu bisa langsung terinstall di OS kita.

Untungnya sudah aplikasi yang bisa kita pakai untuk mengconvertnya.

Jika tidak, sudah pasti kita akan mencari alternatifnya atau menjalankannya dengan virtualisasi.
