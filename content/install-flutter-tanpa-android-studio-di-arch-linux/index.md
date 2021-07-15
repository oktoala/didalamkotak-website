---
title: "Install Flutter Tanpa Android Studio Di Arch Linux"
date: 2021-07-15T08:11:00+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Programming, Linux]
topik: [programming, flutter, linux, arch]
type: post
thumbnail: "/install-flutter-tanpa-android-studio-di-arch-linux/img/thumbnail.webp"
description: "Install Flutter Tanpa Android Studio Di Arch Linux"
---

Ini adalah update dari artikel saya sebelumnya, tapi kali ini tanpa Android Studio.

<!--more-->

![install-flutter-tanpa-android-studio-di-arch-linux](/install-flutter-tanpa-android-studio-di-arch-linux/img/thumbnail.webp)

Singkat cerita, saya baru saja install ulang Arch Linux, jadi saya harus install lagi semua kebutuhan saya untuk pemrograman, termasuk Flutter.

Tapi saya malas untuk install Android Studio, karena terakhir kali terpasang, Android Studio hanya jadi pajangan saja.

Jadi kali ini saya memutuskan untuk install flutter tanpa Android Studio.

## Installasi

### Install Java

Kita perlu menginstall java dan versi java yang kita install harus tepat.
Saya sendiri memakai jdk11, karena jdk versi lain menimbulkan error saat build flutter.

{{<scCode "Shell">}}sudo pacman -S jdk11-openjdk jdk8-openjdk{{</scCode>}}

Untuk mengubah melihat list jdk, jalankan perintah di bawah.

{{<scCode "Shell">}}archlinux-java status{{</scCode>}}

Untuk mengubah default java environment, jalankan perintah ``sudo archlinux-java set <Nama_JDK>``

Contoh:

{{<scCode "Shell" >}}sudo archlinux-java set java11-openjdk{{</scCode>}}

### Install Packages yang diperlukan

Buka file `/etc/pacman.conf`, lalu uncomment teks dibawah untuk mengaktifkan multilib di Arch Linux.

{{<fileCode "TOML" "/etc/pacman.conf">}}[multilib]
Include = /etc/pacman.d/mirrorlist{{</fileCode>}}

Lalu install **semua** packages di bawah menggunakan pacman.

{{<scCode "Shell">}}sudo pacman -S base-devel multilib-devel gcc repo git gnupg gperf sdl wxgtk2 squashfs-tools curl ncurses zlib schedtool perl-switch zip unzip libxslt bc rsync ccache lib32-zlib lib32-ncurses lib32-readline{{</scCode>}}

Lalu install packages di bawah menggunakan AUR helper.

{{<scCode "Shell">}}yay -S ncurse5-compat-libs lib32-ncurse5-compat-libs{{</scCode>}}

### Install Flutter

Jalankan perintah ini untuk menginstall flutter stable di folder `~/.flutter`.

{{<scCode "Shell">}}git clone https://github.com/flutter/flutter.git -b stable ~/.flutter{{</scCode>}}

Lalu tambahkan teks di bawah ke `.bashrc` atau `.zshrc` kalian.

{{<fileCode "Bash" ".bashrc atau .zshrc">}}export PATH="$PATH:$HOME/.flutter/bin"{{</fileCode>}}

### Install Android SDK

Komponen yang penting dari Android SDK adalah sebagai berikut.

+ [Command-Line Tools](https://developer.android.com/studio/releases/cmdline-tools) (Diperlukan)
+ [SDK Build Tools](https://developer.android.com/studio/releases/build-tools) (Diperlukan)
+ [SDK Platform-Tools](https://developer.android.com/studio/releases/platform-tools) (Diperlukan)
+ [SDK Platform](https://developer.android.com/studio/releases/platforms) (Diperlukan)
+ [Android Emulator](https://developer.android.com/studio/run/emulator) (Disarankan)
+ [Android Tools](https://archlinux.org/packages/?name=android-tools) (Disarankan)

Mungkin seperti ini struktur foldernya.


![folder-sdk](/install-flutter-tanpa-android-studio-di-arch-linux/img/folder-sdk.webp)

Kalian bisa install semua itu dengan AUR helper.

{{<scCode "Shell">}}yay -S android-sdk-cmdline-tools-latest android-sdk-build-tools android-sdk-platform-tools android-platform android-emulator android-tools{{</scCode>}}

Semua packages yang kalian unduh dengan perintah di atas akan tersimpan di `/opt/android-sdk`.

## Konfigurasi

### Flutter Doctor

Jalankan perintah untuk troubleshooting semua masalah kalian dengan flutter.

{{<scCode "Shell">}}flutter doctor -v{{</scCode>}}

### Membuat /opt/android-sdk _writeable_

Karena semua Android SDK yang terinstall berada di `/opt/android-sdk` yang dimana memerlukan root permissions maka kita harus membuat folder tersebut menjadi _writeable_.

Jadi yang pertama harus kita lakukan adalah membuat grup user **android-sdk** dan menambahkan user kita ke dalam grub user tersebut.

{{<scCode "Shell">}}sudo groupadd android-sdk
sudo gpasswd -a &lt;user&gt; android-sdk{{</scCode>}}

Ganti **\<user>** dengan username kalian. Ketik `whoami` di terminal jika kalian lupa.

Jalankan perintah di bawah untuk mengatur _Accsess Control List_.

{{<scCode "Shell">}}sudo setfacl -R -m g:android-sdk:rwx /opt/android-sdk
sudo setfacl -d -m g:android-sdk:rwX /opt/android-sdk {{</scCode>}}

Login ulang atau cukup jalankan `newgrp android-sdk` untuk berubah grup user.

### Flutter Config 

Jalankan perintah di bawah ini untuk mengatur lokasi Android SDK agar bisa dideteksi oleh flutter.

{{<scCode "Shell">}}flutter config --android-sdk /opt/android-sdk{{</scCode>}}

### Flutter Android Licences

Jalankan perintah di bawah untuk menerima lisensi SDK.

{{<scCode "Shell">}}flutter doctor --android-licenses{{</scCode>}}

Tekan `Y` ke semua prompt yang muncul. Jalankan perintah `flutter doctor -v` untuk mengecek apakah sudah berhasil atau tidak.

## Troubleshooting

### Android Licenses tidak tersimpan

Cukup tambahkan `sudo` jika kalian sudah menekan Y tapi tidak tersimpan.

{{<scCode "Shell">}}sudo flutter doctor --android-licenses{{</scCode>}}

### BUG! exception in phase 'semantic analysis' in source unit '...'

Ini adalah error yang terjadi saat build aplikasi. Solusi yang saya dapatkan adalah mengganti jdk default. 

Saya sendiri memakai jdk11 dan tidak masalah setelah itu.

{{<scCode "Shell">}}sudo archlinux-java set java-11-openjdk{{</scCode>}}

## Sumber

{{<linkBlank "https://wiki.archlinux.org/title/Android" "linkhttps://wiki.archlinux.org/title/Android">}}. 

{{<linkBlank "https://flutter.dev/docs/get-started/install/linux" "https://flutter.dev/docs/get-started/install/linux">}}.

