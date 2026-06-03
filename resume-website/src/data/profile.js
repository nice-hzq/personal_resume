/**
 * ====================================
 * 求职简历数据配置文件
 * 修改此文件即可更新网站所有内容
 * ====================================
 *
 * 后续替换指引：
 * 1. 搜索 "TODO" 查看所有需要替换的占位符
 * 2. 搜索 "#" 替换所有占位链接
 * 3. 替换 src/assets/avatar.jpg 为你的真实头像
 * 4. 替换 public/resume.pdf 为你的真实简历
 */

export const profile = {
  // ========== 基本信息 ==========
  name: "胡瑞祥",
  englishName: "Ruixiang Hu",
  role: "AI & Wearable Sensing Algorithm Engineer Candidate",
  email: "your_email@example.com", // TODO: 替换为真实邮箱
  location: "Zhengzhou, China",

  // ========== 求职目标岗位 ==========
  jobTargets: [
    "AI Algorithm Engineer",
    "Deep Learning Engineer",
    "Wearable Sensing Algorithm Engineer",
    "Human Activity Recognition Engineer",
    "Edge AI Engineer",
  ],

  // ========== 链接 ==========
  links: {
    github: "https://github.com/yourname", // TODO: 替换
    scholar: "#", // TODO: 替换为 Google Scholar
    orcid: "#", // TODO: 替换为 ORCID
    email: "your_email@example.com",
  },

  // ========== Hero 区域 ==========
  hero: {
    title: "AI & Wearable Sensing Algorithm Engineer Candidate",
    subtitle:
      "Graduate student focusing on deep learning, wearable sensor-based gait recognition, human activity recognition, and edge AI deployment.",
    subtitleZh:
      "我主要研究可穿戴传感器、步态识别、人体行为识别和深度学习模型在智能康复与健康监测中的应用，关注算法建模、跨受试者泛化和边缘设备部署。",
  },

  // ========== About 个人简介（求职导向） ==========
  about: {
    en: "I am a graduate student with research and project experience in wearable sensor-based human motion analysis, gait recognition, and deep learning. My work focuses on building practical AI models from sensor data, including IMU signals, plantar pressure data, and biomechanical prior features. I am interested in applying machine learning and deep learning methods to intelligent rehabilitation, health monitoring, and edge AI systems.",
    zh: "我是一名从事智能可穿戴与人体运动分析方向研究的研究生，具有可穿戴传感器数据处理、深度学习建模、步态识别、异常步态识别和跨受试者实验评估经验。我的研究和项目主要围绕 IMU、足底压力、生物力学先验特征以及深度学习模型展开，并关注模型在边缘设备和实际应用场景中的部署。",
    highlights: [
      "Wearable Sensing",
      "Deep Learning",
      "Gait Recognition",
      "Human Activity Recognition",
      "PyTorch",
      "Edge AI",
      "Research + Engineering",
    ],
  },

  // ========== 求职目标岗位卡片 ==========
  targetRoles: [
    {
      title: "AI Algorithm Engineer",
      description:
        "Deep learning model design, training, evaluation, and performance analysis using PyTorch.",
    },
    {
      title: "Wearable Sensing Algorithm Engineer",
      description:
        "Sensor signal processing, IMU and plantar pressure data analysis, gait feature extraction, and motion recognition.",
    },
    {
      title: "Human Activity Recognition Engineer",
      description:
        "Human activity recognition, abnormal gait recognition, cross-subject validation, and time-series classification.",
    },
    {
      title: "Edge AI / Deployment Engineer",
      description:
        "Model deployment on embedded platforms, mobile applications, Jetson devices, and real-time inference systems.",
    },
  ],

  // ========== 核心技能 ==========
  skills: {
    programming: {
      label: "Programming",
      items: [
        { name: "Python", level: "Experienced" },
        { name: "MATLAB", level: "Familiar" },
        { name: "C / C++", level: "Familiar" },
        { name: "Java / Android Basics", level: "Basic" },
        { name: "SQL Basics", level: "Basic" },
      ],
    },
    deepLearning: {
      label: "Deep Learning",
      items: [
        { name: "PyTorch", level: "Experienced" },
        { name: "CNN", level: "Experienced" },
        { name: "LSTM / BiLSTM", level: "Experienced" },
        { name: "Transformer", level: "Familiar" },
        { name: "Multi-task Learning", level: "Experienced" },
        { name: "Self-supervised Learning", level: "Familiar" },
        { name: "Model Training & Evaluation", level: "Experienced" },
      ],
    },
    sensorData: {
      label: "Sensor Data Processing",
      items: [
        { name: "IMU Signal Processing", level: "Experienced" },
        { name: "Plantar Pressure Analysis", level: "Experienced" },
        { name: "Time-series Data Processing", level: "Experienced" },
        { name: "Gait Event Detection", level: "Experienced" },
        { name: "COP Feature Extraction", level: "Experienced" },
        { name: "Data Normalization", level: "Experienced" },
        { name: "Sliding Window Segmentation", level: "Experienced" },
      ],
    },
    mlEvaluation: {
      label: "ML Evaluation",
      items: [
        { name: "LOSO Cross-validation", level: "Experienced" },
        { name: "K-fold Cross-validation", level: "Experienced" },
        { name: "Confusion Matrix", level: "Experienced" },
        { name: "Accuracy / Precision / Recall / F1", level: "Experienced" },
        { name: "RMSE / MAE", level: "Experienced" },
        { name: "Ablation Study", level: "Experienced" },
      ],
    },
    engineering: {
      label: "Engineering Tools",
      items: [
        { name: "Git / GitHub", level: "Experienced" },
        { name: "Linux / Ubuntu", level: "Experienced" },
        { name: "PyCharm", level: "Experienced" },
        { name: "VS Code", level: "Experienced" },
        { name: "Conda", level: "Experienced" },
        { name: "LaTeX", level: "Familiar" },
        { name: "Zotero", level: "Familiar" },
      ],
    },
    deployment: {
      label: "Deployment",
      items: [
        { name: "Jetson Basics", level: "Basic" },
        { name: "Arduino Basics", level: "Basic" },
        { name: "TFLite Basics", level: "Basic" },
        { name: "Mobile App Integration Basics", level: "Basic" },
        { name: "Real-time Data Visualization", level: "Familiar" },
      ],
    },
  },

  // ========== 重点项目经历 ==========
  projects: [
    {
      name: "Wearable Sensor-based Abnormal Gait Recognition",
      type: "Deep Learning | Wearable Sensing | Gait Recognition",
      description:
        "Built a wearable sensor-based abnormal gait recognition framework using plantar pressure and IMU data. The system focuses on recognizing multiple simulated abnormal gait patterns under cross-subject evaluation.",
      techs: ["Python", "PyTorch", "CNN", "LSTM", "Transformer", "IMU", "Plantar Pressure", "LOSO"],
      work: [
        "Designed a dual-branch deep learning model to fuse plantar pressure and IMU signals",
        "Extracted biomechanical prior features such as COP-related features",
        "Conducted LOSO cross-subject validation to evaluate generalization ability",
        "Compared multiple baseline models and analyzed the influence of prior-guided modulation",
        "Generated confusion matrices, classification reports, and ablation results",
      ],
      workZh: [
        "设计压力与 IMU 双分支深度学习模型",
        "引入 COP 等生物力学先验特征",
        "使用 LOSO 跨受试者验证评估泛化能力",
        "对多个模型进行对比实验和消融分析",
        "输出混淆矩阵、分类报告和实验结果可视化",
      ],
      link: "#", // TODO: 替换为项目链接
    },
    {
      name: "Multi-task Learning for Activity Recognition and Knee Angle Estimation",
      type: "Multi-task Learning | Human Motion Analysis",
      description:
        "Developed a CNN-LSTM based multi-task learning framework for simultaneous human activity classification and bilateral knee angle regression.",
      techs: ["Python", "PyTorch", "CNN-LSTM", "Multi-task Learning", "Regression", "Classification"],
      work: [
        "Built a shared feature extraction network with classification and regression heads",
        "Implemented activity classification and left/right knee angle prediction",
        "Designed training, validation, logging, and visualization pipelines",
        "Evaluated classification accuracy and regression errors using RMSE",
        "Analyzed the relationship between activity recognition and joint angle estimation",
      ],
      workZh: [
        "搭建 CNN-LSTM 多任务学习模型",
        "同时实现活动分类和左右膝关节角度预测",
        "编写训练、验证、日志记录和可视化流程",
        "使用分类准确率和 RMSE 评估模型性能",
        "分析分类任务与回归任务之间的关系",
      ],
      link: "#",
    },
    {
      name: "Self-supervised Learning for Wearable HAR",
      type: "Self-supervised Learning | Human Activity Recognition",
      description:
        "Implemented a masked autoencoder pretraining framework for wearable sensor-based human activity recognition under LOSO evaluation.",
      techs: ["Python", "PyTorch", "MAE", "Self-supervised Learning", "HAR", "LOSO"],
      work: [
        "Implemented temporal patch masking for wearable sensor time-series data",
        "Conducted MAE pretraining without using activity labels",
        "Compared Scratch-FT, MAE-Linear, MAE-FT, and MAE-FT-DLR strategies",
        "Evaluated performance under 10% and 100% label settings",
        "Analyzed whether self-supervised pretraining improves downstream classification",
      ],
      workZh: [
        "实现面向传感器时序数据的 MAE 自监督预训练",
        "设计时间 patch masking 机制",
        "对比 Scratch-FT、MAE-Linear、MAE-FT 和 MAE-FT-DLR",
        "分析少标签和全标签场景下的下游分类表现",
        "使用 LOSO 设置评估跨受试者泛化能力",
      ],
      link: "#",
    },
    {
      name: "Wearable Gait Analysis System with IMU Sensors",
      type: "Signal Processing | Wearable System | Real-time Analysis",
      description:
        "Developed a wearable gait analysis pipeline using foot-mounted and waist-mounted IMU sensors for gait event detection and spatiotemporal gait parameter estimation.",
      techs: ["Python", "IMU", "Signal Processing", "Filtering", "ZUPT", "Gait Event Detection"],
      work: [
        "Processed accelerometer and gyroscope signals from wearable IMU sensors",
        "Implemented gait event detection including heel strike, toe off, stance phase, and swing phase",
        "Estimated gait parameters such as step length, cadence, walking speed, and support time",
        "Visualized sensor signals, detected events, and gait phase segmentation results",
        "Explored real-time visualization and hardware-related deployment",
      ],
      workZh: [
        "处理足部和腰部 IMU 数据",
        "实现步态事件检测和步态相位划分",
        "估计步长、步频、速度、支撑相和摆动相等指标",
        "完成信号可视化和检测结果可视化",
        "探索实时可视化和硬件部署应用",
      ],
      link: "#",
    },
  ],

  // ========== 科研与工程经历 ==========
  experience: [
    {
      title: "Graduate Researcher",
      organization: "Zhongyuan University of Technology",
      period: "2024 - Present",
      details: [
        "Conducted research on wearable sensor-based gait recognition and human activity recognition",
        "Built deep learning models for sensor time-series classification and regression",
        "Designed cross-subject experiments and ablation studies",
        "Prepared academic manuscripts, tables, figures, and experimental reports",
        "Explored embedded and edge deployment for wearable sensing systems",
      ],
      detailsZh: [
        "开展可穿戴传感器步态识别与人体行为识别研究",
        "搭建深度学习模型进行时序数据分类与回归",
        "设计跨受试者验证、消融实验和对比实验",
        "撰写论文、整理实验结果、绘制图表",
        "探索模型在边缘设备和可穿戴系统中的部署",
      ],
    },
  ],

  // ========== 论文与成果 ==========
  publications: [
    {
      title: "Title of the paper — placeholder",
      authors: "Ruixiang Hu, Yan Wang, et al.",
      venue: "Conference / Journal",
      year: "2025",
      links: {
        pdf: "#", // TODO: 替换为 PDF 链接
        code: "#", // TODO: 替换为代码链接
        bibtex: "#", // TODO: 替换为 BibTeX 链接
      },
    },
    {
      title: "Title of the paper — placeholder",
      authors: "Ruixiang Hu, Yan Wang, et al.",
      venue: "Conference / Journal",
      year: "2025",
      links: {
        pdf: "#",
        code: "#",
        bibtex: "#",
      },
    },
  ],

  // ========== 教育背景 ==========
  education: [
    {
      school: "Zhongyuan University of Technology",
      degree: "Master Student",
      period: "2024 - Present",
      researchArea: "Wearable Sensing, Gait Analysis, Human Activity Recognition",
      courses: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Signal Processing",
        "Embedded System Basics",
        "Data Analysis",
      ],
    },
    // TODO: 添加本科教育经历
    // {
    //   school: "学校名称",
    //   degree: "Bachelor of Engineering",
    //   period: "2020 - 2024",
    //   researchArea: "研究方向",
    //   courses: ["课程1", "课程2"],
    // },
  ],

  // ========== 导航项 ==========
  navItems: [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Experience", href: "experience" },
    { label: "Publications", href: "publications" },
    { label: "Resume", href: "resume" },
    { label: "Contact", href: "contact" },
  ],
};

/**
 * 熟练程度对应的样式
 */
export const skillLevelStyles = {
  Experienced: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Familiar: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  Basic: "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};
