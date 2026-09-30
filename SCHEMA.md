# 欄位與匿名規則

只記錄可以比較的訓練數據。不記錄身分。

## 可以寫

- 日期（`YYYY-MM-DD`）
- 動作名稱（通用名稱，例如 `深蹲`、`槓鈴臥推`）
- 組數、次數、重量、RPE
- 體重
- 體組成數值（體脂、皮下脂肪、骨骼肌、內臟脂肪等級、基礎代謝、體年齡、BMI）
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

## equipment.yaml

居家或可用器材清單。只記通用器材類型與可比較的負重資訊，不記住址、城市、可辨識店名或品牌。

| 欄位 | 說明 |
| --- | --- |
| `venue` | 訓練場所類型，目前僅用 `home`（居家）。不要寫地址或地名 |
| `items[].name` | 器材通用名稱（例如 `啞鈴`、`瑜珈墊`） |
| `items[].load_total_kg` | 可選。該器材可用總重量（公斤）。成對／單邊拆分未知時仍寫總重，並在註解標明 |

重量單位與 `profile.yaml` 的 `units.load` 一致（`kg`）。檔案裡不要出現 `lb`。

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
| `exercises[].sets[].reps` | 次數（肌力組） |
| `exercises[].sets[].load` | 該組重量，公斤。來源若是磅，先換算（肌力組） |
| `exercises[].sets[].duration_s` | 該組持續秒數。有氧／計時項目用；與 `reps`+`load` 擇一，不要兩種混在同一組 |
| `exercises[].sets[].rpe` | 自覺用力程度，1–10，可省略 |

同一天一個檔。沒練的日子不要補假數據。肌力組寫 `reps` 與 `load`；橢圓機、間歇跑等計時組只寫 `duration_s`，不要編造次數或重量。

## metrics/bodyweight.yaml

一份清單，一天一筆。單位見 `profile.yaml` 的 `units.bodyweight`，不要在這裡另寫單位。

| 欄位 | 說明 |
| --- | --- |
| `date` | `YYYY-MM-DD` |
| `bodyweight` | 當天體重 |

## metrics/body-composition.yaml

一份清單，有量測才記，一天一筆。百分比與公斤並存時各自寫欄位，不要另寫單位字串。不要寫裝置狀態文案（例如「偏高」「標準」）。體重仍只記在 `metrics/bodyweight.yaml`。

| 欄位 | 說明 |
| --- | --- |
| `date` | `YYYY-MM-DD` |
| `body_fat_percent` | 體脂率 |
| `body_fat_kg` | 體脂重，公斤 |
| `subcutaneous_fat_percent` | 皮下脂肪率 |
| `subcutaneous_fat.arms_percent` | 手臂皮下脂肪率 |
| `subcutaneous_fat.trunk_percent` | 軀幹皮下脂肪率 |
| `subcutaneous_fat.legs_percent` | 腿部皮下脂肪率 |
| `skeletal_muscle_percent` | 骨骼肌率 |
| `skeletal_muscle_kg` | 骨骼肌重，公斤 |
| `skeletal_muscle.arms_percent` | 手臂骨骼肌率 |
| `skeletal_muscle.trunk_percent` | 軀幹骨骼肌率 |
| `skeletal_muscle.legs_percent` | 腿部骨骼肌率 |
| `visceral_fat_level` | 內臟脂肪等級 |
| `bmr_kcal` | 基礎代謝，kcal |
| `body_age` | 體年齡 |
| `bmi` | BMI |
