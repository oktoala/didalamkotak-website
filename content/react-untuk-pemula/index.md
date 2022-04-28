---
title: "React Untuk Pemula"
date: 2022-04-28T09:09:18+08:00
comments: true
draft: true
author: "Yoga"
toc: true
kategori: ""
topik: []
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

