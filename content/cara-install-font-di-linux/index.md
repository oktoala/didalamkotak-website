---
title: "Cara Install Font Di Linux"
date: 2021-07-08T09:47:37+08:00
comments: true
draft: true
author: "Yoga"
toc: true
kategori: [Tips]
topik: [tips, linux, font]
type: post
thumbnail: "/cara-install-font-di-linux/img/thumbnail.webp"
description: "Cara Install Font Di Linux"
---

Kali ini kita akan belajar cara menginstall font di Linux.

<!--more-->

![cara-install-font-di-linux](/cara-install-font-di-linux/img/thumbnail.webp)

## Perbedaan Jenis Font

Font memiliki beberapa jenis, seperti **Serif**, **Sans Serif**, dan **Monospace**.

Font **Serif** dipakai untuk keperluan cetak, **Sans Serif** untuk online (seperti website), dan **Monospace** untuk typewriter dan koding.

## Install Secara Manual

Jika hanya ingin untuk satu user, install font di {{<dir "~/.local/share/fonts">}}

Cukup pindahkan {{<dir ".ttf">}} ke folder {{<dir "~/.local/share/fonts">}}

Dan jika kalian ingin menginstall untuk semua user, install font di {{<dir "/usr/share/fonts">}}

Untuk {{<dir ".ttf">}} masukkan ke folder {{<dir "TTF">}} dan {{<dir ".otf">}} masukkan ke folder {{<dir "OTF">}}

## Install Dengan Package Manager

Kebanyakan font sudah di tersedia di repository masing-masing distro.

{{<scCode "Shell">}}yay -S ttf-ms-fonts{{</scCode>}}

## Non-Latin Font

### Arabic 

Ada beberapa font arabic yang bisa kalian install.

+ [ttf-amiri](https://www.amirifont.org/)
+ [ttf-arabeyes-fonts](https://arabeyes.org/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9)
+ [ttf-qurancomplex-fonts](http://fonts.qurancomplex.gov.sa/)

### Chinese