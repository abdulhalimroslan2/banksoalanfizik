from scripts.build_dataset_helper import make_q

def get_k4_questions():
    questions = []
    
    # Q01
    questions.append(make_q(
        "MODUL_T4_B3_K4_Q01", 1, "Tinggi", "Menganalisis",
        "Rajah 27 menunjukkan ilustrasi Hukum Kepler Kedua. Planet tersebut mengambil masa yang sama untuk bergerak dari A ke B berbanding dari C ke D melalui orbit.\nDiagram 27 shows an illustration of Kepler's Second Law. The planet took the same period to move from A to B as compared to moving from C to D through the orbit.\n(Melaka: 2023)\n\nManakah antara berikut adalah benar?\nWhich of the following is true?",
        [
            {"id": "A", "teks": "Luas FAB adalah sama dengan luas FCD / Area of FAB is equal to area of FCD"},
            {"id": "B", "teks": "Luas FAB adalah lebih kecil berbanding luas FCD / Area of FAB is less than area of FCD"},
            {"id": "C", "teks": "Laju purata planet dari A ke B adalah sama dengan laju purata planet dari C ke D / Average speed of planet from A to B is equal to average speed of planet from C to D"},
            {"id": "D", "teks": "Laju purata planet dari A ke B adalah kurang berbanding laju purata planet dari C ke D / Average speed of planet from A to B is less than average speed of planet from C to D"}
        ],
        "t4_b3_rajah27", "Percubaan Melaka 2023", 2023
    ))
    
    # Q02
    questions.append(make_q(
        "MODUL_T4_B3_K4_Q02", 2, "Tinggi", "Menganalisis",
        "Rajah 28 menunjukkan 3 buah satelit yang serupa P, Q dan R yang berada pada ketinggian berbeza dari permukaan Bumi.\nDiagram 28 shows 3 identical satellites P, Q and R which are located at different heights from the Earth's surface.\n(SMKA: 2023)\n\nManakah menunjukkan perbandingan yang betul?\nWhich shows the correct comparison?",
        [
            {"id": "A", "teks": "Daya graviti, F: P > Q > R | Pecutan graviti, g: P < Q < R / Gravitational force, F: P > Q > R | Gravitational acceleration, g: P < Q < R"},
            {"id": "B", "teks": "Daya graviti, F: P < Q > R | Pecutan graviti, g: P < Q > R / Gravitational force, F: P < Q > R | Gravitational acceleration, g: P < Q > R"},
            {"id": "C", "teks": "Daya graviti, F: P < Q < R | Pecutan graviti, g: P > Q > R / Gravitational force, F: P < Q < R | Gravitational acceleration, g: P > Q > R"},
            {"id": "D", "teks": "Daya graviti, F: P > Q < R | Pecutan graviti, g: P > Q < R / Gravitational force, F: P > Q < R | Gravitational acceleration, g: P > Q < R"}
        ],
        "t4_b3_rajah28", "Percubaan SMKA 2023", 2023
    ))
    
    # Q03
    questions.append(make_q(
        "MODUL_T4_B3_K4_Q03", 3, "Tinggi", "Menganalisis",
        "Rajah 29 menunjukkan daya graviti, F yang bertindak ke atas dua jasad berjisim m₁ dan m₂ masing-masing.\nDiagram 29 shows gravitational force, F acting on two bodies with mass m₁ and m₂ respectively.\n(SMKA: 2022)\n\nAntara berikut yang manakah menerangkan hubungan antara F, m₁, m₂ dan r?\nWhich of the following explains the relationship between F, m₁, m₂ and r?",
        [
            {"id": "A", "teks": "F berkadar terus dengan m₁m₂ dan F berkadar terus dengan r / F is directly proportional to m₁m₂ and F is directly proportional to r"},
            {"id": "B", "teks": "F berkadar terus dengan m₁m₂ dan F berkadar songsang dengan r² / F is directly proportional to m₁m₂ and F is inversely proportional to r²"},
            {"id": "C", "teks": "F berkadar songsang dengan m₁m₂ dan F berkadar terus dengan r / F is inversely proportional to m₁m₂ and F is directly proportional to r"},
            {"id": "D", "teks": "F berkadar songsang dengan m₁m₂ dan F berkadar songsang dengan r² / F is inversely proportional to m₁m₂ and F is inversely proportional to r²"}
        ],
        "t4_b3_rajah29", "Percubaan SMKA 2022", 2022
    ))
    
    # Q04
    questions.append(make_q(
        "MODUL_T4_B3_K4_Q04", 4, "Tinggi", "Menganalisis",
        "Rajah 30 menunjukkan sebahagian planet-planet dalam sistem suria.\nDiagram 30 shows some planets in the solar system.\n(Sarawak: 2021)\n\nDaripada Rajah 30, apakah kesimpulan yang boleh dibuat?\nFrom Diagram 30, what conclusion can be made?",
        [
            {"id": "A", "teks": "Jejari orbit berkadar terus dengan tempoh orbit planet / Radius of orbit is directly proportional to orbital period of planets"},
            {"id": "B", "teks": "Kuasa dua jejari orbit berkadar terus dengan kuasa tiga tempoh orbit planet / The square of radius of orbit is directly proportional to the cube of orbital period of planets"},
            {"id": "C", "teks": "Semakin besar saiz planet, semakin bertambah tempoh orbit / The greater the size of planet, the greater the period of orbit"},
            {"id": "D", "teks": "Kuasa tiga jejari orbit berkadar terus dengan kuasa dua tempoh orbit planet / The cube of radius of orbit is directly proportional to the square of orbital period of planets"}
        ],
        "t4_b3_rajah30", "Percubaan Sarawak 2021", 2021
    ))
    
    # Q05
    questions.append(make_q(
        "MODUL_T4_B3_K4_Q05", 5, "Tinggi", "Menganalisis",
        "Rajah 31 menunjukkan dua satelit, M dan N dalam orbit yang berlainan mengelilingi Bumi. Orbit N terletak lebih jauh dari Bumi berbanding orbit M.\nDiagram 31 shows two satellites, M and N, in different orbits around the Earth. The orbit of N is located further from the Earth than the orbit of M.\n(Selangor: Set 1: 2021)\n\nAntara perbandingan berikut, yang manakah betul?\nWhich of the following comparisons is true?",
        [
            {"id": "A", "teks": "Pecutan graviti pada N > Pecutan graviti pada M / Gravitational acceleration on N > Gravitational acceleration on M"},
            {"id": "B", "teks": "Daya memusat pada N > Daya memusat pada M / Centripetal force on N > Centripetal force on M"},
            {"id": "C", "teks": "Tempoh orbit N > Tempoh orbit M / Orbital period of N > Orbital period of M"},
            {"id": "D", "teks": "Halaju mengorbit bagi N > Halaju mengorbit bagi M / Orbiting velocity of N > Orbiting velocity of M"}
        ],
        "t4_b3_rajah31", "Percubaan Selangor 2021", 2021
    ))
    
    # Q06
    questions.append(make_q(
        "MODUL_T4_B3_K4_Q06", 6, "Tinggi", "Menganalisis",
        "Rajah 32 menunjukkan sebuah lastik berbentuk-Y yang digunakan oleh seorang murid dalam suatu eksperimen untuk menentukan nilai v² bagi jisim batu yang berbeza, m. Hubungan pemboleh ubah dalam eksperimen ini diberi oleh:\nFD = mv²\nDengan keadaan m = jisim, v = halaju batu, F = daya tarikan dan D = jarak regangan.\nDiagram 32 shows a Y-shaped slingshot used by a student in an experiment to determine the value of v² of different masses of stones, m. The relationship of the variables in this experiment is given by:\nFD = mv²\nSuch that m = mass, v = velocity of stone, F = force of attraction and D = extension distance.\n(SPM: 2021)\n\nPernyataan manakah yang betul mengenai eksperimen ini?\nWhich statement is correct about this experiment?",
        [
            {"id": "A", "teks": "Kecerunan graf v² melawan 1/m bersamaan dengan nilai FD / The gradient of graph v² against 1/m is equal to the value of FD"},
            {"id": "B", "teks": "Halaju batu meningkat apabila jisim batu meningkat / The velocity of stone increases as the mass of the stone increases"},
            {"id": "C", "teks": "Hasil darab F dan D sentiasa dimalarkan bagi jisim batu yang berbeza / The product of F and D is always kept constant for different masses of stones"},
            {"id": "D", "teks": "Apabila F bertambah, D bertambah / As F increases, D increases"}
        ],
        "t4_b3_rajah32", "SPM 2021", 2021
    ))
    
    return questions

if __name__ == '__main__':
    qs = get_k4_questions()
    print(f'Generated {len(qs)} K4 questions successfully.')
