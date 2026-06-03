# Personal Resume Website — Ruixiang Hu

基于 **React + Vite + Tailwind CSS v4** 构建的个人学术主页 / 简历网站。

## 功能特性

- 🎯 单页滚动式设计，包含 10 个完整模块
- 🌓 支持浅色 / 深色模式切换
- 📱 完全响应式，适配桌面、平板、手机
- 🧩 个人信息集中配置，修改方便
- 🎨 简洁专业的学术风格
- ⚡ Vite 构建，开发体验极快
- 🔗 平滑滚动导航，返回顶部按钮
- 📋 一键复制邮箱地址

## 目录结构

```
resume-website/
├── index.html                    # HTML 入口
├── package.json
├── vite.config.js                # Vite + Tailwind 配置
├── README.md
└── src/
    ├── main.jsx                  # React 入口
    ├── App.jsx                   # 根组件（组装所有模块）
    ├── index.css                 # Tailwind + 全局样式
    ├── data/
    │   └── profile.js            # ★ 个人信息配置文件（修改此文件更新网站）
    ├── components/
    │   ├── Navbar.jsx            # 顶部导航栏
    │   ├── Hero.jsx              # 首页 Hero 区域
    │   ├── About.jsx             # 关于我
    │   ├── Education.jsx         # 教育背景
    │   ├── Research.jsx          # 研究方向
    │   ├── Projects.jsx          # 项目经历
    │   ├── Publications.jsx      # 论文与成果
    │   ├── Skills.jsx            # 技能栈
    │   ├── Awards.jsx            # 获奖与证书
    │   ├── Contact.jsx           # 联系方式
    │   ├── Footer.jsx            # 页脚
    │   ├── ScrollToTop.jsx       # 返回顶部按钮
    │   └── Icons.jsx             # 自定义图标（GitHub 等）
    └── assets/                   # 静态资源（头像图片等）
```

## 本地运行

```bash
# 1. 进入项目目录
cd resume-website

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 在浏览器中打开提示的地址（通常是 http://localhost:5173）
```

## 打包部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

构建产物在 `dist/` 目录下，可直接部署到任何静态托管服务。

## GitHub Pages 部署

### 方法一：使用 gh-pages（推荐）

```bash
# 1. 安装 gh-pages
npm install --save-dev gh-pages

# 2. 在 package.json 中添加以下配置：
# "homepage": "https://<你的GitHub用户名>.github.io/<仓库名>"
# "scripts": {
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
# }

# 3. 部署
npm run deploy
```

### 方法二：GitHub Actions

参考 [Vite 官方部署指南](https://vite.dev/guide/static-deploy.html#github-pages)。

### 注意事项

- 如果部署到 `https://<username>.github.io/<repo>/`，需要在 `vite.config.js` 中设置 `base: '/<repo>/'`
- 如果使用自定义域名，需要添加 CNAME 文件到 `public/` 目录

## 如何修改个人信息

所有个人信息集中在 **`src/data/profile.js`** 文件中。只需修改此文件即可更新网站所有内容。

### 修改基本信息

```javascript
export const profile = {
  name: "你的姓名",
  englishName: "Your English Name",
  title: "你的身份/头衔",
  location: "你所在的城市",
  email: "你的邮箱",
  // ...
};
```

### 替换头像

1. 将你的头像图片放到 `src/assets/` 目录下
2. 修改 `Hero.jsx` 中的头像占位区域，将占位 div 替换为 `<img>` 标签：

```jsx
// 将头像占位 div 替换为：
<img
  src="/src/assets/your-avatar.jpg"
  alt="Ruixiang Hu"
  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg"
/>
```

### 添加教育经历

在 `profile.js` 的 `education` 数组中追加，格式同上。

### 添加项目

在 `profile.js` 的 `projects` 数组中追加，包含 name, description, techs, contributions, link 字段。

### 添加论文

在 `profile.js` 的 `publications` 数组中追加，包含 title, authors, venue, year, links 字段。

### 修改技能

在 `profile.js` 的 `skills` 对象中修改对应分类的数组。

### 替换占位链接

全局搜索 `#` 或 `TODO` 替换为你的真实链接：GitHub、Google Scholar、ORCID、各项目链接。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 |
| 构建工具 | Vite 8 |
| 样式 | Tailwind CSS v4 |
| 图标 | lucide-react |
| 字体 | Inter + Noto Sans SC (Google Fonts) |

## 自定义主题色

在 `src/index.css` 的 `@theme` 块中修改 CSS 变量：

```css
@theme {
  --color-primary: #1e3a5f;    /* 主色 */
  --color-accent: #3b82f6;     /* 强调色 */
  --color-bg: #f8fafc;         /* 背景色 */
  /* ... */
}
```

## License

MIT
