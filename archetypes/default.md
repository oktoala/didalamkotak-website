---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
comments: true
draft: false
author: "Yoga"
toc: true
categories: []
thumbnail: /img/thumbnail/{{ .Name }}.jpg
description: "{{ replace .Name "-" " " | title }}"
---

<!--more-->

![{{ .Name }}](/img/thumbnail/{{ .Name }}.jpg)
