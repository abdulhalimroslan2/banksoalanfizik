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
    }
}

def classify_dskp(q_text, k_num):
    txt = q_text.lower()
    # Topic detection
    if any(w in txt for w in ["impuls", "impulsive", "masa impak", "time of impact", "tumbukan", "ikut lajak", "follow through"]):
        sk_key = "2.7"
        if k_num == 3 or any(w in txt for w in ["hitung", "calculate", "berapakah daya impuls"]):
            sp_kod = "2.7.2"
        elif any(w in txt for w in ["aplikasi", "mengurangkan", "kecederaan", "pelapik", "tilam", "sarung tinju"]):
            sp_kod = "2.7.3"
        else:
            sp_kod = "2.7.1"
    elif any(w in txt for w in ["momentum", "pelanggaran", "letupan", "collision", "explosion", "keabadian momentum"]):
        sk_key = "2.5"
        if k_num == 3 or any(w in txt for w in ["hitung", "calculate", "halaju selepas"]):
            sp_kod = "2.5.2"
        else:
            sp_kod = "2.5.1" if "takrif" in txt or "unit" in txt else "2.5.2"
    elif any(w in txt for w in ["inersia", "inertia", "jisim", "hukum gerakan newton pertama", "newton's first law"]):
        sk_key = "2.4"
        if "eksperimen" in txt or "neraca inersia" in txt or "troli" in txt:
            sp_kod = "2.4.2"
        elif "kesan" in txt or "tali pinggang" in txt or "harian" in txt or "sos" in txt or "payung" in txt:
            sp_kod = "2.4.3"
        else:
            sp_kod = "2.4.1"
    elif any(w in txt for w in ["jatuh bebas", "free fall", "vakum", "vacuum", "pecutan graviti", "gravitational acceleration", "bulu ayam", "feather"]):
        sk_key = "2.3"
        if k_num == 3 or "hitung" in txt or "calculate" in txt:
            sp_kod = "2.3.3"
        elif "eksperimen" in txt:
            sp_kod = "2.3.2"
        else:
            sp_kod = "2.3.1"
    elif any(w in txt for w in ["graf", "graph", "sesaran-masa", "halaju-masa", "displacement-time", "velocity-time"]):
        sk_key = "2.2"
        if k_num == 3 or any(w in txt for w in ["hitung", "luas", "kecerunan", "gradient", "jarak", "sesaran"]):
            sp_kod = "2.2.4"
        elif "lakar" in txt or "mewakili" in txt:
            sp_kod = "2.2.3"
        elif "kecerunan" in txt or "mentafsir" in txt:
            sp_kod = "2.2.2"
        else:
            sp_kod = "2.2.1"
    elif any(w in txt for w in ["berat", "weight", "w = mg", "graviti"]):
        sk_key = "2.8"
        sp_kod = "2.8.1"
    elif any(w in txt for w in ["daya", "force", "f = ma", "hukum gerakan newton kedua"]):
        sk_key = "2.6"
        if k_num == 3 or "hitung" in txt or "calculate" in txt:
            sp_kod = "2.6.2"
        else:
            sp_kod = "2.6.1"
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
