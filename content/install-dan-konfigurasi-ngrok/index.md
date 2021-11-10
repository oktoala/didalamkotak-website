---
title: "Install Dan Konfigurasi Ngrok"
date: 2021-11-08T10:01:10+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Tips]
topik: [ngrok, http]
type: post
thumbnail: "/install-dan-konfigurasi-ngrok/img/thumbnail.webp"
description: "Install Dan Konfigurasi Ngrok"
summary: Share website kalian dari localhost
---

![install-dan-konfigurasi-ngrok](/install-dan-konfigurasi-ngrok/img/thumbnail.webp)

Kalian pasti pernah membangun sebuah website dan ingin membuat orang lain untuk mencobanya.

Tapi untuk melakukan kalian mungkin harus _hosting_ website kalian di internet meskipun
kalian inginnya hanya untuk dicoba.

Jika kalian menghadapi solusi seperti itu, makan **Ngrok** adalah solusinya.

**Ngrok** adalah sebuah layanan HTTP tunnel.

HTTP tunnel adalah sebuah cara untuk meneruskan request HTTP ke target yang dituju.

Jadi simplenya

## Installasi

Kunjungi dulu website [Ngrok](https://ngrok.com/), lalu login atau buat akun.

Jika sudah, maka kalian akan sampai di [dashboard](https://dashboard.ngrok.com/get-started/setup).

![get-started](/install-dan-konfigurasi-ngrok/img/get-started.webp)

Unduh Ngrok sesuai sistem operasi kalian.

Jika sudah, extract file zipnya dan jalankan Ngrok-nya.

![run](/install-dan-konfigurasi-ngrok/img/run.webp)

## Authentication

Sebelum kita bisa menggunakan Ngrok, kita harus mengkonfigurasi authtoken di komputer kita.

Masuk ke halaman ["Your Authtoken"](https://dashboard.ngrok.com/get-started/your-authtoken),
maka kalian akan bisa melihat authtoken kalian.

![authtoken](/install-dan-konfigurasi-ngrok/img/authtoken.webp)

Copy token tersebut dan masuk ke terminal.

Masuk ke folder dimana kalian mengekstrak file Ngrok kalian.

Lalu jalankan `./ngrok authtoken <AUTHTOKEN YANG DI COPY>`.

![authtoken-terminal](/install-dan-konfigurasi-ngrok/img/authtoken-terminal.webp)

Jika sudah, maka akan tampil lokasi dimana file konfigurasi Ngrok kalian. 

## Konfigurasi

Buka file `ngrok.yml` kalian dan di dalam file tersebut kalian bisa melakukan beberapa konfigurasi.

Sebagai contoh saya akan mengatur beberapa tunnel beserta protocol dan portnya.

![config](/install-dan-konfigurasi-ngrok/img/config.webp)

Untuk bagian **react, default**, dan **sub** bisa kalian ubah sesuka kalian dan portnya juga bisa kalian ubah sesuka kalian.

## Testing

Sebagai contoh saya punya sebuah react-app yang berjalan di port 3000.

![react-app](/install-dan-konfigurasi-ngrok/img/react-app.webp)

Saya bisa menjalankan Ngrok dengan dua cara:

- `./ngrok http port` atau
- `./ngrok start namaTunnel`

Saya akan coba menggunakan cara kedua, karena saya sudah mengatur port 3000 di file konfigurasi.

{{<fileCode "Shell" "~/.local/bin">}}./ngrok start react{{</fileCode>}}

![test](/install-dan-konfigurasi-ngrok/img/test.webp)

Dan jika kalian kunjungi salah satu link di atas.

![test-ngrok](/install-dan-konfigurasi-ngrok/img/test-ngrok.webp)

Berhasil!! 🎉

## Akhir Kata...

Dengan Ngrok kalian bisa membagikan website kalian ke teman ataupun dosen kalian tanpa perlu hosting di internet.

Oke, mungkin itu aja, **_Smell ya later_**.


