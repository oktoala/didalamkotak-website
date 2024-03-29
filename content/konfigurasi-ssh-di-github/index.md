---
title: "Konfigurasi SSH Di Github"
date: 2021-07-06T10:13:19+08:00
comments: true
draft: false
author: "Yoga"
sidebar: false
toc: false
kategori: [Programming]
topik: [git, programming, github, ssh, short]
type: post
thumbnail: "/konfigurasi-ssh-di-github/img/thumbnail.webp"
description: "Konfigurasi SSH supaya tidak perlu masukkan password setiap push"
summary: "Konfigurasi SSH supaya tidak perlu masukkan password setiap push"
---

![konfigurasi-ssh-di-github](/konfigurasi-ssh-di-github/img/thumbnail.webp)

## Generate SSH Key

Jalankan perintah ini untuk membuat ssh key.

```Bash {file"Terminal"}
ssh-keygen -t rsa -b 4096 -C "email@email.com"
```

Untuk bagian email, bisa kalian isi email github kalian saja.

Jika diminta mengisi nama file dan passphrase, bisa kalian kosongkan (tekan enter-enter aja).

## Menambahkan SSH Key ke ssh-agent

Pertama, jalankan ssh-agent di latar belakang.

```Bash {file"Terminal"}
eval "$(ssh-agent -s)"
```

Lalu, tambahkan SSH _private key_ ke ssh-agent. 

```Bash {file"Terminal"}
ssh-add ~/.ssh/id_rsa
```

Perintah diatas akan sedikit berbeda jika kalian mengisi nama file saat membuat ssh-key.

Kalian bisa cek di folder `~/.ssh` untuk mengecek nama file kalian.

## Menambahkan SSH ke Github

Copy isi file `~/.ssh/id_rsa.pub` atau jika kalian menginstall `dir xclip`, cukup jalankan perintah dibawah ini.

```Bash {file"Terminal"}
cat ~/.ssh/id_rsa.pub | xclip -sel clip
```

Setelah itu, buka github kalian di browser, lalu pergi ke **Settings {{<scIcon class="fa fa-arrow-right">}} SSH and GPG keys 
{{<scIcon class="fa fa-arrow-right">}} [New SSH key](https://github.com/settings/ssh/new)**

Lalu salin SSH _public key_ yang sudah kalian copy tadi ke bagian **Key**.

## Testing

Jalankan perintah dibawah ini mengetahui apakah ssh sudah terkoneksi dengan github atau tidak.

```Bash {file"Terminal"}
ssh -T git@github.com
```

## Kesimpulan

Jadi itu adalah cara menggunakan ssh di github. Jadi kalian tidak perlu memasukkan password setiap kalian ingin _push_ ke github.

Oke itu aja, _**Smell ya later**_.

