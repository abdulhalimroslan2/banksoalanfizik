#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dataset Konstruk 2: Memahami (Bahagian 2: Soalan 36 - 64)
Tingkatan 4 Bab 6: Cahaya dan Optik
Adheres 100% to the 13 Golden Invariants.
"""

import sys
sys.path.insert(0, ".")
from scripts.build_dataset_helper_b6 import make_b6_q

def get_k2_part2_questions():
    questions = []

    # MODUL_T4_B6_K2_Q36
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q36", 36, "Sederhana", "Memahami",
        'Rajah 23 menunjukkan kedudukan ketara seekor\nikan dilihat oleh seorang pemerhati yang berdiri\ndi pinggir sebuah tasik.\nDiagram 23showstheapparentposition of a fish\nas seen by an observer standing on the edge of a\nlake. (Selangor: Set 1: 2022)',
        [
            {
                        "id": "A",
                        "teks": "Titik A / Point A"
            },
            {
                        "id": "B",
                        "teks": "Titik B / Point B"
            },
            {
                        "id": "C",
                        "teks": "Titik C / Point C"
            },
            {
                        "id": "D",
                        "teks": "Titik D / Point D"
            }
],
        "rajah23", "Percubaan Selangor: Set 1: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q37
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q37", 37, "Sederhana", "Memahami",
        'Rajah 24 menunjukkan satu objek di hadapan\nsuatu cermin satah.\nDiagram 24 shows an object in front of a plane\nmirror (Selangor: Set 1: 2022)\nI4m\nCermin satah\nPlane mirror\nObick\nObject\nRajalh 24 / Diagram 24\nDi kedudukan manakah A, B, C dan D imej\nterbentuk?\nAt which position A, B, C or D is the image\nformed?',
        [
            {
                        "id": "A",
                        "teks": "Kedudukan A / Position A"
            },
            {
                        "id": "B",
                        "teks": "Kedudukan B / Position B"
            },
            {
                        "id": "C",
                        "teks": "Kedudukan C / Position C"
            },
            {
                        "id": "D",
                        "teks": "Kedudukan D / Position D"
            }
],
        "", "Percubaan Selangor: Set 1: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q38
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q38", 38, "Sederhana", "Memahami",
        'Rajah 25 menunjukkan empat alat optik.\nDiagram 25 shows four optical devices.\n(Selangor: Set 1: 2022)\nPeriskop Endoskop Mikroskop\nPeriscope Telescope Endascope R Microscope\nAlat manakah yang menggunakan pantulan\ndalam penuh?\nWhich device uses total internal reflection?',
        [
            {
                        "id": "A",
                        "teks": "P dan Q / P and Q"
            },
            {
                        "id": "B",
                        "teks": "P dan R / P and R"
            },
            {
                        "id": "C",
                        "teks": "Q dan S / Q and S"
            },
            {
                        "id": "D",
                        "teks": "Q dan R / Q and R"
            }
],
        "rajah25", "Percubaan Selangor: Set 1: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q39
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q39", 39, "Sederhana", "Memahami",
        'Sebuah kanta mempunyai panjang fokus f.\nApakah syarat-syarat untuk membolehkan kanta\nitu digunakan sebagai kanta pembesar?',
        [
            {
                        "id": "A",
                        "teks": "Cembung, kurang dari f / Convex, less than f"
            },
            {
                        "id": "B",
                        "teks": "Cembung, antara f dan 2f / Convex, between f and 2f"
            },
            {
                        "id": "C",
                        "teks": "Cekung, kurang dari f / Concave, less than f"
            },
            {
                        "id": "D",
                        "teks": "Cekung, antara f dan 2f / Concave, between f and 2f"
            }
],
        "", "Percubaan Selangor: Set 2: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q40
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q40", 40, "Sederhana", "Memahami",
        'Rajalh 26 menunjukkan sebuah blok kaca\ndiletakkan di hadapan sebatang pen. Pen itu\nkelihatan bengkok. Fenomena cahaya manakah\nyang menerangkan situasi ini?\nDiagram 26 shows a glass block is placed in front\nof thepen. Which lightphenonmenonexplains this\nsituation? (SMKA: 2022)',
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
                        "teks": "Pantulan dalam penuh Refraction Total internal reflection"
            }
],
        "rajah26", "Percubaan SMKA: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q41
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q41", 41, "Sederhana", "Memahami",
        'Graf manakah menunjukkan hubungan yang\nbetul antara jarak objek, u dan jarak imej, v bagi\nsatu eksperimen kanta nipis.\nWhich graph shows a correct relationship\nbetweeneen object distance, u and image distance, v\nfor a thin lens experiment. (SMKA: 2022)',
        [
            {
                        "id": "A",
                        "teks": "Pilihan A"
            },
            {
                        "id": "B",
                        "teks": "Pilihan B"
            },
            {
                        "id": "C",
                        "teks": "Pilihan C"
            },
            {
                        "id": "D",
                        "teks": "Pilihan D"
            }
],
        "", "Percubaan SMKA: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q42
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q42", 42, "Sederhana", "Memahami",
        'Rajah 27 di bawah menunjukkan pembentukan\nimej oleh kanta bersaiz kecil dalam Kamera Litar\nTertutup (CCTV).\nDiagram 27 shows the formation of an image by\na small-sized lens in a Closed-Circuit Camera\n(CCTV). (Terengganu: 2022)\nCamera itar tertutup\nClosed-Circuit Comera\n(CCTV)\nKanta\nLens\nMedan\npenglihatan\nField Vision ol sensor\nJarakobjek Panlang tokus\nObject distance Focal length\nPernyataan yang manakah adalah betul?\nWhich statement is correct?',
        [
            {
                        "id": "A",
                        "teks": "Panjang fokus kanta CCTV tidak boleh bernilai sifar / The focal length of a CCTV lens cannot be zero"
            },
            {
                        "id": "B",
                        "teks": "Imej yang terhasil adalah maya, songsang dan diperkecilkan pada sensor / The form of an image is virtual, inverted and diminished on the sensor"
            },
            {
                        "id": "C",
                        "teks": "Jarak maksimum di antara sensor dengan pusat kanta haruslah sama dengan panjang fokus / The maximum distance between the sensor and the centre of the lens has to be the same as the focal length"
            },
            {
                        "id": "D",
                        "teks": "Ketebalan keseluruhan bekas CCTV tidak terhad kepada panjang fokus kanta CCTV tersebut / The overall thickness of the CCTV casing is not limited to the focal length of the CCTV lens"
            }
],
        "rajah27", "Percubaan Terengganu: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q43
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q43", 43, "Sederhana", "Memahami",
        'Rajah 28 menunjukkan sebutir berlian kelihatan\nberkilauan apabila disinari calhaya. Fenomena ini\ndisebabkan oleh\nDiagram 28 shows a diamond gliter when struck\nby light rays. This phenomenon caused by\n(Kedah: 2021)',
        [
            {
                        "id": "A",
                        "teks": "pantulan"
            },
            {
                        "id": "B",
                        "teks": "pembiasan"
            },
            {
                        "id": "C",
                        "teks": "interferens reflection interference"
            },
            {
                        "id": "D",
                        "teks": "pantulan dalam penuh refraction total internal reflection"
            }
],
        "rajah28", "Percubaan Kedah: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q44
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q44", 44, "Sederhana", "Memahami",
        'Rajah 29 menunjukkan satu alat optik yang\ndigunakan oleh ahli gemologi untuk menilai\nsuatu batu permata.\nDiagram 29 shows an optical tool used by a\ngemmologist to evaluate a gemstone.\n(Kelantan: 2021)\nAlat optik\nOptical tool\nPada kedudukan manakah batu permata itu perlu\ndiletakkan di hadapan alat optik itu bagi\nmembolehkan ahli gemologi itu melihat imej\nyang tegak dan diperbesarkan?\nAt which position the genstone should be placed\nin front of the optical tool to enable the\ngemmologist to see an upright and magnified\nimage?',
        [
            {
                        "id": "A",
                        "teks": "u < f"
            },
            {
                        "id": "B",
                        "teks": "f < u < 2f"
            },
            {
                        "id": "C",
                        "teks": "u = 2f"
            },
            {
                        "id": "D",
                        "teks": "u > 2f"
            }
],
        "rajah29", "Percubaan Kelantan: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q45
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q45", 45, "Sederhana", "Memahami",
        "Rajalh 30 menunjukkan satu gentian optik.\nDiagram 30 shows afibre optic.\n(Terengganu: 2021)\nKaca dalam lebih tumpat\nDenser inner glass\nCahaya keluar\night out\nKaca luar kurang tumpat\nLess dense outer glass\nCahaya masuk\night enter\nApakah fenomena gelombang yang berlaku?\nWhat is the wave's phenomenon occurs?",
        [
            {
                        "id": "A",
                        "teks": "Pembiasan cahaya Refractionof light"
            },
            {
                        "id": "B",
                        "teks": "Pembelauan cahaya Diffraction oflight"
            },
            {
                        "id": "C",
                        "teks": "Inteferens cahaya Interferenceof light"
            },
            {
                        "id": "D",
                        "teks": "Pantulan dalam penuh Total internal reflection"
            }
],
        "rajah30", "Percubaan Terengganu: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q46
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q46", 46, "Sederhana", "Memahami",
        'Rajalh 31 menunjukkan satu rajah sinar.\nDiagram 31 shows a ray diagram.\n(Terengganu: 2021)\nImej\nImage\nObiek\nObject\nIni ialah sebuah rajah sinar bagi\nThis is a ray diagram ofa',
        [
            {
                        "id": "A",
                        "teks": "Mesin fotostat"
            },
            {
                        "id": "B",
                        "teks": "Projektor"
            },
            {
                        "id": "C",
                        "teks": "Kanta pembesar Photostat Magnifying glass machine"
            },
            {
                        "id": "D",
                        "teks": "Teleskop Projector Telescope"
            }
],
        "rajah31", "Percubaan Terengganu: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q47
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q47", 47, "Sederhana", "Memahami",
        'Panjang fokus kanta objektif dan kanta mata bagi\nsebuah teleskop astronomi masing-masing adalah\nf, dan fm. Jarak antara kedua-dua kanta pula\nadalah L. Manakah antara hubungan berikut\nantara L, fo dan fm adalah benar bagi teleskop\nastronomi pada pelarasan normal?\nThe focal length of the objective lens and the\neyepiece lens of an astrononical telescope are fo\nand fm respectively. The distance betweeneen the two\nlenses is L. Which of the relationship betweeneen L,\nfo and fm is correct for the astronomical telescope\nat normal adjustment? (Terengganu: 2021)',
        [
            {
                        "id": "A",
                        "teks": "L = fₒ + fₑ"
            },
            {
                        "id": "B",
                        "teks": "L < fₒ + fₑ"
            },
            {
                        "id": "C",
                        "teks": "L > fₒ + fₑ"
            },
            {
                        "id": "D",
                        "teks": "L = fₒ - fₑ"
            }
],
        "", "Percubaan Terengganu: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q48
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q48", 48, "Sederhana", "Memahami",
        'Satu periskop diperbuat daripada dua prisma 45°-\n90°-45°. Antara gambarajah berikut yang\nmanakah menunjukkan susunan yang betul\nprisma itu?',
        [
            {
                        "id": "A",
                        "teks": "periscope is made from two 45°-90°-45° prisms. Whichofthe following diagrams show the correct arrangement of the glass prism? (Selangor: Set 1: 2021) Sinar cahaya Light ray"
            },
            {
                        "id": "B",
                        "teks": "Sinar cahaya Light ray"
            },
            {
                        "id": "C",
                        "teks": "Sinar cahaya Light ray"
            },
            {
                        "id": "D",
                        "teks": "Sinar cahaya Light ray"
            }
],
        "", "Percubaan Selangor: Set 1: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q49
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q49", 49, "Sederhana", "Memahami",
        'Rajah 32 menunjukkan sinar cahaya yang\nbergerak melalui gentian optik. Gentian optik itu\nmempunyai teras kaca, X, dengan indeks biasan,\nnx dan suatu salutan kaca, Y, yang mempunyai\nindeks biasan, ny.\nDiagran 32 shows a light ray travelling through\nan optical fibre. The optical fibre has a glass\ncore, X, of refractive index, nx and a glass\ncladding, Y, of refractive index, ny.\n(Selangor: Set 2: 2021)\nSalutankaca Y\nGlass cladding.\nTeras kaca X\nGlasscore, X\nAntara yang berikut, yang manakah adalah\nbetul?\nWhich of the following is correc?',
        [
            {
                        "id": "A",
                        "teks": "nx = ny"
            },
            {
                        "id": "B",
                        "teks": "nx > ny"
            },
            {
                        "id": "C",
                        "teks": "nx < ny"
            },
            {
                        "id": "D",
                        "teks": "nx ≤ ny"
            }
],
        "rajah32", "Percubaan Selangor: Set 2: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q50
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q50", 50, "Sederhana", "Memahami",
        'Rajalh 33 menunjukkan inej yang terbentuk pada\nskrin adalah kabur.\nDiagram 33 shows the image formed on the\nscreen is blurred. (Selangor: Set 2: 2021)\nScreen\nLens Shrln\nkota\nObject\nObjek\nPerubahan manakah akan menghasilkan satu imej\nyang jelas pada skrin?\nWhich modification will produce a sharp image\non the screen?',
        [
            {
                        "id": "A",
                        "teks": "Gantikan kanta cembung berpanjang fokus lebih pendek / Replace with convex lens of shorter focal length"
            },
            {
                        "id": "B",
                        "teks": "Gantikan kanta cembung berpanjang fokus lebih panjang / Replace with convex lens of longer focal length"
            },
            {
                        "id": "C",
                        "teks": "Gerakkan objek lebih jauh daripada kanta / Move object further from lens"
            },
            {
                        "id": "D",
                        "teks": "Gerakkan skrin lebih dekat ke kanta / Move screen closer to lens"
            }
],
        "rajah33", "Percubaan Selangor: Set 2: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q51
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q51", 51, "Sederhana", "Memahami",
        'Rajah 34 menunjukkan sinar dari satu mentol\nyang diletakkan di dasar sebuah akuarium.\nDiagram 34 shows light ray fron a bulb placed\nal a bottom of an aquarium. (MRSM: 2021)\nBulb\nMetal\nLintasan sinar cahaya yang manakah adalah betul\nselepas titik 0?\nWhich path of light ray is correct after point 0?\n[Critical angle of water = 49°]',
        [
            {
                        "id": "A",
                        "teks": "Lintasan A / Path A"
            },
            {
                        "id": "B",
                        "teks": "Lintasan B / Path B"
            },
            {
                        "id": "C",
                        "teks": "Lintasan C / Path C"
            },
            {
                        "id": "D",
                        "teks": "Lintasan D / Path D"
            }
],
        "rajah34", "Percubaan MRSM: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q52
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q52", 52, "Sederhana", "Memahami",
        'Rajah 35 menunjukkan sebuah teleskop\nastronomi. Panjang fokus kanta objektif dan\nkanta mata bagi teleskop tersebut masing-masing\nadalah f, dan fe. Panjang tiub teleskop itu adalah\nDiagram 35 showvs an astronomical telescope.\nThe focal length of the objective lens and\neyepiece lens of the telescope is fo and fe\nrespectively. The length of the tube of the\ntelescopeis L. (MRSM: 2021)\nObjcctive lens-\nKunta otyeuf\nAEyepiece lens\nAN\nHubungan manakah yang betul antara L, f, dan fe\nbagi teleskop astronomi tersebut pada pelarasan\nnormal?\nWhich of the relationships betweeneen L, fo and fę is\ncorrect for the astronomicaltelescope at normal\nadjustment?',
        [
            {
                        "id": "A",
                        "teks": "L=f,+ f."
            },
            {
                        "id": "B",
                        "teks": "L>fo+ f"
            },
            {
                        "id": "C",
                        "teks": "L<f,+ fe"
            },
            {
                        "id": "D",
                        "teks": "L=fo- fe"
            }
],
        "rajah35", "Percubaan MRSM: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q53
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q53", 53, "Sederhana", "Memahami",
        'Imej manakah yang dihasilkan oleh kanta\npenumpu pada skrin?\nWhich image is produced by a convex lens on the\nscreen? (Negeri Sembilan: 2021)',
        [
            {
                        "id": "A",
                        "teks": "Songsang dan nyata / Inverted and real"
            },
            {
                        "id": "B",
                        "teks": "Maya dan songsang / Virtual and inverted"
            },
            {
                        "id": "C",
                        "teks": "Nyata dan tegak / Real and upright"
            },
            {
                        "id": "D",
                        "teks": "Tegak dan maya / Upright ang virtual"
            }
],
        "", "Percubaan Negeri Sembilan: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q54
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q54", 54, "Sederhana", "Memahami",
        'Rajah 36 menunjukkan sinar cahaya yang\nmerambat dari air ke udara.\nDiagram 36 shows light ray travels from the\nwater to the air. (Negeri Sembilan: 2021)\nIndeks biasan bagi air ialah\nThe refractive index of the water is',
        [
            {
                        "id": "A",
                        "teks": "sin r"
            },
            {
                        "id": "B",
                        "teks": "sinp"
            },
            {
                        "id": "C",
                        "teks": "sin s sin q sinp"
            },
            {
                        "id": "D",
                        "teks": "sinp sins sin r"
            }
],
        "rajah36", "Percubaan Negeri Sembilan: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q55
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q55", 55, "Sederhana", "Memahami",
        'Rajah 37 menunjukkan satu sinar cahaya, K\nditujukan kepada satu bongkah kaca. Sudut\ngenting kaca itu ialah 42°. Ke arah manakah sinar\nitu bergerak dari titik 0?\nDiagram 37 shows a light ray K, directed into a\nglass block. The critical angle of the glass is420.\nİn which does the light move from point 0?\n(Negeri Sembilan: 2021)\nGarisan normal\nNormal line Bongkah kaca\nGlass block\nSinar cahaya\nLighıtroy',
        [
            {
                        "id": "A",
                        "teks": "P"
            },
            {
                        "id": "B",
                        "teks": "Q"
            },
            {
                        "id": "C",
                        "teks": "R"
            },
            {
                        "id": "D",
                        "teks": "S"
            }
],
        "rajah37", "Percubaan Negeri Sembilan: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q56
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q56", 56, "Sederhana", "Memahami",
        'Antara pernyataan berikut manakah betul\nmengenai teleskop astronomi?\nWhich of the following statementis true aboutthe\ntelescope? (Pahang: 2021)',
        [
            {
                        "id": "A",
                        "teks": "Kanta objektif dan kanta mata adalah kanta cekung The objective lens and eyepiece are concave lens"
            },
            {
                        "id": "B",
                        "teks": "Kuasa kanta objektif< kuasa kanta mata Power of objective lens < power ofeyepiece"
            },
            {
                        "id": "C",
                        "teks": "Pelarasan normal > jarak fokus kanta mata + jarak fokus kanta objektif Normaladustment> focal lengthofeyepiece + focal length of objective lens"
            },
            {
                        "id": "D",
                        "teks": "Pelarasannormal < jarak fokus kanta mata jarak fokus kanta objektif Normaladjustment< focal lengthofeyepiece + focal length of objective lens"
            }
],
        "", "Percubaan Pahang: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q57
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q57", 57, "Sederhana", "Memahami",
        "Rajah 38 menunjukkan imej sehelai daun\ndiperhatikan menggunakan kata pembesar.\nDiagram 38 shows an image of a leaf observed\nby' using a magnifying glass. (SBP: 2021)\nKanta pembesar\nMagnifing glass\nKombinasi manakah benar bagi situasi di atas?\nWhich combinations is true for the situation\nabove?\nJarak antara sehelai Panjang fokus\ndaun dengan kanta kanta penmbesar\npembesar (cm) (cm)\nDistance betweeneen a Focal length of\nleaf and amagnifying magnifying lens\nglass(cm) (cm)\n10 15\n20 8",
        [
            {
                        "id": "A",
                        "teks": "Jarak objek = 10 cm, Panjang fokus = 15 cm / Object distance = 10 cm, Focal length = 15 cm"
            },
            {
                        "id": "B",
                        "teks": "Jarak objek = 10 cm, Panjang fokus = 8 cm / Object distance = 10 cm, Focal length = 8 cm"
            },
            {
                        "id": "C",
                        "teks": "Jarak objek = 15 cm, Panjang fokus = 10 cm / Object distance = 15 cm, Focal length = 10 cm"
            },
            {
                        "id": "D",
                        "teks": "Jarak objek = 20 cm, Panjang fokus = 8 cm / Object distance = 20 cm, Focal length = 8 cm"
            }
],
        "rajah38", "Percubaan SBP: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q58
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q58", 58, "Sederhana", "Memahami",
        'Rajah 39 menunjukkan satu sinar cahaya\nditujukan kepada satu bongkah kaca.\nDiagram 39 shows a light ray directed into a\nglass block. (Perlis: 2021)\nPilih pasangan sudut yang mempunyai nilai yang\nsama.\nChoose pair of angles that have the same value.',
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
                        "teks": "I dan IV / I and IV"
            },
            {
                        "id": "D",
                        "teks": "II dan IV / II and IV"
            }
],
        "rajah39", "Percubaan Perlis: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q59
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q59", 59, "Sederhana", "Memahami",
        'Rajah 40 menunjukkan sinar cahaya bergerak\ndari udara ke medium X.\nDiagram 40showsa beamof light travelling from\nair to medium X. (Kelantan: 2022)\nUdara\nAir\nMedium X\nApakah indeks biasan medium itu?\nWhat is the refractive index of that medium?',
        [
            {
                        "id": "A",
                        "teks": "sin P"
            },
            {
                        "id": "B",
                        "teks": "sin Q"
            },
            {
                        "id": "C",
                        "teks": "sin S sin Q sin R"
            },
            {
                        "id": "D",
                        "teks": "sin R sin S sinS"
            }
],
        "rajah40", "Percubaan Kelantan: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q60
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q60", 60, "Sederhana", "Memahami",
        'Rajah 41 menunjukkan graf jarak imej, v\nmelawan pembesaran linear, m.\nDiagram 41 shows a graph of image distance,\nagainst linear magnification, m. (SPM: 2021)\nv (cm)\nRajah 41 / Diagran 41\nX diwakili oleh\nX is represented by',
        [
            {
                        "id": "A",
                        "teks": "Jarak objek / Object distance"
            },
            {
                        "id": "B",
                        "teks": "Jarak imej / Image distance"
            },
            {
                        "id": "C",
                        "teks": "Kuasa kanta / Power of lens"
            },
            {
                        "id": "D",
                        "teks": "Jarak antara imej dengan objek / Distance between image and object"
            }
],
        "", "Percubaan SPM: 2021", 2021
    ))

    # MODUL_T4_B6_K2_Q61
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q61", 61, "Sederhana", "Memahami",
        'Rajah 42 menunjukkan lampu botol air yang\ndigunakan semasa perkhemahan.\nDiagram 42 shows a water bottle lamp used\nduring camping. (SPM: 2022)\nLampu botol air\nWater botle lamp\nAntara berikut, yang manakah betul apabila sinar\ncahaya dibiaskan oleh air dalam botol air\ntersebut?\nWhich of the following is correct when the light\nrays are refracted by the water in the water\nbottle?\nI Lajunya berubah\nThe speed changes\nII Frekuensi berubah\nFrequency changes\nIII Arahnya berubah\nThe direction changes\nIV Panjang gelombang berubah\nThe wavelength changes',
        [
            {
                        "id": "A",
                        "teks": "I dan II"
            },
            {
                        "id": "B",
                        "teks": "I dan III"
            },
            {
                        "id": "C",
                        "teks": "I,IIdanII I and II 1, Il and II"
            },
            {
                        "id": "D",
                        "teks": "I, III dan IV I and III I, III and IV"
            }
],
        "rajah42", "Percubaan SPM: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q62
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q62", 62, "Sederhana", "Memahami",
        'Rajah 43 menunjukkan susunan radas bagi\neksperimen pembentukan imej oleh kanta\ncembung.\nDiagram 43 shows the arrangement of the\napparatus for theexperimentof imageformation\nby a covex lens. (SPM: 2022)\nKouk sina\nRay bar\nKanta cembung\nConez lers 7 Kentas anak pnah lutsinar schaaichiek dengan\nTroasparentpoper wik\naor asobiet\nPembaris\nRoiler\nSuria puth\nPerubahan pemboleh ubah yang manakah\nmenyebabkan pertambahan saiz imej?\nWhich changes of variables causes the increase\nof image size?\nDiameter kanta Panjangfokus, f\nLens diameter Focallength,t',
        [
            {
                        "id": "A",
                        "teks": "Diameter kanta tiada perubahan, Panjang fokus bertambah / Lens diameter no changes, Focal length increases"
            },
            {
                        "id": "B",
                        "teks": "Diameter kanta bertambah, Panjang fokus tiada perubahan / Lens diameter increases, Focal length no changes"
            },
            {
                        "id": "C",
                        "teks": "Diameter kanta tiada perubahan, Panjang fokus berkurang / Lens diameter no changes, Focal length decreases"
            },
            {
                        "id": "D",
                        "teks": "Diameter kanta berkurang, Panjang fokus tiada perubahan / Lens diameter decreases, Focal length no changes"
            }
],
        "", "Percubaan SPM: 2022", 2022
    ))

    # MODUL_T4_B6_K2_Q63
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q63", 63, "Sederhana", "Memahami",
        'Rajah 44 menunjukkan suatu imej yang terbentuk\noleh satu kanta cembung.\nDiagram 44 shows an image that is formed by a\nconvex lens. (SPM: 2023)\niImej\nImage Objek\nObject\nRajah 44 / Diagranm 44\nAntara yang berikut, alat manakah yang\nmenghasilkan imej seperti di atas?\nWhich of the following equipment produces an\nimage as above?',
        [
            {
                        "id": "A",
                        "teks": "Kanta pembesar"
            },
            {
                        "id": "B",
                        "teks": "Mikroskop"
            },
            {
                        "id": "C",
                        "teks": "Teleskop Magnifying lens Telescope"
            },
            {
                        "id": "D",
                        "teks": "Kamera Microscope Camera"
            }
],
        "", "Percubaan SPM: 2023", 2023
    ))

    # MODUL_T4_B6_K2_Q64
    questions.append(make_b6_q(
        "MODUL_T4_B6_K2_Q64", 64, "Sederhana", "Memahami",
        'Rajah 45 menunjukkan imej Ali dalam sebuah\ncermin apabila dia berdiri pada jarak kurang\ndaripadapanjang fokus cermin itu.\nDiagram 45 shows the image of Ali in a mirror\nwhen he stands at a distance less than the focal\nlengthof the mirror. (SPM: 2023)\nLmej di dalun cermin\nnage in the mirror',
        [
            {
                        "id": "A",
                        "teks": "Cermin satah / Plane mirror"
            },
            {
                        "id": "B",
                        "teks": "Cermin cembung / Convex mirror"
            },
            {
                        "id": "C",
                        "teks": "Cermin cekung / Concave mirror"
            },
            {
                        "id": "D",
                        "teks": "Cermin permukaan tidak rata / Uneven surface mirror"
            }
],
        "rajah45", "Percubaan SPM: 2023", 2023
    ))

    return questions

if __name__ == "__main__":
    qs = get_k2_part2_questions()
    print(f"Loaded {len(qs)} questions from get_k2_part2_questions")
