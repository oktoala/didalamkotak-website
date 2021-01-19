---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
comments: true
draft: false
author: "Yoga"
toc: true
thumbnail: /img/thumbnail/{{ .Name }}.jpeg
---

<!--more-->

![{{ .Name }}](/img/thumbnail{{ .Name }}.jpeg)
