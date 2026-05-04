/* ══════════════════════════════════════════════
   英単語トレーニング – app.js
   全機能: 単語一覧 / フラッシュカード / 4択クイズ / タイムアタック
   進捗保存: localStorage
══════════════════════════════════════════════ */

// ─── Mode (高校受験 / 中学定期試験) ────────────
const MODE_KEY = "eitango_mode";
let MODE = localStorage.getItem(MODE_KEY) || "high"; // "high" | "jhs"
let WORDS_ACTIVE = (MODE === "jhs" ? (typeof WORDS_JHS !== "undefined" ? WORDS_JHS : []) : WORDS);

const MODE_CONFIG = {
  high: {
    subtitle: "難関私立高校入試レベル",
    sectionTitle: "品詞別",
    progressKey: "eitango_progress_v1",
    logo: "英",
  },
  jhs: {
    subtitle: "中学定期試験 (NEW HORIZON)",
    sectionTitle: "学年・Unit別",
    progressKey: "eitango_progress_jhs_v1",
    logo: "中",
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
  utt.lang = "en-US"; utt.rate = 0.85;
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
function catIcon(cat) {
  if (MODE === "jhs") {
    if (cat.startsWith("中1")) return "📕";
    if (cat.startsWith("中2")) return "📗";
    if (cat.startsWith("中3")) return "📘";
    return "📖";
  }
  return CAT_ICONS_HIGH[cat] || "📖";
}
function gradeOrder(g) {
  if (g === "中1") return 1;
  if (g === "中2") return 2;
  if (g === "中3") return 3;
  return 99;
}
function getCategories() {
  const cats = [...new Set(WORDS_ACTIVE.map(w => w.category))];
  if (MODE === "jhs") {
    return cats.sort((a, b) => {
      const [ga, ...ra] = a.split(" ");
      const [gb, ...rb] = b.split(" ");
      const go = gradeOrder(ga) - gradeOrder(gb);
      if (go !== 0) return go;
      return ra.join(" ").localeCompare(rb.join(" "));
    });
  }
  return cats.sort();
}

// ─── App State ───────────────────────────────
let fcWords = [], fcIdx = 0, fcFlipped = false;
let quizWords = [], quizIdx = 0, quizCorrect = 0, quizWrong = [];
let quizIsEnToJa = true, quizAnswered = false, quizCategory = null;
let taWords = [], taTimeLeft = 60, taScore = 0, taCombo = 0, taMaxCombo = 0;
let taTimer = null, taAnswered = false, taWrong = [], taIsEnToJa = true;

// ══════════════════════════════════════════════
const App = {

  // ── HOME ──────────────────────────────────
  goHome() {
    if (taTimer) { clearInterval(taTimer); taTimer = null; }
    this._renderHome();
    showScreen("screen-home");
  },

  _renderHome() {
    // Mode UI
    const cfg = MODE_CONFIG[MODE];
    $("home-sub").textContent = cfg.subtitle;
    $("home-logo").textContent = cfg.logo;
    $("category-section-title").textContent = cfg.sectionTitle;
    document.querySelector(".home-header").classList.toggle("jhs", MODE === "jhs");
    const btnHigh = $("mode-btn-high"), btnJhs = $("mode-btn-jhs");
    btnHigh.classList.toggle("active", MODE === "high");
    btnJhs.classList.toggle("active", MODE === "jhs");
    btnJhs.classList.toggle("jhs", MODE === "jhs");

    $("stat-total").textContent = WORDS_ACTIVE.length;
    $("stat-studied").textContent = Store.studiedCount();
    $("stat-acc").textContent = Store.overallAccuracy() + "%";

    const grid = $("category-grid");
    grid.innerHTML = "";
    getCategories().forEach(cat => {
      const count = WORDS_ACTIVE.filter(w => w.category === cat).length;
      const icon = catIcon(cat);
      grid.innerHTML += `
        <div class="cat-card" onclick="App._openCategoryMenu('${cat.replace(/'/g, "\\'")}')">
          <div class="cat-icon">${icon}</div>
          <div class="cat-name">${cat}</div>
          <div class="cat-count">${count}語</div>
        </div>`;
    });

    const weak = Store.weakWords();
    if (weak.length > 0) {
      $("weak-section").style.display = "block";
      $("weak-count-label").textContent = `苦手 ${weak.length}語`;
    } else {
      $("weak-section").style.display = "none";
    }
  },

  switchMode(mode) {
    if (mode === MODE) return;
    MODE = mode;
    localStorage.setItem(MODE_KEY, MODE);
    WORDS_ACTIVE = (MODE === "jhs" ? (typeof WORDS_JHS !== "undefined" ? WORDS_JHS : []) : WORDS);
    Store.reload();
    this.goHome();
  },

  _openCategoryMenu(cat) {
    const msg = `「${cat}」\n\n📚 単語一覧\n🃏 フラッシュカード\n❓ 4択クイズ`;
    // シンプルなアクション: flashcard or quiz
    const choice = confirm(`「${cat}」でフラッシュカードを開きますか？\n\n[OK] フラッシュカード  [キャンセル] 4択クイズ`);
    if (choice) this.openFlashcard(cat);
    else this.openQuiz(cat);
  },

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
  openFlashcard(category) {
    fcWords = shuffle(category ? WORDS_ACTIVE.filter(w => w.category === category) : WORDS_ACTIVE);
    fcIdx = 0; fcFlipped = false;
    $("fc-title").textContent = category ? `フラッシュカード（${category}）` : "フラッシュカード";
    this._renderFC();
    showScreen("screen-flashcard");
  },

  _renderFC() {
    const w = fcWords[fcIdx];
    if (!w) return;
    const d = Store.get(w.english);
    $("fc-front-cat").textContent = w.category;
    $("fc-front-word").textContent = w.english;
    $("fc-back-cat").textContent = w.category;
    $("fc-back-word").textContent = w.japanese;
    $("fc-yomi").textContent = w.yomi || "";
    $("fc-example").textContent = w.example || "";
    $("fc-example-ja").textContent = w.exampleJapanese || "";
    $("fc-counter").textContent = `${fcIdx + 1} / ${fcWords.length}`;
    const pct = (fcIdx / fcWords.length * 100).toFixed(1);
    $("fc-progress-fill").style.width = pct + "%";
    const card = $("fc-card");
    card.classList.remove("flipped");
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
      : (category ? WORDS_ACTIVE.filter(w => w.category === category) : WORDS_ACTIVE);
    quizWords = shuffle(pool).slice(0, 20);
    quizIdx = 0;
    this._renderQuizQuestion();
    showScreen("screen-quiz");
  },

  toggleQuizMode() {
    quizIsEnToJa = !quizIsEnToJa;
    $("quiz-mode-btn").textContent = quizIsEnToJa ? "英→日" : "日→英";
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

    // 選択肢 (dedupe by displayed label so we don't show "人気のある" three times)
    const usedLabels = new Set([quizIsEnToJa ? w.japanese : w.english]);
    const pool = [];
    for (const x of shuffle(WORDS_ACTIVE)) {
      if (x.english === w.english) continue;
      const label = quizIsEnToJa ? x.japanese : x.english;
      if (usedLabels.has(label)) continue;
      usedLabels.add(label);
      pool.push(x);
      if (pool.length >= 3) break;
    }
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
  openTimeAttack() {
    taIsEnToJa = Math.random() > 0.5;
    taWrong = [];
    taScore = 0; taCombo = 0; taMaxCombo = 0;
    taTimeLeft = 60;
    showScreen("screen-timeattack");
    $("ta-countdown-overlay").style.display = "flex";
    $("ta-game-area").style.display = "none";
    this._taCountdown(3);
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
    const idx = Math.floor(Math.random() * WORDS_ACTIVE.length);
    const correct = WORDS_ACTIVE[idx];
    const usedLabels = new Set([taIsEnToJa ? correct.japanese : correct.english]);
    const pool = [];
    for (const x of shuffle(WORDS_ACTIVE)) {
      if (x.english === correct.english) continue;
      const label = taIsEnToJa ? x.japanese : x.english;
      if (usedLabels.has(label)) continue;
      usedLabels.add(label);
      pool.push(x);
      if (pool.length >= 3) break;
    }
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
    Store.record(correct.english, isRight);

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
