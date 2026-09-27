#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dataset Konstruk 1: Mengingat
Tingkatan 4 Bab 6: Cahaya dan Optik
Adheres 100% to the 13 Golden Invariants.
"""

import sys
sys.path.insert(0, ".")
from scripts.build_dataset_helper_b6 import make_b6_q

def get_k1_questions():
    questions = []

    # MODUL_T4_B6_K1_Q01
    questions.append(make_b6_q(
        "MODUL_T4_B6_K1_Q01", 1, "Rendah", "Mengingat",
        'Apakah ciri-ciri imej yang dihasilkan oleh cermin\ncembung?\nWhat are the characteristics of image produced\nby a convex mirror? (Kelantan: 2023)',
        [
            {
                        "id": "A",
                        "teks": "Tegak dan nyata / Upright and real"
            },
            {
                        "id": "B",
                        "teks": "Tegak dan maya / Upright and virtual"
            },
            {
                        "id": "C",
                        "teks": "Songsang dan nyata / Inverted and real"
            },
            {
                        "id": "D",
                        "teks": "Songsang dan maya / Inverted and virtual"
            }
],
        "", "Percubaan Kelantan: 2023", 2023
    ))

    # MODUL_T4_B6_K1_Q02
    questions.append(make_b6_q(
        "MODUL_T4_B6_K1_Q02", 2, "Rendah", "Mengingat",
        'Berikut adalah formula bagi kanta nipis:\nFollowing is the formula for a thin lens:\n\n$$\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$$\n\n$f$ mewakili\n$f$ represents',
        [
            {
                        "id": "A",
                        "teks": "Jarak imej / Image distance"
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
        "", "Percubaan Kelantan: 2023", 2023
    ))

    return questions

if __name__ == "__main__":
    qs = get_k1_questions()
    print(f"Loaded {len(qs)} questions from get_k1_questions")
