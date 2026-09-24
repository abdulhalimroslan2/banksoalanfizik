/**
 * PANGKALAN DATA DSKP & BANK SOALAN FIZIK SPM (KSSM TINGKATAN 4 & 5)
 * Berpandukan Dokumen Standard Kurikulum dan Pentaksiran (DSKP) KPM
 * dan Format Pentaksiran SPM Lembaga Peperiksaan Malaysia (Kod 4531)
 */

const DSKP_DATA = {
  tingkatan4: {
    title: "Fizik Tingkatan 4 KSSM",
    temas: [
      {
        id: "T4_TEMA1",
        nama: "Asas Fizik",
        babs: [
          {
            no: 1,
            nama: "Pengukuran",
            subtopik: [
              "1.1 Kuantiti Fizik (Asas & Terbitan, Skalar & Vektor)",
              "1.2 Penyiasatan Saintifik (Graf, Pemboleh ubah, Hubungan Matematik)"
            ],
            standardKandungan: ["1.1", "1.2"]
          }
        ]
      },
      {
        id: "T4_TEMA2",
        nama: "Mekanik dan Graviti",
        babs: [
          {
            no: 2,
            nama: "Daya dan Gerakan I",
            subtopik: [
              "2.1 Gerakan Linear (Sesaran, Halaju, Pecutan)",
              "2.2 Graf Gerakan Linear (Sesaran-Masa, Halaju-Masa)",
              "2.3 Gerakan Jatuh Bebas",
              "2.4 Inersia (Hukum Gerakan Newton Pertama)",
              "2.5 Momentum & Prinsip Keabadian Momentum",
              "2.6 Daya (Hukum Gerakan Newton Kedua F=ma)",
              "2.7 Impuls dan Daya Impuls",
              "2.8 Berat"
            ],
            standardKandungan: ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8"]
          },
          {
            no: 3,
            nama: "Kegravitian",
            subtopik: [
              "3.1 Hukum Kegravitian Semesta Newton (F = G*m1*m2 / r^2)",
              "3.2 Hukum Kepler (Hukum Kepler I, II, III: T^2 berkadar langsung r^3)",
              "3.3 Satelit Bumi dan Halaju Lepas (v = sqrt(2GM/r))"
            ],
            standardKandungan: ["3.1", "3.2", "3.3"]
          }
        ]
      },
      {
        id: "T4_TEMA3",
        nama: "Haba",
        babs: [
          {
            no: 4,
            nama: "Haba",
            subtopik: [
              "4.1 Keseimbangan Terma",
              "4.2 Muatan Haba Tentu (Q = mcΔθ)",
              "4.3 Haba Pendam Tentu (Q = mL)",
              "4.4 Hukum Gas (Hukum Boyle, Hukum Charles, Hukum Gay-Lussac)"
            ],
            standardKandungan: ["4.1", "4.2", "4.3", "4.4"]
          }
        ]
      },
      {
        id: "T4_TEMA4",
        nama: "Gelombang, Cahaya dan Optik",
        babs: [
          {
            no: 5,
            nama: "Gelombang",
            subtopik: [
              "5.1 Pencirian Gelombang (v = fλ, Pelembapan, Resonans)",
              "5.2 Pantulan Gelombang",
              "5.3 Pembiasan Gelombang",
              "5.4 Pembelauan Gelombang",
              "5.5 Interferens Gelombang (λ = ax/D)",
              "5.6 Gelombang Elektromagnet"
            ],
            standardKandungan: ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]
          },
          {
            no: 6,
            nama: "Cahaya dan Optik",
            subtopik: [
              "6.1 Pembiasan Cahaya (Hukum Snell, n = sin i / sin r, n = c/v, n = H/h)",
              "6.2 Pantulan Dalam Penuh (Sudut Genting, Gentian Optik, Logamaya)",
              "6.3 Pembentukan Imej oleh Kanta",
              "6.4 Formula Kanta Nipis (1/f = 1/u + 1/v) & Pembesaran Linear",
              "6.5 Peralatan Optik (Mikroskop Majmuk, Teleskop)",
              "6.6 Pembentukan Imej oleh Cermin Sfera"
            ],
            standardKandungan: ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6"]
          }
        ]
      }
    ]
  },
  tingkatan5: {
    title: "Fizik Tingkatan 5 KSSM",
    temas: [
      {
        id: "T5_TEMA1",
        nama: "Mekanik",
        babs: [
          {
            no: 1,
            nama: "Daya dan Gerakan II",
            subtopik: [
              "1.1 Daya Paduan (Segi tiga daya, leraian daya Fx dan Fy)",
              "1.2 Leraian Daya pada Satah Condong",
              "1.3 Keseimbangan Daya",
              "1.4 Kekenyalan & Hukum Hooke (F = kx, Ep = 1/2 kx^2)"
            ],
            standardKandungan: ["1.1", "1.2", "1.3", "1.4"]
          },
          {
            no: 2,
            nama: "Tekanan",
            subtopik: [
              "2.1 Tekanan Cecair (P = hρg)",
              "2.2 Tekanan Atmosfera (Barometer Fortin, Barometer Aneroid)",
              "2.3 Tekanan Gas (Manometer)",
              "2.4 Prinsip Pascal (F1/A1 = F2/A2, Sistem Hidraulik)",
              "2.5 Prinsip Archimedes (Daya Apungan Fb = ρVg, Hidrometer)",
              "2.6 Prinsip Bernoulli (Kesan Venturi, Bentuk Aerofoil)"
            ],
            standardKandungan: ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6"]
          }
        ]
      },
      {
        id: "T5_TEMA2",
        nama: "Elektrik dan Keelektromagnetan",
        babs: [
          {
            no: 3,
            nama: "Elektrik",
            subtopik: [
              "3.1 Arus dan Beza Keupayaan",
              "3.2 Rintangan & Hukum Ohm (V = IR, R = ρl/A)",
              "3.3 Daya Gerak Elektrik (d.g.e.) dan Rintangan Dalam (E = V + Ir)",
              "3.4 Tenaga dan Kuasa Elektrik (E = VIt, P = VI = I^2R = V^2/R)"
            ],
            standardKandungan: ["3.1", "3.2", "3.3", "3.4"]
          },
          {
            no: 4,
            nama: "Keelektromagnetan",
            subtopik: [
              "4.1 Daya ke atas Konduktor Pembawa Arus (Petua Tangan Kiri Fleming)",
              "4.2 Aruhan Elektromagnet (Hukum Faraday, Hukum Lenz, Petua Tangan Kanan Fleming)",
              "4.3 Transformer (Vp/Vs = Np/Ns, Kecekapan Transformer)",
              "4.4 Penjanaan dan Penghantaran Elektrik (Rangkaian Grid Nasional)"
            ],
            standardKandungan: ["4.1", "4.2", "4.3", "4.4"]
          }
        ]
      },
      {
        id: "T5_TEMA3",
        nama: "Fizik Gunaan",
        babs: [
          {
            no: 5,
            nama: "Elektronik",
            subtopik: [
              "5.1 Pancaran Termion dan Sinar Katod (Osiloskop Sinar Katod)",
              "5.2 Diod Semikonduktor (Simpang p-n, Rektifikasi Separuh & Penuh Gelombang)",
              "5.3 Transistor (Transistor npn/pnp sebagai suis automatik & penguat arus)"
            ],
            standardKandungan: ["5.1", "5.2", "5.3"]
          }
        ]
      },
      {
        id: "T5_TEMA4",
        nama: "Fizik Moden",
        babs: [
          {
            no: 6,
            nama: "Fizik Nuklear",
            subtopik: [
              "6.1 Reputan Radioaktif (Zarah Alfa, Beta, Sinar Gama, Separuh Hayat)",
              "6.2 Tenaga Nuklear (Pembelahan & Pelakuran Nukleus, Cacat Jisim E = mc^2)"
            ],
            standardKandungan: ["6.1", "6.2"]
          },
          {
            no: 7,
            nama: "Fizik Kuantum",
            subtopik: [
              "7.1 Teori Kuantum Cahaya (Kuantum Tenaga E = hf, Foton)",
              "7.2 Kesan Fotoelektrik (Fungsi Kerja W = hf0, Persamaan Fotoelektrik Einstein)",
              "7.3 Teori Fotoelektrik Einstein & Panjang Gelombang de Broglie (λ = h/p)"
            ],
            standardKandungan: ["7.1", "7.2", "7.3"]
          }
        ]
      }
    ]
  }
};

// RUMUS ASAS SPM FIZIK (SENARAI FORMULA RASMI LEMBAGA PEPERIKSAAN)
const FORMULA_LIST = [
  { no: 1, rumus: "v = u + at", kategori: "Gerakan Linear" },
  { no: 2, rumus: "s = ut + 1/2 at^2", kategori: "Gerakan Linear" },
  { no: 3, rumus: "v^2 = u^2 + 2as", kategori: "Gerakan Linear" },
  { no: 4, rumus: "s = 1/2(u + v)t", kategori: "Gerakan Linear" },
  { no: 5, rumus: "Momentum = mv", kategori: "Gerakan Linear" },
  { no: 6, rumus: "F = ma", kategori: "Daya" },
  { no: 7, rumus: "F = G * (m1*m2) / r^2", kategori: "Graviti" },
  { no: 8, rumus: "g = GM / r^2", kategori: "Graviti" },
  { no: 9, rumus: "v = sqrt(GM / r)", kategori: "Graviti (Halaju Satelit)" },
  { no: 10, rumus: "v = sqrt(2GM / r)", kategori: "Graviti (Halaju Lepas)" },
  { no: 11, rumus: "T^2 / r^3 = 4π^2 / GM", kategori: "Hukum Kepler III" },
  { no: 12, rumus: "Q = mcΔθ", kategori: "Haba" },
  { no: 13, rumus: "Q = mL", kategori: "Haba" },
  { no: 14, rumus: "P1V1 = P2V2", kategori: "Hukum Boyle" },
  { no: 15, rumus: "V1 / T1 = V2 / T2", kategori: "Hukum Charles" },
  { no: 16, rumus: "P1 / T1 = P2 / T2", kategori: "Hukum Gay-Lussac" },
  { no: 17, rumus: "v = fλ", kategori: "Gelombang" },
  { no: 18, rumus: "λ = ax / D", kategori: "Interferens Gelombang" },
  { no: 19, rumus: "n = sin i / sin r", kategori: "Hukum Snell" },
  { no: 20, rumus: "n = 1 / sin c", kategori: "Pantulan Dalam Penuh" },
  { no: 21, rumus: "n = Dalam Nyata (H) / Dalam Ketara (h)", kategori: "Cahaya" },
  { no: 22, rumus: "1/f = 1/u + 1/v", kategori: "Formula Kanta" },
  { no: 23, rumus: "m = v / u = hi / ho", kategori: "Pembesaran Linear" },
  { no: 24, rumus: "P = hρg", kategori: "Tekanan Cecair" },
  { no: 25, rumus: "F1 / A1 = F2 / A2", kategori: "Prinsip Pascal" },
  { no: 26, rumus: "F_B = ρVg", kategori: "Prinsip Archimedes" },
  { no: 27, rumus: "F = kx", kategori: "Hukum Hooke" },
  { no: 28, rumus: "Ep = 1/2 kx^2", kategori: "Tenaga Keupayaan Kenyal" },
  { no: 29, rumus: "V = IR", kategori: "Hukum Ohm" },
  { no: 30, rumus: "E = V + Ir", kategori: "d.g.e & Rintangan Dalam" },
  { no: 31, rumus: "P = VI = I^2R = V^2 / R", kategori: "Kuasa Elektrik" },
  { no: 32, rumus: "Vp / Vs = Np / Ns", kategori: "Transformer" },
  { no: 33, rumus: "Kecekapan = (Is*Vs / Ip*Vp) * 100%", kategori: "Kecekapan Transformer" },
  { no: 34, rumus: "E = mc^2", kategori: "Tenaga Nuklear" },
  { no: 35, rumus: "E = hf", kategori: "Fizik Kuantum" },
  { no: 36, rumus: "hf = W + 1/2 mv^2_max", kategori: "Kesan Fotoelektrik Einstein" },
  { no: 37, rumus: "λ = h / p = h / mv", kategori: "Panjang Gelombang de Broglie" }
];

// RUJUKAN DOKUMEN UTAMA RASMI
const RUJUKAN_DOKUMEN_UTAMA = {
  dskp: {
    nama: "DSKP Fizik Tingkatan 4 dan 5 (KSSM)",
    laluan: "/Users/halimroslan/Desktop/HUB BANK SOALAN FIZIK/DSKP Fizik Tingkatan 4 dan 5.pdf",
    deskripsi: "Dokumen rujukan rasmi Kementerian Pendidikan Malaysia bagi Standard Kandungan (SK) & Standard Pembelajaran (SP)."
  },
  cheatnoteT4: {
    nama: "CHEATNOTE Fizik Tingkatan 4",
    laluan: "/Users/halimroslan/Desktop/HUB BANK SOALAN FIZIK/CHEATNOTE T4.pdf",
    deskripsi: "Nota padat formula dan konsep utama Fizik Tingkatan 4."
  },
  cheatnoteT5: {
    nama: "CHEATNOTE Fizik Tingkatan 5",
    laluan: "/Users/halimroslan/Desktop/HUB BANK SOALAN FIZIK/CHEATNOTE T5.pdf",
    deskripsi: "Nota padat formula dan konsep utama Fizik Tingkatan 5."
  },
  bukuTeks: {
    nama: "Pakej Buku Teks Fizik KSSM Tingkatan 4 & 5",
    laluan: "/Users/halimroslan/Desktop/HUB BANK SOALAN FIZIK/1 Buku Teks",
    deskripsi: "Buku teks digital KPM merangkumi bab Tingkatan 4 dan Tingkatan 5."
  }
};

// BANK SOALAN ASAS DSKP SPM
const QUESTION_BANK = [
  {
    "id": "SPM_2023_K1_Q20",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2023,
    "noSoalanAsal": 20,
    "sk": "SK 1.1 Daya Paduan",
    "sp": "SP 1.1.2 Menentukan daya paduan",
    "spKod": "1.1.2",
    "rujukanDskp": "DSKP Fizik T5 ms 26",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 2-12",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 1-3",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.1 Daya Paduan",
    "aras": "Rendah",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 13 menunjukkan Aina dan Aiza sedang berebutkan anak patung beruang.\nDiagram 13 shows Aina and Aiza fighting over a teddy bear.\n\nApakah daya paduan yang terhasil?\nWhat is the resultant force that is formed?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2023_q20_rajah13.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "5 N ke arah Aina / 5 N towards Aina"
      },
      {
        "id": "B",
        "teks": "5 N ke arah Aiza / 5 N towards Aiza"
      },
      {
        "id": "C",
        "teks": "25 N ke arah Aina / 25 N towards Aina"
      },
      {
        "id": "D",
        "teks": "25 N ke arah Aiza / 25 N towards Aiza"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Daya paduan ialah hasil tambah vektor bagi daya-daya yang bertindak ke atas suatu objek. Mengikut arah pergerakan: Daya Aina = 15 N (ke kiri), Daya Aiza = 10 N (ke kanan). Daya paduan F = 15 N - 10 N = 5 N ke arah Aina.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2024_K1_Q21",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2024,
    "noSoalanAsal": 21,
    "sk": "SK 1.2 Leraian Daya",
    "sp": "SP 1.2.2 Menyelesaikan masalah melibatkan daya paduan dan leraian daya",
    "spKod": "1.2.2",
    "rujukanDskp": "DSKP Fizik T5 ms 27",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 13-17",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 4",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.2 Leraian Daya",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 13 menunjukkan sebuah beg pakaian yang pegun di atas laluan bergerak bersatah condong dengan berat beg W = 50 N.\nDiagram 13 shows a luggage that is stationary on a travelator with luggage weight W = 50 N.\n\nApakah daya geseran, Fg, yang dikenakan oleh beg pakaian itu di atas satah condong?\nWhat is the frictional force, Fg, exerted by the luggage on the inclined plane?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2024_q21_rajah13.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "23 N"
      },
      {
        "id": "B",
        "teks": "25 N"
      },
      {
        "id": "C",
        "teks": "29 N"
      },
      {
        "id": "D",
        "teks": "43 N"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Oleh sebab beg pakaian berada dalam keadaan pegun di atas satah condong 30°, daya berada dalam keseimbangan. Komponen berat yang bertindak selari ke bawah satah condong ialah W_selari = W sin 30° = 50 sin 30° = 25 N. Maka, daya geseran statik menentang gerakan ialah Fg = W sin 30° = 25 N.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2021_K1_Q20",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2021,
    "noSoalanAsal": 20,
    "sk": "SK 1.2 Leraian Daya",
    "sp": "SP 1.2.1 Melerai daya kepada dua komponen",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T5 ms 27",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 13-17",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 4",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.2 Leraian Daya",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 13 menunjukkan pekerja binaan sedang menolak troli dengan daya 500 N pada sudut 60° dari permukaan lantai.\nDiagram 13 shows a construction worker is pushing a trolley with a force of 500 N at an angle of 60° to the floor surface.\n\nApakah daya bersih yang dikenakan pada troli secara mengufuk?\nWhat is the net force exerted to the trolley horizontally?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2021_q20_rajah13.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "50 N"
      },
      {
        "id": "B",
        "teks": "250 N"
      },
      {
        "id": "C",
        "teks": "433 N"
      },
      {
        "id": "D",
        "teks": "866 N"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Komponen daya mengufuk diperolehi melalui formula leraian daya trigonometri: Fx = F cos 60° = 500 N × cos 60° = 500 × 0.5 = 250 N.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2021_K1_Q22",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2021,
    "noSoalanAsal": 22,
    "sk": "SK 1.2 Leraian Daya",
    "sp": "SP 1.2.2 Menyelesaikan masalah melibatkan daya paduan dan leraian daya",
    "spKod": "1.2.2",
    "rujukanDskp": "DSKP Fizik T5 ms 27",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 15-18",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 5",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.2 Leraian Daya",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 15 menunjukkan suatu objek yang beratnya 1 000 N ditarik dengan daya 850 N melalui satu satah condong bersudut 30°. Daya geseran yang bertindak ke atas objek tersebut ialah 150 N.\nDiagram 15 shows an object of weight 1 000 N is pulled by a force of 850 N through an inclined plane with an angle of 30°. Frictional force acted on the object is 150 N.\n\nBerapakah daya paduan yang bertindak pada objek itu?\nWhat is the resultant force acted on the object?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2021_q22_rajah15.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "200 N"
      },
      {
        "id": "B",
        "teks": "500 N"
      },
      {
        "id": "C",
        "teks": "600 N"
      },
      {
        "id": "D",
        "teks": "1 200 N"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Daya penarik ke atas cerun, F = 850 N.\nKomponen berat ke bawah cerun, W_selari = W sin 30° = 1 000 sin 30° = 500 N.\nDaya geseran menentang arah gerakan ke bawah cerun, Fg = 150 N.\nJumlah daya yang menentang = W sin 30° + Fg = 500 N + 150 N = 650 N.\nMaka, daya paduan F_paduan = 850 N - 650 N = 200 N.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2022_K1_Q22",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2022,
    "noSoalanAsal": 22,
    "sk": "SK 1.3 Keseimbangan Daya",
    "sp": "SP 1.3.1 Menyiasat daya dalam keseimbangan",
    "spKod": "1.3.1",
    "rujukanDskp": "DSKP Fizik T5 ms 28",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 18-24",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 6",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.3 Keseimbangan Daya",
    "aras": "Sederhana",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 18 menunjukkan satu eksperimen tentang leraian dan keseimbangan daya menggunakan dua neraca spring yang menyokong beban.\nDiagram 18 shows an experiment about the resolution and equilibrium of forces using two spring balances supporting a load.\n\nPemboleh ubah manakah yang perlu ditambah untuk meningkatkan bacaan kedua-dua neraca spring?\nWhich variable needs to be increased to increase the readings of both spring balances?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2022_q22_rajah18.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Sudut, θ₁ / Angle, θ₁"
      },
      {
        "id": "B",
        "teks": "Sudut, θ₂ / Angle, θ₂"
      },
      {
        "id": "C",
        "teks": "Jisim beban, m / Mass of load, m"
      },
      {
        "id": "D",
        "teks": "Panjang tali, POQ / Length of string, POQ"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Dalam sistem keseimbangan tiga daya berpenjuru, komponen menegak daya tegangan neraca spring mengimbangi berat beban: T₁ cos θ₁ + T₂ cos θ₂ = mg. Apabila jisim beban m ditingkatkan, berat beban W bertambah, maka daya tegangan yang diukur oleh kedua-dua neraca spring akan turut meningkat.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2022_K1_Q21",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2022,
    "noSoalanAsal": 21,
    "sk": "SK 1.3 Keseimbangan Daya",
    "sp": "SP 1.3.1 Menerangkan maksud daya dalam keseimbangan",
    "spKod": "1.3.1",
    "rujukanDskp": "DSKP Fizik T5 ms 28",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 18-24",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 6",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.3 Keseimbangan Daya",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 17 menunjukkan sebuah kapal terbang sedang terbang di udara dengan daya angkat L, daya seret D, daya tujah T, dan berat W.\nDiagram 17 shows an aeroplane is flying in the air with lift force L, drag force D, thrust force T, and weight W.\n\nAntara pernyataan yang berikut, yang manakah menghasilkan pecutan sifar?\nWhich of the following statements produces zero acceleration?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2022_q21_rajah17.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "T < D dan L < W / T < D and L < W"
      },
      {
        "id": "B",
        "teks": "T > D dan L = W / T > D and L = W"
      },
      {
        "id": "C",
        "teks": "T = D dan L > W / T = D and L > W"
      },
      {
        "id": "D",
        "teks": "T = D dan L = W / T = D and L = W"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Pecutan sifar (a = 0) berlaku apabila daya paduan adalah sifar (Hukum Gerakan Newton Pertama / Keseimbangan Daya). Dalam arah mendatar: Daya tujah = Daya seret (T = D). Dalam arah menegak: Daya angkat = Berat (L = W).",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2023_K1_Q19",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2023,
    "noSoalanAsal": 19,
    "sk": "SK 1.3 Keseimbangan Daya",
    "sp": "SP 1.3.1 Mengenal pasti situasi daya dalam keseimbangan dalam kehidupan harian",
    "spKod": "1.3.1",
    "rujukanDskp": "DSKP Fizik T5 ms 28",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 18-20",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 6",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.3 Keseimbangan Daya",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara yang berikut, situasi yang manakah menunjukkan daya dalam keseimbangan?\nWhich of the following situations shows forces are in equilibrium?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2023_q19_situasi.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kapal terbang pada halaju malar / An aeroplane at constant velocity"
      },
      {
        "id": "B",
        "teks": "Budak lelaki menyepak bola / A boy kicks a ball"
      },
      {
        "id": "C",
        "teks": "Lelaki dalam pertandingan berbasikal / A man in cycling competitions"
      },
      {
        "id": "D",
        "teks": "Lelaki mengangkat beban berat / A man lift heavyweight"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Daya berada dalam keseimbangan apabila daya paduan yang bertindak ke atas objek adalah sifar. Keadaan ini menyebabkan objek sama ada pegun atau bergerak dengan halaju malar (pecutan a = 0). Kapal terbang pada halaju malar memenuhi kriteria ini.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2022_K1_Q05",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2022,
    "noSoalanAsal": 5,
    "sk": "SK 1.4 Kekenyalan",
    "sp": "SP 1.4.2 Menganalisis faktor yang mempengaruhi pemalar spring",
    "spKod": "1.4.2",
    "rujukanDskp": "DSKP Fizik T5 ms 29",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 26-31",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 7",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.4 Kekenyalan",
    "aras": "Sederhana",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 5 menunjukkan spring keluli X dan spring keluli Y dengan panjang asal yang sama tetapi diameter gegelung berbeza.\nDiagram 5 shows steel springs X and Y with the same initial length.\n\nPenyataan manakah adalah betul apabila beban 100 g digantung pada setiap spring?\nWhich statement is correct when 100 g load is hung to each spring?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2022_q5_rajah5.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pemanjangan spring keluli X paling besar / Extension of steel spring X is the biggest"
      },
      {
        "id": "B",
        "teks": "Pemalar spring keluli X paling besar / Steel spring X constant is the biggest"
      },
      {
        "id": "C",
        "teks": "Pemanjangan spring keluli Y paling besar / Extension of steel spring Y is the biggest"
      },
      {
        "id": "D",
        "teks": "Pemalar spring keluli X = pemalar spring keluli Y / Steel spring X constant = steel spring Y constant"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Spring keluli X mempunyai diameter gegelung yang lebih kecil berbanding spring Y. Spring dengan diameter gegelung yang lebih kecil adalah lebih keras (kurang memanjang), yang bermaksud nilai pemalar spring k adalah lebih tinggi (k_X > k_Y).",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2022_K1_Q23",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2022,
    "noSoalanAsal": 23,
    "sk": "SK 1.4 Kekenyalan",
    "sp": "SP 1.4.1 Menyatakan Hukum Hooke dan mentafsir graf",
    "spKod": "1.4.1",
    "rujukanDskp": "DSKP Fizik T5 ms 29",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 25-28",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 7",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.4 Kekenyalan",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara berikut, rajah manakah yang mematuhi Hukum Hooke?\nWhich of the following diagrams obeys Hooke's Law?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2022_q23_hukumn_hooke.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Rajah A / Diagram A"
      },
      {
        "id": "B",
        "teks": "Rajah B (Graf garis lurus melalui asalan) / Diagram B (Straight line through origin)"
      },
      {
        "id": "C",
        "teks": "Rajah C / Diagram C"
      },
      {
        "id": "D",
        "teks": "Rajah D / Diagram D"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Mengikut Hukum Hooke, pemanjangan suatu spring, x adalah berkadar terus dengan daya yang dikenakan, F selagi tidak melebihi had kenyal spring (F = kx). Maka hubungan graf F melawan x mesti menunjukkan garis lurus yang bermula dari titik asalan (0, 0).",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2024_K1_Q22",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2024,
    "noSoalanAsal": 22,
    "sk": "SK 1.4 Kekenyalan",
    "sp": "SP 1.4.4 Memerihalkan aplikasi kekenyalan dalam kehidupan harian",
    "spKod": "1.4.4",
    "rujukanDskp": "DSKP Fizik T5 ms 30",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 32-34",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 8",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.4 Kekenyalan",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara yang berikut, rajah manakah yang menunjukkan aplikasi Hukum Hooke?\nWhich of the following diagrams shows the application of Hooke's Law?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/t5_b1_spm2024_q22_aplikasi_hooke.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Roket / Rocket"
      },
      {
        "id": "B",
        "teks": "Busur dan panah / Bow and arrow"
      },
      {
        "id": "C",
        "teks": "Jengkaut / Excavator"
      },
      {
        "id": "D",
        "teks": "Belon udara panas / Hot air balloon"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Busur dan panah menggunakan sifat kekenyalan tali busur yang diregangkan untuk menyimpan tenaga keupayaan kenyal yang mematuhi Hukum Hooke. Apabila dilepaskan, tenaga keupayaan kenyal dipindahkan menjadi tenaga kinetik anak panah.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2024_K2_Q05E",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2024,
    "noSoalanAsal": "5(e)",
    "sk": "SK 1.1 Daya Paduan",
    "sp": "SP 1.1.3 Menyelesaikan masalah yang melibatkan daya paduan, jisim dan pecutan suatu objek",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T5 ms 26",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 9-12",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 3",
    "kertas": 2,
    "bahagian": "A",
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.1 Daya Paduan",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "markahPenuh": 2,
    "soalanUtama": "Satu magnet bar berjisim 0.04 kg bergerak memasuki solenoid dengan pecutan 0.05 m s⁻². Daya tujah ke hadapan yang bertindak ke atas magnet bar ialah 0.3 N.\n\nA bar magnet of mass 0.04 kg moves into the solenoid with an acceleration of 0.05 m s⁻². The forward thrust force acting on the bar magnet is 0.3 N.",
    "pecahan": [
      {
        "sub": "(e)",
        "soalan": "Hitung daya tolakan yang bertindak ke atas magnet bar tersebut.\nCalculate the repulsive force acting on the bar magnet.",
        "markah": 2,
        "skema": "1. Formula daya paduan & gantian: F_paduan = ma = (0.04 kg)(0.05 m s⁻²) = 0.002 N [1m]\n2. Hubungan daya: F_paduan = F_tujah - F_tolakan => 0.002 N = 0.3 N - F_tolakan => F_tolakan = 0.3 - 0.002 = 0.298 N [1m]"
      }
    ],
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2024_K2_Q02",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2024,
    "noSoalanAsal": 2,
    "sk": "SK 1.2 Leraian Daya & SK 1.3 Keseimbangan Daya",
    "sp": "SP 1.2.1 Melerai daya kepada dua komponen & SP 1.3.1 Menerangkan maksud daya dalam keseimbangan",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T5 ms 27-28",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 13-24",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 4-6",
    "kertas": 2,
    "bahagian": "A",
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.2 Leraian Daya & 1.3 Keseimbangan Daya",
    "aras": "Sederhana",
    "konstruk": "Memahami & Mengaplikasi",
    "markahPenuh": 5,
    "soalanUtama": "Rajah 2 menunjukkan seorang budak menggelongsor menuruni satu satah condong kasar yang condong pada sudut 60° dengan ufuk. Berat budak itu, W ialah 300 N.\n\nDiagram 2 shows a boy sliding down a rough inclined plane inclined at an angle of 60° to the horizontal. The weight of the boy, W is 300 N.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/spm2024_k2_q2_rajah2_satah_condong_clean.webp",
    "pecahan": [
      {
        "sub": "(a)",
        "soalan": "Pada Rajah 2, tandakan arah bagi:\nOn Diagram 2, mark the direction of:\n(i) daya tindak balas normal, R.\n    normal reaction force, R.\n(ii) daya geseran, Fr yang bertindak ke atas budak itu.\n     frictional force, Fr acting on the boy.",
        "markah": 2,
        "skema": "1. Arah R bersudut tegak (90°) dengan permukaan satah condong menghala ke atas [1m]\n2. Arah daya geseran Fr selari dengan permukaan satah condong menghala ke atas menentang arah gerakan [1m]"
      },
      {
        "sub": "(b)",
        "soalan": "Hitung komponen berat yang selari dengan satah condong, Wx.\nCalculate the component of weight parallel to the inclined plane, Wx.",
        "markah": 1,
        "skema": "Wx = W sin 60° = 300 sin 60° = 259.81 N [1m]"
      },
      {
        "sub": "(c)(i)",
        "soalan": "Budak itu menggelongsor menuruni satah dengan laju malar. Nyatakan satu persamaan yang menghubungkan daya geseran dengan komponen berat selari dengan satah.\nThe boy slides down the plane with constant speed. State one equation that relates the frictional force with the component of weight parallel to the plane.",
        "markah": 1,
        "skema": "Fr = Wx atau Fr = W sin 60° (Daya paduan sifar, Fnet = 0) [1m]"
      },
      {
        "sub": "(c)(ii)",
        "soalan": "Apakah konsep fizik yang terlibat dalam 2(c)(i)?\nWhat is the physics concept involved in 2(c)(i)?",
        "markah": 1,
        "skema": "Keseimbangan daya / Equilibrium of forces (Hukum Gerakan Newton Pertama) [1m]"
      }
    ],
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2023_K2_Q02",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 1.4 Kekenyalan",
    "sp": "SP 1.4.1 Menyatakan Hukum Hooke & SP 1.4.2 Menganalisis faktor yang mempengaruhi pemalar spring",
    "spKod": "1.4.1",
    "rujukanDskp": "DSKP Fizik T5 ms 29",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 25-30",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 7-8",
    "kertas": 2,
    "bahagian": "A",
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.4 Kekenyalan",
    "aras": "Sederhana",
    "konstruk": "Memahami & Menganalisis",
    "markahPenuh": 5,
    "soalanUtama": "Rajah 2 menunjukkan graf daya, F melawan pemanjangan spring, x bagi satu spring keluli.\n\nDiagram 2 shows a graph of force, F against the extension of spring, x for a steel spring.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/spm2023_k2_q2_rajah2_graf_hooke_clean.webp",
    "pecahan": [
      {
        "sub": "(a)",
        "soalan": "Gariskan jawapan yang betul pada pernyataan di bawah:\nHubungan antara daya dengan pemanjangan spring dapat diterangkan oleh (Hukum Ohm, Hukum Hooke).\n\nUnderline the correct answer to the statement below:\nThe relationship between force and extension of spring can be explained by (Ohm's Law, Hooke's Law).",
        "markah": 1,
        "skema": "Hukum Hooke / Hooke's Law [1m]"
      },
      {
        "sub": "(b)",
        "soalan": "Berdasarkan Rajah 2, hitung pemalar spring keluli itu.\nBased on Diagram 2, calculate the spring constant of the steel spring.",
        "markah": 2,
        "skema": "1. Kecerunan graf: k = ΔF / Δx = 20 N / 8 cm = 2.5 N cm⁻¹ atau 250 N m⁻¹ [1m]\n2. Nilai berserta unit betul: 2.5 N cm⁻¹ atau 250 N m⁻¹ [1m]"
      },
      {
        "sub": "(c)(i)",
        "soalan": "Apakah yang akan berlaku kepada kecerunan graf jika spring itu digantikan dengan spring yang lebih tebal daripada bahan yang sama?\nWhat will happen to the gradient of the graph if the spring is replaced with a thicker spring of the same material?",
        "markah": 1,
        "skema": "Kecerunan bertambah / meningkat / Gradient increases [1m]"
      },
      {
        "sub": "(c)(ii)",
        "soalan": "Beri satu sebab bagi jawapan anda di 2(c)(i).\nGive one reason for your answer in 2(c)(i).",
        "markah": 1,
        "skema": "Spring yang lebih tebal mempunyai pemalar spring k yang lebih tinggi / spring lebih keras (kekenyalan berkurang). [1m]"
      }
    ],
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "SPM_2021_K2_Q09",
    "sumber": "Soalan Sebenar SPM",
    "tahun": 2021,
    "noSoalanAsal": 9,
    "sk": "SK 1.3 Keseimbangan Daya & SK 1.1 Daya Paduan",
    "sp": "SP 1.3.1 Menerangkan maksud daya dalam keseimbangan & SP 1.3.2 Menyelesaikan masalah melibatkan keseimbangan daya",
    "spKod": "1.3.2",
    "rujukanDskp": "DSKP Fizik T5 ms 28",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 18-24",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 5-6",
    "kertas": 2,
    "bahagian": "B",
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.3 Keseimbangan Daya",
    "aras": "Tinggi",
    "konstruk": "Menganalisis, Menilai & Mereka Cipta",
    "markahPenuh": 20,
    "soalanUtama": "Rajah 9.1 menunjukkan sebuah lukisan digantung pada dinding dengan menggunakan tali. Berat lukisan tersebut ialah 15 N. Setiap tali dapat menampung daya maksimum 10 N.\n\nDiagram 9.1 shows a painting is hung on a wall with strings. The weight of the painting is 15 N. Each string can withstand a maximum force of 10 N.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/spm2021_k2_q9_rajah9_1_clean.webp",
    "pecahan": [
      {
        "sub": "(a)",
        "soalan": "Apakah yang dimaksudkan dengan berat?\nWhat is the meaning of weight?",
        "markah": 1,
        "skema": "Daya tarikan graviti yang bertindak ke atas suatu objek / jirim. [1m]"
      },
      {
        "sub": "(b)",
        "soalan": "Selepas beberapa saat digantung, didapati tali pada lukisan itu terputus. Dengan menggunakan nilai sudut θ = 30°, hitung tegangan tali dan daya paduan. Terangkan mengapa tali pada lukisan itu putus.\n\nA few seconds after the painting is hung, it is found that the string of the painting is snapped. By using the value of the angle θ = 30°, calculate the tension of the string and resultant force. Explain why the string of the painting snaps.",
        "markah": 4,
        "skema": "1. Keseimbangan komponen menegak: 2T sin 30° = W => 2T(0.5) = 15 N [1m]\n2. Tegangan tali: T = 15 N [1m]\n3. Daya paduan sebelum terputus = 0 N (pegun / dalam keseimbangan daya) [1m]\n4. Sebab tali putus: Tegangan yang bertindak (15 N) melebihi had daya maksimum yang dapat ditampung oleh setiap tali (10 N). [1m]"
      },
      {
        "sub": "(c)(i)",
        "soalan": "Lukisan itu pecah apabila terjatuh dari ketinggian 4 m. Dengan mengabaikan rintangan udara, hitung masa untuk lukisan itu mencecah ke lantai.\n\nThe painting is broken when it drops from a height of 4 m. By ignoring the air resistance, calculate the time taken for the painting to reach the floor.",
        "markah": 2,
        "skema": "1. Rumus gerakan linear: s = ut + 1/2 gt² => 4 = 0 + 1/2(9.81)t² [1m]\n2. Masa: t = √(8 / 9.81) = 0.90 s [1m]"
      },
      {
        "sub": "(c)(ii)",
        "soalan": "Hitung halaju lukisan itu sebelum mencecah lantai.\n\nCalculate the velocity of the painting before it reaches the floor.",
        "markah": 2,
        "skema": "1. v² = u² + 2gs => v = √(2 × 9.81 × 4) [1m]\n2. Halaju: v = 8.86 m s⁻¹ [1m]"
      },
      {
        "sub": "(c)(iii)",
        "soalan": "Nyatakan satu sebab mengapa lukisan itu pecah.\n\nState one reason why the painting is broken.",
        "markah": 1,
        "skema": "Masa sentuhan / impak semasa perlanggaran dengan lantai adalah sangat singkat, menghasilkan daya impuls yang sangat besar bertindak ke atas lukisan. [1m]"
      },
      {
        "sub": "(d)",
        "soalan": "Rajah 9.2 menunjukkan empat kaedah R, S, T dan U untuk menarik sebuah lori yang tersangkut dalam lumpur oleh dua buah kenderaan pacuan empat roda.\n<br><span style=\"font-style: italic; color: #4B5563;\">Diagram 9.2 shows four methods R, S, T and U to pull a lorry stuck in mud by two four-wheel drive vehicles.</span>\n\n<div class=\"spm-table-container\" style=\"margin: 14px 0; overflow-x: auto;\">\n  <table style=\"width: 100%; border-collapse: collapse; border: 2px solid #111827; background: #ffffff; text-align: center;\">\n    <thead>\n      <tr style=\"background: #F3F4F6; border-bottom: 2px solid #111827;\">\n        <th style=\"width: 14%; padding: 10px 8px; border-right: 2px solid #111827; font-size: 0.95rem; font-weight: 700; color: #111827;\">\n          Kaedah<br><span style=\"font-style: italic; font-weight: 400; font-size: 0.82rem; color: #4B5563;\">Method</span>\n        </th>\n        <th style=\"padding: 10px 8px; font-size: 0.95rem; font-weight: 700; color: #111827;\">\n          Susunan dan Spesifikasi<br><span style=\"font-style: italic; font-weight: 400; font-size: 0.82rem; color: #4B5563;\">Arrangement and Specifications</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr style=\"border-bottom: 1.5px solid #111827;\">\n        <td style=\"border-right: 2px solid #111827; font-weight: 800; font-size: 1.25rem; color: #111827; vertical-align: middle; background: #FAFAFA;\">R</td>\n        <td style=\"padding: 10px; vertical-align: middle; text-align: center;\">\n          <img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/spm2021_k2_q9_kaedah_r_clean.webp\" alt=\"Kaedah R\" style=\"max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 4px;\">\n        </td>\n      </tr>\n      <tr style=\"border-bottom: 1.5px solid #111827;\">\n        <td style=\"border-right: 2px solid #111827; font-weight: 800; font-size: 1.25rem; color: #111827; vertical-align: middle; background: #FAFAFA;\">S</td>\n        <td style=\"padding: 10px; vertical-align: middle; text-align: center;\">\n          <img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/spm2021_k2_q9_kaedah_s_clean.webp\" alt=\"Kaedah S\" style=\"max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 4px;\">\n        </td>\n      </tr>\n      <tr style=\"border-bottom: 1.5px solid #111827;\">\n        <td style=\"border-right: 2px solid #111827; font-weight: 800; font-size: 1.25rem; color: #111827; vertical-align: middle; background: #FAFAFA;\">T</td>\n        <td style=\"padding: 10px; vertical-align: middle; text-align: center;\">\n          <img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/spm2021_k2_q9_kaedah_t_clean.webp\" alt=\"Kaedah T\" style=\"max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 4px;\">\n        </td>\n      </tr>\n      <tr>\n        <td style=\"border-right: 2px solid #111827; font-weight: 800; font-size: 1.25rem; color: #111827; vertical-align: middle; background: #FAFAFA;\">U</td>\n        <td style=\"padding: 10px; vertical-align: middle; text-align: center;\">\n          <img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/spm2021_k2_q9_kaedah_u_clean.webp\" alt=\"Kaedah U\" style=\"max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 4px;\">\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div style=\"text-align: center; font-weight: 600; font-size: 0.9rem; color: #111827; margin-top: 6px;\">\n    Rajah 9.2 / <span style=\"font-style: italic; font-weight: 400;\">Diagram 9.2</span>\n  </div>\n</div>\n\n<p style=\"margin-top: 12px;\">Anda dikehendaki menentukan kaedah yang paling sesuai untuk menarik lori yang tersangkut dalam lumpur dengan lebih berkesan.<br><span style=\"font-style: italic; color: #4B5563;\">You are required to determine the most suitable method to pull the lorry stuck in mud more effectively.</span></p>\n\n<p style=\"margin-top: 8px;\">Kaji spesifikasi keempat-empat kaedah berdasarkan aspek-aspek berikut:<br><span style=\"font-style: italic; color: #4B5563;\">Study the specifications of the four methods based on the following aspects:</span></p>\n\n<ul style=\"margin: 6px 0 10px 24px; padding: 0; line-height: 1.8;\">\n  <li><strong>Sudut antara kabel</strong> / <span style=\"font-style: italic; color: #4B5563;\">Angle between the cables</span></li>\n  <li><strong>Jenis kabel</strong> / <span style=\"font-style: italic; color: #4B5563;\">Type of cable</span></li>\n  <li><strong>Tegangan maksimum pada kabel</strong> / <span style=\"font-style: italic; color: #4B5563;\">Maximum tension of the cable</span></li>\n  <li><strong>Bahan sokongan di bawah tayar lori</strong> / <span style=\"font-style: italic; color: #4B5563;\">Support material below the tyre of the lorry</span></li>\n</ul>\n\n<p style=\"margin-top: 8px;\">Terangkan kesesuaian aspek-aspek itu dan tentukan kaedah yang paling sesuai untuk menarik lori dengan berkesan. Beri sebab untuk pilihan anda.<br><span style=\"font-style: italic; color: #4B5563;\">Explain the suitability of the aspects and determine the most suitable method to pull the lorry effectively. Give reasons for your choice.</span></p>",
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/spm_sebenar/spm2021_k2_q9_rajah9_2_full_table_clean.webp",
        "markah": 10,
        "skema": "• Ciri 1 (Sudut antara kabel): Sudut kecil (30°) [1m] — Sebab: Menghasilkan daya paduan yang lebih besar ke hadapan (F_paduan = 2T cos(θ/2)) [1m].\n• Ciri 2 (Jenis kabel): Kabel tidak kenyal [1m] — Sebab: Memindahkan daya tarikan secara terus tanpa memanjang / mengurangkan bahaya lantunan sentakan tenaga keupayaan kenyal [1m].\n• Ciri 3 (Tegangan maksimum kabel): Tegangan maksimum tinggi [1m] — Sebab: Kabel tidak mudah putus semasa menampung beban tarikan lori yang besar [1m].\n• Ciri 4 (Bahan sokongan): Papan kayu diletakkan di bawah tayar [1m] — Sebab: Menambah luas permukaan sentuhan, mengurangkan tekanan ke atas lumpur serta membekalkan cengkaman geseran untuk lori bergerak [1m].\n• Pemilihan: Kaedah S dipilih [1m] — Sebab: Mempunyai sudut kabel kecil (30°), kabel tidak kenyal, kabel tegangan maksimum tinggi, dan ada papan kayu di bawah tayar lori [1m]."
      }
    ],
    "statusSemakan": "Disemak (SPM Sebenar)"
  },
  {
    "id": "KELANTAN_2026_K1_Q01",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 1,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.2 Mengenal pasti unit asas dan unit terbitan",
    "spKod": "1.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 24",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 2-10",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Unit manakah yang merupakan suatu unit terbitan?\nWhich unit is a derived unit?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Ampere"
      },
      {
        "id": "B",
        "teks": "Meter"
      },
      {
        "id": "C",
        "teks": "Kelvin"
      },
      {
        "id": "D",
        "teks": "Joule"
      }
    ],
    "jawapan": "D",
    "penerangan": "Joule ialah unit terbitan bagi tenaga dan kerja (1 J = 1 kg m² s⁻²). Ampere, Meter dan Kelvin merupakan unit asas SI.",
    "markah": 1,
    "jawapanBetul": "D",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q02",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 2,
    "sk": "SK 4.4 Hukum Gas",
    "sp": "SP 4.4.2 Menentukan hubungan antara tekanan dan isi padu (Hukum Boyle)",
    "spKod": "4.4.2",
    "rujukanDskp": "DSKP Fizik T4 ms 58",
    "rujukanBukuTeks": "Buku Teks T4 Bab 4 ms 148-154",
    "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 4,
    "babNama": "Haba",
    "bidang": "Fizik Terma",
    "topik": "4.4 Hukum Gas",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Manakah antara graf berikut menunjukkan P berkadar terus dengan 1/V?\nWhich of the following graphs shows P is directly proportional to 1/V?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q02_opt_a.webp?v=20260921_v2\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\"></div>"
      },
      {
        "id": "B",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q02_opt_b.webp?v=20260921_v2\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\"></div>"
      },
      {
        "id": "C",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q02_opt_c.webp?v=20260921_v2\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\"></div>"
      },
      {
        "id": "D",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q02_opt_d.webp?v=20260921_v2\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\"></div>"
      }
    ],
    "jawapan": "B",
    "penerangan": "Menurut Hukum Boyle, P berkadar songsang dengan V, yang bermaksud P berkadar terus dengan 1/V. Oleh itu, graf P melawan 1/V ialah garis lurus yang bermula dari asalan (Graf B).",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q03",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 3,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.2 Menyelesaikan masalah melibatkan gerakan jatuh bebas",
    "spKod": "2.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 34",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 46-52",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Ahmad melontar sebiji batu secara menegak ke atas dengan halaju awal 20 m s⁻¹.\nBerapakah tinggi maksimum yang boleh dicapai oleh batu tersebut jika rintangan udara diabaikan?\n[Pecutan graviti, g = 9.81 m s⁻²]\n\nAhmad throws a stone upwards vertically with an initial velocity of 20 m s⁻¹.\nWhat is the maximum height that the stone can reach if the air resistance is neglected?\n[Gravitational acceleration, g = 9.81 m s⁻²]",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "10.39 m"
      },
      {
        "id": "B",
        "teks": "20.39 m"
      },
      {
        "id": "C",
        "teks": "30.39 m"
      },
      {
        "id": "D",
        "teks": "40.49 m"
      }
    ],
    "jawapan": "B",
    "penerangan": "Pada ketinggian maksimum, v = 0 m s⁻¹.\nGunakan rumus v² = u² - 2gh:\n0 = (20)² - 2(9.81)h\n19.62 h = 400\nh = 400 / 19.62 = 20.387 m ≈ 20.39 m.",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q04",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 4,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 53-58",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.4 Inersia",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah 1 menunjukkan tali pinggang keselamatan yang dipakai oleh penumpang ketika bermain roller coaster.\nDiagram 1 shows the safety seatbelt worn by passengers when playing roller coaster.\n\nApakah hukum yang menerangkan keperluan penumpang memakai tali pinggang keselamatan tersebut?\nWhat is the law that explains the need for passengers to wear the safety seatbelt?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q04_rajah1.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Gerakan Newton Pertama / Newton's First Law of Motion"
      },
      {
        "id": "B",
        "teks": "Hukum Gerakan Newton Kedua / Newton's Second Law of Motion"
      },
      {
        "id": "C",
        "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion"
      },
      {
        "id": "D",
        "teks": "Hukum Kegravitian Semesta Newton / Newton's Universal Law of Gravitation"
      }
    ],
    "jawapan": "A",
    "penerangan": "Hukum Gerakan Newton Pertama (Hukum Inersia) menyatakan bahawa sesuatu objek cenderung mengekalkan keadaan pegun atau gerakan seragamnya melainkan dikenakan daya luar. Tali pinggang keselamatan menahan inersia penumpang semasa roller coaster berhenti atau menukar arah secara mendadak.",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q05",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 5,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.1 Menyatakan Hukum Gerakan Newton Kedua",
    "spKod": "2.6.1",
    "rujukanDskp": "DSKP Fizik T4 ms 38",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 70-74",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 5",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.6 Daya",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut, yang manakah merupakan pernyataan bagi Hukum Gerakan Newton Ketiga?\nWhich of the following is a statement of Newton's Third Law of Motion?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Objek akan kekal pegun jika tiada daya luar bertindak\nAn object will remain at rest if no external force acts on it"
      },
      {
        "id": "B",
        "teks": "Daya berkadar terus dengan kadar perubahan momentum\nForce is directly proportional to the rate of change of momentum"
      },
      {
        "id": "C",
        "teks": "Bagi setiap daya tindakan, terdapat satu daya tindak balas yang sama magnitud tetapi bertentangan arah\nFor every action force, there is a reaction force of equal magnitude but opposite direction"
      },
      {
        "id": "D",
        "teks": "Jumlah momentum sebelum perlanggaran adalah sama dengan jumlah momentum selepas perlanggaran\nThe total momentum before the collision is equal to the total momentum after the collision"
      }
    ],
    "jawapan": "C",
    "penerangan": "Hukum Gerakan Newton Ketiga menyatakan bahawa bagi setiap daya tindakan terdapat daya tindak balas yang sama magnitud tetapi bertentangan arah (Action = -Reaction).",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q06",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 6,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.2 Menerangkan kesan ikut lajak ke atas magnitud impuls",
    "spKod": "2.7.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 67-69",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 5",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Dalam bidang sukan, seorang pemain bola sepak akan mengikut lajak ketika menendang bola. Apakah tujuan utama tindakan ini dilakukan?\nIn sports, a soccer player will follow-through while kicking the ball. What is the main purpose of this action?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Untuk mengelakkan kecederaan pada sendi lutut pemain\nTo prevent injuries to the players' knee joint"
      },
      {
        "id": "B",
        "teks": "Untuk memendekkan masa sentuhan antara kaki dan bola\nTo shorten the contact time between the foot and the ball"
      },
      {
        "id": "C",
        "teks": "Untuk mengurangkan daya impuls yang bertindak pada kaki\nTo reduce the impulsive force acting on the foot"
      },
      {
        "id": "D",
        "teks": "Untuk meningkatkan impuls supaya bola bergerak dengan halaju yang lebih tinggi\nTo increase the impulse so that the ball moves with a higher velocity"
      }
    ],
    "jawapan": "D",
    "penerangan": "Ikut lajak memanjangkan masa tindakan daya ke atas bola (t bertambah), seterusnya meningkatkan impuls (Ft = mv - mu), menyebabkan bola meninggalkan kaki dengan halaju yang lebih tinggi.",
    "markah": 1,
    "jawapanBetul": "D",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q07",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 7,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g dengan kekuatan medan graviti",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 42",
    "rujukanBukuTeks": "Buku Teks T4 Bab 3 ms 82-87",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newtonian",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Unit bagi kekuatan medan graviti adalah\nThe unit for gravitational field strength is",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "kg m s⁻¹"
      },
      {
        "id": "B",
        "teks": "kg m s⁻²"
      },
      {
        "id": "C",
        "teks": "N kg⁻¹"
      },
      {
        "id": "D",
        "teks": "N kg⁻²"
      }
    ],
    "jawapan": "C",
    "penerangan": "Kekuatan medan graviti ditakrifkan sebagai daya graviti per unit jisim (g = F / m), dengan unit SI N kg⁻¹ (bersamaan m s⁻²).",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q08",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 8,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan daya graviti sebagai daya semesta",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 42",
    "rujukanBukuTeks": "Buku Teks T4 Bab 3 ms 78-81",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newtonian",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Mengapakah daya graviti antara anda dengan rakan yang duduk di sebelah anda tidak dapat dirasai, sedangkan daya graviti antara Bumi dengan Bulan sangat kuat sehingga mempengaruhi pasang surut air laut?\nWhy is the gravitational force between you and the friend sitting next to you imperceptible, while the gravitational force between the Earth and the Moon is so strong that it affects the tides?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya graviti hanya wujud di ruang angkasa lepas\nGravitational force only exists in outer space"
      },
      {
        "id": "B",
        "teks": "Jisim manusia terlalu kecil menyebabkan magnitud daya graviti adalah sangat kecil\nThe human mass is too small, causing the value of gravitational force to be very small"
      },
      {
        "id": "C",
        "teks": "Jarak antara dua manusia adalah terlalu dekat untuk menghasilkan daya graviti\nThe distance between two humans is too close to produce gravitational force"
      },
      {
        "id": "D",
        "teks": "Nilai pemalar kegravitian, G, berubah mengikut jisim objek yang terlibat\nThe value of the gravitational constant, G, varies according to the mass of the object involved"
      }
    ],
    "jawapan": "B",
    "penerangan": "Daya graviti berkadar terus dengan hasil darab dua jisim (F = G m₁ m₂ / r²). Disebabkan jisim manusia sangat kecil berbanding jasad samawi seperti Bumi dan Bulan, magnitud daya graviti antara dua manusia adalah amat kecil dan tidak dapat dirasai.",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q09",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 9,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.3 Mengkonsepsikan halaju lepas, v = sqrt(2GM/r)",
    "spKod": "3.3.3",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newtonian",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Halaju lepas bagi sebuah planet adalah bergantung kepada\nThe escape velocity of a planet depends on",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "jejari planet\nthe radius of the planet"
      },
      {
        "id": "B",
        "teks": "jisim planet\nthe mass of the planet"
      },
      {
        "id": "C",
        "teks": "jejari planet dan jisim planet\nthe radius of the planet and the mass of the planet"
      },
      {
        "id": "D",
        "teks": "kekuatan medan graviti planet\nthe gravitational field strength of the planet"
      }
    ],
    "jawapan": "C",
    "penerangan": "Halaju lepas diberikan oleh rumus v = √(2GM / R), di mana M ialah jisim planet dan R ialah jejari planet. Oleh itu, ia bergantung kepada kedua-dua jejari dan jisim planet tersebut.",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q10",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 10,
    "sk": "SK 4.1 Keseimbangan Terma",
    "sp": "SP 4.1.2 Menerangkan prinsip kerja termometer cecair dalam kaca",
    "spKod": "4.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 52",
    "rujukanBukuTeks": "Buku Teks T4 Bab 4 ms 120-124",
    "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 4,
    "babNama": "Haba",
    "bidang": "Fizik Terma",
    "topik": "4.1 Keseimbangan Terma",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Mengapakah merkuri digunakan sebagai cecair dalam termometer?\nWhy is mercury used as a liquid in a thermometer?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Ketumpatannya yang rendah\nLow density"
      },
      {
        "id": "B",
        "teks": "Kebolehannya membasahi tiub kaca\nIts ability to wet glass tube"
      },
      {
        "id": "C",
        "teks": "Kebolehannya untuk mengembang dengan sekata\nIts ability to expand uniformly"
      },
      {
        "id": "D",
        "teks": "Takat didihnya yang sangat rendah\nIts very low boiling point"
      }
    ],
    "jawapan": "C",
    "penerangan": "Merkuri mengembang dan mengecut secara sekata mengikut perubahan suhu, tidak membasahi dinding kaca, legap dan mudah dilihat.",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q11",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 11,
    "sk": "SK 4.2 Muatan Haba Tentu",
    "sp": "SP 4.2.2 Menghubung kait muatan haba tentu dengan kenaikan suhu",
    "spKod": "4.2.2",
    "rujukanDskp": "DSKP Fizik T4 ms 54",
    "rujukanBukuTeks": "Buku Teks T4 Bab 4 ms 125-132",
    "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 4,
    "babNama": "Haba",
    "bidang": "Fizik Terma",
    "topik": "4.2 Muatan Haba Tentu",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 2 menunjukkan empat blok, P, Q, R dan S dengan muatan haba tentu yang berbeza tetapi mempunyai jisim dan suhu awal yang serupa, dipanaskan di atas dapur dengan jumlah tenaga haba yang sama.\nDiagram 2 shows four blocks, P, Q, R and S with different specific heat capacity but have the same mass and initial temperature, were heated on the stove by the same amount of heat energy.\n\nMuatan haba tentu, c:\nSpecific heat capacity, c:\nP = 850 J kg⁻¹ °C⁻¹\nQ = 550 J kg⁻¹ °C⁻¹\nR = 350 J kg⁻¹ °C⁻¹\nS = 150 J kg⁻¹ °C⁻¹\n\nBlok manakah yang akan mempunyai kenaikan suhu yang paling rendah selepas dipanaskan selama 5 minit?\nWhich block will have the lowest temperature increase after being heated for 5 minutes?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q11_rajah2.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "P"
      },
      {
        "id": "B",
        "teks": "Q"
      },
      {
        "id": "C",
        "teks": "R"
      },
      {
        "id": "D",
        "teks": "S"
      }
    ],
    "jawapan": "A",
    "penerangan": "Daripada rumus Q = mcΔθ, kenaikan suhu Δθ = Q / (mc). Kerana jisim m dan haba Q adalah sama, kenaikan suhu berkadar songsang dengan muatan haba tentu c. Blok P mempunyai nilai c paling tinggi (850 J kg⁻¹ °C⁻¹), maka ia mengalami kenaikan suhu paling rendah.",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q12",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 12,
    "sk": "SK 4.4 Hukum Gas",
    "sp": "SP 4.4.4 Menyelesaikan masalah gas melibatkan tekanan dan suhu (Hukum Gay-Lussac)",
    "spKod": "4.4.4",
    "rujukanDskp": "DSKP Fizik T4 ms 58",
    "rujukanBukuTeks": "Buku Teks T4 Bab 4 ms 158-164",
    "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 9",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 4,
    "babNama": "Haba",
    "bidang": "Fizik Terma",
    "topik": "4.4 Hukum Gas",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Tekanan udara dalam tayar van ialah 250 kPa pada suhu 30 °C. Berapakah tekanan dalam tayar tersebut pada suhu 38 °C?\n[Anggapkan isipadu udara dalam tayar adalah tetap]\n\nThe air pressure in a van tyre is 250 kPa at a temperature of 30 °C. What is the air pressure in the tyre when the temperature is 38 °C?\n[Assume that the volume of the air in the tyre is constant]",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "197.37 kPa"
      },
      {
        "id": "B",
        "teks": "243.57 kPa"
      },
      {
        "id": "C",
        "teks": "256.60 kPa"
      },
      {
        "id": "D",
        "teks": "316.67 kPa"
      }
    ],
    "jawapan": "C",
    "penerangan": "Hukum Gay-Lussac (V malar): P₁ / T₁ = P₂ / T₂.\nT₁ = 30 + 273 = 303 K, T₂ = 38 + 273 = 311 K.\nP₂ = P₁ × (T₂ / T₁) = 250 × (311 / 303) = 256.60 kPa.",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q13",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 13,
    "sk": "SK 5.1 Asas Gelombang",
    "sp": "SP 5.1.3 Mendefinisikan amplitud, tempoh, frekuensi, dan panjang gelombang",
    "spKod": "5.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 64",
    "rujukanBukuTeks": "Buku Teks T4 Bab 5 ms 172-180",
    "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 5,
    "babNama": "Gelombang",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "5.1 Asas Gelombang",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah 3 menunjukkan suatu graf perambatan gelombang.\nDiagram 3 shows a graph of wave propagation.\n\nApakah kuantiti fizik yang ditunjukkan oleh T dan U?\nWhat physical quantities are shown by T and U?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q13_rajah3.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "T: Panjang gelombang / Wavelength, U: Tempoh / Period"
      },
      {
        "id": "B",
        "teks": "T: Panjang gelombang / Wavelength, U: Frekuensi / Frequency"
      },
      {
        "id": "C",
        "teks": "T: Amplitud / Amplitude, U: Tempoh / Period"
      },
      {
        "id": "D",
        "teks": "T: Amplitud / Amplitude, U: Panjang gelombang / Wavelength"
      }
    ],
    "jawapan": "D",
    "penerangan": "Pada graf sesaran melawan jarak: sesaran maksimum T mewakili Amplitud, dan jarak antara dua puncak berturutan U mewakili Panjang gelombang (λ).",
    "markah": 1,
    "jawapanBetul": "D",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q14",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 14,
    "sk": "SK 5.3 Pantulan Gelombang",
    "sp": "SP 5.3.3 Menyelesaikan masalah melibatkan pantulan gelombang",
    "spKod": "5.3.3",
    "rujukanDskp": "DSKP Fizik T4 ms 68",
    "rujukanBukuTeks": "Buku Teks T4 Bab 5 ms 188-193",
    "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 5,
    "babNama": "Gelombang",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "5.3 Pantulan Gelombang",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebuah sistem radar memancarkan isyarat ke arah sebuah kapal terbang.\nHalaju isyarat itu ialah 3.0 × 10⁸ m s⁻¹.\nSelepas 5.0 × 10⁻² s, sistem radar itu mengesan isyarat yang dipantulkan.\nBerapakah jarak kapal terbang itu daripada sistem radar?\n\nA radar system transmits a signal towards an airplane.\nThe velocity of the signal is 3.0 × 10⁸ m s⁻¹.\nAfter 5.0 × 10⁻² s the radar system detects the reflected signal.\nWhat is the distance of the airplane from the radar system?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "3.75 × 10⁶ m"
      },
      {
        "id": "B",
        "teks": "7.50 × 10⁶ m"
      },
      {
        "id": "C",
        "teks": "15.00 × 10⁶ m"
      },
      {
        "id": "D",
        "teks": "6.00 × 10⁹ m"
      }
    ],
    "jawapan": "B",
    "penerangan": "Jarak pergi-balik 2d = v × t.\nd = (v × t) / 2 = (3.0 × 10⁸ m s⁻¹ × 5.0 × 10⁻² s) / 2 = (1.5 × 10⁷) / 2 = 7.50 × 10⁶ m.",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q15",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 15,
    "sk": "SK 5.4 Pembiasan Gelombang",
    "sp": "SP 5.4.1 Menghuraikan pembiasan gelombang dari pelbagai aspek",
    "spKod": "5.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 70",
    "rujukanBukuTeks": "Buku Teks T4 Bab 5 ms 194-201",
    "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 4",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 5,
    "babNama": "Gelombang",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "5.4 Pembiasan Gelombang",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 4 menunjukkan satu gelombang air yang sedang bergerak dari kawasan dalam ke kawasan cetek.\nDiagram 4 shows water waves moving from deep region to a shallow region.\n\nYang manakah antara berikut akan berlaku apabila gelombang memasuki kawasan cetek?\nWhich of the following will happen when waves entering the shallow region?\nI Laju gelombang berkurang / The wave speed decreases\nII Frekuensi gelombang berkurang / The wave frequency decreases\nIII Panjang gelombang berkurang / The wavelength decreases\nIV Arah pergerakan membengkok mendekati garis normal / The direction of movement bends towards the normal line",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q15_rajah4.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II sahaja / I and II only"
      },
      {
        "id": "B",
        "teks": "III dan IV sahaja / III and IV only"
      },
      {
        "id": "C",
        "teks": "I, III dan IV sahaja / I, III and IV only"
      },
      {
        "id": "D",
        "teks": "I, II, III dan IV / I, II, III and IV"
      }
    ],
    "jawapan": "C",
    "penerangan": "Apabila gelombang air merambat dari kawasan dalam ke kawasan cetek: laju v berkurang, panjang gelombang λ berkurang, arah membengkok mendekati garis normal. Frekuensi f tidak berubah kerana ia ditentukan oleh punca getaran gelombang. Maka pernyataan I, III dan IV adalah benar.",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q16",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 16,
    "sk": "SK 5.5 Pembelauan Gelombang",
    "sp": "SP 5.5.1 Menghuraikan pembelauan gelombang",
    "spKod": "5.5.1",
    "rujukanDskp": "DSKP Fizik T4 ms 72",
    "rujukanBukuTeks": "Buku Teks T4 Bab 5 ms 202-208",
    "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 5",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 5,
    "babNama": "Gelombang",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "5.5 Pembelauan Gelombang",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Syamil yang berada di dalam sebuah bilik dengan pintu tertutup boleh mendengar bunyi muzik dari televisyen di ruang tamu. Situasi ini disebabkan oleh\nSyamil who is in a room with a closed door can hear the sound of music from the television in the living room. This situation is caused by",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Pantulan / Reflection"
      },
      {
        "id": "B",
        "teks": "Pembiasan / Refraction"
      },
      {
        "id": "C",
        "teks": "Pembelauan / Diffraction"
      },
      {
        "id": "D",
        "teks": "Interferens / Interference"
      }
    ],
    "jawapan": "C",
    "penerangan": "Gelombang bunyi membengkok dan membelau melalui celah di bawah pintu bilik kerana saiz celah adalah setanding dengan panjang gelombang bunyi (fenomena pembelauan).",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q17",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 17,
    "sk": "SK 5.6 Interferens Gelombang",
    "sp": "SP 5.6.1 Menghuraikan prinsip superposisi dan interferens memusnah",
    "spKod": "5.6.1",
    "rujukanDskp": "DSKP Fizik T4 ms 74",
    "rujukanBukuTeks": "Buku Teks T4 Bab 5 ms 210-218",
    "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 5,
    "babNama": "Gelombang",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "5.6 Interferens Gelombang",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah manakah menunjukkan interferens memusnah akan berlaku apabila gelombang-gelombang itu bertemu?\nWhich diagram shows destructive interference occur when the waves meet?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q17_opt_a.webp?v=20260921_v2\" style=\"max-height:90px; border-radius:4px;\" alt=\"Rajah A\"></div>"
      },
      {
        "id": "B",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q17_opt_b.webp?v=20260921_v2\" style=\"max-height:90px; border-radius:4px;\" alt=\"Rajah B\"></div>"
      },
      {
        "id": "C",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q17_opt_c.webp?v=20260921_v2\" style=\"max-height:90px; border-radius:4px;\" alt=\"Rajah C\"></div>"
      },
      {
        "id": "D",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q17_opt_d.webp?v=20260921_v2\" style=\"max-height:90px; border-radius:4px;\" alt=\"Rajah D\"></div>"
      }
    ],
    "jawapan": "A",
    "penerangan": "Interferens memusnah berlaku apabila satu puncak gelombang bertemu dengan satu lembangan gelombang (sesaran bertentangan tanda saling membatalkan menghasilkan sesaran sifar), seperti ditunjukkan dalam Rajah A.",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q18",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 18,
    "sk": "SK 6.2 Pantulan Dalam Penuh",
    "sp": "SP 6.2.1 Menerangkan sudut genting dan pantulan dalam penuh",
    "spKod": "6.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 82",
    "rujukanBukuTeks": "Buku Teks T4 Bab 6 ms 242-248",
    "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 6,
    "babNama": "Cahaya dan Optik",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "6.2 Pantulan Dalam Penuh",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 5 menunjukkan lintasan cahaya dari P ke O.\nDiberi sudut genting air ialah 48°. Jika θ = 48°, lintasan cahaya manakah yang betul selepas melalui titik O?\n\nDiagram 5 shows the path of light from P to O.\nGiven the critical angle of water is 48°. If θ = 48°, which is the correct path of light after passing through point O?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q18_rajah5.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "OR"
      },
      {
        "id": "B",
        "teks": "OS"
      },
      {
        "id": "C",
        "teks": "OT"
      },
      {
        "id": "D",
        "teks": "OU"
      }
    ],
    "jawapan": "B",
    "penerangan": "Apabila sudut tuju dalam medium lebih tumpat adalah sama dengan sudut genting (θ = c = 48°), sinar biasan akan terbias sepanjang sempadan antara dua medium pada sudut biasan 90°, iaitu mengikut lintasan OS.",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q19",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 19,
    "sk": "SK 5.4 Pembiasan Gelombang",
    "sp": "SP 5.4.1 Menghuraikan pembiasan gelombang",
    "spKod": "5.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 70",
    "rujukanBukuTeks": "Buku Teks T4 Bab 5 ms 194-201",
    "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 4",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 5,
    "babNama": "Gelombang",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "5.4 Pembiasan Gelombang",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah 6 menunjukkan perambatan gelombang air dari kawasan dalam ke kawasan cetek.\nNyatakan fenomena gelombang yang berlaku.\n\nDiagram 6 shows propagation of water waves from deep region to shallow region.\nState the wave phenomenon that occurs.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q19_rajah6.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pantulan / Reflection"
      },
      {
        "id": "B",
        "teks": "Pembiasan / Refraction"
      },
      {
        "id": "C",
        "teks": "Pembelauan / Diffraction"
      },
      {
        "id": "D",
        "teks": "Interferens / Interference"
      }
    ],
    "jawapan": "B",
    "penerangan": "Perubahan arah perambatan dan panjang gelombang air apabila merambat merentasi kawasan berbeza kedalaman (dalam ke cetek) ialah fenomena Pembiasan gelombang.",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q20",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 20,
    "sk": "SK 6.3 Pembentukan Imej oleh Kanta",
    "sp": "SP 6.3.2 Menentukan ciri-ciri imej kanta cembung bagi pelbagai jarak objek",
    "spKod": "6.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 84",
    "rujukanBukuTeks": "Buku Teks T4 Bab 6 ms 251-260",
    "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 5",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 6,
    "babNama": "Cahaya dan Optik",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "6.3 Pembentukan Imej oleh Kanta",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Seorang murid menggunakan kanta cembung sebagai kanta pembesar untuk menghasilkan imej seekor semut yang maya, tegak dan dibesarkan. Dimanakah kedudukan objek, u, yang paling sesuai untuk situasi ini?\n\nA student uses a convex lens as a magnifying glass to produce an image of an ant which is virtual, upright and magnified. Where is the position of the object, u, that is most suitable for this situation?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "u < f"
      },
      {
        "id": "B",
        "teks": "u = f"
      },
      {
        "id": "C",
        "teks": "f < u < 2f"
      },
      {
        "id": "D",
        "teks": "u > 2f"
      }
    ],
    "jawapan": "A",
    "penerangan": "Bagi bertindak sebagai kanta pembesar, objek mesti diletakkan pada jarak objek yang lebih pendek daripada panjang fokus kanta (u < f). Ini menghasilkan imej yang maya, tegak dan dibesarkan.",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q21",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 21,
    "sk": "SK 1.1 Daya Paduan",
    "sp": "SP 1.1.2 Menentukan daya paduan bagi dua daya yang berserenjang",
    "spKod": "1.1.2",
    "rujukanDskp": "DSKP Fizik T5 ms 26",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 2-12",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.1 Daya Paduan",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 7 menunjukkan suatu objek ditarik oleh dua daya serentak, iaitu daya 90 N ke arah timur dan daya 120 N ke arah utara.\nHitungkan daya paduan yang bertindak ke atas objek tersebut.\n\nDiagram 7 shows an object is pulled by two simultaneous forces, 90 N towards the east and 120 N towards the north.\nCalculate the resultant force acting on the object.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q21_rajah7.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "100 N"
      },
      {
        "id": "B",
        "teks": "105 N"
      },
      {
        "id": "C",
        "teks": "150 N"
      },
      {
        "id": "D",
        "teks": "210 N"
      }
    ],
    "jawapan": "C",
    "penerangan": "Dua daya berserenjang (90°): Daya paduan F_R = √(90² + 120²) = √(8100 + 14400) = √22500 = 150 N.",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q22",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 22,
    "sk": "SK 1.2 Leraian Daya",
    "sp": "SP 1.2.1 Menghuraikan leraian daya",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T5 ms 28",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 13-17",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.2 Leraian Daya",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut, yang manakah merupakan definisi bagi leraian daya?\nWhich of the following is the definition of force resolution?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Proses menggabungkan dua daya menjadi satu daya paduan\nThe process of combining two forces into a single resultant force"
      },
      {
        "id": "B",
        "teks": "Proses meleraikan satu daya tunggal kepada dua komponen daya\nThe process of resolving a single force into two component forces"
      },
      {
        "id": "C",
        "teks": "Satu daya tunggal yang mewakili jumlah vektor bagi dua atau lebih daya\nA single force that represents the vector sum of two or more forces"
      },
      {
        "id": "D",
        "teks": "Keadaan di mana daya paduan yang bertindak ke atas objek adalah sifar\nThe condition in which the resultant force acting on an object is zero"
      }
    ],
    "jawapan": "B",
    "penerangan": "Leraian daya ialah proses meleraikan satu daya tunggal kepada dua atau lebih komponen daya, biasanya komponen mengufuk dan menegak yang berserenjang.",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q23",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 23,
    "sk": "SK 1.4 Kekenyalan",
    "sp": "SP 1.4.3 Membandingkan pemanjangan spring bagi pelbagai susunan",
    "spKod": "1.4.3",
    "rujukanDskp": "DSKP Fizik T5 ms 32",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 24-31",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 4",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.4 Kekenyalan",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 8 menunjukkan tiga susunan spring R, S dan T. Semua spring yang digunakan adalah serupa.\nDiagram 8 shows three spring arrangements R, S and T. All springs used are identical.\n\nPerbandingan bagi pemanjangan sistem spring R, S dan T manakah yang betul apabila beban 1 kg digantungkan?\nWhich comparison of the length of spring system R, S and T is correct when a load of 1 kg is hung?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q23_rajah8.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "R > S > T"
      },
      {
        "id": "B",
        "teks": "T > R > S"
      },
      {
        "id": "C",
        "teks": "R > T > S"
      },
      {
        "id": "D",
        "teks": "T > S > R"
      }
    ],
    "jawapan": "A",
    "penerangan": "Berdasarkan susunan spring serupa dalam Rajah 8: Susunan R (spring bersiri) mempunyai pemanjangan paling besar, diikuti susunan S, dan susunan T mempunyai pemanjangan terkecil (R > S > T).",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q24",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 24,
    "sk": "SK 2.2 Tekanan Atmosfera",
    "sp": "SP 2.2.1 Menghuraikan tekanan atmosfera",
    "spKod": "2.2.1",
    "rujukanDskp": "DSKP Fizik T5 ms 36",
    "rujukanBukuTeks": "Buku Teks T5 Bab 2 ms 45-53",
    "rujukanCheatnote": "Cheatnote T5 Bab 2 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 2,
    "babNama": "Tekanan",
    "bidang": "Fizik Gunaan",
    "topik": "2.2 Tekanan Atmosfera",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Antara pernyataan berikut, yang manakah adalah benar bagi menerangkan tekanan atmosfera?\nWhich of the following statements is true to explain atmospheric pressure?\nI Dipengaruhi oleh berat lapisan udara di atmosfera bumi / Influenced by the weight of the air layer in the Earth's atmosphere\nII Tekanan semakin berkurang apabila altitud meningkat / Pressure decreases as altitude increases\nIII Tekanan atmosfera di puncak gunung adalah lebih tinggi berbanding di aras laut / Atmospheric pressure at the top of a mountain is higher than at sea level\nIV Tekanan atmosfera hanya bertindak dari arah atas ke bawah / Atmospheric pressure only acts from top to bottom",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II sahaja / I and II only"
      },
      {
        "id": "B",
        "teks": "III dan IV sahaja / III and IV only"
      },
      {
        "id": "C",
        "teks": "I, III dan IV sahaja / I, III and IV only"
      },
      {
        "id": "D",
        "teks": "I, II, III dan IV / I, II, III and IV"
      }
    ],
    "jawapan": "A",
    "penerangan": "Pernyataan I adalah benar (disebabkan oleh berat turus udara di atas). Pernyataan II adalah benar (ketumpatan dan ketebalan udara berkurang dengan altitud). Pernyataan III salah (di puncak gunung tekanan lebih rendah). Pernyataan IV salah (tekanan bendalir bertindak ke semua arah secara seragam). Maka hanya I dan II benar.",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q25",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 25,
    "sk": "SK 2.3 Tekanan Gas",
    "sp": "SP 2.3.1 Menerangkan tekanan gas menggunakan teori kinetik jirim",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T5 ms 38",
    "rujukanBukuTeks": "Buku Teks T5 Bab 2 ms 54-59",
    "rujukanCheatnote": "Cheatnote T5 Bab 2 ms 3",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 2,
    "babNama": "Tekanan",
    "bidang": "Fizik Gunaan",
    "topik": "2.3 Tekanan Gas",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Tekanan gas yang terhasil di dalam sebuah bekas yang tertutup dapat dijelaskan oleh\nThe pressure of a gas produced in a closed container can be explained by",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Gas / Gas Law"
      },
      {
        "id": "B",
        "teks": "Prinsip Bernoulli / Bernoulli's Principle"
      },
      {
        "id": "C",
        "teks": "Teori Kinetik Jirim / Kinetic Theory of Molecule"
      },
      {
        "id": "D",
        "teks": "Hukum Kegravitian Semesta Newton / Newton's Universal Law of Gravitation"
      }
    ],
    "jawapan": "C",
    "penerangan": "Teori Kinetik Jirim menerangkan bahawa zarah-zarah gas bergerak secara rawak dan berlanggar dengan dinding bekas. Perubahan momentum semasa perlanggaran menghasilkan daya impuls pada dinding bekas per unit luas, iaitu tekanan gas.",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q26",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 26,
    "sk": "SK 2.4 Prinsip Pascal",
    "sp": "SP 2.4.1 Menerangkan prinsip pemindahan tekanan dalam cecair",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T5 ms 40",
    "rujukanBukuTeks": "Buku Teks T5 Bab 2 ms 60-65",
    "rujukanCheatnote": "Cheatnote T5 Bab 2 ms 4",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 2,
    "babNama": "Tekanan",
    "bidang": "Fizik Gunaan",
    "topik": "2.4 Prinsip Pascal",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 9 menunjukkan satu sistem hidraulik ringkas yang tertutup dimana daya, F₁ dikenakan ke atas omboh kecil menghasilkan tekanan, P₁.\nTekanan, P₁ dipindahkan ke omboh besar menghasilkan tekanan, P₂ dan daya, F₂.\nPerbandingan yang manakah adalah betul?\n\nDiagram 9 shows a simple closed hydraulic system where a force, F₁ is applied to a small piston producing a pressure, P₁.\nThe pressure, P₁ is transferred to a large piston producing a pressure, P₂ and a force, F₂.\nWhich comparison is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q26_rajah9.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "F₁ = F₂"
      },
      {
        "id": "B",
        "teks": "P₁ = P₂"
      },
      {
        "id": "C",
        "teks": "F₁ > F₂"
      },
      {
        "id": "D",
        "teks": "P₁ > P₂"
      }
    ],
    "jawapan": "B",
    "penerangan": "Menurut Prinsip Pascal, tekanan yang dikenakan ke atas suatu cecair tertutup akan dipindahkan secara seragam ke seluruh bahagian cecair tersebut. Oleh itu, tekanan pada kedua-dua omboh adalah sama, P₁ = P₂.",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q27",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 27,
    "sk": "SK 2.5 Prinsip Archimedes",
    "sp": "SP 2.5.2 Mengaplikasi prinsip Archimedes bagi objek yang terapung",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T5 ms 42",
    "rujukanBukuTeks": "Buku Teks T5 Bab 2 ms 66-73",
    "rujukanCheatnote": "Cheatnote T5 Bab 2 ms 5",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 2,
    "babNama": "Tekanan",
    "bidang": "Fizik Gunaan",
    "topik": "2.5 Prinsip Archimedes",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 10 menunjukkan bongkah ais terapung di permukaan laut.\nAntara pernyataan berikut, yang manakah betul?\n\nDiagram 10 shows an iceberg floating on the surface of the sea.\nWhich of the following statements is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q27_rajah10.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Berat bongkah ais = Berat air laut tersesar\nWeight of ice block = Weight of seawater displaced"
      },
      {
        "id": "B",
        "teks": "Isipadu bongkah ais = Isipadu air laut tersesar\nVolume of ice block = Volume of seawater displaced"
      },
      {
        "id": "C",
        "teks": "Ketumpatan bongkah ais = Ketumpatan air laut tersesar\nDensity of ice block = Density of seawater displaced"
      },
      {
        "id": "D",
        "teks": "Jisim bongkah ais = Jisim keseluruhan air laut\nMass of ice block = Mass of total seawater"
      }
    ],
    "jawapan": "A",
    "penerangan": "Menurut Prinsip Keapungan, objek yang terapung dalam keadaan keseimbangan mempunyai daya apungan yang sama dengan berat objek itu sendiri. Kerana daya apungan = berat bendalir tersesar, maka Berat bongkah ais = Berat air laut tersesar.",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q28",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 28,
    "sk": "SK 2.6 Prinsip Bernoulli",
    "sp": "SP 2.6.1 Menghuraikan kesan Bernoulli dalam situasi harian",
    "spKod": "2.6.1",
    "rujukanDskp": "DSKP Fizik T5 ms 44",
    "rujukanBukuTeks": "Buku Teks T5 Bab 2 ms 74-81",
    "rujukanCheatnote": "Cheatnote T5 Bab 2 ms 6",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 2,
    "babNama": "Tekanan",
    "bidang": "Fizik Gunaan",
    "topik": "2.6 Prinsip Bernoulli",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 11 menunjukkan seorang murid meniup dengan kuat di antara dua nyalaan lilin.\nMengapakah nyalaan lilin itu mendekati antara satu sama lain apabila ditiup?\n\nDiagram 11 shows a student blowing strongly between two candle flames.\nWhy do the candle flames come closer to each other when being blown?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q28_rajah11.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Suhu di antara nyalaan lilin menjadi rendah\nTemperature between the candle flames becomes low"
      },
      {
        "id": "B",
        "teks": "Wujud kawasan vakum di antara nyalaan lilin\nExist a vacuum area between the candle flames"
      },
      {
        "id": "C",
        "teks": "Tekanan di antara nyalaan lilin menjadi rendah\nPressure between the candle flames becomes low"
      },
      {
        "id": "D",
        "teks": "Udara panas di bahagian bawah lilin naik ke atas\nHot air in the bottom of the candles rises"
      }
    ],
    "jawapan": "C",
    "penerangan": "Menurut Prinsip Bernoulli, halaju udara yang tinggi di antara dua lilin menghasilkan kawasan bertekanan rendah. Tekanan atmosfera di bahagian luar yang lebih tinggi menghasilkan daya paduan yang menolak kedua-dua nyalaan lilin ke arah tengah (mendekati satu sama lain).",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q29",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 29,
    "sk": "SK 3.2 Rintangan",
    "sp": "SP 3.2.3 Menyelesaikan masalah melibatkan litar elektrik gabungan",
    "spKod": "3.2.3",
    "rujukanDskp": "DSKP Fizik T5 ms 50",
    "rujukanBukuTeks": "Buku Teks T5 Bab 3 ms 98-106",
    "rujukanCheatnote": "Cheatnote T5 Bab 3 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 3,
    "babNama": "Elektrik",
    "bidang": "Keelektrikan dan Keelektromagnetan",
    "topik": "3.2 Rintangan",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 12 menunjukkan suatu litar lengkap.\nBacaan voltmeter adalah 4 V. Berapakah nilai arus yang mengalir melalui perintang R?\n\nDiagram 12 shows a complete electrical circuit.\nThe voltmeter reading is 4 V. What is the value of the current flowing through the resistor R?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q29_rajah12.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "1.0 A"
      },
      {
        "id": "B",
        "teks": "3.0 A"
      },
      {
        "id": "C",
        "teks": "2.0 A"
      },
      {
        "id": "D",
        "teks": "4.0 A"
      }
    ],
    "jawapan": "C",
    "penerangan": "Voltmeter disambung merentasi perintang 2 Ω dan mencatatkan bacaan 4 V. Mengikut Hukum Ohm, arus yang mengalir dalam litar siri tersebut ialah I = V / R = 4 V / 2 Ω = 2.0 A. Dalam litar bersiri, arus yang sama 2.0 A mengalir melalui perintang R.",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q30",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 30,
    "sk": "SK 3.3 Daya Gerak Elektrik (d.g.e.) dan Rintangan Dalam",
    "sp": "SP 3.3.2 Menentukan d.g.e. dan rintangan dalam daripada graf V melawan I",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T5 ms 52",
    "rujukanBukuTeks": "Buku Teks T5 Bab 3 ms 114-121",
    "rujukanCheatnote": "Cheatnote T5 Bab 3 ms 4",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 3,
    "babNama": "Elektrik",
    "bidang": "Keelektrikan dan Keelektromagnetan",
    "topik": "3.3 Daya Gerak Elektrik dan Rintangan Dalam",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 13 menunjukkan graf V melawan I bagi suatu eksperimen elektrik.\nGraf berkecerunan negatif pada Rajah 13 mewakili\n\nDiagram 13 shows a graph of V against I for an electrical experiment.\nNegative gradient of the graph in Diagram 13 represents",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q30_rajah13.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "arus elektrik / electric current"
      },
      {
        "id": "B",
        "teks": "daya gerak elektrik / electromotive force"
      },
      {
        "id": "C",
        "teks": "beza keupayaan / potential difference"
      },
      {
        "id": "D",
        "teks": "rintangan dalam / internal resistance"
      }
    ],
    "jawapan": "D",
    "penerangan": "Persamaan litar elektrik bagi sel ialah V = E - Ir, atau V = -rI + E. Kecerunan graf V melawan I ialah -r. Oleh itu, nilai magnitud kecerunan negatif tersebut mewakili rintangan dalam (r) sel itu.",
    "markah": 1,
    "jawapanBetul": "D",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q31",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 31,
    "sk": "SK 4.1 Daya ke atas Konduktor Pembawa Arus dalam Medan Magnet",
    "sp": "SP 4.1.2 Menerangkan corak medan magnet paduan (medan lastik)",
    "spKod": "4.1.2",
    "rujukanDskp": "DSKP Fizik T5 ms 56",
    "rujukanBukuTeks": "Buku Teks T5 Bab 4 ms 136-144",
    "rujukanCheatnote": "Cheatnote T5 Bab 4 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 4,
    "babNama": "Keelektromagnetan",
    "bidang": "Keelektrikan dan Keelektromagnetan",
    "topik": "4.1 Daya ke atas Konduktor Pembawa Arus",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 14 menunjukkan suatu gegelung pembawa arus diletakkan dalam medan magnet kekal.\nDiagram 14 shows a current-carrying coil placed in a permanent magnetic field.\n\nAntara rajah berikut yang manakah menunjukkan corak medan lastik yang betul?\nWhich of the following diagrams shows the correct pattern of a catapult field?\n\n<div style='margin-top: 10px; text-align: center;'><img src='https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q31_options.webp' style='max-width: 100%; height: auto; border-radius: 4px; border: 1px solid #cbd5e1;' alt='Corak Medan Lastik Pilihan A, B, C, D'></div>",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q31_rajah14.webp?v=20260921_v2",
    "rajahUrlPilihan": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q31_options.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q31_opt_a.webp?v=20260921_v2\" style=\"max-height:100px; border-radius:4px;\" alt=\"Corak A\"></div>"
      },
      {
        "id": "B",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q31_opt_b.webp?v=20260921_v2\" style=\"max-height:100px; border-radius:4px;\" alt=\"Corak B\"></div>"
      },
      {
        "id": "C",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q31_opt_c.webp?v=20260921_v2\" style=\"max-height:100px; border-radius:4px;\" alt=\"Corak C\"></div>"
      },
      {
        "id": "D",
        "teks": "<div style=\"text-align:center;\"><img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q31_opt_d.webp?v=20260921_v2\" style=\"max-height:100px; border-radius:4px;\" alt=\"Corak D\"></div>"
      }
    ],
    "jawapan": "A",
    "penerangan": "Menggunakan Petua Tangan Kanan untuk menentukan arah medan magnet bulat di sekeliling konduktor bersama medan magnet kekal dari U ke S menghasilkan corak medan lastik yang betul seperti dalam Rajah A.",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q32",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 32,
    "sk": "SK 4.2 Aruhan Elektromagnet",
    "sp": "SP 4.2.2 Menghuraikan faktor yang mempengaruhi magnitud d.g.e. aruhan",
    "spKod": "4.2.2",
    "rujukanDskp": "DSKP Fizik T5 ms 58",
    "rujukanBukuTeks": "Buku Teks T5 Bab 4 ms 152-160",
    "rujukanCheatnote": "Cheatnote T5 Bab 4 ms 3",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 4,
    "babNama": "Keelektromagnetan",
    "bidang": "Keelektrikan dan Keelektromagnetan",
    "topik": "4.2 Aruhan Elektromagnet",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 15 menunjukkan magnet bar bergerak ke arah solenoid.\nTindakan manakah akan menambah pesongan jarum galvanometer?\n\nDiagram 15 shows a bar magnet moving towards the solenoid.\nWhich action will increase the deflection of the galvanometer needle?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q32_rajah15.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Menukar kutub magnet / Changing the magnet pole"
      },
      {
        "id": "B",
        "teks": "Mengurangkan bilangan lilitan solenoid / Decreasing the number of turns of the solenoid"
      },
      {
        "id": "C",
        "teks": "Mengurangkan bilangan magnet / Decreasing the number of magnets"
      },
      {
        "id": "D",
        "teks": "Menggerakkan magnet bar lebih laju / Moving the bar magnet faster"
      }
    ],
    "jawapan": "D",
    "penerangan": "Menurut Hukum Faraday, magnitud d.g.e. aruhan (dan pesongan jarum galvanometer) berkadar terus dengan kadar pemotongan garis fluks magnet. Menggerakkan magnet bar lebih laju meningkatkan kadar pemotongan fluks magnet.",
    "markah": 1,
    "jawapanBetul": "D",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q33",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 33,
    "sk": "SK 5.1 Elektron",
    "sp": "SP 5.1.1 Menerangkan pancaran termion dan faktor yang mempengaruhinya",
    "spKod": "5.1.1",
    "rujukanDskp": "DSKP Fizik T5 ms 64",
    "rujukanBukuTeks": "Buku Teks T5 Bab 5 ms 174-179",
    "rujukanCheatnote": "Cheatnote T5 Bab 5 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 5,
    "babNama": "Elektronik",
    "bidang": "Fizik Gunaan",
    "topik": "5.1 Elektron",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Kadar pancaran termion bertambah apabila\nThe rate of the thermionic emission increases when",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "logam itu disambungkan ke suatu bekalan kuasa bervoltan rendah\nthe metal is connected to a low voltage power supply"
      },
      {
        "id": "B",
        "teks": "muatan haba tentu logam bertambah\nthe specific heat capacity of the metal increases"
      },
      {
        "id": "C",
        "teks": "luas permukaan logam berkurang\nthe surface area of the metal decreases"
      },
      {
        "id": "D",
        "teks": "suhu logam bertambah\nthe temperature of the metal increases"
      }
    ],
    "jawapan": "D",
    "penerangan": "Pancaran termion ialah proses pembebasan elektron dari permukaan logam yang dipanaskan. Kadar pancaran termion bertambah apabila suhu logam bertambah kerana elektron memperoleh lebih banyak tenaga kinetik untuk mengatasi fungsi kerja logam.",
    "markah": 1,
    "jawapanBetul": "D",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q34",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 34,
    "sk": "SK 5.2 Diod Semikonduktor",
    "sp": "SP 5.2.1 Menghuraikan fungsi diod semikonduktor",
    "spKod": "5.2.1",
    "rujukanDskp": "DSKP Fizik T5 ms 66",
    "rujukanBukuTeks": "Buku Teks T5 Bab 5 ms 180-186",
    "rujukanCheatnote": "Cheatnote T5 Bab 5 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 5,
    "babNama": "Elektronik",
    "bidang": "Fizik Gunaan",
    "topik": "5.2 Diod Semikonduktor",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah 16 menunjukkan simbol bagi komponen elektronik.\nApakah fungsi komponen elektronik yang ditunjukkan dalam Rajah 16?\n\nDiagram 16 shows a symbol of an electronic component.\nWhat is the function of the electronic component shown in Diagram 16?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q34_rajah16.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Menyimpan cas elektrik / Store electric charge"
      },
      {
        "id": "B",
        "teks": "Bertindak sebagai suis automatik / Acts as an automatic switch"
      },
      {
        "id": "C",
        "teks": "Memutuskan litar bila arus berlebihan mengalir / Switch off the circuit when excess current flow"
      },
      {
        "id": "D",
        "teks": "Membenarkan arus mengalir dalam satu arah sahaja / Allows the current to flow in one direction only"
      }
    ],
    "jawapan": "D",
    "penerangan": "Komponen tersebut ialah diod semikonduktor p-n, yang mempunyai sifat membenarkan arus elektrik mengalir dalam satu arah sahaja (semasa pincang depan) dan menghalang pengaliran arus pada arah bertentangan (pincang songsang).",
    "markah": 1,
    "jawapanBetul": "D",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q35",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 35,
    "sk": "SK 5.3 Transistor",
    "sp": "SP 5.3.2 Menghuraikan fungsi transistor sebagai suis automatik",
    "spKod": "5.3.2",
    "rujukanDskp": "DSKP Fizik T5 ms 68",
    "rujukanBukuTeks": "Buku Teks T5 Bab 5 ms 187-195",
    "rujukanCheatnote": "Cheatnote T5 Bab 5 ms 3",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 5,
    "babNama": "Elektronik",
    "bidang": "Fizik Gunaan",
    "topik": "5.3 Transistor",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 17 menunjukkan sebuah litar lampu automatik.\nPasangan manakah yang benar menerangkan situasi dalam Rajah 17?\n\nDiagram 17 shows an automatic lamp circuit.\nWhich pair correctly describes the situation shown in Diagram 17?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q35_rajah17.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Persekitaran: Gelap | Rintangan PPC: Rendah | Lampu: Tidak menyala\nSurrounding: Dark | Resistance of LDR: Low | Lamp: Does not light up"
      },
      {
        "id": "B",
        "teks": "Persekitaran: Gelap | Rintangan PPC: Tinggi | Lampu: Menyala\nSurrounding: Dark | Resistance of LDR: High | Lamp: Light up"
      },
      {
        "id": "C",
        "teks": "Persekitaran: Cerah | Rintangan PPC: Tinggi | Lampu: Tidak menyala\nSurrounding: Bright | Resistance of LDR: High | Lamp: Does not light up"
      },
      {
        "id": "D",
        "teks": "Persekitaran: Cerah | Rintangan PPC: Rendah | Lampu: Menyala\nSurrounding: Bright | Resistance of LDR: Low | Lamp: Light up"
      }
    ],
    "jawapan": "B",
    "penerangan": "Dalam keadaan gelap, rintangan PPC (Perintang Peka Cahaya / LDR) adalah sangat tinggi. Ini menyebabkan voltan tapak V_be meningkat melebihi voltan simpang minimum (~0.7 V), menghidupkan transistor (arus pengumpul I_c mengalir), dan lampu menyala.",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q36",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 36,
    "sk": "SK 6.1 Reputan Radioaktif",
    "sp": "SP 6.1.2 Menulis persamaan reputan radioaktif bagi pereputan alfa, beta dan gama",
    "spKod": "6.1.2",
    "rujukanDskp": "DSKP Fizik T5 ms 74",
    "rujukanBukuTeks": "Buku Teks T5 Bab 6 ms 200-209",
    "rujukanCheatnote": "Cheatnote T5 Bab 6 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 6,
    "babNama": "Fizik Nuklear",
    "bidang": "Fizik Gunaan",
    "topik": "6.1 Reputan Radioaktif",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 18 menunjukkan siri pereputan radioaktif bagi nukleus Uranium-238 kepada Radium-226.\nBerapakah bilangan zarah alfa dan zarah beta yang dipancarkan dalam proses ini?\n\nDiagram 18 shows a series of radioactive decays for the nucleus of Uranium-238 to nucleus Radium-226.\nWhat is the number of the alpha particles and beta particles emitted during this process?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q36_rajah18.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Bilangan zarah alfa: 1, Bilangan zarah beta: 2\nThe number of alpha particles: 1, The number of beta particles: 2"
      },
      {
        "id": "B",
        "teks": "Bilangan zarah alfa: 2, Bilangan zarah beta: 3\nThe number of alpha particles: 2, The number of beta particles: 3"
      },
      {
        "id": "C",
        "teks": "Bilangan zarah alfa: 3, Bilangan zarah beta: 2\nThe number of alpha particles: 3, The number of beta particles: 2"
      },
      {
        "id": "D",
        "teks": "Bilangan zarah alfa: 4, Bilangan zarah beta: 1\nThe number of alpha particles: 4, The number of beta particles: 1"
      }
    ],
    "jawapan": "C",
    "penerangan": "Persamaan pereputan: ²³⁸₉₂U → ²²⁶₈₈Ra + x(⁴₂α) + y(⁰₋₁β).\nNombor nukleon: 238 = 226 + 4x => 4x = 12 => x = 3 (3 zarah alfa).\nNombor proton: 92 = 88 + 2(3) - y => 92 = 94 - y => y = 2 (2 zarah beta).\nMaka 3 zarah alfa dan 2 zarah beta.",
    "markah": 1,
    "jawapanBetul": "C",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q37",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 37,
    "sk": "SK 6.1 Reputan Radioaktif",
    "sp": "SP 6.1.3 Menyelesaikan masalah melibatkan separuh hayat",
    "spKod": "6.1.3",
    "rujukanDskp": "DSKP Fizik T5 ms 74",
    "rujukanBukuTeks": "Buku Teks T5 Bab 6 ms 210-216",
    "rujukanCheatnote": "Cheatnote T5 Bab 6 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 6,
    "babNama": "Fizik Nuklear",
    "bidang": "Fizik Gunaan",
    "topik": "6.1 Reputan Radioaktif",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 19 menunjukkan proses pereputan Natrium-24.\nBerapakah jisim Natrium-24 yang belum mereput selepas 45 jam?\n\nDiagram 19 shows a Natrium-24 decay process.\nWhat is the mass of undecayed Natrium-24 after 45 hours?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q37_rajah19.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "12.0 g"
      },
      {
        "id": "B",
        "teks": "9.0 g"
      },
      {
        "id": "C",
        "teks": "6.0 g"
      },
      {
        "id": "D",
        "teks": "4.5 g"
      }
    ],
    "jawapan": "B",
    "penerangan": "Daripada Rajah 19, jisim berkurang dari 72 g kepada 36 g dalam masa 15 jam, maka separuh hayat T_1/2 = 15 jam.\nSelepas 45 jam (iaitu 3 separuh hayat):\n72 g --(15 jam)--> 36 g --(30 jam)--> 18 g --(45 jam)--> 9.0 g.",
    "markah": 1,
    "jawapanBetul": "B",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q38",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 38,
    "sk": "SK 6.2 Tenaga Nuklear",
    "sp": "SP 6.2.3 Menghuraikan penjanaan tenaga elektrik dalam reaktor nuklear",
    "spKod": "6.2.3",
    "rujukanDskp": "DSKP Fizik T5 ms 76",
    "rujukanBukuTeks": "Buku Teks T5 Bab 6 ms 217-224",
    "rujukanCheatnote": "Cheatnote T5 Bab 6 ms 3",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 6,
    "babNama": "Fizik Nuklear",
    "bidang": "Fizik Gunaan",
    "topik": "6.2 Tenaga Nuklear",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Dalam sebuah reaktor nuklear, kadar tindak balas berantai dikawal oleh\nIn a nuclear reactor, the rate of the chain reaction is controlled by",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "rod boron / boron rod"
      },
      {
        "id": "B",
        "teks": "rod uranium / uranium rod"
      },
      {
        "id": "C",
        "teks": "teras grafit / graphite core"
      },
      {
        "id": "D",
        "teks": "dinding konkrit / concrete wall"
      }
    ],
    "jawapan": "A",
    "penerangan": "Rod pengawal yang diperbuat daripada boron atau kadmium berfungsi menyerap neutron berlebihan bagi mengawal kadar tindak balas berantai dalam reaktor nuklear.",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q39",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 39,
    "sk": "SK 7.3 Kesan Fotoelektrik",
    "sp": "SP 7.3.1 Menghuraikan fenomena kesan fotoelektrik",
    "spKod": "7.3.1",
    "rujukanDskp": "DSKP Fizik T5 ms 82",
    "rujukanBukuTeks": "Buku Teks T5 Bab 7 ms 234-241",
    "rujukanCheatnote": "Cheatnote T5 Bab 7 ms 3",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 7,
    "babNama": "Fizik Kuantum",
    "bidang": "Fizik Moden",
    "topik": "7.3 Kesan Fotoelektrik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah 20 menunjukkan penghasilan fotoelektron daripada kesan fotoelektrik.\nAntara yang berikut, yang manakah menerangkan fotoelektron?\n\nDiagram 20 shows photoelectron production from photoelectric effects.\nWhich of the following describes the photoelectron?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_kelantan_2026/kelantan_2026_k1_q39_rajah20.webp?v=20260921_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pergerakan elektron daripada pantulan cahaya\nThe movement of electrons from the reflection of lights"
      },
      {
        "id": "B",
        "teks": "Pergerakan elektron daripada permukaan logam\nThe movement of electrons from the surface of the metal"
      },
      {
        "id": "C",
        "teks": "Pancaran elektron daripada suatu permukaan logam yang dipanaskan\nThe emission of electrons from a heated metal surface"
      },
      {
        "id": "D",
        "teks": "Pancaran elektron daripada permukaan suatu logam apabila permukaan logam disinari oleh suatu alur cahaya pada frekuensi tertentu.\nThe emission of electrons from a metal surface when the metal surface is illuminated by a beam of light at a certain frequency."
      }
    ],
    "jawapan": "D",
    "penerangan": "Fotoelektron ialah elektron yang dipancarkan keluar dari permukaan logam apabila permukaan tersebut disinari oleh cahaya yang mempunyai frekuensi melebihi frekuensi ambang logam tersebut (kesan fotoelektrik).",
    "markah": 1,
    "jawapanBetul": "D",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "KELANTAN_2026_K1_Q40",
    "sumber": "Percubaan Kelantan 2026",
    "tahun": 2026,
    "noSoalanAsal": 40,
    "sk": "SK 7.3 Kesan Fotoelektrik",
    "sp": "SP 7.3.2 Menerangkan persamaan fotoelektrik Einstein",
    "spKod": "7.3.2",
    "rujukanDskp": "DSKP Fizik T5 ms 82",
    "rujukanBukuTeks": "Buku Teks T5 Bab 7 ms 242-248",
    "rujukanCheatnote": "Cheatnote T5 Bab 7 ms 4",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 7,
    "babNama": "Fizik Kuantum",
    "bidang": "Fizik Moden",
    "topik": "7.3 Kesan Fotoelektrik",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rumus di bawah menunjukkan persamaan Teori Fotoelektrik Einstein.\nhf = W + ½ mv²_maks\n\nPernyataan yang manakah benar menerangkan persamaan di atas?\n\nThe formula below shows the equation of Einstein's Photoelectric Theory.\nhf = W + ½ mv²_max\n\nWhich statement correctly explains the equation above?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "½ mv²_maks mewakili tenaga kinetik elektron yang terbebas\n½ mv²_max represents the kinetic energy of the released electrons"
      },
      {
        "id": "B",
        "teks": "f = Frekuensi tenaga terhasil daripada pembebasan elektron\nf = Frequency of energy is produced from the release of electrons"
      },
      {
        "id": "C",
        "teks": "hf = jumlah tenaga minimum untuk membebaskan elektron daripada permukaan logam\nhf = total minimum of energy to release electrons from the metal surface"
      },
      {
        "id": "D",
        "teks": "W mewakili tenaga maksimum untuk membebaskan elektron daripada permukaan logam\nW represents the maximum energy to release electron from the metal surface"
      }
    ],
    "jawapan": "A",
    "penerangan": "Dalam persamaan Teori Fotoelektrik Einstein: hf ialah tenaga foton cahaya tuju, W ialah fungsi kerja logam (tenaga minimum untuk membebaskan elektron), dan ½ mv²_maks mewakili tenaga kinetik maksimum bagi elektron yang terbebas.",
    "markah": 1,
    "jawapanBetul": "A",
    "statusSemakan": "Disemak (Percubaan Kelantan 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q01",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 1,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.2 Menerangkan dengan contoh kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 24",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-8",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Nyatakan jenis kuantiti fizik bagi \"Halaju, Ketumpatan, Tenaga dan Cas\".\n\nState the types of physical quantities for \"Velocity, Density, Energy and Charge\".",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Kuantiti asas / Base quantity"
      },
      {
        "id": "B",
        "teks": "Kuantiti terbitan / Derived quantity"
      },
      {
        "id": "C",
        "teks": "Kuantiti skalar / Scalar quantity"
      },
      {
        "id": "D",
        "teks": "Kuantiti vektor / Vector quantity"
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Berdasarkan skema pemarkahan rasmi Percubaan Terengganu 2026 (MPP3), jawapan ditetapkan sebagai C (Kuantiti skalar). Dari sudut fizik tulen, keempat-empat kuantiti tersebut juga merupakan kuantiti terbitan (kuantiti fizik yang diterbitkan daripada kombinasi kuantiti asas melalui pendaraban atau pembahagian).",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q02",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 2,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.2 Menganalisis graf untuk mendapatkan rumusan siasatan",
    "spKod": "1.2.2",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Graf manakah menunjukkan P berkadar songsang dengan Q?\n\nWhich graph shows P is inversely proportional to Q?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q02_opt_a.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q02_opt_b.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q02_opt_c.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q02_opt_d.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Apabila P berkadar songsang dengan Q (P ∝ 1/Q), graf P melawan 1/Q merupakan garis lurus yang bermula dari asalan dengan kecerunan positif. Sebaliknya, graf P melawan Q ialah garis lengkung hiperbola mencuram ke bawah tanpa menyentuh paksi.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q03",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 3,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menentukan sesaran, halaju dan pecutan menggunakan pita detik",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 30",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 30-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 1 menunjukkan sebahagian daripada keratan pita detik diambil dari gerakan sebuah troli dalam eksperimen menggunakan jangka masa detik dengan frekuensi 50 Hz.\nHitungkan pecutan troli itu.\n\nDiagram 1 shows a section of the ticker tape taken from the motion of a trolley in an experiment using a ticker timer with frequency 50 Hz.\nCalculate the acceleration of the trolley.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q03_rajah1.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "-25.0 cm s⁻²"
      },
      {
        "id": "B",
        "teks": "3125 cm s⁻²"
      },
      {
        "id": "C",
        "teks": "-3125 cm s⁻²"
      },
      {
        "id": "D",
        "teks": "2500 cm s⁻²"
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Frekuensi f = 50 Hz, masa bagi 1 detik = 1/50 s = 0.02 s.\nJarak detik awal (halaju awal, u): u = s₁ / t₁ = 8 cm / (0.02 s × n detik) atau halaju akhir v = 3 cm / t₂.\nTroli mengalami nyahpecutan kerana jarak antara titik semakin rapat dalam arah gerakan.\na = (v - u) / t = -3125 cm s⁻².",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q04",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 4,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.2 Mentafsir graf gerakan linear untuk menentukan jarak, sesaran, halaju dan pecutan",
    "spKod": "2.2.2",
    "rujukanDskp": "DSKP Fizik T4 ms 32",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 37-44",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 2 menunjukkan graf halaju-masa bagi pergerakan sebuah kereta dalam masa 14 s.\nHitung jarak kereta bagi 4 s terakhir.\n\nDiagram 2 shows the velocity-time graph for the movement of a car in 14 s.\nCalculate the distance of the car for the last 4 s.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q04_rajah2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "0 m"
      },
      {
        "id": "B",
        "teks": "20 m"
      },
      {
        "id": "C",
        "teks": "95 m"
      },
      {
        "id": "D",
        "teks": "105 m"
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Jarak yang dilalui diwakili oleh luas di bawah graf halaju-masa.\nBagi 4 s terakhir (dari t = 10 s hingga t = 14 s):\nBentuk di bawah graf ialah segi tiga bersudut tegak dengan tapak = (14 - 10) = 4 s dan ketinggian = 10 m s⁻¹.\nJarak = 1/2 × tapak × tinggi = 1/2 × 4 s × 10 m s⁻¹ = 20 m.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q05",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 5,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat gerakan jatuh bebas",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 45-50",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 3 menunjukkan dua biji bola keluli P dan Q dijatuhkan serentak dari puncak bangunan ke tanah. Abaikan rintangan udara.\nAntara graf halaju-masa yang berikut yang manakah menunjukkan gerakan yang betul bagi P dan Q?\n\nDiagram 3 shows two steel balls, P and Q are dropped from top of a building to the ground. Assume the air resistance is negligible.\nWhich of the following velocity-time graph shows the correct motion of P and Q?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q05_rajah3.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q05_opt_a.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q05_opt_b.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q05_opt_c.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q05_opt_d.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapan": "D",
    "jawapanBetul": "D",
    "penerangan": "Dalam keadaan jatuh bebas tanpa rintangan udara, semua objek mengalami pecutan graviti yang sama iaitu g = 9.81 m s⁻², tidak bergantung kepada jisim objek. Oleh itu, kecerunan graf halaju-masa (pecutan) bagi kedua-dua bola P dan Q adalah sama dan grafnya bertindih (seperti dalam pilihan D).",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q06",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 6,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 36",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.4 Inersia",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah 4 menunjukkan keadaan pembonceng motosikal yang bergerak ke belakang apabila motosikal mula memecut.\nNyatakan hukum yang menerangkan pergerakan pembonceng yang ke belakang.\n\nDiagram 4 shows a pillion rider moving backwards when the motorcycle accelerates.\nState the law that explains the backward movement of the pillion rider.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q06_rajah4.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Gerakan Newton Pertama / Newton's First Law of Motion"
      },
      {
        "id": "B",
        "teks": "Hukum Gerakan Newton Kedua / Newton's Second Law of Motion"
      },
      {
        "id": "C",
        "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion"
      },
      {
        "id": "D",
        "teks": "Hukum Kegravitian Semesta Newton / Newton's Law of Universal Gravitation"
      }
    ],
    "jawapan": "A",
    "jawapanBetul": "A",
    "penerangan": "Inersia pembonceng cenderung mengekalkan keadaan pegun asalnya. Apabila motosikal memecut ke hadapan secara tiba-tiba, badan pembonceng kekal di posisi asal mengikut Hukum Gerakan Newton Pertama (konsep inersia), menyebabkan pembonceng kelihatan terhumban ke belakang.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q07",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 7,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 38",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 58-63",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 5",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.5 Momentum",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 5 menunjukkan perlanggaran di antara bola plastisin dan bola keluli.\nNyatakan prinsip yang menerangkan situasi di atas.\n\nDiagram 5 shows a collision between plasticine and steel balls.\nState the principle that explains the above situation.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q07_rajah5.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Prinsip Pascal / Pascal's principle"
      },
      {
        "id": "B",
        "teks": "Prinsip Keabadian Momentum / Principle of Conservation of Momentum"
      },
      {
        "id": "C",
        "teks": "Prinsip Keabadian Tenaga / Principle of Conservation of Energy"
      },
      {
        "id": "D",
        "teks": "Prinsip Archimedes / Archimedes' principle"
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Perlanggaran antara bola plastisin dan bola keluli mematuhi Prinsip Keabadian Momentum, yang menyatakan bahawa jumlah momentum sebelum perlanggaran adalah sama dengan jumlah momentum selepas perlanggaran jika tiada daya luar bertindak.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q08",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 8,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.2 Menyelesaikan masalah melibatkan rumus F = ma",
    "spKod": "2.6.2",
    "rujukanDskp": "DSKP Fizik T4 ms 40",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 64-69",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.6 Daya",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 6 menunjukkan dua buah lori jenis yang sama tetapi berbeza muatan memecut dengan daya tujah enjin yang sama.\nAntara pernyataan berikut yang manakah benar?\n\nDiagram 6 shows two lorries of the same type but with different loads accelerating with the same engine thrust force.\nWhich of the following statements is true?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q08_rajah6.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pecutan berkadar terus dengan daya / Acceleration is directly proportional to force"
      },
      {
        "id": "B",
        "teks": "Pecutan berkadar terus dengan jisim / Acceleration is directly proportional to mass"
      },
      {
        "id": "C",
        "teks": "Pecutan berkadar songsang dengan daya / Acceleration is inversely proportional to force"
      },
      {
        "id": "D",
        "teks": "Pecutan berkadar songsang dengan jisim / Acceleration is inversely proportional to mass"
      }
    ],
    "jawapan": "D",
    "jawapanBetul": "D",
    "penerangan": "Berdasarkan Hukum Gerakan Newton Kedua, F = ma, maka a = F / m. Apabila daya tujah F adalah malar, pecutan a berkadar songsang dengan jisim m (a ∝ 1/m). Lori bermuatan lebih besar akan memecut dengan lebih perlahan.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q09",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 9,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.2 Mengitlak kesan masa tindakan ke atas daya impuls",
    "spKod": "2.7.2",
    "rujukanDskp": "DSKP Fizik T4 ms 42",
    "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 70-76",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newtonian",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 7 menunjukkan seorang pemain ping pong bersedia memukul bola.\nAntara berikut yang manakah menghasilkan daya impuls yang tinggi?\n\nDiagram 7 shows a table-tennis player to hit a ball.\nWhich of the following produces a high impulsive force?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q09_rajah7.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tindakan pemain menarik tangan sebelum memukul bola / The action of a player pulling his hand back before hitting the ball"
      },
      {
        "id": "B",
        "teks": "Bola ping pong yang bergerak dengan halaju yang sangat tinggi / A ping pong ball moving at very high velocity"
      },
      {
        "id": "C",
        "teks": "Perlanggaran antara bola ping pong dengan permukaan raket yang keras / The collision between a ping pong ball and the hard surface of a racket"
      },
      {
        "id": "D",
        "teks": "Raket ping pong yang mempunyai permukaan getah yang lembut / A ping pong racket that has a soft rubber surface"
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Daya impuls diberikan oleh rumus F = (mv - mu) / t. Permukaan raket yang keras memendekkan masa impak t perlanggaran. Apabila masa perlanggaran t sangat singkat, daya impuls F yang dihasilkan adalah sangat besar.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q10",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 10,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.4 Menghubung kait pecutan graviti di permukaan Bumi dan Bulan",
    "spKod": "3.1.4",
    "rujukanDskp": "DSKP Fizik T4 ms 46",
    "rujukanBukuTeks": "Buku Teks T4 Bab 3 ms 78-85",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newtonian",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Menganalisis",
    "soalan": "Seorang angkasawan berjisim 75 kg boleh melompat 40 cm dari permukaan Bumi.\nAntara pernyataan berikut, yang manakah betul jika angkasawan tersebut melompat di Bulan?\nI Ketinggian lompatan bertambah.\nII Masa ketika mendarat bertambah.\nIII Halaju ketika mendarat bertambah.\nIV Pecutan bertambah.\n\nAn astronaut with a mass of 75 kg can jump 40 cm from the surface of the Earth.\nWhich of the following statements is correct if the astronaut jumped on the Moon?\nI The height of jumping increases.\nII The time of landing increases.\nIII The velocity during landing increases.\nIV Acceleration increases.",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II / I and II"
      },
      {
        "id": "B",
        "teks": "I dan III / I and III"
      },
      {
        "id": "C",
        "teks": "II dan III / II and III"
      },
      {
        "id": "D",
        "teks": "II dan IV / II and IV"
      }
    ],
    "jawapan": "A",
    "jawapanBetul": "A",
    "penerangan": "Pecutan graviti di Bulan adalah kira-kira 1/6 daripada pecutan graviti di Bumi (g_bulan ≈ 1.62 m s⁻²). Kerana g lebih kecil, ketinggian maksimum h = u² / (2g) akan meningkat (I betul) dan masa di udara t = 2u / g bertambah (II betul). Halaju ketika mendarat sama dengan halaju awal tolakan otot u, dan pecutan berkurang.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q11",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 11,
    "sk": "SK 3.2 Hukum Kepler",
    "sp": "SP 3.2.1 Menjelaskan Hukum Kepler I, II dan III",
    "spKod": "3.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 48",
    "rujukanBukuTeks": "Buku Teks T4 Bab 3 ms 96-102",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newtonian",
    "topik": "3.2 Hukum Kepler",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Pernyataan manakah yang memerihalkan Hukum Kepler Kedua?\n\nWhich statement describes Kepler's Second Law?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Orbit bagi setiap planet adalah elips dengan Matahari berada di satu daripada fokusnya. / All planets move in elliptical orbits with the Sun at one of focus."
      },
      {
        "id": "B",
        "teks": "Kuasa dua tempoh orbit planet adalah berkadar terus dengan kuasa tiga jejari orbitnya. / The square of the orbital period of any planet is directly proportional to the cube of the radius of its orbit."
      },
      {
        "id": "C",
        "teks": "Garis yang menyambungkan planet dengan Matahari akan mencakupi luas yang sama dalam selang masa yang sama apabila planet bergerak dalam orbitnya. / A line that connects a planet to the Sun sweeps out equal areas in equal times."
      },
      {
        "id": "D",
        "teks": "Daya memusat yang bertindak ke atas planet adalah berkadar songsang dengan kuasa dua jarak di antara pusat planet dengan Matahari. / The centripetal force acting on a planet is inversely proportional to the square of the distance between the center of the planet and the Sun."
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Hukum Kepler Kedua menyatakan bahawa satu garis yang menyambungkan planet dengan Matahari mencakupi luas yang sama dalam selang masa yang sama apabila planet bergerak dalam orbitnya (keabadian momentum sudut).",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q12",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 12,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan bagaimana orbit satelit dikekalkan dan ciri satelit geopegun",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 50",
    "rujukanBukuTeks": "Buku Teks T4 Bab 3 ms 103-108",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newtonian",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Antara yang berikut, yang manakah merupakan ciri bagi sebuah satelit geopegun?\n\nWhich of the following is a characteristic of a geostationary satellite?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Tempoh orbitnya kurang daripada 24 jam. / Its orbital period is less than 24 hours."
      },
      {
        "id": "B",
        "teks": "Magnitud halaju satelit geopegun sentiasa berubah-ubah. / The magnitude of the velocity of geostationary satellites is constantly changing."
      },
      {
        "id": "C",
        "teks": "Ia sentiasa berada di atas kedudukan geografi yang sama di permukaan Bumi. / It is always located above the same geographical position on the Earth's surface."
      },
      {
        "id": "D",
        "teks": "Arah gerakannya adalah bertentangan dengan arah putaran Bumi. / Its direction of motion is opposite to the direction of Earth's rotation."
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Satelit geopegun mempunyai tempoh orbit tepat 24 jam dan beredar dalam arah yang sama dengan putaran Bumi (barat ke timur) di atas garisan Khatulistiwa. Ciri utamanya ialah ia sentiasa berada di atas kedudukan geografi yang sama di permukaan Bumi.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q13",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 13,
    "sk": "SK 4.2 Muatan Haba Tentu",
    "sp": "SP 4.2.1 Mendefinisikan muatan haba tentu c",
    "spKod": "4.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 54",
    "rujukanBukuTeks": "Buku Teks T4 Bab 4 ms 120-126",
    "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 4,
    "babNama": "Haba",
    "bidang": "Haba",
    "topik": "4.2 Muatan Haba Tentu",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut yang manakah unit S.I. bagi muatan haba tentu, c?\n\nWhich of the following is the S.I. unit for specific heat capacity, c?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "J kg⁻¹"
      },
      {
        "id": "B",
        "teks": "J K⁻¹"
      },
      {
        "id": "C",
        "teks": "J kg⁻¹ °C⁻¹"
      },
      {
        "id": "D",
        "teks": "J kg⁻¹ K⁻¹"
      }
    ],
    "jawapan": "D",
    "jawapanBetul": "D",
    "penerangan": "Dari rumus Q = mcΔθ, muatan haba tentu c = Q / (m Δθ). Unit S.I. bagi haba Q ialah Joule (J), jisim m ialah kilogram (kg), dan suhu mutlak Δθ ialah Kelvin (K). Maka unit S.I. bagi c ialah J kg⁻¹ K⁻¹.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q14",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 14,
    "sk": "SK 4.3 Haba Pendam Tentu",
    "sp": "SP 4.3.1 Menerangkan haba pendam tentu",
    "spKod": "4.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 56",
    "rujukanBukuTeks": "Buku Teks T4 Bab 4 ms 137-142",
    "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 4,
    "babNama": "Haba",
    "bidang": "Haba",
    "topik": "4.3 Haba Pendam Tentu",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Antara pernyataan berikut, yang manakah menerangkan apa yang berlaku semasa sesuatu bahan sedang melebur?\n\nWhich of the following statements describes what happens when a substance is melting?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Tenaga haba diserap untuk memutuskan ikatan antara zarah. / Heat energy is absorbed to break the bonds between particles."
      },
      {
        "id": "B",
        "teks": "Tenaga kinetik molekul bertambah. / The kinetic energy of the molecules increases."
      },
      {
        "id": "C",
        "teks": "Suhu bahan meningkat dengan mendadak semasa proses itu. / The temperature of the substance increases sharply during the process."
      },
      {
        "id": "D",
        "teks": "Tenaga haba dibebaskan ke persekitaran untuk merapatkan jarak antara zarah. / Heat energy is released to the surroundings to bring the particles closer together."
      }
    ],
    "jawapan": "A",
    "jawapanBetul": "A",
    "penerangan": "Semasa peleburan, haba pendam pelakuran diserap untuk mengatasi daya tarikan antara zarah (memutuskan ikatan pepejal menjadi cecair) tanpa peningkatan suhu, oleh itu tenaga kinetik kekal malar dan tenaga keupayaan bertambah.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q15",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 15,
    "sk": "SK 4.4 Hukum Gas",
    "sp": "SP 4.4.3 Menentukan hubungan antara tekanan dan suhu bagi suatu gas berjisim tetap pada isi padu malar",
    "spKod": "4.4.3",
    "rujukanDskp": "DSKP Fizik T4 ms 58",
    "rujukanBukuTeks": "Buku Teks T4 Bab 4 ms 156-162",
    "rujukanCheatnote": "Cheatnote T4 Bab 4 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 4,
    "babNama": "Haba",
    "bidang": "Haba",
    "topik": "4.4 Hukum-hukum Gas",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 8 menunjukkan graf tekanan, P, melawan suhu mutlak, T, bagi suatu gas berjisim tetap pada isi padu malar.\nAntara pernyataan berikut, yang manakah menunjukkan hubungan yang betul?\n\nDiagram 8 shows a graph of pressure, P, against absolute temperature, T, for a fixed mass of gas at constant volume.\nWhich of the following statements shows the correct relationship?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q15_rajah8.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tekanan berkadar terus dengan suhu mutlak. / Pressure is directly proportional to the absolute temperature."
      },
      {
        "id": "B",
        "teks": "Tekanan berkadar songsang dengan suhu mutlak. / Pressure is inversely proportional to the absolute temperature."
      },
      {
        "id": "C",
        "teks": "Tekanan bertambah secara linear dengan suhu mutlak. / Pressure increases linearly with the absolute temperature."
      },
      {
        "id": "D",
        "teks": "Tekanan berkadar terus dengan suhu dalam darjah Celsius. / Pressure is directly proportional to the temperature in degrees Celsius."
      }
    ],
    "jawapan": "A",
    "jawapanBetul": "A",
    "penerangan": "Mengikut Hukum Gay-Lussac, bagi suatu gas berjisim tetap pada isi padu malar, tekanan P berkadar terus dengan suhu mutlak T (dalam Kelvin): P ∝ T. Graf P melawan T dalam Kelvin adalah garis lurus yang melalui asalan (0,0).",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q16",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 16,
    "sk": "SK 5.2 Pelembapan dan Resonans",
    "sp": "SP 5.2.1 Memerihalkan pelembapan dan resonans",
    "spKod": "5.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 64",
    "rujukanBukuTeks": "Buku Teks T4 Bab 5 ms 184-189",
    "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 5,
    "babNama": "Gelombang",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "5.2 Pelembapan dan Resonans",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 9(a) menunjukkan sebuah sistem ayunan spring yang mengalami pengurangan amplitud secara beransur-ansur sehingga ia berhenti. Rajah 9(b) menunjukkan graf sesaran lawan masa yang mewakili gerakan sistem ayunan tersebut.\nAntara pernyataan berikut, yang manakah menerangkan sebab berlakunya fenomena tersebut?\n\nDiagram 9(a) shows a spring oscillation system that undergoes a gradual reduction in amplitude until it stops. Diagram 9(b) shows a graph of displacement versus time that represents the motion of the oscillating system.\nWhich of the following statements explains the cause of this phenomenon?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q16_rajah9.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tempoh ayunan sistem bertambah mengikut masa. / The period of the system's oscillation increases over time."
      },
      {
        "id": "B",
        "teks": "Sistem ayunan kehilangan tenaga ke persekitaran bagi mengatasi rintangan udara. / The oscillating system loses energy to the surroundings to overcome air resistance."
      },
      {
        "id": "C",
        "teks": "Frekuensi ayunan sistem berkurangan secara beransur-ansur. / The frequency of oscillation of the system decreases gradually."
      },
      {
        "id": "D",
        "teks": "Jisim beban berkurangan semasa ayunan berlaku. / The mass of the load decreases during oscillation."
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Pengurangan amplitud secara beransur-ansur merupakan fenomena pelembapan (damping). Pelembapan berlaku kerana sistem ayunan kehilangan tenaga ke persekitaran (sebagai haba) bagi mengatasi daya rintangan luaran seperti rintangan udara dan geseran dalaman bahan spring. Walau bagaimanapun, frekuensi dan tempoh ayunan kekal malar.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q17",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 17,
    "sk": "SK 6.1 Pembiasan Cahaya",
    "sp": "SP 6.1.2 Menghubung kait sudut tuju, i dan sudut biasan, r",
    "spKod": "6.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 70",
    "rujukanBukuTeks": "Buku Teks T4 Bab 6 ms 232-239",
    "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 6,
    "babNama": "Cahaya dan Optik",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "6.1 Pembiasan Cahaya",
    "aras": "Sederhana",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 10 menunjukkan sinar cahaya bergerak dari medium X ke medium Y.\nAntara berikut, pernyataan manakah yang betul?\n\nDiagram 10 shows a light ray travelling from medium X to medium Y.\nWhich of the following statements is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q17_rajah10.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Ketumpatan optik medium X = ketumpatan optik medium Y. / The optical density of medium X = the optical density of medium Y."
      },
      {
        "id": "B",
        "teks": "Ketumpatan optik medium X > ketumpatan optik medium Y. / The optical density of medium X > the optical density of medium Y."
      },
      {
        "id": "C",
        "teks": "Ketumpatan optik medium X < ketumpatan optik medium Y. / The optical density of medium X < the optical density of medium Y."
      },
      {
        "id": "D",
        "teks": "Laju cahaya dalam medium X adalah lebih tinggi berbanding medium Y. / Speed of light in medium X is higher than in medium Y."
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Apabila sinar cahaya merambat dari medium X ke medium Y, sinar terbias menjauhi garis normal (sudut biasan r > sudut tuju i). Pembiasan menjauhi normal berlaku apabila cahaya bergerak dari medium yang lebih tumpat optik ke medium yang kurang tumpat optik. Oleh itu, ketumpatan optik medium X > ketumpatan optik medium Y.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q18",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 18,
    "sk": "SK 5.5 Pembelauan Gelombang",
    "sp": "SP 5.5.1 Memerihalkan pembelauan gelombang dari segi corak, panjang gelombang, frekuensi, halaju dan amplitud",
    "spKod": "5.5.1",
    "rujukanDskp": "DSKP Fizik T4 ms 66",
    "rujukanBukuTeks": "Buku Teks T4 Bab 5 ms 202-209",
    "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 5,
    "babNama": "Gelombang",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "5.5 Pembelauan Gelombang",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah 11 menunjukkan gelombang air laut yang bergerak melalui satu celah sempit pada benteng penghalang.\nAntara berikut fenomena gelombang utama yang ditunjukkan di R?\n\nDiagram 11 shows seawater waves moving through a narrow gap in a retaining wall.\nWhich of the following are the main wave phenomena shown at R?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q18_rajah11.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pantulan / Reflection"
      },
      {
        "id": "B",
        "teks": "Interferens / Interference"
      },
      {
        "id": "C",
        "teks": "Pembelauan / Diffraction"
      },
      {
        "id": "D",
        "teks": "Pembiasan / Refraction"
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Penyebaran gelombang air selepas melalui satu celah sempit pada benteng penghalang membentuk corak membulat merupakan fenomena pembelauan gelombang (diffraction of waves).",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q19",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 19,
    "sk": "SK 5.6 Interferens Gelombang",
    "sp": "SP 5.6.3 Menyelesaikan masalah melibatkan rumus λ = ax/D",
    "spKod": "5.6.3",
    "rujukanDskp": "DSKP Fizik T4 ms 68",
    "rujukanBukuTeks": "Buku Teks T4 Bab 5 ms 211-218",
    "rujukanCheatnote": "Cheatnote T4 Bab 5 ms 4",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 5,
    "babNama": "Gelombang",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "5.6 Interferens Gelombang",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 12 menunjukkan satu susunan radas eksperimen dwicelah Young. Panjang gelombang cahaya monokromatik ialah 4.8 x 10⁻⁷ m. Jarak antara dua celah ialah 5.00 x 10⁻⁴ m.\nHitung jarak antara dua pinggir gelap?\n\nDiagram 12 shows the apparatus set-up of Young's double slit experiment. The wavelength of the monochromatic light is 4.8 x 10⁻⁷ m. The distance between the two slits is 5.00 x 10⁻⁴ m.\nCalculate the distance between two dark fringes?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q19_rajah12.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "2.94 x 10⁻³ m"
      },
      {
        "id": "B",
        "teks": "6.86 x 10⁻³ m"
      },
      {
        "id": "C",
        "teks": "8.40 x 10⁻³ m"
      },
      {
        "id": "D",
        "teks": "3.36 x 10⁻³ m"
      }
    ],
    "jawapan": "D",
    "jawapanBetul": "D",
    "penerangan": "Gunakan rumus dwicelah Young: λ = ax / D\nMaka pemisahan pinggir berturutan, x = λD / a\nDi mana:\nλ = 4.8 × 10⁻⁷ m\nD = 3.5 m (seperti dinyatakan dalam Rajah 12)\na = 5.00 × 10⁻⁴ m\nx = (4.8 × 10⁻⁷ × 3.5) / (5.00 × 10⁻⁴) = 3.36 × 10⁻³ m.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q20",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 20,
    "sk": "SK 6.2 Pantulan Dalam Penuh",
    "sp": "SP 6.2.3 Menyelesaikan masalah melibatkan pantulan dalam penuh",
    "spKod": "6.2.3",
    "rujukanDskp": "DSKP Fizik T4 ms 72",
    "rujukanBukuTeks": "Buku Teks T4 Bab 6 ms 242-249",
    "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 6,
    "babNama": "Cahaya dan Optik",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "6.2 Pantulan Dalam Penuh",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 13 menunjukkan satu sinar cahaya merambat melalui gentian optik yang terdiri daripada teras dalam dan salutan luar.\nAntara kombinasi indeks biasan bagi teras dalam, ni dan salutan luar, no berikut, yang manakah membolehkan isyarat cahaya dipantulkan dengan paling cekap sepanjang gentian tersebut?\n\nDiagram 13 shows a light ray propagating through an optical fibre consisting of an inner core and an outer cladding.\nWhich of the following combinations of refractive index for the inner core, ni and outer cladding, no allows the light signal to be reflected most efficiently along the fibre?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q20_rajah13.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "ni = 1.33, no = 1.33"
      },
      {
        "id": "B",
        "teks": "ni = 1.45, no = 1.55"
      },
      {
        "id": "C",
        "teks": "ni = 1.72, no = 1.48"
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan skema pemarkahan rasmi Percubaan Terengganu 2026 (MPP3), jawapan ditetapkan sebagai B. Namun dari sudut fizik konsep gentian optik, pantulan dalam penuh hanya berlaku apabila indeks biasan teras dalam lebih tinggi daripada salutan luar (n_i > n_o), yang dipenuhi oleh pilihan C (1.72 > 1.48).",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q21",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 21,
    "sk": "SK 6.3 Pembentukan Imej oleh Kanta",
    "sp": "SP 6.3.1 Menentukan kedudukan dan ciri imej oleh kanta cembung dan kanta cekung",
    "spKod": "6.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 74",
    "rujukanBukuTeks": "Buku Teks T4 Bab 6 ms 251-258",
    "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 6,
    "babNama": "Cahaya dan Optik",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "6.3 Pembentukan Imej oleh Kanta",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Apakah yang berlaku kepada sinar cahaya apabila ia melalui pusat optik suatu kanta nipis?\n\nWhat happens to a ray of light when it passes through the optical center of a thin lens?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Sinar cahaya akan dipantulkan semula. / The light rays will be reflected back."
      },
      {
        "id": "B",
        "teks": "Sinar cahaya akan terbias menjauhi paksi utama. / The light rays will be refracted away from the principal axis."
      },
      {
        "id": "C",
        "teks": "Sinar cahaya akan bergerak lurus tanpa terbias. / Light rays will travel straight without being refracted."
      },
      {
        "id": "D",
        "teks": "Sinar cahaya akan terbias selari dengan paksi utama. / The light rays will be refracted parallel to the principal axis."
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Menurut peraturan pembinaan gambar rajah sinar untuk kanta nipis, sebarang sinar cahaya yang melalui pusat optik kanta (O) akan merambat lurus menerusi kanta tanpa mengalami sebarang pembiasan.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q22",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 22,
    "sk": "SK 6.5 Peralatan Optik",
    "sp": "SP 6.5.1 Menerangkan fungsi kanta dalam alat optik seperti teleskop astronomi",
    "spKod": "6.5.1",
    "rujukanDskp": "DSKP Fizik T4 ms 78",
    "rujukanBukuTeks": "Buku Teks T4 Bab 6 ms 264-270",
    "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 4",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 6,
    "babNama": "Cahaya dan Optik",
    "bidang": "Gelombang, Cahaya dan Optik",
    "topik": "6.5 Peralatan Optik",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Antara berikut, yang manakah pengubahsuaian pada kanta mata yang dapat meningkatkan pembesaran linear sebuah teleskop?\n\nWhich of the following is a modification to the eyepiece that can increase the linear magnification of a telescope?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Mengurangkan jarak di antara dua kanta. / Reduce the distance between the two lenses."
      },
      {
        "id": "B",
        "teks": "Menggunakan kanta mata dengan panjang fokus yang lebih pendek. / Use an eyepiece with a shorter focal length."
      },
      {
        "id": "C",
        "teks": "Menggunakan kanta objek yang lebih nipis. / Using a thinner objective lens."
      },
      {
        "id": "D",
        "teks": "Menggunakan kanta mata dengan panjang fokus yang lebih besar. / Using an eyepiece with a longer focal length."
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Pembesaran linear bagi sebuah teleskop astronomi pada pelarasan normal diberikan oleh rumus M = f_o / f_e. Untuk meningkatkan nilai M, panjang fokus kanta mata (f_e) perlu dikurangkan (menggunakan kanta mata dengan panjang fokus yang lebih pendek).",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q23",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 23,
    "sk": "SK 1.2 Leraian Daya",
    "sp": "SP 1.2.1 Memerihalkan leraian daya",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T5 ms 26",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 12-18",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.2 Leraian Daya",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 14 menunjukkan sebuah objek berjisim m, berada dalam keadaan pegun di atas satah condong yang licin pada sudut θ dengan ufuk.\nApakah yang akan berlaku kepada daya, F yang menarik objek ke bawah satah jika kecondongan satah itu dikurangkan?\n\nDiagram 14 shows an object of mass, m, is at rest on a smooth inclined plane at an angle θ with the horizontal.\nWhat will happen to the force, F pulling an object down a plane if the inclination of the plane is reduced?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q23_rajah14.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya akan menjadi sifar kerana tiada geseran. / The force will be zero because there is no friction."
      },
      {
        "id": "B",
        "teks": "Daya akan bertambah kerana graviti lebih kuat. / The force will increase because gravity is stronger."
      },
      {
        "id": "C",
        "teks": "Daya kekal sama kerana jisim objek tidak berubah. / The force remains the same because the mass of the object does not change."
      },
      {
        "id": "D",
        "teks": "Daya akan berkurang kerana komponen mg sin θ mengecil. / The force will decrease because the mg sin θ component decreases."
      }
    ],
    "jawapan": "D",
    "jawapanBetul": "D",
    "penerangan": "Komponen berat objek yang selari dengan satah condong dan bertindak menariknya ke bawah ialah F = mg sin θ. Apabila sudut kecondongan θ dikurangkan, nilai sin θ turut berkurang, menyebabkan daya selari F = mg sin θ mengecil.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q24",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 24,
    "sk": "SK 1.3 Keseimbangan Daya",
    "sp": "SP 1.3.1 Menjelaskan maksud keseimbangan daya",
    "spKod": "1.3.1",
    "rujukanDskp": "DSKP Fizik T5 ms 28",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 19-25",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.3 Keseimbangan Daya",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 15 menunjukkan sebuah lampu tergantung pegun pada siling dengan tali.\nApakah yang akan berlaku pada tegangan tali jika lampu yang lebih ringan digunakan?\n\nDiagram 15 shows a lamp hangs stationary from the ceiling by a rope.\nWhat will happen to the tension of the string if a lighter lamp is used?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q24_rajah15.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tegangan tali sifar. / The tension of string is zero."
      },
      {
        "id": "B",
        "teks": "Tegangan tali bertambah. / The tension of string increases."
      },
      {
        "id": "C",
        "teks": "Tegangan tali tidak berubah. / The tension of string does not change."
      },
      {
        "id": "D",
        "teks": "Tegangan tali berkurang. / The tension of string decreases."
      }
    ],
    "jawapan": "D",
    "jawapanBetul": "D",
    "penerangan": "Apabila lampu berada dalam keseimbangan daya secara pegun, daya paduan ialah sifar: T = W = mg. Jika lampu yang lebih ringan digunakan, berat W lampu adalah lebih kecil, maka tegangan tali T turut berkurang mengikut nilai berat lampu yang baru.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q25",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 25,
    "sk": "SK 1.4 Kekenyalan",
    "sp": "SP 1.4.2 Mengeksperimen untuk menentukan hubungan antara daya dan pemanjangan spring",
    "spKod": "1.4.2",
    "rujukanDskp": "DSKP Fizik T5 ms 30",
    "rujukanBukuTeks": "Buku Teks T5 Bab 1 ms 26-32",
    "rujukanCheatnote": "Cheatnote T5 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 1,
    "babNama": "Daya dan Gerakan II",
    "bidang": "Mekanik Newtonian",
    "topik": "1.4 Kekenyalan",
    "aras": "Sederhana",
    "konstruk": "Menganalisis",
    "soalan": "Jadual 1 di bawah menunjukkan nilai pemalar spring bagi tiga jenis spring yang berbeza.\nSpring manakah yang akan mengalami pemanjangan yang paling besar apabila beban 20 N dikenakan?\n\nTable 1 below shows the spring constant values for three different types of springs.\nWhich spring will experience the greatest extension when a load of 20 N is applied?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q25_jadual1.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Spring Z"
      },
      {
        "id": "B",
        "teks": "Spring Y"
      },
      {
        "id": "C",
        "teks": "Semua spring mengalami pemanjangan yang sama. / All springs experience the same extension."
      },
      {
        "id": "D",
        "teks": "Spring X"
      }
    ],
    "jawapan": "D",
    "jawapanBetul": "D",
    "penerangan": "Berdasarkan Hukum Hooke, F = kx, maka pemanjangan x = F / k. Untuk daya F yang sama (20 N), pemanjangan x berkadar songsang dengan pemalar spring k (x ∝ 1/k). Spring dengan pemalar k paling kecil (Spring X dengan k = 2.0 N cm⁻¹) akan mengalami pemanjangan paling besar: x = 20 / 2.0 = 10 cm.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q26",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 26,
    "sk": "SK 2.1 Tekanan Cecair",
    "sp": "SP 2.1.3 Menyelesaikan masalah melibatkan tekanan cecair",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T5 ms 34",
    "rujukanBukuTeks": "Buku Teks T5 Bab 2 ms 44-50",
    "rujukanCheatnote": "Cheatnote T5 Bab 2 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 2,
    "babNama": "Tekanan",
    "bidang": "Mekanik Newtonian",
    "topik": "2.1 Tekanan Cecair",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 16 menunjukkan gelembung udara yang dilepaskan oleh seekor ikan di dalam kolam.\nJika tekanan atmosfera adalah 10 m air, berapakah nisbah isipadu gelembung udara di permukaan tasik berbanding isipadu di dasar tasik?\n\nDiagram 16 shows air bubbles released by a fish in a pond.\nIf the atmospheric pressure is 10m of water, what is the ratio of the volume of air bubbles on the surface of the lake to the volume at the bottom of the lake?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q26_rajah16.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "3 : 1"
      },
      {
        "id": "B",
        "teks": "1 : 3"
      },
      {
        "id": "C",
        "teks": "2 : 1"
      },
      {
        "id": "D",
        "teks": "1 : 2"
      }
    ],
    "jawapan": "A",
    "jawapanBetul": "A",
    "penerangan": "Gunakan Hukum Boyle, P₁V₁ = P₂V₂ (suhu malar).\nDi dasar kolam (kedalaman h = 20 m air):\nP₁ = P_atm + h = 10 m air + 20 m air = 30 m air.\nDi permukaan kolam:\nP₂ = P_atm = 10 m air.\nMaka: P₁V₁ = P₂V₂\n30 × V_dasar = 10 × V_permukaan\nV_permukaan / V_dasar = 30 / 10 = 3 : 1.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q27",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 27,
    "sk": "SK 2.4 Prinsip Pascal",
    "sp": "SP 2.4.2 Menerangkan aplikasi Prinsip Pascal",
    "spKod": "2.4.2",
    "rujukanDskp": "DSKP Fizik T5 ms 38",
    "rujukanBukuTeks": "Buku Teks T5 Bab 2 ms 60-65",
    "rujukanCheatnote": "Cheatnote T5 Bab 2 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 2,
    "babNama": "Tekanan",
    "bidang": "Mekanik Newtonian",
    "topik": "2.4 Prinsip Pascal",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah 17 menunjukkan sebuah lori yang menggunakan sistem hidraulik untuk menurunkan pasir di kawasan pembinaan.\nApakah prinsip Fizik yang terlibat?\n\nDiagram 17 shows a lorry that uses a hydraulic system to unload sand at a construction site.\nWhat are the principles of physics involved?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q27_rajah17.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Prinsip Bernoulli / Bernoulli's principle"
      },
      {
        "id": "B",
        "teks": "Prinsip Archimedes / Archimedes' principle"
      },
      {
        "id": "C",
        "teks": "Prinsip Pascal / Pascal's principle"
      },
      {
        "id": "D",
        "teks": "Prinsip Keabadian Momentum / Principle of Conservation of Momentum"
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Sistem hidraulik berfungsi berdasarkan Prinsip Pascal, yang menyatakan bahawa tekanan yang dikenakan ke atas suatu bendalir tertutup akan dipindahkan secara seragam ke semua arah ke seluruh bendalir itu.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q28",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 28,
    "sk": "SK 2.5 Prinsip Archimedes",
    "sp": "SP 2.5.1 Memerihalkan Prinsip Archimedes",
    "spKod": "2.5.1",
    "rujukanDskp": "DSKP Fizik T5 ms 40",
    "rujukanBukuTeks": "Buku Teks T5 Bab 2 ms 66-72",
    "rujukanCheatnote": "Cheatnote T5 Bab 2 ms 3",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 2,
    "babNama": "Tekanan",
    "bidang": "Mekanik Newtonian",
    "topik": "2.5 Prinsip Archimedes",
    "aras": "Tinggi",
    "konstruk": "Menilai",
    "soalan": "Satu bongkah kayu terapung di dalam sebuah bekas yang berisi air. Jika bekas tersebut dibawa ke Bulan di mana tarikan graviti adalah 1/6 daripada Bumi, apakah yang akan berlaku kepada bahagian bongkah yang tenggelam di bawah permukaan air?\n\nA block of wood floats in a container filled with water. If the container is taken to the Moon where the gravitational pull is 1/6 that of Earth, what will happen to the part of the block that is submerged below the surface of the water?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Bahagian yang tenggelam bertambah. / The submerged portion increases."
      },
      {
        "id": "B",
        "teks": "Bahagian yang tenggelam tidak berubah. / The submerged portion does not change."
      },
      {
        "id": "C",
        "teks": "Bahagian yang tenggelam 1/6 daripada di Bumi. / The submerged part is 1/6 of that on Earth."
      },
      {
        "id": "D",
        "teks": "Bongkah akan tenggelam sepenuhnya ke dasar bekas. / The block will sink completely to the bottom of the container."
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Objek terapung mematuhi: Berat objek = Daya apungan\nm_kayu × g = ρ_air × V_tenggelam × g\nPecutan graviti g membatalkan kedua-dua belah persamaan:\nV_tenggelam = m_kayu / ρ_air\nOleh itu, isi padu bahagian bongkah yang tenggelam hanya bergantung kepada jisim kayu dan ketumpatan air, tidak bergantung kepada pecutan graviti g. Bahagian yang tenggelam tetap tidak berubah di Bulan.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q29",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 29,
    "sk": "SK 2.6 Prinsip Bernoulli",
    "sp": "SP 2.6.2 Menerangkan aplikasi Prinsip Bernoulli",
    "spKod": "2.6.2",
    "rujukanDskp": "DSKP Fizik T5 ms 42",
    "rujukanBukuTeks": "Buku Teks T5 Bab 2 ms 76-82",
    "rujukanCheatnote": "Cheatnote T5 Bab 2 ms 4",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 2,
    "babNama": "Tekanan",
    "bidang": "Mekanik Newtonian",
    "topik": "2.6 Prinsip Bernoulli",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 18 menunjukkan aliran udara yang melalui sebuah tiub Venturi.\nPada Rajah 18, manakah kedudukan yang mempunyai tekanan udara yang paling rendah?\n\nDiagram 18 shows the flow of air through a Venturi tube.\nIn Diagram 18, which position has the lowest air pressure?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q29_rajah18.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kedudukan B / Position B"
      },
      {
        "id": "B",
        "teks": "Kedudukan A / Position A"
      },
      {
        "id": "C",
        "teks": "Kedudukan C / Position C"
      },
      {
        "id": "D",
        "teks": "Semua kedudukan mempunyai tekanan yang sama. / All positions have the same pressure."
      }
    ],
    "jawapan": "A",
    "jawapanBetul": "A",
    "penerangan": "Mengikut Prinsip Bernoulli, kawasan dengan halaju bendalir yang tinggi akan menghasilkan tekanan yang rendah. Pada tiub Venturi, bahagian penyempitan (kedudukan B) mempunyai luas keratan rentas paling kecil, menyebabkan halaju aliran udara paling tinggi dan tekanannya menjadi paling rendah.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q30",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 30,
    "sk": "SK 3.2 Rintangan",
    "sp": "SP 3.2.1 Menghubung kait arus dan beza keupayaan bagi konduktor",
    "spKod": "3.2.1",
    "rujukanDskp": "DSKP Fizik T5 ms 46",
    "rujukanBukuTeks": "Buku Teks T5 Bab 3 ms 98-106",
    "rujukanCheatnote": "Cheatnote T5 Bab 3 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 3,
    "babNama": "Elektrik",
    "bidang": "Keelektromagnetan",
    "topik": "3.2 Rintangan",
    "aras": "Sederhana",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 19 di bawah menunjukkan graf beza keupayaan, V, melawan arus, I, bagi dua konduktor yang berbeza, P dan Q.\nBerdasarkan graf tersebut, pernyataan manakah yang menunjukkan perbandingan yang tepat mengenai sifat fizikal dan bahan konduktor tersebut?\n\nDiagram 19 below shows a graph of potential difference, V, against current, I, for two different conductors, P and Q.\nBased on the graph, which statement shows the correct comparison of the physical properties and materials of the conductor?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q30_rajah19.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Luas keratan rentas konduktor P adalah lebih besar daripada Q jika jenis bahan dan panjang kedua-duanya adalah sama. / The cross-sectional area of conductor P is larger than Q if the type of material and the length of both are the same."
      },
      {
        "id": "B",
        "teks": "Kerintangan P lebih tinggi daripada Q jika kedua-duanya mempunyai panjang dan luas keratan rentas yang sama. / The resistivity of P is higher than that of Q if both have the same length and cross-sectional area."
      },
      {
        "id": "C",
        "teks": "Konduktor P mempunyai rintangan yang lebih rendah kerana ia membenarkan arus yang lebih besar mengalir melaluinya pada beza keupayaan yang tetap. / Conductor P has a lower resistance because it allows a larger current to flow through it at a constant potential difference."
      },
      {
        "id": "D",
        "teks": "Konduktor P adalah lebih pendek daripada konduktor Q sekiranya kedua-duanya diperbuat daripada bahan yang sama dengan luas keratan rentas yang serupa. / Conductor P is shorter than conductor Q if both are made of the same material with similar cross-sectional area."
      }
    ],
    "jawapan": "D",
    "jawapanBetul": "D",
    "penerangan": "Kecerunan graf V melawan I mewakili rintangan R (R = V/I). Kecerunan konduktor P lebih kecil daripada Q, maka R_P < R_Q. Berdasarkan rumus rintangan dawai R = ρl / A, rintangan berkadar terus dengan panjang dawai (R ∝ l). Oleh itu, untuk luas keratan rentas dan bahan yang sama, konduktor P yang mempunyai rintangan lebih rendah mestilah lebih pendek daripada Q.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q31",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 31,
    "sk": "SK 3.4 Tenaga dan Kuasa Elektrik",
    "sp": "SP 3.4.1 Menerangkan hubungan antara tenaga elektrik, voltan, arus dan masa",
    "spKod": "3.4.1",
    "rujukanDskp": "DSKP Fizik T5 ms 50",
    "rujukanBukuTeks": "Buku Teks T5 Bab 3 ms 120-128",
    "rujukanCheatnote": "Cheatnote T5 Bab 3 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 3,
    "babNama": "Elektrik",
    "bidang": "Keelektromagnetan",
    "topik": "3.4 Tenaga dan Kuasa Elektrik",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 20 menunjukkan label yang ada pada dua lampu berpendaflour yang berbeza.\nAntara berikut, pernyataan manakah yang betul?\n\nDiagram 20 shows the labels on two different fluorescent lamps.\nWhich of the following statement is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q31_rajah20.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Rintangan tiub panjang lebih tinggi. / Long tube resistance is higher."
      },
      {
        "id": "B",
        "teks": "Tenaga terhasil tiub panjang lebih rendah. / Long tube produces lower energy."
      },
      {
        "id": "C",
        "teks": "Arus melalui tiub panjang lebih tinggi. / The current through the long tube is higher."
      },
      {
        "id": "D",
        "teks": "Keamatan cahaya tiub panjang lebih rendah. / The light intensity of long tubes is lower."
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Kuasa P = V × I. Kedua-dua tiub beroperasi pada voltan yang sama V = 240 V.\nTiub panjang: P = 40 W => I = P / V = 40 / 240 = 0.167 A.\nTiub pendek: P = 20 W => I = P / V = 20 / 240 = 0.083 A.\nMaka arus yang melalui tiub panjang adalah lebih tinggi berbanding tiub pendek.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q32",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 32,
    "sk": "SK 4.1 Daya ke atas Konduktor Pembawa Arus",
    "sp": "SP 4.1.1 Menghuraikan kesan medan magnet ke atas konduktor pembawa arus (medan lastik)",
    "spKod": "4.1.1",
    "rujukanDskp": "DSKP Fizik T5 ms 54",
    "rujukanBukuTeks": "Buku Teks T5 Bab 4 ms 140-146",
    "rujukanCheatnote": "Cheatnote T5 Bab 4 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 4,
    "babNama": "Keelektromagnetan",
    "bidang": "Keelektromagnetan",
    "topik": "4.1 Daya ke atas Konduktor Pembawa Arus",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Antara peralatan berikut, peralatan manakah yang memerlukan medan lastik untuk berfungsi?\n\nWhich the following appliances require a catapult field to function?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Kipas elektrik / Electric fan"
      },
      {
        "id": "B",
        "teks": "Mikrofon / Microphone"
      },
      {
        "id": "C",
        "teks": "Gitar elektrik / Electric guitar"
      },
      {
        "id": "D",
        "teks": "Dapur aruhan / Induction cooker"
      }
    ],
    "jawapan": "A",
    "jawapanBetul": "A",
    "penerangan": "Kipas elektrik menggunakan motor elektrik yang beroperasi menggunakan prinsip medan lastik (daya paduan yang bertindak ke atas konduktor pembawa arus dalam medan magnet). Sebaliknya, mikrofon dan gitar elektrik berfungsi berasaskan aruhan elektromagnet, manakala dapur aruhan menggunakan arus pusar.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q33",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 33,
    "sk": "SK 4.2 Aruhan Elektromagnet",
    "sp": "SP 4.2.1 Memerihalkan aruhan elektromagnet dan Hukum Lenz",
    "spKod": "4.2.1",
    "rujukanDskp": "DSKP Fizik T5 ms 56",
    "rujukanBukuTeks": "Buku Teks T5 Bab 4 ms 150-158",
    "rujukanCheatnote": "Cheatnote T5 Bab 4 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 4,
    "babNama": "Keelektromagnetan",
    "bidang": "Keelektromagnetan",
    "topik": "4.2 Aruhan Elektromagnet",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 21 menunjukkan aruhan elektromagnet terhasil apabila terdapat gerakan relatif bar magnet berhampiran konduktor gegelung.\nAntara berikut, yang manakah melengkapkan rajah di atas?\n\nDiagram 21 shows the electromagnetic induction produced when there is relative motion of a magnetic bar near a coil conductor.\nWhich of the following completes the diagram above?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q33_rajah21.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q33_opt_a.webp\" style=\"max-height:90px; border-radius:4px;\" alt=\"Pilihan A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q33_opt_b.webp\" style=\"max-height:90px; border-radius:4px;\" alt=\"Pilihan B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q33_opt_c.webp\" style=\"max-height:90px; border-radius:4px;\" alt=\"Pilihan C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q33_opt_d.webp\" style=\"max-height:90px; border-radius:4px;\" alt=\"Pilihan D\">"
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Mengikut Hukum Lenz, arah arus aruhan yang terhasil sentiasa menentang perubahan fluks magnet yang menghasilkannya. Apabila kutub Selatan digerakkan mendekati solenoid, solenoid menghasilkan kutub Selatan untuk menolaknya kembali, dan jarum galvanometer terpesong ke arah yang sepadan dengan arah arus aruhan.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q34",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 34,
    "sk": "SK 4.3 Transformer",
    "sp": "SP 4.3.2 Menyelesaikan masalah berkaitan transformer menggunakan rumus Vp/Vs = Np/Ns",
    "spKod": "4.3.2",
    "rujukanDskp": "DSKP Fizik T5 ms 58",
    "rujukanBukuTeks": "Buku Teks T5 Bab 4 ms 162-168",
    "rujukanCheatnote": "Cheatnote T5 Bab 4 ms 3",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 4,
    "babNama": "Keelektromagnetan",
    "bidang": "Keelektromagnetan",
    "topik": "4.3 Transformer",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 22 menunjukkan sebuah transformer injak turun.\nBerapakah bilangan lilitan gegelung primer jika bilangan lilitan gegelung sekunder ialah 40?\n\nDiagram 22 shows a step-down transformer.\nWhat is the number of turns in the primary coil if the number of turns in the secondary coil is 40?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q34_rajah22.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "72"
      },
      {
        "id": "B",
        "teks": "800"
      },
      {
        "id": "C",
        "teks": "720"
      },
      {
        "id": "D",
        "teks": "80"
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Gunakan rumus hubungan transformer ideal:\nV_p / V_s = N_p / N_s\nDari Rajah 22: V_p = 240 V, V_s = 12 V, N_s = 40 lilitan.\n240 / 12 = N_p / 40\n20 = N_p / 40\nN_p = 20 × 40 = 800 lilitan.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q35",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 35,
    "sk": "SK 5.2 Diod Semikonduktor",
    "sp": "SP 5.2.1 Memerihalkan fungsi diod semikonduktor",
    "spKod": "5.2.1",
    "rujukanDskp": "DSKP Fizik T5 ms 62",
    "rujukanBukuTeks": "Buku Teks T5 Bab 5 ms 180-186",
    "rujukanCheatnote": "Cheatnote T5 Bab 5 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 5,
    "babNama": "Elektronik",
    "bidang": "Fizik Gunaan",
    "topik": "5.2 Diod Semikonduktor",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 23 menunjukkan sambungan diod dalam litar ringkas dan mentol tidak menyala.\nAntara berikut, pernyataan manakah menerangkan situasi di atas?\n\nDiagram 23 shows the connection of a diode in a simple circuit and the bulb does not light up.\nWhich of the following statements best describes the situation above?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q35_rajah23.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Litar pincang depan / Forward bias circuit"
      },
      {
        "id": "B",
        "teks": "Lapisan susutan melebar / Depletion layer wider"
      },
      {
        "id": "C",
        "teks": "Voltan simpang meningkat / Junction voltage increase"
      },
      {
        "id": "D",
        "teks": "Rintangan diod terlalu kecil / Diode resistance is too small"
      }
    ],
    "jawapan": "B",
    "jawapanBetul": "B",
    "penerangan": "Apabila terminal positif bateri disambungkan ke semikonduktor jenis-n dan terminal negatif disambungkan ke jenis-p, diod berada dalam keadaan pincang songsang (reverse bias). Dalam keadaan ini, pembawa cas majoriti ditarik menjauhi simpang p-n menyebabkan lapisan susutan melebar dan rintangan simpang menjadi sangat tinggi, lalu tiada arus mengalir dan mentol tidak menyala.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q36",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 36,
    "sk": "SK 5.3 Transistor",
    "sp": "SP 5.3.2 Menjelaskan fungsi transistor sebagai suis automatik",
    "spKod": "5.3.2",
    "rujukanDskp": "DSKP Fizik T5 ms 64",
    "rujukanBukuTeks": "Buku Teks T5 Bab 5 ms 188-195",
    "rujukanCheatnote": "Cheatnote T5 Bab 5 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 5,
    "babNama": "Elektronik",
    "bidang": "Fizik Gunaan",
    "topik": "5.3 Transistor",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 24 menunjukkan sebuah litar transistor yang mengandungi perintang peka cahaya (PPC). Mentol akan menyala jika voltan minimum 5V melalui PPC.\nBerapakah nilai rintangan pada PPC semasa mentol menyala?\n\nDiagram 24 shows a transistor circuit containing a light dependent resistor (LDR). The bulb will light up if a minimum voltage of 5V is applied across the LDR.\nWhat is the resistance value at the LDR when the bulb is on?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q36_rajah24.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "2 kΩ"
      },
      {
        "id": "B",
        "teks": "10 kΩ"
      },
      {
        "id": "C",
        "teks": "30 kΩ"
      },
      {
        "id": "D",
        "teks": "50 kΩ"
      }
    ],
    "jawapan": "D",
    "jawapanBetul": "D",
    "penerangan": "Litar ini ialah litar pembahagi voltan dengan voltan bekalan V = 6 V, perintang tetap R₁ = 10 kΩ dan rintangan PPC = R_PPC.\nV_PPC = [R_PPC / (R₁ + R_PPC)] × V\n5 V = [R_PPC / (10 kΩ + R_PPC)] × 6 V\n5 (10 kΩ + R_PPC) = 6 R_PPC\n50 kΩ + 5 R_PPC = 6 R_PPC\nR_PPC = 50 kΩ.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q37",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 37,
    "sk": "SK 6.1 Reputan Radioaktif",
    "sp": "SP 6.1.2 Menerangkan maksud separuh hayat dan menyelesaikan masalah",
    "spKod": "6.1.2",
    "rujukanDskp": "DSKP Fizik T5 ms 68",
    "rujukanBukuTeks": "Buku Teks T5 Bab 6 ms 202-208",
    "rujukanCheatnote": "Cheatnote T5 Bab 6 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 6,
    "babNama": "Fizik Nuklear",
    "bidang": "Fizik Moden",
    "topik": "6.1 Reputan Radioaktif",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Satu bahan radioaktif mempunyai keaktifan awal 200 s⁻¹. Berapakah keaktifannya selepas 40 hari, jika separuh hayat bagi bahan tersebut ialah 8 hari?\n\nA radioactive material has an initial activity of 200 s⁻¹. What is its activity after 40 days, if the half-life of the substance is 8 days?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "6.25 s⁻¹"
      },
      {
        "id": "B",
        "teks": "12.5 s⁻¹"
      },
      {
        "id": "C",
        "teks": "40.0 s⁻¹"
      },
      {
        "id": "D",
        "teks": "50.0 s⁻¹"
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Bilangan separuh hayat n = masa jumlah / separuh hayat = 40 hari / 8 hari = 5 separuh hayat.\nKeaktifan selepas 5 separuh hayat: A = A₀ × (1/2)⁵ = 200 s⁻¹ / 32 = 6.25 s⁻¹. Walau bagaimanapun, dalam skema rasmi MPP3 Terengganu 2026, pilihan jawapan dicatatkan sebagai C.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q38",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 38,
    "sk": "SK 6.2 Tenaga Nuklear",
    "sp": "SP 6.2.3 Menjana tenaga elektrik daripada reaktor nuklear",
    "spKod": "6.2.3",
    "rujukanDskp": "DSKP Fizik T5 ms 70",
    "rujukanBukuTeks": "Buku Teks T5 Bab 6 ms 212-218",
    "rujukanCheatnote": "Cheatnote T5 Bab 6 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 6,
    "babNama": "Fizik Nuklear",
    "bidang": "Fizik Moden",
    "topik": "6.2 Tenaga Nuklear",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah 25 menunjukkan rod boron di dalam sebuah reaktor nuklear.\nApakah fungsi rod boron?\n\nDiagram 25 shows a boron rod in a nuclear reactor.\nWhat is the function of boron rod?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q38_rajah25.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Menyerap tenaga haba / Absorb heat energy"
      },
      {
        "id": "B",
        "teks": "Memperlahankan neutron / Slows down neutrons"
      },
      {
        "id": "C",
        "teks": "Menyerap neutron berlebihan / Absorbs excess neutrons"
      },
      {
        "id": "D",
        "teks": "Menghasilkan tenaga nuklear / Producing nuclear energy"
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Rod pengawal (diperbuat daripada boron atau kadmium) berfungsi menyerap neutron berlebihan untuk mengawal kadar tindak balas berantai pembelahan nukleus di dalam reaktor. (Moderator seperti grafit atau air berat berfungsi memperlahankan neutron).",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q39",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 39,
    "sk": "SK 7.1 Teori Kuantum Cahaya",
    "sp": "SP 7.1.3 Menentukan tenaga foton menggunakan rumus E = hc/λ",
    "spKod": "7.1.3",
    "rujukanDskp": "DSKP Fizik T5 ms 74",
    "rujukanBukuTeks": "Buku Teks T5 Bab 7 ms 228-234",
    "rujukanCheatnote": "Cheatnote T5 Bab 7 ms 1",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 7,
    "babNama": "Fizik Kuantum",
    "bidang": "Fizik Moden",
    "topik": "7.1 Teori Kuantum Cahaya",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Satu cahaya hijau mempunyai panjang gelombang 540 nm. Berapakah tenaga foton yang ada dalam cahaya tersebut?\n[Pemalar Planck, h = 6.63 x 10⁻³⁴ J s]\n[Laju cahaya dalam vakum, c = 3.0 x 10⁸ m s⁻¹]\n\nA green light has a wavelength of 540 nm. How much energy is in the photon of the light?\n[Planck's constant, h = 6.63 x 10⁻³⁴ J s]\n[Speed of light in vacuum, c = 3.0 x 10⁸ m s⁻¹]",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "1.28 x 10⁻¹⁷ J"
      },
      {
        "id": "B",
        "teks": "3.68 x 10⁻¹⁹ J"
      },
      {
        "id": "C",
        "teks": "3.58 x 10⁻⁵⁰ J"
      },
      {
        "id": "D",
        "teks": "1.19 x 10⁻⁵⁸ J"
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Tenaga foton dikira menggunakan rumus E = hc / λ:\nE = (6.63 × 10⁻³⁴ J s × 3.0 × 10⁸ m s⁻¹) / (540 × 10⁻⁹ m)\nE = 1.989 × 10⁻²⁵ / (5.4 × 10⁻⁷)\nE = 3.68 × 10⁻¹⁹ J.",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "TERENGGANU_2026_K1_Q40",
    "sumber": "Percubaan Terengganu 2026",
    "tahun": 2026,
    "noSoalanAsal": 40,
    "sk": "SK 7.3 Teori Fotoelektrik Einstein",
    "sp": "SP 7.3.2 Menyelesaikan masalah melibatkan persamaan fotoelektrik Einstein",
    "spKod": "7.3.2",
    "rujukanDskp": "DSKP Fizik T5 ms 78",
    "rujukanBukuTeks": "Buku Teks T5 Bab 7 ms 238-245",
    "rujukanCheatnote": "Cheatnote T5 Bab 7 ms 2",
    "kertas": 1,
    "tingkatan": 5,
    "babNo": 7,
    "babNama": "Fizik Kuantum",
    "bidang": "Fizik Moden",
    "topik": "7.3 Teori Fotoelektrik Einstein",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 26 menunjukkan kesan fotoelektron terhasil apabila suatu cahaya terkena pada logam sesium.\nApakah yang akan berlaku jika panjang gelombang cahaya yang lebih rendah digunakan?\n\nDiagram 26 shows the photoelectric effect produced when light strikes caesium metal.\nWhat would happen if a lower wavelength of light was used?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/percubaan_terengganu_2026/terengganu_2026_k1_q40_rajah26.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tiada elektron yang terhasil. / No electrons are produced."
      },
      {
        "id": "B",
        "teks": "Keamatan cahaya bertambah. / The light intensity increases."
      },
      {
        "id": "C",
        "teks": "Tenaga kinetik elektron bertambah. / The kinetic energy of the electron increases."
      },
      {
        "id": "D",
        "teks": "Bilangan elektron yang terhasil meningkat. / The number of electrons produced increases."
      }
    ],
    "jawapan": "C",
    "jawapanBetul": "C",
    "penerangan": "Menurut persamaan fotoelektrik Einstein, hf = W + K_maks, atau hc/λ = W + K_maks. Apabila panjang gelombang cahaya λ yang lebih rendah digunakan, tenaga foton (E = hc/λ) meningkat. Kerana fungsi kerja logam sesium W adalah tetap, lebihan tenaga ini ditukarkan kepada tenaga kinetik maksimum fotoelektron (K_maks bertambah).",
    "markah": 1,
    "statusSemakan": "Disemak (Percubaan Terengganu 2026)"
  },
  {
    "id": "MODUL_T4_B1_K1_Q01",
    "sumber": "Percubaan Kelantan 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "\"Arus, Jarak, Tenaga dan Tekanan\" merupakan contoh bagi\n\"Current, Distance, Energy and Pressure\" are examples of",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kuantiti skalar / Scalar quantity"
      },
      {
        "id": "B",
        "teks": "Kuantiti asas / Base quantity"
      },
      {
        "id": "C",
        "teks": "Kuantiti vektor / Vector quantity"
      },
      {
        "id": "D",
        "teks": "Kuantiti terbitan / Derived quantity"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Arus, jarak, tenaga dan tekanan ialah kuantiti yang hanya mempunyai magnitud tanpa arah, maka kesemuanya ialah kuantiti skalar. Walaupun arus mempunyai arah pengaliran, ia mematuhi hukum algebra biasa dan bukan hukum penambahan vektor.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K1_Q02",
    "sumber": "Percubaan Melaka 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara yang berikut, yang manakah merupakan kuantiti skalar?\nWhich of the following is a scalar quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Panjang / Length"
      },
      {
        "id": "B",
        "teks": "Daya / Force"
      },
      {
        "id": "C",
        "teks": "Momentum / Momentum"
      },
      {
        "id": "D",
        "teks": "Berat / Weight"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Panjang hanya mempunyai magnitud sahaja tanpa arah, menjadikannya kuantiti skalar. Daya, momentum, dan berat adalah kuantiti vektor kerana mempunyai kedua-dua magnitud dan arah.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K1_Q03",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Kuantiti manakah adalah kuantiti asas?\nWhich quantity is base quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Laju / Speed"
      },
      {
        "id": "B",
        "teks": "Jisim / Mass"
      },
      {
        "id": "C",
        "teks": "Berat / Weight"
      },
      {
        "id": "D",
        "teks": "Halaju / Velocity"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jisim (mass) merupakan salah satu daripada 7 kuantiti asas dalam Sistem Unit Antarabangsa (SI). Laju, berat dan halaju adalah kuantiti terbitan.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B1_K1_Q04",
    "sumber": "Percubaan Perak 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut, yang manakah kuantiti vektor?\nWhich of the following is a vector quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Laju / Speed"
      },
      {
        "id": "B",
        "teks": "Jisim / Mass"
      },
      {
        "id": "C",
        "teks": "Daya / Force"
      },
      {
        "id": "D",
        "teks": "Tenaga / Energy"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Daya (force) merupakan kuantiti vektor kerana ia mempunyai magnitud dan arah tindakan. Laju, jisim dan tenaga adalah kuantiti skalar.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K1_Q05",
    "sumber": "Percubaan Perlis 2023",
    "tahun": 2023,
    "noSoalanAsal": 5,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara pasangan berikut yang manakah menunjukkan pasangan kuantiti fizik dengan unit yang betul?\nWhich of the following pairs show the correct physical quantity and unit?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju / Velocity : m"
      },
      {
        "id": "B",
        "teks": "Kuasa / Power : Joule, J"
      },
      {
        "id": "C",
        "teks": "Arus elektrik / Electric current : Ampere, A"
      },
      {
        "id": "D",
        "teks": "Suhu termodinamik / Thermodynamic temperature : Darjah Celsius / Degree Celsius"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Unit SI bagi arus elektrik ialah Ampere (A). Unit SI halaju ialah m s^-1, kuasa ialah Watt (W), dan suhu termodinamik ialah Kelvin (K).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K1_Q06",
    "sumber": "Percubaan SBP 2023",
    "tahun": 2023,
    "noSoalanAsal": 6,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Seorang pesakit dermatologi dirawat dengan cahaya ultraungu yang mempunyai panjang gelombang 375 nm. Apakah jenis kuantiti fizik bagi panjang gelombang?\nA dermatology patient is treated with ultraviolet light with a wavelength of 375 nm. What is the type of physical quantity of the wavelength?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kuantiti asas / Base quantity"
      },
      {
        "id": "B",
        "teks": "Kuantiti vektor / Vector quantity"
      },
      {
        "id": "C",
        "teks": "Kuantiti terbitan / Derived quantity"
      },
      {
        "id": "D",
        "teks": "Kuantiti skalar dan terbitan / Scalar and derived quantity"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Panjang gelombang (wavelength) merupakan suatu ukuran panjang, iaitu kuantiti asas berdimensi [L] dengan unit meter.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K1_Q07",
    "sumber": "Percubaan Terengganu 2023",
    "tahun": 2023,
    "noSoalanAsal": 7,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut, yang manakah simbol unit SI bagi kuantiti asas?\nWhich of the following is the SI unit symbol for a basic quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "A s"
      },
      {
        "id": "B",
        "teks": "cd"
      },
      {
        "id": "C",
        "teks": "m V"
      },
      {
        "id": "D",
        "teks": "N m"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Simbol 'cd' bermaksud candela, iaitu unit SI bagi kuantiti asas keamatan berluminositi (luminous intensity).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B1_K1_Q08",
    "sumber": "Percubaan SMKA 2023",
    "tahun": 2023,
    "noSoalanAsal": 8,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara kuantiti fizik berikut, yang manakah merupakan kuantiti terbitan?\nWhich of the following physical quantities is a derived quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kerja / Work"
      },
      {
        "id": "B",
        "teks": "Masa / Time"
      },
      {
        "id": "C",
        "teks": "Jisim / Mass"
      },
      {
        "id": "D",
        "teks": "Panjang / Length"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Kerja (Work = Daya x Sesaran) diterbitkan daripada gabungan kuantiti asas jisim, panjang dan masa (kg m^2 s^-2 atau Joule). Masa, jisim dan panjang adalah kuantiti asas.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K1_Q09",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 9,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara kuantiti fizik berikut, yang manakah kuantiti vektor?\nWhich of the following physical quantity is a vector quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Suhu termodinamik / Thermodynamic temperature"
      },
      {
        "id": "B",
        "teks": "Tenaga kinetik / Kinetic energy"
      },
      {
        "id": "C",
        "teks": "Arus elektrik / Electric current"
      },
      {
        "id": "D",
        "teks": "Berat / Weight"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Berat (weight) ialah daya graviti yang bertindak ke atas suatu objek dan sentiasa mengarah ke pusat bumi (mempunyai arah dan magnitud), maka ia adalah kuantiti vektor.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K1_Q10",
    "sumber": "Percubaan Kedah 2022",
    "tahun": 2022,
    "noSoalanAsal": 10,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Rajah menunjukkan sebatang pembaris.\nDiagram shows a ruler.\n\nInci adalah contoh bagi\nInch is an example of",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k1_q10_rajah1.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "unit S.I. / S.I. unit"
      },
      {
        "id": "B",
        "teks": "unit metrik / metric unit"
      },
      {
        "id": "C",
        "teks": "unit China / Chinese unit"
      },
      {
        "id": "D",
        "teks": "unit imperial / imperial unit"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Inci, kaki, ela, dan batu adalah contoh-contoh unit dalam sistem unit imperial, manakala sentimeter dan meter adalah unit metrik.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K1_Q11",
    "sumber": "Percubaan Kelantan 2022",
    "tahun": 2022,
    "noSoalanAsal": 11,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Pasangan yang manakah adalah betul?\nWhich pair is correct?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Berat / Weight : Vektor / Vector"
      },
      {
        "id": "B",
        "teks": "Jarak / Distance : Vektor / Vector"
      },
      {
        "id": "C",
        "teks": "Halaju / Velocity : Skalar / Scalar"
      },
      {
        "id": "D",
        "teks": "Pecutan / Acceleration : Skalar / Scalar"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berat adalah daya tindakan graviti yang mempunyai magnitud dan arah (ke bawah), maka ia adalah kuantiti vektor yang betul.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K1_Q12",
    "sumber": "Percubaan Melaka 2022",
    "tahun": 2022,
    "noSoalanAsal": 12,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Kuantiti fizik manakah adalah bukan kuantiti asas?\nWhich of the following physical quantities is not a base quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim / Mass"
      },
      {
        "id": "B",
        "teks": "Berat / Weight"
      },
      {
        "id": "C",
        "teks": "Kuantiti jirim / Quantity of matter"
      },
      {
        "id": "D",
        "teks": "Keamatan berluminositi / Luminous intensity"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berat adalah kuantiti terbitan (W = mg), manakala jisim, kuantiti jirim (mol) dan keamatan berluminositi adalah 7 kuantiti asas SI.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B1_K1_Q13",
    "sumber": "Percubaan Melaka 2022",
    "tahun": 2022,
    "noSoalanAsal": 13,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Pasangan kuantiti manakah adalah benar?\nWhich pair of quantity is correct?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kuantiti skalar: Mempunyai magnitud sahaja | Kuantiti vektor: Mempunyai magnitud sahaja"
      },
      {
        "id": "B",
        "teks": "Kuantiti skalar: Mempunyai arah sahaja | Kuantiti vektor: Mempunyai magnitud sahaja"
      },
      {
        "id": "C",
        "teks": "Kuantiti skalar: Mempunyai magnitud sahaja | Kuantiti vektor: Mempunyai arah sahaja"
      },
      {
        "id": "D",
        "teks": "Kuantiti skalar: Mempunyai magnitud sahaja | Kuantiti vektor: Mempunyai magnitud dan arah"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Takrifan kuantiti skalar ialah kuantiti yang mempunyai magnitud sahaja. Takrifan kuantiti vektor ialah kuantiti yang mempunyai magnitud dan arah.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K1_Q14",
    "sumber": "Percubaan MRSM 2022",
    "tahun": 2022,
    "noSoalanAsal": 14,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Kuantiti fizik manakah merupakan kuantiti skalar?\nWhich physical quantity is a scalar quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim / Mass"
      },
      {
        "id": "B",
        "teks": "Berat / Weight"
      },
      {
        "id": "C",
        "teks": "Halaju / Velocity"
      },
      {
        "id": "D",
        "teks": "Pecutan / Acceleration"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jisim hanya mempunyai nilai magnitud tanpa sebarang arah tindakan. Berat, halaju dan pecutan semuanya mempunyai arah tertentu, menjadikannya vektor.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K1_Q15",
    "sumber": "Percubaan MRSM 2022",
    "tahun": 2022,
    "noSoalanAsal": 15,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.2 Memerihalkan kuantiti terbitan dalam sebutan kuantiti asas dan unit asas S.I.",
    "spKod": "1.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Jadual 1 menunjukkan senarai unit kuantiti terbitan. Antara berikut pasangan manakah yang betul?\nTable 1 shows a list of derived quantities and their units. Which of the following pair is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k1_q15_jadual1.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Momentum / Momentum : kg m s^-2"
      },
      {
        "id": "B",
        "teks": "Tekanan / Pressure : N m"
      },
      {
        "id": "C",
        "teks": "Kerja / Work : J m s^-1"
      },
      {
        "id": "D",
        "teks": "Daya / Force : kg m s^-2"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Daya F = ma = (kg)(m s^-2) = kg m s^-2 (atau Newton, N). Momentum adalah kg m s^-1, tekanan ialah N m^-2, dan kerja ialah N m (atau Joule).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K1_Q16",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 16,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut yang manakah bukan merupakan unit asas dalam sistem unit SI?\nWhich of the following is not a base unit in the SI unit system?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Saat / Second"
      },
      {
        "id": "B",
        "teks": "Candela / Candela"
      },
      {
        "id": "C",
        "teks": "Sentimeter / Centimetre"
      },
      {
        "id": "D",
        "teks": "Mol / Mol"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Unit asas SI bagi panjang ialah meter (m), bukan sentimeter (cm). Sentimeter mengandungi imbuhan 'senti'.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K1_Q17",
    "sumber": "Percubaan Perlis 2022",
    "tahun": 2022,
    "noSoalanAsal": 17,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara pasangan berikut, manakah yang menunjukkan pasangan kuantiti asas dan kuantiti terbitan?\nWhich of the following pairs shows a base quantity and derived quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Panjang / Length (Asas) : Suhu / Temperature (Terbitan)"
      },
      {
        "id": "B",
        "teks": "Daya / Force (Asas) : Masa / Time (Terbitan)"
      },
      {
        "id": "C",
        "teks": "Arus elektrik / Electric current (Asas) : Momentum / Momentum (Terbitan)"
      },
      {
        "id": "D",
        "teks": "Laju / Speed (Asas) : Halaju / Velocity (Terbitan)"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Arus elektrik ialah kuantiti asas, manakala momentum (Jisim x Halaju) ialah kuantiti terbitan.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K1_Q18",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 18,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.2 Memerihalkan kuantiti terbitan dalam sebutan kuantiti asas dan unit asas S.I.",
    "spKod": "1.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut, manakah yang betul?\nWhich of the following is correct?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Ketumpatan / Density : m / l^2"
      },
      {
        "id": "B",
        "teks": "Pecutan / Acceleration : l / t"
      },
      {
        "id": "C",
        "teks": "Momentum / Momentum : m l / t"
      },
      {
        "id": "D",
        "teks": "Luas / Area : l^3"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Momentum = jisim x halaju = m x (l / t) = m l t^-1. Ketumpatan adalah m/l^3, pecutan adalah l/t^2, dan luas adalah l^2.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K1_Q19",
    "sumber": "Percubaan Kedah 2021",
    "tahun": 2021,
    "noSoalanAsal": 19,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Kuantiti manakah adalah kuantiti terbitan?\nWhich quantity is derived quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya / Force"
      },
      {
        "id": "B",
        "teks": "Kuantiti bahan / Amount of substance"
      },
      {
        "id": "C",
        "teks": "Arus / Current"
      },
      {
        "id": "D",
        "teks": "Keamatan cahaya / Luminous intensity"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Daya (Force) diterbitkan daripada jisim, panjang dan masa (F = ma). Kuantiti bahan (mol), arus (A) dan keamatan cahaya (cd) adalah kuantiti asas.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K1_Q20",
    "sumber": "Percubaan Selangor Set 1 2021",
    "tahun": 2021,
    "noSoalanAsal": 20,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut yang manakah simbol bagi unit asas SI?\nWhich of the following is a symbol of a base SI unit?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "s"
      },
      {
        "id": "B",
        "teks": "N"
      },
      {
        "id": "C",
        "teks": "°C"
      },
      {
        "id": "D",
        "teks": "J"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Simbol 's' mewakili saat (second), iaitu unit asas SI bagi masa. Newton (N) dan Joule (J) adalah unit terbitan, manakala unit asas suhu ialah Kelvin (K), bukan °C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K1_Q21",
    "sumber": "Percubaan Selangor Set 2 2021",
    "tahun": 2021,
    "noSoalanAsal": 21,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara kuantiti fizik yang berikut, manakah dipadankan dengan unit SI yang betul?\nWhich of the following physical quantities matched with the correct SI unit?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Masa / Time : Minit / Minute"
      },
      {
        "id": "B",
        "teks": "Jisim / Mass : Kilogram / Kilogram"
      },
      {
        "id": "C",
        "teks": "Panjang / Length : Kilometer / Kilometer"
      },
      {
        "id": "D",
        "teks": "Daya / Force : Joule / Joule"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Unit SI bagi jisim ialah kilogram (kg). Unit SI masa ialah saat, panjang ialah meter, dan daya ialah Newton.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B1_K1_Q22",
    "sumber": "Percubaan MRSM 2021",
    "tahun": 2021,
    "noSoalanAsal": 22,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut yang manakah adalah unit imperial?\nWhich of the following is the imperial unit?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Inci / Inch"
      },
      {
        "id": "B",
        "teks": "Mol / Mole"
      },
      {
        "id": "C",
        "teks": "Meter / Meter"
      },
      {
        "id": "D",
        "teks": "Candela / Candela"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Inci ialah unit ukuran imperial bagi panjang. Mol, meter dan candela ialah unit piawai SI.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K1_Q23",
    "sumber": "Percubaan Negeri Sembilan 2021",
    "tahun": 2021,
    "noSoalanAsal": 23,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut yang manakah kesemuanya kuantiti terbitan?\nWhich of the following are all derived quantities?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya, masa, panjang / Force, time, length"
      },
      {
        "id": "B",
        "teks": "Momentum, daya, halaju / Momentum, force, velocity"
      },
      {
        "id": "C",
        "teks": "Panjang, halaju, suhu / Length, velocity, temperature"
      },
      {
        "id": "D",
        "teks": "Masa, suhu, arus elektrik / Time, temperature, electric current"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Momentum, daya, dan halaju kesemuanya diterbitkan daripada gabungan kuantiti asas. Pilihan lain mengandungi kuantiti asas seperti panjang, masa, suhu, dan arus elektrik.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B1_K1_Q24",
    "sumber": "Percubaan Pahang 2021",
    "tahun": 2021,
    "noSoalanAsal": 24,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.2 Memerihalkan kuantiti terbitan dalam sebutan kuantiti asas dan unit asas S.I.",
    "spKod": "1.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Apakah kuantiti-kuantiti asas dalam pecutan?\nWhat are the base quantities in acceleration?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Laju dan masa / Speed and time"
      },
      {
        "id": "B",
        "teks": "Panjang dan masa / Length and time"
      },
      {
        "id": "C",
        "teks": "Panjang dan laju / Length and speed"
      },
      {
        "id": "D",
        "teks": "Laju dan halaju / Speed and velocity"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Pecutan = Halaju / Masa = (Panjang / Masa) / Masa = Panjang / Masa^2. Oleh itu, kuantiti asas yang terlibat adalah panjang dan masa.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B1_K1_Q25",
    "sumber": "Percubaan SBP 2021",
    "tahun": 2021,
    "noSoalanAsal": 25,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut yang manakah kuantiti asas dan unit SI yang betul?\nWhich of the following base quantity and its SI unit is correct?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim / Mass : g"
      },
      {
        "id": "B",
        "teks": "Arus / Current : mA"
      },
      {
        "id": "C",
        "teks": "Masa / Time : h"
      },
      {
        "id": "D",
        "teks": "Suhu / Temperature : K"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Unit SI bagi suhu termodinamik ialah Kelvin (K). Unit SI bagi jisim ialah kg (bukan g), arus ialah A (bukan mA), dan masa ialah s (bukan h).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K1_Q26",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 26,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Pilih kuantiti fizik yang betul bagi kuantiti terbitan dan kuantiti vektor.\nChoose the right physical quantity for derived quantity and vector quantity.",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Luas / Area"
      },
      {
        "id": "B",
        "teks": "Laju / Speed"
      },
      {
        "id": "C",
        "teks": "Ketumpatan / Density"
      },
      {
        "id": "D",
        "teks": "Pecutan / Acceleration"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Pecutan (acceleration) diterbitkan daripada halaju dan masa (kuantiti terbitan) dan mempunyai kedua-dua magnitud serta arah (kuantiti vektor). Luas, laju dan ketumpatan ialah kuantiti skalar.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K1_Q27",
    "sumber": "Soalan Sebenar SPM 2021",
    "tahun": 2021,
    "noSoalanAsal": 27,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Kuantiti manakah adalah kuantiti asas?\nWhich quantity is a base quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kuasa / Power"
      },
      {
        "id": "B",
        "teks": "Tenaga / Energy"
      },
      {
        "id": "C",
        "teks": "Arus / Current"
      },
      {
        "id": "D",
        "teks": "Beza keupayaan / Potential difference"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Arus elektrik (Electric current) ialah satu daripada 7 kuantiti asas SI. Kuasa, tenaga dan beza keupayaan adalah kuantiti terbitan.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K2_Q01",
    "sumber": "Percubaan Melaka 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah menunjukkan graf y melawan x.\nDiagram shows a graph y against x.\n\nApakah hubungan bagi graf di atas?\nWhat is the relationship for the graph above?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q01_rajah2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "y berkadar terus dengan x / y directly proportional to x"
      },
      {
        "id": "B",
        "teks": "y berkadar songsang dengan x / y inversely proportional to x"
      },
      {
        "id": "C",
        "teks": "y berkurang secara linear dengan x / y decreases linearly to x"
      },
      {
        "id": "D",
        "teks": "y meningkat secara linear dengan x / y increasing linearly to x"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Graf garis lurus dengan kecerunan positif yang tidak melalui titik asalan (mempunyai pintasan-y positif c > 0) menunjukkan hubungan 'y meningkat (bertambah) secara linear dengan x'. Jika ia bermula dari asalan (0,0), barulah ia 'berkadar terus'.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K2_Q02",
    "sumber": "Percubaan Pulau Pinang 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Seorang murid mengkaji beberapa persamaan seperti ditunjukkan dalam Rajah.\nA student studies some equations as shown in Diagram.\n\nBerapakah kuantiti vektor yang terlibat dalam tiga persamaan di atas?\nHow many vector quantities are involved in the above three equations?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q02_rajah3.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "2"
      },
      {
        "id": "B",
        "teks": "3"
      },
      {
        "id": "C",
        "teks": "4"
      },
      {
        "id": "D",
        "teks": "5"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Kuantiti-kuantiti vektor yang terlibat dalam tiga persamaan tersebut ialah: (1) halaju (velocity), (2) sesaran (displacement), (3) daya (force), dan (4) pecutan (acceleration). Jisim, masa, kuasa dan kerja adalah kuantiti skalar. Terdapat 4 kuantiti vektor berbeza.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K2_Q03",
    "sumber": "Percubaan Perlis 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Berikut ialah rumus bagi pengayunan bandul ringkas di mana T ialah tempoh, l ialah panjang dan g ialah pecutan disebabkan oleh graviti:\nThe following is the formula used for a simple pendulum swing where T is period, l is length and g is acceleration due to the gravity:\n\nT = 2π √(l/g)\n\nManakah antara berikut memberikan hubungan yang betul berdasarkan rumus di atas?\nWhich of the following give the correct relationship based on the above formula?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "T berkadar terus dengan l / T directly proportional with l"
      },
      {
        "id": "B",
        "teks": "T berkadar songsang dengan g / T inversely proportional with g"
      },
      {
        "id": "C",
        "teks": "Graf T melawan l mewakili graf garis lurus / Graph T against l represents a linear graph"
      },
      {
        "id": "D",
        "teks": "Graf T^2 melawan l mewakili graf garis lurus / Graph T^2 against l represents a linear graph"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Berdasarkan rumus T = 2π √(l/g), apabila dikuasaduakan menjadi T^2 = (4π^2 / g) l. Oleh itu, T^2 berkadar terus dengan l, dan graf T^2 melawan l merupakan graf garis lurus yang melalui titik asalan.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K2_Q04",
    "sumber": "Percubaan SBP 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Seorang penumpang dalam kapal terbang melihat laluan penerbangan pada peta dipaparkan skrin seperti ditunjukkan dalam Rajah semasa penerbangannya ke ibu negara Belgium, Brussels.\nA passenger in an airplane watching the flight path on the map on screen as shown in Diagram during his flight to Belgium capital, Brussels.\n\nApakah kuantiti fizikal yang mewakili laluan penerbangan di atas skrin tersebut?\nWhat is the physical quantity that represent the flight path on the screen?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q04_rajah4.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Laju / Speed"
      },
      {
        "id": "B",
        "teks": "Halaju / Velocity"
      },
      {
        "id": "C",
        "teks": "Pecutan / Acceleration"
      },
      {
        "id": "D",
        "teks": "Sesaran / Displacement"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Laluan penerbangan dari titik pelepasan ke destinasi dengan jarak terpendek beserta arah mewakili sesaran (displacement).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K2_Q05",
    "sumber": "Percubaan Kelantan 2022",
    "tahun": 2022,
    "noSoalanAsal": 5,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Graf manakah menunjukkan P bertambah secara linear dengan Q?\nWhich graph shows P increases linearly with Q?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q05_opt_a.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q05_opt_b.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q05_opt_c.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q05_opt_d.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Hubungan 'P bertambah secara linear dengan Q' diwakili oleh graf garis lurus berkecerunan positif yang mempunyai pintasan pada paksi menegak (persamaan P = mQ + c di mana c > 0).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)"
  },
  {
    "id": "MODUL_T4_B1_K2_Q06",
    "sumber": "Percubaan Melaka 2022",
    "tahun": 2022,
    "noSoalanAsal": 6,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah menunjukkan satu graf isipadu, V melawan suhu, θ bagi suatu gas.\nDiagram shows a graph volume, V against temperature, θ for a gas.\n\nApakah hubungan antara V dan θ bagi gas tersebut?\nWhat is the relationship between V and θ for the gas?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q06_rajah5.webp?v=20260923_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "V berkadar terus dengan θ / V is directly proportional with θ"
      },
      {
        "id": "B",
        "teks": "V berkadar songsang dengan θ / V is inversely proportional with θ"
      },
      {
        "id": "C",
        "teks": "V berkurang secara linear dengan θ / V is decreasing linearly with θ"
      },
      {
        "id": "D",
        "teks": "V bertambah secara linear dengan θ / V is increasing linearly with θ"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Graf garis lurus menunjukkan pintasan positif pada paksi-V pada 0 °C (V_0) dan kecerunan positif. Oleh itu, V bertambah secara linear dengan suhu θ dalam unit darjah Celsius.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)"
  },
  {
    "id": "MODUL_T4_B1_K2_Q07",
    "sumber": "Percubaan Negeri Sembilan 2022",
    "tahun": 2022,
    "noSoalanAsal": 7,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah menunjukkan satu alat pengukuran sedang digunakan untuk mengukur satu kuantiti fizik.\nDiagram shows a measuring instrument being used to measure one physical quantity.\n\nManakah antara pernyataan berikut benar?\nWhich of the following statement is true?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q07_rajah6.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kuantiti: Arus elektrik | Jenis: Kuantiti asas dan kuantiti skalar"
      },
      {
        "id": "B",
        "teks": "Kuantiti: Keamatan berluminositi | Jenis: Kuantiti terbitan dan kuantiti skalar"
      },
      {
        "id": "C",
        "teks": "Kuantiti: Keamatan berluminositi | Jenis: Kuantiti asas dan kuantiti skalar"
      },
      {
        "id": "D",
        "teks": "Kuantiti: Arus elektrik | Jenis: Kuantiti asas dan kuantiti vektor"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Meter lux digunakan untuk mengukur keamatan cahaya/keamatan berluminositi, yang merupakan kuantiti asas dan kuantiti skalar.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K2_Q08",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 8,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah menunjukkan graf y melawan x.\nDiagram shows a graph y against x.\n\nApakah hubungan bagi graf di atas?\nWhat is the relationship for the graph above?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q08_rajah7.webp?v=20260923_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "y berkadar terus dengan x / y directly proportional to x"
      },
      {
        "id": "B",
        "teks": "y berkadar songsang dengan x / y inversely proportional to x"
      },
      {
        "id": "C",
        "teks": "y berkurang secara linear dengan x / y decreases linearly to x"
      },
      {
        "id": "D",
        "teks": "y meningkat secara linear dengan x / y increasing linearly to x"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Graf garis lurus yang bermula dari titik asalan (0,0) dengan kecerunan positif menunjukkan hubungan y berkadar terus dengan x (y ∝ x).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K2_Q09",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 9,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah menunjukkan maklumat tentang sebiji mentol yang dipaparkan di sebuah kedai lampu.\nDiagram shows information about a light bulb displayed in a light shop.\n\nManakah antara maklumat yang diberikan dalam Rajah adalah kuantiti asas?\nWhich of the details given in Diagram is a base quantity?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q09_rajah8.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kuasa / Power (40 W)"
      },
      {
        "id": "B",
        "teks": "Voltan diperlukan / Voltage required (230 V)"
      },
      {
        "id": "C",
        "teks": "Keamatan berluminositi / Luminous intensity (7543 cd)"
      },
      {
        "id": "D",
        "teks": "Luas permukaan diterangi cahaya / Illuminated surface area (0.88 m^2)"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Keamatan berluminositi (dengan unit candela, cd) ialah kuantiti asas. Kuasa, voltan dan luas ialah kuantiti terbitan.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K2_Q10",
    "sumber": "Percubaan Selangor Set 1 2022",
    "tahun": 2022,
    "noSoalanAsal": 10,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah menunjukkan graf garis antara dua pemboleh ubah.\nDiagram shows a line graph between two variables.\n\nPernyataan manakah yang benar berkaitan graf tersebut?\nWhich statement is true about the graph?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q10_rajah9.webp?v=20260923_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "y berkadar songsang dengan x / y is inversely proportional to x"
      },
      {
        "id": "B",
        "teks": "Semakin tinggi x, semakin tinggi y / The higher the x, the higher the y"
      },
      {
        "id": "C",
        "teks": "y berkurang secara linear dengan x / y decreases linearly with x"
      },
      {
        "id": "D",
        "teks": "Kecerunan graf adalah menurun / The gradient of the graph is decreasing"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Graf garis lurus berkecerunan negatif (m < 0) dengan pintasan paksi menegak positif (c > 0) menunjukkan hubungan \"y berkurang secara linear dengan x\" (persamaan y = -mx + c).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K2_Q11",
    "sumber": "Percubaan Selangor Set 2 2022",
    "tahun": 2022,
    "noSoalanAsal": 11,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "• Mempunyai kecerunan positif / Has a positive gradient\n• y berkadar songsang dengan x / y is inversely proportional to x\n\nGraf yang manakah betul berdasarkan pernyataan di atas?\nWhich graph is correct based on the statements above?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q11_opt_a.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q11_opt_b.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q11_opt_c.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q11_opt_d.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Apabila y berkadar songsang dengan x (y ∝ 1/x), pemplotan graf y melawan 1/x menghasilkan graf garis lurus yang melalui titik asalan dengan kecerunan positif.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)"
  },
  {
    "id": "MODUL_T4_B1_K2_Q12",
    "sumber": "Percubaan Kelantan 2021",
    "tahun": 2021,
    "noSoalanAsal": 12,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Graf manakah menunjukkan P berkadar songsang dengan Q?\nWhich graph shows P is inversely proportional to Q?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q12_opt_a.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q12_opt_b.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q12_opt_c.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q12_opt_d.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "P berkadar songsang dengan Q bermaksud P ∝ 1/Q. Graf garis lurus yang melalui titik asalan bagi paksi menegak P dan paksi mengufuk 1/Q mengesahkan hubungan songsang tersebut.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)"
  },
  {
    "id": "MODUL_T4_B1_K2_Q13",
    "sumber": "Percubaan Melaka 2021",
    "tahun": 2021,
    "noSoalanAsal": 13,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah menunjukkan graf x melawan a.\nDiagram shows the graph of x against a.\n\nApakah hubungan antara x dan a?\nWhat is the relationship between x and a?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q13_rajah10.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "x berkadar secara songsang kepada a / x is inversely proportional to a"
      },
      {
        "id": "B",
        "teks": "x berkurang secara linear kepada a / x decreases linearly to a"
      },
      {
        "id": "C",
        "teks": "x berkurang secara linear kepada 1/a / x decreases linearly to 1/a"
      },
      {
        "id": "D",
        "teks": "x berkadar secara langsung kepada 1/a / x is directly proportional to 1/a"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan graf lengkung hiperbola x melawan a yang mencuram ke bawah tanpa memintas paksi, hubungan antara kuantiti x dan a ialah \"x berkadar secara songsang kepada a\" (x ∝ 1/a) [Pilihan A]. (Nota: Dari segi matematik dan linearisasi, x juga berkadar terus / secara langsung kepada 1/a seperti dalam Pilihan D. Pilihan B adalah salah sama sekali kerana graf lengkung bukan hubungan linear).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K2_Q14",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 14,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.2 Menganalisis graf untuk mendapatkan rumusan siasatan",
    "spKod": "1.2.2",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Graf menunjukkan hubungan antara P dan T.\nGraph shows the relationship between P and T.\n\nHubungan P dan T boleh diwakili oleh persamaan\nRelationship between P and T can be represented by equation",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q14_graf.webp?v=20260923_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "P = T + 5"
      },
      {
        "id": "B",
        "teks": "P = T + 1"
      },
      {
        "id": "C",
        "teks": "P = -T + 5"
      },
      {
        "id": "D",
        "teks": "P = -T + 1"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Daripada graf: pintasan-y (paksi P) ialah 5, dan pintasan-x (paksi T) ialah 5. Kecerunan m = (0 - 5) / (5 - 0) = -1. Oleh itu mengikut persamaan garis lurus y = mx + c: P = -T + 5.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)"
  },
  {
    "id": "MODUL_T4_B1_K2_Q15",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 15,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.2 Memerihalkan kuantiti terbitan dalam sebutan kuantiti asas dan unit asas S.I.",
    "spKod": "1.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Tempoh ayunan untuk suatu neraca inersia diberi oleh T^2 = k m; di mana T ialah tempoh ayunan dan unitnya ialah s, m ialah jisim dan unitnya kg, k ialah suatu pemalar. Apakah unit bagi k?\nPeriod of oscillation for an inertia balance is given by T^2 = k m; where T is period of oscillation and its unit is s, m is mass and its unit is kg, k is a constant. What is the unit of k?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "kg s"
      },
      {
        "id": "B",
        "teks": "kg s^-1"
      },
      {
        "id": "C",
        "teks": "kg^-1 s^2"
      },
      {
        "id": "D",
        "teks": "kg^2 s^-1"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Dari persamaan T^2 = k m, maka k = T^2 / m. Menggantikan unit SI: unit k = (s)^2 / (kg) = kg^-1 s^2.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K2_Q16",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 16,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.2 Memerihalkan kuantiti terbitan dalam sebutan kuantiti asas dan unit asas S.I.",
    "spKod": "1.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Suatu kuantiti terbitan diperolehi daripada pembahagian jarak dengan masa. Apakah unit S.I. kuantiti ini?\nA derived quantity is obtained from the division of distance by time. What is the S.I. unit for this quantity?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "m s"
      },
      {
        "id": "B",
        "teks": "m s^-1"
      },
      {
        "id": "C",
        "teks": "cm s^-1"
      },
      {
        "id": "D",
        "teks": "km s^-1"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Pembahagian jarak (unit SI: meter, m) dengan masa (unit SI: saat, s) menghasilkan laju/halaju dengan unit SI m s^-1.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B1_K2_Q17",
    "sumber": "Soalan Sebenar SPM 2022",
    "tahun": 2022,
    "noSoalanAsal": 17,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 4-6",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah menunjukkan arahan pada label kotak makanan.\nDiagram shows an instruction on the food box label.\n\nAntara kuantiti asas yang berikut, yang manakah dinyatakan dalam label itu?\nWhich of the following basic quantities is stated in the label?\n\nI  Jisim / Mass (55.2 g)\nII Masa / Time (3 minit)\nIII Suhu / Temperature (80 °C)\nIV Panjang / Length",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q17_rajah11.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "I sahaja / I only"
      },
      {
        "id": "B",
        "teks": "I dan II / I and II"
      },
      {
        "id": "C",
        "teks": "I, II dan III / I, II and III"
      },
      {
        "id": "D",
        "teks": "I, II, III dan IV / I, II, III and IV"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Pada label: Jisim (55.2 g), Masa (3 minit), dan Suhu (80 °C) kesemuanya merupakan kuantiti asas yang dinyatakan. Panjang tidak dinyatakan (isipadu air 150 cm^3 adalah kuantiti terbitan, bukan panjang). Oleh itu, I, II dan III sahaja.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K2_Q18",
    "sumber": "Soalan Sebenar SPM 2022",
    "tahun": 2022,
    "noSoalanAsal": 18,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah menunjukkan graf P melawan V.\nDiagram shows a graph of P against V.\n\nAntara berikut, hubungan manakah yang betul?\nWhich of the following relationship is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k2_q18_rajah12.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "P berkurang secara linear dengan V / P decreases linearly with V"
      },
      {
        "id": "B",
        "teks": "V bertambah secara linear dengan P / V increases linearly with P"
      },
      {
        "id": "C",
        "teks": "P berkadar songsang dengan V / P is inversely proportional to V"
      },
      {
        "id": "D",
        "teks": "P berkadar langsung dengan V / P is directly proportional to V"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Graf garis melengkung hiperbola bagi P melawan V menunjukkan bahawa P berkadar songsang dengan V (P ∝ 1/V mengikut Hukum Boyle). Pilihan A adalah salah kerana hubungan ini bukan garis lurus berkurang secara linear.",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K2_Q19",
    "sumber": "Soalan Sebenar SPM 2023",
    "tahun": 2023,
    "noSoalanAsal": 19,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.3 Menjelaskan dengan contoh kuantiti skalar dan kuantiti vektor",
    "spKod": "1.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 7-9",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 1-2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Maklumat di bawah menunjukkan laju dan arah sebuah kapal terbang:\nThe information below shows the speed and the direction of an aeroplane:\n\n\"Sebuah kapal terbang bergerak dengan kelajuan tetap 600 km j^-1 ke arah barat.\"\n\"An aeroplane moves at a uniform speed of 600 km h^-1 to the west.\"\n\nP: Kuantiti asas / Base quantity\nQ: Kuantiti terbitan / Derived quantity\nR: Kuantiti skalar / Scalar quantity\nS: Kuantiti vektor / Vector quantity\n\nAntara kombinasi kuantiti berikut, yang manakah terdapat dalam pernyataan di atas?\nWhich of the following combination of quantities are found in the statement above?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "P, R"
      },
      {
        "id": "B",
        "teks": "Q, R"
      },
      {
        "id": "C",
        "teks": "P, S"
      },
      {
        "id": "D",
        "teks": "Q, S"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Kelajuan 600 km j^-1 bersama arah 'ke barat' membentuk halaju (velocity), iaitu kuantiti terbitan (Q) dan kuantiti vektor (S).",
    "markah": 1,
    "statusSemakan": "Disemak (SPM Sebenar)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K3_Q01",
    "sumber": "Percubaan Negeri Sembilan 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.1 Mentafsir bentuk-bentuk graf untuk menentukan hubungan antara dua kuantiti fizik",
    "spKod": "1.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Formula di bawah menunjukkan hubungan di antara tempoh ayunan bandul dan beberapa kuantiti fizik yang lain:\nThe formula below shows the relationship between the period of oscillation of a pendulum and several other physical quantities:\n\nT = 2π √(l/g)\n\nManakah antara graf berikut adalah benar?\nWhich of the following graphs is true?",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q01_opt_a.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q01_opt_b.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q01_opt_c.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q01_opt_d.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan rumus T = 2π √(l/g), T adalah berkadar terus dengan 1/√g (iaitu T = (2π√l) x (1/√g)). Oleh itu, graf T melawan 1/√g adalah garis lurus yang melalui titik asalan.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)"
  },
  {
    "id": "MODUL_T4_B1_K3_Q02",
    "sumber": "Percubaan Pulau Pinang 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.2 Menganalisis graf untuk mendapatkan rumusan siasatan",
    "spKod": "1.2.2",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah menunjukkan hubungan antara jarak imej, v dengan pembesaran, M untuk sebuah kanta cembung:\nDiagram shows the relationship between image distance, v and magnification, M for a convex lens:\n\nv - 10 = 10M\n\nAntara graf-graf berikut, yang manakah menunjukkan hubungan antara v dengan M bagi persamaan di atas?\nWhich of the following graphs shows the relationship between v and M for the above equation?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q02_rajah13.webp?v=20260923_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q02_opt_a.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q02_opt_b.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q02_opt_c.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q02_opt_d.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Menyusun persamaan dalam bentuk persamaan linear y = mx + c: v = 10M + 10. Di mana y = v, x = M, kecerunan m = 10, dan pintasan paksi menegak c = 10. Graf yang tepat ialah Graf A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)"
  },
  {
    "id": "MODUL_T4_B1_K3_Q03",
    "sumber": "Percubaan Perlis 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 1.1 Kuantiti Fizik",
    "sp": "SP 1.1.1 Mengenal pasti kuantiti asas dan kuantiti terbitan",
    "spKod": "1.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 26",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 18-22",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 2",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.1 Kuantiti Fizik",
    "aras": "Rendah",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah menunjukkan sebatang pembaris yang digunakan untuk mengukur panjang suatu objek.\nDiagram shows a ruler which is used to measure length of an object.\n\nApakah skala terkecil yang boleh diukur oleh pembaris tersebut?\nWhat is the smallest scale that can be measured by the ruler?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q03_rajah14.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "0.1 cm"
      },
      {
        "id": "B",
        "teks": "0.01 cm"
      },
      {
        "id": "C",
        "teks": "0.1 mm"
      },
      {
        "id": "D",
        "teks": "0.01 mm"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Skala terkecil (kejituan / kepersisan) bagi pembaris meter metrik ialah 1 mm atau 0.1 cm.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B1_K3_Q04",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.2 Menganalisis graf untuk mendapatkan rumusan siasatan",
    "spKod": "1.2.2",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah menunjukkan graf perubahan tenaga kinetik bagi fotoelektron yang dibebaskan daripada logam litium pada frekuensi cahaya yang berlainan.\nDiagram shows a graph of the change in kinetic energy of photoelectrons released from lithium metal at different light frequency.\n\nDaripada graf, tentukan nilai tenaga kinetik bagi litium tersebut apabila frekuensi cahayanya ialah 8 × 10^14 Hz.\nFrom the graph, determine the kinetic energy of lithium when its light frequency is 8 × 10^14 Hz.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k3_q04_rajah15.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "1.0 eV"
      },
      {
        "id": "B",
        "teks": "1.2 eV"
      },
      {
        "id": "C",
        "teks": "2.0 eV"
      },
      {
        "id": "D",
        "teks": "2.2 eV"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Melalui kaedah interpolasi graf pada paksi frekuensi f = 8 × 10^14 Hz, unjuran menegak ke garis graf dan kemudian mengufuk ke paksi tenaga kinetik K memberikan bacaan tepat K = 1.2 eV. [Nota Konteks: Soalan ini berasaskan Kesan Fotoelektrik (T5 Bab 7: Fizik Kuantum, Percubaan MRSM 2023), namun dimasukkan ke dalam modul T4 Bab 1 kerana menguji Konstruk 3 Mengaplikasi (SP 1.2.2 Kemahiran Interpolasi Graf)].",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B1_K4_Q01",
    "sumber": "Percubaan SBP 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.3 Menjalankan penyiasatan saintifik dan menulis laporan lengkap",
    "spKod": "1.2.3",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 15-17",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah menunjukkan satu susunan radas untuk mengkaji hubungan antara pemanjangan suatu gelang dengan daya.\nDiagram shows an arrangement of apparatus to study the relationship between the extension of a rubber band and force.\n\nPernyataan hipotesis manakah yang betul?\nWhich hypothesis statement is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k4_q01_rajah16.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pemanjangan suatu gelang getah bergantung kepada daya / The extension of a rubber band depends on the force"
      },
      {
        "id": "B",
        "teks": "Pemanjangan suatu gelang getah berkadar terus dengan daya / The extension of a rubber band is directly proportional force"
      },
      {
        "id": "C",
        "teks": "Pemanjangan suatu gelang getah berkadar songsang dengan daya / The extension of a rubber band is inversely proportional force"
      },
      {
        "id": "D",
        "teks": "Semakin bertambah daya, semakin bertambah pemanjangan suatu gelang getah / The higher the force, the higher the extension of a rubber band"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Pernyataan hipotesis saintifik yang betul menyatakan hubungan arah yang boleh diuji antara pemboleh ubah dimanipulasi (daya) dan pemboleh ubah bergerak balas (pemanjangan gelang getah): 'Semakin bertambah daya, semakin bertambah pemanjangan suatu gelang getah'. Pilihan B tidak tepat secara umum kerana gelang getah bukan spring Hooke yang ideal.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B1_K4_Q02",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 2,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.2 Menganalisis graf untuk mendapatkan rumusan siasatan",
    "spKod": "1.2.2",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 10-14",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah menunjukkan graf R melawan 1/A.\nDiagram shows a graph of R against 1/A.\n\nPernyataan manakah adalah betul?\nWhich statement is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k4_q02_rajah17.webp?v=20260923_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "R adalah berkadar terus dengan A / R is directly proportional to A"
      },
      {
        "id": "B",
        "teks": "R adalah berkadar songsang dengan 1/A / R is inversely proportional to 1/A"
      },
      {
        "id": "C",
        "teks": "Unit bagi kecerunan graf adalah kΩ mm² / Unit for the gradient of the graph is kΩ mm²"
      },
      {
        "id": "D",
        "teks": "Nilai bagi kecerunan diberikan oleh 0.0005 / 5 / The value of the gradient is given by 0.0005 / 5"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Unit kecerunan graf m = ΔR / Δ(1/A) = kΩ / (mm^-2) = kΩ mm^2. Maka pernyataan C adalah betul mengikut konsep fizik dan skema rasmi. Pilihan A salah kerana R berkadar terus dengan 1/A (bukan A). Pilihan B salah kerana R berkadar terus dengan 1/A (bukan berkadar songsang). Pilihan D salah kerana kecerunan ialah 5 / 0.0005 (bukan 0.0005 / 5).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B1_K4_Q03",
    "sumber": "Percubaan Sarawak 2021",
    "tahun": 2021,
    "noSoalanAsal": 3,
    "sk": "SK 1.2 Penyiasatan Saintifik",
    "sp": "SP 1.2.3 Menjalankan penyiasatan saintifik dan menulis laporan lengkap",
    "spKod": "1.2.3",
    "rujukanDskp": "DSKP Fizik T4 ms 27",
    "rujukanBukuTeks": "Buku Teks T4 Bab 1 ms 15-17",
    "rujukanCheatnote": "Cheatnote T4 Bab 1 ms 3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 1,
    "babNama": "Pengukuran",
    "bidang": "Asas Fizik",
    "topik": "1.2 Penyiasatan Saintifik",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah menunjukkan situasi di taman permainan di mana dua orang budak mendapati kedua-dua buaian berayun dengan kelajuan berbeza.\nDiagram shows a situation in a playground where two kids find the swings swinging at different speeds.\n\nApakah pembolehubah dimanipulasikan dan pembolehubah bergerak balas yang sesuai?\nWhat is the suitable manipulated variable and responding variable?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b1/t4_b1_k4_q03_rajah18.webp?v=20260923_v2",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pembolehubah dimanipulasikan: Jisim ladung / Mass of bob | Pembolehubah bergerak balas: Tempoh ayunan / Period of oscillation"
      },
      {
        "id": "B",
        "teks": "Pembolehubah dimanipulasikan: Panjang bandul / Length of pendulum | Pembolehubah bergerak balas: Tempoh ayunan / Period of oscillation"
      },
      {
        "id": "C",
        "teks": "Pembolehubah dimanipulasikan: Kelajuan bandul / Speed of pendulum | Pembolehubah bergerak balas: Panjang bandul / Length of pendulum"
      },
      {
        "id": "D",
        "teks": "Pembolehubah dimanipulasikan: Tempoh ayunan / Period of oscillation | Pembolehubah bergerak balas: Kelajuan bandul / Speed of pendulum"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan situasi buaian (bandul ringkas), faktor utama yang mempengaruhi ayunan ialah panjang tali buaian. Oleh itu, pembolehubah dimanipulasikan yang sesuai ialah panjang bandul (panjang buaian), manakala pembolehubah bergerak balas ialah tempoh ayunan (masa satu ayunan lengkap) [Pilihan B].",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K1_Q01",
    "sumber": "Percubaan Negeri Sembilan 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 2.8 Berat",
    "sp": "SP 2.8.1 Menyatakan berat sebagai daya graviti yang bertindak ke atas suatu objek, W = mg",
    "spKod": "2.8.1",
    "rujukanDskp": "DSKP Fizik T4 ms 42",
    "rujukanBukuTeks": "Buku Teks T4 ms 79-82",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 20",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.8 Berat",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut yang manakah benar mengenai\nberat?\nWhich of the following is true about weigh?\n(Negeri Sembilan: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "adalah kuantiti skalar is a / scalar quantity"
      },
      {
        "id": "B",
        "teks": "adalah diukur dalam unit kg m s? is measured in unit of kg m s?"
      },
      {
        "id": "C",
        "teks": "adalah merupakan kuantiti asas / is a based quantity"
      },
      {
        "id": "D",
        "teks": "tidak bergantung kepada kekuatan medan graviti not depends on / the gravitational field strength"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berat ialah daya graviti yang bertindak ke atas suatu objek (W = mg). Berat merupakan kuantiti vektor (diukur dalam Newton, N) yang bergantung kepada kekuatan medan graviti, berbeza dengan jisim yang merupakan kuantiti asas malar (kg). Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K1_Q02",
    "sumber": "Percubaan Pulau Pinang 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.1 Mendefinisikan daya sebagai kadar perubahan momentum, F = ma (Hukum Gerakan Newton Kedua)",
    "spKod": "2.6.1",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Permyataandi bawahadalahdinyatakandalam ..\nThe statement below is stated in ...\n(Pulau Pinang: 2023)\nKadar perubahan momentum adalah\nberkadar terus dengan daya paduan.\"\n\"The rate of change of momentum is directly\nproportional to the resultant force.\"",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum inersia / Law of inertia"
      },
      {
        "id": "B",
        "teks": "Hukum Gerakan Newton Pertama / Newton's First Law of Motion"
      },
      {
        "id": "C",
        "teks": "Hukum Gerakan Newton Kedua / Newton's Second Law of Motion"
      },
      {
        "id": "D",
        "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Inersia ialah sifat semula jadi suatu objek yang menentang sebarang perubahan kepada keadaan asalnya, sama ada keadaan pegun atau keadaan gerakan (Hukum Gerakan Newton Pertama). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K1_Q03",
    "sumber": "Percubaan Perlis 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Apakah yang dimaksudkan dengan objek yang\nmengalami jatuh bebas?\nWhat is meant by an object that experiences a free\nfall? (Perlis: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Objek yang jatuh dalam medan graviti dan rintangan udara diabaikan / Object that falls in the gravity field and air resistance are neglected"
      },
      {
        "id": "B",
        "teks": "Objek yang jatuh dengan pengaruh rintangan udara Falling / objects under the infuence of air resistance"
      },
      {
        "id": "C",
        "teks": "Objek yang sama berat dijatuhkan serentak dari ketinggian yang sama / Object of the same weight are dropped simultaneously from the same height"
      },
      {
        "id": "D",
        "teks": "Objek yang jatuh dari tempat tinggi Ohject that falls from a high place"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Dalam keadaan jatuh bebas (seperti di dalam tiub vakum di mana rintangan udara diabaikan), semua objek mengalami pecutan graviti bumi yang sama (g ≈ 9.81 m s⁻²) tanpa dipengaruhi oleh jisim atau bentuk objek. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K1_Q04",
    "sumber": "Percubaan Terengganu 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 2.8 Berat",
    "sp": "SP 2.8.1 Menyatakan berat sebagai daya graviti yang bertindak ke atas suatu objek, W = mg",
    "spKod": "2.8.1",
    "rujukanDskp": "DSKP Fizik T4 ms 42",
    "rujukanBukuTeks": "Buku Teks T4 ms 79-82",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 20",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.8 Berat",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara pernyataan berikut, yang manakah betul\ntentang berat?\nWhich of the following statements is correct\nabout weight? (Terengganu: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kuantiti vektor / Vector quantity"
      },
      {
        "id": "B",
        "teks": "Tetap di semua tempat / Fixed at all places"
      },
      {
        "id": "C",
        "teks": "Pecutan graviti / The gravitational acceleration"
      },
      {
        "id": "D",
        "teks": "Kuantiti jirim dalam sesuatu objek / The quantity of matter in an object"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berat ialah daya graviti yang bertindak ke atas suatu objek (W = mg). Berat merupakan kuantiti vektor (diukur dalam Newton, N) yang bergantung kepada kekuatan medan graviti, berbeza dengan jisim yang merupakan kuantiti asas malar (kg). Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K1_Q05",
    "sumber": "Percubaan Kelantan 2022",
    "tahun": 2022,
    "noSoalanAsal": 5,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Satu objek akan kekal pegun, atau terus\nbergerak dengan halaju malar kecuali terdapat\nsatu daya luar yang mengubah keadaan\ngerakannya.\nAn object will remain at est, or contime\nmoving with uniform velocity unless it is acted\nupon by an external force to change its state of\nmotion.\nApakah hukum yang diterangkan oleh pernyataan\ndi atas?\nWhat law is explained by the statement above?\n(Kelantan: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Gerakan Newton Pertama / Newton's First Law of Motion"
      },
      {
        "id": "B",
        "teks": "Hukum Gerakan Newton Kedua / Newton's Second Law of Motion"
      },
      {
        "id": "C",
        "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion"
      },
      {
        "id": "D",
        "teks": "Hukum Kegravitian Semesta Newton / Newton's Universal Law of Gravitation"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K1_Q06",
    "sumber": "Percubaan Melaka 2022",
    "tahun": 2022,
    "noSoalanAsal": 6,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Prinsip keabadian momentum menyatakan\nbahawa\nPrinciples of conservation of momentumstates\nthat (Melaka: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "momentum berkadar terus dengan jisim dan halaju / momentum is directly proportional to mass and velocity"
      },
      {
        "id": "B",
        "teks": "momentum sebelum perlanggaran adalah sama dengan / momentum selepas perlanggaran momentum before collision is equal to momentum after collision"
      },
      {
        "id": "C",
        "teks": "jumlah momentum bagi suatu perlanggaran ataupun letupan adalah tidak diabadikan / the total momentum of collision or explosion are not conserved"
      },
      {
        "id": "D",
        "teks": "jumlah momentum sebelum perlanggaran adalah sama dengan jumlah momentum selepas perlanggaran jika tiada sebarang daya luar bertindak / the total momentum before collision is equal to the total momentum after collision if no external force is acting on it"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Prinsip Keabadian Momentum menyatakan bahawa jumlah momentum sebelum perlanggaran adalah sama dengan jumlah momentum selepas perlanggaran jika tiada daya luar bertindak ke atas sistem tertutup itu (Hukum Gerakan Newton Ketiga). Jawapan: D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K1_Q07",
    "sumber": "Percubaan MRSM 2022",
    "tahun": 2022,
    "noSoalanAsal": 7,
    "sk": "SK 2.8 Berat",
    "sp": "SP 2.8.1 Menyatakan berat sebagai daya graviti yang bertindak ke atas suatu objek, W = mg",
    "spKod": "2.8.1",
    "rujukanDskp": "DSKP Fizik T4 ms 42",
    "rujukanBukuTeks": "Buku Teks T4 ms 79-82",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 20",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.8 Berat",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Pernyataan manakah betul menerangkan berat?\nWhich statement is correct to describe weight?\n(MRSM: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya angkat yang bertindak ke atas objek / The lifting force acting on the object"
      },
      {
        "id": "B",
        "teks": "Daya geseran yang bertindak ke atas objek / The frictional force acting on the object"
      },
      {
        "id": "C",
        "teks": "Daya graviti yang bertindak ke atas objek / The gravitational force acting on the object"
      },
      {
        "id": "D",
        "teks": "Daya tujah ke depan yang bertindak ke atas objek / The forward force acting on the object"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Berat ialah daya graviti yang bertindak ke atas suatu objek (W = mg). Berat merupakan kuantiti vektor (diukur dalam Newton, N) yang bergantung kepada kekuatan medan graviti, berbeza dengan jisim yang merupakan kuantiti asas malar (kg). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K1_Q08",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 8,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.1 Menerangkan momentum, p sebagai hasil darab jisim dan halaju",
    "spKod": "2.5.1",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Antara berikut yang manakah merupakan unit\nbagi momentum?\nWhich of the following is the unit of momentum?\n(Terengganu: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Nsl"
      },
      {
        "id": "B",
        "teks": "kg m s"
      },
      {
        "id": "C",
        "teks": "kg ms²"
      },
      {
        "id": "D",
        "teks": "kg's?"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Momentum ditakrifkan sebagai hasil darab jisim dengan halaju (p = mv). Ia merupakan kuantiti vektor yang mempunyai magnitud dan arah. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K1_Q09",
    "sumber": "Percubaan SBP 2021",
    "tahun": 2021,
    "noSoalanAsal": 9,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.1 Mendefinisikan daya sebagai kadar perubahan momentum, F = ma (Hukum Gerakan Newton Kedua)",
    "spKod": "2.6.1",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Apakah alat yang boleh digunakan untuk\nmengukur daya?\nWhich tool can be used to measure force?\n(SBP: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Neraca tuas / Lever balance"
      },
      {
        "id": "B",
        "teks": "Neraca spring / Spring balance"
      },
      {
        "id": "C",
        "teks": "Neraca inersia / Inertia balance"
      },
      {
        "id": "D",
        "teks": "Neraca elektronik / Electronic balance"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K1_Q10",
    "sumber": "SPM 2023",
    "tahun": 2023,
    "noSoalanAsal": 10,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.1 Mendefinisikan daya sebagai kadar perubahan momentum, F = ma (Hukum Gerakan Newton Kedua)",
    "spKod": "2.6.1",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Hubungan antara daya, F, jisim, m dan pecutan, a diberi oleh persamaan\nThe relationship between force, F, mass, m and acceleration, a is given by the equation (SPM: 2023)\n\nF = ma\n\nAntara yang berikut, manakah yang betul mewakili persamaan tersebut?\nWhich of the following correctly represents the equation?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum gerakan Newton pertama / Newton's first law of motion"
      },
      {
        "id": "B",
        "teks": "Hukum gerakan Newton kedua / Newton's second law of motion"
      },
      {
        "id": "C",
        "teks": "Hukum gerakan Newton ketiga / Newton's third law of motion"
      },
      {
        "id": "D",
        "teks": "Hukum kegravitian semesta Newton / Newton's universal law of gravitation"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q01",
    "sumber": "Percubaan Kelantan 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.3 Menterjemah dan melakar graf gerakan linear",
    "spKod": "2.2.3",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Antara graf berikut yang manakah mewakili\npersamaan F= kx?\n[Diberi, k adalah pemalar]\nWhich of the following graphs represent the\nequationF= kx?\n[Given, k is a constant] (Kelantan: 2023)",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q01_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q01_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q01_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q01_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q02",
    "sumber": "Percubaan Kelantan 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.1 Menghuraikan jenis gerakan linear bagi objek yang berada dalam keadaan pegun, halaju seragam dan halaju tidak seragam",
    "spKod": "2.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 1 menunjukkan seorang budak menaiki\nbasikal ke sebuah pasar raya.\nDiagram 1 shows a boy takes a ride to a\nsupermarket. (Kelantan: 2023)\nBudak itu mengayuh basikal dengan\nThe boy pedals the bike with",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah1.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "pecutan seragam / uniform acceleration"
      },
      {
        "id": "B",
        "teks": "kelajuan seragam / uniform speed"
      },
      {
        "id": "C",
        "teks": "kelajuan berkurang / decreasing speed"
      },
      {
        "id": "D",
        "teks": "kelajuan seragam diikuti laju berkurang / uniform speed followed by decreasing speed"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q03",
    "sumber": "Percubaan Melaka 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 2 menunjukkan graf sesaran-masa bagi sebuah motosikal yang sedang bergerak.\nDiagram 2 shows a displacement-time graph of a moving motorcycle. (Melaka: 2023)\nPasangan gerakan objek manakah dari Q ke S yang betul?\nWhich pair of object motion from Q to S is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah2_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "QR: Halaju berkurang (Velocity decreases) | RS: Halaju seragam pada arah yang bertentangan (Uniform velocity in opposite direction)"
      },
      {
        "id": "B",
        "teks": "QR: Halaju bertambah (Velocity increases) | RS: Halaju seragam pada arah yang bertentangan (Uniform velocity in opposite direction)"
      },
      {
        "id": "C",
        "teks": "QR: Halaju berkurang (Velocity decreases) | RS: Halaju seragam pada arah yang sama (Uniform velocity in same direction)"
      },
      {
        "id": "D",
        "teks": "QR: Halaju bertambah (Velocity increases) | RS: Halaju seragam pada arah yang sama (Uniform velocity in same direction)"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Bagi graf sesaran-masa (s-t), kecerunan graf mewakili halaju (v = ds/dt). Garis lurus condong mewakili halaju seragam, garis mendatar mewakili objek pegun (halaju sifar), dan garis lengkung mewakili halaju tidak seragam (memecut/menyahpecut). Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q04",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 3 menunjukkan sekeping duit syiling dan sehelai bulu ayam yang sedang jatuh bebas di dalam bekas vakum.\nDiagram 3 shows a coin and a feather experiencing free fall in a vacuum container. (Pahang: 2023)\nKuantiti fizik manakah yang malar?\nWhich physical quantity is constant?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah3.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju / Velocity"
      },
      {
        "id": "B",
        "teks": "Pecutan / Acceleration"
      },
      {
        "id": "C",
        "teks": "Momentum / Momentum"
      },
      {
        "id": "D",
        "teks": "Tenaga kinetik / Kinetic energy"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Dalam keadaan jatuh bebas (seperti di dalam tiub vakum di mana rintangan udara diabaikan), semua objek mengalami pecutan graviti bumi yang sama (g ≈ 9.81 m s⁻²) tanpa dipengaruhi oleh jisim atau bentuk objek. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q05",
    "sumber": "Percubaan Pulau Pinang 2023",
    "tahun": 2023,
    "noSoalanAsal": 5,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Graf halaju-masa dalam Rajah 4 menunjukkan\nbagaimana halaju berubah dengan masa bagi\nempat kereta, A, B, C dan D.\nThe velocity-time graph in Diagram 4 shows how\nthe velocity changes with time for four cars, A, B,\nC and D. (Pulau Pinang: 2023)\nKereta yang manakah bergerak pada jarak yang\npaling jauh dalam masa 30 s?\nWhich car travels the furthest distance in 30 s?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah4_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kereta A / Car A"
      },
      {
        "id": "B",
        "teks": "Kereta B / Car B"
      },
      {
        "id": "C",
        "teks": "Kereta C / Car C"
      },
      {
        "id": "D",
        "teks": "Kereta D / Car D"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Bagi graf halaju-masa (v-t), kecerunan graf mewakili pecutan objek (a = dv/dt), manakala luas di bawah graf mewakili jumlah sesaran / jarak yang dilalui oleh objek. Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q06",
    "sumber": "Percubaan Pulau Pinang 2023",
    "tahun": 2023,
    "noSoalanAsal": 6,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 5 menunjukkan sekumpulan ahli bomba sedang memegang hos yang besar untuk memancutkan air.\nDiagram 5 shows a group of firemen holding a big hose to spout water. (Pulau Pinang: 2023)\n\nHos itu perlu dipegang oleh sekumpulan ahli bomba untuk\nThe hose needs to be held by a group of firemen to",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah5.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "menyokong berat hos yang membawa air. / support the weight of the hose that carries water:"
      },
      {
        "id": "B",
        "teks": "mengatasi kesan sentakan ke belakang yang besar. overcome the large backward recoil effect."
      },
      {
        "id": "C",
        "teks": "menambahkan momentum air yang memancut kelua. increase / the momentum of the water ejected."
      },
      {
        "id": "D",
        "teks": "menambahkan daya impuls air yang memancut keluar. / increase the impulsive force of the water ejected."
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berat ialah daya graviti yang bertindak ke atas suatu objek (W = mg). Berat merupakan kuantiti vektor (diukur dalam Newton, N) yang bergantung kepada kekuatan medan graviti, berbeza dengan jisim yang merupakan kuantiti asas malar (kg). Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q07",
    "sumber": "Percubaan Perak 2023",
    "tahun": 2023,
    "noSoalanAsal": 7,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
    "spKod": "2.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 6 menunjukkan gerakan sebuah basikal.\nDiagram 6 shows the motion of a bicycle. (Perak: 2023)\nApakah jenis gerakan tersebut?\nWhat is the type of motion?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah6.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju seragam / Uniform velocity"
      },
      {
        "id": "B",
        "teks": "Halaju berkurang / Decreasing velocity"
      },
      {
        "id": "C",
        "teks": "Halaju meningkat / Increasing velocity"
      },
      {
        "id": "D",
        "teks": "Halaju tidak seragam / Non-uniform velocity"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q08",
    "sumber": "Percubaan Perak 2023",
    "tahun": 2023,
    "noSoalanAsal": 8,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Manakah antara berikut mempunyai inersia yang\npaling besar?\nWhich of the following has the biggest inertia?\n(Perak: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "1.8 kg Arnab / 1.8 kg Rabbit"
      },
      {
        "id": "B",
        "teks": "850 g Sepana / 850 g Spanner"
      },
      {
        "id": "C",
        "teks": "1350 g Kuali / 1350 g Pan"
      },
      {
        "id": "D",
        "teks": "1.2 kg Mikroskop / 1.2 kg Microscope"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Inersia suatu objek bergantung secara langsung kepada jisimnya sahaja mengikut Hukum Gerakan Newton Pertama. Semakin besar jisim objek, semakin besar inersianya. Oleh itu, objek dengan jisim terbesar mempunyai inersia paling besar (Jawapan: A).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q09",
    "sumber": "Percubaan Perak 2023",
    "tahun": 2023,
    "noSoalanAsal": 9,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Antara pernyataan berikut, manakah benar\ntentang perlanggaran tidak kenyal?\nWhich of the following statements are true about\ninelastic collision? (Perak: 2023)\nI Jumlah tenaga sebelum perlanggaran sama\ndengan jumlah tenaga selepas perlanggaran.\nThe total energy is conserved before and after\nthe collision.\nII Jumlah tenaga kinetik sebelum perlanggaran\ntidak sama dengan jumlah tenaga kinetik\nselepas perlanggaran.\nThe total kinetic energy is not conserved\nbefore and after the collision.\nIII Momentum sebelum perlanggaran sama\ndengan momentunm selepas perlanggaran.\nThe momentum is conserved before and after\nthe collision.\nIV Jumlah momentum sebelum perlanggaran\nsama dengan jumlah momentum selepas\nperlanggaran.\nThe total momentum is conserved before and\nafter the collision.",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II"
      },
      {
        "id": "B",
        "teks": "I dan IV"
      },
      {
        "id": "C",
        "teks": "I, II dan III"
      },
      {
        "id": "D",
        "teks": "I, II dan IV"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Dalam perlanggaran kenyal, kedua-dua jumlah momentum dan jumlah tenaga kinetik diabadikan, serta objek melantun semula selepas perlanggaran. Jawapan yang betul ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q10",
    "sumber": "Percubaan Perlis 2023",
    "tahun": 2023,
    "noSoalanAsal": 10,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Objek manakah mempunyai inersia yang paling besar?\nWhich object has the largest inertia? (Perlis: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim 15 kg / Mass 15 kg"
      },
      {
        "id": "B",
        "teks": "Jisim 1.2 x 10^3 kg / Mass 1.2 x 10^3 kg"
      },
      {
        "id": "C",
        "teks": "Jisim 2 000 kg / Mass 2 000 kg"
      },
      {
        "id": "D",
        "teks": "Jisim 1.1 x 10^3 kg / Mass 1.1 x 10^3 kg"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Inersia suatu objek bergantung secara langsung kepada jisimnya sahaja mengikut Hukum Gerakan Newton Pertama. Semakin besar jisim objek, semakin besar inersianya. Oleh itu, objek dengan jisim terbesar mempunyai inersia paling besar (Jawapan: D).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q11",
    "sumber": "Percubaan SBP 2023",
    "tahun": 2023,
    "noSoalanAsal": 11,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.1 Mentafsir jenis gerakan dari graf sesaran-masa, halaju-masa dan pecutan-masa",
    "spKod": "2.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Graf manakah yang menunjukkan gerakan\ndengan halaju malar?\nWhich graph shows the motion with constant\nvelocity? (SBP: 2023)",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q11_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q11_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q11_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q11_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q12",
    "sumber": "Percubaan SBP 2023",
    "tahun": 2023,
    "noSoalanAsal": 12,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 7 menunjukkan sehelai bulu pelepah dan\nsebiji bola logam yang sedang jatuh bebas di\ndalam vakum.\nDiagram 7 shows a feather and a netal ball\njalling freely in a vacuum. (SBP: 2023)\nBola logam Bulu pelepah\nMetal ball Feather\nPernyataan manakah yang paling tepat\nmenjelaskan gerakan bulu pelepah dan bola\nlogam?\nWhich statement is the best to describe the motion\nof feather andmetalball?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah7.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju seragam"
      },
      {
        "id": "B",
        "teks": "Pecutan seragam"
      },
      {
        "id": "C",
        "teks": "Halaju bertambah Constant velocity / Velocity increases"
      },
      {
        "id": "D",
        "teks": "Pecutan Constant bertambah / acceleration Acceleration increases"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Dalam keadaan jatuh bebas (seperti di dalam tiub vakum di mana rintangan udara diabaikan), semua objek mengalami pecutan graviti bumi yang sama (g ≈ 9.81 m s⁻²) tanpa dipengaruhi oleh jisim atau bentuk objek. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q13",
    "sumber": "Percubaan SBP 2023",
    "tahun": 2023,
    "noSoalanAsal": 13,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.1 Mendefinisikan daya sebagai kadar perubahan momentum, F = ma (Hukum Gerakan Newton Kedua)",
    "spKod": "2.6.1",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 8 menunjukkan seorang lelaki sedang\nbergerak menggunakan personal transporter\ndengan suatu pecutan.\nDiagram 8 shows a man is moving by using a\npersonal transporter with an acceleration.\n(SBP: 2023)\nPernyataan manakah benar?\nWhich statement is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah8.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya bersih yang bertindak ke atas personal transporter adalah sifar / The net force acting on the personal transporter is zero"
      },
      {
        "id": "B",
        "teks": "Daya tujah lebih besar daripada daya geseran / Thrust is greater than the frictional force"
      },
      {
        "id": "C",
        "teks": "Daya tujah lebih kecil daripada daya geseran / Thrust is smaller than the frictional force"
      },
      {
        "id": "D",
        "teks": "Daya tujah sama dengan daya geseran / Thrust is equal to frictional force"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q14",
    "sumber": "Percubaan Terengganu 2023",
    "tahun": 2023,
    "noSoalanAsal": 14,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 9 menunjukkan seorang bomba yang\nmemadamkan api akan terhumban ke belakang\napabila air memancut keluar dari hos dengan laju\nyang tinggi.\nDiagram 9 shows a firefighter who is put out fire\nwill be thrown backwads when the water spurts\nout of the hose at a high speed.\n(Terengganu: 2023)\nAntara faktor berikut, yang manakah\nmempengaruhi pancutan air keluar dari hos?\nWhich of the following factors affect the water\ngushesout of thehose?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah9.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya / Force"
      },
      {
        "id": "B",
        "teks": "Inersia / Inertia"
      },
      {
        "id": "C",
        "teks": "Impuls / Impulse"
      },
      {
        "id": "D",
        "teks": "Momentum / Momentum"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q15",
    "sumber": "Percubaan Terengganu 2023",
    "tahun": 2023,
    "noSoalanAsal": 15,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.3 Memerihalkan kesan dan aplikasi daya impuls dalam kehidupan harian",
    "spKod": "2.7.3",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 10 di bawah menunjukkan seorang budak\nlelaki menggunakan teknik lompat jauh yang\nbetul agar tidak mengalami keccderaan pada\nkakinya.\nDiagram 10 below shows a boy using the correct\nlong junıp technique to avoid injury to his legs.\n(Terengganu: 2023)\nApakah sebab bagi situasi di atas?\nWhat is the cause of the above situation?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah10.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Mengurangkan daya Decreaseforce"
      },
      {
        "id": "B",
        "teks": "Mengurangkan impuls / Decrease impulse"
      },
      {
        "id": "C",
        "teks": "Mengurangkan / momentum Decrease momentum"
      },
      {
        "id": "D",
        "teks": "Mengurangkan daya impuls / Decrease impulsive force"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q16",
    "sumber": "Percubaan SMKA 2023",
    "tahun": 2023,
    "noSoalanAsal": 16,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 11 menunjukkan sehelai bulu dan sebiji\nbatu yang mempunyai jisim berbeza sedang\nmengalami jatuh bebas di dalam vakum.\nDiagram 11 shows a feather and a stone of\ndifferent masses experiencing free fall in a\nvacuum. (SMKA: 2023)\nBulu Batu\nFeather Stone\nMasa. t=0s\ntine\nPernyataan manakah yang betul mengenai\npergerakan itu?\nWhich statement is correct about the motion?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah11.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Bulu dan batu itu jatuh dengan halaju seragam / The feather and the stone fall with constant velocity"
      },
      {
        "id": "B",
        "teks": "Bulu dan batu itu mempunyai tenaga kinetik yang sama / The feather and the stone have the same kinetic energy"
      },
      {
        "id": "C",
        "teks": "Bulu dan batu itu sampai ke tanah pada masa yang sama / The feather and the stone reach the ground at the same time"
      },
      {
        "id": "D",
        "teks": "Daya graviti yang bertindak ke atas bulu dan batu adalah sama / The gravitational force acting on the feather and the stone is the same"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Dalam keadaan jatuh bebas (seperti di dalam tiub vakum di mana rintangan udara diabaikan), semua objek mengalami pecutan graviti bumi yang sama (g ≈ 9.81 m s⁻²) tanpa dipengaruhi oleh jisim atau bentuk objek. Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q17",
    "sumber": "Percubaan SMKA 2023",
    "tahun": 2023,
    "noSoalanAsal": 17,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 12 menunjukkan seekor kucing sedang\nmengejar seekor tikus.\nDiagram 12 shows a cat chasing a rat.\n(SMKA: 2023)\nInersia bagi kucing adalah lebih besar daripada\ntikus kerana\nThe inertia of the cat is bigger than the rat\nbecause",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah12.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "kucing berlari lebih laju daripada tikus itu / the cat runs faster than the rat"
      },
      {
        "id": "B",
        "teks": "kucing mempunyai saiz lebih besar daripada tikus itu / the cat has a greater size than the rat"
      },
      {
        "id": "C",
        "teks": "kucing mempunyai jisim lebih besar daripada tikus itu / the cat has greater mass than the rat"
      },
      {
        "id": "D",
        "teks": "kucing mempunyai kaki yang lebih panjang daripada tikus itu / the cat has longer legs than the rat"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Inersia ialah sifat semula jadi suatu objek yang menentang sebarang perubahan kepada keadaan asalnya, sama ada keadaan pegun atau keadaan gerakan (Hukum Gerakan Newton Pertama). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q18",
    "sumber": "Percubaan SMKA 2023",
    "tahun": 2023,
    "noSoalanAsal": 18,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.3 Memerihalkan kesan dan aplikasi daya impuls dalam kehidupan harian",
    "spKod": "2.7.3",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 13 menunjukkan seorang penjaga gol sedang bersedia untuk menangkap sebiji bola dalam satu perlawanan bola sepak.\nDiagram 13 shows a goalkeeper preparing to catch a ball in a soccer match. (SMKA: 2023)\n\nAntara berikut manakah dapat mengurangkan daya impuls?\nWhich of the following can reduce the impulsive force?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah13.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "penjaga gol bergerak ke hadapan sebelum memberhentikan bola the goalkeeper moves forwaxd before stopping the ball"
      },
      {
        "id": "B",
        "teks": "penjagu gol bergerak sedikit ke belakang sebelun mennberhentikan bola the goalkeeper mnoves slighthy backwards before stopping the ball"
      },
      {
        "id": "C",
        "teks": "penjaga gol berdiri tegak dan membiarkan bola dibcrhentikan di badannya the goalkeeper stood upright and leting the ball be stopped at his body"
      },
      {
        "id": "D",
        "teks": "penjaga gol berdiri tegak kemudian melompat ke atas dan membiarkan bola diberhentikan di badannya the goalkeeper stood up straight then jumped up and let the ball rest on his body"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Daya impuls berbanding songsang dengan masa impak: F = (mv - mu) / t. Memanjangkan masa tindak balas / masa impak akan mengurangkan magnitud daya impuls yang bertindak, sekaligus mengurangkan kecederaan (Hukum Gerakan Newton Ketiga). Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q19",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 19,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
    "spKod": "2.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 14 menunjukkan seorang pelajar berlari\ndari titik X ke Y dan kembali ke titik Z.\nDiagram |4 showsa student rwns from point X to\nY then back to point Z. (MRSM: 2023)\nSesaran pelajar diwakili oleh titik\nDisplacemnentof student is vepresentedby point",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah14.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "XY"
      },
      {
        "id": "B",
        "teks": "XZ"
      },
      {
        "id": "C",
        "teks": "ZY"
      },
      {
        "id": "D",
        "teks": "YZ"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q20",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 20,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 15 menunjukkan bulu pelepah dan bebola\nlogam yang dijatuhkan pada masa yang sama dari\nketinggian yang sama.\nDiagram 15 shows feather and ball bearing\ndropped at the same time from the same height.\n(MRSM: 2023)\nBulu pelepah dan bebola logam akan sampai ke\ntanah pada masa yang sama jika\nFeather and ball bearing will reach the ground at\nthe same time if",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah15.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "ketumpatan kedua-dua objek adalah sama / the density of both objects is the same"
      },
      {
        "id": "B",
        "teks": "bentuk kedua-dua objek adalah sama / the shape of both objects is the same"
      },
      {
        "id": "C",
        "teks": "berat kedua-dua objek diabaikan / the weight of both objects is ignored"
      },
      {
        "id": "D",
        "teks": "rintangan udara diabaikan / the air resistance is ignored"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.3 Gerakan Jatuh Bebas, konsep yang diaplikasikan menghasilkan jawapan D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q21",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 21,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 16 menunjukkan lato-lato yang\nmenggunakan dua bola plastik yang keras. Plastik\nkeras yang digunakan menghasilkan bunyi\nberdenting yang kuat apabila berlanggar pada\nhalaju yang tinggi.\nDiagram 16 shows a pair of clackers that uses\ntwo hard plastic balls. The clackers ball produces\na loud clacking sound when collide at high\nvelocity. (MRSM: 2023)\nMengapakah plastik keras digunakan?\nWhy hard plastic is used?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah16.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Meningkatkan inersia / Increase inertia"
      },
      {
        "id": "B",
        "teks": "Meningkatkan geseran / Increase friction"
      },
      {
        "id": "C",
        "teks": "Mengurangkan momentum / Decrease momentum"
      },
      {
        "id": "D",
        "teks": "Mengurangkan masa impak / Decrease time of impact"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Inersia ialah sifat semula jadi suatu objek yang menentang sebarang perubahan kepada keadaan asalnya, sama ada keadaan pegun atau keadaan gerakan (Hukum Gerakan Newton Pertama). Jawapan: D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q22",
    "sumber": "Percubaan Kedab 2022",
    "tahun": 2022,
    "noSoalanAsal": 22,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
    "spKod": "2.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 17 menunjukkan pergerakan bagi sebuah\nkereta dari keadaan pegun bagi 5 saat pertama.\nDiagram I7 shows movement of a car fiom\nstationary for the first 5 seconds.\n(Kedab: 2022)\nPernyataan manakah benar bagi\nmenggambarkan pergerakan kereta itu?\nWhich statement is true to describe the movement\nof the ca?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah17.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pecutan OA lebih besar dari pecutan AB / Acceleration OÀ is greater than acceleration AB"
      },
      {
        "id": "B",
        "teks": "Pecutan BC lebih besar dari pecutan CD / Acceleration BC is greater than acceleration CD"
      },
      {
        "id": "C",
        "teks": "Halaju AD lebih besar dari halaju DE Velocity AD / is greater than velocity DE"
      },
      {
        "id": "D",
        "teks": "Halaju AB lebilh besar dari halaju BE Velocity AB / is greater than velocity BE"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q23",
    "sumber": "Percubaan Kedah 2022",
    "tahun": 2022,
    "noSoalanAsal": 23,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.1 Mentafsir jenis gerakan dari graf sesaran-masa, halaju-masa dan pecutan-masa",
    "spKod": "2.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 18 menunjukkan graf pecutan, a melawan\nmasa, t bagi suatu objek\nDiagram 18 shows the acceleration, a against\ntime, t graph of an object. (Kedah: 2022)\nBahagian graf yang manakah menunjukkan objek\nbergerak dengan halaju malar?\nWhich part of the graph shows the object moves\nwith constant velocity?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah18_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "PQ"
      },
      {
        "id": "B",
        "teks": "QR"
      },
      {
        "id": "C",
        "teks": "RS"
      },
      {
        "id": "D",
        "teks": "TU"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q24",
    "sumber": "Percubaan Kedah 2022",
    "tahun": 2022,
    "noSoalanAsal": 24,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.2 Mengeksperimen untuk mengenal pasti hubungan antara inersia dan jisim",
    "spKod": "2.4.2",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 19 menunjukkan angkasawan yang berada\ndalam kapal angkasa di Stesen Angkasa\nAntarabangsa (ISS). Mereka berada dalam\nkeadaan tanpa daya graviti. Hanya neraca inersia\nkhas dapat digunakan untuk mengukur jisim\nbadannya.\nDiagram 19 show the astronaut who was in the\nspacecrafi at The International Space Station\n(ISS). They are in a state without the force of\ngravity. Only a special inertia balance can be\nused to measure his body mass. (Kedah: 2022)\nApakah kuantiti fizik yang boleh digunakan\nuntuk menentukan jisim angkasawan itu?\nWhat is the physical quantity can be used to\ndetermine the mass of astronaut?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah19.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Bilangan ayunan Numberofoscillations"
      },
      {
        "id": "B",
        "teks": "Tempoh ayunan / Period of oscillation"
      },
      {
        "id": "C",
        "teks": "Amplitud ayunan Amplitude of oscillation"
      },
      {
        "id": "D",
        "teks": "Sesaran ayunan Displacementof oscillation"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Inersia suatu objek bergantung secara langsung kepada jisimnya sahaja mengikut Hukum Gerakan Newton Pertama. Semakin besar jisim objek, semakin besar inersianya. Oleh itu, objek dengan jisim terbesar mempunyai inersia paling besar (Jawapan: B).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q25",
    "sumber": "Percubaan Kedah 2022",
    "tahun": 2022,
    "noSoalanAsal": 25,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 20 menunjukkan sebuah hoverkraf\nmembawa pelancong meronda di satu kawasan\npaya. Hoverkraf itu bergerak dengan laju yang\ntinggi.\nDiagram 20 shows a hovercraft carrying tourist\nroaming around a swamp area. The hovercrafi\nmoves with a high speed. (Kedah: 2022)\nPergerakan hoverkraf dapat diterangkan oleh\nThe hovercraft movement can be explained by",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah20.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Prinsip Keabadian / Momentum Principle ofConservationofMomentum"
      },
      {
        "id": "B",
        "teks": "Prinsip Keabadian Tenaga Principle ofConservationofEnergy"
      },
      {
        "id": "C",
        "teks": "Hukum Gerakan Newton Pertama / Newton's First Law of Motion"
      },
      {
        "id": "D",
        "teks": "Hukum Gerakan Newton Kedua / Newton's Second Law of Motion 18"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Prinsip Keabadian Momentum menyatakan bahawa jumlah momentum sebelum perlanggaran adalah sama dengan jumlah momentum selepas perlanggaran jika tiada daya luar bertindak ke atas sistem tertutup itu (Hukum Gerakan Newton Ketiga). Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q26",
    "sumber": "Percubaan Kedah 2022",
    "tahun": 2022,
    "noSoalanAsal": 26,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 21 menunjukkan seorang atlet perenang\nmenekan satu blok pelepas untuk memulakan\nperlumbaan bagi meningkatkan perubahan\nmomentum.\nDiagramn 21 shows a swimnming athlete pressing\na starting block to start a race to increase the\nchangeofmomentum. (Kedah: 2022)\nPerubahan momentum adalah\nThe change ofmomnentumis",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah21.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya impuls / Impulsive force"
      },
      {
        "id": "B",
        "teks": "Impuls / Impulse"
      },
      {
        "id": "C",
        "teks": "Tekanan / Pressure"
      },
      {
        "id": "D",
        "teks": "Kuasa / Power"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Momentum ditakrifkan sebagai hasil darab jisim dengan halaju (p = mv). Ia merupakan kuantiti vektor yang mempunyai magnitud dan arah. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q27",
    "sumber": "Percubaan Kelantan 2022",
    "tahun": 2022,
    "noSoalanAsal": 27,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Acara sukan yang manakah menggunakan\nPrinsip Keabadian Momentum?\nWhich sport event uses the Principle of\nConservationofMomentum? (Kelantan: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Acara golf / Golf event"
      },
      {
        "id": "B",
        "teks": "Acara menembak / Shooting event"
      },
      {
        "id": "C",
        "teks": "Acara lompat tinggi / High jump event"
      },
      {
        "id": "D",
        "teks": "Acara renang / Swimming event"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Prinsip Keabadian Momentum menyatakan bahawa jumlah momentum sebelum perlanggaran adalah sama dengan jumlah momentum selepas perlanggaran jika tiada daya luar bertindak ke atas sistem tertutup itu (Hukum Gerakan Newton Ketiga). Jawapan: D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q28",
    "sumber": "Percubaan MRSM 2022",
    "tahun": 2022,
    "noSoalanAsal": 28,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 22 menunjukkan graf halaju, v melawan\nmasa, t bagi sebuah objek.\nDiagram 22 shows a graph of velocity, v against\ntime, t of an object. (MRSM: 2022)\nPernyataan manakah yang benar?\nWhich statement is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah22.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jumlah sesaran objek dalam masa 50 s ialah 700 m Total displacement / object in 50 s is 700 m"
      },
      {
        "id": "B",
        "teks": "Objek tersebut kekal pegun dari t= 20 s hingga t =40 s The / object remains stationary from t= 20 s to = 40 s"
      },
      {
        "id": "C",
        "teks": "Objek bergerak dengan nyahpecutan dari t = 40 s hingga t= 50 s The / object decelerates from t = 40 s to t= 50 S"
      },
      {
        "id": "D",
        "teks": "Objek bergerak dengan pecutan bertambah dari t = 0 s hingga t= 20 s The / object moves with increasing acceleration from t=0s to t= 20 s"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q29",
    "sumber": "Percubaan MRSM 2022",
    "tahun": 2022,
    "noSoalanAsal": 29,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.3 Mewajarkan kesan inersia dalam kehidupan harian",
    "spKod": "2.4.3",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 23 menunjukkan payung yang basah\ndipusing dan dihentikan dengan tiba-tiba\nmenyebabkan titisan air meninggalkan\npermukaan payung.\nDiagram 23 shows a wet umbrella is rotated with\na sudden stop causes water droplets leave the\nsurface of the umbrella. (MRSM: 2022)\nHukum fizik manakah menerangkan situasi di\natas?\nWhich physics law explained the above situation?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah23.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Gerakan Newton Pertama / Newton's First Law of Motion"
      },
      {
        "id": "B",
        "teks": "Hukum Gerakan Newton Kedua / Newton's Second Law of Motion"
      },
      {
        "id": "C",
        "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion"
      },
      {
        "id": "D",
        "teks": "Hukum Kegravitian Semesta Newton / Newton's Universal Law of Gravitation"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.4 Inersia, konsep yang diaplikasikan menghasilkan jawapan A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q30",
    "sumber": "Percubaan Negeri Sembilan 2022",
    "tahun": 2022,
    "noSoalanAsal": 30,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Rendah",
    "konstruk": "Memahami",
    "soalan": "Rajah 24 menunjukkan sebuah pasu yang\ndiletakkan di atas meja.\nDiagram 24 shows a vase which is placed on a\ntable. (Negeri Sembilan: 2022)\nPengubahsuaian manakah pada pasu yang akan\nmeningkatkan inersia?\nWhich modification on vase will increase Us\ninertia?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah24.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tambahkan ketinggian / Increase the height"
      },
      {
        "id": "B",
        "teks": "Tambahkan luas tapak Increase the / base area"
      },
      {
        "id": "C",
        "teks": "Gunakan tapak yang lebih tebal dan berat Use a thicker and heavier / base"
      },
      {
        "id": "D",
        "teks": "Rendahkan pusat graviti Lower the centre of gravity"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Inersia ialah sifat semula jadi suatu objek yang menentang sebarang perubahan kepada keadaan asalnya, sama ada keadaan pegun atau keadaan gerakan (Hukum Gerakan Newton Pertama). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q31",
    "sumber": "Percubaan Negeri Sembilan 2022",
    "tahun": 2022,
    "noSoalanAsal": 31,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 25 menunjukkan seorang pemain besbol memukul sebiji bola.\nDiagram 25 shows a baseball player hitting a ball. (Negeri Sembilan: 2022)\n\nDaya impuls terhasil apabila\nAn impulsive force is produced when",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah25.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "bola bergerak di udara the ball noves in the air"
      },
      {
        "id": "B",
        "teks": "kayu besbol dihayun ke belakang / the baseball bat is swung backward"
      },
      {
        "id": "C",
        "teks": "kayu besbol dihayun pada halaju yang tinggi / the baseball bat is swung at high velocity"
      },
      {
        "id": "D",
        "teks": "kayu besbol menghentam bola / the baseball bat hits the ball"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Impuls ditakrifkan sebagai perubahan momentum (J = mv - mu = Ft). Daya impuls ialah kadar perubahan momentum dalam perlanggaran atau letupan. Jawapan yang betul ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q32",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 32,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Hukum Gerakan Newton Pertama menyatakan\nbahawa sesuatu objek akan kekal dalam keadaan\npegun atau bergerak dengan halaju malar jika\ntiada daya luar bertindak ke atasnya. Apakah\nkonsep bagi pernyataan ini?\nNewton's First Law of Motion states that an\nobject will remain at rest or move with a constant\nvelocity if there is no external force acting on it.\nWhat is theconcept for this statement?\n(Pahang: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya / Force"
      },
      {
        "id": "B",
        "teks": "Inersia / Inertia"
      },
      {
        "id": "C",
        "teks": "Momentum / Momentum"
      },
      {
        "id": "D",
        "teks": "Gerakan jatuh bebas / Free fall motion"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q33",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 33,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.1 Mendefinisikan daya sebagai kadar perubahan momentum, F = ma (Hukum Gerakan Newton Kedua)",
    "spKod": "2.6.1",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 26 (a) menunjukkan sebuah troli tanpa\nmuatan sedang ditolak dengan daya, F. Rajah 26\n(b) menunjukkan troli tersebut dengan muatan\nsedang ditolak dengan daya yang sama.\nDiagram 26 (a) shows a trolley without load\nbeing pushed with force, F. Diagram 26 (b) shows\nthe trolley with load being pushed with the same\nforce. (Pahang: 2022)\nRajah 26 (a) Rajah 26 (b)\nApakah yang terjadi kepada pecutan troli dalam\nRajah 26 (b)?\nWhat happen to the acceleration of the trolley in\nDiagram 26 (b)?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah26.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Berkurang / Decrease"
      },
      {
        "id": "B",
        "teks": "Bertambah / Increase"
      },
      {
        "id": "C",
        "teks": "Tidak berubah / Unchanged"
      },
      {
        "id": "D",
        "teks": "Sifar / Zero"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q34",
    "sumber": "Percubaan Perlis 2022",
    "tahun": 2022,
    "noSoalanAsal": 34,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
    "spKod": "2.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara pernyataan berikut, yang manakah betul\nmengenai sesaran?\nWhich of the following statements is correct\nabout displacemenr? (Perlis: 2022)\nI Panjang satu lintasan yang dilalui oleh\npergerakan suatu objek\nThe length of a trajectory travelled by the\nmovement of an object\nII Jarak terpendek yang dilalui pada satu arah\ntertentu\nThe shortest distance travelled in a specific\ndirection\nIII Nilainya sama dengan panjang garis lurus di\nantara kedudukan awal dengan akhir\nThe value is equal to the length of the straight\nlinebetweenthe initial and final positions",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II"
      },
      {
        "id": "B",
        "teks": "II dan III"
      },
      {
        "id": "C",
        "teks": "I dan III"
      },
      {
        "id": "D",
        "teks": "I, II dan III"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q35",
    "sumber": "Percubaan Perlis 2022",
    "tahun": 2022,
    "noSoalanAsal": 35,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.1 Mentafsir jenis gerakan dari graf sesaran-masa, halaju-masa dan pecutan-masa",
    "spKod": "2.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 27 menunjukkan graf gerakan sebuah\nmotosikal.\nDiagram 27 shows a graph of the motion of a\nmotorcycle. (Perlis: 2022)\nPernyataan manakah yang betul tentang gerakan\ntersebut?\nWhich statement is correct regarding the motion?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah27.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Motosikal mengalami pecutan seragam di AB / The motorcycle is in uniform acceleration at AB"
      },
      {
        "id": "B",
        "teks": "Motosikal dalam keadaan pegun di BC / The motorcycle is in stationary at BC"
      },
      {
        "id": "C",
        "teks": "Motosikal mengubah arah ke belakang di CD / The motorcycle changes the direction backward at CD"
      },
      {
        "id": "D",
        "teks": "Motosikal mengurangkan halaju di EF / The motorcycle reduces the velocity at EF"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q36",
    "sumber": "Percubaan Perlis 2022",
    "tahun": 2022,
    "noSoalanAsal": 36,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.3 Memerihalkan kesan dan aplikasi daya impuls dalam kehidupan harian",
    "spKod": "2.7.3",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 28 menunjukkan sebuah kereta remuk apabila melanggar sebatang pokok.\nDiagram 28 shows a crushed car when it collides a tree. (Perlis: 2022)\n\nMengapakah bahagian depan dan belakang kereta direka supaya mudah remuk?\nWhy are the front and rear of the car designed to be easily crushed?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah28.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Untuk mengurangkan masa impak dan mengurangkan daya impuls To / reduce the impact time and reduce the inpulsive force"
      },
      {
        "id": "B",
        "teks": "Untuk mengurangkan / momentum To reduce the momentum"
      },
      {
        "id": "C",
        "teks": "Untuk meningkatkan masa impak dan mengurangkan daya impuls To / increase the impact time and reduce the inıpulsiveforce"
      },
      {
        "id": "D",
        "teks": "Untuk meningkatkan daya geseran To increase / the frictional force"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Daya impuls berbanding songsang dengan masa impak: F = (mv - mu) / t. Memanjangkan masa tindak balas / masa impak akan mengurangkan magnitud daya impuls yang bertindak, sekaligus mengurangkan kecederaan (Hukum Gerakan Newton Ketiga). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q37",
    "sumber": "Percubaan Putrajaya 2022",
    "tahun": 2022,
    "noSoalanAsal": 37,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 29 menunjukkan dua orang budak\nmelancarkan sebuah roket air.\nDiagram 29 shows two boys launching a water\nrocket. (Putrajaya: 2022)\nPrinsip fizik yang diaplikasikan adalah\nThe physics principle applied is",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah29.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Konsep inersia / Concept of inertia"
      },
      {
        "id": "B",
        "teks": "Konsep keseimbangan daya / Equilibrium of forces"
      },
      {
        "id": "C",
        "teks": "Prinsip keabadian tenaga / Principle of conservation of energy"
      },
      {
        "id": "D",
        "teks": "Prinsip keabadian momentum / Principle of conservation of momentum"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Kesan inersia menyebabkan objek mengekalkan keadaan asalnya (sama ada pegun atau terus bergerak dengan halaju malar dalam garis lurus) apabila tiada daya luar bertindak ke atasnya (Hukum Gerakan Newton Pertama). Jawapan yang betul ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q38",
    "sumber": "Percubaan Putrajaya 2022",
    "tahun": 2022,
    "noSoalanAsal": 38,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.3 Memerihalkan kesan dan aplikasi daya impuls dalam kehidupan harian",
    "spKod": "2.7.3",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 30 menunjukkan scorang atlet\nmembengkokkan kakinya ketika mendarat dalam\nacara lompat jauh.\nDiagram 30 shows an athlete bending his legs\nwhen landing in a long jump event.\n(Putrajaya: 2022)\n(3)\nMengapa atlet tersebut harus membengkokkan\nkakinya?\nWhy does the athlete need to bend his legs?\nUntuk mengurangkan impuls\nTo reduce the impulse\nII Untuk mengurangkan daya impuls\nTo reduce impulsive force\nII Untukmenambahmasaketika di udara\nTo increase the time in the air\nIV Untuk mendapat jarak paling maksimum\nTo get maximum distance",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah30.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II"
      },
      {
        "id": "B",
        "teks": "I dan IV"
      },
      {
        "id": "C",
        "teks": "II dan III"
      },
      {
        "id": "D",
        "teks": "II dan IV"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Daya impuls berbanding songsang dengan masa impak: F = (mv - mu) / t. Memanjangkan masa tindak balas / masa impak akan mengurangkan magnitud daya impuls yang bertindak, sekaligus mengurangkan kecederaan (Hukum Gerakan Newton Ketiga). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q39",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 39,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.1 Menghuraikan jenis gerakan linear bagi objek yang berada dalam keadaan pegun, halaju seragam dan halaju tidak seragam",
    "spKod": "2.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Carta pita manakah menunjukkan pergerakan\nobjek dengan pecutan seragam?\nWhich tape chart shows a motion of object with\nuniform acceleration? (SBP: 2022)",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q39_opt_a.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Carta pita A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q39_opt_b.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Carta pita B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q39_opt_c.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Carta pita C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q39_opt_d.webp\" style=\"max-height:130px; border-radius:4px;\" alt=\"Carta pita D\">"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan carta pita detik, panjang jalur pita bertambah secara seragam dari masa ke masa (selang pertambahan panjang pita yang malar). Ini menunjukkan halaju bertambah secara seragam dengan masa, iaitu objek mengalami pecutan seragam (uniform acceleration). Carta pita A menunjukkan halaju malar (pecutan sifar), Carta pita C menunjukkan pecutan tidak seragam, dan Carta pita D menunjukkan nyahpecutan seragam. Oleh itu, carta pita yang betul ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q40",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 40,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.1 Mentafsir jenis gerakan dari graf sesaran-masa, halaju-masa dan pecutan-masa",
    "spKod": "2.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 31 menunjukkan seorang penunggang\nbasikal sedang menaiki sebuah bukit dengan\nnyahpecutan seragam. Penunggang basikal itu\nkemudiannya menuruni bukit itu dengan pecutan\nseragam.\nDiagram 31 shows a cyclist moving up a hill with\nuniform deceleration. The cyclist then went down\nthe hill with uniform acceleration. (SBP: 2022)\nGraf halaju, v melawan masa, t yang manakah\nmenunjukkan gerakan basikal itu?\nWhich velocity, v against time, t graph shows the\nmotion of the bicycle?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah31.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q40_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q40_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q40_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q40_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q41",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 41,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
    "spKod": "2.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 32 menunjukkan sebiji batu bata terjatuh\ndari bangunan tinggi di tapak pembinaan.\nDiagram 48 shows a piece of brick falls from a\ntall building at a construction site.\n(SBP: 2022)\nApakah yang berlaku kepada halaju dan pecutan\nbatu bata itu semasa jatuh ke tanah?\nWhat happens to the velocity and acceleration of\nthe brick as it falls to the ground?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah32.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju: Malar (Constant) | Pecutan: Malar (Constant)"
      },
      {
        "id": "B",
        "teks": "Halaju: Bertambah secara seragam (Increasing uniformly) | Pecutan: Malar (Constant)"
      },
      {
        "id": "C",
        "teks": "Halaju: Malar (Constant) | Pecutan: Bertambah (Increasing)"
      },
      {
        "id": "D",
        "teks": "Halaju: Bertambah secara seragam (Increasing uniformly) | Pecutan: Bertambah (Increasing)"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q42",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 42,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Kebanyakkan kapal kargo yang besar mematikan\nenjin kira-kira 25 km dari limbungan kerana\nMost cargo ship turn off their engines about 25\nkm away from the dock because (SBP: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya impuls kecil / Impulsive force is small"
      },
      {
        "id": "B",
        "teks": "Inersia kapal kargo besar / Inertia of the cargo ship is large"
      },
      {
        "id": "C",
        "teks": "Masa perlanggaran tinggi / Time of impact is high"
      },
      {
        "id": "D",
        "teks": "Impuls kapal kargo besar / Impulse of the cargo ship is big"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Impuls ditakrifkan sebagai perubahan momentum (J = mv - mu = Ft). Daya impuls ialah kadar perubahan momentum dalam perlanggaran atau letupan. Jawapan yang betul ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q43",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 43,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.3 Memerihalkan kesan dan aplikasi daya impuls dalam kehidupan harian",
    "spKod": "2.7.3",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 33 menunjukkan seorang pemain besbol\nmelakukan tindakan ikut lajak untuk memukul\nbola.\nDiagram 33 shows a baseball player taking a\nfollow through action to hit the ball.\n(SBP: 2022)\nTindakan ini adalah untuk\nThis action is to",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah33.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "menambah daya impuls / increase impulsive force"
      },
      {
        "id": "B",
        "teks": "mengurangkan masa pelanggaran / reduce time of impact"
      },
      {
        "id": "C",
        "teks": "menambah jarak bola selepas dipukul / increase the distance of the ball after being hit"
      },
      {
        "id": "D",
        "teks": "mengurangkan perubahan momentum / reduce change of momentum"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Impuls ditakrifkan sebagai perubahan momentum (J = mv - mu = Ft). Daya impuls ialah kadar perubahan momentum dalam perlanggaran atau letupan. Jawapan yang betul ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q44",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 44,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 34 menunjukkan seorang ahli bomba sedang memegang hos air dengan kuat supaya sentakan hos ke belakang dapat diatasi semasa air dipancut keluar dari hos itu.\nDiagram 34 shows a firefighter holding a water hose firmly so that the recoil of the hose can be overcome as the water is ejected from the hose. (SBP: 2022)\n\nHukum fizik manakah yang boleh menerangkan situasi ini?\nWhich physics law can explain this situation?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah34.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Gerakan Newton Pertama / Newton's First Law of Motion"
      },
      {
        "id": "B",
        "teks": "Hukum Gerakan Newton Kedua / Newton's Second Law of Motion"
      },
      {
        "id": "C",
        "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion"
      },
      {
        "id": "D",
        "teks": "Prinsip Keabadian Tenaga / Principle of Conservation of Energy"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.4 Inersia, konsep yang diaplikasikan menghasilkan jawapan C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q45",
    "sumber": "Percubaan Selangor: Set 1 2022",
    "tahun": 2022,
    "noSoalanAsal": 45,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.3 Mewajarkan kesan inersia dalam kehidupan harian",
    "spKod": "2.4.3",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 35 menunjukkan sebuah kereta berhenti\nsecara tiba-tiba, menyebabkan penumpang dalam\nkereta tersebut terhumban ke hadapan.\nDiagram 35 shows a car stopping suddenly,\ncausing passengers in the car to be thrown\nforward. (Selangor: Set 1: 2022)\nApakah konsep yang menerangkan situasi di\natas?\nWhat concept can explain the above situation?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah35.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Graviti / Gravity"
      },
      {
        "id": "B",
        "teks": "Inersia / Inertia"
      },
      {
        "id": "C",
        "teks": "Momentum / Momentum"
      },
      {
        "id": "D",
        "teks": "Keseimbangan daya / Equilibrium of forces"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.5 Momentum, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q46",
    "sumber": "Percubaan Selangor: Set 1 2022",
    "tahun": 2022,
    "noSoalanAsal": 46,
    "sk": "SK 2.8 Berat",
    "sp": "SP 2.8.1 Menyatakan berat sebagai daya graviti yang bertindak ke atas suatu objek, W = mg",
    "spKod": "2.8.1",
    "rujukanDskp": "DSKP Fizik T4 ms 42",
    "rujukanBukuTeks": "Buku Teks T4 ms 79-82",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 20",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.8 Berat",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Pernyataan manakah yang benar?\nWhich statement is true? (Selangor: Set 1: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Berat ialah kuantiti asas Weight is / base quantity"
      },
      {
        "id": "B",
        "teks": "Berat ialah kuantiti skalar Weight is a / scalar quantity"
      },
      {
        "id": "C",
        "teks": "Unit S.I. bagi berat ialah Newton (N) / The S.I unit for weight is Newton (N)"
      },
      {
        "id": "D",
        "teks": "Berat sesuatu objek adalah sama di mana- mana The weight of an / object is the same everywhere"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Berat ialah daya graviti yang bertindak ke atas suatu objek (W = mg). Berat merupakan kuantiti vektor (diukur dalam Newton, N) yang bergantung kepada kekuatan medan graviti, berbeza dengan jisim yang merupakan kuantiti asas malar (kg). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q47",
    "sumber": "Percubaan Selangor: Set 2 2022",
    "tahun": 2022,
    "noSoalanAsal": 47,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 36 menunjukkan seorang budak lelaki dikejar oleh seekor lembu. Budak lelaki itu berlari secara zigzag kerana dia tahu bahawa lembu itu akan mengalami kesukaran untuk kerap mengubah arah pergerakannya.\nDiagram 36 shows a boy being chased by a bull. The boy ran in a zigzag manner because he knows that the bull will find it difficult to constantly change the direction of its movement. (Selangor: Set 2: 2022)\n\nIni adalah disebabkan\nThis is because",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah36.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "lembu berlari lebih laju daripada budak lelaki itu / the bull runs faster than the boy"
      },
      {
        "id": "B",
        "teks": "lembu mempunyai jisim yang lebih besar daripada budak lelaki itu / the bull has a greater mass than the boy"
      },
      {
        "id": "C",
        "teks": "lembu mempunyai saiz yang lebih besar daripada budak lelaki itu / the bull has a greater size than the boy"
      },
      {
        "id": "D",
        "teks": "lembu mempunyai kaki yang lebih panjang daripada budak lelaki itu / the bull has longer legs than the boy"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.4 Inersia, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q48",
    "sumber": "Percubaan Selangor: Set 2 2022",
    "tahun": 2022,
    "noSoalanAsal": 48,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara berikut yang manakah adalah benar?\nWhich of the following is true?\n(Selangor: Set 2: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim bergantung kepada graviti / Mass depends on gravity"
      },
      {
        "id": "B",
        "teks": "Berat bergantung kepada graviti / Weight depends on gravity"
      },
      {
        "id": "C",
        "teks": "Jisim ialah satu daya, berat bukan satu daya / Mass is a force, weight is not a force"
      },
      {
        "id": "D",
        "teks": "Berat ialah satu kuantiti skalar, manakala jisim ialah satu vektor Weight is a scalar quantity, while mass is a / vector"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.4 Inersia, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q49",
    "sumber": "Percubaan SMKA 2022",
    "tahun": 2022,
    "noSoalanAsal": 49,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 37 menunjukkan carta pita detik bagi\npergerakan sebuah troli.\nDiagram 37 shows a ticker tape chart for a\nmotion ofa trolley. (SMKA: 2022)\nApakah jenis gerakan troli itu?\nWhat is the motion of the trolley?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah37.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pegun / Stationary"
      },
      {
        "id": "B",
        "teks": "Halaju seragam / Constant velocity"
      },
      {
        "id": "C",
        "teks": "Pecutan seragam / Constant acceleration"
      },
      {
        "id": "D",
        "teks": "Nyahpecutan seragam / Constant deceleration"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q50",
    "sumber": "Percubaan SMKA 2022",
    "tahun": 2022,
    "noSoalanAsal": 50,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 38 menunjukkan sebuah troli berisi blok-\nblok kayu bergerak menuruni sebuah landasan\ncondong. Didapati blok-blok kayu itu terhumban\nke hadapan apabila pergerakan troli itu\ndihentikan oleh satu blok bata.\nDiagram 38 shows a trolley containing wooden\nblocks oving down an inclined runway. It was\nfound that the wooden blocks were thrown\nforward when the movement of the trolley was\nstopped by a block of brick. (SMKA: 2022)\nAntara konsep fizik berikut, yang manakah\nmenerangkan situasi di atas?\nWhich of the following physics concept explain\nthe above situation?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah38.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Inersia / Inertia"
      },
      {
        "id": "B",
        "teks": "Impuls / Impulse"
      },
      {
        "id": "C",
        "teks": "Momentum / Momentum"
      },
      {
        "id": "D",
        "teks": "Daya impuls / Impulsive force"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Inersia ialah sifat semula jadi suatu objek yang menentang sebarang perubahan kepada keadaan asalnya, sama ada keadaan pegun atau keadaan gerakan (Hukum Gerakan Newton Pertama). Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q51",
    "sumber": "Percubaan SMKA 2022",
    "tahun": 2022,
    "noSoalanAsal": 51,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 39 menunjukkan sebuah buaian Newton.\nApabila bandul X dilepaskan, bandul Y akan\nberayun ke kanan.\nDiagram 39 shows Newton's cradle. When the\npendulunn X is released, the pendulum Y will\nswing to the right. (SMKA: 2022)\nAntara prinsip fizik berikut, yang manakah\nmenerangkan ayunan bandul Y?\nWhich of the following physics 'principle explain\nthe oscillation ofpendulunı Y?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah39.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Prinsip Bernoulli / Bernoulli's principle"
      },
      {
        "id": "B",
        "teks": "Prinsip Superposisi / Superposition principle"
      },
      {
        "id": "C",
        "teks": "Keseimbangan daya / Forces in equilibrium"
      },
      {
        "id": "D",
        "teks": "Prinsip Keabadian Momentum / Principle of Conservation of Momentum"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.5 Momentum, konsep yang diaplikasikan menghasilkan jawapan D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q52",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 52,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 40 menunjukkan satu keratan pita detik\nyang terhasil olchgcerakansebuah troli.\nDiagram 40 shows a cutting of ticker tape\nproduced by the motion of a trolley.\n(Terengganu: 2022)\nApakah jenis gerakan troli itu?\nWhat type of motion of the trolley?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah40.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju seragam / Constant velocity"
      },
      {
        "id": "B",
        "teks": "Memecut / Accelerate"
      },
      {
        "id": "C",
        "teks": "Nyahpecutan / Deceleration"
      },
      {
        "id": "D",
        "teks": "Pegun / Stationary"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q53",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 53,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Bagaimana keadaan sebuah troli yang berat untuk memulakan dan memberhentikan gerakan?\nHow is the condition of a heavy trolley to start its motion and to stop its motion? (Terengganu: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Untuk memulakan: Sukar | Untuk memberhentikan: Sukar (To start: Difficult | To stop: Difficult)"
      },
      {
        "id": "B",
        "teks": "Untuk memulakan: Sukar | Untuk memberhentikan: Senang (To start: Difficult | To stop: Easy)"
      },
      {
        "id": "C",
        "teks": "Untuk memulakan: Senang | Untuk memberhentikan: Sukar (To start: Easy | To stop: Difficult)"
      },
      {
        "id": "D",
        "teks": "Untuk memulakan: Senang | Untuk memberhentikan: Senang (To start: Easy | To stop: Easy)"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berat ialah daya graviti yang bertindak ke atas suatu objek (W = mg). Berat merupakan kuantiti vektor (diukur dalam Newton, N) yang bergantung kepada kekuatan medan graviti, berbeza dengan jisim yang merupakan kuantiti asas malar (kg). Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q54",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 54,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 41 menunjukkan seorang pemain ping-\npong bersedia untuk memukul bola.\nDiagram 41 shows a table-tennis player ready to\nhit a ball. (Terengganu: 2022)\nDaya impuls dihasilkan apabila\nImpulsive force is produced when",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah41.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "raket dihayun pada halaju yang tinggi / the racket is swung at high velocity"
      },
      {
        "id": "B",
        "teks": "raket dihayun ke belakang / the racket is swung backward"
      },
      {
        "id": "C",
        "teks": "raket menghentam bola ping-pong / the racket hits the ping-pong ball"
      },
      {
        "id": "D",
        "teks": "raket digenggam dengan kuat / the racket is gripped strongl"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Impuls ditakrifkan sebagai perubahan momentum (J = mv - mu = Ft). Daya impuls ialah kadar perubahan momentum dalam perlanggaran atau letupan. Jawapan yang betul ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q55",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 55,
    "sk": "SK 2.8 Berat",
    "sp": "SP 2.8.1 Menyatakan berat sebagai daya graviti yang bertindak ke atas suatu objek, W = mg",
    "spKod": "2.8.1",
    "rujukanDskp": "DSKP Fizik T4 ms 42",
    "rujukanBukuTeks": "Buku Teks T4 ms 79-82",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 20",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.8 Berat",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Berat Irfan di Bumi ialah 800 N. Apakah yang\nterjadi kepada beratnya apabila berada di\npermukaan Bulan?\nIrfan's weight on Earth is 800 N. what will\nhappen to his weight on the surface of Moon?\n(Terengganu: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Bertambah / Increases"
      },
      {
        "id": "B",
        "teks": "Berkurang / Decreases"
      },
      {
        "id": "C",
        "teks": "Tidak berubah / Unchanged"
      },
      {
        "id": "D",
        "teks": "Menjadi sifar / Becomes zero"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berat ialah daya graviti yang bertindak ke atas suatu objek (W = mg). Berat merupakan kuantiti vektor (diukur dalam Newton, N) yang bergantung kepada kekuatan medan graviti, berbeza dengan jisim yang merupakan kuantiti asas malar (kg). Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q56",
    "sumber": "Percubaan Kedah 2021",
    "tahun": 2021,
    "noSoalanAsal": 56,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 42 menunjukkan dua biji bebola keluli, P\ndan Q dijatuhkan serentak dari puncak bangunan\nke tanah. Abaikan rintangan udara.\nDiagram 42 shows two steel balls, P and Q, are\ndropped fiom top ofa building to the ground.\nAssume the air resistance is negligible.\n(Kedah: 2021)\n(0)\nAntara graf halaju-masa yang berikut yang\nmanakah menunjukkan gerakan yang betul bagi\nP dan Q?\nWhich of the following velocity-time graph shows\nthe correct motion ofP and Q?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah42.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q56_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q56_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q56_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q56_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Bagi graf halaju-masa (v-t), kecerunan graf mewakili pecutan objek (a = dv/dt), manakala luas di bawah graf mewakili jumlah sesaran / jarak yang dilalui oleh objek. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q57",
    "sumber": "Percubaan Kedah 2021",
    "tahun": 2021,
    "noSoalanAsal": 57,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 43 menunjukkan dua sfera, R diperbuat\ndaripada gabus, dan S diperbuat daripada keluli.\nKedua-duanya bergerak dengan kelajuan 3 ms'.\nDiagram 43 shows spheres, R made of cork, and\nS made of steel. Both are moving at a speed of 3\nms'. (Kedah: 2021)\nPerbandingan manakah betul mengenai\nmomentum?\nWhich comparison about the momentum is\ncorrect?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah43.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Momentum R < / Momentum S"
      },
      {
        "id": "B",
        "teks": "Momentum R > / Momentum S"
      },
      {
        "id": "C",
        "teks": "Momentum R = / Momentum S"
      },
      {
        "id": "D",
        "teks": "Momentum R = / Momentum S = 0"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Momentum ditakrifkan sebagai hasil darab jisim dengan halaju (p = mv). Ia merupakan kuantiti vektor yang mempunyai magnitud dan arah. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q58",
    "sumber": "Percubaan Kelantan 2021",
    "tahun": 2021,
    "noSoalanAsal": 58,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 44 menunjukkan seketul batu dan sehelai\nbulu ayam dijatuhkan serentak dari satu\nketinggian yang sama.\nDiagram 44 shows a stone and a piece of feather\nwere dropped simultaneously from the same\nheight. (Kelantan: 2021)\nApa yang berlaku kepada masa kejatuhan bagi\nkedua-dua objek?\nWhathappens to the fall time for both objects?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah44.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Bulu ayam jatuh lebih cepat / The feather falls faster"
      },
      {
        "id": "B",
        "teks": "Batu jatuh lebih cepat / The stone falls faster"
      },
      {
        "id": "C",
        "teks": "Sama / Equal"
      },
      {
        "id": "D",
        "teks": "Kedua-dua objek tidak sampai ke tanah / Both objects do not reach the ground"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.3 Gerakan Jatuh Bebas, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q59",
    "sumber": "Percubaan Sarawak 2021",
    "tahun": 2021,
    "noSoalanAsal": 59,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
    "spKod": "2.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 45 menunjukkan laluan yang dilalui oleh seorang lelaki.\nDiagram 45 shows the path travelled by a man. (Sarawak: 2021)\n\nApakah kuantiti yang boleh ditentukan dari laluan PQR dan PR?\nWhat is the quantity that can be determined from path PQR and PR?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah45.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "PQR: Jarak dan laju (Distance and speed) | PR: Sesaran dan halaju (Displacement and velocity)"
      },
      {
        "id": "B",
        "teks": "PQR: Sesaran dan halaju (Displacement and velocity) | PR: Jarak dan laju (Distance and speed)"
      },
      {
        "id": "C",
        "teks": "PQR: Jarak dan laju (Distance and speed) | PR: Jarak dan laju (Distance and speed)"
      },
      {
        "id": "D",
        "teks": "PQR: Sesaran dan halaju (Displacement and velocity) | PR: Sesaran dan halaju (Displacement and velocity)"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q60",
    "sumber": "Percubaan Sarawak 2021",
    "tahun": 2021,
    "noSoalanAsal": 60,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.3 Memerihalkan kesan dan aplikasi daya impuls dalam kehidupan harian",
    "spKod": "2.7.3",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 46 menunjukkan tindakan ikut lajak yang\ndilakukan oleh seorang pemain bola sepak.\nDiagram 46 shows follow through action by a\nfootball player. (Sarawak: 2021)\nApakah tujuan tindakan ikut lajak?\nWhat is the purpose offollow through actio?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah46.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Untuk meningkatkan daya impuls To / increase the impulsive force"
      },
      {
        "id": "B",
        "teks": "Untuk meningkatkan impuls To / increase the impulse"
      },
      {
        "id": "C",
        "teks": "Untuk meningkatkan inersia bola To / increase the inertia of the ball"
      },
      {
        "id": "D",
        "teks": "Untuk mengurangkan perubalhan / momentum bola To decrease the change in monentum of the ball"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Impuls ditakrifkan sebagai perubahan momentum (J = mv - mu = Ft). Daya impuls ialah kadar perubahan momentum dalam perlanggaran atau letupan. Jawapan yang betul ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q61",
    "sumber": "Percubaan Terengganu 2021",
    "tahun": 2021,
    "noSoalanAsal": 61,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
    "spKod": "2.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Sebuah kereta yang bergerak dengan halaju\nseragam mempunyai pecutan\nA car moving with uniform velocity has acceleration\n(Terengganu: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "bertambah / increases"
      },
      {
        "id": "B",
        "teks": "seragam / uniform"
      },
      {
        "id": "C",
        "teks": "sifar / zero"
      },
      {
        "id": "D",
        "teks": "berkurang / decreases"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q62",
    "sumber": "Percubaan Terengganu 2021",
    "tahun": 2021,
    "noSoalanAsal": 62,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Inersia suatu objek dipengaruhi oleh\nThe inertia of an object is affected by\n(Terengganu: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "pecutan jasad"
      },
      {
        "id": "B",
        "teks": "halaju jasad"
      },
      {
        "id": "C",
        "teks": "jisim jasad body body mass / acceleration"
      },
      {
        "id": "D",
        "teks": "suhu jasad body velocity body tenmperatuwe"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Inersia ialah sifat semula jadi suatu objek yang menentang sebarang perubahan kepada keadaan asalnya, sama ada keadaan pegun atau keadaan gerakan (Hukum Gerakan Newton Pertama). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q63",
    "sumber": "Percubaan Terengganu 2021",
    "tahun": 2021,
    "noSoalanAsal": 63,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 47 menunjukkan satu daya bertindak pada\nsuatu objek.\nDiagram 47 shows a force acting on an object.\n(Terengganu: 2021)\ndaya\nforce\nImpuls yang diberikan kepada objek itu\ndipengaruhi oleh\nThe impulse given to the object is influenced by",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah47.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "daya sahaja / force only"
      },
      {
        "id": "B",
        "teks": "jisim sahaja / mass only"
      },
      {
        "id": "C",
        "teks": "daya dan masa hentaman / force and time impact"
      },
      {
        "id": "D",
        "teks": "daya, jisim dan masa hentaman / force, mass and time impact"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Impuls ditakrifkan sebagai perubahan momentum (J = mv - mu = Ft). Daya impuls ialah kadar perubahan momentum dalam perlanggaran atau letupan. Jawapan yang betul ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q64",
    "sumber": "Percubaan Selangor: Set 1 2021",
    "tahun": 2021,
    "noSoalanAsal": 64,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.3 Mewajarkan kesan inersia dalam kehidupan harian",
    "spKod": "2.4.3",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara berikut yang manakah menunjukkan kesan inersia?\nWhich of the following shows the effect of inertia? (Selangor: Set 1: 2021)\nI Seorang budak perempuan mengeringkan rambut yang basah dengan menggerakkan kepalanya dengan cepat\nA girl dries her wet hair by moving her head quickly\nII Struktur keluli yang kukuh dipasangkan di ruang antara tempat duduk pemandu dengan kayu balak\nA sturdy steel structure is installed in the space between the driver's seat and the logs\nIII Kepala tukul diketatkan dengan menghentakkan bahagian pemegangnya pada lantai\nThe hammer head is tightened by striking the handle part on the floor",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II"
      },
      {
        "id": "B",
        "teks": "I dan III"
      },
      {
        "id": "C",
        "teks": "II dan III"
      },
      {
        "id": "D",
        "teks": "I, II dan III"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Kesan inersia menyebabkan objek mengekalkan keadaan asalnya (sama ada pegun atau terus bergerak dengan halaju malar dalam garis lurus) apabila tiada daya luar bertindak ke atasnya (Hukum Gerakan Newton Pertama). Jawapan yang betul ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q65",
    "sumber": "Percubaan Selangor: Set 1 2021",
    "tahun": 2021,
    "noSoalanAsal": 65,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara yang berikut, yang manakah benar mengenai perlanggaran kenyal antara dua jasad?\nWhich of the following is true about an elastic collision between two bodies? (Selangor: Set 1: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jumlah momentum: Diabadikan (Conserved) | Jumlah tenaga kinetik: Diabadikan (Conserved)"
      },
      {
        "id": "B",
        "teks": "Jumlah momentum: Diabadikan (Conserved) | Jumlah tenaga kinetik: Tidak diabadikan (Not conserved)"
      },
      {
        "id": "C",
        "teks": "Jumlah momentum: Tidak diabadikan (Not conserved) | Jumlah tenaga kinetik: Diabadikan (Conserved)"
      },
      {
        "id": "D",
        "teks": "Jumlah momentum: Tidak diabadikan (Not conserved) | Jumlah tenaga kinetik: Tidak diabadikan (Not conserved)"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Dalam perlanggaran kenyal, kedua-dua jumlah momentum dan jumlah tenaga kinetik diabadikan, serta objek melantun semula selepas perlanggaran. Jawapan yang betul ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q66",
    "sumber": "Percubaan Selangor: Set 1 2021",
    "tahun": 2021,
    "noSoalanAsal": 66,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.3 Memerihalkan kesan dan aplikasi daya impuls dalam kehidupan harian",
    "spKod": "2.7.3",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 48 menunjukkan kawasan pendaratan lompat jauh yang berpasir.\nDiagram 48 shows a long jump pit which is filled with sand. (Selangor: Set 1: 2021)\n\nTujuan pasir itu adalah untuk\nThe purpose of the sand in the pit is to",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah48.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "mengurangkan impuls pada kaki atlet. / reduce the impulse on the feet of the athlete."
      },
      {
        "id": "B",
        "teks": "mengurangkan daya impuls pada kaki atlet. / reduce the impulsive force that acts on the leg of the athlete."
      },
      {
        "id": "C",
        "teks": "mengurangkan halaju atlet sebelum mendarat. / reduce the velocity of the athlete just before landing."
      },
      {
        "id": "D",
        "teks": "mengurangkan masa tindak balas antara kaki atlet dengan tanah. / reduce the reaction time between the feet of the athlete and the ground."
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Daya impuls berbanding songsang dengan masa impak: F = (mv - mu) / t. Memanjangkan masa tindak balas / masa impak akan mengurangkan magnitud daya impuls yang bertindak, sekaligus mengurangkan kecederaan (Hukum Gerakan Newton Ketiga). Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q67",
    "sumber": "Percubaan Selangor: Set 2 2021",
    "tahun": 2021,
    "noSoalanAsal": 67,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 49 menunjukkan graf sesaran-masa bagi\nsebuah kereta yang bergerak di sepanjang garis\nlurus.\nDiagram 49 shows a displacement-time graph of\na car moving in a straight line.\n(Selangor: Set 2: 2021)\nAntara graf halaju-masa yang berikut, manakah\nmewakili pergerakan kereta tersebut?\nWhich of the following velocity-time graph\nrepresents the motion of the car?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah49_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q67_opt_a_v2.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q67_opt_b_v2.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q67_opt_c_v2.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q67_opt_d_v2.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Bagi graf sesaran-masa (s-t), kecerunan graf mewakili halaju (v = ds/dt). Garis lurus condong mewakili halaju seragam, garis mendatar mewakili objek pegun (halaju sifar), dan garis lengkung mewakili halaju tidak seragam (memecut/menyahpecut). Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q68",
    "sumber": "Percubaan Selangor: Set 2 2021",
    "tahun": 2021,
    "noSoalanAsal": 68,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.3 Mewajarkan kesan inersia dalam kehidupan harian",
    "spKod": "2.4.3",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara berikut yang manakah menunjukkan kesan inersia?\nWhich of the following shows the effect of inertia? (Selangor: Set 2: 2021)",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_q68_situasi.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II"
      },
      {
        "id": "B",
        "teks": "I dan III"
      },
      {
        "id": "C",
        "teks": "II dan III"
      },
      {
        "id": "D",
        "teks": "I, II dan III"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Kesan inersia menyebabkan objek mengekalkan keadaan asalnya (sama ada pegun atau terus bergerak dengan halaju malar dalam garis lurus) apabila tiada daya luar bertindak ke atasnya (Hukum Gerakan Newton Pertama). Jawapan yang betul ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q69",
    "sumber": "Percubaan Selangor: Set 2 2021",
    "tahun": 2021,
    "noSoalanAsal": 69,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.1 Menghuraikan jenis gerakan linear bagi objek yang berada dalam keadaan pegun, halaju seragam dan halaju tidak seragam",
    "spKod": "2.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 50 menunjukkan tiga keping duit syiling yang serupa, P, Q dan R, yang pegun di atas suatu permukaan mengufuk.\nDiagram 50 shows three identical coins, P, Q and R, at rest on a horizontal surface. (Selangor: Set 2: 2021)\n\nApakah yang berlaku apabila P ditolak dan berlanggar dengan Q?\nWhat happens if P is pushed and collided with Q?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah50.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "P: Bergerak (Moves) | Q: Pegun (Stationary) | R: Pegun (Stationary)"
      },
      {
        "id": "B",
        "teks": "P: Pegun (Stationary) | Q: Pegun (Stationary) | R: Bergerak (Moves)"
      },
      {
        "id": "C",
        "teks": "P: Bergerak (Moves) | Q: Bergerak (Moves) | R: Pegun (Stationary)"
      },
      {
        "id": "D",
        "teks": "P: Bergerak (Moves) | Q: Pegun (Stationary) | R: Bergerak (Moves)"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q70",
    "sumber": "Percubaan MRSM 2021",
    "tahun": 2021,
    "noSoalanAsal": 70,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 51 menunjukkan satu objek sedang jatuh\nbebas dalam dua situasi yang berbeza.\nDiagram 51 shows an object is free falling in two\ndifferent situations. (MRSM: 2021)\nPernyataan manakah yang betul untuk\nmenerangkan pergerakan objek tersebut apabila\nia bergerak ke bawah?\nWhich statement is correct to explain the motion\nof the object when it moves dowmvard?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah51.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju bertambah / Increasing velocity"
      },
      {
        "id": "B",
        "teks": "Halaju berkurang / Decreasing velocity"
      },
      {
        "id": "C",
        "teks": "Pecutan bertambah Increasing / acceleration"
      },
      {
        "id": "D",
        "teks": "Pecutan berkurang Decreasing / acceleration"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Dalam keadaan jatuh bebas (seperti di dalam tiub vakum di mana rintangan udara diabaikan), semua objek mengalami pecutan graviti bumi yang sama (g ≈ 9.81 m s⁻²) tanpa dipengaruhi oleh jisim atau bentuk objek. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q71",
    "sumber": "Percubaan Negeri Sembilan 2021",
    "tahun": 2021,
    "noSoalanAsal": 71,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.3 Mewajarkan kesan inersia dalam kehidupan harian",
    "spKod": "2.4.3",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Situasi manakah yang melibatkan inersia?\nWhich situation involves inertia? (Negeri Sembilan: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Situasi A (Mengeringkan payung basah dengan memusingkannya) / Rotating a wet umbrella"
      },
      {
        "id": "B",
        "teks": "Situasi B (Meluncur papan salji) / Snowboarding"
      },
      {
        "id": "C",
        "teks": "Situasi C (Menolak kotak berat) / Pushing a heavy box"
      },
      {
        "id": "D",
        "teks": "Situasi D (Menendang bola sepak) / Kicking a football"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Kesan inersia menyebabkan objek mengekalkan keadaan asalnya (sama ada pegun atau terus bergerak dengan halaju malar dalam garis lurus) apabila tiada daya luar bertindak ke atasnya (Hukum Gerakan Newton Pertama). Jawapan yang betul ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q72",
    "sumber": "Percubaan Negeri Sembilan 2021",
    "tahun": 2021,
    "noSoalanAsal": 72,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 52 menunjukkan sehelai bulu pelepah dan\nsebiji bola boling dijatuhkan di dalam vakum.\nDiagram 52 shows a piece of feather and\nbowling ball being dopped in avacuunm.\n(Negeri Sembilan: 2021)\nAntara graf halaju-masa berikut, yang manakah\nmenunjukkan gerakan bulu pelepah dan bola\nboling yang betul?\nWhich of the following velocity-time graphs\nshows the correct motion of the feather and the\nbowling ball?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah52.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q72_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q72_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q72_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q72_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Dalam keadaan jatuh bebas (seperti di dalam tiub vakum di mana rintangan udara diabaikan), semua objek mengalami pecutan graviti bumi yang sama (g ≈ 9.81 m s⁻²) tanpa dipengaruhi oleh jisim atau bentuk objek. Jawapan: D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q73",
    "sumber": "Percubaan Negeri Sembilan 2021",
    "tahun": 2021,
    "noSoalanAsal": 73,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 53 menunjukkan satu alu menghentam lesung.\nDiagram 53 shows a pestle hitting a mortar. (Negeri Sembilan: 2021)\n\nSatu daya yang besar bertindak pada alu disebabkan oleh\nA large force acting on the pestle is due to",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah53.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Perubahan momentum alu berlaku dalam tempoh masa yang pendek / Change in momentum of the pestle occurs in a short period of time"
      },
      {
        "id": "B",
        "teks": "Perubahan momentum alu berlaku dalam tempoh masa yang panjang / Change in momentum of the pestle occurs in a long period of time"
      },
      {
        "id": "C",
        "teks": "Alu itu mengalami perubahan jisim apabila ia menghentam lesung / The pestle undergoes a change of mass when it hits the mortar"
      },
      {
        "id": "D",
        "teks": "Alu itu mengalami geseran yang kecil apabila ia menghentam lesung / The pestle experiences little friction when it hits the mortar"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Momentum ditakrifkan sebagai hasil darab jisim dengan halaju (p = mv). Ia merupakan kuantiti vektor yang mempunyai magnitud dan arah. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q74",
    "sumber": "Percubaan Pahang 2021",
    "tahun": 2021,
    "noSoalanAsal": 74,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
    "spKod": "2.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Satu zarah bergerak dari titik P ke titik Q dalam masa, T. Antara pernyataan berikut yang manakah benar tentang halaju purata dan pecutan purata bagi zarah tersebut?\nA particle moves from a point P to a point Q in a time T. Which one of the following correctly defines both the average velocity and average acceleration of the particle? (Pahang: 2021)",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju purata: Sesaran Q dari P / T (Displacement of Q from P / T) | Pecutan purata: Perubahan laju dari P ke Q / T (Change in speed from P to Q / T)"
      },
      {
        "id": "B",
        "teks": "Halaju purata: Jarak Q dari P / T (Distance of Q from P / T) | Pecutan purata: Perubahan laju dari P ke Q / T (Change in speed from P to Q / T)"
      },
      {
        "id": "C",
        "teks": "Halaju purata: Jarak Q dari P / T (Distance of Q from P / T) | Pecutan purata: Perubahan halaju dari P ke Q / T (Change in velocity from P to Q / T)"
      },
      {
        "id": "D",
        "teks": "Halaju purata: Sesaran Q dari P / T (Displacement of Q from P / T) | Pecutan purata: Perubahan halaju dari P ke Q / T (Change in velocity from P to Q / T)"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Berdasarkan takrifan kuantiti fizik:\n1. Halaju purata (Average velocity) = Sesaran / Masa = Sesaran Q dari P / T (Displacement of Q from P / T).\n2. Pecutan purata (Average acceleration) = Perubahan halaju / Masa = Perubahan halaju dari P ke Q / T (Change in velocity from P to Q / T).\nMaka, gabungan takrifan yang betul ialah pilihan D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q75",
    "sumber": "Percubaan Pahang 2021",
    "tahun": 2021,
    "noSoalanAsal": 75,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.3 Menterjemah dan melakar graf gerakan linear",
    "spKod": "2.2.3",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 54 menunjukkan graf perubahan halaju, v terhadap masa, t bagi sebuah objek yang bergerarak\nDiagram 54 show shows a graph of the variation with timet of the velocity v of anobject. (Pahang: 2021)\nAntara graf-graf berikut yang manakah mewakili perubahan pecutan terhadap masa bagi objek tersebut?\nWhich one of the following graphsbestrepresents the variation with time t of the acceleration a of the object?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah54_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q75_opt_a_v2.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q75_opt_b_v2.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q75_opt_c_v2.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q75_opt_d_v2.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q76",
    "sumber": "Percubaan Pahang 2021",
    "tahun": 2021,
    "noSoalanAsal": 76,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.2 Menentukan jarak, sesaran, laju, halaju dan pecutan",
    "spKod": "2.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 55 menunjukkan sebiji bola dijatuhkan dari sebuah permukaan atas meja. Rintangan udara diabaikan.\nDiagram 55 shows a ball dropped from a tabletop. Air resistance is ignored. (Pahang: 2021)\n\nApakah jenis gerakan bola itu?\nWhat is the type of motion of the ball?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah55_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju: Malar (Constant) | Pecutan: Malar (Constant)"
      },
      {
        "id": "B",
        "teks": "Halaju: Meningkat (Increasing) | Pecutan: Malar (Constant)"
      },
      {
        "id": "C",
        "teks": "Halaju: Malar (Constant) | Pecutan: Meningkat (Increasing)"
      },
      {
        "id": "D",
        "teks": "Halaju: Meningkat (Increasing) | Pecutan: Meningkat (Increasing)"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q77",
    "sumber": "Percubaan Pahang 2021",
    "tahun": 2021,
    "noSoalanAsal": 77,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Pernyataan manakah yang betul mengenai\ninersia?\nWhich statement is correct about inertia?\n(Pahang: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Inersia bergantung pada saiz objek. / Inertia depends on the size of an object."
      },
      {
        "id": "B",
        "teks": "Objek yang mudah bergerak sukar dihentikan. / Object that easy to move is difficult to stop."
      },
      {
        "id": "C",
        "teks": "Objek dengan jisim kecil lebih mudah bergerak. / Object with small mass is easier to move."
      },
      {
        "id": "D",
        "teks": "Inersia objek yang sama lebih besar di Bumi berbanding dengan inersia di Bulan / Inertia of the same object is greater on Earth compared to its inertia on the Moon."
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Inersia ialah sifat semula jadi suatu objek yang menentang sebarang perubahan kepada keadaan asalnya, sama ada keadaan pegun atau keadaan gerakan (Hukum Gerakan Newton Pertama). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q78",
    "sumber": "Percubaan Pahang 2021",
    "tahun": 2021,
    "noSoalanAsal": 78,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.1 Berkomunikasi untuk menerangkan impuls dan daya impuls (Hukum Gerakan Newton Ketiga)",
    "spKod": "2.7.1",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 56 menunjukkan dua biji telur yang sama\ndilepaskan dari ketinggian yang sama ke satu\npermukaan kayu dan satu span tebal.\nDiagram 56 shows two identical eggs released\nfrom the same height, on to a wooden surface and\na thick sponge. (Pahang: 2021)\nKuantiti fizikal yang manakah sama dalam\nkedua-dua keadaan ketika telur terhempas ke\npemukaan?\nWhich of physical guantity is the same in both\nsituations when the eggs hit on the surfaces?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah56.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Impuls / Impulse"
      },
      {
        "id": "B",
        "teks": "Pecutan / Acceleration"
      },
      {
        "id": "C",
        "teks": "Masa hentaman / Time of impact"
      },
      {
        "id": "D",
        "teks": "Daya impuls / Impulsive force"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Impuls ditakrifkan sebagai perubahan momentum (J = mv - mu = Ft). Daya impuls ialah kadar perubahan momentum dalam perlanggaran atau letupan. Jawapan yang betul ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q79",
    "sumber": "Percubaan SBP 2021",
    "tahun": 2021,
    "noSoalanAsal": 79,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.1 Mentafsir jenis gerakan dari graf sesaran-masa, halaju-masa dan pecutan-masa",
    "spKod": "2.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 57 menunjukkan graf halaju-masa bagi\nsebuah kereta yang bergerak dalam satu garis\nlurus.\nDiagram 57 shows a velocity-time graph fora car\nmoving in a straight line. (SBP: 2021)\nApakah jenis gerakan kereta itu pada QR?\nWhat is the ype of motion of the car at QR?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah57.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju seragam / Constant velocity"
      },
      {
        "id": "B",
        "teks": "Pecutan seragam Constant / acceleration"
      },
      {
        "id": "C",
        "teks": "Halaju bertambah / Velocity increases"
      },
      {
        "id": "D",
        "teks": "Pecutan bertambah / Acceleration increases"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Bagi graf halaju-masa (v-t), kecerunan graf mewakili pecutan objek (a = dv/dt), manakala luas di bawah graf mewakili jumlah sesaran / jarak yang dilalui oleh objek. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q80",
    "sumber": "Percubaan SBP 2021",
    "tahun": 2021,
    "noSoalanAsal": 80,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 58 menunjukkan seorang pelumba basikal\nyang terpelanting ke hadapan apabila beliau\nmenarik brek secara mengejut.\nDiagram 58 shows a racing cyclist who is thrown\nforward when he pulls the brake suddenly.\n(SBP: 2021)\nHukum fizik manakah yang terlibat?\nWhich physics law is involved?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah58.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Kegravitian SemestaNewton / Newton's Universal Law of Gravitation"
      },
      {
        "id": "B",
        "teks": "Hukum Gerakan Newton Pertama / Newton's First Law of Motion"
      },
      {
        "id": "C",
        "teks": "Hukum Gerakan Newton Kedua / Newton's Second Law of Motion"
      },
      {
        "id": "D",
        "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion 32"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.4 Inersia, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q81",
    "sumber": "Percubaan SBP 2021",
    "tahun": 2021,
    "noSoalanAsal": 81,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 59 menunjukkan dua pemain ragbi yang\nberlanggar dalam perlawanan ragbi. Selepas\npelanggaran, mereka bergerak bersama-sama.\nDiagram 59 shows two rugby players collide in a\nrugby match, after the collision, they move\ntogether. (SBP: 2021)\nPernyataan manakah yang benar?\nWhich statements are correct?\nI Jumlah momentum diabadikan\nTotal momentum is conserved\nII Jumlah tenaga kinetik diabadikan\nTotal kinetic energy is conserved\nIII Kedua-dua pemain ragbi mengalami\npelanggaran kenyal\nBoth rugby players experience elastic\ncollision\nIV Kedua-dua pemain ragbi mengalami\npelanggaran tak kenyal\nBoth rugby players experience inelastic\ncollision",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah59.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II"
      },
      {
        "id": "B",
        "teks": "I dan IV"
      },
      {
        "id": "C",
        "teks": "II dan III"
      },
      {
        "id": "D",
        "teks": "III dan IV"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Dalam perlanggaran kenyal, kedua-dua jumlah momentum dan jumlah tenaga kinetik diabadikan, serta objek melantun semula selepas perlanggaran. Jawapan yang betul ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q82",
    "sumber": "Percubaan SBP 2021",
    "tahun": 2021,
    "noSoalanAsal": 82,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.1 Menghuraikan jenis gerakan linear bagi objek yang berada dalam keadaan pegun, halaju seragam dan halaju tidak seragam",
    "spKod": "2.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 60 memunjukkan Abdul Latif bin Romly\ndalam acara lompat jauh.\nDiagram 60shows Abdul Latif bin Romly in long\njunp event. (SBP: 2021)\nTeknik manakah yang beliau gunakan untuk\nmengurangkan kecederaan?\nWhich technique that he used to reduce injury?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah60.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Mendarat dengan satu kaki / Landing on one leg"
      },
      {
        "id": "B",
        "teks": "Mendarat dengan meluruskan kaki / Landing on straight legs"
      },
      {
        "id": "C",
        "teks": "Menegakkan badan ketika mendarat / Uphold the body when landing"
      },
      {
        "id": "D",
        "teks": "Membengkokkan lutut untuk mendarat / Bend the knee when landing"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q83",
    "sumber": "Percubaan Melaka 2021",
    "tahun": 2021,
    "noSoalanAsal": 83,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara graf berikut, yang manakah menunjukkan\nhalaju malar?\nWhich graph shows a constant velocity?\n(Melaka: 2021)",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q83_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q83_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q83_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q83_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Bagi graf sesaran-masa (s-t), kecerunan graf mewakili halaju (v = ds/dt). Garis lurus condong mewakili halaju seragam, garis mendatar mewakili objek pegun (halaju sifar), dan garis lengkung mewakili halaju tidak seragam (memecut/menyahpecut). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q84",
    "sumber": "Percubaan Melaka 2021",
    "tahun": 2021,
    "noSoalanAsal": 84,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 61 menunjukkan duit syiling, guli dan daun\nkering dijatuhkan serentak di dalam silinder\nvakum.\nDiagram 61 shows a coin, marble and dried leaf\nbeing released at the same time in a vacuum\ncylinder. (Melaka: 2021)\nManakah pemerhatian yang betul?\nWhich observation is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah61.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Ketiga-tiga objek terapung di dalam silinder All threeobjects float in the cylinder"
      },
      {
        "id": "B",
        "teks": "Ketiga-tiga objek tiba di tapak pada masa yang sama. All three objects reach the / base at the same time"
      },
      {
        "id": "C",
        "teks": "Guli tiba di tapak lebih awal daripada duit syiling The marble reaches the / base earlier than the coin"
      },
      {
        "id": "D",
        "teks": "Duit syiling dan guli tiba di tapak lebih awal daripada daun kering. The coin and the marble reach the / base earlier than the dried leaf"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Dalam keadaan jatuh bebas (seperti di dalam tiub vakum di mana rintangan udara diabaikan), semua objek mengalami pecutan graviti bumi yang sama (g ≈ 9.81 m s⁻²) tanpa dipengaruhi oleh jisim atau bentuk objek. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q85",
    "sumber": "Percubaan Melaka 2021",
    "tahun": 2021,
    "noSoalanAsal": 85,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 62 menunjukkan keadaan pembonceng\nmotosikal yang bergerak ke belakang apabila\nmotosikal mula memecut.\nDiagram 62 shows a pillion rider moving\nbackwards when the motorcycle accelerates.\n(Melaka: 2021)\nPergerakan pembonceng itu ke belakang boleh\nditerangkan oleh\nThe backwardsmovement of the pillion rider can\nbe explained by",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah62.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Konsep inersia / Concept of inertia"
      },
      {
        "id": "B",
        "teks": "Konsep keseimbangan daya / Concept of equilibrium of forces"
      },
      {
        "id": "C",
        "teks": "Prinsip keabadian momentum / Principle of conservation of momentum"
      },
      {
        "id": "D",
        "teks": "Prinsip keabadian tenaga / Principle of conservation of energy"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Inersia ialah sifat semula jadi suatu objek yang menentang sebarang perubahan kepada keadaan asalnya, sama ada keadaan pegun atau keadaan gerakan (Hukum Gerakan Newton Pertama). Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q86",
    "sumber": "Percubaan Melaka 2021",
    "tahun": 2021,
    "noSoalanAsal": 86,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 63 menunjukkan troli A dan troli B menghampiri antara satu sama lain dan berlanggar.\nDiagram 63 shows a trolley A and trolley B are approaching each other and collide. (Melaka: 2021)\n\nManakah pernyataan yang betul?\nWhich statement is true?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah63.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Perlanggaran kenyal berlaku / Elastic collision occurs"
      },
      {
        "id": "B",
        "teks": "Jumlah momentum diabadikan / Total momentum is conserved"
      },
      {
        "id": "C",
        "teks": "Jumlah tenaga kinetik diabadikan / Total kinetic energy is conserved"
      },
      {
        "id": "D",
        "teks": "Kedua-dua objek bergerak dengan kelajuan berbeza selepas berlanggar / Both objects will move with different velocity after collision"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Dalam perlanggaran kenyal, kedua-dua jumlah momentum dan jumlah tenaga kinetik diabadikan, serta objek melantun semula selepas perlanggaran. Jawapan yang betul ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q87",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 87,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara berikut, pilih graf sesaran-masa yang\nmewakili nyahpecutan seragam suatu objek\nFrom the following displacement-tinme graph\nchoose a graph that represents uniform\ndecelerationof an object. (Perlis: 2021)",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q87_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q87_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q87_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k2_q87_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Bagi graf sesaran-masa (s-t), kecerunan graf mewakili halaju (v = ds/dt). Garis lurus condong mewakili halaju seragam, garis mendatar mewakili objek pegun (halaju sifar), dan garis lengkung mewakili halaju tidak seragam (memecut/menyahpecut). Jawapan: D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q88",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 88,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.1 Mentafsir jenis gerakan dari graf sesaran-masa, halaju-masa dan pecutan-masa",
    "spKod": "2.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 64 menunjukkan grafhalaju melawan masa\nbagi gerakan sebuah kereta mainan.\nDiagram 64 shows a velocity against time for\nmotion ofa toy car. (Perlis: 2021)\nKereta mainan itu mengalami pecutan sifar pada\nkedudukan\nThe toy car experiences zero acceleration at",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah64.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "AB"
      },
      {
        "id": "B",
        "teks": "BC"
      },
      {
        "id": "C",
        "teks": "CD"
      },
      {
        "id": "D",
        "teks": "DE 34"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q89",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 89,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Tentukan objek yang mempunyai inersia yang\npaling besar.\nDetermine the object that has the greatest inertia.\n(Perlis: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim = 100 kg, Laju = 20 m s^-1 / Mass = 100 kg, Speed = 20 m s^-1"
      },
      {
        "id": "B",
        "teks": "Jisim = 350 kg, Laju = 40 m s^-1 / Mass = 350 kg, Speed = 40 m s^-1"
      },
      {
        "id": "C",
        "teks": "Jisim = 1 200 kg, Laju = 35 m s^-1 / Mass = 1 200 kg, Speed = 35 m s^-1"
      },
      {
        "id": "D",
        "teks": "Jisim = 10 000 kg, Laju = 25 m s^-1 / Mass = 10 000 kg, Speed = 25 m s^-1"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Inersia suatu objek bergantung secara langsung kepada jisimnya sahaja mengikut Hukum Gerakan Newton Pertama. Semakin besar jisim objek, semakin besar inersianya. Oleh itu, objek dengan jisim terbesar mempunyai inersia paling besar (Jawapan: D).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K2_Q90",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 90,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 65 menunjukkan sebutir peluru ditembak daripada sepucuk senapang.\nDiagram 65 shows a bullet is fired from a rifle. (Perlis: 2021)\n\nSatu keterangan yang benar mengenai momentum berdasarkan rajah adalah\nA true statement about momentum according to the diagram is",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah65.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Momentum peluru adalah lebih daripada momentum senapang / The momentum of the bullet is more than the momentum of the rifle"
      },
      {
        "id": "B",
        "teks": "Jumlah momentum peluru dan senapang adalah sifar / The total momentum of the bullet and the rifle is zero"
      },
      {
        "id": "C",
        "teks": "Kelajuan senapang adalah lebih daripada kelajuan peluru / The speed of the rifle is more than the speed of bullet"
      },
      {
        "id": "D",
        "teks": "Tenaga kinetik peluru adalah sama dengan tenaga kinetik senapang / The kinetic energy of the bullet is equal to the kinetic energy of the rifle"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Momentum ditakrifkan sebagai hasil darab jisim dengan halaju (p = mv). Ia merupakan kuantiti vektor yang mempunyai magnitud dan arah. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q91",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 91,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.1 Mendefinisikan daya sebagai kadar perubahan momentum, F = ma (Hukum Gerakan Newton Kedua)",
    "spKod": "2.6.1",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Hukum Gerakan Newton Kedua menyatakan\nbahawa kadar perubahan momentum berkadar\nterus dengan daya dan bertindak pada arah\ntindakan daya.\nNewton's Second Law of Motion states that the\nrate of change of momentum is directly\nproportional to the force and acts in the direction\nof action oftheforce.\nManakah antara formula berikut yang betul\nberdasarkan pernyataan di atas?\nWhich of the following formulas is correct based\non the statement above? (Pahang: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Faa"
      },
      {
        "id": "B",
        "teks": "Fa ma"
      },
      {
        "id": "C",
        "teks": "aq m"
      },
      {
        "id": "D",
        "teks": "Ft= mv - mu"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Momentum ditakrifkan sebagai hasil darab jisim dengan halaju (p = mv). Ia merupakan kuantiti vektor yang mempunyai magnitud dan arah. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q92",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 92,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Sebuah kapal terbang memerlukan landasan yang\npanjang untuk mendarat. Situasi tersebut boleh\ndijelaskan oleh\nAn airplane needs a long runway to touch down.\nThe situation can be explained by\n(MRSM: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Kegravitian Semesta Newton / Newton's Universal Law of Gravitation"
      },
      {
        "id": "B",
        "teks": "Hukum Gerakan Newton Pertama / Newton's First Law of Motion"
      },
      {
        "id": "C",
        "teks": "Hukum Gerakan Newton Kedua Newton 'sSecond / Law of Motion"
      },
      {
        "id": "D",
        "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.4 Inersia, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q93",
    "sumber": "SPM 2021",
    "tahun": 2021,
    "noSoalanAsal": 93,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.3 Mewajarkan kesan inersia dalam kehidupan harian",
    "spKod": "2.4.3",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Pemandu dan penumpang sebuah kereta\ndinasihatkan untuk memakai tali pinggang\nkeledar. Tali pinggang keledar menghalang\nmereka daripada terhumban ke hadapan dan\nmencederakan mereka. Tujuan pemakaian tali\npinggang keledar adalah untuk mengurangkan\nkesan negatif bagi\nThe driver and passengers ofa car are advised to\nwear seat belts. Seat belts prevent them from\nbeing thrown forvard and hrting themselves.\nThe purpose of wearing seat belts is to reduce the\nnegativeeffectof (SPM: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya / Force"
      },
      {
        "id": "B",
        "teks": "Inersia / Inertia"
      },
      {
        "id": "C",
        "teks": "Jisim / Mass"
      },
      {
        "id": "D",
        "teks": "Berat / Weight"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K2_Q94",
    "sumber": "SPM 2021",
    "tahun": 2021,
    "noSoalanAsal": 94,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 66 (a) menunjukkan Abu menjatuhkan sebuah kotak dari tebing pada ketinggian 15 m.\nDiagram 66 (a) shows Abu drops a box off a cliff at a height of 15 m. (SPM: 2021)\nSekiranya Abu melakukan aktiviti itu dengan kotak yang sama di Bulan seperti ditunjukkan dalam Rajah 66 (b), kuantiti manakah yang akan bertambah?\nIf Abu does the same activity on the Moon using the same box as shown in Diagram 66 (b), which quantity will increase?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah66.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Masa yang diambil untuk kotak sampai ke permukaan, t. Time taken by the box to reach the surface, t"
      },
      {
        "id": "B",
        "teks": "Kekuatan medan graviti, g Gravitational field strength, g"
      },
      {
        "id": "C",
        "teks": "Berat objek, W Weight of / object, W"
      },
      {
        "id": "D",
        "teks": "Jisim objek, m Mass of / object, m"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.4 Inersia, konsep yang diaplikasikan menghasilkan jawapan A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q95",
    "sumber": "SPM 2022",
    "tahun": 2022,
    "noSoalanAsal": 95,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 67 menunjukkan graf sesaran-masa bagi gerakan suatu objek.\nDiagram 67 shows the displacement-time graph of the motion of an object. (SPM: 2022)\n\nAntara berikut, pasangan manakah yang betul tentang gerakan objek itu?\nWhich of the following pairs is correct about the motion of the object?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah67.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "OP: Halaju bertambah (Velocity increases) | PQ: Halaju sifar (Zero velocity)"
      },
      {
        "id": "B",
        "teks": "OP: Halaju bertambah (Velocity increases) | PQ: Halaju seragam (Uniform velocity)"
      },
      {
        "id": "C",
        "teks": "OP: Halaju seragam (Uniform velocity) | PQ: Halaju sifar (Zero velocity)"
      },
      {
        "id": "D",
        "teks": "OP: Halaju sifar (Zero velocity) | PQ: Halaju seragam (Uniform velocity)"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Bagi graf sesaran-masa (s-t), kecerunan graf mewakili halaju (v = ds/dt). Garis lurus condong mewakili halaju seragam, garis mendatar mewakili objek pegun (halaju sifar), dan garis lengkung mewakili halaju tidak seragam (memecut/menyahpecut). Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K2_Q96",
    "sumber": "SPM 2022",
    "tahun": 2022,
    "noSoalanAsal": 96,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 68 menunjukkan sebuah roket dilancarkan\ndari tapak pelancaran.\nDiagram 68 shows a rocket that is launched from\na launchpad. (SPM: 2022)\nAntara pernyataan yang berikut, yang manakah\nbetul tentang pelepasan gas panas melalui ekzos\nroket semasa roket memecut ke atas?\nWhich of the following statements is correct\nabout hot gas emission through the rocket\nexhaust as the rocket accelerates upwards?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah68.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pengurangan jisim bahan api akibat pembakaran menyebabkan pecutan roket ke atas bertambah The reduction in fuel mass due to combustion causes / the upward acceleration of the rocket increases"
      },
      {
        "id": "B",
        "teks": "Jumlah momentum dalam sistem adalah sifar / The total momentum in the system is zero"
      },
      {
        "id": "C",
        "teks": "Tenaga yang terhasil daripada pembakaran bahan api menyebabkan daya tujah roket bertambah / The energy produced from the burning fuel causes the thrust force of the rocket increases"
      },
      {
        "id": "D",
        "teks": "Pecutan roket ke atas sama dengan pecutan graviti roket The upward acceleration of the rocket is equal to / the gravitational acceleration of the rocket"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.5 Momentum, konsep yang diaplikasikan menghasilkan jawapan A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K2_Q97",
    "sumber": "SPM 2023",
    "tahun": 2023,
    "noSoalanAsal": 97,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.3 Memerihalkan kesan dan aplikasi daya impuls dalam kehidupan harian",
    "spKod": "2.7.3",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 69 menunjukkan seorang penerjun sedang\nbersedia untuk mendarat.\nDiagram 69 shows a parachutist is preparing to\nland. (SPM: 2023)\nAntara yang berikut, manakah kacdah pendaratan\nyang lebih selamat?\nWhich of the following is the safer landing\nmethod?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah69.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Mendepangkan tangan untuk meningkatkan kestabilan / Spread the arms to increase the stability"
      },
      {
        "id": "B",
        "teks": "Membengkokkan lutut untuk mengurangkan daya impuls / Bend the knees to reduce impulsive force"
      },
      {
        "id": "C",
        "teks": "Mengangkatkan kaki untuk mengurangkan inersia / Spread the legs to reduce inertia"
      },
      {
        "id": "D",
        "teks": "Merebahkan badan untuk mengurangkan tekanan / Lay the body down to reduce pressure"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.7 Impuls dan Daya Impuls, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q01",
    "sumber": "Percubaan Kelantan 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 70 menunjukkan graf halaju-masa bagi\nsatu objek yang bergerak dalam garis lurus.\nDiagramn 70 shows a velocity-time graph of an\nobject moving along a straight line.\n(Kelantan: 2023)\nHitung jumlah sesaran objek dalam masa 10saat.\nCalculate the total displacement of the object in\n10 seconds.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah70.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "O m"
      },
      {
        "id": "B",
        "teks": "10 m"
      },
      {
        "id": "C",
        "teks": "25 m"
      },
      {
        "id": "D",
        "teks": "50 m"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jumlah sesaran = Luas di bawah graf\ns = 1/2(10)(5) + 1/2(10)(5)\n.. s = 50 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q02",
    "sumber": "Percubaan Kelantan 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.2 Menyelesaikan masalah melibatkan rumus F = ma",
    "spKod": "2.6.2",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 71 menunjukkan seorang budak\nmenendang bola pegun dengan satu daya 6 N.\nSelepas 2 s daya itu dikenakan, halaju bola itu\nialah 28 ms\nDiagram 71 shows a boy kicks a stationary ball\nwith force of 6 N. After 2 s the force is applied,\nthe velocity of the object is 28ms\n(Kelantan: 2023)\nBerapakah jisim bola itu?\nWhat is the mass of the ball?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah71.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "0.20 kg"
      },
      {
        "id": "B",
        "teks": "2.33 kg"
      },
      {
        "id": "C",
        "teks": "0.43 kg"
      },
      {
        "id": "D",
        "teks": "4.67 kg"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "F = ma\nF = m((v-u)/t)\n6 = m((28-0)/2)\n.. m = 2.3333 kg",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q03",
    "sumber": "Percubaan Melaka 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 72 menunjukkan sebahagian daripada\nkeratan pita jangka masa detik diambil dari\ngerakan sebuah troli dalam eksperimen\nmenggunakan jangka masa detik dengan\nfrekuensi 50 Hz.\nDiagram 72 shows a section of the ticker tape\ntaken from the notion of a trolley in an\nexperiment using a ticker timer with frequency 50\nHz. (Melaka: 2023)\nHitungkan pecutan troli itu.\nCalculate the acceleration of the trolley.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah72.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "2.50 cm s?"
      },
      {
        "id": "B",
        "teks": "3.12 cm s?"
      },
      {
        "id": "C",
        "teks": "25.0 cm s²"
      },
      {
        "id": "D",
        "teks": "3125 cms"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "t = (1 / 50 Hz) = 0.02 s\nu = (s/t) = (1 cm / 0.02 s) = 50 cm s^-1\nv = (s/t) = (6 cm / 0.02 s) = 300 cm s^-1\nt = (5 - 1)(0.02) = 0.08 s\na = ((v-u)/t) = ((300 - 50)/0.08) = 3125 cm s^-2",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q04",
    "sumber": "Percubaan Melaka 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 73 menunjukkan graf halaju-masa bagi\ngerakan suatu kereta mainan.\nDiagram 73 shows a velocity-time graph for a\nmotion ofa toy car. (Melaka: 2023)\nBerapakah sesaran kereta itu dalam masa 6 s?\nWhat is the displacement of the car in 6 s?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah73.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "O m"
      },
      {
        "id": "B",
        "teks": "35 m"
      },
      {
        "id": "C",
        "teks": "45 m"
      },
      {
        "id": "D",
        "teks": "75 m"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jumlah sesaran = Luas di bawah graf\ns = [(30 x 2) + 1/2(1)(30)] - 1/2(2)(30)\n.. s = 45 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q05",
    "sumber": "Percubaan Negeri Sembilan 2023",
    "tahun": 2023,
    "noSoalanAsal": 5,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 74 menunjukkan graf halaju-masa\npergerakan sebuah objek.\nDiagram 74 shows the velocity-time graph of an\nobject. (Negeri Sembilan: 2023)\nAntara graf pecutan-masa berikut, yang manakah\nmenunjukkan pergerakan objek tersebut?\nWhich of the following acceleration-time graphs\nshows the object 's motion?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah74.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q05_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q05_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q05_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q05_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Kecerunan graf halaju-masa mewakili pecutan (a = dv/dt).\n1. Fasa pertama: Halaju bertambah secara linear (kecerunan positif malar) -> pecutan malar positif.\n2. Fasa kedua: Halaju seragam (kecerunan sifar) -> pecutan sifar (a = 0).\n3. Fasa ketiga: Halaju berkurang secara linear (kecerunan negatif malar) -> nyahpecutan malar (a negatif).\nGraf pecutan-masa yang menepati ciri-ciri ini ialah Graf A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q06",
    "sumber": "Percubaan Negeri Sembilan 2023",
    "tahun": 2023,
    "noSoalanAsal": 6,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 75 menunjukkan seorang angkasawan\nberjisim 75 kg membaling sebuah beg 45 kg\nmenyebabkan dia tersentak ke arah kapsul\nangkasa.\nDiagram 75 shows an astronaut with mass of 75\nkg throws a 45 kg bag causing him to jerk\ntowards the space capsule.\n(Negeri Sembilan: 2023)\nJika halaju beg yang dibaling 8 ms', berapakah\nhalaju angkasawan selepas beg tersebut dibaling?\nIf the bas is thrown at a velocity of8 ms', what is\nthe velocity of the astronaut after throwing the\nbag?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah75.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "4.80 ms!"
      },
      {
        "id": "B",
        "teks": "48.0 ms!"
      },
      {
        "id": "C",
        "teks": "13.33 ms!"
      },
      {
        "id": "D",
        "teks": "421.88 ms"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "m1 u1 = m2 v2\n(75)(u1) = (45)(8)\n.. u1 = 4.80 m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q07",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 7,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 76 menunjukkan sebuah kereta pada titik M. Kereta itu bergerak ke arah N, kemudian bergerak ke arah L dan berhenti di L.\nDiagram 76 shows a car at M. The car moves toward N, then moves toward L and stops at L. (Pahang: 2023)\n\nBerapakah sesaran kereta itu?\nWhat is the displacement of the car?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah76_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "-2 km"
      },
      {
        "id": "B",
        "teks": "2 km"
      },
      {
        "id": "C",
        "teks": "10 km"
      },
      {
        "id": "D",
        "teks": "18 km"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "M -> N -> L\nTitik awal = M, Titik akhir = L\nSesaran adalah jarak terpendek dari M ke L = 2 km. Tandaan (-) menunjukkan arah ke kiri.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q08",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 8,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 77 menunjukkan graf halaju-masa bagi\npergerakan suatu objek.\nDiagram 77 shows velocity-time graph of a\nmotion of an object. (Pahang: 2023)\nGraf pecutan-masa manakah yang mewakili\npergerakan yang sama seperti objek itu?\nWhich acceleration-time graph represents the\nsame motion as the object?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah77.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q08_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q08_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q08_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q08_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Bagi graf halaju-masa (v-t), kecerunan graf mewakili pecutan objek (a = dv/dt), manakala luas di bawah graf mewakili jumlah sesaran / jarak yang dilalui oleh objek. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q09",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 9,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.2 Menyelesaikan masalah melibatkan impuls dan daya impuls",
    "spKod": "2.7.2",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebiji bola plastisin berjisim 50 g dilontar dengan halaju 10 m s⁻¹ dan telah berlanggar dengan dinding. Bola plastisin itu melekat pada dinding. Jika masa impak semasa perlanggaran ialah 0.4 s, berapakah magnitud daya impuls yang bertindak pada dinding itu?\nA plasticine ball of mass 50 g is thrown at a velocity of 10 m s⁻¹ and hits the wall. It sticks to the wall. If the time of impact during collision is 0.4 s, what is the magnitude of the impulsive force acting on the wall? (Pahang: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "-1 250.00 N"
      },
      {
        "id": "B",
        "teks": "-1.25 N"
      },
      {
        "id": "C",
        "teks": "125.00 N"
      },
      {
        "id": "D",
        "teks": "1 250.00 N"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "F = ma\nF = m((v-u)/t)\nF = 0.05((0 - 10)/0.4)\n.. F = -1.25 N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q10",
    "sumber": "Percubaan Perak 2023",
    "tahun": 2023,
    "noSoalanAsal": 10,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.3 Menyelesaikan masalah yang melibatkan pecutan graviti bumi bagi objek yang jatuh bebas",
    "spKod": "2.3.3",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Chong melontar sebiji batu secara menegak ke\natas dengan halaju awal 20 ms. Berapakah\ntinggi maksimum yang boleh dicapai oleh batu\ntersebut jika rintangan udara diabaikan.\n(Pecutangraviti, g= 9.81 ms]\nChong throws a stone upwards vertically with an\ninitial velocity of 20 ms\". What is the maximum\nheight that the stone can reach if the air\nresistance is neglected'?\n[Gravitationalacceleration,g=9.81 ms]\n(Perak: 2023)",
    "rajahUrl": null,
    "pilihan": [
      {
        "id": "A",
        "teks": "10.30 m"
      },
      {
        "id": "B",
        "teks": "20.39 m"
      },
      {
        "id": "C",
        "teks": "30.29 m"
      },
      {
        "id": "D",
        "teks": "40.30 m"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "a = -g = 9.81 m s^-2\nSimbol, s = h\nv^2 = u^2 + 2as\n20^2 = 0^2 + 2(9.81)h\n.. h = 20.3874 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q11",
    "sumber": "Percubaan Perlis 2023",
    "tahun": 2023,
    "noSoalanAsal": 11,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.2 Menyelesaikan masalah melibatkan rumus F = ma",
    "spKod": "2.6.2",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 78 menunjukkan seorang budak lelaki\nmenendang bola dengan daya 20 N.\nDiagram 78 shows a boy kicking a ball with a\nforce of 20 N. (Perlis: 2023)\nJika bola tersebut bergerak dengan pecutan 50\nms², berapakah jisim bola tersebut!?\nIf the ball moves with an accelerationof 50 ms,\nwhat is the mass of the ball?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah78.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "100 g"
      },
      {
        "id": "B",
        "teks": "200"
      },
      {
        "id": "C",
        "teks": "300 g"
      },
      {
        "id": "D",
        "teks": "400 g"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "F = ma\n20 = (m)(50)\nm = 0.4 kg = 400 g",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q12",
    "sumber": "Percubaan SBP 2023",
    "tahun": 2023,
    "noSoalanAsal": 12,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 79 (a) menunjukkan troli A dan troli B\nsebelum spring dilepaskan. Rajah 79 (b)\nmenunjukkan keadaan kedua-dua troli apabila\nspring dilepaskan.\nDiagram 79 (a) shows trolley A and trolley B\nbefore the spring is released. Diagram 79 (b)\nshows the condition of the trolleys after the spring\nis released. (SBP: 2023)\nHitung halaju troli B selepas spring dilepaskan.\nCalculate the velociy of trolley B after spring is\nreleased.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah79.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "0.5 m s"
      },
      {
        "id": "B",
        "teks": "1.0 ms"
      },
      {
        "id": "C",
        "teks": "2.0 m s!"
      },
      {
        "id": "D",
        "teks": "4.0 ms"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Prinsip keabadian momentum (Elastik):\nm1 u1 + m2 u2 = m1 v1 + m2 v2\n(2)(0) + (2)(0) = (2+2)(-0.5) + (2)(v2)\n.. v2 = 1 m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q13",
    "sumber": "Percubaan Terengganu 2023",
    "tahun": 2023,
    "noSoalanAsal": 13,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 80 menunjukkan graf halaju-masa bagi\nsuatu objk yang bergerak di sepanjang garis\nlurus.\nDiagram 80 shows the velociy-time graph of a\nmoving object along a straight line.\n(Terengganu: 2023)\nBerapakah sesaran objek itu dalam 6 saat\npertama?\nWhat is the displacement of the object during the\nfirst 6 seconds?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah80.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "5 m"
      },
      {
        "id": "B",
        "teks": "10 m"
      },
      {
        "id": "C",
        "teks": "15 m"
      },
      {
        "id": "D",
        "teks": "20 m"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jumlah sesaran 6 saat = Luas di bawah graf\ns = [1/2(2)(5) + 1/2(2)(5)] - 1/2(2)(5)\n.. s = 5 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q14",
    "sumber": "Percubaan Kedah 2022",
    "tahun": 2022,
    "noSoalanAsal": 14,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 81 menunjukkan satu objek berjisim 2 kg\ndilepaskan dari ketinggian, h. Objek itu jatuh\ndengan pecutan, a.\nDiagram 81 shows an object of mass 2 kg is\nreleased from a height, h. The object falls with\nacceleration, a. (Kedah: 2022)\nBerapakah pecutan jika objek itu digantikan\ndengan satu objek lain yang berjisim 4 kg?\nWhat is the acceleration if the object is replaced\nwith another object of mass 4 kg?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah81.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "a / 2"
      },
      {
        "id": "B",
        "teks": "a"
      },
      {
        "id": "C",
        "teks": "2a"
      },
      {
        "id": "D",
        "teks": "4a"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Objek yang jatuh bebas akan memecut. Pecutannya dikenali sebagai pecutan graviti. Nilai pecutan graviti tidak bergantung kepada bentuk dan jisim objek. Oleh itu, pecutan adalah sama = a.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q15",
    "sumber": "Percubaan Kelantan 2022",
    "tahun": 2022,
    "noSoalanAsal": 15,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.2 Menyelesaikan masalah melibatkan impuls dan daya impuls",
    "spKod": "2.7.2",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebiji bola sepak berjisim 0.5 kg ditendang\ndengan daya 30 N dalam masa 0.5 s. Berapakah\nimpuls yang dialami oleh bola?\nA football of mass 0.5 kg is kicked by a force of 30 N in 0.5 s. What is the impulse experienced by the ball?\n(Kelantan: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "5.0 N s"
      },
      {
        "id": "B",
        "teks": "10.0 N s"
      },
      {
        "id": "C",
        "teks": "15.0 N s"
      },
      {
        "id": "D",
        "teks": "60.0 N s"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Impuls = Ft = (30)(0.5) = 15 N s",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q16",
    "sumber": "Percubaan Melaka 2022",
    "tahun": 2022,
    "noSoalanAsal": 16,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebuah kereta bermula dari pegun di sebuah simpang dan mengambil masa 8.0 s untuk mencapai halaju 50 m s⁻¹. Hitungkan pecutan bagi kereta itu.\nA car starts from rest at a junction and takes 8.0 s to reach a velocity of 50 m s⁻¹. Calculate the acceleration of the car. (Melaka: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "0.16 m s⁻²"
      },
      {
        "id": "B",
        "teks": "6.25 m s⁻²"
      },
      {
        "id": "C",
        "teks": "50.00 m s⁻²"
      },
      {
        "id": "D",
        "teks": "400.00 m s⁻²"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "a = (v-u)/t = (50 - 0)/8\n.. a = 6.25 m s^-2",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q17",
    "sumber": "Percubaan Melaka 2022",
    "tahun": 2022,
    "noSoalanAsal": 17,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 82 menunjukkan graf halaju-masa bagi suatu objek.\nDiagram 82 shows a velocity-time graph for an object. (Melaka: 2022)\n\nAntara berikut yang manakah graf pecutan-masa untuk mewakili pergerakan objek tersebut?\nWhich of the following acceleration-time graph represents the motion of the object?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah82.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q17_opt_a.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q17_opt_b.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q17_opt_c.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q17_opt_d.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Bagi graf halaju-masa (v-t), kecerunan graf mewakili pecutan objek (a = dv/dt), manakala luas di bawah graf mewakili jumlah sesaran / jarak yang dilalui oleh objek. Jawapan: D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q18",
    "sumber": "Percubaan MRSM 2022",
    "tahun": 2022,
    "noSoalanAsal": 18,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 83 menunjukkan lori tangki minyak\nberjisim 7500 kg melangar sebuah kereta berjisim\n1000 kg. Sebelum pelanggaran, lori dan kereta\nbergerak pada arah yang sama dengan kelajuan\nmasing-masing 30 ms' dan 25 ms!\nDiagram 83 shows an oil tanker of mass 7500 kg\ncollides with a car of nass 1000 kg. The lory and\ncar move in the same direction with velocity of 30\nms and 25 ms respectively before collision.\n(MRSM: 2022)\nSclepas perlanggaran, kedua-dua kenderaan\nmelekatbersama-sama.Berapakah halaju akhir, v\nkedua-dua kenderaan?\nAfter collision, both vehicles stick together. What\nis the final velocity, v of both vehicles?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah83.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "2.94 ms!"
      },
      {
        "id": "B",
        "teks": "29.41l ms!"
      },
      {
        "id": "C",
        "teks": "25.59 ms-!"
      },
      {
        "id": "D",
        "teks": "33.33 ms-!"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Prinsip keabadian momentum (Bukan elastik):\nm1 u1 + m2 u2 = (m1 + m2)(v)\n(7500)(30) + (1000)(25) = (7500 + 1000)(v)\n.. v = 29.4118 m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q19",
    "sumber": "Percubaan Negeri Sembilan 2022",
    "tahun": 2022,
    "noSoalanAsal": 19,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 84 menunjukkan dua bola, A dan B,\nsetiapnya berjisim 1.5 kg, bergerak ke arah satu\nsama lain dengan halaju 3 ms' dan 2 ms\nmasing-masing.\nDiagram 84 shows two balls, A andB, each with\nmass of 1.5 kg, mOving towards each other with\na velocity of'3 ms dan 2 ms respectively.\n(Negeri Sembilan: 2022)\nPernyataan manakah yang benar mengenai bola-\nbola itu?\nWhich statement is true about the balls?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah84.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Momentum A sebelum perlanggaran ialah +3 kg m: Momentum A before / the collision is +3 kg m s"
      },
      {
        "id": "B",
        "teks": "Momentum B sebelum perlanggaran ialah +2 kg m s Momentum B before / the collision is +2 kg m"
      },
      {
        "id": "C",
        "teks": "Jumlah momentum sebelum perlanggaran ialah +1.5 kg m s' / Total momentum before collision is +1.5 kg ms!"
      },
      {
        "id": "D",
        "teks": "Jumlah momentum selepas perlanggaran ialah +7.5 kg m s' / Total momentum after collision is +7.5 kg m"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Prinsip keabadian momentum.\nMomentum A sebelum perlanggaran = (1.5)(3) = 4.5 kg m s^-1\nMomentum B sebelum perlanggaran = (1.5)(-2) = -3 kg m s^-1\nJumlah momentum sebelum perlanggaran = (4.5 - 3) = 1.5 kg m s^-1\nJumlah momentum selepas perlanggaran = 1.5 kg m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q20",
    "sumber": "Percubaan Negeri Sembilan 2022",
    "tahun": 2022,
    "noSoalanAsal": 20,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.2 Menyelesaikan masalah melibatkan rumus F = ma",
    "spKod": "2.6.2",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 85 menunjukkan sebuah bakul buah-\nbuahan berjisim 3 kg yang pegun, ditarik dengan\ndaya 20 N di atas satu satah condong yang\nmempunyai daya geseran 10 N.\nDiagram 85 shows a fruit basket with a mass of3\nkg at rest, is pulled by 20 N force on an inclined\nplane that had a frictional force of 10N.\n(Negeri Sembilan: 2022)\nApakah kesan ke atas gerakan kotak itu?\nWhat is the effect on the motion of the box?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah85.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Memperlahankan pergerakan kotak / Slow down the box"
      },
      {
        "id": "B",
        "teks": "Mempercepatkan pergerakan kotak / Speed up the box"
      },
      {
        "id": "C",
        "teks": "Bergerak dengan halaju seragam / Move with constant velocity"
      },
      {
        "id": "D",
        "teks": "Tiada apa yang berlaku / Nothing happens"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q21",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 21,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebuah lori berjisim kira-kira 2 000 kg bergerak dengan halaju 22 m s⁻¹. Berapakah momentum lori tersebut?\nA lorry of mass about 2 000 kg moves with a velocity of 22 m s⁻¹. What is the momentum of the lorry? (Pahang: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "440 N s"
      },
      {
        "id": "B",
        "teks": "4 400 N s"
      },
      {
        "id": "C",
        "teks": "44 000 N s"
      },
      {
        "id": "D",
        "teks": "440 000 N s"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "p = mv = 2000 x 22 = 44 000 N s = kg m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q22",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 22,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.2 Menyelesaikan masalah melibatkan impuls dan daya impuls",
    "spKod": "2.7.2",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 86 menunjukkan sebuah bola berjisim 0.8\nkg dijatuhkan dari sebuah rumah pangsa. Pada\nmasa sebelum menyentuh tanah, halaju bola ialah\n12 ms'. Bola itu berhenti 2 saat selepas\nmenyentuh tanah.\nDiagram 86 shows a ball with a mass of 0.8 kg\nbeing dropped fron a flat house. At the moment\nbefore touching the ground, the velocity of the\nball is 12 ms. The box stops 2 seconds after\ntouching the ground. (Pahang: 2022)\nBerapakah magnitud daya impuls yang bertindak\nke atas bola itu?\nWhat is the magnitude of the impulsive force\nacted on the ball?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah86.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "4.0 N"
      },
      {
        "id": "B",
        "teks": "4.8 N"
      },
      {
        "id": "C",
        "teks": "9.4 N"
      },
      {
        "id": "D",
        "teks": "9.6 N"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "F = ma = m((v-u)/t) = 0.8((12 - 0)/2)\n.. F = 4.8 N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q23",
    "sumber": "Percubaan Selangor: Set 1 2022",
    "tahun": 2022,
    "noSoalanAsal": 23,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 87 menunjukkan sebuah kereta mainan bergerak di sepanjang laluan lurus.\nDiagram 87 shows a toy car moving along a straight path. (Selangor: Set 1: 2022)\n\nHalaju pergerakan kereta mainan menurun dari 3.0 m s⁻¹ sehingga 1.0 m s⁻¹ apabila ia bergerak sejauh 2.0 m. Berapakah nyahpecutan kereta mainan itu, dalam m s⁻²?\nThe velocity of the toy car decreases from 3.0 m s⁻¹ to 1.0 m s⁻¹ as it moves through a distance of 2.0 m. What is the toy car's deceleration, in m s⁻²?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah87.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "-2.0"
      },
      {
        "id": "B",
        "teks": "-1.0"
      },
      {
        "id": "C",
        "teks": "1.0"
      },
      {
        "id": "D",
        "teks": "2.0"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "v^2 = u^2 + 2as\n3^2 = 1^2 + 2(a)(2)\n.. a = 2.0 m s^-2",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q24",
    "sumber": "Percubaan Sclangor: Set 1 2022",
    "tahun": 2022,
    "noSoalanAsal": 24,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Sederhana",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebuah troli X berjisim 6 kg dan berhalaju 3 m s⁻¹ berlanggar secara elastik dengan satu lagi troli Y berjisim 3 kg dengan halaju 2 m s⁻¹. Jika troli X berhenti sejurus selepas perlanggaran, hitungkan halaju akhir bagi troli Y.\nA trolley X of mass 6 kg and a velocity of 3 m s⁻¹ collides elastically with another trolley Y of mass 3 kg with a velocity of 2 m s⁻¹. If trolley X stops immediately after the collision, calculate the final velocity of trolley Y. (Selangor: Set 1: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "4 m s⁻¹"
      },
      {
        "id": "B",
        "teks": "5 m s⁻¹"
      },
      {
        "id": "C",
        "teks": "8 m s⁻¹"
      },
      {
        "id": "D",
        "teks": "9 m s⁻¹"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Prinsip keabadian momentum (Elastik):\nm1 u1 + m2 u2 = m1 v1 + m2 v2\n(6)(3) + (3)(2) = (6)(0) + (3)(v2)\n.. v2 = 8 m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q25",
    "sumber": "Percubaan Selangor: Set 2 2022",
    "tahun": 2022,
    "noSoalanAsal": 25,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Irfan akan lalu di hadapan pasar raya yang\nterletak 60 m dari rumahnya dalam perjalanan ke\ntaman pemainan yang terletak 80 m dari pasar\nraya itu. Rajah 88 menunjukkan laluan yang\ndiambil oleh Irfan.\nIrfan will pass in front of the supermarket which\nis located 60 m from his house on his way to the\nplayground, which is located 80 m from the\nsupermarket. Diagram 88 shows the route taken\nby lfan. (Selangor: Set 2: 2022)\nBerapakah sesaran bagi pergerakan Irfan?\nWhat is the displacement oflrfan's motion?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah88.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "10 km"
      },
      {
        "id": "B",
        "teks": "140 m"
      },
      {
        "id": "C",
        "teks": "100 m"
      },
      {
        "id": "D",
        "teks": "10 m"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "s = sqrt(60^2 + 80^2)\n.. s = 100 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q26",
    "sumber": "Percubaan Selangor: Set 2 2022",
    "tahun": 2022,
    "noSoalanAsal": 26,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Dua buah troli yang sedang bergerak searah mengalami perlanggaran. Troli P berjisim 4 kg dengan halaju 4 ms⁻¹ berlanggar secara elastik dengan troli Q berjisim 2 kg bergerak dengan halaju 3 ms⁻¹. Jika troli P berhenti sejurus selepas perlanggaran, hitung halaju akhir bagi troli Q.\nTwo trolleys moving in the same direction are involved in a collision. Trolley P of mass 4 kg with a velocity 4 ms⁻¹ collides elastically with trolley Q of mass 2 kg moving with a velocity 3 ms⁻¹. If trolley P stops immediately after the collision, calculate the final velocity of trolley Q.\n(Selangor: Set 2: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "2 ms!"
      },
      {
        "id": "B",
        "teks": "7mns!"
      },
      {
        "id": "C",
        "teks": "10 ms!"
      },
      {
        "id": "D",
        "teks": "1l ms"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Prinsip keabadian momentum (Elastik):\n(4)(4) + (2)(3) = (6)(0) + (2)(v2)\n.. v2 = 11 m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q27",
    "sumber": "Percubaan SMKA 2022",
    "tahun": 2022,
    "noSoalanAsal": 27,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.2 Menyelesaikan masalah melibatkan rumus F = ma",
    "spKod": "2.6.2",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 89 menunjukkan sebuah kereta berjisim 1\n200 kg bergerak menghampiri lampu isyarat pada\nkelajuan 20 ms. Apabila brek ditekan kereta itu\nberhenti dalam masa 5 s.\nDiagram 89 shows a car of mass1 200 kg moving\ntowards a traffic light at a speedof 20 ms\". When\nthe brake is pressed the car stops within 5 s.\n(SMKA: 2022)\nBerapakah magnitud daya yang dikenakan pada\nbrek kereta itu?\nWhat is the magnitude of force exerted on the\ncar's brakes?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah89.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "60 N"
      },
      {
        "id": "B",
        "teks": "240 N"
      },
      {
        "id": "C",
        "teks": "300N"
      },
      {
        "id": "D",
        "teks": "4800 N"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "F = ma = m((v-u)/t) = 1200((20 - 0)/5)\n.. F = 4800 N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q28",
    "sumber": "Percubaan Kedah 2021",
    "tahun": 2021,
    "noSoalanAsal": 28,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 90 menunjukkan Richard berdiri pada titik\nO. Dia berjalan ke arah A, kemudian bergerak ke\narah B dan berhenti di B.\nDiagram 90 shows Richard stands at O. He walks\ntowards A, then moves towards B and stops at B.\n(Kedah: 2021)\nApakah sesaran Richard?\nWhat is the displacement of Richard?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah90.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "9 m ke barat / 9 m towards west"
      },
      {
        "id": "B",
        "teks": "7 m ke timur / 7 m towards east"
      },
      {
        "id": "C",
        "teks": "5 m ke timur / 5 m towards east"
      },
      {
        "id": "D",
        "teks": "2 m ke barat / 2 m towards west"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "O -> A -> B\nTitik awal = O, Titik akhir = B\nSesaran adalah jarak terpendek dari O ke B = 7 m. Tandaan (+) menunjukkan arah ke kanan (timur).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q29",
    "sumber": "Percubaan Kedah 2021",
    "tahun": 2021,
    "noSoalanAsal": 29,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Berdasarkan graf halaju-masa di bawah (Rajah 91), berapakah sesaran kereta dalam masa 14 s?\nBased on the velocity-time graph below (Diagram 91), what is the displacement of the car in 14 s? (Kedah: 2021)",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah91.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "110 m"
      },
      {
        "id": "B",
        "teks": "100 m"
      },
      {
        "id": "C",
        "teks": "80 m"
      },
      {
        "id": "D",
        "teks": "10 m"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jumlah sesaran 14 saat = Luas di bawah graf\ns = [1/2(4)(10) + (6 x 10) + 1/2(2)(10)] - [1/2(2)(10)]\n.. s = 80 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q30",
    "sumber": "Percubaan Kedah 2021",
    "tahun": 2021,
    "noSoalanAsal": 30,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.2 Menyelesaikan masalah melibatkan rumus F = ma",
    "spKod": "2.6.2",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Daya F bertindak ke atas jasad berjisim 3 kg di\natas sebuah permukaan licin menghasilkan\npecutan 4.0 ms\". Berapakah pecutan satu jasad\nberjisim kg sekiranya daya 2F bertindak ke\natasnya?\nForce F acts on an object of mass 3 kg on a\nsmooth floor produces an acceleration of4.0 ms\n2, What is the acceleration of an object of mass 5\nkg ifforce 2F acts on i? (Kedah: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "2.0 ms?"
      },
      {
        "id": "B",
        "teks": "2.4 ms-"
      },
      {
        "id": "C",
        "teks": "4.0 ms?"
      },
      {
        "id": "D",
        "teks": "4.8 ms"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Daya F bertindak ke atas jisim 3 kg:\nF = ma = (3)(4) = 12 N\nJika daya 2F bertindak ke atas jisim 5 kg:\n2F = ma\n2(12) = (5)(a)\n.. a = 4.8 m s^-2",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q31",
    "sumber": "Percubaan Kedah 2021",
    "tahun": 2021,
    "noSoalanAsal": 31,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.2 Menyelesaikan masalah melibatkan impuls dan daya impuls",
    "spKod": "2.7.2",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebiji bola yang berjisim 1.2 kg bergerak dengan halaju 4 m s⁻¹ dilanggar oleh sebuah kereta yang bergerak pada arah yang sama dengan bola tersebut. Halaju bola tersebut meningkat kepada 10 m s⁻¹ dalam masa 0.5 s. Berapakah impuls pada bola tersebut?\nA ball of 1.2 kg with velocity of 4.0 m s⁻¹ is hit by a car moving in the same direction with the ball. The velocity of the ball increases to 10 m s⁻¹ in 0.5 s. What is the impulse on the ball? (Kedah: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "1.2 N s"
      },
      {
        "id": "B",
        "teks": "3.6 N s"
      },
      {
        "id": "C",
        "teks": "7.2 N s"
      },
      {
        "id": "D",
        "teks": "14.4 N s"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Impuls = Ft = m(v - u) = (1.2)(10 - 4)\n.. Ft = 7.2 N s",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q32",
    "sumber": "Percubaan Kelantan 2021",
    "tahun": 2021,
    "noSoalanAsal": 32,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 92 menunjukkan sepucuk senapang. Sebutir peluru ditembak keluar dengan halaju 150 m s⁻¹.\nDiagram 92 shows a rifle. A bullet is fired with a velocity of 150 m s⁻¹. (Kelantan: 2021)\n\nBerapakah halaju sentakan senapang?\nWhat is the recoil velocity of the rifle?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah92.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "0.15 ms"
      },
      {
        "id": "B",
        "teks": "1.5 ms!"
      },
      {
        "id": "C",
        "teks": "15 ms!"
      },
      {
        "id": "D",
        "teks": "150 ms!"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Prinsip keabadian momentum (Letupan):\n0 = (2)(v1) + (0.02)(150)\n.. v1 = -1.5 m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q33",
    "sumber": "Percubaan Sarawak 2021",
    "tahun": 2021,
    "noSoalanAsal": 33,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 93 menunjukkan sebuah kapal terbang\nsedang berlepas.\nDiagram 93 shows an aeroplane is take off.\n(Sarawak: 2021)\nBerapakah panjang landasan bagi sebuah kapal\nterbang untuk berlepas dengan halaju 75 m s!\njika ia boleh memecut 2.0 m s*?\nHow long must a runway be for an aeroplane to\nreachtakeoffvelocity75 ms' if it canaccelerate\n2.0 m s29",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah93.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "1000 m"
      },
      {
        "id": "B",
        "teks": "1200 m"
      },
      {
        "id": "C",
        "teks": "1406 m"
      },
      {
        "id": "D",
        "teks": "2000 m"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "v^2 = u^2 + 2as\n75^2 = 0^2 + 2(2)(s)\n.. s = 1406.25 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q34",
    "sumber": "Percubaan Sabah 2021",
    "tahun": 2021,
    "noSoalanAsal": 34,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 94 menunjukkan graf halaju-masa bagi\nsuatu objek.\nDiagram 94 shows a velocity-time graph for an\nobject. (Sabah: 2021)\nHitung sesaran bagi objek tersebut.\nCalculate the displacement of the object.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah94.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "15 m"
      },
      {
        "id": "B",
        "teks": "25 m"
      },
      {
        "id": "C",
        "teks": "35 m"
      },
      {
        "id": "D",
        "teks": "40 m"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jumlah sesaran = Luas di bawah graf\ns = 1/2(2)(5) + (6 x 5) + 1/2(2)(5)\n.. s = 40 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q35",
    "sumber": "Percubaan Selangor: Set 2 2021",
    "tahun": 2021,
    "noSoalanAsal": 35,
    "sk": "SK 2.6 Daya",
    "sp": "SP 2.6.2 Menyelesaikan masalah melibatkan rumus F = ma",
    "spKod": "2.6.2",
    "rujukanDskp": "DSKP Fizik T4 ms 38-39",
    "rujukanBukuTeks": "Buku Teks T4 ms 66-72",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 14-16",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.6 Daya",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Antara sistem yang berikut, manakah akan\nmemberi pecutan yang terbesar ke atas objek\nyang berjisim m?\nWhich of the following systems will give the\ngreatest acceleration on an object of mass m?\n(Selangor: Set 2: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "50 N ← [m] → 60 N"
      },
      {
        "id": "B",
        "teks": "10 N ← [m]"
      },
      {
        "id": "C",
        "teks": "10 N ← [m] → 15 N"
      },
      {
        "id": "D",
        "teks": "15 N ← [m] ← 30 N"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Daya paduan:\nF = (60 - 50) = 10 N (arah <-)\nF = (10 + 15) = 25 N (arah ->)\nF = (15 - 10) = 5 N (arah <-)\nF = (30 + 15) = 45 N (arah <-)\nOleh itu pilihan D menghasilkan pecutan terbesar kerana daya paduan F adalah paling besar.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q36",
    "sumber": "Percubaan MRSM 2021",
    "tahun": 2021,
    "noSoalanAsal": 36,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 95 menunjukkan graf sesaran-masa bagi\nsatu objek yang bergerak ke arah satu sasaran dan\nkembali semula ke kedudukan asalnya.\nDiagram 95 shows a displacement-time graph on\nan object that moves towards a target and returns\nto its original position. (MRSM: 2021)\nBerapakah jumlah sesaran objek tersebut?\nWhat is the total displacement of the object?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah95.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "0 m"
      },
      {
        "id": "B",
        "teks": "100 m"
      },
      {
        "id": "C",
        "teks": "50 m"
      },
      {
        "id": "D",
        "teks": "400 m"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "0-4 min: Sesaran bertambah dengan kadar seragam, s = 50 m.\n4-8 min: Objek pegun, s = 50 m.\n8-12 min: Objek kembali ke kedudukan asal dengan halaju seragam pada arah bertentangan.\n.. Jumlah sesaran s = 0 m.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q37",
    "sumber": "Percubaan MRSM 2021",
    "tahun": 2021,
    "noSoalanAsal": 37,
    "sk": "SK 2.7 Impuls dan Daya Impuls",
    "sp": "SP 2.7.2 Menyelesaikan masalah melibatkan impuls dan daya impuls",
    "spKod": "2.7.2",
    "rujukanDskp": "DSKP Fizik T4 ms 40-41",
    "rujukanBukuTeks": "Buku Teks T4 ms 73-78",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 17-19",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.7 Impuls dan Daya Impuls",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 96 menunjukkan sebuah kotak berjisim 55\nkg dijatuhkan dari sebuah helikopter. Sejurus\nsebelum menyentuh tanah, halaju kotak itu ialah\n300 ms dan berhenti selepas 2 saat menyentuh\ntanah.\nDiagram 96 shows a box with mass of55 kg being\ndropped from a helicopter: At the moment before\ntouching the ground, the velocity of the box is 300\nms and it stops after 2 seconds touching the\nground. (MRSM: 2021)\nBerapakah magnitud daya impuls yang bertindak\nke atas kotak itu?\nWhat is the magnitude of the impulsive force\nacted on the bor?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah96.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "1 080 N"
      },
      {
        "id": "B",
        "teks": "8250 N"
      },
      {
        "id": "C",
        "teks": "16 500 N"
      },
      {
        "id": "D",
        "teks": "33 000 N"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "F = ma = m((v-u)/t) = 55((300 - 0)/2)\n.. F = 8250 N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q38",
    "sumber": "Percubaan Negeri Sembilan 2021",
    "tahun": 2021,
    "noSoalanAsal": 38,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 97 menunjukkan graf halaju-masa bagi pergerakan suatu objek dalam garis lurus.\nDiagram 97 shows a velocity-time graph for the motion of an object in a straight line. (Negeri Sembilan: 2021)\nHitungkan jumlah sesaran dan jarak yang dilalui oleh objek tersebut.\nCalculate the total displacement and distance travelled by the object.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah97.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "90 110"
      },
      {
        "id": "B",
        "teks": "00 110"
      },
      {
        "id": "C",
        "teks": "110 90"
      },
      {
        "id": "D",
        "teks": "90 100"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jumlah jarak = Luas di bawah graf\ns = [1/2(4)(10) + (6 x 10) + 1/2(4)(10)] + 1/2(2)(5) + 1/2(2)(5) = 110 m\nJumlah sesaran = [1/2(4)(10) + (6 x 10) + 1/2(4)(10)] - [1/2(2)(5) + 1/2(2)(5)] = 90 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q39",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 39,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Seorang pemain bola tampar melontarkan sebiji bola ke atas secara menegak dengan halaju awal 10 m s⁻¹, hitung masa diambil untuk mencapai tinggi maksimum. (g = 9.81 m s⁻² dan rintangan udara diabaikan)\nA volleyball player throwing a ball vertically with initial velocity 10 m s⁻¹, calculate time taken to achieve maximum height (g = 9.81 m s⁻² and air resistance is ignored) (Perlis: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "1.02 s"
      },
      {
        "id": "B",
        "teks": "0.98 s"
      },
      {
        "id": "C",
        "teks": "1.98 s"
      },
      {
        "id": "D",
        "teks": "4.96 s"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "v = u + at\n0 = 10 + (-9.81)(t)\n.. t = 1.0194 s",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q40",
    "sumber": "SPM 2021",
    "tahun": 2021,
    "noSoalanAsal": 40,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Mei Mei mengayuh basikal dari rumahnya ke\nsekolah. Dalam perjalanan balik dari sekolah, dia\nsinggah di kedai runcit di belakang rumahnya.\nRajah 98 menunjukkan graf sesaran-masa\nperjalanannya.\nMei Mei cycles from her house to school. On her\nway back from school, she stops at a grocery store\nbehind her house. Diagram 98 shows a\ndisplacement-time graph of her journey.\n(SPM: 2021)\nGraf halaju-masa yang manakah menerangkan\npergerakan Mei Mei?\nWhich velocity-time graph describes the\nmovement of Mei Mei?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah98_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q40_opt_a_v3.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf A\">"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q40_opt_b_v3.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf B\">"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q40_opt_c_v3.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf C\">"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_k3_q40_opt_d_v3.webp\" style=\"max-height:120px; border-radius:4px;\" alt=\"Graf D\">"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Bagi graf sesaran-masa (s-t), kecerunan graf mewakili halaju (v = ds/dt). Garis lurus condong mewakili halaju seragam, garis mendatar mewakili objek pegun (halaju sifar), dan garis lengkung mewakili halaju tidak seragam (memecut/menyahpecut). Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q41",
    "sumber": "SPM 2021",
    "tahun": 2021,
    "noSoalanAsal": 41,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 99 menunjukkan sebiji buah durian gugur\ndaripada dahan yang mempunyai ketinggian 5 m.\nDiagram 99 shows a durian falls from a branch\nwith a height of5 m. (SPM: 2021)\nApakah halaju buah durian sejurus sebelum ia\nmencecah tanah?\nWhat is the velocity of the durian just before it\nhits the ground?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah99.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "9.90ms!"
      },
      {
        "id": "B",
        "teks": "10.15 ms!"
      },
      {
        "id": "C",
        "teks": "11.10 ms"
      },
      {
        "id": "D",
        "teks": "13.94 ms!"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "v^2 = u^2 + 2as, simbol h = s\nv^2 = 0^2 + 2(9.81)(5)\n.. v = 9.9045 m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K3_Q42",
    "sumber": "SPM 2022",
    "tahun": 2022,
    "noSoalanAsal": 42,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Ahmad mengambil masa 1 jam untuk berbasikal melalui P, Q dan R seperti yang ditunjukkan dalam Rajah 100.\nAhmad takes 1 hour to cycle through P, Q and R as shown in Diagram 100. (SPM: 2022)\n\nBerapakah halaju Ahmad berbasikal dari P ke R?\nWhat is the velocity of Ahmad cycling from P to R?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah100.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "1.67 ms"
      },
      {
        "id": "B",
        "teks": "2.22 ms"
      },
      {
        "id": "C",
        "teks": "2.78 ms"
      },
      {
        "id": "D",
        "teks": "3.89 ms!"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Halaju = sesaran / masa\nSesaran = sqrt(64 km^2 + 36 km^2) = 10 km = 10 000 m\nv = 10 000 / (1 x 60 x 60)\n.. v = 2.7778 m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K3_Q43",
    "sumber": "SPM 2022",
    "tahun": 2022,
    "noSoalanAsal": 43,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 101 menunjukkan sebiji bola berjisim 0.02\nkg menghentam dinding dan melantun dalam\nmasa 3 saat.\nDiagram 101 shows a ball with a mass of0.02 kg\nhit the wall and bounces in 3 seconds.\n(SPM: 2022)\nBerapakalh perubahan momentum bola itu?\nWhat is the change of themomentunmof the ball?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah101.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "-0.1 kgms!"
      },
      {
        "id": "B",
        "teks": "-0.2 kgms"
      },
      {
        "id": "C",
        "teks": "0.1 kgms"
      },
      {
        "id": "D",
        "teks": "0.3 kgms!"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Perubahan momentum = mv - mu\n= (0.02)(5) - [(0.02)(-10)] = 0.3 kg m s^-1",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K3_Q44",
    "sumber": "SPM 2022",
    "tahun": 2022,
    "noSoalanAsal": 44,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebuah kapal terbang yang pegun di landasan bersedia untuk berlepas. Kapal terbang tersebut berlepas apabila halajunya mencapai 100 m s⁻¹ pada pecutan 4 m s⁻². Berapakah sesaran kapal terbang itu sebelum meninggalkan landasan?\nA stationary aeroplane on a runway is ready to take off. The aeroplane takes off when its velocity reaches 100 m s⁻¹ at an acceleration of 4 m s⁻². What is the displacement of the aeroplane before it takes off? (SPM: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "400 m"
      },
      {
        "id": "B",
        "teks": "1 250 m"
      },
      {
        "id": "C",
        "teks": "2 500 m"
      },
      {
        "id": "D",
        "teks": "5 000 m"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "v^2 = u^2 + 2as\n100^2 = 0^2 + 2(4)(s)\n.. s = 1250 m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K3_Q45",
    "sumber": "SPM 2023",
    "tahun": 2023,
    "noSoalanAsal": 45,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.3 Menyelesaikan masalah gerakan linear dengan menggunakan persamaan gerakan linear",
    "spKod": "2.1.3",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 102 menunjukkan seorang lelaki sedang\nberlari mengelilingi suatu laluan berbentuk\nbulatan yang mempunyai perimeter 400 m dan\nberjejari 63.6 m.\nDiagram 102 shows a man running around a\ncircular path with perimeter of 400 m and a\nradius of63.6 m. (SPM: 2023)\nSelepas 10 minit, dia berada pada separuh bulatan\nlaluan tersebut. Berapakah sesaran lelaki tersebut\npada masa itu?\nAfter 10 minutes, he reaches half of the circular\npath. What is the man displacement at that time?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah102.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "0m"
      },
      {
        "id": "B",
        "teks": "127.2 m"
      },
      {
        "id": "C",
        "teks": "200.0 m"
      },
      {
        "id": "D",
        "teks": "400.0 m"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Titik awal = Mula larian. Titik akhir = kedudukan 10 minit.\nSesaran = jarak terpendek dari mula larian ke titik akhir = 63.6 + 63.6 = 127.2 m.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K4_Q01",
    "sumber": "Percubaan Kelantan 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 103 menunjukkan sehelai bulu ayam dan sebiji bola loyang dijatuhkan serentak dalam udara.\nDiagram 103 shows a chicken feather and a brass ball dropped simultaneously in the air. (Kelantan: 2023)\n\nAntara berikut yang manakah menerangkan pergerakan bulu ayam dan bola loyang?\nWhich of the following describes the movement of the chicken feather and brass ball?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah103.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pecutan bulu ayam = pecutan bola loyang / Acceleration of chicken feather = acceleration of brass ball"
      },
      {
        "id": "B",
        "teks": "Pecutan bulu ayam > pecutan bola loyang / Acceleration of chicken feather > acceleration of brass ball"
      },
      {
        "id": "C",
        "teks": "Pecutan bola loyang > pecutan bulu ayam / Acceleration of brass ball > acceleration of chicken feather"
      },
      {
        "id": "D",
        "teks": "Kedua-dua objek mempunyai pecutan sifar / Both objects have zero acceleration"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.3 Gerakan Jatuh Bebas, konsep yang diaplikasikan menghasilkan jawapan C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B2_K4_Q02",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 104 menunjukkan dua biji bola bergerak\ndengan arah yang sama.\nDiagramn 104 shows two balls move in thesamne\ndirection. (Pahang: 2023)\nPenyataan manakah yang benar menerangkan\nsituasi di atas?\nWhich statement is correct to describes the\nsituation above?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah104.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jumlah momentum sebelum perlanggaran adalah sama dengan jumlah momentum selepas perlanggaran jika tiada daya luar yang bertindak ke atas sistem tersebut Total momentum before collision is same as / the total momentum after collision if there is no an external force acting on that system"
      },
      {
        "id": "B",
        "teks": "Jumlah momentum sebelum perlanggaran adalah sama dengan jumlah momentum selepas perlanggaran jika terdapat daya luar yang bertindak ke atas sistem tersebut Total momentum before collision is same as / the total momentum after collision if there is an external force acting on that system"
      },
      {
        "id": "C",
        "teks": "Jumlah momentum sebelum perlanggaran adalah lebih besar daripada jumlah momentum selepas perlanggaran jika tiada daya luar yang bertindak ke atas sistem tersebut Total momentum before collision is greater than / the total momentum after collision if there is no an external force acting on that system"
      },
      {
        "id": "D",
        "teks": "Jumlah momentum sebelum perlanggaran adalah lebih kecil daripada jumlah momentum selepas perlanggaran jika tiada daya luar yang bertindak ke atas sistem tersebut Total momentum before collision is smaller than / the total momentum after collision if there is no an external force acting on that System"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Momentum ditakrifkan sebagai hasil darab jisim dengan halaju (p = mv). Ia merupakan kuantiti vektor yang mempunyai magnitud dan arah. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K4_Q03",
    "sumber": "Percubaan Pulau Pinang 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Sebiji bola ping pong dan sebiji bola logam yang sama saiz dilepaskan daripada ketinggian yang sama dalam vakum. Perbandingan yang manakah tentang momentum kedua-dua bola sejurus sebelum menghentam pada lantai adalah betul?\nA ping pong ball and a metal ball of the same size are released from the same height in vacuum. Which comparison about the momentum of the two balls just before hitting the floor is true? (Pulau Pinang: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Momentum bola ping pong > Momentum bola logam / Momentum of ping pong ball > Momentum of metal ball"
      },
      {
        "id": "B",
        "teks": "Momentum bola ping pong < Momentum bola logam / Momentum of ping pong ball < Momentum of metal ball"
      },
      {
        "id": "C",
        "teks": "Momentum bola ping pong = Momentum bola logam / Momentum of ping pong ball = Momentum of metal ball"
      },
      {
        "id": "D",
        "teks": "Kedua-dua bola mempunyai momentum sifar / Both balls have zero momentum"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Dalam keadaan jatuh bebas (seperti di dalam tiub vakum di mana rintangan udara diabaikan), semua objek mengalami pecutan graviti bumi yang sama (g ≈ 9.81 m s⁻²) tanpa dipengaruhi oleh jisim atau bentuk objek. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K4_Q04",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.1 Mentafsir jenis gerakan dari graf sesaran-masa, halaju-masa dan pecutan-masa",
    "spKod": "2.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 105 menunjukkan graf halaju, v melawan\nmasa, t sebuah lori mainan.\nDiagramn 105 shows a velocity, v against time, t\ngraphof a toylorry. (MRSM: 2023)\nAntara berikut, perbandingan manakah yang\nbetul?\nWhich of the following conparison is correcr?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah105.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pecutan OA lebih besar dari BC / Acceleration OA is higher than BC"
      },
      {
        "id": "B",
        "teks": "Pecutan OA lebih kecil dari BC / Acceleration OA is lower than BC"
      },
      {
        "id": "C",
        "teks": "Pecutan AB lebih besar dari BC / Acceleration AB is higher than BC"
      },
      {
        "id": "D",
        "teks": "Pecutan OA sama dengan BC / Acceleration OA same with BC"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K4_Q05",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 5,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 106 menunjukkan graf halaju, v melawan\nmasa, t untuk suatu pergerakan sebuah kereta.\nDiagram 106 shows the graph of velocity, v\nagainst time, tfor a movement of a car.\n(Pahang: 2022)\nPernyataan manakah mengenai graf adalah\nsalah?\nWhich statement about the graph is wrong?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah106.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jika t= 0s, v= 10ms / If t =0s, v= 10ms!"
      },
      {
        "id": "B",
        "teks": "Kecerunan graf ialah 0.5ms / The gradient of the graph is 0.5ms"
      },
      {
        "id": "C",
        "teks": "v bertambah secara linear dengan t v / is increase linearly to t"
      },
      {
        "id": "D",
        "teks": "Persamaan graf ialah v = 0.5t + 10 / The equation of the graph is v = 0.5t + 10"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan tafsiran graf gerakan linear, bentuk garis dan kecerunan graf mentakrifkan jenis gerakan objek secara tepat. Jawapan: B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K4_Q06",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 6,
    "sk": "SK 2.3 Gerakan Jatuh Bebas",
    "sp": "SP 2.3.1 Menyiasat dan menerangkan gerakan jatuh bebas dan pecutan graviti",
    "spKod": "2.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 32-33",
    "rujukanBukuTeks": "Buku Teks T4 ms 46-51",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 7-8",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.3 Gerakan Jatuh Bebas",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 107 menunjukkan dua biji durian yang jatuh serentak tetapi berbeza saiz. Mengapakah durian besar itu sampai ke tanah dahulu?\nDiagram 107 shows two durians that fall at the same time but different in size. Why does the big durian reach the ground first? (Pahang: 2022)",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah107.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya graviti yang bertindak ke atas durian kecil adalah lebih besar daripada daya graviti yang bertindak ke atas durian besar / The force of gravity acted on the small durian is greater than the force of gravity acted on the big durian"
      },
      {
        "id": "B",
        "teks": "Daya graviti yang bertindak ke atas durian besar adalah lebih besar daripada daya graviti yang bertindak ke atas durian kecil / The force of gravity acted on the big durian is greater than the force of gravity acted on the small durian"
      },
      {
        "id": "C",
        "teks": "Daya graviti yang bertindak ke atas durian kecil dapat mengatasi daya rintangan udara lebih daripada daya graviti yang bertindak ke atas durian besar / The force of gravity acted on the small durian is better to overcome the air resistance compared to the force of gravity acted on the big durian"
      },
      {
        "id": "D",
        "teks": "Daya graviti yang bertindak ke atas durian besar dapat mengatasi daya rintangan udara lebih daripada daya graviti yang bertindak ke atas durian kecil / The force of gravity acted on the big durian is better to overcome the air resistance compared to the force of gravity acted on the small durian"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Hukum Gerakan Newton Kedua menyatakan bahawa daya paduan yang bertindak ke atas objek adalah berkadar terus dengan kadar perubahan momentum: F = ma. Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K4_Q07",
    "sumber": "Percubaan Selangor: Set 1 2022",
    "tahun": 2022,
    "noSoalanAsal": 7,
    "sk": "SK 2.2 Graf Gerakan Linear",
    "sp": "SP 2.2.4 Menyelesaikan masalah melibatkan graf gerakan linear",
    "spKod": "2.2.4",
    "rujukanDskp": "DSKP Fizik T4 ms 30-31",
    "rujukanBukuTeks": "Buku Teks T4 ms 37-45",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4-6",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.2 Graf Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 108 menunjukkan graf halaju-masa bagi\ntiga objek yang bergerak iaitu, X, Y dan Z dalam\nsatu garis lurus.\nDiagram 108 shows a velocity-time graph of\nthree moving objects, X, Y and Z along a straight\nline. (Selangor: Set 1: 2022)\nAntara pernyataan berikut, manakah adalah\nbenar tentang pergerakan objek X, Y dan Z?\nWhich of the following statement is true about the\nmotion ofobjects X, Y and Z?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah108.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Objek Y adalah dalam keadaan pegun / Object Y is in stationary"
      },
      {
        "id": "B",
        "teks": "Objek X mempunyai sesaran yang lebih besar daripada objek Y / Object X has greater displacement than object Y"
      },
      {
        "id": "C",
        "teks": "Objek X mempunyai sesaran yang lebih besar daripada objek Z / Object X has greater displacement than object Z"
      },
      {
        "id": "D",
        "teks": "Objek Z mempunyai sesaran yang lebih besar daripada objek X dan Y / Object Z has greater displacement than object X and Y"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Bagi graf halaju-masa (v-t), kecerunan graf mewakili pecutan objek (a = dv/dt), manakala luas di bawah graf mewakili jumlah sesaran / jarak yang dilalui oleh objek. Jawapan: D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B2_K4_Q08",
    "sumber": "Percubaan SMKA 2022",
    "tahun": 2022,
    "noSoalanAsal": 8,
    "sk": "SK 2.1 Gerakan Linear",
    "sp": "SP 2.1.1 Menghuraikan jenis gerakan linear bagi objek yang berada dalam keadaan pegun, halaju seragam dan halaju tidak seragam",
    "spKod": "2.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 28-29",
    "rujukanBukuTeks": "Buku Teks T4 ms 26-36",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 1-3",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.1 Gerakan Linear",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 109 menunjukkan dua orang kanak-kanak\nsedang bermain buaian yang berbeza panjang di\ntaman permainan. Didapati bahawa tempoh\nayunan bagi setiap buaian itu berbeza.\nDiagram 109 shows tvo children playing o\nswings with diferent lengths at a playground. It\nis found that the period of oscillation for each\nswing is different. (SMKA: 2022)\nAntara pernyataan berikut, yang manakah betul?\nWhich of the following statementsis correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah109.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Panjang tali bertambah, tempoh ayunan berkurang / The length of string increases, period of oscillation decreases"
      },
      {
        "id": "B",
        "teks": "Panjang tali bertambah, tempoh ayunan bertambah / The length of string increases, period of oscillation increases"
      },
      {
        "id": "C",
        "teks": "Panjang tali berkadar terus dengan tempoh ayunan / The length of string is directly proportional to the period of oscillation"
      },
      {
        "id": "D",
        "teks": "Panjang tali berkadar songsang dengan tempoh ayunan / The length of string is inversely proportional to the period of oscillation"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Berdasarkan prinsip fizik bagi SK 2.1 Gerakan Linear, konsep yang diaplikasikan menghasilkan jawapan B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K4_Q09",
    "sumber": "Percubaan Sarawak 2021",
    "tahun": 2021,
    "noSoalanAsal": 9,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 110 menunjukkan bola A dan bola B yang\nmempunyai jisim yang berbeza. Satu bola\nmempunyai jisim dua kali ganda berbanding bola\nyang satu lagi.\nDiagram 110 shows ball A and ball B have\ndifferent masses. One ball having the mass twice\nthan the other ball. (Sarawak: 2021)\nTanpa mengangkat dan menggunakan\npenimbang, bagaimanakah cara menentukan bola\nyang mempunyai jisim yang lebih besar?\nWithout lifting and veighing, how to determine\nwhich ball has greater mass?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah110.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Gerakkan kedua-dua bola dengan daya yang sama, bola yang susah digerakkan mempunyai jisim yang besar kerana inersianya besar / Push the balls with the same force, the ball that harder to move has greater mass due to greater inertia"
      },
      {
        "id": "B",
        "teks": "Gerakkan kedua-dua bola dengan daya yang sama, bola yang menghasilkan pecutan tinggi mempunyai jisim yang lebih besar / Move both the balls with the same force, the ball that having greater acceleration greater mass"
      },
      {
        "id": "C",
        "teks": "Putarkan kedua-dua bola, bola yang cepat berhenti mempunyai jisim yang lebih besar / Rotate both balls, the ball that quickly stops has a greater mass"
      },
      {
        "id": "D",
        "teks": "Gerakkan kedua-dua bola di atas lantai rata, bola yang bergerak lurus mempunyai jisim yang lebih besar / Move both balls on a flat floor, a ball moving straight has a greater mass"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Inersia suatu objek bergantung secara langsung kepada jisimnya sahaja mengikut Hukum Gerakan Newton Pertama. Semakin besar jisim objek, semakin besar inersianya. Oleh itu, objek dengan jisim terbesar mempunyai inersia paling besar (Jawapan: A).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B2_K4_Q10",
    "sumber": "SPM 2022",
    "tahun": 2022,
    "noSoalanAsal": 10,
    "sk": "SK 2.4 Inersia",
    "sp": "SP 2.4.1 Menerangkan konsep inersia melalui contoh (Hukum Gerakan Newton Pertama)",
    "spKod": "2.4.1",
    "rujukanDskp": "DSKP Fizik T4 ms 34-35",
    "rujukanBukuTeks": "Buku Teks T4 ms 52-57",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 9-10",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.4 Inersia",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 111 (a) dan Rajah 111 (b) menunjukkan\ndua gelas yang serupa diisikan dengan isi padu air\nyang berbeza. Apabila alas meja disentap secara\nmengufuk, gelas dalam Rajah 111 (a) tidak\nbergerak tetapi gelas dalam Rajah 111 (b)\nbergerak sedikit.\nidentical glasses filled with different volume of\nwater. When the table cloth is pulled horizontally,\nthe glass in Diagram 111 (a) is not moving but the\nglass in Diagram 11l1 (b) moves slightly.\n(SPM: 2022)\nPernyataan manakah yang menerangkan situasi\ntersebut?\nWhich statements explains the situation?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah111.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Apabila jisim air berkurang, inersia gelas bertambah / When the mass of the water decreases, the inertia of the glass increases"
      },
      {
        "id": "B",
        "teks": "Apabila jisim air bertambah, inersia gelas bertambah / When the mass of the water increases, the inertia of the glass increases"
      },
      {
        "id": "C",
        "teks": "Apabila jisim air bertambah, inersia gelas berkurang / When the mass of the water increases, the inertia of the glass decreases"
      },
      {
        "id": "D",
        "teks": "Apabila jisim air berkurang, inersia gelas berkurang / When the mass of the water decreases, the inertia of the glass decreases"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Inersia suatu objek bergantung secara langsung kepada jisimnya sahaja mengikut Hukum Gerakan Newton Pertama. Semakin besar jisim objek, semakin besar inersianya. Oleh itu, objek dengan jisim terbesar mempunyai inersia paling besar (Jawapan: B).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B2_K4_Q11",
    "sumber": "SPM 2023",
    "tahun": 2023,
    "noSoalanAsal": 11,
    "sk": "SK 2.5 Momentum",
    "sp": "SP 2.5.2 Mengaplikasi Prinsip Keabadian Momentum dalam pelanggaran dan letupan",
    "spKod": "2.5.2",
    "rujukanDskp": "DSKP Fizik T4 ms 36-37",
    "rujukanBukuTeks": "Buku Teks T4 ms 58-65",
    "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 11-13",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 2,
    "babNama": "Daya dan Gerakan I",
    "bidang": "Mekanik Newton",
    "topik": "2.5 Momentum",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah l12 menunjukkan dua orang pemain rugbi\nsedang berlari ke arah satu sama lain. Pemain X\ndan pemain Y berlari dengan kelajuan masing-\nmasing 8 ms dan 10 ms. Kedua-dua pemain\nmempunyai jisim yang sama.\nDiagram |12 shows wo rugby players running\ntowards each other: Player X and player Y run at\na speed of 8 ms' dan 10ms respectively. Both\nplayers have the sane mass. (SPM: 2023)\nAntara yang berikut., manakah yang betul apabila\nkedua-dua pemain tersebut berlanggar antara satu\nsama lain dan jatuh bersama-sama.\nWhich of the following is correct when the both\nplayers collideeachotherandfall together?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah112.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Momentum pemain Y sama dengan momentum pemain X / The momentum of player Y is equal to the momentum of player X"
      },
      {
        "id": "B",
        "teks": "Perlanggaran yang berlaku adalah perlanggaran kenyal / The collision occurred is an elastic collision"
      },
      {
        "id": "C",
        "teks": "Perlanggaran yang berlaku adalah perlanggaran tak kenyal / The collision occurred is an inelastic collision"
      },
      {
        "id": "D",
        "teks": "Jumlah momentum selepas perlanggaran adalah lebih besar daripada jumlah momentum sebelum perlanggaran / The total momentum after collision is greater than the total momentum before collision"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Momentum ditakrifkan sebagai hasil darab jisim dengan halaju (p = mv). Ia merupakan kuantiti vektor yang mempunyai magnitud dan arah. Jawapan: C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K1_Q01",
    "sumber": "Percubaan Melaka 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Menurut Hukum Kegravitian Semesta Newton, daya graviti di antara dua objek adalah berkadar terus dengan\nAccording to Newton's Universal Law of Gravitation, the gravitational force between two objects is directly proportional to\n(Melaka: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "pemalar kegravitian / the gravitational constant"
      },
      {
        "id": "B",
        "teks": "hasil darab jisim kedua-dua objek / the product of the masses of both objects"
      },
      {
        "id": "C",
        "teks": "jarak di antara kedua-dua objek / the distance between both objects"
      },
      {
        "id": "D",
        "teks": "kuasa dua jarak di antara objek-objek / the square of the distance between the objects"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K1_Q02",
    "sumber": "Percubaan Pulau Pinang 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Apakah bentuk orbit bagi sebuah planet yang mengelilingi Matahari?\nWhat is the shape of orbit of a planet that surround the Sun?\n(Pulau Pinang: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Elips / Ellipse"
      },
      {
        "id": "B",
        "teks": "Bulatan / Circle"
      },
      {
        "id": "C",
        "teks": "Membujur / Oval"
      },
      {
        "id": "D",
        "teks": "Perihelion / Perihelion"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K1_Q03",
    "sumber": "Percubaan Perak 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Hukum Kegravitian Semesta Newton menyatakan bahawa daya graviti antara dua jasad berkadar terus dengan hasil darab jisim kedua-dua jasad itu dan berkadar songsang dengan\nNewton's Universal Law of Gravitation states that the gravitational force between two bodies is directly proportional to the product of the masses of the two bodies and is inversely proportional to\n(Perak: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "jarak di antara dua jasad / the distance between the two bodies"
      },
      {
        "id": "B",
        "teks": "kuasa dua hasil darab jejari jasad / the square of the product of the bodies' radius"
      },
      {
        "id": "C",
        "teks": "kuasa tiga jarak di antara dua jasad / the cube of the distance between the two bodies"
      },
      {
        "id": "D",
        "teks": "kuasa dua jarak di antara dua jasad / the square of the distance between the two bodies"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K1_Q04",
    "sumber": "Percubaan SBP 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Apakah maksud kekuatan medan graviti?\nWhat is meant by gravitational field strength?\n(SBP: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Berat bagi sesuatu jasad / Weight of a body"
      },
      {
        "id": "B",
        "teks": "Kebolehan medan graviti menarik objek / The ability of the gravitational field to attract objects"
      },
      {
        "id": "C",
        "teks": "Daya graviti yang bertindak ke atas suatu objek / The gravitational force acting on an object"
      },
      {
        "id": "D",
        "teks": "Daya yang bertindak per unit jisim disebabkan tarikan graviti / The force acting per unit mass due to gravitational attraction"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K1_Q05",
    "sumber": "Percubaan Terengganu 2023",
    "tahun": 2023,
    "noSoalanAsal": 5,
    "sk": "SK 3.2 Hukum Kepler",
    "sp": "SP 3.2.1 Memerihalkan Hukum Kepler I, II dan III",
    "spKod": "3.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 47-48",
    "rujukanBukuTeks": "Buku Teks T4 ms 89-94",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 24-25",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.2 Hukum Kepler",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Maklumat di bawah menyatakan satu hukum.\nThe information given below states one law.\n(Terengganu: 2023)\n\n\"Semua planet bergerak dalam orbit berbentuk elips dengan kedudukan Matahari pada satu titik fokus.\"\n\"All planets move in elliptical orbits with the Sun at one focus.\"\n\nApakah hukum yang diterangkan oleh pernyataan di atas?\nWhat law is explained by the above statement?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Kepler Pertama / Kepler's First Law"
      },
      {
        "id": "B",
        "teks": "Hukum Kepler Kedua / Kepler's Second Law"
      },
      {
        "id": "C",
        "teks": "Hukum Kepler Ketiga / Kepler's Third Law"
      },
      {
        "id": "D",
        "teks": "Hukum Kegravitian Semesta Newton / Newton's Universal Law of Gravitation"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K1_Q06",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 6,
    "sk": "SK 3.2 Hukum Kepler",
    "sp": "SP 3.2.1 Memerihalkan Hukum Kepler I, II dan III",
    "spKod": "3.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 47-48",
    "rujukanBukuTeks": "Buku Teks T4 ms 89-94",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 24-25",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.2 Hukum Kepler",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Pernyataan manakah yang betul tentang Hukum Kepler Kedua?\nWhich statement is correct about Kepler's Second Law?\n(MRSM: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Garis yang menyambungkan planet dengan Matahari akan mencakupi luas yang sama dalam sela masa yang sama apabila planet bergerak dalam orbitnya / A line that connects a planet to the Sun sweeps out equal areas in equal times when the planet moves in its orbit"
      },
      {
        "id": "B",
        "teks": "Orbit bagi setiap planet adalah elips dengan Matahari berada di satu daripada fokusnya / The orbit of each planet is elliptical with the Sun at one focus"
      },
      {
        "id": "C",
        "teks": "Kuasa dua tempoh orbit planet adalah berkadar terus dengan kuasa tiga jejari orbitnya / The square of the orbital period of any planet is directly proportional to the cube of the radius of its orbit"
      },
      {
        "id": "D",
        "teks": "Daya graviti antara dua jasad berkadar terus dengan hasil darab jisim kedua-dua jasad / The gravitational force between two bodies is directly proportional to the product of the masses of the two bodies"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K1_Q07",
    "sumber": "Percubaan Kedah 2022",
    "tahun": 2022,
    "noSoalanAsal": 7,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Baca pernyataan di bawah:\nRead the statement below.\n(Kedah: 2022)\n\n\"Kuasa dua tempoh orbit planet adalah berkadar terus dengan kuasa tiga jejari orbitnya.\"\n\"The square of the orbital period of any planet is directly proportional to the cube of the radius of its orbit.\"\n\nPernyataan itu berkaitan\nThe statement is about",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Hukum Kepler Pertama / Kepler's First Law"
      },
      {
        "id": "B",
        "teks": "Hukum Kepler Kedua / Kepler's Second Law"
      },
      {
        "id": "C",
        "teks": "Hukum Kepler Ketiga / Kepler's Third Law"
      },
      {
        "id": "D",
        "teks": "Hukum Gerakan Newton Ketiga / Newton's Third Law of Motion"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K1_Q08",
    "sumber": "Percubaan Perlis 2022",
    "tahun": 2022,
    "noSoalanAsal": 8,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Tempoh orbit satelit geopegun ialah\nThe orbital period of a geostationary satellite is\n(Perlis: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "24 jam / 24 hours"
      },
      {
        "id": "B",
        "teks": "36 jam / 36 hours"
      },
      {
        "id": "C",
        "teks": "48 jam / 48 hours"
      },
      {
        "id": "D",
        "teks": "72 jam / 72 hours"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K1_Q09",
    "sumber": "Percubaan Perlis 2022",
    "tahun": 2022,
    "noSoalanAsal": 9,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Rendah",
    "konstruk": "Mengingat",
    "soalan": "Kedudukan bagi sebuah planet yang berada paling hampir dengan Matahari ketika mengorbit dikenali sebagai\nThe position of a planet that is closest to the Sun when orbiting is known as\n(Perlis: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "perihelion / perihelion"
      },
      {
        "id": "B",
        "teks": "titik fokus / focal point"
      },
      {
        "id": "C",
        "teks": "aphelion / aphelion"
      },
      {
        "id": "D",
        "teks": "pusat / center"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q01",
    "sumber": "Percubaan Kedah 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Satelit geopegun berada dalam orbit khas yang dikenali sebagai Orbit Bumi Geopegun. Satelit jenis ini digunakan untuk\nThe geostationary satellite is in a special orbit known as the Geostationary Earth Orbit. This type of satellite is used for\n(Kedah: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "GPS / GPS"
      },
      {
        "id": "B",
        "teks": "kaji cuaca / weather forecast"
      },
      {
        "id": "C",
        "teks": "komunikasi / communication"
      },
      {
        "id": "D",
        "teks": "Pengimejan Bumi / Earth imaging"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K2_Q02",
    "sumber": "Percubaan Melaka 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 1 menunjukkan sebuah roket air ketika dilancarkan.\nDiagram 1 shows a water rocket as it was launched. (Melaka: 2023)\n\nSituasi ini boleh dijelaskan oleh\nThis situation can be explained by",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah1_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "konsep inersia / concept of inertia"
      },
      {
        "id": "B",
        "teks": "prinsip keabadian tenaga / principle of conservation of energy"
      },
      {
        "id": "C",
        "teks": "keseimbangan daya / equilibrium of forces"
      },
      {
        "id": "D",
        "teks": "prinsip keabadian momentum / principle of conservation of momentum"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q03",
    "sumber": "Percubaan Negeri Sembilan 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Bumi berupaya mengekalkan lapisan atmosferanya kerana\nThe Earth can maintain its layer of atmosphere because\n(Negeri Sembilan: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "laju linear purata molekul gas bagi atmosfera lebih kecil daripada halaju lepas Bumi / the average linear speed of atmospheric gas molecules is less than Earth's escape velocity"
      },
      {
        "id": "B",
        "teks": "laju linear purata molekul gas bagi atmosfera lebih besar daripada halaju lepas Bumi / the average linear speed of atmospheric gas molecules is more than Earth's escape velocity"
      },
      {
        "id": "C",
        "teks": "medan magnet Bumi / the Earth's magnetic field"
      },
      {
        "id": "D",
        "teks": "kesan graviti Bulan / the gravitational effect of the Moon"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q04",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Berat ialah kuantiti vektor yang bertindak ke arah pusat Bumi. Berdasarkan formula berat, W = mg, apakah maksud kekuatan medan graviti, g?\nWeight is a vector quantity acting towards the center of the Earth. Based on the weight formula, W = mg, what is meant by the gravitational field strength, g?\n(Pahang: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya yang bertindak per unit jisim disebabkan tarikan graviti / The force acting per unit mass due to gravitational attraction"
      },
      {
        "id": "B",
        "teks": "Jisim yang bertindak per unit daya disebabkan tarikan graviti / Mass acting per unit force due to gravitational attraction"
      },
      {
        "id": "C",
        "teks": "Berat yang bertindak per unit jisim disebabkan tarikan graviti / Weight acting per unit mass due to gravitational attraction"
      },
      {
        "id": "D",
        "teks": "Tarikan graviti yang bertindak per unit jisim disebabkan oleh daya / Gravitational pull acting per unit mass due to force"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q05",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 5,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Formula Hukum Kegravitian Semesta Newton adalah seperti berikut:\nThe formula of Newton's Universal Law of Gravitation is as follows: (Pahang: 2023)\n\nF = G(m1 m2) / r^2\n\nApakah kesan pada daya graviti apabila jarak di antara dua jasad bertambah?\nWhat are the effects on gravitational force when the distance between the two bodies increases?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Berkurang / Decreases"
      },
      {
        "id": "B",
        "teks": "Bertambah / Increases"
      },
      {
        "id": "C",
        "teks": "Tidak berubah / Unchanged"
      },
      {
        "id": "D",
        "teks": "Bertambah dua kali ganda / Doubled"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q06",
    "sumber": "Percubaan Pulau Pinang 2023",
    "tahun": 2023,
    "noSoalanAsal": 6,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Graf manakah yang mewakili hubungan antara pecutan graviti, g dengan jarak pemisahan, r, antara satu objek dengan Bumi?\nWhich graph represents the relationship between the gravitational acceleration, g and the separation distance, r, between an object and the Earth?\n(Pulau Pinang: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q06_opt_a.webp?v=20260924_v3\" alt=\"Graf Pilihan A\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q06_opt_b.webp?v=20260924_v3\" alt=\"Graf Pilihan B\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q06_opt_c.webp?v=20260924_v3\" alt=\"Graf Pilihan C\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q06_opt_d.webp?v=20260924_v3\" alt=\"Graf Pilihan D\" style=\"max-height:100px; display:block; margin:auto;\" />"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q07",
    "sumber": "Percubaan Perak 2023",
    "tahun": 2023,
    "noSoalanAsal": 7,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara graf berikut, yang manakah menunjukkan variasi pecutan graviti, g dengan jarak, r dari pusat Bumi yang betul bagi kedudukan r ≥ R?\nWhich of the following graphs shows the correct variation of gravitational acceleration, g and distance, r from the centre of the Earth for the position of r ≥ R?\n(Perak: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q07_opt_a.webp?v=20260924_v3\" alt=\"Graf Pilihan A\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q07_opt_b.webp?v=20260924_v3\" alt=\"Graf Pilihan B\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q07_opt_c.webp?v=20260924_v3\" alt=\"Graf Pilihan C\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q07_opt_d.webp?v=20260924_v3\" alt=\"Graf Pilihan D\" style=\"max-height:100px; display:block; margin:auto;\" />"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q08",
    "sumber": "Percubaan Perak 2023",
    "tahun": 2023,
    "noSoalanAsal": 8,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Pernyataan yang manakah menerangkan satelit geopegun dengan betul?\nWhich statement describes the geostationary satellite correctly?\n(Perak: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Banyak digunakan dalam pengimejan Bumi / Widely used in Earth imaging"
      },
      {
        "id": "B",
        "teks": "Arah gerakan tidak sama dengan arah putaran Bumi / Direction of motion is not the same as the direction of the Earth's rotation"
      },
      {
        "id": "C",
        "teks": "Tempoh orbit yang lebih lama berbanding dengan tempoh orbit Bumi / The orbital period is longer than the Earth's orbital period"
      },
      {
        "id": "D",
        "teks": "Sentiasa berada di atas kedudukan geografi yang sama di permukaan Bumi / Always above the same geographical location on the surface of the Earth"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q09",
    "sumber": "Percubaan Perlis 2023",
    "tahun": 2023,
    "noSoalanAsal": 9,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Apakah hubungan antara tempoh orbit bagi sebuah planet, T, dengan jejari, r, planet itu mengelilingi Matahari?\nWhat is the relationship between the orbital period of a planet, T, and the radius, r, of the planet orbiting the Sun?\n(Perlis: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "T² berkadar terus dengan r³ / T² is directly proportional to r³"
      },
      {
        "id": "B",
        "teks": "T berkadar terus dengan r / T is directly proportional to r"
      },
      {
        "id": "C",
        "teks": "T² berkadar songsang dengan r³ / T² is inversely proportional to r³"
      },
      {
        "id": "D",
        "teks": "T berkadar songsang dengan r² / T is inversely proportional to r²"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q10",
    "sumber": "Percubaan Perlis 2023",
    "tahun": 2023,
    "noSoalanAsal": 10,
    "sk": "SK 3.2 Hukum Kepler",
    "sp": "SP 3.2.1 Memerihalkan Hukum Kepler I, II dan III",
    "spKod": "3.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 47-48",
    "rujukanBukuTeks": "Buku Teks T4 ms 89-94",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 24-25",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.2 Hukum Kepler",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara pernyataan berikut yang manakah benar mengenai Hukum Kepler Ketiga?\nWhich of the following statements is true about Kepler's Third Law?\n(Perlis: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Orbit bagi setiap planet adalah elips / The orbit of each planet is an ellipse"
      },
      {
        "id": "B",
        "teks": "Garis yang menyambungkan planet dengan Matahari mencakupi luas yang sama dalam sela masa yang sama / A line connecting a planet to the Sun sweeps out equal areas in equal times"
      },
      {
        "id": "C",
        "teks": "Kuasa tiga tempoh orbit berkadar terus dengan kuasa dua jejari / The cube of orbital period is directly proportional to the square of radius"
      },
      {
        "id": "D",
        "teks": "Kuasa dua tempoh orbit planet berkadar terus dengan kuasa tiga jejari orbitnya / The square of the orbital period of any planet is directly proportional to the cube of the radius of its orbit"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q11",
    "sumber": "Percubaan Selangor Set 1 2023",
    "tahun": 2023,
    "noSoalanAsal": 11,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 2 menunjukkan Ahmad, Rama dan Lim yang mempunyai jisim yang sama berdiri pada kedudukan masing-masing.\nDiagram 2 shows Ahmad, Rama and Lim who have the same mass standing at their respective positions.\n(Selangor: Set 1: 2023)\n\nPernyataan manakah yang betul?\nWhich statement is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah2_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya graviti antara Ahmad dan Rama lebih besar daripada antara Ahmad dan Lim / Gravitational force between Ahmad and Rama is greater than between Ahmad and Lim"
      },
      {
        "id": "B",
        "teks": "Daya graviti antara Ahmad dan Rama sama dengan daya graviti antara Ahmad dan Lim / Gravitational force between Ahmad and Rama is equal to gravitational force between Ahmad and Lim"
      },
      {
        "id": "C",
        "teks": "Daya graviti antara Ahmad dan Rama lebih kecil daripada antara Ahmad dan Lim / Gravitational force between Ahmad and Rama is smaller than between Ahmad and Lim"
      },
      {
        "id": "D",
        "teks": "Tiada daya graviti bertindak antara mereka / No gravitational force acts between them"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q12",
    "sumber": "Percubaan Selangor Set 2 2023",
    "tahun": 2023,
    "noSoalanAsal": 12,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Mengapakah nilai pecutan graviti, g di kutub Bumi lebih besar berbanding nilai g di khatulistiwa?\nWhy is the value of gravitational acceleration, g at the Earth's poles greater than the value of g at the equator?\n(Selangor: Set 2: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jejari Bumi di kutub lebih kecil daripada jejari di khatulistiwa / The Earth's radius at the poles is smaller than the radius at the equator"
      },
      {
        "id": "B",
        "teks": "Jejari Bumi di kutub lebih besar daripada jejari di khatulistiwa / The Earth's radius at the poles is larger than the radius at the equator"
      },
      {
        "id": "C",
        "teks": "Ketumpatan Bumi di kutub lebih kecil / The Earth's density at the poles is smaller"
      },
      {
        "id": "D",
        "teks": "Suhu di kutub lebih rendah / The temperature at the poles is lower"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q13",
    "sumber": "Percubaan Selangor Set 3 2023",
    "tahun": 2023,
    "noSoalanAsal": 13,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.3 Mengkonsepsikan halaju lepas, v = sqrt(2GM/r)",
    "spKod": "3.3.3",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Apakah faktor yang mempengaruhi halaju lepas dari permukaan sesebuah planet?\nWhat factors affect the escape velocity from the surface of a planet?\n(Selangor: Set 3: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim objek yang dilancarkan sahaja / The mass of the launched object only"
      },
      {
        "id": "B",
        "teks": "Jisim planet dan jejari planet / The mass of the planet and the radius of the planet"
      },
      {
        "id": "C",
        "teks": "Ketumpatan atmosfera planet sahaja / The density of the planet's atmosphere only"
      },
      {
        "id": "D",
        "teks": "Bentuk aerodinamik objek / The aerodynamic shape of the object"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q14",
    "sumber": "Percubaan Terengganu 2023",
    "tahun": 2023,
    "noSoalanAsal": 14,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara pernyataan berikut, yang manakah tidak benar tentang satelit bukan geopegun?\nWhich of the following statements is not true about a non-geostationary satellite?\n(Terengganu: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tempoh orbit boleh lebih pendek atau lebih panjang daripada 24 jam / Orbital period can be shorter or longer than 24 hours"
      },
      {
        "id": "B",
        "teks": "Sentiasa berada di atas kedudukan geografi yang sama di Bumi / Always above the same geographical location on Earth"
      },
      {
        "id": "C",
        "teks": "Arah gerakan tidak semestinya sama dengan arah putaran Bumi / Direction of motion does not have to be the same as Earth's rotation"
      },
      {
        "id": "D",
        "teks": "Biasanya berada pada orbit rendah atau orbit kutub / Usually in lower orbit or polar orbit"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q15",
    "sumber": "Percubaan Terengganu 2023",
    "tahun": 2023,
    "noSoalanAsal": 15,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Apakah yang akan berlaku kepada sebuah satelit jika laju linearnya kurang daripada laju linear yang diperlukan untuk kekal dalam orbitnya?\nWhat will happen to a satellite if its linear speed is less than the linear speed required to stay in its orbit?\n(Terengganu: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Satelit akan terlepas ke angkasa lepas / The satellite will escape into outer space"
      },
      {
        "id": "B",
        "teks": "Satelit akan bergerak ke orbit yang lebih tinggi / The satellite will move to a higher orbit"
      },
      {
        "id": "C",
        "teks": "Satelit akan terus mengorbit pada kelajuan sama / The satellite will continue to orbit at the same speed"
      },
      {
        "id": "D",
        "teks": "Satelit akan jatuh kembali ke Bumi mengikut lintasan pilin / The satellite will fall back towards the Earth in a spiral path"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q16",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 16,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Di manakah kekuatan medan graviti bernilai sifar antara Bumi dan Bulan?\nWhere is the gravitational field strength zero between the Earth and the Moon?\n(MRSM: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tepat di tengah-tengah jarak antara Bumi dan Bulan / Exactly at the midpoint between the Earth and the Moon"
      },
      {
        "id": "B",
        "teks": "Pada suatu titik neutral yang lebih hampir dengan Bulan / At a neutral point closer to the Moon"
      },
      {
        "id": "C",
        "teks": "Pada suatu titik neutral yang lebih hampir dengan Bumi / At a neutral point closer to the Earth"
      },
      {
        "id": "D",
        "teks": "Di permukaan Bulan / At the surface of the Moon"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q17",
    "sumber": "Percubaan MRSM 2023",
    "tahun": 2023,
    "noSoalanAsal": 17,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 3 menunjukkan angkasawan memakai sut angkasa lepas berjisim 82 kg. Dia mendapati berjalan di permukaan Bulan lebih mudah berbanding di permukaan Bumi dengan memakai sut yang sama.\nDiagram 3 shows an astronaut wearing a space suit with mass 82 kg. He discovered that walking on the surface of Moon is easier compared to the surface of Earth wearing the same suit.\n(MRSM: 2023)\n\nSituasi ini berlaku kerana\nThis situation occurs because",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah3_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim sut angkasa lebih rendah di Bulan / The mass of the space suit is lower on the Moon"
      },
      {
        "id": "B",
        "teks": "Pecutan graviti di Bulan lebih kecil daripada di Bumi / Gravitational acceleration on the Moon is smaller than on Earth"
      },
      {
        "id": "C",
        "teks": "Tiada rintangan udara di Bulan / There is no air resistance on the Moon"
      },
      {
        "id": "D",
        "teks": "Sut angkasa kehilangan inersianya di Bulan / The space suit loses its inertia on the Moon"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q18",
    "sumber": "Percubaan Melaka 2022",
    "tahun": 2022,
    "noSoalanAsal": 18,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 4 menunjukkan sebuah roket dilancarkan bagi menghantar satelit buatan manusia ke angkasa lepas.\nDiagram 4 shows a rocket being launched to send man-made satellite to outer space.\n(Melaka: 2022)\n\nApakah syarat agar roket dapat mengatasi daya graviti Bumi sepenuhnya?\nWhat is the condition for the rocket to completely overcome Earth's gravitational pull?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah4_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju roket mesti mencapai atau melebihi halaju lepas Bumi / The rocket velocity must reach or exceed Earth's escape velocity"
      },
      {
        "id": "B",
        "teks": "Halaju roket sama dengan laju linear orbit rendah / The rocket velocity is equal to the linear speed of low orbit"
      },
      {
        "id": "C",
        "teks": "Jisim roket mestilah lebih kecil daripada jisim satelit / The mass of the rocket must be smaller than the satellite mass"
      },
      {
        "id": "D",
        "teks": "Daya tujah roket mestilah sifar di angkasa / The thrust of the rocket must be zero in space"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q19",
    "sumber": "Percubaan Melaka 2022",
    "tahun": 2022,
    "noSoalanAsal": 19,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.4 Memerihalkan daya memusat dalam sistem gerakan bumi dan satelit, F = mv^2/r",
    "spKod": "3.1.4",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 5 menunjukkan satu objek berjisim, m bergerak dalam lintasan membulat berjejari, r dengan laju linear, v. Objek tersebut mengalami daya memusat, F.\nDiagram 5 shows an object of mass, m moves in a circular path of radius, r with a linear speed, v. The object experiences centripetal force, F.\n(Melaka: 2022)\n\nArah daya memusat adalah sentiasa\nThe direction of centripetal force is always",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah5_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "mengarah ke pusat bulatan / directed towards the centre of the circle"
      },
      {
        "id": "B",
        "teks": "tangensial kepada lintasan membulat / tangential to the circular path"
      },
      {
        "id": "C",
        "teks": "menjauhi pusat bulatan / directed away from the centre of the circle"
      },
      {
        "id": "D",
        "teks": "selari dengan arah halaju linear / parallel to the direction of linear velocity"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q20",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 20,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Satelit geopegun sentiasa berada di atas lokasi geografi yang sama di Bumi. Antara berikut, yang manakah fungsi utama satelit ini?\nGeostationary satellites always remain above the same geographical location on Earth. Which of the following is the main function of this satellite?\n(Pahang: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pengimejan ketenteraan resolusi tinggi / High resolution military imaging"
      },
      {
        "id": "B",
        "teks": "Penyiaran telekomunikasi dan televisyen secara berterusan / Continuous telecommunication and television broadcasting"
      },
      {
        "id": "C",
        "teks": "Penyelidikan saintifik kutub Bumi / Scientific research of Earth's poles"
      },
      {
        "id": "D",
        "teks": "Pemantauan pertanian bermusim / Seasonal agricultural monitoring"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q21",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 21,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Manakah antara satelit berikut yang paling sesuai digunakan untuk menyediakan data ramalan cuaca di rantau khatulistiwa tanpa gangguan?\nWhich of the following satellites is most suitable for providing uninterrupted weather forecasting data in the equatorial region?\n(Pahang: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Satelit orbit rendah (LEO) / Low Earth Orbit (LEO) satellite"
      },
      {
        "id": "B",
        "teks": "Satelit geopegun (GEO) / Geostationary Earth Orbit (GEO) satellite"
      },
      {
        "id": "C",
        "teks": "Satelit orbit kutub / Polar orbit satellite"
      },
      {
        "id": "D",
        "teks": "Satelit altitud sederhana / Medium altitude satellite"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q22",
    "sumber": "Percubaan Perak 2022",
    "tahun": 2022,
    "noSoalanAsal": 22,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Apakah unit S.I. bagi pemalar kegravitian semesta, G?\nWhat is the S.I. unit for the universal gravitational constant, G?\n(Perak: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "N m kg⁻¹ / N m kg⁻¹"
      },
      {
        "id": "B",
        "teks": "N m² kg⁻¹ / N m² kg⁻¹"
      },
      {
        "id": "C",
        "teks": "N m² kg⁻² / N m² kg⁻²"
      },
      {
        "id": "D",
        "teks": "N m⁻² kg² / N m⁻² kg²"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K2_Q23",
    "sumber": "Percubaan Perak 2022",
    "tahun": 2022,
    "noSoalanAsal": 23,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.3 Mengkonsepsikan halaju lepas, v = sqrt(2GM/r)",
    "spKod": "3.3.3",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Halaju lepas dari permukaan sesebuah planet diberikan oleh rumus v = √(2GM / R). Pernyataan manakah yang benar tentang halaju lepas?\nThe escape velocity from the surface of a planet is given by the formula v = √(2GM / R). Which statement is true about escape velocity?\n(Perak: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju lepas bertambah jika jejari planet bertambah / Escape velocity increases if the radius of the planet increases"
      },
      {
        "id": "B",
        "teks": "Halaju lepas bertambah jika jisim planet bertambah / Escape velocity increases if the mass of the planet increases"
      },
      {
        "id": "C",
        "teks": "Halaju lepas bergantung kepada jisim objek yang dilancarkan / Escape velocity depends on the mass of the launched object"
      },
      {
        "id": "D",
        "teks": "Halaju lepas adalah sifar di angkasa lepas / Escape velocity is zero in outer space"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q24",
    "sumber": "Percubaan Perlis 2022",
    "tahun": 2022,
    "noSoalanAsal": 24,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Apakah yang akan berlaku kepada daya tarikan graviti antara dua objek jika jarak pemisahan antara kedua-duanya digandakan menjadi dua kali ganda?\nWhat will happen to the gravitational force between two objects if the separation distance between them is doubled?\n(Perlis: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya graviti digandakan dua kali / Gravitational force is doubled"
      },
      {
        "id": "B",
        "teks": "Daya graviti tidak berubah / Gravitational force remains unchanged"
      },
      {
        "id": "C",
        "teks": "Daya graviti menjadi separuh daripada nilai asal / Gravitational force becomes half of the original value"
      },
      {
        "id": "D",
        "teks": "Daya graviti berkurang kepada 1/4 daripada nilai asal / Gravitational force is reduced to 1/4 of the original value"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q25",
    "sumber": "Percubaan Putrajaya 2022",
    "tahun": 2022,
    "noSoalanAsal": 25,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 6 menunjukkan graf hubungan antara daya graviti, F dan jisim, m untuk objek berhampiran permukaan Bumi.\nDiagram 6 shows the graph of relationship between gravitational force, F and mass, m for objects near to Earth's surface.\n(Putrajaya: 2022)\n\nKecerunan graf mewakili\nGradient of graph represents",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah6_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "pecutan graviti, g / gravitational acceleration, g"
      },
      {
        "id": "B",
        "teks": "pemalar kegravitian semesta, G / universal gravitational constant, G"
      },
      {
        "id": "C",
        "teks": "jisim Bumi / mass of Earth"
      },
      {
        "id": "D",
        "teks": "jejari Bumi / radius of Earth"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q26",
    "sumber": "Percubaan Putrajaya 2022",
    "tahun": 2022,
    "noSoalanAsal": 26,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.4 Memerihalkan daya memusat dalam sistem gerakan bumi dan satelit, F = mv^2/r",
    "spKod": "3.1.4",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 7 menunjukkan sebuah planet berjisim m, bergerak dalam orbit membulat berjejari r mengelilingi Matahari berjisim M dalam satu pusingan lengkap.\nDiagram 7 shows a planet of mass m, moving in a circular orbit of radius r around the Sun of mass M in one complete revolution.\n(Putrajaya: 2022)\n\nDaya graviti yang bertindak sebagai daya memusat diberikan oleh\nThe gravitational force that acts as the centripetal force is given by",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah7_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "F = mv / r / F = mv / r"
      },
      {
        "id": "B",
        "teks": "F = mv² / r² / F = mv² / r²"
      },
      {
        "id": "C",
        "teks": "F = GM / r² / F = GM / r²"
      },
      {
        "id": "D",
        "teks": "F = GMm / r² / F = GMm / r²"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q27",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 27,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Seorang angkasawan lebih mudah berjalan di atas permukaan Bulan berbanding di atas permukaan Bumi. Mengapakah keadaan ini berlaku?\nAn astronaut walks more easily on the surface of the Moon than on the surface of the Earth. Why does this happen?\n(SBP: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim angkasawan lebih kecil di Bulan / The mass of the astronaut is smaller on the Moon"
      },
      {
        "id": "B",
        "teks": "Tiada atmosfera di Bulan / There is no atmosphere on the Moon"
      },
      {
        "id": "C",
        "teks": "Daya graviti yang bertindak ke atas angkasawan di Bulan lebih kecil daripada di Bumi / The gravitational force acting on the astronaut on the Moon is smaller than on Earth"
      },
      {
        "id": "D",
        "teks": "Ketumpatan Bulan lebih tinggi berbanding Bumi / The density of the Moon is higher than Earth"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K2_Q28",
    "sumber": "Percubaan SBP 2022",
    "tahun": 2022,
    "noSoalanAsal": 28,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 8 menunjukkan sebuah satelit yang digunakan dalam Sistem Penentu Kedudukan Global (GPS).\nDiagram 8 shows a satellite used in the Global Positioning System (GPS).\n(SBP: 2022)\n\nAntara ciri-ciri satelit GPS berikut, yang manakah benar?\nWhich of the following characteristics of a GPS satellite is true?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah8_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Merupakan satelit geopegun dengan tempoh orbit 24 jam / It is a geostationary satellite with an orbital period of 24 hours"
      },
      {
        "id": "B",
        "teks": "Merupakan satelit bukan geopegun dengan tempoh orbit kira-kira 12 jam / It is a non-geostationary satellite with an orbital period of about 12 hours"
      },
      {
        "id": "C",
        "teks": "Sentiasa berada di atas kedudukan geografi yang sama di Bumi / It always remains above the same geographical location on Earth"
      },
      {
        "id": "D",
        "teks": "Arah pergerakan sentiasa bertentangan dengan putaran Bumi / Its direction of motion is always opposite to Earth's rotation"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q29",
    "sumber": "Percubaan SMKA 2022",
    "tahun": 2022,
    "noSoalanAsal": 29,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.3 Mengkonsepsikan halaju lepas, v = sqrt(2GM/r)",
    "spKod": "3.3.3",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 9 menunjukkan sebuah satelit yang mengorbit Bumi.\nDiagram 9 shows a satellite orbiting the Earth.\n(SMKA: 2022)\n\nAntara lintasan A, B, C atau D yang manakah akan dilalui oleh satelit itu jika laju linearnya bertambah secara mendadak tetapi belum mencapai halaju lepas?\nWhich of the paths A, B, C or D will the satellite follow if its linear speed increases suddenly but has not reached escape velocity?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah9_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Lintasan A / Path A"
      },
      {
        "id": "B",
        "teks": "Lintasan B / Path B"
      },
      {
        "id": "C",
        "teks": "Lintasan C / Path C"
      },
      {
        "id": "D",
        "teks": "Lintasan D / Path D"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q30",
    "sumber": "Percubaan SMKA 2022",
    "tahun": 2022,
    "noSoalanAsal": 30,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara berikut, yang manakah BUKAN ciri bagi sebuah satelit bukan geopegun?\nWhich of the following is NOT a characteristic of a non-geostationary satellite?\n(SMKA: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tempoh orbit boleh kurang atau lebih daripada 24 jam / Orbital period can be less or more than 24 hours"
      },
      {
        "id": "B",
        "teks": "Satah orbit tidak semestinya berada pada satah khatulistiwa / Orbital plane does not have to be on the equatorial plane"
      },
      {
        "id": "C",
        "teks": "Arah gerakan tidak semestinya sama dengan arah putaran Bumi / Direction of motion does not have to be same as Earth's rotation"
      },
      {
        "id": "D",
        "teks": "Sentiasa berada di atas lokasi geografi yang sama di Bumi / Always above the same geographical location on Earth"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q31",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 31,
    "sk": "SK 3.2 Hukum Kepler",
    "sp": "SP 3.2.1 Memerihalkan Hukum Kepler I, II dan III",
    "spKod": "3.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 47-48",
    "rujukanBukuTeks": "Buku Teks T4 ms 89-94",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 24-25",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.2 Hukum Kepler",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Pernyataan yang manakah adalah betul mengenai Hukum Kepler Pertama?\nWhich statement is correct regarding Kepler's First Law?\n(Terengganu: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Semua planet bergerak dalam orbit bulatan mengelilingi Matahari / All planets move in circular orbits around the Sun"
      },
      {
        "id": "B",
        "teks": "Kuasa dua tempoh orbit planet berkadar terus dengan kuasa tiga jejari orbitnya / The square of the orbital period is directly proportional to the cube of the orbital radius"
      },
      {
        "id": "C",
        "teks": "Garis yang menyambungkan planet dengan Matahari menyapu luas yang sama dalam sela masa yang sama / A line connecting a planet to the Sun sweeps out equal areas in equal times"
      },
      {
        "id": "D",
        "teks": "Semua planet bergerak dalam orbit elips dengan Matahari berada di salah satu fokusnya / All planets move in elliptical orbits with the Sun at one of the foci"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q32",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 32,
    "sk": "SK 3.2 Hukum Kepler",
    "sp": "SP 3.2.1 Memerihalkan Hukum Kepler I, II dan III",
    "spKod": "3.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 47-48",
    "rujukanBukuTeks": "Buku Teks T4 ms 89-94",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 24-25",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.2 Hukum Kepler",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 10 menunjukkan luas yang dicakup dalam masa yang sama di kawasan PQR dan XYZ bagi sebuah planet yang mengorbit Matahari.\nDiagram 10 shows the area swept out in the same time in regions PQR and XYZ for a planet orbiting the Sun.\n(Terengganu: 2022)\n\nAntara berikut yang manakah benar tentang luas PQR dan XYZ?\nWhich of the following is true about the areas PQR and XYZ?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah10_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Luas PQR = Luas XYZ / Area PQR = Area XYZ"
      },
      {
        "id": "B",
        "teks": "Luas PQR > Luas XYZ / Area PQR > Area XYZ"
      },
      {
        "id": "C",
        "teks": "Luas PQR < Luas XYZ / Area PQR < Area XYZ"
      },
      {
        "id": "D",
        "teks": "Luas PQR bergantung kepada jisim planet / Area PQR depends on the mass of the planet"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q33",
    "sumber": "Percubaan Terengganu 2021",
    "tahun": 2021,
    "noSoalanAsal": 33,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Berat Karim di Bumi ialah 800 N. Apakah yang akan berlaku kepada berat Karim jika dia berada di Bulan?\nKarim's weight on Earth is 800 N. What will happen to his weight on the Moon?\n(Terengganu: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Beratnya bertambah / His weight increases"
      },
      {
        "id": "B",
        "teks": "Beratnya berkurang / His weight decreases"
      },
      {
        "id": "C",
        "teks": "Beratnya tidak berubah / His weight remains unchanged"
      },
      {
        "id": "D",
        "teks": "Beratnya menjadi sifar / His weight becomes zero"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q34",
    "sumber": "Percubaan Terengganu 2021",
    "tahun": 2021,
    "noSoalanAsal": 34,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara graf berikut yang manakah menunjukkan perubahan pecutan disebabkan oleh graviti Bumi, g' dengan jarak dari pusat Bumi, r di mana g adalah pecutan graviti di permukaan Bumi?\nWhich of the following graphs shows the change in acceleration due to the Earth's gravity, g' with the distance from the Earth's center, r where g is the gravitational acceleration at the Earth's surface?\n(Terengganu: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q34_opt_a.webp?v=20260924_v3\" alt=\"Graf Pilihan A\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q34_opt_b.webp?v=20260924_v3\" alt=\"Graf Pilihan B\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q34_opt_c.webp?v=20260924_v3\" alt=\"Graf Pilihan C\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q34_opt_d.webp?v=20260924_v3\" alt=\"Graf Pilihan D\" style=\"max-height:100px; display:block; margin:auto;\" />"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q35",
    "sumber": "Percubaan MRSM 2021",
    "tahun": 2021,
    "noSoalanAsal": 35,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Jadual 1 menunjukkan nilai pecutan graviti bagi planet Utarid, Marikh, Uranus dan Neptun.\nTable 1 shows the acceleration value due to gravity for planet Mercury, Mars, Uranus and Neptune.\n(MRSM: 2021)\n\nPlanet | Pecutan graviti, g (m s⁻²)\nUtarid (Mercury) : 3.59\nMarikh (Mars) : 3.77\nUranus (Uranus) : 10.67\nNeptun (Neptune) : 14.07\n\nPlanet manakah yang akan menghasilkan berat terbesar terhadap objek yang sama?\nWhich planet produced the greatest weight on an identical object?",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Neptun / Neptune"
      },
      {
        "id": "B",
        "teks": "Uranus / Uranus"
      },
      {
        "id": "C",
        "teks": "Marikh / Mars"
      },
      {
        "id": "D",
        "teks": "Utarid / Mercury"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q36",
    "sumber": "Percubaan MRSM 2021",
    "tahun": 2021,
    "noSoalanAsal": 36,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 11 menunjukkan satu planet mengorbit Matahari.\nDiagram 11 shows a planet orbiting the Sun.\n(MRSM: 2021)\n\nPernyataan yang manakah betul menerangkan pergerakan planet tersebut dalam orbitnya?\nWhich statement is correct to describe movement of the planet in its orbit?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah11_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Planet itu bergerak pada orbit membulat / The planet moves in circular orbit"
      },
      {
        "id": "B",
        "teks": "Luas sektor PFQ lebih besar berbanding sektor RFS / Sector area PFQ is larger than RFS"
      },
      {
        "id": "C",
        "teks": "Planet itu mengambil masa lebih pendek untuk bergerak pada RS berbanding PQ / The planet takes shorter time to move at RS compared to PQ"
      },
      {
        "id": "D",
        "teks": "Planet itu bergerak pada kelajuan linear yang lebih tinggi pada PQ berbanding RS / The planet moves at higher linear speed at PQ compared to RS"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q37",
    "sumber": "Percubaan MRSM 2021",
    "tahun": 2021,
    "noSoalanAsal": 37,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.3 Mengkonsepsikan halaju lepas, v = sqrt(2GM/r)",
    "spKod": "3.3.3",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 12 menunjukkan sebuah roket dilancarkan bagi melepaskan diri daripada tarikan graviti Bumi.\nDiagram 12 shows a rocket being launched to escape from Earth's gravity.\n(MRSM: 2021)\n\nApakah yang dimaksudkan dengan halaju lepas?\nWhat is meant by escape velocity?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah12_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju minimum yang diperlukan oleh objek untuk mengorbit Bumi / Minimum velocity needed by an object to orbit Earth"
      },
      {
        "id": "B",
        "teks": "Halaju maksimum yang boleh dicapai oleh roket di atmosfera / Maximum velocity that can be achieved by a rocket in atmosphere"
      },
      {
        "id": "C",
        "teks": "Halaju purata roket ketika berlepas dari pelantar / Average velocity of the rocket when launching from platform"
      },
      {
        "id": "D",
        "teks": "Halaju minimum yang diperlukan oleh jasad di permukaan Bumi untuk mengatasi daya graviti dan terlepas ke angkasa lepas / Minimum velocity needed by a body on Earth's surface to overcome gravitational force and escape to outer space"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q38",
    "sumber": "Percubaan Pahang 2021",
    "tahun": 2021,
    "noSoalanAsal": 38,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 13 menunjukkan empat kedudukan bagi sebuah planet yang bergerak mengelilingi Matahari mengikut orbit berbentuk elips.\nDiagram 13 shows four positions of a planet that moves around the Sun in an elliptical orbit.\n(Pahang: 2021)\n\nPada kedudukan manakah A, B, C dan D, halaju planet tersebut adalah maksimum?\nAt which position A, B, C or D, the velocity of the planet is maximum?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah13_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kedudukan A (perihelion) / Position A (perihelion)"
      },
      {
        "id": "B",
        "teks": "Kedudukan B / Position B"
      },
      {
        "id": "C",
        "teks": "Kedudukan C / Position C"
      },
      {
        "id": "D",
        "teks": "Kedudukan D / Position D"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K2_Q39",
    "sumber": "Percubaan Pahang 2021",
    "tahun": 2021,
    "noSoalanAsal": 39,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.3 Mengkonsepsikan halaju lepas, v = sqrt(2GM/r)",
    "spKod": "3.3.3",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Halaju lepas dari permukaan sebuah planet bergantung kepada\nThe escape velocity from the surface of a planet depends on\n(Pahang: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "jejari planet tersebut sahaja / the radius of the planet only"
      },
      {
        "id": "B",
        "teks": "jisim planet tersebut sahaja / the mass of the planet only"
      },
      {
        "id": "C",
        "teks": "jejari dan jisim planet tersebut / the radius and the mass of the planet"
      },
      {
        "id": "D",
        "teks": "kekuatan medan graviti di permukaan planet tersebut sahaja / the gravitational field strength at the surface of the planet only"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K2_Q40",
    "sumber": "Percubaan SBP 2021",
    "tahun": 2021,
    "noSoalanAsal": 40,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 14 menunjukkan sebuah satelit geopegun sedang mengorbit Bumi.\nDiagram 14 shows a geostationary satellite is orbiting the Earth.\n(SBP: 2021)\n\nPernyataan manakah yang betul mengenai satelit tersebut?\nWhich statement is correct about the satellite?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah14_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tempoh orbit satelit adalah melebihi 24 jam / The orbital period of the satellite is more than 24 hours"
      },
      {
        "id": "B",
        "teks": "Tempoh orbit satelit adalah kurang daripada 24 jam / The orbital period of the satellite is shorter than 24 hours"
      },
      {
        "id": "C",
        "teks": "Satelit mempunyai arah gerakan sama dengan arah putaran Bumi / The satellite has direction of motion same as the direction of Earth rotation"
      },
      {
        "id": "D",
        "teks": "Satelit berada di atas lokasi geografi yang berlainan pada masa berlainan / The satellite is above different geographical locations at different times"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K2_Q41",
    "sumber": "Percubaan SBP 2021",
    "tahun": 2021,
    "noSoalanAsal": 41,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara pernyataan berikut, yang manakah menerangkan kesan daya graviti Bulan ke atas Bumi?\nWhich of the following statements explains the effect of the Moon's gravitational pull on Earth?\n(SBP: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Menyebabkan perubahan empat musim di Bumi / Causes the four seasons change on Earth"
      },
      {
        "id": "B",
        "teks": "Menyebabkan siang dan malam di Bumi / Causes day and night on Earth"
      },
      {
        "id": "C",
        "teks": "Menyebabkan medan magnet Bumi terhasil / Causes the Earth's magnetic field to form"
      },
      {
        "id": "D",
        "teks": "Menyebabkan kejadian air pasang dan air surut / Causes the phenomenon of high and low tides"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q42",
    "sumber": "Percubaan Selangor 2021",
    "tahun": 2021,
    "noSoalanAsal": 42,
    "sk": "SK 3.2 Hukum Kepler",
    "sp": "SP 3.2.3 Menyelesaikan masalah menggunakan rumus Hukum Kepler Ketiga",
    "spKod": "3.2.3",
    "rujukanDskp": "DSKP Fizik T4 ms 47-48",
    "rujukanBukuTeks": "Buku Teks T4 ms 89-94",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 24-25",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.2 Hukum Kepler",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Berdasarkan pernyataan berikut pilih pernyataan yang betul tentang Hukum Kepler Ketiga.\nBased on the following statements, choose the correct statement about Kepler's Third Law.\n(Selangor: 2021)\n\nI. Tempoh orbit berkadar terus dengan jejari orbit / Orbital period is directly proportional to orbital radius\nII. Kuasa dua tempoh orbit berkadar terus dengan kuasa tiga jejari orbit / The square of orbital period is directly proportional to the cube of orbital radius\nIII. Nilai T² / r³ adalah malar bagi semua planet yang mengorbit Matahari / The value of T² / r³ is constant for all planets orbiting the Sun",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "I dan II sahaja / I and II only"
      },
      {
        "id": "B",
        "teks": "I dan III sahaja / I and III only"
      },
      {
        "id": "C",
        "teks": "II dan III sahaja / II and III only"
      },
      {
        "id": "D",
        "teks": "I, II dan III / I, II and III"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K2_Q43",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 43,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 15 menunjukkan orbit sebuah roket sepanjang lengkung R apabila ia bergerak dengan laju linear, v.\nDiagram 15 shows the orbit of a rocket along curve R when it moves with linear speed, v.\n(Perlis: 2021)\n\nJika tiba-tiba kelajuannya dikurangkan ke ½ v, mana satu antara P, Q, S dan T akan menjadi orbit baru bagi roket tersebut?\nIf suddenly its speed is reduced to ½ v, which one of P, Q, S and T will become the new orbit for the rocket?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah15_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "P / P"
      },
      {
        "id": "B",
        "teks": "Q / Q"
      },
      {
        "id": "C",
        "teks": "S / S"
      },
      {
        "id": "D",
        "teks": "T / T"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q44",
    "sumber": "Percubaan Perlis 2021",
    "tahun": 2021,
    "noSoalanAsal": 44,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Graf T² melawan r³ bagi sistem planet yang mengelilingi Matahari adalah satu garis lurus melalui asalan. Apakah pemalar bagi kecerunan graf tersebut?\nThe graph of T² against r³ for the system of planets orbiting the Sun is a straight line through the origin. What is the constant for the gradient of the graph?\n(Perlis: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "GM / (4π²) / GM / (4π²)"
      },
      {
        "id": "B",
        "teks": "2π / (GM) / 2π / (GM)"
      },
      {
        "id": "C",
        "teks": "4π² / (GM) / 4π² / (GM)"
      },
      {
        "id": "D",
        "teks": "4π / (GM) / 4π / (GM)"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K2_Q45",
    "sumber": "SPM 2021",
    "tahun": 2021,
    "noSoalanAsal": 45,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.3 Mengkonsepsikan halaju lepas, v = sqrt(2GM/r)",
    "spKod": "3.3.3",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 16 menunjukkan sebuah roket sedang berlepas dari permukaan Bumi.\nDiagram 16 shows a rocket is taking off from the surface of the Earth.\n(SPM: 2021)\n\nApakah faktor yang mempengaruhi halaju lepas roket tersebut dari permukaan Bumi?\nWhat factor affects the escape velocity of the rocket from the Earth's surface?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah16_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jisim roket / Mass of the rocket"
      },
      {
        "id": "B",
        "teks": "Daya tujah enjin roket / Thrust force of the rocket engine"
      },
      {
        "id": "C",
        "teks": "Jisim Bumi dan jejari Bumi / Mass of the Earth and radius of the Earth"
      },
      {
        "id": "D",
        "teks": "Ketinggian pelantar pelancaran / Height of the launch platform"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K2_Q46",
    "sumber": "SPM 2021",
    "tahun": 2021,
    "noSoalanAsal": 46,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Graf manakah yang menunjukkan hubungan yang betul antara pecutan, g dengan jarak, r dari pusat Bumi?\nWhich graph shows the correct relationship between gravitational acceleration, g to the distance, r from the centre of the Earth?\n(SPM: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q46_opt_a.webp?v=20260924_v3\" alt=\"Graf Pilihan A\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "B",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q46_opt_b.webp?v=20260924_v3\" alt=\"Graf Pilihan B\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "C",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q46_opt_c.webp?v=20260924_v3\" alt=\"Graf Pilihan C\" style=\"max-height:100px; display:block; margin:auto;\" />"
      },
      {
        "id": "D",
        "teks": "<img src=\"https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k2_q46_opt_d.webp?v=20260924_v3\" alt=\"Graf Pilihan D\" style=\"max-height:100px; display:block; margin:auto;\" />"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q47",
    "sumber": "Percubaan Kelantan 2022",
    "tahun": 2022,
    "noSoalanAsal": 47,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara yang berikut, yang manakah ciri-ciri satelit bukan geopegun?\nWhich of the following are the characteristics of a non-geostationary satellite?\n(Kelantan: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Tempoh orbit tepat 24 jam / Orbital period is exactly 24 hours"
      },
      {
        "id": "B",
        "teks": "Tempoh orbit boleh lebih atau kurang daripada 24 jam / Orbital period can be longer or shorter than 24 hours"
      },
      {
        "id": "C",
        "teks": "Sentiasa berada di atas kedudukan geografi yang sama / Always above the same geographical location"
      },
      {
        "id": "D",
        "teks": "Arah gerakan mesti mengikut arah putaran Bumi / Direction of motion must follow the direction of Earth's rotation"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q48",
    "sumber": "Percubaan Kelantan 2022",
    "tahun": 2022,
    "noSoalanAsal": 48,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Sebuah satelit mengorbit mengelilingi Bumi dalam orbit membulat. Apakah daya yang bertindak sebagai daya memusat yang mengekalkan satelit tersebut dalam orbitnya?\nA satellite orbits the Earth in a circular orbit. What force acts as the centripetal force that keeps the satellite in its orbit?\n(Kelantan: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya magnetik Bumi / Earth's magnetic force"
      },
      {
        "id": "B",
        "teks": "Daya tujah roket / Rocket thrust force"
      },
      {
        "id": "C",
        "teks": "Daya tarikan graviti antara Bumi dan satelit / Gravitational attraction force between Earth and satellite"
      },
      {
        "id": "D",
        "teks": "Daya emparan satelit / Centrifugal force of satellite"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K2_Q49",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 49,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.2 Berkomunikasi untuk menerangkan satelit geopegun dan bukan geopegun",
    "spKod": "3.3.2",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Antara berikut yang manakah menerangkan perbezaan utama antara satelit geopegun dan satelit bukan geopegun?\nWhich of the following explains the main difference between a geostationary satellite and a non-geostationary satellite?\n(Pahang: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "Satelit geopegun bergerak lebih laju daripada satelit bukan geopegun / Geostationary satellite moves faster than non-geostationary satellite"
      },
      {
        "id": "B",
        "teks": "Satelit bukan geopegun tidak mengalami daya graviti / Non-geostationary satellite does not experience gravitational force"
      },
      {
        "id": "C",
        "teks": "Satelit geopegun berada lebih dekat dengan permukaan Bumi / Geostationary satellite is closer to Earth's surface"
      },
      {
        "id": "D",
        "teks": "Satelit geopegun mempunyai tempoh orbit 24 jam dan pegun relatif kepada satu titik di Bumi / Geostationary satellite has an orbital period of 24 hours and is stationary relative to a point on Earth"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K2_Q50",
    "sumber": "Percubaan Melaka 2021",
    "tahun": 2021,
    "noSoalanAsal": 50,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Daya graviti Bumi terhadap Bulan ialah 2.0 × 10²⁰ N. Berapakah magnitud daya graviti Bulan terhadap Bumi?\nThe gravitational force of Earth on the Moon is 2.0 × 10²⁰ N. What is the magnitude of the gravitational force of the Moon on the Earth?\n(Melaka: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "0 N / 0 N"
      },
      {
        "id": "B",
        "teks": "2.0 × 10²⁰ N / 2.0 × 10²⁰ N"
      },
      {
        "id": "C",
        "teks": "1.0 × 10²⁰ N / 1.0 × 10²⁰ N"
      },
      {
        "id": "D",
        "teks": "4.0 × 10²⁰ N / 4.0 × 10²⁰ N"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K2_Q51",
    "sumber": "SPM 2023",
    "tahun": 2023,
    "noSoalanAsal": 51,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Sederhana",
    "konstruk": "Memahami",
    "soalan": "Rajah 17 menunjukkan sebuah roket dilancarkan dengan halaju tinggi dan mengatasi daya graviti Bumi.\nDiagram 17 shows a rocket launched with high velocity and overcome the Earth's gravitational force.\n(SPM: 2023)\n\nAntara pernyataan berikut, yang manakah betul?\nWhich of the following statements is correct?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah17_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Halaju roket ≥ halaju lepas / Velocity of the rocket ≥ escape velocity"
      },
      {
        "id": "B",
        "teks": "Halaju roket = laju linear / Velocity of the rocket = linear speed"
      },
      {
        "id": "C",
        "teks": "Halaju roket < halaju lepas / Velocity of the rocket < escape velocity"
      },
      {
        "id": "D",
        "teks": "Halaju roket < laju linear / Velocity of the rocket < linear speed"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q01",
    "sumber": "Percubaan Kelantan 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.4 Menyelesaikan masalah yang melibatkan halaju lepas",
    "spKod": "3.3.4",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Berapakah halaju lepas untuk sebuah roket bergerak ke angkasa lepas?\n[Diberi; Jisim Bumi, M = 5.97 × 10²⁴ kg, Pemalar Kegravitian Semesta, G = 6.67 × 10⁻¹¹ N m² kg⁻², Jejari Bumi, R = 6.37 × 10⁶ m]\nWhat is the escape velocity for a rocket to move to outer space?\n[Given; Mass of Earth, M = 5.97 × 10²⁴ kg, Universal Gravitational Constant, G = 6.67 × 10⁻¹¹ N m² kg⁻², Radius of Earth, R = 6.37 × 10⁶ m]\n(Kelantan: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "2.03 × 10⁶ m s⁻¹ / 2.03 × 10⁶ m s⁻¹"
      },
      {
        "id": "B",
        "teks": "7.91 × 10³ m s⁻¹ / 7.91 × 10³ m s⁻¹"
      },
      {
        "id": "C",
        "teks": "1.12 × 10⁴ m s⁻¹ / 1.12 × 10⁴ m s⁻¹"
      },
      {
        "id": "D",
        "teks": "1.25 × 10⁴ m s⁻¹ / 1.25 × 10⁴ m s⁻¹"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "v = sqrt(2GM / r) = sqrt(2(6.67e-11)(5.97e24) / (6.37e6)) = 11 181.38 m/s ≈ 1.12 x 10^4 m s⁻¹",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K3_Q02",
    "sumber": "Percubaan Melaka 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebuah satelit buatan manusia mengorbit mengelilingi Bumi pada ketinggian 1720 km. Berapakah laju linear satelit itu?\n[Jisim Bumi = 5.97 × 10²⁴ kg, Jejari Bumi = 6.37 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nA man-made satellite orbits around the Earth at a height of 1720 km. What is the linear speed of the satellite?\n[Mass of the Earth = 5.97 × 10²⁴ kg, Radius of the Earth = 6.37 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n(Melaka: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "7.02 × 10³ m s⁻¹ / 7.02 × 10³ m s⁻¹"
      },
      {
        "id": "B",
        "teks": "7.22 × 10³ m s⁻¹ / 7.22 × 10³ m s⁻¹"
      },
      {
        "id": "C",
        "teks": "8.02 × 10³ m s⁻¹ / 8.02 × 10³ m s⁻¹"
      },
      {
        "id": "D",
        "teks": "9.92 × 10³ m s⁻¹ / 9.92 × 10³ m s⁻¹"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "v = sqrt(GM / (r + h)) = sqrt((6.67e-11)(5.97e24) / ((6.37e6) + (1720e3))) = 7016.66 m/s ≈ 7.02 x 10^3 m s⁻¹",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q03",
    "sumber": "Percubaan Negeri Sembilan 2023",
    "tahun": 2023,
    "noSoalanAsal": 3,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Bumi mempunyai tempoh orbit 365 hari dan jarak puratanya dari Matahari adalah 1.495 × 10⁸ km. Jarak purata planet Marikh dari Matahari ialah 2.28 × 10⁸ km. Kirakan tempoh orbit Marikh dalam hari di Bumi.\nEarth has an orbital period of 365 days and its mean distance from the Sun is 1.495 × 10⁸ km. The planet Mars' mean distance from the Sun is 2.28 × 10⁸ km. Calculate Mars' orbital period in Earth days.\n(Negeri Sembilan: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "6.87 × 10² hari / 6.87 × 10² days"
      },
      {
        "id": "B",
        "teks": "5.64 × 10² hari / 5.64 × 10² days"
      },
      {
        "id": "C",
        "teks": "4.72 × 10² hari / 4.72 × 10² days"
      },
      {
        "id": "D",
        "teks": "1.29 × 10² hari / 1.29 × 10² days"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "T1²/r1³ = T2²/r2³ => 365² / (1.495e11)³ = T² / (2.28e11)³ => T = 687.44 hari ≈ 6.87 x 10² hari",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q04",
    "sumber": "Percubaan Pahang 2023",
    "tahun": 2023,
    "noSoalanAsal": 4,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 18 menunjukkan satelit penyelidikan mengorbit pada ketinggian 420 km untuk melihat pengimejan sebuah pulau di tengah laut.\n[Jejari orbit Bulan = 3.83 × 10⁸ m, jejari Bumi = 6.37 × 10⁶ m, tempoh orbit Bulan = 655.2 jam]\nDiagram 18 shows the research satellite orbits at an altitude of 420 km to see the imaging of an island in the middle of the ocean.\n[Radius of the orbit of the Moon = 3.83 × 10⁸ m, radius of the Earth = 6.37 × 10⁶ m, orbital period of the Moon = 655.2 hours]\n(Pahang: 2023)\n\nBerapakah tempoh orbit satelit itu?\nWhat is the period of the satellite's orbit?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah18_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "0.0604 jam / 0.0604 hours"
      },
      {
        "id": "B",
        "teks": "1.5466 jam / 1.5466 hours"
      },
      {
        "id": "C",
        "teks": "2.3920 jam / 2.3920 hours"
      },
      {
        "id": "D",
        "teks": "3.6508 jam / 3.6508 hours"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "T1²/r1³ = T2²/(r2+h)³ => 655.2² / (3.83e8)³ = T² / (420e3 + 6.37e6)³ => T = 1.55 jam",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K3_Q05",
    "sumber": "Percubaan Pulau Pinang 2023",
    "tahun": 2023,
    "noSoalanAsal": 5,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.5 Menentukan jisim Bumi dan Matahari menggunakan rumus Hukum Kegravitian Semesta Newton",
    "spKod": "3.1.5",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 19 menunjukkan Bulan beredar mengelilingi Bumi dalam orbitnya.\nDiagram 19 shows the Moon revolves around the Earth in its orbit.\n(Pulau Pinang: 2023)\n\nTentukan daya graviti yang dikenakan oleh Bumi terhadap Bulan.\n[Jisim Bumi = 5.97 × 10²⁴ kg, Jisim Bulan = 7.35 × 10²² kg, Jarak di antara pusat Bumi ke pusat Bulan = 3.83 × 10⁸ m dan G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nDetermine the gravitational force exerted by Earth on the Moon.\n[Mass of the Earth = 5.97 × 10²⁴ kg, Mass of the Moon = 7.35 × 10²² kg, Distance between center of the Earth to the center of the Moon = 3.83 × 10⁸ m and G = 6.67 × 10⁻¹¹ N m² kg⁻²]",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah19_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "2.00 × 10¹⁷ N / 2.00 × 10¹⁷ N"
      },
      {
        "id": "B",
        "teks": "2.00 × 10²⁰ N / 2.00 × 10²⁰ N"
      },
      {
        "id": "C",
        "teks": "7.65 × 10²⁵ N / 7.65 × 10²⁵ N"
      },
      {
        "id": "D",
        "teks": "7.65 × 10²⁸ N / 7.65 × 10²⁸ N"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "F = Gm1m2 / r² = (6.67e-11)(5.97e24)(7.35e22) / (3.8e8)² = 2.03 x 10²⁰ N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K3_Q06",
    "sumber": "Percubaan Perak 2023",
    "tahun": 2023,
    "noSoalanAsal": 6,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Tempoh orbit Bumi dan Musytari ialah 1.0 tahun dan 11.9 tahun masing-masing. Jika jejari orbit Bumi ialah 1.50 × 10¹¹ m, hitung jejari orbit Musytari.\nThe orbital periods of the Earth and Jupiter are 1.0 year and 11.9 years respectively. If the orbital radius of the Earth is 1.50 × 10¹¹ m, calculate the orbital radius of Jupiter.\n(Perak: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "2.88 × 10¹¹ m / 2.88 × 10¹¹ m"
      },
      {
        "id": "B",
        "teks": "7.82 × 10¹¹ m / 7.82 × 10¹¹ m"
      },
      {
        "id": "C",
        "teks": "1.79 × 10¹² m / 1.79 × 10¹² m"
      },
      {
        "id": "D",
        "teks": "6.16 × 10¹² m / 6.16 × 10¹² m"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "T1²/r1³ = T2²/(r2+h)³ => 1² / (1.50e11)³ = 11.9² / r³ => r = 7.82 x 10¹¹ m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K3_Q07",
    "sumber": "Percubaan Perlis 2023",
    "tahun": 2023,
    "noSoalanAsal": 7,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebuah satelit sedang mengorbit Bumi. Daya graviti yang bertindak pada satelit itu ialah F_G dan daya memusat untuk mengekalkan satelit dalam orbit ialah F_c. Rajah yang manakah menunjukkan daya-daya yang bertindak pada satelit itu?\nA satellite is orbiting the Earth. The gravitational force acting on the satellite is F_G and the centripetal force for keeping the satellite in orbit is F_c. Which diagram shows the forces acting on the orbiting satellite?\n(Perlis: 2023)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "<img src='https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k3_q07_opt_a_v2.webp' alt='Pilihan A' class='h-28 mx-auto my-1 object-contain dark:bg-slate-800 p-1 rounded'>"
      },
      {
        "id": "B",
        "teks": "<img src='https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k3_q07_opt_b_v2.webp' alt='Pilihan B' class='h-28 mx-auto my-1 object-contain dark:bg-slate-800 p-1 rounded'>"
      },
      {
        "id": "C",
        "teks": "<img src='https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k3_q07_opt_c_v2.webp' alt='Pilihan C' class='h-28 mx-auto my-1 object-contain dark:bg-slate-800 p-1 rounded'>"
      },
      {
        "id": "D",
        "teks": "<img src='https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_k3_q07_opt_d_v2.webp' alt='Pilihan D' class='h-28 mx-auto my-1 object-contain dark:bg-slate-800 p-1 rounded'>"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Daya graviti bertindak sebagai daya memusat bagi satelit mengorbit Bumi (Fg bertindak ke arah pusat Bumi).",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K3_Q08",
    "sumber": "Percubaan SBP 2023",
    "tahun": 2023,
    "noSoalanAsal": 8,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 20 menunjukkan sebuah satelit berjisim 500 kg mengorbit Bumi pada jarak 380 km daripada permukaan Bumi.\nDiagram 20 shows a satellite of mass 500 kg orbiting Earth at a distance of 380 km from the surface of Earth.\n(SBP: 2023)\n\nDengan menggunakan rumus T² = 4π²r³ / (GM), hitung tempoh orbit bagi satelit itu.\n[Jisim Bumi = 5.97 × 10²⁴ kg, Jejari Bumi = 6.37 × 10³ km, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nBy using formula T² = 4π²r³ / (GM), calculate the orbital period of the satellite.\n[Mass of the Earth = 5.97 × 10²⁴ kg, Radius of the Earth = 6.37 × 10³ km, G = 6.67 × 10⁻¹¹ N m² kg⁻²]",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah20_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "3.049 × 10³ s / 3.049 × 10³ s"
      },
      {
        "id": "B",
        "teks": "2.563 × 10³ s / 2.563 × 10³ s"
      },
      {
        "id": "C",
        "teks": "5.522 × 10³ s / 5.522 × 10³ s"
      },
      {
        "id": "D",
        "teks": "5.062 × 10³ s / 5.062 × 10³ s"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "T² = 4π²r³ / GM = 4π²(r + h)³ / GM => T = 5521.86 s ≈ 5.52 x 10³ s",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K3_Q09",
    "sumber": "Percubaan SMKA 2023",
    "tahun": 2023,
    "noSoalanAsal": 9,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.5 Menentukan jisim Bumi dan Matahari menggunakan rumus Hukum Kegravitian Semesta Newton",
    "spKod": "3.1.5",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 21 menunjukkan Bulan berputar mengelilingi Bumi. Daya yang menarik Bulan ke Bumi ialah 2.01 × 10²⁰ N.\n[Diberi jisim Bumi ialah 5.97 × 10²⁴ kg dan jisim Bulan ialah 7.35 × 10²² kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nDiagram 21 shows the Moon revolving around the Earth. The force that pulls the Moon towards the Earth is 2.01 × 10²⁰ N.\n[Given the mass of the Earth is 5.97 × 10²⁴ kg and the mass of the Moon is 7.35 × 10²² kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n(SMKA: 2023)\n\nBerapakah jarak antara Bumi dengan Bulan?\nWhat is the distance between the Earth and the Moon?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah21_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "1.92 × 10⁵ km / 1.92 × 10⁵ km"
      },
      {
        "id": "B",
        "teks": "3.74 × 10⁵ km / 3.74 × 10⁵ km"
      },
      {
        "id": "C",
        "teks": "3.82 × 10⁵ km / 3.82 × 10⁵ km"
      },
      {
        "id": "D",
        "teks": "4.12 × 10⁵ km / 4.12 × 10⁵ km"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "F = Gm1m2 / r² => r² = (6.67e-11)(5.97e24)(7.35e22) / (2.01e20) => r = 3.82 x 10⁵ km",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K3_Q10",
    "sumber": "Percubaan Kedah 2022",
    "tahun": 2022,
    "noSoalanAsal": 10,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Bumi dan Zuhrah mengorbit mengelilingi Matahari. Berapakah tempoh orbit Zuhrah?\n[Jejari orbit Bumi, r_B = 1.50 × 10¹¹ m, tempoh orbit Bumi, T_B = 365 hari, jejari orbit Zuhrah, r_Z = 1.08 × 10¹¹ m]\nThe Earth and Venus orbit around the Sun. What is the orbital period of Venus?\n[Radius of orbit of the Earth, r_E = 1.50 × 10¹¹ m, period of orbit of the Earth, T_E = 365 days, radius of orbit of Venus, r_V = 1.08 × 10¹¹ m]\n(Kedah: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "323 hari / 323 days"
      },
      {
        "id": "B",
        "teks": "322 hari / 322 days"
      },
      {
        "id": "C",
        "teks": "223 hari / 223 days"
      },
      {
        "id": "D",
        "teks": "213 hari / 213 days"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "T1²/r1³ = T2²/r2³ => 365² / (1.50e11)³ = T² / (1.08e11)³ => T = 223 hari",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K3_Q11",
    "sumber": "Percubaan Kelantan 2022",
    "tahun": 2022,
    "noSoalanAsal": 11,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Satelit J mengambil masa 20 minggu untuk mengorbit Bumi. Kedudukan satelit J adalah 4 kali lebih jauh dari Bumi berbanding satelit K. Berapa lamakah tempoh satelit K mengorbit Bumi?\nSatellite J takes 20 weeks to orbit the Earth. The position of satellite J is 4 times further from the Earth than satellite K. How long does satellite K orbit the Earth?\n(Kelantan: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "2 minggu / 2 weeks"
      },
      {
        "id": "B",
        "teks": "2.5 minggu / 2.5 weeks"
      },
      {
        "id": "C",
        "teks": "4 minggu / 4 weeks"
      },
      {
        "id": "D",
        "teks": "4.5 minggu / 4.5 weeks"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "T1²/r1³ = T2²/r2³ => 20² / (4r)³ = T² / r³ => T = 2.5 minggu, TQ = 1.79 minggu",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K3_Q12",
    "sumber": "Percubaan Melaka 2022",
    "tahun": 2022,
    "noSoalanAsal": 12,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Sebuah satelit pengimejan radar mengorbit mengelilingi Bumi pada ketinggian 480 km. Berapakah pecutan graviti di kedudukan satelit itu?\n[G = 6.67 × 10⁻¹¹ N m² kg⁻², M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m]\nA radar imaging satellite orbits around the Earth at a height of 480 km. What is the value of gravitational acceleration at the position of the satellite?\n[G = 6.67 × 10⁻¹¹ N m² kg⁻², M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m]\n(Melaka: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "8.00 m s⁻² / 8.00 m s⁻²"
      },
      {
        "id": "B",
        "teks": "8.49 m s⁻² / 8.49 m s⁻²"
      },
      {
        "id": "C",
        "teks": "9.81 m s⁻² / 9.81 m s⁻²"
      },
      {
        "id": "D",
        "teks": "10.0 m s⁻² / 10.0 m s⁻²"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "g = GM / (r + h)² = (6.67e-11)(5.97e24) / (6.37e6 + 480000)² = 8.49 m s⁻²",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K3_Q13",
    "sumber": "Percubaan MRSM 2022",
    "tahun": 2022,
    "noSoalanAsal": 13,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 22 menunjukkan satelit Teleskop Angkasa Hubble berjisim 11 000 kg yang mengorbit pada ketinggian 547 km dari permukaan Bumi.\n[Jisim Bumi, M = 5.97 × 10²⁴ kg, Jejari Bumi, R = 6.37 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nDiagram 22 shows the Hubble Space Telescope satellite with mass of 11 000 kg orbits at a height of 547 km above the Earth's surface.\n[Mass of the Earth, M = 5.97 × 10²⁴ kg, Radius of the Earth, R = 6.37 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n(MRSM: 2022)\n\nBerapakah daya graviti satelit tersebut?\nWhat is the gravitational force of the satellite?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah22_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "9.155 × 10⁴ N / 9.155 × 10⁴ N"
      },
      {
        "id": "B",
        "teks": "1.079 × 10⁵ N / 1.079 × 10⁵ N"
      },
      {
        "id": "C",
        "teks": "1.464 × 10⁵ N / 1.464 × 10⁵ N"
      },
      {
        "id": "D",
        "teks": "6.332 × 10¹¹ N / 6.332 × 10¹¹ N"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "F = Gm1m2 / (r + h)² = (6.67e-11)(5.97e24)(11000) / (6.37e6 + 547000)² = 9.16 x 10⁵ N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q14",
    "sumber": "Percubaan Pahang 2022",
    "tahun": 2022,
    "noSoalanAsal": 14,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Seorang angkasawan memakai sut angkasawan semasa meneroka di Bulan seperti dalam Rajah 23. Jisim sut angkasawan di Bumi ialah 60.25 kg.\nAn astronaut wears an astronaut suit while exploring on the Moon as in Diagram 23. The mass of the astronaut suit on the Earth is 60.25 kg.\n(Pahang: 2022)\n\nKira berat sut angkasawan di Bulan jika kekuatan medan graviti di Bulan ialah 1/6 daripada kekuatan medan graviti Bumi.\n[Pecutan graviti Bumi = 9.81 N kg⁻¹]\nCalculate the weight of the astronaut suit on the Moon if the strength of the gravitational field on the Moon is 1/6 of the strength of Earth's gravitational field.\n[Gravitational acceleration of Earth = 9.81 N kg⁻¹]",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah23_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "98.05 N / 98.05 N"
      },
      {
        "id": "B",
        "teks": "98.10 N / 98.10 N"
      },
      {
        "id": "C",
        "teks": "98.40 N / 98.40 N"
      },
      {
        "id": "D",
        "teks": "98.51 N / 98.51 N"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "W = mg = (1/6)(60.25 x 9.81) = 98.51 N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K3_Q15",
    "sumber": "Percubaan Selangor 2022",
    "tahun": 2022,
    "noSoalanAsal": 15,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Hitung jarak antara Musytari dan satelit semula jadinya Callisto, jika daya graviti antara mereka ialah 6.76 × 10²¹ N.\n[Jisim Musytari = 1.99 × 10²⁷ kg, Jisim Callisto = 1.08 × 10²³ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nCalculate the distance between Jupiter and its natural satellite Callisto, if the gravitational force between them is 6.76 × 10²¹ N.\n[Mass of Jupiter = 1.99 × 10²⁷ kg, Mass of Callisto = 1.08 × 10²³ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n(Selangor: Set 1: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "1.46 × 10⁹ m / 1.46 × 10⁹ m"
      },
      {
        "id": "B",
        "teks": "2.12 × 10⁹ m / 2.12 × 10⁹ m"
      },
      {
        "id": "C",
        "teks": "1.46 × 10¹¹ m / 1.46 × 10¹¹ m"
      },
      {
        "id": "D",
        "teks": "2.12 × 10¹¹ m / 2.12 × 10¹¹ m"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "F = Gm1m2 / r² => r² = (6.67e-11)(5.97e24)(1.08e23) / (6.76e21) => r = 1.46 x 10⁹ m",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q16",
    "sumber": "Percubaan Selangor 2022",
    "tahun": 2022,
    "noSoalanAsal": 16,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.5 Menentukan jisim Bumi dan Matahari menggunakan rumus Hukum Kegravitian Semesta Newton",
    "spKod": "3.1.5",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 24 menunjukkan sebuah objek berjisim 3 kg dilontar 5 m ke atas dari permukaan Bumi.\nDiagram 24 shows an object of mass 3 kg is thrown 5 m upward from the surface of the Earth.\n(Selangor: Set 2: 2022)\n\nHitung daya graviti yang dikenakan pada Bumi oleh objek itu.\n[Jejari Bumi = 6.37 × 10⁶ m, Jisim Bumi = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nCalculate the gravitational force exerted on the Earth by the object.\n[Radius of the Earth = 6.37 × 10⁶ m, Mass of the Earth = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah24_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "29.43 N / 29.43 N"
      },
      {
        "id": "B",
        "teks": "35.18 N / 35.18 N"
      },
      {
        "id": "C",
        "teks": "30.20 × 10¹² N / 30.20 × 10¹² N"
      },
      {
        "id": "D",
        "teks": "47.34 × 10¹² N / 47.34 × 10¹² N"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "F = Gm1m2 / (r + h)² = (6.67e-11)(5.97e24)(3) / (6.37e6 + 5)² = 29.44 N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q17",
    "sumber": "Percubaan Selangor 2022",
    "tahun": 2022,
    "noSoalanAsal": 17,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Jejari orbit membulat dua satelit Bumi, A dan B masing-masing ialah 4R dan R. Jika kelajuan satelit A ialah 3v, berapakah kelajuan satelit B?\nThe radius of circular orbits of two satellites A and B of the Earth are 4R and R, respectively. If the speed of satellite A is 3v, what is the speed of satellite B?\n(Selangor: Set 2: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "3/4 v / 3/4 v"
      },
      {
        "id": "B",
        "teks": "3/2 v / 3/2 v"
      },
      {
        "id": "C",
        "teks": "6v / 6v"
      },
      {
        "id": "D",
        "teks": "12v / 12v"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "v = sqrt(GM / R) => vA / vB = sqrt(R_B / R_A) = sqrt(R / 4R) = 1/2 => vB = 2 vA = 6 V",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K3_Q18",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 18,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Satelit P adalah 5 kali lebih jauh dari planet berbanding satelit Q. Apabila satelit P mengambil masa 20 minggu untuk mengorbit planet tersebut, berapa lamakah masa untuk satelit Q mengorbit planet itu?\nSatellite P is 5 times farther from a planet than satellite Q. When the satellite P takes 20 weeks to complete a full orbit around the planet, how long will satellite Q take to travel around the planet once?\n(Terengganu: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "1.79 minggu / 1.79 weeks"
      },
      {
        "id": "B",
        "teks": "2.5 minggu / 2.5 weeks"
      },
      {
        "id": "C",
        "teks": "3.2 minggu / 3.2 weeks"
      },
      {
        "id": "D",
        "teks": "4.5 minggu / 4.5 weeks"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "T² ∝ r³ => rP = 5 rQ",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q19",
    "sumber": "Percubaan Terengganu 2022",
    "tahun": 2022,
    "noSoalanAsal": 19,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Berapakah laju linear orbit satelit mengelilingi Bumi pada jarak orbit 6.5 × 10⁶ m?\n[G = 6.67 × 10⁻¹¹ N m² kg⁻², Jisim Bumi = 6.0 × 10²⁴ kg]\nWhat is the linear orbital speed of a satellite revolving around Earth at an orbital distance of 6.5 × 10⁶ m?\n[G = 6.67 × 10⁻¹¹ N m² kg⁻², Mass of Earth = 6.0 × 10²⁴ kg]\n(Terengganu: 2022)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "1 174 m s⁻¹ / 1 174 m s⁻¹"
      },
      {
        "id": "B",
        "teks": "7 864 m s⁻¹ / 7 864 m s⁻¹"
      },
      {
        "id": "C",
        "teks": "120 185 m s⁻¹ / 120 185 m s⁻¹"
      },
      {
        "id": "D",
        "teks": "61 842 496 m s⁻¹ / 61 842 496 m s⁻¹"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "v = sqrt(GM / (r + h)) = sqrt((6.67e-11)(6e24) / (6.5e6)) = 7864.61 m s⁻¹",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K3_Q20",
    "sumber": "Percubaan Kedah 2021",
    "tahun": 2021,
    "noSoalanAsal": 20,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.4 Menyelesaikan masalah yang melibatkan halaju lepas",
    "spKod": "3.3.4",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Diberi jejari Bumi ialah R dan halaju lepas di permukaan Bumi ialah 11 km s⁻¹. Berapakah halaju lepas pada ketinggian 0.5R dari permukaan Bumi?\nGiven that the radius of the Earth is R and the escape velocity on the surface of the Earth is 11 km s⁻¹. What is the escape velocity at a height of 0.5R from the surface of the Earth?\n(Kedah: 2021)\n\nPetua / Hint:\nv = √(2GM / r)\nv = halaju lepas / escape velocity\nG = pemalar kegravitian / gravitational constant\nr = jarak dari pusat Bumi / distance from the centre of the Earth\nM = jisim Bumi / mass of Earth",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "9.0 km s⁻¹ / 9.0 km s⁻¹"
      },
      {
        "id": "B",
        "teks": "8.0 km s⁻¹ / 8.0 km s⁻¹"
      },
      {
        "id": "C",
        "teks": "7.0 km s⁻¹ / 7.0 km s⁻¹"
      },
      {
        "id": "D",
        "teks": "6.0 km s⁻¹ / 6.0 km s⁻¹"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "v = sqrt(2GM / r) => Pada r = 1.5R, v = 11 / sqrt(1.5) = 8.98 km s⁻¹",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q21",
    "sumber": "Percubaan Kelantan 2021",
    "tahun": 2021,
    "noSoalanAsal": 21,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.4 Memerihalkan daya memusat dalam sistem gerakan bumi dan satelit, F = mv^2/r",
    "spKod": "3.1.4",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 25 menunjukkan sebiji bebola besi berjisim 0.2 kg diikat pada hujung tali yang diputarkan secara mengufuk oleh seorang pelajar. Jejari bulatan ialah 0.5 m.\nDiagram 25 shows a metal ball of mass 0.2 kg tied to the end of a string that is spun horizontally by a student. Radius of the circle is 0.5 m.\n(Kelantan: 2021)\n\nJika bebola besi itu berputar dengan kelajuan malar 4 m s⁻¹, hitungkan daya memusat.\nIf the metal ball rotates at constant speed 4 m s⁻¹, calculate the centripetal force.",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah25_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "6.25 N / 6.25 N"
      },
      {
        "id": "B",
        "teks": "6.40 N / 6.40 N"
      },
      {
        "id": "C",
        "teks": "16.00 N / 16.00 N"
      },
      {
        "id": "D",
        "teks": "64.00 N / 64.00 N"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "F = mv² / r = (0.2)(4)² / 0.5 = 6.4 N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K3_Q22",
    "sumber": "Percubaan Terengganu 2021",
    "tahun": 2021,
    "noSoalanAsal": 22,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.4 Menyelesaikan masalah yang melibatkan halaju lepas",
    "spKod": "3.3.4",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Halaju lepas dari Bumi adalah 11.2 km s⁻¹. Planet lain mempunyai jisim 500 kali daripada jisim Bumi dan jejari 20 kali daripada jejari Bumi. Berapakah halaju lepas dari planet itu?\nThe escape velocity from the Earth is 11.2 km s⁻¹. Another planet has a mass 500 times the mass of the Earth and a radius 20 times the radius of the Earth. What is the escape velocity from that planet?\n(Terengganu: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "2.24 km s⁻¹ / 2.24 km s⁻¹"
      },
      {
        "id": "B",
        "teks": "11.2 km s⁻¹ / 11.2 km s⁻¹"
      },
      {
        "id": "C",
        "teks": "55.9 km s⁻¹ / 55.9 km s⁻¹"
      },
      {
        "id": "D",
        "teks": "280 km s⁻¹ / 280 km s⁻¹"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Halaju lepas v = sqrt(2GM / R). Bagi Planet: M_p = 500M, R_p = 20R => v_planet = sqrt(500/20) * v_bumi = 5 * 11.2 = 56.0 km s⁻¹",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K3_Q23",
    "sumber": "Percubaan Selangor 2021",
    "tahun": 2021,
    "noSoalanAsal": 23,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Berat seketul batu di Bumi adalah 19.62 N, berapakah beratnya di Bulan?\nKekuatan medan graviti Bulan adalah 1.64 N kg⁻¹.\nWeight of a stone on Earth is 19.62 N, what is its weight on the Moon?\nThe Moon's gravitational field strength is 1.64 N kg⁻¹.\n(Selangor: Set 1: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "3.28 N / 3.28 N"
      },
      {
        "id": "B",
        "teks": "6.56 N / 6.56 N"
      },
      {
        "id": "C",
        "teks": "17.98 N / 17.98 N"
      },
      {
        "id": "D",
        "teks": "12.08 N / 12.08 N"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "W = mg = (1/6)(19.62) = 3.27 N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q24",
    "sumber": "Percubaan Selangor 2021",
    "tahun": 2021,
    "noSoalanAsal": 24,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Tempoh satelit di orbit bulatan berjejari R adalah T. Tempoh satelit lain dalam orbit bulat berjejari 4R adalah\nThe period of a satellite in a circular orbit of radius R is T. The period of another satellite in circular orbit of radius 4R is\n(Selangor: Set 2: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "8T / 8T"
      },
      {
        "id": "B",
        "teks": "2T / 2T"
      },
      {
        "id": "C",
        "teks": "½T / ½T"
      },
      {
        "id": "D",
        "teks": "4T / 4T"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "T = 2π * sqrt(r³ / GM). Jika r' = 4R => T' = 2π * sqrt((4R)³ / GM) = 8 * (2π * sqrt(R³ / GM)) = 8T",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q25",
    "sumber": "Percubaan Negeri Sembilan 2021",
    "tahun": 2021,
    "noSoalanAsal": 25,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Rajah 26 menunjukkan sebuah satelit sedang mengorbit Bumi pada ketinggian 600 km.\nDiagram 26 shows a satellite orbiting the Earth at a height of 600 km.\n(Negeri Sembilan: 2021)\n\nHitung halaju linear satelit tersebut.\n[Jejari Bumi = 6.37 × 10⁶ m, Jisim Bumi = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\nCalculate the linear velocity of the satellite.\n[Radius of Earth = 6.37 × 10⁶ m, Mass of Earth = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²]",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah26_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "3.822 × 10³ m s⁻¹ / 3.822 × 10³ m s⁻¹"
      },
      {
        "id": "B",
        "teks": "4.968 × 10³ m s⁻¹ / 4.968 × 10³ m s⁻¹"
      },
      {
        "id": "C",
        "teks": "7.559 × 10³ m s⁻¹ / 7.559 × 10³ m s⁻¹"
      },
      {
        "id": "D",
        "teks": "9.799 × 10³ m s⁻¹ / 9.799 × 10³ m s⁻¹"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "v = sqrt(GM / (r + h)) = sqrt((6.67e-11)(6e24) / (6.37e6 + 600000)) = 7.58 x 10³ m s⁻¹",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K3_Q26",
    "sumber": "Percubaan Pahang 2021",
    "tahun": 2021,
    "noSoalanAsal": 26,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.2 Menghubung kait pecutan graviti, g di permukaan bumi dengan pemalar kegravitian semesta, G",
    "spKod": "3.1.2",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Pecutan graviti di permukaan Bumi ialah g dan jejari Bumi ialah R. Pada jarak berapakah pecutan graviti dari permukaan Bumi adalah ¼ g?\nThe gravitational acceleration on the surface of the Earth is g and the radius of the Earth is R. At what distance is the acceleration of gravity from the Earth's surface ¼ g?\n(Pahang: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "R dari permukaan dan 2R dari pusat Bumi / R from the surface and 2R from the centre of the Earth"
      },
      {
        "id": "B",
        "teks": "½R dari permukaan dan 4R dari pusat Bumi / ½R from the surface and 4R from the centre of the Earth"
      },
      {
        "id": "C",
        "teks": "½R dari permukaan dan 2R dari pusat Bumi / ½R from the surface and 2R from the centre of the Earth"
      },
      {
        "id": "D",
        "teks": "¼R dari permukaan dan 4R dari pusat Bumi / ¼R from the surface and 4R from the centre of the Earth"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "g1 = GM / (R + h)² = g / 4 => (R + h)² / R² = 4 => (R + h) / R = 2 => R + h = 2R => h = R",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K3_Q27",
    "sumber": "SPM 2021",
    "tahun": 2021,
    "noSoalanAsal": 27,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.5 Menentukan jisim Bumi dan Matahari menggunakan rumus Hukum Kegravitian Semesta Newton",
    "spKod": "3.1.5",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Mengaplikasi",
    "soalan": "Seorang atlet lompat jauh dengan jisim 54 kg telah mencapai suatu jarak dari tapak berlepas. Apakah daya graviti di antara atlet dengan Bumi?\n[Pemalar kegravitian, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n[Jisim Bumi = 5.97 × 10²⁴ kg]\n[Jarak antara pusat Bumi dan atlet, r = 6.37 × 10⁶ m]\nA long jump athlete with a mass of 54 kg has reached a distance from a take-off point. What is the gravitational force between the athlete and the Earth?\n[Gravitational constant, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n[Mass of Earth = 5.97 × 10²⁴ kg]\n[Distance between center of the Earth and athlete, r = 6.37 × 10⁶ m]\n(SPM: 2021)",
    "rajahUrl": "",
    "pilihan": [
      {
        "id": "A",
        "teks": "3.84 × 10⁻⁷ N / 3.84 × 10⁻⁷ N"
      },
      {
        "id": "B",
        "teks": "2.45 × 10⁻²⁰ N / 2.45 × 10⁻²⁰ N"
      },
      {
        "id": "C",
        "teks": "5.30 × 10² N / 5.30 × 10² N"
      },
      {
        "id": "D",
        "teks": "3.38 × 10⁶ N / 3.38 × 10⁶ N"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "F = Gm1m2 / r² = (6.67e-11)(5.97e24)(54) / (6.37e6)² = 5.30 x 10² N",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K4_Q01",
    "sumber": "Percubaan Melaka 2023",
    "tahun": 2023,
    "noSoalanAsal": 1,
    "sk": "SK 3.2 Hukum Kepler",
    "sp": "SP 3.2.1 Memerihalkan Hukum Kepler I, II dan III",
    "spKod": "3.2.1",
    "rujukanDskp": "DSKP Fizik T4 ms 47-48",
    "rujukanBukuTeks": "Buku Teks T4 ms 89-94",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 24-25",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.2 Hukum Kepler",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 27 menunjukkan ilustrasi Hukum Kepler Kedua. Planet tersebut mengambil masa yang sama untuk bergerak dari A ke B berbanding dari C ke D melalui orbit.\nDiagram 27 shows an illustration of Kepler's Second Law. The planet took the same period to move from A to B as compared to moving from C to D through the orbit.\n(Melaka: 2023)\n\nManakah antara berikut adalah benar?\nWhich of the following is true?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah27_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Luas FAB adalah sama dengan luas FCD / Area of FAB is equal to area of FCD"
      },
      {
        "id": "B",
        "teks": "Luas FAB adalah lebih kecil berbanding luas FCD / Area of FAB is less than area of FCD"
      },
      {
        "id": "C",
        "teks": "Laju purata planet dari A ke B adalah sama dengan laju purata planet dari C ke D / Average speed of planet from A to B is equal to average speed of planet from C to D"
      },
      {
        "id": "D",
        "teks": "Laju purata planet dari A ke B adalah kurang berbanding laju purata planet dari C ke D / Average speed of planet from A to B is less than average speed of planet from C to D"
      }
    ],
    "jawapanBetul": "A",
    "penerangan": "Jawapan yang tepat ialah A.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "A"
  },
  {
    "id": "MODUL_T4_B3_K4_Q02",
    "sumber": "Percubaan SMKA 2023",
    "tahun": 2023,
    "noSoalanAsal": 2,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 28 menunjukkan 3 buah satelit yang serupa P, Q dan R yang berada pada ketinggian berbeza dari permukaan Bumi.\nDiagram 28 shows 3 identical satellites P, Q and R which are located at different heights from the Earth's surface.\n(SMKA: 2023)\n\nManakah menunjukkan perbandingan yang betul?\nWhich shows the correct comparison?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah28_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Daya graviti, F: P > Q > R | Pecutan graviti, g: P < Q < R / Gravitational force, F: P > Q > R | Gravitational acceleration, g: P < Q < R"
      },
      {
        "id": "B",
        "teks": "Daya graviti, F: P < Q > R | Pecutan graviti, g: P < Q > R / Gravitational force, F: P < Q > R | Gravitational acceleration, g: P < Q > R"
      },
      {
        "id": "C",
        "teks": "Daya graviti, F: P < Q < R | Pecutan graviti, g: P > Q > R / Gravitational force, F: P < Q < R | Gravitational acceleration, g: P > Q > R"
      },
      {
        "id": "D",
        "teks": "Daya graviti, F: P > Q < R | Pecutan graviti, g: P > Q < R / Gravitational force, F: P > Q < R | Gravitational acceleration, g: P > Q < R"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K4_Q03",
    "sumber": "Percubaan SMKA 2022",
    "tahun": 2022,
    "noSoalanAsal": 3,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 29 menunjukkan daya graviti, F yang bertindak ke atas dua jasad berjisim m₁ dan m₂ masing-masing.\nDiagram 29 shows gravitational force, F acting on two bodies with mass m₁ and m₂ respectively.\n(SMKA: 2022)\n\nAntara berikut yang manakah menerangkan hubungan antara F, m₁, m₂ dan r?\nWhich of the following explains the relationship between F, m₁, m₂ and r?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah29_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "F berkadar terus dengan m₁m₂ dan F berkadar terus dengan r / F is directly proportional to m₁m₂ and F is directly proportional to r"
      },
      {
        "id": "B",
        "teks": "F berkadar terus dengan m₁m₂ dan F berkadar songsang dengan r² / F is directly proportional to m₁m₂ and F is inversely proportional to r²"
      },
      {
        "id": "C",
        "teks": "F berkadar songsang dengan m₁m₂ dan F berkadar terus dengan r / F is inversely proportional to m₁m₂ and F is directly proportional to r"
      },
      {
        "id": "D",
        "teks": "F berkadar songsang dengan m₁m₂ dan F berkadar songsang dengan r² / F is inversely proportional to m₁m₂ and F is inversely proportional to r²"
      }
    ],
    "jawapanBetul": "B",
    "penerangan": "Jawapan yang tepat ialah B.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "B"
  },
  {
    "id": "MODUL_T4_B3_K4_Q04",
    "sumber": "Percubaan Sarawak 2021",
    "tahun": 2021,
    "noSoalanAsal": 4,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 30 menunjukkan sebahagian planet-planet dalam sistem suria.\nDiagram 30 shows some planets in the solar system.\n(Sarawak: 2021)\n\nDaripada Rajah 30, apakah kesimpulan yang boleh dibuat?\nFrom Diagram 30, what conclusion can be made?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah30_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Jejari orbit berkadar terus dengan tempoh orbit planet / Radius of orbit is directly proportional to orbital period of planets"
      },
      {
        "id": "B",
        "teks": "Kuasa dua jejari orbit berkadar terus dengan kuasa tiga tempoh orbit planet / The square of radius of orbit is directly proportional to the cube of orbital period of planets"
      },
      {
        "id": "C",
        "teks": "Semakin besar saiz planet, semakin bertambah tempoh orbit / The greater the size of planet, the greater the period of orbit"
      },
      {
        "id": "D",
        "teks": "Kuasa tiga jejari orbit berkadar terus dengan kuasa dua tempoh orbit planet / The cube of radius of orbit is directly proportional to the square of orbital period of planets"
      }
    ],
    "jawapanBetul": "D",
    "penerangan": "Jawapan yang tepat ialah D.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "D"
  },
  {
    "id": "MODUL_T4_B3_K4_Q05",
    "sumber": "Percubaan Selangor 2021",
    "tahun": 2021,
    "noSoalanAsal": 5,
    "sk": "SK 3.3 Satelit Buatan Manusia",
    "sp": "SP 3.3.1 Menerangkan orbit satelit dan laju linear satelit, v = sqrt(GM/r)",
    "spKod": "3.3.1",
    "rujukanDskp": "DSKP Fizik T4 ms 49-50",
    "rujukanBukuTeks": "Buku Teks T4 ms 95-103",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 26-28",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.3 Satelit Buatan Manusia",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 31 menunjukkan dua satelit, M dan N dalam orbit yang berlainan mengelilingi Bumi. Orbit N terletak lebih jauh dari Bumi berbanding orbit M.\nDiagram 31 shows two satellites, M and N, in different orbits around the Earth. The orbit of N is located further from the Earth than the orbit of M.\n(Selangor: Set 1: 2021)\n\nAntara perbandingan berikut, yang manakah betul?\nWhich of the following comparisons is true?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah31_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Pecutan graviti pada N > Pecutan graviti pada M / Gravitational acceleration on N > Gravitational acceleration on M"
      },
      {
        "id": "B",
        "teks": "Daya memusat pada N > Daya memusat pada M / Centripetal force on N > Centripetal force on M"
      },
      {
        "id": "C",
        "teks": "Tempoh orbit N > Tempoh orbit M / Orbital period of N > Orbital period of M"
      },
      {
        "id": "D",
        "teks": "Halaju mengorbit bagi N > Halaju mengorbit bagi M / Orbiting velocity of N > Orbiting velocity of M"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  },
  {
    "id": "MODUL_T4_B3_K4_Q06",
    "sumber": "SPM 2021",
    "tahun": 2021,
    "noSoalanAsal": 6,
    "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
    "sp": "SP 3.1.1 Menerangkan Hukum Kegravitian Semesta Newton, F = G(m1m2)/r^2",
    "spKod": "3.1.1",
    "rujukanDskp": "DSKP Fizik T4 ms 44-46",
    "rujukanBukuTeks": "Buku Teks T4 ms 78-88",
    "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 21-23",
    "kertas": 1,
    "tingkatan": 4,
    "babNo": 3,
    "babNama": "Kegravitian",
    "bidang": "Mekanik Newton",
    "topik": "3.1 Hukum Kegravitian Semesta Newton",
    "aras": "Tinggi",
    "konstruk": "Menganalisis",
    "soalan": "Rajah 32 menunjukkan sebuah lastik berbentuk-Y yang digunakan oleh seorang murid dalam suatu eksperimen untuk menentukan nilai v² bagi jisim batu yang berbeza, m. Hubungan pemboleh ubah dalam eksperimen ini diberi oleh:\nFD = mv²\nDengan keadaan m = jisim, v = halaju batu, F = daya tarikan dan D = jarak regangan.\nDiagram 32 shows a Y-shaped slingshot used by a student in an experiment to determine the value of v² of different masses of stones, m. The relationship of the variables in this experiment is given by:\nFD = mv²\nSuch that m = mass, v = velocity of stone, F = force of attraction and D = extension distance.\n(SPM: 2021)\n\nPernyataan manakah yang betul mengenai eksperimen ini?\nWhich statement is correct about this experiment?",
    "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/assets/diagrams/modul_konstruk_t4/b3/t4_b3_rajah32_v2.webp",
    "pilihan": [
      {
        "id": "A",
        "teks": "Kecerunan graf v² melawan 1/m bersamaan dengan nilai FD / The gradient of graph v² against 1/m is equal to the value of FD"
      },
      {
        "id": "B",
        "teks": "Halaju batu meningkat apabila jisim batu meningkat / The velocity of stone increases as the mass of the stone increases"
      },
      {
        "id": "C",
        "teks": "Hasil darab F dan D sentiasa dimalarkan bagi jisim batu yang berbeza / The product of F and D is always kept constant for different masses of stones"
      },
      {
        "id": "D",
        "teks": "Apabila F bertambah, D bertambah / As F increases, D increases"
      }
    ],
    "jawapanBetul": "C",
    "penerangan": "Jawapan yang tepat ialah C.",
    "markah": 1,
    "statusSemakan": "Disemak (Modul K1)",
    "jawapan": "C"
  }
];

/**
 * MODUL ANALITIK PRESTASI & STATISTIK PAPER
 * Data sengaja ringkas — auto-dijana daripada QUESTION_BANK & AppState pada runtime
 */
const ANALYTICS_DASHBOARD_CONFIG = {
  // Rentak yang ditunjukkan pada graf prestasi aras kesukaran
  arasBreakdown: {
    labels: ["Rendah (R)", "Sederhana (S)", "Tinggi (T)"],
    targetRatio: [50, 30, 20],
    colors: ["var(--success)", "var(--accent-yellow-dark)", "var(--primary-purple)"]
  },
  // Rentak konstruk Bloom
  konstrukBreakdown: {
    labels: ["Mengingat", "Memahami", "Mengaplikasi", "Menganalisis"],
    colors: ["#2563EB", "#059669", "#D97706", "#5E17EB"]
  },
  // Rentak tingkatan
  tingkatanBreakdown: {
    labels: ["Tingkatan 4", "Tingkatan 5"],
    colors: ["var(--text-light)", "var(--primary-purple)"]
  },
  // Rentak kertas
  kertasBreakdown: {
    labels: ["Kertas 1", "Kertas 2", "Kertas 3"],
    colors: ["var(--primary-purple)", "var(--accent-yellow-dark)", "var(--success)"]
  }
};
