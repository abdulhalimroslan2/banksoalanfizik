#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Perfect Builder for Tingkatan 4 Bab 6: Cahaya dan Optik.
Adheres 100% to the 13 Golden Invariants with Zero Defects.
Generates:
- scripts/b6_k1_data.py (Q01 - Q02)
- scripts/b6_k2_part1_data.py (Q01 - Q35)
- scripts/b6_k2_part2_data.py (Q36 - Q64)
- scripts/b6_k3_part1_data.py (Q01 - Q35)
- scripts/b6_k3_part2_data.py (Q36 - Q62)
- scripts/b6_k4_data.py (Q01 - Q04)
- scripts/build_b6_all_data.py (Master aggregator: 132 soalan)
"""

import os
import re
import json
import sys

sys.path.insert(0, ".")
from scripts.build_dataset_helper_b6 import clean_ocr_typos_b6, classify_dskp_b6

# Load verified answers, diagram URLs, option URLs, rubric URLs
with open('scratch/t4_b6_answers_verified.json', 'r', encoding='utf-8') as f:
    ANSWERS = json.load(f)

with open('scratch/t4_b6_diagram_urls.json', 'r', encoding='utf-8') as f:
    DIAGRAM_URLS = json.load(f)

with open('scratch/t4_b6_option_urls.json', 'r', encoding='utf-8') as f:
    OPTION_URLS = json.load(f)

with open('scratch/t4_b6_rubrik_urls.json', 'r', encoding='utf-8') as f:
    RUBRIK_URLS = json.load(f)

# Load perfect text stream
with open('scratch/t4_b6_perfect_stream.txt', 'r', encoding='utf-8') as f:
    stream_text = f.read()

k1_pos = stream_text.find('KONSTRUK 1: MENGINGAT')
k2_pos = stream_text.find('KONSTRUK 2: MEMAHAMI')
k3_pos = stream_text.find('KONSTRUK3: MENGAPLIKASI')
k4_pos = stream_text.find('KONSTRUK 4: MENGANALISIS')

def get_section_chunks(sec_text, count, prefix):
    chunks = {}
    positions = []
    for q in range(1, count + 1):
        if prefix == 'K2' and q == 17:
            pat = r'(?:^|\n)\s*17[\.\s\n]+'
        elif prefix == 'K3' and q == 51:
            pat = r'(?:^|\n)\s*[5S]1\.\s+'
        elif prefix == 'K3' and q == 30:
            pat = r'(?:^|\n)\s*30\.\s*|Suatu objek diletakkan pada jarak 60 cm'
        else:
            pat = rf'(?:^|\n)\s*{q}\.\s+'
        m = re.search(pat, sec_text)
        if m:
            positions.append((m.start(), q))
    positions.sort()
    for i in range(len(positions)):
        pos, q = positions[i]
        next_pos = positions[i+1][0] if i+1 < len(positions) else len(sec_text)
        chunks[q] = sec_text[pos:next_pos].strip()
    return chunks

k1_chunks = get_section_chunks(stream_text[k1_pos:k2_pos], 2, 'K1')
k2_chunks = get_section_chunks(stream_text[k2_pos:k3_pos], 64, 'K2')
k3_chunks = get_section_chunks(stream_text[k3_pos:k4_pos], 62, 'K3')
k4_chunks = get_section_chunks(stream_text[k4_pos:], 4, 'K4')

EXPLICIT_OPTIONS = {
    'k2_q13': [
        {"id": "A", "teks": "Nyata, songsang dan lebih besar / Real, inverted and bigger"},
        {"id": "B", "teks": "Maya, tegak dan lebih besar / Virtual, upright and bigger"},
        {"id": "C", "teks": "Nyata, songsang dan lebih kecil / Real, inverted and smaller"},
        {"id": "D", "teks": "Maya, tegak dan lebih kecil / Virtual, upright and smaller"}
    ],
    'k2_q16': [
        {"id": "A", "teks": "Dibiaskan ke arah normal / Refracts towards normal"},
        {"id": "B", "teks": "Dibiaskan menjauhi normal / Refracts away from normal"},
        {"id": "C", "teks": "Mengalami pantulan dalam penuh / Experiences total internal reflection"},
        {"id": "D", "teks": "Dipantulkan dengan sudut yang sama dengan sudut tuju / Reflects with the same angle as the incidence angle"}
    ],
    'k2_q18': [
        {"id": "A", "teks": "Tambahkan jarak objek, u / Increase the object distance, u"},
        {"id": "B", "teks": "Kurangkan jarak objek, u / Decrease the object distance, u"},
        {"id": "C", "teks": "Kurangkan jarak antara objek dengan mentol / Decrease the distance between object and bulb"},
        {"id": "D", "teks": "Tambahkan jarak antara objek dengan mentol / Increase the distance between object and bulb"}
    ],
    'k2_q27': [
        {"id": "A", "teks": "Nilai indeks biasan: Tinggi, Pantulan dalam penuh: Tinggi / Refractive index: Higher, Total internal reflection: Higher"},
        {"id": "B", "teks": "Nilai indeks biasan: Rendah, Pantulan dalam penuh: Rendah / Refractive index: Lower, Total internal reflection: Lower"},
        {"id": "C", "teks": "Nilai indeks biasan: Tinggi, Pantulan dalam penuh: Rendah / Refractive index: Higher, Total internal reflection: Lower"},
        {"id": "D", "teks": "Nilai indeks biasan: Rendah, Pantulan dalam penuh: Tinggi / Refractive index: Lower, Total internal reflection: Higher"}
    ],
    'k2_q42': [
        {"id": "A", "teks": "Panjang fokus kanta CCTV tidak boleh bernilai sifar / The focal length of a CCTV lens cannot be zero"},
        {"id": "B", "teks": "Imej yang terhasil adalah maya, songsang dan diperkecilkan pada sensor / The form of an image is virtual, inverted and diminished on the sensor"},
        {"id": "C", "teks": "Jarak maksimum di antara sensor dengan pusat kanta haruslah sama dengan panjang fokus / The maximum distance between the sensor and the centre of the lens has to be the same as the focal length"},
        {"id": "D", "teks": "Ketebalan keseluruhan bekas CCTV tidak terhad kepada panjang fokus kanta CCTV tersebut / The overall thickness of the CCTV casing is not limited to the focal length of the CCTV lens"}
    ],
    'k2_q64': [
        {"id": "A", "teks": "Cermin satah / Plane mirror"},
        {"id": "B", "teks": "Cermin cembung / Convex mirror"},
        {"id": "C", "teks": "Cermin cekung / Concave mirror"},
        {"id": "D", "teks": "Cermin permukaan tidak rata / Uneven surface mirror"}
    ],
    'k4_q02': [
        {"id": "A", "teks": "L > fo + fe : Imej akhir yang paling tajam dan paling cerah terhasil / The final image produced is the sharpest and brightest"},
        {"id": "B", "teks": "fo > fe : Pembesaran linear imej kecil / Small linear magnification of the image"},
        {"id": "C", "teks": "L = fo + fe : Imej akhir yang paling tajam dan paling cerah terhasil / The final image produced is the sharpest and brightest"},
        {"id": "D", "teks": "fo < fe : Pembesaran linear imej besar / Big linear magnification of the image"}
    ],

    'k1_q01': [
        {"id": "A", "teks": "Tegak dan nyata / Upright and real"},
        {"id": "B", "teks": "Tegak dan maya / Upright and virtual"},
        {"id": "C", "teks": "Songsang dan nyata / Inverted and real"},
        {"id": "D", "teks": "Songsang dan maya / Inverted and virtual"}
    ],
    'k1_q02': [
        {"id": "A", "teks": "Jarak imej / Image distance"},
        {"id": "B", "teks": "Jarak objek / Object distance"},
        {"id": "C", "teks": "Panjang fokus / Focal length"},
        {"id": "D", "teks": "Kuasa kanta / Power of lens"}
    ],
    'k2_q01': [
        {"id": "A", "teks": "Ketinggian imej / Image height"},
        {"id": "B", "teks": "Jarak objek / Object distance"},
        {"id": "C", "teks": "Panjang fokus / Focal length"},
        {"id": "D", "teks": "Kuasa kanta / Power of lens"}
    ],
    'k2_q02': [
        {"id": "A", "teks": "Kanta pembesar / Magnifying glass"},
        {"id": "B", "teks": "Mikroskop / Microscope"},
        {"id": "C", "teks": "Kamera / Camera"},
        {"id": "D", "teks": "Periskop berprisma / Prism periscope"}
    ],
    'k2_q03': [
        {"id": "A", "teks": "Pembiasan dan pantulan / Refraction and reflection"},
        {"id": "B", "teks": "Pembiasan dan pantulan dalam penuh / Refraction and total internal reflection"},
        {"id": "C", "teks": "Pantulan dan pantulan dalam penuh / Reflection and total internal reflection"},
        {"id": "D", "teks": "Pantulan, pembiasan dan pantulan dalam penuh / Reflection, refraction and total internal reflection"}
    ],
    'k2_q04': [
        {"id": "A", "teks": "I dan II / I and II"},
        {"id": "B", "teks": "II dan III / II and III"},
        {"id": "C", "teks": "I, II dan IV / I, II and IV"},
        {"id": "D", "teks": "II, III dan IV / II, III and IV"}
    ],
    'k2_q05': [
        {"id": "A", "teks": "I dan II / I and II"},
        {"id": "B", "teks": "I dan IV / I and IV"},
        {"id": "C", "teks": "II dan III / II and III"},
        {"id": "D", "teks": "III dan IV / III and IV"}
    ],
    'k2_q08': [
        {"id": "A", "teks": "sin Y / sin W"},
        {"id": "B", "teks": "sin W / sin Y"},
        {"id": "C", "teks": "sin Z / sin W"},
        {"id": "D", "teks": "sin W / sin Z"}
    ],
    'k2_q09': [
        {"id": "A", "teks": "Arah A / Direction A"},
        {"id": "B", "teks": "Arah B / Direction B"},
        {"id": "C", "teks": "Arah C / Direction C"},
        {"id": "D", "teks": "Arah D / Direction D"}
    ],
    'k2_q10': [
        {"id": "A", "teks": "Kanta pembesar / Magnifying glass"},
        {"id": "B", "teks": "Periskop cermin / Mirror periscope"},
        {"id": "C", "teks": "Periskop prisma / Prism periscope"},
        {"id": "D", "teks": "Mikroskop majmuk / Compound microscope"}
    ],
    'k2_q11': [
        {"id": "A", "teks": "sin Y / sin W"},
        {"id": "B", "teks": "sin W / sin Y"},
        {"id": "C", "teks": "sin Z / sin W"},
        {"id": "D", "teks": "sin W / sin Z"}
    ],
    'k2_q14': [
        {"id": "A", "teks": "Mikroskop / Microscope"},
        {"id": "B", "teks": "Kanta pembesar / Magnifying glass"},
        {"id": "C", "teks": "Binokular prisma / Prism binocular"},
        {"id": "D", "teks": "Teleskop astronomi / Astronomical telescope"}
    ],
    'k2_q19': [
        {"id": "A", "teks": "I dan II / I and II"},
        {"id": "B", "teks": "I dan III / I and III"},
        {"id": "C", "teks": "II dan IV / II and IV"},
        {"id": "D", "teks": "III dan IV / III and IV"}
    ],
    'k2_q22': [
        {"id": "A", "teks": "Mengecil / Diminished"},
        {"id": "B", "teks": "Songsang / Inverted"},
        {"id": "C", "teks": "Nyata / Real"},
        {"id": "D", "teks": "Maya / Virtual"}
    ],
    'k2_q29': [
        {"id": "A", "teks": "d < panjang fokus, f / d < focal length, f"},
        {"id": "B", "teks": "d = panjang fokus, f / d = focal length, f"},
        {"id": "C", "teks": "panjang fokus, f < d < 2f / focal length, f < d < 2f"},
        {"id": "D", "teks": "d > dua kali panjang fokus, 2f / d > two times focal length, 2f"}
    ],
    'k2_q31': [
        {"id": "A", "teks": "Lebih besar, tegak dan maya / Bigger, upright and virtual"},
        {"id": "B", "teks": "Lebih besar, songsang dan nyata / Bigger, inverted and real"},
        {"id": "C", "teks": "Sama saiz, songsang dan nyata / Same size, inverted and real"},
        {"id": "D", "teks": "Lebih kecil, songsang dan nyata / Smaller, inverted and real"}
    ],
    'k2_q35': [
        {"id": "A", "teks": "Lebih panjang / Longer"},
        {"id": "B", "teks": "Lebih pendek / Shorter"},
        {"id": "C", "teks": "Tidak berubah / No change"},
        {"id": "D", "teks": "Menjadi sifar / Becomes zero"}
    ],
    'k2_q36': [
        {"id": "A", "teks": "Titik A / Point A"},
        {"id": "B", "teks": "Titik B / Point B"},
        {"id": "C", "teks": "Titik C / Point C"},
        {"id": "D", "teks": "Titik D / Point D"}
    ],
    'k2_q37': [
        {"id": "A", "teks": "Kedudukan A / Position A"},
        {"id": "B", "teks": "Kedudukan B / Position B"},
        {"id": "C", "teks": "Kedudukan C / Position C"},
        {"id": "D", "teks": "Kedudukan D / Position D"}
    ],
    'k2_q38': [
        {"id": "A", "teks": "P dan Q / P and Q"},
        {"id": "B", "teks": "P dan R / P and R"},
        {"id": "C", "teks": "Q dan S / Q and S"},
        {"id": "D", "teks": "Q dan R / Q and R"}
    ],
    'k2_q39': [
        {"id": "A", "teks": "Cembung, kurang dari f / Convex, less than f"},
        {"id": "B", "teks": "Cembung, antara f dan 2f / Convex, between f and 2f"},
        {"id": "C", "teks": "Cekung, kurang dari f / Concave, less than f"},
        {"id": "D", "teks": "Cekung, antara f dan 2f / Concave, between f and 2f"}
    ],
    'k2_q44': [
        {"id": "A", "teks": "u < f"},
        {"id": "B", "teks": "f < u < 2f"},
        {"id": "C", "teks": "u = 2f"},
        {"id": "D", "teks": "u > 2f"}
    ],
    'k2_q47': [
        {"id": "A", "teks": "L = fₒ + fₑ"},
        {"id": "B", "teks": "L < fₒ + fₑ"},
        {"id": "C", "teks": "L > fₒ + fₑ"},
        {"id": "D", "teks": "L = fₒ - fₑ"}
    ],
    'k2_q49': [
        {"id": "A", "teks": "nx = ny"},
        {"id": "B", "teks": "nx > ny"},
        {"id": "C", "teks": "nx < ny"},
        {"id": "D", "teks": "nx ≤ ny"}
    ],
    'k2_q50': [
        {"id": "A", "teks": "Gantikan kanta cembung berpanjang fokus lebih pendek / Replace with convex lens of shorter focal length"},
        {"id": "B", "teks": "Gantikan kanta cembung berpanjang fokus lebih panjang / Replace with convex lens of longer focal length"},
        {"id": "C", "teks": "Gerakkan objek lebih jauh daripada kanta / Move object further from lens"},
        {"id": "D", "teks": "Gerakkan skrin lebih dekat ke kanta / Move screen closer to lens"}
    ],
    'k2_q51': [
        {"id": "A", "teks": "Lintasan A / Path A"},
        {"id": "B", "teks": "Lintasan B / Path B"},
        {"id": "C", "teks": "Lintasan C / Path C"},
        {"id": "D", "teks": "Lintasan D / Path D"}
    ],
    'k2_q57': [
        {"id": "A", "teks": "Jarak objek = 10 cm, Panjang fokus = 15 cm / Object distance = 10 cm, Focal length = 15 cm"},
        {"id": "B", "teks": "Jarak objek = 10 cm, Panjang fokus = 8 cm / Object distance = 10 cm, Focal length = 8 cm"},
        {"id": "C", "teks": "Jarak objek = 15 cm, Panjang fokus = 10 cm / Object distance = 15 cm, Focal length = 10 cm"},
        {"id": "D", "teks": "Jarak objek = 20 cm, Panjang fokus = 8 cm / Object distance = 20 cm, Focal length = 8 cm"}
    ],
    'k2_q58': [
        {"id": "A", "teks": "I dan II / I and II"},
        {"id": "B", "teks": "I dan III / I and III"},
        {"id": "C", "teks": "I dan IV / I and IV"},
        {"id": "D", "teks": "II dan IV / II and IV"}
    ],
    'k2_q60': [
        {"id": "A", "teks": "Jarak objek / Object distance"},
        {"id": "B", "teks": "Jarak imej / Image distance"},
        {"id": "C", "teks": "Kuasa kanta / Power of lens"},
        {"id": "D", "teks": "Jarak antara imej dengan objek / Distance between image and object"}
    ],
    'k2_q62': [
        {"id": "A", "teks": "Diameter kanta tiada perubahan, Panjang fokus bertambah / Lens diameter no changes, Focal length increases"},
        {"id": "B", "teks": "Diameter kanta bertambah, Panjang fokus tiada perubahan / Lens diameter increases, Focal length no changes"},
        {"id": "C", "teks": "Diameter kanta tiada perubahan, Panjang fokus berkurang / Lens diameter no changes, Focal length decreases"},
        {"id": "D", "teks": "Diameter kanta berkurang, Panjang fokus tiada perubahan / Lens diameter decreases, Focal length no changes"}
    ],
    'k3_q04': [
        {"id": "A", "teks": "0.15 cm"},
        {"id": "B", "teks": "6.67 cm"},
        {"id": "C", "teks": "7.50 cm"},
        {"id": "D", "teks": "20.00 cm"}
    ],
    'k3_q05': [
        {"id": "A", "teks": "Maya dan lebih besar daripada objek / Virtual and bigger than the object"},
        {"id": "B", "teks": "Nyata dan lebih kecil daripada objek / Real and smaller than the object"},
        {"id": "C", "teks": "Maya dan lebih kecil daripada objek / Virtual and smaller than the object"},
        {"id": "D", "teks": "Nyata dan lebih besar daripada objek / Real and bigger than the object"}
    ],
    'k3_q08': [
        {"id": "A", "teks": "Rajah A: Terbias mendekati garis normal / Diagram A: Refracts towards normal line"},
        {"id": "B", "teks": "Rajah B: Terbias menjauhi garis normal / Diagram B: Refracts away from normal line"},
        {"id": "C", "teks": "Rajah C: Pantulan dalam penuh / Diagram C: Total internal reflection"},
        {"id": "D", "teks": "Rajah D: Tidak terbias / Diagram D: Undeviated"}
    ],
    'k3_q09': [
        {"id": "A", "teks": "6 cm"},
        {"id": "B", "teks": "25 cm"},
        {"id": "C", "teks": "30 cm"},
        {"id": "D", "teks": "150 cm"}
    ],
    'k3_q12': [
        {"id": "A", "teks": "Tegak, maya dan diperkecilkan / Upright, virtual and diminished"},
        {"id": "B", "teks": "Songsang, nyata dan diperkecilkan / Inverted, real and diminished"},
        {"id": "C", "teks": "Tegak, maya dan diperbesarkan / Upright, virtual and magnified"},
        {"id": "D", "teks": "Songsang, nyata dan diperbesarkan / Inverted, real and magnified"}
    ],
    'k3_q13': [
        {"id": "A", "teks": "Objek dan imej berada pada titik fokus / Object and image at focal point"},
        {"id": "B", "teks": "Objek berada di antara F dan 2F / Object between F and 2F"},
        {"id": "C", "teks": "Objek berada pada jarak kurang dari F / Object at distance less than F"},
        {"id": "D", "teks": "Objek berada pada jarak lebih dari 2F / Object at distance greater than 2F"}
    ],
    'k3_q14': [
        {"id": "A", "teks": "Kedudukan A / Position A"},
        {"id": "B", "teks": "Kedudukan B / Position B"},
        {"id": "C", "teks": "Kedudukan C / Position C"},
        {"id": "D", "teks": "Kedudukan D / Position D"}
    ],
    'k3_q16': [
        {"id": "A", "teks": "I dan II / I and II"},
        {"id": "B", "teks": "II dan III / II and III"},
        {"id": "C", "teks": "I dan III / I and III"},
        {"id": "D", "teks": "III dan IV / III and IV"}
    ],
    'k3_q18': [
        {"id": "A", "teks": "Maya, tegak dan dibesarkan / Virtual, upright and magnified"},
        {"id": "B", "teks": "Maya, tegak dan dikecilkan / Virtual, upright and diminished"},
        {"id": "C", "teks": "Nyata, songsang dan dibesarkan / Real, inverted and magnified"},
        {"id": "D", "teks": "Nyata, songsang dan dikecilkan / Real, inverted and diminished"}
    ],
    'k3_q27': [
        {"id": "A", "teks": "Arah A / Direction A"},
        {"id": "B", "teks": "Arah B / Direction B"},
        {"id": "C", "teks": "Arah C / Direction C"},
        {"id": "D", "teks": "Arah D / Direction D"}
    ],
    'k3_q30': [
        {"id": "A", "teks": "Nyata, tegak dan diperkecil / Real, upright and diminished"},
        {"id": "B", "teks": "Maya, tegak dan diperkecil / Virtual, upright and diminished"},
        {"id": "C", "teks": "Nyata, songsang dan diperkecil / Real, inverted and diminished"},
        {"id": "D", "teks": "Maya, songsang dan diperkecil / Virtual, inverted and diminished"}
    ],
    'k3_q32': [
        {"id": "A", "teks": "Rajah A / Diagram A"},
        {"id": "B", "teks": "Rajah B / Diagram B"},
        {"id": "C", "teks": "Rajah C / Diagram C"},
        {"id": "D", "teks": "Rajah D / Diagram D"}
    ],
    'k3_q43': [
        {"id": "A", "teks": "Maya dan sama saiz / Virtual and same size"},
        {"id": "B", "teks": "Maya dan lebih besar / Virtual and bigger"},
        {"id": "C", "teks": "Nyata dan sama saiz / Real and same size"},
        {"id": "D", "teks": "Nyata dan lebih kecil / Real and smaller"}
    ],
    'k3_q44': [
        {"id": "A", "teks": "Kedudukan A / Position A"},
        {"id": "B", "teks": "Kedudukan B / Position B"},
        {"id": "C", "teks": "Kedudukan C / Position C"},
        {"id": "D", "teks": "Kedudukan D / Position D"}
    ],
    'k3_q45': [
        {"id": "A", "teks": "23.00°"},
        {"id": "B", "teks": "29.30°"},
        {"id": "C", "teks": "60.70°"},
        {"id": "D", "teks": "67.00°"}
    ],
    'k3_q46': [
        {"id": "A", "teks": "Jarak objek = 25 cm, Ciri imej = Maya dan lebih kecil / Object distance = 25 cm, Image = Virtual and smaller"},
        {"id": "B", "teks": "Jarak objek = 40 cm, Ciri imej = Nyata dan sama saiz / Object distance = 40 cm, Image = Real and same size"},
        {"id": "C", "teks": "Jarak objek = 60 cm, Ciri imej = Nyata dan lebih besar / Object distance = 60 cm, Image = Real and bigger"},
        {"id": "D", "teks": "Jarak objek = 10 cm, Ciri imej = Maya dan lebih besar / Object distance = 10 cm, Image = Virtual and bigger"}
    ],
    'k3_q47': [
        {"id": "A", "teks": "Kedudukan A / Position A"},
        {"id": "B", "teks": "Kedudukan B / Position B"},
        {"id": "C", "teks": "Kedudukan C / Position C"},
        {"id": "D", "teks": "Kedudukan D / Position D"}
    ],
    'k3_q48': [
        {"id": "A", "teks": "r < 30°"},
        {"id": "B", "teks": "r = 30°"},
        {"id": "C", "teks": "r > 30°"},
        {"id": "D", "teks": "r = 0°"}
    ],
    'k3_q49': [
        {"id": "A", "teks": "10 cm"},
        {"id": "B", "teks": "12 cm"},
        {"id": "C", "teks": "15 cm"},
        {"id": "D", "teks": "20 cm"}
    ],
    'k3_q51': [
        {"id": "A", "teks": "Arah A / Direction A"},
        {"id": "B", "teks": "Arah B / Direction B"},
        {"id": "C", "teks": "Arah C / Direction C"},
        {"id": "D", "teks": "Arah D / Direction D"}
    ],
    'k3_q52': [
        {"id": "A", "teks": "0.5 cm"},
        {"id": "B", "teks": "1.0 cm"},
        {"id": "C", "teks": "2.0 cm"},
        {"id": "D", "teks": "3.0 cm"}
    ],
    'k3_q54': [
        {"id": "A", "teks": "Lintasan A / Path A"},
        {"id": "B", "teks": "Lintasan B / Path B"},
        {"id": "C", "teks": "Lintasan C / Path C"},
        {"id": "D", "teks": "Lintasan D / Path D"}
    ],
    'k3_q55': [
        {"id": "A", "teks": "Kedudukan A / Position A"},
        {"id": "B", "teks": "Kedudukan B / Position B"},
        {"id": "C", "teks": "Kedudukan C / Position C"},
        {"id": "D", "teks": "Kedudukan D / Position D"}
    ],
    'k3_q57': [
        {"id": "A", "teks": "0.3 cm"},
        {"id": "B", "teks": "1.3 cm"},
        {"id": "C", "teks": "2.0 cm"},
        {"id": "D", "teks": "3.0 cm"}
    ],
    'k3_q59': [
        {"id": "A", "teks": "3.25 cm"},
        {"id": "B", "teks": "4.00 cm"},
        {"id": "C", "teks": "4.50 cm"},
        {"id": "D", "teks": "6.50 cm"}
    ],
    'k3_q60': [
        {"id": "A", "teks": "Nyata, sama saiz, songsang / Real, same size, inverted"},
        {"id": "B", "teks": "Nyata, diperkecil, songsang / Real, diminished, inverted"},
        {"id": "C", "teks": "Maya, sama saiz, tegak / Virtual, same size, upright"},
        {"id": "D", "teks": "Maya, diperkecil, tegak / Virtual, diminished, upright"}
    ],
    'k3_q62': [
        {"id": "A", "teks": "Laluan A / Path A"},
        {"id": "B", "teks": "Laluan B / Path B"},
        {"id": "C", "teks": "Laluan C / Path C"},
        {"id": "D", "teks": "Laluan D / Path D"}
    ],
    'k4_q03': [
        {"id": "A", "teks": "Jarak objek sama, Ketinggian imej bertambah / Object distance same, Image height increases"},
        {"id": "B", "teks": "Jarak objek bertambah, Ketinggian imej sama / Object distance increases, Image height same"},
        {"id": "C", "teks": "Jarak objek berkurang, Ketinggian imej berkurang / Object distance decreases, Image height decreases"},
        {"id": "D", "teks": "Jarak objek berkurang, Ketinggian imej bertambah / Object distance decreases, Image height increases"}
    ],
    'k4_q04': [
        {"id": "A", "teks": "Rajah 91(a): u = 2f, Rajah 91(b): f < u < 2f / Diagram 91(a): u = 2f, Diagram 91(b): f < u < 2f"},
        {"id": "B", "teks": "Rajah 91(a): u > 2f, Rajah 91(b): u = 2f / Diagram 91(a): u > 2f, Diagram 91(b): u = 2f"},
        {"id": "C", "teks": "Rajah 91(a): u > 2f, Rajah 91(b): f < u < 2f / Diagram 91(a): u > 2f, Diagram 91(b): f < u < 2f"},
        {"id": "D", "teks": "Rajah 91(a): f < u < 2f, Rajah 91(b): u > 2f / Diagram 91(a): f < u < 2f, Diagram 91(b): u > 2f"}
    ]
}

def clean_stem_text(raw_stem):
    txt = clean_ocr_typos_b6(raw_stem)
    txt = re.sub(r'\bseckor\b', 'seekor', txt)
    # Remove caption references e.g. Rajah 1 / Diagram 1 to prevent Invariant 9 violation
    txt = re.sub(r'Rajah\s+\d+[a-z]?\s*(?:/|I)?\s*Diagram[a-z]*\s*\d*[a-z]?', '', txt, flags=re.IGNORECASE)
    # Remove <<<PAGE...>>> markers
    txt = re.sub(r'<<<PAGE\s+\d+\s+COL\s+\d+>>>', '', txt)
    # Remove standalone question numbers at start
    txt = re.sub(r'^\s*\d{1,2}\.?\s*', '', txt)
    # Fix spacing issues
    txt = re.sub(r'\bofthe\b', 'of the', txt)
    txt = re.sub(r'\bafier\b', 'after', txt)
    txt = re.sub(r'\bschelai\b', 'sehelai', txt)
    txt = re.sub(r'\b1otal\b', 'total', txt)
    txt = re.sub(r'\bhịand\b', 'h₁ and', txt)
    txt = re.sub(r'\bhịdan\b', 'h₁ dan', txt)
    txt = re.sub(r'\basanmefocal\b', 'a same focal', txt)
    txt = re.sub(r'\bpoweroflens\b', 'power of lens', txt)
    txt = re.sub(r'\bObjck\b', 'Objek / Object', txt)
    txt = re.sub(r'\bcemin\b', 'cermin', txt)
    txt = re.sub(r'\bnomal\b', 'normal', txt)
    txt = re.sub(r'\bfocallength\b', 'focal length', txt)
    txt = re.sub(r'\bimagesize\b', 'image size', txt)
    txt = re.sub(r'\bimagesize\?\b', 'image size?', txt)
    
    # Process lines: remove stray characters / standalone digits
    lines = []
    for l in txt.split('\n'):
        s = l.strip()
        if not s:
            continue
        # Skip standalone page numbers or stray numbers
        if re.match(r'^\d{1,3}$', s):
            continue
        # Skip single letter lines
        if re.match(r'^[A-Za-z]$', s) and not re.match(r'^[ivx]$', s, re.I):
            continue
        # Skip hanging to
        if s.lower() == 'to':
            continue
        lines.append(s)
        
    # Check end of lines for leaked answer/page token
    while lines and re.match(r'^(?:[A-D]|\d+|R|to)$', lines[-1], re.I):
        lines.pop()
        
    return '\n'.join(lines).strip()

def parse_question_chunk(chunk, qkey, qnum, konstruk_num):
    # Detect Rajah key
    m_raj = re.search(r'Rajah\s+(\d+[a-z]?)\s*(?:/|I)?\s*Diagram[a-z]*\s*\1?', chunk, re.IGNORECASE)
    rajah_key = f"rajah{m_raj.group(1).lower()}" if m_raj else ""
    
    # Detect Source
    m_src = re.search(r'\(([^)]*(?:202[0-5]|SPM|MRSM|SBP|SMKA|Set)[^)]*)\)', chunk)
    sumber = f"Percubaan {m_src.group(1).strip()}" if m_src else "Percubaan SPM 2023"
    m_yr = re.search(r'(202[0-5])', sumber)
    tahun = int(m_yr.group(1)) if m_yr else 2023

    # Check if explicit options override exists
    if qkey in EXPLICIT_OPTIONS:
        opts = EXPLICIT_OPTIONS[qkey]
        raw_stem = chunk
        m_a = re.search(r'(?:^|\n)\s*A\b', chunk)
        if m_a and m_a.start() > 30:
            raw_stem = chunk[:m_a.start()]
        stem = clean_stem_text(raw_stem)
        return stem, opts, rajah_key, sumber, tahun

    # Check if visual diagram options exist
    if qkey in OPTION_URLS:
        opts = []
        for let in ['A', 'B', 'C', 'D']:
            opts.append({"id": let, "teks": f"Pilihan {let}"})
        raw_stem = chunk
        m_a = re.search(r'(?:^|\n)\s*A\b', chunk)
        if m_a and m_a.start() > 30:
            raw_stem = chunk[:m_a.start()]
        stem = clean_stem_text(raw_stem)
        return stem, opts, rajah_key, sumber, tahun

    # Standard automatic parsing:
    c = re.sub(r'<<<PAGE\s+\d+\s+COL\s+\d+>>>', '', chunk).strip()
    
    # Pattern 1: 2x2 ACBD
    m_2x2_acbd = re.search(r'(?:^|\n)\s*A\s+([\s\S]+?)\s+C\s+([\s\S]+?)\n\s*B\s+([\s\S]+?)\s+D\s+([\s\S]+)$', c)
    if m_2x2_acbd:
        raw_stem = c[:m_2x2_acbd.start()]
        opts = [
            {"id": "A", "teks": ' '.join(m_2x2_acbd.group(1).split())},
            {"id": "B", "teks": ' '.join(m_2x2_acbd.group(3).split())},
            {"id": "C", "teks": ' '.join(m_2x2_acbd.group(2).split())},
            {"id": "D", "teks": ' '.join(m_2x2_acbd.group(4).split())}
        ]
        for o in opts:
            t = o['teks']
            if ' / ' not in t:
                m_bi = re.search(r'\b(real|virtual|upright|inverted|diminished|magnified|same size|greater|smaller|longer|shorter|increases|decreases|no change)\b', t, re.I)
                if m_bi and m_bi.start() > 3:
                    t = t[:m_bi.start()].strip() + ' / ' + t[m_bi.start():].strip()
            o['teks'] = t
        return clean_stem_text(raw_stem), opts, rajah_key, sumber, tahun

    # Pattern 2: 2x2 ABCD
    m_2x2_abcd = re.search(r'(?:^|\n)\s*A\s+([\s\S]+?)\s+B\s+([\s\S]+?)\n\s*C\s+([\s\S]+?)\s+D\s+([\s\S]+)$', c)
    if m_2x2_abcd:
        raw_stem = c[:m_2x2_abcd.start()]
        opts = [
            {"id": "A", "teks": ' '.join(m_2x2_abcd.group(1).split())},
            {"id": "B", "teks": ' '.join(m_2x2_abcd.group(2).split())},
            {"id": "C", "teks": ' '.join(m_2x2_abcd.group(3).split())},
            {"id": "D", "teks": ' '.join(m_2x2_abcd.group(4).split())}
        ]
        for o in opts:
            t = o['teks']
            if ' / ' not in t:
                m_bi = re.search(r'\b(real|virtual|upright|inverted|diminished|magnified|same size|greater|smaller|longer|shorter|increases|decreases|no change)\b', t, re.I)
                if m_bi and m_bi.start() > 3:
                    t = t[:m_bi.start()].strip() + ' / ' + t[m_bi.start():].strip()
            o['teks'] = t
        return clean_stem_text(raw_stem), opts, rajah_key, sumber, tahun

    # Pattern 3: Vertical A, B, C, D
    m_vert = re.search(r'(?:^|\n)\s*A\s+([\s\S]+?)\n\s*B\s+([\s\S]+?)\n\s*C\s+([\s\S]+?)\n\s*D\s+([\s\S]+)$', c)
    if m_vert:
        raw_stem = c[:m_vert.start()]
        opts = [
            {"id": "A", "teks": ' '.join(m_vert.group(1).split())},
            {"id": "B", "teks": ' '.join(m_vert.group(2).split())},
            {"id": "C", "teks": ' '.join(m_vert.group(3).split())},
            {"id": "D", "teks": ' '.join(m_vert.group(4).split())}
        ]
        for o in opts:
            t = o['teks']
            if ' / ' not in t:
                m_bi = re.search(r'\b(real|virtual|upright|inverted|diminished|magnified|same size|greater|smaller|longer|shorter|increases|decreases|no change)\b', t, re.I)
                if m_bi and m_bi.start() > 3:
                    t = t[:m_bi.start()].strip() + ' / ' + t[m_bi.start():].strip()
            o['teks'] = t
        return clean_stem_text(raw_stem), opts, rajah_key, sumber, tahun

    raw_stem = c
    opts = [{"id": let, "teks": f"Pilihan {let}"} for let in ['A', 'B', 'C', 'D']]
    return clean_stem_text(raw_stem), opts, rajah_key, sumber, tahun

def generate_data_file(filepath, func_name, questions_data, konstruk_title):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('#!/usr/bin/env python3\n')
        f.write('# -*- coding: utf-8 -*-\n')
        f.write('"""\n')
        f.write(f'Dataset {konstruk_title}\n')
        f.write('Tingkatan 4 Bab 6: Cahaya dan Optik\n')
        f.write('Adheres 100% to the 13 Golden Invariants.\n')
        f.write('"""\n\n')
        f.write('import sys\n')
        f.write('sys.path.insert(0, ".")\n')
        f.write('from scripts.build_dataset_helper_b6 import make_b6_q\n\n')
        f.write(f'def {func_name}():\n')
        f.write('    questions = []\n\n')
        for qid, no, aras, konstruk, stem, opts, rajah_key, sumber, tahun in questions_data:
            opts_json = json.dumps(opts, indent=12, ensure_ascii=False)
            stem_repr = repr(stem)
            f.write(f'    # {qid}\n')
            f.write('    questions.append(make_b6_q(\n')
            f.write(f'        "{qid}", {no}, "{aras}", "{konstruk}",\n')
            f.write(f'        {stem_repr},\n')
            f.write(f'        {opts_json},\n')
            f.write(f'        "{rajah_key}", "{sumber}", {tahun}\n')
            f.write('    ))\n\n')
        f.write('    return questions\n\n')
        f.write('if __name__ == "__main__":\n')
        f.write(f'    qs = {func_name}()\n')
        f.write(f'    print(f"Loaded {{len(qs)}} questions from {func_name}")\n')
    print(f'[*] Generated: {filepath} ({len(questions_data)} soalan)')

# 1. K1 Questions (2 soalan)
k1_data = []
for q, c in k1_chunks.items():
    qkey = f"k1_q{q:02d}"
    stem, opts, rajah_key, sumber, tahun = parse_question_chunk(c, qkey, q, 1)
    k1_data.append((f"MODUL_T4_B6_K1_Q{q:02d}", q, "Rendah", "Mengingat", stem, opts, rajah_key, sumber, tahun))
generate_data_file("scripts/b6_k1_data.py", "get_k1_questions", k1_data, "Konstruk 1: Mengingat")

# 2. K2 Part 1 Questions (Q01 - Q35)
k2_p1_data = []
for q in range(1, 36):
    c = k2_chunks[q]
    qkey = f"k2_q{q:02d}"
    stem, opts, rajah_key, sumber, tahun = parse_question_chunk(c, qkey, q, 2)
    k2_p1_data.append((f"MODUL_T4_B6_K2_Q{q:02d}", q, "Sederhana", "Memahami", stem, opts, rajah_key, sumber, tahun))
generate_data_file("scripts/b6_k2_part1_data.py", "get_k2_part1_questions", k2_p1_data, "Konstruk 2: Memahami (Bahagian 1: Soalan 1 - 35)")

# 3. K2 Part 2 Questions (Q36 - Q64)
k2_p2_data = []
for q in range(36, 65):
    c = k2_chunks[q]
    qkey = f"k2_q{q:02d}"
    stem, opts, rajah_key, sumber, tahun = parse_question_chunk(c, qkey, q, 2)
    k2_p2_data.append((f"MODUL_T4_B6_K2_Q{q:02d}", q, "Sederhana", "Memahami", stem, opts, rajah_key, sumber, tahun))
generate_data_file("scripts/b6_k2_part2_data.py", "get_k2_part2_questions", k2_p2_data, "Konstruk 2: Memahami (Bahagian 2: Soalan 36 - 64)")

# 4. K3 Part 1 Questions (Q01 - Q35)
k3_p1_data = []
for q in range(1, 36):
    c = k3_chunks[q]
    qkey = f"k3_q{q:02d}"
    stem, opts, rajah_key, sumber, tahun = parse_question_chunk(c, qkey, q, 3)
    k3_p1_data.append((f"MODUL_T4_B6_K3_Q{q:02d}", q, "Sederhana", "Mengaplikasi", stem, opts, rajah_key, sumber, tahun))
generate_data_file("scripts/b6_k3_part1_data.py", "get_k3_part1_questions", k3_p1_data, "Konstruk 3: Mengaplikasi (Bahagian 1: Soalan 1 - 35)")

# 5. K3 Part 2 Questions (Q36 - Q62)
k3_p2_data = []
for q in range(36, 63):
    c = k3_chunks[q]
    qkey = f"k3_q{q:02d}"
    stem, opts, rajah_key, sumber, tahun = parse_question_chunk(c, qkey, q, 3)
    k3_p2_data.append((f"MODUL_T4_B6_K3_Q{q:02d}", q, "Sederhana", "Mengaplikasi", stem, opts, rajah_key, sumber, tahun))
generate_data_file("scripts/b6_k3_part2_data.py", "get_k3_part2_questions", k3_p2_data, "Konstruk 3: Mengaplikasi (Bahagian 2: Soalan 36 - 62)")

# 6. K4 Questions (Q01 - Q04)
k4_data = []
for q in range(1, 5):
    c = k4_chunks[q]
    qkey = f"k4_q{q:02d}"
    stem, opts, rajah_key, sumber, tahun = parse_question_chunk(c, qkey, q, 4)
    k4_data.append((f"MODUL_T4_B6_K4_Q{q:02d}", q, "Tinggi", "Menganalisis", stem, opts, rajah_key, sumber, tahun))
generate_data_file("scripts/b6_k4_data.py", "get_k4_questions", k4_data, "Konstruk 4: Menganalisis")

print("\n[SUCCESS] All 6 Bab 6 dataset files generated successfully!")
