// Sayfa yüklendiğinde elemanları hazırla
var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
    // ÖNEMLİ: JS'de aylar 0'dan başlar. Ocak=0, Aralık=11.
    // Tanışma: 17 Aralık 2025, Saat 14:45
    let start = new Date(2025, 11, 17, 14, 45, 0);
    let now = new Date();
    
    // Aradaki farkı milisaniye olarak al
    var t = now - start;

    // Eğer tarih henüz gelmediyse her şeyi 0 göster
    if (t < 0) {
        document.getElementById("d").innerHTML = 0;
        document.getElementById("h").innerHTML = "00";
        document.getElementById("m").innerHTML = "00";
        document.getElementById("s").innerHTML = "00";
        return;
    }

    var d = Math.floor(t / (1000 * 60 * 60 * 24));
    var h = Math.floor((t / (1000 * 60 * 60)) % 24);
    var m = Math.floor((t / (1000 * 60)) % 60);
    var s = Math.floor((t / 1000) % 60);

    // Görsel güzellik için başına 0 ekleme
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    } else {
        clearInterval(fadeinInterval);
    }
}

var fadeInterval;
var fadeinInterval;

// İlk çalıştırma
timer();
// Her saniye güncelle
setInterval(timer, 1000);

// ok değişkenini kontrol eden döngü
// Not: playImg.js veya typeWriter.js bittiğinde muhtemelen 'ok' değişkenini 2 yapıyor.
fadeInterval = setInterval(function() {
    if (typeof ok !== 'undefined' && ok >= 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);