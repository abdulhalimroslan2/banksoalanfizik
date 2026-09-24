#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Master Dataset Builder for Tingkatan 4 Bab 5: Gelombang (Waves)
Adheres to the 13 Golden Invariants (Zero-Defect Quality Control).
"""

import os
import sys
import json
import re

SK_SP_MAP_B5 = {
    "5.1": {
        "sk": "SK 5.1 Asas Gelombang",
        "topik": "5.1 Asas Gelombang",
        "rujukanDskp": "DSKP Fizik T4 ms 64-65",
        "rujukanBukuTeks": "Buku Teks T4 ms 172-183",
        "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 1-2",
        "sps": {
            "5.1.1": "SP 5.1.1 Memerihalkan gelombang",
            "5.1.2": "SP 5.1.2 Menyatakan jenis gelombang",
            "5.1.3": "SP 5.1.3 Membandingkan gelombang melintang dan gelombang membujur",
            "5.1.4": "SP 5.1.4 Menerangkan ciri-ciri gelombang: Amplitud, Tempoh, Frekuensi, Panjang Gelombang dan Laju Gelombang",
            "5.1.5": "SP 5.1.5 Melakar dan mentafsir graf gelombang sesaran-masa dan sesaran-jarak",
            "5.1.6": "SP 5.1.6 Menentukan panjang gelombang, frekuensi dan laju gelombang menggunakan rumus v = fλ"
        }
    },
    "5.2": {
        "sk": "SK 5.2 Pelembapan dan Resonans",
        "topik": "5.2 Pelembapan dan Resonans",
        "rujukanDskp": "DSKP Fizik T4 ms 66-67",
        "rujukanBukuTeks": "Buku Teks T4 ms 184-187",
        "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 3",
        "sps": {
            "5.2.1": "SP 5.2.1 Memerihalkan pelembapan dan resonans bagi satu sistem ayunan/getaran",
            "5.2.2": "SP 5.2.2 Mewajarkan kesan resonans terhadap kehidupan harian"
        }
    },
    "5.3": {
        "sk": "SK 5.3 Pantulan Gelombang",
        "topik": "5.3 Pantulan Gelombang",
        "rujukanDskp": "DSKP Fizik T4 ms 68-69",
        "rujukanBukuTeks": "Buku Teks T4 ms 188-193",
        "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 4",
        "sps": {
            "5.3.1": "SP 5.3.1 Menghuraikan pantulan gelombang dari pelbagai aspek",
            "5.3.2": "SP 5.3.2 Melukis gambar rajah pantulan gelombang air",
            "5.3.3": "SP 5.3.3 Mewajarkan aplikasi pantulan gelombang dalam kehidupan harian",
            "5.3.4": "SP 5.3.4 Menyelesaikan masalah melibatkan pantulan gelombang menggunakan rumus d = vt / 2"
        }
    },
    "5.4": {
        "sk": "SK 5.4 Pembiasan Gelombang",
        "topik": "5.4 Pembiasan Gelombang",
        "rujukanDskp": "DSKP Fizik T4 ms 70-71",
        "rujukanBukuTeks": "Buku Teks T4 ms 194-201",
        "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 5",
        "sps": {
            "5.4.1": "SP 5.4.1 Menghuraikan pembiasan gelombang dari pelbagai aspek",
            "5.4.2": "SP 5.4.2 Melukis gambar rajah pembiasan gelombang air bagi dua kedalaman",
            "5.4.3": "SP 5.4.3 Menjelaskan fenomena semula jadi akibat pembiasan gelombang dalam kehidupan harian",
            "5.4.4": "SP 5.4.4 Menyelesaikan masalah melibatkan pembiasan gelombang"
        }
    },
    "5.5": {
        "sk": "SK 5.5 Pembelauan Gelombang",
        "topik": "5.5 Pembelauan Gelombang",
        "rujukanDskp": "DSKP Fizik T4 ms 72-73",
        "rujukanBukuTeks": "Buku Teks T4 ms 202-209",
        "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 6",
        "sps": {
            "5.5.1": "SP 5.5.1 Menghuraikan pembelauan gelombang dari pelbagai aspek",
            "5.5.2": "SP 5.5.2 Menentukan faktor-faktor yang mempengaruhi pembelauan gelombang",
            "5.5.3": "SP 5.5.3 Melukis gambar rajah corak pembelauan gelombang air dan cahaya",
            "5.5.4": "SP 5.5.4 Menjelaskan aplikasi pembelauan gelombang dalam kehidupan harian"
        }
    },
    "5.6": {
        "sk": "SK 5.6 Interferens Gelombang",
        "topik": "5.6 Interferens Gelombang",
        "rujukanDskp": "DSKP Fizik T4 ms 74-77",
        "rujukanBukuTeks": "Buku Teks T4 ms 210-219",
        "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 7-8",
        "sps": {
            "5.6.1": "SP 5.6.1 Menghuraikan prinsip superposisi gelombang",
            "5.6.2": "SP 5.6.2 Menghuraikan corak gelombang interferens bagi air, bunyi dan cahaya",
            "5.6.3": "SP 5.6.3 Menghubung kait λ, a, x dan D berdasarkan corak interferens gelombang",
            "5.6.4": "SP 5.6.4 Menyelesaikan masalah melibatkan interferens gelombang menggunakan rumus λ = ax / D",
            "5.6.5": "SP 5.6.5 Berkomunikasi untuk menerangkan aplikasi interferens gelombang dalam kehidupan harian"
        }
    },
    "5.7": {
        "sk": "SK 5.7 Gelombang Elektromagnet",
        "topik": "5.7 Gelombang Elektromagnet",
        "rujukanDskp": "DSKP Fizik T4 ms 78-79",
        "rujukanBukuTeks": "Buku Teks T4 ms 220-225",
        "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 9",
        "sps": {
            "5.7.1": "SP 5.7.1 Mencirikan gelombang elektromagnet",
            "5.7.2": "SP 5.7.2 Menyatakan komponen spektrum elektromagnet mengikut urutan panjang gelombang dan frekuensi",
            "5.7.3": "SP 5.7.3 Berkomunikasi untuk menerangkan aplikasi setiap komponen spektrum elektromagnet dalam kehidupan"
        }
    }
}

def clean_ocr_typos_b5(text):
    if not text:
        return ""
    t = text
    typo_map = [
        (r'Diagranm', 'Diagram'),
        (r'Diagran', 'Diagram'),
        (r'Diagramn', 'Diagram'),
        (r'shovs', 'shows'),
        (r'showsthe', 'shows the'),
        (r'wavespropagating', 'waves propagating'),
        (r'wavespropagates', 'waves propagates'),
        (r'waterwaves', 'water waves'),
        (r'waterwave', 'water wave'),
        (r'betveen', 'between'),
        (r'palterns', 'patterns'),
        (r'clektromagnet', 'elektromagnet'),
        (r'spcktrum', 'spektrum'),
        (r'wavefironts', 'wavefronts'),
        (r'manolromatk', 'monokromatik'),
        (r'monokronmatik', 'monokromatik'),
        (r'kelhidupan', 'kehidupan'),
        (r'gelonmbang', 'gelombang'),
        (r'celahkecil', 'celah kecil'),
        (r'Apakalh', 'Apakah'),
        (r'pcnyanyi', 'penyanyi'),
        (r'Incilent', 'Incident'),
        (r'Reflecied', 'Reflected'),
        (r'foks', 'forks'),
        (r'barier', 'barrier'),
        (r'bamier', 'barrier'),
        (r'sofi', 'soft'),
        (r'renehr', 'audio'),
        (r'wavelengh', 'wavelength'),
        (r'correcr', 'correct')
    ]
    for pattern, rep in typo_map:
        t = re.sub(pattern, rep, t)
    return t

def classify_dskp_b5(soalan, konstruk_num=2):
    s = soalan.lower()
    
    # 5.7 Gelombang Elektromagnet
    if "elektromagnet" in s or "sinar gama" in s or "sinar-x" in s or "ultraungu" in s or "inframerah" in s or "cahaya nampak" in s or "gelombang mikro" in s or "gelombang radio" in s or "spektrum" in s:
        sk_key = "5.7"
        if "aplikasi" in s or "alat" in s or "kegunaan" in s or "satelit" in s:
            sp_key = "5.7.3"
        elif "urutan" in s or "frekuensi paling tinggi" in s or "tenaga paling tinggi" in s or "panjang gelombang paling panjang" in s:
            sp_key = "5.7.2"
        else:
            sp_key = "5.7.1"

    # 5.6 Interferens Gelombang
    elif "interferens" in s or "superposisi" in s or "dwicelah young" in s or "dwicelah" in s or "pinggir" in s or "λ = ax/d" in s or "lambda = ax/d" in s or "pembesar suara" in s or "bunyi kuat" in s or "antnod" in s or "nod" in s or "membina" in s or "memusnah" in s:
        sk_key = "5.6"
        if konstruk_num == 3 or "hitung" in s or "calculate" in s:
            sp_key = "5.6.4"
        elif "λ, a, x" in s or "jarak antara" in s or "pinggir" in s:
            sp_key = "5.6.3"
        elif "superposisi" in s:
            sp_key = "5.6.1"
        else:
            sp_key = "5.6.2"

    # 5.5 Pembelauan Gelombang
    elif "pembelauan" in s or "diffraction" in s or "celah" in s or "penghadang" in s or "benteng" in s or "tersebar" in s or "memecah ombak" in s:
        sk_key = "5.5"
        if "faktor" in s or "saiz celah" in s:
            sp_key = "5.5.2"
        elif "corak" in s or "rajah" in s:
            sp_key = "5.5.3"
        elif "aplikasi" in s or "benteng" in s or "penghadang ombak" in s or "pelabuhan" in s:
            sp_key = "5.5.4"
        else:
            sp_key = "5.5.1"

    # 5.4 Pembiasan Gelombang
    elif "pembiasan" in s or "dibiaskan" in s or "refraction" in s or "refracted" in s or "cetek" in s or "shallow" in s or "kawasan dalam" in s or "deep region" in s or "air dalam" in s or "deep water" in s or "tanjung" in s or "teluk" in s or "laju gelombang berkurang" in s:
        sk_key = "5.4"
        if konstruk_num == 3 or "hitung" in s or "calculate" in s:
            sp_key = "5.4.4"
        elif "tanjung" in s or "teluk" in s or "semula jadi" in s or "malam" in s:
            sp_key = "5.4.3"
        elif "lukis" in s or "rajah" in s:
            sp_key = "5.4.2"
        else:
            sp_key = "5.4.1"

    # 5.3 Pantulan Gelombang
    elif "pantulan" in s or "dipantulkan" in s or "terpantul" in s or "reflection" in s or "reflected" in s or "sonar" in s or "gema" in s or "echo" in s or "pemantul" in s or "kedalaman laut" in s or "kedalaman sebuah telaga" in s or "kedalaman perigi" in s:
        sk_key = "5.3"
        if konstruk_num == 3 or "hitung" in s or "calculate" in s or "vt / 2" in s:
            sp_key = "5.3.4"
        elif "sonar" in s or "aplikasi" in s or "ikan lumba-lumba" in s or "kelawar" in s:
            sp_key = "5.3.3"
        elif "rajah" in s or "lukis" in s:
            sp_key = "5.3.2"
        else:
            sp_key = "5.3.1"

    # 5.2 Pelembapan dan Resonans
    elif "pelembapan" in s or "damping" in s or "resonans" in s or "resonance" in s or "ayunan" in s or "bandul barton" in s or "tala bunyi" in s or "frekuensi asli" in s or "natural frequency" in s or "jambatan tacoma" in s:
        sk_key = "5.2"
        if "kesan" in s or "kebaikan" in s or "keburukan" in s or "kehidupan" in s:
            sp_key = "5.2.2"
        else:
            sp_key = "5.2.1"

    # 5.1 Asas Gelombang
    else:
        sk_key = "5.1"
        if konstruk_num == 3 or "v = f" in s or "hitung" in s or "calculate" in s or "laju" in s:
            sp_key = "5.1.6"
        elif "graf" in s or "sesaran-masa" in s or "sesaran-jarak" in s:
            sp_key = "5.1.5"
        elif "amplitud" in s or "tempoh" in s or "frekuensi" in s or "panjang gelombang" in s:
            sp_key = "5.1.4"
        elif "membujur" in s or "melintang" in s:
            sp_key = "5.1.3"
        elif "mekanikal" in s or "progresif" in s or "pegun" in s:
            sp_key = "5.1.2"
        else:
            sp_key = "5.1.1"

    sk_info = SK_SP_MAP_B5[sk_key]
    return {
        "sk": sk_info["sk"],
        "topik": sk_info["topik"],
        "sp": sk_info["sps"][sp_key],
        "spKod": sp_key,
        "rujukanDskp": sk_info["rujukanDskp"],
        "rujukanBukuTeks": sk_info["rujukanBukuTeks"],
        "rujukanCheatnote": sk_info["rujukanCheatnote"]
    }
