#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dataset Konstruk 2: Memahami (Bahagian 1: Soalan 1 - 35)
Tingkatan 4 Bab 6: Cahaya dan Optik
Adheres 100% to the 13 Golden Invariants.
"""

import sys
sys.path.insert(0, ".")
from scripts.build_dataset_helper_b6 import make_b6_q

def get_k2_part1_questions():
    questions = []

    # MODUL_T4_B6_K2_Q01
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q01", 1, "Sederhana", "Memahami",
        'Rajah 1 menunjukkan graf jarak imej, v melawan\npembesaran linear, m bagi suatu kanta cembung\nDiagram 1 shows a graph of image distance, v\nagainst linear magnification, m for a convex lens.\n(Negeri Sembilan: 2023)\n-m\nApakah kuantiti yang diwakili oleh p?\nWhat is the quantity represented by p?',
        [
            {
                        "id": "A",
                        "teks": "Ketinggian imej / Image height"
            },
            {
                        "id": "B",
                        "teks": "Jarak objek / Object distance"
            },
            {
                        "id": "C",
                        "teks": "Panjang fokus / Focal length"
            },
            {
                        "id": "D",
                        "teks": "Kuasa kanta / Power of lens"
            }
],
        "rajah1", "Percubaan Negeri Sembilan: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q02
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q02", 2, "Sederhana", "Memahami",
        'Antara yang berikut, alat optik manakah yang\nmenggunakan konsep pantulan dalam penuh?\nWhich of the following optical instrument uses\nthe concept of the total internal reflection?\n(Negeri Sembilan: 2023)',
        [
            {
                        "id": "A",
                        "teks": "Kanta pembesar / Magnifying glass"
            },
            {
                        "id": "B",
                        "teks": "Mikroskop / Microscope"
            },
            {
                        "id": "C",
                        "teks": "Kamera / Camera"
            },
            {
                        "id": "D",
                        "teks": "Periskop berprisma / Prism periscope"
            }
],
        "", "Percubaan Negeri Sembilan: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q03
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q03", 3, "Sederhana", "Memahami",
        'Pembentukan logamaya boleh dilihat di atas jalan\nraya pada hari yang panas. Fenomena cahaya\nmanakah menyebabkan kejadian logamaya?\nMirage can be seen on a road on a hot day. Which\nlight phenomena cause the appearance of\nmirages? (Negeri Sembilan: 2023)',
        [
            {
                        "id": "A",
                        "teks": "Pembiasan dan pantulan / Refraction and reflection"
            },
            {
                        "id": "B",
                        "teks": "Pembiasan dan pantulan dalam penuh / Refraction and total internal reflection"
            },
            {
                        "id": "C",
                        "teks": "Pantulan dan pantulan dalam penuh / Reflection and total internal reflection"
            },
            {
                        "id": "D",
                        "teks": "Pantulan, pembiasan dan pantulan dalam penuh / Reflection, refraction and total internal reflection"
            }
],
        "", "Percubaan Negeri Sembilan: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q04
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q04", 4, "Sederhana", "Memahami",
        'Rajah 2 menunjukkan kabel gentian optik.\nDiagram 2 shows an optical fibre cable.\n(Pahang: 2023)\nTeras dalam\nKabel gentian oplk Penyalut Innercore\nOptical fbre cable Outer cadding\nPernyataan manakah yang betul berkenaan\nisyarat cahaya yang masuk ke dalam gentian\noptik?\nWhich statement is correct regarding the light\nsignal enter an optical fibre?\nI Sudut biasan, r lebih kecil daripada sudut\ntuju, i\nThe angle of refraction, r is less than the\nangle of incidence, i\nII Indeks biasan teras dalam, n, lebih tinggi\ndaripada indeks biasan penyalut, no\nThe refractive index of the inner core, n, is\nhigher than the refractive index of the outer\ncladding, no\nIII Pantulan dalam penuh berlaku apabila sudut\ntuju, i melebihi sudut genting, c\nTotal internal reflection occurs when the\nangle of incidence, i greater than the critical\nangle, c\nIV Sudut tuju, i adalah sama dengan sudut\npantulan, r apabila berlakunya pantulan\ndalam penuh di dalam teras\nThe angle of incidence, i is equal to the angle\nof reflection, r during the occurrence of total\ninternal reflection in the core',
        [
            {
                        "id": "A",
                        "teks": "I dan II / I and II"
            },
            {
                        "id": "B",
                        "teks": "II dan III / II and III"
            },
            {
                        "id": "C",
                        "teks": "I, II dan IV / I, II and IV"
            },
            {
                        "id": "D",
                        "teks": "II, III dan IV / II, III and IV"
            }
],
        "rajah2", "Percubaan Pahang: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q05
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q05", 5, "Sederhana", "Memahami",
        'Formula kanta nipis memberikan hubungan\nantara jarak objek, u, jarak imej, v, dengan\npanjang fokus, f bagi suatu kanta sebagai:\nThin lens formula gives the relationship betweeneen\nthe object distance, u, the image distance, v, and\nfocal length,f for alensas:(Pahang:2023)\nAntara berikut, kombinasi manakah benar\nberkaitan dengan peraturan tanda bagi panjang\nfokus, f untuk formula kantanipis?\nWhich of the following combination is true\nregarding the sign conventionfor the focal length\nof a lensfor a thin lensformula?\nJenis kanta Peraturan tanda\nType oflens Signconvention\nCembung Positif\nConvex Positive\nCekung Positif\nConcave Positive\nII Cembung Negatif\nConvex Negative\nIV Cekung Negatif\nConcave Negative',
        [
            {
                        "id": "A",
                        "teks": "I dan II / I and II"
            },
            {
                        "id": "B",
                        "teks": "I dan IV / I and IV"
            },
            {
                        "id": "C",
                        "teks": "II dan III / II and III"
            },
            {
                        "id": "D",
                        "teks": "III dan IV / III and IV"
            }
],
        "", "Percubaan Pahang:2023", 2023
    ))

    # MODUL_T4_B6_K2_Q06
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q06", 6, "Sederhana", "Memahami",
        'Rajah 3 menunjukkan sebuah cermin bintik buta\nyang diletakkan di sebuah selekoh.\nDiagram 3 shows a blind spot mirror placed on a\nsharp bend of the road. (Pahang: 2023)\nCermin cembung\nConvex mirror\nRajah3 / Diagram3\nAntara berikut, manakah merupakan kelebihan\nmenggunakan cermin cembung sebagai cermin\nbintik buta tersebut?\nWhichof the following is an advantage of using a\nconvex mirror as a blind spot mirror?',
        [
            {
                        "id": "A",
                        "teks": "Memberikan imej yang lebih tajam Providesa sharper image"
            },
            {
                        "id": "B",
                        "teks": "Pantulan cahaya yang lebih banyak More reflection of light"
            },
            {
                        "id": "C",
                        "teks": "Medan penglihatan yang lebih luas Widerfield ofview"
            },
            {
                        "id": "D",
                        "teks": "Menghasilkan imej yang diperbesarkan Produces an enlarged image"
            }
],
        "", "Percubaan Pahang: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q07
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q07", 7, "Sederhana", "Memahami",
        'Rajah 4 menunjukkan sebatang lilin dengan\nimejnya dalam cermin satah.\nDiagram 4 shows a candle with its inage in a\nplane mirror (Pulau Pinang: 2023)\nCermin satah\nPlane mirror\nObjek Imej\nObject Image\nJarak objek, u\nObject distance, u\nPasangan manakah yang betul jika imej yang\ningin dihasilkan adalah besar dan tegak?\nWhich pair is correct if the image to beproduced\nis large and uprigh?\nJenis cermin Kedudukan lilin\nTypeof nirror The position of candle',
        [
            {
                        "id": "A",
                        "teks": "Cekung u> panjangfokus Concave cermin u> focalengthof mirror"
            },
            {
                        "id": "B",
                        "teks": "Cckung u< panjang fokus Concave cermin u<focallengthof mirror"
            },
            {
                        "id": "C",
                        "teks": "Cembung u> panjangfokus Convex cermin u>focal lengthof mirror"
            },
            {
                        "id": "D",
                        "teks": "Cembung u< panjangfokus Convex cermin u<focal lengthof mirror"
            }
],
        "rajah4", "Percubaan Pulau Pinang: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q08
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q08", 8, "Sederhana", "Memahami",
        'Rajah 5 menunjukkan satu sinar cahaya\nmerambat dari udara ke kaca.\nDiagram 5 shows a light ray propagates from air\nto glass. (Perak: 2023)\nKaca\nGlut\nUdara\nAlr\nApakah indeks biasan kaca itu?\nWhat is the refractive index of the glass?',
        [
            {
                        "id": "A",
                        "teks": "sin Y / sin W"
            },
            {
                        "id": "B",
                        "teks": "sin W / sin Y"
            },
            {
                        "id": "C",
                        "teks": "sin Z / sin W"
            },
            {
                        "id": "D",
                        "teks": "sin W / sin Z"
            }
],
        "rajah5", "Percubaan Perak: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q09
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q09", 9, "Sederhana", "Memahami",
        'Rajah 6 menunjukkan satu sinar cahaya MN\nditujukan ke arah satu blok semibulatan yang lut\nsinar. Sudut genting bagi blok lut sinar itu ialah\n41°. Arah manakah sinar itu bergerak dari titik 0?\nDiagram 6 shows a light ray MN directed to a\ntransparent semicircular block. The critical angle\nof the transparent block is 41°. Which direction\ndoes the ray move from point O? (Perak: 2023)\nGaris normal\nNornal line\no B\nBlok semibulatan\nSemicircular block\nNX',
        [
            {
                        "id": "A",
                        "teks": "Arah A / Direction A"
            },
            {
                        "id": "B",
                        "teks": "Arah B / Direction B"
            },
            {
                        "id": "C",
                        "teks": "Arah C / Direction C"
            },
            {
                        "id": "D",
                        "teks": "Arah D / Direction D"
            }
],
        "rajah6", "Percubaan Perak: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q10
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q10", 10, "Sederhana", "Memahami",
        'Antara alat berikut, yang manakah\nmengaplikasikan pantulan dalam penuh?\nWhich of thefollowving instruments applies total\ninternal reflection? (Perak: 2023)',
        [
            {
                        "id": "A",
                        "teks": "Kanta pembesar / Magnifying glass"
            },
            {
                        "id": "B",
                        "teks": "Periskop cermin / Mirror periscope"
            },
            {
                        "id": "C",
                        "teks": "Periskop prisma / Prism periscope"
            },
            {
                        "id": "D",
                        "teks": "Mikroskop majmuk / Compound microscope"
            }
],
        "", "Percubaan Perak: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q11
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q11", 11, "Sederhana", "Memahami",
        'Rajah 7 menunjukkan satu alat optik yang\ndigunakan secara meluas dalam bidang\ntelekomunikasi dan perubatan.\nDiagram 7 below shows an optical instrument\nthat is used widely in the fields of\ntelecommunications and medicine. (Perlis: 2023)\nApakah fenomena cahaya yang membolehkan\nalat itu berfungsi?\nWhat is the phenomenon of light that enable the\ninstrument to function?',
        [
            {
                        "id": "A",
                        "teks": "sin Y / sin W"
            },
            {
                        "id": "B",
                        "teks": "sin W / sin Y"
            },
            {
                        "id": "C",
                        "teks": "sin Z / sin W"
            },
            {
                        "id": "D",
                        "teks": "sin W / sin Z"
            }
],
        "rajah7", "Percubaan Perlis: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q12
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q12", 12, "Sederhana", "Memahami",
        "Rajah 8 menunjukkan satu cermin pergigian yang\ndigunakan oleh doktor gigi untuk memeriksa\nkeadaan gigi pesakit.\nDiagram 8 shows a dental mirror used by a\ndentist to examine the condition of the patient 's\nteeth. (Perlis: 2023)\nRajah8/ Diagram 8\nMengapakah cermin yang digunakan oleh doktor\ngigi tersebut bukan cermin cembung?\nWhy is the mirror used by the dentist is not a\nconvex mirror?",
        [
            {
                        "id": "A",
                        "teks": "Cermin cembung menghasilkan imej maya, tegak dan mengecil A convex mirror produces a / virtual, upright and diminished image"
            },
            {
                        "id": "B",
                        "teks": "Cermin cembung menghasilkan imej nyata, songsang dan diperbesarkan A conver mirror produces a / real, inverted and magified image"
            },
            {
                        "id": "C",
                        "teks": "Cermin cembung menghasilkan imej nyata, songsang dan mengecil A convex mirror produces a / real, iverted and diminished image"
            },
            {
                        "id": "D",
                        "teks": "Cermin cembung menghasilkan imej maya, tegak dan diperbesar A convex mirror produces a / virtual, upright and magmified image"
            }
],
        "", "Percubaan Perlis: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q13
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q13", 13, "Sederhana", "Memahami",
        'Rajah 9 menunjukkan seekor ikan melihat imej\nserangga berada di atas kedudukan sebenar.\nDiagram 9 shows a fish seeing an insect image\nabove the actual position. (SBP: 2023)\nImej serangga\nİnsect image\nSerangga\nInsect\nIkan\nFish\nPernyataan manakah yang betul menerangkan\nsituasi tersebut?\nWhich statement is correct to explain the\nsituation?',
        [
            {
                        "id": "A",
                        "teks": "Nyata, songsang dan lebih besar / Real, inverted and bigger"
            },
            {
                        "id": "B",
                        "teks": "Maya, tegak dan lebih besar / Virtual, upright and bigger"
            },
            {
                        "id": "C",
                        "teks": "Nyata, songsang dan lebih kecil / Real, inverted and smaller"
            },
            {
                        "id": "D",
                        "teks": "Maya, tegak dan lebih kecil / Virtual, upright and smaller"
            }
],
        "rajah9", "Percubaan SBP: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q14
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q14", 14, "Sederhana", "Memahami",
        'Alat manakah yang mengaplikasikan konsep\npantulan dalam penuh?\nWhich instrument apply the concept of total\ninternal reflection? (SBP: 2023)',
        [
            {
                        "id": "A",
                        "teks": "Mikroskop / Microscope"
            },
            {
                        "id": "B",
                        "teks": "Kanta pembesar / Magnifying glass"
            },
            {
                        "id": "C",
                        "teks": "Binokular prisma / Prism binocular"
            },
            {
                        "id": "D",
                        "teks": "Teleskop astronomi / Astronomical telescope"
            }
],
        "", "Percubaan SBP: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q15
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q15", 15, "Sederhana", "Memahami",
        'Alat manakah yang menghasilkan suatu imej\nnyata, diperkecilkan dan songsang?\nWhich instrument produce a real, diminished and\ninverted image? (SBP: 2023)',
        [
            {
                        "id": "A",
                        "teks": "Periskop"
            },
            {
                        "id": "B",
                        "teks": "Projektor LCD"
            },
            {
                        "id": "C",
                        "teks": "Kanta pembesar Periscope Magnifying glass"
            },
            {
                        "id": "D",
                        "teks": "Kamera telefon LCD projector pintar Smartphone camera"
            }
],
        "", "Percubaan SBP: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q16
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q16", 16, "Sederhana", "Memahami",
        'Rajah 10 menunjukkan satu sinar cahaya\nmerambat dari udara ke dalam kaca.\nDiagram 10 shows a light ray propagating from\nair into glass. (Terengganu: 2023)\nNormal\nNormal\nUdara\nAir\nKaca\nGLASS\nApakah yang berlaku kepada sinar cahaya di\ndalam kaca?\nWhat happens to the light ray in the glass?',
        [
            {
                        "id": "A",
                        "teks": "Dibiaskan ke arah normal / Refracts towards normal"
            },
            {
                        "id": "B",
                        "teks": "Dibiaskan menjauhi normal / Refracts away from normal"
            },
            {
                        "id": "C",
                        "teks": "Mengalami pantulan dalam penuh / Experiences total internal reflection"
            },
            {
                        "id": "D",
                        "teks": "Dipantulkan dengan sudut yang sama dengan sudut tuju / Reflects with the same angle as the incidence angle"
            }
],
        "rajah10", "Percubaan Terengganu: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q17
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q17", 17, "Sederhana", "Memahami",
        '• Cahaya merambat dari medium\nberketumpatan optik tinggi ke medium yang\nberketumpatan optik rendah.\nLight travels from a medium ofhigh optical\ndensity to a medium of low optical density.\n• Sudut tuju lebih besar daripada sudut\ngenting, C.\nThe angle of incidence is greater than the\ncritical angle,c.\nBerdasarkan pernyataan di atas, apakah\nfenomena yang terlibat?\nBased on the above statement, what is the\nphenomenon involved? (Terengganu: 2023)',
        [
            {
                        "id": "A",
                        "teks": "Pantulan"
            },
            {
                        "id": "B",
                        "teks": "Pembiasan"
            },
            {
                        "id": "C",
                        "teks": "Pembelauan Reflection Diffraction"
            },
            {
                        "id": "D",
                        "teks": "Pantulan dalam Refraction penuh Total internal of reflection"
            }
],
        "", "Percubaan Terengganu: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q18
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q18", 18, "Sederhana", "Memahami",
        'Rajah 1l menunjukkan susunan radas bagi\neksperimen untuk mengkaji hubungan antara\njarak u dan jarak imej, v bagi kanta cembung.\nDiagram 11 shows an apparatus set-up of an\nexperiment to investigate the relationship\nbetveen object distance, u and image distance, v\nofa convex lens. (Terengganu: 2023)\nSkin puth\nKanta cembung White screen\nPembaris meler\nConvex lens\nObjek Metre rule\nObjedt\nMentol\nBulb\nPerubahan manakah meningkatkan jarak imej, v?\nWhich changes increases the inage distance, v?',
        [
            {
                        "id": "A",
                        "teks": "Tambahkan jarak objek, u / Increase the object distance, u"
            },
            {
                        "id": "B",
                        "teks": "Kurangkan jarak objek, u / Decrease the object distance, u"
            },
            {
                        "id": "C",
                        "teks": "Kurangkan jarak antara objek dengan mentol / Decrease the distance between object and bulb"
            },
            {
                        "id": "D",
                        "teks": "Tambahkan jarak antara objek dengan mentol / Increase the distance between object and bulb"
            }
],
        "", "Percubaan Terengganu: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q19
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q19", 19, "Sederhana", "Memahami",
        'Rajah 12 menunjukkan sebuah cermin cekung.\nDiagram 12 shows a concave mirror.\n(Terengganu: 2023)\nCermin cekung\nConcave miror\nApakah jarak di antara P ke F?\nWhat is the distance betweeneen P and F?',
        [
            {
                        "id": "A",
                        "teks": "I dan II / I and II"
            },
            {
                        "id": "B",
                        "teks": "I dan III / I and III"
            },
            {
                        "id": "C",
                        "teks": "II dan IV / II and IV"
            },
            {
                        "id": "D",
                        "teks": "III dan IV / III and IV"
            }
],
        "rajah12", "Percubaan Terengganu: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q20
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q20", 20, "Sederhana", "Memahami",
        'Rajah 13 menunjukkan satu cermin keselamatan\ndipasang di selekoh tajam jalan raya.\nDiagram 13 shows a safety mirror installed at a\nsharp bend on the road. (SMKA: 2023)\nApakah ciri-ciri imej yang dihasilkan oleh cermin\ntersebut?\nWhat are the characteristics of the image\nproduced by the mirror?',
        [
            {
                        "id": "A",
                        "teks": "Nyata, tegak dan diperbesar / Real, upright and magnified"
            },
            {
                        "id": "B",
                        "teks": "Nyata, songsang dan diperkecil / Real, inverted and diminished"
            },
            {
                        "id": "C",
                        "teks": "Maya, songsang dan diperbesar / Virtual, inverted and magnified"
            },
            {
                        "id": "D",
                        "teks": "Maya, tegak dan diperkecil / Virtual, upright and diminished"
            }
],
        "rajah13", "Percubaan SMKA: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q21
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q21", 21, "Sederhana", "Memahami",
        "Rajah 14 menunjukkan seorang budak lelaki\nmelihat plat besi yang kelihatan hampir dengan\npemukaan air.\nDiagram 14 shows a boy looking at a metalplate\nthat appears closer to the water surface.\n(MRSM: 2023)\nimej\nImage\nobjek\nobject\nPernyataan manakah yang menerangkan situasi\ntersebut dengan betul?\nWhich statement explains the situation correctly'?",
        [
            {
                        "id": "A",
                        "teks": "Cahaya dari mata merambat kepada plat besi dibiaskan mendekati garis normal Light propagates from eyes to metal plate refracted towards normal line"
            },
            {
                        "id": "B",
                        "teks": "Cahaya dari mata merambat kepada plat besi dibiaskan menjauhi garis normal Light propagates from eyes to metal plate refracted away from normal line"
            },
            {
                        "id": "C",
                        "teks": "Cahaya dari plat besi merambat kepada mata dibiaskan mendekati garis normal Light propagates from metal plate to eyes refracted towards normal line"
            },
            {
                        "id": "D",
                        "teks": "Cahaya dari plat besi merambat kepada mata dibiaskan menjauhi garis normal Light propagates from metal plate to eyes refracted awayfrom normal line"
            }
],
        "rajah14", "Percubaan MRSM: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q22
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q22", 22, "Sederhana", "Memahami",
        'Rajah 15 menunjukkan seorang ahli gemologi\nsedang menggunakan kanta pembesar untuk\nmelihat berlian dengan lebih jelas.\nDiagram 15 shows a genımologist using\nmagnifying lens to observe the diamond clearly.\n(MRSM: 2023)\nBerlian\nDlamond\nApakah ciri imej berlian yang terbentuk?\nWhat is the characteristic of the diamond image\nformed?',
        [
            {
                        "id": "A",
                        "teks": "Mengecil / Diminished"
            },
            {
                        "id": "B",
                        "teks": "Songsang / Inverted"
            },
            {
                        "id": "C",
                        "teks": "Nyata / Real"
            },
            {
                        "id": "D",
                        "teks": "Maya / Virtual"
            }
],
        "rajah15", "Percubaan MRSM: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q23
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q23", 23, "Sederhana", "Memahami",
        'Berikut menunjukkan empat aplikasi cermin\nsfera dalam kehidupan harian. Aplikasi manakah\nmenunjukkan kegunaan cermin cekung?\nThe following shows four applications of\nspherical mirror in daily life. Which application\nshows the useof concave mirror? (MRSM: 2023)',
        [
            {
                        "id": "A",
                        "teks": "(G0 Pemantul dalam lampu depan kerela Reflector in car headlight"
            },
            {
                        "id": "B",
                        "teks": "Cermin sisi Side mirror"
            },
            {
                        "id": "C",
                        "teks": "Ceniin itik buta Blindspot mirror"
            },
            {
                        "id": "D",
                        "teks": "Ccmin pandangbelakangkenderaan Vehicle rear mirror"
            }
],
        "", "Percubaan MRSM: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q24
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q24", 24, "Sederhana", "Memahami",
        'Rajah 16 menunjukkan satu sinar merambat\ndalam satu bongkah kaca JKLM. Pantulan dalam\npenuh berlaku di X.\nDiagram 16 showsa ray of light propagates in a\nglass block JKLM. Total internal reflection\noccurs at X. (Kedah: 2022)\nSinar tuju\nIncident ray\nKotak sinar\nRay box M\nSinar pantulan\nBongkah kaca Reflected ray\nGlass blbck\nApakah syarat untuk berlakunya pantulan dalam\npenuh?\nWhat is the condition for total internal reflection\noccurs?',
        [
            {
                        "id": "A",
                        "teks": "Sudut tuju > sudut biasan Incident angle > refracted angle"
            },
            {
                        "id": "B",
                        "teks": "Sudut biasan > sudut tuju Refracted angle > incident angle"
            },
            {
                        "id": "C",
                        "teks": "Sudut tuju > sudut genting Incident angle > critical angle"
            },
            {
                        "id": "D",
                        "teks": "Sudut biasan > sudut genting Refracted angle > critical angle"
            }
],
        "rajah16", "Percubaan Kedah: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q25
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q25", 25, "Sederhana", "Memahami",
        'Rajah 17 menunjukkan sinar cahaya diarahkan ke\nblok kaca.\nDiagram 17 shows a ray of light directed to a\nglass block. (Melaka: 2022)\nNormal.\nCahaya\nLight\nRajah 17 / I Diagran l17\nPernyataan manakah yang betul?',
        [
            {
                        "id": "A",
                        "teks": "Sudut tuju sama dengan sudut biasan The incident angle is equal to the refracted angle"
            },
            {
                        "id": "B",
                        "teks": "Cahaya merambat lebih laju apabila memasuki blok kaca The light ravels faster as it enters the glass block"
            },
            {
                        "id": "C",
                        "teks": "Cahaya terbias mendekati normal apabila memasuki blok kaca The light refracts towards normal as it enters the glass block"
            },
            {
                        "id": "D",
                        "teks": "Kecerahan cahaya bertambah apabila ia merambat di dalam blok kaca The brightness of light / increases as it travels in the glass block"
            }
],
        "", "Percubaan Melaka: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q26
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q26", 26, "Sederhana", "Memahami",
        'Antara yang berikut, yang manakah\nmenunjukkan ciri-ciri imej yang dilihat di bawah\nkanta pembesar?\nWhich of the following shows the characteristics\nof an image seen under a magnifying glass?\n(Melaka: 2022)',
        [
            {
                        "id": "A",
                        "teks": "Nyata dan tegak"
            },
            {
                        "id": "B",
                        "teks": "Nyata dan"
            },
            {
                        "id": "C",
                        "teks": "Maya dan tegak / Real and upright Virtual and upright"
            },
            {
                        "id": "D",
                        "teks": "Maya dan songsang songsang / Real and Virtual and inverted inverted"
            }
],
        "", "Percubaan Melaka: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q27
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q27", 27, "Sederhana", "Memahami",
        'Rajah 18 menunjukkan dua kabel gentian optik\nyang digunakan untuk penghantaran maklumat\ndalam sistem telekomunikasi.\nDiagram 18 shows two optical fibre cables that\nare used in transferring information in\ntelecommunication systems. (MRSM: 2022)\nGentian opik A Gentian optik B\nOptical fiber A Optical iber B\nudtgenting,c=33.75* Sudutgenting,c=41.47\nCritical angle, e Cotical angle, c\nRajah 18 / I Diagram 18\nPasangan ciri manakah dapat mengurangkan\nkehilangan maklumat semasa penghantaran?\nWhich pair of characteristics can reduce\ninformation lost during transmission?\nCermin pandang belakang kenderaan\nVehicle rear mirror\n24. Rajah 16 menunjukkan satu sinar merambat\ndalam satu bongkah kaca JKLM. Pantulan dalam\npenuh berlaku di X.\nDiagram 16 shows a ray of light propagates in a\nglass block JKLM. Total internal reflection\noccurs at X. (Kedah: 2022)\nShar tuu\nIncident ray\nKotak :sinar\nRay box M\nSnarpantulan\nBongkah kaca Refected ray\nGlass block\nRajah 16 / I Diagram 16\nApakah syarat untuk berlakunya pantulan dalam\npenuh?\nWhat is the condition for total internal reflection\noccurs?',
        [
            {
                        "id": "A",
                        "teks": "Nilai indeks biasan: Tinggi, Pantulan dalam penuh: Tinggi / Refractive index: Higher, Total internal reflection: Higher"
            },
            {
                        "id": "B",
                        "teks": "Nilai indeks biasan: Rendah, Pantulan dalam penuh: Rendah / Refractive index: Lower, Total internal reflection: Lower"
            },
            {
                        "id": "C",
                        "teks": "Nilai indeks biasan: Tinggi, Pantulan dalam penuh: Rendah / Refractive index: Higher, Total internal reflection: Lower"
            },
            {
                        "id": "D",
                        "teks": "Nilai indeks biasan: Rendah, Pantulan dalam penuh: Tinggi / Refractive index: Lower, Total internal reflection: Higher"
            }
],
        "rajah17", "Percubaan MRSM: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q28
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q28", 28, "Sederhana", "Memahami",
        'Rajah 19 menunjukkan imej nyata, kecil dan\nsongsang yang terbentuk olch kanta cembung.\nDiagram 19 shows a real, diminished and\ninverted image formed by convex lens.\n(MRSM: 2022)\nMedan Saia\npenelihatan casor\nField\nitien ente\nJaral obick Panjasg fokus\nObitt distace Forallmgih\nAlatan manakah yang menghasilkan imej yang\nsama seperti Rajah 19?\nWhich instrument produced image as in Diagram\n19?',
        [
            {
                        "id": "A",
                        "teks": "Teleskop"
            },
            {
                        "id": "B",
                        "teks": "Projektor LCD"
            },
            {
                        "id": "C",
                        "teks": "Kamera telefon Telescope pintar Smartphone camera"
            },
            {
                        "id": "D",
                        "teks": "Mikroskop majmuk LCD projector Compound microscope"
            }
],
        "rajah19", "Percubaan MRSM: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q29
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q29", 29, "Sederhana", "Memahami",
        'Rajah 20 menunjukkan keratan rentas cermin\ncekung bersama mentol yang digunakan pada\nlampu hadapan kereta. Jarak antara mentol dan\nkutub cermin sfera adalah d.\nDiagran 20 shows a cross sectional area of a\nconcave mirror witlh bulb used in a car headlight.\nDistance betweeneen bulb and pole of spherical\nmiror is d. (MRSM: 2022)\nCmsrturg\nKedudukan mentol yang manakah menghasilkan\npantulan cahaya yang selari?\nAt which position bulb will produce parallel\nreflection of ligh?',
        [
            {
                        "id": "A",
                        "teks": "d < panjang fokus, f / d < focal length, f"
            },
            {
                        "id": "B",
                        "teks": "d = panjang fokus, f / d = focal length, f"
            },
            {
                        "id": "C",
                        "teks": "panjang fokus, f < d < 2f / focal length, f < d < 2f"
            },
            {
                        "id": "D",
                        "teks": "d > dua kali panjang fokus, 2f / d > two times focal length, 2f"
            }
],
        "", "Percubaan MRSM: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q30
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q30", 30, "Sederhana", "Memahami",
        'Antara berikut yang manakah mengaplikasikan\nkonsep pantulan dalam penuh?\nWhich of the following apply the concept of total\ninternal reflection? (Negeri Sembilan: 2022)\nI Pembentukan pelangi\nFormation ofrainbow\nII Logamaya\nMirage\nIII Periskop cermin satah\nPlane mirror periscope\nIV Fiber optik\nOpticalfibre',
        [
            {
                        "id": "A",
                        "teks": "I,l danIII"
            },
            {
                        "id": "B",
                        "teks": "I,Il dan IV"
            },
            {
                        "id": "C",
                        "teks": "II, II dan IV I, II and III II, IIl and IV"
            },
            {
                        "id": "D",
                        "teks": "Il danIV 1, II and IV III and IV"
            }
],
        "", "Percubaan Negeri Sembilan: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q31
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q31", 31, "Sederhana", "Memahami",
        'Antara berikut yang manakah ciri-ciri imej yang\ndibentuk oleh kanta cembung apabila objek\nberada di 2F?\nWhich of the following characteristics of image\nformed by a covex lens when the object is at 2F?\n(Negeri Sembilan: 2022)',
        [
            {
                        "id": "A",
                        "teks": "Lebih besar, tegak dan maya / Bigger, upright and virtual"
            },
            {
                        "id": "B",
                        "teks": "Lebih besar, songsang dan nyata / Bigger, inverted and real"
            },
            {
                        "id": "C",
                        "teks": "Sama saiz, songsang dan nyata / Same size, inverted and real"
            },
            {
                        "id": "D",
                        "teks": "Lebih kecil, songsang dan nyata / Smaller, inverted and real"
            }
],
        "", "Percubaan Negeri Sembilan: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q32
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q32", 32, "Sederhana", "Memahami",
        'Antara berikut yang manakah bukan aplikasi\ncermin cekung?\nWhich of the following is not the application of\nconcave nnirror? (Negeri Sembilan: 2022)',
        [
            {
                        "id": "A",
                        "teks": "Cermin solek"
            },
            {
                        "id": "B",
                        "teks": "Cermin pergigian"
            },
            {
                        "id": "C",
                        "teks": "Pemantul dalam Make up mirror lampu hadapan kereta Reflector in car headlight"
            },
            {
                        "id": "D",
                        "teks": "Cermin titik buta Dental mirror Blind spot mirror"
            }
],
        "", "Percubaan Negeri Sembilan: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q33
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q33", 33, "Sederhana", "Memahami",
        'Rajah 21 di bawah menunjukkan keadaan\nperkataan AUDIT dilihat melalui suatu kanta\npembesar.\nDiagram 21 below shows the appearance of the\nword AUDIT as seen through a magnifying lens.\n2022)(\n(Pahang:\nFenomenan cahaya manakah yang menerangkan\nsituasi ini?\nWhich light phenomenon explains this situation?',
        [
            {
                        "id": "A",
                        "teks": "Pantu"
            },
            {
                        "id": "B",
                        "teks": "Pembelauan"
            },
            {
                        "id": "C",
                        "teks": "Pembiasan Reflection Refraction"
            },
            {
                        "id": "D",
                        "teks": "Pantulan dalam Diffraction penuh Total internal reflection"
            }
],
        "rajah21", "Percubaan SPM 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q34
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q34", 34, "Sederhana", "Memahami",
        'Di manakah satu objek harus diletak di depan satu\nkanta cembung supaya imej sama besar dengan\nobjek? Jarak fokus kanta cembung itu ialah f.\nWhere should the object be placed in front of a\nconvex lens for it image is same as the objecr?\nThe focal length of the convex lens is f.\n(Putrajaya: 2022)',
        [
            {
                        "id": "A",
                        "teks": "Sama dengan 2f"
            },
            {
                        "id": "B",
                        "teks": "Lebihdaripada 2f"
            },
            {
                        "id": "C",
                        "teks": "Kurang daripada Equal to 2f 2f Less than 2f"
            },
            {
                        "id": "D",
                        "teks": "Antara fdan 2f More than 2f Between fand 2f"
            }
],
        "", "Percubaan Putrajaya: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q35
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q35", 35, "Sederhana", "Memahami",
        'Rajah 22 menunjukkan sinar cahaya yang selari\nditumpukan pada titik fokus, F kanta selepas\nmelalui sebuah kanta cembung.\nDiagram 22 shows parallel light rays coverged\nat a focal point, F of the lens after passing\nthrough a convex lens. (SBP: 2022)\nPaksi utama\nPrincipal axis\nPanjang fokus, f\nFocal lengih. f\nApakah yang akan berlaku pada panjang focus, f\napabila kanta cembung yang lebih tebal\ndigunakan?\nWhat will happen to the focal length, f when a\nthicker convex lens is used?',
        [
            {
                        "id": "A",
                        "teks": "Lebih panjang / Longer"
            },
            {
                        "id": "B",
                        "teks": "Lebih pendek / Shorter"
            },
            {
                        "id": "C",
                        "teks": "Tidak berubah / No change"
            },
            {
                        "id": "D",
                        "teks": "Menjadi sifar / Becomes zero"
            }
],
        "rajah22", "Percubaan SBP: 2022", 2022
    ))

    return questions

if __name__ == "__main__":
    qs = get_k2_part1_questions()
    print(f"Loaded {len(qs)} questions from get_k2_part1_questions")
