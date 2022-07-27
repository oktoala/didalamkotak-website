---
title: "Lewati SSL Pinning Dengan Objection Dan Frida"
date: 2022-07-24T14:22:42+08:00
comments: true
draft: true
author: "Yoga"
toc: true
kategori: "Tips"
topik: ["hacking", "frida", "objection", "mitm"]
type: post
thumbnail: "/lewati-ssl-pinning-dengan-objection-dan-frida/img/thumbnail.webp"
description: "Cara mendapatkan Private API yang tidak bisa diakses karena SSL Pinning"
summary: Mari Kita Ngehack
---

![lewati-ssl-pinning-dengan-objection-dan-frida](/lewati-ssl-pinning-dengan-objection-dan-frida/img/thumbnail.webp)

Jika kalian sering melakukan web programming, kalian mungkin sering memakai API untuk mendapatkan suatu data. Dan API yang kalian pakai biasanya adalah sebuah public API.

Tapi terkadang public API tidak memberikan semua data yang kita inginkan.

Jika seperti itu, maka kalian membutuhkan yang namanya private API.

Private API bisa kalian dapatkan dengan teknik [_Man In The Middle_](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) atau MITM.

Tetapi, beberapa aplikasi tidak bisa kalian dapatkan saja begitu private API-nya dengan MITM. Beberapa aplikasi menerapkan SSL Pinning.

Pada artikel ini, kita akan mempelajarai cara melewati SSL Pinning

## Persiapan

Pastikan kalian menyiapkan hal-hal di bawah ini:

+ Smartphone yang sudah di root atau bisa juga pakai Emulator.
+ adb
+ Python 3.x dan pip

## Setup Environment Python

Kita tidak akan menginstall semua package Python di system, tapi kita akan menggunakan virtual environment.

1. Jalankan perintah di bawah jika kalian belum memiliki `virtualenv`.

    ```Bash
    pip install virtualenv
    ```

2. Jika sudah, buat virtual environment nya.

    ```Bash
    virtualenv --python=python3 ~/hacking
    ```
3. Aktifkan sourcenya

    ```Bash
    source ~/hacking/bin/activate
    ```

    Pilih `activate.ps1` jika kalian di Windows.

4. Install **Frida** dan **Objection** melalui pip.

    ```Bash
    pip install frida objection
    ```

## Setup Frida

Download [Frida Server](https://github.com/frida/frida/releases "blank") sesuai dengan sistem operasi dan arsitektur perangkat kalian.

Untuk kali ini kita akan unduh yang versi android-arm64.

![frida-server](/lewati-ssl-pinning-dengan-objection-dan-frida/img/frida-server.webp)

Extract isi filenya dan taruh di folder `~/hacking`. Rename menjadi `frida-server` biar lebih singkat.

Hubungkan Android kalian ke PC menggunakan USB.

Lalu jalankan perintah di bawah untuk memindahkan file `frida-server` ke Android kalian, mengganti permissionnya,
dan menjalankannya.

```Bash
adb push frida-server /data/local/tmp
adb shell chmod 777 /data/local/tmp/frida-server
adb shell /data/local/tmp/frida-server &
```

## Testing Frida

## Saatnya Hacking

```Bash
frida -U -f com.shoppe.id -l sslpinning.js
```