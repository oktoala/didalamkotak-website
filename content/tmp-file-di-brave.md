---
title: "Tmp File Di Brave"
date: 2021-04-09T22:42:51+08:00
comments: true
draft: true
author: "Yoga"
toc: true
type: post
sidebar: false
categories: ["Short"]
thumbnail: /img/thumbnail/tmp-file-di-brave.webp
description: "Tmp File Di Brave"
---

Mendownload file di chromium-based browser dan menyimpannya sebagai file tmp.

<!--more-->

![tmp-file-di-brave](/img/thumbnail/tmp-file-di-brave.webp)

Jika kalian pengguna Firefox {{<scIcon class="fa fa-firefox">}}, maka kalian pasti tahu jika Firefox memiliki fitur _download action_.

Fitur _download action_ memungkinkan kita untuk memilih aksi apa yang akan kita lakukan ketika mendownload suatu file.

Kita bisa menyimpan file di penyimpanan kita atau langsung membuka file tersebut menggunakan aplikasi yang mendukung format file tersebut.

Dan file yang langsung kita buka menggunakan aplikasi, akan tersimpan di folder {{<dir "tmp">}} dan akan terhapus saat device dimatikan.

![firefox-download-action](/img/firefox-download-action.jpg)

Tapi fitur itu tidak saya temukan di _chromium-based-browser_ {{<scIcon class="fa fa-chrome">}} seperti Google Chrome, Brave browser, Microsoft Edge, dll.

Karena fitur itu tidak ada, mari kita membuatnya sendiri menggunakan systemd.

## Membuat Folder

Buatlah folder {{<dir "tmp">}} di folder {{<dir "Downloads">}} dan folder {{<dir ".script">}} di direktori {{<scIcon class="fa fa-home">}} kalian.

{{<scCode "Shell">}}mkdir ~/Downloads/tmp ~/.script{{</scCode>}}

## Membuat Script Shell

Buatlah file {{<dir "chromium-remove-tmp.sh">}} di folder {{<dir ".script">}} lalu isi dengan teks di bawah.

{{<fileCode "Bash" "chromium-remove-tmp.sh">}}#!/bin/sh

rm -rf ~/Downloads/tmp/*{{</fileCode>}}

## Membuat Systemd Service

Masuk ke direktori {{<dir "/etc/systemd/system">}} lalu buat file {{<dir "brave-remove-tmp.service">}} lalu copy teks di bawah ke file tersebut.

{{<fileCode "TOML" "chromium-remove-tmp.service">}}[Unit]
Description=Remove /tmp/brave-tmp
DefautlDependencies=no
Before=shutdown.target reboot.target halt.target

[Service]
Type=oneshot
ExecStart=/home/iansyah/.script/brave-remove-tmp.sh

[Install]
WantedBy=halt.target reboot.target shutdown.target{{</fileCode>}}

Jika sudah, jalankan kita aktifkan 