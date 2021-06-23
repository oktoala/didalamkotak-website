---
title: "Mari Konfigurasi Windows Subsystem for Linux"
date: 2021-06-23T18:57:39+08:00
comments: true
draft: false
author: "Yoga"
toc: true
categories: []
type: post
thumbnail: "/img/thumbnail/mari-konfigurasi-windows-subsystem-for-linux.webp"
description: "Mari Konfigurasi Windows Subsystem for Linux"
---

Kita akan membahas cara install dan konfigurasi Windows Subsystem for Linux (WSL).
<!--more-->

![mari-konfigurasi-windows-subsystem-for-linux](/img/thumbnail/mari-konfigurasi-windows-subsystem-for-linux.webp)

## Pendahuluan

Sebelum kita mulai mari kita samakan pemahaman kita soal WSL.

_Windows Subsystem for Linux_ atau **WSL** adalah sebuah compabilty layer untuk menjalankan Program binary Linux atau ELF secara native di Windows 10
Windows Server 2019.

Jadi, bisa kita lihat bahwa WSL mirip seperti [Wine](/wine-bukan-emulator), tapi berbeda dengan Wine, semenjak WSL2 dirilis, WSL sudah memakai Linux kernel asli melalui fitur subset Hyper-V.

## Installasi

WSL tidak terinstall secara default kecuali pada Windows edisi Insiders. Jadi kita harus menginstallnya secara manual.

### Mengaktifkan WSL

![Aktifkan-wsl](/img/Aktifkan-wsl.webp)

Jalankan Powershell sebagai administrator dan jalankan perintah di bawah ini.

{{<scCode "Powershell">}}dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart{{</scCode>}}

### Mengaktifkan Virtual Machine

Masih di dalam Powershell dan jalankan perintah di bawah ini.

{{<scCode "Powershell">}}dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart{{</scCode>}}

Jika sudah, restart Windows kalian untuk menginstall WSL dan mengupdate-nya ke WSL2.

### Download Linux Kernel Package

Download package terbaru [disini](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

Jika sudah, buka package yang sudah terdownload tadi dan jalankan seperti biasa (cukup next aja).

### Install Linux Distro

Buka Microsoft Store dan _search_ Linux, maka akan keluar beberapa pilihan.

Jika kalian bingung, pilih aja yang Ubuntu.

![ms-store-ubuntu](/img/mstore-ubuntu.webp)

Tekan "Get" lalu klik "Install". Tunggu sampai selesai.

Jika sudah selesai, tekan {{<scIcon class="fa fa-windows">}}+S lalu ketikkan `Ubuntu` dan silahkan di klik.

Kalian akan diminta untuk memasukkan username dan password.

![Ubuntu-terminal](/img/Ubuntu-terminal.webp)

Jika tidak muncul-muncul apapun, cukup restart Windows kalian.

### Mengubah Versi WSL

Jalankan perintah ini di Powershell(Administrator) menampilkan list distro.

{{<scCode "Powershell">}}wsl --list --verbose{{</scCode>}}

Jalankan perintah ini untuk mengubah versi untuk satu distro.

{{<scCode "Powershell">}}wsl --set-version (distribution name) (versionNumber) {{</scCode>}}

Jadi, jika kalian menginstall Ubuntu, jalankan perintah ini.

{{<scCode "Powershell">}}wsl --set-version Ubuntu 2{{</scCode>}}

![Ubuntu-wsl2](/img/Ubuntu-wsl2.webp)

Jalankan perintah ini untuk mengubah versi secara global.

{{<scCode "Powershell">}}wsl --set-default-version 2{{</scCode>}}

>> Note*
>
> Jika perintah wsl --set-default-version 2 tidak terdeteksi sebagai command, itu berarti Windows kalian tidak mendukung WSL2.
> Update Windows kalian ke Version 1903, Build 18362 atau yang lebih tinggi. Kalian juga mengatasinya dengan perintah lain yang
> saya berikan di atas  (wsl --set-version Ubuntu 2)

## Tweaks

Kita akan memakai Windows terminal untuk menjalankan perintah-perintah Linux.

Buka kembali Microsoft Store, dan cari Windows Terminal. Install seperti biasa.

Jika sudah, buka Windows Terminal maka tampilannya akan seperti ini.

![windows-terminal](/img/windows-terminal.webp)

Karena tampilannya masih tidak **elegan**, kita harus menginstall beberapa hal.

### Install Zsh

Zsh adalah shell selain bash dengan fitur yang lebih baik dari bash.

Jalankan perintah dibawah ini untuk update dan menginstall Zsh.

{{<fileCode "Bash" "WSL">}}sudo apt update
sudo apt install zsh{{</fileCode>}}

### Install Oh My Zsh

Singkatnya, Oh My Zsh adalah sebuah proyek untuk memanajemen Zsh.

Jalankan perintah di bawah ini untuk menginstall Oh My Zsh.

{{<fileCode "Bash" "WSL">}}sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"{{</fileCode>}}

Cukup tekan enter saja jika muncul sebuah prompt.

### Install Powerlevel10k

Intinya, Powerlebel10k adalah sebuah tema untuk Zsh.

Sebelum menginstall Powelevel10k, kita harus menginstall font terlebih dahulu.

Unduh font dibawah ini (salah satu juga boleh)

+ [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
+ [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
+ [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
+ [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

Jika sudah, klik dua kali font yang telah di unduh dan install.

Lalu, buka Windows terminal {{<scIcon class="fa fa-arrow-right">}} Settings {{<scIcon class="fa fa-arrow-right">}} Setting.json.

Cari tulisan `profiles` dan ubah tulisan yang didalam kurung menjadi teks di bawah ini.

{{<fileCode "JSON" "setting.json">}}"profiles": 
    {
        "defaults": {
		"fontFace": "MesloLGS NF",
		"fontSize": 12
},{{</fileCode>}}

Jika sudah, jalankan perintah di bawah untuk menginstall Powerlevel10k.

{{<fileCode "Bash" "WSL">}}git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
{{</fileCode>}}

Pergi ke home kalian dengan perintah ``cd`` atau ``cd ~/``. Lalu edit {{<dir ".zshrc">}} lalu cari teks {{<dir "ZSH_THEME='blablabla'">}} dan 
ubah menjadi {{<dir "ZSH_THEME='powerlevel10k/powelevel10k'">}}

Jika sudah, keluar lalu masuk lagi ke WSL dan maka akan muncul prompt seperti ini.

![pk10-prompt](/img/pk10-prompt.png)

Jika tidak ada, cukup jalankan {{<dir "p10k configure">}}. Dan hasilnya akan seperti ini 🙌

![wsl-new-look](/img/wsl-new-look.png)

Hasilnya akan berbeda tergantung dengan pilihan yang kalian pilih.

## Akhir Kata...

Sebenarnya masih banyak yang bisa dilakukan di WSL tapi itu akan kita simpan di lain hari.

Oke itu aja, silahkan baca artikel yang lain dan **_Smell ya Later_.**