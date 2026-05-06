/* ══════════════════════════════════════════════
   英単語トレーニング – app.js
   全機能: 単語一覧 / フラッシュカード / 4択クイズ / タイムアタック
   進捗保存: localStorage
══════════════════════════════════════════════ */

// ─── Mode (4 modes: 高校受験 / 中学定期試験 / 慣用句 / ことわざ) ────
const MODE_KEY = "eitango_mode";
let MODE = localStorage.getItem(MODE_KEY) || "high"; // "high" | "jhs" | "idiom" | "proverb"

function dataForMode(m) {
  if (m === "jhs")     return typeof WORDS_JHS  !== "undefined" ? WORDS_JHS  : [];
  if (m === "idiom")   return typeof IDIOMS    !== "undefined" ? IDIOMS    : [];
  if (m === "proverb") return typeof PROVERBS  !== "undefined" ? PROVERBS  : [];
  return WORDS;
}
let WORDS_ACTIVE = dataForMode(MODE);

const MODE_CONFIG = {
  high: {
    subtitle: "難関私立高校入試レベル",
    sectionTitle: "品詞別",
    progressKey: "eitango_progress_v1",
    logo: "英",
    promptLabel: "英 → 日",
    reverseLabel: "日 → 英",
    speakLang: "en-US",
    headerClass: "",
    unit: "語",
  },
  jhs: {
    subtitle: "中学定期試験 (NEW HORIZON)",
    sectionTitle: "学年・Unit別",
    progressKey: "eitango_progress_jhs_v1",
    logo: "中",
    promptLabel: "英 → 日",
    reverseLabel: "日 → 英",
    speakLang: "en-US",
    headerClass: "jhs",
    unit: "語",
  },
  idiom: {
    subtitle: "慣用句",
    sectionTitle: "部位・分類別",
    progressKey: "eitango_progress_idiom_v1",
    logo: "慣",
    promptLabel: "慣用句 → 意味",
    reverseLabel: "意味 → 慣用句",
    speakLang: "ja-JP",
    headerClass: "idiom",
    unit: "句",
  },
  proverb: {
    subtitle: "ことわざ",
    sectionTitle: "五十音別",
    progressKey: "eitango_progress_proverb_v1",
    logo: "諺",
    promptLabel: "ことわざ → 意味",
    reverseLabel: "意味 → ことわざ",
    speakLang: "ja-JP",
    headerClass: "proverb",
    unit: "句",
  },
};

// ─── Progress store ───────────────────────────
const Store = (() => {
  let data = {};

  function currentKey() { return MODE_CONFIG[MODE].progressKey; }
  function load() {
    try { data = JSON.parse(localStorage.getItem(currentKey())) || {}; } catch { data = {}; }
  }
  function save() {
    localStorage.setItem(currentKey(), JSON.stringify(data));
  }
  function get(english) {
    return data[english] || { correct: 0, incorrect: 0 };
  }
  function record(english, correct) {
    if (!data[english]) data[english] = { correct: 0, incorrect: 0 };
    correct ? data[english].correct++ : data[english].incorrect++;
    save();
  }
  function reset() { data = {}; save(); }
  function studiedCount() {
    return Object.values(data).filter(d => (d.correct + d.incorrect) > 0).length;
  }
  function overallAccuracy() {
    let c = 0, t = 0;
    Object.values(data).forEach(d => { c += d.correct; t += d.correct + d.incorrect; });
    return t > 0 ? Math.round(c / t * 100) : 0;
  }
  function weakWords() {
    return WORDS_ACTIVE.filter(w => {
      const d = get(w.english);
      const total = d.correct + d.incorrect;
      return total >= 3 && (d.correct / total) < 0.6;
    }).sort((a, b) => {
      const da = get(a.english), db = get(b.english);
      const ta = da.correct + da.incorrect, tb = db.correct + db.incorrect;
      return (da.correct / ta) - (db.correct / tb);
    });
  }
  load();
  return { get, record, reset, studiedCount, overallAccuracy, weakWords, reload: load };
})();

// ─── Speech ──────────────────────────────────
function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = MODE_CONFIG[MODE].speakLang || "en-US";
  utt.rate = 0.9;
  window.speechSynthesis.speak(utt);
}

// ─── Utility ─────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function $(id) { return document.getElementById(id); }

/* Pick `n` plausible distractors for the correct word.
   Strategy: prefer same category, then nearby length on the displayed side,
   then fall back to any non-duplicate. */
function pickDistractors(correct, n, isEnToJa, usedLabels) {
  const pool = [];
  const refLen = (isEnToJa ? correct.japanese : correct.english).length;
  const same = WORDS_ACTIVE.filter(x =>
    x.category === correct.category && x.english !== correct.english
  );
  const byCloseness = same
    .map(x => ({ x, d: Math.abs((isEnToJa ? x.japanese : x.english).length - refLen) }))
    .sort((a, b) => a.d - b.d || Math.random() - 0.5);

  for (const { x } of byCloseness) {
    const label = isEnToJa ? x.japanese : x.english;
    if (!label || usedLabels.has(label)) continue;
    usedLabels.add(label);
    pool.push(x);
    if (pool.length >= n) break;
  }
  if (pool.length < n) {
    for (const x of shuffle(WORDS_ACTIVE)) {
      if (x.english === correct.english) continue;
      const label = isEnToJa ? x.japanese : x.english;
      if (!label || usedLabels.has(label)) continue;
      usedLabels.add(label);
      pool.push(x);
      if (pool.length >= n) break;
    }
  }
  return pool;
}
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0, 0);
}

// ─── Categories ──────────────────────────────
const CAT_ICONS_HIGH = {
  "動詞": "🏃", "名詞": "📦", "形容詞": "🌈",
  "副詞": "⚡", "熟語": "🔗"
};
// 慣用句の大カテゴリ（リスト先頭に表示）
const IDIOM_SUPER_CATS = [
  "からだに関する慣用句",
  "動植物に関する慣用句",
  "その他の慣用句",
];
function isIdiomSuper(cat) { return MODE === "idiom" && IDIOM_SUPER_CATS.includes(cat); }
function wordsInCategory(cat) {
  if (isIdiomSuper(cat)) return WORDS_ACTIVE.filter(w => w.superCategory === cat);
  return WORDS_ACTIVE.filter(w => w.category === cat);
}
function catIcon(cat) {
  if (MODE === "jhs") {
    if (cat.startsWith("中1")) return "📕";
    if (cat.startsWith("中2")) return "📗";
    if (cat.startsWith("中3")) return "📘";
    return "📖";
  }
  if (MODE === "idiom") {
    const SUPER_ICON = {
      "からだに関する慣用句": "🧍",
      "動植物に関する慣用句": "🌿",
      "その他の慣用句": "📚",
    };
    if (SUPER_ICON[cat]) return SUPER_ICON[cat];
    const BODY_ICON = {
      "目":"👁","耳":"👂","口":"👄","鼻":"👃","手":"✋","足":"🦶",
      "顔":"😀","頭":"🧠","肩":"💪","腕":"💪","腹":"🤰","身":"🧍",
      "胸":"💞","肝":"🫀","歯":"🦷","首":"💆","顎":"😬","頬":"😊",
      "尻":"🍑","腰":"🕺","骨":"🦴","まゆ":"🤨","へそ":"🪀","爪":"💅",
      "脇":"🤷","膝":"🦵","喉":"🗣","舌":"👅",
      "動物":"🐾","草花":"🌸","言葉":"💬",
    };
    if (BODY_ICON[cat]) return BODY_ICON[cat];
    if (cat.startsWith("その他")) return "🗂";
    return "🎭";
  }
  if (MODE === "proverb") {
    const ICONS = {"あ行":"🅰️","か行":"🅱️","さ行":"🆎","た行":"🆑","な行":"🆒",
                   "は行":"🆓","ま行":"🆔","や行":"🆕","ら行":"🆖","わ行":"🆗"};
    return ICONS[cat] || "🦊";
  }
  return CAT_ICONS_HIGH[cat] || "📖";
}
function gradeOrder(g) {
  if (g === "中1") return 1;
  if (g === "中2") return 2;
  if (g === "中3") return 3;
  return 99;
}
function unitOrder(u) {
  // Unit0..Unit10 first (numeric), then Let's Read 1..3
  const m1 = u.match(/^Unit(\d+)$/);
  if (m1) return [0, parseInt(m1[1], 10)];
  const m2 = u.match(/^Let's Read\s*(\d+)$/);
  if (m2) return [1, parseInt(m2[1], 10)];
  return [2, u];
}
function getCategories() {
  const cats = [...new Set(WORDS_ACTIVE.map(w => w.category))];
  if (MODE === "jhs") {
    return cats.sort((a, b) => {
      const [ga, ...ra] = a.split(" ");
      const [gb, ...rb] = b.split(" ");
      const go = gradeOrder(ga) - gradeOrder(gb);
      if (go !== 0) return go;
      const [ka, na] = unitOrder(ra.join(" "));
      const [kb, nb] = unitOrder(rb.join(" "));
      if (ka !== kb) return ka - kb;
      if (typeof na === "number" && typeof nb === "number") return na - nb;
      return String(na).localeCompare(String(nb));
    });
  }
  if (MODE === "idiom") {
    // 大カテゴリ (super) を先頭に、続いて細目 (body parts → misc → その他五十音)
    const BODY = ["目","耳","口","鼻","手","足","顔","頭","肩","腕","胸","腹",
                  "身","肝","歯","首","顎","頬","尻","腰","骨","まゆ","へそ",
                  "爪","脇","膝","喉","舌"];
    const MISC = ["動物","草花","言葉"];
    const SONO = ["その他あ行","その他か行","その他さ行","その他た行","その他な行",
                  "その他は行","その他ま行","その他や行","その他わ行"];
    const fineSorted = cats.slice().sort((a, b) => {
      function rank(c) {
        let i = BODY.indexOf(c);   if (i >= 0) return [0, i];
        i = MISC.indexOf(c);       if (i >= 0) return [1, i];
        i = SONO.indexOf(c);       if (i >= 0) return [2, i];
        return [3, c];
      }
      const [ka, na] = rank(a), [kb, nb] = rank(b);
      if (ka !== kb) return ka - kb;
      return typeof na === "number" ? na - nb : String(na).localeCompare(String(nb));
    });
    return [...IDIOM_SUPER_CATS, ...fineSorted];
  }
  if (MODE === "proverb") {
    const ORDER = ["あ行","か行","さ行","た行","な行","は行","ま行","や行","ら行","わ行"];
    return cats.sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
  }
  return cats.sort();
}

// ─── App State ───────────────────────────────
let fcWords = [], fcIdx = 0, fcFlipped = false, fcIsEnToJa = true, fcCategory = null;
let quizWords = [], quizIdx = 0, quizCorrect = 0, quizWrong = [];
let quizIsEnToJa = true, quizAnswered = false, quizCategory = null;
let taWords = [], taTimeLeft = 60, taScore = 0, taCombo = 0, taMaxCombo = 0;
let taTimer = null, taAnswered = false, taWrong = [], taIsEnToJa = true;
let taCategory = null, taPendingRecords = [];
let unitMenuCategory = null;

// ══════════════════════════════════════════════
const App = {

  // ── HOME ──────────────────────────────────
  goHome() {
    if (taTimer) {
      clearInterval(taTimer); taTimer = null;
      taPendingRecords = []; // discard if user navigated away mid-game
    }
    $("ta-cancel-btn").style.display = "none";
    this._renderHome();
    showScreen("screen-home");
  },

  _renderHome() {
    // Mode UI
    const cfg = MODE_CONFIG[MODE];
    $("home-sub").textContent = cfg.subtitle;
    $("home-logo").textContent = cfg.logo;
    $("category-section-title").textContent = cfg.sectionTitle;
    const header = document.querySelector(".home-header");
    header.classList.remove("jhs", "idiom", "proverb");
    if (cfg.headerClass) header.classList.add(cfg.headerClass);
    document.body.classList.remove("mode-high", "mode-jhs", "mode-idiom", "mode-proverb");
    document.body.classList.add(`mode-${MODE}`);
    const modes = ["high", "jhs", "idiom", "proverb"];
    for (const m of modes) {
      const btn = $(`mode-btn-${m}`);
      btn.classList.toggle("active", MODE === m);
      btn.classList.remove("jhs", "idiom", "proverb");
      if (MODE === m && MODE_CONFIG[m].headerClass) btn.classList.add(MODE_CONFIG[m].headerClass);
    }

    $("stat-total").textContent = WORDS_ACTIVE.length;
    $("stat-studied").textContent = Store.studiedCount();
    $("stat-acc").textContent = Store.overallAccuracy() + "%";

    const grid = $("category-grid");
    grid.innerHTML = "";
    getCategories().forEach(cat => {
      const count = wordsInCategory(cat).length;
      const icon = catIcon(cat);
      const isSuper = isIdiomSuper(cat);
      grid.innerHTML += `
        <div class="cat-card${isSuper ? " cat-card-super" : ""}" onclick="App._openCategoryMenu('${cat.replace(/'/g, "\\'")}')">
          <div class="cat-icon">${icon}</div>
          <div class="cat-name">${cat}</div>
          <div class="cat-count">${count}${cfg.unit}</div>
        </div>`;
    });

    const weak = Store.weakWords();
    if (weak.length > 0) {
      $("weak-section").style.display = "block";
      $("weak-count-label").textContent = `苦手 ${weak.length}${cfg.unit}`;
    } else {
      $("weak-section").style.display = "none";
    }
  },

  switchMode(mode) {
    if (mode === MODE) return;
    MODE = mode;
    localStorage.setItem(MODE_KEY, MODE);
    WORDS_ACTIVE = dataForMode(MODE);
    Store.reload();
    this.goHome();
  },

  _openCategoryMenu(cat) {
    unitMenuCategory = cat;
    $("unit-menu-title").textContent = cat;
    const cfg = MODE_CONFIG[MODE];
    const count = wordsInCategory(cat).length;
    $("unit-menu-count").textContent = `${count}${cfg.unit}`;
    $("unit-menu-fc1-sub").textContent = cfg.promptLabel;
    $("unit-menu-fc2-sub").textContent = cfg.reverseLabel;
    showScreen("screen-unit-menu");
  },

  openWordListForCategory() {
    const cat = unitMenuCategory;
    if (!cat) return this.openWordList();
    $("wordlist-title").textContent = cat;
    const sel = $("cat-filter");
    sel.innerHTML = '<option value="">すべて</option>';
    getCategories().forEach(c => sel.innerHTML += `<option value="${c}"${c === cat ? " selected" : ""}>${c}</option>`);
    $("search-input").value = "";
    this._renderWordList(wordsInCategory(cat));
    showScreen("screen-wordlist");
  },

  openFlashcardEnJa() { this.openFlashcard(unitMenuCategory, "en2ja"); },
  openFlashcardJaEn() { this.openFlashcard(unitMenuCategory, "ja2en"); },
  openQuizForCategory() { this.openQuiz(unitMenuCategory); },
  openTimeAttackForCategory() { this.openTimeAttack(unitMenuCategory); },

  // ── WORD LIST ────────────────────────────
  openWordList() {
    $("wordlist-title").textContent = "単語一覧";
    const sel = $("cat-filter");
    sel.innerHTML = '<option value="">すべて</option>';
    getCategories().forEach(c => sel.innerHTML += `<option value="${c}">${c}</option>`);
    $("search-input").value = "";
    this._renderWordList(WORDS_ACTIVE);
    showScreen("screen-wordlist");
  },

  filterWords() {
    const q = $("search-input").value.toLowerCase();
    const cat = $("cat-filter").value;
    const filtered = WORDS_ACTIVE.filter(w =>
      (!cat || w.category === cat) &&
      (!q || w.english.toLowerCase().includes(q) || w.japanese.includes(q))
    );
    this._renderWordList(filtered);
  },

  _renderWordList(words) {
    const c = $("word-list-container");
    if (words.length === 0) { c.innerHTML = "<p style='padding:20px;text-align:center;color:#94A3B8'>該当する単語がありません</p>"; return; }
    c.innerHTML = words.map((w, i) => {
      const d = Store.get(w.english);
      const total = d.correct + d.incorrect;
      const accHtml = total > 0
        ? `<span class="wr-acc ${d.correct/total >= 0.7 ? 'acc-good' : 'acc-bad'}">${Math.round(d.correct/total*100)}%</span>`
        : "";
      const exHtml = w.example
        ? `<span class="wr-chevron" id="ch-${i}">▼</span>`
        : "";
      const exBlock = w.example
        ? `<div class="wr-example" id="ex-${i}">
             <div class="wr-ex-en">💬 ${w.example}</div>
             <div class="wr-ex-ja">→ ${w.exampleJapanese}</div>
           </div>`
        : "";
      return `
        <div class="word-row" onclick="App._toggleExample(${i})">
          <div class="wr-top">
            <div class="wr-left">
              <div class="wr-en">${w.english}</div>
              <div class="wr-ja">${w.japanese}</div>
            </div>
            <div class="wr-right">
              <span class="wr-badge">${w.category}</span>
              ${accHtml}
              ${exHtml}
            </div>
          </div>
          ${exBlock}
        </div>`;
    }).join("");
  },

  _toggleExample(i) {
    const ex = $(`ex-${i}`);
    const ch = $(`ch-${i}`);
    if (!ex) return;
    const open = ex.classList.toggle("open");
    if (ch) ch.textContent = open ? "▲" : "▼";
  },

  // ── FLASH CARD ───────────────────────────
  openFlashcard(category, mode) {
    fcCategory = category || null;
    fcIsEnToJa = mode !== "ja2en";
    fcWords = shuffle(category ? wordsInCategory(category) : WORDS_ACTIVE);
    fcIdx = 0; fcFlipped = false;
    this._updateFcLabels();
    this._renderFC();
    showScreen("screen-flashcard");
  },

  _updateFcLabels() {
    const cfg = MODE_CONFIG[MODE];
    $("fc-mode-en2ja").textContent = cfg.promptLabel;
    $("fc-mode-ja2en").textContent = cfg.reverseLabel;
    $("fc-mode-en2ja").classList.toggle("active", fcIsEnToJa);
    $("fc-mode-ja2en").classList.toggle("active", !fcIsEnToJa);
    const label = fcIsEnToJa ? cfg.promptLabel : cfg.reverseLabel;
    const titleSuf = `（${label.replace(/\s*→\s*/, "→")}）`;
    $("fc-title").textContent = fcCategory ? `${fcCategory}${titleSuf}` : `フラッシュカード${titleSuf}`;
  },

  setFcMode(toEnJa) {
    if (fcIsEnToJa === toEnJa) return;
    fcIsEnToJa = toEnJa;
    this._updateFcLabels();
    this._renderFC();
  },

  _renderFC() {
    const w = fcWords[fcIdx];
    if (!w) return;
    $("fc-front-cat").textContent = w.category;
    $("fc-back-cat").textContent = w.category;
    if (fcIsEnToJa) {
      $("fc-front-word").textContent = w.english;
      $("fc-back-word").textContent = w.japanese;
      $("fc-yomi").textContent = w.yomi || "";
    } else {
      $("fc-front-word").textContent = w.japanese;
      $("fc-back-word").textContent = w.english;
      $("fc-yomi").textContent = w.yomi || "";
    }
    $("fc-example").textContent = w.example || "";
    $("fc-example-ja").textContent = w.exampleJapanese || "";
    $("fc-counter").textContent = `${fcIdx + 1} / ${fcWords.length}`;
    const pct = (fcIdx / fcWords.length * 100).toFixed(1);
    $("fc-progress-fill").style.width = pct + "%";
    $("fc-card").classList.remove("flipped");
    fcFlipped = false;
  },

  flipCard() {
    fcFlipped = !fcFlipped;
    $("fc-card").classList.toggle("flipped", fcFlipped);
    if (fcFlipped && fcWords[fcIdx]) speak(fcWords[fcIdx].english);
  },

  fcNext() {
    if (fcIdx < fcWords.length - 1) { fcIdx++; this._renderFC(); }
  },
  fcPrev() {
    if (fcIdx > 0) { fcIdx--; this._renderFC(); }
  },
  fcRecord(correct) {
    if (fcWords[fcIdx]) Store.record(fcWords[fcIdx].english, correct);
    this.fcNext();
  },
  speakCurrent() {
    if (fcWords[fcIdx]) speak(fcWords[fcIdx].english);
  },

  // ── QUIZ ─────────────────────────────────
  openQuiz(category) {
    quizCategory = category;
    quizIsEnToJa = true;
    quizWrong = [];
    quizCorrect = 0;
    let pool = category === "weak"
      ? Store.weakWords()
      : (category ? wordsInCategory(category) : WORDS_ACTIVE);
    if (pool.length < 4) {
      alert("4択クイズには4件以上の語彙が必要です。");
      this.goHome();
      return;
    }
    quizWords = shuffle(pool).slice(0, 20);
    quizIdx = 0;
    this._updateQuizModeLabel();
    this._renderQuizQuestion();
    showScreen("screen-quiz");
  },

  _updateQuizModeLabel() {
    const cfg = MODE_CONFIG[MODE];
    $("quiz-mode-en2ja").textContent = cfg.promptLabel;
    $("quiz-mode-ja2en").textContent = cfg.reverseLabel;
    $("quiz-mode-en2ja").classList.toggle("active", quizIsEnToJa);
    $("quiz-mode-ja2en").classList.toggle("active", !quizIsEnToJa);
  },

  setQuizMode(toEnJa) {
    if (quizIsEnToJa === toEnJa) return;
    quizIsEnToJa = toEnJa;
    this._updateQuizModeLabel();
    // Re-render current question in new direction (only if not already answered)
    if (!quizAnswered && quizWords.length > 0 && quizIdx < quizWords.length) {
      this._renderQuizQuestion();
    }
  },

  _renderQuizQuestion() {
    quizAnswered = false;
    const w = quizWords[quizIdx];
    if (!w) return;
    $("quiz-counter").textContent = `${quizIdx + 1} / ${quizWords.length}`;
    const pct = (quizIdx / quizWords.length * 100).toFixed(1);
    $("quiz-progress-fill").style.width = pct + "%";
    $("quiz-question").textContent = quizIsEnToJa ? w.english : w.japanese;
    $("quiz-example").style.display = "none";

    // 選択肢: まず同じカテゴリから「紛らわしい」候補を選び、足りなければ全体から補充
    const usedLabels = new Set([quizIsEnToJa ? w.japanese : w.english]);
    const pool = pickDistractors(w, 3, quizIsEnToJa, usedLabels);
    let opts = shuffle(pool.concat(w));
    const c = $("quiz-choices");
    c.innerHTML = opts.map(opt => {
      const label = quizIsEnToJa ? opt.japanese : opt.english;
      return `<button class="choice-btn" onclick="App._quizAnswer('${opt.english.replace(/'/g, "\\'")}')">${label}</button>`;
    }).join("");
  },

  speakQuizWord() {
    const w = quizWords[quizIdx];
    if (w) speak(w.english);
  },

  _quizAnswer(english) {
    if (quizAnswered) return;
    quizAnswered = true;
    const correct = quizWords[quizIdx];
    const isRight = english === correct.english;
    Store.record(correct.english, isRight);
    if (isRight) quizCorrect++;
    else quizWrong.push(correct);

    // ボタンに色付け
    document.querySelectorAll(".choice-btn").forEach(btn => {
      const label = btn.textContent;
      const isCorrectLabel = quizIsEnToJa ? label === correct.japanese : label === correct.english;
      const isSelected = quizIsEnToJa ? label === WORDS_ACTIVE.find(w => w.english === english)?.japanese
                                       : label === english;
      if (isCorrectLabel) btn.classList.add("correct");
      else if (!isRight && btn.textContent === (quizIsEnToJa
        ? WORDS_ACTIVE.find(w => w.english === english)?.japanese
        : english)) btn.classList.add("wrong");
      else if (!isCorrectLabel) btn.classList.add("dim");
      btn.disabled = true;
    });

    // 例文表示
    if (correct.example) {
      $("qex-en").textContent = "💬 " + correct.example;
      $("qex-ja").textContent = "→ " + correct.exampleJapanese;
      $("quiz-example").style.display = "block";
    }

    // 次の問題
    setTimeout(() => {
      quizIdx++;
      if (quizIdx >= quizWords.length) this._showQuizResult();
      else this._renderQuizQuestion();
    }, isRight ? 800 : 1400);
  },

  _showQuizResult() {
    const total = quizWords.length;
    $("result-score-num").textContent = quizCorrect;
    $("result-score-denom").textContent = "/" + total;
    const pct = Math.round(quizCorrect / total * 100);
    $("result-msg").textContent = pct >= 90 ? "🎉 素晴らしい！" : pct >= 70 ? "👍 よくできました" : pct >= 50 ? "📖 もう少し頑張ろう" : "💪 復習しましょう";
    const ws = $("result-wrong-section");
    if (quizWrong.length > 0) {
      ws.innerHTML = `<div class="wrong-title">✗ ミスした単語（${quizWrong.length}語）</div>` +
        quizWrong.map(w => `
          <div class="wrong-row">
            <div class="wrong-en">${w.english}</div>
            <div class="wrong-ja">${w.japanese}</div>
            ${w.example ? `<div class="wrong-ex">💬 ${w.example}</div>` : ""}
          </div>`).join("");
    } else {
      ws.innerHTML = '<p style="text-align:center;color:#10B981;font-weight:700">✓ 全問正解！</p>';
    }
    showScreen("screen-quiz-result");
  },

  retryQuiz() { this.openQuiz(quizCategory); },

  // ── TIME ATTACK ──────────────────────────
  openTimeAttack(category) {
    taCategory = category || null;
    const pool = taCategory ? wordsInCategory(taCategory) : WORDS_ACTIVE;
    if (pool.length < 4) {
      alert("このユニットは語数が少なすぎてタイムアタックを開けません（4語以上必要）。");
      return;
    }
    taIsEnToJa = Math.random() > 0.5;
    taWrong = [];
    taPendingRecords = [];
    taScore = 0; taCombo = 0; taMaxCombo = 0;
    taTimeLeft = 60;
    showScreen("screen-timeattack");
    $("ta-countdown-overlay").style.display = "flex";
    $("ta-game-area").style.display = "none";
    $("ta-cancel-btn").style.display = "none";
    this._taCountdown(3);
  },

  cancelTimeAttack() {
    if (!confirm("タイムアタックを中断しますか？\nこの回の記録は残りません。")) return;
    if (taTimer) { clearInterval(taTimer); taTimer = null; }
    taPendingRecords = [];
    $("ta-cancel-btn").style.display = "none";
    this.goHome();
  },

  _taCountdown(n) {
    $("ta-countdown-num").textContent = n;
    $("ta-countdown-num").style.animation = "none";
    void $("ta-countdown-num").offsetWidth;
    $("ta-countdown-num").style.animation = "ta-pop .4s ease";
    if (n > 0) setTimeout(() => this._taCountdown(n - 1), 800);
    else {
      setTimeout(() => {
        $("ta-countdown-overlay").style.display = "none";
        $("ta-game-area").style.display = "flex";
        $("ta-game-area").style.flexDirection = "column";
        $("ta-game-area").style.height = "100%";
        $("ta-cancel-btn").style.display = "block";
        this._taStart();
      }, 400);
    }
  },

  _taStart() {
    taWords = shuffle(WORDS_ACTIVE);
    taAnswered = false;
    $("ta-score").textContent = "0";
    $("ta-combo").textContent = "×1";
    this._taNextQuestion();
    taTimer = setInterval(() => {
      taTimeLeft -= 0.1;
      if (taTimeLeft <= 0) {
        taTimeLeft = 0;
        clearInterval(taTimer); taTimer = null;
        this._taShowResult();
      }
      this._taUpdateTimer();
    }, 100);
  },

  _taUpdateTimer() {
    const secs = Math.ceil(taTimeLeft);
    $("ta-time-num").textContent = secs;
    const ratio = taTimeLeft / 60;
    const circumference = 213.6;
    $("ta-ring").style.strokeDashoffset = circumference * (1 - ratio);
    $("ta-ring").style.stroke = taTimeLeft > 20 ? "#10B981" : taTimeLeft > 10 ? "#F59E0B" : "#EF4444";
    $("ta-time-num").style.color = taTimeLeft <= 10 ? "#EF4444" : "#1E293B";
  },

  _taNextQuestion() {
    taAnswered = false;
    const sourcePool = taCategory ? wordsInCategory(taCategory) : WORDS_ACTIVE;
    const idx = Math.floor(Math.random() * sourcePool.length);
    const correct = sourcePool[idx];
    const usedLabels = new Set([taIsEnToJa ? correct.japanese : correct.english]);
    const pool = pickDistractors(correct, 3, taIsEnToJa, usedLabels);
    const opts = shuffle(pool.concat(correct));
    taWords[0] = correct;  // reuse slot

    $("ta-question").textContent = taIsEnToJa ? correct.english : correct.japanese;

    const c = $("ta-choices");
    c.innerHTML = opts.map(opt => {
      const label = taIsEnToJa ? opt.japanese : opt.english;
      return `<button class="ta-choice-btn" onclick="App._taAnswer('${opt.english.replace(/'/g, "\\'")}')">${label}</button>`;
    }).join("");
  },

  _taAnswer(english) {
    if (taAnswered || !taTimer) return;
    taAnswered = true;
    const correct = WORDS_ACTIVE.find(w => w.english === taWords[0].english);
    const isRight = english === correct.english;
    taPendingRecords.push([correct.english, isRight]);

    // 色付け
    document.querySelectorAll(".ta-choice-btn").forEach(btn => {
      const label = btn.textContent;
      const isCorrectLabel = taIsEnToJa ? label === correct.japanese : label === correct.english;
      if (isCorrectLabel) btn.classList.add("correct");
      else if (!isRight && label === (taIsEnToJa
        ? WORDS_ACTIVE.find(w => w.english === english)?.japanese : english)) btn.classList.add("wrong");
      else btn.classList.add("dim");
      btn.disabled = true;
    });

    if (isRight) {
      taScore++; taCombo++;
      if (taCombo > taMaxCombo) taMaxCombo = taCombo;
      $("ta-score").textContent = taScore;
      $("ta-combo").textContent = "×" + taCombo;
      setTimeout(() => { if (taTimer) this._taNextQuestion(); }, 350);
    } else {
      taCombo = 0;
      $("ta-combo").textContent = "×1";
      taWrong.push(correct);
      taTimeLeft = Math.max(0, taTimeLeft - 5);
      $("ta-penalty").style.display = "block";
      setTimeout(() => { $("ta-penalty").style.display = "none"; }, 600);
      setTimeout(() => { if (taTimer) this._taNextQuestion(); }, 700);
    }
  },

  _taShowResult() {
    clearInterval(taTimer); taTimer = null;
    $("ta-cancel-btn").style.display = "none";
    // Commit buffered records (skipped on cancel)
    for (const [eng, ok] of taPendingRecords) Store.record(eng, ok);
    taPendingRecords = [];
    const rank = taScore >= 20 ? "S" : taScore >= 15 ? "A" : taScore >= 10 ? "B" : taScore >= 5 ? "C" : "D";
    const rankColors = { S:"#F59E0B", A:"#10B981", B:"#3B82F6", C:"#A855F7", D:"#6B7280" };
    const badge = $("ta-rank-badge");
    badge.textContent = rank;
    badge.style.background = `linear-gradient(135deg, ${rankColors[rank]}, ${rankColors[rank]}99)`;
    $("ta-result-score").textContent = taScore;
    $("ta-result-combo").textContent = "×" + taMaxCombo;
    const ws = $("ta-wrong-section");
    if (taWrong.length > 0) {
      ws.innerHTML = `<div class="wrong-title">✗ ミスした単語（${taWrong.length}語）</div>` +
        [...new Map(taWrong.map(w => [w.english, w])).values()].map(w => `
          <div class="wrong-row">
            <div class="wrong-en">${w.english}</div>
            <div class="wrong-ja">${w.japanese}</div>
            ${w.example ? `<div class="wrong-ex">💬 ${w.example}</div>` : ""}
          </div>`).join("");
    } else {
      ws.innerHTML = '<p style="text-align:center;color:#10B981;font-weight:700">✓ ノーミス！</p>';
    }
    showScreen("screen-ta-result");
  },

  retryTimeAttack() { this.openTimeAttack(); },

};  // end App

// ── Init ──────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  App._renderHome();
});
