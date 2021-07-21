---
title: "Tips Dan Trik Gnome Shell"
date: 2021-07-21T09:08:16+08:00
comments: true
draft: true
author: "Yoga"
toc: true
kategori: []
topik: []
type: post
thumbnail: "/tips-dan-trik-gnome-shell/img/thumbnail.webp"
description: "Tips Dan Trik Gnome Shell"
summary: Ini adalah tips dan trik yang saya ketahui tentang gnome shell
---

![tips-dan-trik-gnome-shell](/tips-dan-trik-gnome-shell/img/thumbnail.webp)

## Pendahuluan

Saya mulai pakai Gnome ketika Gnome 40 rilis. Dan ketika saya coba, sangat cocok dengan workflow saya.

Gnome sangat customizable tapi juga terbatas disaat yang bersamaan.

Kalian bisa mengubah apapun di Gnome tapi tidak semuanya bisa kalian bisa ubah melalui settings.

Sebenarnya itu cukup baik, karena jika kalian bisa mengubah sesuatu dengan sangat mudah, hasilnya akan jadi seperti settings di Plasma.

Oke, tanpa berlama-lama, ini adalah beberapa tips dan trik yang sudah saya pelajari.

## Mengganti Logo Activities

Untuk mengganti logo activies, kalian bisa memasukkan teks di bawah ke `gnome-shell.css`.

{{<fileCode "CSS" "gnome-shell.css">}}#panel .panel-button#panelActivities{
        background-image: url(gambar);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: auto;
        color: transparent;
        background-color: transparent;
        box-shadow: none;
}{{</fileCode>}}

Ganti **gambar** dengan file yang ingin kalian jadikan logo activities.