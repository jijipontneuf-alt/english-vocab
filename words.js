const WORDS = [
  {
    "english": "abandon",
    "japanese": "見捨てる・放棄する",
    "category": "動詞",
    "example": "He had to abandon his car in the flood.",
    "exampleJapanese": "彼は洪水で車を乗り捨てなければならなかった。"
  },
  {
    "english": "absorb",
    "japanese": "吸収する",
    "category": "動詞",
    "example": "Plants absorb water through their roots.",
    "exampleJapanese": "植物は根から水を吸収する。"
  },
  {
    "english": "accept",
    "japanese": "受け入れる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "achieve",
    "japanese": "達成する",
    "category": "動詞",
    "example": "You can achieve anything if you work hard.",
    "exampleJapanese": "一生懸命努力すれば何でも達成できる。"
  },
  {
    "english": "adapt",
    "japanese": "適応する",
    "category": "動詞",
    "example": "Animals must adapt to survive in new environments.",
    "exampleJapanese": "動物は新しい環境で生き残るために適応しなければならない。"
  },
  {
    "english": "add",
    "japanese": "加える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "admire",
    "japanese": "感心する・賞賛する",
    "category": "動詞",
    "example": "I admire her courage and determination.",
    "exampleJapanese": "私は彼女の勇気と決意を尊敬している。"
  },
  {
    "english": "admit",
    "japanese": "認める・入場を許可する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "adopt",
    "japanese": "採用する・養子にする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "advise",
    "japanese": "助言する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "affect",
    "japanese": "影響する",
    "category": "動詞",
    "example": "The weather can affect your mood.",
    "exampleJapanese": "天気は気分に影響することがある。"
  },
  {
    "english": "agree",
    "japanese": "同意する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "allow",
    "japanese": "許可する",
    "category": "動詞",
    "example": "My parents allow me to stay up late on weekends.",
    "exampleJapanese": "週末は夜更かしを許してもらっている。"
  },
  {
    "english": "announce",
    "japanese": "発表する",
    "category": "動詞",
    "example": "The teacher announced the exam results.",
    "exampleJapanese": "先生が試験の結果を発表した。"
  },
  {
    "english": "apologize",
    "japanese": "謝る",
    "category": "動詞",
    "example": "He apologized to her for being late.",
    "exampleJapanese": "彼は遅刻したことを彼女に謝った。"
  },
  {
    "english": "appear",
    "japanese": "現れる・〜のように見える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "apply",
    "japanese": "申し込む・適用する",
    "category": "動詞",
    "example": "She applied for a job at the hospital.",
    "exampleJapanese": "彼女は病院の仕事に応募した。"
  },
  {
    "english": "appreciate",
    "japanese": "感謝する・高く評価する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "argue",
    "japanese": "議論する・言い争う",
    "category": "動詞",
    "example": "They always argue about small things.",
    "exampleJapanese": "彼らはいつも些細なことで言い争っている。"
  },
  {
    "english": "arrange",
    "japanese": "手配する・並べる",
    "category": "動詞",
    "example": "She arranged the flowers beautifully.",
    "exampleJapanese": "彼女は花を美しく並べた。"
  },
  {
    "english": "ask",
    "japanese": "尋ねる・頼む",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "assist",
    "japanese": "手伝う・助ける",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "assume",
    "japanese": "〜だと思う・仮定する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "attack",
    "japanese": "攻撃する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "attempt",
    "japanese": "試みる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "attend",
    "japanese": "出席する・通う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "attract",
    "japanese": "引き付ける",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "avoid",
    "japanese": "避ける",
    "category": "動詞",
    "example": "You should avoid eating too much sugar.",
    "exampleJapanese": "砂糖の過剰摂取は避けるべきだ。"
  },
  {
    "english": "become",
    "japanese": "〜になる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "believe",
    "japanese": "信じる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "belong",
    "japanese": "属する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "blame",
    "japanese": "非難する・〜のせいにする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "borrow",
    "japanese": "借りる",
    "category": "動詞",
    "example": "Can I borrow your pen for a moment?",
    "exampleJapanese": "少しの間ペンを借りてもいいですか？"
  },
  {
    "english": "break",
    "japanese": "壊す・破る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "bring",
    "japanese": "持ってくる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "build",
    "japanese": "建てる・築く",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "calculate",
    "japanese": "計算する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "call",
    "japanese": "呼ぶ・電話する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "care",
    "japanese": "気にかける・世話をする",
    "category": "動詞",
    "example": "She cares deeply about the environment.",
    "exampleJapanese": "彼女は環境のことを深く気にかけている。"
  },
  {
    "english": "carry",
    "japanese": "運ぶ",
    "category": "動詞",
    "example": "Could you carry this bag for me?",
    "exampleJapanese": "このバッグを持ってくれますか？"
  },
  {
    "english": "catch",
    "japanese": "捕まえる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cause",
    "japanese": "引き起こす",
    "category": "動詞",
    "example": "Pollution can cause serious health problems.",
    "exampleJapanese": "汚染は深刻な健康問題を引き起こす可能性がある。"
  },
  {
    "english": "celebrate",
    "japanese": "祝う",
    "category": "動詞",
    "example": "We celebrated her birthday with a party.",
    "exampleJapanese": "パーティーで彼女の誕生日を祝った。"
  },
  {
    "english": "change",
    "japanese": "変える・変わる",
    "category": "動詞",
    "example": "The weather can change suddenly in spring.",
    "exampleJapanese": "春は天気が急に変わることがある。"
  },
  {
    "english": "charge",
    "japanese": "請求する・充電する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "check",
    "japanese": "確認する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "choose",
    "japanese": "選ぶ",
    "category": "動詞",
    "example": "It was hard to choose between the two options.",
    "exampleJapanese": "2つの選択肢から選ぶのは難しかった。"
  },
  {
    "english": "climb",
    "japanese": "登る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "collect",
    "japanese": "集める",
    "category": "動詞",
    "example": "He collects stamps from around the world.",
    "exampleJapanese": "彼は世界中の切手を集めている。"
  },
  {
    "english": "communicate",
    "japanese": "伝える・連絡する",
    "category": "動詞",
    "example": "It is important to communicate clearly.",
    "exampleJapanese": "はっきりと伝えることが大切だ。"
  },
  {
    "english": "compare",
    "japanese": "比べる",
    "category": "動詞",
    "example": "The teacher asked us to compare the two stories.",
    "exampleJapanese": "先生は2つの話を比べるよう求めた。"
  },
  {
    "english": "compete",
    "japanese": "競争する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "complain",
    "japanese": "不満を言う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "complete",
    "japanese": "完成させる",
    "category": "動詞",
    "example": "She completed the project before the deadline.",
    "exampleJapanese": "彼女は締め切り前にプロジェクトを完成させた。"
  },
  {
    "english": "concentrate",
    "japanese": "集中する",
    "category": "動詞",
    "example": "It is hard to concentrate with so much noise.",
    "exampleJapanese": "こんなに騒がしいと集中するのが難しい。"
  },
  {
    "english": "concern",
    "japanese": "心配させる・関係する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "connect",
    "japanese": "つなぐ",
    "category": "動詞",
    "example": "The bridge connects the two islands.",
    "exampleJapanese": "橋が2つの島をつないでいる。"
  },
  {
    "english": "consider",
    "japanese": "考慮する",
    "category": "動詞",
    "example": "Please consider all the options carefully.",
    "exampleJapanese": "全ての選択肢をよく検討してください。"
  },
  {
    "english": "contain",
    "japanese": "含む",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "continue",
    "japanese": "続ける・続く",
    "category": "動詞",
    "example": "The rain continued for three days.",
    "exampleJapanese": "雨が3日間続いた。"
  },
  {
    "english": "contribute",
    "japanese": "貢献する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "control",
    "japanese": "制御する",
    "category": "動詞",
    "example": "It is important to control your emotions.",
    "exampleJapanese": "感情をコントロールすることが大切だ。"
  },
  {
    "english": "convince",
    "japanese": "説得する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cooperate",
    "japanese": "協力する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "count",
    "japanese": "数える・重要である",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cover",
    "japanese": "覆う・報道する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "create",
    "japanese": "創る・作る",
    "category": "動詞",
    "example": "The artist created a beautiful painting.",
    "exampleJapanese": "その芸術家は美しい絵を制作した。"
  },
  {
    "english": "damage",
    "japanese": "損傷を与える",
    "category": "動詞",
    "example": "The storm damaged many buildings.",
    "exampleJapanese": "嵐が多くの建物に被害をもたらした。"
  },
  {
    "english": "decide",
    "japanese": "決める",
    "category": "動詞",
    "example": "Have you decided what to study in college?",
    "exampleJapanese": "大学で何を学ぶか決めましたか？"
  },
  {
    "english": "decrease",
    "japanese": "減る・減らす",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "deliver",
    "japanese": "届ける",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "depend",
    "japanese": "依存する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "describe",
    "japanese": "説明する・描写する",
    "category": "動詞",
    "example": "Can you describe what the thief looked like?",
    "exampleJapanese": "泥棒の外見を説明できますか？"
  },
  {
    "english": "design",
    "japanese": "設計する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "develop",
    "japanese": "発展する・開発する",
    "category": "動詞",
    "example": "This country has developed rapidly in recent years.",
    "exampleJapanese": "この国は近年急速に発展した。"
  },
  {
    "english": "disappear",
    "japanese": "消える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "discover",
    "japanese": "発見する",
    "category": "動詞",
    "example": "Columbus discovered America in 1492.",
    "exampleJapanese": "コロンブスは1492年にアメリカを発見した。"
  },
  {
    "english": "discuss",
    "japanese": "話し合う",
    "category": "動詞",
    "example": "We discussed the problem in class.",
    "exampleJapanese": "授業でその問題について話し合った。"
  },
  {
    "english": "divide",
    "japanese": "分ける・割る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "drive",
    "japanese": "運転する・駆り立てる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "drop",
    "japanese": "落とす・やめる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "earn",
    "japanese": "稼ぐ・得る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "educate",
    "japanese": "教育する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "encourage",
    "japanese": "励ます",
    "category": "動詞",
    "example": "Her teacher encouraged her to keep practicing.",
    "exampleJapanese": "先生は彼女に練習を続けるよう励ました。"
  },
  {
    "english": "enjoy",
    "japanese": "楽しむ",
    "category": "動詞",
    "example": "I enjoy reading books before bed.",
    "exampleJapanese": "寝る前に本を読むのが好きです。"
  },
  {
    "english": "enter",
    "japanese": "入る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "establish",
    "japanese": "設立する・確立する",
    "category": "動詞",
    "example": "The school was established in 1900.",
    "exampleJapanese": "その学校は1900年に設立された。"
  },
  {
    "english": "exchange",
    "japanese": "交換する",
    "category": "動詞",
    "example": "We exchanged email addresses after the meeting.",
    "exampleJapanese": "会議の後、メールアドレスを交換した。"
  },
  {
    "english": "expect",
    "japanese": "期待する・予想する",
    "category": "動詞",
    "example": "I expect the package to arrive tomorrow.",
    "exampleJapanese": "荷物は明日届く予定です。"
  },
  {
    "english": "experience",
    "japanese": "経験する",
    "category": "動詞",
    "example": "Living abroad gave me a great experience.",
    "exampleJapanese": "海外生活は素晴らしい経験を与えてくれた。"
  },
  {
    "english": "explain",
    "japanese": "説明する",
    "category": "動詞",
    "example": "The teacher explained the new grammar rule.",
    "exampleJapanese": "先生は新しい文法規則を説明した。"
  },
  {
    "english": "explore",
    "japanese": "探検する・調査する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "express",
    "japanese": "表現する",
    "category": "動詞",
    "example": "Music helps her express her feelings.",
    "exampleJapanese": "音楽は彼女が感情を表現するのに役立つ。"
  },
  {
    "english": "extend",
    "japanese": "延ばす・広げる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "face",
    "japanese": "直面する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fail",
    "japanese": "失敗する",
    "category": "動詞",
    "example": "He failed the exam but tried again.",
    "exampleJapanese": "彼は試験に落ちたが、再挑戦した。"
  },
  {
    "english": "fall",
    "japanese": "落ちる・倒れる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "feel",
    "japanese": "感じる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fight",
    "japanese": "戦う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "find",
    "japanese": "見つける",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "finish",
    "japanese": "終える・終わる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "follow",
    "japanese": "従う・ついていく",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "force",
    "japanese": "強制する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "forget",
    "japanese": "忘れる",
    "category": "動詞",
    "example": "Don't forget to bring your homework.",
    "exampleJapanese": "宿題を持ってくることを忘れないで。"
  },
  {
    "english": "form",
    "japanese": "形成する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fund",
    "japanese": "資金を提供する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "gain",
    "japanese": "得る・増加する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "gather",
    "japanese": "集める・集まる",
    "category": "動詞",
    "example": "People gathered in the park to watch fireworks.",
    "exampleJapanese": "人々が花火を見るために公園に集まった。"
  },
  {
    "english": "give",
    "japanese": "与える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "grow",
    "japanese": "育つ・成長する",
    "category": "動詞",
    "example": "This plant grows best in sunlight.",
    "exampleJapanese": "この植物は日光の下で最もよく育つ。"
  },
  {
    "english": "guide",
    "japanese": "案内する・導く",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "handle",
    "japanese": "扱う・処理する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "happen",
    "japanese": "起こる",
    "category": "動詞",
    "example": "What happened after the accident?",
    "exampleJapanese": "事故の後、何が起きたのですか？"
  },
  {
    "english": "help",
    "japanese": "助ける・手伝う",
    "category": "動詞",
    "example": "He always helps others without expecting anything in return.",
    "exampleJapanese": "彼は見返りを求めずいつも人を助ける。"
  },
  {
    "english": "hold",
    "japanese": "持つ・開催する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "identify",
    "japanese": "特定する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ignore",
    "japanese": "無視する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "imagine",
    "japanese": "想像する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "improve",
    "japanese": "改善する・上達する",
    "category": "動詞",
    "example": "Reading every day will improve your vocabulary.",
    "exampleJapanese": "毎日読書すると語彙力が向上する。"
  },
  {
    "english": "include",
    "japanese": "含む",
    "category": "動詞",
    "example": "The price includes breakfast.",
    "exampleJapanese": "料金には朝食が含まれている。"
  },
  {
    "english": "increase",
    "japanese": "増える・増やす",
    "category": "動詞",
    "example": "The number of tourists has increased this year.",
    "exampleJapanese": "今年は観光客の数が増えた。"
  },
  {
    "english": "influence",
    "japanese": "影響を与える",
    "category": "動詞",
    "example": "Music can influence your emotions.",
    "exampleJapanese": "音楽は感情に影響を与えることがある。"
  },
  {
    "english": "inform",
    "japanese": "知らせる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "introduce",
    "japanese": "紹介する",
    "category": "動詞",
    "example": "Let me introduce my friend to you.",
    "exampleJapanese": "友達を紹介させてください。"
  },
  {
    "english": "invest",
    "japanese": "投資する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "invite",
    "japanese": "招待する",
    "category": "動詞",
    "example": "She invited all her classmates to her birthday party.",
    "exampleJapanese": "彼女はクラスメート全員を誕生日パーティーに招待した。"
  },
  {
    "english": "join",
    "japanese": "参加する",
    "category": "動詞",
    "example": "I decided to join the tennis club.",
    "exampleJapanese": "テニスクラブに入ることにした。"
  },
  {
    "english": "judge",
    "japanese": "判断する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "keep",
    "japanese": "保つ・続ける",
    "category": "動詞",
    "example": "Keep your room clean and tidy.",
    "exampleJapanese": "部屋をきれいに片付けておきなさい。"
  },
  {
    "english": "know",
    "japanese": "知っている",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "lack",
    "japanese": "欠いている",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "lead",
    "japanese": "導く・先頭に立つ",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "learn",
    "japanese": "学ぶ・覚える",
    "category": "動詞",
    "example": "She learned three languages by the age of ten.",
    "exampleJapanese": "彼女は10歳までに3言語を習得した。"
  },
  {
    "english": "leave",
    "japanese": "去る・残す",
    "category": "動詞",
    "example": "He left the country to study abroad.",
    "exampleJapanese": "彼は留学するために国を離れた。"
  },
  {
    "english": "lend",
    "japanese": "貸す",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "limit",
    "japanese": "制限する",
    "category": "動詞",
    "example": "Time is limited, so please be brief.",
    "exampleJapanese": "時間が限られているので手短にお願いします。"
  },
  {
    "english": "listen",
    "japanese": "聴く",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "live",
    "japanese": "生きる・住む",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "look",
    "japanese": "見る・〜のように見える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "lose",
    "japanese": "失う・負ける",
    "category": "動詞",
    "example": "He lost his wallet on the train.",
    "exampleJapanese": "彼は電車で財布をなくした。"
  },
  {
    "english": "manage",
    "japanese": "管理する・なんとかする",
    "category": "動詞",
    "example": "She managed to finish the report on time.",
    "exampleJapanese": "彼女はなんとか時間内にレポートを終えた。"
  },
  {
    "english": "mean",
    "japanese": "意味する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "measure",
    "japanese": "測る・計る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "meet",
    "japanese": "会う・満たす",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mention",
    "japanese": "言及する",
    "category": "動詞",
    "example": "He mentioned that he might be late.",
    "exampleJapanese": "彼は遅れるかもしれないと言及した。"
  },
  {
    "english": "mind",
    "japanese": "気にする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "miss",
    "japanese": "逃す・恋しく思う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "move",
    "japanese": "動かす・引っ越す",
    "category": "動詞",
    "example": "The speech moved the audience to tears.",
    "exampleJapanese": "そのスピーチは聴衆を感動させて涙させた。"
  },
  {
    "english": "need",
    "japanese": "必要とする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "notice",
    "japanese": "気づく",
    "category": "動詞",
    "example": "I noticed a strange smell in the room.",
    "exampleJapanese": "部屋の中に変な臭いがすることに気づいた。"
  },
  {
    "english": "observe",
    "japanese": "観察する・気づく",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "obtain",
    "japanese": "得る・手に入れる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "offer",
    "japanese": "提供する・申し出る",
    "category": "動詞",
    "example": "He offered to help carry the heavy bags.",
    "exampleJapanese": "彼は重い荷物を運ぶのを手伝うと申し出た。"
  },
  {
    "english": "open",
    "japanese": "開ける・開く",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "organize",
    "japanese": "組織する・整理する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "overcome",
    "japanese": "克服する",
    "category": "動詞",
    "example": "She overcame many difficulties to succeed.",
    "exampleJapanese": "彼女は多くの困難を乗り越えて成功した。"
  },
  {
    "english": "participate",
    "japanese": "参加する",
    "category": "動詞",
    "example": "All students were encouraged to participate in the event.",
    "exampleJapanese": "全生徒がイベントに参加するよう奨励された。"
  },
  {
    "english": "perform",
    "japanese": "実行する・演じる",
    "category": "動詞",
    "example": "The orchestra performed beautifully.",
    "exampleJapanese": "オーケストラは見事な演奏を披露した。"
  },
  {
    "english": "plant",
    "japanese": "植える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pollute",
    "japanese": "汚染する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "practice",
    "japanese": "練習する",
    "category": "動詞",
    "example": "Practice makes perfect.",
    "exampleJapanese": "練習が完璧を作る。"
  },
  {
    "english": "predict",
    "japanese": "予言する・予測する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "prefer",
    "japanese": "〜のほうが好きだ",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "prepare",
    "japanese": "準備する",
    "category": "動詞",
    "example": "She prepared carefully for the interview.",
    "exampleJapanese": "彼女は面接のために念入りに準備した。"
  },
  {
    "english": "prevent",
    "japanese": "防ぐ",
    "category": "動詞",
    "example": "Wash your hands to prevent the spread of germs.",
    "exampleJapanese": "細菌の広がりを防ぐために手を洗いなさい。"
  },
  {
    "english": "produce",
    "japanese": "生産する・作る",
    "category": "動詞",
    "example": "Japan produces high-quality electronics.",
    "exampleJapanese": "日本は高品質の電子製品を生産する。"
  },
  {
    "english": "protect",
    "japanese": "守る・保護する",
    "category": "動詞",
    "example": "We must protect endangered animals.",
    "exampleJapanese": "絶滅危惧種を保護しなければならない。"
  },
  {
    "english": "prove",
    "japanese": "証明する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "provide",
    "japanese": "提供する",
    "category": "動詞",
    "example": "The school provides students with textbooks.",
    "exampleJapanese": "学校は生徒に教科書を提供する。"
  },
  {
    "english": "publish",
    "japanese": "出版する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "realize",
    "japanese": "気づく・実現する",
    "category": "動詞",
    "example": "I suddenly realized I had made a mistake.",
    "exampleJapanese": "突然、間違いを犯していたことに気づいた。"
  },
  {
    "english": "receive",
    "japanese": "受け取る",
    "category": "動詞",
    "example": "She received a letter from her pen pal.",
    "exampleJapanese": "彼女はペンパルからの手紙を受け取った。"
  },
  {
    "english": "recognize",
    "japanese": "認識する・認める",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reduce",
    "japanese": "減らす",
    "category": "動詞",
    "example": "We should reduce the amount of plastic we use.",
    "exampleJapanese": "プラスチックの使用量を減らすべきだ。"
  },
  {
    "english": "refuse",
    "japanese": "断る",
    "category": "動詞",
    "example": "He refused to give up even when things got hard.",
    "exampleJapanese": "困難になっても彼はあきらめることを拒んだ。"
  },
  {
    "english": "relate",
    "japanese": "関係する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "remain",
    "japanese": "残る・〜のままである",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "remember",
    "japanese": "覚えている・思い出す",
    "category": "動詞",
    "example": "Do you remember what I told you yesterday?",
    "exampleJapanese": "昨日私が言ったことを覚えていますか？"
  },
  {
    "english": "repeat",
    "japanese": "繰り返す",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "replace",
    "japanese": "取り替える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "require",
    "japanese": "必要とする・要求する",
    "category": "動詞",
    "example": "This job requires excellent communication skills.",
    "exampleJapanese": "この仕事は優れたコミュニケーション能力が必要だ。"
  },
  {
    "english": "research",
    "japanese": "研究する",
    "category": "動詞",
    "example": "Scientists are doing research on a new vaccine.",
    "exampleJapanese": "科学者たちが新しいワクチンの研究をしている。"
  },
  {
    "english": "respect",
    "japanese": "尊敬する",
    "category": "動詞",
    "example": "We should respect people's different opinions.",
    "exampleJapanese": "人々の異なる意見を尊重すべきだ。"
  },
  {
    "english": "return",
    "japanese": "戻る・返す",
    "category": "動詞",
    "example": "He returned the book to the library.",
    "exampleJapanese": "彼は図書館に本を返した。"
  },
  {
    "english": "rise",
    "japanese": "上がる・昇る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "run",
    "japanese": "走る・経営する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "save",
    "japanese": "救う・節約する",
    "category": "動詞",
    "example": "She saved money to buy a new bike.",
    "exampleJapanese": "彼女は新しい自転車を買うためにお金を貯めた。"
  },
  {
    "english": "search",
    "japanese": "探す・検索する",
    "category": "動詞",
    "example": "The rescue team searched for survivors.",
    "exampleJapanese": "救助隊は生存者を捜索した。"
  },
  {
    "english": "seem",
    "japanese": "〜のように見える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "send",
    "japanese": "送る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "share",
    "japanese": "共有する・分かち合う",
    "category": "動詞",
    "example": "We should share our resources equally.",
    "exampleJapanese": "資源を平等に分かち合うべきだ。"
  },
  {
    "english": "show",
    "japanese": "見せる・示す",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "solve",
    "japanese": "解決する",
    "category": "動詞",
    "example": "Can you solve this math problem?",
    "exampleJapanese": "この数学の問題が解けますか？"
  },
  {
    "english": "spread",
    "japanese": "広がる・広める",
    "category": "動詞",
    "example": "News spreads quickly through social media.",
    "exampleJapanese": "ニュースはSNSを通じて素早く広まる。"
  },
  {
    "english": "start",
    "japanese": "始める・始まる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "stop",
    "japanese": "止まる・止める",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "study",
    "japanese": "勉強する・研究する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "succeed",
    "japanese": "成功する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "suffer",
    "japanese": "苦しむ",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "suggest",
    "japanese": "提案する",
    "category": "動詞",
    "example": "She suggested going to the new restaurant.",
    "exampleJapanese": "彼女は新しいレストランに行くことを提案した。"
  },
  {
    "english": "supply",
    "japanese": "供給する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "support",
    "japanese": "支援する・支持する",
    "category": "動詞",
    "example": "His family supported him throughout his career.",
    "exampleJapanese": "彼の家族はキャリアを通じて彼を支えた。"
  },
  {
    "english": "survive",
    "japanese": "生き残る",
    "category": "動詞",
    "example": "Only a few passengers survived the accident.",
    "exampleJapanese": "事故で生き残ったのはわずかな乗客だけだった。"
  },
  {
    "english": "take",
    "japanese": "取る・連れて行く",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "teach",
    "japanese": "教える",
    "category": "動詞",
    "example": "She taught English at a high school for 20 years.",
    "exampleJapanese": "彼女は20年間高校で英語を教えた。"
  },
  {
    "english": "tend",
    "japanese": "〜しがちだ・世話する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "think",
    "japanese": "考える・思う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "throw",
    "japanese": "投げる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "treat",
    "japanese": "扱う・治療する",
    "category": "動詞",
    "example": "He always treats everyone with kindness.",
    "exampleJapanese": "彼はいつも誰にでも親切に接する。"
  },
  {
    "english": "try",
    "japanese": "試みる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "turn",
    "japanese": "回る・変わる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "understand",
    "japanese": "理解する",
    "category": "動詞",
    "example": "It took time to understand the complex theory.",
    "exampleJapanese": "複雑な理論を理解するには時間がかかった。"
  },
  {
    "english": "use",
    "japanese": "使う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "visit",
    "japanese": "訪問する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "wait",
    "japanese": "待つ",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "waste",
    "japanese": "無駄にする",
    "category": "動詞",
    "example": "Don't waste food — think of those who are hungry.",
    "exampleJapanese": "食べ物を無駄にしてはいけない——空腹の人のことを考えなさい。"
  },
  {
    "english": "work",
    "japanese": "働く・機能する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "worry",
    "japanese": "心配する",
    "category": "動詞",
    "example": "Don't worry — everything will be fine.",
    "exampleJapanese": "心配しないで——きっとうまくいくよ。"
  },
  {
    "english": "wonder",
    "japanese": "〜だろうかと思う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "abolish",
    "japanese": "廃止する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accelerate",
    "japanese": "加速する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accompany",
    "japanese": "〜に同伴する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accumulate",
    "japanese": "蓄積する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "acknowledge",
    "japanese": "認める・謝意を示す",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "acquire",
    "japanese": "習得する・取得する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "address",
    "japanese": "取り組む・演説する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "allocate",
    "japanese": "割り当てる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "alter",
    "japanese": "変える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "analyze",
    "japanese": "分析する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "anticipate",
    "japanese": "予期する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "associate",
    "japanese": "関連付ける",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "behave",
    "japanese": "振る舞う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "benefit",
    "japanese": "恩恵を受ける",
    "category": "動詞",
    "example": "Regular exercise has many benefits for your health.",
    "exampleJapanese": "定期的な運動は健康に多くの利点がある。"
  },
  {
    "english": "broaden",
    "japanese": "広げる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "challenge",
    "japanese": "挑戦する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "classify",
    "japanese": "分類する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "combine",
    "japanese": "結合する・組み合わせる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "confirm",
    "japanese": "確認する・確証する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "consume",
    "japanese": "消費する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "defend",
    "japanese": "守る・弁護する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "define",
    "japanese": "定義する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "demonstrate",
    "japanese": "実証する・デモする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "detect",
    "japanese": "発見する・検出する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "determine",
    "japanese": "決定する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "distinguish",
    "japanese": "区別する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dominate",
    "japanese": "支配する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "eliminate",
    "japanese": "排除する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "emerge",
    "japanese": "現れる・台頭する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "emphasize",
    "japanese": "強調する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "enable",
    "japanese": "可能にする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "enhance",
    "japanese": "高める",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ensure",
    "japanese": "確保する・保証する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "evaluate",
    "japanese": "評価する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "evolve",
    "japanese": "進化する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "exceed",
    "japanese": "超える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "examine",
    "japanese": "調べる・診察する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "expose",
    "japanese": "さらす・暴露する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "focus",
    "japanese": "集中する・焦点を当てる",
    "category": "動詞",
    "example": "Try to focus on one task at a time.",
    "exampleJapanese": "一度に一つのことに集中しましょう。"
  },
  {
    "english": "generate",
    "japanese": "生み出す・発生させる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "illustrate",
    "japanese": "説明する・挿絵を描く",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "implement",
    "japanese": "実施する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "indicate",
    "japanese": "示す",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "interpret",
    "japanese": "解釈する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "investigate",
    "japanese": "調査する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "maintain",
    "japanese": "維持する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "modify",
    "japanese": "修正する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "motivate",
    "japanese": "動機づける",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "negotiate",
    "japanese": "交渉する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "oppose",
    "japanese": "反対する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "perceive",
    "japanese": "知覚する・理解する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "preserve",
    "japanese": "保存する・守る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "promote",
    "japanese": "促進する・昇進させる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pursue",
    "japanese": "追求する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reflect",
    "japanese": "反映する・反省する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "regulate",
    "japanese": "規制する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reinforce",
    "japanese": "強化する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rely",
    "japanese": "頼る・信頼する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "represent",
    "japanese": "表す・代表する",
    "category": "動詞",
    "example": "The dove represents peace.",
    "exampleJapanese": "鳩は平和を象徴する。"
  },
  {
    "english": "resist",
    "japanese": "抵抗する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "respond",
    "japanese": "反応する・応答する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "restore",
    "japanese": "回復させる・復元する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reveal",
    "japanese": "明らかにする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "select",
    "japanese": "選ぶ",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "separate",
    "japanese": "分ける・分かれる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "serve",
    "japanese": "仕える・役立つ",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "settle",
    "japanese": "解決する・定住する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "simplify",
    "japanese": "単純化する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "stimulate",
    "japanese": "刺激する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "strengthen",
    "japanese": "強化する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "submit",
    "japanese": "提出する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "transform",
    "japanese": "変容させる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "transmit",
    "japanese": "伝達する・送信する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "undergo",
    "japanese": "経験する・受ける",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "utilize",
    "japanese": "活用する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "vary",
    "japanese": "様々である・変わる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "withdraw",
    "japanese": "撤退する・引き出す",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ability",
    "japanese": "能力",
    "category": "名詞",
    "example": "She has the ability to speak five languages.",
    "exampleJapanese": "彼女は5言語を話す能力がある。"
  },
  {
    "english": "absence",
    "japanese": "不在・欠如",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accident",
    "japanese": "事故",
    "category": "名詞",
    "example": "There was a serious accident on the highway.",
    "exampleJapanese": "高速道路で深刻な事故が起きた。"
  },
  {
    "english": "achievement",
    "japanese": "達成・業績",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "activity",
    "japanese": "活動",
    "category": "名詞",
    "example": "Swimming is my favorite outdoor activity.",
    "exampleJapanese": "水泳は私のお気に入りの屋外活動だ。"
  },
  {
    "english": "advantage",
    "japanese": "利点・有利",
    "category": "名詞",
    "example": "Living near school is a great advantage.",
    "exampleJapanese": "学校の近くに住むことは大きな利点だ。"
  },
  {
    "english": "advertisement",
    "japanese": "広告",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "advice",
    "japanese": "助言",
    "category": "名詞",
    "example": "My teacher gave me useful advice about studying.",
    "exampleJapanese": "先生が勉強について役立つアドバイスをくれた。"
  },
  {
    "english": "age",
    "japanese": "年齢・時代",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "agriculture",
    "japanese": "農業",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "aim",
    "japanese": "目的・目標",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "amount",
    "japanese": "量・金額",
    "category": "名詞",
    "example": "A large amount of rain fell last night.",
    "exampleJapanese": "昨夜、大量の雨が降った。"
  },
  {
    "english": "ancestor",
    "japanese": "先祖",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "anger",
    "japanese": "怒り",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "announcement",
    "japanese": "発表・お知らせ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "answer",
    "japanese": "答え",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "anxiety",
    "japanese": "不安",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "area",
    "japanese": "地域・分野",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "argument",
    "japanese": "議論・言い争い",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "art",
    "japanese": "芸術",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "article",
    "japanese": "記事・条項",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "atmosphere",
    "japanese": "大気・雰囲気",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "attention",
    "japanese": "注意・注目",
    "category": "名詞",
    "example": "Pay attention in class so you can understand the lesson.",
    "exampleJapanese": "授業についていけるよう授業に注意を払いなさい。"
  },
  {
    "english": "attitude",
    "japanese": "態度・姿勢",
    "category": "名詞",
    "example": "A positive attitude helps you succeed.",
    "exampleJapanese": "前向きな姿勢が成功を助ける。"
  },
  {
    "english": "audience",
    "japanese": "観客・聴衆",
    "category": "名詞",
    "example": "The audience clapped loudly at the end of the concert.",
    "exampleJapanese": "コンサートの終わりに観客は大きな拍手をした。"
  },
  {
    "english": "author",
    "japanese": "著者",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "background",
    "japanese": "背景・経歴",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "barrier",
    "japanese": "障壁・壁",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "behavior",
    "japanese": "行動・振る舞い",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "belief",
    "japanese": "信念・信仰",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "birth",
    "japanese": "誕生",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "budget",
    "japanese": "予算",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "campaign",
    "japanese": "運動・キャンペーン",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "capacity",
    "japanese": "容量・能力",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "career",
    "japanese": "職業・経歴",
    "category": "名詞",
    "example": "She has had a successful career as a scientist.",
    "exampleJapanese": "彼女は科学者として成功したキャリアを歩んできた。"
  },
  {
    "english": "century",
    "japanese": "世紀",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "chance",
    "japanese": "機会・可能性",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "character",
    "japanese": "性格・登場人物",
    "category": "名詞",
    "example": "Honesty is an important part of good character.",
    "exampleJapanese": "誠実さは良い人格の重要な部分だ。"
  },
  {
    "english": "charity",
    "japanese": "慈善活動",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "choice",
    "japanese": "選択",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "citizen",
    "japanese": "市民",
    "category": "名詞",
    "example": "Every citizen has the right to vote.",
    "exampleJapanese": "すべての市民に選挙権がある。"
  },
  {
    "english": "civilization",
    "japanese": "文明",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "climate",
    "japanese": "気候",
    "category": "名詞",
    "example": "Climate change is one of the most serious global issues.",
    "exampleJapanese": "気候変動は最も深刻な地球規模の問題の一つだ。"
  },
  {
    "english": "community",
    "japanese": "地域社会・共同体",
    "category": "名詞",
    "example": "She volunteers to help people in her community.",
    "exampleJapanese": "彼女は地域社会の人々を助けるボランティアをしている。"
  },
  {
    "english": "competition",
    "japanese": "競争・大会",
    "category": "名詞",
    "example": "He won first place in the national competition.",
    "exampleJapanese": "彼は全国大会で1位を獲得した。"
  },
  {
    "english": "condition",
    "japanese": "条件・状態",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "conflict",
    "japanese": "衝突・対立",
    "category": "名詞",
    "example": "The conflict between the two countries lasted for years.",
    "exampleJapanese": "2国間の紛争は何年も続いた。"
  },
  {
    "english": "conservation",
    "japanese": "保護・保全",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "consumer",
    "japanese": "消費者",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "continent",
    "japanese": "大陸",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "conversation",
    "japanese": "会話",
    "category": "名詞",
    "example": "We had a long conversation about the future.",
    "exampleJapanese": "将来についての長い会話をした。"
  },
  {
    "english": "cost",
    "japanese": "費用・コスト",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "courage",
    "japanese": "勇気",
    "category": "名詞",
    "example": "It takes courage to stand up for what is right.",
    "exampleJapanese": "正しいことのために立ち上がるには勇気がいる。"
  },
  {
    "english": "creativity",
    "japanese": "創造力",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "crime",
    "japanese": "犯罪",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "crisis",
    "japanese": "危機",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "criticism",
    "japanese": "批判",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "culture",
    "japanese": "文化",
    "category": "名詞",
    "example": "Japan has a unique and rich culture.",
    "exampleJapanese": "日本には独特で豊かな文化がある。"
  },
  {
    "english": "cure",
    "japanese": "治療・治療法",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "custom",
    "japanese": "習慣・風習",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "danger",
    "japanese": "危険",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "data",
    "japanese": "データ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "debate",
    "japanese": "討論",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "decision",
    "japanese": "決断・決定",
    "category": "名詞",
    "example": "Making a good decision requires careful thought.",
    "exampleJapanese": "良い決断をするには慎重な考えが必要だ。"
  },
  {
    "english": "demand",
    "japanese": "需要・要求",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "democracy",
    "japanese": "民主主義",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "destination",
    "japanese": "目的地",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "development",
    "japanese": "発展・開発",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "difference",
    "japanese": "違い・差",
    "category": "名詞",
    "example": "There is a big difference between the two approaches.",
    "exampleJapanese": "2つのアプローチの間には大きな違いがある。"
  },
  {
    "english": "difficulty",
    "japanese": "困難",
    "category": "名詞",
    "example": "She faced many difficulties but never gave up.",
    "exampleJapanese": "彼女は多くの困難に直面したがあきらめなかった。"
  },
  {
    "english": "disaster",
    "japanese": "災害・大惨事",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "discovery",
    "japanese": "発見",
    "category": "名詞",
    "example": "The discovery of penicillin changed medicine forever.",
    "exampleJapanese": "ペニシリンの発見は医学を永遠に変えた。"
  },
  {
    "english": "disease",
    "japanese": "病気",
    "category": "名詞",
    "example": "Washing your hands can prevent the spread of disease.",
    "exampleJapanese": "手洗いで病気の広がりを防げる。"
  },
  {
    "english": "distance",
    "japanese": "距離",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "diversity",
    "japanese": "多様性",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dream",
    "japanese": "夢",
    "category": "名詞",
    "example": "She dreams of becoming a doctor someday.",
    "exampleJapanese": "彼女はいつか医者になる夢を持っている。"
  },
  {
    "english": "drought",
    "japanese": "干ばつ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "economy",
    "japanese": "経済",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "education",
    "japanese": "教育",
    "category": "名詞",
    "example": "Education is the key to a better future.",
    "exampleJapanese": "教育はより良い未来への鍵だ。"
  },
  {
    "english": "effect",
    "japanese": "効果・影響",
    "category": "名詞",
    "example": "The medicine had no side effects.",
    "exampleJapanese": "その薬には副作用がなかった。"
  },
  {
    "english": "effort",
    "japanese": "努力",
    "category": "名詞",
    "example": "With enough effort, you can achieve your goals.",
    "exampleJapanese": "十分な努力があれば目標を達成できる。"
  },
  {
    "english": "electricity",
    "japanese": "電気",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "emergency",
    "japanese": "緊急事態",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "emotion",
    "japanese": "感情",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "empire",
    "japanese": "帝国",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "energy",
    "japanese": "エネルギー",
    "category": "名詞",
    "example": "Solar energy is a clean and renewable resource.",
    "exampleJapanese": "太陽エネルギーはクリーンで再生可能な資源だ。"
  },
  {
    "english": "environment",
    "japanese": "環境",
    "category": "名詞",
    "example": "We must protect the natural environment.",
    "exampleJapanese": "私たちは自然環境を守らなければならない。"
  },
  {
    "english": "equality",
    "japanese": "平等",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "equipment",
    "japanese": "設備・装置",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "era",
    "japanese": "時代",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "event",
    "japanese": "出来事・行事",
    "category": "名詞",
    "example": "The sports event attracted thousands of spectators.",
    "exampleJapanese": "そのスポーツイベントには何千人もの観客が集まった。"
  },
  {
    "english": "evidence",
    "japanese": "証拠",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "example",
    "japanese": "例・手本",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "experiment",
    "japanese": "実験",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "expert",
    "japanese": "専門家",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "expression",
    "japanese": "表現",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fact",
    "japanese": "事実",
    "category": "名詞",
    "example": "It is a fact that the Earth revolves around the Sun.",
    "exampleJapanese": "地球が太陽の周りを回っていることは事実だ。"
  },
  {
    "english": "factor",
    "japanese": "要因・要素",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "failure",
    "japanese": "失敗",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "famine",
    "japanese": "飢饉",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "feature",
    "japanese": "特徴",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "festival",
    "japanese": "祭り・フェスティバル",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "figure",
    "japanese": "数字・人物",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "flood",
    "japanese": "洪水",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "freedom",
    "japanese": "自由",
    "category": "名詞",
    "example": "Freedom of speech is an important human right.",
    "exampleJapanese": "言論の自由は重要な人権だ。"
  },
  {
    "english": "fuel",
    "japanese": "燃料",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "function",
    "japanese": "機能・役割",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "future",
    "japanese": "未来",
    "category": "名詞",
    "example": "We should think about the future of our planet.",
    "exampleJapanese": "私たちは地球の未来について考えるべきだ。"
  },
  {
    "english": "generation",
    "japanese": "世代",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "goal",
    "japanese": "目標・ゴール",
    "category": "名詞",
    "example": "Her goal is to become a professional musician.",
    "exampleJapanese": "彼女の目標はプロの音楽家になることだ。"
  },
  {
    "english": "government",
    "japanese": "政府",
    "category": "名詞",
    "example": "The government introduced new environmental laws.",
    "exampleJapanese": "政府は新しい環境法を導入した。"
  },
  {
    "english": "growth",
    "japanese": "成長",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "habitat",
    "japanese": "生息地",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "happiness",
    "japanese": "幸福",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "harm",
    "japanese": "害・危害",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "harvest",
    "japanese": "収穫",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "health",
    "japanese": "健康",
    "category": "名詞",
    "example": "Exercise and a balanced diet are important for good health.",
    "exampleJapanese": "運動とバランスの良い食事は健康に重要だ。"
  },
  {
    "english": "heritage",
    "japanese": "遺産",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "history",
    "japanese": "歴史",
    "category": "名詞",
    "example": "We can learn many lessons from history.",
    "exampleJapanese": "歴史から多くの教訓を学ぶことができる。"
  },
  {
    "english": "hunger",
    "japanese": "飢え・空腹",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "idea",
    "japanese": "考え・アイデア",
    "category": "名詞",
    "example": "She came up with a great idea for the project.",
    "exampleJapanese": "彼女はプロジェクトの素晴らしいアイデアを思いついた。"
  },
  {
    "english": "identity",
    "japanese": "同一性・アイデンティティ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "imagination",
    "japanese": "想像力",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "impact",
    "japanese": "影響・衝撃",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "importance",
    "japanese": "重要性",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "improvement",
    "japanese": "改善",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "independence",
    "japanese": "独立",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "industry",
    "japanese": "産業",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "information",
    "japanese": "情報",
    "category": "名詞",
    "example": "Please provide as much information as possible.",
    "exampleJapanese": "できるだけ多くの情報を提供してください。"
  },
  {
    "english": "infrastructure",
    "japanese": "インフラ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "injury",
    "japanese": "けが",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "innovation",
    "japanese": "革新",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "institution",
    "japanese": "機関・施設",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "intelligence",
    "japanese": "知性・情報",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "interest",
    "japanese": "興味・利子",
    "category": "名詞",
    "example": "He has a strong interest in astronomy.",
    "exampleJapanese": "彼は天文学に強い関心を持っている。"
  },
  {
    "english": "issue",
    "japanese": "問題・課題",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "journey",
    "japanese": "旅・旅程",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "justice",
    "japanese": "正義",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "knowledge",
    "japanese": "知識",
    "category": "名詞",
    "example": "Knowledge is power.",
    "exampleJapanese": "知識は力なり。"
  },
  {
    "english": "labor",
    "japanese": "労働",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "land",
    "japanese": "土地・陸地",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "language",
    "japanese": "言語",
    "category": "名詞",
    "example": "Learning a new language takes time and patience.",
    "exampleJapanese": "新しい言語を学ぶには時間と忍耐が必要だ。"
  },
  {
    "english": "leader",
    "japanese": "指導者",
    "category": "名詞",
    "example": "A good leader listens to everyone's opinion.",
    "exampleJapanese": "良いリーダーは皆の意見を聞く。"
  },
  {
    "english": "liberty",
    "japanese": "自由",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "lifestyle",
    "japanese": "生活様式",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "loss",
    "japanese": "損失",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "material",
    "japanese": "材料・物質",
    "category": "名詞",
    "example": "This jacket is made from recycled material.",
    "exampleJapanese": "このジャケットはリサイクル素材で作られている。"
  },
  {
    "english": "meaning",
    "japanese": "意味",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "media",
    "japanese": "メディア・媒体",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "medicine",
    "japanese": "薬・医学",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "memory",
    "japanese": "記憶",
    "category": "名詞",
    "example": "She has a wonderful memory for names.",
    "exampleJapanese": "彼女は名前をよく覚える素晴らしい記憶力がある。"
  },
  {
    "english": "message",
    "japanese": "メッセージ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "method",
    "japanese": "方法",
    "category": "名詞",
    "example": "The new teaching method has improved students' grades.",
    "exampleJapanese": "新しい指導法が生徒の成績を向上させた。"
  },
  {
    "english": "migration",
    "japanese": "移住・移動",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "minority",
    "japanese": "少数派",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mission",
    "japanese": "使命・任務",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mistake",
    "japanese": "間違い",
    "category": "名詞",
    "example": "Everyone makes mistakes — the important thing is to learn from them.",
    "exampleJapanese": "誰でも間違いを犯す——大切なのはそこから学ぶことだ。"
  },
  {
    "english": "model",
    "japanese": "模型・手本",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "movement",
    "japanese": "運動・動き",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "nature",
    "japanese": "自然・性質",
    "category": "名詞",
    "example": "We should appreciate the beauty of nature.",
    "exampleJapanese": "自然の美しさに感謝するべきだ。"
  },
  {
    "english": "network",
    "japanese": "ネットワーク",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "norm",
    "japanese": "規範",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "obstacle",
    "japanese": "障害・妨害",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "opportunity",
    "japanese": "機会",
    "category": "名詞",
    "example": "Studying abroad gave her the opportunity to grow.",
    "exampleJapanese": "留学が彼女に成長する機会を与えた。"
  },
  {
    "english": "opinion",
    "japanese": "意見",
    "category": "名詞",
    "example": "What is your opinion on this topic?",
    "exampleJapanese": "この話題についてあなたの意見は何ですか？"
  },
  {
    "english": "order",
    "japanese": "命令・注文・順序",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "organization",
    "japanese": "組織",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "outcome",
    "japanese": "結果・成果",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "patience",
    "japanese": "忍耐",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "peace",
    "japanese": "平和",
    "category": "名詞",
    "example": "The world needs more peace and understanding.",
    "exampleJapanese": "世界にはもっと平和と理解が必要だ。"
  },
  {
    "english": "period",
    "japanese": "期間・時代",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "permission",
    "japanese": "許可",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "policy",
    "japanese": "政策・方針",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pollution",
    "japanese": "汚染",
    "category": "名詞",
    "example": "Air pollution is a serious problem in many cities.",
    "exampleJapanese": "大気汚染は多くの都市で深刻な問題だ。"
  },
  {
    "english": "population",
    "japanese": "人口",
    "category": "名詞",
    "example": "The population of Japan is decreasing.",
    "exampleJapanese": "日本の人口は減少している。"
  },
  {
    "english": "possibility",
    "japanese": "可能性",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "poverty",
    "japanese": "貧困",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "power",
    "japanese": "力・権力",
    "category": "名詞",
    "example": "The wind has the power to generate electricity.",
    "exampleJapanese": "風には電気を発生させる力がある。"
  },
  {
    "english": "pressure",
    "japanese": "圧力・プレッシャー",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pride",
    "japanese": "誇り",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "process",
    "japanese": "過程・プロセス",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "progress",
    "japanese": "進歩",
    "category": "名詞",
    "example": "She made great progress in her English studies.",
    "exampleJapanese": "彼女は英語の勉強で大きな進歩を遂げた。"
  },
  {
    "english": "project",
    "japanese": "計画・プロジェクト",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "proof",
    "japanese": "証拠・証明",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "purpose",
    "japanese": "目的",
    "category": "名詞",
    "example": "What is the purpose of your visit?",
    "exampleJapanese": "訪問の目的は何ですか？"
  },
  {
    "english": "reality",
    "japanese": "現実",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reason",
    "japanese": "理由・理性",
    "category": "名詞",
    "example": "The reason for her success is hard work.",
    "exampleJapanese": "彼女が成功した理由は努力だ。"
  },
  {
    "english": "relationship",
    "japanese": "関係",
    "category": "名詞",
    "example": "A good relationship is built on trust.",
    "exampleJapanese": "良い関係は信頼の上に築かれる。"
  },
  {
    "english": "religion",
    "japanese": "宗教",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "resource",
    "japanese": "資源",
    "category": "名詞",
    "example": "Water is a precious natural resource.",
    "exampleJapanese": "水は貴重な天然資源だ。"
  },
  {
    "english": "responsibility",
    "japanese": "責任",
    "category": "名詞",
    "example": "It is your responsibility to take care of the environment.",
    "exampleJapanese": "環境を守ることはあなたの責任だ。"
  },
  {
    "english": "result",
    "japanese": "結果",
    "category": "名詞",
    "example": "The result of the election surprised everyone.",
    "exampleJapanese": "選挙の結果は皆を驚かせた。"
  },
  {
    "english": "revolution",
    "japanese": "革命",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "right",
    "japanese": "権利・正しいこと",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "risk",
    "japanese": "リスク・危険",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "role",
    "japanese": "役割",
    "category": "名詞",
    "example": "Parents play an important role in their children's education.",
    "exampleJapanese": "親は子供の教育において重要な役割を果たす。"
  },
  {
    "english": "rule",
    "japanese": "規則",
    "category": "名詞",
    "example": "Every game has its own rules.",
    "exampleJapanese": "すべてのゲームには独自のルールがある。"
  },
  {
    "english": "safety",
    "japanese": "安全",
    "category": "名詞",
    "example": "Wearing a seatbelt is important for your safety.",
    "exampleJapanese": "シートベルトをすることは安全のために重要だ。"
  },
  {
    "english": "science",
    "japanese": "科学",
    "category": "名詞",
    "example": "Science helps us understand the world around us.",
    "exampleJapanese": "科学は私たちの周りの世界を理解するのに役立つ。"
  },
  {
    "english": "sense",
    "japanese": "感覚・意味",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "shortage",
    "japanese": "不足",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sign",
    "japanese": "しるし・標識",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "skill",
    "japanese": "技術・能力",
    "category": "名詞",
    "example": "Communication is an essential skill in the workplace.",
    "exampleJapanese": "コミュニケーションは職場において不可欠なスキルだ。"
  },
  {
    "english": "society",
    "japanese": "社会",
    "category": "名詞",
    "example": "Everyone has a role to play in society.",
    "exampleJapanese": "誰もが社会で果たすべき役割がある。"
  },
  {
    "english": "solution",
    "japanese": "解決策",
    "category": "名詞",
    "example": "We need to find a solution to climate change.",
    "exampleJapanese": "気候変動への解決策を見つける必要がある。"
  },
  {
    "english": "source",
    "japanese": "源・情報源",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "species",
    "japanese": "種（生物）",
    "category": "名詞",
    "example": "Many species of animals are endangered today.",
    "exampleJapanese": "今日、多くの種の動物が絶滅危惧にある。"
  },
  {
    "english": "statement",
    "japanese": "声明・主張",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "strategy",
    "japanese": "戦略",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "stress",
    "japanese": "ストレス・強調",
    "category": "名詞",
    "example": "Too much stress can be harmful to your health.",
    "exampleJapanese": "過度のストレスは健康に有害だ。"
  },
  {
    "english": "structure",
    "japanese": "構造",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "success",
    "japanese": "成功",
    "category": "名詞",
    "example": "Success comes to those who work hard and never give up.",
    "exampleJapanese": "成功は懸命に働き、決してあきらめない者のところにやってくる。"
  },
  {
    "english": "symbol",
    "japanese": "象徴",
    "category": "名詞",
    "example": "The cherry blossom is a symbol of Japan.",
    "exampleJapanese": "桜は日本の象徴だ。"
  },
  {
    "english": "system",
    "japanese": "仕組み・システム",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "talent",
    "japanese": "才能",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "technology",
    "japanese": "技術・テクノロジー",
    "category": "名詞",
    "example": "Modern technology makes our lives more convenient.",
    "exampleJapanese": "現代のテクノロジーは私たちの生活をより便利にする。"
  },
  {
    "english": "theory",
    "japanese": "理論",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "threat",
    "japanese": "脅威・脅し",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "trade",
    "japanese": "貿易・取引",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "tradition",
    "japanese": "伝統",
    "category": "名詞",
    "example": "This festival is an important cultural tradition.",
    "exampleJapanese": "このお祭りは重要な文化的伝統だ。"
  },
  {
    "english": "trend",
    "japanese": "傾向・トレンド",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "truth",
    "japanese": "真実",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "understanding",
    "japanese": "理解",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "value",
    "japanese": "価値・価値観",
    "category": "名詞",
    "example": "Hard work and honesty are important values.",
    "exampleJapanese": "勤勉さと誠実さは重要な価値観だ。"
  },
  {
    "english": "variety",
    "japanese": "多様性・種類",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "victim",
    "japanese": "被害者",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "violence",
    "japanese": "暴力",
    "category": "名詞",
    "example": "Violence is never the answer to problems.",
    "exampleJapanese": "暴力は問題への答えにはならない。"
  },
  {
    "english": "volunteer",
    "japanese": "ボランティア",
    "category": "名詞",
    "example": "She works as a volunteer at the local hospital.",
    "exampleJapanese": "彼女は地元の病院でボランティアとして働いている。"
  },
  {
    "english": "wealth",
    "japanese": "富・財産",
    "category": "名詞",
    "example": "Health is more important than wealth.",
    "exampleJapanese": "健康は富より大切だ。"
  },
  {
    "english": "welfare",
    "japanese": "福祉",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "wildlife",
    "japanese": "野生生物",
    "category": "名詞",
    "example": "The national park protects the local wildlife.",
    "exampleJapanese": "国立公園が地元の野生動物を保護している。"
  },
  {
    "english": "wisdom",
    "japanese": "知恵",
    "category": "名詞",
    "example": "With age comes wisdom.",
    "exampleJapanese": "年齢とともに知恵がついてくる。"
  },
  {
    "english": "abstract",
    "japanese": "概要・抽象概念",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accuracy",
    "japanese": "正確さ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "adaptation",
    "japanese": "適応・改作",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "administration",
    "japanese": "行政・管理",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "adoption",
    "japanese": "採用・養子縁組",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "agent",
    "japanese": "代理人・要因",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "alliance",
    "japanese": "同盟",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "alternative",
    "japanese": "代替案",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "analysis",
    "japanese": "分析",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "appeal",
    "japanese": "訴え・魅力",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "application",
    "japanese": "応募・申請・適用",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "approach",
    "japanese": "アプローチ・方法",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "assumption",
    "japanese": "仮定・推定",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "authority",
    "japanese": "権威・当局",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "awareness",
    "japanese": "意識・認識",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "breakthrough",
    "japanese": "突破口・大発見",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "circumstance",
    "japanese": "状況・事情",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "collaboration",
    "japanese": "協力・共同作業",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "commitment",
    "japanese": "献身・約束",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "consequence",
    "japanese": "結果・影響",
    "category": "名詞",
    "example": "Think carefully before acting — consider the consequences.",
    "exampleJapanese": "行動する前によく考えなさい——結果を考慮しなさい。"
  },
  {
    "english": "context",
    "japanese": "文脈・状況",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "contribution",
    "japanese": "貢献",
    "category": "名詞",
    "example": "Her contribution to science was recognized worldwide.",
    "exampleJapanese": "科学への彼女の貢献は世界中で認められた。"
  },
  {
    "english": "controversy",
    "japanese": "論争",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "corporation",
    "japanese": "企業・法人",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "declaration",
    "japanese": "宣言",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dedication",
    "japanese": "献身・情熱",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "definition",
    "japanese": "定義",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "depression",
    "japanese": "不況・うつ病",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "discrimination",
    "japanese": "差別",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "distribution",
    "japanese": "分配・流通",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "efficiency",
    "japanese": "効率",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "emission",
    "japanese": "排出・放出",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "expectation",
    "japanese": "期待・予想",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "exploration",
    "japanese": "探検・調査",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "extinction",
    "japanese": "絶滅",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "foundation",
    "japanese": "基盤・財団",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "gender",
    "japanese": "性別",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "globalization",
    "japanese": "グローバル化",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "hypothesis",
    "japanese": "仮説",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "implication",
    "japanese": "含意・影響",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "incentive",
    "japanese": "動機・奨励策",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inequality",
    "japanese": "不平等",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "initiative",
    "japanese": "主導権・取り組み",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "integration",
    "japanese": "統合",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "legislation",
    "japanese": "法律・立法",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mechanism",
    "japanese": "仕組み・メカニズム",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mentor",
    "japanese": "師匠・指導者",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "momentum",
    "japanese": "勢い",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "motivation",
    "japanese": "動機",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "obligation",
    "japanese": "義務",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "option",
    "japanese": "選択肢",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "participant",
    "japanese": "参加者",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "perspective",
    "japanese": "観点・視点",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "phenomenon",
    "japanese": "現象",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "prejudice",
    "japanese": "偏見",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "principle",
    "japanese": "原則・原理",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "privilege",
    "japanese": "特権",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "production",
    "japanese": "生産",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "profession",
    "japanese": "職業",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "profit",
    "japanese": "利益",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "proposal",
    "japanese": "提案",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "recognition",
    "japanese": "認識・認知",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reform",
    "japanese": "改革",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "region",
    "japanese": "地域・地方",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "regulation",
    "japanese": "規制・規則",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reputation",
    "japanese": "評判",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sacrifice",
    "japanese": "犠牲",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "satisfaction",
    "japanese": "満足",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "significance",
    "japanese": "重要性・意義",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "stereotype",
    "japanese": "固定観念",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "suburb",
    "japanese": "郊外",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sustainability",
    "japanese": "持続可能性",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "tension",
    "japanese": "緊張",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "tolerance",
    "japanese": "寛容さ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "transformation",
    "japanese": "変容・変革",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "transportation",
    "japanese": "輸送・交通手段",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "unemployment",
    "japanese": "失業",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "unity",
    "japanese": "統一・団結",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "urbanization",
    "japanese": "都市化",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "viewpoint",
    "japanese": "視点・観点",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "vision",
    "japanese": "ビジョン・将来像",
    "category": "名詞",
    "example": "He had a clear vision of what he wanted to achieve.",
    "exampleJapanese": "彼は達成したいことについて明確なビジョンを持っていた。"
  },
  {
    "english": "vulnerability",
    "japanese": "脆弱性",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "able",
    "japanese": "〜できる・有能な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "absent",
    "japanese": "不在の・欠けている",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accurate",
    "japanese": "正確な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "active",
    "japanese": "活発な・積極的な",
    "category": "形容詞",
    "example": "She is very active in school clubs.",
    "exampleJapanese": "彼女は学校のクラブ活動にとても積極的だ。"
  },
  {
    "english": "actual",
    "japanese": "実際の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "adequate",
    "japanese": "十分な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "advanced",
    "japanese": "高度な・先進的な",
    "category": "形容詞",
    "example": "This is an advanced level English course.",
    "exampleJapanese": "これは上級レベルの英語コースだ。"
  },
  {
    "english": "afraid",
    "japanese": "恐れている",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "aggressive",
    "japanese": "攻撃的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "amazing",
    "japanese": "驚くべき",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ambitious",
    "japanese": "野心的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ancient",
    "japanese": "古代の",
    "category": "形容詞",
    "example": "Ancient Greek culture influenced the world.",
    "exampleJapanese": "古代ギリシャ文化は世界に影響を与えた。"
  },
  {
    "english": "angry",
    "japanese": "怒った",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "annual",
    "japanese": "年1回の・毎年の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "anxious",
    "japanese": "心配した・熱望している",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "appropriate",
    "japanese": "適切な",
    "category": "形容詞",
    "example": "Is this topic appropriate for children?",
    "exampleJapanese": "このトピックは子供にふさわしいですか？"
  },
  {
    "english": "artificial",
    "japanese": "人工の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "attractive",
    "japanese": "魅力的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "available",
    "japanese": "利用できる",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "aware",
    "japanese": "気づいている",
    "category": "形容詞",
    "example": "Are you aware of the risks involved?",
    "exampleJapanese": "関わるリスクに気づいていますか？"
  },
  {
    "english": "basic",
    "japanese": "基本的な",
    "category": "形容詞",
    "example": "Let me explain the basic rules of the game.",
    "exampleJapanese": "ゲームの基本ルールを説明させてください。"
  },
  {
    "english": "beneficial",
    "japanese": "有益な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "brave",
    "japanese": "勇敢な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "brief",
    "japanese": "短い・簡潔な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "broad",
    "japanese": "広い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "calm",
    "japanese": "穏やかな・落ち着いた",
    "category": "形容詞",
    "example": "Stay calm even when things go wrong.",
    "exampleJapanese": "物事がうまくいかないときでも冷静でいなさい。"
  },
  {
    "english": "capable",
    "japanese": "有能な・〜できる",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "careful",
    "japanese": "注意深い",
    "category": "形容詞",
    "example": "Be careful when crossing the street.",
    "exampleJapanese": "道路を渡るときは注意しなさい。"
  },
  {
    "english": "certain",
    "japanese": "確かな・ある",
    "category": "形容詞",
    "example": "Are you certain that you locked the door?",
    "exampleJapanese": "ドアに鍵をかけたことは確かですか？"
  },
  {
    "english": "clear",
    "japanese": "明確な・澄んだ",
    "category": "形容詞",
    "example": "Please give a clear explanation.",
    "exampleJapanese": "明確な説明をしてください。"
  },
  {
    "english": "clever",
    "japanese": "賢い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "colorful",
    "japanese": "色鮮やかな",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "comfortable",
    "japanese": "快適な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "common",
    "japanese": "一般的な・共通の",
    "category": "形容詞",
    "example": "It is common for students to feel nervous before exams.",
    "exampleJapanese": "試験前に緊張するのは学生によく見られることだ。"
  },
  {
    "english": "complex",
    "japanese": "複雑な",
    "category": "形容詞",
    "example": "The human brain is an extremely complex organ.",
    "exampleJapanese": "人間の脳は非常に複雑な器官だ。"
  },
  {
    "english": "confident",
    "japanese": "自信のある",
    "category": "形容詞",
    "example": "She felt confident before her big speech.",
    "exampleJapanese": "大きなスピーチの前に彼女は自信を持っていた。"
  },
  {
    "english": "confused",
    "japanese": "混乱した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "conscious",
    "japanese": "意識している",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "convenient",
    "japanese": "便利な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "correct",
    "japanese": "正しい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "creative",
    "japanese": "創造的な",
    "category": "形容詞",
    "example": "Children are naturally creative and imaginative.",
    "exampleJapanese": "子供たちは本来的に創造的で想像力豊かだ。"
  },
  {
    "english": "critical",
    "japanese": "重大な・批判的な",
    "category": "形容詞",
    "example": "Critical thinking is an essential skill.",
    "exampleJapanese": "批判的思考は不可欠なスキルだ。"
  },
  {
    "english": "cruel",
    "japanese": "残酷な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "curious",
    "japanese": "好奇心旺盛な",
    "category": "形容詞",
    "example": "She was curious about life in other countries.",
    "exampleJapanese": "彼女は他の国での生活に好奇心を持っていた。"
  },
  {
    "english": "current",
    "japanese": "現在の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dangerous",
    "japanese": "危険な",
    "category": "形容詞",
    "example": "It is dangerous to walk alone at night.",
    "exampleJapanese": "夜一人で歩くのは危険だ。"
  },
  {
    "english": "deep",
    "japanese": "深い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dependent",
    "japanese": "依存している",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "desperate",
    "japanese": "必死の・絶望的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "different",
    "japanese": "異なる",
    "category": "形容詞",
    "example": "Every person is different in their own way.",
    "exampleJapanese": "人はそれぞれ独自の意味で異なる。"
  },
  {
    "english": "difficult",
    "japanese": "難しい",
    "category": "形容詞",
    "example": "Learning a new language can be difficult at first.",
    "exampleJapanese": "新しい言語を学ぶのは最初は難しいことがある。"
  },
  {
    "english": "direct",
    "japanese": "直接の・率直な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "disappointed",
    "japanese": "失望した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "diverse",
    "japanese": "多様な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dramatic",
    "japanese": "劇的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "eager",
    "japanese": "熱心な・熱望している",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "effective",
    "japanese": "効果的な",
    "category": "形容詞",
    "example": "Exercise is an effective way to reduce stress.",
    "exampleJapanese": "運動はストレスを軽減する効果的な方法だ。"
  },
  {
    "english": "efficient",
    "japanese": "効率的な",
    "category": "形容詞",
    "example": "Using public transport is more efficient in the city.",
    "exampleJapanese": "都市では公共交通機関を使う方が効率的だ。"
  },
  {
    "english": "emotional",
    "japanese": "感情的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "enormous",
    "japanese": "巨大な・莫大な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "essential",
    "japanese": "不可欠な・本質的な",
    "category": "形容詞",
    "example": "Water is essential for all living things.",
    "exampleJapanese": "水はすべての生き物にとって不可欠だ。"
  },
  {
    "english": "evident",
    "japanese": "明らかな",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "exact",
    "japanese": "正確な・まさに",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "excellent",
    "japanese": "優秀な",
    "category": "形容詞",
    "example": "She received excellent marks on her report card.",
    "exampleJapanese": "彼女は通知表で優秀な成績を受け取った。"
  },
  {
    "english": "exciting",
    "japanese": "わくわくする",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "expensive",
    "japanese": "高価な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "experienced",
    "japanese": "経験豊富な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "extreme",
    "japanese": "極端な・激しい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fair",
    "japanese": "公平な・まあまあの",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "faithful",
    "japanese": "忠実な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "familiar",
    "japanese": "よく知られた・慣れた",
    "category": "形容詞",
    "example": "Are you familiar with this type of problem?",
    "exampleJapanese": "このタイプの問題に詳しいですか？"
  },
  {
    "english": "famous",
    "japanese": "有名な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "flexible",
    "japanese": "柔軟な",
    "category": "形容詞",
    "example": "You need to be flexible when working with others.",
    "exampleJapanese": "他の人と働く際は柔軟でなければならない。"
  },
  {
    "english": "formal",
    "japanese": "正式な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fortunate",
    "japanese": "幸運な",
    "category": "形容詞",
    "example": "We are fortunate to live in such a peaceful country.",
    "exampleJapanese": "こんなに平和な国に住んでいることは幸運だ。"
  },
  {
    "english": "free",
    "japanese": "自由な・無料の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "frequent",
    "japanese": "頻繁な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "frustrated",
    "japanese": "欲求不満の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fundamental",
    "japanese": "根本的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "general",
    "japanese": "一般的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "generous",
    "japanese": "寛大な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "gentle",
    "japanese": "穏やかな・優しい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "global",
    "japanese": "世界的な",
    "category": "形容詞",
    "example": "Climate change is a global problem.",
    "exampleJapanese": "気候変動は地球規模の問題だ。"
  },
  {
    "english": "gradual",
    "japanese": "徐々の・緩やかな",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "grateful",
    "japanese": "感謝している",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "happy",
    "japanese": "幸せな",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "harmful",
    "japanese": "有害な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "healthy",
    "japanese": "健康的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "honest",
    "japanese": "正直な",
    "category": "形容詞",
    "example": "It is important to be honest in all situations.",
    "exampleJapanese": "すべての状況で正直であることが重要だ。"
  },
  {
    "english": "huge",
    "japanese": "巨大な",
    "category": "形容詞",
    "example": "There was a huge crowd at the concert.",
    "exampleJapanese": "コンサートには巨大な群衆がいた。"
  },
  {
    "english": "humble",
    "japanese": "謙虚な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ideal",
    "japanese": "理想的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ignorant",
    "japanese": "無知な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "illegal",
    "japanese": "違法な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "immediate",
    "japanese": "即座の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "important",
    "japanese": "重要な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "impossible",
    "japanese": "不可能な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "independent",
    "japanese": "独立した",
    "category": "形容詞",
    "example": "She became more independent after living alone.",
    "exampleJapanese": "一人暮らしをしてから彼女はより自立した。"
  },
  {
    "english": "individual",
    "japanese": "個人の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "industrial",
    "japanese": "産業の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "influential",
    "japanese": "影響力のある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "innovative",
    "japanese": "革新的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "intelligent",
    "japanese": "知的な",
    "category": "形容詞",
    "example": "He is one of the most intelligent students in the class.",
    "exampleJapanese": "彼はクラスで最も知的な生徒の一人だ。"
  },
  {
    "english": "interested",
    "japanese": "興味をもった",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "international",
    "japanese": "国際的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "jealous",
    "japanese": "嫉妬した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "kind",
    "japanese": "親切な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "likely",
    "japanese": "〜しそうな",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "logical",
    "japanese": "論理的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "lonely",
    "japanese": "孤独な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "major",
    "japanese": "主要な・大きな",
    "category": "形容詞",
    "example": "Air pollution is a major problem in big cities.",
    "exampleJapanese": "大気汚染は大都市の主要な問題だ。"
  },
  {
    "english": "mental",
    "japanese": "精神的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "minor",
    "japanese": "少数の・小さな",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "modern",
    "japanese": "現代的な",
    "category": "形容詞",
    "example": "Modern technology has changed the way we communicate.",
    "exampleJapanese": "現代のテクノロジーは私たちのコミュニケーション方法を変えた。"
  },
  {
    "english": "moral",
    "japanese": "道徳的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "motivated",
    "japanese": "やる気のある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mysterious",
    "japanese": "謎めいた",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "narrow",
    "japanese": "狭い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "natural",
    "japanese": "自然の",
    "category": "形容詞",
    "example": "It is natural to feel nervous before a performance.",
    "exampleJapanese": "発表の前に緊張するのは当然だ。"
  },
  {
    "english": "necessary",
    "japanese": "必要な",
    "category": "形容詞",
    "example": "Is it necessary to wear a uniform at this school?",
    "exampleJapanese": "この学校では制服を着る必要がありますか？"
  },
  {
    "english": "negative",
    "japanese": "否定的な・マイナスの",
    "category": "形容詞",
    "example": "Try not to have a negative attitude toward challenges.",
    "exampleJapanese": "困難に対してネガティブな姿勢を持たないようにしなさい。"
  },
  {
    "english": "nervous",
    "japanese": "緊張した・神経質な",
    "category": "形容詞",
    "example": "I was very nervous before the interview.",
    "exampleJapanese": "面接の前はとても緊張した。"
  },
  {
    "english": "obvious",
    "japanese": "明らかな",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "official",
    "japanese": "公式の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ordinary",
    "japanese": "普通の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "original",
    "japanese": "独創的な・元の",
    "category": "形容詞",
    "example": "She always comes up with original ideas.",
    "exampleJapanese": "彼女はいつも独創的なアイデアを思いつく。"
  },
  {
    "english": "particular",
    "japanese": "特定の・特に",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "patient",
    "japanese": "忍耐強い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "peaceful",
    "japanese": "平和な",
    "category": "形容詞",
    "example": "The park was quiet and peaceful in the morning.",
    "exampleJapanese": "朝、公園は静かで平和だった。"
  },
  {
    "english": "physical",
    "japanese": "身体的な",
    "category": "形容詞",
    "example": "Regular physical exercise keeps you healthy.",
    "exampleJapanese": "定期的な身体的運動は健康を保つ。"
  },
  {
    "english": "polite",
    "japanese": "礼儀正しい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "political",
    "japanese": "政治的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "popular",
    "japanese": "人気のある",
    "category": "形容詞",
    "example": "This song is popular among young people.",
    "exampleJapanese": "この曲は若者の間で人気がある。"
  },
  {
    "english": "positive",
    "japanese": "積極的な・プラスの",
    "category": "形容詞",
    "example": "Keep a positive attitude and you will succeed.",
    "exampleJapanese": "前向きな姿勢を持ち続ければ成功するだろう。"
  },
  {
    "english": "possible",
    "japanese": "可能な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "powerful",
    "japanese": "力強い・強力な",
    "category": "形容詞",
    "example": "The prime minister gave a powerful speech.",
    "exampleJapanese": "首相は力強いスピーチを行った。"
  },
  {
    "english": "practical",
    "japanese": "実用的な",
    "category": "形容詞",
    "example": "This is a practical solution to the problem.",
    "exampleJapanese": "これは問題に対する実用的な解決策だ。"
  },
  {
    "english": "precious",
    "japanese": "貴重な",
    "category": "形容詞",
    "example": "Time is the most precious thing we have.",
    "exampleJapanese": "時間は私たちが持つ最も貴重なものだ。"
  },
  {
    "english": "previous",
    "japanese": "前の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "primary",
    "japanese": "主要な・最初の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "productive",
    "japanese": "生産的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "proper",
    "japanese": "適切な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "proud",
    "japanese": "誇りに思う",
    "category": "形容詞",
    "example": "She was proud of her son's achievements.",
    "exampleJapanese": "彼女は息子の成果を誇りに思っていた。"
  },
  {
    "english": "public",
    "japanese": "公共の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pure",
    "japanese": "純粋な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rapid",
    "japanese": "速い・急速な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rare",
    "japanese": "まれな・珍しい",
    "category": "形容詞",
    "example": "Snow is rare in this part of Japan.",
    "exampleJapanese": "日本のこの地域では雪は珍しい。"
  },
  {
    "english": "reasonable",
    "japanese": "合理的な・手頃な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reliable",
    "japanese": "信頼できる",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "remarkable",
    "japanese": "注目すべき・際立った",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "responsible",
    "japanese": "責任ある",
    "category": "形容詞",
    "example": "You must be responsible for your own actions.",
    "exampleJapanese": "自分自身の行動に責任を持たなければならない。"
  },
  {
    "english": "safe",
    "japanese": "安全な",
    "category": "形容詞",
    "example": "Make sure the area is safe before you proceed.",
    "exampleJapanese": "進める前にその場所が安全であることを確認しなさい。"
  },
  {
    "english": "satisfied",
    "japanese": "満足した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "serious",
    "japanese": "深刻な・真剣な",
    "category": "形容詞",
    "example": "Pollution is a serious threat to the environment.",
    "exampleJapanese": "汚染は環境への深刻な脅威だ。"
  },
  {
    "english": "significant",
    "japanese": "重要な・重大な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "similar",
    "japanese": "似ている",
    "category": "形容詞",
    "example": "The two languages are similar in many ways.",
    "exampleJapanese": "その2つの言語は多くの点で似ている。"
  },
  {
    "english": "simple",
    "japanese": "単純な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "skillful",
    "japanese": "熟練した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "social",
    "japanese": "社会的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "special",
    "japanese": "特別な",
    "category": "形容詞",
    "example": "Today is a very special day for our family.",
    "exampleJapanese": "今日は家族にとってとても特別な日だ。"
  },
  {
    "english": "specific",
    "japanese": "具体的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "strange",
    "japanese": "奇妙な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "strict",
    "japanese": "厳しい",
    "category": "形容詞",
    "example": "The teacher is strict but fair.",
    "exampleJapanese": "先生は厳しいが公平だ。"
  },
  {
    "english": "strong",
    "japanese": "強い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "successful",
    "japanese": "成功した",
    "category": "形容詞",
    "example": "He became a successful businessman in his 30s.",
    "exampleJapanese": "彼は30代で成功したビジネスマンになった。"
  },
  {
    "english": "sudden",
    "japanese": "突然の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sufficient",
    "japanese": "十分な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "suitable",
    "japanese": "適切な・ふさわしい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "surprising",
    "japanese": "驚くべき",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sustainable",
    "japanese": "持続可能な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "temporary",
    "japanese": "一時的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "terrible",
    "japanese": "ひどい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "thoughtful",
    "japanese": "思いやりのある・考え深い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "traditional",
    "japanese": "伝統的な",
    "category": "形容詞",
    "example": "We wore traditional clothes for the festival.",
    "exampleJapanese": "お祭りのために伝統的な衣装を着た。"
  },
  {
    "english": "transparent",
    "japanese": "透明な・明快な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "typical",
    "japanese": "典型的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "unique",
    "japanese": "独自の・唯一の",
    "category": "形容詞",
    "example": "Every person has a unique personality.",
    "exampleJapanese": "人はそれぞれ独自の個性を持っている。"
  },
  {
    "english": "universal",
    "japanese": "普遍的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "unlikely",
    "japanese": "ありそうもない",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "unusual",
    "japanese": "珍しい・異常な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "useful",
    "japanese": "役立つ",
    "category": "形容詞",
    "example": "A dictionary is a very useful tool for language learners.",
    "exampleJapanese": "辞書は言語学習者にとって非常に役立つツールだ。"
  },
  {
    "english": "various",
    "japanese": "様々な",
    "category": "形容詞",
    "example": "There are various ways to solve this problem.",
    "exampleJapanese": "この問題を解決するには様々な方法がある。"
  },
  {
    "english": "violent",
    "japanese": "暴力的な・激しい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "vital",
    "japanese": "不可欠な・重要な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "vulnerable",
    "japanese": "傷つきやすい・脆弱な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "wealthy",
    "japanese": "裕福な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "willing",
    "japanese": "〜する意志がある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "wise",
    "japanese": "賢明な",
    "category": "形容詞",
    "example": "It is wise to save money for the future.",
    "exampleJapanese": "将来のためにお金を貯めることは賢明だ。"
  },
  {
    "english": "absolute",
    "japanese": "絶対的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "abundant",
    "japanese": "豊富な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "academic",
    "japanese": "学術的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "anonymous",
    "japanese": "匿名の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "arbitrary",
    "japanese": "恣意的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "authentic",
    "japanese": "真正の・本物の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "chronic",
    "japanese": "慢性的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "coherent",
    "japanese": "一貫した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "competitive",
    "japanese": "競争的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "comprehensive",
    "japanese": "包括的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "considerable",
    "japanese": "かなりの",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "consistent",
    "japanese": "一貫した・安定した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "controversial",
    "japanese": "論争的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "conventional",
    "japanese": "従来の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cooperative",
    "japanese": "協力的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "decisive",
    "japanese": "決断力のある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "devoted",
    "japanese": "献身的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dominant",
    "japanese": "支配的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dynamic",
    "japanese": "活動的な・力強い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ecological",
    "japanese": "生態学的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "economic",
    "japanese": "経済の・経済的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ethical",
    "japanese": "倫理的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "excessive",
    "japanese": "過度な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "explicit",
    "japanese": "明示的な・露骨な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "extraordinary",
    "japanese": "並外れた",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "genuine",
    "japanese": "本物の・誠実な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "impartial",
    "japanese": "公平な・偏らない",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inevitable",
    "japanese": "避けられない",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "initial",
    "japanese": "最初の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "intensive",
    "japanese": "集中的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mutual",
    "japanese": "相互の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "neutral",
    "japanese": "中立の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "objective",
    "japanese": "客観的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "overwhelming",
    "japanese": "圧倒的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "persistent",
    "japanese": "持続的な・しつこい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "potential",
    "japanese": "潜在的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "profound",
    "japanese": "深遠な・深い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rational",
    "japanese": "合理的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "relevant",
    "japanese": "関連した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reluctant",
    "japanese": "気が進まない",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "renewable",
    "japanese": "再生可能な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sophisticated",
    "japanese": "洗練された・複雑な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "subjective",
    "japanese": "主観的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "substantial",
    "japanese": "かなりの・実質的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "systematic",
    "japanese": "体系的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "thorough",
    "japanese": "徹底的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "urgent",
    "japanese": "緊急の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "valid",
    "japanese": "有効な・妥当な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "voluntary",
    "japanese": "自発的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "absolutely",
    "japanese": "完全に・絶対に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "actually",
    "japanese": "実は・実際に",
    "category": "副詞",
    "example": "I thought it would be hard, but it was actually quite easy.",
    "exampleJapanese": "難しいと思っていたが、実際はとても簡単だった。"
  },
  {
    "english": "additionally",
    "japanese": "さらに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "adequately",
    "japanese": "十分に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "already",
    "japanese": "すでに",
    "category": "副詞",
    "example": "Have you already finished your homework?",
    "exampleJapanese": "宿題はもう終わりましたか？"
  },
  {
    "english": "also",
    "japanese": "〜もまた",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "always",
    "japanese": "いつも",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "apparently",
    "japanese": "どうやら〜のようだ",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "approximately",
    "japanese": "おおよそ",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "barely",
    "japanese": "かろうじて",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "basically",
    "japanese": "基本的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "carefully",
    "japanese": "注意深く",
    "category": "副詞",
    "example": "She carefully read through all the instructions.",
    "exampleJapanese": "彼女は全ての指示を注意深く読んだ。"
  },
  {
    "english": "certainly",
    "japanese": "確かに",
    "category": "副詞",
    "example": "I will certainly help you with that.",
    "exampleJapanese": "それを手伝うことは確かにします。"
  },
  {
    "english": "clearly",
    "japanese": "明確に",
    "category": "副詞",
    "example": "Please speak more clearly so everyone can hear.",
    "exampleJapanese": "全員が聞こえるようにもっとはっきり話してください。"
  },
  {
    "english": "closely",
    "japanese": "密接に・注意深く",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "commonly",
    "japanese": "一般的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "completely",
    "japanese": "完全に",
    "category": "副詞",
    "example": "The project was completely finished on time.",
    "exampleJapanese": "プロジェクトは期限通りに完全に完成した。"
  },
  {
    "english": "consequently",
    "japanese": "その結果として",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "constantly",
    "japanese": "絶えず",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "correctly",
    "japanese": "正確に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "currently",
    "japanese": "現在",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "deeply",
    "japanese": "深く",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "definitely",
    "japanese": "確実に・絶対に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "directly",
    "japanese": "直接に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dramatically",
    "japanese": "劇的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "eagerly",
    "japanese": "熱心に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "easily",
    "japanese": "簡単に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "effectively",
    "japanese": "効果的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "efficiently",
    "japanese": "効率的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "entirely",
    "japanese": "全く・完全に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "especially",
    "japanese": "特に",
    "category": "副詞",
    "example": "I especially enjoy summer festivals.",
    "exampleJapanese": "特に夏祭りが好きです。"
  },
  {
    "english": "eventually",
    "japanese": "最終的に",
    "category": "副詞",
    "example": "She eventually reached the top of the mountain.",
    "exampleJapanese": "彼女はついに山頂に達した。"
  },
  {
    "english": "exactly",
    "japanese": "正確に",
    "category": "副詞",
    "example": "That is exactly what I was looking for.",
    "exampleJapanese": "それがまさに私が探していたものだ。"
  },
  {
    "english": "extremely",
    "japanese": "非常に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fairly",
    "japanese": "かなり・公平に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "finally",
    "japanese": "最終的に・ついに",
    "category": "副詞",
    "example": "After years of effort, she finally achieved her dream.",
    "exampleJapanese": "何年もの努力の末、彼女はついに夢を達成した。"
  },
  {
    "english": "fortunately",
    "japanese": "幸いにも",
    "category": "副詞",
    "example": "Fortunately, nobody was hurt in the accident.",
    "exampleJapanese": "幸運にも、事故で誰も怪我をしなかった。"
  },
  {
    "english": "frequently",
    "japanese": "頻繁に",
    "category": "副詞",
    "example": "She frequently visits her grandparents.",
    "exampleJapanese": "彼女は頻繁に祖父母を訪ねる。"
  },
  {
    "english": "generally",
    "japanese": "一般的に",
    "category": "副詞",
    "example": "Generally speaking, summer is hotter than winter.",
    "exampleJapanese": "一般的に言って、夏は冬より暑い。"
  },
  {
    "english": "gradually",
    "japanese": "徐々に",
    "category": "副詞",
    "example": "Her English gradually improved over the year.",
    "exampleJapanese": "彼女の英語は1年間で徐々に上達した。"
  },
  {
    "english": "greatly",
    "japanese": "大いに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "hardly",
    "japanese": "ほとんど〜ない",
    "category": "副詞",
    "example": "I could hardly hear him because of the noise.",
    "exampleJapanese": "騒音のせいで彼の声がほとんど聞こえなかった。"
  },
  {
    "english": "highly",
    "japanese": "非常に・高く",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "honestly",
    "japanese": "正直に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "however",
    "japanese": "しかし",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "immediately",
    "japanese": "すぐに",
    "category": "副詞",
    "example": "She immediately called the doctor when her son fell ill.",
    "exampleJapanese": "息子が病気になったとき、すぐに医者に電話した。"
  },
  {
    "english": "importantly",
    "japanese": "重要なことに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "increasingly",
    "japanese": "ますます",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "indeed",
    "japanese": "確かに・実に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "instead",
    "japanese": "代わりに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "largely",
    "japanese": "主に・大部分",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mainly",
    "japanese": "主に",
    "category": "副詞",
    "example": "The event was mainly attended by young people.",
    "exampleJapanese": "そのイベントには主に若者が参加した。"
  },
  {
    "english": "meanwhile",
    "japanese": "その間に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "merely",
    "japanese": "ただ〜にすぎない",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mostly",
    "japanese": "ほとんど・主に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "naturally",
    "japanese": "自然に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "nearly",
    "japanese": "ほぼ",
    "category": "副詞",
    "example": "We waited for nearly two hours.",
    "exampleJapanese": "私たちは約2時間待った。"
  },
  {
    "english": "necessarily",
    "japanese": "必ず・必然的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "never",
    "japanese": "決して〜ない",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "normally",
    "japanese": "通常は",
    "category": "副詞",
    "example": "I normally wake up at 6 o'clock.",
    "exampleJapanese": "普段6時に起きる。"
  },
  {
    "english": "obviously",
    "japanese": "明らかに",
    "category": "副詞",
    "example": "Obviously, smoking is bad for your health.",
    "exampleJapanese": "明らかに、喫煙は健康に悪い。"
  },
  {
    "english": "often",
    "japanese": "しばしば",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "once",
    "japanese": "かつて・一度",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "only",
    "japanese": "〜だけ",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "otherwise",
    "japanese": "さもなければ",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "overall",
    "japanese": "全体的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "particularly",
    "japanese": "特に",
    "category": "副詞",
    "example": "She is particularly interested in environmental issues.",
    "exampleJapanese": "彼女は特に環境問題に関心がある。"
  },
  {
    "english": "perhaps",
    "japanese": "おそらく",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "possibly",
    "japanese": "もしかすると",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "precisely",
    "japanese": "正確に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "previously",
    "japanese": "以前に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "primarily",
    "japanese": "主に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "probably",
    "japanese": "おそらく",
    "category": "副詞",
    "example": "It will probably rain tomorrow, so bring an umbrella.",
    "exampleJapanese": "明日はたぶん雨が降るので傘を持ってきてください。"
  },
  {
    "english": "properly",
    "japanese": "適切に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "quickly",
    "japanese": "素早く",
    "category": "副詞",
    "example": "Please come quickly — it is an emergency!",
    "exampleJapanese": "急いで来てください——緊急事態です！"
  },
  {
    "english": "quite",
    "japanese": "かなり・まったく",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rapidly",
    "japanese": "急速に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rarely",
    "japanese": "めったに〜しない",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rather",
    "japanese": "むしろ・どちらかといえば",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "really",
    "japanese": "本当に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "recently",
    "japanese": "最近",
    "category": "副詞",
    "example": "Have you read any good books recently?",
    "exampleJapanese": "最近、良い本を読みましたか？"
  },
  {
    "english": "regularly",
    "japanese": "定期的に",
    "category": "副詞",
    "example": "He regularly exercises to stay healthy.",
    "exampleJapanese": "健康を保つために彼は定期的に運動する。"
  },
  {
    "english": "relatively",
    "japanese": "比較的",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "repeatedly",
    "japanese": "繰り返して",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "roughly",
    "japanese": "おおよそ",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "seldom",
    "japanese": "めったに〜ない",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "seriously",
    "japanese": "深刻に・真剣に",
    "category": "副詞",
    "example": "We must take environmental issues more seriously.",
    "exampleJapanese": "私たちは環境問題をもっと真剣に受け止めなければならない。"
  },
  {
    "english": "significantly",
    "japanese": "大幅に・かなり",
    "category": "副詞",
    "example": "Technology has significantly changed our daily lives.",
    "exampleJapanese": "テクノロジーは私たちの日常生活を大幅に変えた。"
  },
  {
    "english": "simply",
    "japanese": "単純に・ただ",
    "category": "副詞",
    "example": "To succeed, you simply need to work hard.",
    "exampleJapanese": "成功するには、ただひたすら努力するだけだ。"
  },
  {
    "english": "slightly",
    "japanese": "わずかに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "somehow",
    "japanese": "何らかの形で",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sometimes",
    "japanese": "時々",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "soon",
    "japanese": "もうすぐ・すぐに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "specifically",
    "japanese": "具体的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "still",
    "japanese": "まだ・それでも",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "strongly",
    "japanese": "強く",
    "category": "副詞",
    "example": "I strongly believe that education is the key to success.",
    "exampleJapanese": "教育が成功の鍵だと強く信じている。"
  },
  {
    "english": "suddenly",
    "japanese": "突然",
    "category": "副詞",
    "example": "It suddenly started to rain during the picnic.",
    "exampleJapanese": "ピクニック中に突然雨が降り始めた。"
  },
  {
    "english": "surprisingly",
    "japanese": "驚いたことに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "therefore",
    "japanese": "それゆえ・だから",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "thoroughly",
    "japanese": "徹底的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "together",
    "japanese": "一緒に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "totally",
    "japanese": "完全に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "traditionally",
    "japanese": "伝統的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "truly",
    "japanese": "本当に・誠実に",
    "category": "副詞",
    "example": "She is truly one of the kindest people I know.",
    "exampleJapanese": "彼女は私が知る中で本当に最も親切な人の一人だ。"
  },
  {
    "english": "typically",
    "japanese": "一般的に・通常は",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "unfortunately",
    "japanese": "残念ながら",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "usually",
    "japanese": "通常は",
    "category": "副詞",
    "example": "I usually eat breakfast at seven in the morning.",
    "exampleJapanese": "普通は朝7時に朝食を食べる。"
  },
  {
    "english": "virtually",
    "japanese": "事実上・ほぼ",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "widely",
    "japanese": "広く",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "yet",
    "japanese": "まだ・しかし",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "a great deal of",
    "japanese": "多くの〜",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "a number of",
    "japanese": "多くの〜",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "above all",
    "japanese": "とりわけ・何よりも",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "according to",
    "japanese": "〜によると",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "adapt to",
    "japanese": "〜に適応する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "after all",
    "japanese": "結局",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "agree with",
    "japanese": "〜に同意する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "aim at",
    "japanese": "〜を目指す",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "all at once",
    "japanese": "突然・一度に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "apply for",
    "japanese": "〜に申し込む",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "as a result",
    "japanese": "その結果",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "as well as",
    "japanese": "〜と同様に・〜のほかに",
    "category": "熟語",
    "example": "She speaks French as well as English.",
    "exampleJapanese": "彼女は英語だけでなくフランス語も話す。"
  },
  {
    "english": "at first",
    "japanese": "最初は",
    "category": "熟語",
    "example": "At first, the task seemed impossible.",
    "exampleJapanese": "最初、その課題は不可能に思えた。"
  },
  {
    "english": "at last",
    "japanese": "ついに",
    "category": "熟語",
    "example": "At last, the long journey came to an end.",
    "exampleJapanese": "ついに、長い旅が終わった。"
  },
  {
    "english": "at least",
    "japanese": "少なくとも",
    "category": "熟語",
    "example": "You should study for at least one hour every day.",
    "exampleJapanese": "毎日少なくとも1時間は勉強するべきだ。"
  },
  {
    "english": "at once",
    "japanese": "すぐに・同時に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "at the same time",
    "japanese": "同時に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be able to",
    "japanese": "〜することができる",
    "category": "熟語",
    "example": "She was able to finish the project by herself.",
    "exampleJapanese": "彼女は一人でプロジェクトを完成させることができた。"
  },
  {
    "english": "be aware of",
    "japanese": "〜に気づいている",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be based on",
    "japanese": "〜に基づいている",
    "category": "熟語",
    "example": "This movie is based on a true story.",
    "exampleJapanese": "この映画は実話に基づいている。"
  },
  {
    "english": "be concerned about",
    "japanese": "〜を心配している",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be different from",
    "japanese": "〜と異なる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be familiar with",
    "japanese": "〜をよく知っている",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be fond of",
    "japanese": "〜が好きだ",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be good at",
    "japanese": "〜が得意だ",
    "category": "熟語",
    "example": "He is good at playing the piano.",
    "exampleJapanese": "彼はピアノを弾くのが得意だ。"
  },
  {
    "english": "be interested in",
    "japanese": "〜に興味がある",
    "category": "熟語",
    "example": "She has always been interested in science.",
    "exampleJapanese": "彼女はずっと科学に興味を持っている。"
  },
  {
    "english": "be made of",
    "japanese": "〜でできている",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be proud of",
    "japanese": "〜を誇りに思う",
    "category": "熟語",
    "example": "We are proud of what our students achieve.",
    "exampleJapanese": "私たちは生徒の成果を誇りに思っている。"
  },
  {
    "english": "be responsible for",
    "japanese": "〜に責任がある",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be similar to",
    "japanese": "〜と似ている",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be used to",
    "japanese": "〜に慣れている",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "because of",
    "japanese": "〜のために・〜のせいで",
    "category": "熟語",
    "example": "The match was cancelled because of bad weather.",
    "exampleJapanese": "悪天候のため試合が中止になった。"
  },
  {
    "english": "bring about",
    "japanese": "〜を引き起こす",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "by chance",
    "japanese": "偶然に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "call for",
    "japanese": "〜を求める",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "come across",
    "japanese": "〜に偶然出会う",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "come true",
    "japanese": "実現する",
    "category": "熟語",
    "example": "Her dream of becoming a doctor finally came true.",
    "exampleJapanese": "医者になる夢がついに実現した。"
  },
  {
    "english": "come up with",
    "japanese": "〜を考え出す",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "communicate with",
    "japanese": "〜とコミュニケーションをとる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "compared to",
    "japanese": "〜と比較して",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "consist of",
    "japanese": "〜から成る",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "contribute to",
    "japanese": "〜に貢献する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "deal with",
    "japanese": "〜を扱う・対処する",
    "category": "熟語",
    "example": "It is not easy to deal with stress.",
    "exampleJapanese": "ストレスに対処するのは容易ではない。"
  },
  {
    "english": "depend on",
    "japanese": "〜に頼る・〜によって異なる",
    "category": "熟語",
    "example": "Don't depend too much on others for help.",
    "exampleJapanese": "助けを他の人に頼りすぎないようにしなさい。"
  },
  {
    "english": "despite the fact that",
    "japanese": "〜にもかかわらず",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "due to",
    "japanese": "〜のために・〜が原因で",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "end up",
    "japanese": "結局〜になる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "even though",
    "japanese": "〜にもかかわらず",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "every other day",
    "japanese": "1日おきに",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "except for",
    "japanese": "〜を除いて",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "face up to",
    "japanese": "〜に向き合う",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "figure out",
    "japanese": "〜を理解する・解決する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "find out",
    "japanese": "〜を知る・調べる",
    "category": "熟語",
    "example": "I need to find out what happened.",
    "exampleJapanese": "何が起きたのか調べる必要がある。"
  },
  {
    "english": "focus on",
    "japanese": "〜に集中する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "for example",
    "japanese": "例えば",
    "category": "熟語",
    "example": "Many animals, for example cats and dogs, make great pets.",
    "exampleJapanese": "例えば猫や犬など、多くの動物が優れたペットになる。"
  },
  {
    "english": "for instance",
    "japanese": "例えば",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "for the first time",
    "japanese": "初めて",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "from now on",
    "japanese": "今後は・これから",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "get along with",
    "japanese": "〜とうまくやっていく",
    "category": "熟語",
    "example": "Do you get along well with your classmates?",
    "exampleJapanese": "クラスメートとうまくやっていますか？"
  },
  {
    "english": "get rid of",
    "japanese": "〜を取り除く",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "give up",
    "japanese": "あきらめる",
    "category": "熟語",
    "example": "Never give up on your dreams, no matter how hard it gets.",
    "exampleJapanese": "どんなに辛くても夢をあきらめないで。"
  },
  {
    "english": "go through",
    "japanese": "〜を経験する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "grow up",
    "japanese": "成長する",
    "category": "熟語",
    "example": "She grew up in a small town in the countryside.",
    "exampleJapanese": "彼女は田舎の小さな町で育った。"
  },
  {
    "english": "hand in",
    "japanese": "〜を提出する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "have a chance to",
    "japanese": "〜する機会がある",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "have difficulty in",
    "japanese": "〜するのが難しい",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "help A with B",
    "japanese": "AのBを手伝う",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "hold on to",
    "japanese": "〜にしがみつく",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "how to",
    "japanese": "〜する方法",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in addition to",
    "japanese": "〜に加えて",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in advance",
    "japanese": "事前に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in common",
    "japanese": "共通に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in conclusion",
    "japanese": "結論として",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in contrast",
    "japanese": "対照的に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in fact",
    "japanese": "実は・実際には",
    "category": "熟語",
    "example": "In fact, he had known the answer all along.",
    "exampleJapanese": "実は、彼はずっと答えを知っていた。"
  },
  {
    "english": "in general",
    "japanese": "一般的に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in order to",
    "japanese": "〜するために",
    "category": "熟語",
    "example": "She studies hard in order to pass the exam.",
    "exampleJapanese": "試験に合格するために彼女は一生懸命勉強する。"
  },
  {
    "english": "in spite of",
    "japanese": "〜にもかかわらず",
    "category": "熟語",
    "example": "In spite of the rain, they continued playing.",
    "exampleJapanese": "雨にもかかわらず、彼らはプレーを続けた。"
  },
  {
    "english": "in terms of",
    "japanese": "〜の点では",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in the end",
    "japanese": "結局",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "instead of",
    "japanese": "〜の代わりに",
    "category": "熟語",
    "example": "Try walking instead of taking the bus.",
    "exampleJapanese": "バスに乗る代わりに歩いてみなさい。"
  },
  {
    "english": "keep in mind",
    "japanese": "〜を心に留める",
    "category": "熟語",
    "example": "Keep in mind that hard work always pays off.",
    "exampleJapanese": "努力は必ず報われることを心に留めておきなさい。"
  },
  {
    "english": "lead to",
    "japanese": "〜につながる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "look after",
    "japanese": "〜の世話をする",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "look at",
    "japanese": "〜を見る",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "look for",
    "japanese": "〜を探す",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "look forward to",
    "japanese": "〜を楽しみに待つ",
    "category": "熟語",
    "example": "I am looking forward to summer vacation.",
    "exampleJapanese": "夏休みを楽しみにしている。"
  },
  {
    "english": "look up to",
    "japanese": "〜を尊敬する",
    "category": "熟語",
    "example": "Many students look up to their teachers.",
    "exampleJapanese": "多くの生徒が先生を尊敬している。"
  },
  {
    "english": "make a difference",
    "japanese": "変化をもたらす",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "make a living",
    "japanese": "生計を立てる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "make an effort",
    "japanese": "努力する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "make sense",
    "japanese": "意味をなす",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "make use of",
    "japanese": "〜を活用する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "more and more",
    "japanese": "ますます多くの",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "no longer",
    "japanese": "もはや〜ではない",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "not only A but also B",
    "japanese": "AだけでなくBも",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "on the other hand",
    "japanese": "一方で",
    "category": "熟語",
    "example": "On the other hand, living in the city has its advantages.",
    "exampleJapanese": "一方、都市に住むことには利点もある。"
  },
  {
    "english": "one another",
    "japanese": "お互いに",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "out of date",
    "japanese": "時代遅れの",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "over and over",
    "japanese": "何度も繰り返して",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "participate in",
    "japanese": "〜に参加する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pay attention to",
    "japanese": "〜に注意を払う",
    "category": "熟語",
    "example": "Please pay attention to the teacher.",
    "exampleJapanese": "先生に注意を払ってください。"
  },
  {
    "english": "pick up",
    "japanese": "〜を拾い上げる・上達する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "point out",
    "japanese": "〜を指摘する",
    "category": "熟語",
    "example": "She pointed out several mistakes in my essay.",
    "exampleJapanese": "彼女は私のエッセイのいくつかの間違いを指摘した。"
  },
  {
    "english": "prevent A from B",
    "japanese": "AがBするのを防ぐ",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "put off",
    "japanese": "〜を延期する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rather than",
    "japanese": "〜よりもむしろ",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "refer to",
    "japanese": "〜を参照する・〜を指す",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rely on",
    "japanese": "〜に頼る",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "result in",
    "japanese": "〜という結果になる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "set up",
    "japanese": "〜を設立する・準備する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "so that",
    "japanese": "〜するように・〜なので",
    "category": "熟語",
    "example": "She studied hard so that she could pass the exam.",
    "exampleJapanese": "試験に合格できるように一生懸命勉強した。"
  },
  {
    "english": "stand for",
    "japanese": "〜を表す・支持する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "stand out",
    "japanese": "目立つ",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "such as",
    "japanese": "〜のような",
    "category": "熟語",
    "example": "Some sports, such as swimming, are great exercise.",
    "exampleJapanese": "水泳などのスポーツは素晴らしい運動だ。"
  },
  {
    "english": "take advantage of",
    "japanese": "〜を利用する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "take care of",
    "japanese": "〜の世話をする・対処する",
    "category": "熟語",
    "example": "She takes care of her younger brothers every day.",
    "exampleJapanese": "彼女は毎日弟たちの世話をしている。"
  },
  {
    "english": "take part in",
    "japanese": "〜に参加する",
    "category": "熟語",
    "example": "All students should take part in the school festival.",
    "exampleJapanese": "全生徒が学校祭に参加するべきだ。"
  },
  {
    "english": "thanks to",
    "japanese": "〜のおかげで",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "think of",
    "japanese": "〜を考える",
    "category": "熟語",
    "example": "Can you think of a better solution?",
    "exampleJapanese": "より良い解決策を思いつきますか？"
  },
  {
    "english": "throughout the world",
    "japanese": "世界中で",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "throw away",
    "japanese": "〜を捨てる",
    "category": "熟語",
    "example": "Don't throw away that old newspaper — I still need it.",
    "exampleJapanese": "その古い新聞を捨てないで——まだ必要だから。"
  },
  {
    "english": "try to",
    "japanese": "〜しようとする",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "turn down",
    "japanese": "〜を断る",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "turn into",
    "japanese": "〜に変わる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "used to",
    "japanese": "かつて〜だった",
    "category": "熟語",
    "example": "She used to walk to school every day.",
    "exampleJapanese": "彼女はかつて毎日歩いて学校に通っていた。"
  },
  {
    "english": "what is more",
    "japanese": "さらに",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "work out",
    "japanese": "うまくいく・運動する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "worry about",
    "japanese": "〜を心配する",
    "category": "熟語",
    "example": "Don't worry about what others think of you.",
    "exampleJapanese": "他人があなたをどう思うかについて心配しないで。"
  },
  {
    "english": "access",
    "japanese": "アクセスする・利用する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accomplish",
    "japanese": "成し遂げる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "account",
    "japanese": "説明する・占める",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "activate",
    "japanese": "活性化する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "adjust",
    "japanese": "調整する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "advance",
    "japanese": "前進する・進歩する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "advocate",
    "japanese": "主張する・支持する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "assess",
    "japanese": "評価する・査定する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "assign",
    "japanese": "割り当てる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "authorize",
    "japanese": "許可する・認可する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "balance",
    "japanese": "バランスを取る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "capture",
    "japanese": "捕まえる・取り込む",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "characterize",
    "japanese": "特徴づける",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "circulate",
    "japanese": "循環する・流布する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cite",
    "japanese": "引用する・挙げる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "clarify",
    "japanese": "明確にする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "collaborate",
    "japanese": "協力する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "collapse",
    "japanese": "崩壊する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "compensate",
    "japanese": "補償する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "compile",
    "japanese": "編集する・まとめる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "coordinate",
    "japanese": "調整する・まとめる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cope",
    "japanese": "対処する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "criticize",
    "japanese": "批判する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "customize",
    "japanese": "カスタマイズする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "declare",
    "japanese": "宣言する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "delay",
    "japanese": "遅らせる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "deny",
    "japanese": "否定する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "deserve",
    "japanese": "〜に値する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "devote",
    "japanese": "捧げる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "distribute",
    "japanese": "配布する・分配する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "document",
    "japanese": "記録する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "doubt",
    "japanese": "疑う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "emit",
    "japanese": "排出する・放つ",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "engage",
    "japanese": "従事する・関与させる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "exclude",
    "japanese": "除外する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "expand",
    "japanese": "拡大する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "export",
    "japanese": "輸出する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "extract",
    "japanese": "取り出す・抽出する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "forecast",
    "japanese": "予測する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "found",
    "japanese": "設立する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "grant",
    "japanese": "与える・認める",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "guarantee",
    "japanese": "保証する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "hire",
    "japanese": "雇う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "import",
    "japanese": "輸入する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inspire",
    "japanese": "鼓舞する・インスピレーションを与える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "install",
    "japanese": "設置する・導入する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "launch",
    "japanese": "開始する・打ち上げる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "monitor",
    "japanese": "監視する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "neglect",
    "japanese": "怠る・無視する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pass",
    "japanese": "通過する・合格する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "permit",
    "japanese": "許可する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pose",
    "japanese": "引き起こす・ポーズをとる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "postpone",
    "japanese": "延期する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "propose",
    "japanese": "提案する・申し込む",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "purchase",
    "japanese": "購入する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "raise",
    "japanese": "上げる・育てる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reach",
    "japanese": "達する・届く",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "recommend",
    "japanese": "勧める",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "recycle",
    "japanese": "リサイクルする",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "release",
    "japanese": "解放する・発売する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "remove",
    "japanese": "取り除く",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "renew",
    "japanese": "更新する・再開する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "report",
    "japanese": "報告する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reserve",
    "japanese": "予約する・取っておく",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "review",
    "japanese": "見直す・復習する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rotate",
    "japanese": "回転する・交代する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "shift",
    "japanese": "移動する・変える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "signal",
    "japanese": "合図する・示す",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "specify",
    "japanese": "明記する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "surround",
    "japanese": "囲む",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sustain",
    "japanese": "支える・持続する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "transfer",
    "japanese": "転送する・移転する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "trigger",
    "japanese": "引き起こす・引き金になる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "trust",
    "japanese": "信頼する",
    "category": "動詞",
    "example": "Trust is the foundation of every strong relationship.",
    "exampleJapanese": "信頼はすべての強い関係の基盤だ。"
  },
  {
    "english": "verify",
    "japanese": "検証する・確認する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "warn",
    "japanese": "警告する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "action",
    "japanese": "行動",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "addiction",
    "japanese": "中毒・依存",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "adventure",
    "japanese": "冒険",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "aging",
    "japanese": "老化・高齢化",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "aid",
    "japanese": "援助",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "appointment",
    "japanese": "予約・任命",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "aspect",
    "japanese": "側面・観点",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "asset",
    "japanese": "資産",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ballot",
    "japanese": "投票",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "border",
    "japanese": "国境・境界",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "burden",
    "japanese": "負担・重荷",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "climate change",
    "japanese": "気候変動",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "clue",
    "japanese": "手がかり",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "coexistence",
    "japanese": "共存",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "comfort",
    "japanese": "快適さ・慰め",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "comparison",
    "japanese": "比較",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "compromise",
    "japanese": "妥協",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "concept",
    "japanese": "概念",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "confidence",
    "japanese": "自信・信頼",
    "category": "名詞",
    "example": "She spoke with great confidence during the presentation.",
    "exampleJapanese": "プレゼンテーションで彼女はとても自信を持って話した。"
  },
  {
    "english": "consumption",
    "japanese": "消費",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "contradiction",
    "japanese": "矛盾",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cooperation",
    "japanese": "協力",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "curiosity",
    "japanese": "好奇心",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "deadline",
    "japanese": "締め切り",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "debt",
    "japanese": "借金・負債",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "decline",
    "japanese": "減少・衰退",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dependence",
    "japanese": "依存",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "descendant",
    "japanese": "子孫",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "determination",
    "japanese": "決意",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dignity",
    "japanese": "尊厳",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dilemma",
    "japanese": "ジレンマ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dimension",
    "japanese": "次元・側面",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dispute",
    "japanese": "論争・紛争",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "domain",
    "japanese": "領域・分野",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "drawback",
    "japanese": "欠点・不利な点",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "duty",
    "japanese": "義務・任務",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ecosystem",
    "japanese": "生態系",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "elite",
    "japanese": "エリート",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "empathy",
    "japanese": "共感",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "endeavor",
    "japanese": "努力・取り組み",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "epidemic",
    "japanese": "流行病・蔓延",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "evaluation",
    "japanese": "評価",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "evolution",
    "japanese": "進化",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "exposure",
    "japanese": "さらすこと・露出",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "faith",
    "japanese": "信仰・信頼",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "flaw",
    "japanese": "欠点・傷",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fossil",
    "japanese": "化石",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "gap",
    "japanese": "格差・隔たり",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "gene",
    "japanese": "遺伝子",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "greenhouse gas",
    "japanese": "温室効果ガス",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "grief",
    "japanese": "悲しみ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "guideline",
    "japanese": "指針・ガイドライン",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "hardship",
    "japanese": "苦難",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "harmony",
    "japanese": "調和",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "hierarchy",
    "japanese": "階層・序列",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "horizon",
    "japanese": "地平線・展望",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "index",
    "japanese": "指数・索引",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "injustice",
    "japanese": "不正・不公平",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "insight",
    "japanese": "洞察",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "interaction",
    "japanese": "相互作用・交流",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "invention",
    "japanese": "発明",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "investigation",
    "japanese": "調査・捜査",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "investment",
    "japanese": "投資",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "landscape",
    "japanese": "景色・風景",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "legacy",
    "japanese": "遺産・遺物",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "literacy",
    "japanese": "読み書き能力",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "loyalty",
    "japanese": "忠誠心",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mankind",
    "japanese": "人類",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "merit",
    "japanese": "長所・功績",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "milestone",
    "japanese": "節目・重要な出来事",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "morality",
    "japanese": "道徳",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "negotiation",
    "japanese": "交渉",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "nutrition",
    "japanese": "栄養",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "objection",
    "japanese": "反対・異議",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "origin",
    "japanese": "起源・出身",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "overview",
    "japanese": "概要",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "panel",
    "japanese": "委員会・パネル",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "paradox",
    "japanese": "逆説・パラドックス",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "passion",
    "japanese": "情熱",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "penalty",
    "japanese": "罰則・ペナルティ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "perception",
    "japanese": "知覚・認識",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "priority",
    "japanese": "優先事項",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "procedure",
    "japanese": "手順・手続き",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "prototype",
    "japanese": "試作品・原型",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "quest",
    "japanese": "探求",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reaction",
    "japanese": "反応",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "recession",
    "japanese": "不景気・後退",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reflection",
    "japanese": "反省・反映",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "refugee",
    "japanese": "難民",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "renewable energy",
    "japanese": "再生可能エネルギー",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "resilience",
    "japanese": "回復力・しなやかさ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "revenue",
    "japanese": "収益・歳入",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "scheme",
    "japanese": "計画・制度",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "scope",
    "japanese": "範囲・余地",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "selfishness",
    "japanese": "利己主義",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "solidarity",
    "japanese": "連帯",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sovereignty",
    "japanese": "主権",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "speculation",
    "japanese": "推測・投機",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "stability",
    "japanese": "安定",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "standard",
    "japanese": "基準・水準",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "stimulus",
    "japanese": "刺激",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "storage",
    "japanese": "貯蔵・ストレージ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "summit",
    "japanese": "頂上・首脳会議",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "surplus",
    "japanese": "余剰・黒字",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "survey",
    "japanese": "調査・アンケート",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "tariff",
    "japanese": "関税",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "task",
    "japanese": "課題・仕事",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "temptation",
    "japanese": "誘惑",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "territory",
    "japanese": "領土・縄張り",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "transaction",
    "japanese": "取引",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "transition",
    "japanese": "移行・転換",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "treaty",
    "japanese": "条約",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "trial",
    "japanese": "試み・裁判",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "tyranny",
    "japanese": "専制政治・暴政",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "universe",
    "japanese": "宇宙",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "urgency",
    "japanese": "緊急性",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "willingness",
    "japanese": "意欲・快諾",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "workforce",
    "japanese": "労働力",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accessible",
    "japanese": "利用しやすい・近づきやすい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accomplished",
    "japanese": "優秀な・熟練した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "affectionate",
    "japanese": "愛情深い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "applicable",
    "japanese": "適用できる",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "apt",
    "japanese": "適切な・〜しがちな",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "assertive",
    "japanese": "自己主張が強い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "catastrophic",
    "japanese": "壊滅的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cautious",
    "japanese": "慎重な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "characteristic",
    "japanese": "特徴的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "collective",
    "japanese": "集団的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "comparable",
    "japanese": "比較できる・同等の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "compassionate",
    "japanese": "思いやりのある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "complicated",
    "japanese": "複雑な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "compulsory",
    "japanese": "義務的な・強制的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "crucial",
    "japanese": "非常に重要な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cumulative",
    "japanese": "累積的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "deliberate",
    "japanese": "意図的な・慎重な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "democratic",
    "japanese": "民主的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dense",
    "japanese": "密な・濃い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "destructive",
    "japanese": "破壊的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "diplomatic",
    "japanese": "外交的な・如才ない",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "distinct",
    "japanese": "異なる・明確な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "durable",
    "japanese": "耐久性のある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "elaborate",
    "japanese": "精巧な・詳細な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "environmentally friendly",
    "japanese": "環境に優しい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "equal",
    "japanese": "平等な",
    "category": "形容詞",
    "example": "Every person deserves equal treatment.",
    "exampleJapanese": "すべての人は平等な扱いを受ける権利がある。"
  },
  {
    "english": "eternal",
    "japanese": "永遠の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "exceptional",
    "japanese": "例外的な・並外れた",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "extensive",
    "japanese": "広範な・大規模な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "feasible",
    "japanese": "実行可能な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fierce",
    "japanese": "激しい・猛烈な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fragile",
    "japanese": "壊れやすい・脆弱な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "grave",
    "japanese": "重大な・深刻な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "honorable",
    "japanese": "名誉ある・立派な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "hostile",
    "japanese": "敵対的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "immense",
    "japanese": "膨大な・巨大な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inclusive",
    "japanese": "包括的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "indispensable",
    "japanese": "不可欠な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inferior",
    "japanese": "劣った",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inherent",
    "japanese": "固有の・本来の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "intact",
    "japanese": "損なわれていない",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "intentional",
    "japanese": "意図的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "intrinsic",
    "japanese": "本質的な・固有の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "isolated",
    "japanese": "孤立した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "legitimate",
    "japanese": "合法的な・正当な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "liberal",
    "japanese": "自由主義的な・寛大な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mandatory",
    "japanese": "強制的な・義務の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "marginal",
    "japanese": "わずかな・周辺の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "massive",
    "japanese": "巨大な・大規模な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "meaningful",
    "japanese": "意味のある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "moderate",
    "japanese": "穏やかな・中程度の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "noble",
    "japanese": "高貴な・崇高な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "notable",
    "japanese": "注目すべき",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "numerous",
    "japanese": "多数の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "optimistic",
    "japanese": "楽観的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "outgoing",
    "japanese": "社交的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "outstanding",
    "japanese": "傑出した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "passionate",
    "japanese": "情熱的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pessimistic",
    "japanese": "悲観的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "predominant",
    "japanese": "主要な・支配的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "primitive",
    "japanese": "原始的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "progressive",
    "japanese": "進歩的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "prominent",
    "japanese": "著名な・目立つ",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "prosperous",
    "japanese": "繁栄した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "revolutionary",
    "japanese": "革命的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rigid",
    "japanese": "硬直した・厳格な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "robust",
    "japanese": "頑健な・力強い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ruthless",
    "japanese": "冷酷な・容赦ない",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sacred",
    "japanese": "神聖な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sensitive",
    "japanese": "敏感な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "severe",
    "japanese": "厳しい・深刻な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "shallow",
    "japanese": "浅い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sharp",
    "japanese": "鋭い・急激な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "skeptical",
    "japanese": "懐疑的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "stable",
    "japanese": "安定した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "steady",
    "japanese": "着実な・安定した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "strategic",
    "japanese": "戦略的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "superior",
    "japanese": "優れた",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "swift",
    "japanese": "速い・素早い",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "symbolic",
    "japanese": "象徴的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "tragic",
    "japanese": "悲劇的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "tremendous",
    "japanese": "巨大な・素晴らしい",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "trivial",
    "japanese": "取るに足らない",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "unlimited",
    "japanese": "無制限な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "vague",
    "japanese": "漠然とした",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "vast",
    "japanese": "広大な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "visible",
    "japanese": "目に見える",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "worthwhile",
    "japanese": "価値のある・やりがいのある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accordingly",
    "japanese": "それに従って",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "admittedly",
    "japanese": "確かに・認めるところでは",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "alternatively",
    "japanese": "あるいは・代わりに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "automatically",
    "japanese": "自動的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cautiously",
    "japanese": "慎重に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "collectively",
    "japanese": "集団的に・一括して",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "considerably",
    "japanese": "かなり・相当に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "continuously",
    "japanese": "継続的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "correspondingly",
    "japanese": "それに応じて",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "deliberately",
    "japanese": "意図的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "desperately",
    "japanese": "必死に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "essentially",
    "japanese": "本質的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "evidently",
    "japanese": "明らかに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "exclusively",
    "japanese": "もっぱら",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "extensively",
    "japanese": "広範囲に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "formerly",
    "japanese": "以前は",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "furthermore",
    "japanese": "さらに・加えて",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "globally",
    "japanese": "世界規模で",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "independently",
    "japanese": "独立して",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inevitably",
    "japanese": "必然的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "initially",
    "japanese": "最初は",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "jointly",
    "japanese": "共同で",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "literally",
    "japanese": "文字通り",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "locally",
    "japanese": "地元で・局所的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "logically",
    "japanese": "論理的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "moderately",
    "japanese": "適度に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mutually",
    "japanese": "お互いに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "notably",
    "japanese": "特に・著しく",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "nowadays",
    "japanese": "最近は・現代では",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "objectively",
    "japanese": "客観的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "partially",
    "japanese": "部分的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "permanently",
    "japanese": "永久に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "plainly",
    "japanese": "明らかに・率直に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "practically",
    "japanese": "実際には・ほぼ",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "progressively",
    "japanese": "徐々に・進歩的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "proportionally",
    "japanese": "比例して",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "purposely",
    "japanese": "意図的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "simultaneously",
    "japanese": "同時に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "steadily",
    "japanese": "着実に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "subsequently",
    "japanese": "その後・続いて",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "technically",
    "japanese": "技術的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ultimately",
    "japanese": "最終的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "uniformly",
    "japanese": "一様に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "universally",
    "japanese": "普遍的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "utterly",
    "japanese": "まったく・完全に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "above and beyond",
    "japanese": "期待以上の",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be apt to",
    "japanese": "〜しがちだ",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be committed to",
    "japanese": "〜に献身する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be devoted to",
    "japanese": "〜に専念する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be in charge of",
    "japanese": "〜を担当している",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be opposed to",
    "japanese": "〜に反対だ",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be subject to",
    "japanese": "〜を受けやすい",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "beyond doubt",
    "japanese": "疑う余地なく",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "break down",
    "japanese": "故障する・崩れる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "break through",
    "japanese": "突破する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "bring up",
    "japanese": "育てる・持ち出す",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "by means of",
    "japanese": "〜によって",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "call off",
    "japanese": "〜を中止する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "carry out",
    "japanese": "〜を実行する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "catch up with",
    "japanese": "〜に追いつく",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cope with",
    "japanese": "〜に対処する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cut down on",
    "japanese": "〜を減らす",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "draw attention to",
    "japanese": "〜に注意を引く",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fall behind",
    "japanese": "遅れる・後れをとる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "give rise to",
    "japanese": "〜を生じさせる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "go beyond",
    "japanese": "〜を超える",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "hand over",
    "japanese": "〜を引き渡す",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "have an impact on",
    "japanese": "〜に影響を与える",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in accordance with",
    "japanese": "〜に従って",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in light of",
    "japanese": "〜を踏まえて",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in particular",
    "japanese": "特に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in response to",
    "japanese": "〜に応じて",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in the long run",
    "japanese": "長期的には",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "keep track of",
    "japanese": "〜を記録する・把握する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "live up to",
    "japanese": "〜に応える・見合う",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "look into",
    "japanese": "〜を調査する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "make progress",
    "japanese": "進歩する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "on account of",
    "japanese": "〜のために・〜が原因で",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "on behalf of",
    "japanese": "〜を代表して",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "on the contrary",
    "japanese": "それどころか・反対に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "once in a while",
    "japanese": "時々・たまに",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "put forward",
    "japanese": "〜を提案する・提出する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "regardless of",
    "japanese": "〜にかかわらず",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "run out of",
    "japanese": "〜を使い果たす",
    "category": "熟語",
    "example": "We ran out of time before finishing the test.",
    "exampleJapanese": "テストを終える前に時間が足りなくなった。"
  },
  {
    "english": "set a goal",
    "japanese": "目標を立てる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "set aside",
    "japanese": "〜を取っておく・脇に置く",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "shed light on",
    "japanese": "〜を明らかにする",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "take into account",
    "japanese": "〜を考慮する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "take place",
    "japanese": "起こる・行われる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "to a certain extent",
    "japanese": "ある程度まで",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "to say nothing of",
    "japanese": "〜はもちろん",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "turn out",
    "japanese": "〜であることが判明する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "under no circumstances",
    "japanese": "決して〜ない",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "with regard to",
    "japanese": "〜に関して",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "without fail",
    "japanese": "必ず・確実に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "approve",
    "japanese": "承認する・賛成する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "boost",
    "japanese": "押し上げる・高める",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "cancel",
    "japanese": "取り消す・中止する",
    "category": "動詞",
    "example": "They had to cancel the game because of rain.",
    "exampleJapanese": "雨のため試合を中止せざるを得なかった。"
  },
  {
    "english": "confuse",
    "japanese": "混乱させる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "conserve",
    "japanese": "保護する・節約する",
    "category": "動詞",
    "example": "We must conserve natural resources for the future.",
    "exampleJapanese": "将来のために天然資源を保護しなければならない。"
  },
  {
    "english": "dedicate",
    "japanese": "捧げる・専念する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "exist",
    "japanese": "存在する",
    "category": "動詞",
    "example": "Many species that once existed are now extinct.",
    "exampleJapanese": "かつて存在した多くの種が今は絶滅している。"
  },
  {
    "english": "feed",
    "japanese": "食べ物を与える・養う",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fix",
    "japanese": "修理する・固定する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "heal",
    "japanese": "癒す・治る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "hesitate",
    "japanese": "躊躇する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "imply",
    "japanese": "暗示する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "impose",
    "japanese": "課す・押しつける",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "insist",
    "japanese": "主張する・強く求める",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "justify",
    "japanese": "正当化する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "migrate",
    "japanese": "移住する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "mislead",
    "japanese": "誤解させる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "persuade",
    "japanese": "説得する",
    "category": "動詞",
    "example": "She persuaded her parents to let her study abroad.",
    "exampleJapanese": "彼女は両親を説得して留学を許可してもらった。"
  },
  {
    "english": "pledge",
    "japanese": "誓う・約束する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "possess",
    "japanese": "所有する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reconsider",
    "japanese": "再考する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reject",
    "japanese": "拒否する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "repair",
    "japanese": "修理する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "resign",
    "japanese": "辞任する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "restrict",
    "japanese": "制限する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "skip",
    "japanese": "飛ばす・省略する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "stand",
    "japanese": "立つ・我慢する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "switch",
    "japanese": "切り替える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "test",
    "japanese": "試す・検査する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "trace",
    "japanese": "追跡する・たどる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "translate",
    "japanese": "翻訳する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "update",
    "japanese": "更新する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "urge",
    "japanese": "強く勧める・促す",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "view",
    "japanese": "見る・考える",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "weaken",
    "japanese": "弱める・弱まる",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "witness",
    "japanese": "目撃する",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "yield",
    "japanese": "もたらす・譲る",
    "category": "動詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "acceptance",
    "japanese": "受け入れ・承認",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "activist",
    "japanese": "活動家",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "adolescent",
    "japanese": "青年・思春期の人",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "agency",
    "japanese": "機関・代理店",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "agenda",
    "japanese": "議題・課題",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "allowance",
    "japanese": "手当・お小遣い",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ambition",
    "japanese": "野心・抱負",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "anniversary",
    "japanese": "記念日",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "approval",
    "japanese": "承認",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "bacteria",
    "japanese": "細菌",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "bond",
    "japanese": "絆・結合",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "boundary",
    "japanese": "境界線・限界",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "bravery",
    "japanese": "勇気",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "carbon",
    "japanese": "炭素",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "catastrophe",
    "japanese": "大惨事",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "celebrity",
    "japanese": "有名人",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "citizenship",
    "japanese": "市民権・市民意識",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "coastline",
    "japanese": "海岸線",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "colonization",
    "japanese": "植民地化",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "commerce",
    "japanese": "商業",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "compassion",
    "japanese": "思いやり",
    "category": "名詞",
    "example": "We should show compassion to those in need.",
    "exampleJapanese": "困っている人に思いやりを示すべきだ。"
  },
  {
    "english": "competence",
    "japanese": "能力・技能",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "component",
    "japanese": "構成要素・部品",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "consciousness",
    "japanese": "意識",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "constraint",
    "japanese": "制約",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "convenience",
    "japanese": "便利さ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "conviction",
    "japanese": "確信・有罪判決",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "corruption",
    "japanese": "腐敗・汚職",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "council",
    "japanese": "評議会・委員会",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "crop",
    "japanese": "農作物",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "deforestation",
    "japanese": "森林破壊",
    "category": "名詞",
    "example": "Deforestation threatens the habitat of many animals.",
    "exampleJapanese": "森林破壊は多くの動物の生息地を脅かす。"
  },
  {
    "english": "disadvantage",
    "japanese": "不利・欠点",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "discipline",
    "japanese": "規律・訓練",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "empowerment",
    "japanese": "権限付与・自立支援",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "encounter",
    "japanese": "出会い・遭遇",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "enforcement",
    "japanese": "施行・強制執行",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "fossil fuel",
    "japanese": "化石燃料",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "genome",
    "japanese": "ゲノム",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "headline",
    "japanese": "見出し・ニュース",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "humanity",
    "japanese": "人類・人間性",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "humility",
    "japanese": "謙虚さ",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "ideology",
    "japanese": "イデオロギー・思想",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "immigration",
    "japanese": "移民・入国",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "income",
    "japanese": "収入",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inhabitant",
    "japanese": "住民・居住者",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "instinct",
    "japanese": "本能",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "interpretation",
    "japanese": "解釈",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inventory",
    "japanese": "在庫・目録",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "landmark",
    "japanese": "ランドマーク・画期的な出来事",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "leadership",
    "japanese": "指導力・リーダーシップ",
    "category": "名詞",
    "example": "Good leadership is essential for any organization.",
    "exampleJapanese": "優れたリーダーシップはあらゆる組織に不可欠だ。"
  },
  {
    "english": "lifespan",
    "japanese": "寿命",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "livelihood",
    "japanese": "生計・生活手段",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "luxury",
    "japanese": "贅沢",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "majority",
    "japanese": "多数・過半数",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "manuscript",
    "japanese": "原稿・写本",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "nationality",
    "japanese": "国籍",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "outbreak",
    "japanese": "勃発・流行",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "output",
    "japanese": "生産量・産出",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "peer",
    "japanese": "同僚・同輩",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "proportion",
    "japanese": "割合・比率",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "protest",
    "japanese": "抗議",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "psychology",
    "japanese": "心理学",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pursuit",
    "japanese": "追求",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "reinforcement",
    "japanese": "強化・補強",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rejection",
    "japanese": "拒否・却下",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "relief",
    "japanese": "救済・安堵",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "remedy",
    "japanese": "解決策・治療法",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "renewal",
    "japanese": "更新・再生",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "resistance",
    "japanese": "抵抗・耐性",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "rural area",
    "japanese": "農村地域",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sanitation",
    "japanese": "衛生・公衆衛生設備",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "satellite",
    "japanese": "衛星",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "scenario",
    "japanese": "シナリオ・想定",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sensation",
    "japanese": "感覚・話題",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "sequence",
    "japanese": "順序・一連",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "settlement",
    "japanese": "解決・定住地",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "standard of living",
    "japanese": "生活水準",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "starvation",
    "japanese": "飢餓",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "teamwork",
    "japanese": "チームワーク",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "vaccine",
    "japanese": "ワクチン",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "violation",
    "japanese": "違反・侵害",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "willpower",
    "japanese": "意志力",
    "category": "名詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "admirable",
    "japanese": "称賛すべき",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "affected",
    "japanese": "影響を受けた",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "appreciative",
    "japanese": "感謝している",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "biased",
    "japanese": "偏った",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "compatible",
    "japanese": "相性のいい・互換性のある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "concrete",
    "japanese": "具体的な",
    "category": "形容詞",
    "example": "We need a concrete plan to solve this problem.",
    "exampleJapanese": "この問題を解決するには具体的な計画が必要だ。"
  },
  {
    "english": "conservative",
    "japanese": "保守的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "constructive",
    "japanese": "建設的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "corrupt",
    "japanese": "腐敗した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "countless",
    "japanese": "無数の",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "courageous",
    "japanese": "勇気ある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "daring",
    "japanese": "大胆な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "dedicated",
    "japanese": "献身的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "delicate",
    "japanese": "繊細な・デリケートな",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "determined",
    "japanese": "決意した",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "disabled",
    "japanese": "障害のある",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "educated",
    "japanese": "教育を受けた",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "encouraging",
    "japanese": "励みになる",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "harsh",
    "japanese": "厳しい・過酷な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "inhumane",
    "japanese": "非人道的な",
    "category": "形容詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "accurately",
    "japanese": "正確に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "aggressively",
    "japanese": "積極的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "boldly",
    "japanese": "大胆に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "briefly",
    "japanese": "簡潔に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "broadly",
    "japanese": "広く・大まかに",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "consistently",
    "japanese": "一貫して",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "critically",
    "japanese": "批判的に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "formally",
    "japanese": "正式に",
    "category": "副詞",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "according to the survey",
    "japanese": "調査によると",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "all things considered",
    "japanese": "あらゆることを考慮すると",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "at the expense of",
    "japanese": "〜を犠牲にして",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be apt to do",
    "japanese": "〜しがちだ",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be confronted with",
    "japanese": "〜に直面する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be dedicated to",
    "japanese": "〜に捧げられている",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be exposed to",
    "japanese": "〜にさらされている",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "be likely to",
    "japanese": "〜しそうだ",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "turn out to be",
    "japanese": "〜であることがわかる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "put up with",
    "japanese": "〜を我慢する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "call on",
    "japanese": "〜を訪問する・求める",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "look back on",
    "japanese": "〜を振り返る",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "make the most of",
    "japanese": "〜を最大限に活用する",
    "category": "熟語",
    "example": "Make the most of every opportunity you get.",
    "exampleJapanese": "得られるすべての機会を最大限に活用しよう。"
  },
  {
    "english": "be willing to",
    "japanese": "〜する気がある",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "end in failure",
    "japanese": "失敗に終わる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "far from",
    "japanese": "〜どころか・〜から程遠い",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "get used to",
    "japanese": "〜に慣れる",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "go wrong",
    "japanese": "うまくいかない",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "have trouble with",
    "japanese": "〜で困る",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in a row",
    "japanese": "連続して",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "in need of",
    "japanese": "〜を必要としている",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "let alone",
    "japanese": "〜は言うまでもなく",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "make up for",
    "japanese": "〜を補う",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "nothing but",
    "japanese": "〜にすぎない・〜だけ",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "on second thought",
    "japanese": "考え直してみると",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "out of the question",
    "japanese": "問題外・不可能",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pass on",
    "japanese": "〜を伝える・次に回す",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "pay off",
    "japanese": "報われる・完済する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "prior to",
    "japanese": "〜の前に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "run into",
    "japanese": "〜に偶然会う・問題に直面する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "see eye to eye",
    "japanese": "意見が一致する",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "speaking of",
    "japanese": "〜といえば",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "step by step",
    "japanese": "一歩一歩・段階的に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "to begin with",
    "japanese": "まず第一に",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "up to date",
    "japanese": "最新の",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  },
  {
    "english": "within reach",
    "japanese": "手の届くところに",
    "category": "熟語",
    "example": "",
    "exampleJapanese": ""
  }
];
