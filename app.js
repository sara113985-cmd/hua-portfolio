const projects = [
  {
    slug: "happiness-bus",
    title: "偏鄉幸福巴士綜合管理平台",
    shortTitle: "偏鄉幸福巴士系統",
    image: "/assets/uiux/happiness-bus.webp",
    category: ["交通服務系統", "後台管理平台", "公共運輸 UX"],
    summary: "為改善偏鄉地區交通問題，並回應偏鄉公共運輸需求特性，平台透過多元營運方式與預約機制，補足無公車行經或班次不足的服務缺口。系統整合民眾預約入口、Line Bot 與後台管理流程，協助營運單位管理車輛、班次、預約、派車與服務資訊。",
    role: ["規劃偏鄉交通預約服務的使用流程與資訊架構。", "設計民眾端預約介面、Line Bot 入口與後台管理平台視覺。", "整理管理者操作情境，包含預約資料、服務班次、站點與車輛資訊。", "協助備標文件製作。", "參與系統驗收，確認功能與介面交付品質。", "負責系統維運相關支援。"]
  },
  {
    slug: "local-transportation-needs",
    title: "地方交通需求調查平台",
    shortTitle: "地方交通需求調查平台",
    image: "/assets/uiux/mobility-needs.webp",
    category: ["交通資料平台", "調查系統", "GIS 地圖介面"],
    summary: "將在地基礎資訊、實際需求調查蹲點內容與調查流程導入科技平台，提升需求調查工作效率，並簡化人工彙整資訊的程序。系統以地圖視覺化與資料管理為核心，讓交通需求評估轉為可持續管理的數位流程。",
    role: ["規劃調查資料、地圖資訊與統計內容的呈現層級。", "設計後台列表、資料詳情、地圖圖層與儀表板畫面。", "針對行政與調查人員需求，整理查詢、篩選、檢視與彙整流程。", "建立兼具專業性與易讀性的系統介面。"]
  },
  {
    slug: "usefree-corporate-site",
    title: "UseFree 優勢富宇企業形象官網",
    shortTitle: "UseFree 企業形象官網",
    image: "/assets/uiux/usefree.webp",
    category: ["企業形象網站", "RWD 網頁設計", "科技品牌視覺"],
    summary: "為具區塊鏈技術背景的企業規劃品牌官網，以現代化視覺與科技元素呈現技術整合及創新應用的專業形象，並透過清楚的資訊層級建立具信任感的企業品牌入口。",
    role: ["規劃企業官網資訊架構與首頁敘事順序。", "設計桌機版與手機版 RWD 介面。", "建立科技品牌視覺語彙與產品資訊模組。", "整理服務內容、品牌優勢、應用場景與 CTA 區塊。"]
  },
  {
    slug: "yilan-bike-network",
    title: "宜蘭自行車路網規劃案",
    shortTitle: "宜蘭自行車路網規劃案",
    image: "/assets/uiux/yilan-bike.webp",
    category: ["對外資訊網站", "行動調查平台", "公共服務 UX"],
    summary: "本案包含網頁版對外資訊網站與手機版自行車路線調查平台。網頁版整合自行車路線與旅遊資訊；手機版提供調查公司進行路線檢核與資料紀錄，支援現地完成路線、點位與檢核狀態的蒐集。",
    role: ["規劃對外資訊網站首頁、路線資訊、景點內容與地圖查詢流程。", "設計手機版路線調查平台的登入、點位、線段與檢核狀態。", "整理路網、景點、服務設施與調查欄位的資訊層級。", "負責系統維運相關支援。", "擔任跨部門溝通窗口，協助需求確認與問題協調。"]
  },
  {
    slug: "1111-fresh-graduate-recruitment",
    title: "1111 新鮮人徵才招募網頁",
    shortTitle: "1111 新鮮人徵才招募網頁",
    image: "/assets/uiux/1111-recruit.webp",
    category: ["招募活動網站", "RWD 網頁設計", "活動視覺"],
    summary: "為廠商規劃客製化徵才頁面，透過活潑配色與插畫視覺翻轉傳統公司印象。頁面以分區方式傳達企業理念、職缺資訊與活動內容，讓求職者快速理解企業特色並進一步互動。",
    role: ["規劃招募網站資訊架構與頁面分區。", "設計桌機版與手機版 RWD 介面。", "建立活潑、年輕化的視覺風格與插畫搭配。", "協助整理企業理念、FAQ、招募內容與行動呼籲。"]
  },
  {
    slug: "uforex-otc",
    title: "UFOREX OTC 交易平台",
    shortTitle: "UFOREX OTC 交易平台",
    image: "/assets/uiux/uforex.webp",
    category: ["金融科技網站", "交易平台", "RWD 網頁設計"],
    summary: "針對線下 OTC 交易服務，以安全感、專業性與資訊清楚度為設計重點，透過藍綠色系、圖像化說明與響應式裝置展示，協助使用者理解服務特色、交易流程與平台優勢。",
    role: ["設計品牌官網桌機版與手機版介面。", "規劃服務說明、交易流程、優勢介紹與 CTA 區塊。", "建立符合金融科技情境的專業、穩定與可信任視覺。", "整理資訊層級，降低交易服務的理解門檻。"]
  },
  {
    slug: "uforce-entertainment",
    title: "UFORCE 優勢力娛樂品牌官網",
    shortTitle: "UFORCE 娛樂品牌官網",
    image: "/assets/uiux/uforce.webp",
    category: ["娛樂品牌網站", "活動資訊平台", "品牌視覺"],
    summary: "為流行派對、演唱會與見面會品牌規劃官網，使用具活力的色彩、動態圖像與影片語彙，營造娛樂、生動且具現場感的瀏覽體驗。",
    role: ["規劃娛樂品牌官網資訊架構與活動內容呈現方式。", "設計桌機版與手機版 RWD 介面。", "建立深色舞台感、影像導向與高對比的品牌視覺。", "規劃活動列表、活動詳情、會員登入與資訊發布畫面。"]
  },
  {
    slug: "pingtung-traffic-monitoring",
    hasCase: false,
    title: "屏東縣智慧交通安全管理與監測平台",
    shortTitle: "屏東智慧交通監測平台",
    image: "/assets/uiux/pingtung.webp",
    category: ["智慧交通平台", "GIS 地圖介面", "資料 Dashboard"],
    summary: "依據屏東縣需求客製化建置道安治理系統，整合事故資料、統計圖表、地圖點位與特定族群議題資訊，協助業主進行事故資料交叉分析與治理決策。",
    role: ["設計交通安全監測平台的資訊架構與操作介面。", "規劃事故資料、地圖點位、統計圖表與表格的整合呈現。", "設計篩選、查詢、圖層切換與資料分析流程。", "建立適合公部門管理平台的清楚、穩定、高資訊密度視覺。"]
  }
];

const experience = [
  ["長聯科技股份有限公司", "UIUX 工程師", "2026.06 - Present", "參與醫療 AI 機器人產品的介面與使用體驗設計，負責 Prototype、Design System 與產品測試。", "/assets/logos/長聯.png"],
  ["鼎漢國際工程顧問股份有限公司台中分公司", "系統分析師 / UIUX 設計師", "2024.12 - 2026.03", "參與交通與公共服務系統專案，負責需求訪談、流程、系統架構、UI/UX、測試與驗收。", "/assets/logos/鼎漢logo.jpg"],
  ["優勢富宇科技股份有限公司", "UI 設計師", "2023.03 - 2024.09", "負責 UI / RWD、Prototype、網站測試與品牌視覺識別。", "/assets/logos/優勢富宇.jpeg"],
  ["全球華人股份有限公司 1111 人力銀行", "設計專員", "2020.08 - 2023.02", "負責中部分公司視覺設計、品牌整合、網站 UI 與多元行銷素材。", "/assets/logos/1111人力銀行.png"],
  ["信昱國際股份有限公司", "設計助理 / 實習生", "2017.06 - 2017.08", "參與平面設計專案，協助視覺製作、客戶溝通與專案執行。", ""]
];

const visualAssets = ["2.gif", "3.gif", "4.gif", "5.gif", "5.jpg", "6.jpg", "7.jpg", "8.gif", "9.jpg", "10.jpg", "12.gif", "13.gif", "13.jpg", "14.jpg", "15.jpg", "16.gif"];

const mailIcon = `<svg class="button-icon" aria-hidden="true" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
const downloadIcon = `<svg class="button-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>`;
const arrowLeftIcon = `<svg class="button-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>`;
const arrowRightIcon = `<svg class="button-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`;
const arrowUpIcon = `<svg class="button-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"></path></svg>`;

const main = document.querySelector("#main-content");
const path = location.pathname.replace(/\/+$/, "") || "/";

function renderHeaderState() {
  const homeLink = document.querySelector('.site-nav a[href="/"]');
  const portfolioLink = document.querySelector('.site-nav a[href="/portfolio/"]');
  if (path === "/") homeLink.setAttribute("aria-current", "page");
  if (path === "/portfolio" || path === "/work/pingtung-traffic-monitoring") portfolioLink.setAttribute("aria-current", "page");
}

function featuredCard(project, index) {
  return `<article class="featured-card">
    <a class="featured-media" href="/work/${project.slug}/" aria-label="查看 ${project.title}"><img src="${project.image}" alt="${project.title} 封面" loading="lazy"></a>
    <div class="featured-content">
      <span class="project-index">0${index + 1}</span>
      <p class="project-meta">${project.category.slice(0, 2).join(" / ")}</p>
      <h3>${project.title}</h3>
      <p>${project.summary.split("。")[0]}。</p>
      <a class="text-link" href="/work/${project.slug}/">View case study <span aria-hidden="true">→</span></a>
    </div>
  </article>`;
}

function renderHome() {
  document.title = "Sara Chen | UI/UX Designer";
  main.innerHTML = `
    <nav class="home-section-nav" aria-label="首頁區段導覽">
      <span class="section-nav-line" aria-hidden="true"></span>
      <a href="#about" data-section="about"><span>About</span></a>
      <a href="#work" data-section="work"><span>Selected Projects</span></a>
      <a href="#capabilities" data-section="capabilities"><span>Capabilities</span></a>
      <a href="#experience" data-section="experience"><span>Experience</span></a>
    </nav>
    <section class="hero" id="intro">
      <div class="hero-accent" aria-hidden="true"></div>
      <img class="hero-photo" src="/assets/profile/main.webp" alt="Sara Chen 個人照片">
      <div class="container home-content-container">
        <div class="home-content hero-main-column">
          <div class="hero-copy">
            <span class="hero-role">UI/UX Designer</span>
            <h1>Sara Chen</h1>
            <p class="hero-statement">將複雜需求，轉化為清楚易用的產品體驗</p>
            <p class="hero-summary">具備 4-5 年設計經驗，熟悉需求分析、User Flow、Wireframe、Prototype、UI/RWD、Design System 與跨部門協作。</p>
            <div class="hero-actions">
              <a class="button" href="#work">View Work <span aria-hidden="true">↓</span></a>
              <a class="button secondary" href="/assets/resume/Hua_Resume.pdf" download="Hua_Resume.pdf">Resume ${downloadIcon}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-soft" id="about">
      <div class="container home-content-container">
        <div class="home-content about-grid">
          <img class="about-photo" src="/assets/profile/secondary.webp" alt="Sara Chen 生活照片" loading="lazy">
          <div class="about-copy">
            <p class="eyebrow">About</p>
            <h2>從視覺傳達，走進產品與系統設計</h2>
            <p class="lead">畢業於國立雲林科技大學視覺傳達設計系，從平面與商業視覺出發，逐步轉向 UI/UX、系統平台與產品流程設計。</p>
            <p>我重視設計能否被理解、被使用，也能順利被開發落地。從需求整理、使用流程、介面規劃到跨部門協作，持續累積將複雜需求轉化為清楚體驗的能力。</p>
            <p class="quote-line">好的介面不只是漂亮，而是讓使用者知道下一步，也讓團隊知道如何落地。</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="work">
      <div class="container home-content-container"><div class="home-content">
        <div class="section-head">
          <div><p class="eyebrow">Selected Projects</p><h2>精選專案</h2></div>
          <p class="lead">聚焦真實專案中的流程整理、介面規劃與視覺落地，呈現設計如何回應使用者、業務與開發條件。</p>
        </div>
        <div class="featured-list">${projects.slice(0, 3).map(featuredCard).join("")}</div>
        <p style="text-align:center;margin:42px 0 0"><a class="button secondary" href="/portfolio/">View Portfolio <span aria-hidden="true">→</span></a></p>
      </div></div>
    </section>
    <section class="section section-dark" id="capabilities">
      <div class="container home-content-container"><div class="home-content">
        <div class="section-head"><div><p class="eyebrow">Capabilities</p><h2>把設計推進到落地</h2></div><p class="lead">從需求釐清到交付驗收，兼顧使用體驗、視覺品質與團隊協作。</p></div>
        <div class="capability-grid">
          <article class="capability"><img class="capability-illustration" src="/assets/capabilities/01.jpg" width="65" height="65" alt=""><span class="capability-number">01</span><h3>UX / Product Planning</h3><p>需求訪談、User Flow、Wireframe、功能流程與系統架構。</p></article>
          <article class="capability"><img class="capability-illustration" src="/assets/capabilities/02.jpg" width="65" height="65" alt=""><span class="capability-number">02</span><h3>UI / RWD Design</h3><p>介面設計、Prototype、Design System 與元件化交付。</p></article>
          <article class="capability"><img class="capability-illustration" src="/assets/capabilities/03.png" width="65" height="65" alt=""><span class="capability-number">03</span><h3>Collaboration</h3><p>與 PM、工程師及跨部門角色協作，支援測試、驗收與文件。</p></article>
          <article class="capability"><img class="capability-illustration" src="/assets/capabilities/04.jpg" width="65" height="65" alt=""><span class="capability-number">04</span><h3>Visual Communication</h3><p>品牌視覺、活動主視覺、數位廣告、EDM 與印刷物。</p></article>
        </div>
      </div></div>
    </section>
    <section class="section section-soft" id="experience">
      <div class="container home-content-container"><div class="home-content">
        <div class="section-head"><div><p class="eyebrow">Experience</p><h2>工作經歷</h2></div><p class="lead">從視覺設計、品牌官網、交通公共服務系統到醫療 AI 產品，逐步聚焦 UI/UX 與流程規劃。</p></div>
        <div class="experience-list">${experience.map(item => `<article class="experience-row">${item[4] ? `<img class="company-logo" src="${item[4]}" alt="${item[0]} Logo" loading="lazy">` : `<div class="company-logo" aria-hidden="true"></div>`}<div><h3>${item[0]}</h3><p class="job-title">${item[1]}</p><p>${item[3]}</p></div><time class="period">${item[2]}</time></article>`).join("")}</div>
      </div></div>
    </section>
    <section class="contact-band" id="contact"><div class="container home-content-container"><div class="home-content contact-inner"><h2>一起把複雜問題，整理成清楚可用的產品。</h2><div class="contact-actions"><a class="button" href="mailto:sara113985@gmail.com">Contact Me ${mailIcon}</a><a class="button secondary" href="/assets/resume/Hua_Resume.pdf" download="Hua_Resume.pdf">Resume ${downloadIcon}</a></div></div></div></section>
    <a class="back-to-top" href="#intro" aria-label="回到頁首" title="回到頁首">${arrowUpIcon}</a>`;
  bindHomeSectionNav();
}

function bindHomeSectionNav() {
  const nav = document.querySelector(".home-section-nav");
  const links = [...nav.querySelectorAll("a[data-section]")];
  const sections = links.map(link => document.getElementById(link.dataset.section));

  const setActive = id => {
    links.forEach(link => {
      const active = link.dataset.section === id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  links.forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    setActive(link.dataset.section);
    document.getElementById(link.dataset.section).scrollIntoView({ behavior: "smooth", block: "start" });
  }));

  let frameRequested = false;
  const updateActive = () => {
    const activationLine = Math.min(window.innerHeight * 0.32, 280);
    let current = null;

    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= activationLine) current = section;
    });

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }

    setActive(current?.id ?? null);
    frameRequested = false;
  };

  const requestUpdate = () => {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateActive);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateActive();
}

function workCard(project) {
  const content = `<div class="work-card-media"><img src="${project.image}" alt="${project.title} 封面" loading="lazy"></div><div class="work-card-copy"><p class="project-meta">${project.category.slice(0, 2).join(" / ")}</p><h3>${project.title}</h3><p>${project.summary.split("。")[0]}。</p></div>`;
  return project.hasCase === false
    ? `<article class="work-card is-static">${content}</article>`
    : `<a class="work-card" href="/work/${project.slug}/">${content}</a>`;
}

function visualPanel() {
  return `<div class="visual-grid">${visualAssets.map((file, i) => `<figure class="visual-item ${i >= 8 ? "is-hidden" : ""}" tabindex="0" role="button" data-src="/assets/visual/${file}" data-caption="Visual Design ${String(i + 1).padStart(2, "0")}"><img src="/assets/visual/${file}" alt="Visual Design 作品 ${i + 1}" loading="lazy"></figure>`).join("")}</div><div class="visual-more"><button class="button secondary" id="visual-more" type="button">查看更多</button></div>`;
}

function campaignPanel() {
  return `<div class="campaign-list">
    <article class="campaign-item"><div class="campaign-art single"><img src="/assets/campaign/uforex-trifold.webp" alt="UFOREX 品牌三折頁" loading="lazy"></div><div class="campaign-copy"><p class="project-meta">品牌 DM / 印刷物</p><h3>UFOREX 品牌 DM / 三折頁</h3><p>為 UFOREX OTC 交易服務設計品牌宣傳三折頁，透過清楚的資訊分區、穩定的藍綠色系與圖像化視覺，傳達品牌的專業性、安全感與服務特色。</p></div></article>
    <article class="campaign-item"><div class="campaign-art"><img src="/assets/campaign/1111-campus-front.webp" alt="1111 校園徵才活動 DM 正面" loading="lazy"><img src="/assets/campaign/1111-campus-back.webp" alt="1111 校園徵才活動 DM 背面" loading="lazy"></div><div class="campaign-copy"><p class="project-meta">活動宣傳 / 招募視覺</p><h3>1111 人力銀行校園徵才活動 DM</h3><p>整合活動資訊、品牌視覺與招募溝通重點，讓學生族群快速掌握活動內容與參與方式，並透過明亮活潑的視覺提高活動辨識度。</p></div></article>
  </div>`;
}

function renderPortfolio() {
  document.title = "Portfolio | Sara Chen";
  main.innerHTML = `<section class="portfolio-hero"><div class="container"><p class="eyebrow">Portfolio</p><h1>作品集</h1><p class="lead">從產品與系統介面，到品牌視覺與活動設計。以 UI/UX 為主軸，也保留完整的視覺溝通廣度。</p></div></section>
  <div class="tabs"><div class="container tab-list" role="tablist" aria-label="作品分類"><button class="tab-button" role="tab" aria-selected="true" data-tab="uiux">UI/UX</button><button class="tab-button" role="tab" aria-selected="false" data-tab="visual">Visual Design</button><button class="tab-button" role="tab" aria-selected="false" data-tab="campaign">Campaign Design</button></div></div>
  <section class="portfolio-panel"><div class="container" id="portfolio-content"><div class="section-head"><div><p class="eyebrow">UI/UX</p><h2>產品與系統介面</h2></div><p class="lead">8 個真實專案，涵蓋交通公共服務、資料平台、企業官網、招募與金融科技。</p></div><div class="work-grid">${projects.map(workCard).join("")}</div></div></section>`;

  const content = document.querySelector("#portfolio-content");
  document.querySelectorAll(".tab-button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(b => b.setAttribute("aria-selected", String(b === button)));
    const tab = button.dataset.tab;
    if (tab === "uiux") content.innerHTML = `<div class="section-head"><div><p class="eyebrow">UI/UX</p><h2>產品與系統介面</h2></div><p class="lead">8 個真實專案，涵蓋交通公共服務、資料平台、企業官網、招募與金融科技。</p></div><div class="work-grid">${projects.map(workCard).join("")}</div>`;
    if (tab === "visual") { content.innerHTML = `<div class="section-head"><div><p class="eyebrow">Visual Design</p><h2>視覺設計</h2></div><p class="lead">保留每件作品的完整比例，從靜態 Banner 到動態視覺，不裁切作品內容。</p></div>${visualPanel()}`; bindVisualInteractions(); }
    if (tab === "campaign") content.innerHTML = `<div class="section-head"><div><p class="eyebrow">Campaign Design</p><h2>活動與印刷設計</h2></div><p class="lead">以清楚資訊層級連接品牌訊息、活動情境與目標受眾。</p></div>${campaignPanel()}`;
  }));
}

function bindVisualInteractions() {
  const more = document.querySelector("#visual-more");
  more?.addEventListener("click", () => { document.querySelectorAll(".visual-item.is-hidden").forEach(item => item.classList.remove("is-hidden")); more.remove(); });
  document.querySelectorAll(".visual-item").forEach(item => {
    const open = () => openLightbox(item.dataset.src, item.dataset.caption);
    item.addEventListener("click", open);
    item.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
  });
}

function renderCase(project) {
  document.title = `${project.title} | Sara Chen`;
  const caseProjects = projects.filter(item => item.hasCase !== false);
  const index = caseProjects.indexOf(project);
  const previous = caseProjects[(index - 1 + caseProjects.length) % caseProjects.length];
  const next = caseProjects[(index + 1) % caseProjects.length];
  main.innerHTML = `<section class="case-hero"><div class="container"><p class="eyebrow">Case Study</p><h1>${project.title}</h1><div class="case-categories">${project.category.map(tag => `<span class="tag">${tag}</span>`).join("")}</div></div></section>
  <article class="case-layout"><figure class="case-cover"><img src="${project.image}" alt="${project.title} 案例主視覺"></figure><div class="case-content"><section class="case-section"><h3>專案概覽 / 背景</h3><p>${project.summary}</p></section><section class="case-section"><h3>角色與負責範圍</h3><ul class="role-list">${project.role.map(item => `<li>${item}</li>`).join("")}</ul></section><nav class="case-next" aria-label="案例導覽"><a class="button secondary small case-nav-button" href="/work/${previous.slug}/">${arrowLeftIcon}<span>${previous.shortTitle}</span></a><a class="button secondary small case-nav-button" href="/work/${next.slug}/"><span>${next.shortTitle}</span>${arrowRightIcon}</a></nav></div></article>`;
}

function openLightbox(src, caption) {
  const dialog = document.querySelector(".lightbox");
  dialog.querySelector("img").src = src;
  dialog.querySelector("img").alt = caption;
  dialog.querySelector("p").textContent = caption;
  dialog.showModal();
}

function bindRevealAnimations() {
  const targets = document.querySelectorAll("#main-content > section > .container, .case-cover, .case-section");
  targets.forEach(target => target.dataset.reveal = "");

  if (!("IntersectionObserver" in window)) {
    targets.forEach(target => target.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -48px 0px" });

  targets.forEach(target => observer.observe(target));
}

const menuButton = document.querySelector(".menu-toggle");
menuButton.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
  menuButton.textContent = open ? "×" : "☰";
});
document.querySelectorAll(".site-nav a").forEach(link => link.addEventListener("click", () => { document.body.classList.remove("menu-open"); menuButton.setAttribute("aria-expanded", "false"); menuButton.textContent = "☰"; }));
window.addEventListener("resize", () => {
  if (window.innerWidth < 1024 || !document.body.classList.contains("menu-open")) return;
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "開啟選單");
  menuButton.textContent = "☰";
});
document.querySelector(".lightbox-close").addEventListener("click", () => document.querySelector(".lightbox").close());
document.querySelector(".lightbox").addEventListener("click", event => { if (event.target === event.currentTarget) event.currentTarget.close(); });

if (path === "/") renderHome();
else if (path === "/portfolio") renderPortfolio();
else if (path.startsWith("/work/")) {
  const slug = path.split("/")[2];
  const project = projects.find(item => item.slug === slug);
  if (project && project.hasCase !== false) renderCase(project);
  else if (project) renderPortfolio();
  else { main.innerHTML = `<section class="portfolio-hero"><div class="container"><h1>找不到此案例</h1><a class="button" href="/portfolio/">返回 Portfolio</a></div></section>`; }
} else renderHome();
renderHeaderState();
bindRevealAnimations();
