# 🧭 PROJECT FLOW & LIVING ARCHITECTURE: HUB BANK SOALAN FIZIK SPM

> **Status Semasa:** FASA 6 (Ingest Modul Bab 4 Haba & Precision Re-crop v2) ✅ SELESAI | FASA 7 (Ingest T4 Bab 5: Gelombang) 🔄 SEDIA DIMULAKAN  
> **Tarikh Kemas Kini Terakhir:** 2026-09-24  
> **Direktori Utama Projek:** `/Users/halimroslan/Desktop/HUB BANK SOALAN FIZIK/FIZIK_SPM_HUB_PROJEK`  
> **Pelayan Tempatan:** `http://localhost:8192` | **GitHub Repo:** `https://github.com/abdulhalimroslan2/banksoalanfizik`  
> **Fail Pangkalan Data:** [`dskp-data.js`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/dskp-data.js) (504 Soalan Aktif)

---

## 1. 🎯 Ringkasan Eksekutif & Skop Projek
Platform web bersepadu pengurusan Bank Soalan Fizik SPM (KSSM Kod 4531) merangkumi Kertas 1 (Objektif), Kertas 2 (Struktur & Esei), dan Kertas 3 (Amali berasaskan instrumen DSKP). Dilengkapi dengan pembina Jadual Spesifikasi Ujian (JSU) automatik, penapis Standard Kandungan (SK), integrasi storan grafik Cloudflare R2, dan enjin janaan dokumen peperiksaan DOCX berformat piawai LPM.

---

## 2. 📊 Status Fasa & Garis Kemajuan Projek

| Fasa | Nama Modul / Tugasan | Status | Output Utama & Metrik Kualiti |
| :---: | :--- | :---: | :--- |
| **Fasa 1** | **Mockup & Seni Bina UI Editorial** | ✅ Selesai | Rekaan korporat minimalist, palet Deep Violet & Accent Yellow. |
| **Fasa 2** | **Enjin JSU & Pemasangan Kertas** | ✅ Selesai | Matriks JSU K1 & K2 dinamik dengan nisbah konstruk LPM (5:3:2). |
| **Fasa 3** | **Enjin Janaan DOCX Peperiksaan** | ✅ Selesai | [`docx_engine.py`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/docx_engine.py) menghasilkan kertas soalan lengkap dengan cover page rasmi. |
| **Fasa 4** | **Integrasi Cloudflare R2 Bucket** | ✅ Selesai | Storan rajah WebP 300 DPI diasingkan ke endpoint `pub-833572f7cc244a0d9627cef82c840538.r2.dev`. |
| **Fasa 5** | **Ingest Verbatim DSKP T4 Bab 1 – Bab 3** | ✅ Selesai | 399 soalan dengan skema rasmi dan rajah WebP bersih v2. |
| **Fasa 6** | **Ingest Modul Bab 4: Haba & Precision Crop v2** | ✅ Selesai | **105 soalan** (K1: 21, K2: 42, K3: 30, K4: 12) + **71 rajah stem v2** disahkan 100% bebas kebocoran kapsyen/teks soalan. |
| **Fasa 7** | **Ingest T4 Bab 5: Gelombang (Waves)** | 🔄 Sedia Mula | Sumber PDF tersedia (~90 soalan est); saringan K1–K4 berteraskan SK 5.1 – SK 5.7. |
| **Fasa 8** | **Ingest T4 Bab 6: Cahaya dan Optik** | ⏳ Seterusnya | Sumber PDF sedia ada (~95 soalan est); SK 6.1 – SK 6.6. |
| **Fasa 9** | **Ingest Silibus Penuh Tingkatan 5 (Bab 1 – 7)** | ⏳ Fasa 2026 | ~650 soalan est meliputi 7 bab DSKP Tingkatan 5. |
| **Fasa 10** | **Modul Soalan Segar Kertas 2 (LPM Rules)** | ⏳ Perancangan | Olahan soalan berstruktur & esei Bahagian A (60m), B (20m), C (20m). |
| **Fasa 11** | **Hub Kertas 3 (Amali Fizik DSKP)** | ⏳ Perancangan | 15 markah instrumen amali radas DSKP (Hukum Hooke, Ohm, dll). |
| **Fasa 12** | **Portal Ujian Kendiri Pelajar & Eksport** | ⏳ Perancangan | Modul latihan kendiri interaktif berasaskan web & analitik prestasi. |
---

## 3. 🛡️ 13 Peraturan Emas Pipeline (Golden Invariants)

1. **Invariant 1 (Strict Complete Stem Diagram Crop):** Semua rajah soalan dipotong tepat mengasingkan ilustrasi radas/graf SAHAJA. Teks kapsyen `Rajah [...] / Diagram [...]` dan tag asal `(Negeri: Tahun)` wajib dibuang sepenuhnya daripada fail grafik. Wajib menggunakan versi `_v2.webp`.
2. **Invariant 2 (Cross-Option & Graph Isolation):** Pilihan bergraf dipotong dengan sempadan selamat, zon negatif dicerap penuh, sifar anak panah bocor antara lajur.
3. **Invariant 3 (Zero Leaked Answers & Stray Digits):** Sifar nombor muka surat atau huruf sesat di hujung teks soalan.
4. **Invariant 4 (Full Justified Alignment & Typography Standards):** Teks soalan diratakan kiri dan kanan (*justified*) dengan terjemahan Bahasa Inggeris ditaip secara berformat condong (*italic*).
5. **Invariant 5 (Strict DSKP Semantic Classification Matrix):** Penjenisan standard kandungan mengikut SK DSKP rasmi KPM (SK 4.1 – SK 4.4 bagi Bab 4).
6. **Invariant 6 (Modern WebP Formatting & Cloudflare R2 Upload):** Imej diproses pada 300 DPI mampatan WebP berkualiti tinggi (`quality=95`) dan disegerakkan ke bucket Cloudflare R2 `fizik-spm-bank`.
7. **Invariant 7 (Zero Swallowed Stems in Option A):** Mengasingkan sebarang teks soalan BI yang tersalah masuk ke Pilihan A semasa pengekstrakan OCR.
8. **Invariant 8 (Zero Stray Digits on Options):** Tiada sisa nombor soalan atau unit terpecah pada pilihan jawapan.
9. **Invariant 9 (Zero Diagram Text Leak):** Tiada teks label radas/skala paksi yang berulang dalam ayat soalan jika sudah terpapar dalam rajah.
10. **Invariant 10 (Clean Roman Numerals):** Pernyataan `I, II, III` disusun dengan perenggan dwibahasa terasing (`<br><br>`).
11. **Invariant 11 (Complete Physics Rationales & Answers):** Memasukkan jalan kira penuh dari skema untuk soalan pengiraan K3 dan huraian konsep untuk K1, K2, dan K4.
12. **Invariant 12 (Mandatory Backup Protocol):** Salinan sandaran automatik ke `/Users/halimroslan/NEW CIDS SUITES PRO/` sebelum sebarang fail utama disunting.
13. **Invariant 13 (Strict OCR Spelling, Spacing & Bilingual Slash):** Kawalan kualiti ketat terhadap ejaan dwibahasa (BM / BI) dengan pembahagi standard ` / ` tanpa perkataan bercantum (*zero squashed words*).

---

## 4. 📁 Peta Fail & Komponen Utama
- [`index.html`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/index.html): Muka depan korporat, paparan JSU, dan workbench bank soalan.
- [`app.js`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/app.js): Logik UI, pengurusan penapis, pemilihan soalan, dan pengiraan JSU.
- [`dskp-data.js`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/dskp-data.js): Pangkalan data soalan Kertas 1 & Kertas 2 (504 soalan aktif).
- [`docx_engine.py`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/docx_engine.py): Enjin Python untuk penjanaan dokumen peperiksaan DOCX berpiawaian LPM.
- [`scripts/validate_ingest_quality.py`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/scripts/validate_ingest_quality.py): Skrip audit kualiti automatik 13 Invariants.
- [`scripts/recrop_and_upload_all_b4_diagrams_v2.py`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/scripts/recrop_and_upload_all_b4_diagrams_v2.py): Enjin cropping berketepatan tinggi bagi 71 rajah Bab 4.
- [`PROJECT_FLOW.md`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/PROJECT_FLOW.md): Fail status projek hidup (Living Document).
- [`ROADMAP.md`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/ROADMAP.md): Garis masa komprehensif, pencapaian, dan pelan pembangunan jangka panjang.

---

## 5. 📝 Log Keputusan Teknikal (Mini-ADRs)
- **[2026-09-24] - Pembetulan Pemotongan Ketepatan Rajah 37, 38, 46, 58, 64 Bab 4:** Mengesan dan membaiki sempadan koordinat bagi Rajah 46 (peti sejuk & botol kemek dipotong penuh tanpa terpotong bahagian atas), Rajah 58 (kelalang dan tolok tekanan disertakan bersama tiub penyambung dan label radas penuh), Rajah 64 (radiator kereta disertakan bersama label radas dan anak panah penunjuk), Rajah 38 (belon dalam bekas kedap udara dipotong penuh tanpa terpotong bahagian bawah), dan Rajah 37 (Objek B disertakan penuh). Kesemua 5 rajah dimuat naik ke Cloudflare R2 versi v2 dan disahkan 100% sifar kebocoran teks kapsyen.
- **[2026-09-24] - Pembetulan Anomali Rajah 8 Bab 4:** Mengesan bahawa Rajah 8 sebelum ini memotong pilihan jawapan soalan 6 di lajur kiri. Penjajaran semula koordinat ke lajur kanan bahagian atas (Page 3: `x0=300, y0=70, x1=545, y1=154`) menyelesaikan isu ini sepenuhnya.
- **[2026-09-24] - Penggabungan Dwi-Rajah Bertingkat (Rajah 57 & Rajah 66):** Bagi soalan picagari (Rajah 57) dan eksperimen pemanasan cecair M/N (Rajah 66) yang mempunyai dua rajah (a) dan (b), pemotongan dibuat secara berasingan bagi radas (a) dan radas (b) lalu digabungkan secara bertingkat tanpa menyertakan kapsyen teks di tengah-tengah imej.
- **[2026-09-24] - Penguatkuasaan Imutabiliti `_v2.webp` Bab 4:** Selaras dengan Bab 3, semua 71 rajah stem Bab 4 diwajibkan menggunakan sufiks `_v2.webp` bagi memintas kekangan cache CDN dan mengesahkan kualiti audit Invariant 1 secara automatik.

---

## 6. ⏭️ Tindakan Semasa / Fasa Seterusnya
- [x] Transkripsi & saringan 105 soalan Tingkatan 4 Bab 4 (Haba).
- [x] Audit visual & koordinat penuh ke atas semua 71 rajah stem dan 8 imej pilihan graf Bab 4.
- [x] Precision re-crop dan muat naik versi `_v2.webp` ke Cloudflare R2 (100% Pass bagi Rajah 37, 38, 46, 58, 64 dll).
- [x] Pengemaskinian `dskp-data.js` dan skrip audit `validate_ingest_quality.py` (504/504 soalan 100% Pass).
- [ ] **Fasa 7:** Ingestion Modul Konstruk Tingkatan 4 Bab 5: Gelombang (Waves) daripada fail `/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 5 T4.pdf` menggunakan kemahiran `/spm-fizik-ingest-pipeline`.
- [ ] **Fasa 10:** Persediaan modul soalan Kertas 2 (Bahagian A: 60 markah, Bahagian B: 20 markah, Bahagian C: 20 markah) mengikut piawaian LPM.
