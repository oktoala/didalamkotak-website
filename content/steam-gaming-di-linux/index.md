---
title: "Steam Gaming Di Linux"
date: 2021-08-06T10:22:19+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Linux]
topik: [steam, tips, linux, steam, proton]
type: post
thumbnail: "/steam-gaming-di-linux/img/thumbnail.webp"
description: "Steam Gaming Di Linux"
summary: Konfigurasi Steam kalian supaya bisa memainkan semua game AAA di Linux.
---

Jika kalian berpikir bahwa Linux tidak bisa dijadikan platform untuk bermain game maka kalian salah besar.

Dengan munculnya [SteamDeck](https://www.steamdeck.com/en/), pintu gaming di Linux sangat terbuka besar.

Karena game-game yang memiliki _Easy Anti-Cheat_ bisa dimainkan di SteamDeck, maka tidak menutup kemungkinan bahwa fitur ini juga akan
bisa di pakai di Linux secara general.

Semua game windows bisa dimainkan karena compability layer bernama Proton. Proton sebenarnya adalah hasil kembangan dari Wine tapi khusus untuk gaming.

Untuk proton yang kita pakai kali ini adalah sebuah custom Proton yang bernama Proton GE.

## Installasi

Pastikan kalian punya Steam.

{{<shell "$">}}sudo pacman -S steam{{</shell>}}

Jika sudah, pergi ke halaman github [release](https://github.com/GloriousEggroll/proton-ge-custom/releases)
dari ProtonGE.

![release](/steam-gaming-di-linux/img/release.webp)

Buat folder `~/.steam/root/compatibilitytools.d` jika tidak ada.

{{<shell "$">}}cd ~/.steam/root && mkdir compatibilitytools.d{{</shell>}}

Lalu extract isi file `.tar.gz` yang sudah kalian unduh, ke dalam folder `~/.steam/root/compatibilitytools.d`.

![extract](/steam-gaming-di-linux/img/extract.webp)

## Aktivasi

Jika kalian ingin mengaktifkan Proton GE untuk semua game, buka Steam kalian, lalu pergi ke **View {{<scIcon class="fa fa-arrow-right">}} Settings {{<scIcon class="fa fa-arrow-right">}} Steam Play.** 

Pada bagian **Advanced**, centang pada **{{<scIcon class="fa fa-check-square">}} Enable Steam Play for all other titles** dan pilih versi Proton yang kalian inginkan.

![steamplay](/steam-gaming-di-linux/img/steamplay.webp)

Dan jika kalian ingin mengaktifkan versi Proton untuk spesifik game, klik kanan pada judul game yang kalian inginkan, lalu pilih 
**Properties... {{<scIcon class="fa fa-arrow-right">}} Compability.**

Lalu centang pada **{{<scIcon class="fa fa-check-square">}} Force the use of a specific Steam Play compability tool** dan pilih versi
Proton yang kalian inginkan.

![steamplaygame](/steam-gaming-di-linux/img/steamplaygame.webp)

## Tambahan

Jika kalian ingin versi Proton mana yang berfungsi untuk setiap game, kalian bisa mencarinya di [ProtonDB](https://www.protondb.com/)

![protondb](/steam-gaming-di-linux/img/protondb.webp)

Untuk tambahan lebih lanjut bisa kalian baca [disini](https://github.com/GloriousEggroll/proton-ge-custom).