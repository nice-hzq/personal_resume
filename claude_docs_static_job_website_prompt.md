# Claude Code 项目需求文档：docs 目录版求职个人简历网站

## 1. 项目目标

请帮我制作一个**可以直接通过 GitHub Pages 发布的个人求职简历网站**。

重点要求：

- 不要做成复杂的 React / Vite / Node 项目
- 不需要 `npm install`
- 不需要 `npm run build`
- 不需要后端
- 不需要数据库
- 不需要复杂部署流程
- 最终网站文件直接放在 `docs/` 文件夹中
- 我希望在 GitHub Pages 中选择：

```text
Deploy from a branch
main 分支
/docs 文件夹
```

然后就可以发布。

最终访问形式类似：

```text
https://<你的用户名>.github.io/<仓库名>/
```

---

## 2. 网站定位

这是一个**求职导向的个人简历网站 / Portfolio Website**，用于找工作、实习或展示个人项目能力。

网站不是纯学术主页，而是更偏向：

- 技术求职简历网站
- 个人作品集网站
- AI / 深度学习 / 可穿戴传感器方向项目展示网站
- 给招聘者快速了解我的技能、项目经验和岗位匹配度

网站核心目标：

```text
让招聘者在 1-2 分钟内看清楚我是谁、会什么、做过什么项目、适合什么岗位、如何联系我。
```

---

## 3. 技术要求

请使用最简单、最稳定的静态网页技术：

- HTML
- CSS
- JavaScript

不要使用：

- React
- Vue
- Vite
- Next.js
- Tailwind 构建流程
- Node.js 后端
- 数据库
- 登录系统
- GitHub Actions
- gh-pages 插件

可以使用：

- 原生 HTML / CSS / JS
- 少量 CDN 图标库，若使用 CDN，请保证不影响页面基本显示
- 也可以不用任何外部依赖

要求：

- 所有页面文件直接放在 `docs/` 目录
- 所有路径使用相对路径，例如：

```html
<link rel="stylesheet" href="./css/style.css">
<script src="./js/main.js"></script>
<img src="./assets/avatar.jpg">
```

这样 GitHub Pages 发布到子路径时不会出错。

---

## 4. 推荐文件结构

请按照以下结构生成项目：

```text
personal-job-website/
├── README.md
└── docs/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── assets/
    │   ├── avatar-placeholder.png
    │   └── project-placeholder.png
    └── resume/
        └── resume.pdf
```

说明：

- `docs/index.html` 是网站首页
- `docs/css/style.css` 存放全部样式
- `docs/js/main.js` 存放交互逻辑
- `docs/assets/` 存放头像、项目图片等资源
- `docs/resume/resume.pdf` 是简历文件，先放占位文件或说明，后续我自己替换

---

## 5. 页面整体结构

请制作一个单页滚动式网站，从上到下包括：

1. 顶部导航栏
2. 首页 Hero / 求职定位
3. 关于我 About
4. 求职方向 Target Roles
5. 核心技能 Skills
6. 重点项目 Projects
7. 科研与工程经历 Experience
8. 教育背景 Education
9. 论文与成果 Publications
10. 简历下载 Resume
11. 联系方式 Contact
12. 页脚 Footer

导航栏点击后可以平滑滚动到对应模块。

---

## 6. 视觉风格要求

整体风格：

- 简洁
- 专业
- 技术感
- 求职导向
- 不要太花哨
- 不要太学术化
- 重点突出项目和技能

颜色建议：

- 主色：深蓝色 / 科技蓝
- 背景：浅灰白
- 卡片：白色
- 文字：深灰色
- 强调色：蓝色或青色

布局要求：

- 首页第一屏要清楚展示姓名、方向、按钮
- 项目经历要放在页面核心位置
- 论文成果可以保留，但不要放得太靠前
- 页面留白充足
- 卡片风格统一
- 按钮样式统一

---

## 7. 个人基本信息

请在页面中使用以下占位信息，后续我会自己修改。

姓名：

```text
胡瑞祥
Ruixiang Hu
```

求职定位：

```text
AI & Wearable Sensing Algorithm Engineer Candidate
```

中文定位：

```text
人工智能算法 / 深度学习 / 可穿戴传感器算法 / 人体行为识别 / 边缘智能部署
```

简介英文：

```text
Graduate student focusing on deep learning, wearable sensor-based gait recognition, human activity recognition, and edge AI deployment.
```

简介中文：

```text
我主要研究可穿戴传感器、步态识别、人体行为识别和深度学习模型在智能康复与健康监测中的应用，关注算法建模、跨受试者泛化和边缘设备部署。
```

联系方式占位：

```text
Email: your_email@example.com
GitHub: https://github.com/yourname
Location: Zhengzhou, China
Google Scholar: #
ORCID: #
```

---

## 8. 首页 Hero 模块

Hero 区域要突出求职身份。

包含：

- 姓名：胡瑞祥 / Ruixiang Hu
- 标题：AI & Wearable Sensing Algorithm Engineer Candidate
- 简短介绍
- 头像占位图
- 三个按钮：
  - View Projects
  - Download Resume
  - Contact Me
- GitHub / Email / Google Scholar / ORCID 链接

按钮行为：

- View Projects：跳转到 Projects 模块
- Download Resume：下载或打开 `./resume/resume.pdf`
- Contact Me：跳转到 Contact 模块

---

## 9. About 模块

请写成求职导向，而不是纯学术介绍。

参考内容：

```text
我是一名从事智能可穿戴与人体运动分析方向研究的研究生，具有可穿戴传感器数据处理、深度学习建模、步态识别、异常步态识别和跨受试者实验评估经验。我的研究和项目主要围绕 IMU、足底压力、生物力学先验特征以及深度学习模型展开，并关注模型在边缘设备和实际应用场景中的部署。
```

下方增加标签：

- Wearable Sensing
- Deep Learning
- Gait Recognition
- Human Activity Recognition
- PyTorch
- Edge AI
- Research + Engineering

---

## 10. Target Roles 求职方向模块

用 4 个卡片展示：

### AI Algorithm Engineer

```text
Deep learning model design, training, evaluation, and performance analysis using Python and PyTorch.
```

### Wearable Sensing Algorithm Engineer

```text
Sensor signal processing, IMU and plantar pressure data analysis, gait feature extraction, and motion recognition.
```

### Human Activity Recognition Engineer

```text
Human activity recognition, abnormal gait recognition, cross-subject validation, and time-series classification.
```

### Edge AI / Deployment Engineer

```text
Model deployment on embedded platforms, mobile applications, Jetson devices, and real-time inference systems.
```

---

## 11. Skills 核心技能模块

请用分组卡片或标签展示。不要使用虚假的百分比进度条。

### Programming

- Python
- MATLAB
- C / C++
- Java / Android Basics
- SQL Basics

### Deep Learning

- PyTorch
- CNN
- LSTM / BiLSTM
- Transformer
- Multi-task Learning
- Self-supervised Learning
- Model Training & Evaluation

### Sensor Data Processing

- IMU Signal Processing
- Plantar Pressure Analysis
- Time-series Data Processing
- Gait Event Detection
- COP Feature Extraction
- Data Normalization
- Sliding Window Segmentation

### Machine Learning Evaluation

- LOSO Cross-validation
- K-fold Cross-validation
- Confusion Matrix
- Accuracy / Precision / Recall / F1-score
- RMSE / MAE
- Ablation Study

### Engineering Tools

- Git / GitHub
- Linux / Ubuntu
- PyCharm
- VS Code
- Conda
- LaTeX
- Zotero

### Deployment

- Jetson Basics
- Arduino Basics
- TFLite Basics
- Mobile App Integration Basics
- Real-time Data Visualization

---

## 12. Projects 重点项目模块

这是网站最重要的部分，请重点设计。

每个项目卡片包括：

- 项目名称
- 项目类型
- 项目简介
- 技术栈标签
- 我的主要工作
- GitHub / Details 按钮，占位即可

---

### Project 1: Wearable Sensor-based Abnormal Gait Recognition

项目类型：

```text
Deep Learning | Wearable Sensing | Gait Recognition
```

简介：

```text
Built a wearable sensor-based abnormal gait recognition framework using plantar pressure and IMU data. The system focuses on recognizing multiple simulated abnormal gait patterns under cross-subject evaluation.
```

技术栈：

```text
Python, PyTorch, CNN, LSTM, Transformer, IMU, Plantar Pressure, LOSO
```

我的主要工作：

- 设计压力与 IMU 双分支深度学习模型
- 引入 COP 等生物力学先验特征
- 使用 LOSO 跨受试者验证评估泛化能力
- 对多个模型进行对比实验和消融分析
- 输出混淆矩阵、分类报告和实验结果可视化

---

### Project 2: Multi-task Learning for Activity Recognition and Knee Angle Estimation

项目类型：

```text
Multi-task Learning | Human Motion Analysis
```

简介：

```text
Developed a CNN-LSTM based multi-task learning framework for simultaneous human activity classification and bilateral knee angle regression.
```

技术栈：

```text
Python, PyTorch, CNN-LSTM, Multi-task Learning, Regression, Classification
```

我的主要工作：

- 搭建 CNN-LSTM 多任务学习模型
- 同时实现活动分类和左右膝关节角度预测
- 编写训练、验证、日志记录和可视化流程
- 使用分类准确率和 RMSE 评估模型性能
- 分析分类任务与回归任务之间的关系

---

### Project 3: Self-supervised Learning for Wearable HAR

项目类型：

```text
Self-supervised Learning | Human Activity Recognition
```

简介：

```text
Implemented a masked autoencoder pretraining framework for wearable sensor-based human activity recognition under LOSO evaluation.
```

技术栈：

```text
Python, PyTorch, MAE, Self-supervised Learning, HAR, LOSO
```

我的主要工作：

- 实现面向传感器时序数据的 MAE 自监督预训练
- 设计时间 patch masking 机制
- 对比 Scratch-FT、MAE-Linear、MAE-FT 和 MAE-FT-DLR
- 分析少标签和全标签场景下的下游分类表现
- 使用 LOSO 设置评估跨受试者泛化能力

---

### Project 4: Wearable Gait Analysis System with IMU Sensors

项目类型：

```text
Signal Processing | Wearable System | Real-time Analysis
```

简介：

```text
Developed a wearable gait analysis pipeline using foot-mounted and waist-mounted IMU sensors for gait event detection and spatiotemporal gait parameter estimation.
```

技术栈：

```text
Python, IMU, Signal Processing, Filtering, ZUPT, Gait Event Detection
```

我的主要工作：

- 处理足部和腰部 IMU 数据
- 实现步态事件检测和步态相位划分
- 估计步长、步频、速度、支撑相和摆动相等指标
- 完成信号可视化和检测结果可视化
- 探索实时可视化和硬件部署应用

---

## 13. Experience 科研与工程经历模块

做成时间线或卡片。

### Graduate Researcher

```text
Zhongyuan University of Technology
2024 - Present
```

内容：

- 开展可穿戴传感器步态识别与人体行为识别研究
- 搭建深度学习模型进行时序数据分类与回归
- 设计跨受试者验证、消融实验和对比实验
- 撰写论文、整理实验结果、绘制图表
- 探索模型在边缘设备和可穿戴系统中的部署

---

## 14. Education 教育背景模块

示例内容：

```text
Zhongyuan University of Technology
Master Student
Research Area: Wearable Sensing, Gait Analysis, Human Activity Recognition
2024 - Present
```

主要课程或技能：

- Machine Learning
- Deep Learning
- Neural Networks
- Signal Processing
- Embedded System Basics
- Data Analysis

---

## 15. Publications 论文与成果模块

论文模块保留，但不要放在项目模块前面。

先使用占位内容：

```text
[1] Ruixiang Hu, Yan Wang, et al. Title of the paper. Conference / Journal, Year.
[2] Ruixiang Hu, Yan Wang, et al. Title of the paper. Conference / Journal, Year.
```

每条论文包括：

- Title
- Authors
- Venue
- Year
- PDF / Code / BibTeX 按钮，占位即可

---

## 16. Resume 简历下载模块

请单独设计简历下载区域。

内容：

```text
如果您想进一步了解我的项目经历、技能背景和求职意向，欢迎下载我的简历或直接联系我。
```

按钮：

- Download Resume：链接到 `./resume/resume.pdf`
- Contact Me：跳转到 Contact 模块

注意：

- 如果暂时没有真实简历，请创建一个占位说明文件或保留链接路径
- 代码里注释清楚：后续把真实简历替换为 `docs/resume/resume.pdf`

---

## 17. Contact 联系方式模块

展示：

```text
Email: your_email@example.com
GitHub: https://github.com/yourname
Google Scholar: #
ORCID: #
Location: Zhengzhou, China
```

增加一句：

```text
目前我正在关注人工智能算法、可穿戴传感器算法、人体行为识别和边缘智能部署相关的实习与就业机会。
```

交互要求：

- 提供复制邮箱按钮
- 外部链接点击新窗口打开
- 不需要联系表单

---

## 18. 响应式要求

必须适配：

- 电脑
- 平板
- 手机

要求：

- 手机端导航栏可折叠
- 项目卡片小屏幕下单列显示
- 技能标签自动换行
- 页面不能横向溢出
- 字体在手机端不要过大

---

## 19. JavaScript 交互要求

在 `docs/js/main.js` 中实现：

1. 移动端菜单展开 / 收起
2. 点击导航后平滑滚动
3. 复制邮箱按钮
4. 返回顶部按钮
5. 滚动时导航栏增加阴影或背景变化

不要写复杂逻辑。

---

## 20. GitHub Pages 发布要求

请在 README.md 中写清楚以下发布步骤：

### 发布步骤

1. 将仓库推送到 GitHub。
2. 打开仓库页面。
3. 点击 `Settings`。
4. 左侧找到 `Pages` 或 `GitHub Pages`。
5. 在 `Source` 处选择 `Deploy from a branch`。
6. Branch 选择 `main`。
7. Folder 选择 `/docs`。
8. 点击 `Save`。
9. 等待几分钟，GitHub 会生成静态站点。

站点 URL 通常为：

```text
https://<你的用户名>.github.io/<仓库名>/
```

### 本地预览方式

由于这是纯静态网站，可以直接打开：

```text
docs/index.html
```

也可以用 VS Code 的 Live Server 插件预览。

不要在 README 里写 `npm install`、`npm run dev`、`npm run build`，因为这个项目不需要这些步骤。

---

## 21. README.md 要求

README.md 内容包括：

1. 项目简介
2. 目录结构
3. 如何修改个人信息
4. 如何替换头像
5. 如何替换简历
6. 如何添加项目
7. 如何添加论文
8. 如何使用 GitHub Pages 发布
9. 发布后的网址形式

README 示例说明：

```text
个人信息主要写在 docs/index.html 中。
样式在 docs/css/style.css 中修改。
交互逻辑在 docs/js/main.js 中修改。
头像替换 docs/assets/avatar-placeholder.png。
简历替换 docs/resume/resume.pdf。
```

---

## 22. 代码质量要求

请注意：

- HTML 结构清晰
- CSS 命名规范
- JS 简洁
- 注释适当
- 不要把样式全部写在 HTML 内
- 不要使用复杂依赖
- 不要出现横向滚动条
- 不要有明显控制台报错
- 所有按钮和导航链接都能正常工作
- 所有占位信息要容易替换

---

## 23. 最终交付内容

请最终创建：

```text
README.md
docs/index.html
docs/css/style.css
docs/js/main.js
docs/assets/avatar-placeholder.png
docs/assets/project-placeholder.png
docs/resume/resume.pdf
```

如果不能生成真实 PDF，可以先创建 `docs/resume/README.md` 说明：

```text
请将个人简历 PDF 命名为 resume.pdf，并放在此目录下。
```

最终请告诉我：

1. 哪个文件是首页
2. 如何本地预览
3. 如何修改个人信息
4. 如何替换头像
5. 如何替换简历
6. 如何在 GitHub Pages 中选择 `main` + `/docs` 发布

请直接开始创建项目，不需要再询问我是否确认。
