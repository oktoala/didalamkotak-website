---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
comments: true
draft: false
author: "Yoga"
toc: true
kategori: []
type: post
thumbnail: "/{{ .Name }}/img/thumbnail.jpg"
description: "{{ replace .Name "-" " " | title }}"
---

<!--more-->

![{{ .Name }}](/{{ .Name }}/img/thumbnail.jpg)
