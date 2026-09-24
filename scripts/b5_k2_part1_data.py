# -*- coding: utf-8 -*-
"""
Dataset Konstruk 2: Memahami (Bahagian 1: Soalan 1 - 50)
Tingkatan 4 Bab 5: Gelombang (Waves)
"""

from scripts.build_dataset_helper_b5 import make_b5_q

def get_k2_part1_questions():
    questions = []

    # Q01 (Page 2)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q01", 1, "Sederhana", "Memahami",
        "Gelombang elektromagnet manakah mempunyai frekuensi paling rendah dan panjang gelombang paling besar?\nWhich of the electromagnetic waves has the lowest frequency and the longest wavelength?\n(Kelantan: 2023)",
        [
            {"id": "A", "teks": "Gelombang radio / Radio wave"},
            {"id": "B", "teks": "Gelombang mikro / Microwave"},
            {"id": "C", "teks": "Sinar gama / Gamma ray"},
            {"id": "D", "teks": "Sinar ultraungu / Ultraviolet ray"}
        ],
        "", "Percubaan Kelantan 2023", 2023
    ))

    # Q02 (Page 2)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q02", 2, "Sederhana", "Memahami",
        "Kuantiti fizik yang malar pada suatu gelombang selepas merambat melalui satu celah adalah\nThe physical quantity of waves which constant after the waves is propagate through a slit are\n(Kelantan: 2023)\n\nI Laju / Speed\n<br><br>\nII Amplitud / Amplitude\n<br><br>\nIII Frekuensi / Frequency\n<br><br>\nIV Panjang gelombang / Wavelength",
        [
            {"id": "A", "teks": "I dan II / I and II"},
            {"id": "B", "teks": "I dan III / I and III"},
            {"id": "C", "teks": "I, II dan IV / I, II and IV"},
            {"id": "D", "teks": "I, III dan IV / I, III and IV"}
        ],
        "", "Percubaan Kelantan 2023", 2023
    ))

    # Q03 (Page 2, Rajah 4)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q03", 3, "Sederhana", "Memahami",
        "Rajah menunjukkan lima bandul yang digantung pada satu benang MN. Bandul P disesarkan ke sisi dan dilepaskan supaya berayun.\nDiagram shows five pendulums are hung to a MN thread. Pendulum P is displaced to the side and released to oscillate.\n(Kelantan: 2023)\n\nBandul yang manakah akan berayun dengan amplitud paling tinggi?\nWhich pendulum will oscillate with higher amplitude?",
        [
            {"id": "A", "teks": "W / W"},
            {"id": "B", "teks": "X / X"},
            {"id": "C", "teks": "Y / Y"},
            {"id": "D", "teks": "Z / Z"}
        ],
        "rajah4", "Percubaan Kelantan 2023", 2023
    ))

    # Q04 (Page 2, Rajah 5)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q04", 4, "Sederhana", "Memahami",
        "Rajah menunjukkan satu graf perubahan sesaran gelombang melawan masa pada suatu titik di sepanjang gelombang.\nDiagram shows a graph of the change in wave displacement against time at a point along the wave.\n(Melaka: 2023)\n\nApakah kuantiti fizik yang dimalarkan?\nWhat is the physical quantity that is constant?",
        [
            {"id": "A", "teks": "Saiz / Size"},
            {"id": "B", "teks": "Tempoh / Period"},
            {"id": "C", "teks": "Tenaga / Energy"},
            {"id": "D", "teks": "Amplitud / Amplitude"}
        ],
        "rajah5", "Percubaan Melaka 2023", 2023
    ))

    # Q05 (Page 3)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q05", 5, "Sederhana", "Memahami",
        "Antara sinaran elektromagnet berikut, yang manakah mempunyai tenaga paling tinggi?\nWhich of the following electromagnetic radiation has the highest energy?\n(Melaka: 2023)",
        [
            {"id": "A", "teks": "Cahaya nampak / Visible light"},
            {"id": "B", "teks": "Sinar X / X-ray"},
            {"id": "C", "teks": "Gelombang mikro / Microwave"},
            {"id": "D", "teks": "Gelombang radio / Radio wave"}
        ],
        "", "Percubaan Melaka 2023", 2023
    ))

    # Q06 (Page 3)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q06", 6, "Sederhana", "Memahami",
        "Satu sistem mempunyai frekuensi asli bersamaan f. Satu daya luar memberikan tenaga kepada sistem itu untuk meneruskan ayunan. Resonans akan berlaku dalam sistem itu jika tenaga diberikan kepada sistem itu pada frekuensi yang sama dengan\nA system has a natural frequency of oscillation equals to f. An external force is supplying energy to the system to perpetuate the oscillations of the system. Resonance will occur in this system if energy is supplied to the system at a frequency equal to\n(Negeri Sembilan: 2023)",
        [
            {"id": "A", "teks": "f / f"},
            {"id": "B", "teks": "√2 f / √2 f"},
            {"id": "C", "teks": "2f / 2f"},
            {"id": "D", "teks": "f / 2 / f / 2"}
        ],
        "", "Percubaan Negeri Sembilan 2023", 2023
    ))

    # Q07 (Page 3, Rajah 6)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q07", 7, "Sederhana", "Memahami",
        "Rajah menunjukkan penggunaan gelombang elektromagnet dalam sistem radar.\nDiagram shows an application of electromagnetic waves in a radar system.\n(Negeri Sembilan: 2023)\n\nPasangan yang manakah yang betul tentang ciri-ciri gelombang yang digunakan?\nWhich pair is correct about the characteristics of the wave used?",
        [
            {"id": "A", "teks": "Frekuensi: Tinggi | Panjang gelombang: Pendek / Frequency: High | Wavelength: Short"},
            {"id": "B", "teks": "Frekuensi: Tinggi | Panjang gelombang: Panjang / Frequency: High | Wavelength: Long"},
            {"id": "C", "teks": "Frekuensi: Rendah | Panjang gelombang: Panjang / Frequency: Low | Wavelength: Long"},
            {"id": "D", "teks": "Frekuensi: Rendah | Panjang gelombang: Pendek / Frequency: Low | Wavelength: Short"}
        ],
        "rajah6", "Percubaan Negeri Sembilan 2023", 2023
    ))

    # Q08 (Page 3, Rajah 7)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q08", 8, "Sederhana", "Memahami",
        "Rajah menunjukkan dua orang remaja sedang berbual di dalam sebuah rumah kosong. Mereka mendapati suara mereka kurang jelas kedengaran kerana gema yang kuat.\nDiagram shows two teenagers chatting in an empty house. They find that their voices are not clearly heard because of the strong echo.\n(Pahang: 2023)\n\nAntara berikut, manakah faktor yang mempengaruhi fenomena di dalam rumah tersebut?\nWhich of the following factors affect the phenomenon in the house?",
        [
            {"id": "A", "teks": "Suasana rumah yang sunyi dan sepi / The surrounding of the house is quiet"},
            {"id": "B", "teks": "Bunyi suara mereka dipantulkan oleh dinding dan lantai / The sound of their voices was reflected by the walls and floor"},
            {"id": "C", "teks": "Bunyi suara mereka terbelau oleh tingkap dan pintu bilik / The sound of their voices was diffracted by the windows and doors of the rooms"},
            {"id": "D", "teks": "Bunyi suara mereka dibiaskan oleh sisi penjuru ruang rumah / The sound of their voices was refracted by the corner of the room"}
        ],
        "rajah7", "Percubaan Pahang 2023", 2023
    ))

    # Q09 (Page 3, Rajah 8)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q09", 9, "Sederhana", "Memahami",
        "Rajah menunjukkan seorang lelaki dapat mendengar dengan jelas bunyi dari sebuah rumah pada waktu malam.\nDiagram shows a man can clearly hear a sound from a house at night.\n(Pahang: 2023)\n\nApakah fenomena gelombang yang terlibat?\nWhat is the waves phenomenon involved?",
        [
            {"id": "A", "teks": "Pembiasan gelombang / Refraction of waves"},
            {"id": "B", "teks": "Interferens gelombang / Waves interference"},
            {"id": "C", "teks": "Pantulan gelombang / Reflection of waves"},
            {"id": "D", "teks": "Pembelauan gelombang / Diffraction of waves"}
        ],
        "rajah8", "Percubaan Pahang 2023", 2023
    ))

    # Q10 (Page 5, Rajah 9)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q10", 10, "Sederhana", "Memahami",
        "Rajah menunjukkan gelombang air merambat dari laut ke pantai.\nDiagram shows water waves propagating from sea to beach.\n(Pulau Pinang: 2023)\n\nManakah ciri-ciri gelombang bagi situasi di atas adalah yang betul?\nWhich characteristics of wave for above situation is correct?",
        [
            {"id": "A", "teks": "Laju: Bertambah | Panjang gelombang: Bertambah / Speed: Increase | Wavelength: Increase"},
            {"id": "B", "teks": "Laju: Bertambah | Panjang gelombang: Berkurang / Speed: Increase | Wavelength: Decrease"},
            {"id": "C", "teks": "Laju: Berkurang | Panjang gelombang: Bertambah / Speed: Decrease | Wavelength: Increase"},
            {"id": "D", "teks": "Laju: Berkurang | Panjang gelombang: Berkurang / Speed: Decrease | Wavelength: Decrease"}
        ],
        "rajah9", "Percubaan Pulau Pinang 2023", 2023
    ))

    # Q11 (Page 5, Rajah 10)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q11", 11, "Sederhana", "Memahami",
        "Rajah menunjukkan satu penghadang ombak.\nDiagram shows a wave barrier.\n(Pulau Pinang: 2023)\n\nApakah fungsi bukaan di antara penghadang ombak?\nWhat is the function of the gap between the wave barriers?",
        [
            {"id": "A", "teks": "Untuk mengurangkan halaju gelombang / To reduce the velocity of the wave"},
            {"id": "B", "teks": "Untuk mengurangkan panjang gelombang / To reduce wavelength"},
            {"id": "C", "teks": "Untuk mengurangkan amplitud gelombang / To reduce the amplitude of the wave"},
            {"id": "D", "teks": "Untuk mengurangkan frekuensi gelombang / To reduce the frequency of the wave"}
        ],
        "rajah10", "Percubaan Pulau Pinang 2023", 2023
    ))

    # Q12 (Page 5, Rajah 11)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q12", 12, "Sederhana", "Memahami",
        "Rajah menunjukkan suatu spektrum gelombang elektromagnet.\nDiagram shows a spectrum of electromagnetic waves.\n(Pulau Pinang: 2023)\n\nKuantiti fizik manakah bertambah daripada sinar gama ke gelombang radio?\nWhich physical quantity increases from gamma ray to radio wave?",
        [
            {"id": "A", "teks": "Tenaga / Energy"},
            {"id": "B", "teks": "Frekuensi / Frequency"},
            {"id": "C", "teks": "Laju gelombang / Wave speed"},
            {"id": "D", "teks": "Panjang gelombang / Wavelength"}
        ],
        "rajah11", "Percubaan Pulau Pinang 2023", 2023
    ))

    # Q13 (Page 5, Rajah 12)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q13", 13, "Sederhana", "Memahami",
        "Rajah menunjukkan spring slinki digerakkan ke hadapan dan belakang pada satu hujungnya.\nDiagram shows a slinky spring being moved forward and backward at one of its ends.\n(Perak: 2023)\n\nSituasi manakah menghasilkan jenis gelombang yang sama seperti di atas?\nWhich of the following situation produce the same type of wave as above?",
        [
            {"id": "A", "teks": "Gelombang cahaya daripada lampu suluh / Light waves from a torchlight"},
            {"id": "B", "teks": "Gelombang air dalam tangki riak / Water waves in a ripple tank"},
            {"id": "C", "teks": "Gelombang pada tali yang digetarkan / Waves on a vibrating string"},
            {"id": "D", "teks": "Gelombang bunyi daripada tala bunyi yang bergetar / Sound waves from a vibrating tuning fork"}
        ],
        "rajah12", "Percubaan Perak 2023", 2023
    ))

    # Q14 (Page 6, Rajah 13)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q14", 14, "Sederhana", "Memahami",
        "Rajah menunjukkan pantulan gelombang satah oleh pemantul satah.\nDiagram shows the reflection of a plane wave by a plane reflector.\n(Perak: 2023)\n\nAntara pernyataan berikut, manakah yang tidak benar?\nWhich of the following statements is not true?",
        [
            {"id": "A", "teks": "Sudut tuju, i adalah sama dengan sudut pantulan, r / Angle of incidence, i is equal to the angle of reflection, r"},
            {"id": "B", "teks": "Arah perambatan gelombang pantulan berubah / The direction of propagation of reflected waves is changed"},
            {"id": "C", "teks": "Kelajuan gelombang pantulan sama dengan gelombang tuju / The speed of the reflected wave is the same as the incident waves"},
            {"id": "D", "teks": "Frekuensi gelombang pantulan adalah separuh daripada gelombang tuju / The frequency of the reflected wave is half of the incident wave"}
        ],
        "rajah13", "Percubaan Perak 2023", 2023
    ))

    # Q15 (Page 6)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q15", 15, "Sederhana", "Memahami",
        "Pernyataan manakah benar tentang sifat-sifat gelombang elektromagnet?\nWhich statement is true about the properties of electromagnetic waves?\n(Perak: 2023)",
        [
            {"id": "A", "teks": "Gelombang elektromagnet ialah gelombang membujur / Electromagnetic waves are longitudinal wave"},
            {"id": "B", "teks": "Gelombang elektromagnet merambat pada 300 m s⁻¹ / Electromagnetic waves propagate at 300 m s⁻¹"},
            {"id": "C", "teks": "Gelombang elektromagnet mengalami pantulan, pembiasan, pembelauan dan interferens / Electromagnetic waves undergo reflection, refraction, diffraction and interference"},
            {"id": "D", "teks": "Gelombang elektromagnet terdiri daripada medan elektrik dan medan magnet yang berayun selari dengan arah perambatan gelombang / Electromagnetic waves consist of an oscillating electric field and magnetic field parallel to the direction of wave propagation"}
        ],
        "", "Percubaan Perak 2023", 2023
    ))

    # Q16 (Page 6, Rajah 14)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q16", 16, "Sederhana", "Memahami",
        "Rajah menunjukkan corak interferens bagi tiga sumber cahaya monokromatik, X, Y dan Z.\nDiagram shows the interference patterns for three monochromatic light sources, X, Y and Z.\n(Perlis: 2023)\n\nApakah warna spektrum bagi sumber cahaya X, Y dan Z?\nWhat is the colour spectrum for light source X, Y and Z?",
        [
            {"id": "A", "teks": "X: Biru | Y: Hijau | Z: Merah / X: Blue | Y: Green | Z: Red"},
            {"id": "B", "teks": "X: Hijau | Y: Biru | Z: Merah / X: Green | Y: Blue | Z: Red"},
            {"id": "C", "teks": "X: Biru | Y: Merah | Z: Hijau / X: Blue | Y: Red | Z: Green"},
            {"id": "D", "teks": "X: Merah | Y: Hijau | Z: Biru / X: Red | Y: Green | Z: Blue"}
        ],
        "rajah14", "Percubaan Perlis 2023", 2023
    ))

    # Q17 (Page 7, Rajah 15)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q17", 17, "Sederhana", "Memahami",
        "Rajah menunjukkan satu aplikasi gelombang elektromagnet.\nDiagram shows an application of electromagnetic wave.\n(Perlis: 2023)\n\nAntara berikut, pernyataan manakah yang betul mengenai gelombang yang digunakan?\nWhich of the following statement is correct about the wave used?",
        [
            {"id": "A", "teks": "Jenis gelombang: Membujur | Frekuensi: Tinggi | Jumlah tenaga: Tinggi / Type of wave: Longitudinal | Frequency: High | Total energy: High"},
            {"id": "B", "teks": "Jenis gelombang: Melintang | Frekuensi: Tinggi | Jumlah tenaga: Rendah / Type of wave: Transverse | Frequency: High | Total energy: Low"},
            {"id": "C", "teks": "Jenis gelombang: Melintang | Frekuensi: Tinggi | Jumlah tenaga: Tinggi / Type of wave: Transverse | Frequency: High | Total energy: High"},
            {"id": "D", "teks": "Jenis gelombang: Membujur | Frekuensi: Rendah | Jumlah tenaga: Rendah / Type of wave: Longitudinal | Frequency: Low | Total energy: Low"}
        ],
        "rajah15", "Percubaan Perlis 2023", 2023
    ))

    # Q18 (Page 7)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q18", 18, "Sederhana", "Memahami",
        "Ciri manakah tidak berubah selepas gelombang air dipantulkan?\nWhich characteristic does not change after water wave is reflected?\n(SBP: 2023)",
        [
            {"id": "A", "teks": "Halaju / Velocity"},
            {"id": "B", "teks": "Amplitud / Amplitude"},
            {"id": "C", "teks": "Arah gelombang / Direction of wave"},
            {"id": "D", "teks": "Panjang gelombang / Wavelength"}
        ],
        "", "Percubaan SBP 2023", 2023
    ))

    # Q19 (Page 7, Rajah 16)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q19", 19, "Sederhana", "Memahami",
        "Rajah menunjukkan seorang murid boleh mendengar muzik yang datang dari luar.\nDiagram shows a pupil can hear music from outside.\n(SBP: 2023)\n\nApakah fenomena yang berkaitan dengan situasi di atas?\nWhat is phenomenon related to the above situation?",
        [
            {"id": "A", "teks": "Pantulan / Reflection"},
            {"id": "B", "teks": "Pembiasan / Refraction"},
            {"id": "C", "teks": "Interferens / Interference"},
            {"id": "D", "teks": "Pembelauan / Diffraction"}
        ],
        "rajah16", "Percubaan SBP 2023", 2023
    ))

    # Q20 (Page 7)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q20", 20, "Sederhana", "Memahami",
        "Antara pernyataan berikut, yang manakah betul tentang gelombang elektromagnet?\nWhich of the following statements is correct about electromagnetic waves?\n(Terengganu: 2023)",
        [
            {"id": "A", "teks": "Memerlukan medium untuk memindahkan tenaga / Requires a medium to transfer energy"},
            {"id": "B", "teks": "Gelombang air dan gelombang bunyi adalah contoh gelombang elektromagnet / Water waves and sound waves are examples of electromagnetic waves"},
            {"id": "C", "teks": "Profil gelombang tidak merambat dengan masa / The profile of the wave does not propagate with time"},
            {"id": "D", "teks": "Terdiri daripada medan elektrik dan medan magnet yang berayun berserenjang antara satu sama lain / Consist of an oscillating electric field and magnetic fields that are perpendicular to one another"}
        ],
        "", "Percubaan Terengganu 2023", 2023
    ))

    # Q21 (Page 7 & 8, Rajah 17)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q21", 21, "Sederhana", "Memahami",
        "Rajah menunjukkan seekor ikan lumba-lumba menghantar gelombang untuk mencari makanan.\nDiagram shows a dolphin sending out waves to search for foods.\n(Terengganu: 2023)\n\nApakah nama gelombang yang digunakan oleh ikan lumba-lumba untuk mengesan lokasi ikan?\nWhat is the name of waves used by the dolphin to detect the location of the fish?",
        [
            {"id": "A", "teks": "Gelombang infrasonik / Infrasonic waves"},
            {"id": "B", "teks": "Gelombang audiosonik / Audiosonic waves"},
            {"id": "C", "teks": "Gelombang ultrasonik / Ultrasonic waves"},
            {"id": "D", "teks": "Gelombang elektromagnet / Electromagnetic waves"}
        ],
        "rajah17", "Percubaan Terengganu 2023", 2023
    ))

    # Q22 (Page 8, Rajah 18)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q22", 22, "Sederhana", "Memahami",
        "Rajah menunjukkan dua tala bunyi yang serupa, X dan Y diletakkan bersebelahan. Tala bunyi X diketuk supaya bergetar. Tala bunyi Y kemudian turut bergetar.\nDiagram shows two identical tuning forks, X and Y, which are placed side by side. Tuning fork X is struck to vibrate. Tuning fork Y then vibrates too.\n(SMKA: 2023)\n\nKesan ini dikenali sebagai\nThis effect is known as",
        [
            {"id": "A", "teks": "kelangsingan / pitch"},
            {"id": "B", "teks": "pelembapan / damping"},
            {"id": "C", "teks": "resonans / resonance"},
            {"id": "D", "teks": "ayunan / oscillation"}
        ],
        "rajah18", "Percubaan SMKA 2023", 2023
    ))

    # Q23 (Page 8, Rajah 19)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q23", 23, "Sederhana", "Memahami",
        "Rajah menunjukkan corak pembiasan bagi gelombang air dari P ke Q.\nDiagram shows the refraction pattern of water wave from P to Q.\n(SMKA: 2023)\n\nPasangan manakah yang betul mengenai ciri-ciri bagi gelombang air dalam Q?\nWhich pair is correct about the characteristics of water wave in Q?",
        [
            {"id": "A", "teks": "Frekuensi: Lebih tinggi | Laju: Lebih tinggi / Frequency: Higher | Speed: Higher"},
            {"id": "B", "teks": "Frekuensi: Lebih tinggi | Laju: Lebih rendah / Frequency: Higher | Speed: Lower"},
            {"id": "C", "teks": "Frekuensi: Tidak berubah | Laju: Lebih tinggi / Frequency: Unchanged | Speed: Higher"},
            {"id": "D", "teks": "Frekuensi: Tidak berubah | Laju: Lebih rendah / Frequency: Unchanged | Speed: Lower"}
        ],
        "rajah19", "Percubaan SMKA 2023", 2023
    ))

    # Q24 (Page 8, Rajah 20)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q24", 24, "Sederhana", "Memahami",
        "Rajah menunjukkan gelombang membujur yang dihasilkan oleh tala bunyi.\nDiagram shows longitudinal waves produced by a tuning fork.\n(MRSM: 2023)\n\nAntara berikut, pernyataan manakah yang menerangkan gelombang membujur?\nWhich of the following statements explains longitudinal wave?",
        [
            {"id": "A", "teks": "Zarah-zarah medium bergetar pada arah yang bertentangan dengan arah perambatan gelombang / Particles of the medium vibrate in the opposite direction with the direction of propagation of the wave"},
            {"id": "B", "teks": "Zarah-zarah medium bergetar pada arah yang berserenjang dengan arah perambatan gelombang / Particles of the medium vibrate in the direction perpendicular to the direction of propagation of the wave"},
            {"id": "C", "teks": "Zarah-zarah medium bergetar pada arah yang sama dengan arah perambatan gelombang / Particles of the medium vibrate in the same direction with the direction of propagation of the wave"},
            {"id": "D", "teks": "Zarah-zarah medium bergetar pada arah yang selari dengan arah perambatan gelombang / Particles of the medium vibrate in the direction parallel to the direction of propagation of the wave"}
        ],
        "rajah20", "Percubaan MRSM 2023", 2023
    ))

    # Q25 (Page 9, Rajah 21)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q25", 25, "Sederhana", "Memahami",
        "Rajah menunjukkan gelas kaca pecah apabila seorang penyanyi soprano menyanyi.\nDiagram shows a glass shattered when a soprano singer sings.\n(MRSM: 2023)\n\nApakah fenomena fizik yang menerangkan situasi di atas?\nWhat is the physics phenomenon that explains the above situation?",
        [
            {"id": "A", "teks": "Pembiasan gelombang / Refraction of waves"},
            {"id": "B", "teks": "Pelembapan / Damping"},
            {"id": "C", "teks": "Interferens / Interference"},
            {"id": "D", "teks": "Resonans / Resonance"}
        ],
        "rajah21", "Percubaan MRSM 2023", 2023
    ))

    # Q26 (Page 9, Rajah 22)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q26", 26, "Sederhana", "Memahami",
        "Rajah menunjukkan proses mengeraskan bahan tampalan gigi menggunakan gelombang elektromagnet.\nDiagram shows process of hardening tooth filling material using electromagnetic wave.\n(MRSM: 2023)\n\nApakah nama gelombang yang digunakan?\nWhat is the name of wave used?",
        [
            {"id": "A", "teks": "Gelombang radio / Radio wave"},
            {"id": "B", "teks": "Gelombang mikro / Microwave"},
            {"id": "C", "teks": "Sinaran ultraungu / Ultraviolet ray"},
            {"id": "D", "teks": "Sinar-X / X-ray"}
        ],
        "rajah22", "Percubaan MRSM 2023", 2023
    ))

    # Q27 (Page 9, Rajah 23)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q27", 27, "Sederhana", "Memahami",
        "Rajah menunjukkan pantulan sejenis gelombang.\nDiagram shows reflection of a wave.\n(Kedah: 2022)\n\nPernyataan manakah benar tentang ciri-ciri gelombang pantulan?\nWhich statement is correct about the characteristics of reflected waves?",
        [
            {"id": "A", "teks": "Amplitud gelombang bertambah / Amplitude of the wave increases"},
            {"id": "B", "teks": "Frekuensi gelombang berkurang / Frequency of the wave decreases"},
            {"id": "C", "teks": "Panjang gelombang tidak berubah / Wavelength does not change"},
            {"id": "D", "teks": "Halaju gelombang tidak berubah / Velocity of the wave does not change"}
        ],
        "rajah23", "Percubaan Kedah 2022", 2022
    ))

    # Q28 (Page 9, Rajah 24)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q28", 28, "Sederhana", "Memahami",
        "Rajah menunjukkan gelombang air bergerak mendekati suatu benteng.\nDiagram shows water wave moves towards an embankment.\n(Kedah: 2022)\n\nCiri-ciri gelombang manakah berubah apabila gelombang air merambat melalui celah benteng itu?\nWhich characteristics of wave change when water wave propagate through the gap of embankment?",
        [
            {"id": "A", "teks": "Laju / Speed"},
            {"id": "B", "teks": "Amplitud / Amplitude"},
            {"id": "C", "teks": "Frekuensi / Frequency"},
            {"id": "D", "teks": "Panjang gelombang / Wavelength"}
        ],
        "rajah24", "Percubaan Kedah 2022", 2022
    ))

    # Q29 (Page 10, Rajah 25)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q29", 29, "Sederhana", "Memahami",
        "Rajah menunjukkan susunan radas untuk mengkaji interferens gelombang cahaya.\nDiagram shows the arrangement of an apparatus to investigate the interference of light wave.\n(Kedah: 2022)\n\nGraf manakah yang menunjukkan hubungan yang betul antara D dan x?\nWhich graph shows the correct relationship between D and x?",
        [
            {"id": "A", "teks": "x berkadar terus dengan D (garis lurus melalui asalan) / x is directly proportional to D (straight line through origin)"},
            {"id": "B", "teks": "x berkadar songsang dengan D / x is inversely proportional to D"},
            {"id": "C", "teks": "x bertambah secara linear dengan D (kecerunan negatif) / x increases linearly with D (negative gradient)"},
            {"id": "D", "teks": "x tidak bergantung kepada D (garis mendatar) / x does not depend on D (horizontal line)"}
        ],
        "rajah25", "Percubaan Kedah 2022", 2022
    ))

    # Q30 (Page 10, Rajah 26)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q30", 30, "Sederhana", "Memahami",
        "Rajah menunjukkan susunan radas yang digunakan dalam eksperimen interferens gelombang bunyi.\nDiagram shows the arrangement of apparatus used in the experiment of the interference of sound waves.\n(Kelantan: 2022)\n\nJarak antara dua bunyi kuat, x meningkat apabila\nThe distance between two loud sounds, x increases as",
        [
            {"id": "A", "teks": "jarak antara dua pembesar suara, a meningkat / the distance between two loud speakers, a increases"},
            {"id": "B", "teks": "diameter pembesar suara bertambah / the diameter of the loudspeaker increases"},
            {"id": "C", "teks": "frekuensi penjana isyarat audio bertambah / the frequency of the audio signal generator increases"},
            {"id": "D", "teks": "jarak antara pembesar suara dan bunyi dikesan, D bertambah / the distance between the loudspeakers and the sound detected, D increases"}
        ],
        "rajah26", "Percubaan Kelantan 2022", 2022
    ))

    # Q31 (Page 10)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q31", 31, "Sederhana", "Memahami",
        "Manakah kuantiti fizikal yang akan berubah apabila amplitud gelombang bertambah?\nWhen the amplitude of the wave increases, which physical quantity changes?\n(Melaka: 2022)",
        [
            {"id": "A", "teks": "Tempoh berkurang / Period decreases"},
            {"id": "B", "teks": "Tenaga bertambah / Energy increases"},
            {"id": "C", "teks": "Laju bertambah / Speed increases"},
            {"id": "D", "teks": "Panjang gelombang bertambah / Wavelength increases"}
        ],
        "", "Percubaan Melaka 2022", 2022
    ))

    # Q32 (Page 10, Rajah 27)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q32", 32, "Sederhana", "Memahami",
        "Rajah menunjukkan muka gelombang merambat menuju pantai dari laut. Adalah diperhatikan laut lebih tenang di teluk berbanding di tanjung.\nDiagram shows wavefronts that move towards the beach from the sea. It is observed that the sea is calmer at the bay than at the cape.\n(Melaka: 2022)\n\nFenomena ini dikenali sebagai\nThe phenomenon is known as",
        [
            {"id": "A", "teks": "pantulan / reflection"},
            {"id": "B", "teks": "pembiasan / refraction"},
            {"id": "C", "teks": "pembelauan / diffraction"},
            {"id": "D", "teks": "interferens / interference"}
        ],
        "rajah27", "Percubaan Melaka 2022", 2022
    ))

    # Q33 (Page 11, Rajah 28)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q33", 33, "Sederhana", "Memahami",
        "Rajah menunjukkan seorang budak lelaki di atas buaian. Buaian tersebut mengalami pelembapan.\nDiagram shows a boy on a swing. The swing undergoes damping.\n(MRSM: 2022)\n\nJawapan manakah yang betul?\nWhich answer is correct?",
        [
            {"id": "A", "teks": "Amplitud berkurang terhadap masa, frekuensi malar / Amplitude decreases with time, frequency is constant"},
            {"id": "B", "teks": "Amplitud bertambah terhadap masa, frekuensi berkurang / Amplitude increases with time, frequency decreases"},
            {"id": "C", "teks": "Amplitud malar, frekuensi berkurang terhadap masa / Amplitude is constant, frequency decreases with time"},
            {"id": "D", "teks": "Amplitud dan frekuensi kedua-duanya berkurang terhadap masa / Both amplitude and frequency decrease with time"}
        ],
        "rajah28", "Percubaan MRSM 2022", 2022
    ))

    # Q34 (Page 11, Rajah 29)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q34", 34, "Sederhana", "Memahami",
        "Rajah menunjukkan gelombang air merambat dari kawasan cetek ke kawasan dalam.\nDiagram shows water waves propagates from shallow area to deep area.\n(MRSM: 2022)\n\nGraf yang manakah mewakili hubungan antara panjang gelombang, λ dan kedalaman air, h?\nWhich graph represents the relationship between wavelength, λ and depth, h of the water?",
        [
            {"id": "A", "teks": "λ bertambah secara langsung dengan h / λ increases directly with h"},
            {"id": "B", "teks": "λ berkurang secara songsang dengan h / λ decreases inversely with h"},
            {"id": "C", "teks": "λ malar terhadap h / λ is constant against h"},
            {"id": "D", "teks": "λ berkadar songsang dengan h² / λ is inversely proportional to h²"}
        ],
        "rajah29", "Percubaan MRSM 2022", 2022
    ))

    # Q35 (Page 11, Rajah 30)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q35", 35, "Sederhana", "Memahami",
        "Rajah menunjukkan hologram pada sekeping kad bank.\nDiagram shows hologram on a bank card.\n(MRSM: 2022)\n\nKuantiti manakah yang berubah apabila cahaya melepasi hologram tersebut?\nWhich quantity changes when the light pass through the hologram?",
        [
            {"id": "A", "teks": "Laju berkurang / Speed decreases"},
            {"id": "B", "teks": "Tenaga berkurang / Energy decreases"},
            {"id": "C", "teks": "Frekuensi berkurang / Frequency decreases"},
            {"id": "D", "teks": "Panjang gelombang berkurang / Wavelength decreases"}
        ],
        "rajah30", "Percubaan MRSM 2022", 2022
    ))

    # Q36 (Page 11 & 12, Rajah 31)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q36", 36, "Sederhana", "Memahami",
        "Rajah menunjukkan dua pembesar suara yang disambungkan kepada satu penjana isyarat audio. Pembesar suara menghasilkan siri bunyi kuat dan perlahan berselang seli.\nDiagram shows two speakers connected to an audio signal generator. The speakers produced a series of loud and soft sounds alternately.\n(MRSM: 2022)\n\nJarak di antara dua bunyi kuat yang berurutan bertambah apabila\nThe distance between two consecutive loud sound increases when",
        [
            {"id": "A", "teks": "frekuensi bunyi berkurang / the frequency of sound decreases"},
            {"id": "B", "teks": "panjang gelombang berkurang / wavelength decreases"},
            {"id": "C", "teks": "jarak di antara dua pembesar suara bertambah / the distance between two speakers increases"},
            {"id": "D", "teks": "jarak serenjang dari pembesar suara dan kedudukan di mana siri bunyi kuat dan perlahan dihasilkan berkurang / the perpendicular distance from the speakers and the position where series of loud and soft sound produced decreases"}
        ],
        "rajah31", "Percubaan MRSM 2022", 2022
    ))

    # Q37 (Page 12, Rajah 32)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q37", 37, "Sederhana", "Memahami",
        "Rajah menunjukkan sinar gama digunakan untuk mengekalkan kesegaran sayur.\nDiagram shows gamma ray used to maintain the freshness of vegetables.\n(MRSM: 2022)\n\nPasangan ciri manakah yang betul?\nWhich pair of characteristics is correct?",
        [
            {"id": "A", "teks": "Frekuensi: Tinggi | Panjang gelombang: Pendek / Frequency: High | Wavelength: Short"},
            {"id": "B", "teks": "Frekuensi: Rendah | Panjang gelombang: Pendek / Frequency: Low | Wavelength: Short"},
            {"id": "C", "teks": "Frekuensi: Tinggi | Panjang gelombang: Panjang / Frequency: High | Wavelength: Long"},
            {"id": "D", "teks": "Frekuensi: Rendah | Panjang gelombang: Panjang / Frequency: Low | Wavelength: Long"}
        ],
        "rajah32", "Percubaan MRSM 2022", 2022
    ))

    # Q38 (Page 12)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q38", 38, "Sederhana", "Memahami",
        "Pernyataan manakah antara berikut adalah benar mengenai gelombang elektromagnet?\nWhich statement is true about electromagnetic waves?\n(Negeri Sembilan: 2022)\n\nI Merupakan gelombang melintang / They are transverse waves\n<br><br>\nII Gelombang yang memerlukan medium untuk merambat / Waves that require a medium to travel\n<br><br>\nIII Boleh merambat melalui vakum / Can travel through a vacuum\n<br><br>\nIV Terdiri daripada kedua-dua medan magnet dan medan elektrik / Consist of both magnetic fields and electric fields",
        [
            {"id": "A", "teks": "I dan IV / I and IV"},
            {"id": "B", "teks": "II, III dan IV / II, III and IV"},
            {"id": "C", "teks": "I, III dan IV / I, III and IV"},
            {"id": "D", "teks": "I, II dan IV / I, II and IV"}
        ],
        "", "Percubaan Negeri Sembilan 2022", 2022
    ))

    # Q39 (Page 12, Rajah 33)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q39", 39, "Sederhana", "Memahami",
        "Rajah menunjukkan ombak sedang menuju ke sebuah pelabuhan.\nDiagram shows water waves moving towards a harbour.\n(Negeri Sembilan: 2022)\n\nAntara pernyataan-pernyataan berikut, yang manakah betul mengenai ombak di P?\nWhich of the following statement is correct about the waves at P?",
        [
            {"id": "A", "teks": "Frekuensi berkurang / Frequency is decrease"},
            {"id": "B", "teks": "Halaju bertambah / Velocity is increase"},
            {"id": "C", "teks": "Panjang gelombang bertambah / Wavelength is increase"},
            {"id": "D", "teks": "Tenaga gelombang berkurang / Energy is decrease"}
        ],
        "rajah33", "Percubaan Negeri Sembilan 2022", 2022
    ))

    # Q40 (Page 13, Rajah 34)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q40", 40, "Sederhana", "Memahami",
        "Rajah menunjukkan pinggir-pinggir yang diperolehi apabila cahaya biru digunakan dalam eksperimen dwi-celah Young.\nDiagram shows the fringes obtained when blue light is used in a Young's double slit experiment.\n(Negeri Sembilan: 2022)\n\nPinggir-pinggir manakah yang diperhatikan jika cahaya merah digunakan dalam eksperimen tersebut?\nWhich fringes are observed if the red light is used in this experiment?",
        [
            {"id": "A", "teks": "Jarak antara pinggir bertambah (pinggir lebih lebar) / The distance between fringes increases (wider fringes)"},
            {"id": "B", "teks": "Jarak antara pinggir berkurang (pinggir lebih rapat) / The distance between fringes decreases (narrower fringes)"},
            {"id": "C", "teks": "Jarak antara pinggir tidak berubah / The distance between fringes does not change"},
            {"id": "D", "teks": "Tiada pinggir terbentuk di atas skrin / No fringes formed on the screen"}
        ],
        "rajah34", "Percubaan Negeri Sembilan 2022", 2022
    ))

    # Q41 (Page 13, Rajah 35)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q41", 41, "Sederhana", "Memahami",
        "Rajah menunjukkan dua tapak perkhemahan yang dipisahkan oleh sebuah tasik. Pada waktu tengah malam, bunyi dari tapak perkhemahan yang bertentangan dapat didengari dengan jelas.\nDiagram shows two campsites that are separated by a lake. At midnight, the sound from the opposite campsite can be heard clearly.\n(Negeri Sembilan: 2022)\n\nFenomena manakah yang menerangkan situasi di atas?\nWhich phenomenon explains the situation above?",
        [
            {"id": "A", "teks": "Pantulan gelombang / Reflection of wave"},
            {"id": "B", "teks": "Pembiasan gelombang / Refraction of wave"},
            {"id": "C", "teks": "Pembelauan gelombang / Diffraction of wave"},
            {"id": "D", "teks": "Interferens gelombang / Interference of wave"}
        ],
        "rajah35", "Percubaan Negeri Sembilan 2022", 2022
    ))

    # Q42 (Page 13, Rajah 36)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q42", 42, "Sederhana", "Memahami",
        "Rajah menunjukkan satu sistem ayunan beban logam yang berayun dalam air.\nDiagram shows an oscillating system of a metal bob oscillating in water.\n(Pahang: 2022)\n\nGraf manakah yang menunjukkan hubungan yang betul antara sesaran dan masa bagi sistem ayunan itu?\nWhich graph shows the correct relationship between displacement and time for this oscillating system?",
        [
            {"id": "A", "teks": "Graf ayunan dengan amplitud yang berkurang secara beransur-ansur terhadap masa / Oscillation graph with amplitude gradually decreasing with time"},
            {"id": "B", "teks": "Graf ayunan dengan amplitud malar terhadap masa / Oscillation graph with constant amplitude with time"},
            {"id": "C", "teks": "Graf ayunan dengan amplitud yang meningkat terhadap masa / Oscillation graph with amplitude increasing with time"},
            {"id": "D", "teks": "Graf sesaran malar tanpa ayunan / Graph of constant displacement without oscillation"}
        ],
        "rajah36", "Percubaan Pahang 2022", 2022
    ))

    # Q43 (Page 14, Rajah 37)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q43", 43, "Sederhana", "Memahami",
        "Rajah menunjukkan gelombang air merambat melalui suatu celah kecil.\nDiagram shows a water wave propagating through a small gap.\n(Pahang: 2022)\n\nCiri gelombang terbelau manakah yang betul?\nWhich property of the diffracted wave is correct?",
        [
            {"id": "A", "teks": "Kelajuan berkurang / The speed is decreased"},
            {"id": "B", "teks": "Frekuensi bertambah / The frequency is increased"},
            {"id": "C", "teks": "Amplitud berkurang / The amplitude is decreased"},
            {"id": "D", "teks": "Panjang gelombang berkurang / The wavelength is decreased"}
        ],
        "rajah37", "Percubaan Pahang 2022", 2022
    ))

    # Q44 (Page 14, Rajah 38)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q44", 44, "Sederhana", "Memahami",
        "Rajah menunjukkan corak interferens bagi dua punca gelombang air yang koheren, X dan Y.\nDiagram shows an interference pattern of two coherent water wave sources, X and Y.\n(Perlis: 2022)\n\nPada titik manakah, A, B, C atau D, interferens memusnah berlaku?\nAt which point, A, B, C or D, does the destructive interference occur?",
        [
            {"id": "A", "teks": "A / A"},
            {"id": "B", "teks": "B / B"},
            {"id": "C", "teks": "C / C"},
            {"id": "D", "teks": "D / D"}
        ],
        "rajah38", "Percubaan Perlis 2022", 2022
    ))

    # Q45 (Page 14, Rajah 39)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q45", 45, "Sederhana", "Memahami",
        "Rajah menunjukkan graf sesaran-masa bagi suatu gelombang yang mengalami pelembapan.\nDiagram shows a displacement-time graph for a wave undergoing damping.\n(Perlis: 2022)\n\nAntara yang berikut, yang manakah betul tentang frekuensi dan tenaga bagi gelombang?\nWhich of the following is correct about the frequency and energy of the wave?",
        [
            {"id": "A", "teks": "Frekuensi: Meningkat | Tenaga: Tidak berubah / Frequency: Increases | Energy: Unchanged"},
            {"id": "B", "teks": "Frekuensi: Meningkat | Tenaga: Berkurang / Frequency: Increases | Energy: Decreases"},
            {"id": "C", "teks": "Frekuensi: Tidak berubah | Tenaga: Berkurang / Frequency: Unchanged | Energy: Decreases"},
            {"id": "D", "teks": "Frekuensi: Tidak berubah | Tenaga: Tidak berubah / Frequency: Unchanged | Energy: Unchanged"}
        ],
        "rajah39", "Percubaan Perlis 2022", 2022
    ))

    # Q46 (Page 14, Rajah 40)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q46", 46, "Sederhana", "Memahami",
        "Rajah menunjukkan suatu sistem berayun mengalami pengurangan amplitud dengan masa.\nDiagram shows a swinging system experiences a decrease in amplitude with time.\n(Putrajaya: 2022)\n\nApakah proses tersebut dan kesannya ke atas tenaga sistem tersebut?\nWhat is the process and its impression on the system energy?",
        [
            {"id": "A", "teks": "Proses: Pelembapan | Tenaga: Bertambah / Process: Damping | Energy: Increases"},
            {"id": "B", "teks": "Proses: Resonans | Tenaga: Bertambah / Process: Resonance | Energy: Increases"},
            {"id": "C", "teks": "Proses: Resonans | Tenaga: Malar / Process: Resonance | Energy: Constant"},
            {"id": "D", "teks": "Proses: Pelembapan | Tenaga: Berkurang / Process: Damping | Energy: Decreases"}
        ],
        "rajah40", "Percubaan Putrajaya 2022", 2022
    ))

    # Q47 (Page 15, Rajah 41)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q47", 47, "Sederhana", "Memahami",
        "Rajah menunjukkan pemantulan gelombang satah oleh pemantul satah.\nDiagram shows the reflection of a plane wave by a plane reflector.\n(Putrajaya: 2022)\n\nAntara pernyataan yang berikut, manakah tidak benar?\nWhich of the following statements is not true?",
        [
            {"id": "A", "teks": "Sudut tuju, i adalah sama dengan sudut pantulan, r / Angle of incidence, i is equal to angle of reflection, r"},
            {"id": "B", "teks": "Arah perambatan gelombang pantulan berubah / The direction of propagation of reflected waves is changed"},
            {"id": "C", "teks": "Kelajuan gelombang pantulan sama dengan gelombang tuju / The speed of the reflected wave is same as the incident wave"},
            {"id": "D", "teks": "Frekuensi gelombang pantulan adalah separuh daripada gelombang tuju / The frequency of the reflected wave is half of the incident wave"}
        ],
        "rajah41", "Percubaan Putrajaya 2022", 2022
    ))

    # Q48 (Page 15)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q48", 48, "Sederhana", "Memahami",
        "Antara berikut, yang manakah merupakan ciri gelombang biasan dari kawasan air cetek ke kawasan air dalam?\nWhich of the following is the characteristics of refractive waves from a shallow water region to a deep-water region?\n(Putrajaya: 2022)",
        [
            {"id": "A", "teks": "Sudut tuju lebih daripada sudut pembiasan / The angle of incident is more than the angle of refraction"},
            {"id": "B", "teks": "Panjang gelombang meningkat / The wavelength increases"},
            {"id": "C", "teks": "Frekuensi berkurang / The frequency decreases"},
            {"id": "D", "teks": "Frekuensi meningkat / The frequency increases"}
        ],
        "", "Percubaan Putrajaya 2022", 2022
    ))

    # Q49 (Page 15, Rajah 42)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q49", 49, "Sederhana", "Memahami",
        "Rajah menunjukkan bandul L berayun dengan amplitud yang paling besar apabila bandul Y diayunkan.\nDiagram shows pendulum L oscillates with the largest amplitude when pendulum Y is oscillated.\n(SBP: 2022)\n\nApakah konsep fizik yang terlibat?\nWhat is the physics concept involved?",
        [
            {"id": "A", "teks": "Resonans / Resonance"},
            {"id": "B", "teks": "Interferens / Interference"},
            {"id": "C", "teks": "Pelembapan / Damping"},
            {"id": "D", "teks": "Pembelauan / Diffraction"}
        ],
        "rajah42", "Percubaan SBP 2022", 2022
    ))

    # Q50 (Page 15, Rajah 43)
    questions.append(make_b5_q(
        "MODUL_T4_B5_K2_Q50", 50, "Sederhana", "Memahami",
        "Rajah menunjukkan seorang peluncur bergerak menghampiri pantai. Peluncur itu mendapati apabila gelombang bergerak daripada kawasan dalam ke kawasan cetek, jarak antara dua puncak gelombang air berturutan semakin dekat disebabkan oleh fenomena pembiasan gelombang air.\nDiagram shows a surfer moving towards the beach. The surfer found that as the wave moves from deep water to shallow water, the distance between two consecutive water wave crest gets closer due to the phenomenon of refraction of water waves.\n(SBP: 2022)\n\nApakah kuantiti fizik yang menyebabkan pembiasan gelombang berlaku?\nWhat is the physical quantity that causes wave refraction to occur?",
        [
            {"id": "A", "teks": "Frekuensi gelombang / Wave's frequency"},
            {"id": "B", "teks": "Amplitud gelombang / Wave's amplitude"},
            {"id": "C", "teks": "Panjang gelombang / Wavelength"},
            {"id": "D", "teks": "Kedalaman air / Depth of water"}
        ],
        "rajah43", "Percubaan SBP 2022", 2022
    ))

    return questions
