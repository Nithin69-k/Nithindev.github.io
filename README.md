<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Nithin K — Portfolio README</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Fira+Code:wght@300;400;500&display=swap" rel="stylesheet" />
<style>
  :root {
    --bg:        #0d1117;
    --bg2:       #161b22;
    --bg3:       #1c2333;
    --border:    #30363d;
    --green:     #3fb950;
    --green2:    #56d364;
    --blue:      #58a6ff;
    --cyan:      #79c0ff;
    --purple:    #bc8cff;
    --yellow:    #e3b341;
    --orange:    #ffa657;
    --red:       #ff7b72;
    --pink:      #f778ba;
    --dim:       #484f58;
    --text:      #c9d1d9;
    --text2:     #8b949e;
    --cursor:    #58a6ff;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 13px;
    line-height: 1.7;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Scanline overlay */
  body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.03) 2px,
      rgba(0,0,0,0.03) 4px
    );
    pointer-events: none;
    z-index: 9999;
  }

  /* ── Editor chrome ── */
  .editor-chrome {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 1100px;
    margin: 0 auto;
    border: 1px solid var(--border);
  }

  .titlebar {
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }
  .dots { display: flex; gap: 7px; }
  .dot {
    width: 12px; height: 12px;
    border-radius: 50%;
  }
  .dot.red    { background: #ff5f57; }
  .dot.yellow { background: #ffbd2e; }
  .dot.green  { background: #28c840; }
  .titlebar-name {
    color: var(--text2);
    font-size: 12px;
    flex: 1;
    text-align: center;
    letter-spacing: 0.5px;
  }

  /* ── Tab bar ── */
  .tabs {
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-shrink: 0;
    overflow-x: auto;
  }
  .tab {
    padding: 8px 18px;
    font-size: 12px;
    color: var(--text2);
    border-right: 1px solid var(--border);
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: background 0.15s;
  }
  .tab:hover { background: var(--bg3); }
  .tab.active {
    background: var(--bg);
    color: var(--text);
    border-bottom: 2px solid var(--blue);
    margin-bottom: -1px;
  }
  .tab-icon { opacity: 0.7; }

  /* ── Main layout ── */
  .workspace {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  /* ── Sidebar ── */
  .sidebar {
    width: 220px;
    flex-shrink: 0;
    background: var(--bg2);
    border-right: 1px solid var(--border);
    overflow-y: auto;
    padding: 8px 0;
  }
  .sidebar-title {
    color: var(--text2);
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 6px 16px 8px;
  }
  .tree-item {
    padding: 4px 16px;
    font-size: 12px;
    color: var(--text2);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background 0.12s, color 0.12s;
    user-select: none;
  }
  .tree-item:hover { background: var(--bg3); color: var(--text); }
  .tree-item.active { color: var(--blue); background: rgba(88,166,255,0.07); }
  .tree-item .icon { font-size: 13px; }
  .tree-folder {
    padding: 6px 16px 2px;
    font-size: 11px;
    color: var(--dim);
    letter-spacing: 0.5px;
  }

  /* ── Editor ── */
  .editor-pane {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    display: flex;
    position: relative;
  }

  .line-numbers {
    width: 52px;
    flex-shrink: 0;
    background: var(--bg);
    color: var(--dim);
    text-align: right;
    padding: 20px 12px 20px 0;
    font-size: 12px;
    line-height: 1.7;
    user-select: none;
    border-right: 1px solid var(--border);
    position: sticky;
    left: 0;
    top: 0;
    align-self: flex-start;
  }

  .code-content {
    flex: 1;
    padding: 20px 20px 60px 20px;
    overflow-x: auto;
    white-space: pre;
  }

  /* ── Syntax highlighting ── */
  .c-comment { color: var(--dim); font-style: italic; }
  .c-h1      { color: var(--blue); font-weight: 700; font-size: 1.15em; }
  .c-h2      { color: var(--cyan); font-weight: 700; }
  .c-h3      { color: var(--purple); font-weight: 600; }
  .c-badge   { color: var(--yellow); }
  .c-link    { color: var(--green2); text-decoration: underline; cursor: pointer; }
  .c-string  { color: var(--orange); }
  .c-key     { color: var(--red); }
  .c-value   { color: var(--green); }
  .c-symbol  { color: var(--pink); }
  .c-table-h { color: var(--blue); font-weight: 600; }
  .c-table-sep { color: var(--dim); }
  .c-bullet  { color: var(--yellow); }
  .c-dim     { color: var(--dim); }
  .c-bold    { color: var(--text); font-weight: 700; }
  .c-emoji   { filter: saturate(1.2); }
  .c-avail   { color: var(--green2); font-weight: 600; }

  /* blinking cursor on last line */
  .cursor-blink {
    display: inline-block;
    width: 8px; height: 14px;
    background: var(--cursor);
    vertical-align: middle;
    animation: blink 1.1s step-end infinite;
    margin-left: 2px;
    border-radius: 1px;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  /* ── Status bar ── */
  .statusbar {
    background: var(--blue);
    color: #000;
    font-size: 11px;
    padding: 4px 16px;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
  }
  .statusbar span { display: flex; align-items: center; gap: 5px; }
  .statusbar .right { margin-left: auto; display: flex; gap: 16px; }

  /* ── Minimap ── */
  .minimap {
    width: 60px;
    flex-shrink: 0;
    background: var(--bg2);
    border-left: 1px solid var(--border);
    overflow: hidden;
    opacity: 0.4;
  }
  .minimap-line {
    height: 3px;
    margin: 1px 4px;
    border-radius: 1px;
    background: var(--dim);
  }
  .minimap-line.h1 { background: var(--blue); width: 80%; height: 4px; }
  .minimap-line.h2 { background: var(--cyan); width: 65%; height: 3px; }
  .minimap-line.green { background: var(--green); width: 50%; }
  .minimap-line.short { width: 30%; }
  .minimap-line.long  { width: 90%; }
  .minimap-line.med   { width: 60%; }

  /* ── Fade in animation ── */
  .code-line {
    opacity: 0;
    animation: fadein 0.04s forwards;
  }
  @keyframes fadein { to { opacity: 1; } }

  /* scrollbar */
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg2); }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--dim); }

  @media (max-width: 700px) {
    .sidebar { display: none; }
    .minimap { display: none; }
    .editor-chrome { border: none; height: auto; min-height: 100vh; }
  }
</style>
</head>
<body>

<div class="editor-chrome">

  <!-- Title bar -->
  <div class="titlebar">
    <div class="dots">
      <div class="dot red"></div>
      <div class="dot yellow"></div>
      <div class="dot green"></div>
    </div>
    <div class="titlebar-name">VS Code — MyPortfolio</div>
  </div>

  <!-- Tabs -->
  <div class="tabs">
    <div class="tab active"><span class="tab-icon">📄</span>README.md</div>
    <div class="tab"><span class="tab-icon">📦</span>package.json</div>
    <div class="tab"><span class="tab-icon">⚙️</span>.env</div>
    <div class="tab"><span class="tab-icon">🔧</span>config.ts</div>
  </div>

  <!-- Workspace -->
  <div class="workspace">

    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-title">Explorer</div>
      <div class="tree-folder">📁 MyPortfolio</div>
      <div class="tree-item active"><span class="icon">📄</span>README.md</div>
      <div class="tree-item"><span class="icon">📦</span>package.json</div>
      <div class="tree-item"><span class="icon">🗂️</span>src/</div>
      <div class="tree-item" style="padding-left:28px"><span class="icon">⚛️</span>App.tsx</div>
      <div class="tree-item" style="padding-left:28px"><span class="icon">🎨</span>index.css</div>
      <div class="tree-item" style="padding-left:28px"><span class="icon">📁</span>components/</div>
      <div class="tree-item" style="padding-left:40px"><span class="icon">🧩</span>Hero.tsx</div>
      <div class="tree-item" style="padding-left:40px"><span class="icon">🧩</span>Projects.tsx</div>
      <div class="tree-item" style="padding-left:40px"><span class="icon">🧩</span>Skills.tsx</div>
      <div class="tree-item"><span class="icon">📁</span>public/</div>
      <div class="tree-item" style="padding-left:28px"><span class="icon">📄</span>Nithin_K_Resume.pdf</div>
      <div class="tree-item"><span class="icon">⚙️</span>vite.config.ts</div>
      <div class="tree-item"><span class="icon">🔒</span>.gitignore</div>
    </div>

    <!-- Line numbers + code -->
    <div class="editor-pane" id="editorPane">
      <div class="line-numbers" id="lineNumbers"></div>
      <div class="code-content" id="codeContent"></div>
      <div class="minimap" id="minimap"></div>
    </div>

  </div>

  <!-- Status bar -->
  <div class="statusbar">
    <span>🔀 main</span>
    <span>✅ 0 errors</span>
    <span>⚠️ 0 warnings</span>
    <div class="right">
      <span>Markdown</span>
      <span>UTF-8</span>
      <span>Ln 1, Col 1</span>
      <span>🚀 Available</span>
    </div>
  </div>

</div>

<script>
const lines = [
  { cls: 'c-comment',  text: '<!--' },
  { cls: 'c-comment',  text: '  ╔══════════════════════════════════════════════════════╗' },
  { cls: 'c-comment',  text: '  ║       README.md — Nithin K / MyPortfolio             ║' },
  { cls: 'c-comment',  text: '  ║       Last updated: June 2026                        ║' },
  { cls: 'c-comment',  text: '  ╚══════════════════════════════════════════════════════╝' },
  { cls: 'c-comment',  text: '-->' },
  { cls: '',           text: '' },
  { cls: 'c-h1',       text: '# 🌐 Nithin K — Portfolio Website' },
  { cls: '',           text: '' },
  { cls: 'c-bold',     text: '**AI Engineer · Data Scientist · Software Developer**' },
  { cls: '',           text: '' },
  { cls: 'c-badge',    text: '[![Live Site](https://img.shields.io/badge/🚀_Live_Site-nithingowda.lovable.app-4f46e5?style=for-the-badge)](https://nithingowda.lovable.app/)' },
  { cls: 'c-badge',    text: '[![Resume](https://img.shields.io/badge/📄_Resume-Download_PDF-0ea5e9?style=for-the-badge)](https://nithingowda.lovable.app/Nithin_K_Resume.pdf)' },
  { cls: 'c-badge',    text: '[![GitHub](https://img.shields.io/badge/GitHub-Nithin69--k-24292e?style=for-the-badge&logo=github)](https://github.com/Nithin69-k)' },
  { cls: '',           text: '' },
  { cls: 'c-string',   text: '> *"Bridging data science theory and software engineering practice —' },
  { cls: 'c-string',   text: '>  building production-ready ML pipelines and integrating' },
  { cls: 'c-string',   text: '>  Generative AI into real applications."*' },
  { cls: '',           text: '' },
  { cls: 'c-table-sep',text: '---' },
  { cls: '',           text: '' },
  { cls: 'c-h2',       text: '## 📌 About' },
  { cls: '',           text: '' },
  { cls: '',           text: 'This repository contains the source code for my personal portfolio website,' },
  { cls: '',           text: 'showcasing my work as an AI Engineer and Data Scientist. The site features' },
  { cls: '',           text: 'my projects, professional experience, technical skills, education, and' },
  { cls: '',           text: 'certifications — all in one place.' },
  { cls: '',           text: '' },
  { cls: 'c-symbol',   text: '🔗 ' + '<span class="c-bold">Live:</span>' + ' <span class="c-link">https://nithingowda.lovable.app/</span>', raw: true },
  { cls: '',           text: '' },
  { cls: 'c-table-sep',text: '---' },
  { cls: '',           text: '' },
  { cls: 'c-h2',       text: '## ✨ Features' },
  { cls: '',           text: '' },
  { cls: 'c-bullet',   text: '- ' + '<span class="c-bold">Responsive Design</span>' + ' — Works seamlessly on desktop and mobile', raw: true },
  { cls: 'c-bullet',   text: '- ' + '<span class="c-bold">Project Showcase</span>' + ' — Featured ML, AI, and full-stack projects with GitHub links', raw: true },
  { cls: 'c-bullet',   text: '- ' + '<span class="c-bold">Work Experience</span>' + ' — Internship timeline with verifiable offer letters', raw: true },
  { cls: 'c-bullet',   text: '- ' + '<span class="c-bold">Skills Inventory</span>' + ' — Organized by category (AI/DS, Languages, BI, Systems)', raw: true },
  { cls: 'c-bullet',   text: '- ' + '<span class="c-bold">Certifications</span>' + ' — IIT Indore, Intellipaat, and research publication credentials', raw: true },
  { cls: 'c-bullet',   text: '- ' + '<span class="c-bold">Downloadable Resume</span>' + ' — One-click PDF download', raw: true },
  { cls: 'c-bullet',   text: '- ' + '<span class="c-bold">Contact Section</span>' + ' — Direct email and phone access', raw: true },
  { cls: '',           text: '' },
  { cls: 'c-table-sep',text: '---' },
  { cls: '',           text: '' },
  { cls: 'c-h2',       text: '## 🚀 Featured Projects' },
  { cls: '',           text: '' },
  { cls: 'c-table-h',  text: '| Project                          | Stack                              | Description                                          |' },
  { cls: 'c-table-sep',text: '|----------------------------------|------------------------------------|----------------------------------------------------|' },
  { cls: '',           text: '| <span class="c-link">Telecom Customer Churn Prediction</span>  | <span class="c-value">Python · XGBoost · Scikit-learn</span>    | End-to-end classification framework for retention   |', raw: true },
  { cls: '',           text: '| <span class="c-link">Movie Recommendation System</span>        | <span class="c-value">Python · SVD · Collaborative Filter</span>| Personalized content predictor using SVD            |', raw: true },
  { cls: '',           text: '| <span class="c-link">Parking Space Management System</span>   | <span class="c-value">Python · SQL · Streamlit</span>           | Real-time slot allocation + peer-reviewed pub       |', raw: true },
  { cls: '',           text: '| <span class="c-link">Shilpa-Kala</span>                        | <span class="c-value">HTML5 · CSS3 · JS · Gemini API</span>     | Artisan photography app with AI descriptions        |', raw: true },
  { cls: '',           text: '' },
  { cls: 'c-table-sep',text: '---' },
  { cls: '',           text: '' },
  { cls: 'c-h2',       text: '## 💼 Experience' },
  { cls: '',           text: '' },
  { cls: 'c-h3',       text: '### AI & Android App Development Intern — MindMatrixEd' },
  { cls: 'c-dim',      text: '_Feb 2026 – Apr 2026_' },
  { cls: '',           text: '' },
  { cls: 'c-bullet',   text: '- Architected Generative AI components into mobile app features' },
  { cls: 'c-bullet',   text: '- Streamlined model inference across active user sessions' },
  { cls: '',           text: '' },
  { cls: 'c-h3',       text: '### Data Scientist Intern — Intellipaat' },
  { cls: 'c-dim',      text: '_Sep 2025 – Feb 2026_' },
  { cls: '',           text: '' },
  { cls: 'c-bullet',   text: '- Engineered feature transformations and trained supervised ML models' },
  { cls: 'c-bullet',   text: '- Ran exploratory analysis on industrial datasets to extract insights' },
  { cls: '',           text: '' },
  { cls: 'c-table-sep',text: '---' },
  { cls: '',           text: '' },
  { cls: 'c-h2',       text: '## 🛠️ Tech Stack' },
  { cls: '',           text: '' },
  { cls: 'c-table-h',  text: '| Category        | Tools                                                         |' },
  { cls: 'c-table-sep',text: '|-----------------|---------------------------------------------------------------|' },
  { cls: '',           text: '| <span class="c-key">AI & DS</span>        | <span class="c-value">ML · Deep Learning · PyTorch · GenAI · Prompt Engineering</span>   |', raw: true },
  { cls: '',           text: '| <span class="c-key">Languages</span>      | <span class="c-value">Python · SQL · PostgreSQL</span>                                    |', raw: true },
  { cls: '',           text: '| <span class="c-key">Data Stack</span>     | <span class="c-value">Pandas · NumPy · Scikit-Learn · XGBoost</span>                     |', raw: true },
  { cls: '',           text: '| <span class="c-key">BI & Analytics</span> | <span class="c-value">Power BI · Tableau</span>                                          |', raw: true },
  { cls: '',           text: '| <span class="c-key">Systems</span>        | <span class="c-value">Linux · Git · Streamlit · Android</span>                           |', raw: true },
  { cls: '',           text: '' },
  { cls: 'c-table-sep',text: '---' },
  { cls: '',           text: '' },
  { cls: 'c-h2',       text: '## 🎓 Education & Certifications' },
  { cls: '',           text: '' },
  { cls: 'c-bullet',   text: '🏛️  <span class="c-bold">B.E. Computer Science</span> — Bangalore Technological Institute (VTU), 2022–2026 · CGPA 7.5', raw: true },
  { cls: 'c-bullet',   text: '📜  <span class="c-bold">Data Science & AI Certification (16 months)</span> — IIT Indore via Intellipaat', raw: true },
  { cls: 'c-bullet',   text: '📰  <span class="c-bold">Research Publication</span> — IJCRT, Sep 2025', raw: true },
  { cls: 'c-bullet',   text: '✅  Power BI · Python · Artificial Intelligence · SQL · Linux — Intellipaat', raw: true },
  { cls: '',           text: '' },
  { cls: 'c-table-sep',text: '---' },
  { cls: '',           text: '' },
  { cls: 'c-h2',       text: '## 📬 Contact' },
  { cls: '',           text: '' },
  { cls: 'c-table-h',  text: '| Channel   | Details                            |' },
  { cls: 'c-table-sep',text: '|-----------|-------------------------------------|' },
  { cls: '',           text: '| <span class="c-key">📧 Email</span>    | <span class="c-link">nithingowda490@gmail.com</span>      |', raw: true },
  { cls: '',           text: '| <span class="c-key">📞 Phone</span>    | <span class="c-value">+91 82172 64796</span>              |', raw: true },
  { cls: '',           text: '| <span class="c-key">📍 Location</span> | <span class="c-value">Bengaluru, Karnataka, India</span>  |', raw: true },
  { cls: '',           text: '| <span class="c-key">💼 LinkedIn</span> | <span class="c-link">linkedin.com/in/nithin-k</span>      |', raw: true },
  { cls: '',           text: '| <span class="c-key">🐙 GitHub</span>   | <span class="c-link">github.com/Nithin69-k</span>         |', raw: true },
  { cls: '',           text: '' },
  { cls: 'c-table-sep',text: '---' },
  { cls: '',           text: '' },
  { cls: 'c-avail',    text: '🚀  Available for full-time opportunities in AI Engineering, Data Science & Software Development' },
  { cls: '',           text: '' },
  { cls: 'c-comment',  text: '<!-- ⭐ If you found this portfolio useful, consider starring this repo! -->' },
  { cls: '',           text: '' },
  { cls: 'c-dim',      text: '© 2026 Nithin K. All rights reserved.' },
  { cls: '',           text: '' },
];

const codeContent = document.getElementById('codeContent');
const lineNumbers = document.getElementById('lineNumbers');
const minimap     = document.getElementById('minimap');

let lineNum = 1;
let delay = 0;
const BASE_DELAY = 18; // ms per line

lines.forEach((line, i) => {
  const div = document.createElement('div');
  div.className = 'code-line';
  div.style.animationDelay = `${delay}ms`;

  let html;
  if (line.raw) {
    html = line.text;
  } else {
    html = `<span class="${line.cls}">${escHtml(line.text)}</span>`;
  }

  if (i === lines.length - 1) {
    html += '<span class="cursor-blink"></span>';
  }

  div.innerHTML = html;
  codeContent.appendChild(div);

  // Line number
  const ln = document.createElement('div');
  ln.className = 'code-line';
  ln.style.animationDelay = `${delay}ms`;
  ln.textContent = lineNum++;
  lineNumbers.appendChild(ln);

  // Minimap stripe
  const mm = document.createElement('div');
  mm.className = 'minimap-line';
  if (line.cls === 'c-h1') mm.classList.add('h1');
  else if (line.cls === 'c-h2') mm.classList.add('h2');
  else if (line.cls === 'c-value' || line.cls === 'c-avail') mm.classList.add('green');
  else if (!line.text) mm.classList.add('short');
  else if (line.text.length > 80) mm.classList.add('long');
  else mm.classList.add('med');
  minimap.appendChild(mm);

  delay += BASE_DELAY;
});

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Update status bar col on scroll
document.getElementById('editorPane').addEventListener('scroll', function() {
  const pct = Math.round((this.scrollTop / (this.scrollHeight - this.clientHeight)) * 100) || 1;
  const total = lines.length;
  const current = Math.max(1, Math.round((this.scrollTop / (this.scrollHeight - this.clientHeight)) * total));
  document.querySelector('.statusbar .right').lastElementChild.textContent =
    `Ln ${current}, Col 1`;
});
</script>

</body>
</html>
