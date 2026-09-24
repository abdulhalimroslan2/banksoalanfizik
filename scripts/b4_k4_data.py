import json
from scripts.build_dataset_helper_b4 import make_b4_q

def get_k4_questions():
    questions = []

    # Q01
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q01", 1, "Tinggi", "Menganalisis",
        "Rajah 61 (a) menunjukkan sebuah picagari dengan udara terperangkap. Rajah 61 (b) menunjukkan keadaan picagari itu apabila ombohnya ditekan ke bawah secara perlahan-lahan.\nDiagram 61 (a) shows a syringe with air trapped. Diagram 61 (b) shows the syringe after the piston was pushed down slowly. (Perak: 2023)\n\nAntara berikut, yang manakah betul mengenai situasi zarah-zarah udara dalam Rajah 61 (b) berbanding dengan Rajah 61 (a)?\nWhich comparison is correct between the situation of air particles in Diagram 61 (b) compared to Diagram 61 (a)?",
        [
            {"id": "A", "teks": "Kadar perlanggaran zarah tidak berubah, halaju zarah bertambah / Rate of collision no change, velocity increases"},
            {"id": "B", "teks": "Kadar perlanggaran zarah berkurang, halaju zarah bertambah / Rate of collision decreases, velocity increases"},
            {"id": "C", "teks": "Kadar perlanggaran zarah bertambah, halaju zarah berkurang / Rate of collision increases, velocity decreases"},
            {"id": "D", "teks": "Kadar perlanggaran zarah dengan dinding picagari bertambah, halaju zarah tidak berubah / Rate of collision of particles with syringe wall increases, velocity of particles unchanged"}
        ],
        "rajah61", "Percubaan Perak 2023", 2023
    ))

    # Q02
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q02", 2, "Tinggi", "Menganalisis",
        "Rajah 62 menunjukkan pergerakan udara semasa bayu darat pada waktu malam.\nDiagram 62 shows the movement of air during a land breeze at night. (Melaka: 2023)\n\nAntara pernyataan berikut yang manakah benar?\nWhich of the following statements is true?",
        [
            {"id": "A", "teks": "Tekanan di darat lebih rendah berbanding tekanan di laut / The pressure of the land is lower than the pressure of sea water"},
            {"id": "B", "teks": "Ketumpatan udara di atas permukaan darat lebih rendah daripada ketumpatan udara di atas permukaan air laut / The density of air above land is lower than density of air above sea water"},
            {"id": "C", "teks": "Suhu darat menjadi lebih tinggi daripada suhu air laut / The temperature of land is higher than the temperature of sea water"},
            {"id": "D", "teks": "Muatan haba tentu darat lebih rendah daripada muatan haba tentu air laut, menyebabkan darat menyejuk lebih cepat / The specific heat capacity of the land is lower than sea water, causing land to cool down faster"}
        ],
        "rajah62", "Percubaan Melaka 2023", 2023
    ))

    # Q03
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q03", 3, "Tinggi", "Menganalisis",
        "Rajah 63 menunjukkan sebungkus ais diletakkan di atas dahi seorang kanak-kanak yang mengalami demam panas.\nDiagram 63 shows an ice pack placed on the forehead of a child with a high fever. (Negeri Sembilan: 2023)\n\nPada permulaannya, manakah antara yang berikut betul tentang sentuhan terma kepala kanak-kanak dengan bungkusan ais tersebut?\nInitially, which of the following is correct about the thermal contact of the child's head with the ice pack?",
        [
            {"id": "A", "teks": "Kadar pengaliran haba dari ais ke kepala kanak-kanak adalah lebih tinggi dari kadar pengaliran haba dari kepala ke ais / Rate of heat transfer from ice to child's head is higher than head to ice"},
            {"id": "B", "teks": "Kadar pengaliran haba dari ais ke kepala kanak-kanak adalah sama dengan kadar pengaliran haba dari kepala ke ais / Rate of heat transfer from ice to child's head is equal to head to ice"},
            {"id": "C", "teks": "Kadar pengaliran haba dari ais ke kepala kanak-kanak adalah lebih rendah dari kadar pengaliran haba dari kepala kanak-kanak ke ais / The rate of heat transfer from the ice to the child's head is lower than the rate of heat transfer from the child's head to the ice"},
            {"id": "D", "teks": "Pemindahan haba bersih antara ais dan kepala kanak-kanak adalah sifar / Net heat transfer between the ice and child's head is zero"}
        ],
        "rajah63", "Percubaan Negeri Sembilan 2023", 2023
    ))

    # Q04
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q04", 4, "Tinggi", "Menganalisis",
        "Rajah 64 menunjukkan sebuah radiator kereta. Air digunakan sebagai agen penyejuk dalam radiator.\nDiagram 64 shows a radiator of a car. Water is used as a cooling agent in the radiator. (SBP: 2022)\n\nKombinasi manakah yang betul untuk menerangkan mengapa air sesuai digunakan sebagai agen penyejuk dalam radiator kereta?\nWhich combination is correct to explain why water is suitable to be used as a cooling agent?",
        [
            {"id": "A", "teks": "Muatan haba tentu tinggi: Cepat serap haba / High specific heat capacity: Absorbs heat quickly"},
            {"id": "B", "teks": "Muatan haba tentu rendah: Lambat serap haba / Low specific heat capacity: Slow heat absorption"},
            {"id": "C", "teks": "Muatan haba tentu air adalah tinggi: Menyerap lebih banyak haba dengan kenaikan suhu yang rendah / High specific heat capacity: Absorbs more heat with a low temperature rise"},
            {"id": "D", "teks": "Muatan haba tentu air adalah rendah: Menyerap lebih haba dengan kenaikan suhu yang tinggi / Low specific heat capacity: Absorbs more heat with a high temperature rise"}
        ],
        "rajah64", "Percubaan SBP 2022", 2022
    ))

    # Q05
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q05", 5, "Tinggi", "Menganalisis",
        "Rajah 65 menunjukkan keadaan belon sebelum dan semasa kelalang berisi air dipanaskan.\nDiagram 65 shows the state of the balloon before and while the flask filled with water is heated. (SBP: 2022)\n\nAntara berikut yang manakah menerangkan situasi ini?\nWhich of the following explains this situation?",
        [
            {"id": "A", "teks": "Isipadu bertambah, suhu malar, tekanan berkurang / Volume increases, temperature constant, pressure decreases"},
            {"id": "B", "teks": "Isipadu berkurang, suhu bertambah, tekanan malar / Volume decreases, temperature increases, pressure constant"},
            {"id": "C", "teks": "Isipadu udara bertambah, suhu udara bertambah, tekanan udara adalah malar (Hukum Charles) / Volume of air increases, temperature of air increases, pressure of air is constant (Charles' Law)"},
            {"id": "D", "teks": "Isipadu malar, suhu bertambah, tekanan berkurang / Volume constant, temperature increases, pressure decreases"}
        ],
        "rajah65", "Percubaan SBP 2022", 2022
    ))

    # Q06
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q06", 6, "Tinggi", "Menganalisis",
        "Rajah 66 (a) menunjukkan dua cecair M dan N yang sama jisim dipanaskan oleh dapur yang sama. Muatan haba tentu cecair M = 4800 J kg^-1 °C^-1 manakala cecair N = 4000 J kg^-1 °C^-1. Rajah 66 (b) menunjukkan cecair selepas dipanaskan selama 5 minit.\nDiagram 66 (a) shows two liquids M and N of equal mass heated by an identical stove. Diagram 66 (b) shows the liquids after heated for 5 minutes. (Terengganu: 2022)\n\nAntara pernyataan berikut, yang manakah betul berdasarkan situasi di atas?\nWhich of the following statements is correct based on situations above?",
        [
            {"id": "A", "teks": "Semakin tinggi suhu bahan, semakin tinggi muatan haba tentu bahan / The higher the temperature of substance, the higher the specific heat capacity"},
            {"id": "B", "teks": "Semakin tinggi suhu bahan, semakin rendah muatan haba tentu bahan / The higher the temperature of substance, the lower the specific heat capacity"},
            {"id": "C", "teks": "Semakin rendah muatan haba tentu bahan, semakin berkurang perubahan suhu / The lower the specific heat capacity, the lower the change of temperature"},
            {"id": "D", "teks": "Semakin rendah muatan haba tentu bahan, semakin bertambah perubahan suhu / The lower the specific heat capacity of substance, the higher the change of temperature"}
        ],
        "rajah66", "Percubaan Terengganu 2022", 2022
    ))

    # Q07
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q07", 7, "Tinggi", "Menganalisis",
        "Rajah 67 menunjukkan bacaan tekanan molekul-molekul gas di dalam dua buah kelalang yang bersambungan melalui satu injap.\nDiagram 67 shows the pressure readings of gas molecules in two flasks connected through a valve. (Negeri Sembilan: 2021)\n\nManakah perbandingan bacaan tolok tekanan A dan B adalah benar apabila injap dibuka?\nWhich comparison is true for the readings of pressure gauges A and B when the valve is opened?",
        [
            {"id": "A", "teks": "Tolok Tekanan A bertambah, Tolok Tekanan B bertambah, Bacaan A > B"},
            {"id": "B", "teks": "Tolok Tekanan A bertambah, Tolok Tekanan B berkurang, Bacaan B > A"},
            {"id": "C", "teks": "Tolok Tekanan A berkurang, Tolok Tekanan B berkurang, Bacaan A = B"},
            {"id": "D", "teks": "Tolok Tekanan A berkurang, Tolok Tekanan B bertambah, Bacaan Tolok Tekanan A = B / Pressure Gauge A decreases, Pressure Gauge B increases, Pressure Gauge Reading A = B"}
        ],
        "rajah67", "Percubaan Negeri Sembilan 2021", 2021
    ))

    # Q08
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q08", 8, "Tinggi", "Menganalisis",
        "Kuantiti tenaga haba yang sama diberikan kepada dua objek X dan Y. Kenaikan suhu objek X kurang daripada kenaikan suhu objek Y. Apa yang menjelaskan perbezaan ini?\nThe same quantity of heat energy is given to two objects X and Y. The temperature rise of object X is less than the temperature rise of object Y. What accounts for this difference? (Pahang: 2021)",
        [
            {"id": "A", "teks": "Objek Y adalah konduktor haba yang lebih baik daripada objek X / Object Y is a better thermal conductor than object X"},
            {"id": "B", "teks": "Objek X adalah konduktor haba yang lebih baik daripada objek Y / Object X is a better thermal conductor than object Y"},
            {"id": "C", "teks": "Objek Y mempunyai muatan haba tentu yang lebih besar daripada objek X / Object Y has a larger specific heat capacity than object X"},
            {"id": "D", "teks": "Objek X mempunyai muatan haba tentu yang lebih besar daripada objek Y / Object X has a larger specific heat capacity than object Y"}
        ],
        "", "Percubaan Pahang 2021", 2021
    ))

    # Q09
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q09", 9, "Tinggi", "Menganalisis",
        "Rajah 68 menunjukkan satu picagari tertutup yang mengandungi udara terperangkap dipanaskan di dalam bikar berisi air. Selepas pemanasan, kedudukan omboh didapati bergerak ke atas.\nDiagram 68 shows a sealed syringe containing air trapped is heated in a beaker filled with water. After heating the position of the piston moves upward. (SBP: 2021)\n\nBerdasarkan pemerhatian dalam Rajah 68, didapati bahawa\nBased on the observation in Diagram 68, it is found that",
        [
            {"id": "A", "teks": "haba dibekalkan kepada air menyebabkan suhu dan jisim udara terperangkap meningkat / heat supplied causes temperature and mass of trapped air to increase"},
            {"id": "B", "teks": "tekanan udara terperangkap bertambah disebabkan pertambahan suhu udara terperangkap apabila dipanaskan / pressure increases due to increase in temperature"},
            {"id": "C", "teks": "apabila suhu bertambah, isipadu udara terperangkap bertambah, tetapi tekanan udara terperangkap adalah malar / as temperature increases, volume of trapped air increases, but pressure of trapped air is constant"},
            {"id": "D", "teks": "isipadu udara terperangkap bertambah dan tekanan bagi udara terperangkap berkurang apabila udara terperangkap dipanaskan / volume increases and pressure decreases"}
        ],
        "rajah68", "Percubaan SBP 2021", 2021
    ))

    # Q10
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q10", 10, "Tinggi", "Menganalisis",
        "Rajah 69 menunjukkan satu blok plumbum (c = 130 J kg^-1 °C^-1), satu blok besi (c = 460 J kg^-1 °C^-1) dan satu blok aluminium (c = 910 J kg^-1 °C^-1). Semua blok itu mempunyai jisim dan suhu awal yang sama dan dibiarkan menyejuk. Selepas 15 minit suhu ketiga-tiga logam itu direkodkan.\nDiagram 69 shows a lead block, an iron block and aluminium block of same mass and initial temperature left to cool. (Melaka: 2021)\n\nPerbandingan yang manakah betul tentang perubahan suhu bagi blok plumbum, θP, blok besi, θQ dan blok aluminium, θR?\nWhich comparison is correct about the change in temperature of lead block, θP, iron block, θQ, and aluminium block, θR?",
        [
            {"id": "A", "teks": "θP > θQ > θR (plumbum mempunyai muatan haba tentu paling rendah, mengalami perubahan suhu paling besar) / θP > θQ > θR"},
            {"id": "B", "teks": "θQ > θP > θR"},
            {"id": "C", "teks": "θR > θP > θQ"},
            {"id": "D", "teks": "θR > θQ > θP"}
        ],
        "rajah69", "Percubaan Melaka 2021", 2021
    ))

    # Q11
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q11", 11, "Tinggi", "Menganalisis",
        "Rajah 70 menunjukkan empat blok logam yang mempunyai jisim yang sama dengan muatan haba tentu yang berbeza [A: 150 J kg^-1 °C^-1, B: 450 J kg^-1 °C^-1, C: 500 J kg^-1 °C^-1, D: 1000 J kg^-1 °C^-1]. Sejumlah haba yang sama dibekalkan kepada setiap blok.\nDiagram 70 shows four metal blocks having the same mass with different specific heat capacities. The same amount of heat is supplied to each block. (Perak: 2023)\n\nAntara blok logam A, B, C dan D, manakah akan menunjukkan bacaan suhu yang paling tinggi?\nWhich metal block A, B, C and D, will show the highest temperature reading?",
        [
            {"id": "A", "teks": "Blok A (muatan haba tentu paling rendah, 150 J kg^-1 °C^-1) / Block A (lowest specific heat capacity)"},
            {"id": "B", "teks": "Blok B / Block B"},
            {"id": "C", "teks": "Blok C / Block C"},
            {"id": "D", "teks": "Blok D / Block D"}
        ],
        "rajah70", "Percubaan Perak 2023", 2023
    ))

    # Q12
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q12", 12, "Tinggi", "Menganalisis",
        "Jadual 2 menunjukkan haba pendam tentu pelakuran dan jumlah haba yang dibebaskan oleh 1 kg bahan R, S dan T semasa proses pembekuan.\nTable 2 shows the specific latent heat of fusion and the amount of heat released by 1 kg of substances R, S and T during solidification process. (SPM: 2021)\n[R: 339 kJ kg^-1 -> QR, S: 334 kJ kg^-1 -> QS, T: 257 kJ kg^-1 -> QT]\n\nPerbandingan manakah bagi haba yang dibebaskan semasa pembekuan adalah betul?\nWhich comparison of heat released during solidification is correct?",
        [
            {"id": "A", "teks": "QR > QS > QT"},
            {"id": "B", "teks": "QS > QT > QR"},
            {"id": "C", "teks": "QT > QS > QR"},
            {"id": "D", "teks": "QR = QS = QT"}
        ],
        "", "SPM 2021", 2021
    ))

    # Q13
    questions.append(make_b4_q(
        "MODUL_T4_B4_K4_Q13", 13, "Tinggi", "Menganalisis",
        "Rajah 71 menunjukkan dua buah rumah banglo yang dibuat daripada bahan yang sama.\nDiagram 71 shows two bungalows which are made from the same material. (SPM: 2022)\n\nAntara berikut, pernyataan yang manakah betul?\nWhich of the following statements is correct?",
        [
            {"id": "A", "teks": "Ketinggian rumah mempengaruhi suhu / The height of the house affects the temperature"},
            {"id": "B", "teks": "Suhu dipengaruhi oleh keamatan cahaya matahari / The temperature is affected by the intensity of sunlight"},
            {"id": "C", "teks": "Keamatan cahaya dipengaruhi oleh lebar rumah / The intensity of light is affected by the width of the house"},
            {"id": "D", "teks": "Lebar rumah mempengaruhi suhu kerana luas permukaan yang lebih besar menyerap lebih banyak haba / The width of the house affects the temperature because larger surface area absorbs more heat"}
        ],
        "rajah71", "SPM 2022", 2022
    ))

    return questions
