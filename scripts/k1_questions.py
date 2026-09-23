from scripts.build_dataset_helper import make_q

def get_k1_questions():
    questions = []
    
    # Q01
    questions.append(make_q(
        "MODUL_T4_B3_K1_Q01", 1, "Rendah", "Mengingat",
        "Menurut Hukum Kegravitian Semesta Newton, daya graviti di antara dua objek adalah berkadar terus dengan\nAccording to Newton's Universal Law of Gravitation, the gravitational force between two objects is directly proportional to\n(Melaka: 2023)",
        [
            {"id": "A", "teks": "pemalar kegravitian / the gravitational constant"},
            {"id": "B", "teks": "hasil darab jisim kedua-dua objek / the product of the masses of both objects"},
            {"id": "C", "teks": "jarak di antara kedua-dua objek / the distance between both objects"},
            {"id": "D", "teks": "kuasa dua jarak di antara objek-objek / the square of the distance between the objects"}
        ],
        "", "Percubaan Melaka 2023", 2023
    ))
    
    # Q02
    questions.append(make_q(
        "MODUL_T4_B3_K1_Q02", 2, "Rendah", "Mengingat",
        "Apakah bentuk orbit bagi sebuah planet yang mengelilingi Matahari?\nWhat is the shape of orbit of a planet that surround the Sun?\n(Pulau Pinang: 2023)",
        [
            {"id": "A", "teks": "Elips / Ellipse"},
            {"id": "B", "teks": "Bulatan / Circle"},
            {"id": "C", "teks": "Membujur / Oval"},
            {"id": "D", "teks": "Perihelion / Perihelion"}
        ],
        "", "Percubaan Pulau Pinang 2023", 2023
    ))
    
    # Q03
    questions.append(make_q(
        "MODUL_T4_B3_K1_Q03", 3, "Rendah", "Mengingat",
        "Hukum Kegravitian Semesta Newton menyatakan bahawa daya graviti antara dua jasad berkadar terus dengan hasil darab jisim kedua-dua jasad itu dan berkadar songsang dengan\nNewton's Universal Law of Gravitation states that the gravitational force between two bodies is directly proportional to the product of the masses of the two bodies and is inversely proportional to\n(Perak: 2023)",
        [
            {"id": "A", "teks": "jarak di antara dua jasad / the distance between the two bodies"},
            {"id": "B", "teks": "kuasa dua hasil darab jejari jasad / the square of the product of the bodies' radius"},
            {"id": "C", "teks": "kuasa tiga jarak di antara dua jasad / the cube of the distance between the two bodies"},
            {"id": "D", "teks": "kuasa dua jarak di antara dua jasad / the square of the distance between the two bodies"}
        ],
        "", "Percubaan Perak 2023", 2023
    ))
    
    # Q04
    questions.append(make_q(
        "MODUL_T4_B3_K1_Q04", 4, "Rendah", "Mengingat",
        "Apakah maksud kekuatan medan graviti?\nWhat is meant by gravitational field strength?\n(SBP: 2023)",
        [
            {"id": "A", "teks": "Berat bagi sesuatu jasad / Weight of a body"},
            {"id": "B", "teks": "Kebolehan medan graviti menarik objek / The ability of the gravitational field to attract objects"},
            {"id": "C", "teks": "Daya graviti yang bertindak ke atas suatu objek / The gravitational force acting on an object"},
            {"id": "D", "teks": "Daya yang bertindak per unit jisim disebabkan tarikan graviti / The force acting per unit mass due to gravitational attraction"}
        ],
        "", "Percubaan SBP 2023", 2023
    ))
    
    # Q05
    questions.append(make_q(
        "MODUL_T4_B3_K1_Q05", 5, "Rendah", "Mengingat",
        "Maklumat di bawah menyatakan satu hukum.\nThe information given below states one law.\n(Terengganu: 2023)\n\n\"Semua planet bergerak dalam orbit berbentuk elips dengan kedudukan Matahari pada satu titik fokus.\"\n\"All planets move in elliptical orbits with the Sun at one focus.\"\n\nApakah hukum yang diterangkan oleh pernyataan di atas?\nWhat law is explained by the above statement?",
        [
            {"id": "A", "teks": "Hukum Kepler Pertama / Kepler's First Law"},
            {"id": "B", "Hukum": "Hukum Kepler Kedua / Kepler's Second Law", "teks": "Hukum Kepler Kedua / Kepler's Second Law"},
            {"id": "C", "teks": "Hukum Kepler Ketiga / Kepler's Third Law"},
            {"id": "D", "teks": "Hukum Kegravitian Semesta Newton / Newton's Universal Law of Gravitation"}
        ],
        "", "Percubaan Terengganu 2023", 2023
    ))
    
    # Q06
    questions.append(make_q(
        "MODUL_T4_B3_K1_Q06", 6, "Rendah", "Mengingat",
        "Pernyataan manakah yang betul tentang Hukum Kepler Kedua?\nWhich statement is correct about Kepler's Second Law?\n(MRSM: 2023)",
        [
            {"id": "A", "teks": "Garis yang menyambungkan planet dengan Matahari akan mencakupi luas yang sama dalam sela masa yang sama apabila planet bergerak dalam orbitnya / A line that connects a planet to the Sun sweeps out equal areas in equal times when the planet moves in its orbit"},
            {"id": "B", "teks": "Orbit bagi setiap planet adalah elips dengan Matahari berada di satu daripada fokusnya / The orbit of each planet is elliptical with the Sun at one focus"},
            {"id": "C", "teks": "Kuasa dua tempoh orbit planet adalah berkadar terus dengan kuasa tiga jejari orbitnya / The square of the orbital period of any planet is directly proportional to the cube of the radius of its orbit"},
            {"id": "D", "teks": "Daya graviti antara dua jasad berkadar terus dengan hasil darab jisim kedua-dua jasad / The gravitational force between two bodies is directly proportional to the product of the masses of the two bodies"}
        ],
        "", "Percubaan MRSM 2023", 2023
    ))
    
    # Q07
    questions.append(make_q(
        "MODUL_T4_B3_K1_Q07", 7, "Rendah", "Mengingat",
        "Baca pernyataan di bawah:\nRead the statement below.\n(Kedah: 2022)\n\n\"Kuasa dua tempoh orbit planet adalah berkadar terus dengan kuasa tiga jejari orbitnya.\"\n\"The square of the orbital period of any planet is directly proportional to the cube of the radius of its orbit.\"\n\nPernyataan itu berkaitan\nThe statement is about",
        [
            {"id": "A", "teks": "Hukum Kepler Pertama / Kepler's First Law"},
            {"id": "B", "teks": "Hukum Kepler Kedua / Kepler's Second Law"},
            {"id": "C", "teks": "Hukum Kepler Ketiga / Kepler's Third Law"},
            {"id": "D", "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion"}
        ],
        "", "Percubaan Kedah 2022", 2022
    ))
    
    # Q08
    questions.append(make_q(
        "MODUL_T4_B3_K1_Q08", 8, "Rendah", "Mengingat",
        "Tempoh orbit satelit geopegun ialah\nThe orbital period of a geostationary satellite is\n(Perlis: 2022)",
        [
            {"id": "A", "teks": "24 jam / 24 hours"},
            {"id": "B", "teks": "36 jam / 36 hours"},
            {"id": "C", "teks": "48 jam / 48 hours"},
            {"id": "D", "teks": "72 jam / 72 hours"}
        ],
        "", "Percubaan Perlis 2022", 2022
    ))
    
    # Q09
    questions.append(make_q(
        "MODUL_T4_B3_K1_Q09", 9, "Rendah", "Mengingat",
        "Kedudukan bagi sebuah planet yang berada paling hampir dengan Matahari ketika mengorbit dikenali sebagai\nThe position of a planet that is closest to the Sun when orbiting is known as\n(Perlis: 2022)",
        [
            {"id": "A", "teks": "perihelion / perihelion"},
            {"id": "B", "teks": "titik fokus / focal point"},
            {"id": "C", "teks": "aphelion / aphelion"},
            {"id": "D", "teks": "pusat / center"}
        ],
        "", "Percubaan Perlis 2022", 2022
    ))
    
    return questions

if __name__ == '__main__':
    qs = get_k1_questions()
    print(f"Generated {len(qs)} K1 questions successfully.")
