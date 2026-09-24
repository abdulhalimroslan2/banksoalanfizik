import json
from scripts.build_dataset_helper_b4 import make_b4_q

def get_k3_questions():
    questions = []

    # Q01
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q01", 1, "Tinggi", "Mengaplikasi Kuantitatif",
        "Sebuah sfera logam berjisim 100 g pada suhu 90 °C dimasukkan ke dalam sebuah bikar mengandungi 200 g air pada suhu 30 °C. Selepas mencapai keseimbangan terma, suhu air dan sfera logam menjadi 36 °C. Berapakah muatan haba tentu sfera logam itu?\n[Muatan haba tentu air = 4.2 x 10^3 J kg^-1 °C^-1]\nA metal sphere with mass 100 g at 90 °C is placed into a beaker containing 200 g of water at 30 °C. After reaching thermal equilibrium, the temperature of water and metal sphere becomes 36 °C. What is the specific heat capacity of the metal sphere? (Kelantan: 2023)",
        [
            {"id": "A", "teks": "840.00 J kg^-1 °C^-1"},
            {"id": "B", "teks": "933.33 J kg^-1 °C^-1"},
            {"id": "C", "teks": "2800.00 J kg^-1 °C^-1"},
            {"id": "D", "teks": "8400.00 J kg^-1 °C^-1"}
        ],
        "", "Percubaan Kelantan 2023", 2023
    ))

    # Q02
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q02", 2, "Tinggi", "Mengaplikasi Kuantitatif",
        "Suatu gas berjisim tetap mempunyai isipadu V pada suhu 40 °C dengan tekanan malar. Berapakah suhu gas tersebut sekiranya isipadu gas meningkat kepada 3 V?\nA gas of constant mass has a volume V at a temperature of 40 °C and a constant pressure. What is the temperature of the gas if the volume of the gas increases to 3 V? (Melaka: 2023)",
        [
            {"id": "A", "teks": "313 K"},
            {"id": "B", "teks": "626 K"},
            {"id": "C", "teks": "939 K"},
            {"id": "D", "teks": "979 K"}
        ],
        "", "Percubaan Melaka 2023", 2023
    ))

    # Q03
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q03", 3, "Tinggi", "Mengaplikasi Kuantitatif",
        "Rajah 50 menunjukkan sebuah tangki skuba.\nDiagram 50 shows a scuba tank. (Negeri Sembilan: 2023)\n\nTekanan awal di dalam tangki ialah 1.317 x 10^7 Pa. Kira tekanan akhir di dalam tangki selepas ia menyejuk dari 1 000 °C hingga 25 °C.\nThe initial pressure in the tank is 1.317 x 10^7 Pa. Calculate the final pressure in the tank after it cools from 1 000 °C to 25 °C.",
        [
            {"id": "A", "teks": "3.08 x 10^6 Pa"},
            {"id": "B", "teks": "3.29 x 10^5 Pa"},
            {"id": "C", "teks": "5.62 x 10^7 Pa"},
            {"id": "D", "teks": "5.27 x 10^8 Pa"}
        ],
        "rajah50", "Percubaan Negeri Sembilan 2023", 2023
    ))

    # Q04
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q04", 4, "Tinggi", "Mengaplikasi Kuantitatif",
        "Rajah 51 menunjukkan omboh kedap udara di dalam silinder yang mengandungi gas pada suhu malar.\nDiagram 51 shows an air tight piston in a cylinder containing gas at a constant temperature. (Perlis: 2023)\n\nApabila omboh berada di kedudukan W (panjang turus 20 cm), tekanan gas ialah P. Berapakah tekanan gas itu apabila omboh ditarik keluar ke kedudukan X (panjang turus 40 cm)?\nWhen the piston is at position W, the gas pressure is P. What is the gas pressure when the piston is pulled out to position X?",
        [
            {"id": "A", "teks": "1/4 P"},
            {"id": "B", "teks": "1/2 P"},
            {"id": "C", "teks": "2 P"},
            {"id": "D", "teks": "3 P"}
        ],
        "rajah51", "Percubaan Perlis 2023", 2023
    ))

    # Q05
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q05", 5, "Tinggi", "Mengaplikasi Kuantitatif",
        "Tekanan awal dan suhu udara dalam tayar lori masing-masing 790 kPa dan 35 °C. Selepas perjalanan, tekanan udara dalam tayar ialah 813 kPa. Hitung suhu udara dalam tayar dalam °C.\nThe initial pressure and air temperature in the truck tyre are 790 kPa and 35 °C respectively. After the journey, the air pressure in the tyre is 813 kPa. Calculate the temperature of air in the tyre in °C. (Terengganu: 2023)",
        [
            {"id": "A", "teks": "18.35 °C"},
            {"id": "B", "teks": "34.01 °C"},
            {"id": "C", "teks": "36.02 °C"},
            {"id": "D", "teks": "43.97 °C"}
        ],
        "", "Percubaan Terengganu 2023", 2023
    ))

    # Q06
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q06", 6, "Tinggi", "Mengaplikasi Kuantitatif",
        "Sebuah cerek elektrik yang mempunyai kadar kuasa 240 V, 2000 W digunakan untuk mendidihkan 500 g air. Rajah 52 menunjukkan graf suhu, T melawan masa, t bagi proses tersebut.\nAn electric kettle with power rating 240 V, 2000 W is used to boil 500 g of water. Diagram 52 shows the graph of temperature, T against time, t of the process. (MRSM: 2023)\n\nBerapakah masa yang diperlukan, X untuk mendidihkan air tersebut?\n[Muatan haba tentu air, c = 4200 J kg^-1 °C^-1]\nWhat is the time taken, X to boil the water?",
        [
            {"id": "A", "teks": "73.5 s"},
            {"id": "B", "teks": "105.0 s"},
            {"id": "C", "teks": "73 500.0 s"},
            {"id": "D", "teks": "105 000.0 s"}
        ],
        "rajah52", "Percubaan MRSM 2023", 2023
    ))

    # Q07
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q07", 7, "Tinggi", "Mengaplikasi Kuantitatif",
        "Suatu bahan api menghasilkan 4 kJ tenaga bagi setiap 0.002 kg pembakarannya. Jika bahan api ini digunakan untuk memanaskan suatu cecair berjisim 5 kg dari suhu 40 °C hingga 90 °C, berapakah jisim bahan api yang diperlukan?\n[Muatan haba tentu cecair = 5.0 x 10^3 J kg^-1 °C^-1]\nA fuel produced 4 kJ of energy for every 0.002 kg of its combustion. If the fuel is used to heat liquid of mass 5 kg with a temperature 40 °C to 90 °C, what is the mass of fuel required? (Kedah: 2022)",
        [
            {"id": "A", "teks": "0.375 kg"},
            {"id": "B", "teks": "0.450 kg"},
            {"id": "C", "teks": "0.624 kg"},
            {"id": "D", "teks": "0.865 kg"}
        ],
        "", "Percubaan Kedah 2022", 2022
    ))

    # Q08
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q08", 8, "Tinggi", "Mengaplikasi Kuantitatif",
        "Tekanan udara dalam tayar kereta ialah 210 kPa pada suhu 27 °C. Berapakah tekanan dalam tayar tersebut pada suhu 35 °C?\n[Anggapkan isipadu udara dalam tayar adalah tetap]\nThe air pressure in a car tyre is 210 kPa at a temperature of 27 °C. What is the air pressure in the tyre when the temperature rises to 35 °C? (Kelantan: 2022)",
        [
            {"id": "A", "teks": "215.6 kPa"},
            {"id": "B", "teks": "218.4 kPa"},
            {"id": "C", "teks": "224.2 kPa"},
            {"id": "D", "teks": "272.2 kPa"}
        ],
        "", "Percubaan Kelantan 2022", 2022
    ))

    # Q09
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q09", 9, "Tinggi", "Mengaplikasi Kuantitatif",
        "Tenaga haba sebanyak 21 600 J digunakan untuk meningkatkan suhu sebuah blok logam 0.8 kg daripada 30 °C kepada 60 °C. Berapakah muatan haba tentu blok logam itu?\nHeat energy of 21 600 J is used to raise the temperature of a 0.8 kg metal block from 30 °C to 60 °C. What is the specific heat capacity of the metal block? (Kelantan: 2022)",
        [
            {"id": "A", "teks": "450 J kg^-1 °C^-1"},
            {"id": "B", "teks": "576 J kg^-1 °C^-1"},
            {"id": "C", "teks": "900 J kg^-1 °C^-1"},
            {"id": "D", "teks": "1200 J kg^-1 °C^-1"}
        ],
        "", "Percubaan Kelantan 2022", 2022
    ))

    # Q10
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q10", 10, "Tinggi", "Mengaplikasi Kuantitatif",
        "Sebiji bola ping pong yang kemek mempunyai isipadu 30 cm^3 telah mengembang kepada 38 cm^3 setelah dimasukkan ke dalam air panas bersuhu 100 °C. Berapakah suhu awal udara dalam bola ping pong?\nA dented ping pong ball has volume 30 cm^3 is inflated to 38 cm^3 in hot water of temperature 100 °C. What is the initial temperature of the air inside the ping pong ball? (Melaka: 2022)",
        [
            {"id": "A", "teks": "21.47 °C"},
            {"id": "B", "teks": "25.00 °C"},
            {"id": "C", "teks": "34.21 °C"},
            {"id": "D", "teks": "38.95 °C"}
        ],
        "", "Percubaan Melaka 2022", 2022
    ))

    # Q11
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q11", 11, "Tinggi", "Mengaplikasi Kuantitatif",
        "Sebiji belon diisi dengan sejenis gas pada tekanan atmosfera. Belon itu kemudian ditenggelamkan di dalam air sehingga isipadunya menjadi 1/2 daripada isipadu asalnya. Berapakah kedalaman belon itu di bawah permukaan air?\n[Tekanan atmosfera = 10 m air]\nA balloon filled with a gas at atmospheric pressure. The balloon then is immersed in water until its volume becomes 1/2 of its initial volume. What is the depth of the balloon under the water surface? (Negeri Sembilan: 2022)",
        [
            {"id": "A", "teks": "5.0 m"},
            {"id": "B", "teks": "10.0 m"},
            {"id": "C", "teks": "12.5 m"},
            {"id": "D", "teks": "20.0 m"}
        ],
        "", "Percubaan Negeri Sembilan 2022", 2022
    ))

    # Q12
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q12", 12, "Tinggi", "Mengaplikasi Kuantitatif",
        "Suatu gas berjisim tetap pada tekanan malar mempunyai isipadu 3V pada suhu 45 °C. Sekiranya gas itu mengembang menjadi isipadu 6V, berapakah suhu gas itu sekarang?\nA fixed mass of gas at constant pressure has a volume of 3V at temperature of 45 °C. If the gas expands to a volume of 6V, what is the temperature of the gas now? (Pahang: 2022)",
        [
            {"id": "A", "teks": "-123.0 °C"},
            {"id": "B", "teks": "13.5 °C"},
            {"id": "C", "teks": "327.0 °C"},
            {"id": "D", "teks": "363.0 °C"}
        ],
        "", "Percubaan Pahang 2022", 2022
    ))

    # Q13
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q13", 13, "Tinggi", "Mengaplikasi Kuantitatif",
        "Rajah 53 menunjukkan ketulan ais dipanaskan menggunakan pemanas elektrik berkuasa 50 Watt selama 60 saat.\nDiagram 53 shows ice cubes being heated by an electrical heater with the power 50 Watt within 60 seconds. (SBP: 2022)\n\nHitung jisim ais yang telah melebur.\n[Haba pendam tentu pelakuran = 3.3 x 10^5 J kg^-1]\nCalculate the mass of the ice cubes that have melted.",
        [
            {"id": "A", "teks": "1.45 x 10^-3 kg"},
            {"id": "B", "teks": "9.09 x 10^-3 kg"},
            {"id": "C", "teks": "1.0 x 10^-2 kg"},
            {"id": "D", "teks": "9.09 x 10^-1 kg"}
        ],
        "rajah53", "Percubaan SBP 2022", 2022
    ))

    # Q14
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q14", 14, "Tinggi", "Mengaplikasi Kuantitatif",
        "Rajah 54 menunjukkan satu silinder logam yang berjisim 3 kg dan muatan haba tentu 2 450 J kg^-1 °C^-1 dipanaskan dengan pemanas yang berkuasa 0.5 kW.\nDiagram 54 shows a metal cylinder of mass 3 kg and specific heat capacity 2 450 J kg^-1 °C^-1 is heated with a heater of power 0.5 kW. (Selangor: Set 1: 2022)\n\nBerapakah kenaikan suhu silinder itu jika pemanas dihidupkan selama 1 minit?\nWhat is the rise in temperature of the cylinder if the heater is switched on for 1 minute?",
        [
            {"id": "A", "teks": "0.25 °C"},
            {"id": "B", "teks": "0.61 °C"},
            {"id": "C", "teks": "4.08 °C"},
            {"id": "D", "teks": "18.00 °C"}
        ],
        "rajah54", "Percubaan Selangor Set 1 2022", 2022
    ))

    # Q15
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q15", 15, "Tinggi", "Mengaplikasi Kuantitatif",
        "Rajah 55 menunjukkan satu silinder logam yang berjisim 2.5 kg dipanaskan dengan pemanas yang berkuasa 0.3 kW selama 3 minit.\nDiagram 55 shows a metal cylinder of mass 2.5 kg is heated with a heater of power 0.3 kW for 3 minutes. (Selangor: Set 2: 2022)\n\nApakah muatan haba tentu untuk silinder itu jika kenaikan suhu adalah sebanyak 34 °C?\nWhat is the specific heat capacity of the cylinder if the temperature rise is 34 °C?",
        [
            {"id": "A", "teks": "635.29 J kg^-1 °C^-1"},
            {"id": "B", "teks": "944.44 J kg^-1 °C^-1"},
            {"id": "C", "teks": "1270.58 J kg^-1 °C^-1"},
            {"id": "D", "teks": "8160.00 J kg^-1 °C^-1"}
        ],
        "rajah55", "Percubaan Selangor Set 2 2022", 2022
    ))

    # Q16
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q16", 16, "Tinggi", "Mengaplikasi Kuantitatif",
        "Sekeping logam dengan jisim 100 g dan suhu 100 °C dimasukkan ke dalam sebikar ais pada 0 °C. Didapati 10 g daripada ais tersebut melebur dan suhu logam turun ke 60 °C. Berapakah muatan haba tentu logam itu dalam unit J kg^-1 °C^-1?\n[Haba pendam peleburan ais = 3.34 x 10^5 J kg^-1]\nA piece of metal with a mass of 100 g and at a temperature of 100 °C is placed in a beaker of ice at 0 °C. 10 g of the ice has melted while temperature of the metal decreases to 60 °C. What is the specific heat capacity of the metal? (Kedah: 2021)",
        [
            {"id": "A", "teks": "835 J kg^-1 °C^-1"},
            {"id": "B", "teks": "910 J kg^-1 °C^-1"},
            {"id": "C", "teks": "299 J kg^-1 °C^-1"},
            {"id": "D", "teks": "334 J kg^-1 °C^-1"}
        ],
        "", "Percubaan Kedah 2021", 2021
    ))

    # Q17
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q17", 17, "Tinggi", "Mengaplikasi Kuantitatif",
        "Gas yang berada dalam bekas tertutup mempunyai tekanan 125 kPa pada suhu 30 °C. Tentukan suhu gas di dalam bekas itu jika tekanannya meningkat kepada 201 kPa.\nA gas in a sealed container has a pressure of 125 kPa at 30 °C. Determine the temperature of the gas in the container if the pressure is increased to 201 kPa. (Kelantan: 2021)",
        [
            {"id": "A", "teks": "48 °C"},
            {"id": "B", "teks": "214 °C"},
            {"id": "C", "teks": "487 °C"},
            {"id": "D", "teks": "838 °C"}
        ],
        "", "Percubaan Kelantan 2021", 2021
    ))

    # Q18
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q18", 18, "Tinggi", "Mengaplikasi Kuantitatif",
        "Rajah 56 menunjukkan empat blok P, Q, R dan S dengan muatan haba tentu yang berbeza tetapi mempunyai jisim dan suhu awal yang serupa, dipanaskan di atas dapur dengan jumlah tenaga haba yang sama.\nDiagram 56 shows four blocks, P, Q, R and S with different specific heat capacity but have the same mass and initial temperature, were heated on the stove by the same amount of heat energy. (Kelantan: 2021)\n[P = 900 J kg^-1 °C^-1, Q = 500 J kg^-1 °C^-1, R = 390 J kg^-1 °C^-1, S = 130 J kg^-1 °C^-1]\n\nBlok manakah yang akan mempunyai kenaikan suhu yang paling tinggi selepas dipanaskan selama 10 minit?\nWhich block will have the highest increase in temperature after being heated for 10 minutes?",
        [
            {"id": "A", "teks": "Blok P / Block P"},
            {"id": "B", "teks": "Blok Q / Block Q"},
            {"id": "C", "teks": "Blok R / Block R"},
            {"id": "D", "teks": "Blok S (muatan haba tentu paling rendah) / Block S (lowest specific heat capacity)"}
        ],
        "rajah56", "Percubaan Kelantan 2021", 2021
    ))

    # Q19
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q19", 19, "Tinggi", "Mengaplikasi Kuantitatif",
        "Rajah 57 (a) dan Rajah 57 (b) menunjukkan dua picagari yang serupa dengan muncungnya ditutup. Apabila isipadu udara terperangkap dalam picagari adalah 3 ml, tekanannya adalah 1 x 10^5 Pa. Kemudian omboh ditolak perlahan-lahan sehingga isipadunya 0.45 ml.\nDiagram 57 (a) and Diagram 57 (b) shows two identical syringes with their nozzles closed. When the volume of air trapped in the syringe is 3 ml, the pressure is 1 x 10^5 Pa. Then the piston is pushed slowly until its volume is 0.45 ml. (Sarawak: 2021)\n\nBerapakah tekanan udara yang terperangkap?\nWhat is the pressure of trapped air?",
        [
            {"id": "A", "teks": "8.0 x 10^5 Pa"},
            {"id": "B", "teks": "7.67 x 10^5 Pa"},
            {"id": "C", "teks": "5.67 x 10^5 Pa"},
            {"id": "D", "teks": "6.67 x 10^5 Pa"}
        ],
        "rajah57", "Percubaan Sarawak 2021", 2021
    ))

    # Q20
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q20", 20, "Tinggi", "Mengaplikasi Kuantitatif",
        "Rajah 58 menunjukkan bacaan tolok tekanan di dalam sebuah kelalang yang berisi gas pada bilik yang bersuhu 20 °C ialah 80 kPa. Apabila dipanaskan sehingga peningkatan suhu sebanyak 30 °C, bacaan tolok tekanan menunjukkan perubahan.\nDiagram 58 shows the reading of the pressure gauge in a flask containing gas in a room at temperature of 20 °C is 80 kPa. When heated to the increase of the temperature by 30 °C, the readings of the pressure gauge show a change. (Negeri Sembilan: 2021)\n\nApakah bacaan tolok tekanan pada suhu yang baru?\nWhat is the pressure gauge reading at the new temperature?",
        [
            {"id": "A", "teks": "82 733 Pa"},
            {"id": "B", "teks": "88 191 Pa"},
            {"id": "C", "teks": "120 000 Pa"},
            {"id": "D", "teks": "200 000 Pa"}
        ],
        "rajah58", "Percubaan Negeri Sembilan 2021", 2021
    ))

    # Q21
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q21", 21, "Tinggi", "Mengaplikasi Kuantitatif",
        "Rajah 59 menunjukkan sebuah termometer merkuri dalam kaca. Skala termometer belum ditandakan. Panjang turus merkuri, l meningkat secara seragam dengan suhu. Panjang, l ialah 2.0 cm pada 0 °C dan 26.0 cm pada 100 °C.\nDiagram 59 shows a mercury-in-glass thermometer. The scale has not been marked. Length of mercury column, l increases uniformly with temperature. Length l is 2.0 cm at 0 °C and 26.0 cm at 100 °C. (Pahang: 2021)\n\nBerapakah nilai l apabila bebuli diletakkan di dalam air pada suhu 50 °C?\nWhat is the value of l when the bulb is placed in water at 50 °C?",
        [
            {"id": "A", "teks": "12.0 cm"},
            {"id": "B", "teks": "13.0 cm"},
            {"id": "C", "teks": "14.0 cm"},
            {"id": "D", "teks": "16.0 cm"}
        ],
        "rajah59", "Percubaan Pahang 2021", 2021
    ))

    # Q22
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q22", 22, "Tinggi", "Mengaplikasi Kuantitatif",
        "400 g air yang bersuhu 30 °C dimasukkan ke dalam X g air yang bersuhu 100 °C. Dalam keadaan keseimbangan terma, suhu air tersebut adalah 60 °C. Hitung nilai X.\n400 g of water at temperature 30 °C is added to X g of water at temperature of 100 °C. In a thermal equilibrium state, the temperature of the water is 60 °C. Find the value of X. (Perlis: 2021)",
        [
            {"id": "A", "teks": "400 g"},
            {"id": "B", "teks": "300 g"},
            {"id": "C", "teks": "800 g"},
            {"id": "D", "teks": "933 g"}
        ],
        "", "Percubaan Perlis 2021", 2021
    ))

    # Q23
    questions.append(make_b4_q(
        "MODUL_T4_B4_K3_Q23", 23, "Tinggi", "Mengaplikasi Kuantitatif",
        "Suatu pepejal berjisim 1.2 kg dipanaskan menggunakan pemanas elektrik yang membekalkan 600 J tenaga haba dalam masa satu saat. Rajah 60 menunjukkan graf suhu melawan masa bagi pepejal tersebut.\nA solid of a mass 1.2 kg is heated by an electric heater which supplies 600 J of heat energy per second. Diagram 60 shows the temperature-time graph of the solid. (Perlis: 2021)\n\nCari nilai haba pendam tentu pelakuran bagi pepejal tersebut.\nFind the specific latent heat of fusion for the solid.",
        [
            {"id": "A", "teks": "3 kJ kg^-1"},
            {"id": "B", "teks": "4 kJ kg^-1"},
            {"id": "C", "teks": "180 kJ kg^-1"},
            {"id": "D", "teks": "240 kJ kg^-1"}
        ],
        "rajah60", "Percubaan Perlis 2021", 2021
    ))

    return questions
