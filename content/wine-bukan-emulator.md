---
title: "WINE Bukan Emulator"
date: 2020-10-06T18:52:03+08:00
comments: true
draft: false
thumbnail: img/thumbnail/wine-bukan-emulator.jpg
author: "Yoga"
kategori: ["Linux"]
topik: [linux, wine, emulator]
toc: true
type: post
description: "Wine Is Not an Emulator"
summary: "Wine Is Not an Emulator"
---

 ![wine-hq-logo](/img/winehq-logo.png)


Jika kalian migrasi dari Windows ke Linux, mungkin kalian berpikir apakah bisa menggunakan aplikasi
Windows di Linux? Jawabannya... ya dan tidak.

Kalian mungkin tidak bisa langsung klik 2x ke aplikasi yang baru kalian unduh dan berharap itu akan langsung
terinstall.

Tapi akan lain ceritanya jika kalian memakai Wine.

## Pendahuluan

Saya pikir dulu Wine merupakan singkatan dari **Win**dows **E**mulator. Tapi ternyata saya salah.

Wine merupakan akronim dari **W**ine **I**s **N**ot an **E**mulator. Ya, Wine bukanlah emulator.

Wine adalah sebuah _compability layer_ yang bisa menjalankan aplikasi Windows.

Ketimbang menjalankan seluruh sistem
pada virtual machine, Wine membuat aplikasi berpikir kalau mereka sedang berjalan di Windows.

Mungkin ilustrasinya bisa dilihat di bawah.

![wine-layer](/img/wine-layer.png)

Karena Wine bukanlah emulator, jadi tidak ada _performance/memory penalties_ yang biasanya ada pada emulator dan berjalan seperti program asli/_native program_.

## Installasi

### Debian/Ubuntu Based

```Bash 
sudo apt install wine
```

### Arch Based

```Bash 
sudo pacman -S wine
```

## Konfigurasi

Ada beberapa hal yang perlu dipelajari sebelum memakai Wine, yaitu WINEPREFIX dan WINEARCH.

### WINEPREFIX

Wine akan menaruh file konfigurasinya di ``~/.wine`` secara default. Direktori tersebut "Wine Prefix" atau "Wine Bottle".

Tapi kalian bisa menaruhnya di direktori lain dengan `WINEPREFIX=~/direktoriLain` pada environment variabelnya.

```Bash 
WINEPREFIX=~/direktoriLain wine aplikasiWindows.exe
```

### WINEARCH

Wine akan memulai aplikasi dengan 64-bit environment secara default. Tapi kalian bisa mengubahnya menjadi `WINEARCH=win32` atau `WINEARCH=win64` pada environment variabelnya.

```Bash 
WINEARCH=win32 WINEPREFIX=~/direktoriLain wine aplikasiWindows.exe
```

## Testing

Mari kita coba intall game Windows yang gratisan yaitu [Deltarune](https://www.deltarune.com/ "blank").

Pastikan kalian unduh yang untuk Windows dan juga pastikan kalian sudah main Undertale. :smile:

Saya menyimpan filenya di folder Download dengan nama deltarune.exe.

```Bash 
WINEARCH=win32 WINEPREFIX=~/deltarune wine deltarune.exe
```

Saya pakai 32-bit, karena Deltarune bisa berjalan pada 32-bit dan juga karena versi yang 32-bit lebih stabil.

Kalian tunggu aja sampai gamenya selesai terinstall.

Dan...

![deltarune-pict](/img/deltarune-pict.png)

Selamat kalian telah memasang aplikasi Windows di Linux!! :+1:

Biasanya wine akan membuat sendiri shortcut untuk aplikasinya di "Start Menu".

Jadi kalian tidak perlu menjalankan perintah di atas untuk memainkan gamenya.

## Kesimpulan

Kalian bisa menginstall aplikasi Windows di Linux hanya dengan beberapa perintah. Dan sudah banyak aplikasi yang dapat dijalankan di Linux.

Tapi kalian tidak bisa menginstall aplikasi yang terlalu kompleks seperti Microsoft Office dan Adobe Suite.

Karena saya juga biasanya menggunakan wine untuk game dan kalau tidak mau repot, kalian bisa pakai Steam, yang dimana sudah banyak game yang bisa dimainkan di Linux.

Jadi, sudahkah kalian mencoba Wine?.
