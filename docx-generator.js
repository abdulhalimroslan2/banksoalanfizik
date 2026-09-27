/**
 * ============================================================================
 * SPM PHYSICS OFFICIAL DOCX GENERATOR ENGINE
 * ============================================================================
 * Menjana dokumen Microsoft Word (.docx) rasmi menepati 100% format Lembaga
 * Peperiksaan Malaysia (LPM):
 * 1. Muka Depan (Cover Page) rasmi dengan kotak maklumat calon bergaris kemas
 * 2. Halaman Rumus Rasmi SPM (2 Muka Surat) dengan simbol & eksponen tepat (tiada pecahan runtuh)
 * 3. Halaman Soalan dwibahasa (Melayu & Inggeris) dengan gambar rajah terbenam (bukan pautan luar)
 * 4. Pilihan jawapan A, B, C, D (teks atau gambar) teratur kemas
 * 5. Tiada border putus-putus (dashed) atau tanda [X] merah pada Microsoft Word
 *
 * Sesuai untuk Browser (Client-side) dan Node.js (Vercel Serverless / CLI).
 * ============================================================================
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("docx"));
  } else {
    root.DocxGenerator = factory(root.docx);
  }
}(typeof self !== "undefined" ? self : this, function (docx) {
  if (!docx) {
    console.error("DocxGenerator: library docx tidak ditemui!");
    return null;
  }

  const {
    Document,
    Packer,
    Paragraph,
    TextRun,
    Table,
    TableRow,
    TableCell,
    WidthType,
    AlignmentType,
    BorderStyle,
    PageBreak,
    Header,
    Footer,
    ImageRun,
    VerticalAlign
  } = docx;

  // Font standard rasmi SPM
  const FONT_FAMILY = "Times New Roman";
  const COLOR_BLACK = "000000";
  const COLOR_MUTED = "334155";

  // Lebar kandungan boleh cetak A4 (A4 11906 - 2 * 1440 = 9026 dxa)
  const TOTAL_CONTENT_WIDTH = 9016;

  /**
   * Mengasingkan teks stem soalan dwibahasa (BM dan BI)
   */
  function splitBilingualStem(rawText) {
    if (!rawText) return { bm: [], en: [] };
    const rawLines = rawText.split("\n");
    const cleaned = [];
    for (let l of rawLines) {
      const clean = l.replace(/<[^>]+>/g, "").trim();
      if (clean) cleaned.push(clean);
    }
    if (cleaned.length === 2) {
      return { bm: [cleaned[0]], en: [cleaned[1]] };
    }
    const enWords = new Set([
      "which", "what", "diagram", "calculate", "state", "the", "is", "are",
      "of", "in", "if", "shows", "between", "an", "a", "from", "to", "for",
      "with", "by", "at", "when", "why", "how", "given", "assume", "determine",
      "name", "where", "relationship", "statement", "statements", "explain",
      "correct", "incorrect", "following", "true", "false", "speed", "velocity",
      "acceleration", "force", "mass", "pressure", "energy", "work", "power"
    ]);
    const bmWords = new Set([
      "rajah", "apakah", "yang", "manakah", "antara", "berikut", "hitungkan",
      "nyatakan", "terangkan", "mengapakah", "bagaimanakah", "diberi", "jika",
      "apabila", "suatu", "sebuah", "seorang", "pada", "oleh", "dengan", "untuk",
      "dalam", "dan", "ialah", "adalah", "unit", "kuantiti", "terbitan", "asas",
      "daya", "tenaga", "tekanan", "panjang", "jisim", "laju", "halaju", "hubungan",
      "pernyataan", "benar", "palsu", "sesaran", "jarak", "ketumpatan"
    ]);

    const bm = [];
    const en = [];
    for (let l of cleaned) {
      const words = (l.toLowerCase().match(/[a-zA-Z]+/g) || []);
      let bmScore = 0;
      let enScore = 0;
      words.forEach(w => {
        if (bmWords.has(w)) bmScore++;
        if (enWords.has(w)) enScore++;
      });
      if (enScore > bmScore) {
        en.push(l);
      } else {
        bm.push(l);
      }
    }
    if (en.length === 0 && bm.length > 1) {
      const half = Math.floor(bm.length / 2);
      return { bm: bm.slice(0, half), en: bm.slice(half) };
    }
    return { bm, en };
  }

  /**
   * Mengesan dan menghuraikan pilihan jawapan (teks / gambar)
   */
  function parseOption(opt) {
    let optId = "";
    let optText = "";
    if (typeof opt === "object" && opt !== null) {
      optId = opt.id || "";
      optText = (opt.teks || "").trim();
    } else if (typeof opt === "string") {
      optText = opt.trim();
    }

    let imgUrl = null;
    const mImg = optText.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (mImg) {
      imgUrl = mImg[1];
    } else {
      const mUrl = optText.match(/(https?:\/\/[^\s"'<>]+(?:\.webp|\.png|\.jpg|\.jpeg)(?:\?[^\s"'<>]*)?)/i);
      if (mUrl) {
        imgUrl = mUrl[1];
      }
    }

    if (imgUrl) {
      return { id: optId, text: "", imgUrl: imgUrl };
    }

    // Buang awalan "A.", "A:", "A " jika ada
    optText = optText.replace(/^[A-Da-d][:\.]\s*/, "").trim();
    return { id: optId, text: optText, imgUrl: null };
  }

  /**
   * Memuat turun imej dan menukarnya kepada format PNG (Uint8Array)
   * Dalam browser: menggunakan Image + Canvas supaya WebP ditukar ke PNG automatik.
   * Dalam Node.js: menggunakan https.get.
   */
  async function fetchImageBuffer(url) {
    if (!url) return null;
    try {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        return await new Promise((resolve) => {
          const img = new window.Image();
          img.crossOrigin = "anonymous";
          img.onload = () => {
            try {
              const canvas = document.createElement("canvas");
              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0);
              canvas.toBlob((blob) => {
                if (!blob) { resolve(null); return; }
                const reader = new FileReader();
                reader.onloadend = () => {
                  resolve({
                    data: new Uint8Array(reader.result),
                    width: img.naturalWidth,
                    height: img.naturalHeight
                  });
                };
                reader.readAsArrayBuffer(blob);
              }, "image/png");
            } catch (err) {
              console.warn("Canvas export error:", url, err);
              resolve(null);
            }
          };
          img.onerror = () => {
            console.warn("Image load error:", url);
            resolve(null);
          };
          img.src = url;
        });
      } else {
        // Node.js fallback
        const https = require("https");
        const http = require("http");
        const client = url.startsWith("https") ? https : http;
        return await new Promise((resolve) => {
          client.get(url, (res) => {
            const chunks = [];
            res.on("data", c => chunks.push(c));
            res.on("end", () => {
              const buf = Buffer.concat(chunks);
              resolve({
                data: new Uint8Array(buf),
                width: 400,
                height: 250
              });
            });
          }).on("error", () => resolve(null));
        });
      }
    } catch (e) {
      console.warn("fetchImageBuffer failed:", url, e);
      return null;
    }
  }

  /**
   * Menjana Kotak Maklumat Calon (Nama & Tingkatan) dengan border hitam kemas
   */
  function createCandidateBox() {
    return new Table({
      width: { size: TOTAL_CONTENT_WIDTH, type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.SINGLE, size: 8, color: COLOR_BLACK },
        bottom: { style: BorderStyle.SINGLE, size: 8, color: COLOR_BLACK },
        left: { style: BorderStyle.SINGLE, size: 8, color: COLOR_BLACK },
        right: { style: BorderStyle.SINGLE, size: 8, color: COLOR_BLACK },
        insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
        insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" }
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              margins: { top: 100, bottom: 100, left: 140, right: 140 },
              children: [
                new Paragraph({
                  spacing: { line: 280, before: 60, after: 60 },
                  children: [
                    new TextRun({ text: "NAMA : ", bold: true, font: FONT_FAMILY, size: 22 }),
                    new TextRun({ text: "........................................................................................................................................", font: FONT_FAMILY, size: 22 })
                  ]
                }),
                new Paragraph({
                  spacing: { line: 280, before: 60, after: 60 },
                  children: [
                    new TextRun({ text: "TINGKATAN : ", bold: true, font: FONT_FAMILY, size: 22 }),
                    new TextRun({ text: "........................................................................................................................................", font: FONT_FAMILY, size: 22 })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }

  /**
   * Menjana Banner Amaran Rasmi LPM
   */
  function createWarningBanner() {
    return new Table({
      width: { size: TOTAL_CONTENT_WIDTH, type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.SINGLE, size: 12, color: COLOR_BLACK },
        bottom: { style: BorderStyle.SINGLE, size: 12, color: COLOR_BLACK },
        left: { style: BorderStyle.SINGLE, size: 12, color: COLOR_BLACK },
        right: { style: BorderStyle.SINGLE, size: 12, color: COLOR_BLACK },
        insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
        insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" }
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              margins: { top: 120, bottom: 120, left: 140, right: 140 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: "JANGAN BUKA KERTAS PEPERIKSAAN INI SEHINGGA DIBERITAHU",
                      bold: true,
                      font: FONT_FAMILY,
                      size: 22
                    })
                  ]
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 60 },
                  children: [
                    new TextRun({
                      text: "DO NOT OPEN THIS QUESTION PAPER UNTIL YOU ARE TOLD TO DO SO",
                      italics: true,
                      font: FONT_FAMILY,
                      size: 20
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }

  /**
   * Menjana Blok Tajuk Peperiksaan & Kod Kertas (Sejajar ke Kanan)
   */
  function createTitleBlock(mode, codeText, meta) {
    const isK2 = mode === "kertas2";
    const paperNum = isK2 ? "2" : "1";
    const examTitle = (meta.examTitle || "PEPERIKSAAN PERCUBAAN SPM").toUpperCase();
    const tingkatanNum = meta.tingkatan || 5;
    const timeNum = isK2 ? "2 ½ jam" : "1 ¼ jam";
    const timeWords = isK2 ? "Dua jam tiga puluh minit" : "Satu jam lima belas minit";

    const titleTable = new Table({
      width: { size: TOTAL_CONTENT_WIDTH, type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.NONE, size: 0, color: "auto" },
        bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
        left: { style: BorderStyle.NONE, size: 0, color: "auto" },
        right: { style: BorderStyle.NONE, size: 0, color: "auto" },
        insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
        insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" }
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 6500, type: WidthType.DXA },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: examTitle, bold: true, font: FONT_FAMILY, size: 26 })
                  ]
                }),
                new Paragraph({
                  spacing: { before: 40 },
                  children: [
                    new TextRun({ text: "PHYSICS", bold: true, font: FONT_FAMILY, size: 26 })
                  ]
                }),
                new Paragraph({
                  spacing: { before: 40 },
                  children: [
                    new TextRun({ text: `TINGKATAN ${tingkatanNum}`, bold: true, font: FONT_FAMILY, size: 26 })
                  ]
                }),
                new Paragraph({
                  spacing: { before: 40 },
                  children: [
                    new TextRun({ text: `Kertas ${paperNum}`, bold: true, underline: {}, font: FONT_FAMILY, size: 26 })
                  ]
                })
              ]
            }),
            new TableCell({
              width: { size: 2516, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({ text: codeText, bold: true, font: FONT_FAMILY, size: 28 })
                  ]
                })
              ]
            })
          ]
        }),
        new TableRow({
          children: [
            new TableCell({
              width: { size: 4508, type: WidthType.DXA },
              children: [
                new Paragraph({
                  spacing: { before: 120, after: 120 },
                  children: [
                    new TextRun({ text: timeNum, bold: true, font: FONT_FAMILY, size: 24 })
                  ]
                })
              ]
            }),
            new TableCell({
              width: { size: 4508, type: WidthType.DXA },
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  spacing: { before: 120, after: 120 },
                  children: [
                    new TextRun({ text: timeWords, italics: true, font: FONT_FAMILY, size: 22 })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });

    return titleTable;
  }

  /**
   * Menjana Arahan Muka Depan (Kertas 1 atau Kertas 2)
   */
  function createInstructionsBlock(mode) {
    const isK2 = mode === "kertas2";
    const paragraphs = [];

    if (!isK2) {
      const instructions = [
        {
          bm: "1. Kertas peperiksaan ini mengandungi 40 soalan.",
          en: "This question paper consists of 40 questions."
        },
        {
          bm: "2. Jawab semua soalan.",
          en: "Answer all questions."
        },
        {
          bm: "3. Tiap-tiap soalan diikuti oleh empat pilihan jawapan, iaitu A, B, C dan D. Bagi setiap soalan, pilih satu jawapan sahaja. Hitamkan jawapan anda pada kertas jawapan objektif yang disediakan.",
          en: "Each question is followed by four alternative answers, A, B, C and D. For each question, choose one answer only. Blacken your answer on the objective answer sheet provided."
        },
        {
          bm: "4. Kertas peperiksaan ini adalah dalam dwibahasa. Soalan dalam bahasa Melayu mendahului soalan yang sepadan dalam bahasa Inggeris.",
          en: "This question paper is bilingual. The questions in Malay precede the corresponding questions in English."
        },
        {
          bm: "5. Rajah yang mengiringi soalan tidak dilukis mengikut skala kecuali dinyatakan.",
          en: "The diagrams in the questions provided are not drawn to scale unless stated."
        },
        {
          bm: "6. Anda dibenarkan menggunakan kalkulator saintifik.",
          en: "You may use a scientific calculator."
        }
      ];

      instructions.forEach(item => {
        paragraphs.push(new Paragraph({
          spacing: { line: 260, before: 60, after: 20 },
          children: [
            new TextRun({ text: item.bm, font: FONT_FAMILY, size: 20 })
          ]
        }));
        paragraphs.push(new Paragraph({
          spacing: { line: 260, before: 0, after: 60 },
          indent: { left: 240 },
          children: [
            new TextRun({ text: item.en, italics: true, color: COLOR_MUTED, font: FONT_FAMILY, size: 19 })
          ]
        }));
      });
    } else {
      // Arahan Kertas 2 & Jadual Markah Pemeriksa
      const instructionsK2 = [
        {
          bm: "1. Kertas peperiksaan ini mengandungi tiga bahagian: Bahagian A, Bahagian B dan Bahagian C.",
          en: "This question paper consists of three sections: Section A, Section B and Section C."
        },
        {
          bm: "2. Jawab semua soalan dalam Bahagian A, satu soalan daripada Bahagian B dan semua soalan dalam Bahagian C.",
          en: "Answer all questions in Section A, any one question from Section B and all questions in Section C."
        },
        {
          bm: "3. Tulis jawapan anda pada ruang yang disediakan dalam kertas peperiksaan ini.",
          en: "Write your answers in the spaces provided in this question paper."
        },
        {
          bm: "4. Tunjukkan kerja mengira, ini membantu anda mendapatkan markah.",
          en: "Show your working, it helps you to get marks."
        },
        {
          bm: "5. Anda dibenarkan menggunakan kalkulator saintifik.",
          en: "You may use a scientific calculator."
        }
      ];

      instructionsK2.forEach(item => {
        paragraphs.push(new Paragraph({
          spacing: { line: 260, before: 60, after: 20 },
          children: [
            new TextRun({ text: item.bm, font: FONT_FAMILY, size: 20 })
          ]
        }));
        paragraphs.push(new Paragraph({
          spacing: { line: 260, before: 0, after: 60 },
          indent: { left: 240 },
          children: [
            new TextRun({ text: item.en, italics: true, color: COLOR_MUTED, font: FONT_FAMILY, size: 19 })
          ]
        }));
      });
    }

    return paragraphs;
  }

  /**
   * Menjana Halaman Muka Depan Lengkap (Cover Page)
   */
  function buildCoverPageElements(mode, codeText, meta, totalPages) {
    const elements = [];

    // 1. Header SULIT
    elements.push(new Paragraph({
      children: [
        new TextRun({ text: "SULIT", bold: true, font: FONT_FAMILY, size: 24 })
      ]
    }));

    // Jarak
    elements.push(new Paragraph({ spacing: { before: 140, after: 140 } }));

    // 2. Kotak Calon
    elements.push(createCandidateBox());

    // Jarak
    elements.push(new Paragraph({ spacing: { before: 180, after: 140 } }));

    // 3. Blok Tajuk & Kod Kertas
    elements.push(createTitleBlock(mode, codeText, meta));

    // Jarak
    elements.push(new Paragraph({ spacing: { before: 140, after: 140 } }));

    // 4. Banner Amaran
    elements.push(createWarningBanner());

    // Jarak
    elements.push(new Paragraph({ spacing: { before: 180, after: 140 } }));

    // 5. Arahan
    elements.push(...createInstructionsBlock(mode));

    // 6. Bilangan Halaman Bercetak
    elements.push(new Paragraph({
      spacing: { before: 360, after: 40 },
      children: [
        new TextRun({
          text: `Kertas soalan ini mengandungi ${totalPages || 20} halaman bercetak.`,
          bold: true,
          font: FONT_FAMILY,
          size: 21
        })
      ]
    }));
    elements.push(new Paragraph({
      spacing: { before: 0, after: 140 },
      children: [
        new TextRun({
          text: `This question paper consists of ${totalPages || 20} printed pages.`,
          italics: true,
          color: COLOR_MUTED,
          font: FONT_FAMILY,
          size: 20
        })
      ]
    }));

    // 7. Footer Muka Depan & Page Break
    elements.push(new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 240, after: 60 },
      children: [
        new TextRun({ text: "[Lihat halaman sebelah", font: FONT_FAMILY, size: 20 })
      ]
    }));

    const tahunVal = meta.tahun || 2026;
    const sekolahVal = meta.sekolah ? ` ${meta.sekolah}` : "";
    elements.push(new Paragraph({
      children: [
        new TextRun({ text: `${codeText}  © ${tahunVal} Hak Cipta Panitia Fizik${sekolahVal}`, font: FONT_FAMILY, size: 18 }),
        new TextRun({ text: "\t\t\t\t\t\t\tSULIT", bold: true, font: FONT_FAMILY, size: 20 })
      ]
    }));

    // Hard Page Break
    elements.push(new Paragraph({
      children: [new PageBreak()]
    }));

    return elements;
  }

  /**
   * Menjana Halaman Rumus SPM Muka Surat 1 (Table 0A)
   */
  function buildFormulaPage1Elements(codeText) {
    const elements = [];

    // Header Halaman
    elements.push(new Paragraph({
      children: [
        new TextRun({ text: "SULIT", bold: true, font: FONT_FAMILY, size: 22 }),
        new TextRun({ text: `\t\t\t\t\t\t\t${codeText}`, bold: true, font: FONT_FAMILY, size: 22 })
      ]
    }));

    // Pengenalan Rumus
    elements.push(new Paragraph({
      spacing: { before: 120, after: 120 },
      children: [
        new TextRun({
          text: "Rumus-rumus berikut boleh membantu anda menjawab soalan. Simbol-simbol yang diberi adalah yang biasa digunakan.",
          italics: true,
          font: FONT_FAMILY,
          size: 20
        })
      ]
    }));

    // Kandungan Lajur Kiri: Daya dan Gerakan I + Kegravitian
    const leftColParagraphs = [
      new Paragraph({
        children: [
          new TextRun({ text: "DAYA DAN GERAKAN I", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / FORCE AND MOTION I", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  v = u + at", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  s = ½(u + v)t", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  s = ut + ½ at²", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "4.  v² = u² + 2as", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "5.  Momentum = mv", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "6.  F = ma", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ spacing: { before: 140 } }),
      new Paragraph({
        children: [
          new TextRun({ text: "KEGRAVITIAN", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / GRAVITATION", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  F = G m₁m₂ / r²", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  g = GM / r²", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  F = mv² / r", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "4.  a = v² / r", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "5.  v = 2πr / T", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "6.  T₁² / r₁³ = T₂² / r₂³", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "7.  v = √(GM / r)", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "8.  u = -GMm / r", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "9.  v = √(2GM / r)", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "10. g = 9.81 m s⁻² @ 9.81 N kg⁻¹", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "11. G = 6.67 × 10⁻¹¹ N m² kg⁻²", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "12. Jisim Bumi, M = 5.97 × 10²⁴ kg", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "13. Jejari Bumi, R = 6.37 × 10⁶ m", font: FONT_FAMILY, size: 19 })] })
    ];

    // Kandungan Lajur Kanan: Haba + Gelombang + Cahaya dan Optik
    const rightColParagraphs = [
      new Paragraph({
        children: [
          new TextRun({ text: "HABA", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / HEAT", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  Q = mcθ", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  Q = ml", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  Q = Pt", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "4.  P₁V₁ = P₂V₂", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "5.  V₁ / T₁ = V₂ / T₂", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "6.  P₁ / T₁ = P₂ / T₂", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ spacing: { before: 140 } }),
      new Paragraph({
        children: [
          new TextRun({ text: "GELOMBANG", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / WAVES", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  v = fλ", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  λ = ax / D", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ spacing: { before: 140 } }),
      new Paragraph({
        children: [
          new TextRun({ text: "CAHAYA DAN OPTIK", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / LIGHT AND OPTICS", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  n = c / v", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  n = sin i / sin r", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  n = 1 / sin c", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "4.  n = H / h", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "5.  1/f = 1/u + 1/v", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "6.  n₁ sin θ₁ = n₂ sin θ₂", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "7.  Pembesaran linear, m = v / u", font: FONT_FAMILY, size: 19 })] })
    ];

    const formulaTable = new Table({
      width: { size: TOTAL_CONTENT_WIDTH, type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.NONE, size: 0, color: "auto" },
        bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
        left: { style: BorderStyle.NONE, size: 0, color: "auto" },
        right: { style: BorderStyle.NONE, size: 0, color: "auto" },
        insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
        insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" }
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 4508, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: leftColParagraphs
            }),
            new TableCell({
              width: { size: 4508, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: rightColParagraphs
            })
          ]
        })
      ]
    });

    elements.push(formulaTable);

    // Hard Page Break
    elements.push(new Paragraph({
      children: [new PageBreak()]
    }));

    return elements;
  }

  /**
   * Menjana Halaman Rumus SPM Muka Surat 2 (Table 0B)
   */
  function buildFormulaPage2Elements(codeText) {
    const elements = [];

    // Header Halaman
    elements.push(new Paragraph({
      children: [
        new TextRun({ text: "SULIT", bold: true, font: FONT_FAMILY, size: 22 }),
        new TextRun({ text: `\t\t\t\t\t\t\t${codeText}`, bold: true, font: FONT_FAMILY, size: 22 })
      ]
    }));

    // Kandungan Lajur Kiri: Daya dan Gerakan II + Tekanan + Elektrik + Keelektromagnetan
    const leftColParagraphs = [
      new Paragraph({
        children: [
          new TextRun({ text: "DAYA DAN GERAKAN II", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / FORCE AND MOTION II", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  F = kx", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  E = ½ Fx", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  E = ½ kx²", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ spacing: { before: 120 } }),
      new Paragraph({
        children: [
          new TextRun({ text: "TEKANAN", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / PRESSURE", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  P = F / A", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  P = hρg", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  ρ = m / V", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ spacing: { before: 120 } }),
      new Paragraph({
        children: [
          new TextRun({ text: "ELEKTRIK", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / ELECTRICITY", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  E = F / Q", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  I = Q / t", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  V = E / Q", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "4.  V = IR", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "5.  R = ρl / A", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "6.  ℰ = V + Ir", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "7.  P = VI", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "8.  P = E / t", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "9.  E = V / d", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ spacing: { before: 120 } }),
      new Paragraph({
        children: [
          new TextRun({ text: "KEELEKTROMAGNETAN", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / ELECTROMAGNETISM", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  Vₛ / Vₚ = Nₛ / Nₚ", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  η = (Kuasa output / Kuasa input) × 100%", font: FONT_FAMILY, size: 19 })] })
    ];

    // Kandungan Lajur Kanan: Elektronik + Fizik Nuklear + Fizik Kuantum
    const rightColParagraphs = [
      new Paragraph({
        children: [
          new TextRun({ text: "ELEKTRONIK", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / ELECTRONICS", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  Tenaga keupayaan elektrik, E = eV", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  Tenaga kinetik maksimum, E = ½ mv²", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  β = I_C / I_B", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "4.  V_out = [R₂ / (R₁ + R₂)] V_in", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ spacing: { before: 120 } }),
      new Paragraph({
        children: [
          new TextRun({ text: "FIZIK NUKLEAR", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / NUCLEAR PHYSICS", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  N = (½)ⁿ Nₒ", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  E = mc²", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  c = 3.00 × 10⁸ m s⁻¹", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "4.  1 u.j.a. = 1.66 × 10⁻²⁷ kg", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ spacing: { before: 120 } }),
      new Paragraph({
        children: [
          new TextRun({ text: "FIZIK KUANTUM", bold: true, font: FONT_FAMILY, size: 20 }),
          new TextRun({ text: " / QUANTUM PHYSICS", italics: true, font: FONT_FAMILY, size: 18 })
        ]
      }),
      new Paragraph({ children: [new TextRun({ text: "1.  E = hf", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "2.  f = c / λ", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "3.  λ = h / p", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "4.  λ = h / mv", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "5.  E = hc / λ", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "6.  P = nhf", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "7.  hf = W + ½ mv²_maks", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "8.  W = hf₀", font: FONT_FAMILY, size: 19 })] }),
      new Paragraph({ children: [new TextRun({ text: "9.  h = 6.63 × 10⁻³⁴ J s", font: FONT_FAMILY, size: 19 })] })
    ];

    const formulaTable = new Table({
      width: { size: TOTAL_CONTENT_WIDTH, type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.NONE, size: 0, color: "auto" },
        bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
        left: { style: BorderStyle.NONE, size: 0, color: "auto" },
        right: { style: BorderStyle.NONE, size: 0, color: "auto" },
        insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
        insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" }
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 4508, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: leftColParagraphs
            }),
            new TableCell({
              width: { size: 4508, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: rightColParagraphs
            })
          ]
        })
      ]
    });

    elements.push(formulaTable);

    // Hard Page Break
    elements.push(new Paragraph({
      children: [new PageBreak()]
    }));

    return elements;
  }

  /**
   * Menjana Halaman Soalan Kertas 1
   */
  async function buildK1QuestionElements(questions, codeText) {
    const elements = [];
    let globalDiagramIndex = 0;

    // Kumpulan soalan (~2 soalan jika ada gambar, ~3 jika teks sahaja)
    const chunks = [];
    let currentChunk = [];
    let currentWeight = 0;

    questions.forEach(q => {
      const hasDiag = !!q.rajahUrl;
      const weight = hasDiag ? 2 : 1;
      if (currentWeight + weight > 3 && currentChunk.length > 0) {
        chunks.push(currentChunk);
        currentChunk = [q];
        currentWeight = weight;
      } else {
        currentChunk.push(q);
        currentWeight += weight;
      }
    });
    if (currentChunk.length > 0) {
      chunks.push(currentChunk);
    }

    let qOverallNum = 1;

    for (let cIdx = 0; cIdx < chunks.length; cIdx++) {
      const chunk = chunks[cIdx];
      const isLastChunk = (cIdx === chunks.length - 1);

      // Header Halaman
      elements.push(new Paragraph({
        children: [
          new TextRun({ text: "SULIT", bold: true, font: FONT_FAMILY, size: 22 }),
          new TextRun({ text: `\t\t\t\t\t\t\t${codeText}`, bold: true, font: FONT_FAMILY, size: 22 })
        ]
      }));

      // Jadual soalan bagi setiap halaman
      const tableRows = [];

      for (let q of chunk) {
        const qNum = qOverallNum++;
        let stemText = q.soalan || "";

        let diagBuffer = null;
        let diagNum = 0;

        if (q.rajahUrl) {
          diagNum = ++globalDiagramIndex;
          stemText = stemText
            .replace(/\bRajah\s+\d+\b/gi, `Rajah ${diagNum}`)
            .replace(/\bDiagram\s+\d+\b/gi, `Diagram ${diagNum}`);

          diagBuffer = await fetchImageBuffer(q.rajahUrl);
        }

        const { bm, en } = splitBilingualStem(stemText);

        const stemCellParagraphs = [];

        // Stem BM
        bm.forEach((line, idx) => {
          stemCellParagraphs.push(new Paragraph({
            spacing: { line: 260, before: idx === 0 ? 0 : 40, after: 20 },
            children: [
              new TextRun({ text: line, font: FONT_FAMILY, size: 21 })
            ]
          }));
        });

        // Stem BI
        en.forEach((line) => {
          stemCellParagraphs.push(new Paragraph({
            spacing: { line: 260, before: 20, after: 40 },
            children: [
              new TextRun({ text: line, italics: true, color: COLOR_MUTED, font: FONT_FAMILY, size: 20 })
            ]
          }));
        });

        // Gambar Rajah (jika ada)
        if (diagBuffer && diagBuffer.data) {
          // Kira saiz berskala (maksimum lebar 320 pt = 426 px)
          const maxW = 320;
          let w = diagBuffer.width || 320;
          let h = diagBuffer.height || 200;
          if (w > maxW) {
            h = Math.round((h * maxW) / w);
            w = maxW;
          }
          if (h > 260) {
            w = Math.round((w * 260) / h);
            h = 260;
          }

          stemCellParagraphs.push(new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120, after: 40 },
            children: [
              new ImageRun({ data: diagBuffer.data, transformation: { width: w, height: h }, type: "png" })
            ]
          }));

          // Kapsyen Rajah
          stemCellParagraphs.push(new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 140 },
            children: [
              new TextRun({ text: `Rajah ${diagNum} `, bold: true, font: FONT_FAMILY, size: 20 }),
              new TextRun({ text: `/ Diagram ${diagNum}`, italics: true, color: COLOR_MUTED, font: FONT_FAMILY, size: 19 })
            ]
          }));
        }

        // Baris Utama Soalan
        tableRows.push(new TableRow({
          cantSplit: true,
          children: [
            new TableCell({
              width: { size: 451, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: `${qNum}`, bold: true, font: FONT_FAMILY, size: 22 })
                  ]
                })
              ]
            }),
            new TableCell({
              width: { size: 8565, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: stemCellParagraphs
            })
          ]
        }));

        // Pilihan Jawapan A, B, C, D
        const letters = ["A", "B", "C", "D"];
        const rawOptions = q.pilihan || [];

        for (let oIdx = 0; oIdx < 4; oIdx++) {
          const letter = letters[oIdx];
          const rawOpt = rawOptions[oIdx] || "";
          const parsed = parseOption(rawOpt);

          const optParagraphs = [];

          if (parsed.imgUrl) {
            const optImgBuf = await fetchImageBuffer(parsed.imgUrl);
            if (optImgBuf && optImgBuf.data) {
              const maxOptW = 200;
              let ow = optImgBuf.width || 200;
              let oh = optImgBuf.height || 120;
              if (ow > maxOptW) {
                oh = Math.round((oh * maxOptW) / ow);
                ow = maxOptW;
              }
              optParagraphs.push(new Paragraph({
                children: [
                  new ImageRun({ data: optImgBuf.data, transformation: { width: ow, height: oh }, type: "png" })
                ]
              }));
            }
          } else {
            optParagraphs.push(new Paragraph({
              spacing: { line: 240, before: 20, after: 20 },
              children: [
                new TextRun({ text: parsed.text, font: FONT_FAMILY, size: 21 })
              ]
            }));
          }

          tableRows.push(new TableRow({
            cantSplit: true,
            children: [
              new TableCell({
                width: { size: 451, type: WidthType.DXA },
                children: [new Paragraph({ children: [] })]
              }),
              new TableCell({
                width: { size: 8565, type: WidthType.DXA },
                children: [
                  new Table({
                    width: { size: 8565, type: WidthType.DXA },
                    borders: {
                      top: { style: BorderStyle.NONE, size: 0, color: "auto" },
                      bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
                      left: { style: BorderStyle.NONE, size: 0, color: "auto" },
                      right: { style: BorderStyle.NONE, size: 0, color: "auto" },
                      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
                      insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" }
                    },
                    rows: [
                      new TableRow({
                        children: [
                          new TableCell({
                            width: { size: 400, type: WidthType.DXA },
                            verticalAlign: VerticalAlign.TOP,
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({ text: letter, bold: true, font: FONT_FAMILY, size: 21 })
                                ]
                              })
                            ]
                          }),
                          new TableCell({
                            width: { size: 8165, type: WidthType.DXA },
                            verticalAlign: VerticalAlign.TOP,
                            children: optParagraphs
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }));
        }

        // Jarak antara soalan
        tableRows.push(new TableRow({
          children: [
            new TableCell({
              width: { size: 451, type: WidthType.DXA },
              children: [new Paragraph({ spacing: { before: 80, after: 80 } })]
            }),
            new TableCell({
              width: { size: 8565, type: WidthType.DXA },
              children: [new Paragraph({ spacing: { before: 80, after: 80 } })]
            })
          ]
        }));
      }

      const qTable = new Table({
        width: { size: TOTAL_CONTENT_WIDTH, type: WidthType.DXA },
        borders: {
          top: { style: BorderStyle.NONE, size: 0, color: "auto" },
          bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
          left: { style: BorderStyle.NONE, size: 0, color: "auto" },
          right: { style: BorderStyle.NONE, size: 0, color: "auto" },
          insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" },
          insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" }
        },
        rows: tableRows
      });

      elements.push(qTable);

      // Banner Tamat pada halaman terakhir
      if (isLastChunk) {
        elements.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 360, after: 60 },
          children: [
            new TextRun({
              text: "KERTAS PEPERIKSAAN TAMAT",
              bold: true,
              font: FONT_FAMILY,
              size: 22
            })
          ]
        }));
        elements.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 120 },
          children: [
            new TextRun({
              text: "END OF QUESTION PAPER",
              italics: true,
              font: FONT_FAMILY,
              size: 20
            })
          ]
        }));
      }

      // Page Break antara chunk
      if (!isLastChunk) {
        elements.push(new Paragraph({
          children: [new PageBreak()]
        }));
      }
    }

    return elements;
  }

  /**
   * Menjana Halaman Soalan Kertas 2
   */
  async function buildK2QuestionElements(questions, codeText) {
    const elements = [];

    for (let idx = 0; idx < questions.length; idx++) {
      const q = questions[idx];
      const qNum = idx + 1;
      const isLast = (idx === questions.length - 1);

      // Header Halaman
      elements.push(new Paragraph({
        children: [
          new TextRun({ text: "SULIT", bold: true, font: FONT_FAMILY, size: 22 }),
          new TextRun({ text: `\t\t\t\t\t\t\t${codeText}`, bold: true, font: FONT_FAMILY, size: 22 })
        ]
      }));

      // Tajuk Soalan (Bahagian A/B/C)
      const bahagianText = q.bahagian ? ` (Bahagian ${q.bahagian})` : "";
      elements.push(new Paragraph({
        spacing: { before: 120, after: 60 },
        children: [
          new TextRun({ text: `Soalan ${qNum}${bahagianText}`, bold: true, font: FONT_FAMILY, size: 24 })
        ]
      }));

      // Stem Utama
      let stemText = q.soalanUtama || q.soalan || "";
      if (q.rajahUrl) {
        stemText = stemText
          .replace(/\bRajah\s+\d+\b/gi, `Rajah ${qNum}`)
          .replace(/\bDiagram\s+\d+\b/gi, `Diagram ${qNum}`);
      }
      const { bm, en } = splitBilingualStem(stemText);

      bm.forEach(line => {
        elements.push(new Paragraph({
          spacing: { line: 260, before: 40, after: 20 },
          children: [new TextRun({ text: line, font: FONT_FAMILY, size: 21 })]
        }));
      });

      en.forEach(line => {
        elements.push(new Paragraph({
          spacing: { line: 260, before: 20, after: 40 },
          children: [new TextRun({ text: line, italics: true, color: COLOR_MUTED, font: FONT_FAMILY, size: 20 })]
        }));
      });

      // Gambar Rajah (jika ada)
      if (q.rajahUrl) {
        const diagBuffer = await fetchImageBuffer(q.rajahUrl);
        if (diagBuffer && diagBuffer.data) {
          const maxW = 340;
          let w = diagBuffer.width || 340;
          let h = diagBuffer.height || 220;
          if (w > maxW) {
            h = Math.round((h * maxW) / w);
            w = maxW;
          }
          elements.push(new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120, after: 40 },
            children: [
              new ImageRun({ data: diagBuffer.data, transformation: { width: w, height: h }, type: "png" })
            ]
          }));
          elements.push(new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 120 },
            children: [
              new TextRun({ text: `Rajah ${qNum} `, bold: true, font: FONT_FAMILY, size: 20 }),
              new TextRun({ text: `/ Diagram ${qNum}`, italics: true, color: COLOR_MUTED, font: FONT_FAMILY, size: 19 })
            ]
          }));
        }
      }

      // Pecahan Sub-Soalan (a), (b), (c)
      const pecahan = q.pecahan || [];
      pecahan.forEach(p => {
        const subLabel = p.sub || "";
        const subStem = p.soalan || "";
        const marks = p.markah || 1;
        const subParsed = splitBilingualStem(subStem);

        elements.push(new Paragraph({
          spacing: { before: 120, after: 20 },
          children: [
            new TextRun({ text: `${subLabel} `, bold: true, font: FONT_FAMILY, size: 21 }),
            new TextRun({ text: subParsed.bm.join(" "), font: FONT_FAMILY, size: 21 })
          ]
        }));

        if (subParsed.en.length) {
          elements.push(new Paragraph({
            spacing: { before: 0, after: 40 },
            indent: { left: 360 },
            children: [
              new TextRun({ text: subParsed.en.join(" "), italics: true, color: COLOR_MUTED, font: FONT_FAMILY, size: 20 })
            ]
          }));
        }

        // Ruang Menjawab Garis Putus-putus
        const numLines = Math.max(1, marks);
        for (let l = 0; l < numLines; l++) {
          elements.push(new Paragraph({
            spacing: { before: 60, after: 60 },
            children: [
              new TextRun({
                text: "........................................................................................................................................................................",
                color: "94A3B8",
                font: FONT_FAMILY,
                size: 18
              })
            ]
          }));
        }

        // Kotak Markah LPM di sebelah kanan
        elements.push(new Paragraph({
          alignment: AlignmentType.RIGHT,
          spacing: { before: 20, after: 120 },
          children: [
            new TextRun({
              text: `[${marks} markah / `,
              bold: true,
              font: FONT_FAMILY,
              size: 20
            }),
            new TextRun({
              text: "marks",
              italics: true,
              font: FONT_FAMILY,
              size: 19
            }),
            new TextRun({
              text: "]",
              bold: true,
              font: FONT_FAMILY,
              size: 20
            })
          ]
        }));
      });

      // Banner Tamat jika soalan terakhir
      if (isLast) {
        elements.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 360, after: 60 },
          children: [
            new TextRun({ text: "KERTAS PEPERIKSAAN TAMAT", bold: true, font: FONT_FAMILY, size: 22 })
          ]
        }));
        elements.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 120 },
          children: [
            new TextRun({ text: "END OF QUESTION PAPER", italics: true, font: FONT_FAMILY, size: 20 })
          ]
        }));
      }

      // Page Break antara soalan
      if (!isLast) {
        elements.push(new Paragraph({
          children: [new PageBreak()]
        }));
      }
    }

    return elements;
  }

  /**
   * Menjana Dokumen Lengkap Kertas Peperiksaan (Docx.Document)
   */
  async function buildExamDocument(mode, questions, meta) {
    const isK2 = mode === "kertas2";
    const codeText = isK2 ? "4531/2" : (mode === "kertas3" ? "4531/3" : "4531/1");
    const totalEstPages = 1 + 2 + Math.ceil(questions.length * (isK2 ? 1 : 0.45));

    // 1. Muka Depan
    const coverElements = buildCoverPageElements(mode, codeText, meta, totalEstPages);

    // 2. Rumus Halaman 1 & 2
    const formula1Elements = buildFormulaPage1Elements(codeText);
    const formula2Elements = buildFormulaPage2Elements(codeText);

    // 3. Soalan-soalan
    let questionElements = [];
    if (isK2) {
      questionElements = await buildK2QuestionElements(questions, codeText);
    } else {
      questionElements = await buildK1QuestionElements(questions, codeText);
    }

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 1440,    // 1 inci
                bottom: 1440, // 1 inci
                left: 1440,   // 1 inci
                right: 1440   // 1 inci
              }
            }
          },
          children: [
            ...coverElements,
            ...formula1Elements,
            ...formula2Elements,
            ...questionElements
          ]
        }
      ]
    });

    return doc;
  }

  /**
   * Menjana Dokumen Skema Penskoran Rasmi DOCX
   */
  async function buildSkemaDocument(mode, questions, meta) {
    const isK2 = mode === "kertas2";
    const paperCode = isK2 ? "4531/2" : (mode === "kertas3" ? "4531/3" : "4531/1");
    const tahunVal = meta.tahun || 2026;
    const examTitle = (meta.examTitle || "PEPERIKSAAN PERCUBAAN SPM").toUpperCase();

    const tableRows = [];

    // Header Jadual
    tableRows.push(new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 1200, type: WidthType.DXA },
          shading: { fill: "F1F5F9" },
          children: [new Paragraph({ children: [new TextRun({ text: "No. Soalan", bold: true, font: FONT_FAMILY, size: 20 })] })]
        }),
        new TableCell({
          width: { size: 5416, type: WidthType.DXA },
          shading: { fill: "F1F5F9" },
          children: [new Paragraph({ children: [new TextRun({ text: "Peraturan Pemarkahan / Jawapan", bold: true, font: FONT_FAMILY, size: 20 })] })]
        }),
        new TableCell({
          width: { size: 1200, type: WidthType.DXA },
          shading: { fill: "F1F5F9" },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Sub Markah", bold: true, font: FONT_FAMILY, size: 20 })] })]
        }),
        new TableCell({
          width: { size: 1200, type: WidthType.DXA },
          shading: { fill: "F1F5F9" },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Jumlah", bold: true, font: FONT_FAMILY, size: 20 })] })]
        })
      ]
    }));

    if (!isK2) {
      // Skema Kertas 1 (Objektif)
      questions.forEach((q, idx) => {
        const qNum = idx + 1;
        const ans = q.jawapanBetul || q.jawapan || "A";
        const explanation = q.penerangan || q.skema || `Jawapan: ${ans}`;

        tableRows.push(new TableRow({
          cantSplit: true,
          children: [
            new TableCell({
              width: { size: 1200, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: `${qNum}`, bold: true, font: FONT_FAMILY, size: 21 })] })]
            }),
            new TableCell({
              width: { size: 5416, type: WidthType.DXA },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: `Kunci Jawapan: `, font: FONT_FAMILY, size: 21 }),
                    new TextRun({ text: `${ans}`, bold: true, color: "B91C1C", font: FONT_FAMILY, size: 24 })
                  ]
                }),
                new Paragraph({
                  spacing: { before: 40 },
                  children: [
                    new TextRun({ text: explanation, font: FONT_FAMILY, size: 19 })
                  ]
                })
              ]
            }),
            new TableCell({
              width: { size: 1200, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: FONT_FAMILY, size: 20 })] })]
            }),
            new TableCell({
              width: { size: 1200, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1", font: FONT_FAMILY, size: 20 })] })]
            })
          ]
        }));
      });
    } else {
      // Skema Kertas 2 (Subjektif)
      questions.forEach((q, idx) => {
        const qNum = idx + 1;
        const pecahan = q.pecahan || [];
        let totalQMarks = 0;

        pecahan.forEach((p, pIdx) => {
          const sub = p.sub || "";
          const mark = p.markah || 1;
          totalQMarks += mark;
          const rubrik = p.rubrik || p.jawapan || `Pemarkahan untuk ${sub}`;

          tableRows.push(new TableRow({
            cantSplit: true,
            children: [
              new TableCell({
                width: { size: 1200, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: pIdx === 0 ? `Soalan ${qNum}` : "", bold: true, font: FONT_FAMILY, size: 21 }),
                      new TextRun({ text: `\n${sub}`, font: FONT_FAMILY, size: 20 })
                    ]
                  })
                ]
              }),
              new TableCell({
                width: { size: 5416, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: rubrik, font: FONT_FAMILY, size: 20 })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 1200, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${mark}`, font: FONT_FAMILY, size: 20 })] })]
              }),
              new TableCell({
                width: { size: 1200, type: WidthType.DXA },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: pIdx === pecahan.length - 1 ? `${totalQMarks}` : "", bold: true, font: FONT_FAMILY, size: 20 })] })]
              })
            ]
          }));
        });
      });
    }

    const skemaTable = new Table({
      width: { size: TOTAL_CONTENT_WIDTH, type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BLACK },
        bottom: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BLACK },
        left: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BLACK },
        right: { style: BorderStyle.SINGLE, size: 6, color: COLOR_BLACK },
        insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" },
        insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" }
      },
      rows: tableRows
    });

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 }
            }
          },
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "SULIT", bold: true, font: FONT_FAMILY, size: 22 }),
                new TextRun({ text: `\t\t\t\t\t\t\t${paperCode}`, bold: true, font: FONT_FAMILY, size: 22 })
              ]
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 240, after: 80 },
              children: [
                new TextRun({ text: "PANDUAN PENSKORAN SPM FIZIK", bold: true, font: FONT_FAMILY, size: 26 })
              ]
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 0, after: 200 },
              children: [
                new TextRun({ text: `${examTitle} ${tahunVal}`, bold: true, font: FONT_FAMILY, size: 22 })
              ]
            }),
            skemaTable,
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 360, after: 60 },
              children: [
                new TextRun({ text: "PANDUAN PENSKORAN TAMAT", bold: true, font: FONT_FAMILY, size: 22 })
              ]
            })
          ]
        }
      ]
    });

    return doc;
  }

  /**
   * Muat turun Blob dalam browser
   */
  function triggerDownload(blob, filename) {
    if (typeof window === "undefined" || !window.document) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return {
    buildExamDocument,
    buildSkemaDocument,
    exportExamToDocx: async function (mode, questions, meta) {
      const doc = await buildExamDocument(mode, questions, meta);
      const isK2 = mode === "kertas2";
      const paperName = isK2 ? "Kertas_2" : "Kertas_1";
      const dateStr = new Date().toISOString().slice(0, 10);
      const filename = `${paperName}_Fizik_SPM_${dateStr}.docx`;

      const blob = await Packer.toBlob(doc);
      triggerDownload(blob, filename);
      return blob;
    },
    exportScoringToDocx: async function (mode, questions, meta) {
      const doc = await buildSkemaDocument(mode, questions, meta);
      const isK2 = mode === "kertas2";
      const paperCode = isK2 ? "4531_2" : "4531_1";
      const dateStr = new Date().toISOString().slice(0, 10);
      const filename = `Skema_Penskoran_Fizik_${paperCode}_${dateStr}.docx`;

      const blob = await Packer.toBlob(doc);
      triggerDownload(blob, filename);
      return blob;
    }
  };
}));
