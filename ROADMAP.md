# 🗺️ MASTER ROADMAP: HUB BANK SOALAN FIZIK SPM (KSSM KOD 4531)

> **Status Semasa:** FASA 7 (Ingestion Tingkatan 4 Bab 5: Gelombang) ✅ SELESAI | FASA 8 (Ingestion Tingkatan 4 Bab 6: Cahaya dan Optik) 🔄 SEDIA DIMULAKAN  
> **Kemas Kini Terakhir:** 2026-09-24  
> **Fail Pangkalan Data Utama:** [`dskp-data.js`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/dskp-data.js)

---

## 1. 📊 Status Kemajuan Semasa (Progress Tracker)

```
[█████████████████████████████████████████░░░░░░░] 75% Selesai (Fasa 1 - 7 Selesai)
Total Soalan Aktif: 656 Soalan K1 Objektif Berrajah Bersih (100% Disahkan & Diaudit)
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
| **Fasa 7** | T4 Bab 5: Gelombang (Waves) | ✅ Selesai | 148 | 112 Rajah v2 | 100% |
| **Fasa 8** | T4 Bab 6: Cahaya dan Optik | 🔄 Sedia Mula | ~95 (Est) | TBD | Pending |
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
- [x] **Penyelesaian Audit Visual & Crop v2 (71 Rajah Stem):** Mengasingkan dwi-rajah bertingkat bagi Rajah 57 dan Rajah 66, menyingkirkan kapsyen perantaraan, dan membetulkan penjajaran lajur Rajah 8.

### Fasa 7: Ingestion Tingkatan 4 Bab 5 — Gelombang (Waves) (148 Soalan)
- [x] **148 Soalan Modul Objektif Berpiawai:** 8 Mengingat (K1), 103 Memahami (K2), 30 Mengaplikasi (K3), 7 Menganalisis (K4) berteraskan SK 5.1 – SK 5.7.
- [x] **112 Rajah Stem Precision Crop v2:** Dipotong 300 DPI bebas teks kapsyen `Rajah [...]`, dihoskan pada Cloudflare R2 bucket `fizik-spm-bank`.
- [x] **Penyelesaian Isu Rajah Puncak Lajur (Top-of-Column Multi-Page):** Membaiki kerosakan pemotongan Rajah 49 (Q61) dan Rajah 101 (Q24) serta 10 rajah lain di puncak lajur dengan menguatkuasakan fallback sempadan atas $y_0 = 45.0\text{ pt}$ dan had kiri $x_0 = 305.0\text{ pt}$.
- [x] **100% Audit Kualiti (13 Invariants):** Melepasi semua saringan audit kualiti automatik `scripts/validate_ingest_quality.py` dan pengesahan sintaks JavaScript.

---

## 3. 🎯 Pelan Tindakan Fasa Seterusnya (Upcoming Roadmap)

### FASA 8: Ingestion Tingkatan 4 Bab 6 — Cahaya dan Optik (Light & Optics)
- **Sumber Bahan:** `/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 6 T4.pdf`
- **Sub-topik DSKP:**
  - SK 6.1 Pembiasan Cahaya & Hukum Snell
  - SK 6.2 Pantulan Dalam Penuh & Sudut Genting
  - SK 6.3 Pembentukan Imej oleh Kanta Cembung & Cekung
  - SK 6.4 Formula Kanta Nipis
  - SK 6.5 Peralatan Optik (Teleskop & Mikroskop Majmuk)
  - SK 6.6 Pembentukan Imej oleh Cermin Sfera
- **Sasaran Output:**
  - Ekstraksi ~95 soalan objektif dwibahasa (K1, K2, K3, K4).
  - Precision crop rajah optik berpiawai 300 DPI WebP (`_v2.webp`) menggunakan enjin baharu yang kalis top-of-column.
  - Pengesahan 13 Golden Invariants dengan sifar ralat.

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

### FASA 12: Portal Ujian Kendiri Pelajar & Eksport
- Antara muka interaktif mesra murid, mod simulasi peperiksaan berkomputer, analitik kelemahan konstruk, dan eksport laporan PDF/DOCX.

---

## 4. 🔒 Peraturan Pembangunan & Piawaian Kualiti (Quality Gates)
Setiap penambahan atau pengubahsuaian MESTI melepasi 4 pagar kualiti:
1. **Gate 1 (Backup Protocol):** Salinan fail asal wajib disalin ke `/Users/halimroslan/NEW CIDS SUITES PRO/` sebelum sebarang fail disentuh.
2. **Gate 2 (Strict Diagram Isolation):** Semua rajah dipotong tanpa teks `"Rajah [...]"`, tanpa teks kapsyen, dan tanpa teks soalan.
3. **Gate 3 (Automated Invariant Audit):** Wajib menjalankan `python3 scripts/validate_ingest_quality.py dskp-data.js` dan mencatat 100% PASS.
4. **Gate 4 (Living Documentation Sync):** Mengemas kini `PROJECT_FLOW.md` dan `ROADMAP.md` serta-merta pada setiap penutupan giliran pembangunan.
