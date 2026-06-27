# Hua Portfolio Deployment

此資料夾是可直接部署的靜態作品集網站，不需要安裝套件，也沒有前端編譯流程。

## 部署範圍

只部署 `portfolio-site/`，不要部署上一層 `0626作品集/`。

上一層包含原始作品、履歷來源、文件與個人素材，不屬於公開網站內容。

## 網站入口

- 首頁：`index.html`
- Portfolio：`portfolio/index.html`
- Case Study：`work/<project-slug>/index.html`

網站共有 10 個 `index.html`，讓首頁、Portfolio 與各案例網址都能直接開啟。

## Vercel 設定

若從包含整個工作區的 Git Repository 匯入：

- Framework Preset：`Other`
- Root Directory：`portfolio-site`
- Build Command：留空
- Output Directory：`.`
- Install Command：留空

若上傳或建立的 Repository 內容本身就是 `portfolio-site/`，Root Directory 保持預設即可。

## 資源路徑

網站使用站點根目錄相對路徑：

```text
/styles.css
/app.js
/assets/...
/portfolio/
/work/...
```

這些路徑不是電腦本機路徑，適合部署在 Vercel 網域根目錄。不要直接用 `file://` 開啟 `index.html`，否則根目錄資源無法正確載入。

## 本機預覽

在 `portfolio-site/` 執行：

```bash
python3 serve.py
```

然後開啟：

```text
http://127.0.0.1:4173/
```

`serve.py` 只用於本機預覽，不是 Vercel 執行環境。

## 上線後檢查

部署完成後依序確認：

1. `/`
2. `/portfolio/`
3. `/work/happiness-bus/`
4. `/work/local-transportation-needs/`
5. `/work/usefree-corporate-site/`
6. `/work/yilan-bike-network/`
7. `/work/1111-fresh-graduate-recruitment/`
8. `/work/uforex-otc/`
9. `/work/uforce-entertainment/`
10. `/assets/resume/Hua_Resume.pdf`

`/work/pingtung-traffic-monitoring/` 依網站規則顯示 Portfolio，不提供公開案例頁。

## 部署前確認結果

- 首頁入口存在。
- CSS、JavaScript、圖片及履歷引用均為站點根目錄相對路徑。
- 網站公開檔案中沒有 `/Users/...` 或 Windows 磁碟路徑。
- 所有被網站引用的圖片與檔案都存在。
- 不需要環境變數、Serverless Function、資料庫或 Node.js Build。
