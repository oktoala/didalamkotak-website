---
title: "Install Aseprite Secara Gratis"
date: 2021-08-20T10:10:25+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Belajar]
topik: [belajar, aseprite, pixel]
type: post
thumbnail: "/install-aseprite-secara-gratis/img/thumbnail.webp"
description: "Install Aseprite Secara Gratis"
summary: Belajar menginstall Aseprite secara gratis dan pastinya dengan cara yang legal
---

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

### Install Dependencies

Ini adalah hal-hal yang dibutuhkan untuk menginstall Aseprite

+ gcc 9.2 atau clang 9.0
+ CMake versi terbaru (>3.14)
+ Ninja 
+ Skia

Ikuti perintah di bawah untuk Ubuntu/Debian.

{{<shell "$">}}sudo apt-get install -y g++ cmake ninja-build libx11-dev libxcursor-dev libxi-dev libgl1-mesa-dev libfontconfig1-dev{{</shell>}}

Untuk Fedora.

{{<shell "$">}}sudo dnf install -y gcc-c++ cmake ninja-build libX11-devel libXcursor-devel libXi-devel mesa-libGL-devel fontconfig-devel{{</shell>}}

Untuk Arch.

{{<shell "$">}}sudo pacman -S gcc cmake ninja libx11 libxcursor mesa-libgl fontconfig{{</shell>}}

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

Pertama, unduh source code Aseprite dari [release page](https://github.com/aseprite/aseprite/releases) dan unduh `Aseprite-v1.x-Source.zip`
lalu extract filenya. Saya sendiri menaruhnya di folder `~/aseprite`.

Kalian juga bisa menggunakan git untuk mengambil source code-nya.

{{<shell "$">}}git clone --recursive https://github.com/aseprite/aseprite.git ~/aseprite
{{</shell>}}

Dan untuk mengupdatenya kalian bisa gunakan perintah di bawah.

{{<shell "$">}}cd ~/aseprite
git pull
git submodule update --init --recursive
{{</shell>}}

Jika sudah jalankan perintah di bawah ini.

{{<shell "$">}}cd ~/aseprite
mkdir build
cd build
cmake \
  -DCMAKE_BUILD_TYPE=RelWithDebInfo \
  -DLAF_BACKEND=skia \
  -DSKIA_DIR=$HOME/deps/skia \
  -DSKIA_LIBRARY_DIR=$HOME/deps/skia/out/Release-x64 \
  -DSKIA_LIBRARY=$HOME/deps/skia/out/Release-x64/libskia.a \
  -G Ninja \
  ..
ninja aseprite{{</shell>}}

Jika berhasil, binary dari Aseprite ada di folder `bin`.

{{<shell "$">}}./bin/aseprite{{</shell>}}

![aseprite](/install-aseprite-secara-gratis/img/aseprite.webp)

## Akhir Kata...

Jadi itu adalah cara menginstall Aseprite secara gratis dan legal.

Terkadang pengetahuan membuat kita lebih hemat 😄.

Oke mungkin itu aja, **_Smell ya later_**.