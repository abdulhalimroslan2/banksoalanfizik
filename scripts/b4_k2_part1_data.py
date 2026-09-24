import json
from scripts.build_dataset_helper_b4 import make_b4_q

def get_k2_part1_questions():
    questions = []

    # Q01
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q01", 1, "Sederhana", "Memahami",
        "Rajah 2 menunjukkan graf penyejukan suatu bahan.\nDiagram 2 shows the cooling graph of a substance. (Kelantan: 2023)\n\nApakah yang berlaku kepada tenaga kinetik molekul antara titik X dan Y?\nWhat happen to the kinetic energy of the molecules between point X and Y?",
        [
            {"id": "A", "teks": "Berkurang / Decrease"},
            {"id": "B", "teks": "Bertambah / Increase"},
            {"id": "C", "teks": "Tetap / Constant"},
            {"id": "D", "teks": "Sifar / Zero"}
        ],
        "rajah2", "Percubaan Kelantan 2023", 2023
    ))

    # Q02
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q02", 2, "Sederhana", "Memahami",
        "Rajah 3 menunjukkan daya yang dikenakan pada satu omboh yang mengandungi udara terperangkap. Didapati isipadu udara terperangkap berkurang apabila daya yang lebih besar digunakan.\nDiagram 3 shows the force exerted on a piston containing trapped air. It was found that the volume of trapped air decreases when a greater force is applied. (Kelantan: 2023)\n\nApakah hukum yang menerangkan situasi di atas?\nWhat is the law that explain the above situation?",
        [
            {"id": "A", "teks": "Hukum Boyle / Boyle's Law"},
            {"id": "B", "teks": "Hukum Charles / Charles' Law"},
            {"id": "C", "teks": "Hukum Gay-Lussac / Gay-Lussac's Law"},
            {"id": "D", "teks": "Hukum Tekanan / Pressure Law"}
        ],
        "rajah3", "Percubaan Kelantan 2023", 2023
    ))

    # Q03
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q03", 3, "Sederhana", "Memahami",
        "Rajah 4 menunjukkan dua objek yang berada dalam keseimbangan terma.\nDiagram 4 shows two objects that are in thermal equilibrium. (Melaka: 2023)\n\nPernyataan manakah yang betul bagi kedua-dua objek ini?\nWhich statement is correct for these two objects?",
        [
            {"id": "A", "teks": "Jisim yang sama / The same mass"},
            {"id": "B", "teks": "Kuantiti tenaga haba yang sama / The same amount of heat energy"},
            {"id": "C", "teks": "Muatan haba yang sama / The same heat capacity"},
            {"id": "D", "teks": "Suhu yang sama / The same temperature"}
        ],
        "rajah4", "Percubaan Melaka 2023", 2023
    ))

    # Q04
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q04", 4, "Sederhana", "Memahami",
        "Rajah 5 menunjukkan nasi sedang dimasak menggunakan periuk tanah.\nDiagram 5 shows rice being cooked using clay pot. (Negeri Sembilan: 2023)\n\nApakah antara sifat fizikal periuk tanah yang menjadikannya sesuai digunakan untuk tujuan di atas?\nWhat are some of the physical properties of the clay pots that make them suitable to be used for the above purpose?",
        [
            {"id": "A", "teks": "Tenaga yang sedikit diperlukan untuk meningkatkan suhu periuk tanah tersebut / A small amount of heat is needed to raise the temperature of the clay pot"},
            {"id": "B", "teks": "Periuk tanah murah dan tidak berkarat / Clay pots are cheap and do not rust"},
            {"id": "C", "teks": "Muatan haba tentu periuk tanah adalah sangat rendah / The specific heat capacity of clay pot is very low"},
            {"id": "D", "teks": "Muatan haba tentu periuk tanah adalah tinggi / The specific heat capacity of clay pot is high"}
        ],
        "rajah5", "Percubaan Negeri Sembilan 2023", 2023
    ))

    # Q05
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q05", 5, "Sederhana", "Memahami",
        "Rajah 6 menunjukkan proses respirasi (menarik nafas dan menghembus nafas).\nDiagram 6 shows respiration process (inhalation and exhalation). (Negeri Sembilan: 2023)\n\nAntara hukum fizik berikut, yang manakah menerangkan fenomena di atas?\nWhich of the following physics laws explains the phenomenon above?",
        [
            {"id": "A", "teks": "Hukum Boyle / Boyle's law"},
            {"id": "B", "teks": "Hukum Gay-Lussac / Gay-Lussac's law"},
            {"id": "C", "teks": "Hukum Charles / Charles' law"},
            {"id": "D", "teks": "Hukum gas unggul / Ideal gas law"}
        ],
        "rajah6", "Percubaan Negeri Sembilan 2023", 2023
    ))

    # Q06
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q06", 6, "Sederhana", "Memahami",
        "Rajah 7 menunjukkan seorang budak yang demam dan diperiksa suhu badannya oleh seorang jururawat. Bacaan termometer diambil setelah bunyi 'bip' kedengaran pada termometer tersebut.\nDiagram 7 shows a boy with a fever and his temperature being checked by a nurse. The thermometer reading is taken after the 'beep' sound is heard on the thermometer. (Pahang: 2023)\n\nKonsep fizik manakah yang boleh menerangkan situasi ini?\nWhich physics concept can explain this situation?",
        [
            {"id": "A", "teks": "Muatan haba tentu / Specific heat capacity"},
            {"id": "B", "teks": "Haba pendam tentu / Specific latent heat"},
            {"id": "C", "teks": "Keseimbangan daya / Forces in equilibrium"},
            {"id": "D", "teks": "Keseimbangan terma / Thermal equilibrium"}
        ],
        "rajah7", "Percubaan Pahang 2023", 2023
    ))

    # Q07
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q07", 7, "Sederhana", "Memahami",
        "Rajah 8 menunjukkan udara terperangkap dalam sebuah botol yang terapung di permukaan tasik pada waktu tengah hari. Pada waktu malam, isipadu udara yang terperangkap berkurang.\nDiagram 8 shows air trapped in a bottle floating on the surface of a lake at noon. At night, the volume of trapped air decreases. (Pahang: 2023)\n\nHukum manakah yang menerangkan situasi ini?\nWhich law explains this situation?",
        [
            {"id": "A", "teks": "Hukum Snell / Snell's law"},
            {"id": "B", "teks": "Hukum Boyle / Boyle's law"},
            {"id": "C", "teks": "Hukum Charles / Charles' law"},
            {"id": "D", "teks": "Hukum Gay-Lussac / Gay-Lussac's law"}
        ],
        "rajah8", "Percubaan Pahang 2023", 2023
    ))

    # Q08
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q08", 8, "Sederhana", "Memahami",
        "Rajah 9 menunjukkan rumah kayu di kawasan iklim sejuk.\nDiagram 9 shows a wooden house in a cold climate region. (Pulau Pinang: 2023)\n\nMengapakah rumah kayu sesuai dibina di kawasan iklim sejuk?\nWhy is a wooden house suitable to be built in cold climates?",
        [
            {"id": "A", "teks": "Pengalir haba yang baik / Good heat conductor"},
            {"id": "B", "teks": "Kayu tidak mudah membeku / The wood does not easily freeze"},
            {"id": "C", "teks": "Muatan haba tentu kayu adalah tinggi / Specific heat capacity of wood is high"},
            {"id": "D", "teks": "Haba pendam tentu kayu adalah tinggi / Specific latent heat of wood is high"}
        ],
        "rajah9", "Percubaan Pulau Pinang 2023", 2023
    ))

    # Q09
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q09", 9, "Sederhana", "Memahami",
        "Rajah 10 menunjukkan Aziz sedang duduk berhampiran satu unggun api di dalam sebuah iglu untuk memanaskan badannya.\nDiagram 10 shows Aziz sitting near a campfire in an igloo to warm himself. (Pulau Pinang: 2023)\n\nApakah yang berlaku apabila keseimbangan terma tercapai?\nWhat happens when thermal equilibrium is achieved?",
        [
            {"id": "A", "teks": "Suhu badan Aziz meningkat / Aziz's body temperature increased"},
            {"id": "B", "teks": "Suhu udara di dalam iglu itu berkurang / The air temperature inside the igloo decreases"},
            {"id": "C", "teks": "Terdapat pengaliran haba bersih antara udara di dalam iglu dengan badan Aziz / There is net heat flow between the air inside the igloo and Aziz's body"},
            {"id": "D", "teks": "Tiada pengaliran haba bersih antara udara di dalam iglu dengan badan Aziz / There is no net heat flow between the air inside the igloo and Aziz's body"}
        ],
        "rajah10", "Percubaan Pulau Pinang 2023", 2023
    ))

    # Q10
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q10", 10, "Sederhana", "Memahami",
        "Rajah 11 menunjukkan graf suhu-masa bagi pepejal P dan Q. Kuantiti haba yang dibekalkan kepada P dan Q adalah sama.\nDiagram 11 shows the temperature-time graph for solid P and Q. The amount of heat supplied to P and Q is the same. (Pulau Pinang: 2023)\n\nAntara pernyataan berikut, yang manakah menerangkan tentang graf?\nWhich of the following statements explains the graph?",
        [
            {"id": "A", "teks": "Q menyerap lebih haba daripada P / Q absorbs more heat than P"},
            {"id": "B", "teks": "Takat lebur Q adalah lebih tinggi daripada P / The melting point of Q is higher than P"},
            {"id": "C", "teks": "Muatan haba tentu Q adalah lebih tinggi daripada P / The specific heat capacity of Q is higher than P"},
            {"id": "D", "teks": "Haba pendam tentu pelakuran Q adalah lebih rendah daripada P / The specific latent heat of fusion of Q is lower than P"}
        ],
        "rajah11", "Percubaan Pulau Pinang 2023", 2023
    ))

    # Q11
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q11", 11, "Sederhana", "Memahami",
        "Antara aplikasi berikut, yang manakah mematuhi hukum Charles?\nAmong the following applications, which one obeys Charles' law? (Pulau Pinang: 2023)",
        [
            {"id": "A", "teks": "Roti mengembung apabila dibakar / The bread puffs up when it is baked"},
            {"id": "B", "teks": "Tekanan tayar kenderaan sesuai diukur ketika cuaca sejuk / Vehicle tire pressure should be measured when the weather is cold"},
            {"id": "C", "teks": "Suhu yang tinggi boleh menyebabkan botol deodoran meletup / High temperature can cause a deodorant spray can to explode"},
            {"id": "D", "teks": "Gelembung udara mengembang apabila naik ke permukaan air / Air bubbles expand when rising to the water surface"}
        ],
        "", "Percubaan Pulau Pinang 2023", 2023
    ))

    # Q12
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q12", 12, "Sederhana", "Memahami",
        "Rajah 12 menunjukkan dua blok logam P dan Q.\nDiagram 12 shows two metal blocks P and Q. (Perak: 2023)\n\nAntara pernyataan berikut, manakah yang benar mengenai situasi tersebut?\nWhich of the following statements is true about the situation?",
        [
            {"id": "A", "teks": "P dan Q adalah dalam keseimbangan terma / P and Q are in thermal equilibrium"},
            {"id": "B", "teks": "Kadar pemindahan haba dari P ke Q adalah lebih tinggi daripada Q ke P / The rate of heat transfer from P to Q is higher than from Q to P"},
            {"id": "C", "teks": "Kadar pemindahan haba dari Q ke P adalah lebih tinggi daripada P ke Q / The rate of heat transfer from Q to P is higher than from P to Q"},
            {"id": "D", "teks": "Tiada haba yang dipindahkan antara P dan Q / No heat is transferred between P and Q"}
        ],
        "rajah12", "Percubaan Perak 2023", 2023
    ))

    # Q13
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q13", 13, "Sederhana", "Memahami",
        "Rajah 13 menunjukkan dua blok kuprum, P dan Q masing-masing mempunyai suhu 80 °C dan 40 °C. Kedua-dua blok itu berada dalam sentuhan terma.\nDiagram 13 shows two copper blocks, P and Q at a temperature of 80 °C and 40 °C respectively. The two blocks are in thermal contact. (Perlis: 2023)\n\nAntara pernyataan berikut, manakah yang betul?\nWhich of the following statements is correct?",
        [
            {"id": "A", "teks": "P dan Q mempunyai kuantiti haba yang sama / P and Q have the same quantity of heat"},
            {"id": "B", "teks": "Pemindahan haba bersih antara P dengan Q ialah sifar / Net heat transfer between P and Q is zero"},
            {"id": "C", "teks": "Suhu Q lebih tinggi daripada suhu P / Temperature of Q is higher than temperature of P"},
            {"id": "D", "teks": "Kadar pemindahan haba dari P ke Q lebih tinggi daripada kadar pemindahan haba dari Q ke P / Rate of heat transfer from P to Q is higher than rate of heat transfer from Q to P"}
        ],
        "rajah13", "Percubaan Perlis 2023", 2023
    ))

    # Q14
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q14", 14, "Sederhana", "Memahami",
        "Mengapakah air sesuai dijadikan sebagai agen penyejuk?\nWhy water is suitable to be used as cooling agent? (Perlis: 2023)",
        [
            {"id": "A", "teks": "Ketumpatan tinggi / High density"},
            {"id": "B", "teks": "Haba pendam yang tinggi / High latent heat"},
            {"id": "C", "teks": "Muatan haba tentu yang tinggi / High specific heat capacity"},
            {"id": "D", "teks": "Daya lekatan antara molekul yang tinggi / High adhesive force between molecules"}
        ],
        "", "Percubaan Perlis 2023", 2023
    ))

    # Q15
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q15", 15, "Sederhana", "Memahami",
        "Rajah 14 menunjukkan semangkuk sup yang panas dibiarkan pada suhu bilik.\nDiagram 14 shows a bowl of hot soup being left at room temperature. (SBP: 2023)\n\nKeseimbangan terma dicapai apabila\nThermal equilibrium is reached when",
        [
            {"id": "A", "teks": "suhu sup berkurang / soup temperature decreases"},
            {"id": "B", "teks": "suhu udara persekitaran meningkat / the surrounding air temperature increases"},
            {"id": "C", "teks": "tiada pengaliran haba antara udara persekitaran dan sup / no heat transferred between the surrounding air and soup"},
            {"id": "D", "teks": "tiada pengaliran haba bersih antara udara persekitaran dan sup / there is no net heat transferred between the surrounding air and soup"}
        ],
        "rajah14", "Percubaan SBP 2023", 2023
    ))

    # Q16
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q16", 16, "Sederhana", "Memahami",
        "Rajah 15 menunjukkan sebiji belon yang masing-masing berisi udara dan air dibawa ke arah lilin yang menyala. Belon yang berisi udara meletup, manakala belon yang berisi air tidak meletup apabila ia menyentuh nyalaan lilin.\nDiagram 15 shows a balloon filled with air and water respectively being brought towards a lit candle. The balloon filled with air bursts, while the balloon filled with water does not burst when touching the candle flame. (SBP: 2023)\n\nPernyataan manakah yang betul?\nWhich statement is correct?",
        [
            {"id": "A", "teks": "Air mempunyai muatan haba tentu yang tinggi / Water has a high specific heat capacity"},
            {"id": "B", "teks": "Air mempunyai muatan haba tentu yang rendah / Water has a low specific heat capacity"},
            {"id": "C", "teks": "Udara mempunyai muatan haba tentu yang tinggi / Air has a high specific heat capacity"},
            {"id": "D", "teks": "Air menyerap haba lebih perlahan berbanding getah belon / Water absorbs heat slower than balloon rubber"}
        ],
        "rajah15", "Percubaan SBP 2023", 2023
    ))

    # Q17
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q17", 17, "Sederhana", "Memahami",
        "Rajah 16 menunjukkan zarah-zarah udara dalam sebuah bekas tertutup sebelum dan selepas dipanaskan selama 5 minit.\nDiagram 16 shows air particles in a closed container before and after being heated for 5 minutes. (SBP: 2023)\n\nPasangan manakah yang betul selepas bekas tersebut dipanaskan?\nWhich pair is correct after the closed container is being heated?",
        [
            {"id": "A", "teks": "Tenaga kinetik udara: Bertambah | Tekanan udara: Bertambah / Kinetic energy of air: Increases | Air pressure: Increases"},
            {"id": "B", "teks": "Tenaga kinetik udara: Berkurang | Tekanan udara: Berkurang / Kinetic energy of air: Decreases | Air pressure: Decreases"},
            {"id": "C", "teks": "Tenaga kinetik udara: Bertambah | Tekanan udara: Berkurang / Kinetic energy of air: Increases | Air pressure: Decreases"},
            {"id": "D", "teks": "Tenaga kinetik udara: Berkurang | Tekanan udara: Bertambah / Kinetic energy of air: Decreases | Air pressure: Increases"}
        ],
        "rajah16", "Percubaan SBP 2023", 2023
    ))

    # Q18
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q18", 18, "Sederhana", "Memahami",
        "Rajah 17 menunjukkan lengkung penyejukan apabila objek berubah keadaannya daripada gas kepada cecair.\nDiagram 17 shows the cooling curve when an object changes its state from gas to liquid. (Terengganu: 2023)\n\nApakah yang berlaku semasa proses pemeluwapan?\nWhat happens during condensation process?",
        [
            {"id": "A", "teks": "Haba diserap untuk memecahkan ikatan molekul / Heat is absorbed to break molecular bonds"},
            {"id": "B", "teks": "Haba pendam dibebaskan untuk membentuk ikatan molekul / Latent heat is released to form molecular bonds"},
            {"id": "C", "teks": "Tenaga kinetik molekul meningkat / Kinetic energy of molecules increases"},
            {"id": "D", "teks": "Suhu bahan terus berkurang semasa perubahan fasa / Temperature of substance continues to decrease during phase change"}
        ],
        "rajah17", "Percubaan Terengganu 2023", 2023
    ))

    # Q19
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q19", 19, "Sederhana", "Memahami",
        "Rajah 18 (a) menunjukkan bola ping-pong yang kemek. Rajah 18 (b) menunjukkan keadaan bola selepas diletakkan di dalam air panas.\nDiagram 18 (a) shows a dented ping-pong ball. Diagram 18 (b) shows the state of the ball after being placed in hot water. (SMKA: 2023)\n\nHukum fizik manakah yang menerangkan situasi ini?\nWhich physics law explains this situation?",
        [
            {"id": "A", "teks": "Hukum Boyle / Boyle's law"},
            {"id": "B", "teks": "Hukum Charles / Charles' law"},
            {"id": "C", "teks": "Hukum Gay-Lussac / Gay-Lussac's law"},
            {"id": "D", "teks": "Hukum Tekanan / Pressure law"}
        ],
        "rajah18", "Percubaan SMKA 2023", 2023
    ))

    # Q20
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q20", 20, "Sederhana", "Memahami",
        "Rajah 19 menunjukkan termometer digunakan untuk mengukur suhu air. Bacaan suhu diambil apabila termometer mencapai keseimbangan terma.\nDiagram 19 shows a thermometer is used to measure the temperature of water. The reading of the temperature is taken when the thermometer reaches thermal equilibrium. (SMKA: 2023)\n\nPernyataan manakah yang betul mengenai situasi ini?\nWhich statement is correct regarding this situation?",
        [
            {"id": "A", "teks": "Suhu air adalah lebih tinggi daripada suhu termometer / Water temperature is higher than thermometer temperature"},
            {"id": "B", "teks": "Kadar pemindahan haba bersih antara air dan termometer adalah sifar / Net rate of heat transfer between water and thermometer is zero"},
            {"id": "C", "teks": "Haba mengalir daripada termometer ke air sahaja / Heat flows from thermometer to water only"},
            {"id": "D", "teks": "Muatan haba tentu air sama dengan merkuri / Specific heat capacity of water is equal to mercury"}
        ],
        "rajah19", "Percubaan SMKA 2023", 2023
    ))

    # Q21
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q21", 21, "Sederhana", "Memahami",
        "Rajah 20 (a) menunjukkan sebiji belon berisi gas helium di atas tanah. Rajah 20 (b) menunjukkan belon yang sama mengembang apabila ia naik ke atas. Kedua-dua situasi berlaku pada suhu yang sama.\nDiagram 20 (a) shows a balloon filled with helium gas on the ground. Diagram 20 (b) shows the same balloon expanding as it rises up. Both situations occur at the same temperature. (Kedah: 2022)\n\nHukum fizik manakah yang terlibat dalam situasi di atas?\nWhich physics law is involved in the situation above?",
        [
            {"id": "A", "teks": "Hukum Boyle / Boyle's law"},
            {"id": "B", "teks": "Hukum Charles / Charles' law"},
            {"id": "C", "teks": "Hukum Gay-Lussac / Gay-Lussac's law"},
            {"id": "D", "teks": "Hukum Graviti Newton / Newton's law of gravitation"}
        ],
        "rajah20", "Percubaan Kedah 2022", 2022
    ))

    # Q22
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q22", 22, "Sederhana", "Memahami",
        "Rajah 21 menunjukkan susunan radas untuk mentahkikkan Hukum Charles. Apakah kegunaan turus asid sulfurik dalam tiub kapilari?\nDiagram 21 shows the arrangement of the apparatus to verify Charles' Law. What is the function of sulfuric acid column in the capillary tube? (Kedah: 2022)",
        [
            {"id": "A", "teks": "Sebagai penunjuk indeks dan memerangkap udara / As index pointer and traps air"},
            {"id": "B", "teks": "Untuk mengukur tekanan gas / To measure gas pressure"},
            {"id": "C", "teks": "Untuk mengekalkan suhu malar / To keep temperature constant"},
            {"id": "D", "teks": "Untuk mengelakkan merkuri meruap / To prevent mercury from evaporating"}
        ],
        "rajah21", "Percubaan Kedah 2022", 2022
    ))

    # Q23
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q23", 23, "Sederhana", "Memahami",
        "Sifat gas yang bertindak sebagai agen penyejuk dalam sistem penyejukan sebuah peti sejuk ialah\nThe characteristic of the gas that acts as cooling agent in the cooling system of a refrigerator is (Kelantan: 2022)",
        [
            {"id": "A", "teks": "mudah meruap dan mempunyai haba pendam tentu pengewapan tinggi / easily volatilized and has high specific latent heat of vaporization"},
            {"id": "B", "teks": "mudah melebur / easily melted"},
            {"id": "C", "teks": "takat didih tinggi / high boiling point"},
            {"id": "D", "teks": "ketumpatan sangat rendah / very low density"}
        ],
        "", "Percubaan Kelantan 2022", 2022
    ))

    # Q24
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q24", 24, "Sederhana", "Memahami",
        "Rajah 22 menunjukkan lengkung penyejukan bagi suatu bahan berubah dari gas kepada pepejal.\nDiagram 22 shows the cooling curve of a substance changing from gas to solid. (Kelantan: 2022)\n\nPada peringkat manakah haba pendam tentu pengewapan dibebaskan?\nAt which stage is the specific latent heat of vaporization released?",
        [
            {"id": "A", "teks": "Peringkat PQ (gas menyejuk) / Stage PQ (gas cooling)"},
            {"id": "B", "teks": "Peringkat QR (kondensasi gas ke cecair) / Stage QR (gas condensing to liquid)"},
            {"id": "C", "teks": "Peringkat RS (cecair menyejuk) / Stage RS (liquid cooling)"},
            {"id": "D", "teks": "Peringkat ST (pembekuan cecair ke pepejal) / Stage ST (liquid freezing to solid)"}
        ],
        "rajah22", "Percubaan Kelantan 2022", 2022
    ))

    # Q25
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q25", 25, "Sederhana", "Memahami",
        "Rajah 23 menunjukkan pembentukan bayu laut.\nDiagram 23 shows the formation of sea breeze. (Melaka: 2022)\n\nPernyataan manakah yang betul?\nWhich statement is correct?",
        [
            {"id": "A", "teks": "Muatan haba tentu air laut lebih tinggi daripada muatan haba tentu darat / The specific heat capacity of sea water is higher than land"},
            {"id": "B", "teks": "Muatan haba tentu darat lebih tinggi daripada muatan haba tentu air laut / The specific heat capacity of land is higher than sea water"},
            {"id": "C", "teks": "Darat membebaskan haba lebih perlahan daripada laut / Land releases heat slower than sea"},
            {"id": "D", "teks": "Ketumpatan udara di darat lebih tinggi pada waktu siang / Density of air on land is higher during daytime"}
        ],
        "rajah23", "Percubaan Melaka 2022", 2022
    ))

    # Q26
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q26", 26, "Sederhana", "Memahami",
        "Rajah 24 menunjukkan periuk yang mempunyai tapak aluminium.\nDiagram 24 shows a pot with aluminium base. (MRSM: 2022)\n\nApakah yang terjadi kepada masa memasak makanan jika tapak periuk tersebut digantikan dengan kuprum?\n[Muatan haba tentu aluminium = 900 J kg^-1 °C^-1, kuprum = 390 J kg^-1 °C^-1]\nWhat happens to cooking time if the pot base is replaced with copper?",
        [
            {"id": "A", "teks": "Masa memasak berkurang kerana kuprum lebih cepat panas / Cooking time decreases because copper heats up faster"},
            {"id": "B", "teks": "Masa memasak bertambah kerana kuprum menyerap haba perlahan / Cooking time increases because copper absorbs heat slower"},
            {"id": "C", "teks": "Masa memasak tidak berubah / Cooking time remains unchanged"},
            {"id": "D", "teks": "Kuprum tidak sesuai sebagai tapak periuk / Copper is not suitable as pot base"}
        ],
        "rajah24", "Percubaan MRSM 2022", 2022
    ))

    # Q27
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q27", 27, "Sederhana", "Memahami",
        "Rajah 25 menunjukkan graf pemanasan suhu, θ melawan masa, t bagi bahan X.\nDiagram 25 shows a heating graph of temperature, θ against time, t for substance X. (MRSM: 2022)\n\nPernyataan manakah yang benar?\nWhich statement is correct?",
        [
            {"id": "A", "teks": "Haba yang dibekalkan semasa fasa mendatar digunakan untuk mengatasi daya tarikan antara molekul / Heat supplied during flat phase is used to overcome intermolecular forces"},
            {"id": "B", "teks": "Tenaga kinetik molekul meningkat semasa peleburan / Kinetic energy of molecules increases during melting"},
            {"id": "C", "teks": "Suhu meningkat semasa perubahan keadaan jirim / Temperature increases during phase change"},
            {"id": "D", "teks": "Bahan X membebaskan haba ke persekitaran / Substance X releases heat to surroundings"}
        ],
        "rajah25", "Percubaan MRSM 2022", 2022
    ))

    # Q28
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q28", 28, "Sederhana", "Memahami",
        "Rajah 26 (a) menunjukkan sebiji belon diletakkan di atas pinggan. Rajah 26 (b) menunjukkan belon tersebut selepas cecair nitrogen dituang ke atasnya.\nDiagram 26 (a) shows a balloon put on a plate. Diagram 26 (b) shows the balloon after liquid nitrogen was poured over it. (MRSM: 2022)\n\nHukum gas manakah yang menerangkan situasi ini?\nWhich gas law explains this situation?",
        [
            {"id": "A", "teks": "Hukum Charles / Charles' law"},
            {"id": "B", "teks": "Hukum Boyle / Boyle's law"},
            {"id": "C", "teks": "Hukum Tekanan / Pressure law"},
            {"id": "D", "teks": "Hukum Gay-Lussac / Gay-Lussac's law"}
        ],
        "rajah26", "Percubaan MRSM 2022", 2022
    ))

    # Q29
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q29", 29, "Sederhana", "Memahami",
        "Rajah 27 menunjukkan sebuah termometer merkuri.\nDiagram 27 shows a mercury thermometer. (Negeri Sembilan: 2022)\n\nAntara berikut, yang manakah akan menambahkan kepekaan termometer itu?\nWhich of the following will increase the sensitivity of the thermometer?",
        [
            {"id": "A", "teks": "Menggunakan tiub kapilari yang lebih sempit / Using a narrower capillary tube"},
            {"id": "B", "teks": "Menggunakan be bebuli kaca yang lebih tebal / Using a thicker glass bulb"},
            {"id": "C", "teks": "Mengurangkan kuantiti merkuri di dalam bebuli / Decreasing the quantity of mercury in the bulb"},
            {"id": "D", "teks": "Menggunakan tiub kapilari berdinding tebal / Using a thick-walled capillary tube"}
        ],
        "rajah27", "Percubaan Negeri Sembilan 2022", 2022
    ))

    # Q30
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q30", 30, "Sederhana", "Memahami",
        "Haba pendam diserap apabila\nLatent heat is absorbed when (Negeri Sembilan: 2022)",
        [
            {"id": "A", "teks": "air membeku / water freezing"},
            {"id": "B", "teks": "naftalena dipanaskan / naphthalene is heated"},
            {"id": "C", "teks": "wap air terkondensasi / water vapour condensed"},
            {"id": "D", "teks": "cecair alkohol menyejat / liquid alcohol evaporates"}
        ],
        "", "Percubaan Negeri Sembilan 2022", 2022
    ))

    # Q31
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q31", 31, "Sederhana", "Memahami",
        "Apakah konsep yang digunakan dalam pengukuran suhu kopi menggunakan termometer?\nWhat is the concept used in measuring the temperature of coffee using a thermometer? (Pahang: 2022)",
        [
            {"id": "A", "teks": "Perolakan terma / Thermal convection"},
            {"id": "B", "teks": "Haba pendam tentu / Specific latent heat"},
            {"id": "C", "teks": "Keseimbangan terma / Thermal equilibrium"},
            {"id": "D", "teks": "Muatan haba tentu / Specific heat capacity"}
        ],
        "", "Percubaan Pahang 2022", 2022
    ))

    # Q32
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q32", 32, "Sederhana", "Memahami",
        "Rajah 28 menunjukkan lengkung pemanasan suatu bahan pepejal.\nDiagram 28 shows the heating curve of a solid material. (Pahang: 2022)\n\nPada peringkat Y, haba yang diserap oleh objek ialah\nAt level Y, the heat absorbed by the object is",
        [
            {"id": "A", "teks": "Sifar / Zero"},
            {"id": "B", "teks": "Muatan haba tentu pepejal / Specific heat capacity of solid"},
            {"id": "C", "teks": "Haba pendam tentu pelakuran / Specific latent heat of fusion"},
            {"id": "D", "teks": "Haba pendam tentu pengewapan / Specific latent heat of vaporization"}
        ],
        "rajah28", "Percubaan Pahang 2022", 2022
    ))

    # Q33
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q33", 33, "Sederhana", "Memahami",
        "Apabila berlaku pembekuan air, perkara berikut akan berlaku\nWhen there is freezing of water, the following situation will occur (Perlis: 2022)",
        [
            {"id": "A", "teks": "Suhu air naik / Temperature of water rises"},
            {"id": "B", "teks": "Suhu air turun / Temperature of water decreases"},
            {"id": "C", "teks": "Suhu air tidak berubah / Temperature of water is constant"},
            {"id": "D", "teks": "Haba diserap oleh air / Heat is absorbed by water"}
        ],
        "", "Percubaan Perlis 2022", 2022
    ))

    # Q34
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q34", 34, "Sederhana", "Memahami",
        "Sejenis bahan dipanaskan pada kadar yang tetap. Bahan tersebut berubah daripada pepejal menjadi cecair, dan kemudian gas. Rajah 29 menunjukkan graf bagaimana suhunya berubah terhadap masa.\nA substance is heated at a steady rate. It changes from solid to a liquid, and then to a gas. Diagram 29 shows the graph of how its temperature varies with time. (Perlis: 2022)\n\nAntara bahagian graf berikut, yang manakah mewakili peleburan?\nWhich part of the graph represents melting?",
        [
            {"id": "A", "teks": "Bahagian PQ / Part PQ"},
            {"id": "B", "teks": "Bahagian QR / Part QR"},
            {"id": "C", "teks": "Bahagian RS / Part RS"},
            {"id": "D", "teks": "Bahagian ST / Part ST"}
        ],
        "rajah29", "Percubaan Perlis 2022", 2022
    ))

    # Q35
    questions.append(make_b4_q(
        "MODUL_T4_B4_K2_Q35", 35, "Sederhana", "Memahami",
        "Antara hukum yang berikut, manakah menyatakan hubungan antara tekanan dan suhu pada isi padu gas malar?\nWhich of the following laws states the relationship between pressure and temperature at constant volume of gas? (Putrajaya: 2022)",
        [
            {"id": "A", "teks": "Hukum Boyle / Boyle's law"},
            {"id": "B", "teks": "Hukum Charles / Charles' law"},
            {"id": "C", "teks": "Hukum Gay-Lussac / Gay-Lussac's law"},
            {"id": "D", "teks": "Hukum Tekanan Ohm / Ohm's law"}
        ],
        "", "Percubaan Putrajaya 2022", 2022
    ))

    return questions
