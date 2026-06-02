# 个人求职简历网站 — 胡瑞祥 / Ruixiang Hu

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-上线-blue)](https://yourname.github.io/personal-job-website/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

一个**纯静态**的个人求职作品集网站，使用 HTML、CSS、JavaScript 构建，可直接通过 GitHub Pages 从 `/docs` 文件夹发布。

> ⚡ 无需构建。无需 `npm install`。无需任何框架。直接打开 `docs/index.html` 即可运行。

---

## 🚀 在线访问

通过 GitHub Pages 发布后，访问地址为：

```
https://<你的用户名>.github.io/<仓库名>/
```

---

## 📁 项目目录结构

```
personal-job-website/
├── README.md                          ← 本文件
└── docs/                              ← 网站根目录（GitHub Pages 源文件夹）
    ├── index.html                     ← 首页（包含所有模块）
    ├── css/
    │   └── style.css                  ← 全部样式
    ├── js/
    │   └── main.js                    ← 交互逻辑
    ├── assets/
    │   ├── avatar-placeholder.svg     ← 替换为你的头像（avatar.png/jpg）
    │   └── project-placeholder.svg    ← 替换为项目截图
    └── resume/
        └── resume.pdf                 ← 替换为你的真实简历 PDF
```

---

## 🔧 如何自定义修改

### 1. 修改个人信息

打开 **`docs/index.html`**，搜索以下占位内容并替换。关键修改位置：

| 修改内容 | 在 `index.html` 中的位置 |
|---|---|
| 姓名（中文 & English） | Hero 区域，`<h1 class="hero-name">` 和 `<h2 class="hero-name-en">` |
| 求职职位 | `<p class="hero-title">` |
| 个人简介 | `<p class="hero-bio">`、About 区域 |
| 邮箱 | `href="mailto:your_email@example.com"` |
| GitHub 地址 | `href="https://github.com/yourname"` |
| Google Scholar / ORCID | Hero 和 Contact 区域中的 `href="#"` |
| 所在城市 | Contact 区域 |

### 2. 替换头像

替换 **`docs/assets/avatar-placeholder.svg`** 文件：

- 可使用 `.png`、`.jpg` 或 `.svg` 格式
- 然后在 `index.html` 的 Hero 区域更新 `<img>` 标签或占位 div
- 推荐尺寸：400×400px

### 3. 替换简历 PDF

将你的真实简历 PDF 替换 **`docs/resume/resume.pdf`** 即可。

### 4. 添加或修改项目

在 **`docs/index.html`** 中找到 **Projects** 区域（`<section id="projects">`）。
每个项目是一个 `<div class="project-card">` 代码块——复制、粘贴、编辑即可。

### 5. 添加或修改论文

在 **`docs/index.html`** 中找到 **Publications** 区域（`<section id="publications">`）。
每篇论文是一个 `<div class="pub-item">` 代码块。

### 6. 修改样式

所有样式在 **`docs/css/style.css`** 中。CSS 变量（颜色、阴影等）在文件顶部：

```css
:root {
    --color-primary: #1a56db;   /* 主色 */
    --color-accent: #06b6d4;    /* 强调色 */
    --color-bg: #f8fafc;        /* 页面背景色 */
    ...
}
```

### 7. 修改交互行为

所有 JavaScript 在 **`docs/js/main.js`** 中。

---

## 📤 如何在 GitHub Pages 上发布

1. 将仓库推送到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "初始化：个人求职简历网站"
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```

2. 在 GitHub 上打开你的仓库 → 点击 **Settings**

3. 左侧找到 **Pages**（在 "Code and automation" 分类下）

4. 在 **Build and deployment** 中配置：
   - **Source**：`Deploy from a branch`
   - **Branch**：`main`
   - **Folder**：`/docs`

5. 点击 **Save**

6. 等待 1–2 分钟，你的网站将发布在：
   ```
   https://<你的用户名>.github.io/<仓库名>/
   ```

---

## 💻 本地预览

因为这是纯静态网站，不需要任何服务器：

### 方式一：直接打开
在文件管理器中双击 `docs/index.html` 即可。

### 方式二：使用 VS Code Live Server
1. 在 VS Code 中安装 **Live Server** 插件
2. 右键 `docs/index.html` → **Open with Live Server**

### 方式三：使用 Python HTTP 服务
```bash
cd docs
python -m http.server 8000
# 然后在浏览器中打开 http://localhost:8000
```

---

## ✨ 功能特性

- ✅ 单页滚动设计，包含 12 个模块
- ✅ 完全响应式（电脑、平板、手机）
- ✅ 手机端汉堡菜单折叠导航
- ✅ 导航平滑滚动
- ✅ 返回顶部按钮
- ✅ 一键复制邮箱
- ✅ 滚动时导航栏增加阴影
- ✅ 简洁专业的科技蓝主题
- ✅ 求职导向的页面布局
- ✅ 零依赖（图标使用 Font Awesome CDN，不影响基本显示）
- ✅ 所有路径使用相对路径——适用于任意子目录部署

---

## 🎨 配色方案

| 用途 | 颜色值 |
|---|---|
| 主色 | `#1a56db`（深蓝） |
| 强调色 | `#06b6d4`（青色） |
| 背景色 | `#f8fafc`（浅灰白） |
| 卡片 | `#ffffff`（白色） |
| 正文 | `#334155`（深灰） |
| 标题 | `#0f172a`（近黑色） |

---

## 📄 许可证

MIT — 欢迎自由使用和修改，用于你自己的作品集网站。

---

## 🙋‍♂️ 联系方式

- **姓名**：胡瑞祥 / Ruixiang Hu
- **邮箱**：your_email@example.com（请替换为你的真实邮箱）
- **GitHub**：[github.com/yourname](https://github.com/yourname)（请替换为你的真实账号）
- **所在地**：Zhengzhou, China
