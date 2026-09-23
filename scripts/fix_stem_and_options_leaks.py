#!/usr/bin/env python3
"""
Surgical fix for 32 questions in Bab 2 Tingkatan 4:
- Eliminates leaked table headers and option values at the end of question stems
- Restores English question stems that were accidentally swallowed into Option A
- Fixes malformed options (e.g., Q74 Pahang 2021, Q69 Selangor 2021, Q76 Pahang 2021, Q86 Melaka 2021)
- Links newly cropped, border-free and complete diagrams (Rajah 30, 76, 87, 102, and Q68)
- Synchronizes changes to scratch/t4_b2_full_questions.json and dskp-data.js
"""

import json
import re

FIXES = {
    "MODUL_T4_B2_K2_Q59": {
        "soalan": "Rajah 45 menunjukkan laluan yang dilalui oleh seorang lelaki.\nDiagram 45 shows the path travelled by a man. (Sarawak: 2021)\n\nApakah kuantiti yang boleh ditentukan dari laluan PQR dan PR?\nWhat is the quantity that can be determined from path PQR and PR?"
    },
    "MODUL_T4_B2_K2_Q69": {
        "soalan": "Rajah 50 menunjukkan tiga keping duit syiling yang serupa, P, Q dan R, yang pegun di atas suatu permukaan mengufuk.\nDiagram 50 shows three identical coins, P, Q and R, at rest on a horizontal surface. (Selangor: Set 2: 2021)\n\nApakah yang berlaku apabila P ditolak dan berlanggar dengan Q?\nWhat happens if P is pushed and collided with Q?",
        "pilihan": [
            {"id": "A", "teks": "P: Bergerak (Moves) | Q: Pegun (Stationary) | R: Pegun (Stationary)"},
            {"id": "B", "teks": "P: Pegun (Stationary) | Q: Pegun (Stationary) | R: Bergerak (Moves)"},
            {"id": "C", "teks": "P: Bergerak (Moves) | Q: Bergerak (Moves) | R: Pegun (Stationary)"},
            {"id": "D", "teks": "P: Bergerak (Moves) | Q: Pegun (Stationary) | R: Bergerak (Moves)"}
        ],
        "jawapanBetul": "B",
        "jawapan": "B"
    },
    "MODUL_T4_B2_K2_Q74": {
        "soalan": "Satu zarah bergerak dari titik P ke titik Q dalam masa, T. Antara pernyataan berikut yang manakah benar tentang halaju purata dan pecutan purata bagi zarah tersebut?\nA particle moves from a point P to a point Q in a time T. Which one of the following correctly defines both the average velocity and average acceleration of the particle? (Pahang: 2021)",
        "pilihan": [
            {"id": "A", "teks": "Halaju purata: Sesaran Q dari P / T (Displacement of Q from P / T) | Pecutan purata: Perubahan laju dari P ke Q / T (Change in speed from P to Q / T)"},
            {"id": "B", "teks": "Halaju purata: Jarak Q dari P / T (Distance of Q from P / T) | Pecutan purata: Perubahan laju dari P ke Q / T (Change in speed from P to Q / T)"},
            {"id": "C", "teks": "Halaju purata: Jarak Q dari P / T (Distance of Q from P / T) | Pecutan purata: Perubahan halaju dari P ke Q / T (Change in velocity from P to Q / T)"},
            {"id": "D", "teks": "Halaju purata: Sesaran Q dari P / T (Displacement of Q from P / T) | Pecutan purata: Perubahan halaju dari P ke Q / T (Change in velocity from P to Q / T)"}
        ],
        "jawapanBetul": "D",
        "jawapan": "D"
    },
    "MODUL_T4_B2_K2_Q76": {
        "soalan": "Rajah 55 menunjukkan sebiji bola dijatuhkan dari sebuah permukaan atas meja. Rintangan udara diabaikan.\nDiagram 55 shows a ball dropped from a tabletop. Air resistance is ignored. (Pahang: 2021)\n\nApakah jenis gerakan bola itu?\nWhat is the type of motion of the ball?",
        "pilihan": [
            {"id": "A", "teks": "Halaju: Malar (Constant) | Pecutan: Malar (Constant)"},
            {"id": "B", "teks": "Halaju: Meningkat (Increasing) | Pecutan: Malar (Constant)"},
            {"id": "C", "teks": "Halaju: Malar (Constant) | Pecutan: Meningkat (Increasing)"},
            {"id": "D", "teks": "Halaju: Meningkat (Increasing) | Pecutan: Meningkat (Increasing)"}
        ],
        "jawapanBetul": "B",
        "jawapan": "B"
    },
    "MODUL_T4_B2_K2_Q95": {
        "soalan": "Rajah 67 menunjukkan graf sesaran-masa bagi gerakan suatu objek.\nDiagram 67 shows the displacement-time graph of the motion of an object. (SPM: 2022)\n\nAntara berikut, pasangan manakah yang betul tentang gerakan objek itu?\nWhich of the following pairs is correct about the motion of the object?"
    },
    "MODUL_T4_B2_K2_Q65": {
        "soalan": "Antara yang berikut, yang manakah benar mengenai perlanggaran kenyal antara dua jasad?\nWhich of the following is true about an elastic collision between two bodies? (Selangor: Set 1: 2021)"
    },
    "MODUL_T4_B2_K2_Q53": {
        "soalan": "Bagaimana keadaan sebuah troli yang berat untuk memulakan dan memberhentikan gerakan?\nHow is the condition of a heavy trolley to start its motion and to stop its motion? (Terengganu: 2022)"
    },
    "MODUL_T4_B2_K2_Q44": {
        "soalan": "Rajah 34 menunjukkan seorang ahli bomba sedang memegang hos air dengan kuat supaya sentakan hos ke belakang dapat diatasi semasa air dipancut keluar dari hos itu.\nDiagram 34 shows a firefighter holding a water hose firmly so that the recoil of the hose can be overcome as the water is ejected from the hose. (SBP: 2022)\n\nHukum fizik manakah yang boleh menerangkan situasi ini?\nWhich physics law can explain this situation?"
    },
    "MODUL_T4_B2_K1_Q10": {
        "soalan": "Hubungan antara daya, F, jisim, m dan pecutan, a diberi oleh persamaan\nThe relationship between force, F, mass, m and acceleration, a is given by the equation (SPM: 2023)\n\nF = ma\n\nAntara yang berikut, manakah yang betul mewakili persamaan tersebut?\nWhich of the following correctly represents the equation?"
    },
    "MODUL_T4_B2_K2_Q10": {
        "soalan": "Objek manakah mempunyai inersia yang paling besar?\nWhich object has the largest inertia? (Perlis: 2023)"
    },
    "MODUL_T4_B2_K4_Q01": {
        "soalan": "Rajah 103 menunjukkan sehelai bulu ayam dan sebiji bola loyang dijatuhkan serentak dalam udara.\nDiagram 103 shows a chicken feather and a brass ball dropped simultaneously in the air. (Kelantan: 2023)\n\nAntara berikut yang manakah menerangkan pergerakan bulu ayam dan bola loyang?\nWhich of the following describes the movement of the chicken feather and brass ball?"
    },
    "MODUL_T4_B2_K4_Q03": {
        "soalan": "Sebiji bola ping pong dan sebiji bola logam yang sama saiz dilepaskan daripada ketinggian yang sama dalam vakum. Perbandingan yang manakah tentang momentum kedua-dua bola sejurus sebelum menghentam pada lantai adalah betul?\nA ping pong ball and a metal ball of the same size are released from the same height in vacuum. Which comparison about the momentum of the two balls just before hitting the floor is true? (Pulau Pinang: 2023)"
    },
    "MODUL_T4_B2_K4_Q06": {
        "soalan": "Rajah 107 menunjukkan dua biji durian yang jatuh serentak tetapi berbeza saiz. Mengapakah durian besar itu sampai ke tanah dahulu?\nDiagram 107 shows two durians that fall at the same time but different in size. Why does the big durian reach the ground first? (Pahang: 2022)"
    },
    "MODUL_T4_B2_K2_Q71": {
        "soalan": "Situasi manakah yang melibatkan inersia?\nWhich situation involves inertia? (Negeri Sembilan: 2021)"
    },
    "MODUL_T4_B2_K2_Q68": {
        "soalan": "Antara berikut yang manakah menunjukkan kesan inersia?\nWhich of the following shows the effect of inertia? (Selangor: Set 2: 2021)",
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_q68_situasi.webp"
    },
    "MODUL_T4_B2_K2_Q31": {
        "soalan": "Rajah 25 menunjukkan seorang pemain besbol memukul sebiji bola.\nDiagram 25 shows a baseball player hitting a ball. (Negeri Sembilan: 2022)\n\nDaya impuls terhasil apabila\nAn impulsive force is produced when"
    },
    "MODUL_T4_B2_K3_Q17": {
        "soalan": "Rajah 82 menunjukkan graf halaju-masa bagi suatu objek.\nDiagram 82 shows a velocity-time graph for an object. (Melaka: 2022)\n\nAntara berikut yang manakah graf pecutan-masa untuk mewakili pergerakan objek tersebut?\nWhich of the following acceleration-time graph represents the motion of the object?"
    },
    "MODUL_T4_B2_K3_Q09": {
        "soalan": "Sebiji bola plastisin berjisim 50 g dilontar dengan halaju 10 m s⁻¹ dan telah berlanggar dengan dinding. Bola plastisin itu melekat pada dinding. Jika masa impak semasa perlanggaran ialah 0.4 s, berapakah magnitud daya impuls yang bertindak pada dinding itu?\nA plasticine ball of mass 50 g is thrown at a velocity of 10 m s⁻¹ and hits the wall. It sticks to the wall. If the time of impact during collision is 0.4 s, what is the magnitude of the impulsive force acting on the wall? (Pahang: 2023)",
        "pilihan": [
            {"id": "A", "teks": "-1 250.00 N"},
            {"id": "B", "teks": "-1.25 N"},
            {"id": "C", "teks": "125.00 N"},
            {"id": "D", "teks": "1 250.00 N"}
        ]
    },
    "MODUL_T4_B2_K3_Q16": {
        "soalan": "Sebuah kereta bermula dari pegun di sebuah simpang dan mengambil masa 8.0 s untuk mencapai halaju 50 m s⁻¹. Hitungkan pecutan bagi kereta itu.\nA car starts from rest at a junction and takes 8.0 s to reach a velocity of 50 m s⁻¹. Calculate the acceleration of the car. (Melaka: 2022)",
        "pilihan": [
            {"id": "A", "teks": "0.16 m s⁻²"},
            {"id": "B", "teks": "6.25 m s⁻²"},
            {"id": "C", "teks": "50.00 m s⁻²"},
            {"id": "D", "teks": "400.00 m s⁻²"}
        ]
    },
    "MODUL_T4_B2_K3_Q21": {
        "soalan": "Sebuah lori berjisim kira-kira 2 000 kg bergerak dengan halaju 22 m s⁻¹. Berapakah momentum lori tersebut?\nA lorry of mass about 2 000 kg moves with a velocity of 22 m s⁻¹. What is the momentum of the lorry? (Pahang: 2022)",
        "pilihan": [
            {"id": "A", "teks": "440 N s"},
            {"id": "B", "teks": "4 400 N s"},
            {"id": "C", "teks": "44 000 N s"},
            {"id": "D", "teks": "440 000 N s"}
        ]
    },
    "MODUL_T4_B2_K3_Q24": {
        "soalan": "Sebuah troli X berjisim 6 kg dan berhalaju 3 m s⁻¹ berlanggar secara elastik dengan satu lagi troli Y berjisim 3 kg dengan halaju 2 m s⁻¹. Jika troli X berhenti sejurus selepas perlanggaran, hitungkan halaju akhir bagi troli Y.\nA trolley X of mass 6 kg and a velocity of 3 m s⁻¹ collides elastically with another trolley Y of mass 3 kg with a velocity of 2 m s⁻¹. If trolley X stops immediately after the collision, calculate the final velocity of trolley Y. (Selangor: Set 1: 2022)",
        "pilihan": [
            {"id": "A", "teks": "4 m s⁻¹"},
            {"id": "B", "teks": "5 m s⁻¹"},
            {"id": "C", "teks": "8 m s⁻¹"},
            {"id": "D", "teks": "9 m s⁻¹"}
        ]
    },
    "MODUL_T4_B2_K3_Q29": {
        "soalan": "Berdasarkan graf halaju-masa di bawah (Rajah 91), berapakah sesaran kereta dalam masa 14 s?\nBased on the velocity-time graph below (Diagram 91), what is the displacement of the car in 14 s? (Kedah: 2021)",
        "pilihan": [
            {"id": "A", "teks": "110 m"},
            {"id": "B", "teks": "100 m"},
            {"id": "C", "teks": "80 m"},
            {"id": "D", "teks": "10 m"}
        ]
    },
    "MODUL_T4_B2_K3_Q31": {
        "soalan": "Sebiji bola yang berjisim 1.2 kg bergerak dengan halaju 4 m s⁻¹ dilanggar oleh sebuah kereta yang bergerak pada arah yang sama dengan bola tersebut. Halaju bola tersebut meningkat kepada 10 m s⁻¹ dalam masa 0.5 s. Berapakah impuls pada bola tersebut?\nA ball of 1.2 kg with velocity of 4.0 m s⁻¹ is hit by a car moving in the same direction with the ball. The velocity of the ball increases to 10 m s⁻¹ in 0.5 s. What is the impulse on the ball? (Kedah: 2021)",
        "pilihan": [
            {"id": "A", "teks": "1.2 N s"},
            {"id": "B", "teks": "3.6 N s"},
            {"id": "C", "teks": "7.2 N s"},
            {"id": "D", "teks": "14.4 N s"}
        ]
    },
    "MODUL_T4_B2_K3_Q39": {
        "soalan": "Seorang pemain bola tampar melontarkan sebiji bola ke atas secara menegak dengan halaju awal 10 m s⁻¹, hitung masa diambil untuk mencapai tinggi maksimum. (g = 9.81 m s⁻² dan rintangan udara diabaikan)\nA volleyball player throwing a ball vertically with initial velocity 10 m s⁻¹, calculate time taken to achieve maximum height (g = 9.81 m s⁻² and air resistance is ignored) (Perlis: 2021)",
        "pilihan": [
            {"id": "A", "teks": "1.02 s"},
            {"id": "B", "teks": "0.98 s"},
            {"id": "C", "teks": "1.98 s"},
            {"id": "D", "teks": "4.96 s"}
        ]
    },
    "MODUL_T4_B2_K3_Q44": {
        "soalan": "Sebuah kapal terbang yang pegun di landasan bersedia untuk berlepas. Kapal terbang tersebut berlepas apabila halajunya mencapai 100 m s⁻¹ pada pecutan 4 m s⁻². Berapakah sesaran kapal terbang itu sebelum meninggalkan landasan?\nA stationary aeroplane on a runway is ready to take off. The aeroplane takes off when its velocity reaches 100 m s⁻¹ at an acceleration of 4 m s⁻². What is the displacement of the aeroplane before it takes off? (SPM: 2022)",
        "pilihan": [
            {"id": "A", "teks": "400 m"},
            {"id": "B", "teks": "1 250 m"},
            {"id": "C", "teks": "2 500 m"},
            {"id": "D", "teks": "5 000 m"}
        ]
    },
    "MODUL_T4_B2_K2_Q73": {
        "soalan": "Rajah 53 menunjukkan satu alu menghentam lesung.\nDiagram 53 shows a pestle hitting a mortar. (Negeri Sembilan: 2021)\n\nSatu daya yang besar bertindak pada alu disebabkan oleh\nA large force acting on the pestle is due to",
        "pilihan": [
            {"id": "A", "teks": "Perubahan momentum alu berlaku dalam tempoh masa yang pendek / Change in momentum of the pestle occurs in a short period of time"},
            {"id": "B", "teks": "Perubahan momentum alu berlaku dalam tempoh masa yang panjang / Change in momentum of the pestle occurs in a long period of time"},
            {"id": "C", "teks": "Alu itu mengalami perubahan jisim apabila ia menghentam lesung / The pestle undergoes a change of mass when it hits the mortar"},
            {"id": "D", "teks": "Alu itu mengalami geseran yang kecil apabila ia menghentam lesung / The pestle experiences little friction when it hits the mortar"}
        ]
    },
    "MODUL_T4_B2_K2_Q86": {
        "soalan": "Rajah 63 menunjukkan troli A dan troli B menghampiri antara satu sama lain dan berlanggar.\nDiagram 63 shows a trolley A and trolley B are approaching each other and collide. (Melaka: 2021)\n\nManakah pernyataan yang betul?\nWhich statement is true?",
        "pilihan": [
            {"id": "A", "teks": "Perlanggaran kenyal berlaku / Elastic collision occurs"},
            {"id": "B", "teks": "Jumlah momentum diabadikan / Total momentum is conserved"},
            {"id": "C", "teks": "Jumlah tenaga kinetik diabadikan / Total kinetic energy is conserved"},
            {"id": "D", "teks": "Kedua-dua objek bergerak dengan kelajuan berbeza selepas berlanggar / Both objects will move with different velocity after collision"}
        ],
        "jawapanBetul": "B",
        "jawapan": "B"
    },
    "MODUL_T4_B2_K2_Q90": {
        "soalan": "Rajah 65 menunjukkan sebutir peluru ditembak daripada sepucuk senapang.\nDiagram 65 shows a bullet is fired from a rifle. (Perlis: 2021)\n\nSatu keterangan yang benar mengenai momentum berdasarkan rajah adalah\nA true statement about momentum according to the diagram is",
        "pilihan": [
            {"id": "A", "teks": "Momentum peluru adalah lebih daripada momentum senapang / The momentum of the bullet is more than the momentum of the rifle"},
            {"id": "B", "teks": "Jumlah momentum peluru dan senapang adalah sifar / The total momentum of the bullet and the rifle is zero"},
            {"id": "C", "teks": "Kelajuan senapang adalah lebih daripada kelajuan peluru / The speed of the rifle is more than the speed of bullet"},
            {"id": "D", "teks": "Tenaga kinetik peluru adalah sama dengan tenaga kinetik senapang / The kinetic energy of the bullet is equal to the kinetic energy of the rifle"}
        ]
    },
    "MODUL_T4_B2_K3_Q23": {
        "soalan": "Rajah 87 menunjukkan sebuah kereta mainan bergerak di sepanjang laluan lurus.\nDiagram 87 shows a toy car moving along a straight path. (Selangor: Set 1: 2022)\n\nHalaju pergerakan kereta mainan menurun dari 3.0 m s⁻¹ sehingga 1.0 m s⁻¹ apabila ia bergerak sejauh 2.0 m. Berapakah nyahpecutan kereta mainan itu, dalam m s⁻²?\nThe velocity of the toy car decreases from 3.0 m s⁻¹ to 1.0 m s⁻¹ as it moves through a distance of 2.0 m. What is the toy car's deceleration, in m s⁻²?",
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah87.webp"
    },
    "MODUL_T4_B2_K3_Q07": {
        "soalan": "Rajah 76 menunjukkan sebuah kereta pada titik M. Kereta itu bergerak ke arah N, kemudian bergerak ke arah L dan berhenti di L.\nDiagram 76 shows a car at M. The car moves toward N, then moves toward L and stops at L. (Pahang: 2023)\n\nBerapakah sesaran kereta itu?\nWhat is the displacement of the car?",
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah76.webp"
    },
    "MODUL_T4_B2_K3_Q45": {
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah102.webp"
    },
    "MODUL_T4_B2_K2_Q38": {
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah30.webp"
    }
}

print("Loading scratch/t4_b2_full_questions.json...")
with open("scratch/t4_b2_full_questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

updated_count = 0
for q in questions:
    qid = q["id"]
    if qid in FIXES:
        fix = FIXES[qid]
        for k, v in fix.items():
            q[k] = v
        updated_count += 1

print(f"Applied fixes to {updated_count} questions in scratch/t4_b2_full_questions.json.")
with open("scratch/t4_b2_full_questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print("Synchronizing fixes into dskp-data.js...")
with open("dskp-data.js", "r", encoding="utf-8") as f:
    js_text = f.read()

# Build a lookup for quick replacement
# Since each question is an object in QUESTION_BANK, we can do surgical regex substitution or object-level update
for qid, fix in FIXES.items():
    # Find the object for qid in dskp-data.js
    # Pattern: "id": "qid"
    id_pos = js_text.find(f'"id": "{qid}"')
    if id_pos == -1:
        id_pos = js_text.find(f'id: "{qid}"')
    if id_pos == -1:
        print(f"Warning: could not find {qid} in dskp-data.js")
        continue

    # Find the opening { before id_pos
    brace_open = js_text.rfind("{", 0, id_pos)
    # Find the closing } of this object by tracking brace depth
    brace_depth = 0
    brace_close = -1
    for idx in range(brace_open, len(js_text)):
        if js_text[idx] == "{":
            brace_depth += 1
        elif js_text[idx] == "}":
            brace_depth -= 1
            if brace_depth == 0:
                brace_close = idx
                break

    if brace_close == -1:
        print(f"Warning: could not parse closing brace for {qid}")
        continue

    obj_str = js_text[brace_open:brace_close+1]
    try:
        obj = json.loads(obj_str)
    except Exception as e:
        # Fallback to python literal evaluation or regex replacement
        print(f"Could not json.loads object for {qid}, using regex update: {e}")
        # Update fields via regex
        new_obj_str = obj_str
        if "soalan" in fix:
            escaped_soalan = json.dumps(fix["soalan"], ensure_ascii=False)
            new_obj_str = re.sub(r'"soalan":\s*"([^"\\]|\\.)*"', f'"soalan": {escaped_soalan}', new_obj_str)
        if "rajahUrl" in fix:
            escaped_rajah = json.dumps(fix["rajahUrl"])
            new_obj_str = re.sub(r'"rajahUrl":\s*"([^"\\]|\\.)*"', f'"rajahUrl": {escaped_rajah}', new_obj_str)
        if "pilihan" in fix:
            escaped_pilihan = json.dumps(fix["pilihan"], indent=12, ensure_ascii=False)
            new_obj_str = re.sub(r'"pilihan":\s*\[.*?\]', f'"pilihan": {escaped_pilihan}', new_obj_str, flags=re.DOTALL)
        if "jawapanBetul" in fix:
            new_obj_str = re.sub(r'"jawapanBetul":\s*"[A-D]"', f'"jawapanBetul": "{fix["jawapanBetul"]}"', new_obj_str)
        if "jawapan" in fix:
            new_obj_str = re.sub(r'"jawapan":\s*"[A-D]"', f'"jawapan": "{fix["jawapan"]}"', new_obj_str)

        js_text = js_text[:brace_open] + new_obj_str + js_text[brace_close+1:]
        continue

    # If successfully parsed JSON object
    for k, v in fix.items():
        obj[k] = v
    new_obj_str = json.dumps(obj, indent=8, ensure_ascii=False)
    # Match indentation of original
    js_text = js_text[:brace_open] + new_obj_str + js_text[brace_close+1:]

with open("dskp-data.js", "w", encoding="utf-8") as f:
    f.write(js_text)

print("dskp-data.js updated successfully!")
