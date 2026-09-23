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

## 🛡️ 7 Prinsip Emas Tanpa Kompromi (Golden Invariants)

1. **Rajah Tulen Sahaja & Sifar Teks Sumber (Strict Zero-Stem & Zero-Source Crop):**
   Kotak pemotongan (*bounding box*) rajah **DIHARAMKAN SAMA SEKALI** daripada mengandungi:
   - Teks soalan (*stem*) Bahasa Melayu mahupun terjemahan Bahasa Inggeris (contoh: `Diagram 14 shows a student runs...`).
   - Teks sumber peperiksaan seperti `(MRSM: 2023)`, `(SBP)`, `(SMKA)`, `(SPM: 2021)`, `(Pahang: 2023)`, `(Terengganu: 2022)`, dsb.
   - Nombor soalan, markah `[1 markah]`, garisan pembahagi lajur (*column divider line*), atau kapsyen `Rajah X / Diagram X`.
   - **Garis Panduan Sempadan:** $y_0$ pemotongan rajah **mesti bermula ketat di bawah** perkataan terakhir ayat soalan dan teks sumber.
2. **Pembersihan Teks Vektor Graf & Anotasi Fizik (Zero Graph/Diagram Text Leak):**
   Teks yang merupakan sebahagian daripada rajah atau graf fizikal:
   - Arah gerakan (`Arah pergerakan / Direction of motion`).
   - Penanda masa & sesaran (`t = 0s, 1s, 2s`, `5.0 m, 10 m`, `15 m 15 m`).
   - Label radas (`Vakum / Vacuum`, `Duit syiling / Coin`, `Bulu ayam / Feather`).
   - Label mercu tanda (`Rumah / House`, `Kedai runcit / Grocery store`, `Permukaan Bumi / Earth surface`).
   - Label & skala paksi graf (`Halaju (m s⁻¹)`, `Masa (s)`, angka senggatan `0, 10, 20...`).
   **WAJIB DIBUANG DARI STRING `soalan`!** Teks tersebut sudah dipaparkan secara visual di dalam imej rajah, dan kemasukannya ke dalam teks soalan adalah satu kecacatan OCR.
3. **Pencantuman Ayat Selanjar (Intelligent Block-Merging):**
   Jangan sesekali memotong ayat setiap 35–45 aksara mengikut lajur PDF. Cantumkan ayat-ayat dalam bahasa yang sama dengan satu ruang (*space*) agar teks mengalir secara semulajadi dan merata (*text-align: justify; text-justify: inter-word;*) ke seluruh lebar kad.
4. **Pemisahan Pernyataan Roman (`I`, `II`, `III`, `IV`):**
   Setiap butiran pernyataan berangka Roman wajib dipisahkan sebagai perenggan dwibahasa tersendiri dengan jarak `<br><br>` yang kemas mengikut standard Lembaga Peperiksaan Malaysia (LPM).
5. **Pilihan Jawapan Bersih (No OCR Multi-Column Leaks):**
   Pilihan jawapan berangka Roman (A, B, C, D) tidak boleh mengandungi teks bertindih hasil OCR dua lajur serentak (contohnya `I dan III I and II I and III`).
   Soalan yang pilihannya berbentuk 4 rajah graf berasingan (A, B, C, D) hendaklah dicantumkan ke dalam rajah soalan dan pilihannya dilabel standard sebagai `Graf A / Graph A`, `Graf B / Graph B`, dsb.
6. **Pengasingan DSKP Tingkatan 4 dan Tingkatan 5:**
   Dalam semua menu lungsur (*dropdown*), penapis (*filter*), dan profil JSU, Standard Kandungan Tingkatan 4 mesti disusun dahulu sepenuhnya sebelum Tingkatan 5.
7. **Integriti Sandaran Wajib (Mandatory Backup Rule):**
   Setiap fail projek (`app.js`, `dskp-data.js`, `styles.css`) mesti disandarkan ke `/Users/halimroslan/NEW CIDS SUITES PRO/` dengan cap waktu (*timestamp*) sebelum sebarang pengubahsuaian dibuat.

---

## Fasa 1: Pemotongan & Pengoptimuman Rajah Berketepatan Tinggi

### 1. Peraturan Bounding Box Ketat Tanpa Teks Sumber
Semasa mengekstrak rajah daripada PDF format 2-lajur:
* **Resolusi:** Render halaman pada $200\text{--}300 \text{ DPI}$ menggunakan `fitz.Matrix(200/72, 200/72)`.
* **Sempadan Atas ($y_0$):**
  Cari blok teks soalan Bahasa Inggeris dan teks sumber (contoh: `(MRSM: 2023)`).
  Tetapkan $y_0 = y_{1,\text{source}} + 2.0\text{ pt}$.
  Dengan cara ini, tiada satu huruf pun daripada perkataan sumber atau ayat soalan yang akan masuk ke dalam imej rajah.
* **Sempadan Bawah ($y_1$):**
  Cari kapsyen `Rajah X / Diagram X`.
  Tetapkan $y_1 = y_{0,\text{caption}} - 2.0\text{ pt}$.
* **Sempadan Sisi ($x_0, x_1$):**
  Lajur 1: $x \in [50, 295]\text{ pt}$. Lajur 2: $x \in [305, 550]\text{ pt}$.
  Pastikan garis pemisah lajur hitam di antara dua lajur dipotong keluar sepenuhnya.
* **Rajah Perbandingan / Berbilang Bahagian (Contoh: Rajah 79a & 79b, Rajah 94, Rajah 98):**
  Jika soalan melibatkan dua situasi bersebelahan atau soalan graf pilihan A, B, C, D, cantumkan (*stitch*) bahagian-bahagian tersebut menjadi **satu imej komposit tunggal** berkualiti tinggi.

### 2. Format & Muat Naik Cloudflare R2
* Format fail: **WebP** (`quality=95`) dengan pemotongan automatik tepi putih berlebihan (*auto-trim white padding* 8–10px).
* Struktur Kunci R2 Standard:
  ```text
  diagrams/modul_konstruk_t<TINGKATAN>/b<BAB>/t<TINGKATAN>_b<BAB>_rajah<N>.webp
  ```
  Contoh:
  `https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah14.webp`

---

## Fasa 2: Pembersihan Teks Vektor Graf & Anotasi daripada Teks Soalan

Dalam kertas soalan PDF, teks pada graf vektor diekstrak bersama-sama teks soalan. Ini menyebabkan teks soalan dipenuhi dengan serpihan koordinat dan label.

### Senarai Corak Teks yang Wajib Dihapuskan daripada `soalan`:
1. **Anotasi Gerakan & Radas:**
   * `Arah pergerakan`, `Directionofmotion`, `Direction of motion`
   * `L-0s -ls 52s ,3s`, `t = 0s, 1s, 2s`, `5.0 m S.0 m S.0 m`
   * `Vakum`, `Vacuum`, `Duit syiling Bulu ayam`, `Coir Feather`
   * `15 m 15 m`, `Permukaan Bumi`, `Earth surface`, `Permukaan Bulan`, `Moon surface`
   * `Rumah`, `Kedai runcit`, `Sekolah`, `House`, `Grocery store`
2. **Label & Unit Paksi:**
   * `Halaju ( ms)`, `Halaju (m s⁻¹)`, `Velocity (m s⁻¹)`
   * `Sesaran (m)`, `Displacement (m)`, `Jarak (m)`, `Distance (m)`
   * `Masa (s)`, `Time (s)`, `Masa / s`, `Time / s`
   * `Daya (N)`, `Force (N)`, `Pecutan (m s⁻²)`, `Acceleration`
3. **Nombor Skala & Skala Senggatan:**
   * Nombor terpencil seperti `0`, `5`, `10`, `15`, `20`, `25`, `30`, `50`, `100+` yang bertaburan dalam teks.
4. **Header Jadual Pilihan yang Tertinggal dalam Soalan:**
   * Contoh: `Jenis gerakan QR Jenis gerakan RS`, `Type of motionQR`, `Sesaran(m) Jarak dilalui (m)`. Pilihan jawapan sudah ada dalam medan `pilihan`. Teks ini tidak boleh ada dalam `soalan`!

---

## Fasa 3: Penjajaran Teks Normal (*Justified*) & Enjin Dwibahasa Pintar

### 1. Logik *Intelligent Block-Merging* (Telah Dilaksanakan dalam `app.js`)
* **Penggabungan Bahasa yang Sama:** Baris berturut-turut dalam bahasa yang sama (Melayu ke Melayu, atau Inggeris ke Inggeris) **wajib dicantumkan menjadi satu ayat yang mengalir** dengan ` ` (ruang kosong).
* **Pengecualian Pemisahan:**
  * Penanda Pernyataan Roman: `^[IVXLCDM]+[\s.)]` (Contoh: `I `, `II `, `III `, `IV `) $\rightarrow$ Memulakan blok pernyataan baharu.
  * Penanda Ceraian Sub-soalan: `^\([a-z0-9]+\)` (Contoh: `(a)`, `(b)`, `(i)`) $\rightarrow$ Memulakan blok ceraian baharu.
  * Dua baris kosong berturut-turut: `\n\s*\n` $\rightarrow$ Perenggan baharu.
* **Struktur Paparan Dwibahasa:**
  * Teks Bahasa Melayu: Teks biasa, tebal (*semi-bold/bold*), warna `#0F172A`.
  * Teks Terjemahan Bahasa Inggeris: Dibalut dengan `<span class="soalan-en">...</span>` (*italic*, warna kelabu profesional `#475569`).
  * Jarak antara Soalan & Pernyataan: Menggunakan `<br><br>` supaya ada ruang visual yang selesa.

### 2. Penjajaran CSS Standard:
Pastikan kelas-kelas berikut dalam `styles.css` mengandungi:
```css
.qcard-hero-body,
.slot-complete-stem,
.sub-q-text,
.slot-subq-text,
.lpm-q-text {
  text-align: justify;
  text-justify: inter-word;
}
```

---

## Fasa 4: Pengesanan & Pembersihan Pilihan Jawapan OCR

### Corak Ralat Biasa:
Dalam PDF 2-lajur, OCR membaca lajur kiri dan lajur kanan serentak secara melintang, menghasilkan pilihan seperti:
* `C: I dan III I and II I and III` $\rightarrow$ **Betul:** `I dan III`
* `D: I, II dan III II and II I, II and III` $\rightarrow$ **Betul:** `I, II dan III`
* `C: Halaju meningkat Uniform velocity Increasing velocity` $\rightarrow$ **Betul:** `Halaju meningkat / Increasing velocity`
* `D: Halaju tidak Decreasing seragam velocity Non-uniform velocity` $\rightarrow$ **Betul:** `Halaju tidak seragam / Non-uniform velocity`

---

## Fasa 5: Senarai Semak Pra-Penyatuan (Pre-Flight Verification Checklist)

Sebelum sebarang modul/topik baharu digabungkan (*merged*) ke dalam `dskp-data.js`:

- [ ] **Jalankan Skrip Validator:** Laksanakan `python3 scripts/validate_ingest_quality.py` (Mesti lulus 100% dengan `[✓] ALL QUALITY CHECKS PASSED`).
- [ ] **Semakan Sintaks JS:** Jalankan `node -c dskp-data.js` dan `node -c app.js` (Mesti keluar exit code 0).
- [ ] **Pemeriksaan Rajah Bebas Teks Sumber:** Buka imej rajah, sahkan tiada teks seperti `(MRSM: 2023)`, `(SBP)`, `(SPM)` atau ayat soalan terpotong di dalamnya.
- [ ] **Ujian Paparan QCard:** Buka Bank Soalan, pastikan ayat soalan melimpah merentasi kad secara rata (*justified*), bukan patah setiap separuh baris.
- [ ] **Sandaran Keselamatan Dibuat:** Salinan fail disimpan ke `/Users/halimroslan/NEW CIDS SUITES PRO/`.
