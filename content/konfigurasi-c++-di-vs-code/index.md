---
title: "Konfigurasi C++ Di VS Code"
date: 2021-07-18T09:24:06+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Programming]
topik: [programming, vscode, linux, windows]
type: post
thumbnail: "/konfigurasi-c++-di-vs-code/img/thumbnail.webp"
description: "Konfigurasi C++ Di vs Code"
---

Kali ini kita akan membahas cara konfigurasi lingkungan pemrograman C++ di Visual Studio Code.

<!--more-->

![konfigurasi-c++-di-vs-code](/konfigurasi-c++-di-vs-code/img/thumbnail.webp)

C++ di Visual Studio Code itu tidak memiliki fitur extension yang lumayan bagus.

Sebenarnya ada extension yang disediakan Microsoft yang sudah memiliki fitur intellisense, debugger, dan code browsing.

Tapi untuk pemula berurusan dengan debugger itu memusingkan.

Tidak seperti Java ataupun Python yang memiliki tombol run yang memudahkan pemula untuk tahu bagaimana menjalankan program mereka.

Tapi bukan berarti tidak ada yang bisa kita lakukan untuk memulai pemrograman C++ di VS Code.

## Install Compiler

Untuk Windows, kalian bisa install [mingw-w64](http://mingw-w64.org/doku.php) untuk mendapatkan compiler dan debugger.

Untuk linux, install `gcc` dan `gdb`.

**Untuk Ubuntu**

{{<scCode "Shell">}}sudo apt install gcc gdb{{</scCode>}}

**Untuk Arch**

{{<scCode "Shell">}}sudo pacman -S gcc gdb{{</scCode>}}

## Install Extension

Buka Visual Studio Code, buka Extension (Ctrl+Shift+x), lalu cari C++ dan install.

![extension](/konfigurasi-c++-di-vs-code/img/extension.webp)

## Konfigurasi

### Membuat file

Sekerang kita akan membuat sebuah project baru. Buat saja sebuah folder bernama `Coba`.

Di dalam folder tersebut buat lagi dua folder dengan nama masing-masing `bin` dan `src`.

Di dalam folder `src` akan berisi file `.cpp` dan hasil compilenya akan ditaruh di folder `bin`.

![folder](/konfigurasi-c++-di-vs-code/img/folder.webp)

Program yang sudah kita buat sebenarnya sudah dapat dijalankan dengan perintah di bawah.

{{<scCode "Shell">}}g++ src/main.cpp -o main && ./main{{</scCode>}}

![compile](/konfigurasi-c++-di-vs-code/img/compile.webp)

Tapi kalian mungkin akan malas jika setiap kali ingin melihat hasil tapi harus mengetikkan perintah yang panjang seperti di atas.

Maka dari kita akan membuat sebuah **build task**.

### Membuat Build Tasks

Tekan `Ctrl+Shift+B` lalu tekan {{<scIcon class="fa fa-cog">}} pada `C/C++: g++ build active file`.

![build](/konfigurasi-c++-di-vs-code/img/build.webp)

Maka akan muncul folder baru bernama `.vscode` dengan file `tasks.json` di dalamnya.

Ganti saja semua teks di dalam `tasks.json` menjadi teks di bawah ini.

{{<fileCode "JSON" "tasks.json">}}{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Compile C++",
            "type": "shell",
            "command": "g++",
            "args": [
                "${relativeFile}",
                "-o",
                "./bin/${fileBasenameNoExtension}"
            ]
        },
        {
            "label": "Run C++",
            "type": "shell",
            "command": "./bin/${fileBasenameNoExtension}",
            "dependsOn":["Compile C++"],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}{{</fileCode>}}


Perbedaan untuk di Windows mungkin hanya pada path seperator yang menjadi `\` dan `${fileBasenameNoExtension}.exe`.

Jika sudah, simpan lalu tekan `Ctrl+Shift+b` maka program kalian dikompilasi dan dijalankan secara langsung.

![run](/konfigurasi-c++-di-vs-code/img/run.webp)

Jika kaliat lihat gambar diatas, hasil kompilasi berada di dalam folder `bin`.

## Akhir Kata...

Oke mungkin itu aja yang bisa saya sampaikan. **_Smell ya later._**