---
title: "Pemrograman Processing Di VSCode"
date: 2021-09-10T13:36:08+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Programming]
topik: [processing, vscode]
type: post
thumbnail: "/pemrograman-processing-di-vs-code/img/thumbnail.webp"
description: "Pemrograman Processing Tapi Di vs Code"
summary: Konfigurasi Processing menggunakan Visual Studio Code
---

![pemrograman-processing-tapi-di-vs-code](/pemrograman-processing-di-vs-code/img/thumbnail.webp)

Singkat cerita saya punya mata kuliah yang harus menggunakan [Processing](https://processing.org/ "blank")

Jadi saya install dan tampilannya agak sedikit mengganggu.

![processingIde](/pemrograman-processing-di-vs-code/img/processingIde.webp)

Yaa... **Light Theme**.

Meskipun begitu ternyata kalian bisa mengginstallnya di Visual Studio Code.

## Installasi

Unduh dulu [Processing](https://processing.org/download) sesuai dengan sistem operasi kalian lalu install seperti biasa.

Jika sudah, tambahkan `processing-java` ke PATH. Untuk mengetahui jika sudah berhasil, cukup ketik `processing-java` di terminal maka akan
muncul tampilan seperti gambar di bawah.

![processingJava](/pemrograman-processing-di-vs-code/img/processingJava.webp)

Jika kalian ingin memakai Processing menggunakan IDE yang disediakan oleh Processing (bukan VS Code) pastikan kalian menginstall Java yang versi Oracle (bukan OpenJDK). Saya menyarankan yang versi 8.

## Konfigurasi VS Code

Pertama kalian perlu menginstall extensions untuk Processing.

![extensions](/pemrograman-processing-di-vs-code/img/extensions.webp)

Jika sudah, buat sebuah file baru dengan nama `Processing.pde`.

Lalu coba tambahakan text di bawah ke dalam file tersebut.

```Arduino {file="Processing.pde"}
int u = 60;
boolean showGrid = true;

void setup() {
    size(600, 600);
}

void draw() {
    background(255);
    if (showGrid) drawGrid();
    strokeCap(SQUARE);
    strokeWeight(1.5 * u);

    stroke(5, 100, 255);
    bezier(4 * u, 1 * u, 7 * u, 1 * u, 7 * u, 5 * u, 4 * u, 5* u);

    stroke(30, 50, 170);
    line(1 * u, 6 * u, 4 * u, 2 * u);

    stroke(130, 175, 255);
    line(1 * u, 3 * u, 2 * u, 5 * u);
    
}

void drawGrid() {
    strokeWeight(1);
    noFill();
    stroke(200);
    for (int col = 0; col < 9; ++col) {
        line(col * u, 9, col * u, 8* u);
    }
    for (int row = 0; row < 9; ++row) {
        line(0, row* u, 8*u, row*u);
    }
}
```

Jika sudah, kalian harus membuat sebuah task file.

Tekan `Ctrl+Shift+P` lalu ketikkan `Processing: Create Task File`.

![createtask](/pemrograman-processing-di-vs-code/img/createtask.webp)

Maka akan muncul sebuah folder baru bernama `.vscode`

## Testing

Untuk menjalankannya, cukup tekan `Ctrl+Shif+B`.

Dan... 

![run](/pemrograman-processing-di-vs-code/img/run.webp)

Berhasil!! 🎉

Kalian juga bisa lihat jika terdapat sebuah folder baru bernama `out` yang dimana berisi sebuah file Java.

Jadi sebenarnya kalian melakukan pemrograman di Java. Tapi yang membuat berbeda hanya di compilernya.

File java di folder out tidak akan bisa kalian jalankan langsung menggunakan compiler dari Java.

## Akhir Kata...

Jadi VS Code memang adalah salah satu teks editor paling powerful untuk saat ini.

Saya bersikeras ingin menggunakan VS Code karena butuh snippets dan Vim. 😅.

Oke, mungkin itu aja. _Bye_.



