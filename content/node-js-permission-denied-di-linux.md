---
title: "Npm EACCES Permission Denied Di Linux"
date: 2021-03-10T21:39:24+08:00
comments: true
draft: false
author: "Yoga"
toc: true
sidebar: false
description: "Ini adalah cara saya untuk mengatasi NPM EACCSES Permission Denied"
categories: ['Programming', 'Short']
type: post
thumbnail: /img/thumbnail/node-js-permission-denied-di-linux.jpg
---

Kali ini kita akan membahas bagaimana caranyan mengatasi npm EACCSES permission denied di linux.

<!--more-->

![node-js-permission-denied-di-linux](/img/thumbnail/node-js-permission-denied-di-linux.jpg)

Jika kalian mendapat {{<dir "EACCES">}} saat ingin menginstall sebuah package secara global menggunakan npm kalian bisa mengatasinya dengan beberapa cara.

## Reinstall Node js

Kalian bisa menginstall ulang node js dengan cara mengunduh langsung dari websitenya atau menggunakan package manager kalian.

{{<scCode "Shell">}}sudo pacman -S nodejs{{</scCode>}}

Sebenarnya cara ini tidak pernah saya coba karena saya memakai cara kedua.

## Mengubah Manual Npm Default Directory

Cara ini lebih aman daripada harus menggunakan sudo saat menginstall packagenya. Karena saya sebelumnya menggunakan sudo :smile:

+ Buatlah folder bernama {{<dir ".node-global">}} di home kalian.

    {{<scCode "Shell">}}mkdir ~/.node-global{{</scCode>}}

+ Mengatur direktori bawaan npm

    {{<scCode "Shell">}}npm config set prefix '~/.npm-global'{{</scCode>}}

+ Menambahkan direktori ke PATH

    Tambahkan teks dibawah ke {{<dir ".bashrc">}} atau {{<dir ".zshrc">}} kalian.

    {{<scCode "Shell">}}export PATH=~/.npm-global/bin:$PATH{{</scCode>}}

    Lalu restart terminal kalian.

+ Cek npm default directori

    {{<scCode "Shell">}}npm config get prefix{{</scCode>}}

+ Cobalah untuk menginstall package

    Saya akan mencoba untuk menginstall firebase-tools

    {{<scCode "Shell">}}npm i -g firebase-tools{{</scCode>}}

    Jika kalian bisa menjalankan `firebase` secara global di terminal kalian, itu berarti konfigurasinya berhasil.

## Akhir kata...

Mungkin itu aja yang bisa saya sampaikan. Postingan kali ini memang hanya menjadi postingan yang pendek.

Jika ada yang kalian bingungkan, silahkan komentar di bawah.

