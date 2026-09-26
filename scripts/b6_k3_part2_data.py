#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dataset Konstruk 3: Mengaplikasi (Bahagian 2: Soalan 36 - 62)
Tingkatan 4 Bab 6: Cahaya dan Optik
Adheres 100% to the 13 Golden Invariants.
"""

import sys
sys.path.insert(0, ".")
from scripts.build_dataset_helper_b6 import make_b6_q

def get_k3_part2_questions():
    questions = []

    # MODUL_T4_B6_K3_Q36
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q36", 36, "Sederhana", "Mengaplikasi",
        'Gambarajah sinar berikut yang manakah akan\nmenghasilkan imej yang maya, tegak dan lebih\nbesar daripada objek?\nWhich of the following diagrams produces image\nthat is virtual, upright and bigger than the object?\n(Kedah: 2021)',
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
        "", "Percubaan Kedah: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q37
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q37", 37, "Sederhana", "Mengaplikasi",
        'Sebuah objek diletakkan 5 cm di hadapan sebuah\nkanta cembung yang mempunyai panjang fokus\n10 cm. Apakah nilai m, pembesaran imej?\nAn object is placed 5 cm in front of a covex lens\nwhich has a focal length of 10 cm. What is the',
        [
            {
                        "id": "A",
                        "teks": "5.0"
            },
            {
                        "id": "B",
                        "teks": "2.0"
            },
            {
                        "id": "C",
                        "teks": "1.5"
            },
            {
                        "id": "D",
                        "teks": "0.5"
            }
],
        "", "Percubaan SPM 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q38
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q38", 38, "Sederhana", "Mengaplikasi",
        'Rajah 66 menunjukkan satu lintasan cahaya.\nDiagram 66 shows a path of light.\n(Kelantan: 2021: 17)\nCxir P\nUgud P\nIndeks biasan air dan cecair P adalah masing-\nmasing 1.3 dan 1.5. Berapakah sudut biasan, r\ndalam cecair P?\nThe refractive index of water and liquid P are 1.3\nand I.5 respectively. What is the refracted angle,\nr in liquid P?',
        [
            {
                        "id": "A",
                        "teks": "25.4°"
            },
            {
                        "id": "B",
                        "teks": "29.6°"
            },
            {
                        "id": "C",
                        "teks": "33.9°"
            },
            {
                        "id": "D",
                        "teks": "47.9°"
            }
],
        "rajah66", "Percubaan Kelantan: 2021: 17", 2021
    ))

    # MODUL_T4_B6_K3_Q39
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q39", 39, "Sederhana", "Mengaplikasi",
        'Rajah 67 menunjukkan cahaya dari udara terbias\napabila masuk ke dalam air dan perspeks. Indeks\nbiasan bagi air dan perspeks masing-masing\nadalah 1.33 dan 1.5.\nDiagram 67 shows a light from air refracted\nwhen enter the water and perspex. Refractive\nindex of water and perspex respectively is 1.33\nand 1.5. (Sarawak: 2021)\nai 50: normal\nwater\nPerspeks\nPerspex\nTentukan sudut, 0.\nDetermine the angle, 0.',
        [
            {
                        "id": "A",
                        "teks": "30.00°"
            },
            {
                        "id": "B",
                        "teks": "35.45°"
            },
            {
                        "id": "C",
                        "teks": "40.27°"
            },
            {
                        "id": "D",
                        "teks": "42.78°"
            }
],
        "rajah67", "Percubaan Sarawak: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q40
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q40", 40, "Sederhana", "Mengaplikasi",
        'Rajah 68 menunjukkan imej yang dihasilkan oleh\nsebuah kanta pembesar.\nDiagram 68 shows the imnage formned by a\nmagnifying glass. (Sarawak: 2021)\ncrdeme\nRajah sinar manakah yang betul menerangkan\nsifat imej yang terhasil?\nWhich of the following ray diagran is correct to\nshow the characteristics of theimage forned?',
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
        "rajah68", "Percubaan Sarawak: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q41
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q41", 41, "Sederhana", "Mengaplikasi",
        "Halaju cahaya di dalam vakum ialah 3 x 10 m s\n1. Indeks biasan bagi air ialah 1.30. Berapakah\nhalaju cahaya di dalam air?\nThe velocity of light in vacuunmis 3 x 10 ms'.\nThe refractive index of water is 1.30. What is the\nvelocity of light in the water?\n(Terengganu: 2021)",
        [
            {
                        "id": "A",
                        "teks": "2.11x10 msl"
            },
            {
                        "id": "B",
                        "teks": "2.31 x 10 m s'"
            },
            {
                        "id": "C",
                        "teks": "3.11 x 10 m s"
            },
            {
                        "id": "D",
                        "teks": "4.26x 10 ms'"
            }
],
        "", "Percubaan Terengganu: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q42
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q42", 42, "Sederhana", "Mengaplikasi",
        'Laju cahaya dalam vakum ialah 3 x 10 m s\'\nApabila cahaya melalui satu tingkap kaca,\nkelajuannya menjadi 1.86 x 10° m s". Berapakah\nindeks biasan kaca tingkap iu?\nThe speed of light in vacuum is 3 x 10 m s\'.\nWhen the light penetrates a glass window, its\nspeed becomes 1.86 x 10 m s\'. What is the\nrefractive index of ihe glass window?\n(Selangor: Set 1: 2021)',
        [
            {
                        "id": "A",
                        "teks": "0.62"
            },
            {
                        "id": "B",
                        "teks": "1.51"
            },
            {
                        "id": "C",
                        "teks": "1.61"
            },
            {
                        "id": "D",
                        "teks": "2.92"
            }
],
        "", "Percubaan Selangor: Set 1: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q43
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q43", 43, "Sederhana", "Mengaplikasi",
        'Rajah 69 menunjukkan satu objek diletak pada\njarak u cm dari pusat sebuah kanta cembung.\nPanjang fokus kanta itu ialah 20 cm.\nDiagran 69 shows an object which is placed at u\ncm from the center of a convex lens. The focal\nlength of the lens is 20 cm.\n(Selangor: Set 1: 2021)\nObjek\nObect\nApakah ciri-ciri imej yang terbentuk jika u adalah\n40 cm?\nWhat are the characteristics of theimage formed\nifu is 40 cm?',
        [
            {
                        "id": "A",
                        "teks": "Maya dan sama saiz / Virtual and same size"
            },
            {
                        "id": "B",
                        "teks": "Maya dan lebih besar / Virtual and bigger"
            },
            {
                        "id": "C",
                        "teks": "Nyata dan sama saiz / Real and same size"
            },
            {
                        "id": "D",
                        "teks": "Nyata dan lebih kecil / Real and smaller"
            }
],
        "rajah69", "Percubaan Selangor: Set 1: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q44
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q44", 44, "Sederhana", "Mengaplikasi",
        'Rajah 70 menunjukkan sebuah objek diletakkan\ndi hadapan cermin cekung. Manakah kedudukan\nimej yang betul?\nDiagram 70 shows an object is placed in front of\na concave mirror: Which is the correct position of\nthe image? (Selangor: Set 1: 2021)\nObjek / Object\nOblet\nCermin cekung\nF-Titkfokus Concavemiror\nFocus poini\nQ-Pusatkelengkungan\nCentre ofcneture',
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
        "", "Percubaan Selangor: Set 1: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q45
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q45", 45, "Sederhana", "Mengaplikasi",
        'Rajah 7l menunjukkan satu sinar cahaya melalui\nsatu bongkah kaca. Indeks biasan bagi kaca itu\nialah I.52.\nDiagram 71 shows a ray of light passing into a\nglass block. The refractive index of the glass is\n1.52. (Selangor: Set 2: 2021)\nbongkah kaca\nglass block\nRajah 71 / Diagran 71\nBerapakah sudut x?\nWhat is the angle of x?',
        [
            {
                        "id": "A",
                        "teks": "23.00°"
            },
            {
                        "id": "B",
                        "teks": "29.30°"
            },
            {
                        "id": "C",
                        "teks": "60.70°"
            },
            {
                        "id": "D",
                        "teks": "67.00°"
            }
],
        "", "Percubaan Selangor: Set 2: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q46
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q46", 46, "Sederhana", "Mengaplikasi",
        'Rajah 72 menunjukkan satu objek diletak pada\njarak u cm dari pusat sebuah kanta cembung.\nPanjang fokus kanta itu ialah 30 cm.\nDiagram 72 shows an object which is placed at u\ncm from the center of a conver lens. The focal\nlengih of the lens is 30 cm.\n(Selangor: Set 2: 2021)\nObjek\nObject\nAntara ciri-ciri imej yang berikut yang manakah\nbetul jika u ialah 25 cm, 40 cm, 55 cm, dan 70\ncm dari kanta itu?\nWhich of the following characteristics of the\nimage is correct if u is 25 cm, 40 cm, 60 cm and\n70 cm from the lens?\nCiri-ciri imej\n(cm) Characteristics of the image\nMaya dan lebih besar',
        [
            {
                        "id": "A",
                        "teks": "Jarak objek = 25 cm, Ciri imej = Maya dan lebih kecil / Object distance = 25 cm, Image = Virtual and smaller"
            },
            {
                        "id": "B",
                        "teks": "Jarak objek = 40 cm, Ciri imej = Nyata dan sama saiz / Object distance = 40 cm, Image = Real and same size"
            },
            {
                        "id": "C",
                        "teks": "Jarak objek = 60 cm, Ciri imej = Nyata dan lebih besar / Object distance = 60 cm, Image = Real and bigger"
            },
            {
                        "id": "D",
                        "teks": "Jarak objek = 10 cm, Ciri imej = Maya dan lebih besar / Object distance = 10 cm, Image = Virtual and bigger"
            }
],
        "rajah72", "Percubaan Selangor: Set 2: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q47
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q47", 47, "Sederhana", "Mengaplikasi",
        'Rajah 73 menunjukkan sebuah objek di depan\ncermin cekung. Manakah imej yang betul?\nDiagram 73 shows an object in front ofa concave\nmirror. Vhich is the correct image?\n(Selangor: Set 2: 2021)\nObjek )\nObiec\nF- Titikfokus incekung\nFocus point Concave minor\nQ-Pusat lengkungan\nCentre ofcurvature',
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
        "rajah73", "Percubaan Selangor: Set 2: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q48
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q48", 48, "Sederhana", "Mengaplikasi",
        'Rajah 74 menunjukkan satu alur cahaya yang\nditujukan pada suatu bongkah kaca.\nDiagram 4 showsabeam oflight that is directed\ntowards a glass block. (MRSM: 2021)\nAi\nUdara\nGlass block\nBonghahhaca\nAir\nUlars\nManakah nilai yang betul bagi sudut r?\nWhich is the correct value for angle r?',
        [
            {
                        "id": "A",
                        "teks": "r < 30°"
            },
            {
                        "id": "B",
                        "teks": "r = 30°"
            },
            {
                        "id": "C",
                        "teks": "r > 30°"
            },
            {
                        "id": "D",
                        "teks": "r = 0°"
            }
],
        "rajah74", "Percubaan MRSM: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q49
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q49", 49, "Sederhana", "Mengaplikasi",
        'Rajah 75 di bawah menunjukkan satu imej tajam\nyang terbentuk pada skrin apabila jarak antara\nobjek dan skrin adalah 60 cm.\nDiagram 75 below shows a sharp image being\nformed on a screen when the distance betveen the\nobject and the screen is 60 cm.\n(Negeri Sembilan: 2021)\nSkrin\n60 cm Sereen\nOhick\nObject\nBerapakah panjang fokus kanta sckiranya saiz\nimcj adalah sama dengan saiz objek?\nWhat is the focal length of the lens if the size of\nthe image is the same as the object?',
        [
            {
                        "id": "A",
                        "teks": "10 cm"
            },
            {
                        "id": "B",
                        "teks": "12 cm"
            },
            {
                        "id": "C",
                        "teks": "15 cm"
            },
            {
                        "id": "D",
                        "teks": "20 cm"
            }
],
        "", "Percubaan Negeri Sembilan: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q50
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q50", 50, "Sederhana", "Mengaplikasi",
        "Rajah 76 menunjukkan seorang pemerhati\nmelihat imej scorang penyelam 2.0 m dari\npermukaan air.\nDiagram 76 shows an observer looking at the\nimage of a diver 2.0 m from the water surface.\n(Pahang: 2021)\nObsener\nPemerhati\nWatersurface\nPermukaanair\nDiver's image\nImej pemelan\n35 d=20m\nDiver\nPemelam\nBerapakah dalam sebenar penyelam itu?\nWhat is the actual depth of the diver?",
        [
            {
                        "id": "A",
                        "teks": "140 cm"
            },
            {
                        "id": "B",
                        "teks": "1.50 cm"
            },
            {
                        "id": "C",
                        "teks": "2.67 cm"
            },
            {
                        "id": "D",
                        "teks": "2.86 cm"
            }
],
        "rajah76", "Percubaan Pahang: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q51
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q51", 51, "Sederhana", "Mengaplikasi",
        'S1. Rajah 77 menunjukkan satu sinar cahaya P,\nditujukan kepada pusat, O satu bongkah kaca\nsemibulatan. Indeks biasan kaca itu adalah 1.52.\nDiagram 77 shows a light ray, P is directed to the\ncentre, O of semicireular glass block. Refractive\nindex of theglass is 1.52. (Pahang: 2021)\nRajah 77 / I Diagram 77\nArah manakah antara A, B,C atau D sinar itu\nmerambatselepas titik 0?\nAt which direction A, B, C or D does the light\npropagate after point 0?',
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
        "", "Percubaan Pahang: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q52
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q52", 52, "Sederhana", "Mengaplikasi",
        'Rajah 78 menunjukkan pembentukan imej\ndaripada suatu objek oleh kanta cembung.\nDiagram 78 shows the formation of an image\nfrom an object by a convex lens. (Pahang: 2021)\n10 cr\nImcj\nInaee\nObck 4 cm\nObject\n30em\nRajah 78 / Diagran 78\nBerapakah tinggi objek itu jika tinggi imejnya\nadalah 4 cm?\nWhat is the height of the object ifthe height of its\nimage is 4 cm?',
        [
            {
                        "id": "A",
                        "teks": "0.5 cm"
            },
            {
                        "id": "B",
                        "teks": "1.0 cm"
            },
            {
                        "id": "C",
                        "teks": "2.0 cm"
            },
            {
                        "id": "D",
                        "teks": "3.0 cm"
            }
],
        "", "Percubaan Pahang: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q53
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q53", 53, "Sederhana", "Mengaplikasi",
        'Rajah 79 menunjukkan sinar cahaya selari\nditujukan ke permukaan cermin cekung.\nDiagram 79 shows parallel light rays directed at\nthe surface ofa concave mirror. (Pahang: 2021)\nRajah yang manakah menunjukkan lintasan\ncahaya selepas terkena cermin itu?\nWhich diagram shows the path of the rays after\nstriking the mirror?',
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
        "rajah79", "Percubaan Pahang: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q54
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q54", 54, "Sederhana", "Mengaplikasi",
        'Rajah 80 menunjukkan satu sinar cahaya\nditujukan secara normal dengan permukaan PQ\nbagi sebuah prisma kaca. Diberi bahawa indeks\nbiasan prisma tersebut ialah 1.50.\nDiagram 80 shows a light ray directed normally\nto PQ of a glass prism. Given that the vefractive\nindex of the prism is 1.50. (SBP: 2021)\nLintasan manakah A, B, C dan D menunjukkan\nperambatan cahaya yang betul selepas melalui\nPR?\nWhich path A, B, C and D shows the correct\npropagation of light after passing PR?',
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
        "rajah80", "Percubaan SBP: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q55
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q55", 55, "Sederhana", "Mengaplikasi",
        'Rajah 81 menunjukkan satu rajah sinar yang tidak\nlengkap bagi sebuah kanta cekung. Tentukan\nkedudukan imej.\nDiagram 81 shows an incomplete ray diagram\nfor a concavelens. Determine position of image.\n(SBP: 2021)',
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
        "rajah81", "Percubaan SBP: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q56
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q56", 56, "Sederhana", "Mengaplikasi",
        'Rajah 82 menunjukkan satu objek diletakkan di\nhadapan sebuah kanta cembung dengan panjang\nfokus 10 cm.\nDiagram 82 shows an object is placed in front of\na convex lens with focal length of 10 cm.\n(Melaka: 2021)\n6 cm\nObjek\nObject\nApakah ciri-ciri imej yang terbentuk?\nWhat are the characteristics of image formed?',
        [
            {
                        "id": "A",
                        "teks": "Mengecil, tegak, maya / Diminished, upright, virtual"
            },
            {
                        "id": "B",
                        "teks": "Mengecil, songsang, nyata / Diminished, inverted, real"
            },
            {
                        "id": "C",
                        "teks": "Membesar, songsang, nyata / Magnified, inverted, real"
            },
            {
                        "id": "D",
                        "teks": "Membesar, tegak, maya / Magnified, upright, virtual"
            }
],
        "rajah82", "Percubaan Melaka: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q57
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q57", 57, "Sederhana", "Mengaplikasi",
        'Rajah 83 menunjukkan pembentukan imej\ndaripada suatu objek oleh kanta cembung.\nDiagram 83 shows the formation of an image\nfrom an object by a convex lens. (Melaka: 2021)\n20,cP\nf Imej\nInage\nObjek 4 cm\nObject\n60 em\nBerapakalh tinggi objek itu jika tinggi imejnya\nadalah 4 cm?\nWhatis the height oftheobject if the heightof its\nimage is 4 cm?',
        [
            {
                        "id": "A",
                        "teks": "0.3 cm"
            },
            {
                        "id": "B",
                        "teks": "1.3 cm"
            },
            {
                        "id": "C",
                        "teks": "2.0 cm"
            },
            {
                        "id": "D",
                        "teks": "3.0 cm"
            }
],
        "rajah83", "Percubaan Melaka: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q58
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q58", 58, "Sederhana", "Mengaplikasi",
        'Rajah manakah yang menunjukkan pantulan\ncahaya yang betul oleh sebuah cermin cekung?\nWhich diagram shows the correct reflection of\nlight by a concave nirror? (Melaka: 2021)',
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
        "", "Percubaan Melaka: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q59
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q59", 59, "Sederhana", "Mengaplikasi",
        'Rajah 84 menunjukkan pembentukan imej suatu\nobjek oleh sebuah kanta cembung.\nDiagram 84 shows the image formation of an\nobject by a convex lens (Perlis: 2021)\nObjek Object Image\n26 cm\nRajah 84 / Diagran 84\nJika tinggi objek ialah 2 cm, berapakah tinggi\nimej?\nIf the height of the object is 2 cm, what is the\nheightoftheimage?',
        [
            {
                        "id": "A",
                        "teks": "3.25 cm"
            },
            {
                        "id": "B",
                        "teks": "4.00 cm"
            },
            {
                        "id": "C",
                        "teks": "4.50 cm"
            },
            {
                        "id": "D",
                        "teks": "6.50 cm"
            }
],
        "", "Percubaan Perlis: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q60
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q60", 60, "Sederhana", "Mengaplikasi",
        'Rajah 85 menunjukkan satu objek diletakkan 10\ncm di hadapan sebuah cermin cekung yang\nmempunyai panjang fokus, f = 5 cm.\nDiagram 85 shows an object that is placed 10 cm\nin front ofaconcavemirror offocallength, f= 5\ncm. (SPM: 2021)\nObjek\nObiect Cermin cekung\nConcave mirror\n10 cm Sem\nApakah ciri-ciri imej yang terbentuk?\nWhat are the characteristics of the image formed?',
        [
            {
                        "id": "A",
                        "teks": "Nyata, sama saiz, songsang / Real, same size, inverted"
            },
            {
                        "id": "B",
                        "teks": "Nyata, diperkecil, songsang / Real, diminished, inverted"
            },
            {
                        "id": "C",
                        "teks": "Maya, sama saiz, tegak / Virtual, same size, upright"
            },
            {
                        "id": "D",
                        "teks": "Maya, diperkecil, tegak / Virtual, diminished, upright"
            }
],
        "rajah85", "Percubaan SPM: 2021", 2021
    ))

    # MODUL_T4_B6_K3_Q61
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q61", 61, "Sederhana", "Mengaplikasi",
        'Rajah 86 menunjukkan satu sinar cahaya yang\nmerambat keluar dari suatu bongkah perspeks.\nDiagram 86 shows a light ray propagates out\nfron theperspex block. (SPM: 2022)\nNomal\nNanuol\nSinar tuju\nIncident ray\nBlok perspeks\nPerspexbiock\nBerapakah nilai sudut genting perspeks itu?\nWhat is the critical angle of theperspex?',
        [
            {
                        "id": "A",
                        "teks": "37.73°"
            },
            {
                        "id": "B",
                        "teks": "41.73°"
            },
            {
                        "id": "C",
                        "teks": "60.16°"
            },
            {
                        "id": "D",
                        "teks": "70.66°"
            }
],
        "rajah86", "Percubaan SPM: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q62
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q62", 62, "Sederhana", "Mengaplikasi",
        'Rajah 87 menunjukkan sebutir berlian yang\nbersinar apabila terkena cahaya. Sudut genting\nbagi berlian ialah 25°.\nDiagram 87 shows a diamond that shines when\nexposed to light. The critical angle of the\ndiamond is 25°. (SPM: 2023)\nAntara A, B, C, dan D, yang manakah\nmenunjukkan laluan sinar yang betul selepas\nsinar tuju melalui titik P?\nWhich of A, B, C, or D shows the correct path of\nthe ray after the incident raypasses through point\nP?',
        [
            {
                        "id": "A",
                        "teks": "Laluan A / Path A"
            },
            {
                        "id": "B",
                        "teks": "Laluan B / Path B"
            },
            {
                        "id": "C",
                        "teks": "Laluan C / Path C"
            },
            {
                        "id": "D",
                        "teks": "Laluan D / Path D"
            }
],
        "rajah87", "Percubaan SPM: 2023", 2023
    ))

    return questions

if __name__ == "__main__":
    qs = get_k3_part2_questions()
    print(f"Loaded {len(qs)} questions from get_k3_part2_questions")
