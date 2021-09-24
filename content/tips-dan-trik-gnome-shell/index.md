---
title: "Tips Dan Trik Gnome Shell"
date: 2021-07-21T09:08:16+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: [Tips]
topik: [gdm, gnome, tips, linux]
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

## Mengganti Overview Background

Untuk mengganti background overview, cukup tambahkan teks di bawah ini ke `gnome-shell.css`.

{{<fileCode "CSS" "gnome-shell.css">}}#overviewGroup {
        background-color: #1d1e25;
        background-image: url(gambar);
        background-repeat: no-repeat;
        background-size: cover;
}{{</fileCode>}}

Ganti **gambar** dengan file yang ingin kalian jadikan background dari overview.

## Mengubah GDM Background

Untuk yang satu ini agak ribet dan ada kemungkinan untuk tereset jika kalian mengupgrade gdm.

Pertama buat shell file seperti di bawah ini dan jalankan.

{{<fileCode "Bash" "extractgst.sh">}}#!/bin/sh
gst=/usr/share/gnome-shell/gnome-shell-theme.gresource
workdir=${HOME}/shell-theme

for r in `gresource list $gst`; do
	r=${r#\/org\/gnome\/shell/}
	if [ ! -d $workdir/${r%/*} ]; then
	  mkdir -p $workdir/${r%/*}
	fi
done

for r in `gresource list $gst`; do
        gresource extract $gst $r >$workdir/${r#\/org\/gnome\/shell/}
done{{</fileCode>}}

Jika sudah, maka akan muncul folder `shell-theme` di Home kalian.

![shell-theme](/tips-dan-trik-gnome-shell/img/shell-theme.webp)

Lalu edit (buat baru jika tidak ada) file `gnome-shell-theme.gresource.xml`.

{{<fileCode "XML" "gnome-shell-theme.gresource.xml">}}&lt;?xml version="1.0" encoding="UTF-8"?&gt;
<gresources>
  <gresource prefix="/org/gnome/shell/theme">
    <file>calendar-today.svg</file>
    <file>checkbox-focused.svg</file>
    <file>checkbox-off-focused.svg</file>
    <file>checkbox-off.svg</file>
    <file>checkbox.svg</file>
    <file>workspace-placeholder.svg</file>
    <file>gnome-shell.css</file>
    <file>FILENAME</file>
    <file>gnome-shell-high-contrast.css</file>
    <file>icons/scalable/status/eye-not-looking-symbolic.svg</file>
    <file>icons/scalable/status/eye-open-negative-filled-symbolic.svg</file>
    <file>icons/scalable/status/message-indicator-symbolic.svg</file>
    <file>icons/scalable/status/keyboard-enter-symbolic.svg</file>
    <file>icons/scalable/status/keyboard-hide-symbolic.svg</file>
    <file>icons/scalable/status/keyboard-layout-filled-symbolic.svg</file>
    <file>icons/scalable/status/keyboard-shift-filled-symbolic.svg</file>
    <file>icons/scalable/status/keyboard-caps-lock-filled-symbolic.svg</file>
    <file>icons/scalable/actions/color-pick.svg</file>
    <file>icons/scalable/actions/pointer-double-click-symbolic.svg</file>
    <file>icons/scalable/actions/pointer-drag-symbolic.svg</file>
    <file>icons/scalable/actions/pointer-primary-click-symbolic.svg</file>
    <file>icons/scalable/actions/pointer-secondary-click-symbolic.svg</file>
    <file>no-events.svg</file>
    <file>no-notifications.svg</file>
    <file>pad-osd.css</file>
    <file>process-working.svg</file>
    <file>toggle-off-dark.svg</file>
    <file>toggle-off-hc.svg</file>
    <file>toggle-off.svg</file>
    <file>toggle-on-dark.svg</file>
    <file>toggle-on-hc.svg</file>
    <file>toggle-on.svg</file>
  </gresource>
</gresources>{{</fileCode>}}

Ganti **FILENAME** dengan gambar yang ingin kalian jadikan background.

Sekarang buka `gnome-shell.css` di direktori tersebut dan cari `#lockDialogGroup` menjadi seperti di bawah.

{{<fileCode "CSS" "gnome-shell.css">}}#lockDialogGroup {
  background: url(FILENAME);
  background-size: cover;
  background-repeat: no-repeat;
}{{</fileCode>}}

Jika sudah jalankan perintah di bawah ini mengkompilasi tema.

{{<scCode "Shell">}}glib-compile-resources gnome-shell-theme.gresource.xml{{</scCode>}}

Lalu copy `gnome-shell-theme.gresource` ke `/usr/share/gnome-shell`.

Jika sudah lalu restart `gdm.service`.

{{<scCode "Shell">}}systemctl restart gdm.service{{</scCode>}}

## Sumber

{{<linkBlank "https://wiki.archlinux.org/title/GDM" "https://wiki.archlinux.org/title/GDM">}}