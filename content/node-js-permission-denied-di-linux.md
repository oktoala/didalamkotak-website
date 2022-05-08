---
title: "Npm EACCES Permission Denied Di Linux"
date: 2021-03-10T21:39:24+08:00
comments: true
draft: false
author: "Yoga"
toc: true
sidebar: false
kategori: ['Programming']
topik: [nodejs, npm, programming]
type: post
thumbnail: /img/thumbnail/node-js-permission-denied-di-linux.jpg
description: "Cara mengatasi NPM EACCES Permission Denied"
summary: "Cara mengatasi NPM EACCES Permission Denied"
---

![node-js-permission-denied-di-linux](/img/thumbnail/node-js-permission-denied-di-linux.jpg)

Jika kalian mendapat `EACCES` saat ingin menginstall sebuah package secara global menggunakan npm kalian bisa mengatasinya dengan beberapa cara.

## Reinstall Node js

Kalian bisa menginstall ulang node js dengan cara mengunduh langsung dari websitenya atau menggunakan package manager kalian.

```Shell {user="$"}
sudo pacman -S nodejs
```

Sebenarnya cara ini tidak pernah saya coba karena saya memakai cara kedua.

## Mengubah Manual Npm Default Directory

Cara ini lebih aman daripada harus menggunakan sudo saat menginstall packagenya. Karena saya sebelumnya menggunakan sudo :smile:

+ Buatlah folder bernama `.node-global` di home kalian.

    ```Shell {user="$"}
    mkdir ~/.node-global
    ```

+ Mengatur direktori bawaan npm

    ```Shell {user="$"}
    npm config set prefix '~/.npm-global'
    ```

+ Menambahkan direktori ke PATH

    Tambahkan teks dibawah ke `.bashrc` atau `.zshrc` kalian.

    ```Shell {user="$"}
    export PATH=~/.npm-global/bin:$PATH
    ```

    Lalu restart terminal kalian.

+ Cek npm default directori

    ```Shell {user="$"}
    npm config get prefix
    ```

+ Cobalah untuk menginstall package

    Saya akan mencoba untuk menginstall firebase-tools

    ```Shell {user="$"}
    npm i -g firebase-tools
    ```

    Jika kalian bisa menjalankan `firebase` secara global di terminal kalian, itu berarti konfigurasinya berhasil.

## Akhir kata...

Mungkin itu aja yang bisa saya sampaikan. Postingan kali ini memang hanya menjadi postingan yang pendek.

Jika ada yang kalian bingungkan, silahkan komentar di bawah.

