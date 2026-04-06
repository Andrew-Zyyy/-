const LANG_KEY = "resume_lang";
const VISITOR_NAME_KEY = "resume_visitor_name";
const FEED_COLLAPSED_KEY = "resume_feed_collapsed";
const RESUME_HIDDEN_KEY = "resume_content_hidden";
const THEME_KEY = "resume_theme";

const content = {
  zh: {
    switchUser: "切换访客",
    switchUserTip: "切换访客",
    langTip: "切换中英文",
    themeLightTip: "切换浅色模式",
    themeDarkTip: "切换深色模式",
    eyebrow: "Digital Resume",
    name: "周宇（Andrew）",
    title: "供应链管理 | 采购策略 | 数据驱动运营",
    summary:
      "我专注于采购与供应链管理，结合数据分析、流程优化与跨团队协作，持续提升采购效率、成本控制与质量稳定性。希望在全球化业务环境中，用结构化方法与技术能力解决复杂供应链问题。",
    email: "2123157097@qq.com",
    tel: "13501923341",
    loginTitle: "欢迎来到我的主页",
    loginDesc: "请先输入你的姓名再继续浏览与点赞。",
    namePlaceholder: "例如：Alex / 王同学",
    loginSubmit: "进入主页",
    likeButton: "给我点赞",
    totalLikePrefix: "累计点赞：",
    feedTitle: "最近点赞",
    feedCollapse: "收起",
    feedExpand: "展开",
    feedCollapseTip: "收起点赞记录",
    feedExpandTip: "展开点赞记录",
    viewHide: "欣赏背景",
    viewShow: "显示简历",
    viewHideTip: "隐藏简历内容",
    viewShowTip: "显示简历内容",
    emptyFeed: "还没有点赞记录，欢迎抢沙发。",
    sectionEducation: "教育背景",
    sectionExperience: "实习与工作经历",
    sectionSkills: "能力与技能",
    sectionCompetition: "竞赛与实践",
    education: [
      {
        school: "东华大学（211）",
        meta: "供应链管理专业 | 2023.09 - 至今",
        details: [
          "GPA 4.04/5，专业排名 2/36（前 5.55%）",
          "英语：CET-4 631，CET-6 599",
          "奖项：旭日奖学金、学科单项奖学金、天骥二等奖学金",
          "组织：校学风组织陪学咖负责人、学习委员"
        ]
      }
    ],
    experiences: [
      {
        company: "上海米哈游天命科技有限公司",
        role: "AI组 · 数据获取实习生",
        date: "2025.12 - 2026.02",
        points: [
          "从 0 到 1 搭建供应商绩效评价体系，覆盖 200+ 供应商，支持季度自动评分和分级管理。",
          "梳理采购流程风险点 8 项，协助需求、订单、验收、付款流程系统化，订单处理时间缩短 40%，合规性提升至 95%。",
          "编写 Python 脚本处理每日 10w+ 条数据，搭建质检看板，质检效率提升 200%。",
          "面向 LLM 数据交付建立自动化验收体系，推动风险问题闭环，数据达标率提升至 100%。"
        ]
      },
      {
        company: "上海莉莉丝科技股份有限公司",
        role: "中国区发行 · 市场采购实习生",
        date: "2025.09 - 2025.12",
        points: [
          "通过项目成本拆分与价格评估体系建设，累计降本超过 80 万元。",
          "主导供应商资源库建设，调研与收集 120+ 供应商数据，新增艺人合作类供应商 8 家。",
          "推进 78 单需求与 203 单历史项目结算，完善验收与结算 SOP，显著提升回款效率。",
          "搭建供应商绩效评估、黑名单机制与月度复盘机制，提升采购治理规范性。"
        ]
      },
      {
        company: "上海哔哩哔哩科技有限公司",
        role: "综合采购组 · 采购专员",
        date: "2025.05 - 2025.08",
        points: [
          "使用 SQL 与 Excel 完成上半年 3000w+ 差旅开支统计，支持制定下半年采购策略。",
          "参与滨江项目落地，对 20+ 小物业及食堂供应商调研筛选，并独立推进多个小项目采买与资产回收。",
          "负责采购申请、合同与付款流程协同，结合历史与市场价格比对，为公司节省成本超过 20 万元。"
        ]
      }
    ],
    skills: [
      "Python",
      "SQL",
      "Tableau",
      "采购流程优化",
      "供应商管理",
      "成本分析与降本",
      "数据可视化看板",
      "跨部门项目协作",
      "英文商务沟通"
    ],
    competitions: [
      "华数杯大学生数学建模竞赛 · 一等奖（队长）",
      "亚太地区大学生数学建模竞赛 · 国际二等奖（队长）",
      "美国大学生数学建模竞赛 · M 奖（第二参与人）",
      "商业精英挑战赛 · 全国二等奖（队长）"
    ],
    savedAs: (name) => `已记录姓名：${name}，可以点赞啦`,
    liked: (name) => `感谢 ${name} 的点赞！`,
    saveNameFirst: "请先输入并确认你的姓名。",
    openIdentityPanel: "请先设置姓名后再点赞。",
    loginNameRequired: "请输入姓名后再继续。",
    requestFailed: "请求失败，请稍后重试。"
  },
  en: {
    switchUser: "Switch User",
    switchUserTip: "Switch User",
    langTip: "Switch Language",
    themeLightTip: "Switch To Light Mode",
    themeDarkTip: "Switch To Dark Mode",
    eyebrow: "Digital Resume",
    name: "Andrew Zhou (Zhou Yu)",
    title: "Supply Chain Management | Procurement Strategy | Data-driven Operations",
    summary:
      "I focus on procurement and supply chain management with strong capabilities in data analysis, process optimization, and cross-functional collaboration. I aim to improve purchasing efficiency, cost control, and quality stability in global business contexts.",
    email: "2123157097@qq.com",
    tel: "13501923341",
    loginTitle: "Welcome to My Resume Page",
    loginDesc: "Please enter your name before continuing and liking.",
    namePlaceholder: "For example: Alex",
    loginSubmit: "Enter",
    likeButton: "Like This Resume",
    totalLikePrefix: "Total Likes: ",
    feedTitle: "Recent Likes",
    feedCollapse: "Collapse",
    feedExpand: "Expand",
    feedCollapseTip: "Collapse Likes",
    feedExpandTip: "Expand Likes",
    viewHide: "Hide Resume",
    viewShow: "Show Resume",
    viewHideTip: "Hide Resume Content",
    viewShowTip: "Show Resume Content",
    emptyFeed: "No likes yet. Be the first one.",
    sectionEducation: "Education",
    sectionExperience: "Internship & Work Experience",
    sectionSkills: "Skills",
    sectionCompetition: "Competitions & Practice",
    education: [
      {
        school: "Donghua University (211)",
        meta: "B.S. in Supply Chain Management | Sep 2023 - Present",
        details: [
          "GPA: 4.04/5, Rank: 2/36 (Top 5.55%)",
          "English: CET-4 631, CET-6 599",
          "Awards: Xuri Scholarship, Subject Scholarship, Tianji 2nd Prize Scholarship",
          "Leadership: Study Community Program Lead, Class Study Committee Member"
        ]
      }
    ],
    experiences: [
      {
        company: "miHoYo (Shanghai)",
        role: "AI Team · Data Acquisition Intern",
        date: "Dec 2025 - Feb 2026",
        points: [
          "Built a supplier performance evaluation system from scratch, covering 200+ suppliers with quarterly auto-scoring.",
          "Identified 8 process risks and supported system implementation across demand-order-acceptance-payment workflows, reducing order cycle time by 40%.",
          "Developed Python scripts to process 100k+ records daily and built QA dashboards, improving QA efficiency by 200%.",
          "Designed an automated acceptance framework for LLM data delivery and improved data compliance rate to 100%."
        ]
      },
      {
        company: "Lilith Games (Shanghai)",
        role: "China Publishing · Marketing Procurement Intern",
        date: "Sep 2025 - Dec 2025",
        points: [
          "Established a pricing cognition and validation model, delivering cumulative cost savings over RMB 800k.",
          "Led supplier pool development with 120+ data entries; expanded artist-related suppliers and US-capable resources.",
          "Handled 78 new procurement requests and 203 historical settlements while improving SOPs for acceptance and settlement.",
          "Set up supplier performance surveys, blacklist governance, and monthly tracking mechanisms for stronger procurement control."
        ]
      },
      {
        company: "bilibili (Shanghai)",
        role: "Comprehensive Procurement Group · Procurement Specialist",
        date: "May 2025 - Aug 2025",
        points: [
          "Used SQL and Excel to analyze RMB 30M+ travel expenditure for strategic planning.",
          "Supported Binjiang project delivery and supplier shortlist screening for 20+ property/canteen vendors.",
          "Coordinated PR-contract-payment workflows and validated price reasonability with finance, saving over RMB 200k."
        ]
      }
    ],
    skills: [
      "Python",
      "SQL",
      "Tableau",
      "Procurement Optimization",
      "Supplier Management",
      "Cost Analysis",
      "Dashboarding",
      "Cross-functional Collaboration",
      "Business English"
    ],
    competitions: [
      "Huashu Cup Mathematical Modeling · First Prize (Team Leader)",
      "APMCM · International Second Prize (Team Leader)",
      "MCM/ICM · Meritorious Winner (2nd Contributor)",
      "Business Elite Challenge · National Second Prize (Team Leader)"
    ],
    savedAs: (name) => `Name saved: ${name}. You can like now.`,
    liked: (name) => `Thanks ${name} for your like!`,
    saveNameFirst: "Please enter and save your name first.",
    openIdentityPanel: "Please set your name before liking.",
    loginNameRequired: "Please enter your name to continue.",
    requestFailed: "Request failed. Please try again."
  }
};

let currentLang = localStorage.getItem(LANG_KEY) || "zh";
let visitorName = localStorage.getItem(VISITOR_NAME_KEY) || "";

const langBtn = document.querySelector("#lang-toggle");
const switchUserBtn = document.querySelector("#switch-user");
const likeBtn = document.querySelector("#like-button");
const likeTotal = document.querySelector("#like-total");
const feedList = document.querySelector("#feed-list");
const feedPanel = document.querySelector(".like-feed");
const feedToggleBtn = document.querySelector("#feed-toggle");
const viewToggleBtn = document.querySelector("#view-toggle");
const themeToggleBtn = document.querySelector("#theme-toggle");
const loginModal = document.querySelector("#login-modal");
const loginForm = document.querySelector("#login-form");
const loginNameInput = document.querySelector("#login-name");
const loginError = document.querySelector("#login-error");
const bgVideos = [
  document.querySelector("#bg-video-a"),
  document.querySelector("#bg-video-b")
].filter(Boolean);
const pageContent = document.querySelector("#page-content");
const resumeSections = document.querySelector("#resume-sections");
let isComposing = false;
let feedCollapsed = localStorage.getItem(FEED_COLLAPSED_KEY) === "1";
let resumeHidden = localStorage.getItem(RESUME_HIDDEN_KEY) === "1";
let currentTheme = localStorage.getItem(THEME_KEY) || "dark";
let activeVideoIndex = 0;
let crossfadeInProgress = false;
const CROSSFADE_SECONDS = 0.8;

const ICONS = {
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="8" r="4"></circle></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15 15 0 0 1 0 20"></path><path d="M12 2a15 15 0 0 0 0 20"></path></svg>',
  eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18"></path><path d="M10.6 10.6a3 3 0 1 0 4.2 4.2"></path><path d="M9.9 4.2A10.7 10.7 0 0 1 12 4c6.5 0 10 8 10 8a17.7 17.7 0 0 1-3.5 4.2"></path><path d="M6.1 6.1A17.4 17.4 0 0 0 2 12s3.5 8 10 8a10.6 10.6 0 0 0 5.9-1.9"></path></svg>',
  chevronUp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"></path></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.9 4.9 1.4 1.4"></path><path d="m17.7 17.7 1.4 1.4"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m4.9 19.1 1.4-1.4"></path><path d="m17.7 6.3 1.4-1.4"></path></svg>'
};

function t() {
  return content[currentLang];
}

function setIconButton(button, icon, title) {
  button.innerHTML = icon;
  button.title = title;
  button.setAttribute("aria-label", title);
}

function escapeHTML(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatTime(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString(currentLang === "zh" ? "zh-CN" : "en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderEducation() {
  const list = document.querySelector("#education-list");
  list.innerHTML = t()
    .education.map(
      (item) => `
      <article class="item">
        <h3 class="item-title">${escapeHTML(item.school)}</h3>
        <p class="meta">${escapeHTML(item.meta)}</p>
        <ul>${item.details.map((d) => `<li>${escapeHTML(d)}</li>`).join("")}</ul>
      </article>
    `
    )
    .join("");
}

function renderExperience() {
  const list = document.querySelector("#experience-list");
  list.innerHTML = t()
    .experiences.map(
      (exp) => `
      <details class="exp">
        <summary>
          <div class="summary-line">
            <span class="summary-title">${escapeHTML(exp.company)}</span>
            <span class="summary-date">${escapeHTML(exp.date)}</span>
          </div>
          <div class="summary-role">${escapeHTML(exp.role)}</div>
        </summary>
        <div class="exp-body">
          <ul>${exp.points.map((p) => `<li>${escapeHTML(p)}</li>`).join("")}</ul>
        </div>
      </details>
    `
    )
    .join("");
}

function renderSkills() {
  const list = document.querySelector("#skill-list");
  list.innerHTML = `<div class="chips">${t()
    .skills.map((s) => `<span class="chip">${escapeHTML(s)}</span>`)
    .join("")}</div>`;
}

function renderCompetitions() {
  const list = document.querySelector("#competition-list");
  list.innerHTML = t()
    .competitions.map((c) => `<article class="item"><p>${escapeHTML(c)}</p></article>`)
    .join("");
}

function renderStaticText() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelector("#hero-eyebrow").textContent = t().eyebrow;
  document.querySelector("#hero-name").textContent = t().name;
  document.querySelector("#hero-title").textContent = t().title;
  document.querySelector("#hero-summary").textContent = t().summary;

  const email = t().email;
  const tel = t().tel;
  const emailLink = document.querySelector("#hero-email");
  const telLink = document.querySelector("#hero-tel");
  emailLink.textContent = email;
  emailLink.href = `mailto:${email}`;
  telLink.textContent = tel;
  telLink.href = `tel:${tel}`;

  document.querySelector("#login-title").textContent = t().loginTitle;
  document.querySelector("#login-desc").textContent = t().loginDesc;
  document.querySelector("#login-name").placeholder = t().namePlaceholder;
  document.querySelector("#login-submit").textContent = t().loginSubmit;
  document.querySelector("#like-button").textContent = t().likeButton;
  document.querySelector("#education-title").textContent = t().sectionEducation;
  document.querySelector("#experience-title").textContent = t().sectionExperience;
  document.querySelector("#skill-title").textContent = t().sectionSkills;
  document.querySelector("#competition-title").textContent = t().sectionCompetition;
  document.querySelector("#feed-title").textContent = t().feedTitle;
  setIconButton(switchUserBtn, ICONS.user, t().switchUserTip);
  setIconButton(langBtn, ICONS.globe, t().langTip);

  renderEducation();
  renderExperience();
  renderSkills();
  renderCompetitions();
}

function applyFeedCollapsedState() {
  feedPanel.classList.toggle("is-collapsed", feedCollapsed);
  setIconButton(feedToggleBtn, feedCollapsed ? ICONS.chevronDown : ICONS.chevronUp, feedCollapsed ? t().feedExpandTip : t().feedCollapseTip);
}

function applyResumeVisibilityState() {
  resumeSections.classList.toggle("is-hidden", resumeHidden);
  setIconButton(viewToggleBtn, resumeHidden ? ICONS.eye : ICONS.eyeOff, resumeHidden ? t().viewShowTip : t().viewHideTip);
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  const isDark = currentTheme === "dark";
  setIconButton(themeToggleBtn, isDark ? ICONS.sun : ICONS.moon, isDark ? t().themeLightTip : t().themeDarkTip);
}

function setLikeEnabled() {
  likeBtn.disabled = false;
}

function openLoginModal(clearError = true) {
  if (clearError) {
    loginError.textContent = "";
  }
  loginNameInput.value = visitorName || "";
  loginModal.hidden = false;
  document.body.classList.add("modal-open");
  setTimeout(() => loginNameInput.focus(), 0);
}

function closeLoginModal() {
  loginModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function hideResumeContent() {
  pageContent.classList.add("is-hidden");
}

function showResumeContent() {
  pageContent.classList.remove("is-hidden");
}

function setupSeamlessVideoLoop() {
  if (bgVideos.length < 2) return;

  const first = bgVideos[0];
  const second = bgVideos[1];
  second.currentTime = 0;

  const tick = async () => {
    const current = bgVideos[activeVideoIndex];
    const nextIndex = activeVideoIndex === 0 ? 1 : 0;
    const next = bgVideos[nextIndex];

    if (!current.duration || Number.isNaN(current.duration)) return;
    const remain = current.duration - current.currentTime;
    if (remain > CROSSFADE_SECONDS || crossfadeInProgress) return;

    crossfadeInProgress = true;
    try {
      next.currentTime = 0;
      await next.play();
      next.classList.add("is-active");
      current.classList.remove("is-active");
      activeVideoIndex = nextIndex;
      setTimeout(() => {
        current.pause();
        current.currentTime = 0;
        crossfadeInProgress = false;
      }, (CROSSFADE_SECONDS + 0.1) * 1000);
    } catch {
      crossfadeInProgress = false;
    }
  };

  first.addEventListener("timeupdate", tick);
  second.addEventListener("timeupdate", tick);
}

async function ensureVideoPlayback() {
  if (!bgVideos.length) return;
  try {
    await bgVideos[activeVideoIndex].play();
  } catch {
    // Keep silent fallback; browser may still autoplay after user interaction.
  }
}

async function fetchLikes() {
  try {
    const res = await fetch("/api/likes/recent?limit=5");
    const data = await res.json();
    likeTotal.textContent = `${t().totalLikePrefix}${data.total}`;
    if (!data.items || data.items.length === 0) {
      feedList.innerHTML = `<li>${t().emptyFeed}</li>`;
      return;
    }
    feedList.innerHTML = data.items
      .map(
        (item) => `
      <li>
        <span>${escapeHTML(item.name)}</span>
        <span class="feed-time">${formatTime(item.created_at)}</span>
      </li>`
      )
      .join("");
  } catch {
    likeTotal.textContent = t().requestFailed;
  }
}

function normalizeName(raw) {
  const compact = raw.replace(/\s+/g, " ").trim();
  return compact.slice(0, 24);
}

function submitLogin() {
  if (isComposing) {
    setTimeout(submitLogin, 0);
    return;
  }

  // Blur helps commit some IME candidate text before reading value.
  loginNameInput.blur();
  const val = normalizeName(loginNameInput.value || "");
  if (!/[^\s]/u.test(val)) {
    loginError.textContent = t().loginNameRequired;
    setTimeout(() => loginNameInput.focus(), 0);
    return;
  }
  visitorName = val;
  localStorage.setItem(VISITOR_NAME_KEY, visitorName);
  likeTotal.textContent = t().savedAs(visitorName);
  closeLoginModal();
  hideResumeContent();
  setTimeout(showResumeContent, 550);
  setLikeEnabled();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitLogin();
});

// Extra fallback in case some browser/input method does not dispatch submit reliably.
document.querySelector("#login-submit").addEventListener("click", (event) => {
  event.preventDefault();
  submitLogin();
});

loginNameInput.addEventListener("compositionstart", () => {
  isComposing = true;
});

loginNameInput.addEventListener("compositionend", () => {
  isComposing = false;
});

likeBtn.addEventListener("click", async () => {
  if (!visitorName) {
    likeTotal.textContent = t().openIdentityPanel;
    openLoginModal(false);
    return;
  }
  likeBtn.disabled = true;
  try {
    const res = await fetch("/api/likes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: visitorName })
    });
    if (!res.ok) throw new Error("failed");
    likeTotal.textContent = t().liked(visitorName);
    await fetchLikes();
  } catch {
    likeTotal.textContent = t().requestFailed;
  } finally {
    setLikeEnabled();
  }
});

switchUserBtn.addEventListener("click", () => {
  hideResumeContent();
  openLoginModal();
});

feedToggleBtn.addEventListener("click", () => {
  feedCollapsed = !feedCollapsed;
  localStorage.setItem(FEED_COLLAPSED_KEY, feedCollapsed ? "1" : "0");
  applyFeedCollapsedState();
});

viewToggleBtn.addEventListener("click", () => {
  resumeHidden = !resumeHidden;
  localStorage.setItem(RESUME_HIDDEN_KEY, resumeHidden ? "1" : "0");
  applyResumeVisibilityState();
});

langBtn.addEventListener("click", async () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  localStorage.setItem(LANG_KEY, currentLang);
  renderStaticText();
  applyFeedCollapsedState();
  applyResumeVisibilityState();
  applyTheme();
  await fetchLikes();
});

themeToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, currentTheme);
  applyTheme();
});

async function init() {
  renderStaticText();
  applyFeedCollapsedState();
  applyResumeVisibilityState();
  applyTheme();
  hideResumeContent();
  loginModal.hidden = true;
  openLoginModal();
  setupSeamlessVideoLoop();
  setLikeEnabled();
  await fetchLikes();
  await ensureVideoPlayback();
}

init();
