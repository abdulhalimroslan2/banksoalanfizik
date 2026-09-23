from scripts.build_dataset_helper import make_q
import json

with open('scratch/t4_b3_diagram_urls.json', 'r', encoding='utf-8') as f:
    DIAGRAM_URLS = json.load(f)

def get_k3_questions():
    questions = []
    
    # Q01
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q01", 1, "Tinggi", "Mengaplikasi",
        "Berapakah halaju lepas untuk sebuah roket bergerak ke angkasa lepas?\n[Diberi; Jisim Bumi, M = 5.97 × 10²⁴ kg, Pemalar Kegravitian Semesta, G = 6.67 × 10⁻¹¹ N m² kg⁻², Jejari Bumi, R = 6.37 × 10⁶ m]\nWhat is the escape velocity for a rocket to move to outer space?\n[Given; Mass of Earth, M = 5.97 × 10²⁴ kg, Universal Gravitational Constant, G = 6.67 × 10⁻¹¹ N m² kg⁻², Radius of Earth, R = 6.37 × 10⁶ m]\n(Kelantan: 2023)",
        [
            {"id": "A", "teks": "2.03 × 10⁶ m s⁻¹ / 2.03 × 10⁶ m s⁻¹"},
            {"id": "B", "teks": "7.91 × 10³ m s⁻¹ / 7.91 × 10³ m s⁻¹"},
            {"id": "C", "teks": "1.12 × 10⁴ m s⁻¹ / 1.12 × 10⁴ m s⁻¹"},
            {"id": "D", "teks": "1.25 × 10⁴ m s⁻¹ / 1.25 × 10⁴ m s⁻¹"}
        ],
        "", "Percubaan Kelantan 2023", 2023
    ))
    
    # Q02
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q02", 2, "Tinggi", "Mengaplikasi",
        "Sebuah satelit buatan manusia mengorbit mengelilingi Bumi pada ketinggian 1720 km. Berapakah laju linear satelit itu?\n[Jisim Bumi = 5.97 × 10²⁴ kg, Jejari Bumi = 6.37 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nA man-made satellite orbits around the Earth at a height of 1720 km. What is the linear speed of the satellite?\n[Mass of the Earth = 5.97 × 10²⁴ kg, Radius of the Earth = 6.37 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n(Melaka: 2023)",
        [
            {"id": "A", "teks": "7.02 × 10³ m s⁻¹ / 7.02 × 10³ m s⁻¹"},
            {"id": "B", "teks": "7.22 × 10³ m s⁻¹ / 7.22 × 10³ m s⁻¹"},
            {"id": "C", "teks": "8.02 × 10³ m s⁻¹ / 8.02 × 10³ m s⁻¹"},
            {"id": "D", "teks": "9.92 × 10³ m s⁻¹ / 9.92 × 10³ m s⁻¹"}
        ],
        "", "Percubaan Melaka 2023", 2023
    ))
    
    # Q03
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q03", 3, "Tinggi", "Mengaplikasi",
        "Bumi mempunyai tempoh orbit 365 hari dan jarak puratanya dari Matahari adalah 1.495 × 10⁸ km. Jarak purata planet Marikh dari Matahari ialah 2.28 × 10⁸ km. Kirakan tempoh orbit Marikh dalam hari di Bumi.\nEarth has an orbital period of 365 days and its mean distance from the Sun is 1.495 × 10⁸ km. The planet Mars' mean distance from the Sun is 2.28 × 10⁸ km. Calculate Mars' orbital period in Earth days.\n(Negeri Sembilan: 2023)",
        [
            {"id": "A", "teks": "6.87 × 10² hari / 6.87 × 10² days"},
            {"id": "B", "teks": "5.64 × 10² hari / 5.64 × 10² days"},
            {"id": "C", "teks": "4.72 × 10² hari / 4.72 × 10² days"},
            {"id": "D", "teks": "1.29 × 10² hari / 1.29 × 10² days"}
        ],
        "", "Percubaan Negeri Sembilan 2023", 2023
    ))
    
    # Q04
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q04", 4, "Tinggi", "Mengaplikasi",
        "Rajah 18 menunjukkan satelit penyelidikan mengorbit pada ketinggian 420 km untuk melihat pengimejan sebuah pulau di tengah laut.\n[Jejari orbit Bulan = 3.83 × 10⁸ m, jejari Bumi = 6.37 × 10⁶ m, tempoh orbit Bulan = 655.2 jam]\nDiagram 18 shows the research satellite orbits at an altitude of 420 km to see the imaging of an island in the middle of the ocean.\n[Radius of the orbit of the Moon = 3.83 × 10⁸ m, radius of the Earth = 6.37 × 10⁶ m, orbital period of the Moon = 655.2 hours]\n(Pahang: 2023)\n\nBerapakah tempoh orbit satelit itu?\nWhat is the period of the satellite's orbit?",
        [
            {"id": "A", "teks": "0.0604 jam / 0.0604 hours"},
            {"id": "B", "teks": "1.5466 jam / 1.5466 hours"},
            {"id": "C", "teks": "2.3920 jam / 2.3920 hours"},
            {"id": "D", "teks": "3.6508 jam / 3.6508 hours"}
        ],
        "t4_b3_rajah18", "Percubaan Pahang 2023", 2023
    ))
    
    # Q05
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q05", 5, "Tinggi", "Mengaplikasi",
        "Rajah 19 menunjukkan Bulan beredar mengelilingi Bumi dalam orbitnya.\nDiagram 19 shows the Moon revolves around the Earth in its orbit.\n(Pulau Pinang: 2023)\n\nTentukan daya graviti yang dikenakan oleh Bumi terhadap Bulan.\n[Jisim Bumi = 5.97 × 10²⁴ kg, Jisim Bulan = 7.35 × 10²² kg, Jarak di antara pusat Bumi ke pusat Bulan = 3.83 × 10⁸ m dan G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nDetermine the gravitational force exerted by Earth on the Moon.\n[Mass of the Earth = 5.97 × 10²⁴ kg, Mass of the Moon = 7.35 × 10²² kg, Distance between center of the Earth to the center of the Moon = 3.83 × 10⁸ m and G = 6.67 × 10⁻¹¹ N m² kg⁻²]",
        [
            {"id": "A", "teks": "2.00 × 10¹⁷ N / 2.00 × 10¹⁷ N"},
            {"id": "B", "teks": "2.00 × 10²⁰ N / 2.00 × 10²⁰ N"},
            {"id": "C", "teks": "7.65 × 10²⁵ N / 7.65 × 10²⁵ N"},
            {"id": "D", "teks": "7.65 × 10²⁸ N / 7.65 × 10²⁸ N"}
        ],
        "t4_b3_rajah19", "Percubaan Pulau Pinang 2023", 2023
    ))
    
    # Q06
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q06", 6, "Tinggi", "Mengaplikasi",
        "Tempoh orbit Bumi dan Musytari ialah 1.0 tahun dan 11.9 tahun masing-masing. Jika jejari orbit Bumi ialah 1.50 × 10¹¹ m, hitung jejari orbit Musytari.\nThe orbital periods of the Earth and Jupiter are 1.0 year and 11.9 years respectively. If the orbital radius of the Earth is 1.50 × 10¹¹ m, calculate the orbital radius of Jupiter.\n(Perak: 2023)",
        [
            {"id": "A", "teks": "2.88 × 10¹¹ m / 2.88 × 10¹¹ m"},
            {"id": "B", "teks": "7.82 × 10¹¹ m / 7.82 × 10¹¹ m"},
            {"id": "C", "teks": "1.79 × 10¹² m / 1.79 × 10¹² m"},
            {"id": "D", "teks": "6.16 × 10¹² m / 6.16 × 10¹² m"}
        ],
        "", "Percubaan Perak 2023", 2023
    ))
    
    # Q07 (Graph/Diagram options)
    opt_a_url = DIAGRAM_URLS.get('t4_b3_k3_q07_opt_a', '')
    opt_b_url = DIAGRAM_URLS.get('t4_b3_k3_q07_opt_b', '')
    opt_c_url = DIAGRAM_URLS.get('t4_b3_k3_q07_opt_c', '')
    opt_d_url = DIAGRAM_URLS.get('t4_b3_k3_q07_opt_d', '')
    
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q07", 7, "Tinggi", "Mengaplikasi",
        "Sebuah satelit sedang mengorbit Bumi. Daya graviti yang bertindak pada satelit itu ialah F_G dan daya memusat untuk mengekalkan satelit dalam orbit ialah F_c. Rajah yang manakah menunjukkan daya-daya yang bertindak pada satelit itu?\nA satellite is orbiting the Earth. The gravitational force acting on the satellite is F_G and the centripetal force for keeping the satellite in orbit is F_c. Which diagram shows the forces acting on the orbiting satellite?\n(Perlis: 2023)",
        [
            {"id": "A", "teks": f"<img src='{opt_a_url}' alt='Pilihan A' class='h-28 mx-auto my-1 object-contain dark:bg-slate-800 p-1 rounded'>"},
            {"id": "B", "teks": f"<img src='{opt_b_url}' alt='Pilihan B' class='h-28 mx-auto my-1 object-contain dark:bg-slate-800 p-1 rounded'>"},
            {"id": "C", "teks": f"<img src='{opt_c_url}' alt='Pilihan C' class='h-28 mx-auto my-1 object-contain dark:bg-slate-800 p-1 rounded'>"},
            {"id": "D", "teks": f"<img src='{opt_d_url}' alt='Pilihan D' class='h-28 mx-auto my-1 object-contain dark:bg-slate-800 p-1 rounded'>"}
        ],
        "", "Percubaan Perlis 2023", 2023
    ))
    
    # Q08
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q08", 8, "Tinggi", "Mengaplikasi",
        "Rajah 20 menunjukkan sebuah satelit berjisim 500 kg mengorbit Bumi pada jarak 380 km daripada permukaan Bumi.\nDiagram 20 shows a satellite of mass 500 kg orbiting Earth at a distance of 380 km from the surface of Earth.\n(SBP: 2023)\n\nDengan menggunakan rumus T² = 4π²r³ / (GM), hitung tempoh orbit bagi satelit itu.\n[Jisim Bumi = 5.97 × 10²⁴ kg, Jejari Bumi = 6.37 × 10³ km, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nBy using formula T² = 4π²r³ / (GM), calculate the orbital period of the satellite.\n[Mass of the Earth = 5.97 × 10²⁴ kg, Radius of the Earth = 6.37 × 10³ km, G = 6.67 × 10⁻¹¹ N m² kg⁻²]",
        [
            {"id": "A", "teks": "3.049 × 10³ s / 3.049 × 10³ s"},
            {"id": "B", "teks": "2.563 × 10³ s / 2.563 × 10³ s"},
            {"id": "C", "teks": "5.522 × 10³ s / 5.522 × 10³ s"},
            {"id": "D", "teks": "5.062 × 10³ s / 5.062 × 10³ s"}
        ],
        "t4_b3_rajah20", "Percubaan SBP 2023", 2023
    ))
    
    # Q09
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q09", 9, "Tinggi", "Mengaplikasi",
        "Rajah 21 menunjukkan Bulan berputar mengelilingi Bumi. Daya yang menarik Bulan ke Bumi ialah 2.01 × 10²⁰ N.\n[Diberi jisim Bumi ialah 5.97 × 10²⁴ kg dan jisim Bulan ialah 7.35 × 10²² kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nDiagram 21 shows the Moon revolving around the Earth. The force that pulls the Moon towards the Earth is 2.01 × 10²⁰ N.\n[Given the mass of the Earth is 5.97 × 10²⁴ kg and the mass of the Moon is 7.35 × 10²² kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n(SMKA: 2023)\n\nBerapakah jarak antara Bumi dengan Bulan?\nWhat is the distance between the Earth and the Moon?",
        [
            {"id": "A", "teks": "1.92 × 10⁵ km / 1.92 × 10⁵ km"},
            {"id": "B", "teks": "3.74 × 10⁵ km / 3.74 × 10⁵ km"},
            {"id": "C", "teks": "3.82 × 10⁵ km / 3.82 × 10⁵ km"},
            {"id": "D", "teks": "4.12 × 10⁵ km / 4.12 × 10⁵ km"}
        ],
        "t4_b3_rajah21", "Percubaan SMKA 2023", 2023
    ))
    
    # Q10
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q10", 10, "Tinggi", "Mengaplikasi",
        "Bumi dan Zuhrah mengorbit mengelilingi Matahari. Berapakah tempoh orbit Zuhrah?\n[Jejari orbit Bumi, r_B = 1.50 × 10¹¹ m, tempoh orbit Bumi, T_B = 365 hari, jejari orbit Zuhrah, r_Z = 1.08 × 10¹¹ m]\nThe Earth and Venus orbit around the Sun. What is the orbital period of Venus?\n[Radius of orbit of the Earth, r_E = 1.50 × 10¹¹ m, period of orbit of the Earth, T_E = 365 days, radius of orbit of Venus, r_V = 1.08 × 10¹¹ m]\n(Kedah: 2022)",
        [
            {"id": "A", "teks": "323 hari / 323 days"},
            {"id": "B", "teks": "322 hari / 322 days"},
            {"id": "C", "teks": "223 hari / 223 days"},
            {"id": "D", "teks": "213 hari / 213 days"}
        ],
        "", "Percubaan Kedah 2022", 2022
    ))
    
    # Q11
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q11", 11, "Tinggi", "Mengaplikasi",
        "Satelit J mengambil masa 20 minggu untuk mengorbit Bumi. Kedudukan satelit J adalah 4 kali lebih jauh dari Bumi berbanding satelit K. Berapa lamakah tempoh satelit K mengorbit Bumi?\nSatellite J takes 20 weeks to orbit the Earth. The position of satellite J is 4 times further from the Earth than satellite K. How long does satellite K orbit the Earth?\n(Kelantan: 2022)",
        [
            {"id": "A", "teks": "2 minggu / 2 weeks"},
            {"id": "B", "teks": "2.5 minggu / 2.5 weeks"},
            {"id": "C", "teks": "4 minggu / 4 weeks"},
            {"id": "D", "teks": "4.5 minggu / 4.5 weeks"}
        ],
        "", "Percubaan Kelantan 2022", 2022
    ))
    
    # Q12
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q12", 12, "Tinggi", "Mengaplikasi",
        "Sebuah satelit pengimejan radar mengorbit mengelilingi Bumi pada ketinggian 480 km. Berapakah pecutan graviti di kedudukan satelit itu?\n[G = 6.67 × 10⁻¹¹ N m² kg⁻², M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m]\nA radar imaging satellite orbits around the Earth at a height of 480 km. What is the value of gravitational acceleration at the position of the satellite?\n[G = 6.67 × 10⁻¹¹ N m² kg⁻², M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m]\n(Melaka: 2022)",
        [
            {"id": "A", "teks": "8.00 m s⁻² / 8.00 m s⁻²"},
            {"id": "B", "teks": "8.49 m s⁻² / 8.49 m s⁻²"},
            {"id": "C", "teks": "9.81 m s⁻² / 9.81 m s⁻²"},
            {"id": "D", "teks": "10.0 m s⁻² / 10.0 m s⁻²"}
        ],
        "", "Percubaan Melaka 2022", 2022
    ))
    
    # Q13
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q13", 13, "Tinggi", "Mengaplikasi",
        "Rajah 22 menunjukkan satelit Teleskop Angkasa Hubble berjisim 11 000 kg yang mengorbit pada ketinggian 547 km dari permukaan Bumi.\n[Jisim Bumi, M = 5.97 × 10²⁴ kg, Jejari Bumi, R = 6.37 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nDiagram 22 shows the Hubble Space Telescope satellite with mass of 11 000 kg orbits at a height of 547 km above the Earth's surface.\n[Mass of the Earth, M = 5.97 × 10²⁴ kg, Radius of the Earth, R = 6.37 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n(MRSM: 2022)\n\nBerapakah daya graviti satelit tersebut?\nWhat is the gravitational force of the satellite?",
        [
            {"id": "A", "teks": "9.155 × 10⁴ N / 9.155 × 10⁴ N"},
            {"id": "B", "teks": "1.079 × 10⁵ N / 1.079 × 10⁵ N"},
            {"id": "C", "teks": "1.464 × 10⁵ N / 1.464 × 10⁵ N"},
            {"id": "D", "teks": "6.332 × 10¹¹ N / 6.332 × 10¹¹ N"}
        ],
        "t4_b3_rajah22", "Percubaan MRSM 2022", 2022
    ))
    
    # Q14
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q14", 14, "Tinggi", "Mengaplikasi",
        "Seorang angkasawan memakai sut angkasawan semasa meneroka di Bulan seperti dalam Rajah 23. Jisim sut angkasawan di Bumi ialah 60.25 kg.\nAn astronaut wears an astronaut suit while exploring on the Moon as in Diagram 23. The mass of the astronaut suit on the Earth is 60.25 kg.\n(Pahang: 2022)\n\nKira berat sut angkasawan di Bulan jika kekuatan medan graviti di Bulan ialah 1/6 daripada kekuatan medan graviti Bumi.\n[Pecutan graviti Bumi = 9.81 N kg⁻¹]\nCalculate the weight of the astronaut suit on the Moon if the strength of the gravitational field on the Moon is 1/6 of the strength of Earth's gravitational field.\n[Gravitational acceleration of Earth = 9.81 N kg⁻¹]",
        [
            {"id": "A", "teks": "98.05 N / 98.05 N"},
            {"id": "B", "teks": "98.10 N / 98.10 N"},
            {"id": "C", "teks": "98.40 N / 98.40 N"},
            {"id": "D", "teks": "98.51 N / 98.51 N"}
        ],
        "t4_b3_rajah23", "Percubaan Pahang 2022", 2022
    ))
    
    # Q15
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q15", 15, "Tinggi", "Mengaplikasi",
        "Hitung jarak antara Musytari dan satelit semula jadinya Callisto, jika daya graviti antara mereka ialah 6.76 × 10²¹ N.\n[Jisim Musytari = 1.99 × 10²⁷ kg, Jisim Callisto = 1.08 × 10²³ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nCalculate the distance between Jupiter and its natural satellite Callisto, if the gravitational force between them is 6.76 × 10²¹ N.\n[Mass of Jupiter = 1.99 × 10²⁷ kg, Mass of Callisto = 1.08 × 10²³ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n(Selangor: Set 1: 2022)",
        [
            {"id": "A", "teks": "1.46 × 10⁹ m / 1.46 × 10⁹ m"},
            {"id": "B", "teks": "2.12 × 10⁹ m / 2.12 × 10⁹ m"},
            {"id": "C", "teks": "1.46 × 10¹¹ m / 1.46 × 10¹¹ m"},
            {"id": "D", "teks": "2.12 × 10¹¹ m / 2.12 × 10¹¹ m"}
        ],
        "", "Percubaan Selangor 2022", 2022
    ))
    
    # Q16
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q16", 16, "Tinggi", "Mengaplikasi",
        "Rajah 24 menunjukkan sebuah objek berjisim 3 kg dilontar 5 m ke atas dari permukaan Bumi.\nDiagram 24 shows an object of mass 3 kg is thrown 5 m upward from the surface of the Earth.\n(Selangor: Set 2: 2022)\n\nHitung daya graviti yang dikenakan pada Bumi oleh objek itu.\n[Jejari Bumi = 6.37 × 10⁶ m, Jisim Bumi = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nCalculate the gravitational force exerted on the Earth by the object.\n[Radius of the Earth = 6.37 × 10⁶ m, Mass of the Earth = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]",
        [
            {"id": "A", "teks": "29.43 N / 29.43 N"},
            {"id": "B", "teks": "35.18 N / 35.18 N"},
            {"id": "C", "teks": "30.20 × 10¹² N / 30.20 × 10¹² N"},
            {"id": "D", "teks": "47.34 × 10¹² N / 47.34 × 10¹² N"}
        ],
        "t4_b3_rajah24", "Percubaan Selangor 2022", 2022
    ))
    
    # Q17
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q17", 17, "Tinggi", "Mengaplikasi",
        "Jejari orbit membulat dua satelit Bumi, A dan B masing-masing ialah 4R dan R. Jika kelajuan satelit A ialah 3v, berapakah kelajuan satelit B?\nThe radius of circular orbits of two satellites A and B of the Earth are 4R and R, respectively. If the speed of satellite A is 3v, what is the speed of satellite B?\n(Selangor: Set 2: 2022)",
        [
            {"id": "A", "teks": "3/4 v / 3/4 v"},
            {"id": "B", "teks": "3/2 v / 3/2 v"},
            {"id": "C", "teks": "6v / 6v"},
            {"id": "D", "teks": "12v / 12v"}
        ],
        "", "Percubaan Selangor 2022", 2022
    ))
    
    # Q18
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q18", 18, "Tinggi", "Mengaplikasi",
        "Satelit P adalah 5 kali lebih jauh dari planet berbanding satelit Q. Apabila satelit P mengambil masa 20 minggu untuk mengorbit planet tersebut, berapa lamakah masa untuk satelit Q mengorbit planet itu?\nSatellite P is 5 times farther from a planet than satellite Q. When the satellite P takes 20 weeks to complete a full orbit around the planet, how long will satellite Q take to travel around the planet once?\n(Terengganu: 2022)",
        [
            {"id": "A", "teks": "1.79 minggu / 1.79 weeks"},
            {"id": "B", "teks": "2.5 minggu / 2.5 weeks"},
            {"id": "C", "teks": "3.2 minggu / 3.2 weeks"},
            {"id": "D", "teks": "4.5 minggu / 4.5 weeks"}
        ],
        "", "Percubaan Terengganu 2022", 2022
    ))
    
    # Q19
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q19", 19, "Tinggi", "Mengaplikasi",
        "Berapakah laju linear orbit satelit mengelilingi Bumi pada jarak orbit 6.5 × 10⁶ m?\n[G = 6.67 × 10⁻¹¹ N m² kg⁻², Jisim Bumi = 6.0 × 10²⁴ kg]\nWhat is the linear orbital speed of a satellite revolving around Earth at an orbital distance of 6.5 × 10⁶ m?\n[G = 6.67 × 10⁻¹¹ N m² kg⁻², Mass of Earth = 6.0 × 10²⁴ kg]\n(Terengganu: 2022)",
        [
            {"id": "A", "teks": "1 174 m s⁻¹ / 1 174 m s⁻¹"},
            {"id": "B", "teks": "7 864 m s⁻¹ / 7 864 m s⁻¹"},
            {"id": "C", "teks": "120 185 m s⁻¹ / 120 185 m s⁻¹"},
            {"id": "D", "teks": "61 842 496 m s⁻¹ / 61 842 496 m s⁻¹"}
        ],
        "", "Percubaan Terengganu 2022", 2022
    ))
    
    # Q20
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q20", 20, "Tinggi", "Mengaplikasi",
        "Diberi jejari Bumi ialah R dan halaju lepas di permukaan Bumi ialah 11 km s⁻¹. Berapakah halaju lepas pada ketinggian 0.5R dari permukaan Bumi?\nGiven that the radius of the Earth is R and the escape velocity on the surface of the Earth is 11 km s⁻¹. What is the escape velocity at a height of 0.5R from the surface of the Earth?\n(Kedah: 2021)\n\nPetua / Hint:\nv = √(2GM / r)\nv = halaju lepas / escape velocity\nG = pemalar kegravitian / gravitational constant\nr = jarak dari pusat Bumi / distance from the centre of the Earth\nM = jisim Bumi / mass of Earth",
        [
            {"id": "A", "teks": "9.0 km s⁻¹ / 9.0 km s⁻¹"},
            {"id": "B", "teks": "8.0 km s⁻¹ / 8.0 km s⁻¹"},
            {"id": "C", "teks": "7.0 km s⁻¹ / 7.0 km s⁻¹"},
            {"id": "D", "teks": "6.0 km s⁻¹ / 6.0 km s⁻¹"}
        ],
        "", "Percubaan Kedah 2021", 2021
    ))
    
    # Q21
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q21", 21, "Tinggi", "Mengaplikasi",
        "Rajah 25 menunjukkan sebiji bebola besi berjisim 0.2 kg diikat pada hujung tali yang diputarkan secara mengufuk oleh seorang pelajar. Jejari bulatan ialah 0.5 m.\nDiagram 25 shows a metal ball of mass 0.2 kg tied to the end of a string that is spun horizontally by a student. Radius of the circle is 0.5 m.\n(Kelantan: 2021)\n\nJika bebola besi itu berputar dengan kelajuan malar 4 m s⁻¹, hitungkan daya memusat.\nIf the metal ball rotates at constant speed 4 m s⁻¹, calculate the centripetal force.",
        [
            {"id": "A", "teks": "6.25 N / 6.25 N"},
            {"id": "B", "teks": "6.40 N / 6.40 N"},
            {"id": "C", "teks": "16.00 N / 16.00 N"},
            {"id": "D", "teks": "64.00 N / 64.00 N"}
        ],
        "t4_b3_rajah25", "Percubaan Kelantan 2021", 2021
    ))
    
    # Q22
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q22", 22, "Tinggi", "Mengaplikasi",
        "Halaju lepas dari Bumi adalah 11.2 km s⁻¹. Planet lain mempunyai jisim 500 kali daripada jisim Bumi dan jejari 20 kali daripada jejari Bumi. Berapakah halaju lepas dari planet itu?\nThe escape velocity from the Earth is 11.2 km s⁻¹. Another planet has a mass 500 times the mass of the Earth and a radius 20 times the radius of the Earth. What is the escape velocity from that planet?\n(Terengganu: 2021)",
        [
            {"id": "A", "teks": "2.24 km s⁻¹ / 2.24 km s⁻¹"},
            {"id": "B", "teks": "11.2 km s⁻¹ / 11.2 km s⁻¹"},
            {"id": "C", "teks": "55.9 km s⁻¹ / 55.9 km s⁻¹"},
            {"id": "D", "teks": "280 km s⁻¹ / 280 km s⁻¹"}
        ],
        "", "Percubaan Terengganu 2021", 2021
    ))
    
    # Q23
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q23", 23, "Tinggi", "Mengaplikasi",
        "Berat seketul batu di Bumi adalah 19.62 N, berapakah beratnya di Bulan?\nKekuatan medan graviti Bulan adalah 1.64 N kg⁻¹.\nWeight of a stone on Earth is 19.62 N, what is its weight on the Moon?\nThe Moon's gravitational field strength is 1.64 N kg⁻¹.\n(Selangor: Set 1: 2021)",
        [
            {"id": "A", "teks": "3.28 N / 3.28 N"},
            {"id": "B", "teks": "6.56 N / 6.56 N"},
            {"id": "C", "teks": "17.98 N / 17.98 N"},
            {"id": "D", "teks": "12.08 N / 12.08 N"}
        ],
        "", "Percubaan Selangor 2021", 2021
    ))
    
    # Q24
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q24", 24, "Tinggi", "Mengaplikasi",
        "Tempoh satelit di orbit bulatan berjejari R adalah T. Tempoh satelit lain dalam orbit bulat berjejari 4R adalah\nThe period of a satellite in a circular orbit of radius R is T. The period of another satellite in circular orbit of radius 4R is\n(Selangor: Set 2: 2021)",
        [
            {"id": "A", "teks": "8T / 8T"},
            {"id": "B", "teks": "2T / 2T"},
            {"id": "C", "teks": "½T / ½T"},
            {"id": "D", "teks": "4T / 4T"}
        ],
        "", "Percubaan Selangor 2021", 2021
    ))
    
    # Q25
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q25", 25, "Tinggi", "Mengaplikasi",
        "Rajah 26 menunjukkan sebuah satelit sedang mengorbit Bumi pada ketinggian 600 km.\nDiagram 26 shows a satellite orbiting the Earth at a height of 600 km.\n(Negeri Sembilan: 2021)\n\nHitung halaju linear satelit tersebut.\n[Jejari Bumi = 6.37 × 10⁶ m, Jisim Bumi = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nCalculate the linear velocity of the satellite.\n[Radius of Earth = 6.37 × 10⁶ m, Mass of Earth = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]",
        [
            {"id": "A", "teks": "3.822 × 10³ m s⁻¹ / 3.822 × 10³ m s⁻¹"},
            {"id": "B", "teks": "4.968 × 10³ m s⁻¹ / 4.968 × 10³ m s⁻¹"},
            {"id": "C", "teks": "7.559 × 10³ m s⁻¹ / 7.559 × 10³ m s⁻¹"},
            {"id": "D", "teks": "9.799 × 10³ m s⁻¹ / 9.799 × 10³ m s⁻¹"}
        ],
        "t4_b3_rajah26", "Percubaan Negeri Sembilan 2021", 2021
    ))
    
    # Q26
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q26", 26, "Tinggi", "Mengaplikasi",
        "Pecutan graviti di permukaan Bumi ialah g dan jejari Bumi ialah R. Pada jarak berapakah pecutan graviti dari permukaan Bumi adalah ¼ g?\nThe gravitational acceleration on the surface of the Earth is g and the radius of the Earth is R. At what distance is the acceleration of gravity from the Earth's surface ¼ g?\n(Pahang: 2021)",
        [
            {"id": "A", "teks": "R dari permukaan dan 2R dari pusat Bumi / R from the surface and 2R from the centre of the Earth"},
            {"id": "B", "teks": "½R dari permukaan dan 4R dari pusat Bumi / ½R from the surface and 4R from the centre of the Earth"},
            {"id": "C", "teks": "½R dari permukaan dan 2R dari pusat Bumi / ½R from the surface and 2R from the centre of the Earth"},
            {"id": "D", "teks": "¼R dari permukaan dan 4R dari pusat Bumi / ¼R from the surface and 4R from the centre of the Earth"}
        ],
        "", "Percubaan Pahang 2021", 2021
    ))
    
    # Q27
    questions.append(make_q(
        "MODUL_T4_B3_K3_Q27", 27, "Tinggi", "Mengaplikasi",
        "Seorang atlet lompat jauh dengan jisim 54 kg telah mencapai suatu jarak dari tapak berlepas. Apakah daya graviti di antara atlet dengan Bumi?\n[Pemalar kegravitian, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n[Jisim Bumi = 5.97 × 10²⁴ kg]\n[Jarak antara pusat Bumi dan atlet, r = 6.37 × 10⁶ m]\nA long jump athlete with a mass of 54 kg has reached a distance from a take-off point. What is the gravitational force between the athlete and the Earth?\n[Gravitational constant, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n[Mass of Earth = 5.97 × 10²⁴ kg]\n[Distance between center of the Earth and athlete, r = 6.37 × 10⁶ m]\n(SPM: 2021)",
        [
            {"id": "A", "teks": "3.84 × 10⁻⁷ N / 3.84 × 10⁻⁷ N"},
            {"id": "B", "teks": "2.45 × 10⁻²⁰ N / 2.45 × 10⁻²⁰ N"},
            {"id": "C", "teks": "5.30 × 10² N / 5.30 × 10² N"},
            {"id": "D", "teks": "3.38 × 10⁶ N / 3.38 × 10⁶ N"}
        ],
        "", "SPM 2021", 2021
    ))
    
    return questions

if __name__ == '__main__':
    qs = get_k3_questions()
    print(f'Generated {len(qs)} K3 questions successfully.')
