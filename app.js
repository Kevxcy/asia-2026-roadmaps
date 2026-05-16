/* Asia 2026 Roadmap — App Logic */

// ── Trip Data ──
// Removed "Schedule logic" and "Big cut" cards per user request; kept "Optional swap"
const views = [
  {
    "id": "checklist", "name": "Checklist", "kind": "checklist",
    "subtitle": "Add and track pre-trip to-do items"
  },
  {
    "id": "overview",
    "name": "Overview",
    "kind": "overview",
    "subtitle": "Vietnam → Chongqing → Zhangjiajie → Shanghai → Beijing → Seoul → Toronto",
    "center": [
      29.8,
      108.8
    ],
    "zoom": 5,
    "points": [
      {
        "n": 1,
        "name": "Hanoi",
        "cn": "河内",
        "lat": 21.0283334,
        "lon": 105.854041,
        "note": "Vietnam staging point before China; West Air departs HAN T2 at 18:25 on Aug 6."
      },
      {
        "n": 2,
        "name": "Ha Long Bay",
        "cn": "下龙湾",
        "lat": 20.9084384,
        "lon": 107.0682782,
        "note": "Vietnam portion marker."
      },
      {
        "n": 3,
        "name": "Ninh Binh",
        "cn": "宁平",
        "lat": 20.2572874,
        "lon": 105.971931,
        "note": "Scenic inland north Vietnam stop."
      },
      {
        "n": 4,
        "name": "Chongqing",
        "cn": "重庆",
        "lat": 29.5584255,
        "lon": 106.570762,
        "note": "Aug 6–10. Marriott Executive Apartments / Jiefangbei base; city route only on website."
      },
      {
        "n": 5,
        "name": "Zhangjiajie / Avatar mountains",
        "cn": "张家界 / 武陵源",
        "lat": 29.3458852,
        "lon": 110.4662037,
        "note": "Aug 11–12 private-tour handled; arrive by direct HSR from Chongqing East, leave by nonstop flight to Shanghai."
      },
      {
        "n": 6,
        "name": "Shanghai",
        "cn": "上海",
        "lat": 31.2330782,
        "lon": 121.4596932,
        "note": "Aug 13–16. Atour X Nanjing West Road base; Disney + Old City/Bund + friend food/shopping + compressed FFC transfer day."
      },
      {
        "n": 7,
        "name": "Beijing",
        "cn": "北京",
        "lat": 39.9353898,
        "lon": 116.4372379,
        "note": "Aug 17–18. Mutianyu Great Wall first, chill shopping/packing day, PEK T2 red-eye buffer."
      },
      {
        "n": 8,
        "name": "Seoul Incheon connection",
        "cn": "首尔仁川",
        "lat": 37.4602,
        "lon": 126.4407,
        "note": "KE864 PEK 01:30 → ICN 04:40 on Aug 19."
      },
      {
        "n": 9,
        "name": "Toronto",
        "cn": "多伦多",
        "lat": 43.6777,
        "lon": -79.6248,
        "note": "KE77 ICN 09:35 → YYZ 09:55."
      }
    ],
    "legs": [
      {
        "from": 1,
        "to": 2,
        "mode": "Vietnam local",
        "label": "Local tour / transfer",
        "note": "Vietnam details live outside this China roadmap; marker included for complete route context."
      },
      {
        "from": 2,
        "to": 3,
        "mode": "Vietnam local",
        "label": "Road transfer",
        "note": "Confirm actual Vietnam order."
      },
      {
        "from": 3,
        "to": 1,
        "mode": "Vietnam local",
        "label": "Return to Hanoi",
        "note": "Pre-China reset before flight."
      },
      {
        "from": 1,
        "to": 4,
        "mode": "Flight",
        "label": "West Air HAN T2 → CKG T3 · Aug 6 · 18:25–21:25",
        "note": "Direct 2 h flight, ~CAD 235. Confirm PNR, baggage allowance, and check-in requirements."
      },
      {
        "from": 4,
        "to": 5,
        "mode": "HSR",
        "label": "Direct HSR Chongqing East → Zhangjiajie West · Aug 11",
        "note": "Locked baseline; private-tour pickup/check-in follows Zhangjiajie West arrival."
      },
      {
        "from": 5,
        "to": 6,
        "mode": "Flight",
        "label": "Nonstop Zhangjiajie Hehua → Shanghai · Aug 13",
        "note": "Prefer SHA if timing/price is close; PVG is acceptable if the nonstop is better."
      },
      {
        "from": 6,
        "to": 7,
        "mode": "HSR",
        "label": "Shanghai → Beijing evening HSR · Aug 16",
        "note": "Key schedule choice that makes Aug 17–18 Beijing usable; protect luggage/shower/station buffer."
      },
      {
        "from": 7,
        "to": 8,
        "mode": "Flight",
        "label": "KE864 PEK T2 → ICN T2 · 01:30 Aug 19",
        "note": "Leave Beijing around 22:00–22:30 on Aug 18."
      },
      {
        "from": 8,
        "to": 9,
        "mode": "Flight",
        "label": "KE77 ICN → YYZ · Aug 19",
        "note": "Connection home."
      }
    ],
    "cards": []
  },
  {
    "id": "chongqing",
    "name": "Chongqing",
    "kind": "city",
    "subtitle": "Aug 6–10 · Jiefangbei base, locked city route, hotpot, hill-city logistics",
    "center": [
      29.557,
      106.555
    ],
    "zoom": 12,
    "hotel": {
      "name": "Marriott Executive Apartments Chongqing",
      "cn": "重庆万豪行政公寓",
      "lat": 29.5584255,
      "lon": 106.570762,
      "note": "Locked/current base: Minsheng Road / Jiefangbei serviced apartment."
    },
    "days": [
      {
        "label": "Day 10 · Aug 7 · Yuzhong walking core",
        "color": "#d97757",
        "stops": [
          {
            "n": 1,
            "name": "Jiefangbei Pedestrian Street",
            "cn": "解放碑步行街",
            "lat": 29.56293,
            "lon": 106.57715,
            "note": "Start central; liberation monument / pedestrian area."
          },
          {
            "n": 2,
            "name": "Bayi Road Food Street",
            "cn": "八一路好吃街",
            "lat": 29.56125,
            "lon": 106.57485,
            "note": "Snack/lunch zone."
          },
          {
            "n": 3,
            "name": "Mountain City Trail",
            "cn": "山城步道",
            "lat": 29.5519,
            "lon": 106.5658,
            "note": "Heat-sensitive walking segment; start early."
          },
          {
            "n": 4,
            "name": "Shibati Traditional Area",
            "cn": "十八梯",
            "lat": 29.5537658,
            "lon": 106.5696236,
            "note": "Restored steps/old-town texture."
          },
          {
            "n": 5,
            "name": "Baixiangju",
            "cn": "白象居",
            "lat": 29.5566,
            "lon": 106.5799,
            "note": "Photo/old residential landmark; optional."
          },
          {
            "n": 6,
            "name": "Huguang Guild Hall",
            "cn": "湖广会馆",
            "lat": 29.5586,
            "lon": 106.5869,
            "note": "Historic guild hall near east Yuzhong."
          },
          {
            "n": 7,
            "name": "Raffles City Chongqing",
            "cn": "重庆来福士广场",
            "lat": 29.5675551,
            "lon": 106.5831253,
            "note": "AC / mall / river view reset."
          },
          {
            "n": 8,
            "name": "Hongya Cave",
            "cn": "洪崖洞",
            "lat": 29.5650738,
            "lon": 106.5753425,
            "note": "Best after dark; crowd/taxi buffer."
          }
        ]
      },
      {
        "label": "Day 11 · Aug 8 · South bank + cableway",
        "color": "#d4b577",
        "stops": [
          {
            "n": 9,
            "name": "Changjiahui / Danzishi Old Street",
            "cn": "长嘉汇 / 弹子石老街",
            "lat": 29.5667,
            "lon": 106.5948,
            "note": "South-bank old street and views."
          },
          {
            "n": 10,
            "name": "Nanbin Zhonglou Square",
            "cn": "南滨钟楼广场",
            "lat": 29.5515,
            "lon": 106.5876,
            "note": "Riverside / South-bank route."
          },
          {
            "n": 11,
            "name": "Longmenhao Old Street",
            "cn": "龙门浩老街",
            "lat": 29.5518,
            "lon": 106.5837,
            "note": "Best paired with cableway/South bank."
          },
          {
            "n": 12,
            "name": "Yangtze River Cableway",
            "cn": "长江索道",
            "lat": 29.5580403,
            "lon": 106.5844384,
            "note": "Queue check; use one-way if needed."
          }
        ]
      },
      {
        "label": "Day 12 · Aug 9 · Eling, museum, Guanyinqiao",
        "color": "#7a9e7e",
        "stops": [
          {
            "n": 13,
            "name": "Eling Erchang Creative Park",
            "cn": "鹅岭二厂",
            "lat": 29.5527,
            "lon": 106.541,
            "note": "Creative park / hilltop-ish stop."
          },
          {
            "n": 14,
            "name": "Liziba Station",
            "cn": "李子坝站",
            "lat": 29.5556616,
            "lon": 106.5339223,
            "note": "Monorail-through-building photo stop."
          },
          {
            "n": 15,
            "name": "Great Hall of the People",
            "cn": "重庆人民大礼堂",
            "lat": 29.564,
            "lon": 106.55,
            "note": "Pair with museum across the square."
          },
          {
            "n": 16,
            "name": "Three Gorges Museum",
            "cn": "三峡博物馆",
            "lat": 29.5648943,
            "lon": 106.5465582,
            "note": "AC/heat fallback anchor."
          },
          {
            "n": 17,
            "name": "Bei Cang Cultural Creative Street",
            "cn": "北仓文创街区",
            "lat": 29.5773,
            "lon": 106.5305,
            "note": "Cafe/creative break near Guanyinqiao."
          },
          {
            "n": 18,
            "name": "Guanyinqiao Pedestrian Area",
            "cn": "观音桥步行街",
            "lat": 29.5758813,
            "lon": 106.5311917,
            "note": "Evening food/shopping zone."
          }
        ]
      },
      {
        "label": "Day 13 · Aug 10 · Current city version",
        "color": "#a892c2",
        "stops": [
          {
            "n": 19,
            "name": "Ciqikou Ancient Town",
            "cn": "磁器口古镇",
            "lat": 29.5792968,
            "lon": 106.4424353,
            "note": "Go early; crowds/heat build."
          },
          {
            "n": 20,
            "name": "Qicai Alley",
            "cn": "七彩巷",
            "lat": 29.5809,
            "lon": 106.4465,
            "note": "Near Ciqikou; optional photo lane."
          },
          {
            "n": 21,
            "name": "Chongqing Zoo",
            "cn": "重庆动物园",
            "lat": 29.5066423,
            "lon": 106.5022128,
            "note": "Pandas if priority; earlier is better."
          },
          {
            "n": 22,
            "name": "Traffic Teahouse",
            "cn": "交通茶馆",
            "lat": 29.505,
            "lon": 106.5352,
            "note": "Old-school tea stop; cash/slow pace."
          },
          {
            "n": 23,
            "name": "Huangjueping Graffiti Street",
            "cn": "黄桷坪涂鸦街",
            "lat": 29.5039,
            "lon": 106.5356,
            "note": "Pair with Traffic Teahouse."
          }
        ]
      }
    ]
  },
  {
    "id": "shanghai",
    "name": "Shanghai",
    "kind": "city",
    "subtitle": "Aug 13–16 · Disney, Old City/Bund, friend food recs, Anfu/Nanjing shopping, compressed FFC/Jing'an transfer day",
    "center": [
      31.223,
      121.485
    ],
    "zoom": 11,
    "hotel": {
      "name": "Atour X Hotel Nanjing West Road Shanghai",
      "cn": "上海南京西路太古汇亚朵X酒店",
      "lat": 31.2330782,
      "lon": 121.4596932,
      "note": "Locked/current base: No. 698 Nanjing West Road."
    },
    "days": [
      {
        "label": "Day 16 · Aug 13 · Arrival light day",
        "color": "#d97757",
        "stops": [
          {
            "n": 1,
            "name": "Atour X / Nanjing West Road check-in",
            "cn": "上海南京西路太古汇亚朵X酒店 / 南京西路",
            "lat": 31.2330782,
            "lon": 121.4596932,
            "note": "Check in and keep arrival light after Zhangjiajie; save Chinese hotel address."
          },
          {
            "n": 2,
            "name": "Xintiandi or FFC light intro",
            "cn": "新天地 / 法租界",
            "lat": 31.2219311,
            "lon": 121.4704371,
            "note": "Pick one low-friction intro only if arrival is smooth."
          },
          {
            "n": 3,
            "name": "Chagee / Ah Ma Handmade BBT if nearby",
            "cn": "霸王茶姬 / 阿嬷手作",
            "lat": 31.2304667,
            "lon": 121.4579532,
            "note": "Tactical drink stop only. Ah Ma order target: taro mochi milk tea / 芋泥麻薯牛乳; skip if queue is dumb."
          },
          {
            "n": 4,
            "name": "The Bund / North Bund evening",
            "cn": "外滩",
            "lat": 31.2353356,
            "lon": 121.487632,
            "note": "Only if arrival is smooth; otherwise sleep before Disney."
          }
        ]
      },
      {
        "label": "Day 17 · Aug 14 · Shanghai Disneyland",
        "color": "#d4b577",
        "stops": [
          {
            "n": 5,
            "name": "Shanghai Disneyland",
            "cn": "上海迪士尼乐园",
            "lat": 31.1462523,
            "lon": 121.6562825,
            "note": "Full-day resort commitment; no city detours."
          }
        ]
      },
      {
        "label": "Day 18 · Aug 15 · Old City → People's Square → Bund",
        "color": "#7a9e7e",
        "stops": [
          {
            "n": 6,
            "name": "Yu Garden / Yuyuan",
            "cn": "豫园",
            "lat": 31.2289274,
            "lon": 121.4879752,
            "note": "Early morning before tour groups/heat."
          },
          {
            "n": 7,
            "name": "Lu Bo Lang",
            "cn": "绿波廊酒楼",
            "lat": 31.2284191,
            "lon": 121.4875436,
            "note": "Sit-down Yuyuan meal option if the group wants predictable logistics."
          },
          {
            "n": 8,
            "name": "Xiao Yang Sheng Jian",
            "cn": "小杨生煎 · 黄河路/人民广场附近",
            "lat": 31.2366304,
            "lon": 121.4660009,
            "note": "Friend-recommended shengjianbao. Snack/simple lunch near People’s Square; not the day anchor."
          },
          {
            "n": 9,
            "name": "Crab-roe noodle lane",
            "cn": "蟹黄面 · 人民广场/南京路附近",
            "lat": 31.2369,
            "lon": 121.4664,
            "note": "Pick a high-rated Dianping shop near the route the day before; keep it tactical."
          },
          {
            "n": 10,
            "name": "People's Square / Shanghai Museum",
            "cn": "人民广场 / 上海博物馆",
            "lat": 31.2301577,
            "lon": 121.4709998,
            "note": "Indoor heat/rain anchor; reserve timed entry if required."
          },
          {
            "n": 11,
            "name": "Nanjing East Road → Bund dinner zone",
            "cn": "南京东路 → 外滩餐厅区",
            "lat": 31.239147,
            "lon": 121.4792191,
            "note": "Friend-supported shopping/walk area; end with Bund walk + one reserved dinner lane."
          }
        ]
      },
      {
        "label": "Day 19 · Aug 16 · FFC / Jing'an + Beijing transfer",
        "color": "#a892c2",
        "stops": [
          {
            "n": 12,
            "name": "Wukang Mansion",
            "cn": "武康大楼",
            "lat": 31.2062561,
            "lon": 121.4337292,
            "note": "Short FFC architecture/café walk."
          },
          {
            "n": 13,
            "name": "Xiao Tao Noodle House option",
            "cn": "小陶面馆 · 嘉善路222号",
            "lat": 31.2081726,
            "lon": 121.4556456,
            "note": "Friend-recommended local noodle shop; reported morning/lunch hours only. Verify in Dianping/Amap first."
          },
          {
            "n": 14,
            "name": "Anfu Road / RAC Coffee",
            "cn": "安福路 / RAC Coffee",
            "lat": 31.2156179,
            "lon": 121.4380352,
            "note": "Café/shopping street; keep it short because this is HSR day."
          },
          {
            "n": 15,
            "name": "To Summer / Melt Season browsing if pinned nearby",
            "cn": "观夏 / Melt Season",
            "lat": 31.2156179,
            "lon": 121.4380352,
            "note": "Perfume nice-to-have. Exact branch/pin must be verified in Amap/Dianping; do not cross town for it."
          },
          {
            "n": 16,
            "name": "Jing'an / Nanjing West Road reset",
            "cn": "静安 / 南京西路",
            "lat": 31.2304667,
            "lon": 121.4579532,
            "note": "Hotel-area packing, shower, luggage, and transfer buffer."
          },
          {
            "n": 17,
            "name": "1000 Trees backup only",
            "cn": "天安千树",
            "lat": 31.2508706,
            "lon": 121.4408887,
            "note": "Cool Putuo architecture mall; replacement backup only, not an add-on before the Beijing HSR."
          },
          {
            "n": 18,
            "name": "Shanghai → Beijing evening HSR",
            "cn": "上海虹桥/上海站 → 北京南",
            "lat": 31.1944,
            "lon": 121.3189,
            "note": "Locked baseline: evening HSR. No hard dinner before departure."
          }
        ]
      }
    ]
  },
  {
    "id": "beijing",
    "name": "Beijing",
    "kind": "city",
    "subtitle": "Aug 17–18 · Mutianyu Great Wall first, chill shopping/packing day, KE864 red-eye",
    "center": [
      40.05,
      116.46
    ],
    "zoom": 9,
    "hotel": {
      "name": "Holiday Inn Express Beijing Dongzhimen",
      "cn": "北京东直门智选假日酒店",
      "lat": 39.9353898,
      "lon": 116.4372379,
      "note": "Primary pick: central enough, clean airport-transfer story."
    },
    "days": [
      {
        "label": "Day 20 · Aug 17 · Mutianyu Great Wall + light add-on",
        "color": "#7a9e7e",
        "stops": [
          {
            "n": 1,
            "name": "Holiday Inn Express Beijing Dongzhimen",
            "cn": "北京东直门智选假日酒店",
            "lat": 39.9353898,
            "lon": 116.4372379,
            "note": "Aug 16 late check-in base; early private driver pickup."
          },
          {
            "n": 2,
            "name": "Mutianyu Great Wall",
            "cn": "慕田峪长城旅游区",
            "lat": 40.4345154,
            "lon": 116.5605754,
            "note": "Primary Beijing anchor. Early arrival; cable car/chairlift saves legs and heat."
          },
          {
            "n": 3,
            "name": "Summer Palace",
            "cn": "颐和园",
            "lat": 39.9900983,
            "lon": 116.2647403,
            "note": "Optional afternoon add-on only if energy/traffic cooperate."
          },
          {
            "n": 4,
            "name": "Wangfujing / central dinner lane",
            "cn": "王府井",
            "lat": 39.9069496,
            "lon": 116.4052789,
            "note": "Simpler late-afternoon/evening option after the Wall."
          },
          {
            "n": 5,
            "name": "Siji Minfu Peking Duck",
            "cn": "四季民福烤鸭",
            "lat": 39.9078,
            "lon": 116.4115,
            "note": "Reserve/queue early; use only if timing is sane."
          }
        ]
      },
      {
        "label": "Day 21 · Aug 18 · Shopping + PEK red-eye buffer",
        "color": "#d97757",
        "stops": [
          {
            "n": 6,
            "name": "Taikoo Li Sanlitun",
            "cn": "三里屯太古里",
            "lat": 39.9335514,
            "lon": 116.4481984,
            "note": "Main chill shopping/café block."
          },
          {
            "n": 7,
            "name": "Wangfujing shopping street",
            "cn": "王府井大街",
            "lat": 39.9069496,
            "lon": 116.4052789,
            "note": "Backup central shopping option."
          },
          {
            "n": 8,
            "name": "Beijing Capital International Airport Terminal 2",
            "cn": "北京首都国际机场 T2",
            "lat": 40.0802322,
            "lon": 116.5938886,
            "note": "KE864 leaves PEK T2 at 01:30 on Aug 19. Pre-book hotel car/van or DiDi; leave central Beijing around 22:00–22:30 on Aug 18."
          }
        ]
      },
      {
        "label": "Day 22 · Aug 19 · KE864 / ICN connection",
        "color": "#8296a8",
        "stops": [
          {
            "n": 9,
            "name": "Beijing Capital International Airport Terminal 2",
            "cn": "北京首都国际机场 T2",
            "lat": 40.0802322,
            "lon": 116.5938886,
            "note": "Korean Air KE864 PEK 01:30 → ICN 04:40; booking ref BW72XV; seats 53A/53B."
          }
        ]
      }
    ]
  }
];

// ── State ──
const state = { active: 0, map: null, layers: null, routeLayer: null };

// ── Checklist Storage ──
const CHECKLIST_KEY = 'asia2026_checklist';

function loadChecklist() {
  try {
    return JSON.parse(localStorage.getItem(CHECKLIST_KEY)) || [];
  } catch { return []; }
}

function saveChecklist(items) {
  localStorage.setItem(CHECKLIST_KEY, JSON.stringify(items));
}

function addChecklistItem(text) {
  if (!text.trim()) return;
  const items = loadChecklist();
  items.push({ id: Date.now(), text: text.trim(), done: false });
  saveChecklist(items);
  renderChecklist();
}

function toggleChecklistItem(id) {
  const items = loadChecklist();
  const item = items.find(i => i.id === id);
  if (item) item.done = !item.done;
  saveChecklist(items);
  renderChecklist();
}

function deleteChecklistItem(id) {
  const items = loadChecklist().filter(i => i.id !== id);
  saveChecklist(items);
  renderChecklist();
}

// ── Utilities ──
const $ = id => document.getElementById(id);

function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, c =>
    ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c])
  );
}

function appleMaps(lat, lon, name) {
  return `https://maps.apple.com/?ll=${lat},${lon}&q=${encodeURIComponent(name)}`;
}

function appleRoute(stops) {
  const a = stops[0], b = stops[stops.length - 1];
  return `https://maps.apple.com/?saddr=${a.lat},${a.lon}&daddr=${b.lat},${b.lon}`;
}

// ── Map Setup ──
function icon(label, color, hotel = false) {
  const size = hotel ? 40 : 32;
  const cls = hotel ? 'marker-hotel' : 'marker-num';
  return L.divIcon({
    className: '',
    html: `<div class="${cls}" style="background:${hotel ? 'var(--accent)' : color}">${label}</div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [0, -size/2]
  });
}

function initMap() {
  if (!window.L) return;

  state.map = L.map('map', {
    zoomControl: true, attributionControl: true,
    scrollWheelZoom: false, dragging: true,
    touchZoom: true, doubleClickZoom: true,
    boxZoom: false, keyboard: false, trackResize: true
  }).setView([29, 108], 5);

  // Dark tiles to match the Anthropic dark theme
  const providers = [
    { url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', subdomains: 'abcd', attr: '&copy; OpenStreetMap &copy; CARTO' },
    { url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', subdomains: '', attr: 'Tiles &copy; Esri' }
  ];

  let idx = 0, layer;
  function loadTiles(i) {
    if (layer) state.map.removeLayer(layer);
    const p = providers[i];
    layer = L.tileLayer(p.url, { maxZoom: 19, subdomains: p.subdomains, attribution: p.attr }).addTo(state.map);
    layer.on('tileerror', () => { if (idx === 0) { idx = 1; loadTiles(idx); } });
  }

  loadTiles(0);
  state.layers = L.layerGroup().addTo(state.map);
  state.routeLayer = L.layerGroup().addTo(state.map);

  window.addEventListener('orientationchange', () => setTimeout(resizeMap, 450));
  window.addEventListener('resize', () => setTimeout(resizeMap, 160));
}

function resizeMap() {
  if (state.map && $('map')?.offsetWidth) state.map.invalidateSize({ pan: false });
}

// ── Rendering ──
function renderTabs() {
  $('tabs').innerHTML = views.map((v, i) =>
    `<button class="tab" type="button" aria-selected="${i === state.active}" onclick="selectView(${i})">${esc(v.name)}</button>`
  ).join('');
}

function renderView() {
  const view = views[state.active];
  renderTabs();

  const mapWrap = document.querySelector('.map-wrap');
  const content = $('content');

  if (view.kind === 'checklist') {
    $('eyebrow').textContent = 'Pre-trip preparation';
    $('title').textContent = view.name;
    $('subtitle').textContent = view.subtitle;
    mapWrap.classList.add('hidden');
    content.classList.add('checklist-content');
    renderChecklist();
    return;
  }

  mapWrap.classList.remove('hidden');
  content.classList.remove('checklist-content');
  $('eyebrow').textContent = view.kind === 'overview' ? 'Complete baseline overview' : 'City roadmap';
  $('title').textContent = view.name;
  $('subtitle').textContent = view.subtitle;
  $('content').innerHTML = view.kind === 'overview' ? renderOverview(view) : renderCity(view);
  renderMap(view);
  setTimeout(resizeMap, 50);
  setTimeout(resizeMap, 700);
}

function renderChecklist() {
  const items = loadChecklist();
  const done = items.filter(i => i.done).length;
  const total = items.length;

  const itemsHtml = items.length === 0
    ? '<div class="checklist-empty">No items yet. Add your first pre-trip task above.</div>'
    : items.map(i => `
      <div class="checklist-item ${i.done ? 'checked' : ''}">
        <button class="checklist-check" onclick="toggleChecklistItem(${i.id})" aria-label="Toggle">${i.done ? '✓' : ''}</button>
        <span class="checklist-text">${esc(i.text)}</span>
        <button class="checklist-delete" onclick="deleteChecklistItem(${i.id})" aria-label="Delete">✕</button>
      </div>
    `).join('');

  $('content').innerHTML = `
    <div>
      <div class="checklist-add">
        <input class="checklist-input" id="checklistInput" type="text" placeholder="Add a checklist item…" onkeydown="if(event.key==='Enter'){addChecklistItem(this.value);this.value='';}" />
        <button class="checklist-btn" onclick="const inp=$('checklistInput');addChecklistItem(inp.value);inp.value='';inp.focus();">Add</button>
      </div>
      ${total > 0 ? `<div class="checklist-stats"><span>${done} of ${total} done</span></div>` : ''}
      <div class="checklist-items">${itemsHtml}</div>
    </div>
  `;
}

function renderOverview(view) {
  const cards = view.cards.map(c =>
    `<article class="overview-card"><div class="label">${esc(c.title)}</div><strong>${esc(c.body)}</strong></article>`
  ).join('');

  const legs = view.legs.map(l =>
    `<article class="leg-card">
      <div class="mode">${esc(l.mode)}</div>
      <div><strong>${esc(l.label)}</strong><span>${esc(l.note)}</span></div>
    </article>`
  ).join('');

  return `<div class="grid"><div class="overview-grid">${cards}</div></div><div class="legs">${legs}</div>`;
}

function renderCity(city) {
  const hotel = `
    <aside class="hotel">
      <div class="label">Pinned base</div>
      <strong>${esc(city.hotel.name)}</strong>
      <small>${esc(city.hotel.cn)} · ${esc(city.hotel.note)}</small>
      <div class="stop-actions">
        <a class="action" href="${appleMaps(city.hotel.lat, city.hotel.lon, city.hotel.name)}" target="_blank" rel="noopener">Open in Apple Maps</a>
      </div>
    </aside>`;

  const days = `<div class="days">${city.days.map(day => `
    <section class="day">
      <div class="day-head">
        <div class="day-title"><i class="swatch" style="background:${day.color}"></i>${esc(day.label)}</div>
      </div>
      <div class="route-links">
        <a class="action" href="${appleRoute(day.stops)}" target="_blank" rel="noopener">Open route in Apple Maps</a>
      </div>
      ${day.stops.map(s => `
        <article class="stop">
          <div class="num" style="background:${day.color}">${s.n}</div>
          <div>
            <b>${esc(s.name)}</b>
            <span>${esc(s.cn)} · ${esc(s.note)}</span>
            <div class="stop-actions">
              <a class="action" href="${appleMaps(s.lat, s.lon, s.name)}" target="_blank" rel="noopener">Open in Apple Maps</a>
            </div>
          </div>
        </article>`).join('')}
    </section>`).join('')}</div>`;

  return hotel + days;
}

// ── Map Markers & Routes ──
function popupHtml(item) {
  return `<div class="popup">
    <b>${esc(item.name)}</b><br>
    <small>${esc(item.cn || '')}</small><br>
    ${esc(item.note || '')}
    <div class="links">
      <a href="${appleMaps(item.lat, item.lon, item.name)}" target="_blank" rel="noopener">Apple Maps</a>
    </div>
  </div>`;
}

function renderMap(view) {
  if (!state.map) return;
  state.layers.clearLayers();
  state.routeLayer.clearLayers();
  const bounds = [];

  if (view.kind === 'overview') {
    const byN = Object.fromEntries(view.points.map(p => [p.n, p]));

    view.legs.forEach((leg, idx) => {
      const a = byN[leg.from], b = byN[leg.to];
      if (!a || !b) return;
      L.polyline([[a.lat, a.lon], [b.lat, b.lon]], {
        color: idx > 6 ? '#8296a8' : '#d97757',
        weight: 3, opacity: 0.78,
        dashArray: leg.mode.includes('Flight') ? '8 10' : '3 8'
      }).bindPopup(`<b>${esc(leg.label)}</b><br>${esc(leg.note)}`).addTo(state.routeLayer);
    });

    view.points.forEach(p => {
      bounds.push([p.lat, p.lon]);
      L.marker([p.lat, p.lon], { icon: icon(p.n, '#d4b577') })
        .bindPopup(popupHtml(p)).addTo(state.layers);
    });

  } else {
    const h = view.hotel;
    bounds.push([h.lat, h.lon]);
    L.marker([h.lat, h.lon], { icon: icon('H', 'var(--accent)', true) })
      .bindPopup(popupHtml(h)).addTo(state.layers);

    view.days.forEach(day => day.stops.forEach(s => {
      bounds.push([s.lat, s.lon]);
      L.marker([s.lat, s.lon], { icon: icon(s.n, day.color) })
        .bindPopup(popupHtml(s)).addTo(state.layers);
    }));
  }

  const maxZoom = view.kind === 'overview' ? 7 : 15;
  setTimeout(() => { resizeMap(); if (bounds.length) state.map.fitBounds(bounds, { padding: [30, 30], maxZoom }); }, 100);
  setTimeout(() => { resizeMap(); if (bounds.length) state.map.fitBounds(bounds, { padding: [30, 30], maxZoom }); }, 650);
}

// ── Navigation ──
function selectView(i) {
  state.active = i;
  renderView();
  requestAnimationFrame(() => $('map').scrollIntoView({ behavior: 'smooth', block: 'nearest' }));
}

// ── Init ──
function init() {
  renderTabs();
  initMap();
  renderView();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
