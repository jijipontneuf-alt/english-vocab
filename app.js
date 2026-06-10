/* ══════════════════════════════════════════════
   英単語トレーニング – app.js
   全機能: 単語一覧 / フラッシュカード / 4択クイズ / タイムアタック
   進捗保存: localStorage
══════════════════════════════════════════════ */

// ─── Mode (英語 / 国語 / 歴史 / 地理) ─────────────────
const MODE_KEY = "eitango_mode";
let MODE = localStorage.getItem(MODE_KEY) || "high";

function dataForMode(m) {
  if (m === "jhs")     return typeof WORDS_JHS  !== "undefined" ? WORDS_JHS  : [];
  if (m === "idiom")   return typeof IDIOMS    !== "undefined" ? IDIOMS    : [];
  if (m === "proverb") return typeof PROVERBS  !== "undefined" ? PROVERBS  : [];
  if (m === "history") return typeof HISTORY_ITEMS !== "undefined" ? HISTORY_ITEMS : [];
  if (m === "geo-periodic") return typeof GEOGRAPHY_PERIODIC_ITEMS !== "undefined" ? GEOGRAPHY_PERIODIC_ITEMS : [];
  if (m === "geo-national") return typeof GEOGRAPHY_NATIONAL_ITEMS !== "undefined" ? GEOGRAPHY_NATIONAL_ITEMS : [];
  if (m === "geo-aichi-public") return typeof GEOGRAPHY_AICHI_PUBLIC_ITEMS !== "undefined" ? GEOGRAPHY_AICHI_PUBLIC_ITEMS : [];
  if (m === "geo-aichi-private") return typeof GEOGRAPHY_AICHI_PRIVATE_ITEMS !== "undefined" ? GEOGRAPHY_AICHI_PRIVATE_ITEMS : [];
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
    itemName: "単語",
    totalLabel: "総単語数",
    listTitle: "単語一覧",
    listSub: "全カテゴリ",
    flashSub: "全単語",
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
    itemName: "単語",
    totalLabel: "総単語数",
    listTitle: "単語一覧",
    listSub: "全カテゴリ",
    flashSub: "全単語",
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
    itemName: "慣用句",
    totalLabel: "総句数",
    listTitle: "慣用句一覧",
    listSub: "全カテゴリ",
    flashSub: "全慣用句",
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
    itemName: "ことわざ",
    totalLabel: "総句数",
    listTitle: "ことわざ一覧",
    listSub: "全カテゴリ",
    flashSub: "全ことわざ",
  },
  history: {
    subtitle: "中学歴史 年表問題",
    sectionTitle: "出題範囲",
    progressKey: "history_timeline_progress_v1",
    logo: "歴",
    promptLabel: "年 → 出来事",
    reverseLabel: "出来事 → 年",
    speakLang: "ja-JP",
    headerClass: "history",
    unit: "件",
    itemName: "年表項目",
    totalLabel: "対象項目数",
    listTitle: "年表一覧",
    listSub: "選択範囲",
    flashSub: "選択範囲",
  },
  "geo-periodic": {
    subtitle: "社会 地理・定期テスト",
    sectionTitle: "出題範囲",
    progressKey: "geography_periodic_progress_v1",
    logo: "地",
    promptLabel: "問題 → 用語",
    reverseLabel: "用語 → 問題",
    speakLang: "ja-JP",
    headerClass: "geo-periodic",
    unit: "問",
    itemName: "問題",
    totalLabel: "対象問題数",
    listTitle: "地理問題一覧",
    listSub: "選択範囲",
    flashSub: "選択範囲",
  },
  "geo-national": {
    subtitle: "社会 地理・高校受験 全国上位校",
    sectionTitle: "出題範囲",
    progressKey: "geography_national_progress_v1",
    logo: "地",
    promptLabel: "問題 → 用語",
    reverseLabel: "用語 → 問題",
    speakLang: "ja-JP",
    headerClass: "geo-national",
    unit: "問",
    itemName: "問題",
    totalLabel: "対象問題数",
    listTitle: "地理問題一覧",
    listSub: "選択範囲",
    flashSub: "選択範囲",
  },
  "geo-aichi-public": {
    subtitle: "社会 地理・愛知県公立上位",
    sectionTitle: "出題範囲",
    progressKey: "geography_aichi_public_progress_v1",
    logo: "地",
    promptLabel: "問題 → 用語",
    reverseLabel: "用語 → 問題",
    speakLang: "ja-JP",
    headerClass: "geo-aichi-public",
    unit: "問",
    itemName: "問題",
    totalLabel: "対象問題数",
    listTitle: "地理問題一覧",
    listSub: "選択範囲",
    flashSub: "選択範囲",
  },
  "geo-aichi-private": {
    subtitle: "社会 地理・愛知県私立上位",
    sectionTitle: "出題範囲",
    progressKey: "geography_aichi_private_progress_v1",
    logo: "地",
    promptLabel: "問題 → 用語",
    reverseLabel: "用語 → 問題",
    speakLang: "ja-JP",
    headerClass: "geo-aichi-private",
    unit: "問",
    itemName: "問題",
    totalLabel: "対象問題数",
    listTitle: "地理問題一覧",
    listSub: "選択範囲",
    flashSub: "選択範囲",
  },
};

function itemKey(item) {
  return typeof item === "string" ? item : (item.id || item.english);
}

const SCOPED_MODE_CONFIG = {
  history: {
    storageKey: "history_selected_sections_v1",
    groups: () => typeof HISTORY_SECTIONS === "undefined" ? [] : HISTORY_SECTIONS,
    disabledGroups: () => typeof HISTORY_NON_TIMELINE_CHAPTERS === "undefined" ? [] : HISTORY_NON_TIMELINE_CHAPTERS,
  },
  "geo-periodic": {
    storageKey: "geography_periodic_selected_sections_v1",
    groups: () => typeof GEOGRAPHY_PERIODIC_GROUPS === "undefined" ? [] : GEOGRAPHY_PERIODIC_GROUPS,
    disabledGroups: () => [],
  },
  "geo-national": {
    storageKey: "geography_national_selected_sections_v1",
    groups: () => typeof GEOGRAPHY_NATIONAL_GROUPS === "undefined" ? [] : GEOGRAPHY_NATIONAL_GROUPS,
    disabledGroups: () => [],
  },
  "geo-aichi-public": {
    storageKey: "geography_aichi_public_selected_sections_v1",
    groups: () => typeof GEOGRAPHY_AICHI_PUBLIC_GROUPS === "undefined" ? [] : GEOGRAPHY_AICHI_PUBLIC_GROUPS,
    disabledGroups: () => [],
  },
  "geo-aichi-private": {
    storageKey: "geography_aichi_private_selected_sections_v1",
    groups: () => typeof GEOGRAPHY_AICHI_PRIVATE_GROUPS === "undefined" ? [] : GEOGRAPHY_AICHI_PRIVATE_GROUPS,
    disabledGroups: () => [],
  },
};
function isScopedMode(mode = MODE) {
  return Boolean(SCOPED_MODE_CONFIG[mode]);
}
function scopeGroups(mode = MODE) {
  return isScopedMode(mode) ? SCOPED_MODE_CONFIG[mode].groups() : [];
}
function disabledScopeGroups(mode = MODE) {
  return isScopedMode(mode) ? SCOPED_MODE_CONFIG[mode].disabledGroups() : [];
}
function allScopeSectionIds(mode = MODE) {
  return scopeGroups(mode).flatMap(chapter => chapter.sections.map(section => section.id));
}
function loadScopeSelection(mode) {
  const all = allScopeSectionIds(mode);
  try {
    const saved = JSON.parse(localStorage.getItem(SCOPED_MODE_CONFIG[mode].storageKey));
    return Array.isArray(saved) ? saved.filter(id => all.includes(id)) : all;
  } catch {
    return all;
  }
}
const scopedSelections = Object.fromEntries(
  Object.keys(SCOPED_MODE_CONFIG).map(mode => [mode, new Set(loadScopeSelection(mode))])
);
function currentScopeSelection() {
  return scopedSelections[MODE] || new Set();
}
function saveScopeSelection(mode = MODE) {
  localStorage.setItem(SCOPED_MODE_CONFIG[mode].storageKey, JSON.stringify([...scopedSelections[mode]]));
}
function learningPool() {
  if (!isScopedMode()) return WORDS_ACTIVE;
  return WORDS_ACTIVE.filter(item => currentScopeSelection().has(item.sectionId));
}

function pickQuizItems(pool, count) {
  if (!["geo-national", "geo-aichi-public", "geo-aichi-private"].includes(MODE)) return shuffle(pool).slice(0, count);
  const advanced = pool.filter(item => item.tier === "advanced");
  const foundation = pool.filter(item => item.tier !== "advanced");
  if (!advanced.length || !foundation.length) return shuffle(pool).slice(0, count);
  const advancedCount = Math.min(Math.ceil(count * 0.45), advanced.length);
  const foundationCount = Math.min(count - advancedCount, foundation.length);
  const fillCount = count - advancedCount - foundationCount;
  return shuffle([
    ...shuffle(advanced).slice(0, advancedCount),
    ...shuffle(foundation).slice(0, foundationCount),
    ...shuffle(pool).slice(0, fillCount),
  ]);
}

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
  function get(item) {
    return data[itemKey(item)] || { correct: 0, incorrect: 0 };
  }
  function record(item, correct) {
    const key = itemKey(item);
    if (!data[key]) data[key] = { correct: 0, incorrect: 0 };
    correct ? data[key].correct++ : data[key].incorrect++;
    save();
  }
  function reset() { data = {}; save(); }
  function studiedCount() {
    return learningPool().filter(item => {
      const d = get(item);
      return (d.correct + d.incorrect) > 0;
    }).length;
  }
  function overallAccuracy() {
    let c = 0, t = 0;
    learningPool().forEach(item => {
      const d = get(item);
      c += d.correct;
      t += d.correct + d.incorrect;
    });
    return t > 0 ? Math.round(c / t * 100) : 0;
  }
  function weakWords() {
    return learningPool().filter(w => {
      const d = get(w);
      const total = d.correct + d.incorrect;
      return total >= 3 && (d.correct / total) < 0.6;
    }).sort((a, b) => {
      const da = get(a), db = get(b);
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

function historyYearValue(label) {
  let m = label.match(/^紀元前(\d+)年/);
  if (m) return -parseInt(m[1], 10);
  m = label.match(/^紀元前(\d+)世紀/);
  if (m) return -((parseInt(m[1], 10) - 1) * 100 + 50);
  m = label.match(/^(\d+)世紀/);
  if (m) return (parseInt(m[1], 10) - 1) * 100 + 50;
  m = label.match(/^(\d+)年/);
  if (m) return parseInt(m[1], 10);
  return Number.POSITIVE_INFINITY;
}

function historyEventKind(text) {
  const endings = [
    "が始まる",
    "が起こる",
    "が成立する",
    "が結ばれる",
    "が行われる",
    "が定められる",
    "が出される",
    "が公布される",
    "が発布される",
    "が伝わる",
    "を移す",
    "が開かれる",
    "になる",
    "を始める",
  ];
  return endings.find(ending => text.endsWith(ending)) || "";
}

function historySameYearKeys(item) {
  if (MODE !== "history") return new Set();
  return new Set(
    learningPool()
      .filter(x => x.english === item.english)
      .map(x => itemKey(x))
  );
}

function historyDistractorScore(correct, candidate, isEnToJa) {
  let score = 0;
  if (candidate.sectionId === correct.sectionId) score += 120;
  else if (candidate.chapterId === correct.chapterId) score += 60;

  const correctYear = historyYearValue(correct.english);
  const candidateYear = historyYearValue(candidate.english);
  if (Number.isFinite(correctYear) && Number.isFinite(candidateYear)) {
    const distance = Math.abs(correctYear - candidateYear);
    score += Math.max(0, 50 - Math.min(distance, 50));
  }

  if (isEnToJa) {
    const correctKind = historyEventKind(correct.japanese);
    const candidateKind = historyEventKind(candidate.japanese);
    if (correctKind && correctKind === candidateKind) score += 18;
  }
  return score;
}

function scopedDistractorScore(correct, candidate, isEnToJa) {
  let score = 0;
  if (candidate.sectionId === correct.sectionId) score += 120;
  else if (candidate.chapterId === correct.chapterId) score += 60;

  if (MODE.startsWith("geo-")) {
    const correctKind = geographyDistractorKind(correct);
    const candidateKind = geographyDistractorKind(candidate);
    if (correctKind && correctKind === candidateKind) score += 280;
    else if (
      correctKind &&
      candidateKind &&
      geographyKindFamily(correctKind) === geographyKindFamily(candidateKind)
    ) score += 95;
  }

  const correctLabel = isEnToJa ? correct.japanese : correct.english;
  const candidateLabel = isEnToJa ? candidate.japanese : candidate.english;
  score += Math.max(0, 30 - Math.abs(correctLabel.length - candidateLabel.length));
  return score;
}

function geographyDistractorKind(item) {
  const answer = item.japanese;
  if (/^(赤道|本初子午線|標準時子午線)$/.test(answer)) return "geo-reference";
  if (/^(国境|領土|領海|領空|排他的経済水域)$/.test(answer)) return "territory";
  if (/^(季節風|偏西風|やませ)$/.test(answer)) return "wind";
  if (/^(フェーン現象|梅雨前線|台風|ハリケーン)$/.test(answer)) return "weather";
  if (/(気候|気候帯)$/.test(answer) || /^(熱帯|乾燥帯|温帯|冷帯|寒帯)$/.test(answer)) return "climate";
  if (/(農業|栽培|作物|稲作|酪農|畜産|牧畜|果樹栽培|林業)$/.test(answer)) return "agriculture";
  if (/(工業地帯|工業地域|太平洋ベルト)$/.test(answer)) return "industrial-area";
  if (/^(第一次産業|第二次産業|第三次産業)$/.test(answer)) return "industry-sector";
  if (/(工業|組立型工業)$/.test(answer)) return "industry";
  if (/平野$/.test(answer)) return "plain";
  if (/台地$/.test(answer)) return "plateau";
  if (/海岸$/.test(answer)) return "coast";
  if (/造山帯$/.test(answer)) return "mountain";
  if (/山脈$/.test(answer)) return "mountain";
  if (/川$/.test(answer)) return "river";
  if (/湖$/.test(answer)) return "lake";
  if (/(大洋|海)$/.test(answer)) return "sea";
  if (/(大陸|列島|諸島)$/.test(answer)) return "landform";
  if (/^(自然災害|少子高齢化|ヒートアイランド現象)$/.test(answer)) return "issue";
  if (/(EU|ASEAN|ユーロ|協定|通貨|経済特区|開拓使)$/.test(answer)) return "organization";
  if (/^(北方領土問題|環境問題|都市問題|砂漠化|干ばつ|冷害|過密|過疎)$/.test(answer)) return "issue";
  if (/(人口集中|都市化|スラム|ヒスパニック|多文化社会)$/.test(answer)) return "population";
  if (/(石油|鉄鉱石|金|資源)$/.test(answer)) return "resource";
  if (/地方$/.test(answer)) return "region";
  if (/^(プレーリー|パンパ)$/.test(answer)) return "grassland";
  if (/^(セルバ|サバナ|ツンドラ)$/.test(answer)) return "vegetation";
  if (/^(北大西洋海流|親潮)$/.test(answer)) return "current";
  if (/^(平地|港|降水量|水蒸気|価格|人工物|消費地)$/.test(answer)) return "concept";
  if (/^(乾燥して高温になる|通しやすい|穏やか)$/.test(answer)) return "description";
  if (/(どこか|国はどこ|都市はどこ)/.test(item.english)) return "place";
  return "";
}

function geographyKindFamily(kind) {
  const families = {
    wind: "atmosphere",
    weather: "atmosphere",
    climate: "atmosphere",
    agriculture: "agriculture",
    "industrial-area": "industry",
    "industry-sector": "industry",
    industry: "industry",
    plain: "landform",
    plateau: "landform",
    coast: "landform",
    mountain: "landform",
    river: "landform",
    lake: "landform",
    sea: "landform",
    landform: "landform",
    issue: "issue",
    population: "population",
    resource: "resource",
    organization: "organization",
    region: "region",
    place: "place",
    "geo-reference": "geo-reference",
    territory: "territory",
    grassland: "vegetation",
    vegetation: "vegetation",
    current: "current",
    concept: "concept",
    description: "description",
  };
  return families[kind] || "";
}

/* Pick `n` plausible distractors for the correct item.
   History prefers same section/chapter and nearby years.
   Other modes keep the older category + displayed-length heuristic. */
function pickDistractors(correct, n, isEnToJa, usedLabels) {
  const pool = [];
  const source = learningPool();
  if (MODE === "history") {
    const sameYearKeys = historySameYearKeys(correct);
    const ranked = source
      .filter(x => !sameYearKeys.has(itemKey(x)))
      .map(x => ({ x, score: historyDistractorScore(correct, x, isEnToJa) }))
      .sort((a, b) => b.score - a.score || Math.random() - 0.5);

    for (const { x } of ranked) {
      const label = isEnToJa ? x.japanese : x.english;
      if (!label || usedLabels.has(label)) continue;
      usedLabels.add(label);
      pool.push(x);
      if (pool.length >= n) break;
    }
    return pool;
  }
  if (isScopedMode()) {
    const ranked = source
      .filter(x => itemKey(x) !== itemKey(correct))
      .map(x => ({ x, score: scopedDistractorScore(correct, x, isEnToJa) }))
      .sort((a, b) => b.score - a.score || Math.random() - 0.5);

    for (const { x } of ranked) {
      const label = isEnToJa ? x.japanese : x.english;
      if (!label || usedLabels.has(label)) continue;
      usedLabels.add(label);
      pool.push(x);
      if (pool.length >= n) break;
    }
    return pool;
  }

  const refLen = (isEnToJa ? correct.japanese : correct.english).length;
  const same = source.filter(x =>
    x.category === correct.category && itemKey(x) !== itemKey(correct)
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
    for (const x of shuffle(source)) {
      if (itemKey(x) === itemKey(correct)) continue;
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
  if (MODE === "history") return "🗓";
  if (MODE.startsWith("geo-")) return "🧭";
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
function getCategories(source = WORDS_ACTIVE) {
  const cats = [...new Set(source.map(w => w.category))];
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
  if (isScopedMode()) {
    return scopeGroups()
      .flatMap(chapter => chapter.sections.map(section =>
        MODE === "history" ? `${chapter.title} / ${section.title}` : section.title
      ))
      .filter(cat => cats.includes(cat));
  }
  return cats.sort();
}

// ─── App State ───────────────────────────────
let fcWords = [], fcIdx = 0, fcFlipped = false, fcIsEnToJa = true, fcCategory = null;
let fcExampleMode = false;
let quizWords = [], quizIdx = 0, quizCorrect = 0, quizWrong = [];
let quizIsEnToJa = true, quizAnswered = false, quizCategory = null;
let quizMultiMode = false, quizMultiKeys = new Set(), quizMultiFound = 0;
let taWords = [], taTimeLeft = 60, taScore = 0, taCombo = 0, taMaxCombo = 0;
let taTimer = null, taAnswered = false, taWrong = [], taIsEnToJa = true;
let taCategory = null, taPendingRecords = [];
let unitMenuCategory = null;
// Sequential (順番) mode
let taSeqMode = false, taSeqPool = [], taSeqIdx = 0;
let bpCategory = null, bpSize = 5, bpMode = "fc", bpDir = "en2ja";

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
    header.classList.remove("jhs", "idiom", "proverb", "history", "geo-periodic", "geo-national", "geo-aichi-public", "geo-aichi-private");
    if (cfg.headerClass) header.classList.add(cfg.headerClass);
    document.body.classList.remove("mode-high", "mode-jhs", "mode-idiom", "mode-proverb", "mode-history", "mode-geo-periodic", "mode-geo-national", "mode-geo-aichi-public", "mode-geo-aichi-private");
    document.body.classList.add(`mode-${MODE}`);
    const modes = ["high", "jhs", "idiom", "proverb", "history", "geo-periodic", "geo-national", "geo-aichi-public", "geo-aichi-private"];
    for (const m of modes) {
      const btn = $(`mode-btn-${m}`);
      btn.classList.toggle("active", MODE === m);
      btn.classList.remove("jhs", "idiom", "proverb", "history", "geo-periodic", "geo-national", "geo-aichi-public", "geo-aichi-private");
      if (MODE === m && MODE_CONFIG[m].headerClass) btn.classList.add(MODE_CONFIG[m].headerClass);
    }

    const pool = learningPool();
    $("stat-total").textContent = pool.length;
    $("stat-total-label").textContent = cfg.totalLabel;
    $("stat-studied-label").textContent = "学習済み";
    $("stat-studied").textContent = Store.studiedCount();
    $("stat-acc").textContent = Store.overallAccuracy() + "%";
    $("home-list-title").textContent = cfg.listTitle;
    $("home-list-sub").textContent = cfg.listSub;
    $("home-flash-sub").textContent = cfg.flashSub;
    $("weak-menu-title").textContent = `苦手${cfg.itemName}クイズ`;
    const hideSpeech = MODE === "history" || MODE.startsWith("geo-");
    $("fc-speak-btn").style.display = hideSpeech ? "none" : "";
    $("quiz-speak-btn").style.display = hideSpeech ? "none" : "";

    $("category-section").style.display = isScopedMode() ? "none" : "block";
    $("history-range-section").style.display = isScopedMode() ? "block" : "none";
    if (isScopedMode()) this._renderScopeRange();
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

  _renderScopeRange() {
    if (!isScopedMode()) return;
    const tree = $("history-range-tree");
    const selectedSections = currentScopeSelection();
    const disabledRows = disabledScopeGroups()
      .map(chapter => `
        <div class="history-chapter history-chapter-disabled">
          <div class="history-disabled-row">
            <span>${chapter.title}</span>
            <span class="history-section-count">${chapter.note}</span>
          </div>
        </div>`)
      .join("");
    const selectableRows = scopeGroups().map((chapter) => {
      const selectedCount = chapter.sections.filter(section => selectedSections.has(section.id)).length;
      const allChecked = selectedCount === chapter.sections.length;
      const sectionRows = chapter.sections.map((section) => {
        const count = WORDS_ACTIVE.filter(item => item.sectionId === section.id).length;
        const checked = selectedSections.has(section.id) ? " checked" : "";
        return `
          <label class="history-check-row">
            <input type="checkbox"${checked} onchange="App.toggleScopeSection('${section.id}', this.checked)">
            <span>${section.title}</span>
            <span class="history-section-count">${count}${MODE_CONFIG[MODE].unit}</span>
          </label>`;
      }).join("");
      return `
        <details class="history-chapter" open>
          <summary>
            <input type="checkbox"${allChecked ? " checked" : ""} onchange="App.toggleScopeChapter('${chapter.id}', this.checked); event.stopPropagation();">
            <span>${chapter.title}</span>
          </summary>
          <div class="history-sections">${sectionRows}</div>
        </details>`;
    }).join("");
    tree.innerHTML = disabledRows + selectableRows;
    $("history-selected-count").textContent = `選択中: ${selectedSections.size}節 / ${learningPool().length}${MODE_CONFIG[MODE].unit}`;
  },

  toggleScopeSection(sectionId, checked) {
    const selectedSections = currentScopeSelection();
    checked ? selectedSections.add(sectionId) : selectedSections.delete(sectionId);
    saveScopeSelection();
    this._renderHome();
  },

  toggleScopeChapter(chapterId, checked) {
    const chapter = scopeGroups().find(item => item.id === chapterId);
    if (!chapter) return;
    const selectedSections = currentScopeSelection();
    chapter.sections.forEach(section => checked
      ? selectedSections.add(section.id)
      : selectedSections.delete(section.id));
    saveScopeSelection();
    this._renderHome();
  },

  selectAllScopeSections() {
    scopedSelections[MODE] = new Set(allScopeSectionIds());
    saveScopeSelection();
    this._renderHome();
  },

  clearScopeSections() {
    scopedSelections[MODE] = new Set();
    saveScopeSelection();
    this._renderHome();
  },

  _openCategoryMenu(cat) {
    unitMenuCategory = cat;
    $("unit-menu-title").textContent = cat;
    const cfg = MODE_CONFIG[MODE];
    const count = wordsInCategory(cat).length;
    $("unit-menu-count").textContent = `${count}${cfg.unit}`;
    $("unit-menu-fc1-sub").textContent = cfg.promptLabel;
    $("unit-menu-fc2-sub").textContent = cfg.reverseLabel;

    // 例文フラッシュカードボタン
    let fcExBtn = $("unit-menu-fc-example");
    if (MODE === "idiom") {
      if (!fcExBtn) {
        const tpl = $("unit-menu-fc2-sub").closest(".menu-card") || $("unit-menu-fc2-sub").parentElement;
        if (tpl) {
          fcExBtn = tpl.cloneNode(true);
          fcExBtn.id = "unit-menu-fc-example";
          const sub = fcExBtn.querySelector(".menu-sub") || fcExBtn.querySelector("[id]");
          if (sub) { sub.removeAttribute("id"); sub.textContent = "\u6163\u7528\u53e5 \u2192 \u4f8b\u6587"; }
          const title = fcExBtn.querySelector(".menu-title");
          if (title) title.textContent = "\u30d5\u30e9\u30c3\u30b7\u30e5\u30ab\u30fc\u30c9";
          const icon = fcExBtn.querySelector(".menu-icon");
          if (icon) icon.textContent = "\ud83d\udcd6";
          fcExBtn.onclick = () => App.openFlashcardExample();
          tpl.parentNode.insertBefore(fcExBtn, tpl.nextSibling);
        }
      }
      if (fcExBtn) fcExBtn.style.display = "";
    } else if (fcExBtn) {
      fcExBtn.style.display = "none";
    }
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
  openFlashcardExample() { this.openFlashcard(unitMenuCategory, "en2ja", { exampleMode: true }); },
  openQuizForCategory() { this.openQuiz(unitMenuCategory); },
  openTimeAttackForCategory() { this.openTimeAttack(unitMenuCategory); },

  // ── WORD LIST ────────────────────────────
  openWordList() {
    const cfg = MODE_CONFIG[MODE];
    const source = learningPool();
    $("wordlist-title").textContent = cfg.listTitle;
    const sel = $("cat-filter");
    sel.innerHTML = '<option value="">すべて</option>';
    getCategories(source).forEach(c => sel.innerHTML += `<option value="${c}">${c}</option>`);
    $("search-input").value = "";
    this._renderWordList(source);
    showScreen("screen-wordlist");
  },

  filterWords() {
    const q = $("search-input").value.toLowerCase();
    const cat = $("cat-filter").value;
    const filtered = learningPool().filter(w =>
      (!cat || w.category === cat) &&
      (!q || w.english.toLowerCase().includes(q) || w.japanese.includes(q))
    );
    this._renderWordList(filtered);
  },

  _renderWordList(words) {
    const c = $("word-list-container");
    if (words.length === 0) { c.innerHTML = `<p style='padding:20px;text-align:center;color:#94A3B8'>該当する${MODE_CONFIG[MODE].itemName}がありません</p>`; return; }
    c.innerHTML = words.map((w, i) => {
      const d = Store.get(w);
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
  openFlashcard(category, mode, opts) {
    opts = opts || {};
    fcCategory = opts.titleOverride || category || null;
    fcIsEnToJa = mode !== "ja2en";
    fcExampleMode = !!opts.exampleMode;
    const base = opts.words || (category ? wordsInCategory(category) : learningPool());
    fcWords = opts.noShuffle ? base.slice() : shuffle(base);
    if (!fcWords.length) {
      alert("学習する範囲を1つ以上選んでください。");
      this.goHome();
      return;
    }
    fcIdx = 0; fcFlipped = false;
    this._updateFcLabels();
    this._renderFC();
    showScreen("screen-flashcard");
  },

  _updateFcLabels() {
    const cfg = MODE_CONFIG[MODE];
    $("fc-mode-en2ja").textContent = cfg.promptLabel;
    $("fc-mode-ja2en").textContent = cfg.reverseLabel;
    $("fc-mode-en2ja").classList.toggle("active", fcIsEnToJa && !fcExampleMode);
    $("fc-mode-ja2en").classList.toggle("active", !fcIsEnToJa && !fcExampleMode);
    // Example mode button — idiom mode only
    let exBtn = $("fc-mode-example");
    if (MODE === "idiom") {
      if (!exBtn) {
        exBtn = document.createElement("button");
        exBtn.id = "fc-mode-example";
        exBtn.className = "mode-btn";
        exBtn.onclick = () => App.setFcExample();
        $("fc-mode-ja2en").parentNode.insertBefore(exBtn, $("fc-mode-ja2en").nextSibling);
      }
      exBtn.textContent = "\u6163\u7528\u53E5 \u2192 \u4F8B\u6587";
      exBtn.style.display = "";
      exBtn.classList.toggle("active", fcExampleMode);
    } else if (exBtn) {
      exBtn.style.display = "none";
    }
    let label;
    if (fcExampleMode) label = "\u6163\u7528\u53E5\u2192\u4F8B\u6587";
    else label = fcIsEnToJa ? cfg.promptLabel : cfg.reverseLabel;
    const titleSuf = `\uFF08${label.replace(/\s*\u2192\s*/, "\u2192")}\uFF09`;
    $("fc-title").textContent = fcCategory ? `${fcCategory}${titleSuf}` : `\u30D5\u30E9\u30C3\u30B7\u30E5\u30AB\u30FC\u30C9${titleSuf}`;
  },

  setFcMode(toEnJa) {
    if (fcIsEnToJa === toEnJa && !fcExampleMode) return;
    fcIsEnToJa = toEnJa;
    fcExampleMode = false;
    this._updateFcLabels();
    this._renderFC();
  },
  setFcExample() {
    if (fcExampleMode) return;
    fcExampleMode = true;
    fcIsEnToJa = true;
    this._updateFcLabels();
    this._renderFC();
  },

  _renderFC() {
    const w = fcWords[fcIdx];
    if (!w) return;
    const card = $("fc-card");
    card.classList.add("no-transition");
    card.classList.remove("flipped");
    void card.offsetWidth;
    $("fc-front-cat").textContent = w.category;
    $("fc-back-cat").textContent = w.category;
    if (fcExampleMode) {
      $("fc-front-word").textContent = w.english;
      $("fc-back-word").textContent = w.example || "\uFF08\u4F8B\u6587\u306A\u3057\uFF09";
      $("fc-yomi").textContent = "";
      $("fc-example").textContent = "\u610F\u5473: " + (w.japanese || "");
      $("fc-example-ja").textContent = "";
    } else if (fcIsEnToJa) {
      $("fc-front-word").textContent = w.english;
      if (MODE === "history") {
        const sameYear = learningPool().filter(x => x.english === w.english);
        if (sameYear.length > 1) {
          $("fc-back-word").innerHTML = sameYear.map(x => x.japanese).join("<br>");
        } else {
          $("fc-back-word").textContent = w.japanese;
        }
      } else {
        $("fc-back-word").textContent = w.japanese;
      }
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
    fcFlipped = false;
    requestAnimationFrame(() => card.classList.remove("no-transition"));
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
    if (fcWords[fcIdx]) Store.record(fcWords[fcIdx], correct);
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
      : (category ? wordsInCategory(category) : learningPool());
    if (pool.length < 4) {
      alert(`4択クイズには4${MODE_CONFIG[MODE].unit}以上の${MODE_CONFIG[MODE].itemName}が必要です。`);
      this.goHome();
      return;
    }
    quizWords = pickQuizItems(pool, 20);
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
    quizMultiMode = false;
    quizMultiKeys = new Set();
    quizMultiFound = 0;
    const w = quizWords[quizIdx];
    if (!w) return;
    $("quiz-counter").textContent = `${quizIdx + 1} / ${quizWords.length}`;
    const pct = (quizIdx / quizWords.length * 100).toFixed(1);
    $("quiz-progress-fill").style.width = pct + "%";
    $("quiz-example").style.display = "none";

    // 歴史モード 年→出来事: 同年に複数イベントがある場合は複数選択
    let correctItems = [w];
    let distractorCount = 3;
    if (MODE === "history" && quizIsEnToJa) {
      const sameYear = learningPool().filter(x => x.english === w.english);
      if (sameYear.length > 1) {
        correctItems = sameYear;
        distractorCount = Math.max(1, 4 - sameYear.length);
        quizMultiMode = true;
        quizMultiKeys = new Set(sameYear.map(x => itemKey(x)));
      }
    }

    // 問題文
    const questionText = quizIsEnToJa ? w.english : w.japanese;
    $("quiz-question").textContent = quizMultiMode
      ? `${questionText}（${correctItems.length}つ選べ）`
      : questionText;

    // 選択肢
    const usedLabels = new Set(correctItems.map(x => quizIsEnToJa ? x.japanese : x.english));
    const pool = pickDistractors(w, distractorCount, quizIsEnToJa, usedLabels);
    let opts = shuffle(pool.concat(correctItems));
    const c = $("quiz-choices");
    c.innerHTML = opts.map(opt => {
      const label = quizIsEnToJa ? opt.japanese : opt.english;
      return `<button class="choice-btn" onclick="App._quizAnswer('${itemKey(opt).replace(/'/g, "\\'")}')">${label}</button>`;
    }).join("");
  },

  speakQuizWord() {
    const w = quizWords[quizIdx];
    if (w) speak(w.english);
  },

  _quizAnswer(key) {
    if (quizAnswered) return;
    const correct = quizWords[quizIdx];

    // === 複数選択モード（歴史 年→出来事、同年複数イベント） ===
    if (quizMultiMode) {
      const isCorrectKey = quizMultiKeys.has(key);
      const clickedItem = learningPool().find(w => itemKey(w) === key);
      const clickedLabel = quizIsEnToJa ? clickedItem?.japanese : clickedItem?.english;

      if (isCorrectKey) {
        // 正解ボタンをクリック → 緑にして無効化
        document.querySelectorAll(".choice-btn").forEach(btn => {
          if (btn.textContent === clickedLabel && !btn.disabled) {
            btn.classList.add("correct");
            btn.disabled = true;
          }
        });
        quizMultiFound++;
        if (quizMultiFound >= quizMultiKeys.size) {
          // 全正解を選択完了
          quizAnswered = true;
          Store.record(correct, true);
          quizCorrect++;
          document.querySelectorAll(".choice-btn").forEach(btn => {
            if (!btn.disabled) { btn.classList.add("dim"); btn.disabled = true; }
          });
          setTimeout(() => {
            quizIdx++;
            if (quizIdx >= quizWords.length) this._showQuizResult();
            else this._renderQuizQuestion();
          }, 800);
        }
        return;
      } else {
        // 不正解 → 全ボタン色付けして終了
        quizAnswered = true;
        Store.record(correct, false);
        quizWrong.push(correct);
        const correctLabels = learningPool()
          .filter(x => quizMultiKeys.has(itemKey(x)))
          .map(x => quizIsEnToJa ? x.japanese : x.english);
        document.querySelectorAll(".choice-btn").forEach(btn => {
          if (btn.textContent === clickedLabel) btn.classList.add("wrong");
          else if (correctLabels.includes(btn.textContent)) btn.classList.add("correct");
          else if (!btn.classList.contains("correct")) btn.classList.add("dim");
          btn.disabled = true;
        });
        setTimeout(() => {
          quizIdx++;
          if (quizIdx >= quizWords.length) this._showQuizResult();
          else this._renderQuizQuestion();
        }, 1400);
        return;
      }
    }

    // === 通常モード（単一選択） ===
    quizAnswered = true;
    const isRight = key === itemKey(correct);
    Store.record(correct, isRight);
    if (isRight) quizCorrect++;
    else quizWrong.push(correct);

    document.querySelectorAll(".choice-btn").forEach(btn => {
      const label = btn.textContent;
      const isCorrectLabel = quizIsEnToJa ? label === correct.japanese : label === correct.english;
      const selected = learningPool().find(w => itemKey(w) === key);
      const isSelected = quizIsEnToJa ? label === selected?.japanese : label === selected?.english;
      if (isCorrectLabel) btn.classList.add("correct");
      else if (!isRight && isSelected) btn.classList.add("wrong");
      else if (!isCorrectLabel) btn.classList.add("dim");
      btn.disabled = true;
    });

    if (correct.example) {
      $("qex-en").textContent = "💬 " + correct.example;
      $("qex-ja").textContent = "→ " + correct.exampleJapanese;
      $("quiz-example").style.display = "block";
    }

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
      const cfg = MODE_CONFIG[MODE];
      ws.innerHTML = `<div class="wrong-title">✗ ミスした${cfg.itemName}（${quizWrong.length}${cfg.unit}）</div>` +
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
  openTimeAttack(category, opts) {
    opts = opts || {};
    taCategory = category || null;
    taSeqMode = !!opts.sequential;
    taSeqPool = opts.words ? opts.words.slice() : [];
    taSeqIdx = 0;
    const questionPool = taSeqMode ? taSeqPool : (taCategory ? wordsInCategory(taCategory) : learningPool());
    if (questionPool.length < 1) {
      alert("出題できる語彙がありません。");
      return;
    }
    if (learningPool().length < 4 && WORDS_ACTIVE.length < 4) {
      alert(`タイムアタックには4${MODE_CONFIG[MODE].unit}以上の${MODE_CONFIG[MODE].itemName}が必要です。`);
      return;
    }
    if (!taSeqMode && questionPool.length < 4) {
      alert(`このユニットは${MODE_CONFIG[MODE].itemName}が少なすぎてタイムアタックを開けません（4${MODE_CONFIG[MODE].unit}以上必要）。`);
      return;
    }
    if (taSeqMode || opts.isEnToJa !== undefined) {
      // Sequential or pre-specified direction: skip setup, start immediately
      this.startTimeAttack(opts.isEnToJa !== undefined ? opts.isEnToJa : (Math.random() > 0.5));
      return;
    }
    const cfg = MODE_CONFIG[MODE];
    $("ta-setup-forward-title").textContent = cfg.promptLabel;
    $("ta-setup-reverse-title").textContent = cfg.reverseLabel;
    showScreen("screen-timeattack-setup");
  },

  startTimeAttack(toEnJa) {
    taIsEnToJa = toEnJa;
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
    taWords = shuffle(learningPool());
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
    let correct;
    if (taSeqMode) {
      correct = taSeqPool[taSeqIdx % taSeqPool.length];
      taSeqIdx++;
    } else {
      const sourcePool = taCategory ? wordsInCategory(taCategory) : learningPool();
      correct = sourcePool[Math.floor(Math.random() * sourcePool.length)];
    }
    const usedLabels = new Set([taIsEnToJa ? correct.japanese : correct.english]);
    const pool = pickDistractors(correct, 3, taIsEnToJa, usedLabels);
    const opts = shuffle(pool.concat(correct));
    taWords[0] = correct;  // reuse slot

    $("ta-question").textContent = taIsEnToJa ? correct.english : correct.japanese;

    const c = $("ta-choices");
    c.innerHTML = opts.map(opt => {
      const label = taIsEnToJa ? opt.japanese : opt.english;
      return `<button class="ta-choice-btn" onclick="App._taAnswer('${itemKey(opt).replace(/'/g, "\\'")}')">${label}</button>`;
    }).join("");
  },

  _taAnswer(key) {
    if (taAnswered || !taTimer) return;
    taAnswered = true;
    const correct = taWords[0];
    let isRight = key === itemKey(correct);
    if (!isRight && MODE === "history" && taIsEnToJa) {
      const sameKeys = historySameYearKeys(correct);
      if (sameKeys.has(key)) isRight = true;
    }
    taPendingRecords.push([correct, isRight]);

    // 色付け
    document.querySelectorAll(".ta-choice-btn").forEach(btn => {
      const label = btn.textContent;
      let isCorrectLabel = taIsEnToJa ? label === correct.japanese : label === correct.english;
      if (!isCorrectLabel && MODE === "history" && taIsEnToJa) {
        const sameYearEvents = learningPool().filter(x => x.english === correct.english).map(x => x.japanese);
        if (sameYearEvents.includes(label)) isCorrectLabel = true;
      }
      const selected = learningPool().find(w => itemKey(w) === key);
      const isSelected = taIsEnToJa ? label === selected?.japanese : label === selected?.english;
      if (isCorrectLabel) btn.classList.add("correct");
      else if (!isRight && isSelected) btn.classList.add("wrong");
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
    for (const [item, ok] of taPendingRecords) Store.record(item, ok);
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
      const cfg = MODE_CONFIG[MODE];
      ws.innerHTML = `<div class="wrong-title">✗ ミスした${cfg.itemName}（${taWrong.length}${cfg.unit}）</div>` +
        [...new Map(taWrong.map(w => [itemKey(w), w])).values()].map(w => `
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

  retryTimeAttack() {
    if (taSeqMode && taSeqPool.length > 0) {
      taSeqIdx = 0;
      this.startTimeAttack(taIsEnToJa);
    } else {
      this.startTimeAttack(taIsEnToJa);
    }
  },

  // ── BATCH PICKER (順番に学習) ─────────────
  openBatchPicker(category) {
    bpCategory = category || null;
    // Default direction = "慣用句→意味" (en→ja) which is promptLabel mapping
    bpDir = "en2ja";
    this._bpRender();
    showScreen("screen-batch-picker");
  },
  openBatchPickerForCategory() {
    this.openBatchPicker(unitMenuCategory);
  },

  _bpSetSize(n) { bpSize = n; this._bpRender(); },
  _bpSetMode(m) { bpMode = m; this._bpRender(); },
  _bpSetDir(d)  { bpDir  = d; this._bpRender(); },

  _bpRender() {
    const cfg = MODE_CONFIG[MODE];
    $("bp-target").textContent = bpCategory ? bpCategory : `全${cfg.unit}`;
    $("bp-dir-en2ja").textContent = cfg.promptLabel;
    $("bp-dir-ja2en").textContent = cfg.reverseLabel;
    // Active states
    [5, 10, 20].forEach(s => $(`bp-size-${s}`).classList.toggle("active", bpSize === s));
    $("bp-mode-fc").classList.toggle("active", bpMode === "fc");
    $("bp-mode-ta").classList.toggle("active", bpMode === "ta");
    $("bp-dir-en2ja").classList.toggle("active", bpDir === "en2ja");
    $("bp-dir-ja2en").classList.toggle("active", bpDir === "ja2en");
    // Build batch grid
    const pool = bpCategory ? wordsInCategory(bpCategory) : WORDS_ACTIVE;
    const total = pool.length;
    const numBatches = Math.max(1, Math.ceil(total / bpSize));
    const grid = $("bp-batch-grid");
    if (total < (bpMode === "ta" ? 4 : 1)) {
      grid.innerHTML = `<p style="grid-column:span 2;text-align:center;color:var(--sub);padding:20px">該当する語彙がありません</p>`;
      return;
    }
    let html = "";
    for (let i = 0; i < numBatches; i++) {
      const start = i * bpSize + 1;
      const end   = Math.min((i + 1) * bpSize, total);
      const count = end - start + 1;
      // TA needs >= 4 words total for distractor pool; this batch can have fewer
      // but the global pool always has enough since we checked above
      html += `
        <button class="bp-batch-card" onclick="App._bpStart(${i})">
          <div class="bp-batch-range">${start} 〜 ${end} 問</div>
          <div class="bp-batch-count">${count}${cfg.unit}</div>
        </button>`;
    }
    $("bp-batches-label").textContent = `バッチを選択（全${numBatches}バッチ）`;
    grid.innerHTML = html;
  },

  _bpStart(batchIdx) {
    const cfg = MODE_CONFIG[MODE];
    const pool = bpCategory ? wordsInCategory(bpCategory) : WORDS_ACTIVE;
    const start = batchIdx * bpSize;
    const end = Math.min(start + bpSize, pool.length);
    const batch = pool.slice(start, end);
    const target = bpCategory || `全${cfg.unit}`;
    const title = `${target} (${start + 1}〜${end}問)`;
    const isEnToJa = bpDir === "en2ja";
    if (bpMode === "fc") {
      this.openFlashcard(null, isEnToJa ? "en2ja" : "ja2en", {
        words: batch, noShuffle: true, titleOverride: title
      });
    } else {
      this.openTimeAttack(bpCategory, {
        sequential: true, words: batch, isEnToJa: isEnToJa,
      });
    }
  },

};  // end App

// ── Init ──────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  App._renderHome();
});
