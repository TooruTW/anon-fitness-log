// 下一練主建議：下肢。依 logs/ 至 2026-09-27 的紀錄產生。
// 重量單位 kg；load 為 null 表示「自行評估」。
const nextTrain = {
  basedOn: '2026-09-27',
  day: '下肢',
  venue: 'gym',
  estimatedMinutes: 60,
  reason: '下肢最久沒練（深蹲 09-05、羅馬尼亞硬舉 09-12），近 4 週僅 8 組；拉 09-26、推 09-27 才練過。',
  limitations: '日誌僅 5 筆、無 RPE；體重最近量測為 08-15。深蹲隔近 4 週，先回原重量不加重。',
  alternative: '上肢拉',
  phases: [
    {
      phase: '熱身',
      minutes: 8,
      exercises: [
        {
          exercise: '橢圓機',
          sets: [{ duration_s: 300 }],
          home: { exercise: '原地高抬腿或開合跳', sets: [{ duration_s: 180 }] },
        },
        {
          exercise: '徒手深蹲',
          sets: [{ reps: 12, load: 0 }],
        },
        {
          exercise: '臀橋',
          sets: [{ reps: 12, load: 0 }],
        },
      ],
    },
    {
      phase: '主課',
      exercises: [
        {
          exercise: '深蹲',
          warmupSets: [
            { reps: 10, load: 20 },
            { reps: 8, load: 35 },
          ],
          sets: Array(4).fill({ reps: 10, load: 50 }),
          rest_s: 150,
          notes: '與 09-05 同重量。4 組都完成且留 2–3 下餘力，最後一組可加到 52.5 kg。',
          home: {
            exercise: '高腳杯深蹲',
            sets: Array(4).fill({ reps: 15, load: null }),
            notes: '單顆啞鈴，重量自行評估；下蹲 3 秒。',
          },
        },
        {
          exercise: '羅馬尼亞硬舉（臀部強化）',
          warmupSets: [{ reps: 12, load: 30 }],
          sets: Array(3).fill({ reps: 10, load: 50 }),
          rest_s: 120,
          notes: '槓貼腿、臀部往後推，腿後有拉伸感即停，背保持中立。腰痠降回 40 kg。',
          home: {
            exercise: '啞鈴羅馬尼亞硬舉',
            sets: Array(3).fill({ reps: 15, load: 20 }),
            notes: '假設每手約 10 kg（總重 20 kg）；下放 3 秒。',
          },
        },
        {
          exercise: '啞鈴分腿蹲',
          perSide: true,
          sets: Array(3).fill({ reps: 10, load: null }),
          suggestedLoadPerHand: [6, 8],
          rest_s: 90,
          notes: '新動作，無紀錄；先求平衡與膝蓋穩定再加重。',
        },
        {
          exercise: '單腳臀橋',
          perSide: true,
          sets: Array(3).fill({ reps: 12, load: 0 }),
          rest_s: 60,
          home: { exercise: '單腳臀橋（彈力繩套膝）', sets: Array(3).fill({ reps: 12, load: 0 }) },
        },
        {
          exercise: '棒式',
          sets: Array(3).fill({ duration_s: 45 }),
          rest_s: 45,
          notes: '30–45 秒，做不到 45 秒就停在 30 秒。',
        },
      ],
    },
    {
      phase: '緩和',
      minutes: 20,
      exercises: [
        {
          exercise: '橢圓機',
          sets: [{ duration_s: 1200 }],
          notes: '10–20 分。',
          home: { exercise: '快走', sets: [{ duration_s: 600 }], notes: '可省略。' },
        },
        {
          exercise: '伸展（髖屈肌、臀、腿後）',
          sets: [{ duration_s: 90 }],
          notes: '每部位約 30 秒。',
        },
      ],
    },
  ],
};

// 瀏覽器用 <script src> 載入時沒有 module，nextTrain 直接是全域變數。
if (typeof module !== 'undefined') module.exports = nextTrain;
