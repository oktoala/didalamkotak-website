---
title: "Flutter Setup Untuk Arch Linux"
date: 2021-02-18T09:15:26+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: "Programming"
topik: [flutter, programming, dart, linux]
type: post
thumbnail: /img/thumbnail/flutter.jpg
description: "Setup Flutter untuk Arch"
summary: "Setup Flutter untuk Arch"
---


![flutter](/img/thumbnail/flutter.jpg)

## Pendahuluan

Saya ada mata kuliah pemrograman mobile dan bahasa pemrograman yang dipakai adalah dart dengan framework flutter.

Jadi saya harus menginstall flutter di laptop saya.

Sayangnya flutter tidak bisa diinstall melalui pacman. Jadi saya harus menginstallnya manual dari situsnya langsung.

## Installasi

### 1. Install OpenJDK

Kita akan butuh java untuk menginstall android studio. Seharusnya java sudah terinstall di sistem kalian, tapi jika belum terinstall
ketikkan perintah di bawah ini.

```Shell {user="$"}
sudo pacman -S jdk8-openjdk jdk11-openjdk
```

Untuk mengubah melihat list jdk, jalankan perintah di bawah.

```Shell {user="$"}
archlinux-java status
```

Untuk mengubah default java environment, jalankan perintah ``sudo archlinux-java set <Nama_JDK>``

Contoh:

```Shell {user="$"}
sudo archlinux-java set java8-openjdk
```

### 2. Install Android Studio

Unduh android studio di [sini](https://developer.android.com/studio/) atau kalian bisa menggunakan AUR.

```Shell {user="$"}
yay -S android-studio
```

Jika sudah terinstall, buka android studio, lalu pilih direktori untuk sdk kalian. Biasanya di `~/Android/sdk`.

Setelah itu, android studio akan menginstall semua kebutuhan untuk android studio.

### 3. Install Flutter

Unduh flutter sdk di [sini](https://flutter.dev/docs/development/tools/sdk/releases?tab=linux)

Saya menyarankan untuk mengunduh yang versi stable.

Install flutter sdk di folder yang kalian suka. Kalau saya menyimpannya di folder {{< dir ".flutter">}}.

{{<scCode "Shell">}}mkdir ~/.flutter
cd ~/.flutter
tar -xf ~/Downloads/flutter-linux*\*-stable.tar.xz
{{</scCode>}}

Lalu tambahkan flutter PATH dengan cara menambahkan teks dibawah ini ke `.bashrc` atau `.zshrc`.

{{<scCode "Bash">}}export PATH="${PATH}:$HOME/.flutter/flutter/bin"{{</scCode>}}

### 4. Install VS Code

Saya memakai visual studio code sebagai teks editor saya. Android studio hanya saya gunakan untuk membuat emulator dan untuk
mengupgrade sdk secara otomatis.

Install vs code dengan menggunakan AUR. Kalian juga bisa menggunakan yang versi open source menggunakan pacman, tapi saya lebih suka
menggunakan yang dari Microsoft branded packages. Karena ada beberapa fitur yang tidak ada di versi open source.

Ini yang Microsoft branded packages.

```Shell {user="$"}
yay -S visual-studio-code-bin
```

Ini yang versi open source.

```Shell {user="$"}
sudo pacman -S code
```

Setelah terinstall, buka vs code, tekan `Ctrl+Shift+P` untuk membuka command pallete, lalu ketikkan `Extension: Install Extensions` atau cukup tekan `Ctrl+Shift+X`.
Lalu ketikkan 'Flutter' dan tekan install.

## Konfigurasi Device

![fluuter-devices](/img/list-flutter-devices.png)

Kalian bisa menjalankan program flutter kalian dengan menggunakan emulator, smartphone, web, dan desktop.

Untuk web dan desktop tidak terlalu disarankan, karena masih dalam tahap pengembangan dan beberapa library mungkin tidak akan berfungsi.

### Setup Emulator

Buka android studio, pilih Configure > AVD Manager > Create Virtual Device. Lalu buat emulator sesuai keinginan kalian.

Lalu tambahkan teks di bawah ke `.bashrc` atau `.zshrc`.

{{<scCode "Bash">}}export ANDROID_SDK_ROOT="$HOME/Android/sdk"
export ANDROID_AVD_HOME="$HOME/.android/avd"
export PATH="${PATH}:$HOME/Android/sdk/emulator"{{</scCode>}}

### Setup Smartphone


Sambungkan PC kalian dengan smartphone menggunakan USB. Buka smartphone kalian, pilih Setting > Developer Options. 

Jika belum ada maka pergi ke About lalu tekan Build Number sampai 7x. Beberapa smartphone memiliki cara yang berbeda-beda.

Jika Developer Options sudah muncul, lalu nyalakan USB debugging.

Kalian bisa memunculkan layar smartphone kalian ke PC kalian dengan menggunakan softwre seperti [scrcpy](https://github.com/Genymobile/scrcpy).

### Setup Untuk Web

Kalian harus pindah flutter channel kalian ke master.

```Shell {user="$"}
flutter channel master
```

Lalu upgrade flutter kalian.

```Shell {user="$"}
flutter upgrade
```

Jika sudah, aktifkan fitur web menggunakan flutter config.

```Shell {user="$"}
flutter config --enable-web
```

### Setup Untuk Desktop

Sama seperti setup untuk web, hanya berbeda dibagian flutter config.

```Shell {user="$"}
flutter config --enable-linux-desktop
```

## Troubleshooting

### SDK android tidak ditemukan

Jalankan perintah `flutter config --android-sdk <PATH_KE_Android_SDK>` di terminal.

Contoh: 

```Shell {user="$"}
flutter config --android-sdk ~/Android/sdk
```

### CHROME_EXECUTEABLE

Kalian bisa mengecek di `/usr/bin` apakah nama dari binary chrome kalian adalah **google-chrome**.

Jika bukan, maka kalian bisa rename atau membuat simbolic link dari binary tersebut.

Contoh jika binary chrome bernama **google-chrome-stable**:

```Shell {user="$"}
sudo ln -s /bin/google-chrome-stable /bin/google-chrome
```

### Emulator 

Pastikan kalian memakai system image yang di rekomendasikan oleh android studio.

## Penutup

Mungkin itu aja yang bisa saya sampaikan.

Artikel akan diupdate jika ada perubahan.

_Stay What-If!_:smile:
