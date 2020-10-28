---
title: "Chocolatey, Package Manager Untuk Windows"
date: 2020-09-20T23:32:59+08:00
draft: false
author: "Yoga"
thumbnail: "img/thumbnail/choco.png"
categories: ["Windows"]
toc: true
---

Kali ini saya akan membahas tentang Chocolatey, package manager untuk Windows.
<!--more-->

![](/img/thumbnail/choco.png)

## Pendahuluan

Bagaimana kalian menginstall sebuah aplikasi di Windows? Apakah dengan cara pergi ke website aplikasi tersebut, mengunduh aplikasinya, install, menentukan lokasi installasi, lalu jalankan aplikasinya.

Bagaimana jika kalian ingin memasang banyak aplikasi sekaligus? Atau menghapus banyak aplikasi sekaligus? Atau memperbarui banyak aplikasi sekaligus?
Itu semua bisa kalian lakukan dengan menggunakan package manager.

Untuk yang belum tahu apa itu package manager, package manager itu mirip seperti App Store dan Play Store, yang dimana aplikasi kalian termanage dalam satu "package manager".

Salah satu dari package manager di Windows adalah chocolatey. Sebenarnya ada juga winget, tapi winget tidak memiliki fitur uninstall, jadi kita akan menggunakan chocolatey.

## Installasi

Minimum Spesifikasi sebelum installasi:
+ Windows 7+ / Windows Server 2003+
+ Powershell v2+
+ .NET Framework 4+

Jika Windows kalian memenuhi syarat diatas, maka kalian bisa mengikuti cara berikut:
+ Klik kanan pada logo {{< scIcon class="fa fa-windows" >}}
+ Lalu pilih **Windows Poweshell (Admin)**
+ Copy perintah di bawah ini

	{{< scCode "#012456" Powershell cp0 >}}
	Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
	{{< /scCode>}}

+ Paste ke Poweshell kalian.
+ Tunggu sampai selesai.
+ Jika tidak error dan berhasil, kalian akan diminta untuk merestart Powershell kalian. Keluar dari Powershell lalu masuk lagi sebagai admin.

## Penggunaan

Jika kalian bingung mau ngapain, ketikan perintah ini:

{{< scCode "#012456" Powershell cp1 >}}
choco ?
 {{< /scCode >}}

 ### 1. Install Package

 Ketikan perintah `choco install <nama package>` untuk memasang sebuah package.

 Misal saya ingin install spotify.
{{< scCode "#012456" Powershell cp2 >}}
choco install spotify
 {{< /scCode >}}

 Kalian juga menginstall banyak package sekaligus.
  {{< scCode "#012456" Powershell cp3 >}}
choco install spotify openshell notepadplusplus
 {{< /scCode >}}

 Kalian bisa melihat nama-nama packagenya di  {{< linkBlank "https://chocolatey.org/packages" "https://chocolatey.org/packages">}}

 Untuk yang bertanya-tanya kenapa disebut _package_ bukan aplikasi, karena sebuah package manager akan menginstall semua kebutuhan untuk aplikasi tersebut.

 Jadi kalau misalnya aplikasi kalian butuh Python 3.x, maka dia akan menginstallnya juga.

 Jadi kalian gak perlu mencari semua kebutuhan aplikasi tersebut.

 ### 2. Uninstall Package

 Ketikan perintah `choco uninstall <nama package>` untuk mengapus sebuah package.

 Misal saya ingin uninstall spotify.
 {{< scCode "#012456" Powershell cp4 >}}
choco uninstall spotify
 {{< /scCode >}}

 Kalian juga bisa uninstall banyak package sekaligus
  {{< scCode "#012456" Powershell cp5>}}
choco install spotify openshell notepadplusplus <br>
 {{< /scCode >}}

### 3. Update Package

Kalian bisa update semua package kalian dengan satu perintah.

 {{< scCode "#012456" Powershell cp6>}}
choco update
 {{< /scCode >}}

### 4. Chocolatey GUI

Semua cara di atas mengharuskan kita untuk mengetik perintah di Powershell.

Bagaimana cara mengatur semua aplikasi tersebut tanpa harus mengetikan perintah? Tenang, Chocolatey memiliki GUI untuk itu.

Ketikan perintah ini ke Powershell.
 {{< scCode "#012456" Powershell cp7>}}
choco install chocolateygui
 {{< /scCode >}}

## Penutup
Dengan adanya chocolatey, kita bisa mengatur aplikasi kita dalam satu tempat.

Dan juga kalian tidak harus memakai terminal karena sudah ada GUI-nya.

Jadi, sudahkah kalian mencoba chocolatey?




<!--
Id : 851 8961 4230
pass: 12345
-->
