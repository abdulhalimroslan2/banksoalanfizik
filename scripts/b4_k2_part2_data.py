import json
from scripts.build_dataset_helper_b4 import make_b4_q

def get_k2_part2_questions():
    questions = []

    # Q36
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q36", 36, "Sederhana", "Memahami",
        "Situasi manakah yang menunjukkan konsep keseimbangan terma?\nWhich situation shows the concept of thermal equilibrium? (SBP: 2022)",
        [
            {"id": "A", "teks": "Dua objek pada suhu 30 °C dan 70 °C bersentuhan / Two objects at 30 °C and 70 °C in contact"},
            {"id": "B", "teks": "Dua objek pada suhu 40 °C dan 40 °C dengan penghalang haba di antaranya / Two objects at 40 °C and 40 °C with heat barrier between them"},
            {"id": "C", "teks": "Dua objek pada suhu 35 °C dan 35 °C dalam sentuhan terma / Two objects at 35 °C and 35 °C in thermal contact"},
            {"id": "D", "teks": "Dua objek pada suhu 30 °C dan 0 °C bersentuhan / Two objects at 30 °C and 0 °C in contact"}
        ],
        "", "Percubaan SBP 2022", 2022
    ))

    # Q37
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q37", 37, "Sederhana", "Memahami",
        "Antara takat tetap yang berikut, yang manakah digunakan untuk penentukuran skala sebatang termometer?\nWhich of the following fixed points is used to calibrate the scale of a thermometer? (Selangor: Set 1: 2022)",
        [
            {"id": "A", "teks": "Takat ais (0 °C) dan takat stim (100 °C) / Ice point (0 °C) and steam point (100 °C)"},
            {"id": "B", "teks": "Takat lebur lilin dan takat didih alkohol / Melting point of wax and boiling point of alcohol"},
            {"id": "C", "teks": "Suhu bilik dan suhu badan manusia / Room temperature and human body temperature"},
            {"id": "D", "teks": "Suhu sifar mutlak dan takat tigaan air / Absolute zero temperature and triple point of water"}
        ],
        "", "Percubaan Selangor Set 1 2022", 2022
    ))

    # Q38
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q38", 38, "Sederhana", "Memahami",
        "Rajah 30 menunjukkan lengkung penyejukan suatu bahan.\nDiagram 30 shows the cooling curve of a substance. (Selangor: Set 1: 2022)\n\nApakah kesan haba yang dibebaskan oleh bahan tersebut antara masa t1 dan t2?\nWhat is the effect of heat released by the substance between time t1 and t2?",
        [
            {"id": "A", "teks": "Memperlahankan gerakan molekul / Slows down molecular motion"},
            {"id": "B", "teks": "Membentuk ikatan antara molekul untuk menjadi pepejal / Forms bonds between molecules to become solid"},
            {"id": "C", "teks": "Menurunkan suhu bahan / Lowers the temperature of the substance"},
            {"id": "D", "teks": "Memecahkan ikatan antara zarah / Breaks bonds between particles"}
        ],
        "rajah30", "Percubaan Selangor Set 1 2022", 2022
    ))

    # Q39
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q39", 39, "Sederhana", "Memahami",
        "Graf manakah menunjukkan hubungan antara isipadu dan suhu bagi satu jisim tetap gas pada tekanan malar?\nWhich graph shows the relationship between the volume and temperature of a fixed mass of gas at constant pressure? (Selangor: Set 1: 2022)",
        [
            {"id": "A", "teks": "Graf V melawan T (°C) memotong paksi suhu pada -273 °C / Graph V against T (°C) intercepting temperature axis at -273 °C"},
            {"id": "B", "teks": "Graf V melawan T berkadar songsang / Graph V inversely proportional to T"},
            {"id": "C", "teks": "Graf V melawan T berbentuk parabola / Parabolic graph of V against T"},
            {"id": "D", "teks": "Graf V melawan T garis mendatar malar / Horizontal constant line of V against T"}
        ],
        "", "Percubaan Selangor Set 1 2022", 2022
    ))

    # Q40
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q40", 40, "Sederhana", "Memahami",
        "Rajah 31 menunjukkan sebiji bola logam yang panas dimasukkan ke dalam air sejuk.\nDiagram 31 shows a hot metal ball being immersed into a cold water. (Selangor: Set 2: 2022)\n\nApakah yang berlaku apabila keseimbangan terma dicapai?\nWhat happens when thermal equilibrium is reached?",
        [
            {"id": "A", "teks": "Suhu akhir bola logam dan air adalah sama / Final temperature of metal ball and water is the same"},
            {"id": "B", "teks": "Kadar pemindahan haba dari bola ke air lebih tinggi / Rate of heat transfer from ball to water is higher"},
            {"id": "C", "teks": "Tenaga haba bola logam menjadi sifar / Heat energy of the metal ball becomes zero"},
            {"id": "D", "teks": "Air mendidih serta-merta / Water boils immediately"}
        ],
        "rajah31", "Percubaan Selangor Set 2 2022", 2022
    ))

    # Q41
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q41", 41, "Sederhana", "Memahami",
        "Graf manakah menunjukkan hubungan antara tekanan dan suhu mutlak bagi suatu gas berjisim tetap pada isipadu malar?\nWhich graph shows the relationship between the pressure and absolute temperature of a fixed mass of gas at constant volume? (Selangor: Set 2: 2022)",
        [
            {"id": "A", "teks": "Graf garis lurus bermula dari asalan (P berkadar terus dengan T dalam Kelvin) / Straight line graph starting from origin (P directly proportional to T in Kelvin)"},
            {"id": "B", "teks": "Graf lengkung hiperbola (P berkadar songsang dengan T) / Hyperbolic curve (P inversely proportional to T)"},
            {"id": "C", "teks": "Graf mendatar (tekanan malar dengan T) / Horizontal line (pressure constant with T)"},
            {"id": "D", "teks": "Graf garis lurus dengan kecerunan negatif / Straight line with negative gradient"}
        ],
        "", "Percubaan Selangor Set 2 2022", 2022
    ))

    # Q42
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q42", 42, "Sederhana", "Memahami",
        "Kadar penyejatan air dalam sebuah bekas dapat dikurangkan dengan meletakkan bekas tersebut\nThe rate of evaporation of water in a container can be reduced by placing the container (SMKA: 2022)",
        [
            {"id": "A", "teks": "di dalam ruang pada suhu bilik / in a room with room temperature"},
            {"id": "B", "teks": "di kawasan yang mempunyai kelembapan udara yang tinggi / in an area with high air humidity"},
            {"id": "C", "teks": "di bawah pancaran matahari terik / under direct sunlight"},
            {"id": "D", "teks": "di hadapan kipas yang berputar laju / in front of a fast-spinning fan"}
        ],
        "", "Percubaan SMKA 2022", 2022
    ))

    # Q43
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q43", 43, "Sederhana", "Memahami",
        "Rajah 32 menunjukkan sebuah botol plastik berisi udara di dalam peti sejuk, sebelum dan selepas disejukkan.\nDiagram 32 shows an empty plastic bottle filled with air in the refrigerator, before and after cooling. (SMKA: 2022)\n\nFenomena ini berlaku kerana\nThis phenomenon occurs because",
        [
            {"id": "A", "teks": "tekanan udara di luar berkurang / external air pressure decreases"},
            {"id": "B", "teks": "tenaga kinetik molekul udara di dalam botol berkurang menyebabkan isi padu berkurang / kinetic energy of air molecules inside the bottle decreases causing volume to decrease"},
            {"id": "C", "teks": "jisim udara di dalam botol berkurang / mass of air inside the bottle decreases"},
            {"id": "D", "teks": "ketumpatan plastik bertambah / density of plastic increases"}
        ],
        "rajah32", "Percubaan SMKA 2022", 2022
    ))

    # Q44
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q44", 44, "Sederhana", "Memahami",
        "Rajah 33 menunjukkan lengkung pemanasan bagi suatu cecair.\nDiagram 33 shows the heating curve of a liquid. (Terengganu: 2022)\n\nPernyataan manakah yang menerangkan apa yang berlaku semasa cecair mendidih?\nWhich statement explains what happens when the liquid is boiling?",
        [
            {"id": "A", "teks": "Suhu meningkat dengan cepat / Temperature increases rapidly"},
            {"id": "B", "teks": "Haba diserap untuk memutuskan ikatan antara molekul cecair / Heat is absorbed to break bonds between liquid molecules"},
            {"id": "C", "teks": "Tenaga kinetik purata molekul bertambah / Average kinetic energy of molecules increases"},
            {"id": "D", "teks": "Haba dibebaskan ke persekitaran / Heat is released to surroundings"}
        ],
        "rajah33", "Percubaan Terengganu 2022", 2022
    ))

    # Q45
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q45", 45, "Sederhana", "Memahami",
        "Pernyataan manakah adalah betul mengenai termometer cecair dalam kaca?\nWhich of the following statement is correct about liquid-in-glass thermometer? (Kedah: 2021)\n\nI Termometer itu mengaplikasikan konsep keseimbangan terma / The thermometer applies the concept of thermal equilibrium\nII Merkuri digunakan kerana ia membasahi kaca / Mercury is used because it wets glass\nIII Tiub kapilari yang sempit meningkatkan kepekaan / Narrow capillary tube increases sensitivity",
        [
            {"id": "A", "teks": "I dan II sahaja / I and II only"},
            {"id": "B", "teks": "I dan III sahaja / I and III only"},
            {"id": "C", "teks": "II dan III sahaja / II and III only"},
            {"id": "D", "teks": "I, II dan III / I, II and III"}
        ],
        "", "Percubaan Kedah 2021", 2021
    ))

    # Q46
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q46", 46, "Sederhana", "Memahami",
        "Rajah 34 menunjukkan susunan radas untuk mengkaji hubungan antara isipadu turus udara, V dan suhu, T bagi jisim udara yang malar.\nDiagram 34 shows an arrangement of apparatus to investigate the relationship between the volume of air column, V and temperature, T for a constant mass of air. (Perak: 2021)\n\nApakah fungsi turus asid sulfurik pekat?\nWhat is the function of the concentrated sulfuric acid column?",
        [
            {"id": "A", "teks": "Memerangkap udara dan bertindak sebagai penunjuk indeks / Traps air and acts as index indicator"},
            {"id": "B", "teks": "Mengeringkan air di dalam bikar / Dries water in beaker"},
            {"id": "C", "teks": "Meningkatkan tekanan udara terperangkap / Increases trapped air pressure"},
            {"id": "D", "teks": "Menyerap haba secara seragam / Absorbs heat uniformly"}
        ],
        "rajah34", "Percubaan Perak 2021", 2021
    ))

    # Q47
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q47", 47, "Sederhana", "Memahami",
        "Rajah 35 menunjukkan seorang budak berjalan di atas pasir dan seorang budak berjalan dalam air laut pada waktu siang yang panas.\nDiagram 35 shows a boy walking on the sand and another boy walking in sea water on a hot daytime. (Sarawak: 2021)\n\nMengapakah pasir terasa lebih panas berbanding air laut?\nWhy does sand feel hotter than sea water?",
        [
            {"id": "A", "teks": "Muatan haba tentu pasir lebih rendah daripada muatan haba tentu air laut / Specific heat capacity of sand is lower than sea water"},
            {"id": "B", "teks": "Muatan haba tentu pasir lebih tinggi daripada muatan haba tentu air laut / Specific heat capacity of sand is higher than sea water"},
            {"id": "C", "teks": "Ketumpatan pasir lebih tinggi daripada air laut / Density of sand is higher than sea water"},
            {"id": "D", "teks": "Pasir membebaskan haba lebih perlahan / Sand releases heat slower"}
        ],
        "rajah35", "Percubaan Sarawak 2021", 2021
    ))

    # Q48
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q48", 48, "Sederhana", "Memahami",
        "Rajah 36 menunjukkan alkohol ditiup berulang kali menggunakan penyedut minuman. Didapati bahawa bahagian luar bikar menjadi sejuk.\nDiagram 36 shows alcohol is blown repeatedly by using drinking straw. It was found that the outside of the beaker becomes cold. (Sarawak: 2021)\n\nHal ini berlaku kerana\nThis happens because",
        [
            {"id": "A", "teks": "penyejatan alkohol menyerap haba pendam daripada bikar / evaporation of alcohol absorbs latent heat from beaker"},
            {"id": "B", "teks": "penyejatan alkohol membebaskan haba pendam ke bikar / evaporation of alcohol releases latent heat to beaker"},
            {"id": "C", "teks": "alkohol membeku di dalam bikar / alcohol freezes inside beaker"},
            {"id": "D", "teks": "udara yang ditiup mempunyai suhu sangat rendah / blown air has very low temperature"}
        ],
        "rajah36", "Percubaan Sarawak 2021", 2021
    ))

    # Q49
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q49", 49, "Sederhana", "Memahami",
        "Rajah 37 menunjukkan objek A dan objek B pada suhu T1 dan T2. Haba mengalir dari A ke B sehingga keseimbangan terma dicapai pada suhu T.\nDiagram 37 shows object A and object B at temperatures T1 and T2. Heat flows from A to B until thermal equilibrium is achieved at temperature T. (Selangor: Set 1: 2021)\n\nHubungan suhu manakah yang betul?\nWhich temperature relationship is correct?",
        [
            {"id": "A", "teks": "T1 > T > T2"},
            {"id": "B", "teks": "T2 > T > T1"},
            {"id": "C", "teks": "T > T1 > T2"},
            {"id": "D", "teks": "T1 = T2 = T"}
        ],
        "rajah37", "Percubaan Selangor Set 1 2021", 2021
    ))

    # Q50
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q50", 50, "Sederhana", "Memahami",
        "Jadual 1 menunjukkan muatan haba tentu bagi empat bahan P, Q, R dan S.\nTable 1 shows the specific heat capacity of four materials P, Q, R and S. (Selangor: Set 1: 2021)\n[P: 800 J kg^-1 °C^-1, Q: 900 J kg^-1 °C^-1, R: 1300 J kg^-1 °C^-1, S: 2100 J kg^-1 °C^-1]\n\nBahan manakah yang paling sesuai digunakan sebagai tapak kuali memasak?\nWhich material is most suitable to be used as base of a cooking pan?",
        [
            {"id": "A", "teks": "Bahan P (muatan haba tentu paling rendah, cepat panas) / Material P (lowest specific heat capacity, heats up fast)"},
            {"id": "B", "teks": "Bahan Q / Material Q"},
            {"id": "C", "teks": "Bahan R / Material R"},
            {"id": "D", "teks": "Bahan S / Material S"}
        ],
        "", "Percubaan Selangor Set 1 2021", 2021
    ))

    # Q51
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q51", 51, "Sederhana", "Memahami",
        "Rajah 38 menunjukkan sebiji belon yang diletakkan di dalam bekas kedap udara.\nDiagram 38 shows a balloon which is placed in an air-tight container. (Selangor: Set 1: 2021)\n\nJika omboh ditolak ke bawah pada suhu malar, apakah yang akan berlaku kepada saiz belon?\nIf the piston is pushed down at constant temperature, what will happen to the size of the balloon?",
        [
            {"id": "A", "teks": "Mengecil kerana tekanan udara di luar belon bertambah / Shrinks because air pressure outside balloon increases"},
            {"id": "B", "teks": "Membesar / Expands"},
            {"id": "C", "teks": "Tidak berubah / Remains unchanged"},
            {"id": "D", "teks": "Meletup serta merta / Bursts immediately"}
        ],
        "rajah38", "Percubaan Selangor Set 1 2021", 2021
    ))

    # Q52
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q52", 52, "Sederhana", "Memahami",
        "Rajah 39 menunjukkan blok pepejal A dan B yang berjisim sama sedang dipanaskan. Suhu awal A dan B adalah sama dan dipanaskan dengan jumlah tenaga yang sama. Didapati suhu akhir A lebih tinggi daripada suhu akhir B.\nDiagram 39 shows solid blocks A and B of equal mass being heated. The initial temperature of A and B is the same and they are heated with the same amount of energy. It is found that the final temperature of A is higher than B. (Selangor: Set 2: 2021)\n\nPernyataan manakah yang benar?\nWhich statement is true?",
        [
            {"id": "A", "teks": "Muatan haba tentu A lebih rendah daripada B / Specific heat capacity of A is lower than B"},
            {"id": "B", "teks": "Muatan haba tentu A lebih tinggi daripada B / Specific heat capacity of A is higher than B"},
            {"id": "C", "teks": "Haba pendam tentu A lebih rendah daripada B / Specific latent heat of A is lower than B"},
            {"id": "D", "teks": "Blok A menyerap lebih banyak haba berbanding B / Block A absorbs more heat than B"}
        ],
        "rajah39", "Percubaan Selangor Set 2 2021", 2021
    ))

    # Q53
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q53", 53, "Sederhana", "Memahami",
        "Antara graf berikut, yang manakah adalah berkaitan dengan Hukum Gay-Lussac?\nWhich of the following graphs is related to Gay-Lussac's Law? (Selangor: Set 2: 2021)",
        [
            {"id": "A", "teks": "Graf P melawan T (Kelvin) bermula dari asalan / Graph of P against T (Kelvin) passing through origin"},
            {"id": "B", "teks": "Graf P melawan 1/V garis lurus / Graph of P against 1/V straight line"},
            {"id": "C", "teks": "Graf V melawan T (Kelvin) bermula dari asalan / Graph of V against T (Kelvin) passing through origin"},
            {"id": "D", "teks": "Graf P melawan V garis mendatar / Horizontal graph of P against V"}
        ],
        "", "Percubaan Selangor Set 2 2021", 2021
    ))

    # Q54
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q54", 54, "Sederhana", "Memahami",
        "Rajah 40 menunjukkan seorang lelaki menuangkan air ke dalam radiator kereta bertujuan membantu mengawal suhu enjin.\nDiagram 40 shows a man pouring water into his car's radiator to control the temperature of an engine. (MRSM: 2021)\n\nMengapakah air digunakan dalam sistem penyejuk radiator kereta?\nWhy is water used in a car radiator cooling system?",
        [
            {"id": "A", "teks": "Muatan haba tentu air adalah tinggi / Specific heat capacity of water is high"},
            {"id": "B", "teks": "Ketumpatan air adalah rendah / Density of water is low"},
            {"id": "C", "teks": "Takat didih air adalah sangat rendah / Boiling point of water is very low"},
            {"id": "D", "teks": "Air tidak bertindak balas dengan logam / Water does not react with metals"}
        ],
        "rajah40", "Percubaan MRSM 2021", 2021
    ))

    # Q55
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q55", 55, "Sederhana", "Memahami",
        "Rajah 41 menunjukkan fenomena bayu laut.\nDiagram 41 shows the sea breeze phenomenon. (MRSM: 2021)\n\nMengapakah fenomena bayu laut berlaku pada waktu siang?\nWhy does the sea breeze phenomenon occur during daytime?",
        [
            {"id": "A", "teks": "Laut membebaskan haba lebih cepat berbanding darat / Sea releases heat faster than land"},
            {"id": "B", "teks": "Laut mempunyai haba pendam tentu lebih tinggi berbanding darat / Sea has higher specific latent heat than land"},
            {"id": "C", "teks": "Laut menyerap lebih banyak haba berbanding darat pada waktu siang / Sea absorbs more heat than land during daytime"},
            {"id": "D", "teks": "Laut mempunyai muatan haba tentu yang lebih tinggi berbanding darat / Sea has higher specific heat capacity than land"}
        ],
        "rajah41", "Percubaan MRSM 2021", 2021
    ))

    # Q56
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q56", 56, "Sederhana", "Memahami",
        "Rajah 42 (a) menunjukkan air dipanaskan menggunakan pemanas. Sebuah termometer dwilogam merekodkan suhu air tersebut. Rajah 42 (b) menunjukkan isipadu air selepas 20 minit mendidih.\nDiagram 42 (a) shows water is being heated using a heater. A bimetallic thermometer is used to record the temperature. Diagram 42 (b) shows volume of water after 20 minutes of boiling. (Melaka: 2021)\n\nApakah konsep fizik yang menerangkan penurunan isipadu air semasa mendidih pada suhu malar?\nWhat is the physics concept that explains the decrease in water volume during boiling at constant temperature?",
        [
            {"id": "A", "teks": "Haba pendam tentu pengewapan / Specific latent heat of vaporization"},
            {"id": "B", "teks": "Haba pendam tentu pelakuran / Specific latent heat of fusion"},
            {"id": "C", "teks": "Muatan haba tentu air / Specific heat capacity of water"},
            {"id": "D", "teks": "Keseimbangan terma / Thermal equilibrium"}
        ],
        "rajah42", "Percubaan Melaka 2021", 2021
    ))

    # Q57
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q57", 57, "Sederhana", "Memahami",
        "Rajah 43 menunjukkan pandangan belakang sebuah peti sejuk. Selepas gas penyejuk dimampatkan oleh pemampat, ia akan melalui bahagian kondenser. Perubahan keadaan jirim berlaku kepada gas semasa melalui kondenser.\nDiagram 43 shows rear view of a refrigerator. After refrigerant gas is compressed, it flows through condenser. State of matter changes when gas passes through condenser. (Melaka: 2021)\n\nApakah perubahan fasa yang berlaku di dalam kondenser?\nWhat phase change occurs in the condenser?",
        [
            {"id": "A", "teks": "Gas membebaskan haba pendam tentu dan memeluwap menjadi cecair / Gas releases latent heat and condenses to liquid"},
            {"id": "B", "teks": "Cecair menyerap haba dan menyejat / Liquid absorbs heat and evaporates"},
            {"id": "C", "teks": "Cecair membeku menjadi pepejal / Liquid freezes to solid"},
            {"id": "D", "teks": "Gas mengembang tanpa perubahan fasa / Gas expands without phase change"}
        ],
        "rajah43", "Percubaan Melaka 2021", 2021
    ))

    # Q58
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q58", 58, "Sederhana", "Memahami",
        "Rajah 44 menunjukkan sfera logam pada suhu 90 °C direndam ke dalam cecair pada suhu 40 °C.\nDiagram 44 shows a metal sphere at temperature of 90 °C immersed in a liquid at temperature of 40 °C. (Melaka: 2021)\n\nAntara pernyataan berikut, yang manakah betul apabila keseimbangan terma dicapai?\nWhich of the following statements is correct when thermal equilibrium is reached?",
        [
            {"id": "A", "teks": "Suhu sfera logam dan cecair menjadi sama / Temperature of metal sphere and liquid becomes equal"},
            {"id": "B", "teks": "Tenaga dalam sfera logam menjadi sifar / Internal energy of metal sphere becomes zero"},
            {"id": "C", "teks": "Haba mengalir daripada cecair ke sfera logam / Heat flows from liquid to metal sphere"},
            {"id": "D", "teks": "Kadar pemindahan haba dari sfera ke cecair kekal lebih tinggi / Rate of heat transfer from sphere to liquid remains higher"}
        ],
        "rajah44", "Percubaan Melaka 2021", 2021
    ))

    # Q59
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q59", 59, "Sederhana", "Memahami",
        "Rajah 45 menunjukkan satu sudu logam diletakkan dalam secawan kopi panas.\nDiagram 45 shows a cold metal spoon is placed in a cup of hot coffee. (Perlis: 2021)\n\nTentukan pernyataan yang betul tentang pengaliran haba antara sudu dan kopi panas sebelum mencapai keseimbangan terma.\nDetermine the correct statement about heat flow between spoon and hot coffee before reaching thermal equilibrium.",
        [
            {"id": "A", "teks": "Haba mengalir dari kopi panas ke sudu logam pada kadar lebih tinggi daripada sudu ke kopi / Heat flows from hot coffee to metal spoon at higher rate than from spoon to coffee"},
            {"id": "B", "teks": "Haba hanya mengalir satu arah dari sudu ke kopi / Heat flows only one-way from spoon to coffee"},
            {"id": "C", "teks": "Tiada pengaliran haba berlaku / No heat flow occurs"},
            {"id": "D", "teks": "Kadar pemindahan haba bersih adalah sifar / Net rate of heat transfer is zero"}
        ],
        "rajah45", "Percubaan Perlis 2021", 2021
    ))

    # Q60
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q60", 60, "Sederhana", "Memahami",
        "Rajah 46 menunjukan botol plastik kosong diletakkan dalam peti sejuk. Selepas beberapa minit disejukkan, botol plastik itu kemek.\nDiagram 46 shows an empty plastic bottle is placed in a refrigerator. After a few minutes of cooling, the plastic bottle is dented. (Perlis: 2021)\n\nFenomena ini dapat diterangkan oleh\nThis phenomenon can be explained by",
        [
            {"id": "A", "teks": "Hukum Charles / Charles' law"},
            {"id": "B", "teks": "Hukum Boyle / Boyle's law"},
            {"id": "C", "teks": "Hukum Gay-Lussac / Gay-Lussac's law"},
            {"id": "D", "teks": "Prinsip Archimedes / Archimedes' principle"}
        ],
        "rajah46", "Percubaan Perlis 2021", 2021
    ))

    # Q61
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q61", 61, "Sederhana", "Memahami",
        "Rajah 47 menunjukkan satu termometer yang diletakkan di bawah lidah pesakit. Selepas beberapa ketika, suhu pesakit ialah 37.8 °C.\nDiagram 47 shows a thermometer is placed under a patient's tongue. After a while, the patient's temperature is 37.8 °C. (Perlis: 2021)\n\nPernyataan manakah yang betul?\nWhich statement is correct?",
        [
            {"id": "A", "teks": "Keseimbangan terma telah dicapai antara pesakit dan termometer / Thermal equilibrium has been achieved between patient and thermometer"},
            {"id": "B", "teks": "Suhu pesakit lebih tinggi daripada termometer / Patient's temperature is higher than thermometer"},
            {"id": "C", "teks": "Pemindahan haba bersih masih berlaku ke arah termometer / Net heat transfer is still occurring towards thermometer"},
            {"id": "D", "teks": "Merkuri tidak mencapai suhu yang sama dengan badan pesakit / Mercury does not reach the same temperature as patient's body"}
        ],
        "rajah47", "Percubaan Perlis 2021", 2021
    ))

    # Q62
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q62", 62, "Sederhana", "Memahami",
        "Rajah 48 menunjukkan keadaan baju yang digosok menggunakan seterika wap. Baju yang digosok menggunakan seterika wap lebih licin dan rapi.\nDiagram 48 shows a condition of a shirt that is ironed with a steamed iron. Clothes that are ironed using a steamed iron are smoother and neater. (Perlis: 2021)\n\nApakah konsep fizik yang diaplikasikan?\nWhat physics concept is applied?",
        [
            {"id": "A", "teks": "Haba pendam tentu pengewapan stim membebaskan sejumlah besar haba apabila memeluwap pada serat kain / Specific latent heat of vaporization of steam releases large amount of heat when condensing on fabric fibers"},
            {"id": "B", "teks": "Muatan haba tentu air yang rendah / Low specific heat capacity of water"},
            {"id": "C", "teks": "Haba pendam tentu pelakuran / Specific latent heat of fusion"},
            {"id": "D", "teks": "Hukum Boyle bagi stim / Boyle's law of steam"}
        ],
        "rajah48", "Percubaan Perlis 2021", 2021
    ))

    # Q63
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q63", 63, "Sederhana", "Memahami",
        "Situasi manakah yang melibatkan Hukum Charles?\nWhich situations involved Charles' Law? (SPM: 2022)",
        [
            {"id": "A", "teks": "Bola ping-pong kemek diletakkan dalam air panas menjadi bulat semula / Dented ping-pong ball placed in hot water becomes round again"},
            {"id": "B", "teks": "Picagari ditekan pada suhu malar / Syringe compressed at constant temperature"},
            {"id": "C", "teks": "Tekanan tayar diukur sebelum dan selepas perjalanan jauh / Tyre pressure measured before and after long journey"},
            {"id": "D", "teks": "Belon udara panas mengecut dalam cecair sejuk / Hot air balloon shrinking in cold water"}
        ],
        "", "SPM 2022", 2022
    ))

    # Q64
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q64", 64, "Sederhana", "Memahami",
        "Sebatang sudu logam telah diletakkan ke dalam air kopi panas. Antara pernyataan yang berikut, yang manakah betul tentang pengaliran haba?\nA metal spoon is placed inside hot coffee water. Which of the following is correct about the heat flow? (SPM: 2023)",
        [
            {"id": "A", "teks": "Haba hanya mengalir dari air kopi ke sudu / Heat flows from coffee water to spoon only"},
            {"id": "B", "teks": "Haba bersih mengalir dari sudu ke air kopi / Net heat flows from spoon to coffee water"},
            {"id": "C", "teks": "Tiada haba mengalir dari kedua-dua air kopi dan sudu pada keseimbangan terma / No heat flows from both coffee water and spoon at thermal equilibrium"},
            {"id": "D", "teks": "Kadar pemindahan haba dari air kopi ke sudu adalah sama dengan kadar pemindahan haba dari sudu ke air kopi pada keseimbangan terma / Rate of heat transfer from coffee water to spoon is equal to rate of heat transfer from spoon to coffee water at thermal equilibrium"}
        ],
        "", "SPM 2023", 2023
    ))

    # Q65
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q65", 65, "Sederhana", "Memahami",
        "Rajah 49 menunjukkan sekeping keju diletakkan di atas sekeping roti dan dibakar di dalam oven. Apabila dikeluarkan dari oven dalam beberapa minit, didapati keju yang cair masih lagi panas berbanding roti.\nDiagram 49 shows a piece of cheese placed on top of a piece of bread and baked in the oven. When removed from the oven in a few minutes, it is found that the melted cheese is still hotter than the bread. (SPM: 2023)\n\nAntara pernyataan berikut, yang manakah betul?\nWhich of the following statements is correct?\nI Keju menyerap haba dengan banyak / Cheese absorbs more heat\nII Keju mempunyai muatan haba tentu yang tinggi / Cheese has higher specific heat capacity\nIII Keju dan roti mempunyai muatan haba tentu yang sama / Cheese and bread have same specific heat capacity\nIV Muatan haba tentu keju lebih rendah berbanding roti / The specific heat capacity of cheese is lower than the bread",
        [
            {"id": "A", "teks": "I dan II / I and II"},
            {"id": "B", "teks": "I dan IV / I and IV"},
            {"id": "C", "teks": "II dan III / II and III"},
            {"id": "D", "teks": "III dan IV / III and IV"}
        ],
        "rajah49", "SPM 2023", 2023
    ))

    return questions
