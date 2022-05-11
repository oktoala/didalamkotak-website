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
description: "Tampilkan splash screen yang keren saat booting"
summary: "Tampilkan splash screen yang keren saat booting"
---

![mari-install-plymouth-di-arch-linux](/mari-install-plymouth-di-arch-linux/img/thumbnail.webp)

## Pendahuluan

Plymouth adalah sebuah proyek dari Fedora yang sekarang sudah terdaftar di [freedesktop.org"](https://www.freedesktop.org/wiki/Software/#graphicsdriverswindowsystemsandsupportinglibraries "blank")yang membuat kita bisa menampilkan tampilan yang menarik saat proses boot.

## Instalasi

Plymouth ada di AUR, jadi bisa kalian langsung unduh saja atau kalian bisa build dari [gitlab](https://gitlab.freedesktop.org/plymouth/plymouth).

```Shell {user="$"}
yay -S plymouth-git
```

### Plymouth Hook

Tambahkan ``plymouth`` di array HOOKS di ``/etc/mkinitcpio.conf`` dan harus ditambahkan setelah `base` dan `udev`
supaya bisa bekerja.

```Bash {file"/etc/mkinitcpio.conf"}
HOOKS=(base udev plymouth ...)
```

Kalian juga mungkin ingin menambahkan graphic drivers ke initramfs. Untuk Intel tambahkan `i915` dan untuk AMD tambahkan `amdgpu` di array MODULES.

```Bash {file"/etc/mkinitcpio.conf"}
MODULES=(amdgpu ...)
```

Beberapa tema juga baru akan bekerja jika sudah melakukan langkah ini.

### Alternatif Plymouth Hook (systemd)

Jika `mkinitcpio.conf` kalian memiliki `systemd` pada array HOOKS nya, maka ganti `plymouth` dengan `sd-plymouth`. 

Dan jika kalian menggunakan hard drive encryption, gunakan `sd-encrypt` ketimbang `encrypt` ataupun `plymouth-encrypt`.

```Bash {file"/etc/mkinitcpio.conf"}
HOOKS=(base systemd sd-plymouth ... sd-encrypt ...)
```

Sebenernya jika sistem kalian tidak pernah kalian ubah apapun, seharusnya langkah [pertama](#plymouth-hook) dapat bekerja tanpa masalah.

### Kernel CMD

Ubah isi dari `GRUB_CMDLINE_LINUX_DEFAULT` menjadi teks di bawah ini.

```Bash {file"/etc/default/grub"}
GRUB_CMDLINE_LINUX_DEFAULT="quiet loglevel=3 udev.log-priority=3 splash vt.global_cursor_default=0"
```

Lalu jalankan perintah di bawah ini.

```Shell {user="$"}
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Konfigurasi

### Smooth Transition

Jika kalian memakai **GDM**, maka cukup install **gdm-plymouth** dari AUR.

Tapi jika kalian memakai selain GDM, seperti SDDM, LightDM, LXDM, maka pertama kalian harus menonaktifkannya terlebih dahulu.

```Shell {user="$"}
systemctl disable lightdm.service
```

Lalu aktifkan yang versi plymouth.

```Shell {user="$"}
systemctl enable lightdm-plymouth.service
```

### Delay

Kalian bisa mengatur konfigurasi plymouth di `/etc/plymouth/plymouthd.conf`.

```TOML {file="/etc/plymouth/plymouthd.conf"}
[Daemon]
Theme=spinner
ShowDelay=0
```

### Tema

Kalian bisa melihat list tema yang kalian miliki dengan perintah di bawah.

```Shell {user="$"}
plymouth-set-default-theme -l
```

atau

```Shell {user="$"}
ls /usr/share/plymouth/themes
```

Tema default adalah **spinner**, tapi bisa kalian ganti dengan mengedit `/etc/plymouth/plymouthd.conf`, contoh:

```TOML {file="plymouthd.conf"}
[Daemon]
Theme=solar
ShowDelay=5
```

Kalian bisa melihat preview dari tema dengan cara menekan `Ctrl+Alt+F6`, lalu login sebagai root, dan ketikkan perintah berikut.

```Bash {file="TTY"}
plymouthd
plymouth --show-splash
```

Untuk keluar dari preview, tekan lagi `Ctrl+Alt+F6` dan ketik `plymouth --quit`.

Setiap kalian mengganti tema, `initrd` harus di built ulang. Jalankan perintah di bawah ini.

```Shell {user="$"}
mkinicpio -P
```

## Tweaks

### Install Tema

Tema plymouth bisa diinstall secara manual dengan cara menaruh tema yang telah kalian unduh di `/usr/share/plymouth/themes`.

Dan jika tidak ingin repot, kalian juga bisa mengunduh tema dari AUR.

```Shell {user="$"}
yay -S plymouth-theme-arch-logo
```

Lalu jalankan perintah dibawah ini untuk mengubah tema dan build ulang initrd.

```Shell {user="$"}
plymouth-set-default-theme -R arch-logo
```

## Akhir Kata...

Mungkin itu aja yang bisa saya sampaikan, _**Smell Ya Later**_.