---
title: "WPS Skin Di Linux"
date: 2021-09-24T11:41:44+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Tips]
topik: [wps, office, linux]
type: post
thumbnail: "/wps-skin-di-linux/img/thumbnail.webp"
description: "Wps Skin Di Linux"
summary: Cara menginstall skin di WPS Office di Linux yang sebenarnya hanya bisa dilakukan di Mac atau Windows
---

![wps-skin-di-linux](/wps-skin-di-linux/img/thumbnail.webp)

Jika kalian memakai WPS Office di Linux dan Windows kalian pasti akan sadar jika di Linux tidak memiliki skin sebanyak di Windows.

Hanya ada light theme...

Tapi semua skin itu bisa kalian install secara manual.

## Installasi

Jika kalian memakai Flatpak, kalian bisa mengikuti cara [di sini](https://github.com/Prayag2/wps-skin-installer).

Atau jika kalian menginstall WPS Office menggunakan package manager, kalian bisa ikuti cara di bawah ini.

Pertama, clone repository di bawah ini.

{{<shell "$">}}git clone https://github.com/oktoala/wps-skin-installer.git ~/wps-skin{{</shell>}}

Lalu masuk ke dalam folder repositori yang sudah diclone tadi lalu ubah `script.sh` agar bisa dieksekusi secara root.

{{<shell "$">}}cd ~/wps-skin
sudo chmod +x script.sh
{{</shell>}}

Jika sudah jalankan menggunakan sudo atau sebagai root user.

{{<shell "$">}}sudo ./script.sh{{</shell>}}

Kemudian pilih skin yang kalian mau.

![run](/wps-skin-di-linux/img/run.webp)

## Testing

Jika sudah, kalian bisa buka WPS Office kalian.

![review](/wps-skin-di-linux/img/review.webp)

Untuk yang skin Dark agak sedikit buggy dan tidak konsisten.

Tapi tidak masalah selama mata saya nyaman melihatnya.😄
