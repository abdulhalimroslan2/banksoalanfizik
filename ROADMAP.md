# 🗺️ MASTER ROADMAP: HUB BANK SOALAN FIZIK SPM (KSSM KOD 4531)

> **Status Projek:** FASA 6 (Ingestion Bab 4 Haba & Precision Crop v2) ✅ SELESAI | FASA 7 🔄 AKTIF  
> **Sasaran Penuh:** Meliputi 100% Silibus KSSM Tingkatan 4 (6 Bab) & Tingkatan 5 (7 Bab) bagi Kertas 1, Kertas 2, dan Kertas 3  
> **Kemas Kini Terakhir:** 2026-09-24  
> **Fail Pangkalan Data Utama:** [`dskp-data.js`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/dskp-data.js)

---

## 1. 📊 Status Kemajuan Semasa (Progress Tracker)

```
[████████████████████████████████░░░░░░░░░░░░░░░░░░] 60% Selesai (Fasa 1 - 6 Selesai)
Total Soalan Aktif: 504 Soalan K1 Objektif Berrajah Bersih (100% Disahkan & Diaudit)
```

| Fasa | Modul / Bab Silibus | Status | Bil. Soalan | Rajah R2 v2 | QA Invariants |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **Fasa 1** | Seni Bina UI & Tema Editorial | ✅ Selesai | N/A | N/A | 100% |
| **Fasa 2** | Enjin JSU & Pemasangan Kertas | ✅ Selesai | N/A | N/A | 100% |
| **Fasa 3** | Enjin Janaan DOCX Piawai LPM | ✅ Selesai | N/A | N/A | 100% |
| **Fasa 4** | Integrasi Cloudflare R2 CDN | ✅ Selesai | N/A | CDN Aktif | 100% |
| **Fasa 5A**| T4 Bab 1: Pengukuran (Measurement) | ✅ Selesai | 172 | 16 Rajah | 100% |
| **Fasa 5B**| T4 Bab 2: Daya & Gerakan I | ✅ Selesai | 134 | 48 Rajah | 100% |
| **Fasa 5C**| T4 Bab 3: Kegravitian (Gravitation) | ✅ Selesai | 93 | 52 Rajah v2 | 100% |
| **Fasa 6** | T4 Bab 4: Haba (Heat) & Crop v2 | ✅ Selesai | 105 | 71 Rajah v2 | 100% |
| **Fasa 7** | T4 Bab 5: Gelombang (Waves) | 🔄 Sedia Mula | ~90 (Est) | TBD | Pending |
| **Fasa 8** | T4 Bab 6: Cahaya dan Optik | ⏳ Seterusnya | ~95 (Est) | TBD | Pending |
| **Fasa 9** | Silibus Tingkatan 5 (Bab 1 – 7) | ⏳ Fasa 2026 | ~650 (Est) | TBD | Pending |
| **Fasa 10**| Modul Soalan Segar Kertas 2 (A/B/C) | ⏳ Perancangan | 100 Set | TBD | Pending |
| **Fasa 11**| Hub Kertas 3 (Amali Fizik DSKP) | ⏳ Perancangan | 15 Modul | TBD | Pending |
| **Fasa 12**| Portal Ujian Kendiri Pelajar & Eksport | ⏳ Perancangan | Web + App | TBD | Pending |

---

## 2. 🏆 Pencapaian Fasa Terdahulu (Completed Milestones)

### Fasa 1 – 4: Pembangunan Teras & Infrastruktur
- [x] **Tema Korporat Editorial Minimalist:** Reka bentuk UI mesra guru berasaskan tipografi moden, mod malam/siang (*dark/light mode*), dan paparan matriks analitis.
- [x] **Enjin Jadual Spesifikasi Ujian (JSU):** Pembina JSU automatik mengikut agihan aras kesukaran LPM (Rendah: 50%, Sederhana: 30%, Tinggi: 20%) dan pemetaan konstruk (K1–K4).
- [x] **Enjin Python DOCX (`docx_engine.py`):** Janaan kertas peperiksaan penuh lengkap dengan helaian maklumat rumus fizik (*formula sheet*) dan muka hadapan rasmi Lembaga Peperiksaan.
- [x] **Storan Grafik Cloudflare R2:** Pemindahan aset rajah bersaiz besar ke storan awan berkelajuan tinggi menggunakan format WebP 300 DPI dengan kualiti 95%.

### Fasa 5: Ingest Modul Konstruk Tingkatan 4 Bab 1 – Bab 3 (399 Soalan)
- [x] **Bab 1 Pengukuran (172 soalan):** Termasuk soalan kejituan, kepersisan, kepekaan, analisis ralat, dan penentukuran radas.
- [x] **Bab 2 Daya dan Gerakan I (134 soalan):** Termasuk analisis graf pita detik, gerakan linear, momentum, impuls, dan keseimbangan daya.
- [x] **Bab 3 Kegravitian (93 soalan):** Saringan penuh K1–K4 dengan pemotongan semula versi `_v2.webp` bagi membuang kapsyen teks `"Rajah []"` daripada 52 rajah stem dan pilihan graf.

### Fasa 6: Ingest Modul Konstruk Tingkatan 4 Bab 4: Haba (105 Soalan)
- [x] **105 Soalan Lengkap:** 21 soalan K1, 42 soalan K2, 30 soalan K3, dan 12 soalan K4.
- [x] **Audit Ketepatan Visual & Pemotongan Semula Rajah 37, 38, 46, 58, 64:** Membaiki clipping botol peti sejuk (Rajah 46), belon terpotong bawah (Rajah 38), label radiator (Rajah 64), kelalang dan tolok tekanan (Rajah 58), dan Objek B (Rajah 37) serta mengemas kini versi WebP di Cloudflare R2.
- [x] **Penyelesaian Audit Visual & Crop v2 (71 Rajah Stem):**
  - Mengesan dan membetulkan isu lajur Rajah 8 (pembetulan dari pilihan Q6 ke radas botol terapung di sudut atas kanan).
  - Melaksanakan pemotongan dwi-rajah bertingkat (*stacked dual diagram*) bagi Rajah 57 (dua picagari) dan Rajah 66 (dua cecair M/N) tanpa kapsyen perantaraan.
  - Membetulkan koordinat 20 rajah yang sebelum ini mencaplok teks kapsyen, perkataan soalan, atau tag punca `(Negeri: Tahun)`.
  - Mengesahkan 100% bebas ralat melalui audit OCR automatik `pytesseract`.
  - Menyelaraskan kesemua 71 URL rajah di `dskp-data.js` ke versi `_v2.webp`.

---

## 3. 🎯 Pelan Tindakan Fasa Seterusnya (Upcoming Roadmap)

### FASA 7: Ingestion Tingkatan 4 Bab 5 — Gelombang (Waves)
- **Sumber Bahan:** `/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 5 T4.pdf`
- **Sub-topik DSKP:**
  - SK 5.1 Asas Gelombang (Ayunan, Graf Sesaran-Masa & Sesaran-Jarak)
  - SK 5.2 Pelembapan dan Resonans
  - SK 5.3 Pantulan Gelombang
  - SK 5.4 Pembiasan Gelombang
  - SK 5.5 Pembelauan Gelombang
  - SK 5.6 Interferens Gelombang
  - SK 5.7 Gelombang Elektromagnet
- **Sasaran Output:**
  - Ekstraksi ~90 soalan objektif berformat dwibahasa.
  - Precision crop rajah gelombang tangki riak dan graf interferens terus pada standard `_v2.webp`.
  - Pengesahan 13 Golden Invariants dengan sifar ralat.

### FASA 8: Ingestion Tingkatan 4 Bab 6 — Cahaya dan Optik (Light & Optics)
- **Sumber Bahan:** Modul Konstruk K1 Bab 6 T4.
- **Sub-topik DSKP:**
  - SK 6.1 Pembiasan Cahaya & Hukum Snell
  - SK 6.2 Pantulan Dalam Penuh & Sudut Genting
  - SK 6.3 Pembentukan Imej oleh Kanta Cembung & Cekung
  - SK 6.4 Formula Kanta Nipis
  - SK 6.5 Peralatan Optik (Teleskop & Mikroskop Majmuk)
  - SK 6.6 Pembentukan Imej oleh Cermin Sfera

### FASA 9: Ingestion Silibus Penuh Tingkatan 5 (Bab 1 – Bab 7)
- Bab 1: Daya dan Gerakan II (Paduan & Leraian Daya, Kekenyalan)
- Bab 2: Tekanan (Tekanan Cecair, Gas, Atmosfera, Prinsip Pascal, Archimedes, Bernoulli)
- Bab 3: Elektrik (Arus, Beza Keupayaan, Rintangan, d.g.e & Rintangan Dalam, Kuasa)
- Bab 4: Keelektromagnetan (Daya Magnet, Aruhan Elektromagnet, Transformer)
- Bab 5: Elektronik (Diod Semikonduktor, Transistor)
- Bab 6: Fizik Nuklear (Reputan Radioaktif, Separuh Hayat, Tenaga Nuklear)
- Bab 7: Fizik Kuantum (Teori Kuantum, Kesan Fotoelektrik, Teori Foton Einstein)

### FASA 10: Modul Soalan Segar Kertas 2 (LPM Examination Rules)
- **Bahagian A (60 Markah):** 8 soalan struktur wajib berperingkat (Mengingat $\rightarrow$ Mengaplikasi $\rightarrow$ Menilai).
- **Bahagian B (20 Markah):** 2 soalan esei pilihan (Pilih 1). Fokus kepada membuat keputusan/modifikasi radas (10 markah) dan penerangan konsep (10 markah).
- **Bahagian C (20 Markah):** 1 soalan esei wajib berkonteks tinggi dengan jadual spesifikasi reka cipta & justifikasi saintifik.

### FASA 11: Hab Kertas 3 (Amali Fizik Instrumen DSKP 15 Markah)
- Pengurusan radas, senarai semak instrumen sains, taburan data, dan pemarkahan graf amali.

---

## 4. 🔒 Peraturan Pembangunan & Piawaian Kualiti (Quality Gates)
Setiap penambahan atau pengubahsuaian MESTI melepasi 4 pagar kualiti:
1. **Gate 1 (Backup Protocol):** Salinan fail asal wajib disalin ke `/Users/halimroslan/NEW CIDS SUITES PRO/` sebelum sebarang fail disentuh.
2. **Gate 2 (Strict Diagram Isolation):** Semua rajah dipotong tanpa teks `"Rajah [...]"`, tanpa teks kapsyen, dan tanpa teks soalan.
3. **Gate 3 (Automated Invariant Audit):** Wajib menjalankan `python3 scripts/validate_ingest_quality.py dskp-data.js` dan mencatat 100% PASS.
4. **Gate 4 (Living Documentation Sync):** Mengemas kini `PROJECT_FLOW.md` dan `ROADMAP.md` serta-merta pada setiap penutupan giliran pembangunan.
