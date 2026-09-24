# -*- coding: utf-8 -*-
"""
Dataset Konstruk 2: Memahami (Bahagian 2: Soalan 51 - 103)
Tingkatan 4 Bab 5: Gelombang (Waves)
"""

from scripts.build_dataset_helper_b5 import make_b5_q

def get_k2_part2_questions():
    questions = []

    # Q51 (Page 16, Rajah 44)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q51", 51, "Sederhana", "Memahami",
        """Rajah menunjukkan corak interferens yang terbentuk di atas skrin dalam eksperimen dwicelah Young yang menggunakan cahaya monokromatik dengan panjang gelombang, λ.
Diagram shows the interference patterns formed on the screen in Young's double slit experiment using monochromatic light with wavelength, λ.
(SBP: 2022)
Apakah yang akan berlaku pada bilangan pinggir gelap atas skrin sekiranya jarak pemisah dwicelah yang lebih besar digunakan?
What will happen to the number of dark fringes on the screen if a larger slit separation distance is used?""",
        [
            {"id": "A", "teks": "Bertambah / Increases"},
            {"id": "B", "teks": "Berkurang / Decreases"},
            {"id": "C", "teks": "Tidak berubah / Unchanged"},
            {"id": "D", "teks": "Menjadi sifar / Becomes zero"}
        ],
        "rajah44", "Percubaan SBP 2022", 2022
    ))

    # Q52 (Page 16, Rajah 45)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q52", 52, "Sederhana", "Memahami",
        """Rajah menunjukkan sebiji batu dijatuhkan ke dalam sebuah kolam yang tenang. Gelombang yang terhasil pada permukaan air bergerak keluar sebagai bulatan yang mengembang bermula dari pusat tempat gangguan.
Diagram shows a stone dropped into a calm pond. The waves produced at the water's surface travel outwards in expanding circles from the centre of the disturbance.
(Selangor: Set 1: 2022)
Pernyataan manakah yang betul berkenaan pergerakan zarah-zarah air semasa perambatan gelombang?
Which statement is correct about the movement of the water particles during the propagation of the wave?""",
        [
            {"id": "A", "teks": "Bergerak keluar dalam bulatan / Moves outward in circle"},
            {"id": "B", "teks": "Bergetar secara mendatar / Vibrates horizontally"},
            {"id": "C", "teks": "Bergetar secara menegak / Vibrates vertically"},
            {"id": "D", "teks": "Bergerak secara menegak dan mendatar / Moves vertically and horizontally"}
        ],
        "rajah45", "Percubaan Selangor Set 1 2022", 2022
    ))

    # Q53 (Page 16)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q53", 53, "Sederhana", "Memahami",
        """Pernyataan manakah yang betul apabila gelombang air dipantulkan oleh pemantul?
Which statement is correct when water waves are reflected by a reflector?
(Selangor: Set 1: 2022)""",
        [
            {"id": "A", "teks": "Laju gelombang air sebelum dan selepas pantulan adalah sama / The speed of water waves before and after reflection are the same"},
            {"id": "B", "teks": "Panjang gelombang air menjadi lebih panjang selepas pantulan / The wavelength of water waves becomes longer after reflection"},
            {"id": "C", "teks": "Amplitud gelombang air menjadi lebih besar selepas pantulan / The amplitude of water waves becomes larger after reflection"},
            {"id": "D", "teks": "Frekuensi gelombang air berkurang selepas pantulan / The frequency of water waves decreases after reflection"}
        ],
        "", "Percubaan Selangor Set 1 2022", 2022
    ))

    # Q54 (Page 16 & 17)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q54", 54, "Sederhana", "Memahami",
        """Berikut adalah beberapa kegunaan gelombang elektromagnet:
The following are some uses of electromagnetic waves:
(Selangor: Set 1: 2022)
P: Sistem penggera keselamatan / Anti-theft alarm systems
<br><br>
Q: Mengesan wang kertas palsu / Detecting fake notes
<br><br>
R: Peralatan dapur / Kitchen appliance
<br><br>
S: Kemoterapi / Chemotherapy
Nyatakan jenis gelombang elektromagnet yang digunakan dalam P, Q, R dan S.
State the type of electromagnetic wave used in P, Q, R and S.""",
        [
            {"id": "A", "teks": "P: Sinar inframerah | Q: Sinar ultraungu | R: Gelombang mikro | S: Sinar gama / P: Infrared radiation | Q: Ultraviolet radiation | R: Microwaves | S: Gamma rays"},
            {"id": "B", "teks": "P: Sinar ultraungu | Q: Sinar inframerah | R: Gelombang mikro | S: Sinar gama / P: Ultraviolet radiation | Q: Infrared radiation | R: Microwaves | S: Gamma rays"},
            {"id": "C", "teks": "P: Sinar inframerah | Q: Gelombang mikro | R: Sinar ultraungu | S: Sinar gama / P: Infrared radiation | Q: Microwaves | R: Ultraviolet radiation | S: Gamma rays"},
            {"id": "D", "teks": "P: Sinar inframerah | Q: Sinar ultraungu | R: Sinar gama | S: Gelombang mikro / P: Infrared radiation | Q: Ultraviolet radiation | R: Gamma rays | S: Microwaves"}
        ],
        "", "Percubaan Selangor Set 1 2022", 2022
    ))

    # Q55 (Page 17, Rajah 46)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q55", 55, "Sederhana", "Memahami",
        """Rajah menunjukkan sebiji bola terapung di dalam sebuah tangki air.
Diagram shows a ball floating in a water tank.
(Selangor: Set 2: 2022)
Antara berikut yang manakah menggambarkan pergerakan bola yang betul apabila gelombang melalui permukaan air?
Which of the following describes the correct movement of the ball, when a wave passes through the water surface?""",
        [
            {"id": "A", "teks": "Bola berayun ke atas dan ke bawah pada kedudukan yang sama / Ball oscillates up and down at the same position"},
            {"id": "B", "teks": "Bola bergerak ke hadapan mengikut arah perambatan gelombang / Ball moves forward following the direction of wave propagation"},
            {"id": "C", "teks": "Bola bergerak ke belakang bertentangan arah gelombang / Ball moves backward against the wave direction"},
            {"id": "D", "teks": "Bola tenggelam ke dasar tangki air / Ball sinks to the bottom of the water tank"}
        ],
        "rajah46", "Percubaan Selangor Set 2 2022", 2022
    ))

    # Q56 (Page 17)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q56", 56, "Sederhana", "Memahami",
        """Antara ciri gelombang berikut, yang manakah berubah apabila gelombang dipantulkan?
Which of the following characteristics of waves changes when waves are reflected?
(Selangor: Set 2: 2022)""",
        [
            {"id": "A", "teks": "Arah perambatan / Direction of propagation"},
            {"id": "B", "teks": "Laju / Speed"},
            {"id": "C", "teks": "Frekuensi / Frequency"},
            {"id": "D", "teks": "Panjang gelombang / Wavelength"}
        ],
        "", "Percubaan Selangor Set 2 2022", 2022
    ))

    # Q57 (Page 17)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q57", 57, "Sederhana", "Memahami",
        """Mamografi adalah satu proses memeriksa payudara manusia untuk mengesan gejala kanser. Gelombang elektromagnet manakah digunakan untuk tujuan ini?
Mammography is a process of examining the human breast to detect the occurrence of cancer. Which electromagnetic wave is used for this purpose?
(Selangor: Set 2: 2022)""",
        [
            {"id": "A", "teks": "Sinar-X / X-ray"},
            {"id": "B", "teks": "Gelombang mikro / Microwave"},
            {"id": "C", "teks": "Inframerah / Infrared"},
            {"id": "D", "teks": "Gelombang radio / Radio wave"}
        ],
        "", "Percubaan Selangor Set 2 2022", 2022
    ))

    # Q58 (Page 17, Rajah 47)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q58", 58, "Sederhana", "Memahami",
        """Rajah menunjukkan corak interferens bagi gelombang air yang dihasilkan oleh dua sumber koheren, S₁ dan S₂.
Diagram shows the interference pattern of water waves produced by two coherent sources, S₁ and S₂.
(SMKA: 2022)
Pada titik-titik yang manakah interferens membina berlaku?
At which points do constructive interference occur?""",
        [
            {"id": "A", "teks": "P dan Q / P and Q"},
            {"id": "B", "teks": "P dan R / P and R"},
            {"id": "C", "teks": "Q dan R / Q and R"},
            {"id": "D", "teks": "P, Q dan R / P, Q and R"}
        ],
        "rajah47", "Percubaan SMKA 2022", 2022
    ))

    # Q59 (Page 17 & 18)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q59", 59, "Sederhana", "Memahami",
        """Antara pernyataan berikut yang manakah betul mengenai gelombang radio?
Which of the following statements is correct about radio waves?
(SMKA: 2022)""",
        [
            {"id": "A", "teks": "Gelombang membujur / Longitudinal waves"},
            {"id": "B", "teks": "Gelombang yang memerlukan medium untuk merambat / The waves that require a medium to travel"},
            {"id": "C", "teks": "Halaju gelombang dipengaruhi oleh panjang gelombang / The velocity of the waves is influenced by the wavelength"},
            {"id": "D", "teks": "Terdiri daripada kedua-dua medan magnet dan medan elektrik / Consist of both magnetic fields and electric fields"}
        ],
        "", "Percubaan SMKA 2022", 2022
    ))

    # Q60 (Page 18, Rajah 48)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q60", 60, "Sederhana", "Memahami",
        """Rajah menunjukkan satu imej yang terhasil daripada aplikasi gelombang elektromagnet dalam radioterapi untuk kanser otak.
Diagram shows an image produced from application of electromagnetic waves in radiotherapy for brain cancer.
(Terengganu: 2022)
Apakah ciri-ciri gelombang elektromagnet itu?
What are the characteristics of the electromagnetic waves?""",
        [
            {"id": "A", "teks": "Frekuensi: Tinggi | Panjang gelombang: Pendek / Frequency: High | Wavelength: Short"},
            {"id": "B", "teks": "Frekuensi: Rendah | Panjang gelombang: Pendek / Frequency: Low | Wavelength: Short"},
            {"id": "C", "teks": "Frekuensi: Rendah | Panjang gelombang: Panjang / Frequency: Low | Wavelength: Long"},
            {"id": "D", "teks": "Frekuensi: Tinggi | Panjang gelombang: Panjang / Frequency: High | Wavelength: Long"}
        ],
        "rajah48", "Percubaan Terengganu 2022", 2022
    ))

    # Q61 (Page 18, Rajah 49)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q61", 61, "Sederhana", "Memahami",
        """Rajah menunjukkan satu gelombang bunyi yang dihasilkan oleh dua pembesar suara yang koheren.
Diagram shows an interference of sound waves emitted from two loudspeakers which are coherent.
(Kedah: 2021)
Interferens membina berlaku di
Constructive interference occurs at""",
        [
            {"id": "A", "teks": "R dan T / R and T"},
            {"id": "B", "teks": "Q dan R / Q and R"},
            {"id": "C", "teks": "P dan S / P and S"},
            {"id": "D", "teks": "T dan Q / T and Q"}
        ],
        "rajah49", "Percubaan Kedah 2021", 2021
    ))

    # Q62 (Page 18, Rajah 50)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q62", 62, "Sederhana", "Memahami",
        """Rajah menunjukkan Kamal yang berada di dalam sebuah bilik boleh mendengar bunyi piano di ruang tamu.
Diagram shows Kamal is in a room able to hear the sound of a piano in the living room.
(Kelantan: 2021)
Situasi ini adalah disebabkan oleh
The situation is due to""",
        [
            {"id": "A", "teks": "pantulan / reflection"},
            {"id": "B", "teks": "pembiasan / refraction"},
            {"id": "C", "teks": "pembelauan / diffraction"},
            {"id": "D", "teks": "interferens / interference"}
        ],
        "rajah50", "Percubaan Kelantan 2021", 2021
    ))

    # Q63 (Page 18 & 19, Rajah 51)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q63", 63, "Sederhana", "Memahami",
        """Rajah menunjukkan satu gelombang air yang sedang bergerak dari kawasan dalam ke kawasan cetek.
Diagram shows water waves moving from deep region to a shallow region.
(Kelantan: 2021)
Yang manakah antara berikut akan berlaku apabila gelombang memasuki kawasan cetek?
Which of the following will happen when waves entering the shallow region?
I Laju berkurang / The speed decreases
<br><br>
II Arah pergerakan membengkok mendekati garis normal / Direction of motion bends towards the normal line
<br><br>
III Jarak gelombang berkurang / Wavelength decreases""",
        [
            {"id": "A", "teks": "I dan II / I and II"},
            {"id": "B", "teks": "II dan III / II and III"},
            {"id": "C", "teks": "I, II dan III / I, II and III"},
            {"id": "D", "teks": "I dan III / I and III"}
        ],
        "rajah51", "Percubaan Kelantan 2021", 2021
    ))

    # Q64 (Page 19, Rajah 52)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q64", 64, "Sederhana", "Memahami",
        """Rajah menunjukkan corak cahaya yang terhasil di atas skrin dalam suatu eksperimen.
Diagram shows patterns of light produced on screen in an experiment.
(Sarawak: 2021)
Apakah fenomena yang terlibat?
What is the phenomenon involved?""",
        [
            {"id": "A", "teks": "Pantulan / Reflection"},
            {"id": "B", "teks": "Pembelauan / Diffraction"},
            {"id": "C", "teks": "Pembiasan / Refraction"},
            {"id": "D", "teks": "Interferens / Interference"}
        ],
        "rajah52", "Percubaan Sarawak 2021", 2021
    ))

    # Q65 (Page 19)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q65", 65, "Sederhana", "Memahami",
        """Antara ciri gelombang berikut, yang manakah tidak akan berubah apabila gelombang merambat dari kawasan dalam ke kawasan cetek?
Which of the following characteristics of waves will not change when the waves are move from deep water to shallow water?
(Terengganu: 2021)""",
        [
            {"id": "A", "teks": "Arah perambatan gelombang / Direction of propagation"},
            {"id": "B", "teks": "Frekuensi / Frequency"},
            {"id": "C", "teks": "Panjang gelombang / Wavelength"},
            {"id": "D", "teks": "Laju gelombang / Speed of wave"}
        ],
        "", "Percubaan Terengganu 2021", 2021
    ))

    # Q66 (Page 19, Rajah 53)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q66", 66, "Sederhana", "Memahami",
        """Rajah di bawah menunjukkan corak interferens gelombang air daripada dua punca yang koheren, S₁ dan S₂.
Diagram shows the interference pattern of water waves from two coherent sources, S₁ and S₂.
(Terengganu: 2021)
Kumpulan manakah yang menerangkan interferens pada titik X dengan betul?
Which of the groups describe the interference at point X correctly?""",
        [
            {"id": "A", "teks": "Gelombang daripada S₁: Puncak | Gelombang daripada S₂: Puncak | Kesan: Interferens membina / Wave from S₁: Crest | Wave from S₂: Crest | Result: Constructive interference"},
            {"id": "B", "teks": "Gelombang daripada S₁: Puncak | Gelombang daripada S₂: Lembangan | Kesan: Interferens memusnah / Wave from S₁: Crest | Wave from S₂: Trough | Result: Destructive interference"},
            {"id": "C", "teks": "Gelombang daripada S₁: Lembangan | Gelombang daripada S₂: Lembangan | Kesan: Interferens membina / Wave from S₁: Trough | Wave from S₂: Trough | Result: Constructive interference"},
            {"id": "D", "teks": "Gelombang daripada S₁: Lembangan | Gelombang daripada S₂: Puncak | Kesan: Interferens membina / Wave from S₁: Trough | Wave from S₂: Crest | Result: Constructive interference"}
        ],
        "rajah53", "Percubaan Terengganu 2021", 2021
    ))

    # Q67 (Page 19 & 20, Rajah 54)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q67", 67, "Sederhana", "Memahami",
        """Rajah menunjukkan sebahagian spektrum gelombang elektromagnet.
Diagram shows part of electromagnetic waves spectrum.
(Terengganu: 2021)
Kedudukan cahaya nampak adalah
The position of the visible light is""",
        [
            {"id": "A", "teks": "di antara sinar gamma dan sinar ultraungu / between gamma rays and ultraviolet rays"},
            {"id": "B", "teks": "di antara sinar inframerah dan sinar ultraungu / between infrared rays and ultraviolet rays"},
            {"id": "C", "teks": "di antara gelombang mikro dan sinar inframerah / between microwave and infrared rays"},
            {"id": "D", "teks": "di antara sinar ultraungu dan sinar-X / between ultraviolet rays and X-rays"}
        ],
        "rajah54", "Percubaan Terengganu 2021", 2021
    ))

    # Q68 (Page 20, Rajah 55)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q68", 68, "Sederhana", "Memahami",
        """Rajah menunjukkan bandul Barton. Bandul B ditolak supaya berayun.
Diagram shows a Barton's pendulum. Pendulum B is pushed to oscillate.
(Selangor: Set 1: 2021)
Bandul D didapati berayun dengan amplitud maksimum kerana
Pendulum D is found to oscillate with maximum amplitude because""",
        [
            {"id": "A", "teks": "frekuensi asli bandul B adalah sama dengan frekuensi asli bandul D / the natural frequency of pendulum B is equal to the natural frequency of pendulum D"},
            {"id": "B", "teks": "jisim bandul B adalah sama dengan jisim bandul D / the mass of pendulum B is equal to the mass of pendulum D"},
            {"id": "C", "teks": "bandul B memindahkan tenaga hanya ke bandul D / pendulum B transfers energy only to pendulum D"},
            {"id": "D", "teks": "bandul B memindahkan daya ke bandul D / pendulum B transfers force to pendulum D"}
        ],
        "rajah55", "Percubaan Selangor Set 1 2021", 2021
    ))

    # Q69 (Page 20, Rajah 56)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q69", 69, "Sederhana", "Memahami",
        """Rajah menunjukkan arah perambatan satu gelombang tuju menuju ke sebuah pemantul cekung.
Diagram shows the direction of propagation of the incident wave approaching a concave reflector.
(Selangor: Set 1: 2021)
Antara yang berikut, yang manakah benar tentang pantulan gelombang itu?
Which of the following is true about the reflected waves?""",
        [
            {"id": "A", "teks": "Laju gelombang pantulan bertambah / The speed of the reflected wave increases"},
            {"id": "B", "teks": "Gelombang pantulan adalah berbentuk membulat menuju ke titik fokus / The reflected wave is in circular shape converging towards focal point"},
            {"id": "C", "teks": "Frekuensi gelombang pantulan adalah lebih besar daripada gelombang tuju / The frequency of the reflected wave is higher than the incident waves"},
            {"id": "D", "teks": "Panjang gelombang pantulan adalah dua kali ganda daripada panjang gelombang tuju / The wavelength of the reflected wave is twice than wavelength of the incident waves"}
        ],
        "rajah56", "Percubaan Selangor Set 1 2021", 2021
    ))

    # Q70 (Page 20 & 21, Rajah 57)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q70", 70, "Sederhana", "Memahami",
        """Rajah menunjukkan muka gelombang bagi tiga titisan air pada permukaan suatu besen air.
Diagram shows the wavefronts of three water droplets on the surface of a water basin.
(Selangor: Set 1: 2021)
Rajah manakah merupakan susunan besen yang betul?
Which diagram below likely to be the arrangement of the basin?""",
        [
            {"id": "A", "teks": "Besen condong dengan kawasan dalam di sebelah kiri dan kawasan cetek di sebelah kanan / Slanted basin with deep region on left and shallow region on right"},
            {"id": "B", "teks": "Besen mendatar dengan kedalaman seragam di seluruh permukaan / Horizontal basin with uniform depth across entire surface"},
            {"id": "C", "teks": "Besen condong dengan kawasan cetek di sebelah kiri dan kawasan dalam di sebelah kanan / Slanted basin with shallow region on left and deep region on right"},
            {"id": "D", "teks": "Besen dengan bongkah perspeks berbentuk segitiga di tengah-tengah / Basin with triangular perspex block in the middle"}
        ],
        "rajah57", "Percubaan Selangor Set 1 2021", 2021
    ))

    # Q71 (Page 21)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q71", 71, "Sederhana", "Memahami",
        """Antara yang berikut, yang manakah ciri-ciri gelombang mikro yang menjadikannya sesuai digunakan dalam komunikasi satelit?
Which of the following characteristics of microwave makes it suitable to be used in satellite communication?
(Selangor: Set 1: 2021)""",
        [
            {"id": "A", "teks": "Ia adalah neutral / It is neutral"},
            {"id": "B", "teks": "Ia mempunyai frekuensi yang tinggi dan boleh menembusi atmosfera / It has a high frequency and can penetrate the atmosphere"},
            {"id": "C", "teks": "Ia memerlukan medium untuk merambat / It needs a medium to propagate"},
            {"id": "D", "teks": "Ia mempunyai panjang gelombang yang sangat panjang / It has a very long wavelength"}
        ],
        "", "Percubaan Selangor Set 1 2021", 2021
    ))

    # Q72 (Page 21, Rajah 58)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q72", 72, "Sederhana", "Memahami",
        """Rajah menunjukkan satu beban diikat pada satu spring berayun secara menegak dalam air.
Diagram shows a load tied to a spring which oscillates vertically in the water.
(Selangor: Set 2: 2021)
Antara graf sesaran-masa berikut, yang manakah menunjukkan ayunan beban itu?
Which of the following displacement-time graphs shows the oscillation of the load?""",
        [
            {"id": "A", "teks": "Graf ayunan dengan amplitud berkurang secara beransur-ansur (pelembapan) / Oscillation graph with amplitude gradually decreasing (damping)"},
            {"id": "B", "teks": "Graf ayunan dengan amplitud malar tanpa pelembapan / Oscillation graph with constant amplitude without damping"},
            {"id": "C", "teks": "Graf ayunan dengan tempoh yang semakin bertambah / Oscillation graph with period increasing"},
            {"id": "D", "teks": "Graf garis lurus sesaran bertambah secara linear / Straight line graph of displacement increasing linearly"}
        ],
        "rajah58", "Percubaan Selangor Set 2 2021", 2021
    ))

    # Q73 (Page 21)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q73", 73, "Sederhana", "Memahami",
        """Antara yang berikut, yang manakah sifat gelombang elektromagnet?
Which of the following is a property of an electromagnetic wave?
(Selangor: Set 2: 2021)""",
        [
            {"id": "A", "teks": "Ia boleh dikutubkan / It can be polarised"},
            {"id": "B", "teks": "Ia adalah gelombang membujur / It is a longitudinal wave"},
            {"id": "C", "teks": "Ia tidak boleh merambat melalui vakum / It cannot propagate through vacuum"},
            {"id": "D", "teks": "Ia terpesong oleh medan elektrik dan medan magnet / It is deflected by electric and magnetic fields"}
        ],
        "", "Percubaan Selangor Set 2 2021", 2021
    ))

    # Q74 (Page 21, Rajah 59)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q74", 74, "Sederhana", "Memahami",
        """Rajah menunjukkan sebiji batu dijatuhkan ke dalam sebuah kolam yang tenang dan menghasilkan muka gelombang.
Diagram shows a stone is dropped into a calm pond producing a wavefront.
(MRSM: 2021)
Apakah jenis gelombang yang terhasil pada rajah di atas?
What type of wave is produced in the diagram above?""",
        [
            {"id": "A", "teks": "Gelombang satah / Plane wave"},
            {"id": "B", "teks": "Gelombang melintang / Transverse wave"},
            {"id": "C", "teks": "Gelombang membujur / Longitudinal wave"},
            {"id": "D", "teks": "Gelombang elektromagnet / Electromagnetic wave"}
        ],
        "rajah59", "Percubaan MRSM 2021", 2021
    ))

    # Q75 (Page 22)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q75", 75, "Sederhana", "Memahami",
        """Manakah antara berikut merupakan kebaikan resonans dalam kehidupan harian?
Which of the following is the benefit of resonance in daily life?
(MRSM: 2021)""",
        [
            {"id": "A", "teks": "Penalaan frekuensi pada radio untuk menerima siaran stesen pilihan / Tuning of frequency on a radio to receive desired station broadcast"},
            {"id": "B", "teks": "Keruntuhan jambatan gantung akibat tiupan angin kuat / Collapse of suspension bridges due to strong wind blowing"},
            {"id": "C", "teks": "Gelas kaca pecah apabila penyanyi opera menyanyi dengan nada tinggi / Shattering of glass when opera singer sings at high pitch"},
            {"id": "D", "teks": "Gegaran pada sayap kapal terbang semasa penerbangan laju / Vibration of airplane wings during high-speed flight"}
        ],
        "", "Percubaan MRSM 2021", 2021
    ))

    # Q76 (Page 22, Rajah 60)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q76", 76, "Sederhana", "Memahami",
        """Rajah menunjukkan sebuah kapal yang menggunakan SONAR untuk mengukur kedalaman laut.
Diagram shows a ship that uses SONAR to measure the depth of a sea.
(MRSM: 2021)
Pernyataan yang manakah menerangkan situasi di atas?
Which statement describes the situation above?""",
        [
            {"id": "A", "teks": "Laju gelombang yang dikesan lebih laju dari gelombang yang dipancarkan / The speed of detected wave is faster than the speed of the transmitted wave"},
            {"id": "B", "teks": "Laju gelombang yang dikesan lebih perlahan dari laju gelombang yang dipancarkan / The speed of detected wave is slower than the speed of the transmitted wave"},
            {"id": "C", "teks": "Panjang gelombang yang dikesan adalah sama dengan panjang gelombang yang dipancarkan / The wavelength of detected wave is equal to the wavelength of transmitted wave"},
            {"id": "D", "teks": "Panjang gelombang yang dikesan adalah lebih pendek dari panjang gelombang yang dipancarkan / The wavelength of detected wave is shorter than the wavelength of transmitted wave"}
        ],
        "rajah60", "Percubaan MRSM 2021", 2021
    ))

    # Q77 (Page 22, Rajah 61)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q77", 77, "Sederhana", "Memahami",
        """Rajah menunjukkan arah perambatan gelombang air dari kawasan dalam ke kawasan cetek.
Diagram shows the direction of propagation of a water wave from deep region to shallow region.
(MRSM: 2021)
Apakah yang berlaku kepada arah perambatan dan panjang gelombang apabila ia berada dalam kawasan cetek?
What happens to the direction of propagation and wavelength in the shallow region?""",
        [
            {"id": "A", "teks": "Arah perambatan: Mendekati garis normal | Panjang gelombang: Berkurang / Direction of propagation: Towards normal line | Wavelength: Decreasing"},
            {"id": "B", "teks": "Arah perambatan: Menjauhi garis normal | Panjang gelombang: Bertambah / Direction of propagation: Away from normal line | Wavelength: Increasing"},
            {"id": "C", "teks": "Arah perambatan: Mendekati garis normal | Panjang gelombang: Tiada perubahan / Direction of propagation: Towards normal line | Wavelength: No change"},
            {"id": "D", "teks": "Arah perambatan: Menjauhi garis normal | Panjang gelombang: Berkurang / Direction of propagation: Away from normal line | Wavelength: Decreasing"}
        ],
        "rajah61", "Percubaan MRSM 2021", 2021
    ))

    # Q78 (Page 23, Rajah 62)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q78", 78, "Sederhana", "Memahami",
        """Rajah menunjukkan pandangan atas pelan sebuah rumah. Bunyi dari televisyen di ruang tamu boleh didengari oleh seseorang yang berada di dalam bilik tidur.
Diagram shows a top view plan of a house. The sound from the television in the living room can be heard by a person in the bedroom.
(MRSM: 2021)
Apakah fenomena yang menyebabkan bunyi merambat daripada televisyen kepada orang tersebut?
What is the phenomenon which causes sound to propagate from the television to the person?""",
        [
            {"id": "A", "teks": "Pembelauan / Diffraction"},
            {"id": "B", "teks": "Pembiasan / Refraction"},
            {"id": "C", "teks": "Pantulan / Reflection"},
            {"id": "D", "teks": "Interferens / Interference"}
        ],
        "rajah62", "Percubaan MRSM 2021", 2021
    ))

    # Q79 (Page 23, Rajah 63)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q79", 79, "Sederhana", "Memahami",
        """Rajah menunjukkan penggunaan satelit dalam bidang telekomunikasi.
Diagram shows the usage of satellites in the field of communication.
(MRSM: 2021)
Apakah nama gelombang yang dihantar oleh isyarat komunikasi?
What is the name of the wave sent by the communication signal?""",
        [
            {"id": "A", "teks": "Sinar-X / X-ray"},
            {"id": "B", "teks": "Cahaya nampak / Visible light"},
            {"id": "C", "teks": "Gelombang mikro / Microwave"},
            {"id": "D", "teks": "Sinar ultraungu / Ultraviolet ray"}
        ],
        "rajah63", "Percubaan MRSM 2021", 2021
    ))

    # Q80 (Page 23)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q80", 80, "Sederhana", "Memahami",
        """Antara berikut yang manakah boleh digunakan untuk menghasilkan gelombang pegun?
Which of the following can be used to produce stationary waves?
(Negeri Sembilan: 2021)""",
        [
            {"id": "A", "teks": "Meniup udara melalui trumpet / Blowing air through a trumpet"},
            {"id": "B", "teks": "Menghasilkan bunyi daripada pembesar suara / Producing sound from a speaker"},
            {"id": "C", "teks": "Menyinari cahaya melalui suatu dwi-celah / Shines light through double slits"},
            {"id": "D", "teks": "Menyebarkan gelombang air ke kawasan cetek / Propagates water waves to shallower region"}
        ],
        "", "Percubaan Negeri Sembilan 2021", 2021
    ))

    # Q81 (Page 23)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q81", 81, "Sederhana", "Memahami",
        """Pernyataan manakah antara berikut merujuk kepada gelombang membujur?
Which of the following statement refers to a longitudinal wave?
(Negeri Sembilan: 2021)""",
        [
            {"id": "A", "teks": "Gelombang cahaya bergerak dalam gentian optik / Light waves travel in optical fibers"},
            {"id": "B", "teks": "Gelombang radio bergerak melalui suatu vakum / Radio waves travel through a vacuum"},
            {"id": "C", "teks": "Gelombang air yang dihasilkan di dalam tangki riak / Water waves generated in the ripple tank"},
            {"id": "D", "teks": "Gelombang bunyi bergerak melalui udara / Sound waves travel through the air"}
        ],
        "", "Percubaan Negeri Sembilan 2021", 2021
    ))

    # Q82 (Page 23, Rajah 64)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q82", 82, "Sederhana", "Memahami",
        """Rajah menunjukkan sebuah bot nelayan menggunakan sistem SONAR untuk mengesan lokasi sekumpulan ikan.
Diagram shows a fishing boat using a SONAR system to detect the location of a shoal of fish.
(Negeri Sembilan: 2021)
Fenomena gelombang yang terlibat ialah
The wave phenomenon involved is""",
        [
            {"id": "A", "teks": "interferens / interference"},
            {"id": "B", "teks": "pembiasan / refraction"},
            {"id": "C", "teks": "pembelauan / diffraction"},
            {"id": "D", "teks": "pantulan / reflection"}
        ],
        "rajah64", "Percubaan Negeri Sembilan 2021", 2021
    ))

    # Q83 (Page 24)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q83", 83, "Sederhana", "Memahami",
        """Antara gelombang berikut, yang manakah tidak boleh merambat melalui vakum?
Which of the following waves cannot propagate in a vacuum?
(Negeri Sembilan: 2021)""",
        [
            {"id": "A", "teks": "Gelombang ultrasonik / Ultrasonic waves"},
            {"id": "B", "teks": "Gelombang mikro / Microwaves"},
            {"id": "C", "teks": "Sinar ultraungu / Ultraviolet waves"},
            {"id": "D", "teks": "Sinar-X / X-rays"}
        ],
        "", "Percubaan Negeri Sembilan 2021", 2021
    ))

    # Q84 (Page 24, Rajah 65)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q84", 84, "Sederhana", "Memahami",
        """Rajah menunjukkan satu graf suatu sistem ayunan yang mengalami pelembapan.
Diagram shows a graph of an oscillation system experiences damping.
(Pahang: 2021)
Yang mana di antara berikut tidak berubah?
Which of the following quantity does not change?""",
        [
            {"id": "A", "teks": "Saiz ayunan / Size of oscillation"},
            {"id": "B", "teks": "Tenaga ayunan / Energy of oscillation"},
            {"id": "C", "teks": "Tempoh ayunan / Period of oscillation"},
            {"id": "D", "teks": "Amplitud ayunan / Amplitude of oscillation"}
        ],
        "rajah65", "Percubaan Pahang 2021", 2021
    ))

    # Q85 (Page 24, Rajah 66)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q85", 85, "Sederhana", "Memahami",
        """Rajah menunjukkan gelombang air merambat dari kawasan X ke kawasan Y.
Diagram shows a water wave move from region X to region Y.
(Pahang: 2021)
Antara pernyataan berikut, yang manakah benar?
Which of the following statements is correct?""",
        [
            {"id": "A", "teks": "Gelombang itu bergerak lebih laju di kawasan Y / The waves move faster in region Y"},
            {"id": "B", "teks": "Laju gelombang itu adalah malar apabila bergerak dari kawasan X ke kawasan Y / The speed of the waves is constant when it moves from region X to region Y"},
            {"id": "C", "teks": "Gelombang itu mempunyai frekuensi lebih besar di kawasan X / The waves have a bigger frequency at region X"},
            {"id": "D", "teks": "Gelombang itu mempunyai amplitud lebih tinggi di kawasan Y / The waves have a higher amplitude at region Y"}
        ],
        "rajah66", "Percubaan Pahang 2021", 2021
    ))

    # Q86 (Page 24, Rajah 67)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q86", 86, "Sederhana", "Memahami",
        """Rajah di bawah menunjukkan sebuah peralatan memasak ketuhar gelombang mikro. Gelombang yang manakah digunakan oleh peralatan tersebut untuk memasak makanan?
Diagram below shows a microwave oven cooking utensil. Which type of wave is used by the cooking utensil to cook food?
(Pahang: 2021)""",
        [
            {"id": "A", "teks": "Inframerah / Infrared"},
            {"id": "B", "teks": "Sinaran gama / Gamma rays"},
            {"id": "C", "teks": "Ultraungu / Ultraviolet"},
            {"id": "D", "teks": "Gelombang mikro / Microwaves"}
        ],
        "rajah67", "Percubaan Pahang 2021", 2021
    ))

    # Q87 (Page 24)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q87", 87, "Sederhana", "Memahami",
        """Kuantiti fizik manakah semakin berkurang apabila suatu sistem getaran mengalami pelembapan?
Which physical quantity decreases when a vibrating system is experiences damping?
(SBP: 2021)""",
        [
            {"id": "A", "teks": "Halaju / Velocity"},
            {"id": "B", "teks": "Amplitud / Amplitude"},
            {"id": "C", "teks": "Frekuensi / Frequency"},
            {"id": "D", "teks": "Panjang gelombang / Wavelength"}
        ],
        "", "Percubaan SBP 2021", 2021
    ))

    # Q88 (Page 24 & 25, Rajah 68)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q88", 88, "Sederhana", "Memahami",
        """Rajah menunjukkan gelombang satah merambat ke arah satu pemantul satah dalam satu eksperimen menggunakan tangki riak.
Diagram shows plane wavefront propagate towards a plane reflector in an experiment by using a ripple tank.
(SBP: 2021)
Pasangan manakah yang betul untuk menerangkan gelombang pantulan?
Which pair is correct to describe the reflected wave?""",
        [
            {"id": "A", "teks": "Frekuensi gelombang: Berkurang | Panjang gelombang: Bertambah / Frequency of wave: Decreases | Wavelength: Increases"},
            {"id": "B", "teks": "Frekuensi gelombang: Sama | Panjang gelombang: Berkurang / Frequency of wave: Same | Wavelength: Decreases"},
            {"id": "C", "teks": "Frekuensi gelombang: Bertambah | Panjang gelombang: Sama / Frequency of wave: Increases | Wavelength: Same"},
            {"id": "D", "teks": "Frekuensi gelombang: Sama | Panjang gelombang: Sama / Frequency of wave: Same | Wavelength: Same"}
        ],
        "rajah68", "Percubaan SBP 2021", 2021
    ))

    # Q89 (Page 25, Rajah 69)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q89", 89, "Sederhana", "Memahami",
        """Rajah menunjukkan dua tapak perkhemahan yang dipisahkan oleh sebuah tasik. Ketika awal pagi, bunyi dari tapak perkhemahan yang bertentangan dapat didengari dengan jelas.
Diagram shows two campsites that are separated by a lake. At dawn, the sound from the opposite campsite can be heard clearly.
(SBP: 2021)
Fenomena manakah yang menerangkan situasi di atas?
Which phenomenon explains the situation above?""",
        [
            {"id": "A", "teks": "Pantulan gelombang / Reflection of wave"},
            {"id": "B", "teks": "Pembiasan gelombang / Refraction of wave"},
            {"id": "C", "teks": "Interferens gelombang / Interference of wave"},
            {"id": "D", "teks": "Pembelauan gelombang / Diffraction of wave"}
        ],
        "rajah69", "Percubaan SBP 2021", 2021
    ))

    # Q90 (Page 25, Rajah 70)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q90", 90, "Sederhana", "Memahami",
        """Rajah menunjukkan gelombang air merambat ke arah satu celah.
Diagram shows water waves propagating towards a gap.
(SBP: 2021)
Apakah fenomena gelombang dan bentuk muka gelombang selepas melalui celah?
What is the wave phenomenon and the shape of wavefront after passing through the gap?""",
        [
            {"id": "A", "teks": "Fenomena: Pembelauan | Bentuk muka gelombang: Membulat / Phenomenon: Diffraction | Shape of wavefront: Circular"},
            {"id": "B", "teks": "Fenomena: Pembelauan | Bentuk muka gelombang: Satah / Phenomenon: Diffraction | Shape of wavefront: Plane"},
            {"id": "C", "teks": "Fenomena: Pembiasan | Bentuk muka gelombang: Membulat / Phenomenon: Refraction | Shape of wavefront: Circular"},
            {"id": "D", "teks": "Fenomena: Pembiasan | Bentuk muka gelombang: Satah / Phenomenon: Refraction | Shape of wavefront: Plane"}
        ],
        "rajah70", "Percubaan SBP 2021", 2021
    ))

    # Q91 (Page 25 & 26, Rajah 71)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q91", 91, "Sederhana", "Memahami",
        """Rajah menunjukkan susunan radas bagi eksperimen untuk menghasilkan corak interferens di atas skrin dengan menggunakan sumber cahaya monokromatik.
Diagram shows an experimental setup to produce an interference pattern on the screen using a monochromatic light source.
(SBP: 2021)
Apakah yang akan berlaku pada corak pinggir jika jarak antara dwicelah dengan skrin, D ditambah?
What will happen to the fringe pattern if the distance between the double slits and the screen, D is increased?""",
        [
            {"id": "A", "teks": "Jarak antara dua pinggir cerah berturutan bertambah / The distance between two consecutive bright fringes increases"},
            {"id": "B", "teks": "Jarak antara dua pinggir cerah berturutan berkurang / The distance between two consecutive bright fringes decreases"},
            {"id": "C", "teks": "Kecerahan pinggir berkurang tetapi jarak antara pinggir tidak berubah / The brightness of fringes decreases but fringe separation is unchanged"},
            {"id": "D", "teks": "Corak interferens hilang sepenuhnya / The interference pattern disappears completely"}
        ],
        "rajah71", "Percubaan SBP 2021", 2021
    ))

    # Q92 (Page 26, Rajah 72)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q92", 92, "Sederhana", "Memahami",
        """Rajah menunjukkan sebuah besen condong yang berisi air. Satu penggetar sfera digunakan untuk menghasilkan gelombang membulat di kawasan cetek.
Diagram shows an inclined basin containing water. A spherical dipper is used to produce circular waves in the shallow region.
(Melaka: 2021)
Muka gelombang yang manakah akan diperhatikan apabila gelombang merambat ke kawasan dalam?
Which wavefront will be observed when the wave propagates to the deep region?""",
        [
            {"id": "A", "teks": "Muka gelombang membulat dengan jarak antara muka gelombang semakin besar / Circular wavefront with increasing distance between wavefronts"},
            {"id": "B", "teks": "Muka gelombang satah dengan jarak antara muka gelombang malar / Plane wavefront with constant distance between wavefronts"},
            {"id": "C", "teks": "Muka gelombang membulat dengan jarak antara muka gelombang semakin rapat / Circular wavefront with decreasing distance between wavefronts"},
            {"id": "D", "teks": "Muka gelombang pegun tanpa perubahan corak / Stationary wavefront without pattern change"}
        ],
        "rajah72", "Percubaan Melaka 2021", 2021
    ))

    # Q93 (Page 26, Rajah 73)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q93", 93, "Sederhana", "Memahami",
        """Rajah menunjukkan pinggir-pinggir yang diperolehi apabila cahaya merah digunakan dalam eksperimen dwicelah Young.
Diagram shows the fringes obtained when red light is used in Young's double slit experiment.
(Melaka: 2021)
Pinggir-pinggir manakah yang diperhatikan jika cahaya merah digantikan dengan cahaya biru?
Which fringes are observed when the red light is replaced by blue light?""",
        [
            {"id": "A", "teks": "Jarak antara pinggir berkurang (pinggir lebih rapat) / The distance between fringes decreases (fringes closer together)"},
            {"id": "B", "teks": "Jarak antara pinggir bertambah (pinggir lebih lebar) / The distance between fringes increases (fringes further apart)"},
            {"id": "C", "teks": "Jarak antara pinggir tidak berubah / The distance between fringes does not change"},
            {"id": "D", "teks": "Pinggir menjadi kabur dan tidak kelihatan / Fringes become blur and invisible"}
        ],
        "rajah73", "Percubaan Melaka 2021", 2021
    ))

    # Q94 (Page 26, Rajah 74)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q94", 94, "Sederhana", "Memahami",
        """Rajah menunjukkan satu senarai gelombang elektromagnet:
Diagram shows a list of electromagnetic waves:
(Melaka: 2021)
U: Sinar ultraungu / Ultraviolet wave
<br><br>
V: Cahaya nampak / Visible light
<br><br>
M: Gelombang mikro / Microwave
<br><br>
X: Sinar-X / X-ray
<br><br>
R: Gelombang radio / Radio wave
Senarai yang manakah menunjukkan panjang gelombang disusun secara menaik?
Which of the following shows their wavelengths arranged in an ascending order?""",
        [
            {"id": "A", "teks": "U, V, M, X, R / U, V, M, X, R"},
            {"id": "B", "teks": "R, M, V, U, X / R, M, V, U, X"},
            {"id": "C", "teks": "X, U, V, M, R / X, U, V, M, R"},
            {"id": "D", "teks": "X, V, U, M, R / X, V, U, M, R"}
        ],
        "rajah74", "Percubaan Melaka 2021", 2021
    ))

    # Q95 (Page 26 & 27, Rajah 75)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q95", 95, "Sederhana", "Memahami",
        """Rajah menunjukkan dua denyutan gelombang dihasilkan pada P dan Q. P dan Q adalah sama jarak dari X.
Diagram shows two wave pulses produced at P and Q. P and Q are at the same distance from X.
(Perlis: 2021)
Pilih bentuk gelombang yang boleh diperhatikan di X apabila kedua-dua denyutan bertemu?
Choose the suitable waveform observed at X when both pulses meet?""",
        [
            {"id": "A", "teks": "Superposisi membina dengan amplitud paduan adalah dua kali ganda ke atas / Constructive superposition with resultant amplitude doubled upwards"},
            {"id": "B", "teks": "Superposisi memusnah menghasilkan sesaran sifar seketika / Destructive superposition producing instantaneous zero displacement"},
            {"id": "C", "teks": "Superposisi membina dengan denyutan ke bawah / Constructive superposition with downward pulse"},
            {"id": "D", "teks": "Gelombang pegun dengan nod dan antinod / Stationary wave with nodes and antinodes"}
        ],
        "rajah75", "Percubaan Perlis 2021", 2021
    ))

    # Q96 (Page 27)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q96", 96, "Sederhana", "Memahami",
        """Antara rajah-rajah berikut, yang manakah betul menunjukkan pembiasan gelombang dari udara ke dalam air?
Which of the following diagram shows the correct refraction of wave from air to water?
(Sarawak: 2021)""",
        [
            {"id": "A", "teks": "Gelombang terbias membengkok mendekati garis normal kerana laju gelombang berkurang dalam air / Refracted wave bends towards the normal line because wave speed decreases in water"},
            {"id": "B", "teks": "Gelombang terbias membengkok menjauhi garis normal / Refracted wave bends away from the normal line"},
            {"id": "C", "teks": "Gelombang merambat lurus tanpa pembiasan pada sebarang sudut tuju / Wave propagates straight without refraction at any angle of incidence"},
            {"id": "D", "teks": "Gelombang mengalami pantulan dalam penuh ke udara / Wave undergoes total internal reflection back to air"}
        ],
        "", "Percubaan Sarawak 2021", 2021
    ))

    # Q97 (Page 27, Rajah 76)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q97", 97, "Sederhana", "Memahami",
        """Rajah menunjukkan keratan rentas sebuah tangki riak apabila gelombang air bergerak dari kawasan A ke kawasan B.
Diagram shows a cross-section of a ripple tank when water wave moves from region A to region B.
(SPM: 2021)
Apakah pembolehubah yang menyebabkan panjang gelombang berkurang?
What is the variable that causes the wavelength decreases?""",
        [
            {"id": "A", "teks": "Isipadu / Volume"},
            {"id": "B", "teks": "Frekuensi / Frequency"},
            {"id": "C", "teks": "Kedalaman / Depth"},
            {"id": "D", "teks": "Ketumpatan / Density"}
        ],
        "rajah76", "SPM 2021", 2021
    ))

    # Q98 (Page 27)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q98", 98, "Sederhana", "Memahami",
        """Bluetooth adalah teknologi tanpa wayar dengan julat frekuensi antara 2.4 GHz hingga 2.48 GHz, digunakan untuk menghantar data antara peranti tetap dengan peranti mudah alih dalam jarak pendek. Berdasarkan maklumat di atas, bluetooth adalah sejenis
Bluetooth is a wireless technology with a frequency range of 2.4 GHz to 2.48 GHz used to send data between fixed and mobile devices over short distance. Based on the information above, bluetooth is a type of
(SPM: 2021)""",
        [
            {"id": "A", "teks": "gelombang ultrasonik / ultrasonic wave"},
            {"id": "B", "teks": "gelombang mikro / microwave"},
            {"id": "C", "teks": "sinar infra merah / infrared ray"},
            {"id": "D", "teks": "sinar ultra ungu / ultraviolet ray"}
        ],
        "", "SPM 2021", 2021
    ))

    # Q99 (Page 27 & 28, Rajah 77)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q99", 99, "Sederhana", "Memahami",
        """Rajah menunjukkan seorang nenek yang duduk di atas kerusi goyang. Ayunan kerusi goyang akan berkurang dan akhirnya berhenti.
Diagram shows a grandmother is sitting on a rocking chair. The swing of the rocking chair will decrease and eventually stop.
(SPM: 2022)
Konsep manakah yang menerangkan situasi tersebut?
Which of the following concepts describe the situation?""",
        [
            {"id": "A", "teks": "Resonans / Resonance"},
            {"id": "B", "teks": "Pelembapan / Damping"},
            {"id": "C", "teks": "Pantulan gelombang / Reflection of waves"},
            {"id": "D", "teks": "Pembiasan gelombang / Refraction of waves"}
        ],
        "rajah77", "SPM 2022", 2022
    ))

    # Q100 (Page 28, Rajah 78)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q100", 100, "Sederhana", "Memahami",
        """Rajah menunjukkan luar busur bulbous sebuah kapal yang menghasilkan keadaan air di sekitar kapal lebih tenang dan mengurangkan seretan air.
Diagram shows the bulbous bow of a ship which produces calmer water conditions around the ship and reduces water drag.
(SPM: 2022)
Antara yang berikut, yang manakah betul mengenai fungsi luar busur bulbous?
Which of the following is correct about the bulbous bow?""",
        [
            {"id": "A", "teks": "Menghasilkan gelombang air yang berinterferens memusnah apabila kapal sedang bergerak / Produces water waves with the destructive interference when the ship is moving"},
            {"id": "B", "teks": "Berfungsi sebagai pemecah ombak / Functions as a wave breaker"},
            {"id": "C", "teks": "Bertindak sebagai penstabil kapal / Acts as a ship stabilizer"},
            {"id": "D", "teks": "Meningkatkan daya apungan / Increases the buoyancy force"}
        ],
        "rajah78", "SPM 2022", 2022
    ))

    # Q101 (Page 28, Rajah 79)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q101", 101, "Sederhana", "Memahami",
        """Rajah menunjukkan graf sesaran-masa bagi gelombang.
Diagram shows a displacement-time graph of a wave.
(SPM: 2023)
Antara yang berikut, kuantiti fizik manakah yang boleh didapati daripada graf?
Which of the following physical quantities can be obtained from the graph?""",
        [
            {"id": "A", "teks": "Tempoh dan laju gelombang / Period and wave speed"},
            {"id": "B", "teks": "Amplitud dan tempoh / Amplitude and period"},
            {"id": "C", "teks": "Amplitud dan laju gelombang / Amplitude and wave speed"},
            {"id": "D", "teks": "Panjang gelombang dan laju gelombang / Wavelength and wave speed"}
        ],
        "rajah79", "SPM 2023", 2023
    ))

    # Q102 (Page 28, Rajah 80)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q102", 102, "Sederhana", "Memahami",
        """Rajah menunjukkan sebuah bandul ringkas yang disediakan dalam makmal.
Diagram shows a simple pendulum that is set up in a laboratory.
(SPM: 2023)
Antara yang berikut, manakah faktor yang mengurangkan frekuensi ayunan?
Which of the following factors that reduces the frequency of oscillation?""",
        [
            {"id": "A", "teks": "Menambah panjang tali / Increasing the length of the thread"},
            {"id": "B", "teks": "Mengurangkan panjang tali / Decreasing the length of the thread"},
            {"id": "C", "teks": "Menambah jisim bandul / Increasing the mass of the pendulum"},
            {"id": "D", "teks": "Mengurangkan jisim bandul / Decreasing the mass of the pendulum"}
        ],
        "rajah80", "SPM 2023", 2023
    ))

    # Q103 (Page 29, Rajah 81)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q103", 103, "Sederhana", "Memahami",
        """Rajah menunjukkan pinggir-pinggir cahaya kuning yang terbentuk semasa eksperimen dwicelah Young.
Diagram shows the fringes of yellow light that is formed during Young's double slit experiment.
(SPM: 2023)
Jarak antara pinggir-pinggir boleh dikurangkan dengan
The distance between fringes can be reduced by""",
        [
            {"id": "A", "teks": "menggantikan cahaya kuning kepada cahaya merah / replacing the yellow light to red light"},
            {"id": "B", "teks": "menggantikan cahaya kuning kepada cahaya biru / replacing the yellow light to blue light"},
            {"id": "C", "teks": "mengurangkan jarak antara dwicelah / decreasing the distance between the double slits"},
            {"id": "D", "teks": "menambahkan jarak antara dwicelah dengan skrin / increasing the distance between the double slits and the screen"}
        ],
        "rajah81", "SPM 2023", 2023
    ))

    return questions
