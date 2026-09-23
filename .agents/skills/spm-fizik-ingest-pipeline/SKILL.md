---
name: spm-fizik-ingest-pipeline
description: "Use when ingesting, parsing, OCR-ing, or cropping diagrams from SPM Physics exam papers, trial papers, or DSKP question modules into HUB BANK SOALAN FIZIK. Enforces clean diagram cropping, eliminates vector graph text leaks, prevents narrow 2-column text wrap issues, standardizes bilingual justification, deduplicates OCR options, and validates DSKP alignment."
metadata:
  category: pipeline
  author: Antigravity Engineering
  triggers:
    - ingest spm fizik
    - crop rajah fizik
    - bank soalan fizik
    - modul konstruk fizik
    - dskp fizik
    - ocr soalan fizik
    - imbas modul fizik
    - format soalan fizik
---

# SPM Fizik Ingestion & Diagram Quality Pipeline (Projek HUB BANK SOALAN FIZIK)

Standard Operasi Prosedur (SOP) dan enjin automasi komprehensif bagi memastikan setiap modul, soalan, dan rajah Fizik SPM (Tingkatan 4 & 5) yang diimbas masuk ke dalam sistem **HUB BANK SOALAN FIZIK** adalah 100% berkualiti tinggi, kemas, tepat, dan bebas daripada sebarang kecacatan visual atau data.

---

## 🛡️ 8 Prinsip Emas Tanpa Kompromi (Golden Invariants)

1. **Rajah Tulen Sahaja & Sifar Garisan/Teks Asing (Strict Zero-Stem & Zero-Source Crop):**
   Kotak pemotongan (*bounding box*) rajah **DIHARAMKAN SAMA SEKALI** daripada mengandungi:
   - Teks soalan (*stem*) Bahasa Melayu mahupun terjemahan Bahasa Inggeris.
   - Teks sumber peperiksaan seperti `(MRSM: 2023)`, `(SBP)`, `(SMKA)`, `(SPM: 2021)`, `(Pahang: 2023)`, `(Putrajaya: 2022)`, dsb.
   - Nombor soalan, markah `[1 markah]`, kapsyen `Rajah X / Diagram X`.
   - **Garisan Pembahagi Lajur (Column Divider Line):** Dalam format PDF 2-lajur, pemotongan lajur kiri (*column 0*) **mesti dihadkan kepada $x_1 \le 286\text{ pt}$** agar garisan pembahagi lajur di $x \approx 294\text{ pt}$ tidak termasuk ke dalam imej!
   - **Integriti Visual Penuh:** Jangan sesekali memotong komponen lukisan secara mendatar (contoh: memotong separuh kereta mainan). $y_0$ dan $y_1$ mesti mencakupi keseluruhan objek dan label ukuran fizik ($L, 2\text{ km}, M, 8\text{ km}, N$).

2. **Sifar Kebocoran Kepala Jadual / Nilai Pilihan ke dalam Stem (Zero Table Header Leak):**
   Bagi soalan pilihan jadual (2-lajur atau 3-lajur seperti $P | Q | R$, Halaju | Pecutan, PQR | PR):
   - OCR sering kali membaca kepala jadual dan baris pertama lalu mencantumkannya ke hujung teks soalan.
   - Teks seperti `"Sesaran dan halaju Jarak dan laju"`, `"Bergerak Pegun Pegun"`, `"Halaju Pecutan Velocity Acceleration Malar Malar"`, `"OP PQ Halaju bertambah Halaju sifar"`, `"Untuk memulakan memberhentikan"`, `"duian keci durian besar smal unian big durian"` **DIHARAMKAN BERADA DI AKHIR SOALAN**. Teks tersebut mesti disingkirkan daripada `soalan` dan disusun secara teratur di dalam `pilihan`.

3. **Sifar Terjemahan Soalan Tertelan ke dalam Pilihan A (Zero Stem Swallowed into Option A):**
   - OCR jadual kadangkala mencantumkan perenggan Bahasa Inggeris soalan ke dalam teks Pilihan A (contoh: `"A particle moves from a point P to a point Q... Halaju purata Pecutan purata..."`).
   - Pipeline wajib memulihkan ayat soalan dwibahasa ke dalam `soalan` dan mengekalkan Pilihan A sebagai nilai jawapan yang bersih sahaja.

4. **Sifar Nombor Sesat / Artifak OCR pada Pilihan Jawapan:**
   - Hujung pilihan jawapan tidak boleh dicemari nombor soalan seterusnya atau nombor muka surat (contoh: `'18 km 38'` dibetulkan kepada `'18 km'`).

5. **Pembersihan Teks Vektor Graf & Anotasi Fizik (Zero Graph/Diagram Text Leak):**
   Teks yang merupakan sebahagian daripada rajah atau graf fizikal:
   - Arah gerakan (`Arah pergerakan / Direction of motion`).
   - Penanda masa & sesaran (`t = 0s, 1s, 2s`, `5.0 m, 10 m`, `15 m 15 m`).
   - Label radas (`Vakum / Vacuum`, `Duit syiling / Coin`, `Bulu ayam / Feather`, `Alu / Pestle`, `Lesung / Mortar`, `Kayu besbol / Baseball bat`).
   - Label & skala paksi graf (`Halaju (m s⁻¹)`, `Masa (s)`, angka senggatan `0, 10, 20...`).
   **WAJIB DIBUANG DARI STRING `soalan`!** Teks tersebut sudah dipaparkan secara visual di dalam imej rajah.

6. **Pencantuman Ayat Selanjar (Intelligent Block-Merging & Justify):**
   Cantumkan ayat-ayat dalam bahasa yang sama dengan satu ruang (*space*) agar teks mengalir secara semulajadi dan merata (*text-align: justify; text-justify: inter-word;*) ke seluruh lebar kad soalan.

7. **Pemisahan Pernyataan Roman (`I`, `II`, `III`, `IV`):**
   Setiap butiran pernyataan berangka Roman wajib dipisahkan sebagai perenggan dwibahasa tersendiri dengan jarak `<br><br>` yang kemas mengikut standard Lembaga Peperiksaan Malaysia (LPM).

8. **Integriti Sandaran Wajib (Mandatory Backup Rule):**
   Setiap fail projek (`app.js`, `dskp-data.js`, `styles.css`, fail pipeline) mesti disandarkan ke `/Users/halimroslan/NEW CIDS SUITES PRO/` dengan cap waktu (*timestamp*) sebelum sebarang pengubahsuaian dibuat.

9. **Kewajipan Rajah Komposit bagi Soalan Carta Pita/Graf Berpilihan Visual (Visual Options Composite Stitching):**
   - Soalan yang bertanyakan *"Carta pita manakah..."*, *"Graf manakah..."*, atau mempunyai pilihan jawapan berbentuk ilustrasi visual (seperti potongan pita detik atau pecahan berjadual) **DIHARAMKAN DIBIARKAN KOSONG TANPA RAJAH (`rajahUrl: ""`)**.
   - Jika pilihan jawapan terpisah antara 2 lajur dalam kertas PDF (contoh: Pilihan A & B di lajur kiri, Pilihan C & D di lajur kanan), pipeline wajib mencantumkan (*composite stitch*) keempat-empat pilihan ke dalam satu imej rajah tersusun (format susunan Z: A, B di baris atas; C, D di baris bawah) dengan jarak margin yang bersih.

10. **Pencegahan Cache CDN & Pelayar (Cache-Busting for Re-cropped Diagrams):**
    - Setiap kali rajah dipotong semula (*re-cropped*) untuk menghapuskan tag sumber peperiksaan (`Pahang 2021`, `Pahang 2023`) atau garisan pembahagi lajur, fail WebP yang dimuat naik ke Cloudflare R2 wajib menggunakan penamaan versi baru (contoh: `_v2.webp`) di dalam pangkalan data `dskp-data.js` bagi memastikan pelayar pengguna tidak memaparkan cache imej lama.

---

## 🛠️ Skrip Automasi & Pengesahan Kualiti

Setiap kali modul baru diimbas atau dikemas kini, jalankan pengesah kualiti automasi:

```bash
# 1. Jalankan pengesahan kualiti ketat
python3 scripts/validate_ingest_quality.py

# 2. Uji sintaks JavaScript
node -c dskp-data.js
```

Jika terdapat sebarang kegagalan, skrip akan menyenaraikan ID soalan dan jenis kecacatan dengan tepat untuk pembaikan serta-merta.
