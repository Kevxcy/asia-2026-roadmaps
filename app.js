/* Asia 2026 Roadmap — App Logic */

// ── Trip Data ──
// Removed "Schedule logic" and "Big cut" cards per user request; kept "Optional swap"
const views = [
  {
    id:"overview", name:"Overview", kind:"overview",
    subtitle:"Vietnam → Chongqing → Zhangjiajie → Shanghai → Beijing → Seoul → Toronto",
    center:[29.8,108.8], zoom:5,
    points:[
      {n:1,name:"Hanoi",cn:"河内",lat:21.0283334,lon:105.854041,note:"Vietnam staging point before China; West Air flight departs from Hanoi to Chongqing."},
      {n:2,name:"Ha Long Bay",cn:"下龙湾",lat:20.9084384,lon:107.0682782,note:"Vietnam portion marker."},
      {n:3,name:"Ninh Binh",cn:"宁平",lat:20.2572874,lon:105.971931,note:"Scenic inland north Vietnam stop."},
      {n:4,name:"Chongqing",cn:"重庆",lat:29.5584255,lon:106.570762,note:"Aug 6–10. Marriott Executive Apartments / Jiefangbei base."},
      {n:5,name:"Wulong Karst alternative",cn:"武隆喀斯特",lat:29.4399342,lon:107.7863287,note:"Alternative Chongqing Day 4: Three Natural Bridges + Longshuixia Gorge."},
      {n:6,name:"Zhangjiajie / Avatar mountains",cn:"张家界 / 武陵源",lat:29.3458852,lon:110.4662037,note:"Aug 11–12 private-tour handled. Avatar-style sandstone pillars."},
      {n:7,name:"Shanghai",cn:"上海",lat:31.2330782,lon:121.4596932,note:"Aug 13–16. Atour X Nanjing West Road base; Disney + Old City/Bund."},
      {n:8,name:"Beijing",cn:"北京",lat:39.9353898,lon:116.4372379,note:"Aug 17–18. Mutianyu Great Wall first, then chill shopping + PEK red-eye buffer."},
      {n:9,name:"Seoul Incheon connection",cn:"首尔仁川",lat:37.4602,lon:126.4407,note:"KE864 PEK 01:30 → ICN 04:40 on Aug 19."},
      {n:10,name:"Toronto",cn:"多伦多",lat:43.6777,lon:-79.6248,note:"KE77 ICN 09:35 → YYZ 09:55."}
    ],
    legs:[
      {from:1,to:2,mode:"Vietnam local",label:"Local tour / transfer",note:"Vietnam details live outside this China roadmap."},
      {from:2,to:3,mode:"Vietnam local",label:"Road transfer",note:"Confirm actual Vietnam order."},
      {from:3,to:1,mode:"Vietnam local",label:"Return to Hanoi",note:"Pre-China reset before flight."},
      {from:1,to:4,mode:"Flight",label:"West Air Hanoi → Chongqing · Aug 6",note:"Direct flight; confirm flight number, time, PNR, baggage."},
      {from:4,to:6,mode:"Flight / train",label:"Chongqing → Zhangjiajie · Aug 11",note:"Private tour pickup/check-in follows transfer."},
      {from:6,to:7,mode:"Flight / train",label:"Zhangjiajie → Shanghai · Aug 13",note:"Keep arrival day light."},
      {from:7,to:8,mode:"HSR / flight",label:"Shanghai → Beijing · evening/night Aug 16",note:"Key schedule change that makes Aug 17–18 Beijing usable."},
      {from:8,to:9,mode:"Flight",label:"KE864 PEK T2 → ICN T2 · 01:30 Aug 19",note:"Leave Beijing around 22:00–22:30 on Aug 18."},
      {from:9,to:10,mode:"Flight",label:"KE77 ICN → YYZ · Aug 19",note:"Connection home."}
    ],
    cards:[
      {title:"Optional swap",body:"Wulong Karst can replace Chongqing Day 4, but it is a long nature day and should not be tacked onto the city route."}
    ]
  },
  {
    id:"chongqing", name:"Chongqing", kind:"city",
    subtitle:"Aug 6–10 · Jiefangbei base, river geometry, hotpot, hill-city logistics",
    center:[29.557,106.555], zoom:12,
    hotel:{name:"Marriott Executive Apartments Chongqing",cn:"重庆万豪行政公寓",lat:29.5584255,lon:106.570762,note:"Locked/current base: Minsheng Road / Jiefangbei serviced apartment."},
    days:[
      {label:"Day 10 · Aug 7 · Yuzhong walking core",color:"#d97757",stops:[
        {n:1,name:"Jiefangbei Pedestrian Street",cn:"解放碑步行街",lat:29.56293,lon:106.57715,note:"Start central; liberation monument / pedestrian area."},
        {n:2,name:"Bayi Road Food Street",cn:"八一路好吃街",lat:29.56125,lon:106.57485,note:"Snack/lunch zone."},
        {n:3,name:"Mountain City Trail",cn:"山城步道",lat:29.5519,lon:106.5658,note:"Heat-sensitive walking segment; start early."},
        {n:4,name:"Shibati Traditional Area",cn:"十八梯",lat:29.5537658,lon:106.5696236,note:"Restored steps/old-town texture."},
        {n:5,name:"Baixiangju",cn:"白象居",lat:29.5566,lon:106.5799,note:"Photo/old residential landmark; optional."},
        {n:6,name:"Huguang Guild Hall",cn:"湖广会馆",lat:29.5586,lon:106.5869,note:"Historic guild hall near east Yuzhong."},
        {n:7,name:"Raffles City Chongqing",cn:"重庆来福士广场",lat:29.5675551,lon:106.5831253,note:"AC / mall / river view reset."},
        {n:8,name:"Hongya Cave",cn:"洪崖洞",lat:29.5650738,lon:106.5753425,note:"Best after dark; crowd/taxi buffer."}
      ]},
      {label:"Day 11 · Aug 8 · South bank + cableway",color:"#d4b577",stops:[
        {n:9,name:"Changjiahui / Danzishi Old Street",cn:"长嘉汇 / 弹子石老街",lat:29.5667,lon:106.5948,note:"South-bank old street and views."},
        {n:10,name:"Nanbin Zhonglou Square",cn:"南滨钟楼广场",lat:29.5515,lon:106.5876,note:"Riverside / South-bank route."},
        {n:11,name:"Longmenhao Old Street",cn:"龙门浩老街",lat:29.5518,lon:106.5837,note:"Best paired with cableway/South bank."},
        {n:12,name:"Yangtze River Cableway",cn:"长江索道",lat:29.5580403,lon:106.5844384,note:"Queue check; use one-way if needed."}
      ]},
      {label:"Day 12 · Aug 9 · Eling, museum, Guanyinqiao",color:"#7a9e7e",stops:[
        {n:13,name:"Eling Erchang Creative Park",cn:"鹅岭二厂",lat:29.5527,lon:106.541,note:"Creative park / hilltop-ish stop."},
        {n:14,name:"Liziba Station",cn:"李子坝站",lat:29.5556616,lon:106.5339223,note:"Monorail-through-building photo stop."},
        {n:15,name:"Great Hall of the People",cn:"重庆人民大礼堂",lat:29.564,lon:106.55,note:"Pair with museum across the square."},
        {n:16,name:"Three Gorges Museum",cn:"三峡博物馆",lat:29.5648943,lon:106.5465582,note:"AC/heat fallback anchor."},
        {n:17,name:"Bei Cang Cultural Creative Street",cn:"北仓文创街区",lat:29.5773,lon:106.5305,note:"Cafe/creative break near Guanyinqiao."},
        {n:18,name:"Guanyinqiao Pedestrian Area",cn:"观音桥步行街",lat:29.5758813,lon:106.5311917,note:"Evening food/shopping zone."}
      ]},
      {label:"Day 13 · Aug 10 · Current city version",color:"#a892c2",stops:[
        {n:19,name:"Ciqikou Ancient Town",cn:"磁器口古镇",lat:29.5792968,lon:106.4424353,note:"Go early; crowds/heat build."},
        {n:20,name:"Qicai Alley",cn:"七彩巷",lat:29.5809,lon:106.4465,note:"Near Ciqikou; optional photo lane."},
        {n:21,name:"Chongqing Zoo",cn:"重庆动物园",lat:29.5066423,lon:106.5022128,note:"Pandas if priority; earlier is better."},
        {n:22,name:"Traffic Teahouse",cn:"交通茶馆",lat:29.505,lon:106.5352,note:"Old-school tea stop; cash/slow pace."},
        {n:23,name:"Huangjueping Graffiti Street",cn:"黄桷坪涂鸦街",lat:29.5039,lon:106.5356,note:"Pair with Traffic Teahouse."}
      ]}
    ]
  },
  {
    id:"wulong", name:"Chongqing Alt", kind:"city",
    subtitle:"Alternative Day 13 · replace Ciqikou/zoo/teahouse with Wulong Karst nature day",
    center:[29.44,107.78], zoom:10,
    hotel:{name:"Start/end: Marriott Executive Apartments Chongqing",cn:"重庆万豪行政公寓",lat:29.5584255,lon:106.570762,note:"Long day from Chongqing. Treat as a deliberate swap, not an add-on."},
    days:[
      {label:"Alt Day 13 · Aug 10 · Wulong Karst day trip",color:"#7a9e7e",stops:[
        {n:1,name:"Chongqing base / early departure",cn:"重庆市区出发",lat:29.5584255,lon:106.570762,note:"Leave early. Train/driver logistics must be booked."},
        {n:2,name:"Wulong / Fairy Mountain visitor area",cn:"武隆 / 仙女山游客中心",lat:29.424,lon:107.76,note:"Gateway for shuttles to the karst sights."},
        {n:3,name:"Three Natural Bridges",cn:"天生三桥",lat:29.4399342,lon:107.7863287,note:"Primary Wulong sight. Allow roughly half a day."},
        {n:4,name:"Longshuixia Gorge",cn:"龙水峡地缝",lat:29.4006852,lon:107.7882607,note:"Pair with Three Natural Bridges. Wet/slippery steps; bring poncho and grippy shoes."},
        {n:5,name:"Return to Chongqing",cn:"返回重庆",lat:29.5584255,lon:106.570762,note:"Evening return. Do not schedule hard dinner or cross-city sightseeing after."}
      ]},
      {label:"If overnight / more ambitious",color:"#d4b577",stops:[
        {n:6,name:"Fairy Mountain",cn:"仙女山",lat:29.5,lon:107.78,note:"Better with an overnight or second day."},
        {n:7,name:"Furong Cave area",cn:"芙蓉洞",lat:29.2935921,lon:107.8161547,note:"Cave + cable car. Too much combined with both core sights in one day."}
      ]}
    ]
  },
  {
    id:"shanghai", name:"Shanghai", kind:"city",
    subtitle:"Aug 13–16 · Disney, Old City/Bund, compressed FFC/Jing'an transfer day",
    center:[31.223,121.485], zoom:11,
    hotel:{name:"Atour X Hotel Nanjing West Road Shanghai",cn:"上海南京西路太古汇亚朵X酒店",lat:31.2330782,lon:121.4596932,note:"Locked/current base: No. 698 Nanjing West Road."},
    days:[
      {label:"Day 16 · Aug 13 · Arrival light day",color:"#d97757",stops:[
        {n:1,name:"Xintiandi",cn:"新天地",lat:31.2219311,lon:121.4704371,note:"Easy central intro if energy allows."},
        {n:2,name:"The Bund / North Bund evening",cn:"外滩",lat:31.2353356,lon:121.487632,note:"Only if arrival is smooth; otherwise sleep."}
      ]},
      {label:"Day 17 · Aug 14 · Shanghai Disneyland",color:"#d4b577",stops:[
        {n:3,name:"Shanghai Disneyland",cn:"上海迪士尼乐园",lat:31.1462523,lon:121.6562825,note:"Full-day resort commitment; no city detours."}
      ]},
      {label:"Day 18 · Aug 15 · Old City → People's Square → Bund",color:"#7a9e7e",stops:[
        {n:4,name:"Yu Garden / Yuyuan",cn:"豫园",lat:31.2289274,lon:121.4879752,note:"Early morning before tour groups/heat."},
        {n:5,name:"Lu Bo Lang",cn:"绿波廊酒楼",lat:31.2284191,lon:121.4875436,note:"Sit-down Yuyuan meal option."},
        {n:6,name:"Jia Jia Tang Bao",cn:"佳家汤包",lat:31.2370072,lon:121.4660479,note:"Only if queue is sane."},
        {n:7,name:"People's Square / Shanghai Museum",cn:"人民广场 / 上海博物馆",lat:31.2301577,lon:121.4709998,note:"Indoor heat/rain anchor; reserve if required."},
        {n:8,name:"Nanjing East Road → Bund dinner zone",cn:"南京东路 → 外滩餐厅区",lat:31.2347,lon:121.49,note:"Bund walk + one reserved dinner lane."}
      ]},
      {label:"Day 19 · Aug 16 · FFC / Jing'an + Beijing transfer",color:"#a892c2",stops:[
        {n:9,name:"Wukang Mansion",cn:"武康大楼",lat:31.2062561,lon:121.4337292,note:"Short FFC architecture/café walk."},
        {n:10,name:"Anfu Road / RAC Coffee",cn:"安福路 / RAC Coffee",lat:31.2151768,lon:121.4357134,note:"Café/brunch stop; keep this light."},
        {n:11,name:"Jing'an / Nanjing West Road reset",cn:"静安 / 南京西路",lat:31.225215,lon:121.4407923,note:"Hotel-area packing, shower, luggage, and transfer buffer."},
        {n:12,name:"Shanghai → Beijing evening/night transfer",cn:"上海 → 北京",lat:31.2304,lon:121.4737,note:"Book HSR or flight for Aug 16 evening/night."}
      ]}
    ]
  },
  {
    id:"beijing", name:"Beijing", kind:"city",
    subtitle:"Aug 17–18 · Mutianyu Great Wall first, chill shopping/packing day, KE864 red-eye",
    center:[40.05,116.46], zoom:9,
    hotel:{name:"Holiday Inn Express Beijing Dongzhimen",cn:"北京东直门智选假日酒店",lat:39.9353898,lon:116.4372379,note:"Primary pick: central enough, clean airport-transfer story."},
    days:[
      {label:"Day 20 · Aug 17 · Mutianyu Great Wall + light add-on",color:"#7a9e7e",stops:[
        {n:1,name:"Holiday Inn Express Beijing Dongzhimen",cn:"北京东直门智选假日酒店",lat:39.9353898,lon:116.4372379,note:"Aug 16 late check-in base; early private driver pickup."},
        {n:2,name:"Mutianyu Great Wall",cn:"慕田峪长城旅游区",lat:40.4345154,lon:116.5605754,note:"Primary Beijing anchor. Early arrival; cable car/chairlift saves legs and heat."},
        {n:3,name:"Summer Palace",cn:"颐和园",lat:39.9900983,lon:116.2647403,note:"Optional afternoon add-on only if energy/traffic cooperate."},
        {n:4,name:"Wangfujing / central dinner lane",cn:"王府井",lat:39.9069496,lon:116.4052789,note:"Simpler late-afternoon/evening option after the Wall."},
        {n:5,name:"Siji Minfu Peking Duck",cn:"四季民福烤鸭",lat:39.9078,lon:116.4115,note:"Reserve/queue early; use only if timing is sane."}
      ]},
      {label:"Day 21 · Aug 18 · Shopping + PEK red-eye buffer",color:"#d97757",stops:[
        {n:6,name:"Taikoo Li Sanlitun",cn:"三里屯太古里",lat:39.9335514,lon:116.4481984,note:"Main chill shopping/café block."},
        {n:7,name:"Wangfujing shopping street",cn:"王府井大街",lat:39.9069496,lon:116.4052789,note:"Backup central shopping option."},
        {n:8,name:"Beijing Capital International Airport Terminal 2",cn:"北京首都国际机场 T2",lat:40.0802322,lon:116.5938886,note:"KE864 leaves PEK at 01:30 on Aug 19. Leave central Beijing around 22:00–22:30 on Aug 18."}
      ]},
      {label:"Day 22 · Aug 19 · KE864 / ICN connection",color:"#8296a8",stops:[
        {n:9,name:"Beijing Capital International Airport Terminal 2",cn:"北京首都国际机场 T2",lat:40.0802322,lon:116.5938886,note:"Korean Air KE864 PEK 01:30 → ICN 04:40; booking ref BW72XV; seats 53A/53B."}
      ]}
    ]
  }
];

// ── State ──
const state = { active: 0, map: null, layers: null, routeLayer: null };

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
    { url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', subdomains: 'abcd', attr: '&copy; OpenStreetMap &copy; CARTO' },
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
  $('eyebrow').textContent = view.kind === 'overview' ? 'Complete trip overview' : 'City roadmap';
  $('title').textContent = view.name;
  $('subtitle').textContent = view.subtitle;
  $('content').innerHTML = view.kind === 'overview' ? renderOverview(view) : renderCity(view);
  renderMap(view);
  setTimeout(resizeMap, 50);
  setTimeout(resizeMap, 700);
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
