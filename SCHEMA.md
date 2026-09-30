# 欄位與匿名規則

只記錄可以比較的訓練數據。不記錄身分。

## 可以寫

- 日期（`YYYY-MM-DD`）
- 動作名稱（通用名稱，例如 `squat`、`bench-press`）
- 組數、次數、重量、RPE
- 體重
- 與數據有關的簡短註記（例如 `last set stopped at 8`）

## 不要寫

- 真實姓名、暱稱、縮寫
- 社群帳號、電子郵件、網址
- 照片、影片
- 住址、城市、可辨識的健身房店名
- 傷病細節、同伴、教練姓名，或其他能連回特定人的句子

GitHub 帳號會顯示為 owner。不要為了對應帳號而把名字寫進檔案。

## profile.yaml

| 欄位 | 說明 |
| --- | --- |
| `units.load` | 訓練重量單位，`kg` 或 `lb` |
| `units.bodyweight` | 體重單位，`kg` 或 `lb` |

不要加 `name`、`handle`、`gym`、`location`。

## program.yaml

| 欄位 | 說明 |
| --- | --- |
| `name` | 課表代號，用運動類型，不用人名 |
| `days[].id` | 當天代號 |
| `days[].exercises` | 動作名稱列表，與日誌裡的 `exercise` 對得上 |

## logs/YYYY-MM-DD.yaml

| 欄位 | 說明 |
| --- | --- |
| `date` | 與檔名相同 |
| `exercises[].exercise` | 動作名稱 |
| `exercises[].sets[].reps` | 次數 |
| `exercises[].sets[].load` | 該組重量，單位見 `profile.yaml` |
| `exercises[].sets[].rpe` | 自覺用力程度，1–10，可省略 |

同一天一個檔。沒練的日子不要補假數據。

## metrics/bodyweight.csv

表頭固定為 `date,kg`（若改用磅，表頭改為 `date,lb`，並同步 `profile.yaml`）。一天一列。
