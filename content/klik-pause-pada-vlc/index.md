---
title: "Klik Pause Pada VLC"
date: 2021-07-24T20:22:56+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: []
topik: []
type: post
thumbnail: "/klik-pause-pada-vlc/img/thumbnail.webp"
description: "Klik Pause Pada Vlc"
summary: Ini adalah tutorial untuk mengaktifkan klik untuk pause di VLC
---

![klik-pause-pada-vlc](/klik-pause-pada-vlc/img/thumbnail.webp)

## Download Plugin

Saya sarankan kalian punya [VLC](https://www.videolan.org/vlc/#download) versi 3.x sebelum menginstall plugin di bawah ini. Untuk versi lain bisa kalian baca bawah.

### Untuk Windows

Unduh plugin untuk windows [32bit](https://github.com/nurupo/vlc-pause-click-plugin/releases/download/2.2.0/vlc-3.0-32bit-win.zip)
ataupun [64bit](https://github.com/nurupo/vlc-pause-click-plugin/releases/download/2.2.0/vlc-3.0-64bit-win.zip).

Secara default, VLC 32bit harusnya ada di `C:\Program Files (x86)\VideoLAN\VLC\` dan untuk 64bit ada di `C:\Program Files\VideoLAN\VLC\`
dan extract file yang sudah diunduh ke folder di atas.

### Untuk MAC

Untuk plugin-nya [di sini](https://github.com/nurupo/vlc-pause-click-plugin/releases/download/2.2.0/vlc-3.0-macosx.zip) dan extract ke folder `/Applications/VLC.app/Contents/MacOS/plugins/`.

### Untuk Linux

Pada Debian/Ubuntu, install dulu beberapa library.

{{<scCode "Shell">}}sudo apt-get install build-essential pkg-config libvlccore-dev libvlc-dev{{</scCode>}}

Jalankan perintah di bawah kalau kalian gak mau repot.

{{<scCode "Shell">}}sudo apt-get install git
git clone https://github.com/nurupo/vlc-pause-click-plugin
cd vlc-pause-click-plugin
git checkout \
  "$(git tag --list | grep -P '^(\d+).(\d+).(\d+)$' | \
    sed "s/\./ /g" | \
    sort -snk3,3 | sort -snk2,2 | sort -snk1,1 | \
    tail -n 1 | \
    sed 's/ /\./g')"
{{</scCode>}}

Dan untuk Arch based, cukup jalankan perintah di bawah ini.

{{<scCode "Shell">}}yay -S vlc-pause-click-plugin{{</scCode>}}

## Konfigurasi

+ Buka VLC kalian, lalu pergi ke **Tools {{<scIcon class="fa fa-arrow-right">}} Preferences {{<scIcon class="fa fa-arrow-right">}} 
Show Settings {{<scIcon class="fa fa-arrow-right">}} All.**
    ![advanced](/klik-pause-pada-vlc/img/advanced.webp)
+ Lalu pada Advanced Settings, pergi ke **Interface {{<scIcon class="fa fa-arrow-right">}} Control Interfaces {{<scIcon class="fa fa-arrow-right">}}**. Lalu centang pada **Pause/Play video on mouse click**.
    ![interface](/klik-pause-pada-vlc/img/interface.webp)
+ Setelah itu, pergi ke **Video {{<scIcon class="fa fa-arrow-right">}} Filters**. Lalu centang pada **Pause/Play video no mouse click**.
    ![video](/klik-pause-pada-vlc/img/video.webp)
+ Restart VLC kalian dan cobalah putar video dan klik pada layarnya.

## Sumber

{{<linkBlank "https://github.com/nurupo/vlc-pause-click-plugin" "https://github.com/nurupo/vlc-pause-click-plugin">}}
