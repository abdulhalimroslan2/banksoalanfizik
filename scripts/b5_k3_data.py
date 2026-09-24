# -*- coding: utf-8 -*-
"""
Dataset Konstruk 3: Mengaplikasi (30 Soalan)
Tingkatan 4 Bab 5: Gelombang (Waves)
"""

from scripts.build_dataset_helper_b5 import make_b5_q

def get_k3_questions():
    questions = []

    # Q01 (Page 29, Rajah 82)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q01", 1, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan gelombang bunyi yang dihasilkan oleh sebuah tala bunyi. Laju gelombang bunyi di dalam udara ialah 330 m s⁻¹.
Diagram shows sound waves produced by a tuning fork. The speed of the sound waves in air is 330 m s⁻¹.
(Kelantan: 2023)

Berapakah frekuensi gelombang bunyi tersebut?
What is the frequency of the sound waves?""",
        [
            {"id": "A", "teks": "9.7 Hz / 9.7 Hz"},
            {"id": "B", "teks": "275.0 Hz / 275.0 Hz"},
            {"id": "C", "teks": "366.7 Hz / 366.7 Hz"},
            {"id": "D", "teks": "396.0 Hz / 396.0 Hz"}
        ],
        "rajah82", "Percubaan Kelantan 2023", 2023
    ))

    # Q02 (Page 29, Rajah 83)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q02", 2, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan satu gelombang membujur merambat dari P ke Q.
Diagram shows a longitudinal wave propagating from P to Q.
(Melaka: 2023)

Antara berikut, yang manakah benar mengenai arah getaran dan arah pemindahan tenaga antara P dan Q?
Which of the following is true about the direction of vibration and the direction of energy transfer between P and Q?""",
        [
            {"id": "A", "teks": "Arah getaran: ⟵⟶ (Selari) | Arah pemindahan tenaga: ⟶ (Dari P ke Q) / Direction of vibration: ⟵⟶ (Parallel) | Direction of energy: ⟶ (From P to Q)"},
            {"id": "B", "teks": "Arah getaran: ⟵⟶ (Selari) | Arah pemindahan tenaga: ⟵ (Dari Q ke P) / Direction of vibration: ⟵⟶ (Parallel) | Direction of energy: ⟵ (From Q to P)"},
            {"id": "C", "teks": "Arah getaran: ↕ (Serenjang) | Arah pemindahan tenaga: ⟶ (Dari P ke Q) / Direction of vibration: ↕ (Perpendicular) | Direction of energy: ⟶ (From P to Q)"},
            {"id": "D", "teks": "Arah getaran: ↕ (Serenjang) | Arah pemindahan tenaga: ⟵ (Dari Q ke P) / Direction of vibration: ↕ (Perpendicular) | Direction of energy: ⟵ (From Q to P)"}
        ],
        "rajah83", "Percubaan Melaka 2023", 2023
    ))

    # Q03 (Page 29-30, Rajah 84)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q03", 3, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan corak interferens bagi gelombang air dari dua sumber, S₁ dan S₂ yang koheren.
Diagram shows the interference patterns for water waves from two coherent sources, S₁ and S₂.
(Melaka: 2023)

Antara yang berikut, yang manakah menunjukkan superposisi gelombang pada titik Y?
Which of the following shows the superposition of the waves at point Y?""",
        [
            {"id": "A", "teks": "Puncak + Puncak / Crest + Crest"},
            {"id": "B", "teks": "Puncak + Garis mendatar / Crest + Flat line"},
            {"id": "C", "teks": "Puncak + Palung / Crest + Trough"},
            {"id": "D", "teks": "Garis mendatar + Garis mendatar / Flat line + Flat line"}
        ],
        "rajah84", "Percubaan Melaka 2023", 2023
    ))

    # Q04 (Page 30, Rajah 85)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q04", 4, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan keratan rentas sebuah tangki riak dengan dasar condong dengan penggetar satah digetarkan.
Diagram shows a cross sectional of ripple tank with a sloping base and a plane dipper being vibrated.
(Negeri Sembilan: 2023)

Antara corak gelombang berikut, yang manakah boleh diperhatikan di atas skrin?
Which of the following wave patterns can be seen on the screen?""",
        [
            {"id": "A", "teks": "Jarak antara muka gelombang bertambah dari kiri ke kanan (panjang gelombang bertambah di kawasan dalam) / Distance between wavefronts increases from left to right (wavelength increases in deep region)"},
            {"id": "B", "teks": "Jarak antara muka gelombang adalah seragam dari kiri ke kanan / Distance between wavefronts is uniform from left to right"},
            {"id": "C", "teks": "Jarak antara muka gelombang berkurang dari kiri ke kanan (panjang gelombang berkurang di kawasan dalam) / Distance between wavefronts decreases from left to right (wavelength decreases in deep region)"},
            {"id": "D", "teks": "Jarak antara muka gelombang paling rapat di tengah-tengah / Distance between wavefronts is closest in the middle"}
        ],
        "rajah85", "Percubaan Negeri Sembilan 2023", 2023
    ))

    # Q05 (Page 30, Rajah 86)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q05", 5, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan dua denyutan gelombang yang berada sama jarak dari X.
Diagram shows two wave pulses are at the same distance from X.
(Negeri Sembilan: 2023)

Bentuk gelombang yang manakah diperhatikan di X?
Which waveform is observed at X?""",
        [
            {"id": "A", "teks": "Palung dengan amplitud paduan 2a / Trough with resultant amplitude 2a"},
            {"id": "B", "teks": "Puncak dengan amplitud paduan 2a / Crest with resultant amplitude 2a"},
            {"id": "C", "teks": "Garis lurus mendatar (amplitud paduan sifar akibat interferens memusnah) / Flat horizontal line (zero resultant amplitude due to destructive interference)"},
            {"id": "D", "teks": "Puncak dan palung bersebelahan / Adjacent crest and trough"}
        ],
        "rajah86", "Percubaan Negeri Sembilan 2023", 2023
    ))

    # Q06 (Page 30, Rajah 87)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q06", 6, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan susunan radas yang digunakan dalam eksperimen interferens bunyi. Bunyi yang kuat dan lemah didengar berselang-seli.
Diagram shows the arrangement of the apparatus used in the sound interference experiment. Loud and weak sounds are heard alternately.
(Terengganu: 2023)

Kira panjang gelombang bagi bunyi yang digunakan.
Calculate the wavelength of the sound used.""",
        [
            {"id": "A", "teks": "0.6 m / 0.6 m"},
            {"id": "B", "teks": "1.2 m / 1.2 m"},
            {"id": "C", "teks": "1.5 m / 1.5 m"},
            {"id": "D", "teks": "1.8 m / 1.8 m"}
        ],
        "rajah87", "Percubaan Terengganu 2023", 2023
    ))

    # Q07 (Page 31, Rajah 88)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q07", 7, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan seorang lelaki menggunakan satu alat untuk mengukur kedalaman sebuah telaga. Masa yang diambil untuk gelombang bunyi yang dipancarkan kembali ke penerima ialah 0.05 s.
Diagram shows a man using a device to measure the depth of a well. The time taken for the emitted sound wave to return to the receiver is 0.05 s.
(MRSM: 2023)

Berapakah kedalaman perigi itu? [Kelajuan bunyi di udara, v = 340 m s⁻¹]
What is the depth of the well? [Speed of sound in air, v = 340 m s⁻¹]""",
        [
            {"id": "A", "teks": "340.00 m / 340.00 m"},
            {"id": "B", "teks": "17.00 m / 17.00 m"},
            {"id": "C", "teks": "8.50 m / 8.50 m"},
            {"id": "D", "teks": "4.25 m / 4.25 m"}
        ],
        "rajah88", "Percubaan MRSM 2023", 2023
    ))

    # Q08 (Page 31)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q08", 8, "Tinggi", "Mengaplikasi",
        """Rajah manakah yang betul apabila gelombang air merambat dari kawasan dalam ke kawasan cetek merentasi sempadan condong?
Which diagram is correct when water wave propagates from deep region to shallow region across a slanted boundary?
(Kelantan: 2022)""",
        [
            {"id": "A", "teks": "Panjang gelombang bertambah dan membengkok menjauhi garis normal / Wavelength increases and bends away from normal"},
            {"id": "B", "teks": "Panjang gelombang bertambah dan arah perambatan tidak terbias / Wavelength increases and direction of propagation is not refracted"},
            {"id": "C", "teks": "Panjang gelombang berkurang tetapi membengkok menjauhi garis normal / Wavelength decreases but bends away from normal"},
            {"id": "D", "teks": "Panjang gelombang berkurang (muka gelombang lebih rapat) dan membengkok mendekati garis normal / Wavelength decreases (wavefronts closer) and bends towards normal"}
        ],
        "", "Percubaan Kelantan 2022", 2022
    ))

    # Q09 (Page 31)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q09", 9, "Tinggi", "Mengaplikasi",
        """Rajah manakah menunjukkan interferens memusnah berlaku?
Which diagram shows destructive interference occurs?
(Kelantan: 2022)""",
        [
            {"id": "A", "teks": "Dua puncak gelombang bertembung (puncak + puncak) / Two wave crests meeting (crest + crest)"},
            {"id": "B", "teks": "Dua palung gelombang bertembung (palung + palung) / Two wave troughs meeting (trough + trough)"},
            {"id": "C", "teks": "Satu puncak dan satu palung bertembung (puncak + palung menghasilkan sesaran sifar) / A crest and a trough meeting (crest + trough producing zero displacement)"},
            {"id": "D", "teks": "Dua denyutan gelombang bergerak menjauhi satu sama lain / Two wave pulses moving away from each other"}
        ],
        "", "Percubaan Kelantan 2022", 2022
    ))

    # Q10 (Page 31, Rajah 89)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q10", 10, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan sebuah tala bunyi diketuk untuk menghasilkan gelombang bunyi.
Diagram shows a tuning fork tapped to produce sound waves.
(Melaka: 2022)

Berapakah amplitud dan panjang gelombang bunyi itu?
What is the amplitude and the wavelength of the sound?""",
        [
            {"id": "A", "teks": "Amplitud: 3 mm | Panjang gelombang: 60 cm / Amplitude: 3 mm | Wavelength: 60 cm"},
            {"id": "B", "teks": "Amplitud: 3 mm | Panjang gelombang: 120 cm / Amplitude: 3 mm | Wavelength: 120 cm"},
            {"id": "C", "teks": "Amplitud: 6 mm | Panjang gelombang: 60 cm / Amplitude: 6 mm | Wavelength: 60 cm"},
            {"id": "D", "teks": "Amplitud: 6 mm | Panjang gelombang: 120 cm / Amplitude: 6 mm | Wavelength: 120 cm"}
        ],
        "rajah89", "Percubaan Melaka 2022", 2022
    ))

    # Q11 (Page 31, Rajah 90)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q11", 11, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan sebuah kapal sedang menghantar isyarat ultrasonik ke dasar laut.
Diagram shows a ship is sending out a pulse of ultrasound to the seabed.
(Melaka: 2022)

Jika gelombang ultrabunyi yang dipantulkan diterima selepas 0.36 s, apakah kedalaman laut itu?
[Anggap: halaju bunyi dalam air laut = 1500 m s⁻¹]
If the reflected ultrasound is received 0.36 s later, what is the depth of the sea?
[Assume: the speed of sound in sea water = 1500 m s⁻¹]""",
        [
            {"id": "A", "teks": "9.3 m / 9.3 m"},
            {"id": "B", "teks": "270 m / 270 m"},
            {"id": "C", "teks": "540 m / 540 m"},
            {"id": "D", "teks": "4 166 m / 4 166 m"}
        ],
        "rajah90", "Percubaan Melaka 2022", 2022
    ))

    # Q12 (Page 32, Rajah 91)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q12", 12, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan dua gelombang bergerak pada arah yang bertentangan dan bertemu di titik R.
Diagram shows two waves moving in the opposite direction and meeting at point R.
(Perlis: 2022)

Berapakah amplitud paduan gelombang pada titik R?
What is the resultant amplitude of the wave at point R?""",
        [
            {"id": "A", "teks": "0 / 0"},
            {"id": "B", "teks": "a / a"},
            {"id": "C", "teks": "2a / 2a"},
            {"id": "D", "teks": "3a / 3a"}
        ],
        "rajah91", "Percubaan Perlis 2022", 2022
    ))

    # Q13 (Page 32, Rajah 92)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q13", 13, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan corak interferens gelombang air yang dihasilkan dalam tangki riak.
Diagram shows the interference pattern of water waves produced in a ripple tank.
(Selangor: Set 1: 2022)

Berdasarkan Rajah, graf yang manakah mewakili sesaran titik-titik, P, Q, R, S dan T pada suatu masa tertentu?
Based on Diagram, which graph represents the displacement of the points, P, Q, R, S and T at a given time?""",
        [
            {"id": "A", "teks": "Puncak pada Q, palung pada S / Peak at Q, trough at S"},
            {"id": "B", "teks": "Garis lurus mendatar pada kedudukan keseimbangan / Straight horizontal line at equilibrium position"},
            {"id": "C", "teks": "Puncak pada P dan T, palung pada R, sesaran sifar pada Q dan S / Peak at P and T, trough at R, zero displacement at Q and S"},
            {"id": "D", "teks": "Palung pada P dan T, puncak pada R / Trough at P and T, peak at R"}
        ],
        "rajah92", "Percubaan Selangor Set 1 2022", 2022
    ))

    # Q14 (Page 32, Rajah 93)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q14", 14, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan corak interferens yang diperoleh dalam eksperimen dwicelah Young menggunakan cahaya monokromatik. Jarak pemisah dwicelah ialah 0.5 mm dan jarak antara dwicelah dengan skrin ialah 3 m.
Diagram shows the interference pattern which is obtained from a Young's double slit experiment using monochromatic light. The double slit is 0.5 mm and the distance between the double slit and the screen is 3 m.
(Selangor: Set 2: 2022)

Jika panjang gelombang cahaya monokromatik ialah 6.5 × 10⁻⁷ m, berapakah nilai y?
If the wavelength of the monochromatic light is 6.5 × 10⁻⁷ m, what is the value of y?""",
        [
            {"id": "A", "teks": "1.3 × 10⁻³ m / 1.3 × 10⁻³ m"},
            {"id": "B", "teks": "3.9 × 10⁻³ m / 3.9 × 10⁻³ m"},
            {"id": "C", "teks": "1.56 × 10⁻² m / 1.56 × 10⁻² m"},
            {"id": "D", "teks": "1.17 × 10⁻² m / 1.17 × 10⁻² m"}
        ],
        "rajah93", "Percubaan Selangor Set 2 2022", 2022
    ))

    # Q15 (Page 32)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q15", 15, "Tinggi", "Mengaplikasi",
        """Rajah yang manakah menunjukkan corak pantulan gelombang air yang betul bagi gelombang satah yang menuju ke pemantul satah condong?
Which diagram shows the correct pattern of reflected water waves for plane waves incident upon a slanted plane reflector?
(SMKA: 2022)""",
        [
            {"id": "A", "teks": "Panjang gelombang pantulan sama dengan gelombang tuju dan sudut pantulan sama dengan sudut tuju / Reflected wavelength equals incident wavelength and angle of reflection equals angle of incidence"},
            {"id": "B", "teks": "Sudut pantulan tidak sama dengan sudut tuju / Angle of reflection does not equal angle of incidence"},
            {"id": "C", "teks": "Panjang gelombang pantulan lebih besar daripada gelombang tuju / Reflected wavelength is greater than incident wavelength"},
            {"id": "D", "teks": "Panjang gelombang pantulan lebih pendek daripada gelombang tuju / Reflected wavelength is shorter than incident wavelength"}
        ],
        "", "Percubaan SMKA 2022", 2022
    ))

    # Q16 (Page 33, Rajah 94)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q16", 16, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan pembiasan gelombang air.
Diagram shows a refraction of a water wave.
(SMKA: 2022)

Apakah laju gelombang air di kawasan air cetek jika laju gelombang air di kawasan dalam ialah 6 cm s⁻¹?
What is the speed of the water wave in the shallow water area if the water wave speed in the deep area is 6 cm s⁻¹?""",
        [
            {"id": "A", "teks": "1.0 cm s⁻¹ / 1.0 cm s⁻¹"},
            {"id": "B", "teks": "3.0 cm s⁻¹ / 3.0 cm s⁻¹"},
            {"id": "C", "teks": "4.0 cm s⁻¹ / 4.0 cm s⁻¹"},
            {"id": "D", "teks": "9.0 cm s⁻¹ / 9.0 cm s⁻¹"}
        ],
        "rajah94", "Percubaan SMKA 2022", 2022
    ))

    # Q17 (Page 33, Rajah 95)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q17", 17, "Tinggi", "Mengaplikasi",
        """Hasil suatu eksperimen dwicelah Young telah dijalankan sepertimana Rajah (a) dan Rajah (b). Jarak antara dua sumber, a, dan jarak antara sumber dan skrin, D, adalah malar.
Rajah (a) menunjukkan pinggir-pinggir cahaya biru dengan panjang gelombang 4.20 × 10⁻⁷ m. Rajah (b) menunjukkan pinggir-pinggir cahaya yang terbentuk oleh cahaya P dengan panjang gelombang λₚ.
The results of a Young's double-slit experiment were carried out as shown in Diagram (a) and Diagram (b). The distance between the two sources, a, and the distance between the source and the screen, D, are constant.
Diagram (a) shows the fringes of blue light with a wavelength of 4.20 × 10⁻⁷ m. Diagram (b) shows the fringes of light formed by light P with wavelength λₚ.
(Terengganu: 2022)

Berapakah panjang gelombang bagi cahaya P?
What is the wavelength of light P?""",
        [
            {"id": "A", "teks": "2.33 × 10⁻⁷ m / 2.33 × 10⁻⁷ m"},
            {"id": "B", "teks": "5.64 × 10⁻⁷ m / 5.64 × 10⁻⁷ m"},
            {"id": "C", "teks": "5.21 × 10⁻⁷ m / 5.21 × 10⁻⁷ m"},
            {"id": "D", "teks": "6.09 × 10⁻⁷ m / 6.09 × 10⁻⁷ m"}
        ],
        "rajah95", "Percubaan Terengganu 2022", 2022
    ))

    # Q18 (Page 33, Rajah 96)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q18", 18, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan graf sesaran-masa bagi suatu gelombang.
Diagram shows the displacement-time graph of a wave.
(Kedah: 2021)

Berapakah frekuensi gelombang itu?
What is the frequency of the wave?""",
        [
            {"id": "A", "teks": "0.20 Hz / 0.20 Hz"},
            {"id": "B", "teks": "1.25 Hz / 1.25 Hz"},
            {"id": "C", "teks": "2.50 Hz / 2.50 Hz"},
            {"id": "D", "teks": "5.00 Hz / 5.00 Hz"}
        ],
        "rajah96", "Percubaan Kedah 2021", 2021
    ))

    # Q19 (Page 33, Rajah 97)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q19", 19, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan keadaan molekul-molekul udara apabila gelombang bunyi dari sebuah pembesar suara bergerak melaluinya.
Diagram shows the state of the air molecules when sound waves from a loudspeaker moves through it.
(Kelantan: 2023)

Laju gelombang bunyi itu adalah 330 m s⁻¹. Berapakah frekuensi gelombang bunyi itu?
The speed of the sound waves is 330 m s⁻¹. What is the frequency of the sound waves?""",
        [
            {"id": "A", "teks": "3 300 Hz / 3 300 Hz"},
            {"id": "B", "teks": "825 Hz / 825 Hz"},
            {"id": "C", "teks": "132 Hz / 132 Hz"},
            {"id": "D", "teks": "33 Hz / 33 Hz"}
        ],
        "rajah97", "Percubaan Kelantan 2023", 2023
    ))

    # Q20 (Page 34)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q20", 20, "Tinggi", "Mengaplikasi",
        """Satu cahaya monokromatik dengan panjang gelombang 5 × 10⁻⁷ m mengalami interferens apabila bergerak melalui dua celahan. Pinggir-pinggir cerah dan gelap terbentuk pada skrin yang berada 1.0 m daripada dwicelah itu. Jarak antara dua pinggir gelap berturutan adalah 10⁻³ m.
A monochromatic light with wavelength 5 × 10⁻⁷ m experiences interference after propagates through two slits. Bright and dark fringes formed on the screen which are at 1.0 m from the double slits. The distance between two consecutive dark fringes is 10⁻³ m.
(Kelantan: 2023)

Berapakah jarak antara dua celahan itu?
What is the distance between the two slits?""",
        [
            {"id": "A", "teks": "2.5 × 10⁻⁴ m / 2.5 × 10⁻⁴ m"},
            {"id": "B", "teks": "5.0 × 10⁻⁴ m / 5.0 × 10⁻⁴ m"},
            {"id": "C", "teks": "2.5 × 10⁻¹⁰ m / 2.5 × 10⁻¹⁰ m"},
            {"id": "D", "teks": "5.0 × 10⁻¹⁰ m / 5.0 × 10⁻¹⁰ m"}
        ],
        "", "Percubaan Kelantan 2023", 2023
    ))

    # Q21 (Page 34, Rajah 98)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q21", 21, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan graf sesaran-masa bagi gelombang yang merambat sepanjang seutas tali.
Diagram shows a displacement-time graph for a wave propagating along a piece of rope.
(Sarawak: 2021)

Apakah amplitud dan tempoh bagi gelombang tersebut?
What is the amplitude and period of the wave?""",
        [
            {"id": "A", "teks": "Amplitud: 5 m | Tempoh: 3.0 s / Amplitude: 5 m | Period: 3.0 s"},
            {"id": "B", "teks": "Amplitud: 10 m | Tempoh: 1.0 s / Amplitude: 10 m | Period: 1.0 s"},
            {"id": "C", "teks": "Amplitud: 5 m | Tempoh: 1.0 s / Amplitude: 5 m | Period: 1.0 s"},
            {"id": "D", "teks": "Amplitud: 10 m | Tempoh: 2.0 s / Amplitude: 10 m | Period: 2.0 s"}
        ],
        "rajah98", "Percubaan Sarawak 2021", 2021
    ))

    # Q22 (Page 34, Rajah 99)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q22", 22, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan dwicelah Young menghasilkan corak interferens pada skrin. Jarak di antara pinggir merah yang bersebelahan adalah 5.6 mm.
Diagram shows Young's double slits produces interference patterns on the screen. The distance between consecutive red fringes is 5.6 mm.
(Sarawak: 2021)

Hitung panjang gelombang cahaya merah.
Calculate wavelength of red light.""",
        [
            {"id": "A", "teks": "7.5 × 10⁻⁷ m / 7.5 × 10⁻⁷ m"},
            {"id": "B", "teks": "6.0 × 10⁻⁷ m / 6.0 × 10⁻⁷ m"},
            {"id": "C", "teks": "6.5 × 10⁻⁷ m / 6.5 × 10⁻⁷ m"},
            {"id": "D", "teks": "4.2 × 10⁻⁷ m / 4.2 × 10⁻⁷ m"}
        ],
        "rajah99", "Percubaan Sarawak 2021", 2021
    ))

    # Q23 (Page 34, Rajah 100)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q23", 23, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan satu corak interferens yang dihasilkan dari dua sumber koheren, S₁ dan S₂ dalam tangki riak. Jarak pemisahan antara S₁ dan S₂ ialah 5.0 cm dan panjang gelombang air ialah 3.0 cm.
Diagram shows the interference pattern produced by two coherent sources, S₁ and S₂ in a ripple tank. The separation between S₁ and S₂ is 5.0 cm and the wavelength of water waves is 3.0 cm.
(Selangor: Set 1: 2021)

Hitungkan jarak x antara dua garis nod pada jarak 30.0 cm dari S₁ dan S₂?
Calculate the distance, x, between two nodal lines 30.0 cm from S₁ and S₂?""",
        [
            {"id": "A", "teks": "2.0 cm / 2.0 cm"},
            {"id": "B", "teks": "6.6 cm / 6.6 cm"},
            {"id": "C", "teks": "18.0 cm / 18.0 cm"},
            {"id": "D", "teks": "50.0 cm / 50.0 cm"}
        ],
        "rajah100", "Percubaan Selangor Set 1 2021", 2021
    ))

    # Q24 (Page 35, Rajah 101)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q24", 24, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan satu corak interferens yang dihasilkan oleh dua sumber gelombang air.
Diagram shows an interference pattern produced by two sources of water waves.
(Selangor: Set 2: 2021)

Jika panjang gelombang ialah 1.0 cm, berapakah nilai bagi jarak antara dua sumber a?
If the wavelength is 1.0 cm, then what is the value of a, the distance between the two sources?""",
        [
            {"id": "A", "teks": "1.0 cm / 1.0 cm"},
            {"id": "B", "teks": "1.4 cm / 1.4 cm"},
            {"id": "C", "teks": "2.8 cm / 2.8 cm"},
            {"id": "D", "teks": "3.2 cm / 3.2 cm"}
        ],
        "rajah101", "Percubaan Selangor Set 2 2021", 2021
    ))

    # Q25 (Page 35)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q25", 25, "Tinggi", "Mengaplikasi",
        """Dalam satu eksperimen dwi-celah Young, satu sumber cahaya dengan panjang gelombang 780 nm melalui dwi-celah yang berjarak 0.5 mm. Corak pinggir yang terhasil diperhatikan pada skrin yang diletakkan 4 m daripada dwi-celah.
Apakah jarak antara dua jalur cerah yang berurutan?
In a Young's double slit experiment, a light of wavelength 780 nm passes through two slits which is 0.5 mm apart. The fringes pattern produced are observed on a screen placed 4 m from the double slits.
What is the distance between two consecutive bright fringes?
(Negeri Sembilan: 2021)""",
        [
            {"id": "A", "teks": "6.24 × 10³ m / 6.24 × 10³ m"},
            {"id": "B", "teks": "1.56 × 10³ m / 1.56 × 10³ m"},
            {"id": "C", "teks": "6.24 × 10⁻³ m / 6.24 × 10⁻³ m"},
            {"id": "D", "teks": "9.75 × 10⁻³ m / 9.75 × 10⁻³ m"}
        ],
        "", "Percubaan Negeri Sembilan 2021", 2021
    ))

    # Q26 (Page 35, Rajah 102)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q26", 26, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan satu gelombang sinusoidal pada graf sesaran melawan masa.
Diagram shows a sinusoidal wave on a displacement against time graph.
(Pahang: 2021)

Kira frekuensi gelombang itu.
Calculate the frequency of the wave.""",
        [
            {"id": "A", "teks": "0.15 Hz / 0.15 Hz"},
            {"id": "B", "teks": "0.25 Hz / 0.25 Hz"},
            {"id": "C", "teks": "4 Hz / 4 Hz"},
            {"id": "D", "teks": "6 Hz / 6 Hz"}
        ],
        "rajah102", "Percubaan Pahang 2021", 2021
    ))

    # Q27 (Page 35, Rajah 103)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q27", 27, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan graf sesaran-jarak bagi satu gelombang.
Diagram shows a displacement-distance graph of a wave.
(Melaka: 2021)

Berapakah panjang gelombang dan amplitud gelombang?
What is the wavelength and amplitude of the wave?""",
        [
            {"id": "A", "teks": "Panjang gelombang: 6 cm | Amplitud: 8 cm / Wavelength: 6 cm | Amplitude: 8 cm"},
            {"id": "B", "teks": "Panjang gelombang: 4 cm | Amplitud: 8 cm / Wavelength: 4 cm | Amplitude: 8 cm"},
            {"id": "C", "teks": "Panjang gelombang: 4 cm | Amplitud: 16 cm / Wavelength: 4 cm | Amplitude: 16 cm"},
            {"id": "D", "teks": "Panjang gelombang: 6 cm | Amplitud: 16 cm / Wavelength: 6 cm | Amplitude: 16 cm"}
        ],
        "rajah103", "Percubaan Melaka 2021", 2021
    ))

    # Q28 (Page 35, Rajah 104)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q28", 28, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan eksperimen dwicelah Young menghasilkan corak interferens pada skrin. Jarak pemisahan dwicelah ialah 0.4 mm dan jarak antara dwicelah dengan skrin ialah 3.0 m.
Diagram shows a Young's double-slit experiment produces interference pattern on screen. The separation distance of the double-slit is 0.4 mm and the distance between the double-slit and the screen is 3.0 m.
(Pahang: 2023)

Jika panjang gelombang cahaya monokromatik ialah 6.97 × 10⁻⁷ m, berapakah nilai x?
If the wavelength of monochromatic light is 6.97 × 10⁻⁷ m, what is the value of x?""",
        [
            {"id": "A", "teks": "5.23 × 10⁻³ m / 5.23 × 10⁻³ m"},
            {"id": "B", "teks": "9.29 × 10⁻¹¹ m / 9.29 × 10⁻¹¹ m"},
            {"id": "C", "teks": "1.72 × 10³ m / 1.72 × 10³ m"},
            {"id": "D", "teks": "1.72 × 10⁶ m / 1.72 × 10⁶ m"}
        ],
        "rajah104", "Percubaan Pahang 2023", 2023
    ))

    # Q29 (Page 36, Rajah 105)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q29", 29, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan satu susunan radas eksperimen dwicelah Young. Panjang gelombang cahaya monokromatik ialah 5.5 × 10⁻⁷ m. Jarak antara dua celah ialah 5.00 × 10⁻⁴ m dan jarak antara dwicelah dengan skrin ialah 4 m.
Diagram shows the apparatus set-up of Young's double slit experiment. The wavelength of the monochromatic light is 5.5 × 10⁻⁷ m. The distance between the two slits is 5.00 × 10⁻⁴ m and the distance between the double slit and the screen 4 m.
(SBP: 2023)

Hitung jarak antara dua pinggir cerah?
Calculate distance between two bright fringes?""",
        [
            {"id": "A", "teks": "3.64 × 10⁻³ m / 3.64 × 10⁻³ m"},
            {"id": "B", "teks": "4.40 × 10⁻³ m / 4.40 × 10⁻³ m"},
            {"id": "C", "teks": "3.64 × 10⁻¹¹ m / 3.64 × 10⁻¹¹ m"},
            {"id": "D", "teks": "6.88 × 10⁻¹¹ m / 6.88 × 10⁻¹¹ m"}
        ],
        "rajah105", "Percubaan SBP 2023", 2023
    ))

    # Q30 (Page 36, Rajah 106)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K3_Q30", 30, "Tinggi", "Mengaplikasi",
        """Rajah menunjukkan sebahagian corak interferens. S₁ dan S₂ adalah dua sumber koheren.
Diagram shows a part of an interference pattern. S₁ and S₂ are two coherent sources.
(SPM: 2023)

Antara yang berikut, graf manakah yang betul menunjukkan gerakan gelombang dari P ke Q?
Which of the following graphs correctly shows the propagation of the waves from P to Q?""",
        [
            {"id": "A", "teks": "Graf sesaran-jarak dengan amplitud malar kecil / Displacement-distance graph with constant small amplitude"},
            {"id": "B", "teks": "Graf sesaran-jarak dengan amplitud berkurang dari P ke Q / Displacement-distance graph with amplitude decreasing from P to Q"},
            {"id": "C", "teks": "Graf sesaran-jarak dengan amplitud bertambah dari P ke Q / Displacement-distance graph with amplitude increasing from P to Q"},
            {"id": "D", "teks": "Graf sesaran-jarak dengan amplitud maksimum (2a) berayun seragam (garis antinod) / Displacement-distance graph with uniform maximum amplitude (2a) oscillating steadily (antinodal line)"}
        ],
        "rajah106", "SPM 2023", 2023
    ))

    return questions

if __name__ == '__main__':
    qs = get_k3_questions()
    print(f'Successfully loaded {len(qs)} Konstruk 3 questions.')
