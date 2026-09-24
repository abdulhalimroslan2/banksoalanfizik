import json
from scripts.build_dataset_helper_b4 import make_b4_q

def get_k1_questions():
    questions = []
    
    # Q01
    questions.append(make_b4_q(
        "MODUL_T4_B4_K1_Q01", 1, "Rendah", "Mengingat",
        "Apakah yang dimaksudkan dengan keseimbangan terma?\nWhat is meant by thermal equilibrium?\n(Terengganu: 2023)",
        [
            {"id": "A", "teks": "Kadar pengaliran haba bersih antara dua objek menjadi sifar / Net rate of heat flow between two objects becomes zero"},
            {"id": "B", "teks": "Proses penentukuran termometer cecair menggunakan sifat termometri cecair / The process of calibrating thermometer uses thermometric property of liquid"},
            {"id": "C", "teks": "Kuantiti haba yang diperlukan untuk menaikkan suhu objek sebanyak 1 °C / The quantity of heat needed to raise the temperature of the object by 1 °C"},
            {"id": "D", "teks": "Kuantiti haba diperlukan untuk menaikkan suhu 1 kg jisim bahan sebanyak 1 °C / The quantity of heat needed to raise the temperature of 1 kg mass of the substance by 1 °C"}
        ],
        "", "Percubaan Terengganu 2023", 2023
    ))
    
    # Q02
    questions.append(make_b4_q(
        "MODUL_T4_B4_K1_Q02", 2, "Rendah", "Mengingat",
        "Rajah menunjukkan proses perubahan pepejal kepada cecair.\nDiagram shows a process of a solid changes to liquid.\n(SMKA: 2023)",
        [
            {"id": "A", "teks": "Muatan haba tentu pepejal / Specific heat capacity of solid"},
            {"id": "B", "teks": "Muatan haba tentu cecair / Specific heat capacity of liquid"},
            {"id": "C", "teks": "Muatan haba tentu pengewapan / Specific heat capacity of vaporisation"},
            {"id": "D", "teks": "Haba pendam tentu pelakuran / Specific latent heat of fusion"}
        ],
        "rajah1", "Percubaan SMKA 2023", 2023
    ))
    
    # Q03
    questions.append(make_b4_q(
        "MODUL_T4_B4_K1_Q03", 3, "Rendah", "Mengingat",
        "Keseimbangan terma berlaku apabila\nThermal equilibrium occurs when\n(Kedah: 2022)",
        [
            {"id": "A", "teks": "tiada pemindahan haba berlaku antara dua objek bersentuhan terma / no heat is transferred between two objects in thermal contact"},
            {"id": "B", "teks": "pemindahan haba bersih antara dua objek bersentuhan terma adalah sifar / the net heat transfer between two objects in thermal contact is zero"},
            {"id": "C", "teks": "pemindahan haba bersih antara dua objek bersentuhan terma adalah sama / the net heat transfer between two objects in thermal contact is equal"},
            {"id": "D", "teks": "pemindahan haba bersih antara dua objek bersentuhan terma adalah minimum / the net heat transfer between two objects in thermal contact is minimum"}
        ],
        "", "Percubaan Kedah 2022", 2022
    ))
    
    # Q04
    questions.append(make_b4_q(
        "MODUL_T4_B4_K1_Q04", 4, "Rendah", "Mengingat",
        "Suhu sifar mutlak adalah suhu di mana molekul-molekul gas secara teori\nAbsolute zero is the temperature at which gas molecules theoretically\n(Perlis: 2022)",
        [
            {"id": "A", "teks": "tiada langsung isipadu / occupy no volume at all"},
            {"id": "B", "teks": "bergerak paling laju / move the fastest"},
            {"id": "C", "teks": "bacaan suhu adalah 273 °C / temperature reading is 273 °C"},
            {"id": "D", "teks": "mengandungi dua kali bilangan molekul pada suhu bilik / contain twice the number of molecules at room temperature"}
        ],
        "", "Percubaan Perlis 2022", 2022
    ))
    
    return questions
