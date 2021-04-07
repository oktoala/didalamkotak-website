---
title: "MS Office Di Arch Linux"
date: 2021-04-02T10:56:52+08:00
comments: true
draft: false
author: "Yoga"
toc: true
type: post
categories: ["Wine", "Linux"]
description: "Ini adalah cara menginstall MS Office di Arch Linux menggunakan PlayOnLinux"
thumbnail: /img/thumbnail/ms-office-di-linux.jpg
---

Kali ini akan membahasa cara install Microsoft Office di Linux

<!--more-->

![ms-office-di-linux](/img/thumbnail/ms-office-di-linux.jpg)


Jika kalian masih kuliah, kalian pasti akan sering membuat laporan, presentasi, dsb.

Maka kalian akan membutuhkan aplikasi word processor, presentation, dan spreadsheet.

Di linux sudah ada beberapa seperti Libre Office, Only Office, dan WPS Office.

Tapi permasalahannya adalah **`kolaborasi`**

## Pendahuluan

Karena kebanyakan tugas dikerjakan secara berkelompok, maka kolaborasi itu penting.

Jika anggota kelompok memakai aplikasi A untuk membuat tugas dan saya memakai aplikasi B,
maka kolaborasi itu tidak akan tercapai.

Jadi saya memutuskan untuk memakai aplikasi yang dipakai oleh mayoritas anggota, yaitu **MS Office**.

## LibreOffice Vs MS Office

Saya tahu Libre bisa membaca format .docx dengan baik. Dan menurut saya Libre jauh lebih gampang saat membuat nomer halaman.

Tapi masalahnya adalah saat saya mengirimkan file .docx itu ke anggota yang menggunakan MS Office, filenya jadi berantakan.

Jadi, kesimpulannya:

MS Office -> Libre Office ✅

Libre -> MS Office ❌

## Installasi

Kita akan menggunakan PlayOnLinux, sebuah aplikasi GUI untuk Wine. Jadi, sebenarnya ini adalah Wine tapi ada GUI.

{{<scCode "Shell">}}sudo pacman -S wine playonlinux{{</scCode>}}

Kalian mungkin juga butuh beberapa hal ini untuk diinstall.

{{<scCode "Shell">}}sudo pacman -S winetrick zenity{{</scCode>}}

Jika sudah terinstall, 

1. Buka PlayOnLinux
2. Pilih **_Install a Program_**
3. Klik **_Install a non-listed program_**
4. Lalu klik next sampai kalian diminta menginputkan nama winebottle kalian (Kalian bebas menamainya apa saja)
5. Klik next sampai kalian diminta memilih arsitektur aplikasi kalian. Kalau saya memilih 32-bit karena MS Office saya 32-bit.

{{<webm "/webm/playonlinux-gif1.webm">}}

Jika sudah kalian akan diminta untuk mencari aplikasi yang diinstall. Klik _browse_ lalu cari file.exe kalian. Lalu lakukan installasi seperti biasa sampai selesai.

## Penampakan

{{<figure "/img/word-test.jpg" "Microsoft Word">}}

{{<figure "/img/powerpoint-test.jpg" "Microsoft Powerpoint">}}

{{<figure "/img/excel-test.jpg" "Microsoft Excel">}}

## Troubleshooting

### Powerpoint Problem

Jalankan perintah di bawah ini dengan mengganti `namaFolder` dengan nama winebottle yang kalian masukkan di point no. 3

{{<scCode "Shell">}}WINEPREFIX=~/.PlayOnLinux/wineprefix/namaFolder winetricks{{</scCode>}}

Jika sudah, maka akan muncul window baru. Lalu klik **Select the default prefix** -> **Install a Windows DDL or component** ->
pilih **dotnet20** dan **msxml6**. Lalu klik OK.

Mungkin kalian akan menemukan beberapa peringatan error, lewati saja dengan klik OK

{{<webm "/webm/winetricks-ddl.webm">}}

Jika sudah, jangan keluar dulu dari winetricks. Klik **Run winecfg** -> **Libraries** -> Lalu ketikan **riched20** lalu klik **Add**.

{{<webm "/webm/winecfg-riched20.webm">}}

Jika sudah, seharusnya kalian sudah bisa membuka Powerpoint.

### Font Problem

Jalankan winetricks lagi, lalu pilih **Install a font** > **corefont**.

{{<webm "/webm/winetricks-font.webm">}}

<!-- Untuk mengatasi masalah font yang kurang smooth, copy script di bawah ini
ke sebuah file.sh, beri saja namanya `smooth.sh`

{{<scCode "Bash">}}WINE=${WINE:-wine}
WINEPREFIX=${WINEPREFIX:-$1}
DIALOG=whiptail

if [ ! -x "`which "$WINE"`" ]
then
    echo "Wine was not found. Is it really installed? ($WINE)"
    exit 1
fi

if [ ! -x "`which "$DIALOG"`" ]
then
    DIALOG=dialog
fi

TMPFILE=`mktemp` || exit 1

$DIALOG --menu \
    "Please select font smoothing mode for wine programs:" 13 51\
    4\
        1 "Smoothing disabled"\
        2 "Grayscale smoothing"\
        3 "Subpixel smoothing (ClearType) RGB"\
        4 "Subpixel smoothing (ClearType) BGR" 2> $TMPFILE

STATUS=$?
ANSWER=`cat $TMPFILE`

if [ $STATUS != 0 ]
then 
    rm -f $TMPFILE
    exit 1
fi

MODE=0 # 0 = disabled; 2 = enabled
TYPE=0 # 1 = regular;  2 = subpixel
ORIENTATION=1 # 0 = BGR; 1 = RGB

case $ANSWER in
    1) # disable
        ;;
    2) # enable
        MODE=2
        TYPE=1
        ;;
    3) # enable cleartype rgb
        MODE=2
        TYPE=2
        ;;
    4) # enable cleartype bgr
        MODE=2
        TYPE=2
        ORIENTATION=0
        ;;
    *)
        rm -f $TMPFILE
        echo Unexpected option: $ANSWER
        exit 1
        ;;
esac

echo "REGEDIT4

[HKEY_CURRENT_USER\Control Panel\Desktop]
\"FontSmoothing\"=\"$MODE\"
\"FontSmoothingOrientation\"=dword:0000000$ORIENTATION
\"FontSmoothingType\"=dword:0000000$TYPE
\"FontSmoothingGamma\"=dword:00000578" > $TMPFILE

echo "Configuring on $WINEPREFIX"
echo -n "Updating configuration... "

$WINE regedit $TMPFILE 2> /dev/null

rm -f $TMPFILE

echo ok{{</scCode>}}

Lalu jalankan file `smooth.sh` tadi dengan argumen winebottle kalian.

{{<scCode "Shell">}}./smooth.sh ~/.PlayOnLinux/wineprefix/namaWineBottle{{</scCode>}}

{{<webm "/webm/font-smooth.webm">}}

Script di atas bisa kalian baca lebih lanjut {{<linkBlank "disini" "https://askubuntu.com/questions/219791/improve-gui-appearance-of-wine-applications">}} -->

## Penutup

Jadi itu cara saya menginstall Microsoft Office di Arch Linux.

Sejauh ini programnya dapat berjalan lancar asalkan kalian tidak mengedit aplikasinya menggunakan [menulibre](https://aur.archlinux.org/packages/menulibre/)
karena shortcut kalian akan langsung menjadi `File not found`

Oke itu aja, sekian dan terima kasih.