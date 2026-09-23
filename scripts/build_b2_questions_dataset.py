#!/usr/bin/env python3
"""
Assemble and classify all 163 questions for Tingkatan 4 Bab 2: Daya dan Gerakan I.
Hub Bank Soalan Fizik SPM
"""

import os
import sys
import json
import re
import fitz

# 1. Load verified answers and diagram URLs
with open('scratch/t4_b2_answers_verified.json', 'r', encoding='utf-8') as f:
    ANSWERS = json.load(f)

with open('scratch/t4_b2_diagram_urls.json', 'r', encoding='utf-8') as f:
    DIAGRAM_URLS = json.load(f)

# 2. DSKP Standards Definition for T4 Bab 2
SK_SP_MAP = {
    "2.1": {
        "sk": "SK 2.1 Gerakan Linear",
        "topik": "2.1 Gerakan Linear",
        "rujukanDskp": "DSKP Fizik T4 ms 28-29",
        "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
        "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
        "sps": {
            "2.1.1": "SP 2.1.1 Menghuraikan jenis gerakan linear bagi objek yang berada dalam keadaan pegun, halaju seragam dan halaju tidak seragam",
            "2.1.2": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
            "2.1.3": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear"
        }
    },
    "2.2": {
        "sk": "SK 2.2 Graf Gerakan Linear",
        "topik": "2.2 Graf Gerakan Linear",
        "rujukanDskp": "DSKP Fizik T4 ms 30-31",
        "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
        "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
        "sps": {
            "2.2.1": "SP 2.2.1 Mentafsir jenis gerakan dari graf sesaran-masa, halaju-masa dan pecutan-masa",
            "2.2.2": "SP 2.2.2 Menganalisis graf sesaran-masa dan graf halaju-masa untuk menentukan jarak, sesaran, halaju dan pecutan",
            "2.2.3": "SP 2.2.3 Menterjemah dan melakar graf gerakan linear",
            "2.2.4": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear"
        }
    },
    "2.3": {
        "sk": "SK 2.3 Gerakan Jatuh Bebas",
        "topik": "2.3 Gerakan Jatuh Bebas",
        "rujukanDskp": "DSKP Fizik T4 ms 32-33",
        "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
        "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
        "sps": {
            "2.3.1": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
            "2.3.2": "SP 2.3.2 Mengeksperimen untuk menentukan nilai pecutan graviti",
            "2.3.3": "SP 2.3.3 Menyelesaikan masalah yang melibatkan pecutan graviti bumi bagi objek yang jatuh bebas"
        }
    },
    "2.4": {
        "sk": "SK 2.4 Inersia",
        "topik": "2.4 Inersia",
        "rujukanDskp": "DSKP Fizik T4 ms 34-35",
        "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
        "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
        "sps": {
            "2.4.1": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
            "2.4.2": "SP 2.4.2 Mengeksperimen untuk mengenal pasti hubungan antara inersia dan jisim",
            "2.4.3": "SP 2.4.3 Mewajarkan kesan inersia dalam kehidupan harian"
        }
    },
    "2.5": {
        "sk": "SK 2.5 Momentum",
        "topik": "2.5 Momentum",
        "rujukanDskp": "DSKP Fizik T4 ms 36-37",
        "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
        "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
        "sps": {
            "2.5.1": "SP 2.5.1 Menerangkan momentum, p sebagai hasil darab jisim dan halaju",
            "2.5.2": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan"
        }
    },
    "2.6": {
        "sk": "SK 2.6 Daya",
        "topik": "2.6 Daya",
        "rujukanDskp": "DSKP Fizik T4 ms 38-39",
        "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
        "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
        "sps": {
            "2.6.1": "SP 2.6.1 Mendefinisikan daya sebagai kadar perubahan momentum, F = ma (Hukum Gerakan Newton Kedua)",
            "2.6.2": "SP 2.6.2 Menyelesaikan masalah melibatkan rumus F = ma"
        }
    },
    "2.7": {
        "sk": "SK 2.7 Impuls dan Daya Impuls",
        "topik": "2.7 Impuls dan Daya Impuls",
        "rujukanDskp": "DSKP Fizik T4 ms 40-41",
        "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
        "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
        "sps": {
            "2.7.1": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
            "2.7.2": "SP 2.7.2 Menyelesaikan masalah melibatkan impuls dan daya impuls",
            "2.7.3": "SP 2.7.3 Memerihalkan kesan dan aplikasi daya impuls dalam kehidupan harian"
        }
    },
    "2.8": {
        "sk": "SK 2.8 Berat",
        "topik": "2.8 Berat",
        "rujukanDskp": "DSKP Fizik T4 ms 42",
        "rujukanBukuTeks": "Buku Teks T4 ms 79-82",
        "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 20",
        "sps": {
            "2.8.1": "SP 2.8.1 Menyatakan berat sebagai daya graviti yang bertindak ke atas suatu objek, W = mg"
        }
    },
    "3.1": {
        "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
        "topik": "3.1 Hukum Kegravitian Semesta Newton",
        "rujukanDskp": "DSKP Fizik T4 ms 44-46",
        "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
        "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
        "sps": {
            "3.1.1": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
            "3.1.2": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
            "3.1.3": "SP 3.1.3 Mewajarkan kepentingan mengetahui nilai pecutan graviti planet-planet",
            "3.1.4": "SP 3.1.4 Memerihalkan daya memusat dalam sistem gerakan bumi dan satelit, F = mv^2/r",
            "3.1.5": "SP 3.1.5 Menentukan jisim Bumi dan Matahari menggunakan rumus Hukum Kegravitian Semesta Newton"
        }
    },
    "3.2": {
        "sk": "SK 3.2 Hukum Kepler",
        "topik": "3.2 Hukum Kepler",
        "rujukanDskp": "DSKP Fizik T4 ms 47-48",
        "rujukanBukuTeks": "Buku Teks T4 ms 89-94",
        "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 24-25",
        "sps": {
            "3.2.1": "SP 3.2.1 Memerihalkan Hukum Kepler I, II dan III",
            "3.2.2": "SP 3.2.2 Merumuskan Hukum Kepler Ketiga, T^2 berkadar terus r^3",
            "3.2.3": "SP 3.2.3 Menyelesaikan masalah menggunakan rumus Hukum Kepler Ketiga"
        }
    },
    "3.3": {
        "sk": "SK 3.3 Satelit Buatan Manusia",
        "topik": "3.3 Satelit Buatan Manusia",
        "rujukanDskp": "DSKP Fizik T4 ms 49-50",
        "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
        "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
        "sps": {
            "3.3.1": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
            "3.3.2": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
            "3.3.3": "SP 3.3.3 Mengkonsepsikan halaju lepas, v = sqrt(2GM/r)",
            "3.3.4": "SP 3.3.4 Menyelesaikan masalah yang melibatkan halaju lepas"
        }
    }
}

def classify_dskp(q_text, k_num):
    txt = q_text.lower()
    
    # === BAB 3: KEGRAVITIAN ===
    if any(w in txt for w in ["kepler", "orbit elips", "t2 berkadar terus", "t^2 / r^3", "hukum kepler"]):
        sk_key = "3.2"
        if k_num == 3 or any(w in txt for w in ["hitung", "calculate", "tempoh orbit", "radius", "jejari"]):
            sp_kod = "3.2.3"
        elif any(w in txt for w in ["t2", "t^2", "nisbah", "merumuskan"]):
            sp_kod = "3.2.2"
        else:
            sp_kod = "3.2.1"
    elif any(w in txt for w in ["satelit", "satellite", "geopegun", "geostationary", "halaju lepas", "escape velocity", "laju linear satelit", "orbital speed"]):
        sk_key = "3.3"
        if any(w in txt for w in ["halaju lepas", "escape velocity"]):
            sp_kod = "3.3.4" if (k_num == 3 or "hitung" in txt or "calculate" in txt) else "3.3.3"
        elif any(w in txt for w in ["geopegun", "geostationary", "bukan geopegun"]):
            sp_kod = "3.3.2"
        else:
            sp_kod = "3.3.1"
    elif any(w in txt for w in ["kegravitian semesta", "universal gravitation", "daya memusat", "centripetal force", "g = gm/r", "f = gm", "pemalar kegravitian"]):
        sk_key = "3.1"
        if any(w in txt for w in ["daya memusat", "centripetal"]):
            sp_kod = "3.1.4"
        elif any(w in txt for w in ["jisim bumi", "mass of earth", "jisim matahari"]):
            sp_kod = "3.1.5"
        elif any(w in txt for w in ["pecutan graviti", "nilai g", "hubungan g"]):
            sp_kod = "3.1.2"
        else:
            sp_kod = "3.1.1"

    # === BAB 2: DAYA DAN GERAKAN I (Strict Concept Specificity) ===
    # 1. Impuls & Daya Impuls (Newton 3rd Law, impact time, impulsive force)
    elif any(w in txt for w in ["daya impuls", "impulsive force", "impuls", "impulse", "hukum gerakan newton ketiga", "newton's third law", "masa impak", "time of impact", "ikut lajak", "follow through", "sarung tinju", "tilam tebal", "lompat jauh", "zon remuk", "crumple"]):
        sk_key = "2.7"
        if k_num == 3 or any(w in txt for w in ["hitung", "calculate", "berapakah daya impuls", "magnitud daya impuls"]):
            sp_kod = "2.7.2"
        elif any(w in txt for w in ["aplikasi", "mengurangkan", "kecederaan", "pelapik", "tilam", "sarung tinju", "pasir", "remuk"]):
            sp_kod = "2.7.3"
        else:
            sp_kod = "2.7.1"

    # 2. Daya (Newton 2nd Law, F = ma, resultant force, spring balance, inclined plane friction)
    elif any(w in txt for w in ["f = ma", "hukum gerakan newton kedua", "newton's second law", "kadar perubahan momentum", "rate of change of momentum", "neraca spring", "spring balance", "satah condong", "inclined plane", "daya geseran", "frictional force", "daya paduan", "resultant force", "mengukur daya", "measure force"]):
        sk_key = "2.6"
        if k_num == 3 or any(w in txt for w in ["hitung", "calculate", "pecutan", "acceleration", "berapakah daya", "magnitud daya"]):
            sp_kod = "2.6.2"
        else:
            sp_kod = "2.6.1"

    # 3. Momentum (p = mv, collisions, explosions, guns/bullets recoil)
    elif any(w in txt for w in ["momentum", "pelanggaran", "letupan", "collision", "explosion", "keabadian momentum", "conservation of momentum", "senapang", "rifle", "peluru", "sentakan", "recoil", "troli p", "troli q", "lato-lato", "buaian newton"]):
        sk_key = "2.5"
        if k_num == 3 or any(w in txt for w in ["hitung", "calculate", "halaju selepas", "final velocity"]):
            sp_kod = "2.5.2"
        else:
            sp_kod = "2.5.1" if ("takrif" in txt or "unit" in txt or "maksud" in txt) else "2.5.2"

    # 4. Jatuh Bebas (Free fall, vacuum, coin & feather, vertical stone throw g = 9.81)
    elif any(w in txt for w in ["jatuh bebas", "free fall", "vakum", "vacuum", "tiub newton", "bulu ayam", "feather", "duit syiling", "coin", "melontar batu secara menegak", "secara menegak ke atas", "vertically upwards", "rintangan udara diabaikan"]):
        sk_key = "2.3"
        if k_num == 3 or "hitung" in txt or "calculate" in txt or "tinggi maksimum" in txt:
            sp_kod = "2.3.3"
        elif "eksperimen" in txt or "menentukan nilai" in txt:
            sp_kod = "2.3.2"
        else:
            sp_kod = "2.3.1"

    # 5. Berat (W = mg, gravity force definition, weight differences)
    elif any(w in txt for w in ["w = mg", "tentang berat", "menerangkan berat", "berat di bumi", "beratnya di bulan", "neraca tuas"]) and not any(w in txt for w in ["troli yang berat", "beg", "bakul"]):
        sk_key = "2.8"
        sp_kod = "2.8.1"

    # 6. Inersia (Newton 1st Law, inertia vs mass, seatbelts, daily inertia situations)
    elif any(w in txt for w in ["inersia", "inertia", "hukum gerakan newton pertama", "newton's first law", "tali pinggang", "seatbelt", "titisan air payung", "sos cili", "berlari secara zigzag", "zigzag", "landasan yang panjang untuk mendarat", "sukar untuk memulakan", "troli yang berat untuk memulakan"]):
        sk_key = "2.4"
        if "eksperimen" in txt or "neraca inersia" in txt or "hubungan antara inersia dan jisim" in txt:
            sp_kod = "2.4.2"
        elif any(w in txt for w in ["kesan", "tali pinggang", "harian", "sos", "payung", "zigzag", "mendarat"]):
            sp_kod = "2.4.3"
        else:
            sp_kod = "2.4.1"

    # 7. Graf Gerakan Linear (s-t, v-t, a-t, gradients, area under curve)
    elif any(w in txt for w in ["graf", "graph", "sesaran-masa", "halaju-masa", "pecutan-masa", "displacement-time", "velocity-time", "kecerunan", "gradient", "luas di bawah graf"]):
        sk_key = "2.2"
        if k_num == 3 or any(w in txt for w in ["hitung", "luas", "kecerunan", "jarak", "sesaran", "jarak yang paling jauh"]):
            sp_kod = "2.2.4"
        elif "lakar" in txt or "mewakili" in txt:
            sp_kod = "2.2.3"
        elif "kecerunan" in txt or "mentafsir" in txt:
            sp_kod = "2.2.2"
        else:
            sp_kod = "2.2.1"

    # 8. Daya calculation fallback (K3 force calculations)
    elif k_num == 3 and any(w in txt for w in ["daya", "force", "pecutan", "acceleration", "jisim", "mass"]) and any(w in txt for w in ["n", "newton"]):
        sk_key = "2.6"
        sp_kod = "2.6.2"

    # 9. Fallback Gerakan Linear (Linear motion equations, ticker tape)
    else:
        sk_key = "2.1"
        if k_num == 3 or "pita detik" in txt or "ticker" in txt:
            sp_kod = "2.1.3"
        elif "sesaran" in txt or "halaju" in txt:
            sp_kod = "2.1.2"
        else:
            sp_kod = "2.1.1"

    info = SK_SP_MAP[sk_key]
    sp_desc = info["sps"].get(sp_kod, list(info["sps"].values())[0])
    return {
        "sk": info["sk"],
        "sp": sp_desc,
        "spKod": sp_kod,
        "rujukanDskp": info["rujukanDskp"],
        "rujukanBukuTeks": info["rujukanBukuTeks"],
        "rujukanCheatnote": info["rujukanCheatnote"],
        "topik": info["topik"]
    }

print("Loaded DSKP classification definitions successfully.")
