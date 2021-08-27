---
title: "Cara Aktifkan Echo Cancellation Di Linux"
date: 2021-08-27T10:01:57+08:00
comments: true
draft: false
author: "Yoga"
toc: true
sidebar: false
kategori: [Short, Linux]
topik: [short, linux, echo, mic]
type: post
thumbnail: "/cara-aktifkan-echo-cancellation-di-linux/img/thumbnail.webp"
description: "Cara Aktifkan Echo Cancellation Di Linux"
summary: Berikut adalah cara mengaktifkan fitur Echo Cancellation di Linux
---

Kalian pasti tidak ingin suara bising di luar mengganggu suara di microphone kalian. Maka dari itu kita akan mengaktifkan fitur **Echo Cancellation**.

## Mengaktifkan Module

Cek apakah module sudah ada atau belum dengan perintah `pacmd` lalu ketik `list-modules`. Lalu cari baris yang memiliki nama `<module-echo-cancel>`.

Jika tidak ada, tambahkan teks di bawah ke dalam file `/etc/pulse/default.pa.d/noice-cancellation.pa`

{{<fileCode "Bash" "noice-cancellation.pa">}}### Enable Echo/Noise-Cancellation
load-module module-echo-cancel use_master_format=1 aec_method=webrtc aec_args="analog_gain_control=0\ digital_gain_control=1" source_name=echoCancel_source sink_name=echoCancel_sink
set-default-source echoCancel_source
set-default-sink echoCancel_sink{{</fileCode>}}

Jika sudah, restart Pulseaudio.

{{<shell "$">}}pulseaudio -k
pulseaudio --start{{</shell>}}

Seharusnya input dari mic kalian terlihat kurang lebih seperti ini.

![echo](/cara-aktifkan-echo-cancellation-di-linux/img/echo.png)

