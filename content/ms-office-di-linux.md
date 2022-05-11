---
title: "MS Office Di Arch Linux"
date: 2021-04-02T10:56:52+08:00
comments: true
draft: false
author: "Yoga"
toc: true
type: post
kategori: ["Linux"]
tags:
    - linux
    - arch
    - windows
    - microsoft-office
    - libreoffice
    - word
    - powerpoint
    - excel
    - wine
    - playonlinux
description: "Cara menginstall MS Office di Arch Linux"
summary: "Cara menginstall MS Office di Arch Linux"
thumbnail: /img/thumbnail/ms-office-di-linux.jpg
---

![ms-office-di-linux](/img/thumbnail/ms-office-di-linux.jpg)


Jika kalian masih kuliah, kalian pasti akan sering membuat laporan, presentasi, dsb.

Maka kalian akan membutuhkan aplikasi word processor, presentation, dan spreadsheet.

Di linux sudah ada beberapa seperti Libre Office, Only Office, dan WPS Office.

Tapi permasalahannya adalah **`kolaborasi`**

## Pendahuluan

Karena kebanyakan tugas dikerjakan secara berkelompok, maka kolaborasi itu penting.

Jika anggota kelompok memakai aplikasi A untuk membuat tugas dan saya memakai aplikasi B,
maka kolaborasi itu tidak akan tercapai.

Jadi saya memutuskan untuk memakai aplikasi yang dipakai oleh mayoritas anggota, yaitu **MS Office**.

## LibreOffice Vs MS Office

Saya tahu Libre bisa membaca format .docx dengan baik. Dan menurut saya Libre jauh lebih gampang saat membuat nomer halaman.

Tapi masalahnya adalah saat saya mengirimkan file .docx itu ke anggota yang menggunakan MS Office, filenya jadi berantakan.

Jadi, kesimpulannya:

MS Office -> Libre Office ✅

Libre -> MS Office ❌

## Installasi

Kita akan menggunakan PlayOnLinux, sebuah aplikasi GUI untuk Wine. Jadi, sebenarnya ini adalah Wine tapi ada GUI.

```Shell {user="$"}
sudo pacman -S wine playonlinux
```

Kalian mungkin juga butuh beberapa hal ini untuk diinstall.

```Shell {user="$"}
sudo pacman -S winetrick zenity
```

Jika sudah terinstall, 

1. Buka PlayOnLinux
2. Pilih **_Install a Program_**
3. Klik **_Install a non-listed program_**
4. Lalu klik next sampai kalian diminta menginputkan nama winebottle kalian (Kalian bebas menamainya apa saja)
5. Klik next sampai kalian diminta memilih arsitektur aplikasi kalian. Kalau saya memilih 32-bit karena MS Office saya 32-bit.

{{<webm "/webm/playonlinux-gif1.webm">}}

Jika sudah kalian akan diminta untuk mencari aplikasi yang diinstall. Klik _browse_ lalu cari file.exe kalian. Lalu lakukan installasi seperti biasa sampai selesai.

## Penampakan

![word](/img/word-test.jpg)

![ppt](/img/powerpoint-test.jpg)

![excel](/img/excel-test.jpg)


## Troubleshooting

### Powerpoint Problem

Jalankan perintah di bawah ini dengan mengganti `namaFolder` dengan nama winebottle yang kalian masukkan di point no. 3

```Shell {user="$"}
WINEPREFIX=~/.PlayOnLinux/wineprefix/namaFolder winetricks
```

Jika sudah, maka akan muncul window baru. Lalu klik **Select the default prefix** -> **Install a Windows DDL or component** ->
pilih **dotnet20** dan **msxml6**. Lalu klik OK.

Mungkin kalian akan menemukan beberapa peringatan error, lewati saja dengan klik OK

{{<webm "/webm/winetricks-ddl.webm">}}

Jika sudah, jangan keluar dulu dari winetricks. Klik **Run winecfg** -> **Libraries** -> Lalu ketikan **riched20** lalu klik **Add**.

{{<webm "/webm/winecfg-riched20.webm">}}

Jika sudah, seharusnya kalian sudah bisa membuka Powerpoint.

### Font Problem

Jalankan winetricks lagi, lalu pilih **Install a font** > **corefont**.

{{<webm "/webm/winetricks-font.webm">}}

## Penutup

Jadi itu cara saya menginstall Microsoft Office di Arch Linux.

Sejauh ini programnya dapat berjalan lancar asalkan kalian tidak mengedit aplikasinya menggunakan [menulibre](https://aur.archlinux.org/packages/menulibre/)
karena shortcut kalian akan langsung menjadi `File not found`

Oke itu aja, sekian dan terima kasih.