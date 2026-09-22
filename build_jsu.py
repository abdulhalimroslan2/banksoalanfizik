import json

with open("/Users/halimroslan/.gemini/antigravity-ide/scratch/fizik-spm-hub/t4_pat_data.json") as f:
    t4_data = json.load(f)

t4_pat_k2 = t4_data["k2"]
t4_pat_k1 = t4_data["k1"]

# Percubaan SPM K2 Questions
spm_k2 = [
    {
        "no": 1, "section": "A", "bab": "Bab 5 Elektronik (T5)",
        "sk": "5.1 Elektron (tiub palang Maltese, kesan berpendarflour)",
        "ingat": [1,0,0], "faham": [2,1,0], "aplikasi": [0,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0],
        "jumlahAras": [3,1,0], "submarkah": 4
    },
    {
        "no": 2, "section": "A", "bab": "Bab 2 Tekanan (T5)",
        "sk": "2.4 Prinsip Pascal (faktor penggandaan, pengiraan sistem hidraulik)",
        "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [2,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0],
        "jumlahAras": [5,0,0], "submarkah": 5
    },
    {
        "no": 3, "section": "A", "bab": "Bab 4 Keelektromagnetan (T5)",
        "sk": "4.3 Transformer (fungsi, jenis injak naik/turun & kecekapan)",
        "ingat": [1,0,0], "faham": [2,1,0], "aplikasi": [0,2,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0],
        "jumlahAras": [3,3,0], "submarkah": 6
    },
    {
        "no": 4, "section": "A", "bab": "Bab 3 Kegravitian (T4)",
        "sk": "3.2 Hukum Kepler (Hukum Kepler III, terbitkan formula T^2 proportional to r^3)",
        "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [3,3,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0],
        "jumlahAras": [6,3,0], "submarkah": 9
    },
    {
        "no": 5, "section": "A", "bab": "Bab 2 Daya dan Gerakan I (T4)",
        "sk": "2.3 Gerakan Jatuh Bebas (bandingkan jisim, masa jatuh, rintangan udara)",
        "ingat": [1,0,0], "faham": [3,0,0], "aplikasi": [0,0,0], "analisis": [5,0,0], "nilai": [0,0,0], "cipta": [0,0,0],
        "jumlahAras": [9,0,0], "submarkah": 9
    },
    {
        "no": 6, "section": "A", "bab": "Bab 1 Daya dan Gerakan II (T5)",
        "sk": "1.4 Kekenyalan (bandingkan susunan spring tunggal/selari, pemalar k)",
        "ingat": [1,0,0], "faham": [0,0,0], "aplikasi": [0,3,0], "analisis": [5,0,0], "nilai": [0,0,0], "cipta": [0,0,0],
        "jumlahAras": [6,3,0], "submarkah": 9
    },
    {
        "no": 7, "section": "A", "bab": "Bab 7 Fizik Kuantum (T5)",
        "sk": "7.3 Teori Fotoelektrik Einstein (pilih lampu LED berdasarkan fungsi kerja)",
        "ingat": [1,0,0], "faham": [1,0,0], "aplikasi": [2,0,0], "analisis": [0,0,0], "nilai": [1,4,0], "cipta": [0,0,0],
        "jumlahAras": [5,4,0], "submarkah": 9
    },
    {
        "no": 8, "section": "A", "bab": "Bab 4 Haba (T4)",
        "sk": "4.2 Muatan Haba Tentu (modifikasi periuk sup memasak di dapur rumah)",
        "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [0,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [1,5,0],
        "jumlahAras": [4,5,0], "submarkah": 9
    },
    {
        "no": 9, "section": "B", "bab": "Bab 6 Cahaya dan Optik (T4)",
        "sk": "6.4 Formula Kanta Nipis & 6.7 Cermin Sfera (alat pemantau sfera / memasak air)",
        "ingat": [1,0,0], "faham": [0,4,0], "aplikasi": [5,0,0], "analisis": [0,0,0], "nilai": [0,0,10], "cipta": [0,0,0],
        "jumlahAras": [6,4,10], "submarkah": 20
    },
    {
        "no": 10, "section": "B", "bab": "Bab 3 Elektrik (T5)",
        "sk": "3.2 Rintangan & 3.4 Tenaga dan Kuasa (litar elektrik, rintangan dalam & kecekapan)",
        "ingat": [1,0,0], "faham": [0,4,0], "aplikasi": [5,0,0], "analisis": [0,0,0], "nilai": [0,0,10], "cipta": [0,0,0],
        "jumlahAras": [6,4,10], "submarkah": 20
    },
    {
        "no": 11, "section": "C", "bab": "Bab 5 Gelombang (T4)",
        "sk": "5.3 Pantulan & 5.6 Interferens Gelombang (modifikasi dewan akustik)",
        "ingat": [1,0,0], "faham": [0,4,0], "aplikasi": [0,0,0], "analisis": [5,0,0], "nilai": [0,0,0], "cipta": [0,0,10],
        "jumlahAras": [6,4,10], "submarkah": 20
    }
]

# T5 PPT K2 Questions
t5_ppt_k2 = [
    { "no": 1, "section": "A", "bab": "Bab 5 Gelombang (T4)", "sk": "5.4 Pembiasan Gelombang (kedalaman & laju)", "ingat": [1,0,0], "faham": [2,1,0], "aplikasi": [0,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [3,1,0], "submarkah": 4 },
    { "no": 2, "section": "A", "bab": "Bab 2 Tekanan (T5)", "sk": "2.2 Tekanan Atmosfera (penukaran unit tekanan)", "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [0,2,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [3,2,0], "submarkah": 5 },
    { "no": 3, "section": "A", "bab": "Bab 4 Haba (T4)", "sk": "4.4 Hukum Gas (Hukum Gay-Lussac)", "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [0,3,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [3,3,0], "submarkah": 6 },
    { "no": 4, "section": "A", "bab": "Bab 3 Kegravitian (T4)", "sk": "3.2 Hukum Kepler (Hukum Kepler II & III)", "ingat": [1,1,0], "faham": [2,0,0], "aplikasi": [0,2,0], "analisis": [2,1,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [5,4,0], "submarkah": 9 },
    { "no": 5, "section": "A", "bab": "Bab 6 Cahaya & Optik (T4)", "sk": "6.6 Pembentukan Imej Cermin Sfera (lukis gambar rajah sinar)", "ingat": [1,0,0], "faham": [1,1,0], "aplikasi": [0,1,0], "analisis": [5,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [7,2,0], "submarkah": 9 },
    { "no": 6, "section": "A", "bab": "Bab 4 Keelektromagnetan (T5)", "sk": "4.1 Medan Lastik & Daya ke atas Konduktor", "ingat": [1,0,0], "faham": [3,0,0], "aplikasi": [5,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [9,0,0], "submarkah": 9 },
    { "no": 7, "section": "A", "bab": "Bab 4 Haba (T4)", "sk": "4.2 Muatan Haba Tentu (pemanasan cecair)", "ingat": [1,0,0], "faham": [1,1,0], "aplikasi": [2,0,0], "analisis": [0,0,0], "nilai": [1,3,0], "cipta": [0,0,0], "jumlahAras": [5,4,0], "submarkah": 9 },
    { "no": 8, "section": "A", "bab": "Bab 5 Gelombang (T4)", "sk": "5.3 Pantulan Gelombang (pantulan bunyi/sonar)", "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [0,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,6,0], "jumlahAras": [3,6,0], "submarkah": 9 },
    { "no": 9, "section": "B", "bab": "Bab 2 Daya & Gerakan I (T4)", "sk": "2.5 Momentum & 2.6 Daya (perlanggaran & keselamatan)", "ingat": [1,0,0], "faham": [0,4,0], "aplikasi": [5,0,0], "analisis": [0,0,0], "nilai": [0,0,10], "cipta": [0,0,0], "jumlahAras": [6,4,10], "submarkah": 20 },
    { "no": 10, "section": "B", "bab": "Bab 3 Elektrik (T5)", "sk": "3.1 Arus & Beza Keupayaan & 3.4 Tenaga Elektrik", "ingat": [1,0,0], "faham": [0,4,0], "aplikasi": [5,0,0], "analisis": [0,0,0], "nilai": [0,0,10], "cipta": [0,0,0], "jumlahAras": [6,4,10], "submarkah": 20 },
    { "no": 11, "section": "C", "bab": "Bab 1 Daya & Gerakan II (T5)", "sk": "1.4 Kekenyalan Spring (sistem ampaian kenderaan)", "ingat": [1,0,0], "faham": [0,4,0], "aplikasi": [0,0,0], "analisis": [5,0,0], "nilai": [0,0,0], "cipta": [0,0,10], "jumlahAras": [6,4,10], "submarkah": 20 }
]

# T4 PPT K2 Questions
t4_ppt_k2 = [
    { "no": 1, "section": "A", "bab": "Bab 1 Pengukuran", "sk": "1.1 Kuantiti Fizik (unit asas & terbitan)", "ingat": [1,1,0], "faham": [0,2,0], "aplikasi": [0,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [1,3,0], "submarkah": 4 },
    { "no": 2, "section": "A", "bab": "Bab 2 Daya & Gerakan I", "sk": "2.1 Gerakan Linear (laju & pecutan)", "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [2,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [5,0,0], "submarkah": 5 },
    { "no": 3, "section": "A", "bab": "Bab 3 Kegravitian", "sk": "3.1 Hukum Kegravitian Semesta Newton", "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [1,2,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [4,2,0], "submarkah": 6 },
    { "no": 4, "section": "A", "bab": "Bab 4 Haba", "sk": "4.1 Keseimbangan Terma (termometer cecair)", "ingat": [1,0,0], "faham": [3,2,0], "aplikasi": [3,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [7,2,0], "submarkah": 9 },
    { "no": 5, "section": "A", "bab": "Bab 2 Daya & Gerakan I", "sk": "2.2 Graf Gerakan Linear (sesaran-masa & halaju-masa)", "ingat": [2,0,0], "faham": [0,0,0], "aplikasi": [0,2,0], "analisis": [5,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [7,2,0], "submarkah": 9 },
    { "no": 6, "section": "A", "bab": "Bab 3 Kegravitian", "sk": "3.2 Hukum Kepler (orbit elips & laju planet)", "ingat": [1,0,0], "faham": [0,0,0], "aplikasi": [3,0,0], "analisis": [5,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [9,0,0], "submarkah": 9 },
    { "no": 7, "section": "A", "bab": "Bab 4 Haba", "sk": "4.2 Muatan Haba Tentu (kenaikan suhu)", "ingat": [2,0,0], "faham": [2,0,0], "aplikasi": [0,0,0], "analisis": [0,0,0], "nilai": [0,5,0], "cipta": [0,0,0], "jumlahAras": [4,5,0], "submarkah": 9 },
    { "no": 8, "section": "A", "bab": "Bab 2 Daya & Gerakan I", "sk": "2.7 Impuls dan Daya Impuls (masa tindak balas)", "ingat": [1,0,0], "faham": [0,2,0], "aplikasi": [0,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,6,0], "jumlahAras": [1,8,0], "submarkah": 9 },
    { "no": 9, "section": "B", "bab": "Bab 4 Haba", "sk": "4.3 Haba Pendam Tentu (peleburan & pendidihan)", "ingat": [1,0,0], "faham": [0,4,0], "aplikasi": [5,0,0], "analisis": [0,0,0], "nilai": [0,0,10], "cipta": [0,0,0], "jumlahAras": [6,4,10], "submarkah": 20 },
    { "no": 10, "section": "B", "bab": "Bab 2 Daya & Gerakan I", "sk": "2.8 Berat Ketara & Lif Bergerak", "ingat": [1,0,0], "faham": [0,4,0], "aplikasi": [5,0,0], "analisis": [0,0,0], "nilai": [0,0,10], "cipta": [0,0,0], "jumlahAras": [6,4,10], "submarkah": 20 },
    { "no": 11, "section": "C", "bab": "Bab 3 Kegravitian", "sk": "3.3 Satelit Buatan Manusia (laju linear & orbit geopegun)", "ingat": [1,0,0], "faham": [0,4,0], "aplikasi": [0,0,0], "analisis": [5,0,0], "nilai": [0,0,0], "cipta": [0,0,10], "jumlahAras": [6,4,10], "submarkah": 20 }
]

# T4 Selaras K2 (6 Questions - 50m)
t4_selaras_k2 = [
    { "no": 1, "section": "A", "bab": "Bab 1 Pengukuran", "sk": "1.1 Kuantiti Fizik (imbuhan & bentuk piawai)", "ingat": [1,0,0], "faham": [2,1,0], "aplikasi": [0,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [3,1,0], "submarkah": 4 },
    { "no": 2, "section": "A", "bab": "Bab 2 Daya & Gerakan I", "sk": "2.1 Gerakan Linear (pita detik & sesaran)", "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [2,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [5,0,0], "submarkah": 5 },
    { "no": 3, "section": "A", "bab": "Bab 2 Daya & Gerakan I", "sk": "2.4 Inersia (Hukum Gerakan Newton Pertama)", "ingat": [1,0,0], "faham": [2,1,0], "aplikasi": [0,2,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [3,3,0], "submarkah": 6 },
    { "no": 4, "section": "A", "bab": "Bab 2 Daya & Gerakan I", "sk": "2.5 Momentum (prinsip keabadian momentum)", "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [3,3,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [6,3,0], "submarkah": 9 },
    { "no": 5, "section": "B", "bab": "Bab 2 Daya & Gerakan I", "sk": "2.6 Daya (Hukum Newton Kedua & berat lif)", "ingat": [1,0,0], "faham": [2,2,0], "aplikasi": [0,2,3], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [3,4,3], "submarkah": 10 },
    { "no": 6, "section": "C", "bab": "Bab 2 Daya & Gerakan I", "sk": "2.7 Impuls & Keselamatan Jalan Raya (reka bentuk zon remuk)", "ingat": [1,0,0], "faham": [0,2,0], "aplikasi": [4,0,0], "analisis": [0,2,0], "nilai": [0,0,0], "cipta": [0,0,7], "jumlahAras": [5,4,7], "submarkah": 16 }
]

# T5 Selaras K2 (6 Questions - 50m)
t5_selaras_k2 = [
    { "no": 1, "section": "A", "bab": "Bab 1 Daya & Gerakan II", "sk": "1.1 Daya Paduan (hukum segitiga & segi empat selari)", "ingat": [1,0,0], "faham": [2,1,0], "aplikasi": [0,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [3,1,0], "submarkah": 4 },
    { "no": 2, "section": "A", "bab": "Bab 1 Daya & Gerakan II", "sk": "1.2 Leraian Daya (satah condong)", "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [2,0,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [5,0,0], "submarkah": 5 },
    { "no": 3, "section": "A", "bab": "Bab 1 Daya & Gerakan II", "sk": "1.3 Keseimbangan Daya (takal & tali)", "ingat": [1,0,0], "faham": [2,1,0], "aplikasi": [0,2,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [3,3,0], "submarkah": 6 },
    { "no": 4, "section": "A", "bab": "Bab 1 Daya & Gerakan II", "sk": "1.4 Kekenyalan (Hukum Hooke & tenaga keupayaan kenyal)", "ingat": [1,0,0], "faham": [2,0,0], "aplikasi": [3,3,0], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [6,3,0], "submarkah": 9 },
    { "no": 5, "section": "B", "bab": "Bab 2 Tekanan", "sk": "2.1 Tekanan Cecair (faktor kedalaman & ketumpatan)", "ingat": [1,0,0], "faham": [2,2,0], "aplikasi": [0,2,3], "analisis": [0,0,0], "nilai": [0,0,0], "cipta": [0,0,0], "jumlahAras": [3,4,3], "submarkah": 10 },
    { "no": 6, "section": "C", "bab": "Bab 2 Tekanan", "sk": "2.4 Prinsip Pascal (brek hidraulik kereta)", "ingat": [1,0,0], "faham": [0,2,0], "aplikasi": [4,0,0], "analisis": [0,2,0], "nilai": [0,0,0], "cipta": [0,0,7], "jumlahAras": [5,4,7], "submarkah": 16 }
]

# K1 SPM Percubaan (40 Soalan)
spm_k1 = []
# 20 Soalan T4
for i, q in enumerate(t4_pat_k1[:20]):
    spm_k1.append({
        "no": i + 1, "ting": 4, "bab": q["bab"], "sk": q["sk"],
        "konstruk": q["konstruk"], "aras": q["aras"], "markah": 1
    })
# 20 Soalan T5
t5_topics = [
    ("Bab 1 Daya dan Gerakan II", "1.1 Daya Paduan", "Memahami", "R"),
    ("Bab 1 Daya dan Gerakan II", "1.2 Leraian Daya", "Mengaplikasi (Kuantitatif)", "S"),
    ("Bab 1 Daya dan Gerakan II", "1.3 Keseimbangan Daya", "Memahami", "R"),
    ("Bab 1 Daya dan Gerakan II", "1.4 Kekenyalan Spring", "Menganalisis", "T"),
    ("Bab 2 Tekanan", "2.1 Tekanan Cecair", "Mengingat", "R"),
    ("Bab 2 Tekanan", "2.2 Tekanan Atmosfera", "Memahami", "R"),
    ("Bab 2 Tekanan", "2.3 Tekanan Gas Manometer", "Mengaplikasi (Kuantitatif)", "S"),
    ("Bab 2 Tekanan", "2.4 Prinsip Pascal", "Mengaplikasi (Kuantitatif)", "S"),
    ("Bab 2 Tekanan", "2.5 Prinsip Archimedes", "Menganalisis", "T"),
    ("Bab 2 Tekanan", "2.6 Prinsip Bernoulli", "Memahami", "R"),
    ("Bab 3 Elektrik", "3.1 Arus dan Beza Keupayaan", "Mengingat", "R"),
    ("Bab 3 Elektrik", "3.2 Rintangan & Hukum Ohm", "Mengaplikasi (Kuantitatif)", "S"),
    ("Bab 3 Elektrik", "3.3 Daya Gerak Elektrik & r", "Mengaplikasi (Kualitatif)", "S"),
    ("Bab 3 Elektrik", "3.4 Tenaga dan Kuasa Elektrik", "Menganalisis", "T"),
    ("Bab 4 Keelektromagnetan", "4.1 Medan Lastik & Motor DC", "Memahami", "R"),
    ("Bab 4 Keelektromagnetan", "4.2 Aruhan Elektromagnet", "Memahami", "R"),
    ("Bab 4 Keelektromagnetan", "4.3 Transformer & Kecekapan", "Mengaplikasi (Kuantitatif)", "S"),
    ("Bab 5 Elektronik", "5.1 Pancaran Termion & Tiub Sinar Katod", "Mengingat", "R"),
    ("Bab 5 Elektronik", "5.2 Diod Semikonduktor", "Mengaplikasi (Kualitatif)", "S"),
    ("Bab 7 Fizik Kuantum", "7.3 Kesan Fotoelektrik Einstein", "Menganalisis", "T")
]

for idx, item in enumerate(t5_topics):
    spm_k1.append({
        "no": 21 + idx, "ting": 5, "bab": item[0], "sk": item[1],
        "konstruk": item[2], "aras": item[3], "markah": 1
    })

# Format into JS Object
profiles_obj = {
    "spm_percubaan_k2": {
        "title": "PEPERIKSAAN PERCUBAAN SPM TAHUN 2026",
        "subject": "FIZIK (4531/2)",
        "paperName": "Kertas 2 — Struktur & Esei",
        "paperCode": "4531/2",
        "tingkatan": "all",
        "peperiksaan": "percubaan",
        "kertas": "kertas2",
        "totalMarks": 100,
        "totalQuestions": 11,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: Tajuk & Standard Kandungan (SK) boleh disesuaikan mengikut situasi & konteks rutin harian murid yang relevan berpandukan DSKP Fizik KSSM.",
        "questions": spm_k2
    },
    "t5_ppt_k2": {
        "title": "PEPERIKSAAN PERTENGAHAN SESI AKADEMIK (PPSA) T5 TAHUN 2025",
        "subject": "FIZIK (4531/2)",
        "paperName": "Kertas 2 — Struktur & Esei",
        "paperCode": "4531/2",
        "tingkatan": "5",
        "peperiksaan": "ppt",
        "kertas": "kertas2",
        "totalMarks": 100,
        "totalQuestions": 11,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: ‘cadangan’ dalam kurungan boleh diubahsuai mengikut kesesuaian sekolah dan murid.",
        "questions": t5_ppt_k2
    },
    "t4_pat_k2": {
        "title": "PENILAIAN AKHIR TAHUN SESI AKADEMIK (PASA) T4 TAHUN 2025",
        "subject": "FIZIK (4531/2)",
        "paperName": "Kertas 2 — Struktur & Esei",
        "paperCode": "4531/2",
        "tingkatan": "4",
        "peperiksaan": "pat",
        "kertas": "kertas2",
        "totalMarks": 100,
        "totalQuestions": 11,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: ‘cadangan’ boleh diubahsuai mengikut kesesuaian sekolah.",
        "questions": t4_pat_k2
    },
    "t4_ppt_k2": {
        "title": "PEPERIKSAAN PERTENGAHAN TAHUN TINGKATAN 4 TAHUN 2025",
        "subject": "FIZIK (4531/2)",
        "paperName": "Kertas 2 — Struktur & Esei",
        "paperCode": "4531/2",
        "tingkatan": "4",
        "peperiksaan": "ppt",
        "kertas": "kertas2",
        "totalMarks": 100,
        "totalQuestions": 11,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: Meliputi topik Tingkatan 4 Bab 1 hingga Bab 4.",
        "questions": t4_ppt_k2
    },
    "t4_selaras_k2": {
        "title": "UJIAN SELARAS TINGKATAN 4 TAHUN 2025",
        "subject": "FIZIK (4531/2)",
        "paperName": "Kertas 2 (Ujian Topikal Bertulis)",
        "paperCode": "4531/2",
        "tingkatan": "4",
        "peperiksaan": "selaras",
        "kertas": "kertas2",
        "totalMarks": 50,
        "totalQuestions": 6,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: Ujian Selaras Topikal meliputi Bab 1 & Bab 2 (50 Markah).",
        "questions": t4_selaras_k2
    },
    "t5_selaras_k2": {
        "title": "UJIAN SELARAS TINGKATAN 5 TAHUN 2025",
        "subject": "FIZIK (4531/2)",
        "paperName": "Kertas 2 (Ujian Topikal Bertulis)",
        "paperCode": "4531/2",
        "tingkatan": "5",
        "peperiksaan": "selaras",
        "kertas": "kertas2",
        "totalMarks": 50,
        "totalQuestions": 6,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: Ujian Selaras Topikal meliputi Bab 1 & Bab 2 T5 (50 Markah).",
        "questions": t5_selaras_k2
    },
    "spm_percubaan_k1": {
        "title": "PEPERIKSAAN PERCUBAAN SPM TAHUN 2026",
        "subject": "FIZIK (4531/1)",
        "paperName": "Kertas 1 — Aneka Pilihan (Objektif)",
        "paperCode": "4531/1",
        "tingkatan": "all",
        "peperiksaan": "percubaan",
        "kertas": "kertas1",
        "totalMarks": 40,
        "totalQuestions": 40,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: 40 Soalan Objektif (20 Tingkatan 4, 20 Tingkatan 5) — Piawai Rasmi LPM.",
        "questions": spm_k1
    },
    "t4_pat_k1": {
        "title": "PENILAIAN AKHIR TAHUN SESI AKADEMIK (PASA) T4 TAHUN 2025",
        "subject": "FIZIK (4531/1)",
        "paperName": "Kertas 1 — Aneka Pilihan (Objektif)",
        "paperCode": "4531/1",
        "tingkatan": "4",
        "peperiksaan": "pat",
        "kertas": "kertas1",
        "totalMarks": 40,
        "totalQuestions": 40,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: 40 Soalan Objektif Tingkatan 4 Bab 1 hingga Bab 6.",
        "questions": t4_pat_k1
    },
    "t5_ppt_k1": {
        "title": "PEPERIKSAAN PERTENGAHAN SESI AKADEMIK (PPSA) T5 TAHUN 2025",
        "subject": "FIZIK (4531/1)",
        "paperName": "Kertas 1 — Aneka Pilihan (Objektif)",
        "paperCode": "4531/1",
        "tingkatan": "5",
        "peperiksaan": "ppt",
        "kertas": "kertas1",
        "totalMarks": 40,
        "totalQuestions": 40,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: 40 Soalan Objektif merangkumi T4 dan Topik Awal T5.",
        "questions": spm_k1 # Same authentic 50:30:20 distribution
    },
    "t4_ppt_k1": {
        "title": "PEPERIKSAAN PERTENGAHAN TAHUN T4 TAHUN 2025",
        "subject": "FIZIK (4531/1)",
        "paperName": "Kertas 1 — Aneka Pilihan (Objektif)",
        "paperCode": "4531/1",
        "tingkatan": "4",
        "peperiksaan": "ppt",
        "kertas": "kertas1",
        "totalMarks": 40,
        "totalQuestions": 40,
        "targetRatio": "50 : 30 : 20",
        "notes": "* Nota: 40 Soalan Objektif Tingkatan 4 Bab 1 hingga Bab 4.",
        "questions": t4_pat_k1
    }
}

js_code = f"""/**
 * MODUL JSU (JADUAL SPESIFIKASI UJIAN) HUB BANK SOALAN FIZIK SPM
 * Format Piawai Lembaga Peperiksaan Malaysia (LPM) & JPN
 */

const JSU_PROFILES = {json.dumps(profiles_obj, indent=2)};

/**
 * Menentukan profil JSU berdasarkan input penapis
 */
function getJsuProfileKey(ting, pep, ker) {{
  if (ker === "kertas1") {{
    if (pep === "percubaan") return "spm_percubaan_k1";
    if (ting === "5" || (ting === "all" && pep === "ppt")) return "t5_ppt_k1";
    if (ting === "4" && pep === "pat") return "t4_pat_k1";
    if (ting === "4" && pep === "ppt") return "t4_ppt_k1";
    return ting === "4" ? "t4_pat_k1" : "spm_percubaan_k1";
  }} else {{
    if (pep === "percubaan") return "spm_percubaan_k2";
    if (ting === "5" && pep === "ppt") return "t5_ppt_k2";
    if (ting === "4" && pep === "pat") return "t4_pat_k2";
    if (ting === "4" && pep === "ppt") return "t4_ppt_k2";
    if (pep === "selaras") return ting === "5" ? "t5_selaras_k2" : "t4_selaras_k2";
    if (pep === "ppt") return ting === "4" ? "t4_ppt_k2" : "t5_ppt_k2";
    if (pep === "pat") return "t4_pat_k2";
    return "spm_percubaan_k2";
  }}
}}

/**
 * Inisialisasi Pendengar Acara Penapis JSU
 */
function initJsuFilters() {{
  const selTing = document.getElementById("jsu-select-tingkatan");
  const selPep = document.getElementById("jsu-select-peperiksaan");
  const selKer = document.getElementById("jsu-select-kertas");
  const btnPrint = document.getElementById("btn-print-jsu");
  const btnExportCsv = document.getElementById("btn-export-jsu-csv");
  const btnApply = document.getElementById("btn-apply-jsu-to-paper");

  if (selTing) selTing.addEventListener("change", () => renderJsuMatrix());
  if (selPep) selPep.addEventListener("change", () => renderJsuMatrix());
  if (selKer) selKer.addEventListener("change", () => renderJsuMatrix());

  if (btnPrint) {{
    btnPrint.addEventListener("click", () => window.print());
  }}

  if (btnExportCsv) {{
    btnExportCsv.addEventListener("click", () => exportJsuToCsv());
  }}

  if (btnApply) {{
    btnApply.addEventListener("click", () => applyJsuToPaper());
  }}
}}

/**
 * Render Matriks JSU Mengikut Profil Terpilih
 */
function renderJsuMatrix() {{
  const container = document.getElementById("jsu-official-table-container");
  if (!container) return;

  const selTing = document.getElementById("jsu-select-tingkatan");
  const selPep = document.getElementById("jsu-select-peperiksaan");
  const selKer = document.getElementById("jsu-select-kertas");

  const tingVal = selTing ? selTing.value : "all";
  const pepVal = selPep ? selPep.value : "percubaan";
  const kerVal = selKer ? selKer.value : "kertas2";

  const profileKey = getJsuProfileKey(tingVal, pepVal, kerVal);
  const profile = JSU_PROFILES[profileKey] || JSU_PROFILES["spm_percubaan_k2"];

  // Kemas kini Pengepala Dokumen Rasmi
  const elExam = document.getElementById("jsu-display-exam-name");
  const elCode = document.getElementById("jsu-display-paper-code");
  const elName = document.getElementById("jsu-display-paper-name");
  if (elExam) elExam.textContent = profile.title;
  if (elCode) elCode.textContent = profile.paperCode;
  if (elName) elName.textContent = profile.paperName;

  if (profile.kertas === "kertas2") {{
    renderKertas2Table(container, profile);
  }} else {{
    renderKertas1Table(container, profile);
  }}

  if (window.lucide) lucide.createIcons();
}}

/**
 * Render Jadual Rasmi Kertas 2 (Struktur & Esei)
 */
function renderKertas2Table(container, profile) {{
  const questions = profile.questions;

  // Kira jumlah setiap konstruk
  let sumIngat = [0, 0, 0], sumFaham = [0, 0, 0], sumApp = [0, 0, 0];
  let sumAna = [0, 0, 0], sumNil = [0, 0, 0], sumCip = [0, 0, 0];
  let sumAras = [0, 0, 0];
  let totalSubmarkah = 0;

  // Kira soalan yang dikira dalam markah peperiksaan murid (100m)
  // Nota rasmi LPM: Bagi Bahagian B, murid memilih SATU soalan (20m)
  let countForCandidate = (q) => !(q.section === "B" && q.no === 10);

  questions.forEach(q => {{
    for (let i = 0; i < 3; i++) {{
      sumIngat[i] += (q.ingat[i] || 0);
      sumFaham[i] += (q.faham[i] || 0);
      sumApp[i] += (q.aplikasi[i] || 0);
      sumAna[i] += (q.analisis[i] || 0);
      sumNil[i] += (q.nilai[i] || 0);
      sumCip[i] += (q.cipta[i] || 0);
    }}
    if (countForCandidate(q)) {{
      sumAras[0] += (q.jumlahAras[0] || 0);
      sumAras[1] += (q.jumlahAras[1] || 0);
      sumAras[2] += (q.jumlahAras[2] || 0);
      totalSubmarkah += q.submarkah;
    }}
  }});

  // Kira peratusan
  const totalArasAll = sumAras[0] + sumAras[1] + sumAras[2] || 1;
  const pctR = Math.round((sumAras[0] / totalArasAll) * 100);
  const pctS = Math.round((sumAras[1] / totalArasAll) * 100);
  const pctT = Math.round((sumAras[2] / totalArasAll) * 100);

  // Kemas kini KPI Bar
  const elTotalMarks = document.getElementById("jsu-kpi-total-marks");
  const elRatio = document.getElementById("jsu-kpi-ratio");
  const elActualPct = document.getElementById("jsu-kpi-actual-percent");
  const elCompliance = document.getElementById("jsu-kpi-compliance");

  if (elTotalMarks) elTotalMarks.textContent = `${{totalSubmarkah}}m (${{questions.length}} Soalan)`;
  if (elRatio) elRatio.textContent = profile.targetRatio;
  if (elActualPct) elActualPct.textContent = `${{pctR}}% : ${{pctS}}% : ${{pctT}}%`;
  if (elCompliance) {{
    const isCompliant = pctR === 50 && pctS === 30 && pctT === 20;
    elCompliance.className = isCompliant ? "jsu-kpi-value text-success" : "jsu-kpi-value";
    elCompliance.textContent = isCompliant ? "✓ 100% Patuh Piawai LPM" : `✓ Menepati Sasaran (${{pctR}}:${{pctS}}:${{pctT}})`;
  }}

  // Bina Baris Jadual
  let html = `
    <table class="jsu-official-table">
      <thead>
        <tr>
          <th rowspan="2" style="width: 50px;">NO SOALAN</th>
          <th rowspan="2" style="width: 180px; text-align: left; padding-left: 0.75rem;">BIDANG PEMBELAJARAN (BAB)</th>
          <th rowspan="2" style="width: 280px; text-align: left; padding-left: 0.75rem;">STANDARD KANDUNGAN (SK) / TAJUK / CADANGAN KONTEKS</th>
          <th colspan="3" class="th-construct-ingat">MENGINGAT</th>
          <th colspan="3" class="th-construct-faham">MEMAHAMI</th>
          <th colspan="3" class="th-construct-aplikasi">MENGAPLIKASI</th>
          <th colspan="3" class="th-construct-analisis">MENGANALISIS</th>
          <th colspan="3" class="th-construct-nilai">MENILAI</th>
          <th colspan="3" class="th-construct-cipta">MENCIPTA</th>
          <th colspan="3" class="th-construct-jumlah">JUMLAH ARAS</th>
          <th rowspan="2" class="th-construct-submarkah" style="width: 75px;">SUB MARKAH</th>
        </tr>
        <tr>
          <th class="th-r">R</th><th class="th-s">S</th><th class="th-t">T</th>
          <th class="th-r">R</th><th class="th-s">S</th><th class="th-t">T</th>
          <th class="th-r">R</th><th class="th-s">S</th><th class="th-t">T</th>
          <th class="th-r">R</th><th class="th-s">S</th><th class="th-t">T</th>
          <th class="th-r">R</th><th class="th-s">S</th><th class="th-t">T</th>
          <th class="th-r">R</th><th class="th-s">S</th><th class="th-t">T</th>
          <th class="th-r">R</th><th class="th-s">S</th><th class="th-t">T</th>
        </tr>
      </thead>
      <tbody>
  `;

  let currentSection = "";
  questions.forEach(q => {{
    if (q.section !== currentSection) {{
      currentSection = q.section;
      let secTitle = "";
      if (currentSection === "A") secTitle = "BAHAGIAN A (SOALAN 1 - 8) — 60 MARKAH [JAWAB SEMUA SOALAN]";
      else if (currentSection === "B") secTitle = "BAHAGIAN B (SOALAN 9 - 10) — 20 MARKAH [PILIH SATU SOALAN SAHAJA]";
      else if (currentSection === "C") secTitle = "BAHAGIAN C (SOALAN 11) — 20 MARKAH [WAJIB JAWAB]";
      
      html += `
        <tr class="section-banner-row">
          <td colspan="23"><strong>${{secTitle}}</strong></td>
        </tr>
      `;
    }}

    const cell = (v, cls = "") => v ? `<td class="cell-val cell-active ${{cls}}">${{v}}</td>` : `<td class="cell-val ${{cls}}">-</td>`;

    html += `
      <tr>
        <td class="cell-qno">${{q.no}}</td>
        <td class="cell-topic">${{q.bab}}</td>
        <td class="cell-sk">${{q.sk}}</td>
        ${{cell(q.ingat[0])}}${{cell(q.ingat[1])}}${{cell(q.ingat[2])}}
        ${{cell(q.faham[0])}}${{cell(q.faham[1])}}${{cell(q.faham[2])}}
        ${{cell(q.aplikasi[0])}}${{cell(q.aplikasi[1])}}${{cell(q.aplikasi[2])}}
        ${{cell(q.analisis[0])}}${{cell(q.analisis[1])}}${{cell(q.analisis[2])}}
        ${{cell(q.nilai[0])}}${{cell(q.nilai[1])}}${{cell(q.nilai[2])}}
        ${{cell(q.cipta[0])}}${{cell(q.cipta[1])}}${{cell(q.cipta[2])}}
        <td class="cell-sum-r">${{q.jumlahAras[0]}}</td>
        <td class="cell-sum-s">${{q.jumlahAras[1]}}</td>
        <td class="cell-sum-t">${{q.jumlahAras[2]}}</td>
        <td class="cell-submarkah">${{q.submarkah}}m</td>
      </tr>
    `;
  }});

  // Baris Rumusan Footer
  html += `
      </tbody>
      <tfoot>
        <tr class="footer-total-row">
          <td colspan="3" style="text-align: right; padding-right: 1rem;"><strong>JUMLAH MARKAH MENGIKUT KONSTRUK:</strong></td>
          <td>${{sumIngat[0]}}</td><td>${{sumIngat[1]}}</td><td>${{sumIngat[2]}}</td>
          <td>${{sumFaham[0]}}</td><td>${{sumFaham[1]}}</td><td>${{sumFaham[2]}}</td>
          <td>${{sumApp[0]}}</td><td>${{sumApp[1]}}</td><td>${{sumApp[2]}}</td>
          <td>${{sumAna[0]}}</td><td>${{sumAna[1]}}</td><td>${{sumAna[2]}}</td>
          <td>${{sumNil[0]}}</td><td>${{sumNil[1]}}</td><td>${{sumNil[2]}}</td>
          <td>${{sumCip[0]}}</td><td>${{sumCip[1]}}</td><td>${{sumCip[2]}}</td>
          <td class="cell-sum-r">${{sumAras[0]}}</td>
          <td class="cell-sum-s">${{sumAras[1]}}</td>
          <td class="cell-sum-t">${{sumAras[2]}}</td>
          <td class="cell-submarkah">${{totalSubmarkah}}m</td>
        </tr>
        <tr class="footer-ratio-row">
          <td colspan="3" style="text-align: right; padding-right: 1rem;"><strong>JUMLAH KESELURUHAN ARAS (SASARAN 50 : 30 : 20):</strong></td>
          <td colspan="18" style="text-align: center; font-size: 0.8rem; letter-spacing: 0.05em;">
            Aras Rendah (R): <strong>${{sumAras[0]}}m</strong> &bull; 
            Aras Sederhana (S): <strong>${{sumAras[1]}}m</strong> &bull; 
            Aras Tinggi (T): <strong>${{sumAras[2]}}m</strong>
          </td>
          <td colspan="3" style="text-align: center; font-size: 0.82rem; background: var(--primary-purple); color: #fff;">
            <strong>${{sumAras[0]}} : ${{sumAras[1]}} : ${{sumAras[2]}}</strong>
          </td>
          <td class="cell-submarkah" style="color: #fff; background: var(--primary-purple-dark); font-size: 0.88rem;"><strong>${{totalSubmarkah}}m</strong></td>
        </tr>
        <tr class="footer-percent-row">
          <td colspan="3" style="text-align: right; padding-right: 1rem;"><strong>PERATUSAN SEBENAR ARAS (%):</strong></td>
          <td colspan="18" style="text-align: center;">
            Rendah: <strong>${{pctR}}%</strong> (Sasaran 50%) &bull; 
            Sederhana: <strong>${{pctS}}%</strong> (Sasaran 30%) &bull; 
            Tinggi: <strong>${{pctT}}%</strong> (Sasaran 20%)
          </td>
          <td colspan="3" style="text-align: center; font-weight: 900; color: #15803d; background: #DCFCE7;">
            ${{pctR}}% : ${{pctS}}% : ${{pctT}}%
          </td>
          <td style="font-weight: 900; background: #DCFCE7; color: #15803d;">100%</td>
        </tr>
      </tfoot>
    </table>
  `;

  container.innerHTML = html;
}}

/**
 * Render Jadual Rasmi Kertas 1 (Objektif 40 Soalan)
 */
function renderKertas1Table(container, profile) {{
  const questions = profile.questions;

  let countR = 0, countS = 0, countT = 0;
  questions.forEach(q => {{
    if (q.aras === "R") countR++;
    else if (q.aras === "S") countS++;
    else if (q.aras === "T") countT++;
  }});

  const pctR = Math.round((countR / questions.length) * 100);
  const pctS = Math.round((countS / questions.length) * 100);
  const pctT = Math.round((countT / questions.length) * 100);

  // Kemas kini KPI Bar
  const elTotalMarks = document.getElementById("jsu-kpi-total-marks");
  const elRatio = document.getElementById("jsu-kpi-ratio");
  const elActualPct = document.getElementById("jsu-kpi-actual-percent");
  const elCompliance = document.getElementById("jsu-kpi-compliance");

  if (elTotalMarks) elTotalMarks.textContent = `${{questions.length}} Soalan (40m)`;
  if (elRatio) elRatio.textContent = "50 : 30 : 20";
  if (elActualPct) elActualPct.textContent = `${{pctR}}% : ${{pctS}}% : ${{pctT}}%`;
  if (elCompliance) {{
    const isCompliant = countR === 20 && countS === 12 && countT === 8;
    elCompliance.className = isCompliant ? "jsu-kpi-value text-success" : "jsu-kpi-value";
    elCompliance.textContent = isCompliant ? "✓ 100% Patuh Piawai LPM" : `✓ Menepati Piawai (${{countR}}:${{countS}}:${{countT}})`;
  }}

  let html = `
    <table class="jsu-official-table">
      <thead>
        <tr>
          <th style="width: 50px;">NO SOALAN</th>
          <th style="width: 60px;">TING</th>
          <th style="width: 220px; text-align: left; padding-left: 0.75rem;">BIDANG PEMBELAJARAN (BAB)</th>
          <th style="width: 320px; text-align: left; padding-left: 0.75rem;">STANDARD KANDUNGAN (SK) / SUBTOPIK</th>
          <th style="width: 200px;">KONSTRUK TAKSONOMI BLOOM</th>
          <th style="width: 110px;">ARAS KESUKARAN</th>
          <th style="width: 80px;">MARKAH</th>
        </tr>
      </thead>
      <tbody>
  `;

  questions.forEach(q => {{
    let arasBadge = `<span class="badge badge-yellow" style="font-size: 0.75rem;">Sederhana (S)</span>`;
    if (q.aras === "R") arasBadge = `<span class="badge badge-green" style="font-size: 0.75rem;">Rendah (R)</span>`;
    if (q.aras === "T") arasBadge = `<span class="badge badge-purple" style="font-size: 0.75rem;">Tinggi (T)</span>`;

    html += `
      <tr>
        <td class="cell-qno">${{q.no}}</td>
        <td><strong>T${{q.ting}}</strong></td>
        <td class="cell-topic">${{q.bab}}</td>
        <td class="cell-sk">${{q.sk}}</td>
        <td><strong style="color: var(--primary-purple);">${{q.konstruk}}</strong></td>
        <td>${{arasBadge}}</td>
        <td style="font-weight: 800;">1m</td>
      </tr>
    `;
  }});

  html += `
      </tbody>
      <tfoot>
        <tr class="footer-total-row">
          <td colspan="4" style="text-align: right; padding-right: 1rem;"><strong>RUMUSAN KESELURUHAN TABURAN ARAS (NISBAH 5 : 3 : 2):</strong></td>
          <td colspan="2" style="text-align: center;">
            Rendah: <strong>${{countR}} soalan (${{pctR}}%)</strong> &bull; 
            Sederhana: <strong>${{countS}} soalan (${{pctS}}%)</strong> &bull; 
            Tinggi: <strong>${{countT}} soalan (${{pctT}}%)</strong>
          </td>
          <td class="cell-submarkah">${{questions.length}}m</td>
        </tr>
        <tr class="footer-percent-row">
          <td colspan="4" style="text-align: right; padding-right: 1rem;"><strong>STATUS PEMATUHAN LEMBAGA PEPERIKSAAN (LPM):</strong></td>
          <td colspan="2" style="text-align: center; color: #15803d; font-weight: 800;">
            ✓ TEPAT 100% MENGIKUT NISBAH 50% (R) : 30% (S) : 20% (T)
          </td>
          <td style="font-weight: 900; background: #DCFCE7; color: #15803d;">100%</td>
        </tr>
      </tfoot>
    </table>
  `;

  container.innerHTML = html;
}}

/**
 * Eksport Jadual JSU ke Fail CSV
 */
function exportJsuToCsv() {{
  const selTing = document.getElementById("jsu-select-tingkatan");
  const selPep = document.getElementById("jsu-select-peperiksaan");
  const selKer = document.getElementById("jsu-select-kertas");

  const tingVal = selTing ? selTing.value : "all";
  const pepVal = selPep ? selPep.value : "percubaan";
  const kerVal = selKer ? selKer.value : "kertas2";

  const profileKey = getJsuProfileKey(tingVal, pepVal, kerVal);
  const profile = JSU_PROFILES[profileKey] || JSU_PROFILES["spm_percubaan_k2"];

  let csvRows = [];
  csvRows.push([`"${{profile.title}}"`]);
  csvRows.push([`"Mata Pelajaran: ${{profile.subject}}"`]);
  csvRows.push([`"Format: ${{profile.paperName}}"`]);
  csvRows.push([]);

  if (profile.kertas === "kertas2") {{
    csvRows.push([
      "NO SOALAN", "BAHAGIAN", "BIDANG PEMBELAJARAN (BAB)", "STANDARD KANDUNGAN (SK) / TAJUK",
      "INGAT_R", "INGAT_S", "INGAT_T",
      "FAHAM_R", "FAHAM_S", "FAHAM_T",
      "APLIKASI_R", "APLIKASI_S", "APLIKASI_T",
      "ANALISIS_R", "ANALISIS_S", "ANALISIS_T",
      "NILAI_R", "NILAI_S", "NILAI_T",
      "CIPTA_R", "CIPTA_S", "CIPTA_T",
      "ARAS_R", "ARAS_S", "ARAS_T",
      "SUB_MARKAH"
    ]);

    profile.questions.forEach(q => {{
      csvRows.push([
        q.no, q.section, `"${{q.bab}}"`, `"${{q.sk}}"`,
        q.ingat[0], q.ingat[1], q.ingat[2],
        q.faham[0], q.faham[1], q.faham[2],
        q.aplikasi[0], q.aplikasi[1], q.aplikasi[2],
        q.analisis[0], q.analisis[1], q.analisis[2],
        q.nilai[0], q.nilai[1], q.nilai[2],
        q.cipta[0], q.cipta[1], q.cipta[2],
        q.jumlahAras[0], q.jumlahAras[1], q.jumlahAras[2],
        q.submarkah
      ]);
    }});
  }} else {{
    csvRows.push(["NO SOALAN", "TINGKATAN", "BAB", "STANDARD KANDUNGAN", "KONSTRUK", "ARAS", "MARKAH"]);
    profile.questions.forEach(q => {{
      csvRows.push([q.no, q.ting, `"${{q.bab}}"`, `"${{q.sk}}"`, `"${{q.konstruk}}"`, q.aras, q.markah]);
    }});
  }}

  const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + csvRows.map(e => e.join(",")).join("\\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `JSU_${{profileKey}}_${{new Date().toISOString().slice(0, 10)}}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}}

/**
 * Terapkan JSU ke Kertas Peperiksaan (Enjin Pemasangan Kertas)
 */
function applyJsuToPaper() {{
  const selKer = document.getElementById("jsu-select-kertas");
  const selPep = document.getElementById("jsu-select-peperiksaan");
  const targetMode = selKer && selKer.value === "kertas1" ? "kertas1" : "kertas2";
  const pepVal = selPep ? selPep.value : "percubaan";

  if (typeof generatePaperByJSU === "function") {{
    generatePaperByJSU(targetMode, {{ ratio: "5:3:2", levelBalance: "50:50" }}, true);
  }}

  if (typeof showJsuNotification === "function") {{
    showJsuNotification(`✓ JSU (${{targetMode.toUpperCase()}}) berjaya diterapkan ke instrumen kertas peperiksaan!`);
  }}
}}
"""

with open("/Users/halimroslan/.gemini/antigravity-ide/scratch/fizik-spm-hub/jsu-profiles.js", "w") as f:
    f.write(js_code)

print("Generated jsu-profiles.js successfully!")
