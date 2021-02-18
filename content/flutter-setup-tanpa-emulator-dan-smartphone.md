---
title: "Flutter Setup Tanpa Emulator dan Smartphone"
date: 2021-02-18T09:15:26+08:00
comments: true
draft: false
author: "Yoga"
toc: true
thumbnail: /img/thumbnail/flutter.jpg
---

Kali ini kita akan membahas cara setup flutter tanpa emulator/smartphone.

<!--more-->

![flutter](/img/thumbnail/flutter.jpg)

## Pendahuluan

Saya ada mata kuliah pemrograman mobile dan bahasa yang dipakai adalah dart dengan framework flutter.

Untuk menjalankan aplikasi kita bisa menggunakan emulator atau device yang kita punya.

Masalahnya adalah jika menggunakan emulator, laptop saya tidak terlalu kuat untuk menjalankannya bersama VSCode.

Sebenarnya masih bisa menggunakan device kita sendiri lalu mirror ke laptop menggunakan software seperti [scrcpy](https://github.com/Genymobile/scrcpy).

Tapi saya malas jika harus memasang usb ke laptop saya setiap saya ingin membuat program di flutter.

Dan akhirnya saya menemukan caranya dari sebuah ketidaksengajaan.

## Flutter Doctor Problem

Jadi, saya punya flutter terinstall di laptop saya.

Dan jika saya jalankan ``flutter doctor -v`` di terminal, maka outputnya begini.

```Bash
$ flutter doctor -v
[✓] Flutter (Channel stable, 1.22.6, on Linux, locale en_US.UTF-8)
    • Flutter version 1.22.6 at /home/iansyah/.flutter/flutter
    • Framework revision 9b2d32b605 (4 weeks ago), 2021-01-22 14:36:39 -0800
    • Engine revision 2f0af37152
    • Dart version 2.10.5

[✓] Android toolchain - develop for Android devices (Android SDK version 30.0.3)
    • Android SDK at /home/iansyah/Android/sdk
    • Platform android-29, build-tools 30.0.3
    • ANDROID_SDK_ROOT = /home/iansyah/Android/sdk
    • Java binary at: /opt/android-studio/jre/bin/java
    • Java version OpenJDK Runtime Environment (build 1.8.0_242-release-1644-b3-6222593)
    • All Android licenses accepted.

[!] Android Studio
    • Android Studio at /opt/android-studio
    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
    • Java version OpenJDK Runtime Environment (build 1.8.0_242-release-1644-b3-6222593)

[!] Connected device
    ! No devices available

! Doctor found issues in 2 categories.
```

Tapi, jika saya jalankan di VS Code menggunakan ``Flutter: Run Flutter Doctor`` di Command Palette, maka outputnya jadi begini.

```Bash
[flutter] flutter doctor -v
[✓] Flutter (Channel stable, 1.22.6, on Linux, locale en_US.UTF-8)
    • Flutter version 1.22.6 at /home/iansyah/.flutter/flutter
    • Framework revision 9b2d32b605 (4 weeks ago), 2021-01-22 14:36:39 -0800
    • Engine revision 2f0af37152
    • Dart version 2.10.5

[✗] Android toolchain - develop for Android devices
    ✗ Unable to locate Android SDK.
      Install Android Studio from: https://developer.android.com/studio/index.html
      On first launch it will assist you in installing the Android SDK components.
      (or visit https://flutter.dev/docs/get-started/install/linux#android-setup for detailed instructions).
      If the Android SDK has been installed to a custom location, set ANDROID_SDK_ROOT to that location.
      You may also want to add it to your PATH environment variable.


[!] Android Studio
    • Android Studio at /opt/android-studio
    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
    • Java version OpenJDK Runtime Environment (build 1.8.0_242-release-1644-b3-6222593)

[!] Connected device
    ! No devices available

! Doctor found issues in 3 categories.
exit code 0
```

Dan akhirnya saya pusing sendiri.

Sampai pada akhirnya saya menemukan caranya.

## Setup Flutter

Pastikan kalian sudah menambahkan flutter ke path.

Cukup tambahkan teks di bawah ke `.bashrc` jika kalian menggunakan bash atau `.zshrc` jika kalian menggunakan zsh.

{{<scCode "Bash">}}export PATH="${PATH}:/pathToFlutterSDK/flutter/bin"{{</scCode>}}

Ganti "pathToFlutterSDK" dengan folder dimana kalian menyimpan flutter SDK kalian.

Sebagai contoh, saya menyimpannya di folder {{<dir "/home/iansyah/.flutter/">}} seperti contoh yang bisa kalian bisa di atas.

### 1. Mengubah channel Flutter

Flutter memiliki beberapa channel atau bisa juga disebut branch kalau di git.

Cukup jalankan perintah ``flutter channel`` untuk mengeceknya.

Untuk setup kali ini, kita akan mengubahnya ke channel `master` atau `beta`.

{{<scCode "Shell">}}flutter channel master{{</scCode>}}

Jika kalian mendapat masalah cukup pindah ke channel lain.

{{<scCode "Shell">}}flutter channel beta{{</scCode>}}

### 2. Mengupgrade Flutter

Karena kita sudah ada di channel master, maka kita harus mengupgrade flutternya.

{{<scCode "Shell">}}flutter upgrade{{</scCode>}}

Maka flutter akan diupgrade sesuai channel flutter kalian.

### 3. Konfigurasi sesuai OS

Jika kalian memakai Linux cukup jalankan perintah di bawah ini.

{{<scCode "Shell">}}flutter config --enable-linux-desktop{{</scCode>}}

Jika kalian memakai Windows atau MacOS, cukup ganti kata 'linux' jadi 'windows' atau 'macos'.

{{<scCode "Shell">}}flutter config --enable-windows-desktop{{</scCode>}}

Kalian bisa mengecek confignya dengan perintah `flutter config`.

### 4. Konfigurasi pakai browser

Kalian juga bisa menggunakan browser untuk menjalankan flutter.

Tapi fitur hot reload tidak lebih cepat jika dibandingkan dengan cara no.3 di atas.

Kalian cukup jalankan perintah ini.

{{<scCode "Shell">}}flutter config --enable-web{{</scCode>}}

Jika kalian memakai Arch Linux, maka kalian akan mendapatkan masalah menjalankan `flutter doctor -v` seperti di bawah.

```Shell
[✗] Chrome - develop for the web (Cannot find chrome executable at google-chrome) ! Cannot find Chrome. 
Try setting CHROME_EXECUTABLE to a Chrome executable.
```

Karena google-chrome tidak tersedia di pacman dan harus diunduh dari AUR.

Dan saat diunduh dari AUR, binary dari programnya akan bernama **google-chrome-stable** bukan **google-chrome**.

Sebenarnya ada beberapa cara dalam mengatasinya.

1. Menambahkan CHROME_EXECUTEABLE ke `.bashrc` atau `.zshrc`.

    {{<scCode "Bash">}}export CHROME_EXECUTEABLE='/usr/bin'{{</scCode>}}

2. Mengubah nama google-chrome-stable menjadi google-chrome.

    {{<scCode "Shell">}}sudo mv /bin/google-chrome-stable /bin/google-chrome{{</scCode>}}

3. Membuat symbolic link. Biasanya dari /usr/bin ke /usr/local/bin.

    {{<scCode "Shell">}}sudo ln -s /usr/bin/google-chrome-stable /usr/local/bin/google-chrome{{</scCode>}}

Kalau saya pakai pilih cara no.3 karena lebih gampang:smile:.
### 5. Konfigurasi Android SDK

Untuk saya sendiri, cara diatas sudah bisa mengatasi flutter VSCode untuk mendeteksi Android SDK.

Tapi untuk jaga-jaga jika masih tidak terdeteksi, jalankan perintah dibawah.

{{<scCode "Shell">}}flutter config --android-sdk /pathToAndroidSDK/{{</scCode>}}

Ganti {{<dir "/pathToAndroidSDK/">}} dengan folder dimana Android SDK kalian berada.

Sebagai contoh, saya menaruh Android SDK saya di {{<dir "/home/iansyah/Android/sdk">}}

## Cek Visual Studio Code

Sekarang mari cek ``Flutter: Run Flutter Doctor`` dari Command Palette.

```Shell
[flutter] flutter doctor -v
[✓] Flutter (Channel master, 1.27.0-5.0.pre.40, on Linux, locale en_US.UTF-8)
    • Flutter version 1.27.0-5.0.pre.40 at /home/iansyah/.flutter/flutter
    • Framework revision db1e9f053f (8 hours ago), 2021-02-17 17:33:56 -0800
    • Engine revision 6993cb229b
    • Dart version 2.13.0 (build 2.13.0-30.0.dev)

[✓] Android toolchain - develop for Android devices (Android SDK version 30.0.3)
    • Android SDK at /home/iansyah/Android/sdk
    • Platform android-29, build-tools 30.0.3
    • ANDROID_SDK_ROOT = /home/iansyah/Android/sdk
    • Java binary at: /opt/android-studio/jre/bin/java
    • Java version OpenJDK Runtime Environment (build 1.8.0_242-release-1644-b3-6222593)
    • All Android licenses accepted.

[✓] Chrome - develop for the web
    • Chrome at google-chrome

[✓] Linux toolchain - develop for Linux desktop
    • clang version 11.0.1
    • cmake version 3.19.4
    • ninja version 1.10.2
    • pkg-config version 1.7.3

[✓] Android Studio
    • Android Studio at /opt/android-studio
    • Flutter plugin can be installed from:
      🔨 https://plugins.jetbrains.com/plugin/9212-flutter
    • Dart plugin can be installed from:
      🔨 https://plugins.jetbrains.com/plugin/6351-dart
    • Java version OpenJDK Runtime Environment (build 1.8.0_242-release-1644-b3-6222593)

[✓] Connected device (2 available)
    • Linux (desktop) • linux  • linux-x64      • Linux
    • Chrome (web)    • chrome • web-javascript • Google Chrome 88.0.4324.150

• No issues found!
exit code 0
```

Berhasil!! :tada:

Flutter VSCode sudah mendeteksi Android SDK dan device.

## Percobaan

Kalian bisa buat project flutter baru dari Command Palette VSCode.

Jika sudah, pastikan di status bar(ada pojok bawah kanan) sudah muncul nama device kalian.

![/img/flutter-status-bar.jpg](/img/flutter-status-bar.jpg)

Jika belum, buka Command Palette, lalu jalankan ``Flutter: Select Device`` lalu pilih yang memiliki tulisan (desktop).

Jika sudah muncul di status bar, kalian bisa jalankan dengan menekan F5.

Maka tampilannya akan seperti ini.

![flutter-linux-desktop](/img/flutter-desktop.jpg)

Resource yang dipakai juga hanya sampai 44% dari total RAM laptop saya.

Sedangkan jika memakai emulator, bisa mencapai 83% dari total RAM laptop saya. 

Itupun RAM dari emulatornya sudah dikurangi sampai 896 MB saja. 

Dan jika saat ngoding ada masalah, saya otomatis tidak bisa membuka browser karena RAM yang tersedia tidak cukup :smile:.

## Penutup

Pemrograman mobile memang bisa sangat tricky untuk mengatur resource yang dipakai. 

Apalagi jika laptop kalian hanyalah laptop mahasiswa biasa seperti laptop saya.

Tapi dengan cara diatas kalian bisa melakukan pemrograman mobile tanpa harus mengeluarkan resource yang sangat besar.

Dan juga kalian tidak perlu melakukan USB debugging dengan smartphone kalian setiap kalian ingin membuat program menggunakan flutter.

Oke, mungkin itu aja. Komen dibawah jika kalian ada tips atau pertanyaan.

Terima kasih.