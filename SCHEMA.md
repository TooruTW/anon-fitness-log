# 欄位與匿名規則

只記錄可以比較的訓練數據。不記錄身分。

## 可以寫

- 日期（`YYYY-MM-DD`）
- 動作名稱（通用名稱，例如 `深蹲`、`槓鈴臥推`）
- 組數、次數、重量、RPE
- 體重
- 與數據有關的簡短註記（例如 `最後一組做到 8 下`）

## 不要寫

- 真實姓名、暱稱、縮寫
- 社群帳號、電子郵件、網址
- 照片、影片
- 住址、城市、可辨識的健身房店名
- 傷病細節、同伴、教練姓名，或其他能連回特定人的句子

GitHub 帳號會顯示為擁有者。不要為了對應帳號而把名字寫進檔案。

## profile.yaml

| 欄位 | 說明 |
| --- | --- |
| `units.load` | 檔案裡的訓練重量單位，固定 `kg` |
| `units.bodyweight` | 檔案裡的體重單位，固定 `kg` |
| `accept.load` | 報重量時可接受的來源單位 |
| `accept.bodyweight` | 報體重時可接受的來源單位 |
| `lb_to_kg` | 磅換公斤：公斤 = 磅 × 此數，再依 `decimals` 四捨五入 |
| `decimals.load` | `load` 小數位數 |
| `decimals.bodyweight` | `bodyweight` 小數位數 |

來源是磅時先換算再寫入。例如 45 lb → 20.4 kg。檔案裡不要出現 `lb`。

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
| `exercises[].sets[].load` | 該組重量，公斤。來源若是磅，先換算 |
| `exercises[].sets[].rpe` | 自覺用力程度，1–10，可省略 |

同一天一個檔。沒練的日子不要補假數據。

## metrics/bodyweight.yaml

一份清單，一天一筆。單位見 `profile.yaml` 的 `units.bodyweight`，不要在這裡另寫單位。

| 欄位 | 說明 |
| --- | --- |
| `date` | `YYYY-MM-DD` |
| `bodyweight` | 當天體重 |
