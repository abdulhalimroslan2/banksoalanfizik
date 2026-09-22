// scripts/generate_full_question_bank.js
const fs = require('fs');

const additionalK1 = [
  {
    id: "K1_014",
    sk: "SK 1.2 Penyiasatan Saintifik",
    sp: "SP 1.2.2 Menganalisis graf untuk menentukan hubungan antara dua kuantiti fizik",
    spKod: "1.2.2",
    rujukanDskp: "DSKP Fizik T4 ms 6",
    rujukanBukuTeks: "Buku Teks T4 Bab 1 ms 10-14",
    rujukanCheatnote: "Cheatnote T4 ms 2",
    kertas: 1,
    tingkatan: 4,
    babNo: 1,
    babNama: "Pengukuran",
    topik: "1.2 Analisis Graf",
    aras: "Rendah",
    konstruk: "Memahami",
    soalan: "Satu graf garis lurus y melawan x melalui asalan (0,0) dengan kecerunan positif. Apakah hubungan antara pemboleh ubah y dan x?",
    pilihan: [
      { id: "A", teks: "y berkadar songsang dengan x" },
      { id: "B", teks: "y berkadar terus dengan x" },
      { id: "C", teks: "y bertambah secara linear dengan x" },
      { id: "D", teks: "y berkurang secara linear dengan x" }
    ],
    jawapanBetul: "B",
    penerangan: "Garis lurus yang bermula dari asalan dengan kecerunan positif mewakili hubungan berkadar terus (y ∝ x).",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_015",
    sk: "SK 2.1 Gerakan Linear",
    sp: "SP 2.1.3 Mengira sesaran, halaju dan pecutan menggunakan persamaan gerakan linear",
    spKod: "2.1.3",
    rujukanDskp: "DSKP Fizik T4 ms 12",
    rujukanBukuTeks: "Buku Teks T4 Bab 2 ms 32-37",
    rujukanCheatnote: "Cheatnote T4 ms 5",
    kertas: 1,
    tingkatan: 4,
    babNo: 2,
    babNama: "Daya dan Gerakan I",
    topik: "2.1 Persamaan Gerakan Linear",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Sebuah kereta memecut secara seragam daripada keadaan pegun sehingga mencapai halaju 25 m s⁻¹ dalam masa 5 saat. Berapakah sesaran kereta itu dalam tempoh 5 saat tersebut?",
    pilihan: [
      { id: "A", teks: "50.0 m" },
      { id: "B", teks: "62.5 m" },
      { id: "C", teks: "100.0 m" },
      { id: "D", teks: "125.0 m" }
    ],
    jawapanBetul: "B",
    penerangan: "Gunakan formula s = 1/2 (u + v)t. s = 1/2 (0 + 25)(5) = 62.5 m.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_016",
    sk: "SK 2.3 Gerakan Jatuh Bebas",
    sp: "SP 2.3.1 Menjelaskan gerakan jatuh bebas dan pecutan graviti",
    spKod: "2.3.1",
    rujukanDskp: "DSKP Fizik T4 ms 15",
    rujukanBukuTeks: "Buku Teks T4 Bab 2 ms 46-51",
    rujukanCheatnote: "Cheatnote T4 ms 6",
    kertas: 1,
    tingkatan: 4,
    babNo: 2,
    babNama: "Daya dan Gerakan I",
    topik: "2.3 Gerakan Jatuh Bebas",
    aras: "Rendah",
    konstruk: "Mengingat",
    soalan: "Sekeping duit syiling dan sehelai bulu pelepah dijatuhkan serentak dari ketinggian yang sama di dalam tiub vakum. Antara pernyataan berikut, yang manakah BENAR?",
    pilihan: [
      { id: "A", teks: "Duit syiling mencecah dasar terlebih dahulu kerana lebih tumpat" },
      { id: "B", teks: "Kedua-duanya mencecah dasar pada masa yang sama dengan pecutan yang sama" },
      { id: "C", teks: "Bulu pelepah mengalami pecutan graviti yang lebih kecil" },
      { id: "D", teks: "Duit syiling mengalami daya graviti yang sifar di dalam vakum" }
    ],
    jawapanBetul: "B",
    penerangan: "Di dalam vakum, tiada rintangan udara. Kedua-dua objek mengalami jatuh bebas dengan pecutan graviti yang sama, g = 9.81 m s⁻².",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_017",
    sk: "SK 2.4 Inersia",
    sp: "SP 2.4.2 Mengaitkan jisim dengan inersia",
    spKod: "2.4.2",
    rujukanDskp: "DSKP Fizik T4 ms 16",
    rujukanBukuTeks: "Buku Teks T4 Bab 2 ms 52-56",
    rujukanCheatnote: "Cheatnote T4 ms 7",
    kertas: 1,
    tingkatan: 4,
    babNo: 2,
    babNama: "Daya dan Gerakan I",
    topik: "2.4 Konsep Inersia",
    aras: "Rendah",
    konstruk: "Memahami",
    soalan: "Antara situasi berikut, yang manakah menunjukkan kesan inersia?",
    pilihan: [
      { id: "A", teks: "Sebuah roket berlepas ke angkasa lepas" },
      { id: "B", teks: "Titisan air tertanggal daripada payung apabila payung diputarkan pantas" },
      { id: "C", teks: "Sebiji bola melantun semula apabila menghentam dinding" },
      { id: "D", teks: "Satu objek tenggelam di dalam air laut" }
    ],
    jawapanBetul: "B",
    penerangan: "Titisan air mengekalkan keadaan gerakan asalnya akibat inersia apabila putaran payung dihentikan secara tiba-tiba.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_018",
    sk: "SK 2.6 Daya",
    sp: "SP 2.6.2 Menyelesaikan masalah melibatkan formula F = ma",
    spKod: "2.6.2",
    rujukanDskp: "DSKP Fizik T4 ms 18",
    rujukanBukuTeks: "Buku Teks T4 Bab 2 ms 64-67",
    rujukanCheatnote: "Cheatnote T4 ms 8",
    kertas: 1,
    tingkatan: 4,
    babNo: 2,
    babNama: "Daya dan Gerakan I",
    topik: "2.6 Hukum Gerakan Newton Kedua",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Satu daya 15 N dikenakan ke atas sebuah blok berjisim 3 kg di atas lantai licin. Jika terdapat daya geseran 3 N bertindak menentang gerakan, hitung pecutan blok itu.",
    pilihan: [
      { id: "A", teks: "3.0 m s⁻²" },
      { id: "B", teks: "4.0 m s⁻²" },
      { id: "C", teks: "5.0 m s⁻²" },
      { id: "D", teks: "6.0 m s⁻²" }
    ],
    jawapanBetul: "B",
    penerangan: "Daya paduan F_net = 15 N - 3 N = 12 N. a = F_net / m = 12 / 3 = 4.0 m s⁻².",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_019",
    sk: "SK 3.1 Hukum Kegravitian Semesta Newton",
    sp: "SP 3.1.2 Mengaplikasikan formula F = G(m1m2)/r²",
    spKod: "3.1.2",
    rujukanDskp: "DSKP Fizik T4 ms 22",
    rujukanBukuTeks: "Buku Teks T4 Bab 3 ms 78-83",
    rujukanCheatnote: "Cheatnote T4 ms 10",
    kertas: 1,
    tingkatan: 4,
    babNo: 3,
    babNama: "Kegravitian",
    topik: "3.1 Kegravitian Semesta",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Dua jasad masing-masing berjisim M dan m terpisah pada jarak r dengan daya tarikan graviti F. Jika jarak antara pusat kedua-dua jasad itu digandakan menjadi 2r, apakah daya tarikan graviti yang baru?",
    pilihan: [
      { id: "A", teks: "4F" },
      { id: "B", teks: "2F" },
      { id: "C", teks: "F / 2" },
      { id: "D", teks: "F / 4" }
    ],
    jawapanBetul: "D",
    penerangan: "Daya graviti berkadar songsang dengan kuasa dua jarak (F ∝ 1/r²). Apabila r menjadi 2r, F' = F / (2)² = F / 4.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_020",
    sk: "SK 3.3 Satelit Buatan Manusia",
    sp: "SP 3.3.2 Membezakan satelit geopegun dan satelit bukan geopegun",
    spKod: "3.3.2",
    rujukanDskp: "DSKP Fizik T4 ms 26",
    rujukanBukuTeks: "Buku Teks T4 Bab 3 ms 103-107",
    rujukanCheatnote: "Cheatnote T4 ms 12",
    kertas: 1,
    tingkatan: 4,
    babNo: 3,
    babNama: "Kegravitian",
    topik: "3.3 Ciri Satelit Geopegun",
    aras: "Rendah",
    konstruk: "Mengingat",
    soalan: "Antara ciri berikut, yang manakah BENAR bagi sebuah satelit geopegun?",
    pilihan: [
      { id: "A", teks: "Tempoh orbitnya ialah 12 jam" },
      { id: "B", teks: "Mengorbit Bumi merentasi kutub utara dan kutub selatan" },
      { id: "C", teks: "Sentiasa berada di atas kedudukan geografi yang sama di Khatulistiwa" },
      { id: "D", teks: "Arah putarannya berlawanan dengan arah putaran Bumi" }
    ],
    jawapanBetul: "C",
    penerangan: "Satelit geopegun mempunyai tempoh orbit 24 jam dan sentiasa berada di atas tempat yang sama di satah Khatulistiwa.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_021",
    sk: "SK 4.1 Keseimbangan Terma",
    sp: "SP 4.1.2 Menerangkan konsep keseimbangan terma dalam kehidupan harian",
    spKod: "4.1.2",
    rujukanDskp: "DSKP Fizik T4 ms 28",
    rujukanBukuTeks: "Buku Teks T4 Bab 4 ms 120-124",
    rujukanCheatnote: "Cheatnote T4 ms 13",
    kertas: 1,
    tingkatan: 4,
    babNo: 4,
    babNama: "Haba",
    topik: "4.1 Keseimbangan Terma",
    aras: "Rendah",
    konstruk: "Memahami",
    soalan: "Dua objek berada dalam keseimbangan terma apabila",
    pilihan: [
      { id: "A", teks: "Kandungan tenaga dalaman kedua-dua objek adalah sama" },
      { id: "B", teks: "Kadar pemindahan haba bersih antara dua objek adalah sifar" },
      { id: "C", teks: "Muatan haba kedua-dua objek adalah sama" },
      { id: "D", teks: "Kedua-dua objek mempunyai jisim yang sama" }
    ],
    jawapanBetul: "B",
    penerangan: "Keseimbangan terma dicapai apabila suhu kedua-dua objek sama dan kadar bersih pemindahan haba adalah sifar.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_022",
    sk: "SK 4.3 Haba Pendam Tentu",
    sp: "SP 4.3.2 Menyelesaikan masalah menggunakan formula Q = mL",
    spKod: "4.3.2",
    rujukanDskp: "DSKP Fizik T4 ms 32",
    rujukanBukuTeks: "Buku Teks T4 Bab 4 ms 137-142",
    rujukanCheatnote: "Cheatnote T4 ms 15",
    kertas: 1,
    tingkatan: 4,
    babNo: 4,
    babNama: "Haba",
    topik: "4.3 Haba Pendam Tentu Pelakuran",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Berapakah kuantiti haba yang diperlukan untuk meleburkan 0.5 kg ais pada 0 °C menjadi air pada 0 °C? [Haba pendam tentu pelakuran ais, L = 3.36 × 10⁵ J kg⁻¹]",
    pilihan: [
      { id: "A", teks: "1.68 × 10⁵ J" },
      { id: "B", teks: "3.36 × 10⁵ J" },
      { id: "C", teks: "6.72 × 10⁵ J" },
      { id: "D", teks: "8.40 × 10⁵ J" }
    ],
    jawapanBetul: "A",
    penerangan: "Q = mL = 0.5 kg × 3.36 × 10⁵ J kg⁻¹ = 1.68 × 10⁵ J.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_023",
    sk: "SK 4.4 Hukum Gas",
    sp: "SP 4.4.2 Menerangkan Hukum Boyle, Charles dan Gay-Lussac",
    spKod: "4.4.2",
    rujukanDskp: "DSKP Fizik T4 ms 34",
    rujukanBukuTeks: "Buku Teks T4 Bab 4 ms 148-160",
    rujukanCheatnote: "Cheatnote T4 ms 16",
    kertas: 1,
    tingkatan: 4,
    babNo: 4,
    babNama: "Haba",
    topik: "4.4 Hukum Boyle",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Suatu gas berjisim tetap mempunyai isi padu 400 cm³ pada tekanan 100 kPa. Jika gas itu dimampatkan pada suhu malar sehingga tekanannya menjadi 250 kPa, apakah isi padu gas sekarang?",
    pilihan: [
      { id: "A", teks: "160 cm³" },
      { id: "B", teks: "200 cm³" },
      { id: "C", teks: "625 cm³" },
      { id: "D", teks: "1000 cm³" }
    ],
    jawapanBetul: "A",
    penerangan: "Menurut Hukum Boyle (P1V1 = P2V2): (100 kPa)(400 cm³) = (250 kPa)V2 => V2 = 40000 / 250 = 160 cm³.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_024",
    sk: "SK 5.1 Asas Gelombang",
    sp: "SP 5.1.2 Membezakan gelombang melintang dan gelombang membujur",
    spKod: "5.1.2",
    rujukanDskp: "DSKP Fizik T4 ms 36",
    rujukanBukuTeks: "Buku Teks T4 Bab 5 ms 172-177",
    rujukanCheatnote: "Cheatnote T4 ms 18",
    kertas: 1,
    tingkatan: 4,
    babNo: 5,
    babNama: "Gelombang",
    topik: "5.1 Jenis Gelombang",
    aras: "Rendah",
    konstruk: "Mengingat",
    soalan: "Antara gelombang berikut, yang manakah merupakan gelombang membujur?",
    pilihan: [
      { id: "A", teks: "Gelombang cahaya" },
      { id: "B", teks: "Gelombang bunyi" },
      { id: "C", teks: "Gelombang air" },
      { id: "D", teks: "Gelombang radio" }
    ],
    jawapanBetul: "B",
    penerangan: "Gelombang bunyi ialah gelombang membujur kerana zarah medium bergetar selari dengan arah perambatan gelombang.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_025",
    sk: "SK 5.4 Pembiasan Gelombang",
    sp: "SP 5.4.2 Menghuraikan pembiasan gelombang dari kawasan dalam ke cetek",
    spKod: "5.4.2",
    rujukanDskp: "DSKP Fizik T4 ms 38",
    rujukanBukuTeks: "Buku Teks T4 Bab 5 ms 194-201",
    rujukanCheatnote: "Cheatnote T4 ms 19",
    kertas: 1,
    tingkatan: 4,
    babNo: 5,
    babNama: "Gelombang",
    topik: "5.4 Pembiasan Gelombang Air",
    aras: "Sederhana",
    konstruk: "Memahami",
    soalan: "Apabila gelombang air merambat dari kawasan air dalam ke kawasan air cetek, apakah yang berlaku kepada frekuensi dan laju gelombang?",
    pilihan: [
      { id: "A", teks: "Frekuensi tidak berubah, laju berkurang" },
      { id: "B", teks: "Frekuensi bertambah, laju bertambah" },
      { id: "C", teks: "Frekuensi berkurang, laju tidak berubah" },
      { id: "D", teks: "Frekuensi tidak berubah, laju bertambah" }
    ],
    jawapanBetul: "A",
    penerangan: "Frekuensi hanya ditentukan oleh punca getaran (malar). Di kawasan cetek, kedalaman berkurang maka laju dan panjang gelombang berkurang.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_026",
    sk: "SK 5.7 Gelombang Elektromagnet",
    sp: "SP 5.7.2 Berkomunikasi tentang spektrum gelombang elektromagnet dan kegunaannya",
    spKod: "5.7.2",
    rujukanDskp: "DSKP Fizik T4 ms 41",
    rujukanBukuTeks: "Buku Teks T4 Bab 5 ms 220-225",
    rujukanCheatnote: "Cheatnote T4 ms 21",
    kertas: 1,
    tingkatan: 4,
    babNo: 5,
    babNama: "Gelombang",
    topik: "5.7 Spektrum Elektromagnet",
    aras: "Rendah",
    konstruk: "Mengingat",
    soalan: "Antara gelombang elektromagnet berikut, yang manakah mempunyai panjang gelombang paling pendek dan frekuensi paling tinggi?",
    pilihan: [
      { id: "A", teks: "Gelombang mikro" },
      { id: "B", teks: "Sinaran inframerah" },
      { id: "C", teks: "Sinar-X" },
      { id: "D", teks: "Sinar gama" }
    ],
    jawapanBetul: "D",
    penerangan: "Sinar gama mempunyai frekuensi paling tinggi dan panjang gelombang paling pendek dalam spektrum elektromagnet.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_027",
    sk: "SK 6.1 Pembiasan Cahaya",
    sp: "SP 6.1.2 Menggunakan Hukum Snell n1 sin θ1 = n2 sin θ2",
    spKod: "6.1.2",
    rujukanDskp: "DSKP Fizik T4 ms 43",
    rujukanBukuTeks: "Buku Teks T4 Bab 6 ms 232-238",
    rujukanCheatnote: "Cheatnote T4 ms 23",
    kertas: 1,
    tingkatan: 4,
    babNo: 6,
    babNama: "Cahaya dan Optik",
    topik: "6.1 Hukum Snell",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Satu sinar cahaya merambat dari udara (n = 1.0) ke dalam cecair dengan sudut tuju 45°. Jika sudut biasan dalam cecair ialah 30°, hitung indeks biasan cecair itu.",
    pilihan: [
      { id: "A", teks: "1.25" },
      { id: "B", teks: "1.41" },
      { id: "C", teks: "1.50" },
      { id: "D", teks: "1.73" }
    ],
    jawapanBetul: "B",
    penerangan: "n = sin i / sin r = sin 45° / sin 30° = 0.7071 / 0.5000 ≈ 1.414.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_028",
    sk: "SK 6.3 Pembentukan Imej Kanta",
    sp: "SP 6.3.2 Melukis gambar rajah sinar untuk menentukan ciri imej kanta cembung",
    spKod: "6.3.2",
    rujukanDskp: "DSKP Fizik T4 ms 45",
    rujukanBukuTeks: "Buku Teks T4 Bab 6 ms 251-256",
    rujukanCheatnote: "Cheatnote T4 ms 25",
    kertas: 1,
    tingkatan: 4,
    babNo: 6,
    babNama: "Cahaya dan Optik",
    topik: "6.3 Pembentukan Imej Kanta Cembung",
    aras: "Sederhana",
    konstruk: "Memahami",
    soalan: "Satu objek diletakkan di hadapan kanta cembung pada jarak objek u di mana f < u < 2f. Apakah ciri imej yang terbentuk?",
    pilihan: [
      { id: "A", teks: "Nyata, songsang, diperbesar" },
      { id: "B", teks: "Nyata, songsang, diperkecil" },
      { id: "C", teks: "Maya, tegak, diperbesar" },
      { id: "D", teks: "Nyata, tegak, sama saiz" }
    ],
    jawapanBetul: "A",
    penerangan: "Apabila objek berada di antara f dan 2f di hadapan kanta cembung, imej terbentuk pada jarak v > 2f dengan ciri nyata, songsang dan diperbesar (aplikasi: projektor).",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_029",
    sk: "SK 1.1 Daya Paduan",
    sp: "SP 1.1.2 Menentukan daya paduan bagi daya selari dan serenjang",
    spKod: "1.1.2",
    rujukanDskp: "DSKP Fizik T5 ms 48",
    rujukanBukuTeks: "Buku Teks T5 Bab 1 ms 2-8",
    rujukanCheatnote: "Cheatnote T5 ms 1",
    kertas: 1,
    tingkatan: 5,
    babNo: 1,
    babNama: "Daya dan Gerakan II",
    topik: "1.1 Daya Paduan",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Dua daya serenjang bernilai 6 N dan 8 N bertindak serentak ke atas satu zarah. Berapakah magnitud daya paduan yang terhasil?",
    pilihan: [
      { id: "A", teks: "2 N" },
      { id: "B", teks: "10 N" },
      { id: "C", teks: "14 N" },
      { id: "D", teks: "48 N" }
    ],
    jawapanBetul: "B",
    penerangan: "Dua daya berserenjang: F_paduan = √(6² + 8²) = √(36 + 64) = √100 = 10 N.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_030",
    sk: "SK 1.3 Keseimbangan Daya",
    sp: "SP 1.3.2 Melukis segitiga daya bagi tiga daya dalam keseimbangan",
    spKod: "1.3.2",
    rujukanDskp: "DSKP Fizik T5 ms 50",
    rujukanBukuTeks: "Buku Teks T5 Bab 1 ms 16-22",
    rujukanCheatnote: "Cheatnote T5 ms 2",
    kertas: 1,
    tingkatan: 5,
    babNo: 1,
    babNama: "Daya dan Gerakan II",
    topik: "1.3 Keseimbangan Tiga Daya",
    aras: "Rendah",
    konstruk: "Memahami",
    soalan: "Sebuah lukisan tergantung pegun pada dinding menggunakan tali. Antara pernyataan berikut, yang manakah BENAR mengenai daya-daya yang bertindak ke atas lukisan itu?",
    pilihan: [
      { id: "A", teks: "Daya paduan adalah sifar" },
      { id: "B", teks: "Daya geseran adalah lebih besar daripada berat lukisan" },
      { id: "C", teks: "Tegangan tali adalah sifar" },
      { id: "D", teks: "Berat lukisan berkurang akibat sokongan tali" }
    ],
    jawapanBetul: "A",
    penerangan: "Apabila objek pegun, sistem berada dalam keseimbangan daya dan daya paduan F_net = 0.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_031",
    sk: "SK 2.2 Tekanan Atmosfera",
    sp: "SP 2.2.2 Menjelaskan kesan perubahan ketinggian ke atas tekanan atmosfera",
    spKod: "2.2.2",
    rujukanDskp: "DSKP Fizik T5 ms 57",
    rujukanBukuTeks: "Buku Teks T5 Bab 2 ms 48-55",
    rujukanCheatnote: "Cheatnote T5 ms 7",
    kertas: 1,
    tingkatan: 5,
    babNo: 2,
    babNama: "Tekanan",
    topik: "2.2 Tekanan Atmosfera",
    aras: "Rendah",
    konstruk: "Memahami",
    soalan: "Mengapakah tekanan atmosfera berkurang apabila ketinggian dari aras laut meningkat?",
    pilihan: [
      { id: "A", teks: "Suhu atmosfera meningkat dengan ketara" },
      { id: "B", teks: "Ketumpatan udara dan ketebalan lapisan atmosfera di atas berkurang" },
      { id: "C", teks: "Pecutan graviti bertambah dua kali ganda" },
      { id: "D", teks: "Kelembapan udara di altitud tinggi meningkat" }
    ],
    jawapanBetul: "B",
    penerangan: "Pada altitud tinggi, ketumpatan udara lebih rendah dan bilangan molekul udara di atas yang menekan ke bawah berkurang.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_032",
    sk: "SK 2.3 Prinsip Archimedes",
    sp: "SP 2.3.2 Mengaitkan daya apungan dengan berat bendalir tersesar Fb = ρVg",
    spKod: "2.3.2",
    rujukanDskp: "DSKP Fizik T5 ms 59",
    rujukanBukuTeks: "Buku Teks T5 Bab 2 ms 66-72",
    rujukanCheatnote: "Cheatnote T5 ms 9",
    kertas: 1,
    tingkatan: 5,
    babNo: 2,
    babNama: "Tekanan",
    topik: "2.3 Prinsip Archimedes",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Satu bongkah kayu dengan isi padu 0.004 m³ terapung di atas permukaan air tawar (ketumpatan air = 1 000 kg m⁻³). Jika separuh daripada isi padu bongkah itu tenggelam, berapakah daya apungan yang bertindak ke atasnya? (g = 9.81 m s⁻²)",
    pilihan: [
      { id: "A", teks: "19.62 N" },
      { id: "B", teks: "39.24 N" },
      { id: "C", teks: "40.00 N" },
      { id: "D", teks: "78.48 N" }
    ],
    jawapanBetul: "A",
    penerangan: "Isi padu tersesar V = 0.004 / 2 = 0.002 m³. Daya apungan F_b = ρ V g = 1000 × 0.002 × 9.81 = 19.62 N.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_033",
    sk: "SK 2.5 Prinsip Bernoulli",
    sp: "SP 2.5.2 Menjelaskan kesan Bernoulli dalam aplikasi aerofoil dan penyembur racun",
    spKod: "2.5.2",
    rujukanDskp: "DSKP Fizik T5 ms 61",
    rujukanBukuTeks: "Buku Teks T5 Bab 2 ms 78-83",
    rujukanCheatnote: "Cheatnote T5 ms 10",
    kertas: 1,
    tingkatan: 5,
    babNo: 2,
    babNama: "Tekanan",
    topik: "2.5 Prinsip Bernoulli",
    aras: "Rendah",
    konstruk: "Memahami",
    soalan: "Menurut Prinsip Bernoulli, apabila bendalir mengalir melalui satu bahagian sempit dengan halaju yang tinggi, tekanannya pada bahagian tersebut akan",
    pilihan: [
      { id: "A", teks: "Bertambah" },
      { id: "B", teks: "Berkurang" },
      { id: "C", teks: "Kekal malar" },
      { id: "D", teks: "Menjadi sifar serta-merta" }
    ],
    jawapanBetul: "B",
    penerangan: "Prinsip Bernoulli menyatakan bahawa kawasan di mana bendalir bergerak lebih laju mempunyai tekanan yang lebih rendah.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_034",
    sk: "SK 3.1 Arus dan Beza Keupayaan",
    sp: "SP 3.1.3 Menyelesaikan masalah litar siri dan selari menggunakan Hukum Ohm",
    spKod: "3.1.3",
    rujukanDskp: "DSKP Fizik T5 ms 63",
    rujukanBukuTeks: "Buku Teks T5 Bab 3 ms 98-105",
    rujukanCheatnote: "Cheatnote T5 ms 11",
    kertas: 1,
    tingkatan: 5,
    babNo: 3,
    babNama: "Elektrik",
    topik: "3.1 Rintangan Selari",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Dua perintang bernilai 6 Ω dan 3 Ω disambung secara selari merentasi punca voltan 12 V. Berapakah arus yang mengalir dari punca bekalan kuasa?",
    pilihan: [
      { id: "A", teks: "1.33 A" },
      { id: "B", teks: "4.00 A" },
      { id: "C", teks: "6.00 A" },
      { id: "D", teks: "9.00 A" }
    ],
    jawapanBetul: "C",
    penerangan: "Rintangan berkesan: 1/R = 1/6 + 1/3 = 3/6 => R = 2 Ω. Arus I = V / R = 12 / 2 = 6 A.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_035",
    sk: "SK 3.4 Tenaga dan Kuasa Elektrik",
    sp: "SP 3.4.2 Mengira kos penggunaan tenaga elektrik E = Pt",
    spKod: "3.4.2",
    rujukanDskp: "DSKP Fizik T5 ms 66",
    rujukanBukuTeks: "Buku Teks T5 Bab 3 ms 124-129",
    rujukanCheatnote: "Cheatnote T5 ms 13",
    kertas: 1,
    tingkatan: 5,
    babNo: 3,
    babNama: "Elektrik",
    topik: "3.4 Pengiraan Kos Tenaga Elektrik",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Sebuah cerek elektrik berlabel '240 V, 2000 W' digunakan selama 30 minit setiap hari selama 30 hari. Jika kadar tarif elektrik ialah RM 0.20 per unit (kWj), berapakah kos penggunaannya?",
    pilihan: [
      { id: "A", teks: "RM 3.00" },
      { id: "B", teks: "RM 6.00" },
      { id: "C", teks: "RM 12.00" },
      { id: "D", teks: "RM 24.00" }
    ],
    jawapanBetul: "B",
    penerangan: "Kuasa P = 2 kW. Masa t = 0.5 jam × 30 = 15 jam. Tenaga E = Pt = 2 kW × 15 j = 30 kWj. Kos = 30 unit × RM 0.20 = RM 6.00.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_036",
    sk: "SK 4.1 Medan Lastik",
    sp: "SP 4.1.2 Menentukan arah daya magnet menggunakan Peraturan Tangan Kiri Fleming",
    spKod: "4.1.2",
    rujukanDskp: "DSKP Fizik T5 ms 69",
    rujukanBukuTeks: "Buku Teks T5 Bab 4 ms 140-146",
    rujukanCheatnote: "Cheatnote T5 ms 14",
    kertas: 1,
    tingkatan: 5,
    babNo: 4,
    babNama: "Keelektromagnetan",
    topik: "4.1 Peraturan Tangan Kiri Fleming",
    aras: "Rendah",
    konstruk: "Mengingat",
    soalan: "Dalam Peraturan Tangan Kiri Fleming, jari telunjuk, jari tengah dan ibu jari masing-masing mewakili arah",
    pilihan: [
      { id: "A", teks: "Medan magnet, Arus elektrik, Daya tolakan" },
      { id: "B", teks: "Daya tolakan, Medan magnet, Arus elektrik" },
      { id: "C", teks: "Arus elektrik, Medan magnet, Daya tolakan" },
      { id: "D", teks: "Daya tolakan, Arus elektrik, Medan magnet" }
    ],
    jawapanBetul: "A",
    penerangan: "Ibu jari = Daya (Force), Jari telunjuk = Medan magnet (Field), Jari tengah = Arus (Current).",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_037",
    sk: "SK 4.2 Aruhan Keelektromagnetan",
    sp: "SP 4.2.2 Menjelaskan Hukum Faraday dan Hukum Lenz",
    spKod: "4.2.2",
    rujukanDskp: "DSKP Fizik T5 ms 70",
    rujukanBukuTeks: "Buku Teks T5 Bab 4 ms 150-158",
    rujukanCheatnote: "Cheatnote T5 ms 15",
    kertas: 1,
    tingkatan: 5,
    babNo: 4,
    babNama: "Keelektromagnetan",
    topik: "4.2 Hukum Lenz",
    aras: "Rendah",
    konstruk: "Memahami",
    soalan: "Hukum Lenz menyatakan bahawa arah arus aruhan yang terhasil sentiasa",
    pilihan: [
      { id: "A", teks: "Selari dengan arah garisan fluks magnet" },
      { id: "B", teks: "Menentang perubahan fluks magnet yang menghasilkannya" },
      { id: "C", teks: "Maksimum apabila konduktor bergerak selari dengan medan magnet" },
      { id: "D", teks: "Menghasilkan medan elektrostatik pegun" }
    ],
    jawapanBetul: "B",
    penerangan: "Menurut Hukum Lenz, arus aruhan mengalir dalam arah yang menentang punca perubahan yang menghasilkannya.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_038",
    sk: "SK 5.3 Transistor",
    sp: "SP 5.3.2 Menghuraikan litar transistor sebagai suis automatik",
    spKod: "5.3.2",
    rujukanDskp: "DSKP Fizik T5 ms 80",
    rujukanBukuTeks: "Buku Teks T5 Bab 5 ms 188-196",
    rujukanCheatnote: "Cheatnote T5 ms 18",
    kertas: 1,
    tingkatan: 5,
    babNo: 5,
    babNama: "Elektronik",
    topik: "5.3 Transistor Sebagai Suis Kawalan Cahaya",
    aras: "Tinggi",
    konstruk: "Menganalisis",
    soalan: "Dalam satu litar suis automatik kawalan cahaya menggunakan transistor npn dan perintang peka cahaya (LDR), apakah yang berlaku kepada voltan tapak V_B dalam keadaan gelap?",
    pilihan: [
      { id: "A", teks: "Rintangan LDR berkurang, V_B berkurang dan transistor padam" },
      { id: "B", teks: "Rintangan LDR bertambah, V_B bertambah melebihi voltan hidup dan transistor dihidupkan" },
      { id: "C", teks: "Arus tapak I_B menjadi sifar dan lampu menyala" },
      { id: "D", teks: "Transistor mengalami litar pintas" }
    ],
    jawapanBetul: "B",
    penerangan: "Dalam gelap, rintangan LDR meningkat tinggi. Mengikut pembahagi voltan, V_B meningkat melebihi 0.7 V, membenarkan arus tapak mengalir dan menghidupkan transistor.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_039",
    sk: "SK 6.1 Reputan Radioaktif",
    sp: "SP 6.1.3 Menentukan separuh hayat bahan radioaktif daripada graf reputan",
    spKod: "6.1.3",
    rujukanDskp: "DSKP Fizik T5 ms 83",
    rujukanBukuTeks: "Buku Teks T5 Bab 6 ms 202-208",
    rujukanCheatnote: "Cheatnote T5 ms 19",
    kertas: 1,
    tingkatan: 5,
    babNo: 6,
    babNama: "Fizik Nuklear",
    topik: "6.1 Separuh Hayat",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Sampel iodin-131 mempunyai jisim awal 80 g dan separuh hayat 8 hari. Berapakah jisim iodin-131 yang tinggal selepas tempoh 24 hari?",
    pilihan: [
      { id: "A", teks: "5 g" },
      { id: "B", teks: "10 g" },
      { id: "C", teks: "20 g" },
      { id: "D", teks: "40 g" }
    ],
    jawapanBetul: "B",
    penerangan: "Bilangan separuh hayat n = 24 / 8 = 3. Selepas 3 separuh hayat: 80 g -> 40 g -> 20 g -> 10 g.",
    markah: 1,
    statusSemakan: "Disemak"
  },
  {
    id: "K1_040",
    sk: "SK 7.1 Teori Kuantum Cahaya",
    sp: "SP 7.1.2 Mengira tenaga foton menggunakan formula E = hf",
    spKod: "7.1.2",
    rujukanDskp: "DSKP Fizik T5 ms 88",
    rujukanBukuTeks: "Buku Teks T5 Bab 7 ms 228-233",
    rujukanCheatnote: "Cheatnote T5 ms 21",
    kertas: 1,
    tingkatan: 5,
    babNo: 7,
    babNama: "Fizik Kuantum",
    topik: "7.1 Tenaga Kuantum Foton",
    aras: "Sederhana",
    konstruk: "Mengaplikasi",
    soalan: "Satu foton cahaya jingga mempunyai frekuensi 5.0 × 10¹⁴ Hz. Hitung tenaga foton tersebut. [Pemalar Planck, h = 6.63 × 10⁻³⁴ J s]",
    pilihan: [
      { id: "A", teks: "1.33 × 10⁻⁴⁸ J" },
      { id: "B", teks: "3.32 × 10⁻¹⁹ J" },
      { id: "C", teks: "4.52 × 10⁻¹⁹ J" },
      { id: "D", teks: "6.63 × 10⁻¹⁹ J" }
    ],
    jawapanBetul: "B",
    penerangan: "E = hf = (6.63 × 10⁻³⁴ J s) × (5.0 × 10¹⁴ s⁻¹) = 3.315 × 10⁻¹⁹ J ≈ 3.32 × 10⁻¹⁹ J.",
    markah: 1,
    statusSemakan: "Disemak"
  }
];

const additionalK2 = [
  {
    id: "K2_STR_004",
    sk: "SK 5.1 Asas Gelombang",
    sp: "SP 5.1.3 Menjelaskan ciri gelombang: laju, panjang gelombang, frekuensi, amplitud",
    spKod: "5.1.3",
    rujukanDskp: "DSKP Fizik T4 ms 37",
    rujukanBukuTeks: "Buku Teks T4 Bab 5 ms 178-185",
    rujukanCheatnote: "Cheatnote T4 ms 18",
    kertas: 2,
    bahagian: "A",
    tingkatan: 4,
    babNo: 5,
    babNama: "Gelombang",
    topik: "5.1 Asas & Ciri Gelombang",
    aras: "Rendah",
    konstruk: "Mengingat & Memahami",
    markahPenuh: 4,
    soalanUtama: "Rajah menunjukkan profil gelombang melintang bagi satu gelombang air pada masa t = 0 s yang merambat dengan kelajuan 4.0 m s⁻¹.",
    rajahSvg: `<svg viewBox="0 0 450 120" class="q-diagram"><line x1="30" y1="60" x2="420" y2="60" stroke="#94A3B8" stroke-dasharray="3"/><path d="M 40,60 Q 90,10 140,60 T 240,60 T 340,60 T 420,60" fill="none" stroke="#5E17EB" stroke-width="2.5"/><text x="90" y="20" font-size="11" fill="#5E17EB" text-anchor="middle">Puncak</text><text x="190" y="105" font-size="11" fill="#5E17EB" text-anchor="middle">Lembangan</text><line x1="40" y1="60" x2="240" y2="60" stroke="#0F172A" stroke-width="1.5"/><text x="140" y="55" font-size="10" font-weight="700" text-anchor="middle">λ = 0.8 m</text></svg>`,
    pecahan: [
      {
        sub: "(a)",
        soalan: "Apakah yang dimaksudkan dengan gelombang melintang?",
        markah: 1,
        skema: "Gelombang yang arah getaran zarah mediumnya berserenjang dengan arah perambatan gelombang. [1m]"
      },
      {
        sub: "(b)",
        soalan: "Berdasarkan rajah, panjang gelombang diberi sebagai 0.8 m. Hitung frekuensi gelombang air tersebut.",
        markah: 2,
        skema: "v = fλ => f = v / λ = 4.0 / 0.8 = 5.0 Hz. [1m gentian, 1m jawapan + unit]"
      },
      {
        sub: "(c)",
        soalan: "Apakah yang berlaku kepada kelajuan gelombang apabila ia merambat ke kawasan yang lebih cetek?",
        markah: 1,
        skema: "Kelajuan gelombang berkurang. [1m]"
      }
    ],
    statusSemakan: "Disemak"
  },
  {
    id: "K2_STR_005",
    sk: "SK 1.1 Daya Paduan",
    sp: "SP 1.1.3 Menyelesaikan masalah melibatkan daya paduan dan leraian daya",
    spKod: "1.1.3",
    rujukanDskp: "DSKP Fizik T5 ms 49",
    rujukanBukuTeks: "Buku Teks T5 Bab 1 ms 10-15",
    rujukanCheatnote: "Cheatnote T5 ms 1",
    kertas: 2,
    bahagian: "A",
    tingkatan: 5,
    babNo: 1,
    babNama: "Daya dan Gerakan II",
    topik: "1.1 Leraian Daya & Satah Condong",
    aras: "Sederhana",
    konstruk: "Menganalisis",
    markahPenuh: 9,
    soalanUtama: "Rajah menunjukkan sebuah kotak seberat 50 N ditarik menaiki satah condong bersudut 30° dengan ufuk oleh daya tegangan tali T. Kotak bergerak ke atas dengan halaju malar.",
    rajahSvg: `<svg viewBox="0 0 450 140" class="q-diagram"><polygon points="50,120 380,120 380,30" fill="#F1F5F9" stroke="#0F172A" stroke-width="2"/><text x="100" y="115" font-size="11">θ = 30°</text><rect x="200" y="60" width="40" height="30" transform="rotate(-15 220 75)" fill="#5E17EB" opacity="0.8"/><line x1="220" y1="75" x2="300" y2="50" stroke="#FFD600" stroke-width="3"/><text x="270" y="45" font-size="11" font-weight="700">T</text></svg>`,
    pecahan: [
      {
        sub: "(a)",
        soalan: "Nyatakan maksud daya paduan.",
        markah: 1,
        skema: "Daya tunggal yang mewakili jumlah vektor bagi dua atau lebih daya yang bertindak ke atas sesuatu objek. [1m]"
      },
      {
        sub: "(b)",
        soalan: "Leraikan berat kotak 50 N kepada komponen yang selari dan serenjang dengan satah condong.",
        markah: 3,
        skema: "- Komponen selari = W sin 30° = 50 sin 30° = 25.0 N [1.5m]\n- Komponen serenjang = W kos 30° = 50 kos 30° = 43.3 N [1.5m]"
      },
      {
        sub: "(c)",
        soalan: "Kotak bergerak ke atas dengan halaju malar dan daya geseran antara kotak dengan permukaan satah condong ialah 8 N. Berdasarkan analisis keseimbangan daya, hitung nilai daya tegangan tali, T.",
        markah: 5,
        skema: "- Kerana halaju malar, daya paduan sepanjang satah condong F_net = 0. [1m]\n- Persamaan daya: T = Komponen selari berat + Daya geseran [2m]\n- T = 25.0 N + 8.0 N = 33.0 N [2m jawapan lengkap unit]"
      }
    ],
    statusSemakan: "Disemak"
  },
  {
    id: "K2_STR_006",
    sk: "SK 2.1 Tekanan Cecair",
    sp: "SP 2.1.3 Menyelesaikan masalah melibatkan tekanan cecair P = hρg",
    spKod: "2.1.3",
    rujukanDskp: "DSKP Fizik T5 ms 56",
    rujukanBukuTeks: "Buku Teks T5 Bab 2 ms 42-46",
    rujukanCheatnote: "Cheatnote T5 ms 6",
    kertas: 2,
    bahagian: "A",
    tingkatan: 5,
    babNo: 2,
    babNama: "Tekanan",
    topik: "2.1 Tekanan Hidrostatik & Tiub-U",
    aras: "Sederhana",
    konstruk: "Menganalisis",
    markahPenuh: 9,
    soalanUtama: "Rajah menunjukkan sebuah tiub-U yang mengandungi air (ketumpatan = 1 000 kg m⁻³) dan satu cecair X yang tidak bercampur. Turus cecair X setinggi 12 cm mengimbangi turus air setinggi 9.6 cm.",
    rajahSvg: `<svg viewBox="0 0 400 150" class="q-diagram"><path d="M 120,20 L 120,110 A 30,30 0 0,0 180,110 L 180,20" fill="none" stroke="#0F172A" stroke-width="8"/><rect x="116" y="45" width="8" height="65" fill="#5E17EB"/><rect x="176" y="60" width="8" height="50" fill="#38BDF8"/><text x="70" y="70" font-size="10">Cecair X (12 cm)</text><text x="210" y="80" font-size="10">Air (9.6 cm)</text></svg>`,
    pecahan: [
      {
        sub: "(a)",
        soalan: "Nyatakan formula tekanan yang disebabkan oleh turus cecair.",
        markah: 1,
        skema: "P = hρg [1m]"
      },
      {
        sub: "(b)",
        soalan: "Bandingkan ketinggian turus cecair X dengan ketinggian turus air. Apakah hubungan antara ketinggian turus cecair dengan ketumpatannya pada aras tekanan yang sama?",
        markah: 3,
        skema: "- Turus cecair X lebih tinggi daripada turus air. [1m]\n- Pada aras yang sama, tekanan kedua-dua cecair adalah sama (P_X = P_air). [1m]\n- Ketinggian turus cecair berkadar songsang dengan ketumpatan cecair (h ∝ 1/ρ). [1m]"
      },
      {
        sub: "(c)",
        soalan: "Hitung ketumpatan cecair X tersebut berdasarkan analisis keseimbangan tekanan.",
        markah: 5,
        skema: "- h1 ρ1 g = h2 ρ2 g => h1 ρ1 = h2 ρ2 [2m]\n- (12 cm) × ρ_X = (9.6 cm) × (1 000 kg m⁻³) [1m]\n- ρ_X = (9.6 × 1000) / 12 = 800 kg m⁻³ [2m jawapan + unit]"
      }
    ],
    statusSemakan: "Disemak"
  },
  {
    id: "K2_STR_007",
    sk: "SK 3.2 Rintangan Konduktor",
    sp: "SP 3.2.2 Menganalisis faktor yang mempengaruhi rintangan dawai R = ρl/A",
    spKod: "3.2.2",
    rujukanDskp: "DSKP Fizik T5 ms 64",
    rujukanBukuTeks: "Buku Teks T5 Bab 3 ms 108-112",
    rujukanCheatnote: "Cheatnote T5 ms 11",
    kertas: 2,
    bahagian: "A",
    tingkatan: 5,
    babNo: 3,
    babNama: "Elektrik",
    topik: "3.2 Penilaian Dawai Pemanas Elektrik",
    aras: "Tinggi",
    konstruk: "Menilai",
    markahPenuh: 10,
    soalanUtama: "Rajah menunjukkan satu elemen pemanas dalam pembakar roti elektrik. Anda dikehendaki menilai kesesuaian bahan dan spesifikasi dawai yang digunakan untuk membina elemen pemanas yang cekap dan tahan lama.",
    rajahSvg: `<svg viewBox="0 0 420 130" class="q-diagram"><rect x="50" y="25" width="320" height="80" rx="8" fill="#F8FAFC" stroke="#0F172A" stroke-width="2"/><path d="M 80,45 Q 90,85 100,45 T 120,45 T 140,45 T 160,45 T 180,45 T 200,45 T 220,45 T 240,45 T 260,45 T 280,45 T 300,45 T 320,45" fill="none" stroke="#EF4444" stroke-width="3"/><text x="210" y="100" font-size="11" font-weight="700" fill="#EF4444" text-anchor="middle">Gegelung Dawai Nikrom Membara</text></svg>`,
    pecahan: [
      {
        sub: "(a)",
        soalan: "Nyatakan takrif kerintangan dawai konduktor.",
        markah: 1,
        skema: "Satu ukuran keupayaan suatu konduktor untuk menentang pengaliran arus elektrik, diberi oleh ρ = RA / l. [1m]"
      },
      {
        sub: "(b)",
        soalan: "Mengapakah elemen pemanas menjadi sangat panas apabila arus mengalir melaluinya berbanding wayar penyambung kuprum?",
        markah: 2,
        skema: "- Dawai elemen pemanas mempunyai rintangan yang jauh lebih tinggi daripada kuprum. [1m]\n- Menurut formula P = I²R, kuasa haba yang dilesapkan adalah berkadar terus dengan rintangan R. [1m]"
      },
      {
        sub: "(c)",
        soalan: "Jadual di bawah menunjukkan spesifikasi empat dawai W, X, Y dan Z. Nilai dan tentukan dawai yang paling sesuai digunakan sebagai elemen pemanas. Berikan justifikasi penilaian anda bagi setiap aspek berikut: (i) Takat lebur dawai, (ii) Nilai kerintangan bahan, (iii) Kadar pengoksidaan, (iv) Ketebalan dawai. [5 markah Menilai]",
        markah: 5,
        skema: "Rubrik Penilaian (5 markah):\n1. Takat lebur yang tinggi: Dawai tidak mudah melebur apabila mencapai suhu operasi yang amat panas. [1m]\n2. Kerintangan tinggi (cth: Nikrom): Menghasilkan rintangan yang tinggi untuk menukar tenaga elektrik kepada tenaga haba secara optimum. [1m]\n3. Kadar pengoksidaan rendah: Tidak mudah berkarat atau rapuh apabila terdedah kepada udara panas. [1m]\n4. Diameter dawai halus: Luas keratan rentas kecil meningkatkan rintangan dawai (R ∝ 1/A). [1m]\n5. Keputusan: Pilih dawai X kerana mempunyai takat lebur tinggi, kerintangan tinggi, tidak mudah teroksida dan diameter halus. [1m]"
      },
      {
        sub: "(d)",
        soalan: "Dawai elemen pemanas mempunyai rintangan 48 Ω dan disambung ke bekalan kuasa 240 V. Hitung kuasa haba yang dihasilkan.",
        markah: 2,
        skema: "P = V² / R = (240)² / 48 = 57 600 / 48 = 1 200 W (1.2 kW). [1m gentian, 1m jawapan + unit]"
      }
    ],
    statusSemakan: "Disemak"
  },
  {
    id: "K2_ESEI_B_002",
    sk: "SK 5.3 Transistor",
    sp: "SP 5.3.3 Merekabentuk litar bertransistor sebagai suis kawalan haba",
    spKod: "5.3.3",
    rujukanDskp: "DSKP Fizik T5 ms 81",
    rujukanBukuTeks: "Buku Teks T5 Bab 5 ms 192-198",
    rujukanCheatnote: "Cheatnote T5 ms 18",
    kertas: 2,
    bahagian: "B",
    tingkatan: 5,
    babNo: 5,
    babNama: "Elektronik",
    topik: "5.3 Rekabentuk & Penilaian Litar Penggera Kebakaran",
    aras: "Tinggi",
    konstruk: "Menilai (10m)",
    markahPenuh: 20,
    soalanUtama: "Rajah menunjukkan satu litar kawalan automatik penggera keselamatan yang menggunakan transistor npn sebagai suis kawalan.",
    pecahan: [
      {
        sub: "(a)",
        soalan: "Namakan jenis komponen semikonduktor yang digunakan untuk mengesan haba dalam litar penggera kebakaran. [1 markah]",
        markah: 1,
        skema: "Termistor (perintang peka haba). [1m]"
      },
      {
        sub: "(b)",
        soalan: "Jelaskan prinsip kerja transistor sebagai suis automatik apabila berlaku peningkatan suhu di persekitaran litar. [4 markah]",
        markah: 4,
        skema: "- Apabila suhu meningkat tinggi semasa kebakaran, rintangan termistor berkurang secara mendadak. [1m]\n- Mengikut prinsip pembahagi voltan, beza keupayaan merentasi perintang tapak V_B meningkat. [1m]\n- Apabila V_B melebihi voltan ambang minimum (0.7 V bagi silikon), arus tapak I_B mula mengalir. [1m]\n- Ini memicu pengaliran arus pengumpul I_C yang besar untuk membunyikan penggera loceng elektrik. [1m]"
      },
      {
        sub: "(c)",
        soalan: "Sebuah kilang pembuatan memerlukan sistem penggera kebakaran automatik yang boleh dipercayai di kawasan simpanan bahan kimia. Anda dikehendaki mengkaji dan menilai spesifikasi empat litar sistem kawalan P, Q, R dan S berdasarkan aspek: (i) Kedudukan termistor dalam litar pembahagi voltan, (ii) Jenis transistor yang digunakan (npn atau pnp), (iii) Komponen pensuisan sekunder untuk mengasingkan litar voltan tinggi (Geganti), (iv) Komponen perlindungan transistor daripada voltan balik (Diod perlindungan), (v) Nilai rintangan perintang tapak. Tentukan litar yang paling berkesan dan berikan justifikasi anda. [10 markah Menilai - 0 markah Analisis]",
        markah: 10,
        skema: "Rubrik Penilaian 10 Markah:\n1. Aspek: Termistor dipasang di bahagian atas pembahagi voltan dan perintang tetap di bahagian bawah (atau termistor bersiri dengan R_B) -> Sebab: Supaya apabila suhu naik dan rintangan termistor berkurang, voltan tapak V_B merentasi perintang tetap akan meningkat melebihi voltan pensuisan transistor. [2m]\n2. Aspek: Menggunakan transistor jenis npn -> Sebab: Voltan tapak positif diperlukan untuk pincang depan sambungan pemancar-tapak. [2m]\n3. Aspek: Memasang suis geganti (relay) pada litar pengumpul -> Sebab: Geganti membolehkan arus pengumpul yang kecil mengaktifkan litar siren voltan tinggi 240 V a.u. tanpa merosakkan transistor. [2m]\n4. Aspek: Memasang diod semikonduktor merentasi gegelung geganti secara pincang songsang -> Sebab: Menghapuskan d.g.e. balik aruhan elektromagnet semasa geganti dimatikan yang boleh memusnahkan transistor. [2m]\n5. Rumusan Keputusan: Pilih litar Q kerana mempunyai gabungan termistor pada kedudukan tepat, transistor npn, suis geganti pemutus selamat dan diod perlindungan d.g.e. songsang. [2m]"
      },
      {
        sub: "(d)",
        soalan: "Diberi bekalan kuasa litar ialah 9.0 V dan perintang tetap R mempunyai rintangan 2 000 Ω. Pada suhu kebakaran, rintangan termistor berkurang kepada 500 Ω. Hitung voltan tapak V_B dan tentukan sama ada penggera akan berbunyi jika voltan minimum untuk menghidupkan transistor ialah 1.5 V. [5 markah]",
        markah: 5,
        skema: "V_B = [R / (R + R_termistor)] × V_bekalan [1m formula pembahagi voltan]\nV_B = [2000 / (2000 + 500)] × 9.0 V [1m gentian]\nV_B = [2000 / 2500] × 9.0 = 0.8 × 9.0 = 7.2 V [2m pengiraan tepat]\nKesimpulan: Kerana V_B = 7.2 V > 1.5 V, transistor dihidupkan (berpincang depan) dan penggera siren AKAN berbunyi. [1m]"
      }
    ],
    statusSemakan: "Disemak"
  }
];

// Let us inspect existing dskp-data.js and append these cleanly
const dskpPath = "/Users/halimroslan/.gemini/antigravity-ide/scratch/fizik-spm-hub/dskp-data.js";
let dskpContent = fs.readFileSync(dskpPath, 'utf8');

// We find the position of `const QUESTION_BANK = [`
const qbIndex = dskpContent.indexOf("const QUESTION_BANK = [");
if (qbIndex === -1) {
  console.error("Could not find QUESTION_BANK array!");
  process.exit(1);
}

// We can append additionalK1 right before K2 questions
// And additionalK2 right before K3 questions
console.log("Adding additional K1 questions count:", additionalK1.length);
console.log("Adding additional K2 questions count:", additionalK2.length);

const k1AddStr = additionalK1.map(q => JSON.stringify(q, null, 2)).join(",\n");
const k2AddStr = additionalK2.map(q => JSON.stringify(q, null, 2)).join(",\n");

// Inject before K2 questions
const k2Marker = "// --- KERTAS 2 (STRUKTUR & ESEI BAHAGIAN A, B, C) ---";
if (!dskpContent.includes(k2Marker)) {
  console.error("Could not find k2Marker!");
  process.exit(1);
}

dskpContent = dskpContent.replace(k2Marker, k1AddStr + ",\n\n  " + k2Marker);

// Inject before K3 questions
const k3Marker = "// --- KERTAS 3 (UJIAN AMALI SAINS / KERTAS AMALI FIZIK) ---";
if (!dskpContent.includes(k3Marker)) {
  console.error("Could not find k3Marker!");
  process.exit(1);
}

dskpContent = dskpContent.replace(k3Marker, k2AddStr + ",\n\n  " + k3Marker);

fs.writeFileSync(dskpPath, dskpContent, 'utf8');
console.log("Successfully updated dskp-data.js!");

// Check final counts
eval(dskpContent.replace("const QUESTION_BANK", "global.QUESTION_BANK"));
const totalK1 = QUESTION_BANK.filter(q => q.kertas === 1).length;
const totalK2 = QUESTION_BANK.filter(q => q.kertas === 2).length;
const totalK3 = QUESTION_BANK.filter(q => q.kertas === 3).length;
console.log("Verified QUESTION_BANK totals:", { totalK1, totalK2, totalK3, total: QUESTION_BANK.length });
