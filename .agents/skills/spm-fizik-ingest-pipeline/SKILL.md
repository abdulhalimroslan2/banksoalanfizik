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

1. **Rajah Tulen Sahaja (Zero-Stem Crop):**
   Kotak pemotongan (*bounding box*) rajah **TIDAK BOLEH** mengandungi teks soalan (*stem*), nombor soalan, markah `[1 markah]`, garisan pembahagi lajur (*column divider line*), atau kapsyen seperti "Rajah 22 / Diagram 22".
2. **Pembersihan Teks Vektor Graf (Zero Graph-Text Leak):**
   Teks dalam graf vektor (label paksi seperti `Halaju (m s⁻¹)`, `Masa (s)`, nombor skala, skala masa, nama mercu tanda graf) **TIDAK BOLEH** bocor ke dalam teks `soalan`. Teks tersebut hanya milik imej rajah!
3. **Pencantuman Ayat Selanjar (Intelligent Block-Merging):**
   Jangan sesekali memotong ayat setiap 35–45 aksara mengikut lajur PDF. Cantumkan ayat-ayat dalam bahasa yang sama dengan satu ruang (*space*) agar teks mengalir secara semulajadi dan merata (*justified*) ke seluruh lebar kad.
4. **Pemisahan Pernyataan Roman (`I`, `II`, `III`, `IV`):**
   Setiap butiran pernyataan berangka Roman wajib dipisahkan sebagai perenggan dwibahasa tersendiri dengan jarak `<br><br>` yang kemas mengikut standard Lembaga Peperiksaan Malaysia (LPM).
5. **Pilihan Jawapan Bersih (No OCR Multi-Column Leaks):**
   Pilihan jawapan berangka Roman (A, B, C, D) tidak boleh mengandungi teks bertindih hasil OCR dua lajur serentak (contohnya `I dan III I and II I and III`).
6. **Pengasingan DSKP Tingkatan 4 dan Tingkatan 5:**
   Dalam semua menu lungsur (*dropdown*), penapis (*filter*), dan profil JSU, Standard Kandungan Tingkatan 4 mesti disusun dahulu sepenuhnya sebelum Tingkatan 5.
7. **Integriti Sandaran Wajib (Mandatory Backup Rule):**
   Setiap fail projek (`app.js`, `dskp-data.js`, `styles.css`) mesti disandarkan ke `/Users/halimroslan/NEW CIDS SUITES PRO/` dengan cap waktu (*timestamp*) sebelum sebarang pengubahsuaian dibuat.

---

## Fasa 1: Pemotongan & Pengoptimuman Rajah Berketepatan Tinggi

### 1. Peraturan Bounding Box Bantuan AI & PyMuPDF
Semasa mengekstrak rajah daripada PDF format 2-lajur:
* **Resolusi Minimum:** Render halaman pada $200\text{--}300 \text{ DPI}$ menggunakan `fitz.Matrix(200/72, 200/72)`.
* **Sempadan Ketat:**
  * Bahagian Atas (*Top*): Potong tepat di atas elemen visual pertama rajah (contoh: label paksi tegak teratas atau bucu radas).
  * Bahagian Bawah (*Bottom*): Potong tepat di bawah garisan paksi mendatar atau kaki radas. Jangan masukkan kapsyen teks di bawahnya jika kapsyen tersebut boleh ditaip semula dalam HTML atau diabaikan.
  * Bahagian Kiri & Kanan (*Left & Right*): Pastikan tiada garisan pembahagi lajur (*vertical divider line*) yang terselit masuk.
* **Rajah Perbandingan / Berbilang Bahagian (Contoh: Rajah 79a & 79b):**
  Jika soalan melibatkan dua situasi atau radas perbandingan bersebelahan atau bertingkat, cantumkan (*stitch*) kedua-dua bahagian menjadi **satu imej komposit tunggal** berkualiti tinggi supaya murid dapat melihat perbandingan penuh tanpa hilang satu bahagian.

### 2. Format & Muat Naik Cloudflare R2
* Format fail: **WebP** (`quality=92` ke atas) dengan pemotongan automatik tepi putih berlebihan (*auto-trim white padding* 10–12px).
* Struktur Kunci R2 Standard:
  ```text
  diagrams/modul_konstruk_t<TINGKATAN>/b<BAB>/t<TINGKATAN>_b<BAB>_rajah<N>.webp
  ```
  Contoh:
  `https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah22.webp`

---

## Fasa 2: Pembersihan Teks Vektor Graf & Anotasi daripada Teks Soalan

Dalam kertas soalan PDF, teks pada graf vektor diekstrak bersama-sama teks soalan. Ini menyebabkan teks soalan dipenuhi dengan serpihan koordinat.

### Senarai Corak Teks yang Wajib Dibuang daripada `soalan`:
1. **Label & Unit Paksi:**
   * `Halaju ( ms)`, `Halaju (m s⁻¹)`, `Velocity (m s⁻¹)`
   * `Sesaran (m)`, `Displacement (m)`, `Jarak (m)`, `Distance (m)`
   * `Masa (s)`, `Time (s)`, `Masa / s`, `Time / s`
   * `Daya (N)`, `Force (N)`, `Pecutan (m s⁻²)`, `Acceleration`
2. **Nombor Skala & Skala Senggatan:**
   * Nombor terpencil seperti `0`, `5`, `10`, `15`, `20`, `25`, `30`, `50`, `100+` yang bertaburan dalam teks.
3. **Anotasi Mercu Tanda Graf:**
   * Contoh: `Rumah Kedai runcit Sekolah Rumahnya Perjalanannya singgah` (ini ialah label pada rajah peta/graf laluan, bukan teks soalan!).

### Kaedah Sanitasi:
Sebelum memasukkan soalan ke dalam `dskp-data.js`, bandingkan teks soalan dengan imej rajah yang telah dipotong. Jika teks tersebut telah wujud secara visual di dalam rajah, padamkan teks tersebut daripada string `soalan`.

---

## Fasa 3: Penjajaran Teks Normal (*Justified*) & Enjin Dwibahasa Pintar

### 1. Masalah Utama: Pemecahan Baris Sempit (*Hard Newlines*)
Dalam PDF format dua lajur (lebar ~240pt), baris ayat soalan terputus setiap 35–45 aksara:
```text
Antara pernyataan berikut, yang manakah betul\nmengenai sesaran?\nWhich of the following statements is correct\nabout displacemenr?
```
Jika `\n` ditukar terus kepada `<br>`, CSS `text-align: justify;` gagal berfungsi dan teks kelihatan seperti tangga yang sempit.

### 2. Logik *Intelligent Block-Merging* (Telah Dilaksanakan dalam `app.js`)
* **Penggabungan Bahasa yang Sama:** Baris berturut-turut dalam bahasa yang sama (Melayu ke Melayu, atau Inggeris ke Inggeris) **wajib dicantumkan menjadi satu ayat yang mengalir** dengan ` ` (ruang kosong).
* **Pengecualian Pemisahan:**
  * Penanda Pernyataan Roman: `^[IVXLCDM]+[\s.)]` (Contoh: `I `, `II `, `III `, `IV `) $\rightarrow$ Memulakan blok pernyataan baharu.
  * Penanda Ceraian Sub-soalan: `^\([a-z0-9]+\)` (Contoh: `(a)`, `(b)`, `(i)`) $\rightarrow$ Memulakan blok ceraian baharu.
  * Dua baris kosong berturut-turut: `\n\s*\n` $\rightarrow$ Perenggan baharu.
* **Struktur Paparan Dwibahasa:**
  * Teks Bahasa Melayu: Teks biasa, tebal (*semi-bold/bold*), warna `#0F172A`.
  * Teks Terjemahan Bahasa Inggeris: Dibalut dengan `<span class="soalan-en">...</span>` (*italic*, warna kelabu profesional `#475569`).
  * Jarak antara Soalan & Pernyataan: Menggunakan `<br><br>` supaya ada ruang visual (*visual breathing room*) yang selesa.

### 3. Penjajaran CSS Standard:
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
* Teks pernyataan soalan bocor ke dalam pilihan A (contoh kes Q64 di mana kenyataan I, II, dan III masuk ke pilihan A).

### Skrip Pengauditan Pantas (Audit Checklist):
Setiap kali mengimport topik baharu, jalankan semakan:
```javascript
// Semakan pilihan yang mengandungi kata berulang
if (/\b(dan|and)\b.*\b(dan|and)\b/i.test(pilihanTeks)) {
  // Teliti dan bersihkan kepada format standard: "I dan II", "II dan III", dsb.
}
```

---

## Fasa 5: Skema Data & Penyelarasan DSKP

Setiap entri soalan dalam `dskp-data.js` wajib mematuhi skema lengkap berikut:
```json
{
  "id": "MODUL_T4_B<BAB>_K<KERTAS>_Q<NO>",
  "sumber": "Percubaan <NEGERI/SEKOLAH> <TAHUN>",
  "tahun": 2023,
  "noSoalanAsal": 34,
  "sk": "SK <NO_SK> <NAMA_SK>",
  "sp": "SP <KOD_SP> <DESKRIPSI_SP>",
  "spKod": "<KOD_SP>",
  "rujukanDskp": "DSKP Fizik T<T> ms <MS>",
  "rujukanBukuTeks": "Buku Teks T<T> ms <MS>",
  "rujukanCheatnote": "Cheatnote T<T> Bab <B> ms <MS>",
  "kertas": 1,
  "tingkatan": 4,
  "babNo": 2,
  "babNama": "Daya dan Gerakan I",
  "bidang": "Mekanik Newton",
  "topik": "<SUBTOPIK>",
  "aras": "Rendah | Sederhana | Tinggi",
  "konstruk": "Mengingat | Memahami | Mengaplikasi | Menganalisis | Menilai | Mencipta",
  "soalan": "<TEKS_SOALAN_BERSIH>",
  "rajahUrl": "<URL_R2_WEBP_JIKA_ADA>",
  "pilihan": [
    { "id": "A", "teks": "..." },
    { "id": "B", "teks": "..." },
    { "id": "C", "teks": "..." },
    { "id": "D", "teks": "..." }
  ],
  "jawapanBetul": "B",
  "penerangan": "<PENERANGAN_KONSEP_FIZIK>",
  "markah": 1,
  "statusSemakan": "Disemak (Modul K1)",
  "jawapan": "B"
}
```

---

## Fasa 6: Senarai Semak Pra-Penyatuan (Pre-Flight Verification Checklist)

Sebelum sebarang modul/topik baharu digabungkan (*merged*) ke dalam `dskp-data.js`:

- [ ] **Semakan Sintaks JS:** Jalankan `node -c dskp-data.js` dan `node -c app.js` (Mesti keluar exit code 0).
- [ ] **Ujian Paparan QCard:** Buka Bank Soalan, pastikan ayat soalan melimpah merentasi kad secara rata (*justified*), bukan patah setiap separuh baris.
- [ ] **Pemeriksaan Rajah 100% Sah:** Semua URL R2 boleh diakses (HTTP 200) dan imej tidak dipotong teks soalan atau tiada garisan lajur hitam.
- [ ] **Penyelarasan Soalan Bersiri Roman:** Soalan jenis pernyataan I, II, III disusun kemas dengan perenggan dwibahasa masing-masing.
- [ ] **Pilihan Jawapan Bersih:** Tiada teks berulang seperti `I dan III I and II I and III`.
- [ ] **Sandaran Keselamatan Dibuat:** Salinan fail disimpan ke `/Users/halimroslan/NEW CIDS SUITES PRO/`.
