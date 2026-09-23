const fs = require("fs");

const SPECIFIC_FIXES = {
  "MODUL_T4_B2_K2_Q02": {
    soalan: "Rajah 1 menunjukkan seorang budak menaiki\nbasikal ke sebuah pasar raya.\nDiagram 1 shows a boy takes a ride to a\nsupermarket. (Kelantan: 2023)\nBudak itu mengayuh basikal dengan\nThe boy pedals the bike with",
    pilihan: [
      { id: "A", teks: "pecutan seragam / uniform acceleration" },
      { id: "B", teks: "kelajuan seragam / uniform speed" },
      { id: "C", teks: "kelajuan berkurang / decreasing speed" },
      { id: "D", teks: "kelajuan seragam diikuti laju berkurang / uniform speed followed by decreasing speed" }
    ]
  },
  "MODUL_T4_B2_K2_Q43": {
    soalan: "Rajah 33 menunjukkan seorang pemain besbol\nmelakukan tindakan ikut lajak untuk memukul\nbola.\nDiagram 33 shows a baseball player taking a\nfollow through action to hit the ball.\n(SBP: 2022)\nTindakan ini adalah untuk\nThis action is to",
    pilihan: [
      { id: "A", teks: "menambah daya impuls / increase impulsive force" },
      { id: "B", teks: "mengurangkan masa pelanggaran / reduce time of impact" },
      { id: "C", teks: "menambah jarak bola selepas dipukul / increase the distance of the ball after being hit" },
      { id: "D", teks: "mengurangkan perubahan momentum / reduce change of momentum" }
    ]
  },
  "MODUL_T4_B2_K2_Q77": {
    pilihan: [
      { id: "A", teks: "Inersia bergantung pada saiz objek. / Inertia depends on the size of an object." },
      { id: "B", teks: "Objek yang mudah bergerak sukar dihentikan. / Object that easy to move is difficult to stop." },
      { id: "C", teks: "Objek dengan jisim kecil lebih mudah bergerak. / Object with small mass is easier to move." },
      { id: "D", teks: "Inersia objek yang sama lebih besar di Bumi berbanding dengan inersia di Bulan / Inertia of the same object is greater on Earth compared to its inertia on the Moon." }
    ]
  },
  "MODUL_T4_B2_K1_Q09": {
    pilihan: [
      { id: "A", teks: "Neraca tuas / Lever balance" },
      { id: "B", teks: "Neraca spring / Spring balance" },
      { id: "C", teks: "Neraca inersia / Inertia balance" },
      { id: "D", teks: "Neraca elektronik / Electronic balance" }
    ]
  },
  "MODUL_T4_B2_K2_Q04": {
    pilihan: [
      { id: "A", teks: "Halaju / Velocity" },
      { id: "B", teks: "Pecutan / Acceleration" },
      { id: "C", teks: "Momentum / Momentum" },
      { id: "D", teks: "Tenaga kinetik / Kinetic energy" }
    ]
  },
  "MODUL_T4_B2_K2_Q13": {
    soalan: "Rajah 8 menunjukkan seorang lelaki sedang\nbergerak menggunakan personal transporter\ndengan suatu pecutan.\nDiagram 8 shows a man is moving by using a\npersonal transporter with an acceleration.\n(SBP: 2023)\nPernyataan manakah benar?\nWhich statement is correct?",
    pilihan: [
      { id: "A", teks: "Daya bersih yang bertindak ke atas personal transporter adalah sifar / The net force acting on the personal transporter is zero" },
      { id: "B", teks: "Daya tujah lebih besar daripada daya geseran / Thrust is greater than the frictional force" },
      { id: "C", teks: "Daya tujah lebih kecil daripada daya geseran / Thrust is smaller than the frictional force" },
      { id: "D", teks: "Daya tujah sama dengan daya geseran / Thrust is equal to frictional force" }
    ]
  },
  "MODUL_T4_B2_K2_Q14": {
    pilihan: [
      { id: "A", teks: "Daya / Force" },
      { id: "B", teks: "Inersia / Inertia" },
      { id: "C", teks: "Impuls / Impulse" },
      { id: "D", teks: "Momentum / Momentum" }
    ]
  },
  "MODUL_T4_B2_K2_Q20": {
    pilihan: [
      { id: "A", teks: "ketumpatan kedua-dua objek adalah sama / the density of both objects is the same" },
      { id: "B", teks: "bentuk kedua-dua objek adalah sama / the shape of both objects is the same" },
      { id: "C", teks: "berat kedua-dua objek diabaikan / the weight of both objects is ignored" },
      { id: "D", teks: "rintangan udara diabaikan / the air resistance is ignored" }
    ]
  },
  "MODUL_T4_B2_K2_Q21": {
    soalan: "Rajah 16 menunjukkan lato-lato yang\nmenggunakan dua bola plastik yang keras. Plastik\nkeras yang digunakan menghasilkan bunyi\nberdenting yang kuat apabila berlanggar pada\nhalaju yang tinggi.\nDiagram 16 shows a pair of clackers that uses\ntwo hard plastic balls. The clackers ball produces\na loud clacking sound when collide at high\nvelocity. (MRSM: 2023)\nMengapakah plastik keras digunakan?\nWhy hard plastic is used?",
    pilihan: [
      { id: "A", teks: "Meningkatkan inersia / Increase inertia" },
      { id: "B", teks: "Meningkatkan geseran / Increase friction" },
      { id: "C", teks: "Mengurangkan momentum / Decrease momentum" },
      { id: "D", teks: "Mengurangkan masa impak / Decrease time of impact" }
    ]
  },
  "MODUL_T4_B2_K2_Q26": {
    pilihan: [
      { id: "A", teks: "Daya impuls / Impulsive force" },
      { id: "B", teks: "Impuls / Impulse" },
      { id: "C", teks: "Tekanan / Pressure" },
      { id: "D", teks: "Kuasa / Power" }
    ]
  },
  "MODUL_T4_B2_K2_Q32": {
    pilihan: [
      { id: "A", teks: "Daya / Force" },
      { id: "B", teks: "Inersia / Inertia" },
      { id: "C", teks: "Momentum / Momentum" },
      { id: "D", teks: "Gerakan jatuh bebas / Free fall motion" }
    ]
  },
  "MODUL_T4_B2_K2_Q35": {
    pilihan: [
      { id: "A", teks: "Motosikal mengalami pecutan seragam di AB / The motorcycle is in uniform acceleration at AB" },
      { id: "B", teks: "Motosikal dalam keadaan pegun di BC / The motorcycle is in stationary at BC" },
      { id: "C", teks: "Motosikal mengubah arah ke belakang di CD / The motorcycle changes the direction backward at CD" },
      { id: "D", teks: "Motosikal mengurangkan halaju di EF / The motorcycle reduces the velocity at EF" }
    ]
  },
  "MODUL_T4_B2_K2_Q37": {
    pilihan: [
      { id: "A", teks: "Konsep inersia / Concept of inertia" },
      { id: "B", teks: "Konsep keseimbangan daya / Equilibrium of forces" },
      { id: "C", teks: "Prinsip keabadian tenaga / Principle of conservation of energy" },
      { id: "D", teks: "Prinsip keabadian momentum / Principle of conservation of momentum" }
    ]
  },
  "MODUL_T4_B2_K2_Q42": {
    pilihan: [
      { id: "A", teks: "Daya impuls kecil / Impulsive force is small" },
      { id: "B", teks: "Inersia kapal kargo besar / Inertia of the cargo ship is large" },
      { id: "C", teks: "Masa perlanggaran tinggi / Time of impact is high" },
      { id: "D", teks: "Impuls kapal kargo besar / Impulse of the cargo ship is big" }
    ]
  },
  "MODUL_T4_B2_K2_Q45": {
    pilihan: [
      { id: "A", teks: "Graviti / Gravity" },
      { id: "B", teks: "Inersia / Inertia" },
      { id: "C", teks: "Momentum / Momentum" },
      { id: "D", teks: "Keseimbangan daya / Equilibrium of forces" }
    ]
  },
  "MODUL_T4_B2_K2_Q50": {
    pilihan: [
      { id: "A", teks: "Inersia / Inertia" },
      { id: "B", teks: "Impuls / Impulse" },
      { id: "C", teks: "Momentum / Momentum" },
      { id: "D", teks: "Daya impuls / Impulsive force" }
    ]
  },
  "MODUL_T4_B2_K2_Q51": {
    pilihan: [
      { id: "A", teks: "Prinsip Bernoulli / Bernoulli's principle" },
      { id: "B", teks: "Prinsip Superposisi / Superposition principle" },
      { id: "C", teks: "Keseimbangan daya / Forces in equilibrium" },
      { id: "D", teks: "Prinsip Keabadian Momentum / Principle of Conservation of Momentum" }
    ]
  },
  "MODUL_T4_B2_K2_Q52": {
    pilihan: [
      { id: "A", teks: "Halaju seragam / Constant velocity" },
      { id: "B", teks: "Memecut / Accelerate" },
      { id: "C", teks: "Nyahpecutan / Deceleration" },
      { id: "D", teks: "Pegun / Stationary" }
    ]
  },
  "MODUL_T4_B2_K2_Q55": {
    pilihan: [
      { id: "A", teks: "Bertambah / Increases" },
      { id: "B", teks: "Berkurang / Decreases" },
      { id: "C", teks: "Tidak berubah / Unchanged" },
      { id: "D", teks: "Menjadi sifar / Becomes zero" }
    ]
  },
  "MODUL_T4_B2_K2_Q61": {
    soalan: "Sebuah kereta yang bergerak dengan halaju\nseragam mempunyai pecutan\nA car moving with uniform velocity has acceleration\n(Terengganu: 2021)",
    pilihan: [
      { id: "A", teks: "bertambah / increases" },
      { id: "B", teks: "seragam / uniform" },
      { id: "C", teks: "sifar / zero" },
      { id: "D", teks: "berkurang / decreases" }
    ]
  },
  "MODUL_T4_B2_K2_Q78": {
    pilihan: [
      { id: "A", teks: "Impuls / Impulse" },
      { id: "B", teks: "Pecutan / Acceleration" },
      { id: "C", teks: "Masa hentaman / Time of impact" },
      { id: "D", teks: "Daya impuls / Impulsive force" }
    ]
  },
  "MODUL_T4_B2_K2_Q85": {
    pilihan: [
      { id: "A", teks: "Konsep inersia / Concept of inertia" },
      { id: "B", teks: "Konsep keseimbangan daya / Concept of equilibrium of forces" },
      { id: "C", teks: "Prinsip keabadian momentum / Principle of conservation of momentum" },
      { id: "D", teks: "Prinsip keabadian tenaga / Principle of conservation of energy" }
    ]
  },
  "MODUL_T4_B2_K2_Q93": {
    pilihan: [
      { id: "A", teks: "Daya / Force" },
      { id: "B", teks: "Inersia / Inertia" },
      { id: "C", teks: "Jisim / Mass" },
      { id: "D", teks: "Berat / Weight" }
    ]
  },
  "MODUL_T4_B2_K3_Q15": {
    soalan: "Sebiji bola sepak berjisim 0.5 kg ditendang\ndengan daya 30 N dalam masa 0.5 s. Berapakah\nimpuls yang dialami oleh bola?\nA football of mass 0.5 kg is kicked by a force of 30 N in 0.5 s. What is the impulse experienced by the ball?\n(Kelantan: 2022)",
    pilihan: [
      { id: "A", teks: "5.0 N s" },
      { id: "B", teks: "10.0 N s" },
      { id: "C", teks: "15.0 N s" },
      { id: "D", teks: "60.0 N s" }
    ]
  },
  "MODUL_T4_B2_K3_Q28": {
    soalan: "Rajah 90 menunjukkan Richard berdiri pada titik\nO. Dia berjalan ke arah A, kemudian bergerak ke\narah B dan berhenti di B.\nDiagram 90 shows Richard stands at O. He walks\ntowards A, then moves towards B and stops at B.\n(Kedah: 2021)\nApakah sesaran Richard?\nWhat is the displacement of Richard?",
    pilihan: [
      { id: "A", teks: "9 m ke barat / 9 m towards west" },
      { id: "B", teks: "7 m ke timur / 7 m towards east" },
      { id: "C", teks: "5 m ke timur / 5 m towards east" },
      { id: "D", teks: "2 m ke barat / 2 m towards west" }
    ]
  },
  "MODUL_T4_B2_K3_Q35": {
    soalan: "Antara sistem yang berikut, manakah akan\nmemberi pecutan yang terbesar ke atas objek\nyang berjisim m?\nWhich of the following systems will give the\ngreatest acceleration on an object of mass m?\n(Selangor: Set 2: 2021)",
    pilihan: [
      { id: "A", teks: "50 N ← [m] → 60 N" },
      { id: "B", teks: "10 N ← [m]" },
      { id: "C", teks: "10 N ← [m] → 15 N" },
      { id: "D", teks: "15 N ← [m] ← 30 N" }
    ]
  }
};

const TYPOS_AND_SQUASHED = [
  { pat: /\bObjck\b/g, repl: "Objek" },
  { pat: /\bJorce\b/g, repl: "force" },
  { pat: /\bthesame\b/g, repl: "the same" },
  { pat: /\u0130nertia\b/g, repl: "Inertia" },
  // Typos
  { pat: /Diagramm\s+(\d+)/g, repl: "Diagram $1" },
  { pat: /\bDiagan\b/g, repl: "Diagram" },
  { pat: /\bThirdLavwof\b/g, repl: "Third Law of" },
  { pat: /\bThirdLavw\b/g, repl: "Third Law" },
  { pat: /\bSecond Lav\b/g, repl: "Second Law" },
  { pat: /\bLavwof\b/g, repl: "Law of" },
  { pat: /\bLavw\b/g, repl: "Law" },
  { pat: /\bNewton\s+s\b/g, repl: "Newton's" },
  { pat: /\bNewton\s*'\s*s\b/g, repl: "Newton's" },
  { pat: /\bstatenent\b/g, repl: "statement" },
  { pat: /\bseckor\b/g, repl: "seekor" },
  { pat: /\bschelai\b/g, repl: "sehelai" },
  { pat: /\bscbiji\b/g, repl: "sebiji" },
  { pat: /\bscbelum\b/g, repl: "sebelum" },
  { pat: /\bscbclum\b/g, repl: "sebelum" },
  { pat: /\bincrsia\b/g, repl: "inersia" },
  { pat: /\bberjsim\b/g, repl: "berjisim" },
  { pat: /\bmenycbabkan\b/g, repl: "menyebabkan" },
  { pat: /\bterscbut\b/g, repl: "tersebut" },
  { pat: /\bafier\b/g, repl: "after" },
  { pat: /\bafer\b/g, repl: "after" },
  { pat: /\btvolley\b/g, repl: "trolley" },
  { pat: /\bTivo\b/g, repl: "Two" },
  { pat: /\bfnd\b/g, repl: "find" },
  { pat: /\bveduce\b/g, repl: "reduce" },
  { pat: /\btheinmpulsive\b/g, repl: "the impulsive" },
  { pat: /\bobjck\b/g, repl: "objek" },
  { pat: /\bforwvard\b/g, repl: "forward" },
  { pat: /\bconpared\b/g, repl: "compared" },
  { pat: /\bdikuti\b/g, repl: "diikuti" },
  { pat: /\bjumppit\b/g, repl: "jump pit" },
  { pat: /\brumway\b/g, repl: "runway" },
  { pat: /\bplaver\b/g, repl: "player" },
  { pat: /\bofplaver\b/g, repl: "of player" },
  { pat: /\bmomnentum\b/g, repl: "momentum" },
  { pat: /\bMonmentum\b/g, repl: "Momentum" },
  { pat: /\bMomentumB\b/g, repl: "Momentum B" },
  { pat: /\bcaleulate\b/g, repl: "calculate" },
  { pat: /\bfromn\b/g, repl: "from" },
  { pat: /\bliabaikan\b/g, repl: "diabaikan" },
  { pat: /\blincar\b/g, repl: "linear" },
  { pat: /\bactedon\b/g, repl: "acted on" },
  { pat: /\bthesmalldurian\b/g, repl: "the small durian" },
  { pat: /\bbis durian\b/g, repl: "big durian" },
  { pat: /\btha object\b/g, repl: "than object" },
  { pat: /\bdirecthy\b/g, repl: "directly" },
  { pat: /\blo the\b/g, repl: "to the" },
  { pat: /\bglassincreases\b/g, repl: "glass increases" },
  { pat: /\bglassdecreases\b/g, repl: "glass decreases" },
  { pat: /\bwater bertambah\b/g, repl: "water increases" },
  { pat: /\btotalmomentum\b/g, repl: "total momentum" },
  { pat: /\bIft =/g, repl: "If t =" },
  { pat: /\bofgravity\b/g, repl: "of gravity" },
  { pat: /\bvocket\b/g, repl: "rocket" },
  { pat: /\btheobject\b/g, repl: "the object" },
  { pat: /\bthesystem\b/g, repl: "the system" },
  { pat: /\bbolatersebut\b/g, repl: "bola tersebut" },
  { pat: /\btentangpergerakan\b/g, repl: "tentang pergerakan" },
  { pat: /\bMengupakah\b/g, repl: "Mengapakah" },
  { pat: /\bohjects\b/g, repl: "objects" },
  { pat: /\bmotorcvcle\b/g, repl: "motorcycle" },
  { pat: /\bhardplastic\b/g, repl: "hard plastic" },

  // Squashed English spacing
  { pat: /\bthanthe\b/g, repl: "than the" },
  { pat: /\bofthe\b/g, repl: "of the" },
  { pat: /\bofchange\b/g, repl: "of change" },
  { pat: /\btheresultant\b/g, repl: "the resultant" },
  { pat: /\bofmotion\b/g, repl: "of motion" },
  { pat: /\bofMotion\b/g, repl: "of Motion" },
  { pat: /\bofmomentum\b/g, repl: "of momentum" },
  { pat: /\btheconceptof\b/g, repl: "the concept of" },
  { pat: /\bconceptof\b/g, repl: "concept of" },
  { pat: /\bthefrictional\b/g, repl: "the frictional" },
  { pat: /\btheimpulsive\b/g, repl: "the impulsive" },
  { pat: /\bthecar\b/g, repl: "the car" },
  { pat: /\btheball\b/g, repl: "the ball" },
  { pat: /\btheground\b/g, repl: "the ground" },
  { pat: /\btheacceleration\b/g, repl: "the acceleration" },
  { pat: /\bthevelocity\b/g, repl: "the velocity" },
  { pat: /\btheforce\b/g, repl: "the force" },
  { pat: /\bthemass\b/g, repl: "the mass" },
  { pat: /\btheequation\b/g, repl: "the equation" },
  { pat: /\bthestatement\b/g, repl: "the statement" },
  { pat: /\bthesituation\b/g, repl: "the situation" },
  { pat: /\bthesurface\b/g, repl: "the surface" },
  { pat: /\btochange\b/g, repl: "to change" },
  { pat: /\btoovercome\b/g, repl: "to overcome" },
  { pat: /\btoact\b/g, repl: "to act" },
  { pat: /\bisacted\b/g, repl: "is acted" },
  { pat: /\bisstated\b/g, repl: "is stated" },
  { pat: /\binthe\b/g, repl: "in the" },
  { pat: /\bonthe\b/g, repl: "on the" },
  { pat: /\bfromthe\b/g, repl: "from the" },
  { pat: /\bwiththe\b/g, repl: "with the" },
  { pat: /\bandthe\b/g, repl: "and the" },
  { pat: /\bbythe\b/g, repl: "by the" },
  { pat: /\bforthe\b/g, repl: "for the" },
  { pat: /\bisthe\b/g, repl: "is the" },
  { pat: /\barethe\b/g, repl: "are the" },
  { pat: /\bthatthe\b/g, repl: "that the" },
  { pat: /\bofmass\b/g, repl: "of mass" },
  { pat: /\bofvelocity\b/g, repl: "of velocity" },
  { pat: /\bwithvelocity\b/g, repl: "with velocity" },
  { pat: /\bwitha\b/g, repl: "with a" },
  { pat: /\bwithan\b/g, repl: "with an" },
  { pat: /\bmovingwith\b/g, repl: "moving with" },
  { pat: /\bmoveswith\b/g, repl: "moves with" },
  { pat: /\banaccelerationof\b/g, repl: "an acceleration of" },
  { pat: /\batthe\b/g, repl: "at the" },
  { pat: /\bincreasethe\b/g, repl: "increase the" },
  { pat: /\breducethe\b/g, repl: "reduce the" },
  { pat: /\bdecreasingspeed\b/g, repl: "decreasing speed" },
  { pat: /\btheathlete\b/g, repl: "the athlete" },
  { pat: /\bofoscillation\b/g, repl: "of oscillation" },
  { pat: /\bofforces\b/g, repl: "of forces" },
  { pat: /\bofconservation\b/g, repl: "of conservation" },
  { pat: /\bofconsenvationof\b/g, repl: "of conservation of" },
  { pat: /\bofnnomentum\b/g, repl: "of momentum" }
];

function cleanGeneralText(str) {
  if (!str || typeof str !== "string") return str;
  let res = str;
  for (const item of TYPOS_AND_SQUASHED) {
    res = res.replace(item.pat, item.repl);
  }
  return res;
}

const EN_STARTERS = [
  "Newton's", "Law of", "Vector", "Scalar", "Base", "Fixed at",
  "The gravitational", "The quantity", "The net force", "The forward force",
  "The lifting force", "The frictional force", "The force of gravity",
  "The upward acceleration", "The total momentum", "The momentum of",
  "The collision", "The length of", "The equation", "The gradient", "The energy",
  "The S.I", "The feather", "The cat", "The bull", "The baseball", "The motorcycle",
  "The racket", "The backwards", "The reduction", "Thrust", "Total momentum", "Momentum",
  "Object", "Objects", "Slow down", "Speed up", "Move with", "Move both",
  "Push", "Rotate", "Spread the", "Bend the", "Lay the", "Landing on", "Uphold the",
  "When the", "If t", "Acceleration", "Nothing happens", "support the",
  "increase the", "Decrease", "Decrease impulsive", "reduce the",
  "To reduce", "To increase", "concept of", "principle of",
  "impulsive force", "Mass depends", "Weight depends", "Mass is a",
  "force only", "mass only", "force, mass", "force and time", "Increasing velocity",
  "Decreasing velocity", "Velocity increases", "Velocity decreases",
  "Period of", "the concept of", "Increase inertia", "the weight of",
  "the air resistance", "inertia of",
  "is a scalar", "is a based", "is directly", "is inversely", "is increase",
  "is equal", "is greater", "is smaller", "same with", "directly proportional",
  "inversely proportional", "uniform acceleration", "decreasing speed", "constant velocity"
];

function cleanAndSplitOption(raw) {
  if (!raw || typeof raw !== "string" || raw.includes("<img")) return raw;

  let cleaned = cleanGeneralText(raw);

  if (cleaned.includes(" / ") || cleaned.includes("\n") || cleaned.includes(" | ")) {
    return cleaned;
  }

  for (const starter of EN_STARTERS) {
    const re = new RegExp("^([\\s\\S]+?)\\s+(" + starter.replace(/'/g, "\\'") + "\\b[\\s\\S]*)$", "i");
    const m = cleaned.match(re);
    if (m) {
      const bm = m[1].trim();
      const en = m[2].trim();
      if (bm.length >= 2 && en.length >= 2) {
        return `${bm} / ${en}`;
      }
    }
  }

  return cleaned;
}

// 1. Read dskp-data.js
const fullDskpCode = fs.readFileSync("dskp-data.js", "utf8");
const startMarker = "const QUESTION_BANK = [";
const endMarker = "];\n\n/**\n * MODUL ANALITIK PRESTASI";

const startIndex = fullDskpCode.indexOf(startMarker);
const endIndex = fullDskpCode.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find delimiters for QUESTION_BANK in dskp-data.js");
  process.exit(1);
}

const prefix = fullDskpCode.slice(0, startIndex + startMarker.length);
const suffix = fullDskpCode.slice(endIndex);

const qbJsonStr = "[" + fullDskpCode.slice(startIndex + startMarker.length, endIndex).trim() + "]";
const QUESTION_BANK = JSON.parse(qbJsonStr);

console.log(`[1] Loaded ${QUESTION_BANK.length} questions from dskp-data.js`);

let modifiedCount = 0;
QUESTION_BANK.forEach(q => {
  let changed = false;

  if (SPECIFIC_FIXES[q.id]) {
    const spec = SPECIFIC_FIXES[q.id];
    if (spec.soalan) {
      q.soalan = spec.soalan;
      changed = true;
    } else {
      const cleanedStem = cleanGeneralText(q.soalan || "");
      if (cleanedStem !== q.soalan) {
        q.soalan = cleanedStem;
        changed = true;
      }
    }
    if (spec.pilihan) {
      q.pilihan = spec.pilihan;
      changed = true;
    }
  } else {
    const origStem = q.soalan || "";
    const newStem = cleanGeneralText(origStem);
    if (newStem !== origStem) {
      q.soalan = newStem;
      changed = true;
    }

    (q.pilihan || []).forEach(opt => {
      const origOpt = opt.teks || "";
      const newOpt = cleanAndSplitOption(origOpt);
      if (newOpt !== origOpt) {
        opt.teks = newOpt;
        changed = true;
      }
    });
  }

  if (changed) modifiedCount++;
});

console.log(`[2] Applied all spelling, spacing, and slash fixes to ${modifiedCount} questions.`);

// 2. Re-write dskp-data.js
const formattedQB = JSON.stringify(QUESTION_BANK, null, 2);
// Strip opening [ and closing ] from formattedQB to match formatting
const qbInner = formattedQB.slice(1, -1).trim();

const newDskpContent = prefix + "\n  " + qbInner + "\n" + suffix;
fs.writeFileSync("dskp-data.js", newDskpContent, "utf8");
console.log(`[3] Successfully wrote updated dskp-data.js`);

// 3. Update scratch/t4_b2_full_questions.json if exists
if (fs.existsSync("scratch/t4_b2_full_questions.json")) {
  fs.writeFileSync("scratch/t4_b2_full_questions.json", JSON.stringify(QUESTION_BANK, null, 2), "utf8");
  console.log(`[4] Successfully synchronized scratch/t4_b2_full_questions.json`);
}

