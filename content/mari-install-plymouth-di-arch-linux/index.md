---
title: "Mari Install Plymouth Di Arch Linux"
date: 2021-07-12T10:10:09+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Linux]
topik: [plymouth, linux, tips, boot, arch]
type: post
thumbnail: "/mari-install-plymouth-di-arch-linux/img/thumbnail.webp"
description: "Mari Install Plymouth Di Arch Linux"
---

Kali ini kita akan membahas cara install dan konfigurasi Plymouth di Arch Linux.

<!--more-->

![mari-install-plymouth-di-arch-linux](/mari-install-plymouth-di-arch-linux/img/thumbnail.webp)

## Pendahuluan

Plymouth adalah sebuah proyek dari Fedora yang sekarang sudah terdaftar di {{<linkBlank "freedesktop.org" "https://www.freedesktop.org/wiki/Software/#graphicsdriverswindowsystemsandsupportinglibraries">}} yang membuat kita bisa menampilkan tampilan yang menarik saat proses boot.

## Instalasi

Plymouth ada di AUR, jadi bisa kalian langsung unduh saja atau kalian bisa build dari [gitlab](https://gitlab.freedesktop.org/plymouth/plymouth).

{{<scCode "Shell">}}yay -S plymouth-git{{</scCode>}}

### Plymouth Hook

Tambahkan {{<dir "plymouth">}} di array HOOKS di {{<dir "/etc/mkinitcpio.conf">}} dan harus ditambahkan setelah `base` dan `udev`
supaya bisa bekerja.

{{<fileCode "Bash" "/etc/mkinitcpio.conf">}}HOOKS=(base udev plymouth ...){{</fileCode>}}

Kalian juga mungkin ingin menambahkan graphic drivers ke initramfs. Untuk Intel tambahkan `i915` dan untuk AMD tambahkan `amdgpu` di array MODULES.

{{<fileCode "Bash" "/etc/mkinitcpio.conf">}}MODULES=(amdgpu ...){{</fileCode>}}

Beberapa tema juga baru akan bekerja jika sudah melakukan langkah ini.

### Alternatif Plymouth Hook (systemd)

Jika `mkinitcpio.conf` kalian memiliki `systemd` pada array HOOKS nya, maka ganti `plymouth` dengan `sd-plymouth`. 

Dan jika kalian menggunakan hard drive encryption, gunakan `sd-encrypt` ketimbang `encrypt` ataupun `plymouth-encrypt`.

{{<fileCode "Bash" "/etc/mkinitcpio.conf">}}HOOKS=(base systemd sd-plymouth ... sd-encrypt ...){{</fileCode>}}

Sebenernya jika sistem kalian tidak pernah kalian ubah apapun, seharusnya langkah [pertama](#plymouth-hook) dapat bekerja tanpa masalah.

### Kernel CMD

Ubah isi dari `GRUB_CMDLINE_LINUX_DEFAULT` menjadi teks di bawah ini.

{{<fileCode "Bash" "/etc/default/grub">}}GRUB_CMDLINE_LINUX_DEFAULT="quiet loglevel=3 udev.log-priority=3 splash vt.global_cursor_default=0"{{</fileCode>}}

Lalu jalankan perintah di bawah ini.

{{<scCode "Shell">}}sudo grub-mkconfig -o /boot/grub/grub.cfg{{</scCode>}}

## Konfigurasi

### Smooth Transition

Jika kalian memakai **GDM**, maka cukup install **gdm-plymouth** dari AUR.

Tapi jika kalian memakai selain GDM, seperti SDDM, LightDM, LXDM, maka pertama kalian harus menonaktifkannya terlebih dahulu.

{{<scCode "Shell">}}systemctl disable lightdm.service{{</scCode>}}

Lalu aktifkan yang versi plymouth.

{{<scCode "Shell">}}systemctl enable lightdm-plymouth.service{{</scCode>}}

### Delay

Kalian bisa mengatur konfigurasi plymouth di `/etc/plymouth/plymouthd.conf`.

{{<fileCode "TOML" "/etc/plymouth/plymouthd.conf">}}[Daemon]
Theme=spinner
ShowDelay=0{{</fileCode>}}

### Tema

Kalian bisa melihat list tema yang kalian miliki dengan perintah di bawah.

{{<scCode "Shell">}}plymouth-set-default-theme -l{{</scCode>}}

atau

{{<scCode "Shell">}}ls /usr/share/plymouth/themes{{</scCode>}}

Tema default adalah **spinner**, tapi bisa kalian ganti dengan mengedit `/etc/plymouth/plymouthd.conf`, contoh:

{{<fileCode "TOML" "plymouthd.conf">}}[Daemon]
Theme=solar
ShowDelay=5{{</fileCode>}}

Kalian bisa melihat preview dari tema dengan cara menekan `Ctrl+Alt+F6`, lalu login sebagai root, dan ketikkan perintah berikut.

{{<fileCode "Bash" "TTY">}}plymouthd
plymouth --show-splash{{</fileCode>}}

Untuk keluar dari preview, tekan lagi `Ctrl+Alt+F6` dan ketik `plymouth --quit`.

Setiap kalian mengganti tema, `initrd` harus di built ulang. Jalankan perintah di bawah ini.

{{<scCode "Shell">}}mkinicpio -P{{</scCode>}}

## Tweaks

### Install Tema

Tema plymouth bisa diinstall secara manual dengan cara menaruh tema yang telah kalian unduh di `/usr/share/plymouth/themes`.

Dan jika tidak ingin repot, kalian juga bisa mengunduh tema dari AUR.

{{<scCode "Shell">}}yay -S plymouth-theme-arch-logo{{</scCode>}}

Lalu jalankan perintah dibawah ini untuk mengubah tema dan build ulang initrd.

{{<scCode "Shell">}}plymouth-set-default-theme -R arch-logo{{</scCode>}}

## Akhir Kata...

Mungkin itu aja yang bisa saya sampaikan, _**Smell Ya Later**_.