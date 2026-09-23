from scripts.build_dataset_helper import make_q

def get_k2_part2_questions():
    questions = []
    
    # Q26
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q26", 26, "Sederhana", "Memahami",
        "Rajah 7 menunjukkan sebuah planet berjisim m, bergerak dalam orbit membulat berjejari r mengelilingi Matahari berjisim M dalam satu pusingan lengkap.\nDiagram 7 shows a planet of mass m, moving in a circular orbit of radius r around the Sun of mass M in one complete revolution.\n(Putrajaya: 2022)\n\nDaya graviti yang bertindak sebagai daya memusat diberikan oleh\nThe gravitational force that acts as the centripetal force is given by",
        [
            {"id": "A", "teks": "F = mv / r / F = mv / r"},
            {"id": "B", "teks": "F = mv² / r² / F = mv² / r²"},
            {"id": "C", "teks": "F = GM / r² / F = GM / r²"},
            {"id": "D", "teks": "F = GMm / r² / F = GMm / r²"}
        ],
        "t4_b3_rajah7", "Percubaan Putrajaya 2022", 2022
    ))
    
    # Q27
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q27", 27, "Sederhana", "Memahami",
        "Seorang angkasawan lebih mudah berjalan di atas permukaan Bulan berbanding di atas permukaan Bumi. Mengapakah keadaan ini berlaku?\nAn astronaut walks more easily on the surface of the Moon than on the surface of the Earth. Why does this happen?\n(SBP: 2022)",
        [
            {"id": "A", "teks": "Jisim angkasawan lebih kecil di Bulan / The mass of the astronaut is smaller on the Moon"},
            {"id": "B", "teks": "Tiada atmosfera di Bulan / There is no atmosphere on the Moon"},
            {"id": "C", "teks": "Daya graviti yang bertindak ke atas angkasawan di Bulan lebih kecil daripada di Bumi / The gravitational force acting on the astronaut on the Moon is smaller than on Earth"},
            {"id": "D", "teks": "Ketumpatan Bulan lebih tinggi berbanding Bumi / The density of the Moon is higher than Earth"}
        ],
        "", "Percubaan SBP 2022", 2022
    ))
    
    # Q28
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q28", 28, "Sederhana", "Memahami",
        "Rajah 8 menunjukkan sebuah satelit yang digunakan dalam Sistem Penentu Kedudukan Global (GPS).\nDiagram 8 shows a satellite used in the Global Positioning System (GPS).\n(SBP: 2022)\n\nAntara ciri-ciri satelit GPS berikut, yang manakah benar?\nWhich of the following characteristics of a GPS satellite is true?",
        [
            {"id": "A", "teks": "Merupakan satelit geopegun dengan tempoh orbit 24 jam / It is a geostationary satellite with an orbital period of 24 hours"},
            {"id": "B", "teks": "Merupakan satelit bukan geopegun dengan tempoh orbit kira-kira 12 jam / It is a non-geostationary satellite with an orbital period of about 12 hours"},
            {"id": "C", "teks": "Sentiasa berada di atas kedudukan geografi yang sama di Bumi / It always remains above the same geographical location on Earth"},
            {"id": "D", "teks": "Arah pergerakan sentiasa bertentangan dengan putaran Bumi / Its direction of motion is always opposite to Earth's rotation"}
        ],
        "t4_b3_rajah8", "Percubaan SBP 2022", 2022
    ))
    
    # Q29
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q29", 29, "Sederhana", "Memahami",
        "Rajah 9 menunjukkan sebuah satelit yang mengorbit Bumi.\nDiagram 9 shows a satellite orbiting the Earth.\n(SMKA: 2022)\n\nAntara lintasan A, B, C atau D yang manakah akan dilalui oleh satelit itu jika laju linearnya bertambah secara mendadak tetapi belum mencapai halaju lepas?\nWhich of the paths A, B, C or D will the satellite follow if its linear speed increases suddenly but has not reached escape velocity?",
        [
            {"id": "A", "teks": "Lintasan A / Path A"},
            {"id": "B", "teks": "Lintasan B / Path B"},
            {"id": "C", "teks": "Lintasan C / Path C"},
            {"id": "D", "teks": "Lintasan D / Path D"}
        ],
        "t4_b3_rajah9", "Percubaan SMKA 2022", 2022
    ))
    
    # Q30
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q30", 30, "Sederhana", "Memahami",
        "Antara berikut, yang manakah BUKAN ciri bagi sebuah satelit bukan geopegun?\nWhich of the following is NOT a characteristic of a non-geostationary satellite?\n(SMKA: 2022)",
        [
            {"id": "A", "teks": "Tempoh orbit boleh kurang atau lebih daripada 24 jam / Orbital period can be less or more than 24 hours"},
            {"id": "B", "teks": "Satah orbit tidak semestinya berada pada satah khatulistiwa / Orbital plane does not have to be on the equatorial plane"},
            {"id": "C", "teks": "Arah gerakan tidak semestinya sama dengan arah putaran Bumi / Direction of motion does not have to be same as Earth's rotation"},
            {"id": "D", "teks": "Sentiasa berada di atas lokasi geografi yang sama di Bumi / Always above the same geographical location on Earth"}
        ],
        "", "Percubaan SMKA 2022", 2022
    ))
    
    # Q31
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q31", 31, "Sederhana", "Memahami",
        "Pernyataan yang manakah adalah betul mengenai Hukum Kepler Pertama?\nWhich statement is correct regarding Kepler's First Law?\n(Terengganu: 2022)",
        [
            {"id": "A", "teks": "Semua planet bergerak dalam orbit bulatan mengelilingi Matahari / All planets move in circular orbits around the Sun"},
            {"id": "B", "teks": "Kuasa dua tempoh orbit planet berkadar terus dengan kuasa tiga jejari orbitnya / The square of the orbital period is directly proportional to the cube of the orbital radius"},
            {"id": "C", "teks": "Garis yang menyambungkan planet dengan Matahari menyapu luas yang sama dalam sela masa yang sama / A line connecting a planet to the Sun sweeps out equal areas in equal times"},
            {"id": "D", "teks": "Semua planet bergerak dalam orbit elips dengan Matahari berada di salah satu fokusnya / All planets move in elliptical orbits with the Sun at one of the foci"}
        ],
        "", "Percubaan Terengganu 2022", 2022
    ))
    
    # Q32
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q32", 32, "Sederhana", "Memahami",
        "Rajah 10 menunjukkan luas yang dicakup dalam masa yang sama di kawasan PQR dan XYZ bagi sebuah planet yang mengorbit Matahari.\nDiagram 10 shows the area swept out in the same time in regions PQR and XYZ for a planet orbiting the Sun.\n(Terengganu: 2022)\n\nAntara berikut yang manakah benar tentang luas PQR dan XYZ?\nWhich of the following is true about the areas PQR and XYZ?",
        [
            {"id": "A", "teks": "Luas PQR = Luas XYZ / Area PQR = Area XYZ"},
            {"id": "B", "teks": "Luas PQR > Luas XYZ / Area PQR > Area XYZ"},
            {"id": "C", "teks": "Luas PQR < Luas XYZ / Area PQR < Area XYZ"},
            {"id": "D", "teks": "Luas PQR bergantung kepada jisim planet / Area PQR depends on the mass of the planet"}
        ],
        "t4_b3_rajah10", "Percubaan Terengganu 2022", 2022
    ))
    
    # Q33
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q33", 33, "Sederhana", "Memahami",
        "Berat Karim di Bumi ialah 800 N. Apakah yang akan berlaku kepada berat Karim jika dia berada di Bulan?\nKarim's weight on Earth is 800 N. What will happen to his weight on the Moon?\n(Terengganu: 2021)",
        [
            {"id": "A", "teks": "Beratnya bertambah / His weight increases"},
            {"id": "B", "teks": "Beratnya berkurang / His weight decreases"},
            {"id": "C", "teks": "Beratnya tidak berubah / His weight remains unchanged"},
            {"id": "D", "teks": "Beratnya menjadi sifar / His weight becomes zero"}
        ],
        "", "Percubaan Terengganu 2021", 2021
    ))
    
    # Q34
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q34", 34, "Sederhana", "Memahami",
        "Antara graf berikut yang manakah menunjukkan perubahan pecutan disebabkan oleh graviti Bumi, g' dengan jarak dari pusat Bumi, r di mana g adalah pecutan graviti di permukaan Bumi?\nWhich of the following graphs shows the change in acceleration due to the Earth's gravity, g' with the distance from the Earth's center, r where g is the gravitational acceleration at the Earth's surface?\n(Terengganu: 2021)",
        [
            {"id": "A", "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q34_opt_a.webp\" alt=\"Graf Pilihan A\" style=\"max-height:100px; display:block; margin:auto;\" />"},
            {"id": "B", "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q34_opt_b.webp\" alt=\"Graf Pilihan B\" style=\"max-height:100px; display:block; margin:auto;\" />"},
            {"id": "C", "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q34_opt_c.webp\" alt=\"Graf Pilihan C\" style=\"max-height:100px; display:block; margin:auto;\" />"},
            {"id": "D", "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q34_opt_d.webp\" alt=\"Graf Pilihan D\" style=\"max-height:100px; display:block; margin:auto;\" />"}
        ],
        "", "Percubaan Terengganu 2021", 2021
    ))
    
    # Q35
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q35", 35, "Sederhana", "Memahami",
        "Jadual 1 menunjukkan nilai pecutan graviti bagi planet Utarid, Marikh, Uranus dan Neptun.\nTable 1 shows the acceleration value due to gravity for planet Mercury, Mars, Uranus and Neptune.\n(MRSM: 2021)\n\nPlanet | Pecutan graviti, g (m s⁻²)\nUtarid (Mercury) : 3.59\nMarikh (Mars) : 3.77\nUranus (Uranus) : 10.67\nNeptun (Neptune) : 14.07\n\nPlanet manakah yang akan menghasilkan berat terbesar terhadap objek yang sama?\nWhich planet produced the greatest weight on an identical object?",
        [
            {"id": "A", "teks": "Neptun / Neptune"},
            {"id": "B", "teks": "Uranus / Uranus"},
            {"id": "C", "teks": "Marikh / Mars"},
            {"id": "D", "teks": "Utarid / Mercury"}
        ],
        "", "Percubaan MRSM 2021", 2021
    ))
    
    # Q36
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q36", 36, "Sederhana", "Memahami",
        "Rajah 11 menunjukkan satu planet mengorbit Matahari.\nDiagram 11 shows a planet orbiting the Sun.\n(MRSM: 2021)\n\nPernyataan yang manakah betul menerangkan pergerakan planet tersebut dalam orbitnya?\nWhich statement is correct to describe movement of the planet in its orbit?",
        [
            {"id": "A", "teks": "Planet itu bergerak pada orbit membulat / The planet moves in circular orbit"},
            {"id": "B", "teks": "Luas sektor PFQ lebih besar berbanding sektor RFS / Sector area PFQ is larger than RFS"},
            {"id": "C", "teks": "Planet itu mengambil masa lebih pendek untuk bergerak pada RS berbanding PQ / The planet takes shorter time to move at RS compared to PQ"},
            {"id": "D", "teks": "Planet itu bergerak pada kelajuan linear yang lebih tinggi pada PQ berbanding RS / The planet moves at higher linear speed at PQ compared to RS"}
        ],
        "t4_b3_rajah11", "Percubaan MRSM 2021", 2021
    ))
    
    # Q37
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q37", 37, "Sederhana", "Memahami",
        "Rajah 12 menunjukkan sebuah roket dilancarkan bagi melepaskan diri daripada tarikan graviti Bumi.\nDiagram 12 shows a rocket being launched to escape from Earth's gravity.\n(MRSM: 2021)\n\nApakah yang dimaksudkan dengan halaju lepas?\nWhat is meant by escape velocity?",
        [
            {"id": "A", "teks": "Halaju minimum yang diperlukan oleh objek untuk mengorbit Bumi / Minimum velocity needed by an object to orbit Earth"},
            {"id": "B", "teks": "Halaju maksimum yang boleh dicapai oleh roket di atmosfera / Maximum velocity that can be achieved by a rocket in atmosphere"},
            {"id": "C", "teks": "Halaju purata roket ketika berlepas dari pelantar / Average velocity of the rocket when launching from platform"},
            {"id": "D", "teks": "Halaju minimum yang diperlukan oleh jasad di permukaan Bumi untuk mengatasi daya graviti dan terlepas ke angkasa lepas / Minimum velocity needed by a body on Earth's surface to overcome gravitational force and escape to outer space"}
        ],
        "t4_b3_rajah12", "Percubaan MRSM 2021", 2021
    ))
    
    # Q38
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q38", 38, "Sederhana", "Memahami",
        "Rajah 13 menunjukkan empat kedudukan bagi sebuah planet yang bergerak mengelilingi Matahari mengikut orbit berbentuk elips.\nDiagram 13 shows four positions of a planet that moves around the Sun in an elliptical orbit.\n(Pahang: 2021)\n\nPada kedudukan manakah A, B, C dan D, halaju planet tersebut adalah maksimum?\nAt which position A, B, C or D, the velocity of the planet is maximum?",
        [
            {"id": "A", "teks": "Kedudukan A (perihelion) / Position A (perihelion)"},
            {"id": "B", "teks": "Kedudukan B / Position B"},
            {"id": "C", "teks": "Kedudukan C / Position C"},
            {"id": "D", "teks": "Kedudukan D / Position D"}
        ],
        "t4_b3_rajah13", "Percubaan Pahang 2021", 2021
    ))
    
    # Q39
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q39", 39, "Sederhana", "Memahami",
        "Halaju lepas dari permukaan sebuah planet bergantung kepada\nThe escape velocity from the surface of a planet depends on\n(Pahang: 2021)",
        [
            {"id": "A", "teks": "jejari planet tersebut sahaja / the radius of the planet only"},
            {"id": "B", "teks": "jisim planet tersebut sahaja / the mass of the planet only"},
            {"id": "C", "teks": "jejari dan jisim planet tersebut / the radius and the mass of the planet"},
            {"id": "D", "teks": "kekuatan medan graviti di permukaan planet tersebut sahaja / the gravitational field strength at the surface of the planet only"}
        ],
        "", "Percubaan Pahang 2021", 2021
    ))
    
    # Q40
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q40", 40, "Sederhana", "Memahami",
        "Rajah 14 menunjukkan sebuah satelit geopegun sedang mengorbit Bumi.\nDiagram 14 shows a geostationary satellite is orbiting the Earth.\n(SBP: 2021)\n\nPernyataan manakah yang betul mengenai satelit tersebut?\nWhich statement is correct about the satellite?",
        [
            {"id": "A", "teks": "Tempoh orbit satelit adalah melebihi 24 jam / The orbital period of the satellite is more than 24 hours"},
            {"id": "B", "teks": "Tempoh orbit satelit adalah kurang daripada 24 jam / The orbital period of the satellite is shorter than 24 hours"},
            {"id": "C", "teks": "Satelit mempunyai arah gerakan sama dengan arah putaran Bumi / The satellite has direction of motion same as the direction of Earth rotation"},
            {"id": "D", "teks": "Satelit berada di atas lokasi geografi yang berlainan pada masa berlainan / The satellite is above different geographical locations at different times"}
        ],
        "t4_b3_rajah14", "Percubaan SBP 2021", 2021
    ))
    
    # Q41
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q41", 41, "Sederhana", "Memahami",
        "Antara pernyataan berikut, yang manakah menerangkan kesan daya graviti Bulan ke atas Bumi?\nWhich of the following statements explains the effect of the Moon's gravitational pull on Earth?\n(SBP: 2021)",
        [
            {"id": "A", "teks": "Menyebabkan perubahan empat musim di Bumi / Causes the four seasons change on Earth"},
            {"id": "B", "teks": "Menyebabkan siang dan malam di Bumi / Causes day and night on Earth"},
            {"id": "C", "teks": "Menyebabkan medan magnet Bumi terhasil / Causes the Earth's magnetic field to form"},
            {"id": "D", "teks": "Menyebabkan kejadian air pasang dan air surut / Causes the phenomenon of high and low tides"}
        ],
        "", "Percubaan SBP 2021", 2021
    ))
    
    # Q42
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q42", 42, "Sederhana", "Memahami",
        "Berdasarkan pernyataan berikut pilih pernyataan yang betul tentang Hukum Kepler Ketiga.\nBased on the following statements, choose the correct statement about Kepler's Third Law.\n(Selangor: 2021)\n\nI. Tempoh orbit berkadar terus dengan jejari orbit / Orbital period is directly proportional to orbital radius\nII. Kuasa dua tempoh orbit berkadar terus dengan kuasa tiga jejari orbit / The square of orbital period is directly proportional to the cube of orbital radius\nIII. Nilai T² / r³ adalah malar bagi semua planet yang mengorbit Matahari / The value of T² / r³ is constant for all planets orbiting the Sun",
        [
            {"id": "A", "teks": "I dan II sahaja / I and II only"},
            {"id": "B", "teks": "I dan III sahaja / I and III only"},
            {"id": "C", "teks": "II dan III sahaja / II and III only"},
            {"id": "D", "teks": "I, II dan III / I, II and III"}
        ],
        "", "Percubaan Selangor 2021", 2021
    ))
    
    # Q43
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q43", 43, "Sederhana", "Memahami",
        "Rajah 15 menunjukkan orbit sebuah roket sepanjang lengkung R apabila ia bergerak dengan laju linear, v.\nDiagram 15 shows the orbit of a rocket along curve R when it moves with linear speed, v.\n(Perlis: 2021)\n\nJika tiba-tiba kelajuannya dikurangkan ke ½ v, mana satu antara P, Q, S dan T akan menjadi orbit baru bagi roket tersebut?\nIf suddenly its speed is reduced to ½ v, which one of P, Q, S and T will become the new orbit for the rocket?",
        [
            {"id": "A", "teks": "P / P"},
            {"id": "B", "teks": "Q / Q"},
            {"id": "C", "teks": "S / S"},
            {"id": "D", "teks": "T / T"}
        ],
        "t4_b3_rajah15", "Percubaan Perlis 2021", 2021
    ))
    
    # Q44
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q44", 44, "Sederhana", "Memahami",
        "Graf T² melawan r³ bagi sistem planet yang mengelilingi Matahari adalah satu garis lurus melalui asalan. Apakah pemalar bagi kecerunan graf tersebut?\nThe graph of T² against r³ for the system of planets orbiting the Sun is a straight line through the origin. What is the constant for the gradient of the graph?\n(Perlis: 2021)",
        [
            {"id": "A", "teks": "GM / (4π²) / GM / (4π²)"},
            {"id": "B", "teks": "2π / (GM) / 2π / (GM)"},
            {"id": "C", "teks": "4π² / (GM) / 4π² / (GM)"},
            {"id": "D", "teks": "4π / (GM) / 4π / (GM)"}
        ],
        "", "Percubaan Perlis 2021", 2021
    ))
    
    # Q45
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q45", 45, "Sederhana", "Memahami",
        "Rajah 16 menunjukkan sebuah roket sedang berlepas dari permukaan Bumi.\nDiagram 16 shows a rocket is taking off from the surface of the Earth.\n(SPM: 2021)\n\nApakah faktor yang mempengaruhi halaju lepas roket tersebut dari permukaan Bumi?\nWhat factor affects the escape velocity of the rocket from the Earth's surface?",
        [
            {"id": "A", "teks": "Jisim roket / Mass of the rocket"},
            {"id": "B", "teks": "Daya tujah enjin roket / Thrust force of the rocket engine"},
            {"id": "C", "teks": "Jisim Bumi dan jejari Bumi / Mass of the Earth and radius of the Earth"},
            {"id": "D", "teks": "Ketinggian pelantar pelancaran / Height of the launch platform"}
        ],
        "t4_b3_rajah16", "SPM 2021", 2021
    ))
    
    # Q46
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q46", 46, "Sederhana", "Memahami",
        "Graf manakah yang menunjukkan hubungan yang betul antara pecutan, g dengan jarak, r dari pusat Bumi?\nWhich graph shows the correct relationship between gravitational acceleration, g to the distance, r from the centre of the Earth?\n(SPM: 2021)",
        [
            {"id": "A", "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q46_opt_a.webp\" alt=\"Graf Pilihan A\" style=\"max-height:100px; display:block; margin:auto;\" />"},
            {"id": "B", "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q46_opt_b.webp\" alt=\"Graf Pilihan B\" style=\"max-height:100px; display:block; margin:auto;\" />"},
            {"id": "C", "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q46_opt_c.webp\" alt=\"Graf Pilihan C\" style=\"max-height:100px; display:block; margin:auto;\" />"},
            {"id": "D", "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q46_opt_d.webp\" alt=\"Graf Pilihan D\" style=\"max-height:100px; display:block; margin:auto;\" />"}
        ],
        "", "SPM 2021", 2021
    ))
    
    # Q47
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q47", 47, "Sederhana", "Memahami",
        "Antara yang berikut, yang manakah ciri-ciri satelit bukan geopegun?\nWhich of the following are the characteristics of a non-geostationary satellite?\n(Kelantan: 2022)",
        [
            {"id": "A", "teks": "Tempoh orbit tepat 24 jam / Orbital period is exactly 24 hours"},
            {"id": "B", "teks": "Tempoh orbit boleh lebih atau kurang daripada 24 jam / Orbital period can be longer or shorter than 24 hours"},
            {"id": "C", "teks": "Sentiasa berada di atas kedudukan geografi yang sama / Always above the same geographical location"},
            {"id": "D", "teks": "Arah gerakan mesti mengikut arah putaran Bumi / Direction of motion must follow the direction of Earth's rotation"}
        ],
        "", "Percubaan Kelantan 2022", 2022
    ))
    
    # Q48
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q48", 48, "Sederhana", "Memahami",
        "Sebuah satelit mengorbit mengelilingi Bumi dalam orbit membulat. Apakah daya yang bertindak sebagai daya memusat yang mengekalkan satelit tersebut dalam orbitnya?\nA satellite orbits the Earth in a circular orbit. What force acts as the centripetal force that keeps the satellite in its orbit?\n(Kelantan: 2022)",
        [
            {"id": "A", "teks": "Daya magnetik Bumi / Earth's magnetic force"},
            {"id": "B", "teks": "Daya tujah roket / Rocket thrust force"},
            {"id": "C", "teks": "Daya tarikan graviti antara Bumi dan satelit / Gravitational attraction force between Earth and satellite"},
            {"id": "D", "teks": "Daya emparan satelit / Centrifugal force of satellite"}
        ],
        "", "Percubaan Kelantan 2022", 2022
    ))
    
    # Q49
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q49", 49, "Sederhana", "Memahami",
        "Antara berikut yang manakah menerangkan perbezaan utama antara satelit geopegun dan satelit bukan geopegun?\nWhich of the following explains the main difference between a geostationary satellite and a non-geostationary satellite?\n(Pahang: 2022)",
        [
            {"id": "A", "teks": "Satelit geopegun bergerak lebih laju daripada satelit bukan geopegun / Geostationary satellite moves faster than non-geostationary satellite"},
            {"id": "B", "teks": "Satelit bukan geopegun tidak mengalami daya graviti / Non-geostationary satellite does not experience gravitational force"},
            {"id": "C", "teks": "Satelit geopegun berada lebih dekat dengan permukaan Bumi / Geostationary satellite is closer to Earth's surface"},
            {"id": "D", "teks": "Satelit geopegun mempunyai tempoh orbit 24 jam dan pegun relatif kepada satu titik di Bumi / Geostationary satellite has an orbital period of 24 hours and is stationary relative to a point on Earth"}
        ],
        "", "Percubaan Pahang 2022", 2022
    ))
    
    # Q50
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q50", 50, "Sederhana", "Memahami",
        "Daya graviti Bumi terhadap Bulan ialah 2.0 × 10²⁰ N. Berapakah magnitud daya graviti Bulan terhadap Bumi?\nThe gravitational force of Earth on the Moon is 2.0 × 10²⁰ N. What is the magnitude of the gravitational force of the Moon on the Earth?\n(Melaka: 2021)",
        [
            {"id": "A", "teks": "0 N / 0 N"},
            {"id": "B", "teks": "2.0 × 10²⁰ N / 2.0 × 10²⁰ N"},
            {"id": "C", "teks": "1.0 × 10²⁰ N / 1.0 × 10²⁰ N"},
            {"id": "D", "teks": "4.0 × 10²⁰ N / 4.0 × 10²⁰ N"}
        ],
        "", "Percubaan Melaka 2021", 2021
    ))
    
    # Q51
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q51", 51, "Sederhana", "Memahami",
        "Rajah 17 menunjukkan sebuah roket dilancarkan dengan halaju tinggi dan mengatasi daya graviti Bumi.\nDiagram 17 shows a rocket launched with high velocity and overcome the Earth's gravitational force.\n(SPM: 2023)\n\nAntara pernyataan berikut, yang manakah betul?\nWhich of the following statements is correct?",
        [
            {"id": "A", "teks": "Halaju roket ≥ halaju lepas / Velocity of the rocket ≥ escape velocity"},
            {"id": "B", "teks": "Halaju roket = laju linear / Velocity of the rocket = linear speed"},
            {"id": "C", "teks": "Halaju roket < halaju lepas / Velocity of the rocket < escape velocity"},
            {"id": "D", "teks": "Halaju roket < laju linear / Velocity of the rocket < linear speed"}
        ],
        "t4_b3_rajah17", "SPM 2023", 2023
    ))
    
    return questions

if __name__ == '__main__':
    qs = get_k2_part2_questions()
    print(f"Generated {len(qs)} K2 Part 2 questions successfully.")
