---
title: "Tips Dan Trik Bash"
date: 2022-01-25T13:27:35+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: "Tips"
topik: [bash, terminal]
type: post
thumbnail: "/tips-dan-trik-bash/img/thumbnail.webp"
description: "Tips Dan Trik Bash"
summary: Ini adalah perintah terminal yang mungkin kalian belum tahu
---

![tips-dan-trik-bash](/tips-dan-trik-bash/img/thumbnail.webp)

Jika kalian sering memakai terminal, pasti kalian akan menemukan jika terminal itu terlalu membosankan dan _intimidating_.

Tapi sebenarnya kalian bisa melakukan beberapa hal seru di terminal kalian.

Berikut beberapa hal yang bisa kalian lakukan di terminal kalian.

## lolcat

Kalian mungkin tahu tentang `cat` atau con**cat**enate, sebuah perintah yang akan menampilkan isi dari sebuah file.

Tapi ada yang lebih baik, yaitu `lolcat`.

![lolcats](/tips-dan-trik-bash/img/lolcat.webp)

Yup, it's rainbow 🌈

Kalian juga bisa menampilkannya dengan animasi, cukup tambahkan flags `-a`.

{{<webm "/tips-dan-trik-bash/img/lolcat.webm">}}

## sl

Perintah `sl` adalah perintah untuk menampilkan kereta.

{{<webm "/tips-dan-trik-bash/img/sl.webm">}}

Kalian juga bisa menggabungkannya dengan `lolcat`. Cukup jalankan `sl | lolcat`.

{{<webm "/tips-dan-trik-bash/img/slolcat.webm">}}

## asciiquarium

Perintah ini akan menampilkan akuarium.

{{<webm "/tips-dan-trik-bash/img/asciiquarium.webm">}}

## cmatrix

Perintah ini akan membuat kalian terlihat seperti hacker.

{{<webm "/tips-dan-trik-bash/img/cmatrix.webm">}}

## lsd

Perintah ini mirip seperti `ls`, tapi lebih baik.

![lsd-image](/tips-dan-trik-bash/img/lsd.webp)

Yap, ini punya icon.

Kalian mungkin ingin mengganti perintah `ls` default kalian menjadi `lsd`, cukup buat aliases di `.bashrc` kalian.

```Bash {file="bashrc"
alias ls='lsd --color=auto'
alias ll='lsd -l --color=auto'
# ls, the common ones I use a lot shortened for rapid fire usage
alias l='lsd -lFh --color=auto'     #size,show type,human readable
alias la='lsd -lAFh --color=auto'   #long list,show almost all,show type,human readable
alias lr='lsd -tRFh --color=auto'   #sorted by date,recursive,show type,human readable
alias lt='lsd -ltFh --color=auto'   #long list,sorted by date,show type,human readable
alias ll='lsd -l --color=auto'      #long list
alias ldot='lsd -ld .*'
alias lS='lsd -1FSsh'
alias lart='lsd -1Fcart'
alias lrt='lsd -1Fcrt'
```

## tldr

Perintah ini mirip dengan `man`, yang dimana akan memberitahu kegunaan dari suatu perintah.

Tapi `tldr` lebih user-friendly.

Mari kita bandingkan cara penggunaan `man` dan `tldr` pada `git`.

Ini adalah perintah `man git`.

![man](/tips-dan-trik-bash/img/man.webp)

Dan ini adalah perintah `tldr git`.

![tldrs](/tips-dan-trik-bash/img/tldr.webp)

Bisa kita lihat mana yang lebih user friendly. Walaupun `tldr` tidak selengkap `man`.


