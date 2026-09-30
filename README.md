# 匿名健身日誌

這是一份只記數據、不記身分的健身日誌模板。沒有資料庫，也沒有應用程式。複製整個倉庫，改成你自己的數字即可。

數值再低也算數。空槓、輔助、少一組、今天只稱了體重，都比停下來有用。留下日期和當下的數字，下一次自然看得到自己還在動。

## 怎麼用

1. 複製這個倉庫，或只複製檔案結構。
2. 課表改 `program.yaml`。重量與體重一律記公斤，規則在 `profile.yaml`。
3. 居家器材記在 `equipment.yaml`（不寫住址或店名）。
4. 每次訓練新增 `logs/YYYY-MM-DD.yaml`。
5. 體重記在 `metrics/bodyweight.yaml`；體組成記在 `metrics/body-composition.yaml`。
6. 欄位說明與匿名規則見 `SCHEMA.md`。

目前倉庫從真實量測起算：`metrics/` 有 `2026-08-15` 的體重與體組成；訓練日誌有 `logs/2026-09-05.yaml`、`logs/2026-09-12.yaml`、`logs/2026-09-15.yaml`、`logs/2026-09-26.yaml`（上肢拉／有氧）與 `logs/2026-09-27.yaml`（上肢推）。之後每次訓練再新增 `logs/YYYY-MM-DD.yaml` 即可。

## 檔案

| 路徑 | 內容 |
| --- | --- |
| `profile.yaml` | 單位與紀錄習慣 |
| `equipment.yaml` | 居家可用器材（匿名） |
| `program.yaml` | 課表裡的動作名稱 |
| `logs/` | 單日訓練 |
| `metrics/bodyweight.yaml` | 體重 |
| `metrics/body-composition.yaml` | 體組成 |
| `SCHEMA.md` | 欄位與什麼不該寫 |

## 匿名

檔案裡不要寫真實姓名、暱稱、社群帳號、照片、住址、認得出的健身房店名，或任何能連回特定人的備註。日期、動作、組數、次數、重量、RPE、體重、體組成數值可以留。

GitHub 帳號會顯示為倉庫擁有者，這無法從檔案裡拿掉。匿名指的是檔案內容。
