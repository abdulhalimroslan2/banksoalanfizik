# -*- coding: utf-8 -*-
"""
Dataset Konstruk 1: Mengingat (8 Soalan)
Tingkatan 4 Bab 5: Gelombang (Waves)
"""

from scripts.build_dataset_helper_b5 import make_b5_q

def get_k1_questions():
    questions = []

    # Q01 (Page 1)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K1_Q01", 1, "Rendah", "Mengingat",
        "Antara yang berikut, manakah merupakan gelombang mekanikal?\nWhich of the following is mechanical waves?\n(Pahang: 2023)",
        [
            {"id": "A", "teks": "Sinar gama / Gamma ray"},
            {"id": "B", "teks": "Gelombang radio / Radio waves"},
            {"id": "C", "teks": "Gelombang cahaya / Light waves"},
            {"id": "D", "teks": "Gelombang seismik / Seismic waves"}
        ],
        "", "Percubaan Pahang 2023", 2023
    ))

    # Q02 (Page 1, Rajah 1)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K1_Q02", 2, "Rendah", "Mengingat",
        "Rajah menunjukkan suatu gelombang melintang.\nDiagram shows a transverse wave.\n(Perlis: 2023)\n\nApakah yang mewakili panjang gelombang?\nWhat represents the wavelength?",
        [
            {"id": "A", "teks": "P / P"},
            {"id": "B", "teks": "Q / Q"},
            {"id": "C", "teks": "R / R"},
            {"id": "D", "teks": "S / S"}
        ],
        "rajah1", "Percubaan Perlis 2023", 2023
    ))

    # Q03 (Page 1)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K1_Q03", 3, "Rendah", "Mengingat",
        "Manakah yang berikut merupakan sejenis gelombang mekanik?\nWhich of the following is a type of mechanical wave?\n(SBP: 2023)",
        [
            {"id": "A", "teks": "Gelombang air / Water wave"},
            {"id": "B", "teks": "Gelombang radio / Radio waves"},
            {"id": "C", "teks": "Gelombang mikro / Microwave"},
            {"id": "D", "teks": "Gelombang cahaya / Light waves"}
        ],
        "", "Percubaan SBP 2023", 2023
    ))

    # Q04 (Page 1)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K1_Q04", 4, "Rendah", "Mengingat",
        "Nyatakan satu ciri gelombang elektromagnet.\nState one characteristic of electromagnetic waves.\n(Terengganu: 2023)",
        [
            {"id": "A", "teks": "Tidak boleh merambat melalui vakum / Cannot propagate through a vacuum"},
            {"id": "B", "teks": "Tidak memerlukan medium perambatan / Does not require a propagation medium"},
            {"id": "C", "teks": "Bergerak dengan laju yang lebih besar dalam medium / Move with the greater speed in the medium"},
            {"id": "D", "teks": "Hanya menunjukkan fenomena pantulan dan pembiasan sahaja / Shows the phenomenon reflection and refraction only"}
        ],
        "", "Percubaan Terengganu 2023", 2023
    ))

    # Q05 (Page 1, Rajah 2)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K1_Q05", 5, "Rendah", "Mengingat",
        "Rajah menunjukkan spektrum elektromagnet.\nDiagram shows an electromagnetic spectrum.\n(Kedah: 2022)\n\nApakah gelombang Q?\nWhat is wave Q?",
        [
            {"id": "A", "teks": "Gelombang ultrasonik / Ultrasonic wave"},
            {"id": "B", "teks": "Sinar inframerah / Infrared ray"},
            {"id": "C", "teks": "Sinar ultraungu / Ultraviolet ray"},
            {"id": "D", "teks": "Sinar gama / Gamma ray"}
        ],
        "rajah2", "Percubaan Kedah 2022", 2022
    ))

    # Q06 (Page 1)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K1_Q06", 6, "Rendah", "Mengingat",
        "Antara gelombang berikut, yang manakah gelombang membujur?\nWhich of the following waves is longitudinal wave?\n(Terengganu: 2021)",
        [
            {"id": "A", "teks": "Gelombang radio / Radio waves"},
            {"id": "B", "teks": "Gelombang ultrasonik / Ultrasonic wave"},
            {"id": "C", "teks": "Gelombang air / Water wave"},
            {"id": "D", "teks": "Gelombang cahaya / Light waves"}
        ],
        "", "Percubaan Terengganu 2021", 2021
    ))

    # Q07 (Page 1-2, Rajah 3)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K1_Q07", 7, "Rendah", "Mengingat",
        "Rajah menunjukkan suatu spektrum elektromagnet.\nDiagram shows an electromagnetic spectrum.\n(Perlis: 2021)\n\nApakah yang mewakili P, Q dan R?\nWhat represents P, Q and R?",
        [
            {"id": "A", "teks": "P: Inframerah (Infrared) | Q: Ultraungu (Ultraviolet) | R: Sinar gama (Gamma ray)"},
            {"id": "B", "teks": "P: Ultraungu (Ultraviolet) | Q: Sinar gama (Gamma ray) | R: Inframerah (Infrared)"},
            {"id": "C", "teks": "P: Ultraungu (Ultraviolet) | Q: Inframerah (Infrared) | R: Sinar gama (Gamma ray)"},
            {"id": "D", "teks": "P: Sinar gama (Gamma ray) | Q: Inframerah (Infrared) | R: Ultraungu (Ultraviolet)"}
        ],
        "rajah3", "Percubaan Perlis 2021", 2021
    ))

    # Q08 (Page 2, Jadual 1)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K1_Q08", 8, "Rendah", "Mengingat",
        "Jadual menunjukkan sebahagian daripada spektrum gelombang elektromagnet.\nTable shows a part of an electromagnetic wave spectrum.\n(SPM: 2023)\n\nAntara yang berikut, yang manakah betul?\nWhich of the following is correct?",
        [
            {"id": "A", "teks": "Q: Gelombang mikro (Microwave) | R: Ultra ungu (Ultraviolet)"},
            {"id": "B", "teks": "Q: Gelombang radio (Radio wave) | R: Gelombang mikro (Microwave)"},
            {"id": "C", "teks": "Q: Sinar gama (Gamma ray) | R: Gelombang radio (Radio wave)"},
            {"id": "D", "teks": "Q: Ultra ungu (Ultraviolet) | R: Sinar gama (Gamma ray)"}
        ],
        "jadual1", "SPM 2023", 2023
    ))

    return questions
