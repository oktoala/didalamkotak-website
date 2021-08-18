---
title: "Install Aseprite Secara Gratis"
date: 2021-08-20T22:12:24+08:00
comments: true
draft: true
author: "Yoga"
toc: true
kategori: [Belajar]
topik: [belajar, aseprite, pixel]
type: post
thumbnail: "/install-aseprite-secara-gratis/img/thumbnail.webp"
description: "Install Aseprite Secara Gratis"
summary: Tutorial menginstall Aseprite secara gratis dan pastinya dengan cara yang legal
---

![install-aseprite-secara-gratis](/install-aseprite-secara-gratis/img/thumbnail.webp)

Jika kalian ingin menggambar tapi kalian tidak punya pen tablet, maka pixel art bisa menjadi solusi alternatifnya.

Dan jika kalian mencari software untuk membuat pixel art, maka kalian akan menemui beberapa, contohnya adalah Photoshop dan Aseprite.

Tapi seperti yang kita tahu Photoshop itu berbayar (sewa lebih tepatnya) dan jika kita lihat pada [Aseprite...](https://www.aseprite.org/)

![aseprite-page](/install-aseprite-secara-gratis/img/aseprite-page.webp)

Yaa... kita harus beli dengan harga **$19.99**.

![aseprite-buy](/install-aseprite-secara-gratis/img/aseprite-buy.webp)

Tapi, kalian bisa menginstallnya secara **Gratis!!**.

## Installasi

Saya sarankan kalian mengikuti cara yang disediakan oleh Aseprite di laman [github](https://github.com/aseprite/aseprite/blob/main/INSTALL.md) mereka dahulu.

Cara yang akan saya berikan di bawah adalah hasil modifikasi sedikit karena saya sempat gagal saat menginstallnya 😅.

### Install Skia

Skia adalah sebuah 2D graphic library yang dikembangkan oleh Google.

Pertama, jalankan perintah di bawah untuk membuat folder `~/deps` dan clone **depot_tools** dan **skia**.

{{<shell "$">}}mkdir $HOME/deps
cd $HOME/deps
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
git clone -b aseprite-m81 https://github.com/aseprite/skia.git{{</shell>}}

Lalu jalankan perintah di bawah untuk menambahkan **depot_tools** ke `PATH` supaya kalian bisa menggunakan perintah **gn**.

{{<shell "$">}}export PATH="${HOME}/depot_tools:${PATH}"{{</shell>}}

Setelah itu, jalankan perintah di bawah ini menggunakan **python2** yang dimana jika pada laman github Aseprite menggunakan **python** saja.

{{<shell "$">}}cd skia
python2 tools/git-sync-deps
{{</shell>}}

Jika sudah, tambahkan `script_executeable = "python2"` ke `skia/.gn`.

![gn](/install-aseprite-secara-gratis/img/gn.webp)

Jika sudah, jalankan perintah di bawah.

{{<shell "$">}}gn gen out/Release-x64 --args="is_debug=false is_official_build=true skia_use_system_expat=false skia_use_system_icu=false skia_use_system_libjpeg_turbo=false skia_use_system_libpng=false skia_use_system_libwebp=false skia_use_system_zlib=false"
ninja -C out/Release-x64 skia modules{{</shell>}}

### Install Aseprite





