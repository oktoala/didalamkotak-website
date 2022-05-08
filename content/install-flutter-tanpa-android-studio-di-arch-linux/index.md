---
title: "Install Flutter Tanpa Android Studio Di Arch Linux"
date: 2021-07-15T08:11:00+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Programming]
topik: [programming, flutter, linux, arch]
type: post
thumbnail: "/install-flutter-tanpa-android-studio-di-arch-linux/img/thumbnail.webp"
description: "Karena Android Studio berat"
summary: "Karena Android Studio berat"
---

![install-flutter-tanpa-android-studio-di-arch-linux](/install-flutter-tanpa-android-studio-di-arch-linux/img/thumbnail.webp)

Singkat cerita, saya baru saja install ulang Arch Linux, jadi saya harus install lagi semua kebutuhan saya untuk pemrograman, termasuk Flutter.

Tapi saya malas untuk install Android Studio, karena terakhir kali terpasang, Android Studio hanya jadi pajangan saja.

Jadi kali ini saya memutuskan untuk install flutter tanpa Android Studio.

## Installasi

### Install Java

Kita perlu menginstall java dan versi java yang kita install harus tepat.
Saya sendiri memakai jdk11, karena jdk versi lain menimbulkan error saat build flutter.

```Shell {user="$"}
sudo pacman -S jdk11-openjdk jdk8-openjdk
```

Untuk mengubah melihat list jdk, jalankan perintah di bawah.

```Shell {user="$"}
archlinux-java status
```

Untuk mengubah default java environment, jalankan perintah ``sudo archlinux-java set <Nama_JDK>``

Contoh:


```Shell {user="$"}
sudo archlinux-java set java11-openjdk
```

### Install Packages yang diperlukan

Buka file `/etc/pacman.conf`, lalu uncomment teks dibawah untuk mengaktifkan multilib di Arch Linux.

{{<fileCode "TOML" "/etc/pacman.conf">}}[multilib]
Include = /etc/pacman.d/mirrorlist{{</fileCode>}}

Lalu install **semua** packages di bawah menggunakan pacman.

```Shell {user="$"}
sudo pacman -S base-devel multilib-devel gcc repo git gnupg gperf sdl wxgtk2 squashfs-tools curl ncurses zlib schedtool perl-switch zip unzip libxslt bc rsync ccache lib32-zlib lib32-ncurses lib32-readline
```

Lalu install packages di bawah menggunakan AUR helper.

```Shell {user="$"}
yay -S ncurse5-compat-libs lib32-ncurse5-compat-libs
```

### Install Flutter

Jalankan perintah ini untuk menginstall flutter stable di folder `~/.flutter`.

```Shell {user="$"}
git clone https://github.com/flutter/flutter.git -b stable ~/.flutter
```

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

```Shell {user="$"}
yay -S android-sdk-cmdline-tools-latest android-sdk-build-tools android-sdk-platform-tools android-platform android-emulator android-tools
```

Semua packages yang kalian unduh dengan perintah di atas akan tersimpan di `/opt/android-sdk`.

## Konfigurasi

### Flutter Doctor

Jalankan perintah untuk troubleshooting semua masalah kalian dengan flutter.

```Shell {user="$"}
flutter doctor -v
```

### Membuat /opt/android-sdk _writeable_

Karena semua Android SDK yang terinstall berada di `/opt/android-sdk` yang dimana memerlukan root permissions maka kita harus membuat folder tersebut menjadi _writeable_.

Jadi yang pertama harus kita lakukan adalah membuat grup user **android-sdk** dan menambahkan user kita ke dalam grub user tersebut.

```Shell {user="$"}
sudo groupadd android-sdk
sudo gpasswd -a <user> android-sdk
```

Ganti **<user>** dengan username kalian. Ketik `whoami` di terminal jika kalian lupa.

Jalankan perintah di bawah untuk mengatur _Accsess Control List_.

```Shell {user="$"}
sudo setfacl -R -m g:android-sdk:rwx /opt/android-sdk
sudo setfacl -d -m g:android-sdk:rwX /opt/android-sdk
```

Login ulang atau cukup jalankan `newgrp android-sdk` untuk berubah grup user.

### Flutter Config 

Jalankan perintah di bawah ini untuk mengatur lokasi Android SDK agar bisa dideteksi oleh flutter.

```Shell {user="$"}
flutter config --android-sdk /opt/android-sdk
```

### Flutter Android Licences

Jalankan perintah di bawah untuk menerima lisensi SDK.

```Shell {user="$"}
flutter doctor --android-licenses
```

Tekan `Y` ke semua prompt yang muncul. Jalankan perintah `flutter doctor -v` untuk mengecek apakah sudah berhasil atau tidak.

## Troubleshooting

### Android Licenses tidak tersimpan

Cukup tambahkan `sudo` jika kalian sudah menekan Y tapi tidak tersimpan.

```Shell {user="$"}
sudo flutter doctor --android-licenses
```

### BUG! exception in phase 'semantic analysis' in source unit '...'

Ini adalah error yang terjadi saat build aplikasi. Solusi yang saya dapatkan adalah mengganti jdk default. 

Saya sendiri memakai jdk11 dan tidak masalah setelah itu.

```Shell {user="$"}
sudo archlinux-java set java-11-openjdk
```

## Sumber

[https://wiki.archlinux.org/title/Android"](linkhttps://wiki.archlinux.org/title/Android "blank") 

[https://flutter.dev/docs/get-started/install/linux"](https://flutter.dev/docs/get-started/install/linux "blank")

