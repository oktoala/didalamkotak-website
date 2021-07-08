---
title: "Cara Install Font Di Arch Linux"
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

Kali ini kita akan belajar cara menginstall font di Arch Linux.

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

Kebanyakan font sudah tersedia baik di Arch Repository maupun di AUR.

{{<scCode "Shell">}}yay -S ttf-ms-fonts{{</scCode>}}

## Non-Latin Font

### Arabic 

Ada beberapa font arabic yang bisa kalian install.

+ [ttf-amiri](https://www.amirifont.org/) - Klasik Arabic typeface.
+ [ttf-arabeyes-fonts](https://arabeyes.org/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9) - Koleksi dari font arabic gratis.
+ [ttf-qurancomplex-fonts](http://fonts.qurancomplex.gov.sa/) - Font dari King Fahd Glorius Qur'an Printing Complex di Madinah.

### Chinese, Korean, dan Japanese

Untuk font Chinese, Korean, dan Japanese, kalian perlu mengaktifkan localizations di {{<dir "/etc/locale.gen">}}

Cukup uncomment teks (hapus tanda # sebelum teks) dibawah ini atau copy saja ke {{<dir "/etc/locale/gen">}}

{{<fileCode "Bash" "locale.gen">}}# Untuk Chinese
zh_CN.UTF-8 UTF-8
# Untuk Korean
ko_KR.UTF-8
# Untuk Japanese
ja_JP.UTF-8
{{</fileCode>}}

![locale](/cara-install-font-di-linux/img/locale.webp)

Setelah itu jalankan perintah di bawah ini.

{{<scCode "Shell">}}sudo locale-gen{{</scCode>}}

Berikut adalah beberapa Chinese font 🇨🇳 yang bisa kalian pakai:

+ [adobe-source-han-sans-cn-fonts](https://github.com/adobe-fonts/source-han-sans)- Simplified Chinese OpenType/CFF Sans fonts
+ [adobe-source-han-sans-tw-fonts](https://github.com/adobe-fonts/source-han-sans)- Traditional Chinese OpenType/CFF Sans fonts
+ [adobe-source-han-serif-cn-fonts](https://github.com/adobe-fonts/source-han-serif) - Simplified Chinese OpenType/CFF Serif fonts
+ [adobe-source-han-serif-tw-fonts](https://github.com/adobe-fonts/source-han-serif) - Traditional Chinese OpenType/CFF Serif fonts

Berikut adalah beberapa 🇰🇵 Korean Font 🇰🇷  yang bisa kalian pakai:

+ [adobe-source-han-sans-kr-fonts](https://github.com/adobe-fonts/source-han-sans) - Korean OpenType/CFF fonts
+ [ttf-baekmuk](https://kldp.net/baekmuk/) - Collection of Korean TrueType fonts
+ [spoqa-han-sansAUR](http://www.spoqa-han-sans.com/) - Source Han Sans customized by Spoq

Berikut adalah beberapa Japanese Font 🇯🇵 yang bisa kalian pakai:

+ [adobe-source-han-sans-jp-fonts](https://github.com/adobe-fonts/source-han-sans) - Japanese OpenType/CFF fonts, style Gothic (sans-serif).
+ [adobe-source-han-serif-jp-fonts](https://github.com/adobe-fonts/source-han-serif) - Japanese OpenType/CFF fonts, style Mincho (serif).
+ [otf-ipafont](https://ipafont.ipa.go.jp/) - Formal style Japanese Gothic (sans-serif) and Mincho (serif) fonts set; one of the highest quality open source font.

## Akhir Kata...

Oke itu aja yang bisa saya sampaikan. Baca juga artikel yang lain. _**Smell Ya Later.**_