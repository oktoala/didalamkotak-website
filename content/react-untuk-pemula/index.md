---
title: "React Untuk Pemula"
date: 2022-04-28T09:09:18+08:00
comments: true
draft: false
author: "Yoga"
toc: true
kategori: "Programming"
topik: ["react", "web", "javascript"]
type: post
thumbnail: "/react-untuk-pemula/img/thumbnail.webp"
description: "React Untuk Pemula"
summary: Belajar React dengan cara yang simple banget
---

![react-untuk-pemula](/react-untuk-pemula/img/thumbnail.webp)

Apa itu React? 

React adalah sebuah library Javascript untuk membuat UI buatan {{<scIcon class="fa fa-facebook">}}, walaupun banyak yang salah bilang kalau React itu framework.

React dikeluarkan tahun 2013 dan menjadi salah satu teknologi web yang [populer](https://insights.stackoverflow.com/survey/2021#most-popular-technologies-webframe) dan [diminati](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-webframe-want) pada tahun 2021.

Jadi apa yang membuat React sangat special? **Simplicity.**

## Component & JSX

React memiliki istilah yang bernama **component**. 

Component hanyalah sebuah function javascript yang memiliki nilai kembalian sebuah HTML.

```Javascript 
function Item() {
  return <p>Goodbye World!</p>
}
```

Gimana ceritanya bisa ada syntax HTML di Javascript? _I'm glad you asked._

Syntax HTML yang ada di React/Javascript disebut **JSX.** 

Bisa dibilang ini cuman bentuk custom advanced dari HTML yang dibuat oleh orang React.

Jika di HTML ada `class`, maka di JSX ada `className`.

```Javascript
function Item() {
  return <p className="test">Goodbye World!</p>
}
```

Jika kita sudah membuat sebuah component, kita bisa memanggilnya seperti tag HTML biasa.

```Javascript
function Item() {
  return <p className="test">Goodbye World!</p>
}

<Item/>
```

## Props & Children

Jika kalian bertanya lagi, terus apa bedanya dengan menulis HTML? _I'm glad you asked, twice._

Coba ingat-ingat, apa tujuan sebuah program dimasukkan ke dalam sebuah function?

Agar program itu bisa kita panggil berkali-kali tanpa harus menulis kodingan yang sama bukan?

Jika di HTML, jika ingin membuat 5 paragraph, kita harus melakukannya seperti ini.

```HTML
<p class="test">Goodbye World!</p>
<p class="test">Goodbye World!</p>
<p class="test">Goodbye World!</p>
<p class="test">Goodbye World!</p>
<p class="test">Goodbye World!</p>
```

Jika di React, cukup panggil componentnya saja sebanyak 5x.

```Javascript
<Item/> // Gak tau kenapa ini beda sendiri
<Item/>
<Item/>
<Item/>
<Item/>
```

Tapi ada tujuan lain kenapa kita menggunakan function? Yaa, parameter.

Program bisa dipanggil berkali-kali dengan nilai yang berbeda.

Kita bisa memasukkan argumen ke dalam fungsi yang memiliki parameter dan itu bisa kita lakukan terhadap component.

Parameter pada component disebut **props**. Props hanyalah sebuah object atau dictionary jika kalian paham python.

Cukup taruh props di parameter function.

```Javascript
function Item(props) {
  return <p className={props.myClass}>Goodbye World!</p>
}

<Item/>
```

Hmm, dari mana datangnya `props.myClass`? 

Seperti yang sudah dijelaskan di atas, `props` hanyalah sebuah object dan cara mengakses sebuah object adalah dengan cara memanggil key-nya.

Dan cara memberi nilainya adalah sama seperti kita memberi attribute pada HTML.

```Javascript
function Item(props) {
  return <p className={props.myClass}>Goodbye World!</p>
}

<Item myClass="test"/> // <== Begini
```

Bagaimana kalau saya ingin di dalam component, bisa diisi component atau jsx yang lain?

React menyediakan props khusus bernama `props.children`.

```Javascript
function Item(props) {
  return <p className={props.myClass}>
    {props.children}
  </p>
}

<Item myClass="test"> // <== Gak tau kenapa beda sendiri
  Good Bye World!
</Item>

<Item myClass="test-2"> 
  The World, berhentikanlah waktu
</Item>
```

## How To Start React

Oke, kita sudah belajar core dari React, lalu gimana cara mulainya? _I'm glad you asked, again._

Pertama, install {{<linkBlank "Node" "https://nodejs.org/en/download/">}} dulu. Download yang LTS.

Jika sudah, pastikan `npm` sudah ada di PATH. Jalankan `npm --version` di terminal atau CMD kalian.

Saya tidak akan pakai cara yang biasa dipakai banyak orang menggunakan `npx`, _cuz, it's too mainstream_ 😎.

Sebagai gantinya, kita akan menggunakan {{<linkBlank "Vite" "https://vitejs.dev/">}}. Apa ini? Itu tidak penting, untuk sekarang.

Jalankan perintah di bawah ini.

```Shell {file="CMD / Terminal"}
npm init vite
```

Jika sudah kalian akan diminta memasukkan nama project (dan akan jadi nama folder yang dibuat ).

![project-name](/react-untuk-pemula/img/project-name.webp)

Selanjutnya, kalian akan diminta memilih framework, pilih `react`.

![react-choose](/react-untuk-pemula/img/react-choose.webp)

Lalu, kalian akan diminta memilih variantnya, pilih `react`. 

![react-vanilla](/react-untuk-pemula/img/react-vanilla.webp)

Enter, maka kalian sudah membuat projectnya.

![done-create](/react-untuk-pemula/img/done-create.webp)

Jalankan perintah yang muncul di bawah saat kalian sudah membuat projectnya.

```Shell {file="CMD / Terminal"}
cd test-react
npm install
npm run dev
```

Jika sudah maka akan muncul tampilan seperti ini.

![vite-run](/react-untuk-pemula/img/vite-run.webp)

Buka {{<linkBlank "http://localhost:3000" "http://localhost:3000">}} dan kalian akan melihat hasilnya.

![run-localhost](/react-untuk-pemula/img/run-localhost.webp)

Seperti yang bisa kalian lihat, jika ingin membuat perubahan, ubah file `App.jsx`. Kalian bisa bermain-main disitu dulu untuk sementara.

## Akhir Kata...

Ada alasan kenapa React disebut Library dan bukan framework.

React tidak memiliki fitur routing, state management, animation, dsb. Tapi kenapa masih banyak orang yang pakai?

**_Massive Ecosystem._** 

Akan selalu ada components yang dibuat oleh orang-orang diluar sana sehingga kalian tidak perlu membuat components dari awal.

Kalian butuh _static site_? Ada {{<linkBlank "Gatsby" "https://www.gatsbyjs.com/">}}

Kalian butuh _server side rendering_? Ada {{<linkBlank "Next.js" "https://nextjs.org/">}}

Butuh animasi? Ada {{<linkBlank "Spring" "https://react-spring.io/">}}

Mau buat form? Ada {{<linkBlank "Formic" "https://formik.org/">}} 

Butuh state management? Noh => {{<linkBlank "Redux" "https://react-redux.js.org/">}}, {{<linkBlank "Mobx" "https://mobx.js.org/README.html">}} {{<linkBlank "Recoil" "https://recoiljs.org/">}}.

Sebagai tambahan kalau kalian bosen di Web, kalian bisa membuat aplikasi mobile menggunakan {{<linkBlank "React Native" "https://reactnative.dev/">}}.

Okee, itu aja, **_adios_**.
