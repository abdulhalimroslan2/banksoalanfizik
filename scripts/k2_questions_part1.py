import json
from scripts.build_dataset_helper import make_q

with open("scratch/t4_b3_diagram_urls.json", "r", encoding="utf-8") as f:
    DIAGRAM_URLS = json.load(f)

def get_k2_part1_questions():
    questions = []
    
    # Q01
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q01", 1, "Sederhana", "Memahami",
        "Satelit geopegun berada dalam orbit khas yang dikenali sebagai Orbit Bumi Geopegun. Satelit jenis ini digunakan untuk\nThe geostationary satellite is in a special orbit known as the Geostationary Earth Orbit. This type of satellite is used for\n(Kedah: 2023)",
        [
            {"id": "A", "teks": "GPS / GPS"},
            {"id": "B", "teks": "kaji cuaca / weather forecast"},
            {"id": "C", "teks": "komunikasi / communication"},
            {"id": "D", "teks": "Pengimejan Bumi / Earth imaging"}
        ],
        "", "Percubaan Kedah 2023", 2023
    ))
    
    # Q02
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q02", 2, "Sederhana", "Memahami",
        "Rajah 1 menunjukkan sebuah roket air ketika dilancarkan.\nDiagram 1 shows a water rocket as it was launched. (Melaka: 2023)\n\nSituasi ini boleh dijelaskan oleh\nThis situation can be explained by",
        [
            {"id": "A", "teks": "konsep inersia / concept of inertia"},
            {"id": "B", "teks": "prinsip keabadian tenaga / principle of conservation of energy"},
            {"id": "C", "teks": "keseimbangan daya / equilibrium of forces"},
            {"id": "D", "teks": "prinsip keabadian momentum / principle of conservation of momentum"}
        ],
        "t4_b3_rajah1", "Percubaan Melaka 2023", 2023
    ))
    
    # Q03
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q03", 3, "Sederhana", "Memahami",
        "Bumi berupaya mengekalkan lapisan atmosferanya kerana\nThe Earth can maintain its layer of atmosphere because\n(Negeri Sembilan: 2023)",
        [
            {"id": "A", "teks": "laju linear purata molekul gas bagi atmosfera lebih kecil daripada halaju lepas Bumi / the average linear speed of atmospheric gas molecules is less than Earth's escape velocity"},
            {"id": "B", "teks": "laju linear purata molekul gas bagi atmosfera lebih besar daripada halaju lepas Bumi / the average linear speed of atmospheric gas molecules is more than Earth's escape velocity"},
            {"id": "C", "teks": "medan magnet Bumi / the Earth's magnetic field"},
            {"id": "D", "teks": "kesan graviti Bulan / the gravitational effect of the Moon"}
        ],
        "", "Percubaan Negeri Sembilan 2023", 2023
    ))
    
    # Q04
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q04", 4, "Sederhana", "Memahami",
        "Berat ialah kuantiti vektor yang bertindak ke arah pusat Bumi. Berdasarkan formula berat, W = mg, apakah maksud kekuatan medan graviti, g?\nWeight is a vector quantity acting towards the center of the Earth. Based on the weight formula, W = mg, what is meant by the gravitational field strength, g?\n(Pahang: 2023)",
        [
            {"id": "A", "teks": "Daya yang bertindak per unit jisim disebabkan tarikan graviti / The force acting per unit mass due to gravitational attraction"},
            {"id": "B", "teks": "Jisim yang bertindak per unit daya disebabkan tarikan graviti / Mass acting per unit force due to gravitational attraction"},
            {"id": "C", "teks": "Berat yang bertindak per unit jisim disebabkan tarikan graviti / Weight acting per unit mass due to gravitational attraction"},
            {"id": "D", "teks": "Tarikan graviti yang bertindak per unit jisim disebabkan oleh daya / Gravitational pull acting per unit mass due to force"}
        ],
        "", "Percubaan Pahang 2023", 2023
    ))
    
    # Q05
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q05", 5, "Sederhana", "Memahami",
        "Formula Hukum Kegravitian Semesta Newton adalah seperti berikut:\nThe formula of Newton's Universal Law of Gravitation is as follows: (Pahang: 2023)\n\nF = G(m1 m2) / r^2\n\nApakah kesan pada daya graviti apabila jarak di antara dua jasad bertambah?\nWhat are the effects on gravitational force when the distance between the two bodies increases?",
        [
            {"id": "A", "teks": "Berkurang / Decreases"},
            {"id": "B", "teks": "Bertambah / Increases"},
            {"id": "C", "teks": "Tidak berubah / Unchanged"},
            {"id": "D", "teks": "Bertambah dua kali ganda / Doubled"}
        ],
        "", "Percubaan Pahang 2023", 2023
    ))
    
    # Q06
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q06", 6, "Sederhana", "Memahami",
        "Graf manakah yang mewakili hubungan antara pecutan graviti, g dengan jarak pemisahan, r, antara satu objek dengan Bumi?\nWhich graph represents the relationship between the gravitational acceleration, g and the separation distance, r, between an object and the Earth?\n(Pulau Pinang: 2023)",
        [
            {"id": "A", "teks": f'<img src="{DIAGRAM_URLS.get("t4_b3_k2_q06_opt_a", "")}" alt="Graf Pilihan A" style="max-height:100px; display:block; margin:auto;" />'},
            {"id": "B", "teks": f'<img src="{DIAGRAM_URLS.get("t4_b3_k2_q06_opt_b", "")}" alt="Graf Pilihan B" style="max-height:100px; display:block; margin:auto;" />'},
            {"id": "C", "teks": f'<img src="{DIAGRAM_URLS.get("t4_b3_k2_q06_opt_c", "")}" alt="Graf Pilihan C" style="max-height:100px; display:block; margin:auto;" />'},
            {"id": "D", "teks": f'<img src="{DIAGRAM_URLS.get("t4_b3_k2_q06_opt_d", "")}" alt="Graf Pilihan D" style="max-height:100px; display:block; margin:auto;" />'}
        ],
        "", "Percubaan Pulau Pinang 2023", 2023
    ))
    
    # Q07
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q07", 7, "Sederhana", "Memahami",
        "Antara graf berikut, yang manakah menunjukkan variasi pecutan graviti, g dengan jarak, r dari pusat Bumi yang betul bagi kedudukan r ≥ R?\nWhich of the following graphs shows the correct variation of gravitational acceleration, g and distance, r from the centre of the Earth for the position of r ≥ R?\n(Perak: 2023)",
        [
            {"id": "A", "teks": f'<img src="{DIAGRAM_URLS.get("t4_b3_k2_q07_opt_a", "")}" alt="Graf Pilihan A" style="max-height:100px; display:block; margin:auto;" />'},
            {"id": "B", "teks": f'<img src="{DIAGRAM_URLS.get("t4_b3_k2_q07_opt_b", "")}" alt="Graf Pilihan B" style="max-height:100px; display:block; margin:auto;" />'},
            {"id": "C", "teks": f'<img src="{DIAGRAM_URLS.get("t4_b3_k2_q07_opt_c", "")}" alt="Graf Pilihan C" style="max-height:100px; display:block; margin:auto;" />'},
            {"id": "D", "teks": f'<img src="{DIAGRAM_URLS.get("t4_b3_k2_q07_opt_d", "")}" alt="Graf Pilihan D" style="max-height:100px; display:block; margin:auto;" />'}
        ],
        "", "Percubaan Perak 2023", 2023
    ))
    
    # Q08
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q08", 8, "Sederhana", "Memahami",
        "Pernyataan yang manakah menerangkan satelit geopegun dengan betul?\nWhich statement describes the geostationary satellite correctly?\n(Perak: 2023)",
        [
            {"id": "A", "teks": "Banyak digunakan dalam pengimejan Bumi / Widely used in Earth imaging"},
            {"id": "B", "teks": "Arah gerakan tidak sama dengan arah putaran Bumi / Direction of motion is not the same as the direction of the Earth's rotation"},
            {"id": "C", "teks": "Tempoh orbit yang lebih lama berbanding dengan tempoh orbit Bumi / The orbital period is longer than the Earth's orbital period"},
            {"id": "D", "teks": "Sentiasa berada di atas kedudukan geografi yang sama di permukaan Bumi / Always above the same geographical location on the surface of the Earth"}
        ],
        "", "Percubaan Perak 2023", 2023
    ))
    
    # Q09
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q09", 9, "Sederhana", "Memahami",
        "Apakah hubungan antara tempoh orbit bagi sebuah planet, T, dengan jejari, r, planet itu mengelilingi Matahari?\nWhat is the relationship between the orbital period of a planet, T, and the radius, r, of the planet orbiting the Sun?\n(Perlis: 2023)",
        [
            {"id": "A", "teks": "T² berkadar terus dengan r³ / T² is directly proportional to r³"},
            {"id": "B", "teks": "T berkadar terus dengan r / T is directly proportional to r"},
            {"id": "C", "teks": "T² berkadar songsang dengan r³ / T² is inversely proportional to r³"},
            {"id": "D", "teks": "T berkadar songsang dengan r² / T is inversely proportional to r²"}
        ],
        "", "Percubaan Perlis 2023", 2023
    ))
    
    # Q10
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q10", 10, "Sederhana", "Memahami",
        "Antara pernyataan berikut yang manakah benar mengenai Hukum Kepler Ketiga?\nWhich of the following statements is true about Kepler's Third Law?\n(Perlis: 2023)",
        [
            {"id": "A", "teks": "Orbit bagi setiap planet adalah elips / The orbit of each planet is an ellipse"},
            {"id": "B", "teks": "Garis yang menyambungkan planet dengan Matahari mencakupi luas yang sama dalam sela masa yang sama / A line connecting a planet to the Sun sweeps out equal areas in equal times"},
            {"id": "C", "teks": "Kuasa tiga tempoh orbit berkadar terus dengan kuasa dua jejari / The cube of orbital period is directly proportional to the square of radius"},
            {"id": "D", "teks": "Kuasa dua tempoh orbit planet berkadar terus dengan kuasa tiga jejari orbitnya / The square of the orbital period of any planet is directly proportional to the cube of the radius of its orbit"}
        ],
        "", "Percubaan Perlis 2023", 2023
    ))
    
    # Q11
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q11", 11, "Sederhana", "Memahami",
        "Rajah 2 menunjukkan Ahmad, Rama dan Lim yang mempunyai jisim yang sama berdiri pada kedudukan masing-masing.\nDiagram 2 shows Ahmad, Rama and Lim who have the same mass standing at their respective positions.\n(Selangor: Set 1: 2023)\n\nPernyataan manakah yang betul?\nWhich statement is correct?",
        [
            {"id": "A", "teks": "Daya graviti antara Ahmad dan Rama lebih besar daripada antara Ahmad dan Lim / Gravitational force between Ahmad and Rama is greater than between Ahmad and Lim"},
            {"id": "B", "teks": "Daya graviti antara Ahmad dan Rama sama dengan daya graviti antara Ahmad dan Lim / Gravitational force between Ahmad and Rama is equal to gravitational force between Ahmad and Lim"},
            {"id": "C", "teks": "Daya graviti antara Ahmad dan Rama lebih kecil daripada antara Ahmad dan Lim / Gravitational force between Ahmad and Rama is smaller than between Ahmad and Lim"},
            {"id": "D", "teks": "Tiada daya graviti bertindak antara mereka / No gravitational force acts between them"}
        ],
        "t4_b3_rajah2", "Percubaan Selangor Set 1 2023", 2023
    ))
    
    # Q12
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q12", 12, "Sederhana", "Memahami",
        "Mengapakah nilai pecutan graviti, g di kutub Bumi lebih besar berbanding nilai g di khatulistiwa?\nWhy is the value of gravitational acceleration, g at the Earth's poles greater than the value of g at the equator?\n(Selangor: Set 2: 2023)",
        [
            {"id": "A", "teks": "Jejari Bumi di kutub lebih kecil daripada jejari di khatulistiwa / The Earth's radius at the poles is smaller than the radius at the equator"},
            {"id": "B", "teks": "Jejari Bumi di kutub lebih besar daripada jejari di khatulistiwa / The Earth's radius at the poles is larger than the radius at the equator"},
            {"id": "C", "teks": "Ketumpatan Bumi di kutub lebih kecil / The Earth's density at the poles is smaller"},
            {"id": "D", "teks": "Suhu di kutub lebih rendah / The temperature at the poles is lower"}
        ],
        "", "Percubaan Selangor Set 2 2023", 2023
    ))
    
    # Q13
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q13", 13, "Sederhana", "Memahami",
        "Apakah faktor yang mempengaruhi halaju lepas dari permukaan sesebuah planet?\nWhat factors affect the escape velocity from the surface of a planet?\n(Selangor: Set 3: 2023)",
        [
            {"id": "A", "teks": "Jisim objek yang dilancarkan sahaja / The mass of the launched object only"},
            {"id": "B", "teks": "Jisim planet dan jejari planet / The mass of the planet and the radius of the planet"},
            {"id": "C", "teks": "Ketumpatan atmosfera planet sahaja / The density of the planet's atmosphere only"},
            {"id": "D", "teks": "Bentuk aerodinamik objek / The aerodynamic shape of the object"}
        ],
        "", "Percubaan Selangor Set 3 2023", 2023
    ))
    
    # Q14
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q14", 14, "Sederhana", "Memahami",
        "Antara pernyataan berikut, yang manakah tidak benar tentang satelit bukan geopegun?\nWhich of the following statements is not true about a non-geostationary satellite?\n(Terengganu: 2023)",
        [
            {"id": "A", "teks": "Tempoh orbit boleh lebih pendek atau lebih panjang daripada 24 jam / Orbital period can be shorter or longer than 24 hours"},
            {"id": "B", "teks": "Sentiasa berada di atas kedudukan geografi yang sama di Bumi / Always above the same geographical location on Earth"},
            {"id": "C", "teks": "Arah gerakan tidak semestinya sama dengan arah putaran Bumi / Direction of motion does not have to be the same as Earth's rotation"},
            {"id": "D", "teks": "Biasanya berada pada orbit rendah atau orbit kutub / Usually in lower orbit or polar orbit"}
        ],
        "", "Percubaan Terengganu 2023", 2023
    ))
    
    # Q15
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q15", 15, "Sederhana", "Memahami",
        "Apakah yang akan berlaku kepada sebuah satelit jika laju linearnya kurang daripada laju linear yang diperlukan untuk kekal dalam orbitnya?\nWhat will happen to a satellite if its linear speed is less than the linear speed required to stay in its orbit?\n(Terengganu: 2023)",
        [
            {"id": "A", "teks": "Satelit akan terlepas ke angkasa lepas / The satellite will escape into outer space"},
            {"id": "B", "teks": "Satelit akan bergerak ke orbit yang lebih tinggi / The satellite will move to a higher orbit"},
            {"id": "C", "teks": "Satelit akan terus mengorbit pada kelajuan sama / The satellite will continue to orbit at the same speed"},
            {"id": "D", "teks": "Satelit akan jatuh kembali ke Bumi mengikut lintasan pilin / The satellite will fall back towards the Earth in a spiral path"}
        ],
        "", "Percubaan Terengganu 2023", 2023
    ))
    
    # Q16
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q16", 16, "Sederhana", "Memahami",
        "Di manakah kekuatan medan graviti bernilai sifar antara Bumi dan Bulan?\nWhere is the gravitational field strength zero between the Earth and the Moon?\n(MRSM: 2023)",
        [
            {"id": "A", "teks": "Tepat di tengah-tengah jarak antara Bumi dan Bulan / Exactly at the midpoint between the Earth and the Moon"},
            {"id": "B", "teks": "Pada suatu titik neutral yang lebih hampir dengan Bulan / At a neutral point closer to the Moon"},
            {"id": "C", "teks": "Pada suatu titik neutral yang lebih hampir dengan Bumi / At a neutral point closer to the Earth"},
            {"id": "D", "teks": "Di permukaan Bulan / At the surface of the Moon"}
        ],
        "", "Percubaan MRSM 2023", 2023
    ))
    
    # Q17
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q17", 17, "Sederhana", "Memahami",
        "Rajah 3 menunjukkan angkasawan memakai sut angkasa lepas berjisim 82 kg. Dia mendapati berjalan di permukaan Bulan lebih mudah berbanding di permukaan Bumi dengan memakai sut yang sama.\nDiagram 3 shows an astronaut wearing a space suit with mass 82 kg. He discovered that walking on the surface of Moon is easier compared to the surface of Earth wearing the same suit.\n(MRSM: 2023)\n\nSituasi ini berlaku kerana\nThis situation occurs because",
        [
            {"id": "A", "teks": "Jisim sut angkasa lebih rendah di Bulan / The mass of the space suit is lower on the Moon"},
            {"id": "B", "teks": "Pecutan graviti di Bulan lebih kecil daripada di Bumi / Gravitational acceleration on the Moon is smaller than on Earth"},
            {"id": "C", "teks": "Tiada rintangan udara di Bulan / There is no air resistance on the Moon"},
            {"id": "D", "teks": "Sut angkasa kehilangan inersianya di Bulan / The space suit loses its inertia on the Moon"}
        ],
        "t4_b3_rajah3", "Percubaan MRSM 2023", 2023
    ))
    
    # Q18
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q18", 18, "Sederhana", "Memahami",
        "Rajah 4 menunjukkan sebuah roket dilancarkan bagi menghantar satelit buatan manusia ke angkasa lepas.\nDiagram 4 shows a rocket being launched to send man-made satellite to outer space.\n(Melaka: 2022)\n\nApakah syarat agar roket dapat mengatasi daya graviti Bumi sepenuhnya?\nWhat is the condition for the rocket to completely overcome Earth's gravitational pull?",
        [
            {"id": "A", "teks": "Halaju roket mesti mencapai atau melebihi halaju lepas Bumi / The rocket velocity must reach or exceed Earth's escape velocity"},
            {"id": "B", "teks": "Halaju roket sama dengan laju linear orbit rendah / The rocket velocity is equal to the linear speed of low orbit"},
            {"id": "C", "teks": "Jisim roket mestilah lebih kecil daripada jisim satelit / The mass of the rocket must be smaller than the satellite mass"},
            {"id": "D", "teks": "Daya tujah roket mestilah sifar di angkasa / The thrust of the rocket must be zero in space"}
        ],
        "t4_b3_rajah4", "Percubaan Melaka 2022", 2022
    ))
    
    # Q19
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q19", 19, "Sederhana", "Memahami",
        "Rajah 5 menunjukkan satu objek berjisim, m bergerak dalam lintasan membulat berjejari, r dengan laju linear, v. Objek tersebut mengalami daya memusat, F.\nDiagram 5 shows an object of mass, m moves in a circular path of radius, r with a linear speed, v. The object experiences centripetal force, F.\n(Melaka: 2022)\n\nArah daya memusat adalah sentiasa\nThe direction of centripetal force is always",
        [
            {"id": "A", "teks": "mengarah ke pusat bulatan / directed towards the centre of the circle"},
            {"id": "B", "teks": "tangensial kepada lintasan membulat / tangential to the circular path"},
            {"id": "C", "teks": "menjauhi pusat bulatan / directed away from the centre of the circle"},
            {"id": "D", "teks": "selari dengan arah halaju linear / parallel to the direction of linear velocity"}
        ],
        "t4_b3_rajah5", "Percubaan Melaka 2022", 2022
    ))
    
    # Q20
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q20", 20, "Sederhana", "Memahami",
        "Satelit geopegun sentiasa berada di atas lokasi geografi yang sama di Bumi. Antara berikut, yang manakah fungsi utama satelit ini?\nGeostationary satellites always remain above the same geographical location on Earth. Which of the following is the main function of this satellite?\n(Pahang: 2022)",
        [
            {"id": "A", "teks": "Pengimejan ketenteraan resolusi tinggi / High resolution military imaging"},
            {"id": "B", "teks": "Penyiaran telekomunikasi dan televisyen secara berterusan / Continuous telecommunication and television broadcasting"},
            {"id": "C", "teks": "Penyelidikan saintifik kutub Bumi / Scientific research of Earth's poles"},
            {"id": "D", "teks": "Pemantauan pertanian bermusim / Seasonal agricultural monitoring"}
        ],
        "", "Percubaan Pahang 2022", 2022
    ))
    
    # Q21
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q21", 21, "Sederhana", "Memahami",
        "Manakah antara satelit berikut yang paling sesuai digunakan untuk menyediakan data ramalan cuaca di rantau khatulistiwa tanpa gangguan?\nWhich of the following satellites is most suitable for providing uninterrupted weather forecasting data in the equatorial region?\n(Pahang: 2022)",
        [
            {"id": "A", "teks": "Satelit orbit rendah (LEO) / Low Earth Orbit (LEO) satellite"},
            {"id": "B", "teks": "Satelit geopegun (GEO) / Geostationary Earth Orbit (GEO) satellite"},
            {"id": "C", "teks": "Satelit orbit kutub / Polar orbit satellite"},
            {"id": "D", "teks": "Satelit altitud sederhana / Medium altitude satellite"}
        ],
        "", "Percubaan Pahang 2022", 2022
    ))
    
    # Q22
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q22", 22, "Sederhana", "Memahami",
        "Apakah unit S.I. bagi pemalar kegravitian semesta, G?\nWhat is the S.I. unit for the universal gravitational constant, G?\n(Perak: 2022)",
        [
            {"id": "A", "teks": "N m kg⁻¹ / N m kg⁻¹"},
            {"id": "B", "teks": "N m² kg⁻¹ / N m² kg⁻¹"},
            {"id": "C", "teks": "N m² kg⁻² / N m² kg⁻²"},
            {"id": "D", "teks": "N m⁻² kg² / N m⁻² kg²"}
        ],
        "", "Percubaan Perak 2022", 2022
    ))
    
    # Q23
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q23", 23, "Sederhana", "Memahami",
        "Halaju lepas dari permukaan sesebuah planet diberikan oleh rumus v = √(2GM / R). Pernyataan manakah yang benar tentang halaju lepas?\nThe escape velocity from the surface of a planet is given by the formula v = √(2GM / R). Which statement is true about escape velocity?\n(Perak: 2022)",
        [
            {"id": "A", "teks": "Halaju lepas bertambah jika jejari planet bertambah / Escape velocity increases if the radius of the planet increases"},
            {"id": "B", "teks": "Halaju lepas bertambah jika jisim planet bertambah / Escape velocity increases if the mass of the planet increases"},
            {"id": "C", "teks": "Halaju lepas bergantung kepada jisim objek yang dilancarkan / Escape velocity depends on the mass of the launched object"},
            {"id": "D", "teks": "Halaju lepas adalah sifar di angkasa lepas / Escape velocity is zero in outer space"}
        ],
        "", "Percubaan Perak 2022", 2022
    ))
    
    # Q24
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q24", 24, "Sederhana", "Memahami",
        "Apakah yang akan berlaku kepada daya tarikan graviti antara dua objek jika jarak pemisahan antara kedua-duanya digandakan menjadi dua kali ganda?\nWhat will happen to the gravitational force between two objects if the separation distance between them is doubled?\n(Perlis: 2022)",
        [
            {"id": "A", "teks": "Daya graviti digandakan dua kali / Gravitational force is doubled"},
            {"id": "B", "teks": "Daya graviti tidak berubah / Gravitational force remains unchanged"},
            {"id": "C", "teks": "Daya graviti menjadi separuh daripada nilai asal / Gravitational force becomes half of the original value"},
            {"id": "D", "teks": "Daya graviti berkurang kepada 1/4 daripada nilai asal / Gravitational force is reduced to 1/4 of the original value"}
        ],
        "", "Percubaan Perlis 2022", 2022
    ))
    
    # Q25
    questions.append(make_q(
        "MODUL_T4_B3_K2_Q25", 25, "Sederhana", "Memahami",
        "Rajah 6 menunjukkan graf hubungan antara daya graviti, F dan jisim, m untuk objek berhampiran permukaan Bumi.\nDiagram 6 shows the graph of relationship between gravitational force, F and mass, m for objects near to Earth's surface.\n(Putrajaya: 2022)\n\nKecerunan graf mewakili\nGradient of graph represents",
        [
            {"id": "A", "teks": "pecutan graviti, g / gravitational acceleration, g"},
            {"id": "B", "teks": "pemalar kegravitian semesta, G / universal gravitational constant, G"},
            {"id": "C", "teks": "jisim Bumi / mass of Earth"},
            {"id": "D", "teks": "jejari Bumi / radius of Earth"}
        ],
        "t4_b3_rajah6", "Percubaan Putrajaya 2022", 2022
    ))
    
    return questions

if __name__ == '__main__':
    qs = get_k2_part1_questions()
    print(f"Generated {len(qs)} K2 Part 1 questions successfully.")
