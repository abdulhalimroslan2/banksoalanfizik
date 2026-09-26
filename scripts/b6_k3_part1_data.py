#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dataset Konstruk 3: Mengaplikasi (Bahagian 1: Soalan 1 - 35)
Tingkatan 4 Bab 6: Cahaya dan Optik
Adheres 100% to the 13 Golden Invariants.
"""

import sys
sys.path.insert(0, ".")
from scripts.build_dataset_helper_b6 import make_b6_q

def get_k3_part1_questions():
    questions = []

    # MODUL_T4_B6_K3_Q01
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q01", 1, "Sederhana", "Mengaplikasi",
        'Rajah 46 menunjukkan cahaya merambat dari\nmedium A dan kemudian memasuki medium B.\nDiagram 46 shows light propagating from\nmedium A and then entering medium B.\n(Kelantan: 2023)\nMedlum A\nn133\nMedium B\no150\nRajah 46/ Diagranm 46\nHitung r.\nCalculate r.',
        [
            {
                        "id": "A",
                        "teks": "26.320"
            },
            {
                        "id": "B",
                        "teks": "26.600"
            },
            {
                        "id": "C",
                        "teks": "33.830"
            },
            {
                        "id": "D",
                        "teks": "34.330"
            }
],
        "", "Percubaan Kelantan: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q02
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q02", 2, "Sederhana", "Mengaplikasi",
        'Rajah 47 menunjukkan rajah sinar bagi sebuah\ncermin cekung.\nDiagram 47 shows a ray diagram for a curve\nmirror. (Kelantan: 2023)\nApakah kedudukan dan jarak imej, v yang\nterhasil?\nWhat is the position and image distance, v\nproduced?',
        [
            {
                        "id": "A",
                        "teks": "Di hadapancernmindan v =f In frontofthemirrorand v=f"
            },
            {
                        "id": "B",
                        "teks": "Di hadapancemin dan f<v< 2f In frontofthemirrorand f<v <2f"
            },
            {
                        "id": "C",
                        "teks": "Di hadapan cermin dan v = 2f In front of the mirror and v = 2f"
            },
            {
                        "id": "D",
                        "teks": "Di hadapan cermin dan v> 2f In front of the mirror and v > 2f"
            }
],
        "rajah47", "Percubaan Kelantan: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q03
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q03", 3, "Sederhana", "Mengaplikasi",
        'Suatu objek dengan ketinggian 50 cm diletakkan\npada jarak 60 cm dari satu kanta cekung. Panjang\nfokus kanta tersebut ialah 20 cm. Nyatakan ciri-\nciri imej yang terbentuk oleh kanta itu.\nAn object with a height of 50 cm is placed at\ndistance of 60 cmfrom a concave lens. The focal\nlength of the lens is 20 cm. State\ncharacteristics of the image formed by the lens.\n(Melaka: 2023)',
        [
            {
                        "id": "A",
                        "teks": "Nyata, songsang, saiz diperkecilkan / Real, inverted, diminished"
            },
            {
                        "id": "B",
                        "teks": "Maya, songsang, saiz diperbecsarkan / Virtual, iverted, magnified"
            },
            {
                        "id": "C",
                        "teks": "Maya, tegak, saiz diperkecilkan / Virtual, upright, diminished"
            },
            {
                        "id": "D",
                        "teks": "Nyata, tegak, saiz diperbesarkan / Real, upright, magnified"
            }
],
        "", "Percubaan Melaka: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q04
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q04", 4, "Sederhana", "Mengaplikasi",
        'Rajah 48 menunjukkan suatu objek di hadapan\nsebuah kanta cembung dan imejnya.\nDiagram48showsan object in front of a covex\nlens and its image. (Melaka: 2023)\n0=0cm\nObjek 4\nObject|\nImej\nImoge\n30 cm\nBerapakah panjang fokus kanta itu?\nWhat is the focal length of the lens?',
        [
            {
                        "id": "A",
                        "teks": "0.15 cm"
            },
            {
                        "id": "B",
                        "teks": "6.67 cm"
            },
            {
                        "id": "C",
                        "teks": "7.50 cm"
            },
            {
                        "id": "D",
                        "teks": "20.00 cm"
            }
],
        "rajah48", "Percubaan Melaka: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q05
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q05", 5, "Sederhana", "Mengaplikasi",
        'Rajah 49 menunjukkan satu objek diletakkan\nhadapan sebuah cermin cekung. F ialah titik\nfokus bagi cermin itu.\nDiagram 49 shows an object placed in front of\nconcave mirror. F is the focal point of the mirror.\n(Melaka: 2023)\nCermin cekung\nConcne miror\nObjek\nObject\nApakah ciri imej yang terbentuk?\nWhatare the characteristics of theimage formed?\na A Maya dan lebih besar daripada objek\nVirtual and bigger than the object\nthe B Nyata dan lebih kecil daripada objek\nReal and smaller than the object\nC Maya dan lebih kecil daripada objek\nVirtual and smaller than the object\nD Nyata dan lebih besar daripada objek\nReal and bigger than the object',
        [
            {
                        "id": "A",
                        "teks": "Maya dan lebih besar daripada objek / Virtual and bigger than the object"
            },
            {
                        "id": "B",
                        "teks": "Nyata dan lebih kecil daripada objek / Real and smaller than the object"
            },
            {
                        "id": "C",
                        "teks": "Maya dan lebih kecil daripada objek / Virtual and smaller than the object"
            },
            {
                        "id": "D",
                        "teks": "Nyata dan lebih besar daripada objek / Real and bigger than the object"
            }
],
        "rajah49", "Percubaan Melaka: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q06
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q06", 6, "Sederhana", "Mengaplikasi",
        'Rajah 50 menunjukkan satu sinar cahaya\nmerambat dari medium kaca ke udara. Indeks\nbiasan kaca ialah 1.50.\nDiagran 50 shows a light ray propagating from\nglass medium to the air The refractive index of\nglass is 1.50. (Negeri Sembilan: 2023)\nUdara\nAir\nKaca\nGlns\nRajah 50/ Diagran 50\nBerapakah laju cahaya di dalam medium kaca?\nWhat is the speed of light in the glass medium?',
        [
            {
                        "id": "A",
                        "teks": "L.5x 10 ms!"
            },
            {
                        "id": "B",
                        "teks": "2.0 x 10 ms"
            },
            {
                        "id": "C",
                        "teks": "3.0 x 10 ms!"
            },
            {
                        "id": "D",
                        "teks": "4.5 x 10 ms"
            }
],
        "", "Percubaan Negeri Sembilan: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q07
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q07", 7, "Sederhana", "Mengaplikasi",
        'Rajah 51 menunjukkan satu objek, O yang\ndiletakkan di hadapan sebuah kanta cekung.\ndi Diagram 51 shows an object, O is placed in front\nofa concave lens. (Pahang: 2023)\n2r\nAntara berikut, apakah ciri-ciri imej yang\nterbentuk?\nWhich of the following are the characteristics of\nthe image formed?',
        [
            {
                        "id": "A",
                        "teks": "Maya, tegak dan diperkecilkan / Virtual, upright and diminished"
            },
            {
                        "id": "B",
                        "teks": "Maya, tegak dan diperbesarkan / Virtual, upright and magnified"
            },
            {
                        "id": "C",
                        "teks": "Nyata, songsang dan sama saiz / Real, inverted and same size"
            },
            {
                        "id": "D",
                        "teks": "Nyata, songsang dan diperkecilkan / Real, inverted and diminished"
            }
],
        "rajah51", "Percubaan Pahang: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q08
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q08", 8, "Sederhana", "Mengaplikasi",
        'Antara berikut yang manakah menunjukkan\nlaluan cahaya yang betul apabila cahaya\nmerambat melalui dua lapisan udara yang\nberbeza suhu?\nWhich of the following shows the correct light\npath when light propagates through two layers of\nair with different temperature?\n(Pulau Pinang: 2023)',
        [
            {
                        "id": "A",
                        "teks": "Rajah A: Terbias mendekati garis normal / Diagram A: Refracts towards normal line"
            },
            {
                        "id": "B",
                        "teks": "Rajah B: Terbias menjauhi garis normal / Diagram B: Refracts away from normal line"
            },
            {
                        "id": "C",
                        "teks": "Rajah C: Pantulan dalam penuh / Diagram C: Total internal reflection"
            },
            {
                        "id": "D",
                        "teks": "Rajah D: Tidak terbias / Diagram D: Undeviated"
            }
],
        "", "Percubaan Pulau Pinang: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q09
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q09", 9, "Sederhana", "Mengaplikasi",
        'Satu objek diletakkan 15.0 cm di hadapan sebuah\nkanta cembung dengan panjang fokus 10.0 cm.\nBerapakah jarak imej?\nAn object is placed 15.0cm in front of a covex\nlens with a focal length of 10.0 cm. What is the\nimage distance? (Pulau Pinang: 2023)',
        [
            {
                        "id": "A",
                        "teks": "6 cm"
            },
            {
                        "id": "B",
                        "teks": "25 cm"
            },
            {
                        "id": "C",
                        "teks": "30 cm"
            },
            {
                        "id": "D",
                        "teks": "150 cm"
            }
],
        "", "Percubaan Pulau Pinang: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q10
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q10", 10, "Sederhana", "Mengaplikasi",
        'Rajah 52 menunjukkan suatu objek diletakkan 20\ncm di hadapan suatu cermin cekung yang\nmempunyai panjang fokus, f, 10 cm.\nDiagram 52 shows an object placed 20 cm in\nfront ofa concave mirror offocal length, f, 10 cm.\n(Perak: 2023)\nCemin cekung\nObjek Concave mirror\nObject\n20 cm 10cm\nApakah ciri-ciri imej yang terbentuk?\nWhatarethe characteristics of the image forned?',
        [
            {
                        "id": "A",
                        "teks": "Nyata, sama saiz, songsang / Real, sanmesize, inverted"
            },
            {
                        "id": "B",
                        "teks": "Nyata, dikecilkan, songsang / Real, diminished, inverted"
            },
            {
                        "id": "C",
                        "teks": "Maya, sama saiz, tegak / Virtual, same size, upright"
            },
            {
                        "id": "D",
                        "teks": "Maya, dikecilkan, tegak / Virtual, diminished, upright"
            }
],
        "rajah52", "Percubaan Perak: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q11
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q11", 11, "Sederhana", "Mengaplikasi",
        'Rajah 53 menunjukkan satu objek yang\ndiletakkan 12 cm dari satu kanta cembung.\nPanjang fokus kanta itu ialah 8 cm.\nDiagram 53 shows an object is placed 12 cm from\na convex lens.The focal length of the lens is 8 cm.\n(Perlis: 2023)\n4 12 cm\nBerapakah jarak imej dari kanta itu?\nWhat is the image distance from the lens?',
        [
            {
                        "id": "A",
                        "teks": "4 cm"
            },
            {
                        "id": "B",
                        "teks": "18 cm"
            },
            {
                        "id": "C",
                        "teks": "20 cm"
            },
            {
                        "id": "D",
                        "teks": "24 cm"
            }
],
        "rajah53", "Percubaan Perlis: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q12
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q12", 12, "Sederhana", "Mengaplikasi",
        'Satu objek diletakkan 8.0 cm di hadapan sebuah\nkanta cembung dengan panjang fokus 10.0 cm.\nBerapakah jarak imej dan apakah ciri-ciri imej\nyang terbentuk?\nAn object is placed 8.0 cm in front of a convex\nlens of focal length 10.0 cm. What is the image\ndistance and the characteristics of the image\nformed? (SBP: 2023)\nJarak imej\n(cm) Ciri-ciri imej\nImage Characteristics of image\ndistance (cm)\nSongsang, nyata dan\ndiperkecilkan',
        [
            {
                        "id": "A",
                        "teks": "Tegak, maya dan diperkecilkan / Upright, virtual and diminished"
            },
            {
                        "id": "B",
                        "teks": "Songsang, nyata dan diperkecilkan / Inverted, real and diminished"
            },
            {
                        "id": "C",
                        "teks": "Tegak, maya dan diperbesarkan / Upright, virtual and magnified"
            },
            {
                        "id": "D",
                        "teks": "Songsang, nyata dan diperbesarkan / Inverted, real and magnified"
            }
],
        "", "Percubaan SBP: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q13
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q13", 13, "Sederhana", "Mengaplikasi",
        'Sebuah cermin cekung mempunyai titik fokus, F\ndan pusat lengkungan, C. Kedudukan objek yang\nmanakah akan menghasilkan satu imnej yang\nnyata, songsang dan diperbesarkan bagi cermin\ncekung itu?',
        [
            {
                        "id": "A",
                        "teks": "Objek dan imej berada pada titik fokus / Object and image at focal point"
            },
            {
                        "id": "B",
                        "teks": "Objek berada di antara F dan 2F / Object between F and 2F"
            },
            {
                        "id": "C",
                        "teks": "Objek berada pada jarak kurang dari F / Object at distance less than F"
            },
            {
                        "id": "D",
                        "teks": "Objek berada pada jarak lebih dari 2F / Object at distance greater than 2F"
            }
],
        "", "Percubaan SBP: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q14
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q14", 14, "Sederhana", "Mengaplikasi",
        'Rajah 54 menunjukkan satu objek diletakkan di\nhadapan sebuah kanta cekung. Titik fokus, F\nditandakan pada kedua belah itu. Pada kedudukan\nmanakah imej akan terbentuk?\nDiagram 54 shows an object placed in front of a\nconcave lens. The focal point, F is marked on\nboth sides. At what position will the image be\nformed? (SMKA: 2023)\nObjek / Object\nOhject',
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
        "rajah54", "Percubaan SMKA: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q15
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q15", 15, "Sederhana", "Mengaplikasi",
        'Manakah antara berikut menunjukkan\ngambarajah sinar yang betul1?\nWhich of the following shows the correct ray\ndiagram? (SMKA: 2023)',
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
        "", "Percubaan SMKA: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q16
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q16", 16, "Sederhana", "Mengaplikasi",
        'Rajah 55 menunjukkan satu objek diletakkan di\nhadapan scbuah kanta cembung.\nDiagram 55 shows an object placed in front of a\nconvex lens. (SMKA: 2023)\nKanta cembung\nComer lens\nObjek / Object\nObject\n2F\nAntara berikut, yang manakah ciri-ciri imej yang\nterbentuk\nWhich of the following are the characteristics of\ntheimage formed.\nI Maya III Nyata\nVirtual Real\nII Dibesarkan IV Tegak\nMagnified Upright',
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
                        "teks": "I dan III / I and III"
            },
            {
                        "id": "D",
                        "teks": "III dan IV / III and IV"
            }
],
        "rajah55", "Percubaan SMKA: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q17
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q17", 17, "Sederhana", "Mengaplikasi",
        'Rajah 56 menunjukkan sinar cahaya yang keluar\napabila melalui sebuah bongkah kaca semi\nbulatan.\nDiagram 56 shows the rays of light that came out\nwhen passing through a senmicircular glass block.\n(MRSM: 2023)\nApakah sudut tuju untuk pantulan dalam penuh\nberlaku?\nWhat is the incident angle for a total internal\nreflection to occur?',
        [
            {
                        "id": "A",
                        "teks": "35°"
            },
            {
                        "id": "B",
                        "teks": "420"
            },
            {
                        "id": "C",
                        "teks": "45°"
            },
            {
                        "id": "D",
                        "teks": "90°"
            }
],
        "rajah56", "Percubaan MRSM: 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q18
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q18", 18, "Sederhana", "Mengaplikasi",
        'Rajah 57 menunjukkan satu objek yang\ndiletakkan 15.0 cm dari sebuah kanta cembung\ndengan panjang fokus 10.0 cm.\nDiagram 57 shows an object that is placed 15.0\ncm from a convex lens with focal length of 10.0\nObjek\nObject\n15.0cm\n10.0 cm\nApakah ciri-ciri imej yang terbentuk?\nWhatare the characteristics of image formed?',
        [
            {
                        "id": "A",
                        "teks": "Maya, tegak dan dibesarkan / Virtual, upright and magnified"
            },
            {
                        "id": "B",
                        "teks": "Maya, tegak dan dikecilkan / Virtual, upright and diminished"
            },
            {
                        "id": "C",
                        "teks": "Nyata, songsang dan dibesarkan / Real, inverted and magnified"
            },
            {
                        "id": "D",
                        "teks": "Nyata, songsang dan dikecilkan / Real, inverted and diminished"
            }
],
        "rajah57", "Percubaan SPM 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q19
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q19", 19, "Sederhana", "Mengaplikasi",
        'Rajah 58 menunjukkan kedudukan imej\nterbentuk apabila objek diletakkan 6 cm di\nhadapan kanta cembung. Ketinggian objek dan\nimej masing-masing ialah 3 cm dan 12 cm.\nDiagram 58 shows an image formed when an\nobject placed 6 cm in front of a convex lens.\nHeight of the object and the image is 3 cm and 12\ncm respectively. (Kedah: 2022)\nKanla cembung\nObjel\nxlens\nObject\nIme\nBan\nImage\n12 cm\nBerapakah jarak antara objek dan imej, P?\nWhat is distance betweeneen object and image, P?',
        [
            {
                        "id": "A",
                        "teks": "30 cm"
            },
            {
                        "id": "B",
                        "teks": "24 cm"
            },
            {
                        "id": "C",
                        "teks": "12 cm"
            },
            {
                        "id": "D",
                        "teks": "10 cm"
            }
],
        "rajah58", "Percubaan Kedah: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q20
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q20", 20, "Sederhana", "Mengaplikasi",
        'Sudut genting bagi suatu bongkah kaca\nsemibulatan ialah 42". Rajah manakah yang\nmenunjukkan pantulan dalam penuh?',
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
        "", "Percubaan Melaka: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q21
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q21", 21, "Sederhana", "Mengaplikasi",
        'Suatu objek berada 25 cm di hadapan sebuah\nkanta cembung dengan panjang fokus 10 cm.\nBerapakah jarak imej yang terhasil?\nAn object is 25 cm in front of convex lens with a\nfocal length of 10 cm. What is the distance of the\nimage formed? (Melaka: 2022)',
        [
            {
                        "id": "A",
                        "teks": "16.7 cm"
            },
            {
                        "id": "B",
                        "teks": "20.0 cm"
            },
            {
                        "id": "C",
                        "teks": "25.0 cm"
            },
            {
                        "id": "D",
                        "teks": "35.0 cm"
            }
],
        "", "Percubaan Melaka: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q22
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q22", 22, "Sederhana", "Mengaplikasi",
        'Rajah manakah menunjukkan lintasan sinar\ncahaya yang betul?\nWhich diagram shows the correct path of light\nray? (MRSM: 2022)',
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
        "", "Percubaan MRSM: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q23
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q23", 23, "Sederhana", "Mengaplikasi",
        'Sudut genting bagi sempadan kaca-udara ialah c.\nRajah yang manakah menunjukkan laluan sinar\ncahaya yang betul?\nThe critical angle for a glass-air boundary is c.\nWhich diagram shows the correct path of the light\nray? (Pahang: 2022)',
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
        "", "Percubaan Pahang: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q24
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q24", 24, "Sederhana", "Mengaplikasi",
        'Rajah 59 menunjukkan sebiji guli berada di dasar\nsebuah bekas kaca. Imej guli itu hanya dapat\ndilihat setelah suatu cecair ditambah sedalam l0\ncm ke dalam bekas kaca berkenaan.\nDiagran 59 shows a marble at the base of a glass\ncontainer: The image of marble can only be seen\nafter a liquid is added to a depth of 10 cm into the\nglass container. (Perlis: 2022)\nPemerhati Pemerbati\nObserver Observer\nImej guli\nImageofmarble\nGuli -\nMarble Bekas kosong Bekas diisikan dengan cecair\nEnıplycontainer Conainerfilled withliquid\nJika indeks biasan cecair tersebut ialah 1.33,\nberapakah jarak imej guli dari kedudukan guli\nsebenar?\nIf the vefractive index of the liguid is 1.33, what\nis the distance of the image of marble from the\nactual position of the marble?',
        [
            {
                        "id": "A",
                        "teks": "1.00 cm"
            },
            {
                        "id": "B",
                        "teks": "2.48 cm"
            },
            {
                        "id": "C",
                        "teks": "7.52 cm"
            },
            {
                        "id": "D",
                        "teks": "13.33 cm"
            }
],
        "rajah59", "Percubaan Perlis: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q25
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q25", 25, "Sederhana", "Mengaplikasi",
        'Rajah 60 menunjukkan cahaya dari kotak sinar\nditujukan pada sebuah cermin satah di titik R dan\nterpantul pada objek Q.\nDiagram 60 shows light from a ray box directed\nat a plane mirror at point R and reflected at\nobject Q. (Perlis: 2022)\nObjek Q\nObjecQ\nCeminatah\nKotsk sinr Plene nrirnmr\nRn bos\nJika kotak sinar digerakkan I m secara menegak\nke bawah, berapa jauhkah objek Q perlu\ndigerakkan untuk memastikan cahaya masih\nterpantul pada objek Q?\nIf the ray box is moved I m vertically dowmward,\nhow far should the object Q be moved to ensure\nthat the light is still reflected toward object Q?',
        [
            {
                        "id": "A",
                        "teks": "Im keatas"
            },
            {
                        "id": "B",
                        "teks": "Im kebawah"
            },
            {
                        "id": "C",
                        "teks": "2 m ke atas I m upward 2 m upwvard"
            },
            {
                        "id": "D",
                        "teks": "2 m ke bawah I mdownward 2 m dowmward"
            }
],
        "rajah60", "Percubaan Perlis: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q26
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q26", 26, "Sederhana", "Mengaplikasi",
        'Berapakah pembesaran linear jika jarak objek\nadalah 4 cm dengan panjang fokus kanta cekung\nadalah 12 cm?\nWhat is the linear magnification if the object\ndistance is 4 cm with the focal length of he\nconcave lens is 12 cm? (Perlis: 2022)',
        [
            {
                        "id": "A",
                        "teks": "0.75"
            },
            {
                        "id": "B",
                        "teks": "0.95"
            },
            {
                        "id": "C",
                        "teks": "1.25"
            },
            {
                        "id": "D",
                        "teks": "2.50"
            }
],
        "", "Percubaan Perlis: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q27
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q27", 27, "Sederhana", "Mengaplikasi",
        'Rajah 61 menunjukkan sinar tuju ditujukan ke\natas satu permukaan kaca. Arah manakah sinar itu\nmerambat selepas melalui X?\nDiagram 6l shows an incident ray, is directed\ninto glass block. Which direction does the light\ntravels after through X? (Putrajaya: 2022)\nSinar tuju\nIncldent ray',
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
        "rajah61", "Percubaan Putrajaya: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q28
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q28", 28, "Sederhana", "Mengaplikasi",
        'Rajah 62 menunjukkan satu objek di hadapan\nsebuah kanta cembung.\nDiagram 62showsan object in front of a covex\nlens. (Putrajaya: 2022)\nf-15cm\n+\nU 2.5 cm\nHitung jarak imej.\nCalculate the image distance.',
        [
            {
                        "id": "A",
                        "teks": "25 cm"
            },
            {
                        "id": "B",
                        "teks": "30 cm"
            },
            {
                        "id": "C",
                        "teks": "45 cm"
            },
            {
                        "id": "D",
                        "teks": "50 cm"
            }
],
        "rajah62", "Percubaan Putrajaya: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q29
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q29", 29, "Sederhana", "Mengaplikasi",
        'Rajah manakah A, B, C atau D yang\nmenunjukkan takrifan sudut genting, c dengan\nbetul apabila cahaya merambat melalui dua\nmedium berbeza ketumpatan?\nWhich diagram A, B, C or D shows the correct\ndefinition of a critical angle, c when light\npropagate through two mediums of different\ndensities? (SBP: 2022)',
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
        "", "Percubaan SBP: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q30
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q30", 30, "Sederhana", "Mengaplikasi",
        '',
        [
            {
                        "id": "A",
                        "teks": "Nyata, tegak dan diperkecil / Real, upright and diminished"
            },
            {
                        "id": "B",
                        "teks": "Maya, tegak dan diperkecil / Virtual, upright and diminished"
            },
            {
                        "id": "C",
                        "teks": "Nyata, songsang dan diperkecil / Real, inverted and diminished"
            },
            {
                        "id": "D",
                        "teks": "Maya, songsang dan diperkecil / Virtual, inverted and diminished"
            }
],
        "", "Percubaan SPM 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q31
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q31", 31, "Sederhana", "Mengaplikasi",
        'Rajah 63 menunjukkan suatu objek di hadapan\nsatu kanta cembung.\nDiagram 63 shows an object in firont of a conver\nlens. (Selangor: Set 1: 2022)\nObjek\nObject\nTf= 10cm\n2F\nu=15cm\nBerapakah jarak imej?\nWhat is the image distance?',
        [
            {
                        "id": "A",
                        "teks": "15 cm"
            },
            {
                        "id": "B",
                        "teks": "20 cm"
            },
            {
                        "id": "C",
                        "teks": "25 cm"
            },
            {
                        "id": "D",
                        "teks": "30 cm"
            }
],
        "rajah63", "Percubaan Selangor: Set 1: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q32
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q32", 32, "Sederhana", "Mengaplikasi",
        'Rajah manakah yang menunjukkan suatu sinar\nmelalui suatu bongkah kaca semibulatan pada\nsudut genting 0?\nWhich diagran shows a ray passing through a\nsemicircular glass block at the critical angle 0?\n(SMKA: 2022)',
        [
            {
                        "id": "A",
                        "teks": "Rajah A / Diagram A"
            },
            {
                        "id": "B",
                        "teks": "Rajah B / Diagram B"
            },
            {
                        "id": "C",
                        "teks": "Rajah C / Diagram C"
            },
            {
                        "id": "D",
                        "teks": "Rajah D / Diagram D"
            }
],
        "", "Percubaan SMKA: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q33
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q33", 33, "Sederhana", "Mengaplikasi",
        'Rajalh 64 menunjukkan sebiji gelas diisi dengan\nminyak zaiton setinggi 9 cm yang mempunyai\nindeks biasan 1.47.\nDiagram 64 shows a glass filled with olive oil\nwith aheight of9 cm which hasa refractive inder\nPemerhati\nObserver\n9 cm\nBerapakah dalam ketara gelas tersebut yang\ndilihat oleh pemerhati?\nWhat is the apparent depth seen by the observer?',
        [
            {
                        "id": "A",
                        "teks": "6.12 cm"
            },
            {
                        "id": "B",
                        "teks": "7.11 cm"
            },
            {
                        "id": "C",
                        "teks": "13.23 cm"
            },
            {
                        "id": "D",
                        "teks": "16.33 cm"
            }
],
        "rajah64", "Percubaan SPM 2023", 2023
    ))

    # MODUL_T4_B6_K3_Q34
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q34", 34, "Sederhana", "Mengaplikasi",
        'Rajah 65 menunjukkan cahaya bergerak melalui\nsatu bongkah kaca.\nDiagram 65 shows a light ray passing through a\nglass block. (Terengganu: 2022)\nBongkohkaca\nGloss blcock\nBerapakah indeks biasan bongkah kaca itu?\nWhat is the refractive index of the glass block?',
        [
            {
                        "id": "A",
                        "teks": "1.89"
            },
            {
                        "id": "B",
                        "teks": "1.49"
            },
            {
                        "id": "C",
                        "teks": "1.39"
            },
            {
                        "id": "D",
                        "teks": "1.35"
            }
],
        "rajah65", "Percubaan Terengganu: 2022", 2022
    ))

    # MODUL_T4_B6_K3_Q35
    questions.append(make_b6_q(
        "MODUL_T4_B6_K3_Q35", 35, "Sederhana", "Mengaplikasi",
        'Rajah-rajah berikut menunjukkan lintasan sinar\ncahaya yang melalui sebuah kanta cekung.\nThefollowing diagramsshows path of light ray\nthrough a concave lens. (Terengganu: 2022)\nII\nLintasan sinar bias manakah adalah benar?\nWhich refiaction path is correct?',
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
        "", "Percubaan Terengganu: 2022", 2022
    ))

    return questions

if __name__ == "__main__":
    qs = get_k3_part1_questions()
    print(f"Loaded {len(qs)} questions from get_k3_part1_questions")
