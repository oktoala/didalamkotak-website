---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
comments: true
draft: true
author: "Yoga"
toc: true
kategori: ""
topik: []
type: post
thumbnail: "/{{ .Name }}/img/thumbnail.webp"
description: "{{ replace .Name "-" " " | title }}"
summary: h
---

![{{ .Name }}](/{{ .Name }}/img/thumbnail.webp)
