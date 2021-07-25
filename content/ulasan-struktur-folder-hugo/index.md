---
title: "Ulasan Struktur Folder Hugo"
date: 2021-07-23T15:12:22+08:00
comments: true
draft: true
author: "Yoga"
toc: true
kategori: []
topik: []
type: post
thumbnail: "/ulasan-struktur-folder-hugo/img/thumbnail.webp"
description: "Ulasan Struktur Folder Hugo"
summary: Penjelasan tentang struktur folder pada Hugo 
---

![ulasan-struktur-folder-hugo](/ulasan-struktur-folder-hugo/img/thumbnail.webp)

Kali ini saya akan menjelaskan tentang struktur folder pada Hugo.

## Archetype

Sederhananya **archetypes** adalah folder yang berisi template untuk content kita.

Kalian bisa membuat sebuah content baru dengan menggunakan template yang ada di folder `archetypes`.

![archetypes](/ulasan-struktur-folder-hugo/img/archetypes.webp)

Saya memiliki tiga jenis template, ada **default**, **about**, dan **post**.

Template **default** pada Hugo sebernarnya tidak berbentuk folder tapi berbentuk file seperti **about** dan **post** pada gambar diatas. Itu adalah folder yang sudah saya ubah sehingga akan membuat folder `img` jika menggunakan template `default`. Tapi kalian harus memasukkan sebuah file agar folder `img` dapat dibuat.

Jika ingin membuat content dengan template **default**, perintah yang dijalankan adalah seperti berikut.

{{<scCode "Shell">}}hugo new judul-content{{</scCode>}}

Jika ingin membuat content dengan template **about**, perintah yang dijalankan adalah sebagai berikut. 

{{<scCode "Shell">}}hugo new about/judul-content.md{{</scCode>}}

Untuk **post** sama seperti **about**, cukup ganti about menjadi post.

Pastikan kalian menambahkan `.md` pada archetypes seperti about dan post (yang berbentuk file). Jika tidak, hugo akan memakai template **default**.

## Content

Folder **content** adalah tempat kita menyimpan artikel kita.