# Claude Code 项目需求文档：个人简历网站制作

## 1. 项目目标

请帮我从零开始制作一个**个人简历网站 / 学术个人主页**，用于展示我的个人简介、教育背景、研究方向、项目经历、论文成果、技能栈、获奖经历和联系方式。

网站风格要求：**简洁、专业、学术感、适合研究生/科研方向求职展示**。  
不要做得太花哨，重点突出科研经历、项目能力和工程实践能力。

---

## 2. 技术栈要求

优先使用以下技术栈：

- 前端框架：`React + Vite`
- 样式：普通 CSS 或 Tailwind CSS（二选一，推荐 Tailwind CSS）
- 图标：可使用 `lucide-react` 或其他轻量图标库
- 页面类型：单页滚动式个人网站
- 数据管理：尽量把个人信息写在一个单独的配置文件中，例如：
  - `src/data/profile.js`
  - 或 `src/data/profile.ts`

要求代码结构清晰，方便我以后修改个人信息。

---

## 3. 网站整体结构

请制作一个单页网站，页面从上到下包括以下模块：

1. 顶部导航栏
2. 首页 Hero 区域
3. 关于我 About
4. 教育背景 Education
5. 研究方向 Research Interests
6. 项目经历 Projects
7. 论文与成果 Publications
8. 技能栈 Skills
9. 获奖与证书 Awards
10. 联系方式 Contact
11. 页脚 Footer

导航栏点击后可以平滑滚动到对应模块。

---

## 4. 页面内容要求

### 4.1 顶部导航栏

包含以下导航项：

- Home
- About
- Education
- Research
- Projects
- Publications
- Skills
- Contact

要求：

- 桌面端横向导航
- 移动端适配，可折叠菜单
- 页面滚动时导航栏固定在顶部
- 背景可以略微透明或带阴影

---

### 4.2 首页 Hero 区域

展示以下内容：

- 姓名：`胡瑞祥`
- 英文名或拼音：`Ruixiang Hu`
- 身份定位：`Graduate Student | Wearable Sensing | Gait Recognition | Deep Learning`
- 一段简短介绍：

```text
I am a graduate student focusing on wearable sensor-based gait analysis, human activity recognition, and deep learning methods for rehabilitation and intelligent health monitoring.
```

也可以提供中文版本：

```text
我主要研究基于可穿戴传感器的人体步态识别、行为识别、康复监测以及深度学习模型在智能可穿戴系统中的应用。
```

Hero 区域需要包含：

- 一个头像占位区域
- “View Projects” 按钮
- “Contact Me” 按钮
- 可以放 GitHub / Email / Google Scholar / ORCID 的图标链接，先用占位链接

---

### 4.3 关于我 About

内容方向：

```text
我是一名从事智能可穿戴与人体运动分析方向研究的研究生，研究兴趣包括可穿戴传感器数据分析、步态识别、异常步态识别、跨受试者泛化、联邦学习、自监督学习、物理信息神经网络以及边缘设备部署等。
```

要求：

- 不要写得太夸张
- 表达要正式、自然
- 可以同时支持中文和英文内容
- 用卡片或两栏布局展示

---

### 4.4 教育背景 Education

请做成时间线或卡片形式。

示例内容：

```text
Zhongyuan University of Technology
Master Student
Research Area: Wearable Sensing, Gait Analysis, Human Activity Recognition
```

字段包括：

- 学校
- 学位
- 时间
- 研究方向
- 主要课程或技能

时间先用占位符，例如：`2024 - Present`，方便我后续修改。

---

### 4.5 研究方向 Research Interests

使用卡片形式展示，每个方向包含标题、简短说明和图标。

研究方向包括：

1. Wearable Sensor-based Gait Recognition  
   基于足底压力与 IMU 的步态识别和异常步态分析。

2. Human Activity Recognition  
   基于深度学习的人体行为识别与跨受试者泛化研究。

3. Physics-informed Learning  
   探索 COP、GRF、步态相位等生物力学先验在深度学习模型中的融合方式。

4. Self-supervised Learning  
   面向可穿戴传感器数据的 MAE、自监督预训练和少标签下游分类。

5. Edge Deployment  
   面向 Jetson、Arduino、移动端 App 等设备的模型部署与实时推理。

---

### 4.6 项目经历 Projects

请制作项目卡片，每个项目包括：

- 项目名称
- 项目简介
- 使用技术
- 主要贡献
- 项目链接按钮，先用占位链接
- 可选：项目图片占位

示例项目：

#### Project 1: Wearable Sensor-based Abnormal Gait Recognition

简介：

```text
A gait recognition system based on plantar pressure and IMU signals, aiming to identify different simulated abnormal gait patterns under cross-subject settings.
```

技术标签：

```text
Python, PyTorch, CNN, LSTM, IMU, Plantar Pressure, LOSO
```

主要贡献：

- 设计双分支深度学习模型融合压力与 IMU 数据
- 引入 COP、生物力学先验和条件调制机制
- 采用 LOSO 跨受试者验证评估模型泛化能力

#### Project 2: Multi-task Learning for Activity Recognition and Knee Angle Estimation

简介：

```text
A CNN-LSTM based multi-task learning framework for simultaneous activity classification and bilateral knee angle regression.
```

技术标签：

```text
PyTorch, CNN-LSTM, Multi-task Learning, Regression, Classification
```

主要贡献：

- 实现活动分类与左右膝关节角度预测
- 设计共享特征提取层与多任务输出头
- 记录训练日志、评估指标和可视化结果

#### Project 3: Self-supervised Learning for Wearable HAR

简介：

```text
A masked autoencoder pretraining framework for wearable sensor-based human activity recognition under LOSO evaluation.
```

技术标签：

```text
MAE, Self-supervised Learning, HAR, LOSO, PyTorch
```

主要贡献：

- 实现基于时间 patch masking 的 MAE 预训练
- 比较 Scratch-FT、MAE-Linear、MAE-FT 和 MAE-FT-DLR
- 分析少标签场景下自监督预训练的作用

---

### 4.7 论文与成果 Publications

做成列表或卡片形式。

由于我后续会补充真实论文信息，请先使用占位内容：

```text
[1] Ruixiang Hu, Yan Wang, et al. Title of the paper. Conference / Journal, Year.
[2] Ruixiang Hu, Yan Wang, et al. Title of the paper. Conference / Journal, Year.
```

每条论文包含：

- 论文标题
- 作者
- 期刊/会议
- 年份
- PDF / Code / BibTeX 按钮，占位即可

要求：
- 样式要适合学术个人主页
- 支持后续继续添加论文

---

### 4.8 技能栈 Skills

请按类别展示：

#### Programming

- Python
- MATLAB
- C / C++
- Java / Android Basics

#### Deep Learning

- PyTorch
- CNN
- LSTM / BiLSTM
- Transformer
- Self-supervised Learning
- Multi-task Learning

#### Wearable Sensing

- IMU Signal Processing
- Plantar Pressure Analysis
- Gait Event Detection
- COP Feature Extraction
- Sensor Data Preprocessing

#### Tools

- Git / GitHub
- Linux / Ubuntu
- PyCharm
- VS Code
- Zotero
- LaTeX

可以用进度条、标签云或卡片展示，但不要太复杂。

---

### 4.9 获奖与证书 Awards

先放占位内容，方便以后修改：

```text
- Scholarship / Award Name, Year
- Competition / Project Award, Year
- Certificate Name, Year
```

要求：
- 卡片或时间线布局
- 不要占据太多页面空间

---

### 4.10 联系方式 Contact

展示以下联系方式：

- Email：`your_email@example.com`
- GitHub：`https://github.com/yourname`
- Google Scholar：占位链接
- ORCID：占位链接
- Location：`Zhengzhou, China`

要求：

- 做一个简洁的联系卡片
- 可以有复制邮箱按钮
- 可以有外部链接图标
- 不要做复杂后端表单，静态网站即可

---

## 5. 视觉风格要求

整体风格：

- 简洁
- 专业
- 学术感
- 适合个人简历和科研主页
- 背景以浅色为主，也可以支持深色模式

颜色建议：

- 主色：深蓝色 / 靛蓝色 / 科技蓝
- 背景：浅灰白
- 卡片：白色
- 文字：深灰色
- 强调色：蓝色或青色

排版要求：

- 字体清晰，中文和英文都要美观
- 页面留白充足
- 卡片间距统一
- 移动端和桌面端都要美观
- 不要过多动画，适当使用 hover 效果即可

---

## 6. 响应式要求

必须适配：

- 桌面端
- 平板端
- 手机端

要求：

- 移动端导航栏可折叠
- 项目卡片在小屏幕下变为单列
- 字体和间距在手机端不要过大
- 页面不能横向溢出

---

## 7. 文件结构建议

请按照以下结构创建项目：

```text
resume-website/
├── package.json
├── index.html
├── vite.config.js
├── README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── profile.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Research.jsx
│   │   ├── Projects.jsx
│   │   ├── Publications.jsx
│   │   ├── Skills.jsx
│   │   ├── Awards.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── assets/
│       └── avatar-placeholder.png
```

如果使用 Tailwind CSS，请正确配置：

- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css`

---

## 8. 数据配置要求

请尽量把个人信息集中写到 `src/data/profile.js` 中，例如：

```javascript
export const profile = {
  name: "胡瑞祥",
  englishName: "Ruixiang Hu",
  title: "Graduate Student | Wearable Sensing | Gait Recognition | Deep Learning",
  email: "your_email@example.com",
  location: "Zhengzhou, China",
  links: {
    github: "https://github.com/yourname",
    scholar: "#",
    orcid: "#"
  },
  researchInterests: [],
  projects: [],
  publications: [],
  skills: [],
  awards: []
};
```

这样我以后只需要修改这个文件，就可以更新网站内容。

---

## 9. 交互功能要求

请实现以下基础交互：

1. 导航栏平滑滚动
2. 返回顶部按钮，可选
3. 项目卡片 hover 效果
4. 复制邮箱按钮
5. 移动端菜单展开/收起
6. 深色模式切换，可选，如果实现不要影响整体简洁性

---

## 10. 部署要求

请在 `README.md` 中写清楚如何运行和部署。

至少包括：

### 本地运行

```bash
npm install
npm run dev
```

### 打包

```bash
npm run build
```

### 预览

```bash
npm run preview
```

### GitHub Pages 部署

如果项目适合部署到 GitHub Pages，请帮我配置或说明：

```bash
npm run build
```

然后在 README 中说明如何上传到 GitHub 并开启 GitHub Pages。

如果需要安装 `gh-pages`，请给出具体步骤。

---

## 11. 代码质量要求

请注意：

- 组件拆分清晰
- 命名规范
- 不要把所有代码都写在一个文件里
- 不要使用过重的依赖
- 不需要后端
- 不需要数据库
- 不需要登录系统
- 不要引入复杂 CMS
- 保证 `npm install` 和 `npm run dev` 可以正常运行
- 页面不要出现明显报错
- 控制台不要有无意义报错

---

## 12. 最终交付内容

请完成以下内容：

1. 创建完整的 React + Vite 项目
2. 完成所有页面模块
3. 完成响应式样式
4. 将个人信息集中写入配置文件
5. 编写 README.md
6. 确保项目可以本地运行
7. 给出后续如何修改个人信息、添加论文、添加项目的说明

---

## 13. 额外要求

请在完成后告诉我：

1. 项目如何启动
2. 主要文件在哪里
3. 如何修改个人信息
4. 如何替换头像
5. 如何发布到 GitHub Pages

请直接开始创建项目，不需要再询问我是否确认。  
如果某些个人信息不确定，请先使用占位符，并在代码中用清楚的注释标明我后续需要替换的位置。
