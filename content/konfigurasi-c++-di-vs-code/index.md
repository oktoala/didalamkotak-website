---
title: "Konfigurasi C++ Di VS Code"
date: 2021-07-15T09:24:06+08:00
comments: true
draft: true
author: "Yoga"
toc: true
kategori: []
type: post
thumbnail: "/konfigurasi-c++-di-vs-code/img/thumbnail.webp"
description: "Konfigurasi C++ Di vs Code"
---

Kali ini kita akan membahas cara konfigurasi lingkungan pemrograman C++ di Visual Studio Code.

<!--more-->

![konfigurasi-c++-di-vs-code](/konfigurasi-c++-di-vs-code/img/thumbnail.webp)

## Install Compiler

Untuk Windows, kalian bisa minGW.

Untuk linux, install `gcc` dan `gdb`.

**Untuk Ubuntu**

{{<scCode "Shell">}}sudo apt install gcc gdb{{</scCode>}}

**Untuk Arch**

{{<scCode "Shell">}}sudo pacman -S gcc gdb{{</scCode>}}

## Install Extension

Buka Visual Studio Code, buka Extension (Ctrl+Shift+x), lalu cari C++ dan install.

![extension](/konfigurasi-c++-di-vs-code/img/extension.webp)

{{<fileCode "JSON" "tasks.json">}}{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Compile C++",
            "type": "shell",
            "command": "g++",
            "args": [
                "${relativeFile}",
                "-o",
                "./bin/${fileBasenameNoExtension}"
            ]

        },
        {
            "label": "Run C++",
            "type": "shell",
            "command": "./bin/${fileBasenameNoExtension}",
            "dependsOn":["Compile C++"],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}{{</fileCode>}}
