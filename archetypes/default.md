---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
comments: true
draft: false
author: "Yoga"
toc: true
type:
thumbnail: /img/thumbnail/{{ .Name }}.jpg
---

<!--more-->

![{{ .Name }}](/img/thumbnail/{{ .Name }}.jpg)
