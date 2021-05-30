---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
comments: true
draft: false
author: "Yoga"
toc: true
categories: []
type: post
thumbnail: "/{{ .Name }}/img/thumbnail/{{ .Name }}.webp"
description: "{{ replace .Name "-" " " | title }}"
---

<!--more-->

![{{ .Name }}](/{{ .Name }}/img/thumbnail/{{ .Name }}.webp)

