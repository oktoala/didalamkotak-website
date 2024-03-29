---
title: "Konfigurasi Git"
date: 2021-04-16T13:58:33+08:00
comments: true
draft: false
author: "Yoga"
sidebar: false
kategori: [Programming]
tags: [git, programming, github]
type: post
thumbnail: /img/thumbnail/konfigurasi-git.webp
description: "Konfigurasi Git"
summary: "Konfigurasi Git"
---

Kita akan membahas cara konfigurasi Git untuk kali ini.

<!-- Summary -->

![konfigurasi-git](/img/thumbnail/konfigurasi-git.webp)

Jika kalian memakai linux, maka git akan sering kalian gunakan.

Jadi untuk memudahkan hidup, akan lebih baik jika tahu cara mengkonfigurasi git, walaupun pada akhirnya cuman bisa git clone. :smile:

## Installasi

Seharusnya git sudah terinstall secara default, tapi untuk jaga-jaga mari kita coba install aja.

**Untuk Ubuntu**

```Shell {user="$"}
sudo apt install git
```

**Untuk Arch**

```Shell {user="$"}
sudo pacman -S git
```

## Konfigurasi

Jika sudah terinstall, jalankan perintah dibawah ini.

```Shell {user="$"}
git config --global user.name "namaKalian"
git config --global user.email "email.kalian@gmail.com"
```

Tuliskan `git config --list` untuk melihat konfigurasi kalian.

[gambar](/img/ss-git-config.webp)

## Akhir kata...

Walaupun singkat, tapi git akan sering kalian pakai.

Entah untuk version control atau cuman untuk clone aja.

Oke mungkin itu aja, _smell ya later_