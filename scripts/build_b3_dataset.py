#!/usr/bin/env python3
"""
Master Dataset Builder for Tingkatan 4 Bab 3: Kegravitian (Gravitation)
Extracts, structures, cleans, and tags all 93 questions adhering to the 13 Golden Invariants.
"""

import os
import sys
import json
import re
import fitz

# 1. Load verified answers and diagram URLs
with open('scratch/t4_b3_answers_verified.json', 'r', encoding='utf-8') as f:
    ANSWERS = json.load(f)

with open('scratch/t4_b3_diagram_urls.json', 'r', encoding='utf-8') as f:
    DIAGRAM_URLS = json.load(f)

# 2. DSKP Standards Definition for T4 Bab 3
SK_SP_MAP = {
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
    
    # Check Kepler
    if any(w in txt for w in ["kepler", "orbit elips", "t2 berkadar terus", "t^2 / r^3", "hukum kepler", "luas sektor", "luas yang dicakup", "aphelion", "perihelion", "fokus"]):
        sk_key = "3.2"
        if k_num == 3 or any(w in txt for w in ["hitung", "calculate", "tempoh orbit", "radius", "jejari"]):
            sp_kod = "3.2.3"
        elif any(w in txt for w in ["t2", "t^2", "nisbah", "merumuskan"]):
            sp_kod = "3.2.2"
        else:
            sp_kod = "3.2.1"
    # Check Satellite / Escape Velocity
    elif any(w in txt for w in ["satelit", "satellite", "geopegun", "geostationary", "halaju lepas", "escape velocity", "laju linear satelit", "orbital speed", "orbit bumi"]):
        sk_key = "3.3"
        if any(w in txt for w in ["halaju lepas", "escape velocity"]):
            sp_kod = "3.3.4" if (k_num == 3 or "hitung" in txt or "calculate" in txt) else "3.3.3"
        elif any(w in txt for w in ["geopegun", "geostationary", "bukan geopegun", "geo-stationary"]):
            sp_kod = "3.3.2"
        else:
            sp_kod = "3.3.1"
    # Check Universal Gravitation
    else:
        sk_key = "3.1"
        if any(w in txt for w in ["daya memusat", "centripetal", "bebola besi"]):
            sp_kod = "3.1.4"
        elif any(w in txt for w in ["jisim bumi", "mass of earth", "jisim matahari"]):
            sp_kod = "3.1.5"
        elif any(w in txt for w in ["pecutan graviti", "nilai g", "hubungan g", "medan graviti"]):
            sp_kod = "3.1.2"
        else:
            sp_kod = "3.1.1"

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
