---
title: "Belajar Vi IMproved"
date: 2021-01-22T16:35:49+08:00
comments: true
draft: false
author: "Yoga"
toc: true
thumbnail: /img/thumbnail/belajar-vi-improved.jpg
---

Kita akan belajar tentang vim.
<!--more-->

![belajar-vi-improved](/img/thumbnail/belajar-vi-improved.jpg)

## Pendahuluan

[Vim](https://en.wikipedia.org/wiki/Vim_(text_editor)) adalah sebuah teks editor terminal dan merupakan versi pembaharuan dari [vi](https://en.wikipedia.org/wiki/Vi) 

Memiliki beberapa fitur tambahan, seperti syntax highlighting, native scripting (vimscript), visual mode untuk seleksi teks, vimdiff untuk membandingkan file, dll.

Alasan saya membuat tulisan ini karena saya juga sedang belajar vim.

Jadi, daripada saya nanti lupa, lebih baik saya tulis.

## Installasi

Kalian bisa mendownload untuk Windows, Mac, dan Linux di [https://www.vim.org/download.php](https://www.vim.org/download.php).

Jika kalian gak mau ribet, kalian bisa install di Windows menggunakan [chocolatey](/chocolatey-package-manager-untuk-windows), menggunakan Mac menggunakan [brew](https://brew.sh/), dan menggunakan package manager di masing-masing distro Linux.

## Navigasi Dasar

Kalian bisa menggerakkan kursor menggunakan: 

+ `h` untuk ke kiri.
+ `j` untuk ke bawah. 
+ `k` untuk ke atas.
+ `l` untuk ke kanan.

Mungkin seperti ini gambarannya

![vim-keyboard](/img/vim-keyboard.jpg)

### Motion

Kalian juga bisa navigasi menggunakan:

+ `w` untuk kursor bergerak ke huruf pertama dari kata selanjutnya.
+ `e` untuk kursor bergerak ke huruf terakhir dari kata selanjutnya.
+ `$` untuk bergerak ke akhir baris.

Perintah diatas bisa digabungkan dengan perintah seperti [delete](#menghapus-teks), [change operator](#change-operator), dan [copy and paste](#copy-dan-paste).

Kalian juga bisa menggabungkannya menggunakan angka:

+ `2w` untuk kursor bergerak ke huruf pertama dari dua kata selanjutnya.
+ `5e` untuk kursor bergerak ke huruf terakhir dari lima kata selanjutnya.
+ `9$` untuk kursor bergerak ke akhir baris ke sembilan dari kursor berada.
+ `0`  untuk kursor bergerak awal baris.

## Keluar dan Menyimpan

Kalian bisa keluar dari vim dengan menekan tombol `esc` lalu ketikan perintah-perintah berikut:

+ `:q` untuk keluar jika kalian belum mengubah apapun.
+ `:q!` untuk keluar tanpa menyimpan.
+ `:wq` untuk menyimpan dan keluar.

Lalu tekan enter.

Kalian juga bisa menyimpan teks dengan perintah:

+ `:w` untuk menyimpan
+ `:w namaFile` untuk menyimpan dengan nama file lain. Mirip Save as.

## Editing

### Memasukkan teks

Kalian akan masuk ke mode `--INSERT--` jika menekan huruf-huruf ini:

+ `i` untuk input teks.
+ `a` untuk menambah teks.
+ `o` untuk menambah teks di baris baru di bawah kursor.
+ `O` untuk menambah teks di baris baru di atas kursor.

`o` dan `O` disebut open command.

### Menghapus Teks

Kalian bisa menghapus teks dengan cara-cara berikut:

+ `x` untuk menghapus satu huruf pada kursor.
+ `dw` untuk menghapus satu kata dari kursor sampai huruf terakhir kata tersebut.
+ `de` untuk menghapus dari kursor sampai akhir kata tersebut.
+ `d$` untuk menghapus teks dari kursor sampai akhir baris.
+ `dd` untuk menghapus satu baris.

Yang berbeda dari `dw` dan `de` hanyalah letak kursor setelah menghapus. Jika `dw`, kursor akan berada di huruf pertama kata selanjutnya, sedangkan `de`, kursor akan berada sebelum huruf pertama kata selanjutnya.

Semua teks yang terhapus dengan cara-cara diatas, akan tersimpan di vim register. Kalian bisa memakainya ulang dengan perintah [put](#put-dan-replace).

### Merging File

Kalian bisa menambahkan teks dari suatu file kedalam file yang sedang kalian edit.

Gunakan perintah `:r namaFile`.

### *Undo* dan *Redo*

+ `u` untuk *undo*.
+ `U` untuk meng-*undo* semua perubahan pada baris.
+ `Ctrl+r` untuk *redo*.

### *Put* dan *Replace*

+ `p` untuk menaruh teks yang telah tersimpan di vim register.
+ `r` ditambah huruf yang ingin menggantikan huruf yang ada di kursor.
+ `R` untuk mengganti lebih dari satu karakter.

Jadi jika kalian menekan `re`, maka huruf di kursor akan terganti menjadi `e`.

### *Change Operator*

+ `cc` mirip seperti `dd`, bedanya setelah teks terhapus, kalian akan langsung masuk ke mode `--INSERT--`.

Hal yang sama juga berlaku seperti `cw`, `ce`, dan `c$`.

### *Substitute*

+ `:s/old/new/g` untuk mengganti semua kata/kalimat pada baris.
+ `:#,#s/old/new/g` untuk mengganti semua kata/kalimat dengan range #,#.
+ `:%s/old/new/g` untuk mengganti semua kata/kalimat pada file.
+ `:%s/old/new/gc` untuk mengganti semua kata/kalimat pada file dengan konfirmasi.

### *Copy* dan *Paste*

+ `y` untuk mengcopy satu karakter.
+ `yy` untuk mengcopy satu baris.

Kalian bisa menggabungkannya dengan [motion](#motion) dan [visual mode](#seleksi-teks--visual-mode).

Dan untuk *paste*, kalian bisa menggunakan `p` atau [put](#put-dan-replace).

## Navigasi Kursor

### Searching

+ Di mode `--NORMAL--`, tekan `/`, lalu ketikan kata ingin kalian cari
+ `n` untuk mencari kalimat yang sama, tekan,
+ `N` untuk mencari kalimat yang sama dengan arah yang berlawanan,
+ `?` untuk mencari kalimat ke arah mundur, tekan ,
+ `Ctrl+O` untuk kembali ke tempat dimana kalian mulai. Tekan terus untuk kembali ke belakang.
+ `Ctrl+I` sama seperti `Ctrl+O`, hanya berbeda arahnya.

### Lokasi Kursor & Kurung

+ `Ctrl+G` untuk melihat lokasi kursor dan status file,
+ `G` untuk ke baris paling akhir dari file,
+ `gg` untuk ke baris paling awal dari file,
+ `8G` untuk ke baris no. 8.

Untuk mengetahui pasangan kurung, tekan `%`.

## Eksekusi Command

Kalian bisa mengeksekusi perintah shell seperti `ls`, `dir`, `cd`, dll.

Cukup tekan `:!` lalu diikuti dengan perintah shell atau cmd.

Setelah mengeksekusi perintah, tekan enter untuk kembali ke vim.

## Seleksi Teks / *Visual Mode*

Kalian bisa menyeleksi teks menggunakan `v`.

Kalian bisa menggabungkan `v` dengan perintah-perintah diatas dengan menekan `:`.

Maka akan muncul `:'<,'>` di bagian bawah layar .

Lalu ketikan perintah seperti `dd` untuk menghapus, `w namaFile` untuk menyimpan teks yang diseleksi ke file lain dengan nama file `namaFile`.

## Penutup

Mungkin itu aja dulu perintah-perintah vim yang bisa tuliskan untuk kali ini.

Sebenarnya masih ada banyak lagi yang bisa dibahas, seperti recording, vimrc, dll.

Jika ada yang kalian bingungkan, silahkan komentar dibawah.
