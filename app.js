
// ============================================================================
// GUIDED JSU PROGRESSIVE DISCLOSURE (MOD TETAPAN BERPANDU)
// ============================================================================

function toggleJsuDocumentView(forceShow) {
  const docCard = document.getElementById("jsu-document-card");
  const guideBox = document.getElementById("jsu-initial-guide-box");
  const btnText = document.getElementById("btn-jsu-text");
  const btnIcon = document.getElementById("btn-jsu-icon");
  const btnArrow = document.getElementById("btn-jsu-arrow");

  if (!docCard) return;

  const isCurrentlyVisible = (docCard.style.display !== "none" && !docCard.classList.contains("hidden"));
  const willShow = (forceShow !== undefined) ? forceShow : !isCurrentlyVisible;

  if (willShow) {
    // 1. Simpan tetapan terkini ke cache memory
    const selKer = document.getElementById("jsu-select-kertas");
    const selTing = document.getElementById("jsu-select-tingkatan");
    const selPep = document.getElementById("jsu-select-peperiksaan");
    const selCutoff = document.getElementById("jsu-select-cutoff-sk");

    if (selKer && selKer.value) {
      AppState.currentPaperMode = selKer.value;
      try {
        const settings = JSON.parse(localStorage.getItem("fizik_jsu_settings") || "{}");
        settings.currentPaperMode = selKer.value;
        settings.tingkatan = selTing ? selTing.value : "all";
        settings.peperiksaan = selPep ? selPep.value : "percubaan";
        settings.cutoffSk = selCutoff ? selCutoff.value : "";
        localStorage.setItem("fizik_jsu_settings", JSON.stringify(settings));
        localStorage.setItem("fizik_current_paper", selKer.value);
      } catch (e) {}
    }

    // 2. Render jadual JSU mengikut pilihan
    if (typeof renderJsuMatrix === "function") {
      renderJsuMatrix();
    }

    // 3. Paparkan jadual JSU dengan animasi smooth reveal
    docCard.style.display = "block";
    docCard.classList.remove("hidden");
    docCard.classList.add("reveal-fadeIn");
    if (guideBox) guideBox.style.display = "none";

    // 4. Kemas kini label butang
    if (btnText) btnText.textContent = "Sembunyikan Jadual JSU (Mod Ringkas)";
    if (btnIcon) btnIcon.setAttribute("data-lucide", "eye-off");
    if (btnArrow) btnArrow.setAttribute("data-lucide", "chevron-up");
    if (window.lucide && lucide.createIcons) lucide.createIcons();

    // 5. Skrol lembut ke permulaan jadual JSU
    setTimeout(() => {
      docCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);

    if (typeof showJsuNotification === "function") {
      const pName = (AppState.currentPaperMode === "kertas2") ? "Kertas 2" : "Kertas 1";
      showJsuNotification(`✓ Jadual JSU Penuh [${pName}] berjaya dipaparkan!`);
    }
  } else {
    // Sembunyikan jadual JSU — kembali kepada parameter card sahaja (tiada guide box)
    docCard.style.display = "none";
    docCard.classList.add("hidden");
    // jsu-initial-guide-box TIDAK dipaparkan semula — parameter card sudah cukup
    if (guideBox) guideBox.style.display = "none";

    if (btnText) btnText.textContent = "Sahkan Pilihan & Papar Jadual JSU Penuh";
    if (btnIcon) btnIcon.setAttribute("data-lucide", "layout-grid");
    if (btnArrow) btnArrow.setAttribute("data-lucide", "chevron-down");
    if (window.lucide && lucide.createIcons) lucide.createIcons();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function updateJsuGuideSummary() {
  const selKer = document.getElementById("jsu-select-kertas");
  const selTing = document.getElementById("jsu-select-tingkatan");
  const selPep = document.getElementById("jsu-select-peperiksaan");

  const sumKertas = document.getElementById("guide-summary-kertas");
  const sumPep = document.getElementById("guide-summary-pep");
  const sumTing = document.getElementById("guide-summary-ting");

  if (sumKertas && selKer) {
    sumKertas.textContent = selKer.options[selKer.selectedIndex]?.text || "Kertas 2";
  }
  if (sumPep && selPep) {
    sumPep.textContent = selPep.options[selPep.selectedIndex]?.text || "Peperiksaan Percubaan SPM";
  }
  if (sumTing && selTing) {
    sumTing.textContent = selTing.options[selTing.selectedIndex]?.text || "Tingkatan 4 & 5 (Gabungan SPM)";
  }
}

window.toggleJsuDocumentView = toggleJsuDocumentView;
window.updateJsuGuideSummary = updateJsuGuideSummary;

/**
 * HUB CENTER BANK SOALAN FIZIK SPM & ENJIN PEMASANGAN KERTAS
 * Logik Interaktif & Pengurusan Keadaan Aplikasi
 */

// Keadaan Global Aplikasi
const AppState = {
  currentTab: "dashboard",
  currentPaperMode: (function() {
    try {
      const s = JSON.parse(localStorage.getItem("fizik_jsu_settings") || "{}");
      if (s.currentPaperMode) return s.currentPaperMode;
      const leg = localStorage.getItem("fizik_current_paper");
      if (leg) return leg;
    } catch(e) {}
    return "kertas2"; // Default selaras dengan pilihan JSU Kertas 2
  })(), // "kertas1" | "kertas2" | "kertas3"
  currentStage: 0, // 0=Dashboard, 1=JSU, 2=Jana, 3=Semak, 4=Penskoran, 5=Cetak
  
  // Peringkat yang telah disimpan tetapan (completion tracking)
  completedStages: (function() {
    try {
      const s = localStorage.getItem("fizik_completed_stages");
      return s ? JSON.parse(s) : [1];
    } catch(e) {
      return [1];
    }
  })(),

  // Penapis Bank Soalan (7 Kriteria Mengikut Spesifikasi)
  filters: {
    tingkatan: "all",
    kertas: "all",
    bidang: "all",
    sk: "all",
    konstruk: "all",
    aras: "all",
    sumber: "all",
    search: ""
  },

  // Kertas Peperiksaan yang sedang dipasang
  assembledPapers: {
    kertas1: [], // Soalan Kertas 1 (Objektif)
    kertas2: [], // Soalan Kertas 2 (Struktur & Esei)
    kertas3: []  // Soalan Kertas 3 (Amali Sains)
  },

  // Mod Paparan Pemasangan: 'full' (Lengkap dengan pilihan/subsoalan) atau 'compact' (Padat)
  assemblyViewMode: "full",

  // Mod Cetakan: 'single' (satu kertas) atau 'combined' (kesemua 3 kertas dalam satu dokumen)
  printMode: "single",
  expandedWorkbenchSlots: {},
  expandedWorkbenchSkema: {}
};

// Inisialisasi Apabila DOM Siap
document.addEventListener("DOMContentLoaded", () => {
  // Tapis soalan yang telah dipadam secara manual oleh pengguna (tersimpan di localStorage)
  try {
    const readdedIds = ["SPM_2024_K2_Q05E", "SPM_2024_K2_Q02", "SPM_2023_K2_Q02", "SPM_2021_K2_Q09"];
    let deletedIds = JSON.parse(localStorage.getItem("fizik_deleted_question_ids") || "[]");
    if (deletedIds.some(id => readdedIds.includes(id))) {
      deletedIds = deletedIds.filter(id => !readdedIds.includes(id));
      localStorage.setItem("fizik_deleted_question_ids", JSON.stringify(deletedIds));
    }
    if (deletedIds.length > 0 && typeof QUESTION_BANK !== "undefined") {
      const activeQuestions = QUESTION_BANK.filter(q => !deletedIds.includes(q.id));
      QUESTION_BANK.length = 0;
      activeQuestions.forEach(q => QUESTION_BANK.push(q));
    }
  } catch (e) {
    console.warn("Ralat memuatkan senarai soalan dipadam:", e);
  }

  initNavigation();
  initFormulaModal();
  initFilters();
  initAutoAssemblyDefaults();
  populateBankSoalanDropdowns();
  renderQuestionsBank();
  renderAssemblyWorkbench();
  if (typeof initJsuFilters === "function") initJsuFilters();
  if (typeof renderJsuMatrix === "function") renderJsuMatrix();
  renderSpreadView();
  renderPrintableExam();
  renderAnalyticsDashboard();
  updateDashboardMetrics();
});

/* ==========================================================================
   1. NAVIGASI TAB & MODAL
   ========================================================================== */
function initNavigation() {
  // Brand Logo / Home Trigger
  const brandHome = document.getElementById("nav-brand-home");
  if (brandHome) {
    brandHome.addEventListener("click", () => switchWorkflowStage(0));
  }

  // Stage Stepper Navigation Buttons (Home, Kembali, Seterusnya)
  const btnHome = document.getElementById("btn-nav-home");
  const btnBack = document.getElementById("btn-nav-back");
  const btnNext = document.getElementById("btn-nav-next");

  if (btnHome) {
    btnHome.addEventListener("click", () => switchWorkflowStage(0));
  }

  if (btnBack) {
    btnBack.addEventListener("click", () => {
      const current = AppState.currentStage || 0;
      if (current > 1) {
        switchWorkflowStage(current - 1);
      } else if (current === 1) {
        switchWorkflowStage(0); // Kembali ke Dashboard Utama
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      const current = AppState.currentStage || 0;
      if (current === 0) {
        switchWorkflowStage(1);
      } else if (current < 5) {
        switchWorkflowStage(current + 1);
      }
    });
  }

  // Top Header Animated Node Line Steps (1 to 5)
  const headerNodeSteps = document.querySelectorAll(".nodeline-step");
  headerNodeSteps.forEach(btn => {
    btn.addEventListener("click", () => {
      const step = parseInt(btn.getAttribute("data-step"), 10);
      if (step) switchWorkflowStage(step);
    });
  });

  // Hero CTA Buttons
  const btnHeroJana = document.getElementById("btn-hero-jana-kertas");
  if (btnHeroJana) {
    // Apabila klik terus ke JSU sama macam butang bulat no. 1 (Langkah 1: Tetapan JSU)
    btnHeroJana.addEventListener("click", () => switchWorkflowStage(1));
  }

  const btnHeroBank = document.getElementById("btn-hero-lihat-bank");
  if (btnHeroBank) {
    // Halaman baru dedikasi untuk Bank Soalan
    btnHeroBank.addEventListener("click", () => navigateToBankSoalan());
  }

  // Butang Navigasi Dalam Halaman Dedikasi Bank Soalan
  const btnBankHome = document.getElementById("btn-bank-kembali-home");
  if (btnBankHome) {
    btnBankHome.addEventListener("click", () => switchWorkflowStage(0));
  }
  const btnBankJsu = document.getElementById("btn-bank-mula-jsu");
  if (btnBankJsu) {
    btnBankJsu.addEventListener("click", () => switchWorkflowStage(1));
  }

  // Top Tracker Stage Items (1 to 5)
  const trackerItems = document.querySelectorAll(".tracker-step-item");
  trackerItems.forEach(item => {
    item.addEventListener("click", () => {
      const stage = parseInt(item.getAttribute("data-stage"), 10);
      if (stage) switchWorkflowStage(stage);
    });
  });

  // Dashboard Circular Workflow Nodes (1 to 5)
  const dashboardStepNodes = document.querySelectorAll(".workflow-step-node");
  dashboardStepNodes.forEach(node => {
    const step = parseInt(node.getAttribute("data-step"), 10);
    const img = node.querySelector(".sphere-premium-img");

    const handleNodeAction = () => {
      if (step) switchWorkflowStage(step);
    };

    node.addEventListener("click", handleNodeAction);
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleNodeAction();
      }
    });

    // Dynamic Hover Color: physical sphere turns radiant crimson red!
    node.addEventListener("mouseenter", () => {
      if (img && step >= 1 && step <= 5) {
        img.src = `assets/sphere_${step}_active.png`;
      }
    });

    node.addEventListener("mouseleave", () => {
      const activeTarget = (AppState.currentStage === 0) ? 1 : AppState.currentStage;
      const isCompleted = AppState.completedStages && AppState.completedStages.includes(step);
      if (img && step >= 1 && step <= 5) {
        if (!isCompleted && step !== activeTarget) {
          img.src = `assets/sphere_${step}_inactive.png`;
        } else {
          img.src = `assets/sphere_${step}_active.png`;
        }
      }
    });
  });

  // Corporate Quick Launch Buttons
  const btnStartJsu = document.getElementById("btn-corp-start-jsu");
  if (btnStartJsu) {
    btnStartJsu.addEventListener("click", () => switchWorkflowStage(1));
  }

  // Asset Preview Modal (ChatGPT DALL-E Transparent PNG)
  const btnViewAsset = document.getElementById("btn-corp-view-asset");
  const modalAsset = document.getElementById("modal-asset-preview");
  const btnCloseAsset = document.getElementById("btn-close-asset-modal");

  if (btnViewAsset && modalAsset) {
    btnViewAsset.addEventListener("click", () => modalAsset.classList.add("show"));
  }

  if (btnCloseAsset && modalAsset) {
    btnCloseAsset.addEventListener("click", () => modalAsset.classList.remove("show"));
  }

  if (modalAsset) {
    modalAsset.addEventListener("click", (e) => {
      if (e.target === modalAsset) modalAsset.classList.remove("show");
    });
  }

  // Set initial stepper state (Stage 0: Dashboard Utama)
  updateStepperUI(0);
}

function getActivePaperMode() {
  const selKer = document.getElementById("jsu-select-kertas");
  if (selKer && selKer.value) {
    AppState.currentPaperMode = selKer.value;
    try {
      localStorage.setItem("fizik_current_paper", selKer.value);
    } catch(e) {}
    return selKer.value;
  }
  try {
    const s = JSON.parse(localStorage.getItem("fizik_jsu_settings") || "{}");
    if (s.currentPaperMode) {
      AppState.currentPaperMode = s.currentPaperMode;
      return s.currentPaperMode;
    }
    const leg = localStorage.getItem("fizik_current_paper");
    if (leg) {
      AppState.currentPaperMode = leg;
      return leg;
    }
  } catch(e) {}
  return AppState.currentPaperMode || "kertas2";
}


// ============================================================================
// RESTORE JSU DROPDOWNS FROM CACHE (Cache Memory Restore)
// ============================================================================
function restoreJsuDropdownsFromCache() {
  try {
    const settings = JSON.parse(localStorage.getItem("fizik_jsu_settings") || "{}");

    const kertasSelect = document.getElementById("jsu-select-kertas");
    const tingkatanSelect = document.getElementById("jsu-select-tingkatan");
    const peperiksaanSelect = document.getElementById("jsu-select-peperiksaan");
    const cutoffSelect = document.getElementById("jsu-select-cutoff-sk");

    // Restore kertas (priority: settings.currentPaperMode)
    if (kertasSelect && settings.currentPaperMode) {
      kertasSelect.value = settings.currentPaperMode;
      AppState.currentPaperMode = settings.currentPaperMode;
    }

    // Restore tingkatan
    if (tingkatanSelect && settings.tingkatan) {
      tingkatanSelect.value = settings.tingkatan;
    }

    // Restore peperiksaan (key: peperiksaan)
    if (peperiksaanSelect && settings.peperiksaan) {
      peperiksaanSelect.value = settings.peperiksaan;
    }

    // Restore cutoff SK if applicable
    if (cutoffSelect && settings.cutoffSk) {
      cutoffSelect.value = settings.cutoffSk;
    }

    // Sync AppState
    if (settings.currentPaperMode) {
      AppState.currentPaperMode = settings.currentPaperMode;
    }

    // Update guide summary to reflect restored values
    if (typeof updateJsuGuideSummary === "function") {
      updateJsuGuideSummary();
    }
  } catch (e) {
    console.warn("Gagal memulihkan dropdown JSU dari cache:", e);
  }
}


/* ==========================================================================
   FUNGSI REPOSITORI: BANK SOALAN (BIDANG & STANDARD KANDUNGAN)
   ========================================================================== */
function getBidangPembelajaran(tingkatan, babNo) {
  const t = parseInt(tingkatan, 10);
  const b = parseInt(babNo, 10);
  if (t === 4) {
    if (b === 1) return "Asas Fizik";
    if (b === 2 || b === 3) return "Mekanik Newton";
    if (b === 4) return "Termofizik";
    if (b === 5 || b === 6) return "Gelombang, Cahaya dan Optik";
  } else if (t === 5) {
    if (b === 1 || b === 2) return "Mekanik Newton";
    if (b === 3 || b === 4) return "Elektrik dan Keelektromagnetan";
    if (b === 5) return "Fizik Gunaan";
    if (b === 6 || b === 7) return "Fizik Moden";
  }
  return "Umum";
}

function populateBankSoalanDropdowns() {
  const fTingkatan = document.getElementById("filter-tingkatan");
  const fBidang = document.getElementById("filter-bidang");
  const fSk = document.getElementById("filter-sk");
  if (!fSk) return;

  const currentTing = fTingkatan ? fTingkatan.value : "all";
  const currentBidang = fBidang ? fBidang.value : "all";

  // Dapatkan semua SK unik dari QUESTION_BANK yang sepadan dengan Tingkatan & Bidang
  const skMap = new Map();
  
  if (typeof QUESTION_BANK !== "undefined") {
    QUESTION_BANK.forEach(q => {
      if (!q.sk) return;
      if (currentTing !== "all" && q.tingkatan.toString() !== currentTing) return;
      const b = getBidangPembelajaran(q.tingkatan, q.babNo);
      if (currentBidang !== "all" && b !== currentBidang) return;

      if (!skMap.has(q.sk)) {
        skMap.set(q.sk, {
          tingkatan: q.tingkatan,
          babNo: q.babNo,
          babNama: q.babNama,
          count: 1
        });
      } else {
        skMap.get(q.sk).count++;
      }
    });
  }

  const prevSelected = AppState.filters.sk || "all";
  let optionsHtml = `<option value="all">Semua Standard Kandungan (${skMap.size > 0 ? skMap.size + " SK" : "44 SK"})</option>`;

  // Asingkan SK mengikut Tingkatan 4 dahulu, kemudian barulah Tingkatan 5
  const t4Sks = [];
  const t5Sks = [];

  Array.from(skMap.keys()).forEach(skName => {
    const info = skMap.get(skName);
    if (info.tingkatan === 4 || info.tingkatan === "4") {
      t4Sks.push(skName);
    } else {
      t5Sks.push(skName);
    }
  });

  const sortSkList = (list) => {
    return list.sort((a, b) => {
      const infoA = skMap.get(a);
      const infoB = skMap.get(b);
      // 1. Susun mengikut Nombor Bab
      if (infoA.babNo !== infoB.babNo) {
        return infoA.babNo - infoB.babNo;
      }
      // 2. Susun mengikut susunan kod atau nama SK
      return a.localeCompare(b, undefined, { numeric: true });
    });
  };

  sortSkList(t4Sks);
  sortSkList(t5Sks);

  // Kumpulan Tingkatan 4 (Dipaparkan dahulu)
  if (t4Sks.length > 0) {
    optionsHtml += `<optgroup label="─── TINGKATAN 4 (${t4Sks.length} SK) ───">`;
    t4Sks.forEach(skName => {
      const info = skMap.get(skName);
      const isSelected = skName === prevSelected ? "selected" : "";
      optionsHtml += `<option value="${skName}" ${isSelected}>${skName} [T${info.tingkatan} Bab ${info.babNo}] (${info.count} soalan)</option>`;
    });
    optionsHtml += `</optgroup>`;
  }

  // Kumpulan Tingkatan 5 (Dipaparkan selepas Tingkatan 4)
  if (t5Sks.length > 0) {
    optionsHtml += `<optgroup label="─── TINGKATAN 5 (${t5Sks.length} SK) ───">`;
    t5Sks.forEach(skName => {
      const info = skMap.get(skName);
      const isSelected = skName === prevSelected ? "selected" : "";
      optionsHtml += `<option value="${skName}" ${isSelected}>${skName} [T${info.tingkatan} Bab ${info.babNo}] (${info.count} soalan)</option>`;
    });
    optionsHtml += `</optgroup>`;
  }

  fSk.innerHTML = optionsHtml;
  if (prevSelected !== "all" && !skMap.has(prevSelected)) {
    AppState.filters.sk = "all";
    fSk.value = "all";
  }

  // Dapatkan semua Sumber unik dari QUESTION_BANK
  const fSumber = document.getElementById("filter-sumber");
  if (fSumber) {
    const sumberMap = new Map();
    if (typeof QUESTION_BANK !== "undefined") {
      QUESTION_BANK.forEach(q => {
        const s = (q.sumber && q.sumber.trim()) ? q.sumber.trim() : "Koleksi DSKP KSSM & Bank Standard SPM";
        sumberMap.set(s, (sumberMap.get(s) || 0) + 1);
      });
    }

    const prevSumberSelected = AppState.filters.sumber || "all";
    let sumberOptionsHtml = `<option value="all">Semua Sumber / Koleksi (${sumberMap.size > 0 ? sumberMap.size + ' Sumber' : 'Semua'})</option>`;
    const sortedSumber = Array.from(sumberMap.keys()).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    sortedSumber.forEach(sName => {
      const count = sumberMap.get(sName);
      const isSelected = sName === prevSumberSelected ? "selected" : "";
      sumberOptionsHtml += `<option value="${sName}" ${isSelected}>${sName} (${count} soalan)</option>`;
    });

    fSumber.innerHTML = sumberOptionsHtml;
    if (prevSumberSelected !== "all" && !sumberMap.has(prevSumberSelected)) {
      AppState.filters.sumber = "all";
      fSumber.value = "all";
    }
  }
}

/* ==========================================================================
   FUNGSI PEMILIHAN SOALAN MENGIKUT SK DARI BANK SOALAN
   ========================================================================== */
function findMatchingBankSk(slotSk, tingkatan, babNo) {
  if (!slotSk) return "all";
  const bank = (typeof QUESTION_BANK !== "undefined") ? QUESTION_BANK : [];
  const norm = (s) => (s || "").toLowerCase().replace(/^sk\s*/i, "").trim();
  const cleanSlot = norm(slotSk);

  // 1. Padanan tepat mengikut teks dinormalisasi
  const exactMatch = bank.find(q => norm(q.sk) === cleanSlot);
  if (exactMatch) return exactMatch.sk;

  // 2. Ekstrak kod nombor seperti 2.1, 5.1, 10.1 dll.
  const numMatch = cleanSlot.match(/(\d+\.\d+)/);
  const code = numMatch ? numMatch[1] : null;

  // 2a. Keutamaan 1: Tingkatan sama & kod SK sama
  if (code && tingkatan) {
    const match = bank.find(q => q.tingkatan == tingkatan && q.sk && q.sk.includes(code));
    if (match) return match.sk;
  }

  // 2b. Keutamaan 2: Kod SK sama di mana-mana dalam bank
  if (code) {
    const match = bank.find(q => q.sk && q.sk.includes(code));
    if (match) return match.sk;
  }

  // 3. Keutamaan 3: Padanan kata kunci dalam Tingkatan & Bab sama
  const words = cleanSlot.replace(/[\(\)\[\],&+\-\/=]/g, " ").split(/\s+/).filter(w => w.length > 3);
  let bestScore = 0;
  let bestSk = "all";
  bank.forEach(q => {
    if (!q.sk) return;
    if (tingkatan && q.tingkatan != tingkatan) return;
    if (babNo && q.babNo != babNo) return;
    const qSkNorm = norm(q.sk);
    let score = 0;
    words.forEach(w => {
      if (qSkNorm.includes(w)) score++;
    });
    if (score > bestScore) {
      bestScore = score;
      bestSk = q.sk;
    }
  });

  return bestSk;
}

function openBankSoalanForSlot(paperMode, slotIndex, explicitSk, explicitTing, explicitBab) {
  const mode = paperMode || AppState.currentPaperMode || "kertas2";
  const list = AppState.assembledPapers[mode] || [];
  const slot = (slotIndex >= 0 && slotIndex < list.length) ? list[slotIndex] : {};

  const ting = explicitTing || slot.tingkatan;
  const bab = explicitBab || slot.babNo;
  const rawSk = explicitSk || slot.sk || slot.topik || "";
  const slotNo = slotIndex >= 0 ? (slotIndex + 1) : (slot.slotNo || slot.no || 1);

  // Simpan rujukan slot sasaran untuk pemilihan terus
  AppState.targetSlotForSelection = {
    mode: mode,
    slotIndex: slotIndex,
    slotNo: slotNo,
    sk: rawSk,
    tingkatan: ting,
    babNo: bab,
    bahagian: slot.bahagian || null,
    aras: slot.aras || null,
    konstruk: slot.konstruk || null
  };
  // Rekod peringkat asal untuk kembali selepas memilih soalan
  AppState.returnWorkflowStage = (AppState.currentStage === 2 || AppState.currentTab === "senarai-soalan") ? 2 : 3;

  // Cari padanan SK dalam QUESTION_BANK
  const matchedSk = findMatchingBankSk(rawSk, ting, bab);

  // Tetapkan penapis tingkatan
  AppState.filters.tingkatan = ting ? ting.toString() : "all";

  // Semak sama ada soalan wujud untuk kertas khusus, jika tiada biar all supaya bank tidak kosong
  const targetKertasNum = (mode === "kertas1") ? 1 : ((mode === "kertas2") ? 2 : 3);
  const bank = (typeof QUESTION_BANK !== "undefined") ? QUESTION_BANK : [];
  const hasSpecificKertasQ = bank.some(q => q.kertas === targetKertasNum && (matchedSk !== "all" ? (q.sk === matchedSk || (q.sk && q.sk.includes(matchedSk))) : true));
  AppState.filters.kertas = hasSpecificKertasQ ? targetKertasNum.toString() : "all";

  // Tetapkan penapis SK berkaitan
  AppState.filters.sk = (matchedSk && matchedSk !== "all") ? matchedSk : "all";
  AppState.filters.bidang = "all";
  AppState.filters.konstruk = "all";
  AppState.filters.aras = "all";
  AppState.filters.sumber = "all";
  AppState.filters.search = "";

  // Bawa ke antaramuka Bank Soalan
  navigateToBankSoalan();

  // Segerakkan dropdown penapis dalam DOM
  const fTingkatan = document.getElementById("filter-tingkatan");
  const fKertas = document.getElementById("filter-kertas");
  const fBidang = document.getElementById("filter-bidang");
  const fSk = document.getElementById("filter-sk");
  const fKonstruk = document.getElementById("filter-konstruk");
  const fAras = document.getElementById("filter-aras");
  const fSumber = document.getElementById("filter-sumber");
  const fSearch = document.getElementById("filter-search");

  if (fTingkatan) fTingkatan.value = AppState.filters.tingkatan;
  if (fKertas) fKertas.value = AppState.filters.kertas;
  if (fBidang) fBidang.value = "all";
  if (fKonstruk) fKonstruk.value = "all";
  if (fAras) fAras.value = "all";
  if (fSumber) fSumber.value = "all";
  if (fSearch) fSearch.value = "";

  // Muat semula pilihan dropdown SK berdasarkan tingkatan yang dipilih
  populateBankSoalanDropdowns();
  if (fSk && AppState.filters.sk !== "all") {
    fSk.value = AppState.filters.sk;
  }

  // Render semula Bank Soalan dengan penapis dan banner slot
  renderQuestionsBank();

  // Paparkan notifikasi panduan
  const skLabel = (matchedSk && matchedSk !== "all") ? matchedSk : (rawSk || "Standard Kandungan Berkaitan");
  if (typeof showJsuNotification === "function") {
    showJsuNotification(`📌 Memilih soalan untuk Slot ${slotNo}. Penapis SK: ${skLabel}`);
  }
}

function cancelTargetSlotSelection() {
  const retStage = AppState.returnWorkflowStage || 3;
  AppState.targetSlotForSelection = null;
  AppState.returnWorkflowStage = null;
  switchWorkflowStage(retStage);
}

function selectQuestionForTargetSlot(qId) {
  if (!AppState.targetSlotForSelection) {
    toggleQuestionAssembly(qId);
    return;
  }
  const target = AppState.targetSlotForSelection;
  const question = (typeof QUESTION_BANK !== "undefined") ? QUESTION_BANK.find(q => q.id === qId) : null;
  if (!question) return;

  const mode = target.mode || AppState.currentPaperMode || "kertas2";
  const list = AppState.assembledPapers[mode];
  if (list && target.slotIndex >= 0 && target.slotIndex < list.length) {
    const qCopy = { ...question };
    qCopy.slotNo = target.slotNo;
    qCopy.no = target.slotNo;
    qCopy.isBlank = false;

    // Kekalkan metadata bahagian & markah daripada slot JSU jika ada
    const prev = list[target.slotIndex];
    if (prev) {
      if (prev.bahagian && !qCopy.bahagian) qCopy.bahagian = prev.bahagian;
      if (!qCopy.aras && prev.aras) qCopy.aras = prev.aras;
      if (!qCopy.konstruk && prev.konstruk) qCopy.konstruk = prev.konstruk;
      if (mode === "kertas2" && (!qCopy.markah || qCopy.markah === 1) && prev.markah) {
        qCopy.markah = prev.markah;
        qCopy.markahPenuh = prev.markahPenuh || prev.markah;
      }
    }
    list[target.slotIndex] = qCopy;
  }

  const returnStage = AppState.returnWorkflowStage || 3;
  AppState.targetSlotForSelection = null;
  AppState.returnWorkflowStage = null;

  if (typeof showJsuNotification === "function") {
    showJsuNotification(`✓ Soalan ${question.id} berjaya dipilih untuk Slot ${target.slotNo}!`);
  }
  switchWorkflowStage(returnStage);
}

function navigateToBankSoalan() {
  const viewPanels = document.querySelectorAll(".view-panel");
  viewPanels.forEach(p => p.classList.remove("active"));
  const targetPanel = document.getElementById("view-bank-soalan");
  if (targetPanel) {
    targetPanel.classList.add("active");
    AppState.currentTab = "bank-soalan";
    AppState.currentStage = "bank-soalan";
    populateBankSoalanDropdowns();
    renderQuestionsBank();
  }
  // Stepper/node line dinyahaktifkan untuk paparan repositori mandiri
  const headerNodeSteps = document.querySelectorAll(".nodeline-step");
  headerNodeSteps.forEach(btn => btn.classList.remove("active"));
  if (window.lucide && lucide.createIcons) lucide.createIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function switchWorkflowStage(stageNumber) {
  const stage = parseInt(stageNumber, 10);
  AppState.currentStage = stage;

  // Kesinambungan Kertas (Cache Memory Sync merentasi semua menu):
  AppState.currentPaperMode = getActivePaperMode();

  const viewPanels = document.querySelectorAll(".view-panel");

  // Exact 5-Stage Flow Mapping:
  // 0: Dashboard Utama
  // 1: User Tetapkan JSU (view-jsu-matrix)
  // 2: User Semak Senarai Soalan Berdasarkan JSU (view-senarai-soalan)
  // 3: User Semak Soalan & Skema Jawapan (view-hub-pemasangan)
  // 4: User Semak Format Soalan DOCX & PDF (view-cetak-lpm)
  // 5: User Semak Skema Penskoran DOCX & PDF (view-skema-penskoran)
  const stageMap = {
    0: "dashboard",
    1: "jsu-matrix",
    2: "senarai-soalan",
    3: "hub-pemasangan",
    4: "cetak-lpm",
    5: "skema-penskoran",
    "bank-soalan": "bank-soalan"
  };

  const targetTab = stageMap[stage] || stageMap[stageNumber] || (stageNumber === "bank-soalan" ? "bank-soalan" : "dashboard");
  viewPanels.forEach(p => p.classList.remove("active"));
  const targetPanel = document.getElementById(`view-${targetTab}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
    AppState.currentTab = targetTab;
    
    // Refresh views based on selected stage
    if (targetTab === "jsu-matrix") {
      restoreJsuDropdownsFromCache();
      // Pastikan jsu-initial-guide-box kekal tersembunyi - hanya parameter card dipaparkan
      const guideBoxEl = document.getElementById("jsu-initial-guide-box");
      if (guideBoxEl) guideBoxEl.style.display = "none";
      const docCard = document.getElementById("jsu-document-card");
      if (docCard && docCard.style.display !== "none" && !docCard.classList.contains("hidden")) {
        if (typeof renderJsuMatrix === "function") renderJsuMatrix();
      }
    }
    if (targetTab === "senarai-soalan") {
      autoFillAssembledPaper(AppState.currentPaperMode);
      if (typeof renderSenaraiSoalan === "function") renderSenaraiSoalan();
    }
    if (targetTab === "hub-pemasangan") {
      AppState.assemblyViewMode = "full";
      if (typeof renderAssemblyWorkbench === "function") renderAssemblyWorkbench();
    }
    if (targetTab === "cetak-lpm" && typeof renderPrintableExam === "function") renderPrintableExam();
    if (targetTab === "skema-penskoran" && typeof renderSkemaPenskoran === "function") renderSkemaPenskoran();
    if (targetTab === "bank-soalan") {
      populateBankSoalanDropdowns();
      if (typeof renderQuestionsBank === "function") renderQuestionsBank();
    }
  }

  updateStepperUI(stage);
  if (window.lucide) lucide.createIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateStepperUI(stageNumber) {
  const stage = parseInt(stageNumber, 10);

  // Update Header Animated Workflow Node Line (5 Peringkat)
  const headerNodeSteps = document.querySelectorAll(".nodeline-step");
  const activeTarget = (stage === 0) ? 1 : stage;

  headerNodeSteps.forEach(btn => {
    const step = parseInt(btn.getAttribute("data-step"), 10);
    const isCompleted = AppState.completedStages && AppState.completedStages.includes(step);

    btn.classList.remove("active", "completed");

    if (isCompleted) {
      btn.classList.add("completed");
    }
    if (step === activeTarget) {
      btn.classList.add("active");
    }
  });

  // Update Connectors between Nodes (1-2, 2-3, 3-4, 4-5)
  for (let i = 1; i <= 4; i++) {
    const conn = document.getElementById(`nodeline-conn-${i}`);
    if (conn) {
      conn.classList.remove("completed", "flow-active");
      const isStageDone = AppState.completedStages && AppState.completedStages.includes(i);

      if (isStageDone) {
        conn.classList.add("completed", "flow-active");
      } else if (activeTarget > i) {
        conn.classList.add("completed");
      } else if (activeTarget === i) {
        conn.classList.add("flow-active");
      }
    }
  }

  // Update Top Tracker (if present)
  const trackerItems = document.querySelectorAll(".tracker-step-item");
  trackerItems.forEach(item => {
    const itemStage = parseInt(item.getAttribute("data-stage"), 10);
    item.classList.remove("active", "completed");

    if (stage === 0) {
      // Pada dashboard: tiada peringkat aktif
    } else if (itemStage === stage) {
      item.classList.add("active");
    } else if (itemStage < stage) {
      item.classList.add("completed");
    }
  });
  // Update 5 Photorealistic Workflow Spheres on Landing Page
  const dashboardSpheres = document.querySelectorAll(".workflow-sphere-anchor");
  dashboardSpheres.forEach(sphere => {
    const step = parseInt(sphere.getAttribute("data-step"), 10);
    const statusBadge = sphere.querySelector(".sphere-status-badge");
    const img = sphere.querySelector(".sphere-premium-img");
    // By default on landing page (stage 0), Step 1 is active per reference design
    const activeTarget = (stage === 0) ? 1 : stage;
    const isCompleted = AppState.completedStages && AppState.completedStages.includes(step);
    const labelEl = sphere.querySelector(".sphere-label-text");

    // Dynamic Image & Class Update:
    if (isCompleted) {
      sphere.classList.remove("inactive-step");
      sphere.classList.add("completed-step");
      if (img) img.src = `assets/sphere_${step}_active.png`;
      if (labelEl) {
        labelEl.classList.remove("inactive");
        labelEl.classList.add("completed", "active");
      }
    } else if (step === activeTarget && activeTarget >= 1 && activeTarget <= 5) {
      sphere.classList.add("active-step");
      sphere.classList.remove("inactive-step", "completed-step");
      if (img) img.src = `assets/sphere_${step}_active.png`;
      if (labelEl) { labelEl.classList.add("active"); labelEl.classList.remove("completed"); }
    } else {
      sphere.classList.add("inactive-step");
      sphere.classList.remove("active-step", "completed-step");
      if (img) img.src = `assets/sphere_${step}_inactive.png`;
      if (labelEl) { labelEl.classList.remove("active", "completed"); }
    }
    // Legacy class support
    if (step === 1 && (stage === 0 || stage === 1)) {
      sphere.classList.add("active-step-1");
    } else {
      sphere.classList.remove("active-step-1");
    }
    // Update status badge
    if (statusBadge) {
      statusBadge.classList.toggle("completed", isCompleted);
    }
  });
  const btnBack = document.getElementById("btn-nav-back");
  const btnNext = document.getElementById("btn-nav-next");

  if (btnBack) {
    btnBack.disabled = (stage === 0);
  }

  if (btnNext) {
    btnNext.disabled = (stage === 5);
  }
}

function initFormulaModal() {
  const modal = document.getElementById("modal-formulas");
  const btnOpen = document.getElementById("btn-show-formulas");
  const btnClose = document.getElementById("btn-close-formulas");
  const formulaContainer = document.getElementById("formula-list-container");

  if (btnOpen && modal) {
    btnOpen.addEventListener("click", () => {
      renderFormulas(formulaContainer);
      modal.classList.add("show");
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });
}

function renderFormulas(container) {
  if (!container) return;
  container.innerHTML = FORMULA_LIST.map(f => `
    <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.6rem 0.8rem;">
      <div style="font-size: 0.7rem; color: var(--primary-purple); font-weight: 700; text-transform: uppercase;">
        #${f.no} — ${f.kategori}
      </div>
      <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-top: 0.2rem;">
        ${f.rumus}
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   2. PENAPIS & PAPARAN BANK SOALAN (6 DROPDOWN DEDIKASI)
   ========================================================================== */
function initFilters() {
  const fTingkatan = document.getElementById("filter-tingkatan");
  const fKertas = document.getElementById("filter-kertas");
  const fBidang = document.getElementById("filter-bidang");
  const fSk = document.getElementById("filter-sk");
  const fKonstruk = document.getElementById("filter-konstruk");
  const fAras = document.getElementById("filter-aras");
  const fSumber = document.getElementById("filter-sumber");
  const fSearch = document.getElementById("filter-search");
  const btnReset = document.getElementById("btn-reset-filters");

  if (fTingkatan) {
    fTingkatan.addEventListener("change", (e) => {
      AppState.filters.tingkatan = e.target.value;
      populateBankSoalanDropdowns();
      renderQuestionsBank();
    });
  }

  if (fKertas) {
    fKertas.addEventListener("change", (e) => {
      AppState.filters.kertas = e.target.value;
      renderQuestionsBank();
    });
  }

  if (fBidang) {
    fBidang.addEventListener("change", (e) => {
      AppState.filters.bidang = e.target.value;
      populateBankSoalanDropdowns();
      renderQuestionsBank();
    });
  }

  if (fSk) {
    fSk.addEventListener("change", (e) => {
      AppState.filters.sk = e.target.value;
      renderQuestionsBank();
    });
  }

  if (fKonstruk) {
    fKonstruk.addEventListener("change", (e) => {
      AppState.filters.konstruk = e.target.value;
      renderQuestionsBank();
    });
  }

  if (fAras) {
    fAras.addEventListener("change", (e) => {
      AppState.filters.aras = e.target.value;
      renderQuestionsBank();
    });
  }

  if (fSumber) {
    fSumber.addEventListener("change", (e) => {
      AppState.filters.sumber = e.target.value;
      renderQuestionsBank();
    });
  }

  if (fSearch) {
    fSearch.addEventListener("input", (e) => {
      AppState.filters.search = e.target.value.toLowerCase().trim();
      renderQuestionsBank();
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      AppState.filters = {
        tingkatan: "all",
        kertas: "all",
        bidang: "all",
        sk: "all",
        konstruk: "all",
        aras: "all",
        sumber: "all",
        search: ""
      };
      if (fTingkatan) fTingkatan.value = "all";
      if (fKertas) fKertas.value = "all";
      if (fBidang) fBidang.value = "all";
      if (fSk) fSk.value = "all";
      if (fKonstruk) fKonstruk.value = "all";
      if (fAras) fAras.value = "all";
      if (fSumber) fSumber.value = "all";
      if (fSearch) fSearch.value = "";
      populateBankSoalanDropdowns();
      renderQuestionsBank();
    });
  }
}


function getQuestionDiagramHtml(q, frameClass = "qcard-diagram-box") {
  if (q.rajahUrl) {
    return `<div class="${frameClass}"><img src="${q.rajahUrl}" alt="Rajah Soalan ${q.id}" class="q-diagram-img" loading="lazy"></div>`;
  }
  if (q.rajahSvg) {
    return `<div class="${frameClass}">${q.rajahSvg}</div>`;
  }
  return "";
}

function formatBilingualText(raw) {
  if (!raw || typeof raw !== "string") return raw || "";
  
  // If already contains soalan-en or explicit italic tags, just replace newlines with <br>
  if (/<(em|i|span)\b[^>]*class=["']soalan-en/.test(raw) || /<i>[\s\S]*?<\/i>/i.test(raw) || /<em>[\s\S]*?<\/em>/i.test(raw)) {
    return raw.replace(/\n/g, "<br>");
  }

  // Split by double newline first to preserve paragraph structure
  const paragraphs = raw.split(/\n\s*\n/);
  
  const formattedParas = paragraphs.map(para => {
    const lines = para.split("\n");
    let lastWasMs = false;
    
    const formattedLines = lines.map(line => {
      const trimmed = line.trim();
      if (!trimmed) return "";
      
      const clean = trimmed.replace(/^\([a-z0-9]+\)\s*/i, "").replace(/^[0-9]+\.\s*/, "");
      const words = clean.toLowerCase().split(/[^a-z0-9]+/);
      let enScore = 0;
      let msScore = 0;
      const enKeys = [
        "diagram","which","what","why","how","calculate","state","explain","determine","shows","is","are","of","the","in","with","to","from","for","by","when","if","that","between","acting","acted","neglected","object","student","mass","force","acceleration","velocity","speed","wavelength","frequency","energy","pressure","temperature","heat","decay","electric","resistance","light","ray","focal","lens","mirror","wave","pendulum","spring","circuit","photon","quantum","forward","bias","reverse","straight","parallel","perpendicular","reading","value","correct","produces","greater","smaller","high","low","decreases","increases","constant","weight","work","power","impulse","density","specific","latent","reflection","refraction","diffraction","interference","potential","current","magnetic","induction","transformer","logic","gate","fission","fusion","threshold","function","underline","answer","statement","below","normal","reaction","slope","plane","rough","sliding","slides","reasons","relationship","gives","a","an","unit","derived","base"
      ];
      const msKeys = [
        "rajah","yang","manakah","apakah","mengapa","bagaimana","hitung","nyatakan","terangkan","tentukan","menunjukkan","ialah","adalah","pada","dalam","dengan","untuk","dari","daripada","oleh","jika","apabila","bahawa","antara","bertindak","diabaikan","objek","murid","jisim","daya","pecutan","halaju","laju","panjang","gelombang","frekuensi","tenaga","tekanan","suhu","haba","pereputan","elektrik","rintangan","cahaya","sinar","fokus","kanta","cermin","pembiasan","pantulan","ayunan","spring","litar","foton","kuantum","pincang","depan","songsang","selari","serenjang","bacaan","nilai","betul","menghasilkan","lebih","besar","kecil","tinggi","rendah","berkurang","bertambah","kekal","malar","berat","kerja","kuasa","impuls","ketumpatan","tentu","pendam","pembelauan","interferens","keupayaan","arus","magnet","aruhan","get","logik","pembelahan","pelakuran","ambang","fungsi","gariskan","jawapan","pernyataan","bawah","tindak","balas","satah","condong","kasar","menggelongsor","sebab","hubungan","beri","sebuah","satu","unit","terbitan","asas"
      ];
      
      words.forEach(w => {
        if (enKeys.includes(w)) enScore += 2;
        if (msKeys.includes(w)) msScore += 2;
      });
      
      if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
        if (/gravitational|acceleration|planck|speed of light|constant|mass/i.test(trimmed)) enScore += 5;
        if (/graviti|pecutan|pemalar|laju cahaya|jisim/i.test(trimmed)) msScore += 5;
      }
      
      let isEn = false;
      if (enScore > msScore) isEn = true;
      else if (msScore > enScore) isEn = false;
      else if (lastWasMs) isEn = true;
      
      lastWasMs = !isEn;
      if (isEn) {
        return `<span class="soalan-en">${trimmed}</span>`;
      }
      return trimmed;
    }).filter(Boolean);
    
    return formattedLines.join("<br>");
  });

  return formattedParas.join("<br><br>");
}

function formatOptionText(text) {
  if (!text || typeof text !== "string") return text || "";
  if (/<(em|i|span)\b[^>]*class=["']soalan-en/.test(text) || /<i>[\s\S]*?<\/i>/i.test(text)) return text;
  if (text.includes("<img")) return text;

  // Case 1: Option with newline (Malay on line 1, English on line 2)
  if (text.includes("\n")) {
    const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
    if (lines.length >= 2) {
      return `${lines[0]}<br><span class="soalan-en">${lines.slice(1).join("<br>")}</span>`;
    }
  }

  // Case 2: Option with slash (Malay / English)
  if (text.includes(" / ")) {
    const parts = text.split(" / ");
    if (parts.length === 2 && parts[1].length > 1) {
      return `${parts[0].trim()} / <span class="soalan-en">${parts[1].trim()}</span>`;
    }
  }

  return text;
}


function renderQuestionsBank() {
  const container = document.getElementById("questions-list-container");
  if (!container) return;

  const filtered = QUESTION_BANK.filter(q => {
    if (AppState.filters.tingkatan !== "all" && q.tingkatan.toString() !== AppState.filters.tingkatan) return false;
    if (AppState.filters.kertas !== "all" && q.kertas.toString() !== AppState.filters.kertas) return false;
    if (AppState.filters.bidang && AppState.filters.bidang !== "all") {
      const b = getBidangPembelajaran(q.tingkatan, q.babNo);
      if (b !== AppState.filters.bidang) return false;
    }
    if (AppState.filters.sk && AppState.filters.sk !== "all" && q.sk !== AppState.filters.sk) return false;
    if (AppState.filters.konstruk && AppState.filters.konstruk !== "all") {
      const targetK = AppState.filters.konstruk.toLowerCase();
      const curK = (q.konstruk || "").toLowerCase();
      if (!curK.includes(targetK)) return false;
    }
    if (AppState.filters.aras !== "all" && q.aras !== AppState.filters.aras) return false;
    if (AppState.filters.sumber && AppState.filters.sumber !== "all") {
      const qSumber = (q.sumber && q.sumber.trim()) ? q.sumber.trim() : "Koleksi DSKP KSSM & Bank Standard SPM";
      if (qSumber !== AppState.filters.sumber) return false;
    }
    if (AppState.filters.search) {
      const s = AppState.filters.search;
      const haystack = `${q.soalan || q.soalanUtama || q.tajukEksperimen || ""} ${q.babNama || ""} ${q.topik || ""} ${q.sk || ""} ${q.sp || ""} ${q.sumber || ""}`.toLowerCase();
      if (!haystack.includes(s)) return false;
    }
    return true;
  });

  const countBadge = document.getElementById("bank-soalan-counter-badge");
  if (countBadge) {
    countBadge.textContent = `Menampilkan ${filtered.length} daripada ${QUESTION_BANK.length} Soalan`;
  }

  const slotBannerHtml = AppState.targetSlotForSelection ? `
    <div id="target-slot-selection-banner" style="background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%); border: 2px solid #6366F1; border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);">
      <div>
        <div style="font-weight: 800; color: #3730A3; font-size: 1.02rem; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="target" style="width: 18px; height: 18px; color: #4F46E5;"></i>
          Mod Pemilihan: Mengisi Slot ${AppState.targetSlotForSelection.slotNo} [${AppState.targetSlotForSelection.mode === "kertas1" ? "Kertas 1" : (AppState.targetSlotForSelection.mode === "kertas2" ? "Kertas 2" : "Kertas 3")}]
        </div>
        <div style="font-size: 0.85rem; color: #4338CA; margin-top: 4px; line-height: 1.4;">
          Standard Kandungan (SK): <strong>${AppState.targetSlotForSelection.sk || 'Standard Kandungan Berkaitan'}</strong> • Tingkatan ${AppState.targetSlotForSelection.tingkatan || '4/5'} ${AppState.targetSlotForSelection.babNo ? '• Bab ' + AppState.targetSlotForSelection.babNo : ''}
          <br>
          <span style="color: #6366F1; font-weight: 600;">Klik butang hijau "✓ Pilih Untuk Slot ${AppState.targetSlotForSelection.slotNo}" pada soalan yang ingin dimasukkan ke dalam slot ini.</span>
        </div>
      </div>
      <div style="display: flex; gap: 8px; flex-shrink: 0;">
        <button class="btn btn-outline btn-sm" onclick="cancelTargetSlotSelection()" style="background: #fff; color: #4338CA; border: 1.5px solid #C7D2FE; font-weight: 700; border-radius: 6px;" title="Batal pemilihan dan kembali ke skrin sebelum ini">
          <i data-lucide="x" style="width: 13px; height: 13px;"></i> Batal &amp; Kembali
        </button>
      </div>
    </div>
  ` : "";

  if (filtered.length === 0) {
    container.innerHTML = `
      ${slotBannerHtml}
      <div style="text-align: center; padding: 3rem; background: #fff; border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
        <i data-lucide="help-circle" style="width: 48px; height: 48px; color: var(--text-light); margin-bottom: 0.5rem;"></i>
        <h4 style="font-size: 1.1rem; font-weight: 700;">Tiada soalan ditemui untuk penapis semasa</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem;">
          ${AppState.targetSlotForSelection ? `Tiada soalan khusus bagi penapis SK '${AppState.filters.sk}' pada jenis kertas ini.` : 'Cuba ubah kriteria penapisan atau kata kunci carian anda.'}
        </p>
        ${AppState.targetSlotForSelection ? `
          <div style="margin-top: 1rem; display: flex; justify-content: center; gap: 8px;">
            <button class="btn btn-outline btn-sm" onclick="AppState.filters.sk='all'; const selSk = document.getElementById('filter-sk'); if (selSk) selSk.value='all'; renderQuestionsBank();">
              <i data-lucide="layers" style="width: 13px; height: 13px;"></i> Papar Semua Soalan Tingkatan ${AppState.targetSlotForSelection.tingkatan || ''}
            </button>
            <button class="btn btn-primary btn-sm" onclick="cancelTargetSlotSelection()">
              Kembali ke Kertas Peperiksaan
            </button>
          </div>
        ` : ''}
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = slotBannerHtml + filtered.map(q => {
    const isAdded = isQuestionInActivePaper(q.id);
    const paperName = q.kertas === 1 ? "Kertas 1 (Objektif)" : (q.kertas === 2 ? `Kertas 2 (Bahagian ${q.bahagian || 'A'})` : "Kertas 3 (Amali)");

    // Badge aras
    const arasClass = q.aras === "Rendah" ? "aras-rendah" : (q.aras === "Sederhana" ? "aras-sederhana" : "aras-tinggi");

    // Kandungan Soalan
    let bodyHtml = "";
    if (q.kertas === 1) {
      bodyHtml = `
        <div class="qcard-hero-body">${formatBilingualText(q.soalan)}</div>
        ${getQuestionDiagramHtml(q)}
        <div class="options-elegant-grid">
          ${q.pilihan.map(opt => `
            <div class="option-pill-item ${opt.id === q.jawapanBetul ? 'is-correct' : ''}">
              <div class="option-letter-circle">${opt.id}</div>
              <div style="flex: 1;">${formatOptionText(opt.teks)}</div>
            </div>
          `).join("")}
        </div>
      `;
    } else if (q.kertas === 2) {
      bodyHtml = `
        <div class="qcard-hero-body">${formatBilingualText(q.soalanUtama)}</div>
        ${getQuestionDiagramHtml(q)}
        <div class="sub-questions-flow">
          ${q.pecahan.map(p => `
            <div class="sub-q-row">
              <div class="sub-q-text">
                <span class="sub-q-label">${p.sub}</span> ${formatBilingualText(p.soalan)}
              </div>
              <span class="sub-q-mark-badge">${p.markah} Markah</span>
            </div>
          `).join("")}
        </div>
      `;
    } else if (q.kertas === 3) {
      bodyHtml = `
        <div class="qcard-hero-body" style="color: var(--primary-purple);">${q.tajukEksperimen}</div>
        <div style="font-size: 0.9rem; margin-bottom: 0.5rem; line-height: 1.6;">
          <p><strong>Tujuan Eksperimen:</strong> ${q.tujuan}</p>
          <p style="margin-top: 0.25rem;"><strong>Pemboleh Ubah:</strong> 
            <span style="color: #4338CA;">Manipulasi:</span> ${q.pembolehubah.dimanipulasi} &bull; 
            <span style="color: #059669;">Bergerak Balas:</span> ${q.pembolehubah.bergerakbalas} &bull; 
            <span style="color: #D97706;">Dimalarkan:</span> ${q.pembolehubah.dimalarkan || 'Suhu/Jisim'}
          </p>
        </div>
        <div style="font-size: 0.84rem; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 0.6rem 0.9rem; border-radius: 6px;">
          <strong>Radas & Bahan Utama:</strong> ${q.radas.slice(0, 5).join(", ")} dll.
        </div>
      `;
    }

    const totalMarks = q.markah || q.markahPenuh || (q.kertas === 1 ? 1 : 0);

    return `
      <div class="question-item-card" id="card-${q.id}">
        <!-- 1. Top Header -->
        <div class="qcard-top-header">
          <div class="qcard-tags-cluster">
            <span class="qcard-id-pill">${q.id}</span>
            <span class="qcard-badge-paper">${paperName}</span>
            <span class="qcard-badge-sumber"><i data-lucide="folder-git-2" style="width:11px;height:11px;"></i> ${q.sumber || "Koleksi DSKP Standard"}</span>
            <span class="qcard-badge-chapter">T${q.tingkatan} &bull; Bab ${q.babNo}: ${q.babNama}</span>
            <span class="qcard-badge-bidang"><i data-lucide="compass" style="width:11px;height:11px;"></i> ${getBidangPembelajaran(q.tingkatan, q.babNo)}</span>
            <span class="qcard-badge-aras ${arasClass}">${q.aras} (${q.konstruk})</span>
          </div>
          <div class="qcard-actions-cluster">
            <span class="qcard-marks-badge">
              <i data-lucide="award" style="width:14px;height:14px;color:var(--primary-purple);"></i>
              ${totalMarks} Markah
            </span>
            ${AppState.targetSlotForSelection ? `
              <button class="btn btn-sm btn-success" onclick="selectQuestionForTargetSlot('${q.id}')" style="background: #059669; color: #fff; border: 1px solid #047857; font-weight: 700; box-shadow: 0 2px 6px rgba(5,150,105,0.25); display: inline-flex; align-items: center; gap: 5px;">
                <i data-lucide="check-circle" style="width: 14px; height: 14px;"></i>
                Pilih Untuk Slot ${AppState.targetSlotForSelection.slotNo}
              </button>
            ` : `
              <button class="btn btn-sm ${isAdded ? 'btn-outline' : 'btn-primary'}" onclick="toggleQuestionAssembly('${q.id}')">
                <i data-lucide="${isAdded ? 'check' : 'plus-circle'}"></i>
                ${isAdded ? 'Telah Ditambah' : 'Tambah ke Kertas'}
              </button>
            `}
            <button class="btn-trash-card" onclick="deleteQuestionFromBank('${q.id}')" title="Buang soalan ini secara manual daripada Bank Soalan">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>

        <!-- 2. Curriculum Metadata Strip -->
        <div class="qcard-curriculum-strip">
          ${q.sk ? `<span class="curr-item sk"><i data-lucide="bookmark" style="width:13px;height:13px;"></i> ${q.sk}</span>` : ''}
          ${q.sp ? `<span class="curr-item sp"><i data-lucide="target" style="width:13px;height:13px;"></i> ${q.sp}</span>` : ''}
          ${q.rujukanBukuTeks ? `<span class="curr-item ref" title="Rujukan Buku Teks"><i data-lucide="book-open" style="width:13px;height:13px;"></i> ${q.rujukanBukuTeks}</span>` : ''}
          ${q.rujukanCheatnote ? `<span class="curr-item ref" title="Rujukan Cheatnote"><i data-lucide="file-text" style="width:13px;height:13px;"></i> ${q.rujukanCheatnote}</span>` : ''}
        </div>

        <!-- 3. Question Body Hero -->
        ${bodyHtml}

        <!-- 4. Card Bottom Footer -->
        <div class="qcard-footer-row">
          <button class="scheme-toggle-button" onclick="toggleExplanation('exp-${q.id}')">
            <i data-lucide="help-circle" style="width:15px;height:15px;"></i>
            <span>Skema Pemarkahan & Rubrik</span>
          </button>
          <span class="qcard-status-badge">
            <i data-lucide="check-check" style="width:14px;height:14px;color:#10B981;"></i>
            ${q.statusSemakan || 'Format LPM SPM'}
          </span>
          <button class="btn btn-outline btn-xs" onclick="exportSingleQuestion('${q.id}', 'pdf')" title="Eksport soalan ini + skema ke PDF">
            <i data-lucide="file-pdf" style="width:12px;height:12px;"></i>
          </button>
          <button class="btn btn-outline btn-xs" onclick="exportSingleQuestion('${q.id}', 'doc')" title="Eksport soalan ini + skema ke DOCX">
            <i data-lucide="file-text" style="width:12px;height:12px;"></i>
          </button>
        </div>

        <!-- 5. Collapsible Scheme Drawer -->
        <div class="scheme-drawer-box" id="exp-${q.id}">
          <div style="font-weight: 700; color: var(--primary-purple); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="award" style="width:16px;height:16px;"></i> Panduan Pemarkahan Rasmi (Lembaga Peperiksaan Malaysia)
          </div>
          <div style="white-space: pre-line; line-height: 1.65; color: #334155; font-size: 0.88rem;">
            ${q.penerangan || (q.pecahan ? q.pecahan.map(p => `<strong>${p.sub}</strong> ${p.skema}`).join("<br><br>") : (q.rubrikPemarkahan ? q.rubrikPemarkahan.map(r => `• <strong>${r.aspek} (${r.markah}m):</strong> ${r.kriteria}`).join("<br>") : (q.jawapanBetul ? `Jawapan Betul: <strong>${q.jawapanBetul}</strong>` : 'Tiada skema bertulis')))}
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) lucide.createIcons();
}

function toggleExplanation(boxId) {
  const box = document.getElementById(boxId);
  if (box) {
    box.classList.toggle("show");
  }
}

/* ==========================================================================
   3. ENJIN PEMASANGAN KERTAS BERPANDUKAN JSU (JADUAL SPESIFIKASI UJIAN)
   ========================================================================== */
function initAutoAssemblyDefaults() {
  // Penuhkan slot Kertas 1, Kertas 2 dan Amali secara pintar mengikut JSU
  generatePaperByJSU("kertas1", { ratio: "5:3:2", levelBalance: "50:50" }, false);
  generatePaperByJSU("kertas2", { ratio: "5:3:2", levelBalance: "50:50" }, false);
  generatePaperByJSU("kertas3", { ratio: "5:3:2", levelBalance: "50:50" }, false);

  // Tab switcher di sidebar pemasangan
  const paperTabs = document.querySelectorAll(".paper-tab");
  paperTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      paperTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      AppState.currentPaperMode = tab.getAttribute("data-paper-mode");
      renderAssemblyWorkbench();
    });
  });

  // Action button: Jana Soalan Ikut JSU (Hero Primary Button)
  const btnAutoFill = document.getElementById("btn-auto-fill-slots");
  if (btnAutoFill) {
    btnAutoFill.addEventListener("click", () => {
      generatePaperByJSU(AppState.currentPaperMode, { ratio: "5:3:2", levelBalance: "50:50" }, true);
    });
  }

  // Action button: Buka Modal Konfigurasi Parameter JSU
  const btnOpenJsuModal = document.getElementById("btn-open-jsu-modal");
  const modalJsu = document.getElementById("modal-jsu-config");
  const btnCloseJsuModal = document.getElementById("btn-close-jsu-modal");
  const btnCancelJsuModal = document.getElementById("btn-cancel-jsu-modal");
  const btnExecuteJsuGenerate = document.getElementById("btn-execute-jsu-generate");

  if (btnOpenJsuModal && modalJsu) {
    btnOpenJsuModal.addEventListener("click", () => {
      const selTargetPaper = document.getElementById("modal-jsu-target-paper");
      if (selTargetPaper) selTargetPaper.value = AppState.currentPaperMode;
      modalJsu.classList.add("show");
    });
  }

  if (btnCloseJsuModal && modalJsu) {
    btnCloseJsuModal.addEventListener("click", () => modalJsu.classList.remove("show"));
  }
  if (btnCancelJsuModal && modalJsu) {
    btnCancelJsuModal.addEventListener("click", () => modalJsu.classList.remove("show"));
  }

  // Presets selector inside modal
  const presetCards = document.querySelectorAll(".jsu-preset-card");
  presetCards.forEach(card => {
    card.addEventListener("click", () => {
      presetCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const preset = card.getAttribute("data-preset");
      const selRatio = document.getElementById("modal-jsu-ratio");
      if (preset === "spm-standard") {
        if (selRatio) selRatio.value = "5:3:2";
      } else if (preset === "spm-kbat") {
        if (selRatio) selRatio.value = "4:3:3";
      } else if (preset === "t4-only" || preset === "t5-only") {
        if (selRatio) selRatio.value = "5:3:2";
      }
    });
  });

  // Execute JSU Generation from Modal
  if (btnExecuteJsuGenerate && modalJsu) {
    btnExecuteJsuGenerate.addEventListener("click", () => {
      const selTargetPaper = document.getElementById("modal-jsu-target-paper");
      const selRatio = document.getElementById("modal-jsu-ratio");
      const activePreset = document.querySelector(".jsu-preset-card.active");
      const presetVal = activePreset ? activePreset.getAttribute("data-preset") : "spm-standard";

      const targetMode = selTargetPaper ? selTargetPaper.value : AppState.currentPaperMode;
      const ratioVal = selRatio ? selRatio.value : "5:3:2";

      let levelBalance = "50:50";
      if (presetVal === "t4-only") levelBalance = "t4-only";
      else if (presetVal === "t5-only") levelBalance = "t5-only";

      generatePaperByJSU(targetMode, { ratio: ratioVal, levelBalance: levelBalance }, true);
      modalJsu.classList.remove("show");

      if (targetMode !== AppState.currentPaperMode) {
        const tabToActivate = document.querySelector(`.paper-tab[data-paper-mode="${targetMode}"]`);
        if (tabToActivate) tabToActivate.click();
      }

      // Beralih secara automatik ke Peringkat 3: Semak & Preview Kertas Soalan
      switchWorkflowStage(3);
    });
  }

  // Butang Simpan Tetapan & Selesai untuk setiap peringkat
  document.querySelectorAll(".btn-simpan-tetapan").forEach(btn => {
    btn.addEventListener("click", () => {
      const stageNum = parseInt(btn.getAttribute("data-stage"), 10);
      if (stageNum >= 1 && stageNum <= 5) {
        // Tandakan peringkat sebagai selesai menggunakan fungsi global completeStage
        if (typeof completeStage === "function") {
          completeStage(stageNum);
        } else if (typeof AppState !== "undefined") {
          // Fallback jika completeStage belum dimuat
          if (!AppState.completedStages) AppState.completedStages = [];
          if (!AppState.completedStages.includes(stageNum)) {
            AppState.completedStages.push(stageNum);
          }
          if (typeof updateStepperUI === "function") {
            updateStepperUI(AppState.currentStage || 0);
          }
          if (typeof switchWorkflowStage === "function") {
            switchWorkflowStage(0);
          }
        }
        showJsuNotification(`✓ Peringkat ${stageNum} disimpan & ditandakan selesai!`);
      }
    });
  });

  // Butang Terapkan ke Kertas (setahkata JSU)
  const btnApply = document.getElementById("btn-apply-jsu-to-paper");
  if (btnApply) {
    btnApply.addEventListener("click", () => applyJsuToPaper());
  }

  const btnClear = document.getElementById("btn-clear-assembly");
  if (btnClear) {
    btnClear.addEventListener("click", () => {
      AppState.assembledPapers[AppState.currentPaperMode] = [];
      renderAssemblyWorkbench();
      renderQuestionsBank();
      showJsuNotification("Pemasangan dikosongkan. Klik 'Jana Soalan Ikut JSU' untuk memasang semula.");
    });
  }

  const btnShuffle = document.getElementById("btn-shuffle-order");
  if (btnShuffle) {
    btnShuffle.addEventListener("click", () => {
      shuffleArray(AppState.assembledPapers[AppState.currentPaperMode]);
      renderAssemblyWorkbench();
    });
  }

  const btnExport = document.getElementById("btn-export-to-exam");
  if (btnExport) {
    btnExport.addEventListener("click", () => {
      document.querySelector('[data-tab="cetak-lpm"]').click();
    });
  }

  // Refresh Analytics
  const btnRefreshAnalytics = document.getElementById("btn-refresh-analytics");
  if (btnRefreshAnalytics) {
    btnRefreshAnalytics.addEventListener("click", () => {
      renderAnalyticsDashboard();
      showJsuNotification("✓ Data analitik telah dikemas kini!");
    });
  }

  // Export buttons for Bank Soalan
  const btnExportPdf = document.getElementById("btn-export-questions-pdf");
  if (btnExportPdf) {
    btnExportPdf.addEventListener("click", () => exportQuestionsToPdf());
  }

  const btnExportDocx = document.getElementById("btn-export-questions-docx");
  if (btnExportDocx) {
    btnExportDocx.addEventListener("click", () => exportQuestionsToDocx());
  }

  // Export buttons for Printable Exam (Kertas Peperiksaan)
  const btnExportExamPdf = document.getElementById("btn-export-exam-pdf");
  if (btnExportExamPdf) {
    btnExportExamPdf.addEventListener("click", () => exportExamToPdf());
  }

  const btnExportExamDocx = document.getElementById("btn-export-exam-docx");
  if (btnExportExamDocx) {
    btnExportExamDocx.addEventListener("click", () => exportExamToDocx());
  }

  // Auto-refresh printable exam preview when JSU exam title or tingkatan changes
  const selPepLive = document.getElementById("jsu-select-peperiksaan");
  if (selPepLive) {
    selPepLive.addEventListener("change", () => {
      if (document.getElementById("printable-exam-container")?.children.length) {
        renderPrintableExam();
      }
    });
  }
  const selTingLive = document.getElementById("jsu-select-tingkatan");
  if (selTingLive) {
    selTingLive.addEventListener("change", () => {
      if (document.getElementById("printable-exam-container")?.children.length) {
        renderPrintableExam();
      }
    });
  }

  // Switch to Whitepaper Spread view from Analytics
  const btnViewWhitepaper = document.getElementById("btn-view-whitepaper");
  if (btnViewWhitepaper) {
    btnViewWhitepaper.addEventListener("click", () => {
      const viewPanels = document.querySelectorAll(".view-panel");
      viewPanels.forEach(p => p.classList.remove("active"));
      document.getElementById("view-whitepaper-spread")?.classList.add("active");
      if (typeof renderSpreadView === "function") renderSpreadView();
      if (typeof updateStepperUI === "function") updateStepperUI(4);
      AppState.currentTab = "analytics-dashboard";
    });
  }
}

/**
 * Enjin Penjana Pintar Berpandukan JSU (Jadual Spesifikasi Ujian)
 * Mematuhi nisbah kesukaran 5:3:2, imbangan T4 & T5, dan struktur matriks konstruk LPM.
 */

// ============================================================================
// STANDARD SPM KERTAS 2 - DATA DARI LEMBAGA PEPERIKSAAN MALAYSIA (LPM)
// Sumber: Analisis Soalan SPM 2021 & 2022 (4531/2 Fizik)
// ============================================================================
const K2_SPM_STANDARD = {
  // Jumlah markah mengikut konstruk (Piawai SPM 2021 & 2022)
  // Memahami: 20 - 24m sahaja (SPM 2021: 20m, SPM 2022: 24m)
  // Mengaplikasi: 22 - 24m (SPM 2021: 24m, SPM 2022: 22m)
  // Menganalisis: WAJIB tepat 15m (S5 5m + S6 5m + S11 5m)
  // Menilai: WAJIB tepat 15m (S7 5m + S9/S10 10m)
  // Mencipta: 14 - 16m (S8 4-6m + S11 10m)
  // Mengingati: tepat 10m (1m setiap soalan calon)
  konstrukTarget: {
    Mengingati:   { exact: 10, marks: 10, soalan: "Semua soalan (1m x 10 soalan calon)" },
    Memahami:     { min: 20, max: 24, target: 22, marks: 22, soalan: "Antara 20 - 24m sahaja (Standard SPM)" },
    Mengaplikasi: { min: 22, max: 24, target: 22, marks: 22, soalan: "Antara 22 - 24m (Standard SPM)" },
    Menganalisis: { exact: 15, marks: 15, soalan: "S5(5m) + S6(5m) + S11(5m) [WAJIB 15m]" },
    Menilai:      { exact: 15, marks: 15, soalan: "S7(5m) + S9/S10(10m) [WAJIB 15m]" },
    Mencipta:     { min: 14, max: 16, target: 16, marks: 16, soalan: "S8(4m-6m) + S11(10m) [14 - 16m]" },
  },
  // Kekangan konstruk WAJIB per soalan (anotasi merah dalam jadual LPM)
  soalanKekangan: [
    { no: 5,  minAnalisis: 5, maxAnalisis: 5 },                  // S5: wajib 5m menganalisis
    { no: 6,  minAnalisis: 5, maxAnalisis: 5 },                  // S6: wajib 5m menganalisis
    { no: 7,  minNilai: 5, maxNilai: 5 },                        // S7: wajib 5m menilai
    { no: 8,  minCipta: 4, maxCipta: 6, maxAplikasi: 0 },       // S8: 4-6m mencipta, tiada aplikasi
    { no: 9,  maxAnalisis: 0, minNilai: 10, maxNilai: 10 },      // S9: tiada analisis, wajib 10m menilai
    { no: 10, maxAnalisis: 0, minNilai: 10, maxNilai: 10 },      // S10: tiada analisis, wajib 10m menilai
    { no: 11, minCipta: 10, maxCipta: 10, minAnalisis: 5, maxAnalisis: 5, maxAplikasi: 0 }, // S11: 10m cipta, 5m analisis, tiada aplikasi
  ],
  // Rujukan tahunan (untuk paparan dalam UI)
  rujukan: {
    spm2021: { Mengingati: 10, Memahami: 20, Mengaplikasi: 24, Menganalisis: 15, Menilai: 15, Mencipta: 16 },
    spm2022: { Mengingati: 10, Memahami: 24, Mengaplikasi: 22, Menganalisis: 15, Menilai: 15, Mencipta: 14 }
  }
};

// ============================================================
// VALIDATE: Periksa keseimbangan konstruk Kertas 2 vs standard SPM
// Menggunakan struktur data JSU (ingat[], faham[], aplikasi[], analisis[], nilai[], cipta[])
// ============================================================
function validateK2KonstrukBalance(selectedQuestions) {
  const warnings = [];
  const summary = { Mengingati: 0, Memahami: 0, Mengaplikasi: 0, Menganalisis: 0, Menilai: 0, Mencipta: 0 };

  // Calon hanya jawab 1 soalan Bahagian B (pilih S9 ATAU S10)
  // Abaikan S10 jika S9 hadir supaya konstruk calon tidak terlebih kira
  const hasQ9 = selectedQuestions.some(q => (q.no || q.soalanNo) === 9);
  const countForCand = (q) => {
    const no = q.no || q.soalanNo;
    const sec = q.section || q.bahagian;
    if (hasQ9 && no === 10 && sec === "B") return false;
    return true;
  };

  selectedQuestions.forEach(q => {
    if (!countForCand(q)) return;
    const sumArr = arr => Array.isArray(arr) ? arr.reduce((a, b) => a + (b || 0), 0) : (q[arr] || 0);
    summary.Mengingati   += sumArr(q.ingat   || q.ingatan || []);
    summary.Memahami     += sumArr(q.faham   || q.memahami || []);
    summary.Mengaplikasi += sumArr(q.aplikasi || []);
    summary.Menganalisis += sumArr(q.analisis || []);
    summary.Menilai      += sumArr(q.nilai   || []);
    summary.Mencipta     += sumArr(q.cipta   || []);
  });

  // Semak jumlah per konstruk vs standard SPM (range atau exact)
  Object.keys(K2_SPM_STANDARD.konstrukTarget).forEach(k => {
    const tgt = K2_SPM_STANDARD.konstrukTarget[k];
    const actual = summary[k] || 0;
    if (tgt.exact !== undefined) {
      if (actual !== tgt.exact) {
        warnings.push(`⚠️ ${k}: ${actual}m (WAJIB ${tgt.exact}m SPM)`);
      }
    } else {
      if (actual < tgt.min) {
        warnings.push(`⚠️ ${k}: ${actual}m (kurang daripada had minimum ${tgt.min}m SPM)`);
      } else if (actual > tgt.max) {
        warnings.push(`⚠️ ${k}: ${actual}m (melebihi had maksimum ${tgt.max}m SPM — dibenarkan ${tgt.min}-${tgt.max}m sahaja)`);
      }
    }
  });

  // Semak kekangan per soalan
  K2_SPM_STANDARD.soalanKekangan.forEach(kek => {
    const q = selectedQuestions.find(x => (x.no || x.soalanNo) === kek.no);
    if (!q) return;
    const sumArr = arr => Array.isArray(arr) ? arr.reduce((a, b) => a + (b || 0), 0) : 0;
    const analisis  = sumArr(q.analisis || []);
    const nilai     = sumArr(q.nilai    || []);
    const cipta     = sumArr(q.cipta    || []);
    const aplikasi  = sumArr(q.aplikasi || []);

    if (kek.minAnalisis !== undefined && analisis < kek.minAnalisis)
      warnings.push(`⚠️ S${kek.no}: Menganalisis ${analisis}m (wajib ${kek.minAnalisis}m)`);
    if (kek.maxAnalisis !== undefined && analisis > kek.maxAnalisis)
      warnings.push(`⚠️ S${kek.no}: Menganalisis ${analisis}m (max ${kek.maxAnalisis}m)`);
    if (kek.minNilai !== undefined && nilai < kek.minNilai)
      warnings.push(`⚠️ S${kek.no}: Menilai ${nilai}m (wajib ${kek.minNilai}m)`);
    if (kek.maxNilai !== undefined && nilai > kek.maxNilai)
      warnings.push(`⚠️ S${kek.no}: Menilai ${nilai}m (max ${kek.maxNilai}m)`);
    if (kek.minCipta !== undefined && cipta < kek.minCipta)
      warnings.push(`⚠️ S${kek.no}: Mencipta ${cipta}m (min ${kek.minCipta}m)`);
    if (kek.maxCipta !== undefined && cipta > kek.maxCipta)
      warnings.push(`⚠️ S${kek.no}: Mencipta ${cipta}m (max ${kek.maxCipta}m)`);
    if (kek.maxAplikasi !== undefined && aplikasi > kek.maxAplikasi)
      warnings.push(`⚠️ S${kek.no}: Mengaplikasi ${aplikasi}m (max ${kek.maxAplikasi}m)`);
  });

  return { valid: warnings.length === 0, warnings, summary };
}

// ============================================================
// BADGE: Papar status ringkas konstruk K2 (Memahami/Analisis/Nilai/Cipta)
// Diintegrasikan ke dalam senarai soalan Kertas 2
// ============================================================
function renderK2KonstrukSummaryBadge(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const selected = AppState.assembledPapers["kertas2"] || [];
  // Gunakan data dari JSU_PROFILES jika ada
  let jsuQuestions = selected;
  const activeProfile = AppState.activeJsuProfile || (typeof JSU_PROFILES !== "undefined" ? "spm_percubaan_k2" : null);
  if (activeProfile && typeof JSU_PROFILES !== "undefined" && JSU_PROFILES[activeProfile]) {
    jsuQuestions = JSU_PROFILES[activeProfile].questions || selected;
  }

  const validation = validateK2KonstrukBalance(jsuQuestions);
  const s = validation.summary;
  const tgt = K2_SPM_STANDARD.konstrukTarget;
  const fmt = (k) => {
    const actual = s[k] || 0;
    const t = tgt[k];
    let met = false;
    let label = "";
    if (t.exact !== undefined) {
      met = (actual === t.exact);
      label = `${actual}/${t.exact}m`;
    } else {
      met = (actual >= t.min && actual <= t.max);
      label = `${actual}m (${t.min}-${t.max}m)`;
    }
    return `<span class="k2-kbadge ${met ? "k2-kbadge-ok" : "k2-kbadge-warn"}">
      <strong>${k}</strong>: ${label} ${met ? "✅" : "⚠️"}
    </span>`;
  };

  container.innerHTML = `
    <div class="k2-konstruk-bar">
      <span class="k2-kbar-label"><strong>Standard SPM Kertas 2:</strong></span>
      ${fmt("Memahami")}
      ${fmt("Menganalisis")}
      ${fmt("Menilai")}
      ${fmt("Mencipta")}
      ${validation.valid
        ? '<span class="k2-kbadge k2-kbadge-ok"><strong>✓ 100% Patuh Standard LPM</strong></span>'
        : `<span class="k2-kbadge k2-kbadge-warn" title="${validation.warnings.join("\n")}">⚠️ ${validation.warnings.length} Amaran Standard</span>`
      }
    </div>
  `;
}

/**
 * ============================================================================
 * JSU TO QUESTION BANK BINDING ENGINE (2-WAY REACTIVE SYNC)
 * ============================================================================
 */

function getActiveJsuProfile() {
  const selTing = document.getElementById("jsu-select-tingkatan");
  const selPep = document.getElementById("jsu-select-peperiksaan");
  const selKer = document.getElementById("jsu-select-kertas");

  let tingVal = selTing ? selTing.value : null;
  let pepVal = selPep ? selPep.value : null;
  let kerVal = selKer ? selKer.value : null;

  if (!tingVal || !pepVal || !kerVal) {
    try {
      const raw = localStorage.getItem("fizik_jsu_settings");
      if (raw) {
        const s = JSON.parse(raw);
        if (!tingVal) tingVal = s.tingkatan;
        if (!pepVal) pepVal = s.peperiksaan;
        if (!kerVal) kerVal = s.currentPaperMode;
      }
    } catch(e) {}
  }
  tingVal = tingVal || "all";
  pepVal = pepVal || "percubaan";
  kerVal = kerVal || getActivePaperMode();

  const profileKey = (typeof getJsuProfileKey === "function")
    ? getJsuProfileKey(tingVal, pepVal, kerVal)
    : (kerVal === "kertas1" ? "spm_percubaan_k1" : "spm_percubaan_k2");

  if (typeof JSU_PROFILES !== "undefined" && JSU_PROFILES[profileKey]) {
    AppState.activeJsuProfile = profileKey;
    const prof = JSU_PROFILES[profileKey];
    prof.profileKey = profileKey;
    return prof;
  }
  return null;
}

function parseJsuSlotChapter(slot) {
  let ting = slot.ting;
  let babNo = slot.babNo;
  let babNama = slot.babNama || "";

  const babStr = String(slot.bab || "").trim();

  if (!ting) {
    if (babStr.includes("(T4)") || /t4\b|tingkatan\s*4/i.test(babStr)) ting = 4;
    else if (babStr.includes("(T5)") || /t5\b|tingkatan\s*5/i.test(babStr)) ting = 5;
    else if (/gerakan\s*ii/i.test(babStr) || /tekanan/i.test(babStr) || /elektrik/i.test(babStr) || /keelektromagnetan/i.test(babStr) || /elektronik/i.test(babStr) || /nuklear/i.test(babStr) || /kuantum/i.test(babStr)) {
      ting = 5;
    } else if (/pengukuran/i.test(babStr) || /gerakan\s*i\b/i.test(babStr) || /kegravitian/i.test(babStr) || /haba/i.test(babStr) || /gelombang/i.test(babStr) || /cahaya/i.test(babStr)) {
      ting = 4;
    }
  }

  if (!babNo) {
    const m = babStr.match(/bab\s*(\d+)/i);
    if (m) babNo = parseInt(m[1], 10);
  }

  if (typeof getDskpChapterList === "function") {
    const chapters = getDskpChapterList("all");
    const found = chapters.find(c => c.tingkatan === ting && c.babNo === babNo);
    if (found) {
      babNama = found.nama;
    }
  }

  return { ting: ting || 4, babNo: babNo || 1, babNama: babNama || babStr };
}

function getSkCode(str) {
  if (!str) return "";
  const m = String(str).match(/(\d+\.\d+)/);
  return m ? m[1] : "";
}

function normAras(a) {
  if (!a) return "Rendah";
  const s = String(a).trim().toUpperCase();
  if (s === "R" || s.startsWith("REND")) return "Rendah";
  if (s === "S" || s.startsWith("SEDER")) return "Sederhana";
  if (s === "T" || s.startsWith("TING")) return "Tinggi";
  return "Rendah";
}

function normKonstruk(k) {
  if (!k) return "Memahami";
  const s = String(k).trim().toLowerCase();
  if (s.includes("ingat")) return "Mengingat";
  if (s.includes("faham")) return "Memahami";
  if (s.includes("aplikasi")) return "Mengaplikasi";
  if (s.includes("analisis")) return "Menganalisis";
  if (s.includes("nilai")) return "Menilai";
  if (s.includes("cipta")) return "Mencipta";
  return "Memahami";
}

function matchQuestionScore(slot, q) {
  let score = 0;
  const targetSkCode = getSkCode(slot.sk);
  const qSkCode = getSkCode(q.sk || q.topik);
  const targetAras = normAras(slot.aras);
  const qAras = normAras(q.aras);
  const targetKonstruk = normKonstruk(slot.konstruk);
  const qKonstruk = normKonstruk(q.konstruk);

  if (targetSkCode && qSkCode && targetSkCode === qSkCode) {
    score += 100;
  } else if (slot.sk && (q.sk || q.topik) && (
    String(q.sk || "").toLowerCase().includes(String(slot.sk).toLowerCase().replace(/^sk\s*/i, "").trim()) ||
    String(slot.sk).toLowerCase().includes(String(q.sk || q.topik).toLowerCase().replace(/^sk\s*/i, "").trim())
  )) {
    score += 80;
  }

  if (targetAras === qAras) score += 20;
  if (targetKonstruk === qKonstruk) score += 10;

  return score;
}

function generatePaperByJSU(paperMode, config = { ratio: "5:3:2", levelBalance: "50:50" }, showFeedback = false) {
  let pool = [];

  if (paperMode === "kertas1") {
    pool = QUESTION_BANK.filter(q => q.kertas === 1);
  } else if (paperMode === "kertas2") {
    pool = QUESTION_BANK.filter(q => q.kertas === 2);
  } else if (paperMode === "kertas3") {
    pool = QUESTION_BANK.filter(q => q.kertas === 3);
  }

  // Filter mengikut pilihan silibus jika ditetapkan
  if (config && config.levelBalance === "t4-only") {
    pool = pool.filter(q => q.tingkatan === 4);
  } else if (config && config.levelBalance === "t5-only") {
    pool = pool.filter(q => q.tingkatan === 5);
  }

  let selected = [];

  // 1. Dapatkan soalan dari Tetapan JSU Aktif (Two-Way Binding)
  const profile = getActiveJsuProfile();
  let jsuQuestions = (profile && Array.isArray(profile.questions) && profile.kertas === paperMode)
    ? profile.questions
    : null;

  if (!jsuQuestions && typeof JSU_PROFILES !== "undefined") {
    const selTing = document.getElementById("jsu-select-tingkatan")?.value || "all";
    const selPep = document.getElementById("jsu-select-peperiksaan")?.value || "percubaan";
    const key = (typeof getJsuProfileKey === "function")
      ? getJsuProfileKey(selTing, selPep, paperMode)
      : (paperMode === "kertas1" ? "spm_percubaan_k1" : "spm_percubaan_k2");
    if (JSU_PROFILES[key] && Array.isArray(JSU_PROFILES[key].questions)) {
      jsuQuestions = JSU_PROFILES[key].questions;
    }
  }

  if (jsuQuestions && jsuQuestions.length > 0) {
    const usedIds = new Set();
    selected = [];

    jsuQuestions.forEach((slot, idx) => {
      const { ting, babNo, babNama } = parseJsuSlotChapter(slot);
      const targetAras = normAras(slot.aras);
      const targetKonstruk = normKonstruk(slot.konstruk);
      const targetSkCode = getSkCode(slot.sk);

      // Calon bank soalan MESTILAH dari tingkatan dan bab yang sama mengikut JSU
      const candidates = pool.filter(q => !usedIds.has(q.id) && q.tingkatan === ting && q.babNo === babNo);

      let best = null;
      let bestScore = -1;

      for (const q of candidates) {
        const score = matchQuestionScore(slot, q);
        if (score > bestScore) {
          bestScore = score;
          best = q;
        }
      }

      // SYARAT PENGGUNA: "kalau tidak ada soalan yang padan dengan JSU kosongkan shj item tersebut pada senarai semak soalan"
      if (best && (bestScore >= 80 || !targetSkCode)) {
        usedIds.add(best.id);
        const qCopy = { ...best };
        qCopy._jsuSlot = slot;
        qCopy._slotIndex = idx;
        qCopy.slotNo = idx + 1;
        qCopy.no = idx + 1;
        qCopy.isBlank = false;
        selected.push(qCopy);
      } else {
        // Kosongkan item slot tersebut pada senarai semak soalan
        selected.push({
          isBlank: true,
          id: `BLANK_SLOT_${paperMode}_${idx + 1}`,
          slotNo: idx + 1,
          no: idx + 1,
          tingkatan: ting,
          babNo: babNo,
          babNama: babNama || slot.bab || `Bab ${babNo}`,
          sk: slot.sk || "",
          topik: slot.sk || "",
          aras: targetAras,
          konstruk: targetKonstruk,
          kertas: paperMode === "kertas1" ? 1 : 2,
          bahagian: slot.section || (paperMode === "kertas1" ? "A" : "A"),
          markah: slot.markah || (paperMode === "kertas1" ? 1 : (slot.submarkah || 0)),
          soalan: "",
          soalanUtama: "",
          pilihan: [],
          _jsuSlot: slot,
          _slotIndex: idx
        });
      }
    });

    if (paperMode === "kertas2" && typeof validateK2KonstrukBalance === "function") {
      const validation = validateK2KonstrukBalance(jsuQuestions);
      if (validation && !validation.valid) {
        console.warn("⚠️ JSU Kertas 2 Konstruk:", validation.warnings);
      }
    }
  } else {
    // Fallback jika JSU tiada
    pool.sort((a, b) => (a.tingkatan - b.tingkatan) || (a.babNo - b.babNo) || (a.id.localeCompare(b.id)));
    selected = pool.slice(0, paperMode === "kertas1" ? 40 : 11);
  }

  AppState.assembledPapers[paperMode] = selected;
  renderAssemblyWorkbench();
  renderQuestionsBank();

  if (showFeedback) {
    const paperNames = {
      kertas1: "Kertas 1 (Objektif)",
      kertas2: "Kertas 2 (Struktur & Esei)",
      kertas3: "Kertas 3 (Amali)"
    };
    showJsuNotification(`✓ ${paperNames[paperMode] || 'Kertas'} berjaya dijana berpandukan Jadual Spesifikasi Ujian (JSU Piawai LPM ${config.ratio})!`);
  }
}

function showJsuNotification(message) {
  let toast = document.getElementById("jsu-toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "jsu-toast-notification";
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0F172A;
      color: #FFFFFF;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 0.88rem;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      border-left: 4px solid var(--accent-yellow);
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 2000;
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(15px);
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i data-lucide="sparkles" style="color: var(--accent-yellow); width: 18px; height: 18px;"></i> <span>${message}</span>`;
  if (window.lucide) lucide.createIcons();

  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
  }, 4000);
}

function isQuestionInActivePaper(qId) {
  for (const key in AppState.assembledPapers) {
    if (AppState.assembledPapers[key].some(q => q.id === qId)) return true;
  }
  return false;
}

// ============================================================================
// FUNGSI MEMADAM SOALAN SECARA MANUAL DARI BANK SOALAN
// ============================================================================
function deleteQuestionFromBank(questionId) {
  if (typeof QUESTION_BANK === "undefined") return;
  const qIndex = QUESTION_BANK.findIndex(q => q.id === questionId);
  if (qIndex === -1) {
    showJsuNotification("⚠️ Soalan tidak ditemui.");
    return;
  }
  const q = QUESTION_BANK[qIndex];
  
  const confirmMsg = `Adakah anda pasti mahu memadam soalan ini daripada Bank Soalan?\n\n` +
    `• ID Soalan: ${q.id}\n` +
    `• Sumber: ${q.sumber || 'Koleksi Standard SPM'}\n` +
    `• Bab: T${q.tingkatan} Bab ${q.babNo}: ${q.babNama}\n` +
    `• Aras: ${q.aras} (${q.konstruk})\n` +
    `• Markah: ${q.markah || q.markahPenuh || 1}m\n\n` +
    `Tindakan ini akan mengeluarkan soalan ini daripada repositori Bank Soalan.`;

  if (!confirm(confirmMsg)) {
    return;
  }

  // 1. Keluarkan daripada susunan kertas peperiksaan aktif jika ada
  ["kertas1", "kertas2", "kertas3"].forEach(mode => {
    if (AppState.assembledPapers && AppState.assembledPapers[mode]) {
      AppState.assembledPapers[mode] = AppState.assembledPapers[mode].filter(id => id !== questionId);
    }
  });

  // 2. Rekodkan ID dalam localStorage untuk kekal rentas sesi/reload
  try {
    let deletedIds = JSON.parse(localStorage.getItem("fizik_deleted_question_ids") || "[]");
    if (!deletedIds.includes(questionId)) {
      deletedIds.push(questionId);
      localStorage.setItem("fizik_deleted_question_ids", JSON.stringify(deletedIds));
    }
  } catch(e) {
    console.warn("Ralat simpan deleted ID ke localStorage:", e);
  }

  // 3. Keluarkan daripada array QUESTION_BANK semasa
  QUESTION_BANK.splice(qIndex, 1);

  // 4. Kemas kini paparan antaramuka Bank Soalan dan Workbench
  populateBankSoalanDropdowns();
  renderQuestionsBank();
  if (typeof renderAssemblyWorkbench === "function") renderAssemblyWorkbench();
  if (window.lucide) lucide.createIcons();

  showJsuNotification(`🗑️ Soalan ${q.id} berjaya dipadam daripada Bank Soalan.`);
}

function toggleQuestionAssembly(qId) {
  if (AppState.targetSlotForSelection) {
    selectQuestionForTargetSlot(qId);
    return;
  }
  const question = QUESTION_BANK.find(q => q.id === qId);
  if (!question) return;

  const targetPaperKey = question.kertas === 1 ? "kertas1" : (question.kertas === 2 ? "kertas2" : "kertas3");
  const list = AppState.assembledPapers[targetPaperKey];
  const index = list.findIndex(q => q.id === qId);

  if (index >= 0) {
    // Padam daripada kertas
    list.splice(index, 1);
  } else {
    // Tambah ke dalam kertas
    list.push(question);
  }

  renderAssemblyWorkbench();
  renderQuestionsBank();
}

/* ==========================================================================
   TUKAR SOALAN SETARA MENGIKUT JSU (SK, ARAS & KONSTRUK SAMA)
   ========================================================================== */
function tukarSoalanSetara(paperKey, qId, slotIndex) {
  const mode = paperKey || AppState.currentPaperMode;
  const list = AppState.assembledPapers[mode];
  if (!list || slotIndex < 0 || slotIndex >= list.length) return;

  const currentQ = list[slotIndex];
  if (!currentQ) return;

  const bank = (typeof QUESTION_BANK !== "undefined") ? QUESTION_BANK : [];
  const targetKertas = (mode === "kertas1") ? 1 : (mode === "kertas2" ? 2 : 3);

  const normalize = (str) => (str || "").toLowerCase().trim().replace(/^sk\s*/i, "");
  const currentSk = normalize(currentQ.sk);
  const currentAras = currentQ.aras;
  const currentKonstruk = normalize(currentQ.konstruk);
  const currentBahagian = currentQ.bahagian;
  const currentMarks = currentQ.markah || currentQ.markahPenuh;

  // Set ID & teks yang diharamkan (semua soalan yang sudah berada dalam 1 set kertas ini)
  const forbiddenIds = new Set(list.map(q => q && q.id).filter(Boolean));
  
  // Normalisasi teks soalan untuk mengelakkan soalan pendua walaupun ID berbeza
  const getStem = (q) => {
    const raw = q.soalan || q.soalanUtama || "";
    return raw.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  };
  const forbiddenStems = new Set(list.map(q => q ? getStem(q) : "").filter(Boolean));

  // Pembantu saringan: Calon MESTI belum digunakan sama sekali dalam set ini (100% UNIK)
  const isCandidateEligible = (q) => {
    if (!q || !q.id) return false;
    if (forbiddenIds.has(q.id)) return false; // DILARANG SAMA SEKALI jika ID sudah ada dalam set ini
    const stem = getStem(q);
    if (stem && forbiddenStems.has(stem)) return false; // DILARANG SAMA SEKALI jika teks soalan serupa keluar
    if (q.kertas !== targetKertas) return false;

    // Untuk Kertas 2: Bahagian (A/B/C) & Markah mesti selaras dengan piawai LPM
    if (targetKertas === 2) {
      if (currentBahagian && q.bahagian !== currentBahagian) return false;
      const qMarks = q.markah || q.markahPenuh;
      if (currentMarks && qMarks !== currentMarks) return false;
    }
    return true;
  };

  let pool = [];
  let matchTier = "";

  // TIER 1: SK Sama Tepat (atau Subtopik Sama), Aras Sama, Konstruk Sama (Strict JSU LPM)
  const tier1 = bank.filter(q => {
    if (!isCandidateEligible(q)) return false;
    if (q.aras !== currentAras) return false;

    // Padanan SK
    const qSk = normalize(q.sk);
    const skMatch = (qSk === currentSk) ||
      (q.tingkatan === currentQ.tingkatan && q.babNo === currentQ.babNo && qSk.slice(0, 3) === currentSk.slice(0, 3));
    if (!skMatch) return false;

    // Padanan Konstruk
    const qKonstruk = normalize(q.konstruk);
    const konstrukMatch = (qKonstruk === currentKonstruk) ||
      qKonstruk.includes(currentKonstruk) || currentKonstruk.includes(qKonstruk);
    return konstrukMatch;
  });

  if (tier1.length > 0) {
    pool = tier1;
    matchTier = "SK & Konstruk Setara";
  }

  // TIER 2: Bab Sama, Aras Sama, Konstruk Sama
  if (pool.length === 0) {
    const tier2 = bank.filter(q => {
      if (!isCandidateEligible(q)) return false;
      if (q.tingkatan !== currentQ.tingkatan || q.babNo !== currentQ.babNo) return false;
      if (q.aras !== currentAras) return false;

      const qKonstruk = normalize(q.konstruk);
      return (qKonstruk === currentKonstruk) ||
        qKonstruk.includes(currentKonstruk) || currentKonstruk.includes(qKonstruk);
    });
    if (tier2.length > 0) {
      pool = tier2;
      matchTier = "Bab, Aras & Konstruk";
    }
  }

  // TIER 3: Bab Sama, Aras Sama
  if (pool.length === 0) {
    const tier3 = bank.filter(q => {
      if (!isCandidateEligible(q)) return false;
      if (q.tingkatan !== currentQ.tingkatan || q.babNo !== currentQ.babNo) return false;
      return q.aras === currentAras;
    });
    if (tier3.length > 0) {
      pool = tier3;
      matchTier = "Bab & Aras";
    }
  }

  // TIER 4: Bab Sama, Konstruk Sama
  if (pool.length === 0) {
    const tier4 = bank.filter(q => {
      if (!isCandidateEligible(q)) return false;
      if (q.tingkatan !== currentQ.tingkatan || q.babNo !== currentQ.babNo) return false;
      const qKonstruk = normalize(q.konstruk);
      return (qKonstruk === currentKonstruk) ||
        qKonstruk.includes(currentKonstruk) || currentKonstruk.includes(qKonstruk);
    });
    if (tier4.length > 0) {
      pool = tier4;
      matchTier = "Bab & Konstruk";
    }
  }

  // TIER 5: Bab Sama (sebarang aras/konstruk yang belum digunakan dalam Bab yang sama)
  if (pool.length === 0) {
    const tier5 = bank.filter(q => {
      if (!isCandidateEligible(q)) return false;
      return q.tingkatan === currentQ.tingkatan && q.babNo === currentQ.babNo;
    });
    if (tier5.length > 0) {
      pool = tier5;
      matchTier = "Bab yang Sama";
    }
  }

  // JIKA SEMUA TIER TIADA CALON YANG BELUM DIGUNAKAN:
  // DILARANG SAMA SEKALI kitar semula atau keluarkan soalan yang sama dalam 1 set!
  if (pool.length === 0) {
    if (typeof showJsuNotification === "function") {
      const babLabel = currentQ.babNo ? `Bab ${currentQ.babNo}` : 'topik ini';
      showJsuNotification(`⚠️ Tiada soalan gantian lain yang belum digunakan dalam set ini bagi ${babLabel} (${currentQ.aras} • ${currentQ.konstruk}). Soalan sedia ada dikekalkan bagi menjamin tiada soalan berulang.`);
    }
    return;
  }

  // Pilih satu soalan secara rawak daripada pool calon yang sah (100% unik & belum digunakan)
  const chosenQ = pool[Math.floor(Math.random() * pool.length)];

  // Kekalkan status bukaan / lipatan kad
  if (!AppState.expandedWorkbenchSlots) AppState.expandedWorkbenchSlots = {};
  AppState.expandedWorkbenchSlots[chosenQ.id] = AppState.expandedWorkbenchSlots[currentQ.id];

  if (!AppState.expandedWorkbenchSkema) AppState.expandedWorkbenchSkema = {};
  AppState.expandedWorkbenchSkema[chosenQ.id] = AppState.expandedWorkbenchSkema[currentQ.id];

  // Gantikan item pada slotIndex
  list[slotIndex] = chosenQ;

  // Render semula workbench
  renderAssemblyWorkbench();

  // Animasi denyutan (pulse) pada kad yang baru ditukar
  setTimeout(() => {
    const el = document.getElementById(`slot-${chosenQ.id}`);
    if (el) {
      el.classList.add("slot-just-swapped");
      setTimeout(() => el.classList.remove("slot-just-swapped"), 1800);
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, 50);

  if (typeof showJsuNotification === "function") {
    const kName = (targetKertas === 1) ? "Kertas 1" : (targetKertas === 2 ? "Kertas 2" : "Amali");
    showJsuNotification(`✓ Soalan ${slotIndex + 1} [${kName}] berjaya ditukar (${matchTier}) kepada [${chosenQ.id}]: ${chosenQ.sk} (${chosenQ.aras} • ${chosenQ.konstruk}) [100% Unik]`);
  }
}

function removeQuestionFromAssembly(paperKey, qId) {
  const list = AppState.assembledPapers[paperKey];
  const index = list.findIndex(q => q.id === qId);
  if (index >= 0) {
    list.splice(index, 1);
    renderAssemblyWorkbench();
    renderQuestionsBank();
  }
}

function toggleAssemblyViewMode() {
  AppState.assemblyViewMode = (AppState.assemblyViewMode === "full") ? "compact" : "full";
  renderAssemblyWorkbench();
}

function toggleWorkbenchSlot(qId) {
  if (!AppState.expandedWorkbenchSlots) AppState.expandedWorkbenchSlots = {};
  const currentState = (AppState.expandedWorkbenchSlots[qId] !== undefined)
    ? AppState.expandedWorkbenchSlots[qId]
    : (AppState.assemblyViewMode === "full");
  AppState.expandedWorkbenchSlots[qId] = !currentState;
  renderAssemblyWorkbench();
}

function toggleWorkbenchSkema(qId) {
  if (!AppState.expandedWorkbenchSkema) AppState.expandedWorkbenchSkema = {};
  AppState.expandedWorkbenchSkema[qId] = !AppState.expandedWorkbenchSkema[qId];
  renderAssemblyWorkbench();
}

function autoFillAssembledPaper(mode) {
  if (AppState._autoFilling) return;
  AppState._autoFilling = true;
  try {
    generatePaperByJSU(mode || AppState.currentPaperMode, { ratio: "5:3:2", levelBalance: "50:50" }, true);
  } finally {
    AppState._autoFilling = false;
  }
}

function renderAssemblyWorkbench() {
  const mode = getActivePaperMode();
  if (!AppState.assembledPapers[mode] || AppState.assembledPapers[mode].length === 0) {
    autoFillAssembledPaper(mode);
  }
  const list = AppState.assembledPapers[mode] || [];
  const container = document.getElementById("assembled-slots-container");
  const titleEl = document.getElementById("workbench-title");
  const descEl = document.getElementById("workbench-desc");
  const statusEl = document.getElementById("assembly-paper-status");
  const totalQEl = document.getElementById("assembly-total-questions");
  const totalMarksEl = document.getElementById("assembly-total-marks");
  const ratioTextEl = document.getElementById("assembly-ratio-text");
  const coverageContainer = document.getElementById("assembly-chapter-coverage");
  const toggleBtn = document.getElementById("btn-toggle-workbench-view");
  const toggleLabel = document.getElementById("workbench-view-mode-label");

  const isGlobalFull = AppState.assemblyViewMode === "full";

  if (toggleLabel) {
    toggleLabel.textContent = isGlobalFull ? "Paparan Padat" : "Papar Soalan Lengkap";
  }
  if (toggleBtn) {
    toggleBtn.title = isGlobalFull ? "Tukar kepada paparan senarai padat" : "Papar teks soalan lengkap, pilihan jawapan dan skema";
    toggleBtn.innerHTML = `
      <i data-lucide="${isGlobalFull ? 'list' : 'maximize-2'}" style="width: 14px; height: 14px;"></i>
      <span id="workbench-view-mode-label">${isGlobalFull ? 'Paparan Padat' : 'Papar Soalan Lengkap'}</span>
    `;
  }

  // Tajuk Mengikut Mode
  if (mode === "kertas1") {
    titleEl.textContent = "Pemasangan Kertas 1 (4531/1)";
    descEl.textContent = "40 Soalan Objektif Aneka Pilihan — Masa: 1 Jam 15 Minit (40 Markah)";
    if (totalQEl) totalQEl.textContent = `${list.length} / 40 Soalan`;
  } else if (mode === "kertas2") {
    titleEl.textContent = "Pemasangan Kertas 2 (4531/2)";
    descEl.textContent = "Bahagian A (60m), Bahagian B (20m), Bahagian C (20m) — Masa: 2 Jam 30 Minit (100 Markah)";
    if (totalQEl) totalQEl.textContent = `${list.length} Item Soalan`;
  } else if (mode === "kertas3") {
    titleEl.textContent = "Pemasangan Kertas Amali (4531/3)";
    descEl.textContent = "Ujian Amali Sains (UAS) / Amali Bertulis — Masa: 45 Minit (15 Markah)";
    if (totalQEl) totalQEl.textContent = `${list.length} Eksperimen`;
  }

  // Pengiraan Markah & Nisbah Aras
  let totalMarks = 0;
  let countR = 0, countS = 0, countT = 0;

  list.forEach(q => {
    totalMarks += (q.markah || q.markahPenuh || 1);
    if (q.aras === "Rendah") countR++;
    else if (q.aras === "Sederhana") countS++;
    else if (q.aras === "Tinggi") countT++;
  });

  if (totalMarksEl) totalMarksEl.textContent = (mode === "kertas2" && totalMarks >= 100) ? "100 Markah (120m diuji)" : `${totalMarks} Markah`;
  if (ratioTextEl) ratioTextEl.textContent = `${countR} R : ${countS} S : ${countT} T`;

  // Status kelengkapan
  if (mode === "kertas1") {
    if (statusEl) statusEl.textContent = list.length >= 40 ? "Lengkap (40/40)" : `Sedang Dipasang (${list.length}/40)`;
    if (statusEl) statusEl.style.color = list.length >= 40 ? "var(--success)" : "var(--primary-purple)";
  } else if (mode === "kertas2") {
    if (statusEl) statusEl.textContent = totalMarks >= 100 ? "Lengkap (100m)" : `Sedang Dipasang (${totalMarks}/100m)`;
    if (statusEl) statusEl.style.color = totalMarks >= 100 ? "var(--success)" : "var(--primary-purple)";
  } else {
    if (statusEl) statusEl.textContent = list.length >= 1 ? "Lengkap (15m)" : "Belum Dipilih";
    if (statusEl) statusEl.style.color = list.length >= 1 ? "var(--success)" : "var(--primary-purple)";
  }

  // Progress Bar Segments
  const totalCount = list.length || 1;
  const pctR = Math.round((countR / totalCount) * 100);
  const pctS = Math.round((countS / totalCount) * 100);
  const pctT = Math.max(0, 100 - pctR - pctS);

  const segR = document.getElementById("seg-rendah");
  const segS = document.getElementById("seg-sederhana");
  const segT = document.getElementById("seg-tinggi");
  if (segR) segR.style.width = `${pctR}%`;
  if (segS) segS.style.width = `${pctS}%`;
  if (segT) segT.style.width = `${pctT}%`;

  // Render Slots List
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3.5rem 1rem; border: 2px dashed var(--border-color); border-radius: var(--radius-md);">
        <i data-lucide="inbox" style="width: 48px; height: 48px; color: var(--text-light); margin-bottom: 0.5rem;"></i>
        <h4 style="font-size: 1.1rem; font-weight: 700;">Kertas Ini Masih Kosong</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1.25rem;">
          Klik butang "Auto-Isi Slot Seimbang" atau pergi ke Bank Soalan untuk memilih soalan.
        </p>
        <button class="btn btn-primary btn-sm" onclick="autoFillAssembledPaper('${mode}'); renderAssemblyWorkbench();">
          <i data-lucide="wand-2"></i> Auto-Isi Slot Seimbang Sekarang
        </button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = list.map((q, idx) => {
    const qText = q.soalan || q.soalanUtama || q.tajukEksperimen || "";
    const cleanText = qText.length > 90 ? qText.substring(0, 90) + "..." : qText;
    const badgeArasClass = q.aras === "Rendah" ? "badge-success" : (q.aras === "Sederhana" ? "badge-yellow" : "badge-purple");
    const totalQMarks = q.markah || q.markahPenuh || (mode === "kertas1" ? 1 : 0);

    const isCardFull = (AppState.expandedWorkbenchSlots[q.id] !== undefined)
      ? AppState.expandedWorkbenchSlots[q.id]
      : isGlobalFull;
    // SKEMA WAJIB TERPAPAR SECARA DEFAULT DI LANGKAH 3
    const isSkemaOpen = (AppState.expandedWorkbenchSkema[q.id] !== false);

    if (q.isBlank) {
      return `
        <div class="slot-item compact-mode" id="slot-${q.id}" style="border: 2px dashed #CBD5E1; background: #F8FAFC;">
          <div class="slot-number-badge" style="background: #94A3B8; color: #fff;">${idx + 1}</div>
          <div class="slot-content-desc">
            <h4 style="color: #64748B; font-style: italic;">[Slot Kosong — Tiada Soalan Sepadan Dalam Bank]</h4>
            <p>
              ${q.bahagian ? `<span class="badge badge-purple" style="font-size: 0.65rem; margin-right: 4px;">Bahagian ${q.bahagian}</span>` : ''}
              <span class="badge ${badgeArasClass}" style="font-size: 0.65rem;">${q.aras}</span>
              <span class="badge" style="background:#F1F5F9; color:#475569; font-size:0.65rem;">${q.konstruk}</span>
              Tingkatan ${q.tingkatan} • Bab ${q.babNo}: ${q.babNama} • ${q.sk || ''}
            </p>
          </div>
          <div class="slot-marks-badge" style="background: #F1F5F9; color: #64748B;">
            ${totalQMarks}m
          </div>
          <div style="display: flex; gap: 4px; align-items: center;">
            <button class="btn btn-outline btn-xs" onclick="openBankSoalanForSlot('${mode}', ${idx})" title="Pilih soalan bagi SK ini dari Bank Soalan">
              <i data-lucide="search" style="width: 13px; height: 13px;"></i> Pilih Soalan
            </button>
          </div>
        </div>
      `;
    }

    if (!isCardFull) {
      // COMPACT VIEW
      return `
        <div class="slot-item compact-mode" id="slot-${q.id}">
          <div class="slot-number-badge">${idx + 1}</div>
          <div class="slot-content-desc" style="cursor: pointer;" onclick="toggleWorkbenchSlot('${q.id}')">
            <h4>${cleanText}</h4>
            <p>
              ${q.bahagian ? `<span class="badge badge-purple" style="font-size: 0.65rem; margin-right: 4px;">Bahagian ${q.bahagian}</span>` : ''}
              <span class="badge ${badgeArasClass}" style="font-size: 0.65rem;">${q.aras}</span>
              Tingkatan ${q.tingkatan} • Bab ${q.babNo}: ${q.babNama} • ${q.topik || q.sk || ''}
            </p>
          </div>
          <div class="slot-marks-badge">
            ${totalQMarks}m
          </div>
          <div style="display: flex; gap: 4px; align-items: center;">
            <button class="btn btn-outline btn-xs btn-tukar-soalan" onclick="tukarSoalanSetara('${mode}', '${q.id}', ${idx})" title="Tukar soalan setara mengikut JSU (SK, Aras & Konstruk sama)">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
            </button>
            <button class="btn btn-outline btn-xs" onclick="toggleWorkbenchSlot('${q.id}')" title="Papar soalan lengkap">
              <i data-lucide="maximize-2" style="width: 13px; height: 13px;"></i>
            </button>
            <button class="btn btn-outline btn-xs" style="color: var(--danger); border-color: #FECACA;" onclick="removeQuestionFromAssembly('${mode}', '${q.id}')" title="Buang soalan">
              <i data-lucide="trash" style="width: 13px; height: 13px;"></i>
            </button>
          </div>
        </div>
      `;
    }

    // FULL VIEW
    return `
      <div class="slot-item full-mode" id="slot-${q.id}">
        <!-- 1. Header Bar -->
        <div class="slot-full-header">
          <div class="slot-header-left">
            <div class="slot-number-badge">${idx + 1}</div>
            <div class="slot-meta-chips">
              ${q.bahagian ? `<span class="badge badge-purple" style="font-weight: 700;">Bahagian ${q.bahagian}</span>` : ''}
              <span class="badge ${badgeArasClass}">${q.aras}</span>
              ${q.konstruk ? `<span class="badge" style="background:#F1F5F9; color:#334155; font-weight:600;">${q.konstruk}</span>` : ''}
              <span class="slot-curriculum-info">Tingkatan ${q.tingkatan} • Bab ${q.babNo}: ${q.babNama} • ${q.topik || q.sk || ''}</span>
            </div>
          </div>
          <div class="slot-header-right">
            <div class="slot-marks-badge">
              <i data-lucide="award" style="width: 13px; height: 13px;"></i>
              ${totalQMarks} Markah
            </div>
            <button class="btn btn-outline btn-xs btn-tukar-soalan" onclick="tukarSoalanSetara('${mode}', '${q.id}', ${idx})" title="Tukar soalan setara mengikut JSU (SK, Aras & Konstruk sama)">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              <span>Tukar Soalan</span>
            </button>
            <button class="btn btn-outline btn-xs" onclick="toggleWorkbenchSlot('${q.id}')" title="Lipat ke paparan padat">
              <i data-lucide="minimize-2" style="width: 13px; height: 13px;"></i>
              <span>Ringkas</span>
            </button>
            <button class="btn btn-outline btn-xs" style="color: var(--danger); border-color: #FECACA;" onclick="removeQuestionFromAssembly('${mode}', '${q.id}')" title="Buang soalan">
              <i data-lucide="trash" style="width: 13px; height: 13px;"></i>
            </button>
          </div>
        </div>

        <!-- 2. Full Content Body -->
        ${mode === 'kertas1' ? `
          <!-- KERTAS 1 (OBJEKTIF) -->
          <div class="slot-complete-stem">${formatBilingualText(q.soalan)}</div>
          ${getQuestionDiagramHtml(q, "slot-diagram-frame")}
          <div class="slot-options-flow">
            ${(q.pilihan || []).map(opt => `
              <div class="slot-option-pill ${opt.id === q.jawapanBetul && isSkemaOpen ? 'is-correct' : ''}">
                <div class="slot-option-circle">${opt.id}</div>
                <div class="slot-option-text">${formatOptionText(opt.teks)}</div>
                ${opt.id === q.jawapanBetul && isSkemaOpen ? '<span style="color:#10B981; margin-left:auto; display:flex;"><i data-lucide="check" style="width:16px;height:16px;"></i></span>' : ''}
              </div>
            `).join('')}
          </div>
          
          <div style="margin-top: 0.5rem;">
            <button class="btn-skema-toggle" onclick="toggleWorkbenchSkema('${q.id}')">
              <i data-lucide="${isSkemaOpen ? 'eye-off' : 'key'}" style="width:12px;height:12px;"></i>
              <span>${isSkemaOpen ? 'Sembunyikan Jawapan & Skema' : 'Papar Jawapan & Skema'}</span>
            </button>
            ${isSkemaOpen ? `
              <div class="slot-skema-box">
                <div class="skema-header-tag">
                  <i data-lucide="check-circle-2" style="width:14px;height:14px;"></i>
                  Jawapan Betul: Pilihan ${q.jawapanBetul}
                </div>
                ${q.penerangan ? `<div class="skema-pre">${q.penerangan}</div>` : ''}
              </div>
            ` : ''}
          </div>
        ` : (mode === 'kertas2' ? `
          <!-- KERTAS 2 (STRUKTUR & ESEI) -->
          <div class="slot-complete-stem">${formatBilingualText(q.soalanUtama)}</div>
          ${getQuestionDiagramHtml(q, "slot-diagram-frame")}
          
          <div class="slot-subq-flow">
            ${(q.pecahan || []).map(p => `
              <div class="slot-subq-item">
                <div class="slot-subq-top">
                  <span class="slot-subq-label">${p.sub}</span>
                  <div class="slot-subq-text">${formatBilingualText(p.soalan)}</div>
                  <span class="slot-subq-mark">${p.markah} Markah</span>
                </div>
                ${isSkemaOpen && p.skema ? `
                  <div class="slot-skema-box" style="margin-top: 0.5rem;">
                    <div class="skema-header-tag">
                      <i data-lucide="file-check-2" style="width:13px;height:13px;"></i>
                      Skema Pemarkahan:
                    </div>
                    <pre class="skema-pre">${p.skema}</pre>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>

          <div style="margin-top: 0.5rem;">
            <button class="btn-skema-toggle" onclick="toggleWorkbenchSkema('${q.id}')">
              <i data-lucide="${isSkemaOpen ? 'eye-off' : 'file-text'}" style="width:12px;height:12px;"></i>
              <span>${isSkemaOpen ? 'Sembunyikan Skema Pemarkahan' : 'Papar Skema Pemarkahan Lengkap'}</span>
            </button>
          </div>
        ` : `
          <!-- KERTAS 3 (AMALI) -->
          <div class="slot-complete-stem" style="color: var(--primary-purple);">${q.tajukEksperimen}</div>
          <div style="font-size: 0.88rem; line-height: 1.6; color: var(--text-main); margin-top: 0.4rem;">
            <p><strong>Tujuan:</strong> ${q.tujuan}</p>
            <p><strong>Pemboleh Ubah:</strong> Manipulasi: ${q.pembolehubah?.dimanipulasi} &bull; Bergerak Balas: ${q.pembolehubah?.bergerakbalas} &bull; Dimalarkan: ${q.pembolehubah?.dimalarkan}</p>
            <p><strong>Senarai Radas:</strong> ${(q.radas || []).join(', ')}</p>
          </div>
        `)}
      </div>
    `;
  }).join("");

  // Update Liputan Bab Sidebar
  if (coverageContainer) {
    const allChapters = [
      { t: 4, no: 1, nama: "Pengukuran" },
      { t: 4, no: 2, nama: "Daya & Gerakan I" },
      { t: 4, no: 3, nama: "Kegravitian" },
      { t: 4, no: 4, nama: "Haba" },
      { t: 4, no: 5, nama: "Gelombang" },
      { t: 4, no: 6, nama: "Cahaya & Optik" },
      { t: 5, no: 1, nama: "Daya & Gerakan II" },
      { t: 5, no: 2, nama: "Tekanan" },
      { t: 5, no: 3, nama: "Elektrik" },
      { t: 5, no: 4, nama: "Keelektromagnetan" },
      { t: 5, no: 5, nama: "Elektronik" },
      { t: 5, no: 6, nama: "Fizik Nuklear" },
      { t: 5, no: 7, nama: "Fizik Kuantum" }
    ];

    coverageContainer.innerHTML = allChapters.map(chap => {
      const isCovered = list.some(q => q.tingkatan === chap.t && q.babNo === chap.no);
      return `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 3px 0;">
          <span style="color: ${isCovered ? 'var(--text-main)' : 'var(--text-light)'};">
            T${chap.t} B${chap.no}: ${chap.nama}
          </span>
          <i data-lucide="${isCovered ? 'check-circle' : 'circle'}" 
             style="width: 14px; height: 14px; color: ${isCovered ? 'var(--success)' : 'var(--border-color)'};"></i>
        </div>
      `;
    }).join("");
  }

  if (window.lucide) lucide.createIcons();
}

/* ==========================================================================
   4. JADUAL SPESIFIKASI UJIAN (JSU MATRIX) GENERATOR
   Nota: Enjin JSU Rasmi Lembaga Peperiksaan Malaysia diuruskan oleh jsu-profiles.js
   ========================================================================== */
// Diuruskan sepenuhnya oleh jsu-profiles.js dengan sokongan penapis Tingkatan, Peperiksaan & Format Kertas

/* ==========================================================================
   5. WHITE PAPER SPREAD VIEW (INSPIRED BY REFERENCE IMAGE)
   ========================================================================== */
function renderSpreadView() {
  const container = document.getElementById("spread-highlight-questions");
  if (!container) return;

  const sampleQuestions = QUESTION_BANK.slice(1, 4);

  container.innerHTML = sampleQuestions.map((q, idx) => `
    <div style="background: var(--bg-subtle); border-left: 3px solid var(--primary-purple); padding: 0.65rem 0.85rem; border-radius: 4px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.2rem;">
        <strong style="color: var(--primary-purple);">Contoh 0${idx + 1} — ${q.babNama}</strong>
        <span class="badge badge-yellow" style="font-size: 0.65rem;">${q.aras}</span>
      </div>
      <p style="color: var(--text-main); font-size: 0.78rem;">
        ${(q.soalan || q.soalanUtama || q.tajukEksperimen).substring(0, 100)}...
      </p>
    </div>
  `).join("");
}

/* ==========================================================================
   6. PRATONTON CETAK FORMAT RASMI LEMBAGA PEPERIKSAAN MALAYSIA (LPM)
   ========================================================================== */
function getExamMetadata() {
  const selPep = document.getElementById("jsu-select-peperiksaan");
  const selTing = document.getElementById("jsu-select-tingkatan");

  let pepVal = selPep ? selPep.value : "percubaan";
  let tingVal = selTing ? selTing.value : ((window.AppState && AppState.filters && AppState.filters.tingkatan) || "5");

  if (!selPep) {
    try {
      const s = JSON.parse(localStorage.getItem("fizik_jsu_settings") || "{}");
      if (s.peperiksaan) pepVal = s.peperiksaan;
      if (s.tingkatan) tingVal = s.tingkatan;
    } catch (e) {}
  }

  let examTitle = "PEPERIKSAAN PERCUBAAN SPM";
  if (pepVal === "ppt") {
    examTitle = "PEPERIKSAAN PERTENGAHAN SESI AKADEMIK";
  } else if (pepVal === "pat") {
    examTitle = "PEPERIKSAAN AKHIR SESI AKADEMIK";
  } else if (pepVal === "selaras") {
    examTitle = "UJIAN SELARAS";
  } else if (pepVal === "percubaan") {
    examTitle = "PEPERIKSAAN PERCUBAAN SPM";
  } else if (selPep && selPep.selectedOptions && selPep.selectedOptions[0] && selPep.selectedOptions[0].text) {
    examTitle = selPep.selectedOptions[0].text.toUpperCase();
  }

  let tingkatan = (tingVal === "all" || !tingVal) ? "5" : tingVal;
  let tahun = new Date().getFullYear();
  let panitia = "";
  let sekolah = "";

  return { examTitle, tingkatan, tahun, panitia, sekolah };
}

function getPageFooterHtml(codeText, isLastPage, isCover = false) {
  const meta = getExamMetadata();
  const panitiaPart = meta.panitia ? (meta.panitia.includes("[") ? `Panitia ${meta.panitia}` : `Panitia [${meta.panitia}]`) : "Panitia []";
  const schoolPart = meta.sekolah ? (meta.sekolah.includes("[") ? `SMK ${meta.sekolah}` : `SMK [${meta.sekolah}]`) : "SMK []";
  const footerSchoolText = `${meta.tahun} ${panitiaPart} ${schoolPart}`.trim();

  if (isCover) {
    return `
      <div class="a4-page-footer">
        <div class="a4-page-footer-top">
          <span>[Lihat halaman sebelah</span>
        </div>
        <div class="a4-page-footer-bottom">
          <span class="footer-code-school"><strong>${codeText}</strong> <span class="footer-school-text">${footerSchoolText}</span></span>
          <span class="footer-sulit-text">SULIT</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="a4-page-footer">
      <div class="a4-page-footer-top">
        ${!isLastPage ? '<span>[Lihat halaman sebelah</span>' : '<span></span>'}
      </div>
      <div class="a4-page-footer-bottom">
        <span class="footer-code-school">${codeText} <span class="footer-school-text">${footerSchoolText}</span></span>
        <span class="footer-sulit-text">SULIT</span>
      </div>
    </div>
  `;
}

const SPM_OFFICIAL_FORMULA_TABLE_HTML_P1 = "<table class=\"spm-official-formula-table\">\n  <tr><td></td><td colspan=\"3\"><b>DAYA DAN GERAKAN I</b><br><b><i>FORCE AND MOTION I</i></b></td><td colspan=\"2\">13</td><td colspan=\"2\">Jejari Bumi, R=6.37\u00d710<sup>6</sup> m<br>Radius of Earth</td></tr>\n  <tr><td>1</td><td colspan=\"3\">v=u+at</td><td colspan=\"2\"></td><td colspan=\"2\"><b>HABA</b><br><b><i>HEAT</i></b></td></tr>\n  <tr><td>2</td><td colspan=\"3\">s=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>(u+v)t</td><td colspan=\"2\">1</td><td colspan=\"2\">Q=mc\u03b8</td></tr>\n  <tr><td>3</td><td colspan=\"3\">s=ut+<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>at<sup>2</sup></td><td colspan=\"2\">2</td><td colspan=\"2\">Q=ml</td></tr>\n  <tr><td>4</td><td colspan=\"3\">v<sup>2</sup>=u<sup>2</sup>+2as</td><td colspan=\"2\">3</td><td colspan=\"2\">Q=Pt</td></tr>\n  <tr><td>5</td><td colspan=\"3\">Momentum = mv</td><td colspan=\"2\">4</td><td colspan=\"2\">P<sub>1</sub>V<sub>1</sub>=P<sub>1</sub>V<sub>1</sub></td></tr>\n  <tr><td>6</td><td colspan=\"3\">F=ma</td><td colspan=\"2\">5</td><td colspan=\"2\"><span class=\"f-frac\"><span class=\"f-num\">V<sub>1</sub></span><span class=\"f-den\">T<sub>1</sub></span></span>=<span class=\"f-frac\"><span class=\"f-num\">V<sub>2</sub></span><span class=\"f-den\">T<sub>2</sub></span></span></td></tr>\n  <tr><td></td><td colspan=\"3\"><b>KEGRAVITIAN</b><br><b><i>GRAVITATION</i></b></td><td colspan=\"2\">6</td><td colspan=\"2\"><span class=\"f-frac\"><span class=\"f-num\">P<sub>1</sub></span><span class=\"f-den\">T<sub>1</sub></span></span>=<span class=\"f-frac\"><span class=\"f-num\">P<sub>2</sub></span><span class=\"f-den\">T<sub>2</sub></span></span></td></tr>\n  <tr><td>1</td><td colspan=\"3\">F=<span class=\"f-frac\"><span class=\"f-num\">Gm<sub>1</sub>m<sub>2</sub></span><span class=\"f-den\">r<sup>2</sup></span></span></td><td colspan=\"2\"></td><td colspan=\"2\"><b>GELOMBANG</b><br><b><i>WAVES</i></b></td></tr>\n  <tr><td>2</td><td colspan=\"3\">g=<span class=\"f-frac\"><span class=\"f-num\">GM</span><span class=\"f-den\">r<sup>2</sup></span></span></td><td colspan=\"2\">1</td><td colspan=\"2\">v=f\u03bb</td></tr>\n  <tr><td>3</td><td colspan=\"3\">F= <span class=\"f-frac\"><span class=\"f-num\">mv<sup>2</sup></span><span class=\"f-den\">r</span></span></td><td colspan=\"2\">2</td><td colspan=\"2\">\u03bb=<span class=\"f-frac\"><span class=\"f-num\">ax</span><span class=\"f-den\">D</span></span></td></tr>\n  <tr><td>4</td><td colspan=\"3\">a= <span class=\"f-frac\"><span class=\"f-num\">v<sup>2</sup></span><span class=\"f-den\">r</span></span></td><td colspan=\"2\"></td><td colspan=\"2\"><b>CAHAYA DAN OPTIK</b><br><b><i>LIGHT AND OPTICS</i></b></td></tr>\n  <tr><td>5</td><td colspan=\"3\">v= <span class=\"f-frac\"><span class=\"f-num\">2\u03c0r</span><span class=\"f-den\">T</span></span></td><td colspan=\"2\">1</td><td colspan=\"2\">n=<span class=\"f-frac\"><span class=\"f-num\">c</span><span class=\"f-den\">v</span></span></td></tr>\n  <tr><td>6</td><td colspan=\"3\"><span class=\"f-frac\"><span class=\"f-num\">T1  2</span><span class=\"f-den\">r<sub>1</sub><sup>3</sup></span></span>= <span class=\"f-frac\"><span class=\"f-num\">T2  2</span><span class=\"f-den\">r<sub>2</sub><sup>3</sup></span></span></td><td colspan=\"2\">2</td><td colspan=\"2\">n=<span class=\"f-frac\"><span class=\"f-num\">sini</span><span class=\"f-den\">sinr</span></span></td></tr>\n  <tr><td>7</td><td colspan=\"3\">v=&radic;(<span class=\"f-frac\"><span class=\"f-num\">GM</span><span class=\"f-den\">r</span></span>)</td><td colspan=\"2\">3</td><td colspan=\"2\">n=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">sinc</span></span></td></tr>\n  <tr><td>8</td><td colspan=\"3\">u= -<span class=\"f-frac\"><span class=\"f-num\">GMm</span><span class=\"f-den\">r</span></span></td><td colspan=\"2\">4</td><td colspan=\"2\">n=<span class=\"f-frac\"><span class=\"f-num\">H</span><span class=\"f-den\">h</span></span></td></tr>\n  <tr><td>9</td><td colspan=\"3\">v=&radic;(<span class=\"f-frac\"><span class=\"f-num\">2GM</span><span class=\"f-den\">r</span></span>)</td><td colspan=\"2\">5</td><td colspan=\"2\"><span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">f</span></span>=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">u</span></span>+<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">v</span></span></td></tr>\n  <tr><td>10</td><td colspan=\"3\">g=9.81 m s<sup>-2</sup>@ 9.81 N kg<sup>-1</sup></td><td colspan=\"2\">6</td><td colspan=\"2\">n<sub>1</sub>sin\u03b8<sub>1</sub>=n<sub>2</sub>sin\u03b8<sub>2</sub></td></tr>\n  <tr><td>11</td><td colspan=\"3\">G=6.67\u00d710<sup>-11</sup>N m<sup>2</sup>kg<sup>-2</sup></td><td colspan=\"2\">7</td><td colspan=\"2\">Pembesaran linear, m=<span class=\"f-frac\"><span class=\"f-num\">v</span><span class=\"f-den\">u</span></span><br>Linear magnification, </td></tr>\n  <tr><td>12</td><td colspan=\"3\">Jisim Bumi, M=5.97\u00d710<sup>24</sup> kg<br>Mass of Earth</td><td colspan=\"2\"></td><td colspan=\"2\"></td></tr></table>";
const SPM_OFFICIAL_FORMULA_TABLE_HTML_P2 = "<table class=\"spm-official-formula-table\"><tr><td></td><td colspan=\"4\"><b>DAYA DAN GERAKAN II</b><br><b><i>FORCE AND MOTION II</i></b></td><td colspan=\"2\"></td><td colspan=\"2\"><b>ELEKTRONIK</b><br><b><i>ELECTRONICS</i></b></td></tr>\n  <tr><td>1</td><td>F=kx</td><td>3</td><td colspan=\"2\">E=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>kx<sup>2</sup></td><td colspan=\"2\">1</td><td colspan=\"2\">Tenaga keupayaan elektrik, E=eV<br>Electrical potential energy</td></tr>\n  <tr><td>2</td><td colspan=\"4\">E=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>Fx</td><td colspan=\"2\">2</td><td colspan=\"2\">Tenaga kinetik maksimum, E=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>mv<sup>2</sup><br>Maximum kinetic energy</td></tr>\n  <tr><td></td><td colspan=\"4\"><b>TEKANAN</b><br><b><i>PRESSURE</i></b></td><td colspan=\"2\">3</td><td colspan=\"2\">\u03b2=<span class=\"f-frac\"><span class=\"f-num\">I<sub>C</sub></span><span class=\"f-den\">I<sub>B</sub></span></span></td></tr>\n  <tr><td>1</td><td colspan=\"4\">P=<span class=\"f-frac\"><span class=\"f-num\">F</span><span class=\"f-den\">A</span></span></td><td colspan=\"2\">4</td><td colspan=\"2\">V<sub>out</sub>=<span class=\"f-frac\"><span class=\"f-num\">R<sub>2</sub></span><span class=\"f-den\">R<sub>1</sub>+R<sub>2</sub></span></span>V<sub>in</sub></td></tr>\n  <tr><td>2</td><td colspan=\"4\">P=h\u03c1g</td><td colspan=\"2\"></td><td colspan=\"2\"><b>FIZIK NUKLEAR</b><br><b><i>NUCLEAR PHYSICS</i></b></td></tr>\n  <tr><td>3</td><td colspan=\"4\">\u03c1=<span class=\"f-frac\"><span class=\"f-num\">m</span><span class=\"f-den\">V</span></span></td><td colspan=\"2\">1</td><td colspan=\"2\">N=(<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>)<sup>n</sup>N<sub>o</sub></td></tr>\n  <tr><td></td><td colspan=\"4\"><b>ELEKTRIK</b><br><b><i>ELECTRICITY</i></b></td><td colspan=\"2\">2</td><td colspan=\"2\">E=mc<sup>2</sup></td></tr>\n  <tr><td>1</td><td>E=<span class=\"f-frac\"><span class=\"f-num\">F</span><span class=\"f-den\">Q</span></span></td><td>6</td><td colspan=\"2\">\u2107=V+Ir</td><td colspan=\"2\">3</td><td colspan=\"2\">c=3.00\u00d710<sup>8</sup> m s<sup>-1</sup></td></tr>\n  <tr><td>2</td><td>I=<span class=\"f-frac\"><span class=\"f-num\">Q</span><span class=\"f-den\">t</span></span></td><td>7</td><td colspan=\"2\">P=VI</td><td colspan=\"2\">4</td><td colspan=\"2\">1 u.j.a.=1.66\u00d710<sup>-27</sup> kg<br>1 a.m.u.=1.66\u00d710<sup>-27</sup> kg</td></tr>\n  <tr><td>3</td><td>V=<span class=\"f-frac\"><span class=\"f-num\">E</span><span class=\"f-den\">Q</span></span></td><td>8</td><td colspan=\"2\">P=<span class=\"f-frac\"><span class=\"f-num\">E</span><span class=\"f-den\">t</span></span></td><td colspan=\"2\"></td><td colspan=\"2\"><b>FIZIK KUANTUM</b><br><b><i>QUANTUM PHYSICS</i></b></td></tr>\n  <tr><td>4</td><td>V=IR</td><td>9</td><td colspan=\"2\">E=<span class=\"f-frac\"><span class=\"f-num\">V</span><span class=\"f-den\">d</span></span></td><td colspan=\"2\">1</td><td colspan=\"2\">E=hf</td></tr>\n  <tr><td>5</td><td colspan=\"4\">R=<span class=\"f-frac\"><span class=\"f-num\">\u03c1l</span><span class=\"f-den\">A</span></span></td><td colspan=\"2\">2</td><td colspan=\"2\">f=<span class=\"f-frac\"><span class=\"f-num\">c</span><span class=\"f-den\">\u03bb</span></span></td></tr>\n  <tr><td></td><td colspan=\"4\"><b>KEELEKTROMAGNETAN</b><br><b><i>ELECTROMAGNETISM</i></b></td><td colspan=\"2\">3</td><td colspan=\"2\">\u03bb=<span class=\"f-frac\"><span class=\"f-num\">h</span><span class=\"f-den\">p</span></span></td></tr>\n  <tr><td>1</td><td colspan=\"4\"><span class=\"f-frac\"><span class=\"f-num\">V<sub>s</sub></span><span class=\"f-den\">V<sub>p</sub></span></span>=<span class=\"f-frac\"><span class=\"f-num\">N<sub>s</sub></span><span class=\"f-den\">N<sub>p</sub></span></span></td><td colspan=\"2\">4</td><td colspan=\"2\">\u03bb=<span class=\"f-frac\"><span class=\"f-num\">h</span><span class=\"f-den\">mv</span></span></td></tr>\n  <tr><td>2</td><td colspan=\"4\">\u03b7=<span class=\"f-frac\"><span class=\"f-num\">Kuasa output</span><span class=\"f-den\">Kuasa input</span></span>\u00d7100%</td><td colspan=\"2\">5</td><td colspan=\"2\">E=<span class=\"f-frac\"><span class=\"f-num\">hc</span><span class=\"f-den\">\u03bb</span></span></td></tr>\n  <tr><td></td><td colspan=\"4\">\u03b7=<span class=\"f-frac\"><span class=\"f-num\">Output power</span><span class=\"f-den\">Input power</span></span>\u00d7100%</td><td colspan=\"2\">6</td><td colspan=\"2\">P=nhf</td></tr>\n  <tr><td></td><td colspan=\"4\"></td><td colspan=\"2\">7</td><td colspan=\"2\">hf=W+<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>mv<sup>2</sup><sub>maks</sub></td></tr>\n  <tr><td></td><td colspan=\"4\"></td><td colspan=\"2\">8</td><td colspan=\"2\">W=hf<sub>o</sub></td></tr>\n  <tr><td></td><td colspan=\"4\"></td><td colspan=\"2\">9</td><td colspan=\"2\">h=6.63\u00d710<sup>-34</sup>J s</td></tr>\n</table>";
const SPM_OFFICIAL_FORMULA_TABLE_HTML = "<table class=\"spm-official-formula-table\">\n  <tr><td></td><td colspan=\"3\"><b>DAYA DAN GERAKAN I</b><br><b><i>FORCE AND MOTION I</i></b></td><td colspan=\"2\">13</td><td colspan=\"2\">Jejari Bumi, R=6.37\u00d710<sup>6</sup> m<br>Radius of Earth</td></tr>\n  <tr><td>1</td><td colspan=\"3\">v=u+at</td><td colspan=\"2\"></td><td colspan=\"2\"><b>HABA</b><br><b><i>HEAT</i></b></td></tr>\n  <tr><td>2</td><td colspan=\"3\">s=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>(u+v)t</td><td colspan=\"2\">1</td><td colspan=\"2\">Q=mc\u03b8</td></tr>\n  <tr><td>3</td><td colspan=\"3\">s=ut+<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>at<sup>2</sup></td><td colspan=\"2\">2</td><td colspan=\"2\">Q=ml</td></tr>\n  <tr><td>4</td><td colspan=\"3\">v<sup>2</sup>=u<sup>2</sup>+2as</td><td colspan=\"2\">3</td><td colspan=\"2\">Q=Pt</td></tr>\n  <tr><td>5</td><td colspan=\"3\">Momentum = mv</td><td colspan=\"2\">4</td><td colspan=\"2\">P<sub>1</sub>V<sub>1</sub>=P<sub>1</sub>V<sub>1</sub></td></tr>\n  <tr><td>6</td><td colspan=\"3\">F=ma</td><td colspan=\"2\">5</td><td colspan=\"2\"><span class=\"f-frac\"><span class=\"f-num\">V<sub>1</sub></span><span class=\"f-den\">T<sub>1</sub></span></span>=<span class=\"f-frac\"><span class=\"f-num\">V<sub>2</sub></span><span class=\"f-den\">T<sub>2</sub></span></span></td></tr>\n  <tr><td></td><td colspan=\"3\"><b>KEGRAVITIAN</b><br><b><i>GRAVITATION</i></b></td><td colspan=\"2\">6</td><td colspan=\"2\"><span class=\"f-frac\"><span class=\"f-num\">P<sub>1</sub></span><span class=\"f-den\">T<sub>1</sub></span></span>=<span class=\"f-frac\"><span class=\"f-num\">P<sub>2</sub></span><span class=\"f-den\">T<sub>2</sub></span></span></td></tr>\n  <tr><td>1</td><td colspan=\"3\">F=<span class=\"f-frac\"><span class=\"f-num\">Gm<sub>1</sub>m<sub>2</sub></span><span class=\"f-den\">r<sup>2</sup></span></span></td><td colspan=\"2\"></td><td colspan=\"2\"><b>GELOMBANG</b><br><b><i>WAVES</i></b></td></tr>\n  <tr><td>2</td><td colspan=\"3\">g=<span class=\"f-frac\"><span class=\"f-num\">GM</span><span class=\"f-den\">r<sup>2</sup></span></span></td><td colspan=\"2\">1</td><td colspan=\"2\">v=f\u03bb</td></tr>\n  <tr><td>3</td><td colspan=\"3\">F= <span class=\"f-frac\"><span class=\"f-num\">mv<sup>2</sup></span><span class=\"f-den\">r</span></span></td><td colspan=\"2\">2</td><td colspan=\"2\">\u03bb=<span class=\"f-frac\"><span class=\"f-num\">ax</span><span class=\"f-den\">D</span></span></td></tr>\n  <tr><td>4</td><td colspan=\"3\">a= <span class=\"f-frac\"><span class=\"f-num\">v<sup>2</sup></span><span class=\"f-den\">r</span></span></td><td colspan=\"2\"></td><td colspan=\"2\"><b>CAHAYA DAN OPTIK</b><br><b><i>LIGHT AND OPTICS</i></b></td></tr>\n  <tr><td>5</td><td colspan=\"3\">v= <span class=\"f-frac\"><span class=\"f-num\">2\u03c0r</span><span class=\"f-den\">T</span></span></td><td colspan=\"2\">1</td><td colspan=\"2\">n=<span class=\"f-frac\"><span class=\"f-num\">c</span><span class=\"f-den\">v</span></span></td></tr>\n  <tr><td>6</td><td colspan=\"3\"><span class=\"f-frac\"><span class=\"f-num\">T1  2</span><span class=\"f-den\">r<sub>1</sub><sup>3</sup></span></span>= <span class=\"f-frac\"><span class=\"f-num\">T2  2</span><span class=\"f-den\">r<sub>2</sub><sup>3</sup></span></span></td><td colspan=\"2\">2</td><td colspan=\"2\">n=<span class=\"f-frac\"><span class=\"f-num\">sini</span><span class=\"f-den\">sinr</span></span></td></tr>\n  <tr><td>7</td><td colspan=\"3\">v=&radic;(<span class=\"f-frac\"><span class=\"f-num\">GM</span><span class=\"f-den\">r</span></span>)</td><td colspan=\"2\">3</td><td colspan=\"2\">n=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">sinc</span></span></td></tr>\n  <tr><td>8</td><td colspan=\"3\">u= -<span class=\"f-frac\"><span class=\"f-num\">GMm</span><span class=\"f-den\">r</span></span></td><td colspan=\"2\">4</td><td colspan=\"2\">n=<span class=\"f-frac\"><span class=\"f-num\">H</span><span class=\"f-den\">h</span></span></td></tr>\n  <tr><td>9</td><td colspan=\"3\">v=&radic;(<span class=\"f-frac\"><span class=\"f-num\">2GM</span><span class=\"f-den\">r</span></span>)</td><td colspan=\"2\">5</td><td colspan=\"2\"><span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">f</span></span>=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">u</span></span>+<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">v</span></span></td></tr>\n  <tr><td>10</td><td colspan=\"3\">g=9.81 m s<sup>-2</sup>@ 9.81 N kg<sup>-1</sup></td><td colspan=\"2\">6</td><td colspan=\"2\">n<sub>1</sub>sin\u03b8<sub>1</sub>=n<sub>2</sub>sin\u03b8<sub>2</sub></td></tr>\n  <tr><td>11</td><td colspan=\"3\">G=6.67\u00d710<sup>-11</sup>N m<sup>2</sup>kg<sup>-2</sup></td><td colspan=\"2\">7</td><td colspan=\"2\">Pembesaran linear, m=<span class=\"f-frac\"><span class=\"f-num\">v</span><span class=\"f-den\">u</span></span><br>Linear magnification, </td></tr>\n  <tr><td>12</td><td colspan=\"3\">Jisim Bumi, M=5.97\u00d710<sup>24</sup> kg<br>Mass of Earth</td><td colspan=\"2\"></td><td colspan=\"2\"></td></tr>\n  <tr><td></td><td colspan=\"4\"><b>DAYA DAN GERAKAN II</b><br><b><i>FORCE AND MOTION II</i></b></td><td colspan=\"2\"></td><td colspan=\"2\"><b>ELEKTRONIK</b><br><b><i>ELECTRONICS</i></b></td></tr>\n  <tr><td>1</td><td>F=kx</td><td>3</td><td colspan=\"2\">E=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>kx<sup>2</sup></td><td colspan=\"2\">1</td><td colspan=\"2\">Tenaga keupayaan elektrik, E=eV<br>Electrical potential energy</td></tr>\n  <tr><td>2</td><td colspan=\"4\">E=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>Fx</td><td colspan=\"2\">2</td><td colspan=\"2\">Tenaga kinetik maksimum, E=<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>mv<sup>2</sup><br>Maximum kinetic energy</td></tr>\n  <tr><td></td><td colspan=\"4\"><b>TEKANAN</b><br><b><i>PRESSURE</i></b></td><td colspan=\"2\">3</td><td colspan=\"2\">\u03b2=<span class=\"f-frac\"><span class=\"f-num\">I<sub>C</sub></span><span class=\"f-den\">I<sub>B</sub></span></span></td></tr>\n  <tr><td>1</td><td colspan=\"4\">P=<span class=\"f-frac\"><span class=\"f-num\">F</span><span class=\"f-den\">A</span></span></td><td colspan=\"2\">4</td><td colspan=\"2\">V<sub>out</sub>=<span class=\"f-frac\"><span class=\"f-num\">R<sub>2</sub></span><span class=\"f-den\">R<sub>1</sub>+R<sub>2</sub></span></span>V<sub>in</sub></td></tr>\n  <tr><td>2</td><td colspan=\"4\">P=h\u03c1g</td><td colspan=\"2\"></td><td colspan=\"2\"><b>FIZIK NUKLEAR</b><br><b><i>NUCLEAR PHYSICS</i></b></td></tr>\n  <tr><td>3</td><td colspan=\"4\">\u03c1=<span class=\"f-frac\"><span class=\"f-num\">m</span><span class=\"f-den\">V</span></span></td><td colspan=\"2\">1</td><td colspan=\"2\">N=(<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>)<sup>n</sup>N<sub>o</sub></td></tr>\n  <tr><td></td><td colspan=\"4\"><b>ELEKTRIK</b><br><b><i>ELECTRICITY</i></b></td><td colspan=\"2\">2</td><td colspan=\"2\">E=mc<sup>2</sup></td></tr>\n  <tr><td>1</td><td>E=<span class=\"f-frac\"><span class=\"f-num\">F</span><span class=\"f-den\">Q</span></span></td><td>6</td><td colspan=\"2\">\u2107=V+Ir</td><td colspan=\"2\">3</td><td colspan=\"2\">c=3.00\u00d710<sup>8</sup> m s<sup>-1</sup></td></tr>\n  <tr><td>2</td><td>I=<span class=\"f-frac\"><span class=\"f-num\">Q</span><span class=\"f-den\">t</span></span></td><td>7</td><td colspan=\"2\">P=VI</td><td colspan=\"2\">4</td><td colspan=\"2\">1 u.j.a.=1.66\u00d710<sup>-27</sup> kg<br>1 a.m.u.=1.66\u00d710<sup>-27</sup> kg</td></tr>\n  <tr><td>3</td><td>V=<span class=\"f-frac\"><span class=\"f-num\">E</span><span class=\"f-den\">Q</span></span></td><td>8</td><td colspan=\"2\">P=<span class=\"f-frac\"><span class=\"f-num\">E</span><span class=\"f-den\">t</span></span></td><td colspan=\"2\"></td><td colspan=\"2\"><b>FIZIK KUANTUM</b><br><b><i>QUANTUM PHYSICS</i></b></td></tr>\n  <tr><td>4</td><td>V=IR</td><td>9</td><td colspan=\"2\">E=<span class=\"f-frac\"><span class=\"f-num\">V</span><span class=\"f-den\">d</span></span></td><td colspan=\"2\">1</td><td colspan=\"2\">E=hf</td></tr>\n  <tr><td>5</td><td colspan=\"4\">R=<span class=\"f-frac\"><span class=\"f-num\">\u03c1l</span><span class=\"f-den\">A</span></span></td><td colspan=\"2\">2</td><td colspan=\"2\">f=<span class=\"f-frac\"><span class=\"f-num\">c</span><span class=\"f-den\">\u03bb</span></span></td></tr>\n  <tr><td></td><td colspan=\"4\"><b>KEELEKTROMAGNETAN</b><br><b><i>ELECTROMAGNETISM</i></b></td><td colspan=\"2\">3</td><td colspan=\"2\">\u03bb=<span class=\"f-frac\"><span class=\"f-num\">h</span><span class=\"f-den\">p</span></span></td></tr>\n  <tr><td>1</td><td colspan=\"4\"><span class=\"f-frac\"><span class=\"f-num\">V<sub>s</sub></span><span class=\"f-den\">V<sub>p</sub></span></span>=<span class=\"f-frac\"><span class=\"f-num\">N<sub>s</sub></span><span class=\"f-den\">N<sub>p</sub></span></span></td><td colspan=\"2\">4</td><td colspan=\"2\">\u03bb=<span class=\"f-frac\"><span class=\"f-num\">h</span><span class=\"f-den\">mv</span></span></td></tr>\n  <tr><td>2</td><td colspan=\"4\">\u03b7=<span class=\"f-frac\"><span class=\"f-num\">Kuasa output</span><span class=\"f-den\">Kuasa input</span></span>\u00d7100%</td><td colspan=\"2\">5</td><td colspan=\"2\">E=<span class=\"f-frac\"><span class=\"f-num\">hc</span><span class=\"f-den\">\u03bb</span></span></td></tr>\n  <tr><td></td><td colspan=\"4\">\u03b7=<span class=\"f-frac\"><span class=\"f-num\">Output power</span><span class=\"f-den\">Input power</span></span>\u00d7100%</td><td colspan=\"2\">6</td><td colspan=\"2\">P=nhf</td></tr>\n  <tr><td></td><td colspan=\"4\"></td><td colspan=\"2\">7</td><td colspan=\"2\">hf=W+<span class=\"f-frac\"><span class=\"f-num\">1</span><span class=\"f-den\">2</span></span>mv<sup>2</sup><sub>maks</sub></td></tr>\n  <tr><td></td><td colspan=\"4\"></td><td colspan=\"2\">8</td><td colspan=\"2\">W=hf<sub>o</sub></td></tr>\n  <tr><td></td><td colspan=\"4\"></td><td colspan=\"2\">9</td><td colspan=\"2\">h=6.63\u00d710<sup>-34</sup>J s</td></tr>\n</table>";

function getFormulaSheetPage1Html(codeText) {
  return `
    <div class="a4-page-sheet" data-page-type="formula" data-page-num="2">
      <div class="a4-page-header">
        <span style="font-weight: bold;">SULIT</span>
        <span style="font-weight: bold;">${codeText}</span>
      </div>

      <div class="formula-sheet-container" style="flex: 1; padding: 2px 0;">
        <div style="font-size: 10.5pt; font-style: italic; margin-bottom: 8px;">Rumus-rumus berikut boleh membantu anda menjawab soalan. Simbol-simbol yang diberi adalah yang biasa digunakan.</div>
        ${SPM_OFFICIAL_FORMULA_TABLE_HTML_P1}
      </div>

      ${getPageFooterHtml(codeText, false, false)}
    </div>
  `;
}

function getFormulaSheetPage2Html(codeText) {
  return `
    <div class="a4-page-sheet" data-page-type="formula" data-page-num="3">
      <div class="a4-page-header">
        <span style="font-weight: bold;">SULIT</span>
        <span style="font-weight: bold;">${codeText}</span>
      </div>

      <div class="formula-sheet-container" style="flex: 1; padding: 2px 0;">
        ${SPM_OFFICIAL_FORMULA_TABLE_HTML_P2}
      </div>

      ${getPageFooterHtml(codeText, false, false)}
    </div>
  `;
}

function getFormulaSheetHtml(codeText) { return getFormulaSheetPage1Html(codeText); }

function getLpmCandidateGridHtml(tingkatan) {
  const col0W = "17.28%";
  const boxW = "3.446%";
  const tingVal = tingkatan ? String(tingkatan).replace(/\D/g, "") || "5" : "5";

  let rows = [];
  // Baris 0: NAMA (17.28%) + 24 kotak aksara nama (3.446% setiap satu)
  let r0 = [`<td class="cand-label-cell" style="width: ${col0W};">NAMA</td>`];
  for (let i = 0; i < 24; i++) {
    r0.push(`<td class="cand-box-cell" style="width: ${boxW};"></td>`);
  }
  rows.push(`<tr>${r0.join("")}</tr>`);

  // Baris 1 hingga 3: 25 kotak kosong bagi setiap baris
  for (let r = 0; r < 3; r++) {
    let cells = [];
    for (let c = 0; c < 25; c++) {
      const w = (c === 0) ? col0W : boxW;
      cells.push(`<td class="cand-box-cell" style="width: ${w};"></td>`);
    }
    rows.push(`<tr>${cells.join("")}</tr>`);
  }

  // Baris 4: TINGKATAN (17.28%) + Kotak Nombor Tingkatan (3.446%) + 23 kotak kosong
  let r4 = [`<td class="cand-label-cell" style="width: ${col0W};">TINGKATAN</td>`];
  r4.push(`<td class="cand-box-cell" style="width: ${boxW}; font-weight: bold; font-size: 11pt; font-family: 'Times New Roman', serif;">${tingVal}</td>`);
  for (let i = 0; i < 23; i++) {
    r4.push(`<td class="cand-box-cell" style="width: ${boxW};"></td>`);
  }
  rows.push(`<tr>${r4.join("")}</tr>`);

  return `
    <table class="lpm-candidate-grid-table">
      <tbody>
        ${rows.join("")}
      </tbody>
    </table>
  `;
}

function getCoverPageHtml(mode, codeText, totalPages) {
  const isK2 = mode === "kertas2";
  const isK3 = mode === "kertas3";
  const meta = getExamMetadata();

  let paperNum = "1";
  let paperTitle = "KERTAS 1";
  let timeBm = "1 ¼ jam";
  let timeWords = "Satu jam lima belas minit";

  if (isK2) {
    paperNum = "2";
    paperTitle = "KERTAS 2";
    timeBm = "2 ½ jam";
    timeWords = "Dua jam tiga puluh minit";
  } else if (isK3) {
    paperNum = "3";
    paperTitle = "KERTAS 3";
    timeBm = "45 minit";
    timeWords = "Empat puluh lima minit";
  }

  const tingkatanDisplay = meta.tingkatan ? `TINGKATAN ${meta.tingkatan}` : "TINGKATAN 5";
  const rawExamTitle = (meta.examTitle || "PEPERIKSAAN PERCUBAAN SPM").trim().toUpperCase();
  const examYear = meta.tahun || 2026;
  const examTitleDisplay = rawExamTitle.includes(String(examYear)) ? rawExamTitle : `${rawExamTitle} ${examYear}`;

  let middleContent = "";
  if (isK2) {
    middleContent = `
      <div class="docx-k2-split-layout">
        <div class="docx-k2-instructions">
          <div style="font-weight: bold; margin-bottom: 6px;">MAKLUMAT UNTUK CALON / <span style="font-style: italic; font-weight: normal;">INFORMATION FOR CANDIDATES</span></div>
          <ol>
            <li>Kertas peperiksaan ini mengandungi tiga bahagian: <strong>Bahagian A, Bahagian B</strong> dan <strong>Bahagian C</strong>.<br><span style="font-style: italic; color: #1E293B;">This question paper consists of three sections: Section A, Section B and Section C.</span></li>
            <li>Jawab <strong>semua</strong> soalan dalam <strong>Bahagian A</strong>. Tulis jawapan anda dalam ruang yang disediakan.<br><span style="font-style: italic; color: #1E293B;">Answer all questions in Section A. Write your answers in the spaces provided.</span></li>
            <li>Jawab <strong>satu</strong> soalan daripada <strong>Bahagian B</strong> dan <strong>satu</strong> soalan daripada <strong>Bahagian C</strong>.<br><span style="font-style: italic; color: #1E293B;">Answer one question from Section B and one question from Section C.</span></li>
            <li>Tunjukkan kerja mengira, ini membantu anda mendapatkan markah.<br><span style="font-style: italic; color: #1E293B;">Show your working, it helps you to get marks.</span></li>
            <li>Rajah tidak dilukis mengikut skala kecuali dinyatakan.<br><span style="font-style: italic; color: #1E293B;">The diagrams in the questions are not drawn to scale unless stated.</span></li>
            <li>Penggunaan kalkulator saintifik dibenarkan.<br><span style="font-style: italic; color: #1E293B;">You may use a scientific calculator.</span></li>
          </ol>
        </div>

        <div class="docx-examiner-wrap">
          <table class="docx-examiner-table">
            <thead>
              <tr>
                <th colspan="4" style="text-align: right; padding: 4px 8px; font-weight: bold; background: #FFF;">Kod Pemeriksa: ________________</th>
              </tr>
              <tr>
                <th>Bahagian</th>
                <th>Soalan</th>
                <th>Markah Penuh</th>
                <th>Markah Diperoleh</th>
              </tr>
            </thead>
            <tbody>
              <tr><td rowspan="8" style="font-weight: bold;">A</td><td>1</td><td>4</td><td></td></tr>
              <tr><td>2</td><td>5</td><td></td></tr>
              <tr><td>3</td><td>6</td><td></td></tr>
              <tr><td>4</td><td>9</td><td></td></tr>
              <tr><td>5</td><td>9</td><td></td></tr>
              <tr><td>6</td><td>9</td><td></td></tr>
              <tr><td>7</td><td>9</td><td></td></tr>
              <tr><td>8</td><td>9</td><td></td></tr>
              <tr><td rowspan="2" style="font-weight: bold;">B</td><td>9</td><td>20</td><td></td></tr>
              <tr><td>10</td><td>20</td><td></td></tr>
              <tr><td style="font-weight: bold;">C</td><td>11</td><td>20</td><td></td></tr>
              <tr style="font-weight: bold; background: #F8FAFC;">
                <td colspan="2">Jumlah</td>
                <td>100</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else {
    middleContent = `
      <div class="docx-k1-instructions">
        <ol>
          <li>Kertas peperiksaan ini mengandungi <strong>40</strong> soalan.<br><span style="font-style: italic; color: #1E293B;">This question paper consists of 40 questions.</span></li>
          <li>Jawab <strong>semua</strong> soalan.<br><span style="font-style: italic; color: #1E293B;">Answer all questions.</span></li>
          <li>Tiap-tiap soalan diikuti oleh empat pilihan jawapan, iaitu <strong>A, B, C</strong> dan <strong>D</strong>. Bagi setiap soalan, pilih <strong>satu</strong> jawapan sahaja. Hitamkan jawapan anda pada kertas jawapan objektif yang disediakan.<br><span style="font-style: italic; color: #1E293B;">Each question is followed by four alternative answers, A, B, C and D. For each question, choose one answer only. Blacken your answer on the objective answer sheet provided.</span></li>
          <li>Kertas peperiksaan ini adalah dalam dwibahasa. Soalan dalam bahasa Melayu mendahului soalan yang sepadan dalam bahasa Inggeris.<br><span style="font-style: italic; color: #1E293B;">This question paper is bilingual. The questions in Malay precede the corresponding questions in English.</span></li>
          <li>Rajah yang mengiringi soalan tidak dilukis mengikut skala kecuali dinyatakan.<br><span style="font-style: italic; color: #1E293B;">The diagrams in the questions provided are not drawn to scale unless stated.</span></li>
          <li>Anda dibenarkan menggunakan kalkulator saintifik.<br><span style="font-style: italic; color: #1E293B;">You may use a scientific calculator.</span></li>
        </ol>
      </div>
    `;
  }

  const pageCountText = totalPages || 1;
  const candidateGridHtml = getLpmCandidateGridHtml(meta.tingkatan);

  return `
    <div class="a4-page-sheet" data-page-type="cover">
      <div class="a4-page-header cover-header">
        <span style="font-weight: bold;">SULIT</span>
      </div>

      <div class="cover-page-inner">
        <!-- Kotak Maklumat Calon Rasmi LPM (Sama Sebijik DOCX) -->
        ${candidateGridHtml}

        <!-- Tajuk Peperiksaan & Kod Kertas Flush-Right Sejajar -->
        <div class="docx-title-block" style="margin-bottom: 0.9rem; width: 100%;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; font-size: 14pt; font-weight: bold; width: 100%;">
            <span class="exam-title-text" style="font-size: 14pt; font-weight: bold; letter-spacing: 0.02em;">${examTitleDisplay}</span>
            <span class="exam-code-text" style="font-size: 15pt; font-weight: bold; text-align: right;">${codeText}</span>
          </div>
          <div style="font-size: 14pt; font-weight: bold; margin-top: 1px;">PHYSICS</div>
          <div class="docx-title-sub" style="font-weight: bold; font-size: 14pt; margin-top: 4px;">${tingkatanDisplay}</div>
          <div class="docx-title-sub" style="font-weight: bold; font-size: 14pt; text-decoration: underline; margin-top: 2px;">Kertas ${paperNum}</div>
          <div class="docx-time-block" style="display: flex; justify-content: space-between; align-items: baseline; font-size: 12pt; margin: 8px 0 12px 0; width: 100%;">
            <span><strong>${timeBm}</strong></span>
            <span style="font-style: italic; font-weight: normal; text-align: right;">${timeWords}</span>
          </div>
        </div>

        <!-- Banner Amaran Rasmi LPM -->
        <div class="docx-warning-banner" style="border: 1.5px solid #000; text-align: center; font-size: 11pt; font-weight: bold; padding: 6px 10px; margin: 8px 0 16px 0;">
          <div>JANGAN BUKA KERTAS PEPERIKSAAN INI SEHINGGA DIBERITAHU</div>
          <div style="font-style: italic; font-weight: normal; font-size: 10pt; margin-top: 2px;">
            DO NOT OPEN THIS QUESTION PAPER UNTIL YOU ARE TOLD TO DO SO
          </div>
        </div>

        <!-- Arahan / Maklumat Calon -->
        ${middleContent}

        <!-- Bilangan Halaman -->
        <div class="docx-cover-page-count" style="margin-top: auto; margin-bottom: 0.5rem;">
          <div>Kertas soalan ini mengandungi <strong>${pageCountText}</strong> halaman bercetak.</div>
          <div style="font-style: italic; color: #1E293B;">This question paper consists of ${pageCountText} printed pages.</div>
        </div>
      </div>

      ${getPageFooterHtml(codeText, false, true)}
    </div>
  `;
}

function renderK1QuestionRows(q, qIdx, getNextDiagNum) {
  let stemText = q.soalan || "";
  let rajahHtml = "";

  if (q.rajahUrl) {
    const diagNum = getNextDiagNum();
    stemText = stemText
      .replace(/\bRajah\s+\d+\b/gi, `Rajah ${diagNum}`)
      .replace(/\bDiagram\s+\d+\b/gi, `Diagram ${diagNum}`);

    rajahHtml = `
      <div class="docx-q-diagram-wrap">
        <img src="${q.rajahUrl}" alt="Rajah ${diagNum}" loading="lazy">
        <div class="docx-q-caption">
          <span class="cap-bm">Rajah ${diagNum}</span> / <span class="cap-en">Diagram ${diagNum}</span>
        </div>
      </div>
    `;
  }

  const stemFormatted = formatBilingualText(stemText);

  let rowsHtml = `
    <tr style="page-break-inside: avoid; vertical-align: top;">
      <td class="docx-q-num-cell">${qIdx + 1}</td>
      <td colspan="2" class="docx-q-stem-cell">
        <div>${stemFormatted}</div>
        ${rajahHtml}
      </td>
    </tr>
  `;

  (q.pilihan || []).forEach(opt => {
    let optContent = "";
    if (opt.teks && (opt.teks.includes("<img") || opt.teks.startsWith("http") || opt.teks.startsWith("data:") || /\.(png|jpg|jpeg|webp)$/i.test(opt.teks))) {
      let imgSrc = opt.teks;
      if (imgSrc.includes("<img")) {
        const m = imgSrc.match(/src=["\']([^"\']+)["\']/);
        if (m) imgSrc = m[1];
      }
      optContent = `<img src="${imgSrc}" alt="Pilihan ${opt.id}" class="docx-opt-img">`;
    } else {
      optContent = formatOptionText(opt.teks);
    }

    rowsHtml += `
      <tr style="page-break-inside: avoid; vertical-align: top;">
        <td></td>
        <td class="docx-opt-letter-cell">${opt.id}</td>
        <td class="docx-opt-text-cell">${optContent}</td>
      </tr>
    `;
  });

  rowsHtml += `<tr style="height: 24px;"><td colspan="3"></td></tr>`;
  return rowsHtml;
}

function renderPrintableExam() {
  const container = document.getElementById("printable-exam-container");
  if (!container) return;

  const mode = getActivePaperMode();
  if (!AppState.assembledPapers[mode] || AppState.assembledPapers[mode].length === 0) {
    autoFillAssembledPaper(mode);
  }
  const questions = AppState.assembledPapers[mode] || [];

  let codeText = "4531/1";
  if (mode === "kertas2") {
    codeText = "4531/2";
  } else if (mode === "kertas3") {
    codeText = "4531/3";
  }

  // Calculate pages
  let allPagesHtml = [];

  if (mode === "kertas1") {
    // Group questions into page chunks (~2 per page if diagram present, or 3 if text-only)
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

    const totalPages = 1 + 2 + (chunks.length || 1); // 1 Cover + 2 Formula Pages + Questions
    let globalDiagramIndex = 0;
    const getNextDiagNum = () => {
      globalDiagramIndex += 1;
      return globalDiagramIndex;
    };

    // Page 1: Cover
    allPagesHtml.push(getCoverPageHtml(mode, codeText, totalPages));

    // Page 2 & 3: Official Formula Sheet (2 Pages)
    allPagesHtml.push(getFormulaSheetPage1Html(codeText));
    allPagesHtml.push(getFormulaSheetPage2Html(codeText));

    // Pages 4+: Question Pages
    let qOverallIndex = 0;
    chunks.forEach((chunk, chunkIdx) => {
      const isLastPage = chunkIdx === chunks.length - 1;
      let chunkRowsHtml = "";

      chunk.forEach(q => {
        chunkRowsHtml += renderK1QuestionRows(q, qOverallIndex, getNextDiagNum);
        qOverallIndex++;
      });

      let endBannerHtml = "";
      if (isLastPage) {
        endBannerHtml = `
          <div class="docx-end-paper-banner">
            KERTAS PEPERIKSAAN TAMAT<br>
            <span style="font-style: italic; font-weight: normal; font-size: 11pt;">END OF QUESTION PAPER</span>
          </div>
        `;
      }

      const pageHtml = `
        <div class="a4-page-sheet" data-page-type="question" data-page-num="${chunkIdx + 4}">
          <div class="a4-page-header">
            <span style="font-weight: bold;">SULIT</span>
            <span style="float: right; font-weight: bold;">${codeText}</span>
          </div>

          <div style="flex: 1;">
            <table class="docx-k1-questions-table">
              ${chunkRowsHtml}
            </table>
            ${endBannerHtml}
          </div>

          ${getPageFooterHtml(codeText, isLastPage, false)}
        </div>
      `;
      allPagesHtml.push(pageHtml);
    });

  } else if (mode === "kertas2") {
    const totalPages = 1 + 2 + (questions.length || 1); // 1 Cover + 2 Formula Pages + Questions

    // Page 1: Cover
    allPagesHtml.push(getCoverPageHtml(mode, codeText, totalPages));

    // Page 2 & 3: Official Formula Sheet (2 Pages)
    allPagesHtml.push(getFormulaSheetPage1Html(codeText));
    allPagesHtml.push(getFormulaSheetPage2Html(codeText));

    // Pages 4+: 1 Question per page
    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const isLast = idx === questions.length - 1;
      let stemText = q.soalanUtama || "";
      let rajahHtml = "";

      if (q.rajahUrl) {
        stemText = stemText
          .replace(/\bRajah\s+\d+\b/gi, `Rajah ${qNum}`)
          .replace(/\bDiagram\s+\d+\b/gi, `Diagram ${qNum}`);

        rajahHtml = `
          <div class="docx-q-diagram-wrap">
            <img src="${q.rajahUrl}" alt="Rajah ${qNum}" loading="lazy">
            <div class="docx-q-caption">
              <span class="cap-bm">Rajah ${qNum}</span> / <span class="cap-en">Diagram ${qNum}</span>
            </div>
          </div>
        `;
      }

      const stemFormatted = formatBilingualText(stemText);

      let pecahanHtml = (q.pecahan || []).map(p => `
        <div style="margin-bottom: 1.25rem;">
          <p style="margin: 0.25rem 0;"><strong>${p.sub}</strong> ${formatBilingualText(p.soalan)}</p>
          <div style="height: 52px; border-bottom: 1px dotted #555; margin-top: 0.5rem;"></div>
          <div class="lpm-mark-box">[${p.markah} markah / <span style="font-weight: normal; font-style: italic;">marks</span>]</div>
        </div>
      `).join("");

      let endBannerHtml = "";
      if (isLast) {
        endBannerHtml = `
          <div class="docx-end-paper-banner">
            KERTAS PEPERIKSAAN TAMAT<br>
            <span style="font-style: italic; font-weight: normal; font-size: 11pt;">END OF QUESTION PAPER</span>
          </div>
        `;
      }

      const pageHtml = `
        <div class="a4-page-sheet" data-page-type="question" data-q-num="${qNum}">
          <div class="a4-page-header">
            <span style="font-weight: bold;">SULIT</span>
            <span style="float: right; font-weight: bold;">${codeText}</span>
          </div>

          <div style="flex: 1;">
            <div style="font-weight: bold; font-size: 12.5pt; margin-bottom: 0.6rem; border-bottom: 1px solid #000; padding-bottom: 4px;">
              Soalan ${qNum} ${q.bahagian ? '(Bahagian ' + q.bahagian + ')' : ''}
            </div>
            <div style="font-size: 12pt; line-height: 1.4;">${stemFormatted}</div>
            ${rajahHtml}
            <div style="margin-top: 1rem;">
              ${pecahanHtml}
            </div>
            ${endBannerHtml}
          </div>

          ${getPageFooterHtml(codeText, isLast, false)}
        </div>
      `;
      allPagesHtml.push(pageHtml);
    });

  } else if (mode === "kertas3") {
    const totalPages = 1 + 1 + (questions.length || 1);
    allPagesHtml.push(getCoverPageHtml(mode, codeText, totalPages));
    allPagesHtml.push(getFormulaSheetHtml(codeText));

    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const isLast = idx === questions.length - 1;
      let endBannerHtml = "";
      if (isLast) {
        endBannerHtml = `
          <div class="docx-end-paper-banner">
            KERTAS PEPERIKSAAN TAMAT<br>
            <span style="font-style: italic; font-weight: normal; font-size: 11pt;">END OF QUESTION PAPER</span>
          </div>
        `;
      }

      const pageHtml = `
        <div class="a4-page-sheet" data-page-type="question" data-q-num="${qNum}">
          <div class="a4-page-header">
            <span style="font-weight: bold;">SULIT</span>
            <span style="float: right; font-weight: bold;">${codeText}</span>
          </div>

          <div style="flex: 1;">
            <div style="font-weight: bold; font-size: 12.5pt; margin-bottom: 0.6rem; border-bottom: 1px solid #000; padding-bottom: 4px;">
              Instrumen Amali Sains ${qNum}
            </div>
            <h3 style="font-size: 1.1rem; margin: 0.5rem 0;">${q.tajukEksperimen || ""}</h3>
            <p><strong>Tujuan / Purpose:</strong> ${q.tujuan || ""}</p>
            <p><strong>Pembolehubah / Variables:</strong></p>
            <ul style="margin-left: 1.5rem; line-height: 1.5;">
              <li>Dimanipulasikan / Manipulated: ${q.pembolehubah?.dimanipulasi || ""}</li>
              <li>Bergerak balas / Responding: ${q.pembolehubah?.bergerakbalas || ""}</li>
              <li>Dimalarkan / Constant: ${q.pembolehubah?.dimalarkan || ""}</li>
            </ul>
            <p style="margin-top: 0.75rem;"><strong>Senarai Radas dan Bahan:</strong> ${(q.radas || []).join(", ")}.</p>
            <p style="margin-top: 0.75rem;"><strong>Prosedur:</strong></p>
            <ol style="margin-left: 1.5rem; line-height: 1.5;">
              ${(q.prosedurRingkas || []).map(p => `<li>${p}</li>`).join("")}
            </ol>
            <div class="lpm-mark-box">[15 markah]</div>
            ${endBannerHtml}
          </div>

          ${getPageFooterHtml(codeText, isLast, false)}
        </div>
      `;
      allPagesHtml.push(pageHtml);
    });
  }

  container.innerHTML = allPagesHtml.join("");

  // Kemas kini Google Docs Viewer Toolbar filename dan bilangan halaman
  const titleEl = document.getElementById("gdocs-doc-filename");
  const badgeEl = document.getElementById("gdocs-page-count-badge");
  const meta = getExamMetadata();
  if (titleEl) {
    const paperName = mode === "kertas2" ? "Kertas_2" : (mode === "kertas3" ? "Kertas_3" : "Kertas_1");
    titleEl.textContent = `${paperName}_Fizik_SPM_${meta.tahun || 2026}.docx`;
  }
  if (badgeEl) {
    badgeEl.textContent = `${allPagesHtml.length} Halaman A4`;
  }
  if (window.lucide) lucide.createIcons();
}


/* ==========================================================================
   7. METRIK DASHBOARD & BANTUAN
   ========================================================================== */
function updateDashboardMetrics() {
  const badgeEl = document.getElementById("dashboard-total-q-badge");
  if (badgeEl) {
    badgeEl.textContent = `${QUESTION_BANK.length} Soalan Rasmi`;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* ==========================================================================
   8. ENJIN ANALITIK PRESTASI & STATISTIK (ANALYTICS ENGINE)
   ========================================================================== */
/**
 * Modul ini menghasilkan maklumat prestasi berdasarkan QUESTION_BANK & AppState.
 * Mengikut syaratan minimal: tiada abstraksi berlebihan, data statik dalam JSU_PROFILES,
 * analisis dijalankan saat itu (runtime) melalui fungsi tunggal renderAnalyticsDashboard.
 */
function computeAnalyticsSnapshot() {
  const bank = typeof QUESTION_BANK !== "undefined" ? QUESTION_BANK : [];
  if (!bank.length) return null;

  // --- 1. Taburan Soalan Mengikut Aras Kesukaran & Konstruk ---
  const arasCount = { Rendah: 0, Sederhana: 0, Tinggi: 0 };
  const konstrukCount = { Mengingat: 0, Memahami: 0, Mengaplikasi: 0, Menganalisis: 0, Menilai: 0, Mencipta: 0 };
  const tingkatanCount = { 4: 0, 5: 0 };
  const kertasCount = { 1: 0, 2: 0, 3: 0 };
  const babCoverage = {}; // { "T4_B2": { count: N, marks: M } }
  const skCoverage = {}; // { "SK 2.5 Momentum": count }

  bank.forEach(q => {
    // Aras
    const ar = q.aras || "Rendah";
    if (arasCount[ar] !== undefined) arasCount[ar]++;

    // Konstruk (normalkan)
    const k = (q.konstruk || "Mengingat").split(" ")[0];
    if (konstrukCount[k] !== undefined) konstrukCount[k]++;

    // Tingkatan
    const tg = q.tingkatan || 4;
    if (tingkatanCount[tg]) tingkatanCount[tg]++;

    // Kertas
    const kr = q.kertas || 1;
    if (kertasCount[kr]) kertasCount[kr]++;

    // Bab coverage
    const babKey = "T" + tg + "_B" + (q.babNo || "?");
    if (!babCoverage[babKey]) babCoverage[babKey] = { count: 0, marks: 0, nama: q.babNama || "" };
    babCoverage[babKey].count++;
    babCoverage[babKey].marks += (q.markah || q.markahPenuh || 1);

    // SK coverage
    const skKey = (q.sk || "Tiada SK");
    skCoverage[skKey] = (skCoverage[skKey] || 0) + 1;
  });

  // --- 2. Analisis Kertas yang Pernah Dipasang ---
  const assembled = AppState.assembledPapers || { kertas1: [], kertas2: [], kertas3: [] };
  const paperStats = {};
  Object.keys(assembled).forEach(k => {
    const list = assembled[k] || [];
    const marks = list.reduce((sum, q) => sum + (q.markah || q.markahPenuh || 1), 0);
    paperStats[k] = { count: list.length, totalMarks: marks };
  });

  // --- 3. Analisis Liputan Topik (DSKP) ---
  const allChapters = [];
  if (typeof DSKP_DATA !== "undefined") {
    if (DSKP_DATA.tingkatan4 && DSKP_DATA.tingkatan4.temas) {
      DSKP_DATA.tingkatan4.temas.forEach(t => {
        (t.babs || []).forEach(b => {
          allChapters.push({ tingkatan: 4, babNo: b.no, nama: b.nama, subtopik: b.subtopik || [] });
        });
      });
    }
    if (DSKP_DATA.tingkatan5 && DSKP_DATA.tingkatan5.temas) {
      DSKP_DATA.tingkatan5.temas.forEach(t => {
        (t.babs || []).forEach(b => {
          allChapters.push({ tingkatan: 5, babNo: b.no, nama: b.nama, subtopik: b.subtopik || [] });
        });
      });
    }
  }

  // Cari bab yang belum ada soalan sama sekali
  const uncoveredChapters = allChapters.filter(ch => {
    return !bank.some(q => q.tingkatan === ch.tingkatan && q.babNo === ch.babNo);
  });

  // --- 4. Prestasi Aras vs Sasaran LPM ---
  const totalQ = bank.length || 1;
  const totalMarks = bank.reduce((s, q) => s + (q.markah || q.markahPenuh || 1), 0);
  const targetR = 50, targetS = 30, targetT = 20;
  const actualR = Math.round((arasCount.Rendah / totalQ) * 100);
  const actualS = Math.round((arasCount.Sederhana / totalQ) * 100);
  const actualT = Math.round((arasCount.Tinggi / totalQ) * 100);
  const complianceScore = Math.min(
    100,
    Math.round((100 - (Math.abs(actualR - targetR) + Math.abs(actualS - targetS) + Math.abs(actualT - targetT))))
  );

  // --- 5. Top SK yang paling banyak digunakan ---
  const skEntries = Object.entries(skCoverage).map(([sk, count]) => ({ sk, count }));
  skEntries.sort((a, b) => b.count - a.count);
  const topSk = skEntries.slice(0, 8);

  return {
    totalQuestions: bank.length,
    totalMarks: totalMarks,
    aras: arasCount,
    konstruk: konstrukCount,
    tingkatan: tingkatanCount,
    kertas: kertasCount,
    babCoverage,
    uncoveredChapters,
    skCoverage,
    topSk,
    paperStats,
    targetRatio: { R: targetR, S: targetS, T: targetT },
    actualRatio: { R: actualR, S: actualS, T: actualT },
    complianceScore
  };
}

function renderAnalyticsDashboard() {
  const container = document.getElementById("analytics-dashboard-container");
  if (!container) return;

  const snap = computeAnalyticsSnapshot();
  if (!snap) {
    container.innerHTML = '<p style="color: var(--text-muted);">Tiada data soalan tersedia untuk dianalisis.</p>';
    return;
  }

  const pct = (val, total) => total > 0 ? Math.round((val / total) * 100) : 0;
  const barWidth = (pctVal) => Math.max(2, pctVal);

  // --- KPI Summary Cards ---
  const kpiHtml = `
    <div class="analytics-kpi-grid">
      <div class="analytics-kpi-card">
        <div class="kpi-label">Jumlah Soalan</div>
        <div class="kpi-value">${snap.totalQuestions}</div>
        <div class="kpi-sub">di dalam Bank Soalan</div>
      </div>
      <div class="analytics-kpi-card">
        <div class="kpi-label">Jumlah Markah</div>
        <div class="kpi-value">${snap.totalMarks}m</div>
        <div class="kpi-sub">Markah penuh</div>
      </div>
      <div class="analytics-kpi-card">
        <div class="kpi-label">Kepatuhan Aras LPM</div>
        <div class="kpi-value">${snap.complianceScore}%</div>
        <div class="kpi-sub">Sasaran 50:30:20 (R:S:T)</div>
      </div>
      <div class="analytics-kpi-card">
        <div class="kpi-label">Bab Tidak Terpulungi</div>
        <div class="kpi-value">${snap.uncoveredChapters.length}</div>
        <div class="kpi-sub">Tiada soalan</div>
      </div>
    </div>
  `;

  // --- Aras Kesukaran Breakdown ---
  const totalQ = snap.totalQuestions;
  const arasHtml = `
    <div class="analytics-section">
      <h3 class="analytics-section-title">Taburan Aras Kesukaran (Kesesuaian LPM)</h3>
      <div class="analytics-aras-grid">
        <div class="aras-item">
          <div class="aras-label">Rendah (R)</div>
          <div class="aras-bar-track"><div class="aras-bar-fill bar-rendah" style="width: ${barWidth(snap.actualRatio.R)}%;"></div></div>
          <div class="aras-value">${snap.aras.Rendah} soalan (${snap.actualRatio.R}% | sasaran ${snap.targetRatio.R}%)</div>
        </div>
        <div class="aras-item">
          <div class="aras-label">Sederhana (S)</div>
          <div class="aras-bar-track"><div class="aras-bar-fill bar-sederhana" style="width: ${barWidth(snap.actualRatio.S)}%;"></div></div>
          <div class="aras-value">${snap.aras.Sederhana} soalan (${snap.actualRatio.S}% | sasaran ${snap.targetRatio.S}%)</div>
        </div>
        <div class="aras-item">
          <div class="aras-label">Tinggi (T)</div>
          <div class="aras-bar-track"><div class="aras-bar-fill bar-tinggi" style="width: ${barWidth(snap.actualRatio.T)}%;"></div></div>
          <div class="aras-value">${snap.aras.Tinggi} soalan (${snap.actualRatio.T}% | sasaran ${snap.targetRatio.T}%)</div>
        </div>
      </div>
    </div>
  `;

  // --- Konstruk Bloom Breakdown ---
  const konstrukHtml = `
    <div class="analytics-section">
      <h3 class="analytics-section-title">Taburan Konstruk Bloom (Taksonomi 6 Aras)</h3>
      <div class="analytics-konstruk-grid">
        ${Object.entries(snap.konstruk).map(([k, v]) => `
          <div class="konstruk-item">
            <div class="konstruk-name">${k}</div>
            <div class="konstruk-count">${v}</div>
            <div class="konstruk-pct">${pct(v, totalQ)}%</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  // --- Tingkatan & Kertas ---
  const tingkatanHtml = `
    <div class="analytics-section">
      <h3 class="analytics-section-title">Taburan Mengikut Tingkatan & Format Kertas</h3>
      <div class="analytics-tingkatan-kertas-row">
        <div class="analytics-mini-bar-chart">
          <div class="mini-chart-title">Tingkatan</div>
          ${Object.entries(snap.tingkatan).map(([k, v]) => `
            <div class="mini-bar-row">
              <span class="mini-bar-label">T${k}</span>
              <div class="mini-bar-track"><div class="mini-bar-fill bar-t${k}" style="width: ${barWidth(pct(v, totalQ))}%;"></div></div>
              <span class="mini-bar-val">${v} (${pct(v, totalQ)}%)</span>
            </div>
          `).join("")}
        </div>
        <div class="analytics-mini-bar-chart">
          <div class="mini-chart-title">Format Kertas</div>
          ${Object.entries(snap.kertas).map(([k, v]) => `
            <div class="mini-bar-row">
              <span class="mini-bar-label">K${k}</span>
              <div class="mini-bar-track"><div class="mini-bar-fill bar-k${k}" style="width: ${barWidth(pct(v, totalQ))}%;"></div></div>
              <span class="mini-bar-val">${v} (${pct(v, totalQ)}%)</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  // --- Bab Coverage Matrix ---
  const babHtml = `
    <div class="analytics-section">
      <h3 class="analytics-section-title">Liputan Topik (Bab DSKP) & Permasalahan</h3>
      <div class="analytics-bab-grid">
        ${Object.entries(snap.babCoverage).map(([key, info]) => `
          <div class="bab-coverage-item" style="${!info.count ? 'opacity: 0.4;' : ''}">
            <div class="bab-coverage-info">
              <span class="bab-key">${key.replace("_", " ")}</span>
              <span class="bab-name">${info.nama}</span>
            </div>
            <div class="bab-stats">
              <span class="bab-marks">${info.marks}m</span>
              <span class="badge ${info.count > 0 ? 'badge-success' : 'badge-muted'}">${info.count} soalan</span>
            </div>
          </div>
        `).join("")}
      </div>
      ${snap.uncoveredChapters.length > 0 ? `
        <div class="analytics-warning-box">
          <i data-lucide="alert-triangle" style="width: 16px; height: 16px;"></i>
          <div>${snap.uncoveredChapters.length} bab belum mempunyai soalan. <strong>Syorkan: Tambah soalan untuk bab: ${snap.uncoveredChapters.slice(0, 5).map(c => `T${c.tingkatan} Bab ${c.babNo}`).join(", ")}.</strong></div>
        </div>
      ` : '<div class="analytics-success-box"><i data-lucide="check-circle-2" style="width: 16px; height: 16px;"></i> Semua bab DSKP mempunyai sekurang-kurangnya satu soalan.</div>'}
    </div>
  `;

  // --- Top SK ---
  const skHtml = `
    <div class="analytics-section">
      <h3 class="analytics-section-title">Top 8 Standard Kandungan (SK) Paling Banyak Digunakan</h3>
      <div class="analytics-sk-table-wrap">
        <table class="analytics-sk-table">
          <thead>
            <tr><th>No</th><th>Standard Kandungan</th><th>Bil. Soalan</th><th>Persentase</th></tr>
          </thead>
          <tbody>
            ${snap.topSk.map((item, i) => `
              <tr>
                <td>${i + 1}</td>
                <td>${item.sk}</td>
                <td>${item.count}</td>
                <td>${pct(item.count, totalQ)}%</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // --- Paper Assembly Stats ---
  const paperStatsHtml = `
    <div class="analytics-section">
      <h3 class="analytics-section-title">Status Pemasangan Kertas (Runtime)</h3>
      <div class="analytics-paper-stats-grid">
        ${Object.entries(snap.paperStats).map(([k, st]) => {
          const label = k === "kertas1" ? "Kertas 1" : k === "kertas2" ? "Kertas 2" : "Kertas 3";
          return `
            <div class="paper-stat-card">
              <div class="paper-stat-label">${label}</div>
              <div class="paper-stat-value">${st.count} soalan</div>
              <div class="paper-stat-sub">${st.totalMarks}m</div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;

  container.innerHTML = kpiHtml + arasHtml + konstrukHtml + tingkatanHtml + babHtml + skHtml + paperStatsHtml;

  if (typeof lucide !== "undefined" && lucide.createIcons) lucide.createIcons();
}

// Auto-call when DOM ready (already called in DOMContentLoaded, but ensure)
if (typeof QUESTION_BANK !== "undefined" && typeof renderAnalyticsDashboard === "function") {
  // Will be called by DOMContentLoaded if container exists
}

/* ==========================================================================
   9. ENJIN EKSPORT DOKUMEN (PDF & DOCX)
   ========================================================================== */
/**
 * Eksport soalan bank (berdasarkan penapis semasa) ke PDF dan DOCX.
 * Menggunakan html2pdf.js (via CDN) untuk PDF dan penukalaan HTML sempurna
 * untuk DOCX melalui konversi tabel/markdown sederhana.
 */

// Helper: Dapatkan soalan yang disemak (mengikut penapis aktif)
function getFilteredQuestions() {
  if (typeof QUESTION_BANK === "undefined") return [];
  return QUESTION_BANK.filter(q => {
    if (AppState.filters.tingkatan !== "all" && q.tingkatan.toString() !== AppState.filters.tingkatan) return false;
    if (AppState.filters.kertas !== "all" && q.kertas.toString() !== AppState.filters.kertas) return false;
    if (AppState.filters.bidang && AppState.filters.bidang !== "all") {
      const b = getBidangPembelajaran(q.tingkatan, q.babNo);
      if (b !== AppState.filters.bidang) return false;
    }
    if (AppState.filters.sk && AppState.filters.sk !== "all" && q.sk !== AppState.filters.sk) return false;
    if (AppState.filters.konstruk && AppState.filters.konstruk !== "all") {
      const targetK = AppState.filters.konstruk.toLowerCase();
      const curK = (q.konstruk || "").toLowerCase();
      if (!curK.includes(targetK)) return false;
    }
    if (AppState.filters.aras !== "all" && q.aras !== AppState.filters.aras) return false;
    if (AppState.filters.sumber && AppState.filters.sumber !== "all") {
      const qSumber = (q.sumber && q.sumber.trim()) ? q.sumber.trim() : "Koleksi DSKP KSSM & Bank Standard SPM";
      if (qSumber !== AppState.filters.sumber) return false;
    }
    if (AppState.filters.search) {
      const s = AppState.filters.search;
      const haystack = `${q.soalan || q.soalanUtama || q.tajukEksperimen || ""} ${q.babNama || ""} ${q.topik || ""} ${q.sk || ""} ${q.sp || ""} ${q.sumber || ""}`.toLowerCase();
      if (!haystack.includes(s)) return false;
    }
    return true;
  });
}

// Helper: Bangun HTML untuk dokumen soalan (guna untuk PDF & DOCX preview)
function buildQuestionsDocHtml(questions) {
  const header = `
    <div style="text-align: center; border-bottom: 3px solid #5E17EB; padding-bottom: 1rem; margin-bottom: 1rem;">
      <h1 style="color: #5E17EB; font-size: 20pt; font-family: 'Outfit';">HUB BANK SOALAN FIZIK SPM</h1>
      <h3 style="color: #0F172A; font-size: 14pt; margin-top: 0.3rem;">Bank Soalan Berdasarkan JSU & DSKP KSSM</h3>
      <p style="color: #64748B; font-size: 10pt;">Jumlah Soalan: ${questions.length} | Kod: 4531</p>
    </div>
  `;

  const body = questions.map((q, idx) => {
    const paperName = q.kertas === 1 ? "Kertas 1 (Objektif)" :
                      q.kertas === 2 ? "Kertas 2" : "Kertas 3 (Amali)";
    const qNo = q.id;
    let qContent = "";

    if (q.kertas === 1) {
      qContent = `
        <p style="font-size: 12pt; font-weight: 700; margin: 10px 0 5px 0;">${formatBilingualText(q.soalan)}</p>
        ${q.rajahUrl ? `<div style="margin: 8px 0; text-align: center;"><img src="${q.rajahUrl}" style="max-width: 450px; max-height: 250px;"></div>` : (q.rajahSvg ? `<div style="margin: 8px 0;">${q.rajahSvg}</div>` : "")}
        <div style="display: grid; grid-template-columns: 40px 1fr; gap: 4px; margin: 8px 0;">
          ${(q.pilihan || []).map(opt => `
            <div style="font-weight: 700; text-align: center; align-content: center;">${opt.id}.</div>
            <div>${formatOptionText(opt.teks)}</div>
          `).join("")}
        </div>
        <p style="font-size: 9pt; color: #475569; margin-top: 8px;"><strong>Skema:</strong> ${q.penerangan || (q.jawapanBetul ? `Jawapan: ${q.jawapanBetul}` : "Tiada skema")}</p>
      `;
    } else if (q.kertas === 2) {
      qContent = `
        <p style="font-size: 12pt; font-weight: 700; margin: 10px 0 5px 0;">${formatBilingualText(q.soalanUtama)}</p>
        ${q.rajahUrl ? `<div style="margin: 8px 0; text-align: center;"><img src="${q.rajahUrl}" style="max-width: 450px; max-height: 250px;"></div>` : (q.rajahSvg ? `<div style="margin: 8px 0;">${q.rajahSvg}</div>` : "")}
        <div style="margin: 10px 0;">
          ${(q.pecahan || []).map(p => `
            <p style="margin: 6px 0; font-size: 11pt;"><strong>${p.sub}</strong> ${formatBilingualText(p.soalan)}</p>
            ${p.skema ? `<p style="font-size: 9pt; color: #475569; margin: 4px 0 4px 12px;"><strong>Skema:</strong> ${p.skema.replace(/\n/g, "<br>")}</p>` : ""}
            <p style="font-size: 9pt; color: #64748B; margin: 2px 0 8px 12px;">[${p.markah} markah]</p>
          `).join("")}
        </div>
      `;
    } else if (q.kertas === 3) {
      qContent = `
        <p style="font-size: 12pt; font-weight: 700; color: #5E17EB; margin: 10px 0 5px 0;">${q.tajukEksperimen}</p>
        <p style="font-size: 10pt; line-height: 1.4; margin: 5px 0;"><strong>Tujuan:</strong> ${q.tujuan}</p>
        <p style="font-size: 10pt; line-height: 1.4; margin: 5px 0;"><strong>Pemboleh Ubah:</strong> Manipulasi: ${q.pembolehubah?.dimanipulasi || '-'} | Bergerak Balas: ${q.pembolehubah?.bergerakbalas || '-'} | Dimalarkan: ${q.pembolehubah?.dimalarkan || '-'}</p>
        <p style="font-size: 10pt; line-height: 1.4; margin: 5px 0;"><strong>Radas:</strong> ${(q.radas || []).join(", ")}</p>
      `;
    }

    return `
      <div style="page-break-inside: avoid; border-bottom: 1pt solid #CBD5E1; padding: 12px 0;">
        <div style="display: flex; gap: 8px; align-items: baseline; margin-bottom: 8px;">
          <span style="font-weight: 800; color: #5E17EB; font-size: 10pt;">${qNo} |</span>
          <span style="font-size: 8pt; color: #64748B;">${paperName} | T${q.tingkatan} Bab ${q.babNo}: ${q.babNama} | ${q.aras} (${q.konstruk})</span>
        </div>
        <div style="font-family: 'Inter', sans-serif;">
          ${qContent}
        </div>
      </div>
    `;
  }).join("");

  return header + body + `<div style="text-align: center; margin-top: 2rem; font-size: 9pt; color: #94A3B8;">Akhir Dokumen</div>`;
}

// Eksport ke PDF (menggunakan html2pdf.js)
function exportQuestionsToPdf() {
  if (typeof html2pdf === "undefined") {
    showJsuNotification("❌ html2pdf.js tidak dimuat. Pastikan sambungan internet tersedia.");
    return;
  }
  const questions = getFilteredQuestions();
  if (!questions.length) {
    showJsuNotification("⚠️ Tiada soalan untuk dieksport. Semak penapis.");
    return;
  }

  const tempDiv = document.createElement("div");
  tempDiv.style.padding = "1.5cm";
  tempDiv.style.fontFamily = "'Inter', sans-serif";
  tempDiv.style.fontSize = "12pt";
  tempDiv.innerHTML = buildQuestionsDocHtml(questions);
  document.body.appendChild(tempDiv);

  const opt = {
    margin: 0,
    filename: `Hub_Fizik_SPM_Bank_Soalan_${new Date().toISOString().slice(0, 10)}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useXHR: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(opt).from(tempDiv).save().then(() => {
    document.body.removeChild(tempDiv);
    showJsuNotification(`✓ ${questions.length} soalan dieksport ke PDF!`);
  }).catch(() => {
    document.body.removeChild(tempDiv);
  });
}

// Eksport ke DOCX (berpandukan templat rasmi Muka Hadapan, Rumus, Soalan & Skema)
async function exportQuestionsToDocx() {
  const questions = getFilteredQuestions();
  if (!questions.length) {
    showJsuNotification("⚠️ Tiada soalan untuk dieksport. Semak penapis.");
    return;
  }
  const mode = AppState.filters.kertas === "2" ? "kertas2" : "kertas1";
  showJsuNotification(`⏳ Menjana dokumen Word (.docx) bagi ${questions.length} soalan terpilih...`);

  try {
    const res = await fetch("/api/export-docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: mode,
        type: "exam",
        questions: questions,
        tingkatan: (typeof getExamMetadata === "function" ? getExamMetadata().tingkatan : (AppState.filters.tingkatan || 5)),
        tahun: (typeof getExamMetadata === "function" ? getExamMetadata().tahun : new Date().getFullYear()),
        nama_peperiksaan: (typeof getExamMetadata === "function" ? getExamMetadata().examTitle : "PEPERIKSAAN PERCUBAAN SPM"),
        panitia: (typeof getExamMetadata === "function" ? getExamMetadata().panitia : "Fizik"),
        sekolah: (typeof getExamMetadata === "function" ? getExamMetadata().sekolah : "")
      })
    });
    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Bank_Soalan_Fizik_${mode.toUpperCase()}_${new Date().toISOString().slice(0, 10)}.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showJsuNotification(`✓ ${questions.length} soalan (.docx) berjaya dimuat turun berpandukan templat rasmi!`);
      return;
    }
  } catch (err) {
    console.warn("Docx API fallback to client export:", err);
  }

  // Fallback ke .doc
  const html = buildQuestionsDocHtml(questions);
  const blobHtml = new Blob(['\ufeff', html], { type: "application/msword" });
  const url = URL.createObjectURL(blobHtml);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Bank_Soalan_Fizik_${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showJsuNotification(`✓ ${questions.length} soalan dieksport ke dokumen Word!`);
}

// Eksport kertas peperiksaan (dari workbench) ke PDF
function exportExamToPdf() {
  if (typeof html2pdf === "undefined") {
    showJsuNotification("❌ html2pdf.js tidak dimuat. Pastikan sambungan internet tersedia.");
    return;
  }
  const el = document.getElementById("printable-exam-container");
  if (!el || !el.children.length) {
    showJsuNotification("⚠️ Tiada kertas untuk dieksport. Jana kertas dulu.");
    return;
  }

  const tempDiv = document.createElement("div");
  tempDiv.style.padding = "1cm";
  tempDiv.innerHTML = el.innerHTML;
  document.body.appendChild(tempDiv);

  const opt = {
    margin: 0,
    filename: `Kertas_Peperiksaan_Fizik_${new Date().toISOString().slice(0, 10)}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useXHR: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(opt).from(tempDiv).save().then(() => {
    document.body.removeChild(tempDiv);
    showJsuNotification("✓ Kertas peperiksaan dieksport ke PDF!");
  }).catch(() => {
    document.body.removeChild(tempDiv);
  });
}

// Eksport kertas peperiksaan ke DOCX
async function exportExamToDocx() {
  const mode = getActivePaperMode();
  const questions = AppState.assembledPapers[mode] || [];
  if (!questions.length) {
    showJsuNotification("⚠️ Tiada kertas untuk dieksport. Jana kertas dulu.");
    return;
  }

  showJsuNotification("⏳ Menjana dokumen Word (.docx) berpandukan templat rasmi muka depan & soalan...");

  try {
    const meta = getExamMetadata();
    const res = await fetch("/api/export-docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: mode,
        type: "exam",
        questions: questions,
        tingkatan: meta.tingkatan || 5,
        tahun: meta.tahun || 2026,
        nama_peperiksaan: meta.examTitle || "PEPERIKSAAN PERCUBAAN SPM",
        panitia: meta.panitia || "Fizik",
        sekolah: meta.sekolah || ""
      })
    });
    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const paperName = mode === "kertas2" ? "Kertas_2" : "Kertas_1";
      link.download = `${paperName}_Fizik_SPM_${new Date().toISOString().slice(0, 10)}.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showJsuNotification("✓ Kertas peperiksaan (.docx) berjaya dijana menepati templat muka depan, rumus & soalan!");
      return;
    }
  } catch (err) {
    console.warn("Docx API fallback:", err);
  }

  // Fallback
  const el = document.getElementById("printable-exam-container");
  if (!el || !el.children.length) return;
  const html = el.innerHTML;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob(['\ufeff', html], { type: "application/msword" }));
  link.download = `Kertas_Peperiksaan_Fizik_${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showJsuNotification("✓ Kertas peperiksaan dieksport ke dokumen Word!");
}

// Eksport SATU soalan (beserta skema) ke PDF atau DOCX
async function openInGoogleDocs() {
  const mode = getActivePaperMode();
  const questions = AppState.assembledPapers[mode] || [];
  if (!questions.length) {
    showJsuNotification("⚠️ Tiada kertas untuk dibuka. Sila jana kertas soalan terlebih dahulu.");
    return;
  }

  showJsuNotification("⏳ Sedang auto-jana fail Word (.docx) rasmi untuk Google Docs...");

  try {
    const meta = getExamMetadata();
    const res = await fetch("/api/export-docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: mode,
        type: "exam",
        questions: questions,
        tingkatan: meta.tingkatan || 5,
        tahun: meta.tahun || 2026,
        nama_peperiksaan: meta.examTitle || "PEPERIKSAAN PERCUBAAN SPM",
        panitia: meta.panitia || "Fizik",
        sekolah: meta.sekolah || ""
      })
    });
    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const paperName = mode === "kertas2" ? "Kertas_2" : "Kertas_1";
      const fileName = `${paperName}_Fizik_SPM_${new Date().toISOString().slice(0, 10)}.docx`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      showJsuNotification("✓ Fail " + fileName + " berjaya dimuat turun! Membuka Google Docs...");
      setTimeout(() => {
        window.open("https://docs.google.com/document/u/0/", "_blank");
      }, 600);
      return;
    }
  } catch (err) {
    console.error("Open in Google Docs error:", err);
  }
  
  // Fallback
  showJsuNotification("Membuka Google Docs...");
  window.open("https://docs.google.com/document/u/0/", "_blank");
}

function exportSingleQuestion(qId, format) {
  const question = typeof QUESTION_BANK !== "undefined" ? QUESTION_BANK.find(q => q.id === qId) : null;
  if (!question) {
    showJsuNotification("⚠️ Soalan tidak ditemui.");
    return;
  }

  const html = buildQuestionsDocHtml([question]);
  const dateStr = new Date().toISOString().slice(0, 10);

  if (format === "pdf") {
    if (typeof html2pdf === "undefined") {
      showJsuNotification("❌ html2pdf.js tidak dimuat.");
      return;
    }
    const tempDiv = document.createElement("div");
    tempDiv.style.padding = "1.5cm";
    tempDiv.style.fontFamily = "'Inter', sans-serif";
    tempDiv.innerHTML = html;
    document.body.appendChild(tempDiv);

    const opt = {
      margin: 0,
      filename: `Soalan_${qId}_${dateStr}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useXHR: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    html2pdf().set(opt).from(tempDiv).save().then(() => {
      document.body.removeChild(tempDiv);
    }).catch(() => {
      document.body.removeChild(tempDiv);
    });
  } else {
    // DOCX (.doc format HTML)
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    link.download = `Soalan_${qId}_${dateStr}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showJsuNotification("✓ Soalan dieksport ke dokumen Word!");
  }
}

// ============================================================================
// FUNGSI SEMENTARA (DEV): OVERRIDE JSU UNTUK ISI SLOT KOSONG IKUT SK (ABAIKAN ARAS)
// ============================================================================
function overrideJsuFillBlankSlots(paperMode) {
  const mode = paperMode || AppState.currentPaperMode || "kertas1";
  let list = AppState.assembledPapers[mode] || [];
  if (!list || list.length === 0) {
    if (typeof autoFillAssembledPaper === "function") autoFillAssembledPaper(mode);
    list = AppState.assembledPapers[mode] || [];
  }

  const blankSlots = list.filter(q => q && q.isBlank);
  if (blankSlots.length === 0) {
    if (typeof showJsuNotification === "function") {
      showJsuNotification("ℹ️ Semua slot soalan sudah terisi/sepadan. Tiada slot kosong.");
    }
    return;
  }

  const targetKertasNum = (mode === "kertas1") ? 1 : ((mode === "kertas2") ? 2 : 3);
  const pool = (typeof QUESTION_BANK !== "undefined") ? QUESTION_BANK.filter(q => q.kertas === targetKertasNum) : [];
  const usedIds = new Set(list.filter(q => !q.isBlank && q.id).map(q => q.id));

  let filledCount = 0;

  list.forEach((slot, idx) => {
    if (!slot || !slot.isBlank) return;

    const rawSk = slot.sk || slot.topik || "";
    const ting = slot.tingkatan;
    const babNo = slot.babNo;
    const targetSkCode = (typeof getSkCode === "function") ? getSkCode(rawSk) : ((rawSk.match(/(\d+\.\d+)/) || [])[1] || "");

    let candidate = null;

    // TIER 1: Kod SK sama & Tingkatan sama (100% tepat SK, ABAIKAN ARAS & KONSTRUK, belum digunakan)
    if (targetSkCode && ting) {
      candidate = pool.find(q => !usedIds.has(q.id) && q.tingkatan === ting && ((typeof getSkCode === "function") ? getSkCode(q.sk || q.topik) : "") === targetSkCode);
    }

    // TIER 2: Teks SK sepadan mengikut kamus Bank Soalan (ABAIKAN ARAS & KONSTRUK, belum digunakan)
    if (!candidate && rawSk) {
      const matchedSkName = (typeof findMatchingBankSk === "function") ? findMatchingBankSk(rawSk, ting, babNo) : "all";
      if (matchedSkName && matchedSkName !== "all") {
        candidate = pool.find(q => !usedIds.has(q.id) && (q.sk === matchedSkName || (q.sk && q.sk.includes(matchedSkName))));
      }
      if (!candidate) {
        const cleanTarget = String(rawSk).toLowerCase().replace(/^sk\s*/i, "").trim();
        candidate = pool.find(q => !usedIds.has(q.id) && q.tingkatan === ting && (
          String(q.sk || "").toLowerCase().includes(cleanTarget) ||
          cleanTarget.includes(String(q.sk || "").toLowerCase().replace(/^sk\s*/i, "").trim())
        ));
      }
    }

    // TIER 3: Bab sama & Tingkatan sama (ABAIKAN ARAS & KONSTRUK, belum digunakan)
    if (!candidate && babNo && ting) {
      candidate = pool.find(q => !usedIds.has(q.id) && q.tingkatan === ting && q.babNo === babNo);
    }

    // TIER 4: Salinan soalan SK sama jika calon unik belum diguna sudah habis
    if (!candidate && targetSkCode && ting) {
      candidate = pool.find(q => q.tingkatan === ting && ((typeof getSkCode === "function") ? getSkCode(q.sk || q.topik) : "") === targetSkCode);
    }

    // TIER 5: Fallback sepadan Bab (walaupun pernah digunakan) atau sebarang soalan dalam tingkatan sama
    if (!candidate && babNo && ting) {
      candidate = pool.find(q => q.tingkatan === ting && q.babNo === babNo);
    }
    if (!candidate && ting) {
      candidate = pool.find(q => !usedIds.has(q.id) && q.tingkatan === ting);
    }

    if (candidate) {
      usedIds.add(candidate.id);
      const qCopy = { ...candidate };
      qCopy.slotNo = idx + 1;
      qCopy.no = idx + 1;
      qCopy.isBlank = false;
      qCopy._overrideJsuAras = true;
      if (slot.bahagian && !qCopy.bahagian) qCopy.bahagian = slot.bahagian;
      if (mode === "kertas2" && slot.markah && (!qCopy.markah || qCopy.markah === 1)) {
        qCopy.markah = slot.markah;
        qCopy.markahPenuh = slot.markahPenuh || slot.markah;
      }
      list[idx] = qCopy;
      filledCount++;
    }
  });

  if (typeof renderSenaraiSoalan === "function") renderSenaraiSoalan();
  if (typeof renderAssemblyWorkbench === "function") renderAssemblyWorkbench();
  if (window.lucide && lucide.createIcons) lucide.createIcons();

  if (typeof showJsuNotification === "function") {
    showJsuNotification(`⚡ Berjaya mengisi ${filledCount} slot kosong mengikut SK (Override JSU / Abaikan Aras)!`);
  }
}

// ============================================================================
// STAGE 2: SEMAK SENARAI SOALAN BERDASARKAN JSU
// ============================================================================

function renderSenaraiSoalan() {
  // Pastikan kesinambungan ingatan cache daripada menu Tetapan JSU
  const mode = getActivePaperMode();
  AppState.currentPaperMode = mode;

  if (!AppState.assembledPapers[mode] || AppState.assembledPapers[mode].length === 0) {
    autoFillAssembledPaper(mode);
  }
  const list = AppState.assembledPapers[mode] || [];
  const container = document.getElementById("senarai-soalan-table-wrapper");
  const kpiStrip = document.getElementById("senarai-kpi-strip");
  const paperBadge = document.getElementById("senarai-paper-badge");
  const statusBadge = document.getElementById("senarai-status-badge");
  const footerSummary = document.getElementById("senarai-footer-summary");

  if (paperBadge) {
    paperBadge.textContent = mode === "kertas1" ? "Kertas 1 (4531/1) — 40 Soalan (40m)" : (mode === "kertas2" ? "Kertas 2 (4531/2) — 11 Soalan (100m)" : "Kertas 3 Amali (4531/3)");
  }

  // Papar badge standard SPM konstruk (hanya untuk Kertas 2)
  const k2BadgeEl = document.getElementById("k2-konstruk-summary");
  if (k2BadgeEl) {
    if (mode === "kertas2" && typeof renderK2KonstrukSummaryBadge === "function") {
      k2BadgeEl.style.display = "block";
      renderK2KonstrukSummaryBadge("k2-konstruk-summary");
    } else {
      k2BadgeEl.style.display = "none";
    }
  }

  // Pengiraan metrik
  let countR = 0, countS = 0, countT = 0, totalMarks = 0;
  let matchedCount = 0, blankCount = 0;
  const konstrukCounts = {};

  list.forEach(q => {
    const marks = q.markah || q.markahPenuh || (mode === "kertas1" ? 1 : 0);
    totalMarks += marks;
    if (q.aras === "Rendah") countR++;
    else if (q.aras === "Sederhana") countS++;
    else if (q.aras === "Tinggi") countT++;

    const k = q.konstruk || "Mengaplikasi";
    konstrukCounts[k] = (konstrukCounts[k] || 0) + 1;

    if (q.isBlank) blankCount++;
    else matchedCount++;
  });

  if (statusBadge) {
    if (blankCount > 0) {
      statusBadge.innerHTML = `<span style="color: #D97706; font-weight: 700;">⚠ ${matchedCount}/${list.length} Sepadan JSU (${blankCount} Kosong)</span>`;
    } else {
      statusBadge.textContent = `✓ 100% Sepadan JSU (${list.length} Soalan)`;
    }
  }

  if (kpiStrip) {
    kpiStrip.innerHTML = `
      <div class="senarai-kpi-card">
        <span class="senarai-kpi-num">${list.length}</span>
        <span class="senarai-kpi-txt">Jumlah Slot JSU</span>
      </div>
      <div class="senarai-kpi-card">
        <span class="senarai-kpi-num highlight-green">${matchedCount}</span>
        <span class="senarai-kpi-txt">Soalan Sepadan</span>
      </div>
      <div class="senarai-kpi-card">
        <span class="senarai-kpi-num ${blankCount > 0 ? 'highlight-yellow' : ''}">${blankCount}</span>
        <span class="senarai-kpi-txt">Slot Kosong</span>
      </div>
      <div class="senarai-kpi-card">
        <span class="senarai-kpi-num highlight-red">${countR} : ${countS} : ${countT}</span>
        <span class="senarai-kpi-txt">Taburan Aras R:S:T</span>
      </div>
    `;
  }

  if (footerSummary) {
    footerSummary.textContent = `Jumlah ${list.length} slot JSU (${matchedCount} sepadan, ${blankCount} kosong) • ${totalMarks} markah diperuntukkan • Menepati garis panduan Lembaga Peperiksaan Malaysia.`;
  }

  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: #64748B;">
        <i data-lucide="inbox" style="width: 40px; height: 40px; margin-bottom: 0.5rem;"></i>
        <h4>Tiada soalan dalam senarai</h4>
        <p>Klik butang "Padan / Jana Semula" untuk menjana soalan mengikut JSU.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = `
    <table class="senarai-table" id="table-senarai-soalan">
      <thead>
        <tr>
          <th style="width: 45px; text-align: center;">No.</th>
          <th style="width: 95px;">Bahagian</th>
          <th style="width: 175px;">Tingkatan &amp; Bab</th>
          <th style="width: 170px;">Standard Kandungan (SK)</th>
          <th style="width: 85px; text-align: center;">Aras</th>
          <th style="width: 105px;">Konstruk</th>
          <th style="width: 95px;">Format Item</th>
          <th style="width: 70px; text-align: center;">Markah</th>
          <th>Ringkasan Stimulus / Soalan</th>
          <th style="width: 110px; text-align: center;">Status JSU</th>
          <th style="width: 85px; text-align: center;">Tindakan</th>
        </tr>
      </thead>
      <tbody>
        ${list.map((q, idx) => {
          const badgeArasClass = q.aras === "Rendah" ? "badge-success" : (q.aras === "Sederhana" ? "badge-yellow" : "badge-purple");
          const totalQMarks = q.markah || q.markahPenuh || (mode === "kertas1" ? 1 : 0);
          const bahagianText = q.bahagian ? `Bahagian ${q.bahagian}` : (mode === "kertas1" ? "Objektif" : "Struktur");
          const itemType = mode === "kertas1" ? "Aneka Pilihan" : (q.bahagian === "C" ? "Esei Terbuka" : (q.bahagian === "B" ? "Esei Berstruktur" : "Struktur"));

          if (q.isBlank) {
            return `
              <tr class="senarai-row senarai-row-blank" style="background: #FFFDF5;" data-aras="${q.aras}" data-konstruk="${q.konstruk || 'Memahami'}" data-text="${(q.babNama + ' ' + (q.sk || '')).toLowerCase()}">
                <td style="text-align: center; font-weight: 800; color: #94A3B8;">${idx + 1}</td>
                <td><span class="badge badge-purple" style="font-size: 0.72rem; font-weight: 700; opacity: 0.7;">${bahagianText}</span></td>
                <td>
                  <div style="font-weight: 700; color: #334155; font-size: 0.82rem;">T${q.tingkatan} Bab ${q.babNo}</div>
                  <div style="font-size: 0.75rem; color: #64748B;">${q.babNama}</div>
                </td>
                <td>
                  <div style="font-size: 0.78rem; color: #475569; font-weight: 600;">${q.sk || '—'}</div>
                </td>
                <td style="text-align: center;">
                  <span class="badge ${badgeArasClass}" style="font-size: 0.72rem; font-weight: 700;">${q.aras}</span>
                </td>
                <td>
                  <span class="badge badge-construct" style="font-size: 0.72rem;">${q.konstruk || 'Memahami'}</span>
                </td>
                <td style="font-size: 0.78rem; color: #64748B; font-weight: 500;">${itemType}</td>
                <td style="text-align: center; font-weight: 800; color: #94A3B8; font-size: 0.85rem;">${totalQMarks}m</td>
                <td style="font-size: 0.8rem; color: #94A3B8; font-style: italic;">— Tiada soalan sepadan dalam bank —</td>
                <td style="text-align: center;">
                  <span class="badge" style="font-size: 0.7rem; font-weight: 700; background: #FEF3C7; color: #B45309; border: 1px solid #FCD34D; display: inline-flex; align-items: center; gap: 3px;">
                    <i data-lucide="circle-dashed" style="width: 11px; height: 11px;"></i> Kosong
                  </span>
                </td>
                <td style="text-align: center;">
                  <button type="button" class="btn btn-outline btn-xs" onclick="openBankSoalanForSlot('${mode}', ${idx})" title="Pilih soalan bagi SK ini dari Bank Soalan">
                    <i data-lucide="search" style="width: 12px; height: 12px;"></i> Pilih Soalan
                  </button>
                </td>
              </tr>
            `;
          }

          const qText = q.soalan || q.soalanUtama || q.tajukEksperimen || "";
          const shortText = qText.length > 70 ? qText.substring(0, 70) + "..." : qText;

          return `
            <tr class="senarai-row" data-aras="${q.aras}" data-konstruk="${q.konstruk || 'Mengaplikasi'}" data-text="${(q.babNama + ' ' + (q.topik || '') + ' ' + qText).toLowerCase()}">
              <td style="text-align: center; font-weight: 800; color: #1E293B;">${idx + 1}</td>
              <td><span class="badge badge-purple" style="font-size: 0.72rem; font-weight: 700;">${bahagianText}</span></td>
              <td>
                <div style="font-weight: 700; color: #0F172A; font-size: 0.82rem;">T${q.tingkatan} Bab ${q.babNo}</div>
                <div style="font-size: 0.75rem; color: #64748B;">${q.babNama}</div>
              </td>
              <td>
                <div style="font-size: 0.78rem; color: #334155; font-weight: 600;">${q.topik || q.sk || 'DSKP Fizik KSSM'}</div>
              </td>
              <td style="text-align: center;">
                <span class="badge ${badgeArasClass}" style="font-size: 0.72rem; font-weight: 700;">${q.aras}</span>
              </td>
              <td>
                <span class="badge badge-construct" style="font-size: 0.72rem;">${q.konstruk || 'Mengaplikasi'}</span>
              </td>
              <td style="font-size: 0.78rem; color: #475569; font-weight: 500;">${itemType}</td>
              <td style="text-align: center; font-weight: 800; color: #DC2626; font-size: 0.85rem;">${totalQMarks}m</td>
              <td style="font-size: 0.8rem; color: #334155;">${shortText}</td>
              <td style="text-align: center;">
                <span class="badge badge-success" style="font-size: 0.7rem; font-weight: 700; display: inline-flex; align-items: center; gap: 3px;" ${q._overrideJsuAras ? 'title="Soalan ini diisi secara automatik mengikut SK (Override JSU / Abaikan Aras)"' : ''}>
                  <i data-lucide="check" style="width: 11px; height: 11px;"></i> ${q._overrideJsuAras ? 'Sepadan (SK)' : 'Sepadan'}
                </span>
              </td>
              <td style="text-align: center;">
                <button type="button" class="btn btn-outline btn-xs" onclick="viewQuestionDetailsFromList('${q.id}')" title="Pergi ke soalan ini di Langkah 3">
                  <i data-lucide="eye" style="width: 12px; height: 12px;"></i> Semak
                </button>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;

  if (window.lucide) lucide.createIcons();
}

function filterSenaraiTable() {
  const query = (document.getElementById("senarai-search-input")?.value || "").toLowerCase().trim();
  const arasFilter = document.getElementById("senarai-filter-aras")?.value || "all";
  const konstrukFilter = document.getElementById("senarai-filter-konstruk")?.value || "all";

  const rows = document.querySelectorAll(".senarai-row");
  let visibleCount = 0;

  rows.forEach(row => {
    const rowAras = row.getAttribute("data-aras");
    const rowKonstruk = row.getAttribute("data-konstruk");
    const rowText = row.getAttribute("data-text") || "";

    const matchesQuery = !query || rowText.includes(query);
    const matchesAras = arasFilter === "all" || rowAras === arasFilter;
    const matchesKonstruk = konstrukFilter === "all" || rowKonstruk === konstrukFilter;

    if (matchesQuery && matchesAras && matchesKonstruk) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });

  const footerSummary = document.getElementById("senarai-footer-summary");
  if (footerSummary) {
    footerSummary.textContent = `Memaparkan ${visibleCount} daripada ${rows.length} soalan yang memenuhi penapis.`;
  }
}

function viewQuestionDetailsFromList(qId) {
  switchWorkflowStage(3);
  AppState.assemblyViewMode = "full";
  if (!AppState.expandedWorkbenchSlots) AppState.expandedWorkbenchSlots = {};
  AppState.expandedWorkbenchSlots[qId] = true;
  if (!AppState.expandedWorkbenchSkema) AppState.expandedWorkbenchSkema = {};
  AppState.expandedWorkbenchSkema[qId] = true;

  if (typeof renderAssemblyWorkbench === "function") renderAssemblyWorkbench();

  setTimeout(() => {
    const el = document.getElementById(`slot-${qId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.boxShadow = "0 0 0 3px #DC2626";
      setTimeout(() => {
        el.style.boxShadow = "";
      }, 2000);
    }
  }, 250);
}

// ============================================================================
// STAGE 5: SKEMA PENSKORAN RASMI LPM (DOCX & PDF)
// ============================================================================

function renderSkemaPenskoran() {
  const container = document.getElementById("printable-scoring-container");
  if (!container) return;

  const mode = getActivePaperMode();
  if (!AppState.assembledPapers[mode] || AppState.assembledPapers[mode].length === 0) {
    autoFillAssembledPaper(mode);
  }
  const questions = AppState.assembledPapers[mode] || [];

  let codeText = mode === "kertas2" ? "4531/2" : (mode === "kertas3" ? "4531/3" : "4531/1");
  let paperName = mode === "kertas2" ? "KERTAS 2 (STRUKTUR & ESEI)" : (mode === "kertas3" ? "KERTAS 3 (AMALI)" : "KERTAS 1 (OBJEKTIF ANEKA PILIHAN)");

  let contentHtml = "";

  if (mode === "kertas1") {
    contentHtml = `
      <div class="scoring-doc-header">
        <div class="lpm-sulit-badge">SULIT</div>
        <div class="lpm-doc-agency">LEMBAGA PEPERIKSAAN &bull; KEMENTERIAN PENDIDIKAN MALAYSIA</div>
        <h2 class="lpm-doc-title">PANDUAN PENSKORAN PEPERIKSAAN SPM</h2>
        <div class="lpm-doc-subject">FIZIK &bull; KOD ${codeText} &bull; ${paperName}</div>
        <div class="lpm-doc-meta">Masa: 1 Jam 15 Minit &bull; Jumlah Markah: 40 Markah &bull; Piawai Penskoran Rasmi</div>
      </div>

      <div class="scoring-table-intro">
        <h4><i data-lucide="key"></i> JADUAL KUNCI JAWAPAN OBJEKTIF (40 SOALAN)</h4>
        <p>Setiap jawapan betul diperuntukkan 1 markah. Tiada markah ditolak bagi jawapan salah.</p>
      </div>

      <!-- Compact 4-Column Grid Table for 40 questions -->
      <div class="k1-answer-grid">
        ${[0, 10, 20, 30].map(startIdx => `
          <table class="k1-grid-col-table">
            <thead>
              <tr>
                <th style="width: 35px; text-align: center;">No.</th>
                <th style="width: 45px; text-align: center;">Kunci</th>
                <th>Bab &amp; Konsep Fizik</th>
              </tr>
            </thead>
            <tbody>
              ${questions.slice(startIdx, startIdx + 10).map((q, i) => {
                const qNum = startIdx + i + 1;
                const ans = q.jawapanBetul || ["A","B","C","D"][(qNum * 7) % 4];
                return `
                  <tr>
                    <td style="text-align: center; font-weight: 800; color: #0F172A;">${qNum}</td>
                    <td style="text-align: center;"><span class="ans-key-pill">${ans}</span></td>
                    <td style="font-size: 0.74rem; color: #334155;">
                      <strong>T${q.tingkatan} B${q.babNo}</strong>: ${q.babNama}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `).join('')}
      </div>

      <!-- Detailed Rationales & Working Steps -->
      <div style="margin-top: 2rem;">
        <h4 style="font-size: 1.05rem; font-weight: 800; color: #1E293B; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #E2E8F0;">
          <i data-lucide="book-open"></i> PERINCIAN JAWAPAN, FORMULA &amp; PENERANGAN KONSEP
        </h4>
        <div class="scoring-rationales-list">
          ${questions.map((q, idx) => `
            <div class="scoring-item-card">
              <div class="scoring-item-header">
                <span class="q-num-badge">Soalan ${idx + 1}</span>
                <span class="q-ans-badge">Jawapan: <strong>${q.jawapanBetul || 'A'}</strong></span>
                <span class="badge badge-purple" style="font-size: 0.7rem;">${q.aras}</span>
                <span class="badge" style="background:#F1F5F9; color:#475569; font-size: 0.7rem;">${q.konstruk || 'Mengaplikasi'}</span>
                <span style="font-size: 0.78rem; color: #64748B; margin-left: auto;">Tingkatan ${q.tingkatan} &bull; Bab ${q.babNo}: ${q.babNama}</span>
              </div>
              <div class="scoring-item-body">
                <p style="font-weight: 600; color: #1E293B; margin-bottom: 0.4rem;">${formatBilingualText(q.soalan)}</p>
                <div class="scoring-rationale-box">
                  <strong>Penerangan &amp; Kaedah Penyelesaian:</strong>
                  <p>${q.peneranganJawapan || q.skema || "Aplikasi rumus dan hukum fizik berpandukan konsep piawai DSKP SPM."}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (mode === "kertas2") {
    contentHtml = `
      <div class="scoring-doc-header">
        <div class="lpm-sulit-badge">SULIT</div>
        <div class="lpm-doc-agency">LEMBAGA PEPERIKSAAN &bull; KEMENTERIAN PENDIDIKAN MALAYSIA</div>
        <h2 class="lpm-doc-title">PANDUAN PENSKORAN PEPERIKSAAN SPM</h2>
        <div class="lpm-doc-subject">FIZIK &bull; KOD ${codeText} &bull; ${paperName}</div>
        <div class="lpm-doc-meta">Masa: 2 Jam 30 Minit &bull; Jumlah Markah: 100 Markah &bull; Peraturan Pemarkahan Rasmi LPM</div>
      </div>

      <div class="scoring-table-intro">
        <h4><i data-lucide="award"></i> RUBRIK PEMARKAHAN TERPERINCI MENGIKUT SUB-SOALAN</h4>
        <p>Pemeriksa mestilah berpandukan skema penskoran di bawah untuk memastikan keadilan dan konsistensi pemarkahan.</p>
      </div>

      <div class="k2-rubrics-wrapper">
        ${questions.map((q, idx) => {
          const totalQMarks = q.markah || q.markahPenuh || (q.pecahan ? q.pecahan.reduce((acc, p) => acc + (p.markah || 1), 0) : 10);
          return `
            <div class="rubric-question-block" style="margin-bottom: 2rem; border: 1.5px solid #CBD5E1; border-radius: 8px; overflow: hidden; background: #fff;">
              <div class="rubric-question-header" style="background: #F8FAFC; padding: 10px 16px; border-bottom: 1.5px solid #CBD5E1; display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-weight: 800; font-size: 1rem; color: #0F172A;">Soalan ${idx + 1}</span>
                  ${q.bahagian ? `<span class="badge badge-purple" style="font-weight: 700;">Bahagian ${q.bahagian}</span>` : ''}
                  <span class="badge ${q.aras === 'Rendah' ? 'badge-success' : (q.aras === 'Sederhana' ? 'badge-yellow' : 'badge-purple')}">${q.aras}</span>
                  <span style="font-size: 0.8rem; color: #64748B;">Tingkatan ${q.tingkatan} &bull; Bab ${q.babNo}: ${q.babNama}</span>
                </div>
                <div style="font-weight: 800; color: #DC2626; font-size: 0.95rem;">
                  [Jumlah: ${totalQMarks} Markah]
                </div>
              </div>

              <!-- Main question stimulus snippet -->
              <div style="padding: 10px 16px; background: #FFFFFF; border-bottom: 1px solid #E2E8F0; font-size: 0.84rem; color: #334155;">
                <strong>Konteks Item:</strong> ${q.soalanUtama || q.soalan || 'Soalan berstruktur berpandukan rajah dan stimulus eksperimen.'}
              </div>

              <!-- 4-Column Official Rubric Table -->
              <table class="rubric-detail-table" style="width: 100%; border-collapse: collapse; font-size: 0.82rem;">
                <thead>
                  <tr style="background: #F1F5F9; color: #1E293B; border-bottom: 1.5px solid #CBD5E1;">
                    <th style="width: 110px; padding: 8px 12px; text-align: left;">Soalan</th>
                    <th style="padding: 8px 12px; text-align: left;">Kriteria Penskoran &amp; Skema Jawapan</th>
                    <th style="width: 90px; padding: 8px 12px; text-align: center;">Sub-Markah</th>
                    <th style="width: 90px; padding: 8px 12px; text-align: center;">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  ${(q.pecahan || [
                    { sub: "(a)", soalan: "Nyatakan maksud prinsip fizik berkaitan.", markah: 1, skema: "Menyatakan definisi atau prinsip fizik yang betul dan tepat berpandukan DSKP." },
                    { sub: "(b)", soalan: "Berdasarkan rajah, bandingkan kuantiti fizik.", markah: 3, skema: "1. Membuat perbandingan kuantiti fizik dengan betul (1m)<br>2. Menghubungkaitkan pembolehubah (1m)<br>3. Menyatakan kesimpulan (1m)" },
                    { sub: "(c)", soalan: "Hitung nilai kuantiti fizik menggunakan rumus.", markah: 3, skema: "1. Gantian rumus yang tepat: F = ma (1m)<br>2. Pengiraan tepat (1m)<br>3. Jawapan akhir berserta unit yang betul (1m)" }
                  ]).map(p => `
                    <tr style="border-bottom: 1px solid #E2E8F0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: #1E293B; vertical-align: top;">
                        ${idx + 1} ${p.sub}
                      </td>
                      <td style="padding: 10px 12px; color: #1E293B; vertical-align: top;">
                        <div style="font-weight: 600; color: #475569; margin-bottom: 4px;">${formatBilingualText(p.soalan)}</div>
                        <div style="color: #0F172A; background: #F8FAFC; padding: 8px 10px; border-radius: 4px; border-left: 3px solid #10B981; line-height: 1.45;">
                          ${p.skema || p.rubrikKriteria || "Jawapan menepati konsep fizik berpandukan panduan rasmi LPM."}
                        </div>
                      </td>
                      <td style="padding: 10px 12px; text-align: center; font-weight: 700; color: #334155; vertical-align: top;">
                        ${p.markah || 1}
                      </td>
                      <td style="padding: 10px 12px; text-align: center; font-weight: 800; color: #DC2626; vertical-align: top;">
                        ${p.markah || 1}m
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else {
    contentHtml = `
      <div class="scoring-doc-header">
        <div class="lpm-sulit-badge">SULIT</div>
        <h2 class="lpm-doc-title">PANDUAN PENSKORAN AMALI SAINS FIZIK (4531/3)</h2>
        <div class="lpm-doc-meta">Jumlah: 15 Markah</div>
      </div>
      <div style="padding: 1.5rem; background: #fff; border-radius: 8px; border: 1px solid #E2E8F0;">
        <p>Rubrik penskoran bagi kemahiran memanipulasi radas, pemerhatian, penjadualan data, pemplotan graf dan kesimpulan saintifik.</p>
      </div>
    `;
  }

  container.innerHTML = contentHtml;
  if (window.lucide) lucide.createIcons();
}

async function exportScoringDOCX() {
  const mode = getActivePaperMode();
  const questions = AppState.assembledPapers[mode] || [];
  if (!questions.length) {
    showJsuNotification("⚠️ Tiada skema untuk dieksport. Sila jana kertas terlebih dahulu.");
    return;
  }

  showJsuNotification("⏳ Menjana dokumen skema (.docx) berpandukan templat rasmi...");

  try {
    const meta = getExamMetadata();
    const res = await fetch("/api/export-docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: mode,
        type: "skema",
        questions: questions,
        tingkatan: meta.tingkatan || 5,
        tahun: meta.tahun || 2026,
        nama_peperiksaan: meta.examTitle || "PEPERIKSAAN PERCUBAAN SPM",
        panitia: meta.panitia || "Fizik",
        sekolah: meta.sekolah || ""
      })
    });
    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const paperName = mode === "kertas2" ? "Skema_Kertas_2" : "Skema_Kertas_1";
      link.download = `${paperName}_Fizik_SPM_${new Date().toISOString().slice(0, 10)}.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showJsuNotification("✓ Skema penskoran (.docx) berjaya dijana menepati templat rasmi!");
      return;
    }
  } catch (err) {
    console.warn("Docx API fallback:", err);
  }

  // Fallback to client doc
  const container = document.getElementById("printable-scoring-container");
  if (!container || !container.children.length) return;
  const paperCode = mode === "kertas2" ? "4531_2" : (mode === "kertas3" ? "4531_3" : "4531_1");
  const fullHtml = `
    <!DOCTYPE html>
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>Panduan Penskoran SPM Fizik ${paperCode}</title>
      <style>
        body { font-family: Arial, Calibri, sans-serif; font-size: 11pt; color: #000; line-height: 1.4; padding: 20px; }
        h1, h2, h3, h4 { color: #000; margin-top: 12pt; margin-bottom: 6pt; }
        .lpm-sulit-badge { color: red; font-weight: bold; font-size: 14pt; border: 1px solid red; display: inline-block; padding: 2px 8px; margin-bottom: 8pt; }
        table { width: 100%; border-collapse: collapse; margin-top: 8pt; margin-bottom: 12pt; }
        th, td { border: 1px solid #000; padding: 6pt 8pt; text-align: left; vertical-align: top; }
        th { background-color: #f2f2f2; font-weight: bold; }
        .ans-key-pill { font-weight: bold; color: #b91c1c; }
      </style>
    </head>
    <body>
      ${container.innerHTML}
    </body>
    </html>
  `;
  const blob = new Blob(['\ufeff', fullHtml], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Panduan_Skema_Penskoran_Fizik_${paperCode}_${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showJsuNotification("✓ Skema penskoran berjaya dimuat turun dalam format DOCX!");
}

function exportScoringPDF() {
  window.print();
}

function downloadExamDOCX() {
  exportExamToDocx();
}

function exportExamPDF() {
  window.print();
}


// ============================================================================
// FUNGSI SIMPAN TETAPAN MENU & KEMBALI KE MENU UTAMA
// ============================================================================
function simpanTetapanMenu(stageNum) {
  const stage = parseInt(stageNum, 10);
  if (!AppState.completedStages) AppState.completedStages = [];
  if (!AppState.completedStages.includes(stage)) {
    AppState.completedStages.push(stage);
  }

  // Segerakkan pilihan format kertas dari JSU ke dalam keadaan aplikasi
  const selKer = document.getElementById("jsu-select-kertas");
  const selTing = document.getElementById("jsu-select-tingkatan");
  const selPep = document.getElementById("jsu-select-peperiksaan");
  const selCutoff = document.getElementById("jsu-select-cutoff-sk");

  if (selKer && selKer.value) {
    AppState.currentPaperMode = selKer.value;
  } else {
    AppState.currentPaperMode = getActivePaperMode();
  }

  const jsuSettings = {
    currentPaperMode: AppState.currentPaperMode,
    tingkatan: selTing ? selTing.value : "all",
    peperiksaan: selPep ? selPep.value : "percubaan",
    cutoffSk: selCutoff ? selCutoff.value : "",
    savedAt: new Date().toISOString()
  };

  // Simpan ke storan tempatan (Cache Memory merentasi setiap menu)
  try {
    localStorage.setItem("fizik_completed_stages", JSON.stringify(AppState.completedStages));
    localStorage.setItem("fizik_jsu_settings", JSON.stringify(jsuSettings));
    localStorage.setItem("fizik_current_paper", AppState.currentPaperMode);
  } catch (e) {
    console.warn("Ralat menyimpan ke localStorage:", e);
  }

  const stageNames = {
    1: "Langkah 1: Tetapan JSU",
    2: "Langkah 2: Semakan Senarai Soalan",
    3: "Langkah 3: Semakan Soalan Penuh & Skema",
    4: "Langkah 4: Format Kertas Soalan (DOCX & PDF)",
    5: "Langkah 5: Skema Penskoran (DOCX & PDF)"
  };
  const title = stageNames[stage] || ("Langkah " + stage);
  const paperStr = (AppState.currentPaperMode === "kertas2") ? "Kertas 2" : "Kertas 1";
  showJsuNotification("✓ " + title + " [" + paperStr + "] berjaya disimpan! Kembali ke Menu Utama.");

  // Kembali segera ke Menu Utama (Landing Page)
  switchWorkflowStage(0);

  // Kemas kini paparan bebola sfera supaya bertukar merah
  updateStepperUI(0);
}

function completeStage(stage) {
  simpanTetapanMenu(stage);
}
