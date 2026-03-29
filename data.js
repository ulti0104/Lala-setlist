const songLinks = {
  "22歳": "https://music.apple.com/jp/album/22%E6%AD%B3/1803051850?i=1803052563",
  "23さい": "https://music.apple.com/jp/album/23%E3%81%95%E3%81%84/1867115620?i=1867116383",
  "Find me Find you": "https://music.apple.com/jp/album/find-me-find-you/1803051850?i=1803052573",
  "GAMING": "https://music.apple.com/jp/album/gaming/1867115620?i=1867116185",
  "Jealousy": "https://music.apple.com/jp/album/jealousy/1733492139?i=1733493113",
  "LOVER": "https://music.apple.com/jp/album/lover/1760279933?i=1760280130",
  "Mellow": "https://music.apple.com/jp/album/mellow/1803051850?i=1803051856",
  "Monster": "https://music.apple.com/jp/album/monster/1803051850?i=1803052551",
  "NEVER MIND!!!": "https://music.apple.com/jp/album/never-mind/1803051850?i=1803052559",
  "DATE": "https://music.apple.com/jp/album/date/1733492139?i=1733492738",
  "charm": "https://music.apple.com/jp/album/charm/1867115620?i=1867116194",
  "「あたしだけ。」": "https://music.apple.com/jp/album/%E3%81%82%E3%81%9F%E3%81%97%E3%81%A0%E3%81%91/1733492139?i=1733492443",
  "けいはんでんしゃ": "https://music.apple.com/jp/album/%E3%81%91%E3%81%84%E3%81%AF%E3%82%93%E3%81%A7%E3%82%93%E3%81%97%E3%82%83/1867115620?i=1867115744",
  "ただの口約束": "https://music.apple.com/jp/album/%E3%81%9F%E3%81%A0%E3%81%AE%E5%8F%A3%E7%B4%84%E6%9D%9F/1867115620?i=1867115733",
  "だまされてあげる": "https://music.apple.com/jp/album/%E3%81%A0%E3%81%BE%E3%81%95%E3%82%8C%E3%81%A6%E3%81%82%E3%81%92%E3%82%8B/1733492139?i=1733492432",
  "はたち。": "https://music.apple.com/jp/album/%E3%81%AF%E3%81%9F%E3%81%A1/1733492139?i=1733493125",
  "ほろ酔い": "https://music.apple.com/jp/album/%E3%81%BB%E3%82%8D%E9%85%94%E3%81%84/1733492139?i=1733492735",
  "もし君の恋人になれたら": "https://music.apple.com/jp/album/%E3%82%82%E3%81%97%E5%90%9B%E3%81%AE%E6%81%8B%E4%BA%BA%E3%81%AB%E3%81%AA%E3%82%8C%E3%81%9F%E3%82%89/1803051850?i=1803052334",
  "キーホルダー": "https://music.apple.com/jp/album/%E3%82%AD%E3%83%BC%E3%83%9B%E3%83%AB%E3%83%80%E3%83%BC/1867115620?i=1867115726",
  "サーチライト": "https://music.apple.com/jp/album/%E3%82%B5%E3%83%BC%E3%83%81%E3%83%A9%E3%82%A4%E3%83%88/1803051850?i=1803052314",
   "サマーラブ": "https://music.apple.com/jp/album/%E3%82%B5%E3%83%9E%E3%83%BC%E3%83%A9%E3%83%96/1803051850?i=1803052558",
 "チャイムの音で（ayaho）": "https://music.apple.com/jp/album/%E3%83%81%E3%83%A3%E3%82%A4%E3%83%A0%E3%81%AE%E9%9F%B3%E3%81%A7/1550534280?i=1550534283",
  "マフラー": "https://music.apple.com/jp/album/%E3%83%9E%E3%83%95%E3%83%A9%E3%83%BC/1803051850?i=1803052330",
  "メンヘラブストーリー": "https://music.apple.com/jp/album/%E3%83%A1%E3%83%B3%E3%83%98%E3%83%A9%E3%83%96%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC/1803051850?i=1803051859",
  "別れのキスで": "https://music.apple.com/jp/album/%E5%88%A5%E3%82%8C%E3%81%AE%E3%82%AD%E3%82%B9%E3%81%A7-2024-remaster/1733492139?i=1733492953",
  "君がいなくなったくらいじゃ": "https://music.apple.com/jp/album/%E5%90%9B%E3%81%8C%E3%81%84%E3%81%AA%E3%81%8F%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%8F%E3%82%89%E3%81%84%E3%81%98%E3%82%83/1867115620?i=1867115750",
  "君と同じになりたくて": "https://music.apple.com/jp/album/%E5%90%9B%E3%81%A8%E5%90%8C%E3%81%98%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%9F%E3%81%8F%E3%81%A6/1867115620?i=1867115731",
  "君へのワルツ": "https://music.apple.com/jp/album/%E5%90%9B%E3%81%B8%E3%81%AE%E3%83%AF%E3%83%AB%E3%83%84/1803051850?i=1803052555",
  "君を泣かせたい": "https://music.apple.com/jp/album/%E5%90%9B%E3%82%92%E6%B3%A3%E3%81%8B%E3%81%9B%E3%81%9F%E3%81%84/1733492139?i=1733492146",
  "嘘、やっぱ好きです。": "https://music.apple.com/jp/album/%E5%98%98-%E3%82%84%E3%81%A3%E3%81%B1%E5%A5%BD%E3%81%8D%E3%81%A7%E3%81%99/1867115620?i=1867116183",
  "夜明けまで": "https://music.apple.com/jp/album/%E5%A4%9C%E6%98%8E%E3%81%91%E3%81%BE%E3%81%A7/1733492139?i=1733493358",
  "崖っぷちガール": "https://music.apple.com/jp/album/%E5%B4%96%E3%81%A3%E3%81%B7%E3%81%A1%E3%82%AC%E3%83%BC%E3%83%AB/1733492139?i=1733492378",
  "愛ゆえに": "https://music.apple.com/jp/album/%E6%84%9B%E3%82%86%E3%81%88%E3%81%AB/1803051850?i=1803052326",
  "本当に無駄な恋": "https://music.apple.com/jp/album/%E6%9C%AC%E5%BD%93%E3%81%AB%E7%84%A1%E9%A7%84%E3%81%AA%E6%81%8B/1867115620?i=1867115725",
  "死にものぐるいで恋をしていた": "https://music.apple.com/jp/album/%E6%AD%BB%E3%81%AB%E3%82%82%E3%81%AE%E3%81%90%E3%82%8B%E3%81%84%E3%81%A7%E6%81%8B%E3%82%92%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F-2024-remaster/1733492139?i=1733493353",
  "浮気相手さんへ": "https://music.apple.com/jp/album/%E6%B5%AE%E6%B0%97%E7%9B%B8%E6%89%8B%E3%81%95%E3%82%93%E3%81%B8/1867115620?i=1867115730",
  "泣いてばっかだったな": "https://music.apple.com/jp/album/%E6%B3%A3%E3%81%84%E3%81%A6%E3%81%B0%E3%81%A3%E3%81%8B%E3%81%A0%E3%81%A3%E3%81%9F%E3%81%AA/1803051850?i=1803052319",
  "満点人生": "https://music.apple.com/jp/album/%E6%BA%80%E7%82%B9%E4%BA%BA%E7%94%9F/1867115620?i=1867115738",
  "生きてるだけでいい": "https://music.apple.com/jp/album/%E7%94%9F%E3%81%8D%E3%81%A6%E3%82%8B%E3%81%A0%E3%81%91%E3%81%A7%E3%81%84%E3%81%84/1867115620?i=1867115743",
  "正真正銘両片想い": "https://music.apple.com/jp/album/%E6%AD%A3%E7%9C%9F%E6%AD%A3%E9%8A%98%E4%B8%A1%E7%89%87%E6%83%B3%E3%81%84/1803051850?i=1803052566",
  "余計なお世話": "https://music.apple.com/jp/album/%E4%BD%99%E8%A8%88%E3%81%AA%E3%81%8A%E4%B8%96%E8%A9%B1/1733492139?i=1733492426",
  "最低限、君がいなくても": "https://music.apple.com/jp/album/%E6%9C%80%E4%BD%8E%E9%99%90-%E5%90%9B%E3%81%8C%E3%81%84%E3%81%AA%E3%81%8F%E3%81%A6%E3%82%82/1733492139?i=1733492725",
  "月が綺麗に見えるのは": "https://music.apple.com/jp/album/%E6%9C%88%E3%81%8C%E7%B6%BA%E9%BA%97%E3%81%AB%E8%A6%8B%E3%81%88%E3%82%8B%E3%81%AE%E3%81%AF-2024-remaster/1733492139?i=1733492944",
  "別れのキスで": "https://music.apple.com/jp/album/%E5%88%A5%E3%82%8C%E3%81%AE%E3%82%AD%E3%82%B9%E3%81%A7-2024-remaster/1733492139?i=1733492953",
  "英雄になりたい": "https://music.apple.com/jp/album/%E8%8B%B1%E9%9B%84%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%9F%E3%81%84/1867115620?i=1867116173",
  "失恋讃歌": "https://music.apple.com/jp/album/%E5%A4%B1%E6%81%8B%E8%AE%83%E6%AD%8C/1867115620?i=1867116174",
  "今更、何様？": "https://music.apple.com/jp/album/%E4%BB%8A%E6%9B%B4-%E4%BD%95%E6%A7%98/1760279933?i=1760280127"
};



const liveData = [
  {
    id: "2026-03-02-tokyo",
    date: "2026-03-02",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 東京公演",
    venue: "渋谷音楽堂",
    city: "東京",
    note: "ツアーファイナル",
    image: "images/20260302.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "けいはんでんしゃ",
      "君がいなくなったくらいじゃ",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "満点人生",
      "GAMING",
      "charm",
      "ほろ酔い",
      "夜明けまで"
    ]
  },
  {
    id: "2026-03-18-tokyo",
    date: "2026-03-18",
    title: "証明-Vol.4-",
    venue: "渋谷 CHELSEA HOTEL",
    city: "東京",
    note: "",
    image: "images/20260318.jpg",
    setlistMain: [
      "崖っぷちガール",
      "浮気相手さんへ",
      "泣いてばっかだったな",
      "満点人生",
      "GAMING",
      "本当に無駄な恋"
    ],
    setlistEncore: [
      "Monster"
    ]
  },
  {
    id: "2026-03-14-tokyo",
    date: "2026-03-14",
    title: "見放題東京2026",
    venue: "新宿Marble",
    city: "東京",
    note: "",
    image: "images/20260314.jpg",
    setlistMain: [
      "死にものぐるいで恋をしていた",
      "Jealousy",
      "ただの口約束",
      "泣いてばっかだったな",
      "本当に無駄な恋"
    ],
    setlistEncore: []
  },
  {
    id: "2026-03-20-osaka",
    date: "2026-03-20",
    title: "ZERO NEN CIRCUIT2026",
    venue: "KING COBRA",
    city: "大阪",
    note: "",
    image: "images/20260320.jpg",
    setlistMain: [
      "メンヘラブストーリー",
      "本当に無駄な恋",
      "泣いてばっかだったな",
      "英雄になりたい",
      "Jealousy"
    ],
    setlistEncore: []
  },
  {
    id: "2026-02-22-okayama",
    date: "2026-02-22",
    title: "machioto2026",
    venue: "岡山MO:GLA",
    city: "岡山",
    note: "",
    image: "images/20260222.jpg",
    setlistMain: [
      "死にものぐるいで恋をしていた",
      "Jealousy",
      "泣いてばっかだったな",
      "英雄になりたい",
      "本当に無駄な恋"
    ],
    setlistEncore: []
  },
  {
    id: "2026-02-21-osaka",
    date: "2026-02-21",
    title: "MiMiNOKO ROCK FES JAPAN in OSAKA 2026",
    venue: "心斎橋 DROP",
    city: "大阪",
    note: "",
    image: "images/20260221.jpg",
    setlistMain: [
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "満点人生",
      "本当に無駄な恋"
    ],
    setlistEncore: []
  },
  {
    id: "2026-01-31-aichi",
    date: "2026-01-31",
    title: "でらロックフェスティバル 2026-愛知編-",
    venue: "SPADE BOX",
    city: "愛知",
    note: "",
    image: "images/20260131.jpg",
    setlistMain: [
      "生きてるだけでいい",
      "泣いてばっかだったな",
      "英雄になりたい",
      "Jealousy",
      "本当に無駄な恋"
    ],
    setlistEncore: []
  },
  {
    id: "2026-01-30-aichi",
    date: "2026-01-30",
    title: "でらロックフェスティバル2026 前夜祭",
    venue: "Live House R.A.D",
    city: "愛知",
    note: "",
    image: "images/20260130.jpg",
    setlistMain: [
      "君と同じになりたくて  SPver",
      "泣いてばっかだったな  SPver",
      "浮気相手さんへ",
      "英雄になりたい",
      "Jealousy",
      "ほろ酔い",
      "夜明けまで"
    ],
    setlistEncore: [
      "本当に無駄な恋"
    ]
  },
  {
    id: "2026-01-20-osaka",
    date: "2026-01-20",
    title: "MUSIC BUSKER IN UMEKITA",
    venue: "大阪駅 うめきた広場水景前",
    city: "大阪",
    note: "",
    image: "images/20260120.jpg",
    setlistMain: [
      "死にものぐるいで恋をしていた",
      "ただの口約束",
      "泣いてばっかだったな",
      "嘘、やっぱ好きです。",
      "キーホルダー",
      "別れのキスで",
      "Jealousy",
      "チャイムの音で（ayaho）",
      "本当に無駄な恋"
    ],
    setlistEncore: []
  },
  {
    id: "2026-01-18-tokyo",
    date: "2026-01-18",
    title: "でらロックフェスティバル2026 -東京編-",
    venue: "下北沢 MOSAiC",
    city: "東京",
    note: "",
    image: "images/20260118.jpg",
    setlistMain: [
      "死にものぐるいで恋をしていた",
      "泣いてばっかだったな",
      "生きてるだけでいい",
      "英雄になりたい",
      "Jealousy",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2026-01-11-osaka",
    date: "2026-01-11",
    title: "でらロックフェスティバル2026 -大阪編-",
    venue: "Club Joule",
    city: "大阪",
    note: "",
    image: "images/20260111.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "泣いてばっかだったな",
      "Jealousy",
      "浮気相手さんへ",
      "メンヘラブストーリー",
      "夜明けまで"
    ],
    setlistEncore: []
  },
  {
    id: "2026-01-07-tokyo",
    date: "2026-01-07",
    title: "Noisy!!",
    venue: "代官山SPACE ODD",
    city: "東京",
    note: "",
    image: "images/20260107.jpg",
    setlistMain: [
      "死にものぐるいで恋をしていた",
      "泣いてばっかだったな",
      "浮気相手さんへ",
      "君と同じになりたくて",
      "マフラー",
      "Jealousy",
      "本当に無駄な恋"
    ],
    setlistEncore: []
  },
  {
    id: "2026-01-03-kyoto",
    date: "2026-01-03",
    title: "B.LEAGUE 京都ハンナリーズ HOME GAME OA",
    venue: "京都市体育館",
    city: "京都",
    note: "",
    image: "images/20260103.jpg",
    setlistMain: [
      "Jealousy"
    ],
    setlistEncore: []
  },
  {
    id: "2025-12-30-tokyo",
    date: "2025-12-30",
    title: "COUNTDOWN MOSAiC 2025→2026",
    venue: "下北沢MOSAiC",
    city: "東京",
    note: "",
    image: "images/20251230.jpg",
    setlistMain: [
      "Jealousy",
      "泣いてばっかだったな",
      "浮気相手さんへ",
      "メンヘラブストーリー",
      "夜明けまで"
    ],
    setlistEncore: []
  },
  {
    id: "2025-12-17-aichi",
    date: "2025-12-17",
    title: "栄大乱闘2025",
    venue: "Live House R.A.D",
    city: "愛知",
    note: "",
    image: "images/20251217.jpg",
    setlistMain: [
      "マフラー",
      "Jealousy",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "メンヘラブストーリー",
      "本当に無駄な恋",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2025-12-12-hiroshima",
    date: "2025-12-12",
    title: "Chimothy→ pre.『たのちもしーツアー』〜ワクワク対バン編〜",
    venue: "広島 ALMIGHTY",
    city: "広島",
    note: "",
    image: "images/20251212.jpg",
    setlistMain: [
      "Jealousy",
      "泣いてばっかだったな",
      "死にものぐるいで恋をしていた",
      "君と同じになりたくて",
      "マフラー",
      "本当に無駄な恋",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2025-12-11-fukuoka",
    date: "2025-12-11",
    title: "らそんぶる1st LIVE TOUR 2025『月夜の下、私たちは離ればなれにならないツアー』",
    venue: "福岡 Queblick",
    city: "福岡",
    note: "",
    image: "images/20251211.jpg",
    setlistMain: [
      "Jealousy",
      "メンヘラブストーリー",
      "泣いてばっかだったな",
      "別れのキスで",
      "君と同じになりたくて",
      "死にものぐるいで恋をしていた",
      "本当に無駄な恋",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2025-12-08-tokyo",
    date: "2025-12-08",
    title: "シベリアンハスキー東名阪ツアー　アイラブユー！",
    venue: "Spotify O-Crest",
    city: "東京",
    note: "",
    image: "images/20251208.jpg",
    setlistMain: [
      "マフラー",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "Jealousy",
      "本当に無駄な恋"
    ],
    setlistEncore: []
  },
  {
    id: "2025-11-03-osaka",
    date: "2025-11-03",
    title: "成城大学   柳祭 2025",
    venue: "成城大学",
    city: "大阪",
    note: "",
    image: "images/20251103.jpg",
    setlistMain: [
      "Jealousy",
      "泣いてばっかだったな",
      "死にものぐるいで恋をしていた"
    ],
    setlistEncore: []
  },
  {
    id: "2025-11-02-tokyo",
    date: "2025-11-02",
    title: "KNOCKOUT FES 2025",
    venue: "下北沢ReG",
    city: "東京",
    note: "",
    image: "images/20251102.jpg",
    setlistMain: [
      "ほろ酔い",
      "Jealousy",
      "本当に無駄な恋",
      "Monster",
      "夜明けまで"
    ],
    setlistEncore: []
  },
  {
    id: "2025-10-26-tokyo",
    date: "2025-10-26",
    title: "609号室 presentsロクフェス",
    venue: "代官山SPACE ODD",
    city: "東京",
    note: "",
    image: "images/20251026.jpg",
    setlistMain: [
      "Jealousy",
      "メンヘラブストーリー",
      "死にものぐるいで恋をしていた",
      "泣いてばっかだったな",
      "本当に無駄な恋",
      "夜明けまで"
    ],
    setlistEncore: [
      "ほろ酔い"
    ]
  },
  {
    id: "2025-10-24-tokyo",
    date: "2025-10-24",
    title: "YURERUKO「hinataぼっこ」レコ発LIVE -音に恋して揺れろ-",
    venue: "下北沢MOSAiC",
    city: "東京",
    note: "",
    image: "images/20251024.jpg",
    setlistMain: [
      "ほろ酔い",
      "Jealousy",
      "死にものぐるいで恋をしていた",
      "泣いてばっかだったな",
      "本当に無駄な恋",
      "夜明けまで"
    ],
    setlistEncore: []
  },
  {
    id: "2025-10-16-aichi",
    date: "2025-10-16",
    title: "ROCK the ROCK!!",
    venue: "CLUB UPSET",
    city: "愛知",
    note: "",
    image: "images/20251016.jpg",
    setlistMain: [
      "Jealousy",
      "メンヘラブストーリー",
      "泣いてばっかだったな",
      "死にものぐるいで恋をしていた",
      "本当に無駄な恋",
      "ほろ酔い"
    ],
    setlistEncore: [
      "崖っぷちガール"
    ]
  },
  {
    id: "2025-10-12-osaka1",
    date: "2025-10-12",
    title: "ayaho 弾き語り",
    venue: "三木楽器 アメリカ村店",
    city: "大阪",
    note: "",
    image: "images/202510121.jpg",
    setlistMain: [
      "君を泣かせたい",
      "泣いてばっかだったな",
      "今更、何様？",
      "本当に無駄な恋",
      "はたち。",
      "嘘、やっぱ好きです。"
    ],
    setlistEncore: []
  },
  {
    id: "2025-10-12-osaka2",
    date: "2025-10-12",
    title: "MINAMI WHEEL 2025",
    venue: "FANJ twice",
    city: "大阪",
    note: "",
    image: "images/202510122.jpg",
    setlistMain: [
      "死にものぐるいで恋をしていた",
      "Jealousy",
      "泣いてばっかだったな",
      "メンヘラブストーリー",
      "本当に無駄な恋",
      "Mellow",
      "夜明けまで"
    ],
    setlistEncore: []
  },
  {
    id: "2025-10-12-osaka3",
    date: "2025-10-12",
    title: "DROP Presents MIONICHT DROOINHEEL -MINAMI WHEEL AFTER EDITION-〜黒鹿祭〜",
    venue: "アメリカ村 DROP",
    city: "大阪",
    note: "",
    image: "images/202510123.jpg",
    setlistMain: [
      "愛ゆえに",
      "崖っぷちガール",
      "別れのキスで",
      "泣いてばっかだったな",
      "本当に無駄な恋",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2025-10-11-aichi",
    date: "2025-10-11",
    title: "縁演炎-enn-",
    venue: "新栄 SPADE BOX",
    city: "愛知",
    note: "",
    image: "images/20251011.jpg",
    setlistMain: [
      "メンヘラブストーリー",
      "Jealousy",
      "嘘、やっぱ好きです。",
      "本当に無駄な恋",
      "別れのキスで",
      "泣いてばっかだったな",
      "愛ゆえに",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2025-10-06-tokyo",
    date: "2025-10-06",
    title: "証明-Vol.1-",
    venue: "渋谷 CHELSEA HOTEL",
    city: "東京",
    note: "",
    image: "images/20251006.jpg",
    setlistMain: [
      "愛ゆえに",
      "泣いてばっかだったな",
      "嘘、やっぱ好きです。",
      "本当に無駄な恋",
      "死にものぐるいで恋をしていた",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2025-09-23-tokyo",
    date: "2025-09-23",
    title: "TOKYO CALLING 2025",
    venue: "下北沢MOSAiC",
    city: "東京",
    note: "",
    image: "images/20250923.jpg",
    setlistMain: [
      "メンヘラブストーリー",
      "愛ゆえに",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "死にものぐるいで恋をしていた",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2025-09-16-osaka",
    date: "2025-09-16",
    title: "FOREVER YOUNG vol.17",
    venue: "北堀江club vijon",
    city: "大阪",
    note: "",
    image: "images/20250916.jpg",
    setlistMain: [
      "愛ゆえに",
      "泣いてばっかだったな",
      "嘘、やっぱ好きです。",
      "崖っぷちガール",
      "死にものぐるいで恋をしていた",
      "メンヘラブストーリー",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2025-09-14-aichi",
    date: "2025-09-14",
    title: "至福ぽんちょ自主企画「⾄福のひととき」 vol.1",
    venue: "Live House R.A.D",
    city: "愛知",
    note: "",
    image: "images/20250914.jpg",
    setlistMain: [
      "Jealousy",
      "崖っぷちガール",
      "死にものぐるいで恋をしていた",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "夜明けまで"
    ],
    setlistEncore: []
  },
  {
    id: "2025-06-19-osaka",
    date: "2025-06-19",
    title: "Neo Japanesque　メジャー1st Album『響鳴-KYOMEI-』リリースツアー-Resonance-",
    venue: "Music Club JANUS",
    city: "大阪",
    note: "",
    image: "images/20250619.jpg",
    setlistMain: [
      "もし君の恋人になれたら",
      "泣いてばっかだったな",
      "はたち。",
      "「あたしだけ。」",
      "死にものぐるいで恋をしていた",
      "月が綺麗に見えるのは",
      "Monster"
    ],
    setlistEncore: []
  },
  {
    id: "2025-09-02-kyoto",
    date: "2025-09-02",
    title: "IrisaVior 2nd EP 「アイビー」Release Tour 遠く想い果てる DAY①",
    venue: "京都MUSE",
    city: "京都",
    note: "",
    image: "images/20250902.jpg",
    setlistMain: [
      "もし君の恋人になれたら",
      "サーチライト",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "死にものぐるいで恋をしていた",
      "崖っぷちガール",
      "Jealousy",
      "ほろ酔い"
    ],
    setlistEncore: []
  },
  {
    id: "2026-01-14-hokkaido",
    date: "2026-01-14",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 北海道公演",
    venue: "札幌Crazy Monkey",
    city: "北海道",
    note: "",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "サーチライト",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "GAMING",
      "charm"
    ]
  },
  {
    id: "2026-01-16-saitama",
    date: "2026-01-16",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 埼玉公演",
    venue: "西川口Hearts",
    city: "埼玉",
    note: "",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "サーチライト",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "GAMING",
      "charm"
    ]
  },
  {
    id: "2026-01-22-hiroshima",
    date: "2026-01-22",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 広島公演",
    venue: "SIX ONE",
    city: "広島",
    note: "",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "サーチライト",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "GAMING",
      "charm"
    ]
  },
  {
    id: "2026-01-23-kagawa",
    date: "2026-01-23",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 香川公演",
    venue: "高松TOONICE",
    city: "香川",
    note: "MC-香川と高松迷って か！か！ま！つ！",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "サーチライト",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "GAMING",
      "charm"
    ]
  },
  {
    id: "2026-01-25-fukuoka",
    date: "2026-01-25",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 福岡公演",
    venue: "Live House 秘密",
    city: "福岡",
    note: "",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "君がいなくなったくらいじゃ",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "GAMING",
      "charm",
      "夜明けまで"
    ]
  },
  {
    id: "2026-02-04-osaka",
    date: "2026-02-04",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 大阪公演",
    venue: "Yogibo META VALLEY",
    city: "大阪",
    note: "",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "君がいなくなったくらいじゃ",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "GAMING",
      "charm"
    ]
  },
  {
    id: "2026-02-07-kanagawa",
    date: "2026-02-07",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 神奈川公演",
    venue: "横浜BAYSIS",
    city: "神奈川",
    note: "",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "君がいなくなったくらいじゃ",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "満点人生",
      "GAMING",
      "charm"
    ]
  },
  {
    id: "2026-02-08-miyagi",
    date: "2026-02-08",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 宮城公演",
    venue: "仙台enn 3rd",
    city: "宮城",
    note: "牛タンMC大ウケ",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "君がいなくなったくらいじゃ",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "満点人生",
      "GAMING",
      "charm"
    ]
  },
  {
    id: "2026-02-19-shizuoka",
    date: "2026-02-19",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 静岡公演",
    venue: "浜松FORCE",
    city: "静岡",
    note: "さやわかMC伝説級の大ウケ",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "君がいなくなったくらいじゃ",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "満点人生",
      "GAMING",
      "charm"
    ]
  },
  {
    id: "2026-02-20-aichi",
    date: "2026-02-20",
    title: "Lala ONEMAN LIVE TOUR 2026 FULL OF CHARM!!! 愛知公演",
    venue: "ell.FITS ALL",
    city: "愛知",
    note: "",
    image: "images/charmtour.jpg",
    setlistMain: [
      "本当に無駄な恋",
      "ただの口約束",
      "Jealousy",
      "浮気相手さんへ",
      "嘘、やっぱ好きです。",
      "泣いてばっかだったな",
      "君と同じになりたくて",
      "君がいなくなったくらいじゃ",
      "キーホルダー",
      "生きてるだけでいい",
      "マフラー",
      "英雄になりたい",
      "けいはんでんしゃ",
      "死にものぐるいで恋をしていた",
      "NEVER MIND!!!",
      "メンヘラブストーリー",
      "Find me Find you"
    ],
    setlistEncore: [
      "満点人生",
      "GAMING",
      "charm"
    ]
  },
  {
    id: "2025-06-21-osaka1",
    date: "2025-06-21",
    title: "SAKURA BUD LIVE ayaho（from.Lala）弾き語り1部",
    venue: "ヨドコウ桜スタジアム",
    city: "大阪",
    note: "",
    image: "images/20250621.jpg",
    setlistMain: [
      "Jealousy",
      "崖っぷちガール",
      "泣いてばっかだったな",
      "はたち。",
      "死にものぐるいで恋をしていた"
    ],
    setlistEncore: []
  },
  {
    id: "2025-06-21-osaka2",
    date: "2025-06-21",
    title: "SAKURA BUD LIVE ayaho（from.Lala）弾き語り2部",
    venue: "ヨドコウ桜スタジアム",
    city: "大阪",
    note: "",
    image: "images/20250621.jpg",
    setlistMain: [
      "君を泣かせたい",
      "今更、何様？",
      "22歳",
      "泣いてばっかだったな",
      "崖っぷちガール"
    ],
    setlistEncore: []
  },
  {
    id: "2023-12-13-osaka",
    date: "2023-12-13",
    title: "Lala ONEMAN LIVE 「メイクオーバー」",
    venue: "梅田Shangri-La",
    city: "大阪",
    note: "",
　image: "images/20231213.jpg",
    setlistMain: [

    "君を泣かせたい",
    "崖っぷちガール",
    "DATE",
    "余計なお世話",
    "最低限、君がいなくても",
    "「あたしだけ。」",
    "だまされてあげる",
    "別れのキスで",
    "Jealousy",
    "ほろ酔い",
    "はたち。",
    "死にものぐるいで恋をしていた"
    ],
    setlistEncore: [
    "月が綺麗に見えるのは",
    "夜明けまで"
    ]
  },
  {
  id: "2024-12-03-aichi",
  date: "2024-12-03",
  title: "SUNDAY FOLK PROMOTION presents NO TITLE vol.3",
  venue: "新栄 SPADE BOX",
  city: "愛知",
  note: "",
  image: "images/20241203.jpg",
  setlistMain: [
    "サーチライト",
    "死にものぐるいで恋をしていた",
    "Jealousy",
    "別れのキスで",
    "はたち。",
    "「あたしだけ。」",
    "22歳",
    "ほろ酔い",
    "夜明けまで"
  ],
  setlistEncore: []
},
  {
    id: "2025-02-08-aichi",
    date: "2025-02-08",
    title: "浪漫派マシュマロ 燦燦と輝いてツアー",
    venue: " 名古屋RAD SEVEN",
    city: "愛知",
    note: "",
　image: "images/20250208.jpg",
    setlistMain: [
    "マフラー",
    "Jealousy",
    "愛ゆえに",
    "死にものぐるいで恋をしていた",
    "ほろ酔い",
    "夜明けまで"
    ],
    setlistEncore: [

    ]
  },
  {
    id: "2024-10-13-osaka",
    date: "2024-10-13",
    title: "MINAMI WHEEL2024",
    venue: "アメリカ村 DROP",
    city: "大阪",
    note: "",
　image: "images/20241013.jpg",
    setlistMain: [
    "Jealousy",
    "22歳",
    "別れのキスで",
    "「あたしだけ。」",
    "死にものぐるいで恋をしていた",
    "ほろ酔い"
    ],
    setlistEncore: [

    ]
  }
];
