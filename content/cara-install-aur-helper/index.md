---
title: "Cara Install AUR Helper"
date: 2021-07-27T10:45:35+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Linux]
topik: [aur, linux, arch]
type: post
thumbnail: "/cara-install-aur-helper/img/thumbnail.webp"
description: "Cara Install Aur Helper"
summary: Belajar cara menginstall AUR helper di Arch Linux
---

![cara-install-aur-helper](/cara-install-aur-helper/img/thumbnail.webp)

Saya selalu mencamtumkan cara menginstall sebuah aplikasi dengan menggunakan AUR helper tapi
saya tidak pernah mencamtumkan cara menginstall AUR helper itu sendiri.

## Installasi

AUR helper yang akan kita pakai adalah [yay](https://github.com/Jguer/yay). 

Saya memilih ini karena banyak yang pakai. :smiley:

Pertama-tama, kita harus menginstall **git** dan **base-devel**.

```Shell {user="$"}
sudo pacman -S --needed git base-devel
```

Jika sudah tinggal jalankan perintah di bawah ini.

{{<scCode "Shell">}}git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
{{</scCode>}}

## Command

Beberapa perintah untuk **yay** sama seperti **pacman**, yang jadi pembeda hanyalah jangan menggunakan **sudo** saat menggunakan **yay**.

Jika kalian ingin mengupgrade package yang kalian install menggunakan AUR helper jalankan perintah di bawah ini.

```Shell {user="$"}
yay -Syua
```

## Sumber

[https://wiki.archlinux.org/title/AUR_helpers](https://wiki.archlinux.org/title/AUR_helpers)

