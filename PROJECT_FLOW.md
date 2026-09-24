# 🧭 PROJECT FLOW & LIVING ARCHITECTURE: HUB BANK SOALAN FIZIK SPM

> **Status Semasa:** FASA 7 (Ingest Modul Bab 5 Gelombang & Precision Crop v2) ✅ SELESAI | FASA 8 (Ingest T4 Bab 6: Cahaya dan Optik) 🔄 SEDIA DIMULAKAN  
> **Tarikh Kemas Kini Terakhir:** 2026-09-24  
> **Direktori Utama Projek:** `/Users/halimroslan/Desktop/HUB BANK SOALAN FIZIK/FIZIK_SPM_HUB_PROJEK`  
> **Pelayan Tempatan:** `http://localhost:8192` | **GitHub Repo:** `https://github.com/abdulhalimroslan2/banksoalanfizik`  
> **Fail Pangkalan Data:** [`dskp-data.js`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/dskp-data.js) (656 Soalan Aktif)

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
| **Fasa 7** | **Ingest T4 Bab 5: Gelombang (Waves)** | ✅ Selesai | **148 soalan** (K1: 8, K2: 103, K3: 30, K4: 7) + **112 rajah stem v2** disahkan 100% bebas kebocoran kapsyen/teks soalan & pembaikan rajah puncak lajur. |
| **Fasa 8** | **Ingest T4 Bab 6: Cahaya dan Optik** | 🔄 Sedia Mula | Sumber PDF sedia ada (`Modul Konstruk K1 BAB 6 T4.pdf`, ~95 soalan est); SK 6.1 – SK 6.6. |
| **Fasa 9** | **Ingest Silibus Penuh Tingkatan 5 (Bab 1 – 7)** | ⏳ Fasa 2026 | ~650 soalan est meliputi 7 bab DSKP Tingkatan 5. |
| **Fasa 10** | **Modul Soalan Segar Kertas 2 (LPM Rules)** | ⏳ Perancangan | Olahan soalan berstruktur & esei Bahagian A (60m), B (20m), C (20m). |
| **Fasa 11** | **Hub Kertas 3 (Amali Fizik DSKP)** | ⏳ Perancangan | 15 markah instrumen amali radas DSKP (Hukum Hooke, Ohm, dll). |
| **Fasa 12** | **Portal Ujian Kendiri Pelajar & Eksport** | ⏳ Perancangan | Modul latihan kendiri interaktif berasaskan web & analitik prestasi. |

---

## 3. 🛡️ 13 Peraturan Emas Pipeline (Golden Invariants)

1. **Invariant 1 (Strict Complete Stem Diagram Crop):** Semua rajah soalan dipotong tepat mengasingkan ilustrasi radas/graf SAHAJA. Teks kapsyen `Rajah [...] / Diagram [...]` dan tag asal `(Negeri: Tahun)` wajib dibuang sepenuhnya daripada fail grafik. Wajib menggunakan versi `_v2.webp`.
   - *Fallback Puncak Lajur (Cross-Column / Top-of-Column Rule):* Sekiranya rajah terletak di bahagian atas lajur kedua tanpa ayat soalan di atasnya (`stem_blocks` kosong kerana soalan bermula di lajur/muka surat terdahulu), sempadan atas $y_0$ wajib berundur ke puncak halaman lajur standard ($y_0 = 45.0\text{ pt}$). Dilarang menggunakan teks label radas dalam rajah sebagai pemotong sempadan atas.
   - *Pengasingan Garisan Menegak Pembahagi Lajur:* Bagi rajah di lajur kanan, sempadan kiri $x_0$ diselaraskan sekurang-kurangnya $305.0\text{ pt}$ bagi menghapuskan garis menegak pemisah lajur PDF (*vertical column divider artifact*) daripada terpotong masuk ke dalam WebP.
2. **Invariant 2 (Cross-Option & Graph Isolation):** Pilihan bergraf dipotong dengan sempadan selamat, zon negatif dicerap penuh, sifar anak panah bocor antara lajur.
3. **Invariant 3 (Zero Leaked Answers & Stray Digits):** Sifar nombor muka surat atau huruf sesat di hujung teks soalan.
4. **Invariant 4 (Full Justified Alignment & Typography Standards):** Teks soalan diratakan kiri dan kanan (*justified*) dengan terjemahan Bahasa Inggeris ditaip secara berformat condong (*italic*).
5. **Invariant 5 (Strict DSKP Semantic Classification Matrix):** Penjenisan standard kandungan mengikut SK DSKP rasmi KPM (SK 5.1 – SK 5.7 bagi Bab 5, SK 6.1 – SK 6.6 bagi Bab 6).
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
- [`dskp-data.js`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/dskp-data.js): Pangkalan data soalan Kertas 1 & Kertas 2 (656 soalan aktif).
- [`docx_engine.py`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/docx_engine.py): Enjin Python untuk penjanaan dokumen peperiksaan DOCX berpiawaian LPM.
- [`scripts/validate_ingest_quality.py`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/scripts/validate_ingest_quality.py): Skrip audit kualiti automatik 13 Invariants.
- [`scripts/crop_and_upload_b5_diagrams_v2.py`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/scripts/crop_and_upload_b5_diagrams_v2.py): Enjin cropping berketepatan tinggi & muat naik R2 bagi 112 rajah Bab 5.
- [`scripts/build_b5_dataset.py`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/scripts/build_b5_dataset.py): Skrip pembina struktur dataset 148 soalan Bab 5.
- [`PROJECT_FLOW.md`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/PROJECT_FLOW.md): Fail status projek hidup (Living Document).
- [`ROADMAP.md`](file:///Users/halimroslan/Desktop/HUB%20BANK%20SOALAN%20FIZIK/FIZIK_SPM_HUB_PROJEK/ROADMAP.md): Garis masa komprehensif, pencapaian, dan pelan pembangunan jangka panjang.

---

## 5. 📝 Log Keputusan Teknikal (Mini-ADRs)
- **[2026-09-24] - Resolusi Pemotongan Rajah di Puncak Lajur (Top-of-Column Multi-Page / Cross-Column Fallback Rule):** Menyelesaikan isu Rajah 49 (`MODUL_T4_B5_K2_Q61`) dan Rajah 101 (`MODUL_T4_B5_K3_Q24`) yang terpotong bahagian atas. Mengesan punca akar di mana calon blok teks di atas kapsyen tersalah mengenal pasti label radas seperti `"Loud speakers"` dan `"5.0 cm"` sebagai ayat soalan kerana ketiadaan `stem_blocks` di atas kapsyen pada lajur kedua. Enjin cropping dikemas kini supaya sekiranya `not stem_blocks`, sempadan $y_0$ berundur secara automatik ke $45.0\text{ pt}$ untuk menyerap keseluruhan bahagian atas radas.
- **[2026-09-24] - Pengasingan Garisan Menegak Pembahagi Lajur ($x_0 = 305.0\text{ pt}$):** Menetapkan had kiri minimum lajur kanan kepada $305.0\text{ pt}$ (bukan $295\text{ pt}$) untuk menghapuskan garis pemisah lajur PDF daripada memasuki imej WebP (cth. Rajah 23).
- **[2026-09-24] - Penyelarasan Anomali Skema Soalan K4_Q04 Bab 5:** Skema asal modul menandakan jawapan C (laju dan panjang gelombang berkurang semasa pantulan gelombang air), walhal mengikut hukum fizik pantulan gelombang, laju dan panjang gelombang adalah tidak berubah (jawapan tepat secara teori ialah A). Jawapan C dikekalkan dalam `dskp-data.js` demi integriti skema asal modul, namun nota penjelasan fizik komprehensif dimasukkan dalam medan `penerangan` sebagai panduan guru dan murid.
- **[2026-09-24] - Pengesahan 100% 112 Rajah Stem Bab 5 pada Cloudflare R2:** Semua 112 rajah dimuat naik dengan format WebP 300 DPI, diuji status HTTP 200, dan disahkan sifar kebocoran kapsyen `Rajah [...]`.
- **[2026-09-24] - Pembetulan Pemotongan Ketepatan Rajah 37, 38, 46, 58, 64 Bab 4:** Mengesan dan membaiki sempadan koordinat bagi Rajah 46 (peti sejuk & botol kemek), Rajah 58 (kelalang dan tolok tekanan), Rajah 64 (radiator kereta), Rajah 38 (belon kedap udara), dan Rajah 37 (Objek B) dengan muat naik versi v2 ke Cloudflare R2.
- **[2026-09-24] - Penggabungan Dwi-Rajah Bertingkat (Rajah 57 & Rajah 66 Bab 4):** Pemotongan secara berasingan bagi radas (a) dan (b) lalu digabungkan secara bertingkat tanpa menyertakan kapsyen perantaraan.

---

## 6. ⏭️ Tindakan Semasa / Fasa Seterusnya
- [x] Transkripsi & saringan 105 soalan Tingkatan 4 Bab 4 (Haba).
- [x] Precision re-crop dan muat naik versi `_v2.webp` ke Cloudflare R2 bagi Bab 4.
- [x] **Fasa 7:** Ingestion Modul Konstruk Tingkatan 4 Bab 5: Gelombang (Waves) daripada fail PDF rasmi (148 soalan aktif: K1: 8, K2: 103, K3: 30, K4: 7; 112 rajah stem v2 300 DPI R2; 100% lulus 13 Invariants; audit kerosakan puncak lajur diselesaikan).
- [ ] **Fasa 8:** Ingestion Modul Konstruk Tingkatan 4 Bab 6: Cahaya dan Optik (Light and Optics) berteraskan SK 6.1 – SK 6.6 (~95 soalan est).
- [ ] **Fasa 10:** Persediaan modul soalan Kertas 2 (Bahagian A: 60 markah, Bahagian B: 20 markah, Bahagian C: 20 markah) mengikut piawaian LPM.
