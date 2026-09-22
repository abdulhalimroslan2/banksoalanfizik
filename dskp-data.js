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
  // ==========================================================================
  // --- KOLEKSI SOALAN SEBENAR SPM (TRANSCRIBED DARI DOKUMEN PDF RASMI) ---
  // ==========================================================================
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

  // ==========================================================================
  // --- KOLEKSI SOALAN SEBENAR SPM KERTAS 2 (STRUKTUR & ESEI BAHAGIAN A & B) ---
  // ==========================================================================
  // KOLEKSI SOALAN SEBENAR SPM - KERTAS 2 (STRUKTUR & ESEI PENUH)
  // DITRANSKRIP VERBATIM + RAJAH R2 ULTRA-BERSIH + JADUAL REPLIKA SEBIJIK SPM
  // ==========================================================================
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

  // ==========================================================================
  // --- KOLEKSI PERCUBAAN KELANTAN 2026 KERTAS 1 (VERBATIM & SKEMA RASMI) ---
  // ==========================================================================
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
      "sk": "SK 2.2 Inersia",
      "sp": "SP 2.2.1 Menerangkan konsep inersia melalui contoh",
      "spKod": "2.2.1",
      "rujukanDskp": "DSKP Fizik T4 ms 32",
      "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 53-58",
      "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 4",
      "kertas": 1,
      "tingkatan": 4,
      "babNo": 2,
      "babNama": "Daya dan Gerakan I",
      "bidang": "Mekanik Newtonian",
      "topik": "2.2 Inersia",
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
      "sk": "SK 2.7 Daya",
      "sp": "SP 2.7.1 Menyatakan Hukum Gerakan Newton Ketiga",
      "spKod": "2.7.1",
      "rujukanDskp": "DSKP Fizik T4 ms 38",
      "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 70-74",
      "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 5",
      "kertas": 1,
      "tingkatan": 4,
      "babNo": 2,
      "babNama": "Daya dan Gerakan I",
      "bidang": "Mekanik Newtonian",
      "topik": "2.7 Daya",
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
      "sk": "SK 2.6 Impuls dan Daya Impuls",
      "sp": "SP 2.6.2 Menerangkan kesan ikut lajak ke atas magnitud impuls",
      "spKod": "2.6.2",
      "rujukanDskp": "DSKP Fizik T4 ms 36",
      "rujukanBukuTeks": "Buku Teks T4 Bab 2 ms 67-69",
      "rujukanCheatnote": "Cheatnote T4 Bab 2 ms 5",
      "kertas": 1,
      "tingkatan": 4,
      "babNo": 2,
      "babNama": "Daya dan Gerakan I",
      "bidang": "Mekanik Newtonian",
      "topik": "2.6 Impuls dan Daya Impuls",
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
      "sk": "SK 3.1 Hukum Kegravitian Semesta Newton",
      "sp": "SP 3.1.6 Menentukan halaju lepas bagi suatu objek",
      "spKod": "3.1.6",
      "rujukanDskp": "DSKP Fizik T4 ms 44",
      "rujukanBukuTeks": "Buku Teks T4 Bab 3 ms 92-96",
      "rujukanCheatnote": "Cheatnote T4 Bab 3 ms 4",
      "kertas": 1,
      "tingkatan": 4,
      "babNo": 3,
      "babNama": "Kegravitian",
      "bidang": "Mekanik Newtonian",
      "topik": "3.1 Hukum Kegravitian Semesta Newton",
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
      "sk": "SK 4.4 Hukum-hukum Gas",
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
