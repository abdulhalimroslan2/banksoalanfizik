#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dataset Konstruk 4: Menganalisis
Tingkatan 4 Bab 6: Cahaya dan Optik
Adheres 100% to the 13 Golden Invariants.
"""

import sys
sys.path.insert(0, ".")
from scripts.build_dataset_helper_b6 import make_b6_q

def get_k4_questions():
    questions = []

    # MODUL_T4_B6_K4_Q01
    questions.append(make_b6_q(
        "MODUL_T4_B6_K4_Q01", 1, "Tinggi", "Menganalisis",
        'Rajah 88 (a) dan Rajah 88 (b) menunjukkan\nseekor ikan melihat seekor kumbang pada\nkedudukan yang berbeza.\nDiagram 88 (a) and Diagram 88 (b) show a fish\nlooking at a beetle in different positions.\n(Pulau Pinang: 2023)\nImej kumbang Kumbang\nImageofbeele\nBeetle Beete\nIkan Ikan\nFish Fish\nRajah 88 (a) Rajah 88 (b)\nDiagram 88 (a) Diagram 88 (b)\nMengapakah ikan dalam Rajah 88 (b) melihat\nkumbang dan imejnya berada pada kedudukan\nyang sama?\nWhy does the fish in Diagram 88 (b) see the\nbeetle and its image in the same position?',
        [
            {
                        "id": "A",
                        "teks": "Ketumpatan air dalam Rajah 88 (b) lebih besar. The density of water in Diagram 88 (b) is / greater."
            },
            {
                        "id": "B",
                        "teks": "Penglihatan dalam Rajah 88 (b) berlaku pada sudutnomal. The sighting in Diagram 88 (b) is done at an angle to the normal."
            },
            {
                        "id": "C",
                        "teks": "Jarak antara ikan dan kumbang dalam Rajah The distance betveen the fish and the beetle in Diagram 88 (b) is closer."
            },
            {
                        "id": "D",
                        "teks": "Kedalaman ikan dari permukaan air dalam Rajah 88 (b) lebih besar. The depth of the fish rom the surface of the water in Diagrann 88 (b) is / greater."
            }
],
        "", "Percubaan Pulau Pinang: 2023", 2023
    ))

    # MODUL_T4_B6_K4_Q02
    questions.append(make_b6_q(
        "MODUL_T4_B6_K4_Q02", 2, "Tinggi", "Menganalisis",
        'Rajah 89 menunjukkan kanta cembung yang\ndigunakan dalam sebuah teleskop astronomi.\nJarak fokus kanta objektif dan kanta mata\nmasing-masing adalah f dan fe, manakala L\nadalah jarak antara kanta objektif dan kanta mata.\nDiagram 89 shows a convex lens used in an\nastronomy telescope. The focal length of the\nobjective and eye lenses are fo and fe respectively,\nwhile L is the distance betweeneen the objective lens\nand eyepiece lens. (SBP: 2022)\nKanta objektif\nObjective lens\nKantarmata\n|Eyepiece lens\nYang manakah antara penerangan berikut adalah\nbetul?\nWhich of the following explanations is correct?\nSpesifikasi Sebab\nSpecification Reason\nImej akhir yang paling\ntajam dan paling cerah',
        [
            {
                        "id": "A",
                        "teks": "L > fo + fe : Imej akhir yang paling tajam dan paling cerah terhasil / The final image produced is the sharpest and brightest"
            },
            {
                        "id": "B",
                        "teks": "fo > fe : Pembesaran linear imej kecil / Small linear magnification of the image"
            },
            {
                        "id": "C",
                        "teks": "L = fo + fe : Imej akhir yang paling tajam dan paling cerah terhasil / The final image produced is the sharpest and brightest"
            },
            {
                        "id": "D",
                        "teks": "fo < fe : Pembesaran linear imej besar / Big linear magnification of the image"
            }
],
        "rajah89", "Percubaan SBP: 2022", 2022
    ))

    # MODUL_T4_B6_K4_Q03
    questions.append(make_b6_q(
        "MODUL_T4_B6_K4_Q03", 3, "Tinggi", "Menganalisis",
        'Rajah 90 (a) dan Rajah 90 (b) menunjukkan rajah\nsinar kanta cembung dengan panjang fokus yang\nsama dalam sebuah kamera yang menghasilkan\nsatu imej dengan ketinggian, h₁ dan h2.\nDiagrams 90 (a) dan Diagram 90 (b) show a ray\ndiagram of convex lens with a same focal length\nin a camera which produces an image of height,\nh₁ and h2. (SPM: 2021)\nObjek / Object h,\nObject\nRajah 90 (a) / Diagram 90 (a)\nObjek\nObject\nRajah 90 (b) / Diagram 90 (b)\nHubungan yang manakah betul?\nWhich relationship is correct?\nJarak objek Ketinggian imej\nObject distance Height ofimage\nSama Bertambah\nSame Increases\nBertambah Sama\nIncreases Same\nBerkurang Berkurang\nDecreases Decreases\nD Berkurang Bertambah\nDecreases Increases',
        [
            {
                        "id": "A",
                        "teks": "Jarak objek sama, Ketinggian imej bertambah / Object distance same, Image height increases"
            },
            {
                        "id": "B",
                        "teks": "Jarak objek bertambah, Ketinggian imej sama / Object distance increases, Image height same"
            },
            {
                        "id": "C",
                        "teks": "Jarak objek berkurang, Ketinggian imej berkurang / Object distance decreases, Image height decreases"
            },
            {
                        "id": "D",
                        "teks": "Jarak objek berkurang, Ketinggian imej bertambah / Object distance decreases, Image height increases"
            }
],
        "rajah90", "Percubaan SPM: 2021", 2021
    ))

    # MODUL_T4_B6_K4_Q04
    questions.append(make_b6_q(
        "MODUL_T4_B6_K4_Q04", 4, "Tinggi", "Menganalisis",
        'Rajah 91 (a) dan Rajah 91 (b) menunjukkan imej\ndari kanta kamera yang mempunyai panjang\nfokus yang sama.\nDiagrams 91 (a) and91 (b) show the images from\na camera lens of thesame focal length.\n(SPM: 2021)\nRajah 91 (a) Rajah 91 (b)\nDiagram 91 (a) Diagran 91 (b)\nPasangan kedudukan objek manakah yang betul?\nWhich pair of position ofan object is correct?\nRajah 91 (a) Rajah 91 (b)\nDiagram 91 (a) Diagram 91 (b)',
        [
            {
                        "id": "A",
                        "teks": "Rajah 91(a): u = 2f, Rajah 91(b): f < u < 2f / Diagram 91(a): u = 2f, Diagram 91(b): f < u < 2f"
            },
            {
                        "id": "B",
                        "teks": "Rajah 91(a): u > 2f, Rajah 91(b): u = 2f / Diagram 91(a): u > 2f, Diagram 91(b): u = 2f"
            },
            {
                        "id": "C",
                        "teks": "Rajah 91(a): u > 2f, Rajah 91(b): f < u < 2f / Diagram 91(a): u > 2f, Diagram 91(b): f < u < 2f"
            },
            {
                        "id": "D",
                        "teks": "Rajah 91(a): f < u < 2f, Rajah 91(b): u > 2f / Diagram 91(a): f < u < 2f, Diagram 91(b): u > 2f"
            }
],
        "rajah91", "Percubaan SPM: 2021", 2021
    ))

    return questions

if __name__ == "__main__":
    qs = get_k4_questions()
    print(f"Loaded {len(qs)} questions from get_k4_questions")
