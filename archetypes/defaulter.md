---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
comments: true
draft: false
author: "Yoga"
toc: true
kategori: []
type: post
thumbnail: "/img/thumbnail/{{ .Name }}.webp"
description: "{{ replace .Name "-" " " | title }}"
---

<!--more-->

![{{ .Name }}](/img/thumbnail/{{ .Name }}.webp)
