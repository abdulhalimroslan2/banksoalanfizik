# -*- coding: utf-8 -*-
"""
Dataset Konstruk 4: Menganalisis (7 Soalan)
Tingkatan 4 Bab 5: Gelombang (Waves)
"""

from scripts.build_dataset_helper_b5 import make_b5_q

def get_k4_questions():
    questions = []

    # Q01 (Page 36, Rajah 107)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K4_Q01", 1, "Tinggi", "Menganalisis",
        """Rajah menunjukkan gelombang air dibiaskan apabila merambat dari kawasan X ke kawasan Y.
Diagram shows water waves refracted when it propagates from region X to region Y.
(MRSM: 2023)

Antara berikut, pernyataan manakah yang betul?
Which of the following statements is correct?""",
        [
            {"id": "A", "teks": "Kawasan X adalah lebih dalam / Region X is deeper"},
            {"id": "B", "teks": "Kawasan Y adalah lebih dalam / Region Y is deeper"},
            {"id": "C", "teks": "Frekuensi air di kawasan X adalah lebih tinggi / Water frequency at region X is higher"},
            {"id": "D", "teks": "Frekuensi air di kawasan Y adalah lebih tinggi / Water frequency at region Y is higher"}
        ],
        "rajah107", "Percubaan MRSM 2023", 2023
    ))

    # Q02 (Page 36-37, Rajah 108)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K4_Q02", 2, "Tinggi", "Menganalisis",
        """Rajah (a) menunjukkan corak interferens daripada eksperimen dwi-celah Young menggunakan sumber cahaya kuning. Rajah (b) menunjukkan corak interferens daripada eksperimen yang sama menggunakan sumber cahaya hijau.
Diagram (a) shows the interference pattern from Young's double-slit experiment using a yellow light source. Diagram (b) shows the interference pattern from the same experiment using a green light source.
(MRSM: 2023)

Hubungan manakah yang menerangkan situasi di atas?
Which relationship explains the above situation?""",
        [
            {"id": "A", "teks": "Panjang gelombang bertambah, jarak x bertambah / Wavelength increases, distance x increases"},
            {"id": "B", "teks": "Panjang gelombang bertambah, jarak x berkurang / Wavelength increases, distance x decreases"},
            {"id": "C", "teks": "Kelajuan gelombang berkurang, jarak x bertambah / Speed of wave decreases, distance x increases"},
            {"id": "D", "teks": "Kelajuan gelombang berkurang, jarak x berkurang / Speed of wave decreases, distance x decreases"}
        ],
        "rajah108", "Percubaan MRSM 2023", 2023
    ))

    # Q03 (Page 37, Rajah 109)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K4_Q03", 3, "Tinggi", "Menganalisis",
        """Rajah menunjukkan suatu corak gelombang apabila seorang murid membaling seketul batu ke dalam air.
Diagram shows a pattern of waves when a student threw a stone into water.
(Negeri Sembilan: 2022)

Perbandingan manakah yang benar mengenai kawasan M dan kawasan N?
Which comparison is true about area M and area N?""",
        [
            {"id": "A", "teks": "Kawasan M lebih dalam daripada kawasan N / Area M is deeper than area N"},
            {"id": "B", "teks": "Halaju gelombang air di kawasan M lebih kecil daripada kawasan N / Velocity of water waves at area M is smaller than area N"},
            {"id": "C", "teks": "Panjang gelombang air di kawasan M lebih besar daripada kawasan N / Wavelength of water waves at area M is bigger than area N"},
            {"id": "D", "teks": "Frekuensi gelombang air di kawasan M lebih tinggi daripada kawasan N / Frequency of water waves at area M is higher than area N"}
        ],
        "rajah109", "Percubaan Negeri Sembilan 2022", 2022
    ))

    # Q04 (Page 37)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K4_Q04", 4, "Tinggi", "Menganalisis",
        """Gelombang bunyi dipantulkan daripada dinding konkrit. Perbandingan manakah yang betul bagi gelombang bunyi terpantul dengan gelombang bunyi tuju?
A sound wave reflected from a concrete wall. Which comparison is correct about the reflected sound wave and the incident sound wave?
(Pahang: 2022)""",
        [
            {"id": "A", "teks": "Laju bagi gelombang tuju dengan gelombang terpantul adalah sama / The speed of the incident wave and the reflected wave is the same"},
            {"id": "B", "teks": "Frekuensi gelombang tuju adalah lebih kecil daripada gelombang terpantul / The frequency of the incident wave is less than the reflected wave"},
            {"id": "C", "teks": "Sudut tuju gelombang adalah lebih besar daripada sudut pantulan gelombang / The angle of the incident wave is greater than the angle of the reflected wave"},
            {"id": "D", "teks": "Panjang gelombang bagi gelombang tuju adalah lebih pendek daripada gelombang terpantul / The wavelength of the incident wave is shorter than the reflected wave"}
        ],
        "", "Percubaan Pahang 2022", 2022
    ))

    # Q05 (Page 37-38, Rajah 110)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K4_Q05", 5, "Tinggi", "Menganalisis",
        """Rajah (a) menunjukkan satu susunan radas eksperimen dwicelah Young. Rajah (b) menunjukkan corak interferens yang dihasilkan oleh tiga sumber cahaya monokromatik berbeza X, Y dan Z.
Diagram (a) shows an apparatus set-up of Young's double slit experiment. Diagram (b) shows the interference pattern produced on the screen by three different monochromatic light sources X, Y and Z.
(Pahang: 2022)

Apakah warna X, Y dan Z?
What are the colours of X, Y and Z?""",
        [
            {"id": "A", "teks": "X: Hijau | Y: Merah | Z: Kuning / X: Green | Y: Red | Z: Yellow"},
            {"id": "B", "teks": "X: Merah | Y: Biru | Z: Kuning / X: Red | Y: Blue | Z: Yellow"},
            {"id": "C", "teks": "X: Merah | Y: Kuning | Z: Biru / X: Red | Y: Yellow | Z: Blue"},
            {"id": "D", "teks": "X: Biru | Y: Kuning | Z: Merah / X: Blue | Y: Yellow | Z: Red"}
        ],
        "rajah110", "Percubaan Pahang 2022", 2022
    ))

    # Q06 (Page 38, Rajah 111)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K4_Q06", 6, "Tinggi", "Menganalisis",
        """Rajah menunjukkan suatu spektrum elektromagnet.
Diagram shows an electromagnetic spectrum.
(SBP: 2023)

Apakah komponen-komponen spektrum elektromagnet pada X dan Y?
What are the components of electromagnetic spectrum at X and Y?""",
        [
            {"id": "A", "teks": "X: Sinar-X | Y: Gelombang mikro / X: X-ray | Y: Microwave"},
            {"id": "B", "teks": "X: Inframerah | Y: Ultraungu / X: Infrared | Y: Ultraviolet"},
            {"id": "C", "teks": "X: Ultraungu | Y: Inframerah / X: Ultraviolet | Y: Infrared"},
            {"id": "D", "teks": "X: Gelombang mikro | Y: Sinar-X / X: Microwave | Y: X-ray"}
        ],
        "rajah111", "Percubaan SBP 2023", 2023
    ))

    # Q07 (Page 38, Rajah 112)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K4_Q07", 7, "Tinggi", "Menganalisis",
        """Rajah menunjukkan pemasangan radas untuk mengkaji kesan resonans dengan menggunakan bandul Barton.
Diagram shows the setup of apparatus to study the effect of resonance by using Barton's pendulum.
(SPM: 2021)

Berdasarkan pemerhatian tersebut, pernyataan yang manakah adalah betul?
Based on the observation, which of the following statements is correct?""",
        [
            {"id": "A", "teks": "Bandul J berayun lebih laju kerana mempunyai panjang tali bandul yang lebih pendek / Pendulum J oscillates faster because it has a shorter length of the pendulum string"},
            {"id": "B", "teks": "Bandul K berayun dengan amplitud maksimum kerana frekuensi aslinya adalah sama dengan frekuensi bandul X / Pendulum K oscillates with maximum amplitude because its natural frequency is the same with the frequency of pendulum X"},
            {"id": "C", "teks": "Bandul L berayun lebih laju kerana menyerap tenaga yang dibawa oleh bandul J, K dan M / Pendulum L oscillates faster because it absorbs the energy carried by pendulums J, K and M"},
            {"id": "D", "teks": "Bandul M berayun dengan amplitud maksimum kerana tenaga yang diserap adalah maksimum / Pendulum M oscillates with maximum amplitude because the energy absorbed is maximum"}
        ],
        "rajah112", "SPM 2021", 2021
    ))

    return questions

if __name__ == '__main__':
    qs = get_k4_questions()
    print(f'Successfully loaded {len(qs)} Konstruk 4 questions.')
