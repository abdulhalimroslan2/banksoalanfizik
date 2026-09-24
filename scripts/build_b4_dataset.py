#!/usr/bin/env python3
"""
Master Dataset Builder for Tingkatan 4 Bab 4: Haba (Heat)
Extracts, structures, cleans, and tags all 105 questions adhering to the 13 Golden Invariants.
"""

import os
import sys
import json
import re

# DSKP Standards Definition for T4 Bab 4
SK_SP_MAP = {
    "4.1": {
        "sk": "SK 4.1 Keseimbangan Terma",
        "topik": "4.1 Keseimbangan Terma",
        "rujukanDskp": "DSKP Fizik T4 ms 54-55",
        "rujukanBukuTeks": "Buku Teks T4 ms 120-124",
        "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 29-30",
        "sps": {
            "4.1.1": "SP 4.1.1 Menjelaskan dengan contoh keseimbangan terma dalam kehidupan harian",
            "4.1.2": "SP 4.1.2 Menentukur sebuah termometer cecair dalam kaca menggunakan dua takat tetap"
        }
    },
    "4.2": {
        "sk": "SK 4.2 Muatan Haba Tentu",
        "topik": "4.2 Muatan Haba Tentu",
        "rujukanDskp": "DSKP Fizik T4 ms 56-57",
        "rujukanBukuTeks": "Buku Teks T4 ms 125-136",
        "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 31-33",
        "sps": {
            "4.2.1": "SP 4.2.1 Memerihalkan muatan haba tentu, c",
            "4.2.2": "SP 4.2.2 Menyelesaikan masalah melibatkan muatan haba tentu menggunakan rumus Q = mc theta dan Pt = mc theta"
        }
    },
    "4.3": {
        "sk": "SK 4.3 Haba Pendam Tentu",
        "topik": "4.3 Haba Pendam Tentu",
        "rujukanDskp": "DSKP Fizik T4 ms 58-59",
        "rujukanBukuTeks": "Buku Teks T4 ms 137-147",
        "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 34-36",
        "sps": {
            "4.3.1": "SP 4.3.1 Memerihalkan haba pendam tentu pelakuran, l_f dan haba pendam tentu pengewapan, l_v",
            "4.3.2": "SP 4.3.2 Menyelesaikan masalah melibatkan haba pendam tentu menggunakan rumus Q = mL dan Pt = mL"
        }
    },
    "4.4": {
        "sk": "SK 4.4 Hukum Gas",
        "topik": "4.4 Hukum Gas",
        "rujukanDskp": "DSKP Fizik T4 ms 60-63",
        "rujukanBukuTeks": "Buku Teks T4 ms 148-164",
        "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 37-40",
        "sps": {
            "4.4.1": "SP 4.4.1 Menjelaskan tekanan, suhu dan isi padu gas dari segi teori kinetik gas",
            "4.4.2": "SP 4.4.2 Menentukan hubungan antara tekanan dan isi padu bagi suatu gas pada suhu malar (Hukum Boyle)",
            "4.4.3": "SP 4.4.3 Menentukan hubungan antara isi padu dan suhu bagi suatu gas pada tekanan malar (Hukum Charles)",
            "4.4.4": "SP 4.4.4 Menentukan hubungan antara tekanan dan suhu bagi suatu gas pada isi padu malar (Hukum Gay-Lussac)",
            "4.4.5": "SP 4.4.5 Menyelesaikan masalah melibatkan tekanan, suhu dan isi padu gas menggunakan rumus Hukum-hukum Gas"
        }
    }
}

def clean_ocr_typos(text):
    if not text:
        return ""
    t = text
    typo_map = [
        (r'\btenperature\b', 'temperature'),
        (r'\btenperatures\b', 'temperatures'),
        (r'\btemperatıure\b', 'temperature'),
        (r'\btlhermal\b', 'thermal'),
        (r'\bhwo\b', 'two'),
        (r'\bwvo\b', 'two'),
        (r'\bTivo\b', 'Two'),
        (r'\brenoved\b', 'removed'),
        (r'\bthemeltedcheeseis\b', 'the melted cheese is'),
        (r'\bscbiji\b', 'sebiji'),
        (r'\bscbatang\b', 'sebatang'),
        (r'\bScbatang\b', 'Sebatang'),
        (r'\bterscbut\b', 'tersebut'),
        (r'\bsiting\b', 'sitting'),
        (r'\bcanpfire\b', 'campfire'),
        (r'\btermometri\b', 'termometer'),
        (r'\bpclakuran\b', 'pelakuran'),
        (r'\bbchveen\b', 'between'),
        (r'\bbehveen\b', 'between'),
        (r'\bbewween\b', 'between'),
        (r'\bbevween\b', 'between'),
        (r'\binmersed\b', 'immersed'),
        (r'\bpreswe\b', 'pressure'),
        (r'\bpresswe\b', 'pressure'),
        (r'\bconıparison\b', 'comparison'),
        (r'\bshowsthe\b', 'shows the'),
        (r'\bihe\b', 'the'),
        (r'\bDiagran\b', 'Diagram'),
        (r'\bDiagramn\b', 'Diagram'),
        (r'\bDiagranm\b', 'Diagram'),
        (r'\bSclangor\b', 'Selangor')
    ]
    for pattern, rep in typo_map:
        t = re.sub(pattern, rep, t)
    return t

def classify_dskp_b4(soalan, konstruk_num=2):
    s = soalan.lower()
    
    # 4.4 Hukum Gas
    if "boyle" in s or "charles" in s or "gay-lussac" in s or "hukum tekanan" in s or "sifar mutlak" in s or "teori kinetik gas" in s or "p1v1" in s or "v1/t1" in s or "p1/t1" in s or "picagari" in s or "omboh" in s or "isipadu dan suhu" in s or "tekanan dan suhu" in s or "tekanan dan isipadu" in s or "tekanan dan isi padu" in s or "isi padu dan suhu" in s or "tangki skuba" in s:
        sk_key = "4.4"
        if konstruk_num == 3:
            sp_key = "4.4.5"
        elif "boyle" in s or "p1v1" in s or "isipadu terperangkap" in s:
            sp_key = "4.4.2"
        elif "charles" in s or "v1/t1" in s or "isipadu dan suhu" in s or "isi padu dan suhu" in s:
            sp_key = "4.4.3"
        elif "gay-lussac" in s or "tekanan" in s or "p1/t1" in s:
            sp_key = "4.4.4"
        else:
            sp_key = "4.4.1"
            
    # 4.3 Haba Pendam Tentu
    elif "haba pendam" in s or "pelakuran" in s or "pengewapan" in s or "lengkung pemanasan" in s or "lengkung penyejukan" in s or "peleburan" in s or "pembekuan" in s or "kondensasi" in s or "mendidih" in s or "stim" in s or "ais" in s or "perubahan keadaan jirim" in s or "perubahan fasa" in s:
        sk_key = "4.3"
        sp_key = "4.3.2" if (konstruk_num == 3 or "hitung" in s or "calculate" in s or "cari nilai" in s) else "4.3.1"
        
    # 4.2 Muatan Haba Tentu
    elif "muatan haba tentu" in s or "muatan haba" in s or "specific heat capacity" in s or "bayu laut" in s or "bayu darat" in s or "periuk tanah" in s or "radiator" in s or "cawan" in s or "kenaikan suhu" in s or "blok logam" in s or "pt = mc" in s or "q = mc" in s:
        sk_key = "4.2"
        sp_key = "4.2.2" if (konstruk_num == 3 or "hitung" in s or "calculate" in s) else "4.2.1"
        
    # 4.1 Keseimbangan Terma
    else:
        sk_key = "4.1"
        if "tentukur" in s or "penentukuran" in s or "calibrat" in s or "takat tetap" in s or "termometer" in s:
            sp_key = "4.1.2"
        else:
            sp_key = "4.1.1"

    sk_info = SK_SP_MAP[sk_key]
    return {
        "sk": sk_info["sk"],
        "topik": sk_info["topik"],
        "sp": sk_info["sps"][sp_key],
        "spKod": sp_key,
        "rujukanDskp": sk_info["rujukanDskp"],
        "rujukanBukuTeks": sk_info["rujukanBukuTeks"],
        "rujukanCheatnote": sk_info["rujukanCheatnote"]
    }
