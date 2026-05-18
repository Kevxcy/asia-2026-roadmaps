/* Asia 2026 Roadmap — App Logic */

// ── Trip Data ──
// Removed "Schedule logic" and "Big cut" cards per user request; kept "Optional swap"
const views = [
  {
    "id": "checklist", "name": "Checklist", "kind": "checklist",
    "subtitle": "Add and track pre-trip to-do items"
  },
  {
    "id": "guide", "name": "Guide", "kind": "guide",
    "subtitle": "Itinerary website best practices implemented for field use"
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
            "note": "Start central; liberation monument / pedestrian area.",
            "detail": "Chongqing's central commercial district anchored by the Liberation Monument — a 1950 obelisk marking the city's wartime liberation. The surrounding pedestrian area has tall buildings, fast-food chains, and crowds on weekends; start here for orientation and air-conditioned mall cover if the heat builds. Best experienced on foot early in the day before the crowd density peaks."
          },
          {
            "n": 2,
            "name": "Bayi Road Food Street",
            "cn": "八一路好吃街",
            "lat": 29.56125,
            "lon": 106.57485,
            "note": "Snack/lunch zone.",
            "detail": "A long-established Chongqing snack street immediately south of Jiefangbei, lined with small stalls and casual restaurants selling malatang, hotpot noodles, and regional fast food. Drop in for a quick meal or afternoon bite; come hungry and share across a few stalls rather than committing to one full meal. Skip if queues are long — the surrounding streets have comparable options."
          },
          {
            "n": 3,
            "name": "Mountain City Trail",
            "cn": "山城步道",
            "lat": 29.5519,
            "lon": 106.5658,
            "note": "Heat-sensitive walking segment; start early.",
            "detail": "A hillside walkway through Yuzhong District connecting lower and upper Chongqing via historic stone steps, neighbourhoods, and viewpoints over the city and rivers. The eastern section between You折巷 and Daomenkou is the best-preserved stretch — allow an hour and start from the higher end going down to avoid steep uphill climbing. Heat and humidity make early morning the only practical window for this stop."
          },
          {
            "n": 4,
            "name": "Shibati Traditional Area",
            "cn": "十八梯",
            "lat": 29.5537658,
            "lon": 106.5696236,
            "note": "Restored steps/old-town texture.",
            "detail": "A restored old-town neighbourhood linking upper and lower Jiefangbei through a steep stepped lane, rebuilt after 2020 to preserve its original layout and street character. Walk the full descent from Dingji Gate to Ziyou Gate for the clearest experience of the hill-city's layered structure — the bottom exits near Minzu Road and Raffles City. Come early; by midday it fills with visitor traffic and the steep steps become slippery with condensation."
          },
          {
            "n": 5,
            "name": "Baixiangju",
            "cn": "白象居",
            "lat": 29.5566,
            "lon": 106.5799,
            "note": "Photo/old residential landmark; optional.",
            "detail": "A 24-floor residential building from the 1990s known for its stacked stairwell entrances that create a photogenic stacked-box effect — visible from across the valley looking back toward the Jiefangbei towers. Use Baixiangju as a quick photo stop rather than a planned destination; look for the stairwell entrance on the south-facing facade for the clearest stacked-balcony shot. The surrounding streets connect naturally if walking between Jiefangbei and Huguang Guild Hall."
          },
          {
            "n": 6,
            "name": "Huguang Guild Hall",
            "cn": "湖广会馆",
            "lat": 29.5586,
            "lon": 106.5869,
            "note": "Historic guild hall near east Yuzhong.",
            "detail": "A historic provincial guild hall complex near the east edge of Yuzhong District, built in the 18th–19th centuries by migrants from Hunan and Guangxi provinces who settled in Chongqing. The ornate double-stage opera hall inside is the architectural highlight — book a performance or at least step inside to see the wood carvings and acoustics. Allow 45–60 minutes; the adjacent Chaoyang Gate area is worth a short walk after."
          },
          {
            "n": 7,
            "name": "Raffles City Chongqing",
            "cn": "重庆来福士广场",
            "lat": 29.5675551,
            "lon": 106.5831253,
            "note": "AC / mall / river view reset.",
            "detail": "A landmark mixed-use complex at the confluence of the Yangtze and Jialing Rivers, designed by Moshe Safdie with eight towers connected by a skybridge observation deck at levels 47–48. Walk the outdoor terrace on the fourth floor for direct views of the river confluence and the historic city wall remains at Chaotianmen. The air-conditioned mall inside is useful as a heat reset point; the skybridge requires a separate ticket."
          },
          {
            "n": 8,
            "name": "Hongya Cave",
            "cn": "洪崖洞",
            "lat": 29.5650738,
            "lon": 106.5753425,
            "note": "Best after dark; crowd/taxi buffer.",
            "detail": "A stilt-built cave-like commercial complex on the south bank of the Jialing River near Jiefangbei, modelled on a traditional mountain-top town with 11 floors of restaurants, teahouses, and souvenir stalls cascading down the hillside. Best experienced after dark when the LED lighting makes the cave facade look like a fantasy illustration; arrive after 19:00 for the visual and expect dense crowds and slow taxi drop-offs. Walk the lower floors (1–4) for the most photogenic vertical layering effect."
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
            "note": "South-bank old street and views.",
            "detail": "A revitalised historic district at the southern foot of the Chaotianmen Bridge, with reconstructed Qing-dynasty architecture, river-view terraces, and a cultural museum. Come for the view of the Yangtze and Jialing confluence from the second-floor terraces, then walk through the main old-street corridor for food and souvenir options. Allow 45–60 minutes; combine with Nanbin Zhonglou Square on the same south-bank walk."
          },
          {
            "n": 10,
            "name": "Nanbin Zhonglou Square",
            "cn": "南滨钟楼广场",
            "lat": 29.5515,
            "lon": 106.5876,
            "note": "Riverside / South-bank route.",
            "detail": "A riverside plaza at the foot of the Huangshang坡 Bridge featuring a restored clock tower built in the Republican era and open waterfront promenades along the Yangtze. The tower is not an interior museum — it is best seen from across the river with Jiefangbei's skyline as a backdrop, particularly in the golden hour before sunset. Walk the riverside embankment south toward Danzishi for a continuous south-bank experience."
          },
          {
            "n": 11,
            "name": "Longmenhao Old Street",
            "cn": "龙门浩老街",
            "lat": 29.5518,
            "lon": 106.5837,
            "note": "Best paired with cableway/South bank.",
            "detail": "A preserved stretch of Republican-era streetscape along the Yangtze riverbank beneath the Huangshang坡 Bridge, featuring tiled facades, former foreign concession buildings, and art studios. The street sits directly below the bridge approaches — visit after the cableway stop to see it in combination with the river views from above. Small in scale; budget 20–30 minutes and combine with Nanbin Zhonglou Square in the same south-bank session."
          },
          {
            "n": 12,
            "name": "Yangtze River Cableway",
            "cn": "长江索道",
            "lat": 29.5580403,
            "lon": 106.5844384,
            "note": "Queue check; use one-way if needed.",
            "detail": "An aerial tramway operating since 1987 that crosses the Yangtze in a cable car, connecting Yuzhong District with the south bank near Longmenhao. The south-bound station (上新街) is near the old street areas; the north-bound station (小什字) is near Jiefangbei. Queues at peak hours can exceed 90 minutes; buy ticket, use one-way, and taxi back for the best time budget. Round-trip is only worth it if you want to experience both directions without heat or time pressure."
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
            "note": "Creative park / hilltop-ish stop.",
            "detail": "A repurposed 1960s printing factory on a ridge in Yuzhong District converted into a creative/art hub with studios, cafés, rooftop terraces, and city views. The main draw is the rooftop level with panorama views east toward Jiefangbei and the river valleys; the interior studios and restaurants are secondary. Walk up from the lower entrance off Cuiheng Road rather than taking a taxi to the top — the hill approach is part of the experience."
          },
          {
            "n": 14,
            "name": "Liziba Station",
            "cn": "李子坝站",
            "lat": 29.5556616,
            "lon": 106.5339223,
            "note": "Monorail-through-building photo stop.",
            "detail": "A Line 2 monorail station where the train passes horizontally through a residential building — the station's platforms sit within the tower's sixth through eighth floors. Do not try to enter the building above the station; the view from below on Jiangzhou Road is the recognised photo point. Time your photo for when a train passes through — the Line 2 frequency is every 4–6 minutes. Walk from here to Eling Park or take a taxi south to continue the day's plan."
          },
          {
            "n": 15,
            "name": "Great Hall of the People",
            "cn": "重庆人民大礼堂",
            "lat": 29.564,
            "lon": 106.55,
            "note": "Pair with museum across the square.",
            "detail": "Chongqing's civic landmark building, designed in 1954 as a Mao-era assembly hall with a distinctive blue-tiled dome resembling Beijing's Temple of Heaven. The exterior and plaza are the main draw; interior access requires joining a guided tour — check the schedule if you want to go inside. Sit on the steps or across the square at the Three Gorges Museum entrance for the standard framing photo."
          },
          {
            "n": 16,
            "name": "Three Gorges Museum",
            "cn": "三峡博物馆",
            "lat": 29.5648943,
            "lon": 106.5465582,
            "note": "AC/heat fallback anchor.",
            "detail": "A large modern museum near the Great Hall of the People covering the Three Gorges Dam project, the history of the Yangtze basin, and Chongqing's wartime role — the permanent exhibitions on the third floor are the anchor. The building is air-conditioned and well-suited as a midday heat fallback; allow 90–120 minutes for the main floors. Free entry; bring passport for ticket registration."
          },
          {
            "n": 17,
            "name": "Bei Cang Cultural Creative Street",
            "cn": "北仓文创街区",
            "lat": 29.5773,
            "lon": 106.5305,
            "note": "Cafe/creative break near Guanyinqiao.",
            "detail": "A small cluster of converted warehouse buildings near Guanyinqiao that house independent cafés, boutique shops, and creative studios in a quieter setting than the main pedestrian area. The courtyard and rooftop sections are the main draws; the street is short enough to walk in 15–20 minutes. Useful as a pre-dinner calm stop before Guanyinqiao's busier food scene kicks in."
          },
          {
            "n": 18,
            "name": "Guanyinqiao Pedestrian Area",
            "cn": "观音桥步行街",
            "lat": 29.5758813,
            "lon": 106.5311917,
            "note": "Evening food/shopping zone.",
            "detail": "Chongqing's second major commercial pedestrian zone after Jiefangbei, built around a modern pedestrian square and connected shopping malls. The square is well-known locally as an evening gathering point — the best time to visit is from 18:00 onward when the outdoor lighting and fountain show activate. Use it as the evening food/shopping cluster; the surrounding malls offer air-conditioned dining options if the heat persists."
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
            "note": "Go early; crowds/heat build.",
            "detail": "A historic market town dating to the early Ming dynasty on Chongqing's western edge, once known for its porcelain production and now lined with souvenir shops, teahouses, and local snack stalls. Go as early as possible — by mid-morning the main stone-paved street fills with visitor groups and the heat builds with no shade. Take photos at the ancient bridge and the section near the old cinema before the crowd density peaks."
          },
          {
            "n": 20,
            "name": "Qicai Alley",
            "cn": "七彩巷",
            "lat": 29.5809,
            "lon": 106.4465,
            "note": "Near Ciqikou; optional photo lane.",
            "detail": "A narrow street near Ciqikou decorated with coloured murals and installations by local art students — one of several small art alleys in the Shapingba District. Visit Qicai Alley as a quick addition after Ciqikou if time and heat permit; it takes under 15 minutes. Walk the surrounding small alleys for additional murals; the area is quieter than Ciqikou proper."
          },
          {
            "n": 21,
            "name": "Chongqing Zoo",
            "cn": "重庆动物园",
            "lat": 29.5066423,
            "lon": 106.5022128,
            "note": "Pandas if priority; earlier is better.",
            "detail": "A zoo approximately 8 km southwest of central Chongqing with one of China's largest and most active panda enclosures — pandas are the primary reason to come. Arrive before 09:00 if pandas are a priority; the zoo opens at 08:00 and panda activity drops noticeably after noon. The zoo also has other animals, but pandas dominate the visitor experience and time budget."
          },
          {
            "n": 22,
            "name": "Traffic Teahouse",
            "cn": "交通茶馆",
            "lat": 29.505,
            "lon": 106.5352,
            "note": "Old-school tea stop; cash/slow pace.",
            "detail": "An unassuming traditional tea house near the zoo in a converted ground-floor space used by local residents for cards, mahjong, and slow-pace conversation. The interior has changed little since the 1980s — plastic stools, low tables, and tea poured from large aluminium thermoses. Come for the atmosphere and a cup of Chinese tea; bring cash and expect low English signage. Budget 30–45 minutes."
          },
          {
            "n": 23,
            "name": "Huangjueping Graffiti Street",
            "cn": "黄桷坪涂鸦街",
            "lat": 29.5039,
            "lon": 106.5356,
            "note": "Pair with Traffic Teahouse.",
            "detail": "A ~1 km stretch of road near the Chongqing Fine Arts Academy covered in large-scale murals painted by art students, with vivid colour and large-format pieces spanning building façades. Walk the street at ground level and cross over to the opposite side of the road for the best view of the full building-height murals. Combined with the nearby Traffic Teahouse in the same area south of central Chongqing; the two work well back-to-back."
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
            "note": "Check in and keep arrival light after Zhangjiajie; save Chinese hotel address.",
            "detail": "The Atour X Hotel at 698 Nanjing West Road is in a prime central location between People’s Square and Jing'an, well-served by metro Lines 1, 2, and 12. Save the Chinese hotel name and address — 南京西路698号 — for showing to taxi drivers or entering in Amap/Baidu; the Chinese address resolves better than the English name in China navigation apps. Use the first evening for light recovery; do not plan a strenuous activity after the Zhangjiajie-to-Shanghai flight."
          },
          {
            "n": 2,
            "name": "Xintiandi or FFC light intro",
            "cn": "新天地 / 法租界",
            "lat": 31.2219311,
            "lon": 121.4704371,
            "note": "Pick one low-friction intro only if arrival is smooth.",
            "detail": "Xintiandi is a stylish entertainment district built around preserved shikumen (stone-gate) townhouses, now housing restaurants, bars, and boutique shops — good for a low-key evening walk if energy allows. The Former French Concession (FFC) around Wukang Road offers a quieter, tree-lined street character with independent cafés and heritage architecture. Pick one on arrival day; do not try to cover both as the contrast is more about mood than logistics."
          },
          {
            "n": 3,
            "name": "Chagee / Ah Ma Handmade BBT if nearby",
            "cn": "霸王茶姬 / 阿嬷手作",
            "lat": 31.2304667,
            "lon": 121.4579532,
            "note": "Tactical drink stop only. Ah Ma order target: taro mochi milk tea / 芋泥麻薯牛乳; skip if queue is dumb.",
            "detail": "Chagee is a popular China BBT chain with multiple Shanghai branches; Ah Ma Handmade (阿嬷手作) is a newer specialty brand known for its taro mochi milk tea (芋泥麻薯牛乳). Use both as tactical heat-break stops only when a branch falls naturally near the day's route — do not plan a detour for them. Check Dianping for the nearest branch before committing; skip if the queue exceeds 20 minutes."
          },
          {
            "n": 4,
            "name": "The Bund / North Bund evening",
            "cn": "外滩",
            "lat": 31.2353356,
            "lon": 121.487632,
            "note": "Only if arrival is smooth; otherwise sleep before Disney.",
            "detail": "The Bund is Shanghai's iconic colonial-era waterfront with 52 buildings of various architectural styles facing the Pudong skyline across the Huangpu River — best seen at dusk when the tower lights come on. Walk from the iconic view near the Waitanyuan heritage area north toward Suzhou Creek, or simply take the standard photo from the Bund elevation near the Peace Hotel. Taxi directly if tired; do not walk far on this first Shanghai evening after Zhangjiajie."
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
            "note": "Full-day resort commitment; no city detours.",
            "detail": "China's only Disney resort, located in Pudong near the airport — a full-day commitment with seven themed areas, the Tron light-cycle ride, the Seven Dwarfs Mine Train, and the evening fireworks show. Arrive before official park opening; buy Premier Access passes for the most crowded rides if the queue timing is bad. August is peak summer — heat, sun, and weekend crowds make hydration, indoor AC breaks, and a planned rest strategy essential. No other Shanghai sightseeing should be scheduled this day."
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
            "note": "Early morning before tour groups/heat.",
            "detail": "A classical Ming-dynasty garden in the old city near the Bund, with pavilions, rockeries, bridges, and dense planting packed into a compact walled area. Arrive at or before opening (08:30) to photograph the garden before the tour-group density peaks — mid-morning brings large Chinese tour groups that make the space feel crowded. Allow 60–90 minutes; pair with Yuyuan Bazaar outside the garden's east gate for souvenirs and snacks."
          },
          {
            "n": 7,
            "name": "Lu Bo Lang",
            "cn": "绿波廊酒楼",
            "lat": 31.2284191,
            "lon": 121.4875436,
            "note": "Sit-down Yuyuan meal option if the group wants predictable logistics.",
            "detail": "A long-established restaurant inside the Yuyuan Bazaar area with a history dating to the Ming dynasty — known for serving visiting dignitaries and offering refined Shanghai-style dim sum and banquet dishes. Sit-down table service with a full menu; book ahead or arrive before 11:00 to avoid a long wait. Mid-range to premium pricing; the location inside the tourist Bazaar adds a premium but the food quality is consistent."
          },
          {
            "n": 8,
            "name": "Xiao Yang Sheng Jian",
            "cn": "小杨生煎 · 黄河路/人民广场附近",
            "lat": 31.2366304,
            "lon": 121.4660009,
            "note": "Friend-recommended shengjianbao. Snack/simple lunch near People’s Square; not the day anchor.",
            "detail": "Shanghai's most famous shengjianbao (pan-fried soup dumpling) chain, with multiple branches — the one near People's Square at 108 Huanghe Road is the flagship and most visited by tourists. Order the standard shengjianbao and small soup portions; the filling is juicy and the bottom is crispy-fried. Expect a queue at peak hours — arrive before 12:00 or after 13:30 for shorter waits."
          },
          {
            "n": 9,
            "name": "Crab-roe noodle lane",
            "cn": "蟹黄面 · 人民广场/南京路附近",
            "lat": 31.2369,
            "lon": 121.4664,
            "note": "Pick a high-rated Dianping shop near the route the day before; keep it tactical.",
            "detail": "Crab-roe noodles (秃黄油拌面) are a rich Shanghai autumn specialty; high-rated Dianping shops cluster near People's Square and the eastern end of Nanjing East Road. Use Dianping to identify the top-rated option the day before — do not follow stale blog rankings for crab-roe noodles, as quality changes quickly. A tactical lunch stop, not a planned destination; judge by current Dianping ratings on the day."
          },
          {
            "n": 10,
            "name": "People's Square / Shanghai Museum",
            "cn": "人民广场 / 上海博物馆",
            "lat": 31.2301577,
            "lon": 121.4709998,
            "note": "Indoor heat/rain anchor; reserve timed entry if required.",
            "detail": "The central plaza of Shanghai with the iconic urban planning exhibition and the Shanghai Museum directly adjacent — free admission with passport registration. The museum's Chinese ceramic and furniture collections are the highlights; the building is air-conditioned and well-suited as a midday shelter. Reserve 60–90 minutes; timed entry may be required — check the museum's WeChat account or Trip.com before arrival."
          },
          {
            "n": 11,
            "name": "Nanjing East Road → Bund dinner zone",
            "cn": "南京东路 → 外滩餐厅区",
            "lat": 31.239147,
            "lon": 121.4792191,
            "note": "Friend-supported shopping/walk area; end with Bund walk + one reserved dinner lane.",
            "detail": "The main pedestrian shopping street running east from People's Square down to the Bund waterfront — a mix of international brands, Chinese retailers, and active street life. Walk it in the late afternoon as the transition to Bund dinner; do not treat it as a dedicated shopping stop on this day since there is no time. The stretch near the Bund exit leads naturally into the evening riverfront walk."
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
            "note": "Short FFC architecture/café walk.",
            "detail": "An iconic 1924 Art Deco apartment building at the corner of Huaihai Middle Road and Wukang Road, forming a distinctive V-shape in plan — one of Shanghai's most photographed buildings. The standard photo is taken from the pedestrian crossing at Wukang Road looking up; the ground-floor café under the building is a good rest stop. Walk south on Wukang Road into the FFC tree-lined streets afterward for a natural continuation."
          },
          {
            "n": 13,
            "name": "Xiao Tao Noodle House option",
            "cn": "小陶面馆 · 嘉善路222号",
            "lat": 31.2081726,
            "lon": 121.4556456,
            "note": "Friend-recommended local noodle shop; reported morning/lunch hours only. Verify in Dianping/Amap first.",
            "detail": "A local noodle shop at Jiashan Road 222 in the Xujiahui area, known for hand-pulled noodles and rich broths at budget prices — a favourite among nearby residents. Reported hours are morning and lunch only; confirm on Dianping or Amap before heading there on Aug 16. One of the best low-cost authentic meal options in the Shanghai itinerary — worth a short detour if the timing works for the morning."
          },
          {
            "n": 14,
            "name": "Anfu Road / RAC Coffee",
            "cn": "安福路 / RAC Coffee",
            "lat": 31.2156179,
            "lon": 121.4380352,
            "note": "Café/shopping street; keep it short because this is HSR day.",
            "detail": "A trendy short street in the FFC near Wukang Road lined with independent cafés, boutique clothing shops, and lifestyle stores — RAC Coffee at 55 Anfu Road is the main anchor stop. Browse casually; the street is under 500 metres long and takes 15–20 minutes at walking pace. This is a light stop on a transfer day — do not spend more than 30 minutes here."
          },
          {
            "n": 15,
            "name": "To Summer / Melt Season browsing if pinned nearby",
            "cn": "观夏 / Melt Season",
            "lat": 31.2156179,
            "lon": 121.4380352,
            "note": "Perfume nice-to-have. Exact branch/pin must be verified in Amap/Dianping; do not cross town for it.",
            "detail": "Chinese luxury perfume and home-fragrance brand with several Shanghai branches; Anfu Road and Jing'an/Nanjing West Road areas have known locations. Verify the exact branch and opening hours in Amap or Dianping before going — branches open and close frequently. Browse as a nice-to-have if near Anfu Road; do not cross town specifically for it on transfer day."
          },
          {
            "n": 16,
            "name": "Jing'an / Nanjing West Road reset",
            "cn": "静安 / 南京西路",
            "lat": 31.2304667,
            "lon": 121.4579532,
            "note": "Hotel-area packing, shower, luggage, and transfer buffer.",
            "detail": "The hotel-adjacent area around the Atour X for packing, shower, luggage consolidation, and group check-out before the evening HSR. Use the hotel lobby or nearby café as the final staging area — do not plan sightseeing after this point on Aug 16. Confirm HSR tickets and station (Shanghai Hongqiao or Shanghai railway) before leaving the hotel."
          },
          {
            "n": 17,
            "name": "1000 Trees backup only",
            "cn": "天安千树",
            "lat": 31.2508706,
            "lon": 121.4408887,
            "note": "Cool Putuo architecture mall; replacement backup only, not an add-on before the Beijing HSR.",
            "detail": "A distinctive shopping mall in Putuo District designed by Thomas Heatherwick — the building exterior resembles a mountain covered in trees with hanging gardens on the upper terraces. Architecture interest is the main draw; the interior retail is secondary. Use as a backup only on Aug 16 if the FFC/Jing'an cluster is too fast and you want a replacement activity — not as an add-on that risks the HSR timing."
          },
          {
            "n": 18,
            "name": "Shanghai → Beijing evening HSR",
            "cn": "上海虹桥/上海站 → 北京南",
            "lat": 31.1944,
            "lon": 121.3189,
            "note": "Locked baseline: evening HSR. No hard dinner before departure.",
            "detail": "The evening high-speed rail from Shanghai to Beijing — city-centre station flow means less airport friction and no luggage transport across the city. Target a departure between 18:30 and 20:30 arriving Beijing South late evening; no hard dinner before departure. Book exact seats together as a group; Beijing South station is connected to the Beijing hotel area by metro Line 2."
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
            "note": "Aug 16 late check-in base; early private driver pickup.",
            "detail": "A consistent mid-range hotel near Dongzhimen interchange where Lines 2, 13, and the Airport Express converge — close enough to central Beijing for logistics, simple and clean for a red-eye-adjacent stay. Pre-arrange the Mutianyu Great Wall pickup for early morning Aug 17; the driver needs clear instructions on the hotel entrance. Late check-in on Aug 16 after the HSR from Shanghai."
          },
          {
            "n": 2,
            "name": "Mutianyu Great Wall",
            "cn": "慕田峪长城旅游区",
            "lat": 40.4345154,
            "lon": 116.5605754,
            "note": "Primary Beijing anchor. Early arrival; cable car/chairlift saves legs and heat.",
            "detail": "A restored section of the Great Wall ~70 km north of central Beijing, less crowded than Badaling and with well-maintained walkways and watchtower structures. Book a private driver for the early morning pickup — allow 90 minutes each way from Dongzhimen in clear traffic. The cable car up and toboggan down save significant leg effort in August heat; buy round-trip tickets on the official Mutianyu tourism account or Trip.com."
          },
          {
            "n": 3,
            "name": "Summer Palace",
            "cn": "颐和园",
            "lat": 39.9900983,
            "lon": 116.2647403,
            "note": "Optional afternoon add-on only if energy/traffic cooperate.",
            "detail": "A vast imperial lakeside garden northwest of central Beijing, centred on Kunming Lake with pavilions, corridors, bridges, and the Long Corridor paintings. Visit only in the afternoon of Aug 17 if the Great Wall morning finished early and traffic/energy cooperates — it requires 2–3 hours to cover meaningfully. If the Wall day runs long or the heat is bad, skip it; do not force it after a full Great Wall morning."
          },
          {
            "n": 4,
            "name": "Wangfujing / central dinner lane",
            "cn": "王府井",
            "lat": 39.9069496,
            "lon": 116.4052789,
            "note": "Simpler late-afternoon/evening option after the Wall.",
            "detail": "Beijing's classic shopping street with international brands, traditional food options, and the Wangfujing Snack Alley at the south end — functional as an evening food stop on Aug 17. The street is broad and air-conditioned malls line sections of it; use the northern end near the hotel for simpler logistics if Sanlitun doesn't happen. One meal stop here, not a dedicated shopping day — Aug 18 is the shopping day."
          },
          {
            "n": 5,
            "name": "Siji Minfu Peking Duck",
            "cn": "四季民福烤鸭",
            "lat": 39.9078,
            "lon": 116.4115,
            "note": "Reserve/queue early; use only if timing is sane.",
            "detail": "One of Beijing's most reliable Peking duck restaurants with multiple branches — the Wangfujing area branch is closest to the hotel cluster. Reserve a table or arrive before 17:30 on Aug 17 to avoid a long wait; duck served with traditional pancakes, scallion, and cucumber. Mid-range pricing for consistently good duck; worth the booking effort on the Great Wall evening."
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
            "note": "Main chill shopping/café block.",
            "detail": "An upscale open-air shopping and lifestyle district in the Sanlitun area near the diplomatic使馆 area, with international brands, design stores, cafés, and restaurants. The north village (北区) is more upscale; the south (南区) has wider variety and more accessible price points. Best used as the Aug 18 chill day anchor — walk the area casually and pick one or two stores of interest rather than planning a route."
          },
          {
            "n": 7,
            "name": "Wangfujing shopping street",
            "cn": "王府井大街",
            "lat": 39.9069496,
            "lon": 116.4052789,
            "note": "Backup central shopping option.",
            "detail": "Beijing's central shopping pedestrian street — broad, busy, and mixed between international retail and local food vendors. Use as a backup shopping option on Aug 18 if Sanlitun feels too spread out; the metro connection from Dongzhimen (Line 1) is direct. Pick one section — the northern end near the hotel direction or the southern pedestrian section — not the full street length."
          },
          {
            "n": 8,
            "name": "Beijing Capital International Airport Terminal 2",
            "cn": "北京首都国际机场 T2",
            "lat": 40.0802322,
            "lon": 116.5938886,
            "note": "KE864 leaves PEK T2 at 01:30 on Aug 19. Pre-book hotel car/van or DiDi; leave central Beijing around 22:00–22:30 on Aug 18.",
            "detail": "Korean Air KE864 departs from Terminal 2 at 01:30 on Aug 19; pre-book a private van or car from the hotel around 22:00–22:30 on Aug 18. Confirm Korean Air check-in opens 3 hours before departure; Beijing immigration lines at PEK can be long at 22:00–23:00."
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
            "note": "Korean Air KE864 PEK 01:30 → ICN 04:40; booking ref [REDACTED]; seats [REDACTED].",
            "detail": "Korean Air KE864 departs from Terminal 2 at 01:30 on Aug 19; pre-book a private van or car from the hotel around 22:00–22:30 on Aug 18. Confirm Korean Air check-in opens 3 hours before departure; Beijing immigration lines at PEK can be long at 22:00–23:00."
          }
        ]
      }
    ]
  }
];

const state = {
  active: 0,
  map: null,
  layers: null,
  routeLayer: null,
  timers: [],
  search: '',
  compactDetails: false,
  focusedStop: null
};

function clearTimers() {
  state.timers.forEach(clearTimeout);
  state.timers = [];
}

function addTimer(fn, ms) {
  state.timers.push(setTimeout(fn, ms));
}

// ── Checklist Storage ──
const CHECKLIST_KEY = 'asia2026_checklist';
const CHECKLIST_CUSTOM_KEY = 'asia2026_checklist_custom';
const CHECKLIST_CHECKED_KEY = 'asia2026_checklist_checked';
const CHECKLIST_DELETED_KEY = 'asia2026_checklist_deleted';

// Default items baked into the code — visible to everyone
const DEFAULT_CHECKLIST = [
  { id: 1, text: 'Confirm West Air HAN→CKG PNR and baggage allowance' },
  { id: 2, text: 'Set up WeChat Pay + Alipay before departure' },
  { id: 3, text: 'Download Meituan, Dianping, DiDi, Amap' },
  { id: 4, text: 'Book Zhangjiajie private tour (Aug 11–12)' },
  { id: 5, text: 'Book HSR Chongqing East → Zhangjiajie West (Aug 11)' },
  { id: 6, text: 'Book Shanghai → Beijing evening transfer (Aug 16)' },
  { id: 7, text: 'Reserve Shanghai Disneyland tickets (Aug 14)' },
  { id: 8, text: 'Pack rain gear / poncho for Wulong or Zhangjiajie' },
  { id: 9, text: 'Verify KE864 PEK→ICN booking ref [REDACTED] / seats [REDACTED]' },
  { id: 10, text: 'Print/save hotel confirmations (Marriott CQ, Atour SH, Holiday Inn BJ)' },
  { id: 11, text: 'Get Trip.com / 12306 set up for train bookings' },
  { id: 12, text: 'Arrange early private driver for Mutianyu Great Wall (Aug 17)' }
];

function loadCheckedState() {
  try { return JSON.parse(localStorage.getItem(CHECKLIST_CHECKED_KEY)) || {}; }
  catch { return {}; }
}

function loadCustomItems() {
  try { return JSON.parse(localStorage.getItem(CHECKLIST_CUSTOM_KEY)) || []; }
  catch { return []; }
}

function loadDeletedDefaults() {
  try { return JSON.parse(localStorage.getItem(CHECKLIST_DELETED_KEY)) || []; }
  catch { return []; }
}

function getFullChecklist() {
  const checked = loadCheckedState();
  const custom = loadCustomItems();
  const deleted = new Set(loadDeletedDefaults());
  const defaults = DEFAULT_CHECKLIST.filter(d => !deleted.has(d.id))
    .map(d => ({ ...d, done: !!checked[d.id], isDefault: true }));
  const customs = custom.map(c => ({ ...c, done: !!checked['c' + c.id], isDefault: false }));
  return [...defaults, ...customs];
}

function addChecklistItem(text) {
  if (!text.trim()) return;
  const custom = loadCustomItems();
  custom.push({ id: Date.now(), text: text.trim() });
  localStorage.setItem(CHECKLIST_CUSTOM_KEY, JSON.stringify(custom));
  renderChecklist();
}

function toggleChecklistItem(id) {
  const checked = loadCheckedState();
  checked[id] = !checked[id];
  localStorage.setItem(CHECKLIST_CHECKED_KEY, JSON.stringify(checked));
  renderChecklist();
}

function deleteChecklistItem(id, isDefault) {
  if (isDefault) {
    const deleted = loadDeletedDefaults();
    deleted.push(id);
    localStorage.setItem(CHECKLIST_DELETED_KEY, JSON.stringify(deleted));
  } else {
    const custom = loadCustomItems().filter(i => i.id !== id);
    localStorage.setItem(CHECKLIST_CUSTOM_KEY, JSON.stringify(custom));
    const checked = loadCheckedState();
    delete checked['c' + id];
    localStorage.setItem(CHECKLIST_CHECKED_KEY, JSON.stringify(checked));
  }
  renderChecklist();
}

// ── Utilities ──
const $ = id => document.getElementById(id);

function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, c =>
    ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c])
  );
}

// Static map tile from lat/lon for hover previews
function staticMapUrl(lat, lon, zoom = 15) {
  const n = Math.pow(2, zoom);
  const x = Math.floor((lon + 180) / 360 * n);
  const latRad = lat * Math.PI / 180;
  const y = Math.floor((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n);
  return `https://a.basemaps.cartocdn.com/light_all/${zoom}/${x}/${y}@2x.png`;
}

// Short tourist descriptions for hover preview (keyed by stop name prefix)
const DESCRIPTIONS = {
  'Jiefangbei': {
    text: 'Chongqing\'s iconic liberation monument square and bustling pedestrian shopping district, surrounded by skyscrapers and street food.',
    lookFor: 'The 1940s Liberation Monument standing in stark contrast to the surrounding ultra-modern glass towers.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jiefangbei_CBD_202206.jpg?width=600'
  },
  'Bayi Road': {
    text: 'Famous covered snack street running off Jiefangbei, packed with Chongqing street food — skewers, liangfen, and spicy noodles.',
    lookFor: 'Long queues at Hao You Lai (好吃狗) for their signature hot and sour sweet potato noodles (Suan La Fen).',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_Jiefangbei_CBD.jpg?width=600'
  },
  'Mountain City Trail': {
    text: 'A scenic elevated walkway through old hillside neighborhoods with river views and traditional Chongqing stilt-house architecture.',
    lookFor: 'The cliffside plank road sections offering sweeping panoramas of the Yangtze River.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shancheng_Alley,_Chongqing.jpg?width=600'
  },
  'Shibati': {
    text: 'Beautifully restored 18-step stairway district blending traditional Chongqing alley culture with modern art installations.',
    lookFor: 'The dramatic elevation changes and atmospheric lighting as evening approaches.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_Shibati_202206.jpg?width=600'
  },
  'Baixiangju': {
    text: 'A dramatic residential tower built into a cliff, famous for its multi-level entrances and old-school Chongqing neighborhood feel.',
    lookFor: 'The Yangtze River Cableway passing directly next to the building\'s outdoor corridors.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_Skyline_2020.jpg?width=600'
  },
  'Huguang Guild': {
    text: 'Ornate Qing-dynasty guild halls from Hunan and Hubei immigrants, showcasing traditional Chinese theater architecture.',
    lookFor: 'The bright yellow courtyard walls and the incredibly detailed wooden carvings on the opera stages.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Huguang_Guild_Hall_in_Chongqing.jpg?width=600'
  },
  'Raffles City': {
    text: 'Moshe Safdie\'s sail-shaped mega-complex on the Yangtze/Jialing confluence, with a sky bridge pool and panoramic views.',
    lookFor: 'The Crystal — a 300-meter-long horizontal skyscraper suspended across the four central towers.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Raffles_City_Chongqing_2021.jpg?width=600'
  },
  'Hongya Cave': {
    text: 'Spirited Away\'s real-life inspiration — an 11-story stilted complex carved into cliffs above the Jialing River, magical after dark.',
    lookFor: 'The view from across the river or Qiansimen Bridge when the golden lights turn on at dusk.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hongyadong_night_view_2019.jpg?width=600'
  },
  'Changjiahui': {
    text: 'Restored heritage street on the south bank of the Yangtze with boutique shops, cafés, and dramatic skyline views.',
    lookFor: 'The French naval barracks ruins integrated into the modern retail architecture.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_South_Bank_Night.jpg?width=600'
  },
  'Nanbin': {
    text: 'South bank riverside promenade with the best unobstructed views of Chongqing\'s famous hill-city skyline.',
    lookFor: 'The twin golden towers of the Sheraton and the sweeping view of the Yuzhong peninsula.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_night_view_from_Nanbin_Road.jpg?width=600'
  },
  'Longmenhao': {
    text: 'Atmospheric old street with Republican-era architecture perched above the river, offering rooftop views of Yuzhong.',
    lookFor: 'Historical foreign embassy buildings and the Dongshuimen Bridge framing the city skyline.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dongshuimen_Bridge_in_Chongqing.jpg?width=600'
  },
  'Yangtze River Cableway': {
    text: 'The last surviving urban cable car crossing the Yangtze — a 4-minute aerial ride with sweeping river panoramas.',
    lookFor: 'The sensation of gliding directly over apartment blocks and the massive muddy expanse of the Yangtze.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yangtze_River_Cableway_Chongqing.jpg?width=600'
  },
  'Eling': {
    text: 'A repurposed printing factory turned creative park on Eling Hill, with indie cafés, galleries, and mountain city viewpoints.',
    lookFor: 'Rooftop cafes offering some of the highest panoramic views over both the Jialing and Yangtze rivers.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Eling_Park,_Chongqing.jpg?width=600'
  },
  'Liziba': {
    text: 'The viral monorail-through-building station where Line 2 trains pass directly through a residential apartment block.',
    lookFor: 'The viewing platform on the street below to catch the exact moment the train disappears into the building.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Liziba_Station_2019.jpg?width=600'
  },
  'Great Hall': {
    text: 'A Soviet-inspired 1950s auditorium modeled on Beijing\'s Temple of Heaven, framed by a grand public square.',
    lookFor: 'Locals practicing synchronized fan dances and tai chi in the vast People\'s Square at dusk.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Hall_of_the_People,_Chongqing.jpg?width=600'
  },
  'Three Gorges': {
    text: 'A comprehensive museum covering Chongqing history, Three Gorges dam culture, and wartime capital heritage.',
    lookFor: 'The massive 360-degree panoramic cinema showing the landscape of the Yangtze before the dam was built.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Three_Gorges_Museum_Chongqing.jpg?width=600'
  },
  'Bei Cang': {
    text: 'A quiet creative district with indie bookshops, specialty coffee, and local art spaces near Guanyinqiao.',
    lookFor: 'The Beicang Library, a beautifully designed reading space housed in a former textile warehouse.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Beicang_Cultural_and_Creative_Quarter.jpg?width=600'
  },
  'Guanyinqiao': {
    text: 'Jiangbei\'s vibrant commercial hub — a sprawling pedestrian zone packed with malls, hotpot restaurants, and nightlife.',
    lookFor: 'The colossal 3D naked-eye LED screens on the sides of the shopping malls.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guanyinqiao_CBD_2021.jpg?width=600'
  },
  'Ciqikou': {
    text: 'A 1,000-year-old porcelain trading town with narrow flagstone alleys, tea houses, and traditional Sichuan snacks.',
    lookFor: 'Shops rhythmically pounding peanuts and sugar into Chen Mahua (fried dough twists) right on the street.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ciqikou_Ancient_Town_Chongqing.jpg?width=600'
  },
  'Qicai': {
    text: 'A rainbow-painted alley near Ciqikou with colorful murals and Instagram-worthy street art.',
    lookFor: 'Playful interactive murals designed specifically for taking creative photos.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Graffiti_Street_in_Chongqing.jpg?width=600'
  },
  'Chongqing Zoo': {
    text: 'Home to a beloved giant panda colony and golden monkeys, set in a lush hillside park.',
    lookFor: 'The panda enclosure during early morning feeding time when the bears are most active.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Giant_panda_at_Chongqing_Zoo.jpg?width=600'
  },
  'Traffic Tea': {
    text: 'A legendary no-frills tea house unchanged since the 1980s — bamboo chairs, loose-leaf tea, and local card games.',
    lookFor: 'The slanting wooden beams, skylights cutting through smoke, and intense games of Mahjong.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_Teahouse.jpg?width=600'
  },
  'Huangjueping': {
    text: 'The world\'s largest outdoor graffiti art district, covering entire apartment blocks in vibrant murals.',
    lookFor: 'The Sichuan Fine Arts Institute campus, which bleeds artistic chaos into the surrounding streets.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sichuan_Fine_Arts_Institute.jpg?width=600'
  },
  'Atour X': {
    text: 'A stylish design hotel on Nanjing West Road, steps from Jing\'an Temple and Shanghai\'s premier shopping strip.',
    lookFor: 'The modern, literary-themed lobby and close proximity to Taikoo Hui mall.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nanjing_Road_West.jpg?width=600'
  },
  'Xintiandi': {
    text: 'An upscale dining and nightlife district in restored shikumen lane houses, blending old Shanghai charm with modern bars.',
    lookFor: 'The architectural fusion of traditional gray-brick portals framing sleek modern storefronts.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Xintiandi_Shanghai.jpg?width=600'
  },
  'Chagee': {
    text: 'China\'s fastest-growing premium tea chain, known for creamy fruit teas and elegant store design.',
    lookFor: 'Their signature Jasmine Green Milk Tea, served in a distinctly patterned, perfume-style cup.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bubble_tea_in_Shanghai.jpg?width=600'
  },
  'Bund': {
    text: 'Shanghai\'s legendary waterfront promenade — a mile of Art Deco banks facing the futuristic Pudong skyline.',
    lookFor: 'The contrast between the 1920s Peace Hotel and the soaring 632m Shanghai Tower across the Huangpu River.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_Bund_view_Pudong_Shanghai.jpg?width=600'
  },
  'Shanghai Disneyland': {
    text: 'Disney\'s newest and largest castle park featuring TRON Lightcycle, Pirates of the Caribbean, and Zootopia.',
    lookFor: 'The Pirates of the Caribbean: Battle for the Sunken Treasure ride — arguably the most advanced Disney ride in the world.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Enchanted_Storybook_Castle_2016.jpg?width=600'
  },
  'Yu Garden': {
    text: 'A 400-year-old Ming dynasty classical garden with rock formations, pavilions, koi ponds, and the iconic Huxinting Teahouse.',
    lookFor: 'The Exquisite Jade Rock and the zig-zag bridge designed to prevent evil spirits from crossing.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yuyuan_Garden_Shanghai.jpg?width=600'
  },
  'Lu Bo Lang': {
    text: 'An iconic Yuyuan restaurant serving refined Shanghainese dim sum, famously visited by Queen Elizabeth and Bill Clinton.',
    lookFor: 'The eyebrow-shaped pastries and delicate crab-roe dumplings that made the restaurant globally famous.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Huxinting_Teahouse_Shanghai.jpg?width=600'
  },
  'Xiao Yang': {
    text: 'The original shengjianbao (pan-fried soup dumpling) chain — crispy bottoms, juicy pork filling, piping hot.',
    lookFor: 'The master chefs frying hundreds of buns in massive cast-iron pans right near the storefront.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shengjian_mantou_in_Shanghai.jpg?width=600'
  },
  'Crab-roe': {
    text: 'Seasonal Shanghai delicacy — rich hairy crab roe tossed through hand-pulled noodles, deeply savory and umami.',
    lookFor: 'The golden, buttery roe sauce being poured over fresh noodles at a specialized crab noodle shop.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crab_Roe_Noodles.jpg?width=600'
  },
  'People\'s Square': {
    text: 'Shanghai\'s central civic plaza housing the Shanghai Museum, Grand Theatre, and urban parkland.',
    lookFor: 'The weekend Marriage Market where parents gather with umbrellas displaying their children\'s dating resumes.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Peoples_Square_Shanghai.jpg?width=600'
  },
  'Nanjing East': {
    text: 'China\'s most famous shopping street stretching from People\'s Square to the Bund — neon, crowds, and retail.',
    lookFor: 'The classic trackless sightseeing trains dodging pedestrians along the pedestrian mall.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nanjing_Road_Shanghai_2019.jpg?width=600'
  },
  'Wukang Mansion': {
    text: 'A landmark 1924 Normandie apartment building at the heart of the French Concession, beloved for its flatiron shape.',
    lookFor: 'The elegant Renaissance-style brick facade contrasting with the leafy plane trees lining the intersection.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wukang_Mansion_2021.jpg?width=600'
  },
  'Xiao Tao': {
    text: 'A tiny, no-frills neighborhood noodle shop with devoted local following and early-closing hours.',
    lookFor: 'Scallion oil noodles (Cong You Ban Mian) topped with a perfectly fried sunny-side-up egg.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Scallion_Oil_Noodles.jpg?width=600'
  },
  'Anfu Road': {
    text: 'The French Concession\'s trendiest street for specialty coffee, boutique shopping, and tree-lined strolling.',
    lookFor: 'Street-style photographers camping out to capture the fashionable youth and expats visiting RAC Coffee.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_French_Concession.jpg?width=600'
  },
  'To Summer': {
    text: 'Guanxia (观夏) — a luxury Chinese fragrance brand with beautifully designed concept stores.',
    lookFor: 'Their signature osmanthus and bamboo scents, presented in stunning minimalist ceramic vessels.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_Boutique.jpg?width=600'
  },
  'Jing\'an': {
    text: 'Shanghai\'s upscale central district anchored by the golden Jing\'an Temple and premium malls.',
    lookFor: 'The striking contrast of the ancient, gilded Jing\'an Temple surrounded by ultra-modern glass skyscrapers.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jing%27an_Temple_Shanghai.jpg?width=600'
  },
  '1000 Trees': {
    text: 'A Heatherwick Studio masterpiece — a terraced green building resembling a mountain, with shops and riverside views.',
    lookFor: 'The hundreds of structural concrete columns that double as massive planters for real trees.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tian_An_1000_Trees.jpg?width=600'
  },
  'Holiday Inn': {
    text: 'A clean, central base near Dongzhimen subway hub with easy airport express access.',
    lookFor: 'The quick walking route to the Airport Express line, saving vital time for the Beijing departure.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dongzhimen_Beijing.jpg?width=600'
  },
  'Mutianyu': {
    text: 'A less-crowded Great Wall section with lush forested hills, cable car access, and a toboggan ride down.',
    lookFor: 'The thrilling open-air toboggan slide down the mountain, winding through the forest from Tower 6.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mutianyu_Great_Wall_2019.jpg?width=600'
  },
  'Summer Palace': {
    text: 'A vast imperial garden with Kunming Lake, the Long Corridor\'s painted beams, and hilltop temples.',
    lookFor: 'The Marble Boat pavilion and the 728-meter Long Corridor painted with thousands of mythological scenes.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Summer_Palace_Beijing.jpg?width=600'
  },
  'Wangfujing': {
    text: 'Beijing\'s iconic shopping boulevard near the Forbidden City, famous for department stores and snack streets.',
    lookFor: 'The APM Mall and the bustling side alleys offering everything from candied hawthorn to high-end retail.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wangfujing_Street.jpg?width=600'
  },
  'Siji Minfu': {
    text: 'One of Beijing\'s top-rated Peking duck restaurants — crispy skin carved tableside with traditional accompaniments.',
    lookFor: 'The theatrical tableside carving process — they separate the crispy skin to dip in sugar, and the meat for pancakes.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Peking_Duck_carving.jpg?width=600'
  },
  'Taikoo Li': {
    text: 'An open-air luxury shopping village in Sanlitun with international brands, rooftop bars, and people-watching.',
    lookFor: 'The striking geometric architecture of the Apple Store and the bustling nightlife in the surrounding blocks.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taikoo_Li_Sanlitun.jpg?width=600'
  },
  'Beijing Capital': {
    text: 'PEK Terminal 2 — the international hub for Korean Air and other carriers, with late-night duty-free shopping.',
    lookFor: 'The sunrise check-in rush; navigate to the Korean Air counters early for the 01:30 red-eye departure.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Beijing_Capital_International_Airport_Terminal_2.jpg?width=600'
  }
};

function getDescription(name) {
  for (const [key, desc] of Object.entries(DESCRIPTIONS)) {
    if (name.includes(key)) return desc;
  }
  return null;
}

function appleMaps(lat, lon, name) {
  return `https://maps.apple.com/?ll=${lat},${lon}&q=${encodeURIComponent(name)}`;
}

function appleRoute(stops) {
  const a = stops[0], b = stops[stops.length - 1];
  return `https://maps.apple.com/?saddr=${a.lat},${a.lon}&daddr=${b.lat},${b.lon}`;
}

function normalizeText(value) {
  return String(value ?? '').toLowerCase().normalize('NFKD');
}

function stopSearchText(stop, city, day) {
  return normalizeText([city?.name, day?.label, stop.name, stop.cn, stop.note, stop.detail].join(' '));
}

function matchesSearch(stop, city, day) {
  if (!state.search) return true;
  return state.search.split(/\s+/).filter(Boolean).every(term => stopSearchText(stop, city, day).includes(term));
}

function allStops(city) {
  return city.days.flatMap((day, dayIndex) => day.stops.map(stop => ({ stop, day, dayIndex, city })));
}

function stopDomId(cityId, dayIndex, stopNumber) {
  return `stop-${cityId}-${dayIndex}-${stopNumber}`;
}

function getTimePeriod(cityId, dayIndex, stopNumber) {
  return PERIODS[`${cityId}-${dayIndex}-${stopNumber}`] || '';
}

function summarizeCity(city) {
  const stops = allStops(city);
  const fallbackTerms = /(museum|mall|indoor|air-conditioned|air conditioned|ac|rain|heat fallback|hotel|café|cafe)/i;
  const transferTerms = /(airport|flight|hsr|train|transfer|check-in|red-eye|station)/i;
  const fallback = stops.find(({ stop }) => fallbackTerms.test(`${stop.name} ${stop.note} ${stop.detail || ''}`));
  const transfer = stops.find(({ stop }) => transferTerms.test(`${stop.name} ${stop.note} ${stop.detail || ''}`));
  return {
    dayCount: city.days.length,
    stopCount: stops.length,
    anchor: stops[0]?.stop?.name || 'Route start',
    fallback: fallback?.stop?.name || 'Use hotel/base as reset point',
    transfer: transfer?.stop?.note || 'No major same-day transfer flagged'
  };
}

function renderCityInsights(city) {
  const summary = summarizeCity(city);
  const visible = state.search
    ? allStops(city).filter(({ stop, day }) => matchesSearch(stop, city, day)).length
    : summary.stopCount;
  const searchNote = state.search
    ? `<div class="insight-search">Showing ${visible} of ${summary.stopCount} stops matching “${esc(state.search)}”. Clear search to restore the full itinerary.</div>`
    : '';
  return `
    <section class="itinerary-insights" aria-label="Itinerary at a glance">
      <article><span>At a glance</span><strong>${summary.dayCount} days · ${summary.stopCount} mapped stops</strong></article>
      <article><span>First anchor</span><strong>${esc(summary.anchor)}</strong></article>
      <article><span>Weather/energy fallback</span><strong>${esc(summary.fallback)}</strong></article>
      <article><span>Transfer watch</span><strong>${esc(summary.transfer)}</strong></article>
      ${searchNote}
    </section>`;
}

function renderPlanningGuide() {
  const sourceCards = [
    ['Progressive disclosure', 'Keep the default view scannable, then reveal deeper stop notes on demand. NN/g frames this as reducing learning cost and error-prone clutter.'],
    ['Mobile-first route decisions', 'Put map links, day anchors, search, and touch-sized controls above visual flourish; the phone is the actual field device.'],
    ['Offline and local-app redundancy', 'China travel needs Amap/Dianping/Trip.com backups even when Apple Maps links exist. Cache hotel names, Chinese addresses, and transfer notes.'],
    ['Accessible structure', 'Use semantic sections, labels, strong contrast, keyboard-safe inputs, and clear tap targets aligned with W3C accessibility principles.'],
    ['Contingency design', 'Every packed day needs heat/rain/energy fallbacks, transfer buffers, and “skip if queue is dumb” notes. Tourism is project management with jet lag.']
  ];
  return `
    <div class="guide-grid">
      <section class="guide-hero">
        <div class="label">Implanted best practices</div>
        <h2>Itinerary website upgrades</h2>
        <p>Built from travel-planning UX patterns: scannable days, map-first context, local navigation links, progressive details, offline prep, and explicit fallback planning.</p>
      </section>
      ${sourceCards.map(([title, body]) => `<article class="guide-card"><strong>${esc(title)}</strong><span>${esc(body)}</span></article>`).join('')}
      <section class="guide-card wide">
        <strong>Field-use checklist</strong>
        <span>Before leaving each hotel: open the day tab, search for the current stop if needed, open Apple Maps/Amap, confirm hours on Dianping/Trip.com, and identify one indoor reset point before the heat makes everyone weird.</span>
      </section>
    </div>`;
}

function focusStop(cityId, dayIndex, stopNumber) {
  state.focusedStop = { cityId, dayIndex, stopNumber };
  const city = views.find(v => v.id === cityId);
  const stop = city?.days?.[dayIndex]?.stops?.find(s => s.n === stopNumber);
  if (stop && state.map) {
    state.map.setView([stop.lat, stop.lon], Math.max(state.map.getZoom(), 15), { animate: true });
    state.layers.eachLayer(layer => {
      const ll = layer.getLatLng?.();
      if (ll && Math.abs(ll.lat - stop.lat) < 0.00001 && Math.abs(ll.lng - stop.lon) < 0.00001) layer.openPopup();
    });
  }
  const el = document.getElementById(stopDomId(cityId, dayIndex, stopNumber));
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function setupPlannerTools() {
  const search = $('tripSearch');
  const toggle = $('detailToggle');
  if (search) {
    search.value = state.search;
    search.oninput = e => {
      state.search = e.target.value.trim().toLowerCase();
      renderView();
      $('tripSearch')?.focus();
    };
  }
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(state.compactDetails));
    toggle.textContent = state.compactDetails ? 'Show details' : 'Compact details';
    toggle.onclick = () => {
      state.compactDetails = !state.compactDetails;
      renderView();
    };
  }
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
  setupPlannerTools();

  const mapWrap = document.querySelector('.map-wrap');
  const content = $('content');

  if (view.kind === 'checklist') {
    $('eyebrow').textContent = 'Pre-trip preparation';
    $('title').textContent = view.name;
    $('subtitle').textContent = view.subtitle;
    mapWrap.classList.add('hidden');
    content.classList.add('checklist-content');
    content.classList.remove('content-full');
    renderChecklist();
    return;
  }

  if (view.kind === 'guide') {
    $('eyebrow').textContent = 'Planning UX';
    $('title').textContent = view.name;
    $('subtitle').textContent = view.subtitle;
    mapWrap.classList.add('hidden');
    content.classList.remove('checklist-content');
    content.classList.add('content-full');
    content.innerHTML = renderPlanningGuide();
    return;
  }

  mapWrap.classList.remove('hidden');
  content.classList.remove('checklist-content');

  if (view.kind === 'overview') {
    content.classList.add('content-full');
  } else {
    content.classList.remove('content-full');
  }

  $('eyebrow').textContent = view.kind === 'overview' ? 'Complete trip overview' : 'City roadmap';
  $('title').textContent = view.name;
  $('subtitle').textContent = view.subtitle;
  $('content').innerHTML = view.kind === 'overview' ? renderOverview(view) : renderCity(view);

  clearTimers();
  renderMap(view);
  addTimer(resizeMap, 50);
  addTimer(resizeMap, 700);
}

function renderChecklist() {
  const items = getFullChecklist();
  const done = items.filter(i => i.done).length;
  const total = items.length;

  const itemsHtml = items.map(i => {
    const key = i.isDefault ? i.id : 'c' + i.id;
    return `
      <div class="checklist-item ${i.done ? 'checked' : ''}">
        <button class="checklist-check" onclick="toggleChecklistItem('${key}')" aria-label="Toggle">${i.done ? '✓' : ''}</button>
        <span class="checklist-text">${esc(i.text)}</span>
        <button class="checklist-delete" onclick="deleteChecklistItem(${i.id}, ${i.isDefault})" aria-label="Delete">✕</button>
      </div>
    `;
  }).join('');

  $('content').innerHTML = `
    <div>
      <div class="checklist-add">
        <input class="checklist-input" id="checklistInput" type="text" placeholder="Add a custom item…" onkeydown="if(event.key==='Enter'){addChecklistItem(this.value);this.value='';}" />
        <button class="checklist-btn" onclick="const inp=$('checklistInput');addChecklistItem(inp.value);inp.value='';inp.focus();">Add</button>
      </div>
      <div class="checklist-stats"><span>${done} of ${total} done</span></div>
      <div class="checklist-items">${itemsHtml}</div>
    </div>
  `;
}

function renderOverview(view) {
  const cards = (view.cards && view.cards.length) ? view.cards.map(c =>
    `<article class="overview-card"><div class="label">${esc(c.title)}</div><strong>${esc(c.body)}</strong></article>`
  ).join('') : '';

  const legs = view.legs.map(l =>
    `<article class="leg-card">
      <div class="mode">${esc(l.mode)}</div>
      <div><strong>${esc(l.label)}</strong><span>${esc(l.note)}</span></div>
    </article>`
  ).join('');

  const cardsBlock = cards ? `<div class="grid"><div class="overview-grid">${cards}</div></div>` : '';
  return `${cardsBlock}<div class="legs">${legs}</div>`;
}

// Period labels for each stop: keyed as "viewId-dayIndex-stopN"
const PERIODS = {
  // Chongqing Day 10
  'chongqing-0-1':'Morning','chongqing-0-2':'Morning','chongqing-0-3':'Morning',
  'chongqing-0-4':'Afternoon','chongqing-0-5':'Afternoon','chongqing-0-6':'Afternoon',
  'chongqing-0-7':'Evening','chongqing-0-8':'Evening',
  // Chongqing Day 11
  'chongqing-1-9':'Morning','chongqing-1-10':'Morning',
  'chongqing-1-11':'Afternoon','chongqing-1-12':'Afternoon',
  // Chongqing Day 12
  'chongqing-2-13':'Morning','chongqing-2-14':'Morning',
  'chongqing-2-15':'Afternoon','chongqing-2-16':'Afternoon','chongqing-2-17':'Afternoon',
  'chongqing-2-18':'Evening',
  // Chongqing Day 13
  'chongqing-3-19':'Morning','chongqing-3-20':'Morning',
  'chongqing-3-21':'Afternoon','chongqing-3-22':'Afternoon','chongqing-3-23':'Afternoon',
  // Shanghai Day 16
  'shanghai-0-1':'Afternoon','shanghai-0-2':'Afternoon','shanghai-0-3':'Afternoon',
  'shanghai-0-4':'Evening',
  // Shanghai Day 17
  'shanghai-1-5':'All day',
  // Shanghai Day 18
  'shanghai-2-6':'Morning','shanghai-2-7':'Morning','shanghai-2-8':'Morning','shanghai-2-9':'Morning',
  'shanghai-2-10':'Afternoon','shanghai-2-11':'Evening',
  // Shanghai Day 19
  'shanghai-3-12':'Morning','shanghai-3-13':'Morning','shanghai-3-14':'Morning','shanghai-3-15':'Morning',
  'shanghai-3-16':'Afternoon','shanghai-3-17':'Afternoon','shanghai-3-18':'Evening',
  // Beijing Day 20
  'beijing-0-1':'Morning','beijing-0-2':'Morning',
  'beijing-0-3':'Afternoon','beijing-0-4':'Evening','beijing-0-5':'Evening',
  // Beijing Day 21
  'beijing-1-6':'Morning','beijing-1-7':'Afternoon','beijing-1-8':'Night',
  // Beijing Day 22
  'beijing-2-9':'Night'
};

function renderCity(city) {
  const hotel = `
    <aside class="hotel">
      <div class="label">Pinned base</div>
      <strong>${esc(city.hotel.name)}</strong>
      <small>${esc(city.hotel.cn)} · ${esc(city.hotel.note)}</small>
      <div class="stop-actions">
        <a class="action" href="${appleMaps(city.hotel.lat, city.hotel.lon, city.hotel.name)}" target="_blank" rel="noopener noreferrer">Open in Apple Maps</a>
      </div>
    </aside>`;

  const days = `<div class="days">${city.days.map((day, di) => {
    // Group stops by period and apply global search filtering
    let lastPeriod = '';
    const visibleStops = day.stops.filter(s => matchesSearch(s, city, day));
    const stopsHtml = visibleStops.map(s => {
      const period = getTimePeriod(city.id, di, s.n);
      let periodHeader = '';
      if (period && period !== lastPeriod) {
        lastPeriod = period;
        periodHeader = `<div class="period-label">${period}</div>`;
      }
      const details = getDescription(s.name);
      const preview = details ? `
        <div class="stop-preview">
          <img src="${details.img || staticMapUrl(s.lat, s.lon, 15)}" alt="${esc(s.name)} area" loading="lazy" />
          <div class="stop-preview-body">
            <strong>${esc(s.name)}</strong>
            <p>${esc(details.text)}</p>
            ${details.lookFor ? `<div class="look-for"><strong>Look for:</strong> ${esc(details.lookFor)}</div>` : ''}
          </div>
        </div>` : '';
      const detailBlock = s.detail
        ? `<details class="stop-detail" ${state.compactDetails ? '' : 'open'}><summary>Why go / logistics</summary><p>${esc(s.detail)}</p></details>`
        : '';
      return `${periodHeader}
        <article class="stop" id="${stopDomId(city.id, di, s.n)}">
          <button class="num" type="button" style="background:${day.color}" onclick="focusStop('${city.id}', ${di}, ${s.n})" aria-label="Focus ${esc(s.name)} on map">${s.n}</button>
          <div>
            <b>${esc(s.name)}</b>
            <span>${esc(s.cn)} · ${esc(s.note)}</span>
            ${detailBlock}
            <div class="stop-actions">
              <a class="action" href="${appleMaps(s.lat, s.lon, s.name)}" target="_blank" rel="noopener noreferrer">Open in Apple Maps</a>
            </div>
          </div>
          ${preview}
        </article>`;
    }).join('');

      const emptyDay = visibleStops.length === 0
        ? `<div class="empty-day">No stops on this day match “${esc(state.search)}”.</div>`
        : '';
      return `
    <section class="day ${visibleStops.length === 0 ? 'day-empty' : ''}">
      <div class="day-head">
        <div class="day-title"><i class="swatch" style="background:${day.color}"></i>${esc(day.label)}</div>
        <div class="day-count">${visibleStops.length}/${day.stops.length} stops</div>
      </div>
      <div class="route-links">
        <a class="action" href="${appleRoute(day.stops)}" target="_blank" rel="noopener noreferrer">Open route in Apple Maps</a>
      </div>
      ${emptyDay || stopsHtml}
    </section>`;
  }).join('')}</div>`;

  return hotel + renderCityInsights(city) + days;
}

// ── Map Markers & Routes ──
function popupHtml(item) {
  return `<div class="popup">
    <b>${esc(item.name)}</b><br>
    <small>${esc(item.cn || '')}</small><br>
    ${esc(item.note || '')}
    <div class="links">
      <a href="${appleMaps(item.lat, item.lon, item.name)}" target="_blank" rel="noopener noreferrer">Apple Maps</a>
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

    view.days.forEach(day => day.stops.filter(s => matchesSearch(s, view, day)).forEach(s => {
      bounds.push([s.lat, s.lon]);
      L.marker([s.lat, s.lon], { icon: icon(s.n, day.color) })
        .bindPopup(popupHtml(s)).addTo(state.layers);
    }));
  }

  const maxZoom = view.kind === 'overview' ? 7 : 15;
  addTimer(() => { resizeMap(); if (bounds.length) state.map.fitBounds(bounds, { padding: [30, 30], maxZoom }); }, 100);
  addTimer(() => { resizeMap(); if (bounds.length) state.map.fitBounds(bounds, { padding: [30, 30], maxZoom }); }, 650);
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
