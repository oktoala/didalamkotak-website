---
title: "Lewati SSL Pinning Dengan Objection Dan Frida"
date: 2022-07-24T14:22:42+08:00
comments: true
draft: true
author: "Yoga"
toc: true
kategori: "Tips"
topik: ["hacking", "frida", "objection", "mitm"]
type: post
thumbnail: "/lewati-ssl-pinning-dengan-objection-dan-frida/img/thumbnail.webp"
description: "Cara mendapatkan Private API yang tidak bisa diakses karena SSL Pinning"
summary: Mari Kita Ngehack
---

![lewati-ssl-pinning-dengan-objection-dan-frida](/lewati-ssl-pinning-dengan-objection-dan-frida/img/thumbnail.webp)

Jika kalian sering melakukan web programming, kalian mungkin sering memakai API untuk mendapatkan suatu data. Dan API yang kalian pakai biasanya adalah sebuah public API.

Tapi terkadang public API tidak memberikan semua data yang kita inginkan.

Jika seperti itu, maka kalian membutuhkan yang namanya private API.

Private API bisa kalian dapatkan dengan teknik [_Man In The Middle_](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) atau MITM.

Tetapi, beberapa aplikasi tidak bisa kalian dapatkan saja begitu private API-nya dengan MITM. Beberapa aplikasi menerapkan SSL Pinning.

Pada artikel ini, kita akan mempelajarai cara melewati SSL Pinning

## Persiapan

Pastikan kalian menyiapkan hal-hal di bawah ini:

- Smartphone yang sudah di root atau bisa juga pakai Emulator.
- adb
- Python 3.x dan pip

## Setup Environment Python

Kita tidak akan menginstall semua package Python di system, tapi kita akan menggunakan virtual environment.

1. Jalankan perintah di bawah jika kalian belum memiliki `virtualenv`.

   ```Bash
   pip install virtualenv
   ```

2. Jika sudah, buat virtual environment nya.

   ```Bash
   virtualenv --python=python3 ~/hacking
   ```

3. Aktifkan sourcenya

   ```Bash
   source ~/hacking/bin/activate
   ```

   Pilih `activate.ps1` jika kalian di Windows.

4. Install **Frida** dan **Objection** melalui pip.

   ```Bash
   pip install frida objection
   ```

## Setup Frida

Download [Frida Server](https://github.com/frida/frida/releases "blank") sesuai dengan sistem operasi dan arsitektur perangkat kalian.

Untuk kali ini kita akan unduh yang versi android-arm64.

![frida-server](/lewati-ssl-pinning-dengan-objection-dan-frida/img/frida-server.webp)

Extract isi filenya dan taruh di folder `~/hacking`. Rename menjadi `frida-server` biar lebih singkat.

Hubungkan Android kalian ke PC menggunakan USB.

Lalu jalankan perintah di bawah untuk memindahkan file `frida-server` ke Android kalian, mengganti permissionnya,
dan menjalankannya.

```Bash
adb push frida-server /data/local/tmp
adb shell chmod 777 /data/local/tmp/frida-server
adb shell /data/local/tmp/frida-server &
```

```Javascript {file="sslpinning.js"}
setTimeout(function(){
    Java.perform(function (){
    	console.log("");
	    console.log("[.] Cert Pinning Bypass/Re-Pinning");

	    var CertificateFactory = Java.use("java.security.cert.CertificateFactory");
	    var FileInputStream = Java.use("java.io.FileInputStream");
	    var BufferedInputStream = Java.use("java.io.BufferedInputStream");
	    var X509Certificate = Java.use("java.security.cert.X509Certificate");
	    var KeyStore = Java.use("java.security.KeyStore");
	    var TrustManagerFactory = Java.use("javax.net.ssl.TrustManagerFactory");
	    var SSLContext = Java.use("javax.net.ssl.SSLContext");

	    // Load CAs from an InputStream
	    console.log("[+] Loading our CA...")
	    var cf = CertificateFactory.getInstance("X.509");

	    try {
	    	var fileInputStream = FileInputStream.$new("/data/local/tmp/cert-der.cer");
	    }
	    catch(err) {
	    	console.log("[o] " + err);
	    }

	    var bufferedInputStream = BufferedInputStream.$new(fileInputStream);
	  	var ca = cf.generateCertificate(bufferedInputStream);
	    bufferedInputStream.close();

		var certInfo = Java.cast(ca, X509Certificate);
	    console.log("[o] Our CA Info: " + certInfo.getSubjectDN());

	    // Create a KeyStore containing our trusted CAs
	    console.log("[+] Creating a KeyStore for our CA...");
	    var keyStoreType = KeyStore.getDefaultType();
	    var keyStore = KeyStore.getInstance(keyStoreType);
	    keyStore.load(null, null);
	    keyStore.setCertificateEntry("ca", ca);

	    // Create a TrustManager that trusts the CAs in our KeyStore
	    console.log("[+] Creating a TrustManager that trusts the CA in our KeyStore...");
	    var tmfAlgorithm = TrustManagerFactory.getDefaultAlgorithm();
	    var tmf = TrustManagerFactory.getInstance(tmfAlgorithm);
	    tmf.init(keyStore);
	    console.log("[+] Our TrustManager is ready...");

	    console.log("[+] Hijacking SSLContext methods now...")
	    console.log("[-] Waiting for the app to invoke SSLContext.init()...")

	   	SSLContext.init.overload("[Ljavax.net.ssl.KeyManager;", "[Ljavax.net.ssl.TrustManager;", "java.security.SecureRandom").implementation = function(a,b,c) {
	   		console.log("[o] App invoked javax.net.ssl.SSLContext.init...");
	   		SSLContext.init.overload("[Ljavax.net.ssl.KeyManager;", "[Ljavax.net.ssl.TrustManager;", "java.security.SecureRandom").call(this, a, tmf.getTrustManagers(), c);
	   		console.log("[+] SSLContext initialized with our custom TrustManager!");
	   	}
    });
},0);
```

## Testing Frida

## Saatnya Hacking

```Bash
frida -U -f com.shoppe.id -l sslpinning.js
```
