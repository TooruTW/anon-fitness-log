// 下一練主建議：上肢拉。依 logs/ 至 2026-09-27 的紀錄產生；使用者略過下肢。
// 重量單位 kg；load 為 null 表示「自行評估」。
const nextTrain = {
  basedOn: '2026-09-27',
  day: '上肢拉',
  venue: 'gym',
  estimatedMinutes: 55,
  reason: '使用者明確略過下肢。拉上次 09-26、推 09-27，腿暫不排，故下一練主軸改為上肢拉。',
  limitations: '日誌僅 5 筆、無 RPE；下肢依使用者要求暫不排。重量錨定 09-26 拉日；居家僅啞鈴總重 20 kg／彈力繩，勿硬追健身房重量。',
  alternative: '上肢推（下肢已略過）',
  phases: [
    {
      phase: '熱身',
      minutes: 8,
      exercises: [
        {
          exercise: '橢圓機',
          sets: [{ duration_s: 300 }],
          home: { exercise: '開合跳或原地慢跑', sets: [{ duration_s: 180 }] },
        },
        {
          exercise: '彈力繩／輕滑輪面拉',
          sets: [{ reps: 15, load: null }],
          notes: '肩胛後收，肘與肩同高；重量自行評估，只做熱身。',
          home: {
            exercise: '彈力繩面拉',
            sets: [{ reps: 15, load: null }],
            notes: '繩張力自行評估；肩胛後收，勿聳肩。',
          },
        },
      ],
    },
    {
      phase: '主課',
      exercises: [
        {
          exercise: '滑輪下拉',
          warmupSets: [
            { reps: 12, load: 20 },
            { reps: 10, load: 28 },
          ],
          sets: Array(4).fill({ reps: 12, load: 36 }),
          rest_s: 90,
          notes: '錨定 09-26（36→33）。胸微挺、肘往髖拉；後兩組若掉到 10 下可降回 33 kg。',
          home: {
            exercise: '彈力繩下拉（跪姿或站姿）',
            sets: Array(4).fill({ reps: 15, load: null }),
            notes: '張力自行評估；下放 3 秒，拉到底肩胛下沉。',
          },
        },
        {
          exercise: '器材划船',
          warmupSets: [{ reps: 12, load: 40 }],
          sets: Array(3).fill({ reps: 12, load: 55 }),
          rest_s: 90,
          notes: '錨定 09-26 工作組 55（首組 70 偏重）。軀幹穩定、肘貼身；全組輕鬆可試 60。',
          home: {
            exercise: '啞鈴划船',
            perSide: true,
            sets: Array(3).fill({ reps: 15, load: null }),
            suggestedLoadPerHand: [8, 10],
            notes: '假設每手約 8–10 kg（總重≤20 kg）；背中立、拉至腰側。',
          },
        },
        {
          exercise: '啞鈴划船',
          perSide: true,
          warmupSets: [{ reps: 10, load: 15 }],
          sets: Array(3).fill({ reps: 12, load: 22.5 }),
          rest_s: 75,
          notes: '與 09-26 同重量。膝蓋微彎撐穩，拉到腰側停一下再下放。',
          home: {
            exercise: '彈力繩划船',
            sets: Array(3).fill({ reps: 15, load: null }),
            notes: '張力自行評估；肘貼身拉至腰側，下放 3 秒。',
          },
        },
        {
          exercise: 'Cable face pull',
          sets: Array(3).fill({ reps: 15, load: 7.5 }),
          rest_s: 60,
          notes: '與 09-26 同重量。繩拉至臉旁、外旋開肘；肩不聳。',
          home: {
            exercise: '彈力繩 face pull',
            sets: Array(3).fill({ reps: 15, load: null }),
            notes: '張力自行評估；手肘高於手腕，肩胛後收。',
          },
        },
        {
          exercise: '二頭 器材',
          sets: Array(3).fill({ reps: 12, load: 11 }),
          rest_s: 60,
          notes: '錨定 09-26（11 kg）。上臂貼身，頂端不停太久；最後一組可做滿 15。',
          home: {
            exercise: '二頭 啞鈴',
            sets: Array(3).fill({ reps: 12, load: null }),
            suggestedLoadPerHand: [5, 7.5],
            notes: '錨定 09-15（5→7.5）；假設每手約 5–7.5 kg，總重勿超 20 kg。',
          },
        },
      ],
    },
    {
      phase: '緩和',
      minutes: 15,
      exercises: [
        {
          exercise: '橢圓機或間歇跑',
          sets: [{ duration_s: 600 }],
          notes: '10–20 分可選；時間不夠可省略。',
          home: { exercise: '快走', sets: [{ duration_s: 480 }], notes: '可省略。' },
        },
        {
          exercise: '伸展（背闊、胸、二頭）',
          sets: [{ duration_s: 90 }],
          notes: '每部位約 30 秒。',
        },
      ],
    },
  ],
};

// 瀏覽器用 <script src> 載入時沒有 module，nextTrain 直接是全域變數。
if (typeof module !== 'undefined') module.exports = nextTrain;
