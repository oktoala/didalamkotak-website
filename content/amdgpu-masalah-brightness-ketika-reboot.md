---
title: "AMD GPU: Masalah Brightness Ketika Reboot"
date: 2021-06-19T11:17:52+08:00
comments: true
draft: false
author: "Yoga"
toc: true
categories: []
type: post
sidebar: false
thumbnail: "img/thumbnail/amdgpu-masalah-brightness-ketika-reboot.webp"
description: "Amdgpu Masalah Brightness Ketika Reboot"
---

Kali ini kita akan memberikan cara mengatasi brightness yang selalu full saat reboot.
<!--more-->

![amdgpu-masalah-brightness-ketika-reboot](/img/thumbnail/amdgpu-masalah-brightness-ketika-reboot.webp)

Jika kalian memakai linux dan menggunakan amdgpu sebagai driver, mungkin kalian akan menemukan masalah brightness saat reboot.

Hal ini bisa terjadi karena nilai `actual brightness` yang berukuran 16-bit ada di luar rentang `max brightness` yang berukuran 8-bit. Karena nilai terlalu besar, jadi dipotong ke kecerahan maksimum (255)

Karena {{<linkBlank "bug" "https://bugzilla.kernel.org/show_bug.cgi?id=203905">}} di dalam driver belum ditangani, maka cara yang paling ampuh adalah dengan cara menanganinya sendiri.

Ada beberapa cara untuk menaganinya.

## How to Fix It

Pertama-tama, kalian perlu membuat dua file. File yang pertama adalah **bash** file dan yang kedua adalah **service** file.

Untuk file **bash** bisa kalian letakkan dimana saja. Saya sendiri menaruhnya di dalam folder {{<dir "~/.script">}}

{{<scCode "Bash">}}mkdir ~/.script{{</scCode>}}

Untuk nama file bisa kalian namakan {{<dir "fix-brightness.sh">}}

Untuk file **service**, kalian bisa membuatnya dengan perintah di bawah.

{{<scCode "Shell">}}sudo systemctl edit --full --force namaFile.service{{</scCode>}}

Jika kalian sudah pernah membuat **service** dengan nama yang sama, cukup hapus ``--force`` pada perintah di atas.

Kalian bebas untuk memberi nama file servicenya. Saya sendiri memakai nama {{<dir "fix-brightness.service">}}

### Cara Pertama

Masukkan text dibawah ke dalam {{<dir "fix-brightness.sh">}} 

{{<fileCode "Bash" "fix-brightness.sh">}}#!/bin/bash

# Change the line below according to your hardware
BRIGHTNESS_FILE="/var/lib/systemd/backlight/pci-0000:04:00.0:backlight:amdgpu_bl0"
BRIGHTNESS=$(cat "$BRIGHTNESS_FILE")
BRIGHTNESS=$(($BRIGHTNESS*255/65535))
BRIGHTNESS=${BRIGHTNESS/.*} # truncating to int, just in case
echo $BRIGHTNESS > "$BRIGHTNESS_FILE"{{</fileCode>}}

Lalu, masukkan text dibawah ke dalam {{<dir "fix-brightness.service">}}

{{<fileCode "TOML" "fix-brightness.service">}}[Unit]
Description=Convert 16-bit brightness values to 8-bit before systemd-backlight applies it
Before=systemd-backlight@backlight:amdgpu_bl0.service

[Service]
Type=oneshot
ExecStart=/home/yourUsername/.script/fix-brightness.sh

[Install]
WantedBy=multi-user.target{{</fileCode>}}

Ganti **yourUsername** dengan username kalian. Jalankan perintah ``whoami`` jika kalian lupa.

Jika sudah, jalankan perintah ``systemctl enable fix-brightness.service``

### Cara Kedua

Pada beberapa sistem, nilai yang dilaporkan oleh driver ada pada range yang benar [0, 255], tapi systemd gagal mengembalikan nilai yang benar. Ini terjadi karena ada masalah di kernel.

Maka dari itu, cara pertama tidak akan berhasil. Sebagai gantinya, level kecerahan akan disimpan ke systemd sebelum shutdown.

Untuk cara kedua sudah saya coba dan berhasil

Pertama, masukkan teks di bawah ini.

{{<fileCode "Bash" "fix-brightness">}}#!/bin/sh

# Backlight level from systemd's perspective (change if needed)
readonly SYSTEMD_BACKLIGHT_FILE='/var/lib/systemd/backlight/pci-0000:04:00.0:backlight:amdgpu_bl0'

# Backlight level from AMDGPU driver
readonly AMDGPU_BACKLIGHT_FILE='/sys/class/backlight/amdgpu_bl0/brightness'

# Read current value from the driver and apply it to systemd
readonly AMDGPU_BACKLIGHT_VALUE=$(cat "$AMDGPU_BACKLIGHT_FILE")
echo "$AMDGPU_BACKLIGHT_VALUE" > "$SYSTEMD_BACKLIGHT_FILE"{{</fileCode>}}

Lalu, masukkan teks di bawah ke service file.

{{<fileCode "TOML" "fix-brightness.service">}}[Unit]
Description=Save brightness value from AMDGPU
DefaultDependencies=no
After=final.target

[Service]
Type=oneshot
ExecStart=/home/yourUsername/.script/fix-brightness.sh

[Install]
WantedBy=final.target{{</fileCode>}}

Ganti **yourUsername** dengan username kalian. Jalankan perintah ``whoami`` jika kalian lupa.

Kalian juga bisa mengganti `ExecStart` dengan path dimana **bash** file kalian berada.

## Finally...

Kalian bisa membaca sumbernya di {{<linkBlank "sini" "https://wiki.archlinux.org/title/Backlight#Backlight_is_always_at_full_brightness_after_a_reboot_with_amdgpu_driver">}}

Oke, itu aja. _Smell ya later_.
