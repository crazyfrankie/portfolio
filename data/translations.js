export const translations = {
  en: {
    // Hero Section
    hero: {
      title: "Hello! I'm crazyfrank, a Backend Developer and same as a junior student at CQUT",
      subtitle:
        'Crafting beautiful digital experiences with modern technologies',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch'
    },

    // About Section
    about: {
      title: 'About Me',
      content: [
            "Hello! I'm a backend developer currently studying Computer Science and Technology as a third-year student at CQUT. I have a strong passion for programming and enjoy diving deep into backend technologies — especially in areas like distributed systems, distributed storage, and containerization.",
            "My journey into development began in 2023, when I started experimenting with building simple systems and services. Since then, I've continued to explore the backend ecosystem, building various internal tools, business system backends, and experimenting with infrastructure technologies.",
            "Fast-forward to today, I've had the opportunity to work on several projects, from full-featured web service backends to infrastructure-level tools. I enjoy solving real-world engineering problems and crafting robust, scalable services.",
            "Recently, I've also been actively learning about system design and cloud-native architectures, and I'm particularly interested in how modern tools like Kubernetes and Docker are reshaping the way we build and deploy applications.",
            "In parallel, I'm also actively learning about AI-related development — particularly around the architecture and implementation of agent platforms, inspired by tools like Coze, Dify, and n8n. I'm fascinated by how these systems orchestrate LLMs, tools, and workflows to build intelligent, autonomous agents, and I'm experimenting with building my own versions of such platforms.",
            "Here are a few technologies I've been working with recently:",
      ],
      technologies: [
        'Golang',
        'Gin',
        'gRPC',
        'GORM',
        'Python',
        'Kubernetes',
        'Docker',
        'Milvus',
        'PostgreSQL',
        'Raft',
        'Langchain'
      ]
    },

    // Skills Section
    skills: {
      title: 'Skills & Technologies',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools & Others'
      }
    },

    // Experience Section
    experience: {
      title: "Where I've Worked",
      jobs: [
        {
          company: 'Upstatement',
          position: 'Senior Frontend Developer',
          duration: 'May 2022 - Present',
          description: [
            'Write modern, performant, maintainable code for a diverse array of client and internal projects',
            'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
            'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
          ]
        },
        {
          company: 'Apple',
          position: 'UI Engineer Co-op',
          duration: 'July 2021 - December 2021',
          description: [
            'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
            'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
            "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser"
          ]
        },
        {
          company: 'Mullen Lowe',
          position: 'Creative Technologist Co-op',
          duration: 'July 2020 - December 2020',
          description: [
            'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
            'Performed quality assurance tests on various sites in multiple browsers and mobile devices to ensure cross-browser compatibility and mobile responsiveness',
            'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
          ]
        }
      ]
    },

    // Projects Section
    projects: {
      title: "Some Things I've Built",
      featuredProject: 'Featured Project',
      otherProjects: 'Other Noteworthy Projects',
      projectList: [
        {
          title: 'Onlinejudge Evaluation System',
          description:
            'A secure online code evaluation system built with Docker and gVisor for sandboxing. Enforces resource limits via Linux CGroup and Namespace. Features asynchronous task processing using Kafka, in-memory caching with Redis, and real-time monitoring with Prometheus.',
          tech: [
            'Gin',
            'GORM',
            'MySQL',
            'Redis',
            'Kafka',
            'Prometheus',
            'Docker'
          ],
          github: 'https://github.com/crazyfrankie/onlinejudge',
          live: '#',
          featured: true
        },
        {
          title: 'Voidx: LLMOps Workflow Platform',
          description:
            'An intelligent agent platform powered by Docker, integrating models like Kimi and Qwen. Supports multi-agent orchestration, RAG-based retrieval using Milvus, tool invocation via FunctionCall/ReACT, and workflow chaining with Langchain.',
          tech: ['Langchain', 'PostgreSQL', 'Milvus', 'Kafka', 'Docker'],
          github: 'https://github.com/crazyfrankie/voidx',
          live: '#',
          featured: true
        },
        {
          title: 'ZDocker: Lightweight Container Runtime',
          description:
            'A simplified Docker runtime built from scratch in Go. Implements Linux CGroup and Namespace isolation, image loading, overlay file system, and basic container lifecycle management without relying on containerd or runc.',
          tech: ['Linux Namespace', 'CGroup', 'OverlayFS', 'Go'],
          github: 'https://github.com/crazyfrankie/zdocker',
          live: '#',
          featured: true
        },
        {
          title: 'Cloud: Object Storage System',
          description:
            'A cloud storage service powered by MinIO with EC-based redundancy. Supports multipart uploads, resumable transfers, and task orchestration via Kafka. Backend built with Gin and GORM, with observability through Prometheus.',
          tech: [
            'Gin',
            'GORM',
            'MinIO',
            'MySQL',
            'Redis',
            'Kafka',
            'Prometheus'
          ],
          github: 'https://github.com/crazyfrankie/cloud',
          live: '#',
          featured: false
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Get In Touch',
      description:
        "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      button: 'Say Hello',
      footer: 'Built with Next.js & Framer Motion.'
    }
  },

  cn: {
    // Hero Section
    hero: {
      title: '你好！我是 Crazyfrank，一名后端开发人员，目前重庆理工大学大三计算机科学与技术在读',
      subtitle: '用现代技术打造美丽的数字体验',
      viewWork: '查看我的作品',
      getInTouch: '联系我'
    },

    // About Section
    about: {
      title: '关于我',
      content: [
        '你好！我是一名后端开发者，目前在重庆理工大学计算机科学与技术专业读大三。我对编程有着强烈的热情，喜欢深入研究后端技术——特别是分布式系统、分布式存储和容器化等领域。',
        '我的开发之路始于2023年，当时我开始尝试构建简单的系统和服务。从那时起，我一直在探索后端生态系统，构建各种内部工具、业务系统后端，并尝试基础设施技术。',
        '快进到今天，我有机会参与了多个项目，从功能完整的Web服务后端到基础设施级工具。我喜欢解决现实世界的工程问题，并构建健壮、可扩展的服务。',
        '最近，我还在积极学习系统设计和云原生架构，特别对Kubernetes和Docker等现代工具如何重塑我们构建和部署应用程序的方式很感兴趣。',
        '与此同时，我也在积极学习AI相关的开发——特别是代理平台的架构和实现，受到Coze、Dify和n8n等工具的启发。我对这些系统如何编排LLM、工具和工作流来构建智能、自主的代理很着迷，并且正在尝试构建自己的此类平台版本。',
        '以下是我最近使用的一些技术：'
      ],
      technologies: [
        'Golang',
        'Gin',
        'gRPC',
        'GORM',
        'Python',
        'Kubernetes',
        'Docker',
        'Milvus',
        'PostgreSQL',
        'Raft',
        'Langchain'
      ]
    },

    // Skills Section
    skills: {
      title: '技能与技术',
      categories: {
        Backend: '后端',
        'Tools & Others': '工具与其他',
        IDE: '开发环境'
      },
      skillsList: {
        Backend: [
          'Golang',
          'Python',
          'Gin',
          'gRPC',
          'Django',
          'MySQL',
          'PostgreSQL',
          'MongoDB',
          'Redis',
          'Milvus',
          'Langchain'
        ],
        'Tools & Others': [
          'Git',
          'Docker',
          'Kubernetes',
          'AWS',
          'Vercel',
          'Coze',
          'Dify'
        ],
        IDE: ['Jetbrains', 'Cursor', 'Trae', 'VSCode']
      }
    },

    // Experience Section
    experience: {
      title: '工作经历',
      jobs: [
        {
          company: '科技公司',
          position: '高级全栈开发工程师',
          duration: '2022年 - 至今',
          description: [
            '使用React、Node.js和PostgreSQL开发和维护Web应用程序',
            '领导4人开发团队构建面向客户的仪表板',
            '通过代码优化将应用程序性能提升40%',
            '使用GitHub Actions和AWS实施CI/CD流水线'
          ]
        },
        {
          company: '初创公司',
          position: '前端开发工程师',
          duration: '2020年 - 2022年',
          description: [
            '使用React和TypeScript构建响应式Web应用程序',
            '与设计师合作实现像素级完美的UI组件',
            '集成第三方API和支付系统',
            '指导初级开发人员并进行代码审查'
          ]
        },
        {
          company: '数字代理公司',
          position: 'Web开发工程师',
          duration: '2018年 - 2020年',
          description: [
            '为客户创建自定义WordPress主题和插件',
            '使用WooCommerce开发电商解决方案',
            '优化网站SEO和性能',
            '直接与客户合作收集需求'
          ]
        }
      ]
    },

    // Projects Section
    projects: {
      title: '我构建的一些项目',
      featuredProject: '精选项目',
      otherProjects: '其他值得注意的项目',
      projectList: [
        {
          title: '在线评测系统',
          description:
            '使用Docker和gVisor构建的安全在线代码评测系统，通过Linux CGroup和Namespace实现资源限制。采用Kafka进行异步任务处理，Redis进行内存缓存，Prometheus进行实时监控。',
          tech: [
            'Gin',
            'GORM',
            'MySQL',
            'Redis',
            'Kafka',
            'Prometheus',
            'Docker'
          ],
          github: 'https://github.com/crazyfrankie/onlinejudge',
          live: '#',
          featured: true
        },
        {
          title: 'Voidx: LLMOps工作流平台',
          description:
            '基于Docker的智能代理平台，集成Kimi和Qwen等模型。支持多代理编排、基于Milvus的RAG检索、通过FunctionCall/ReACT进行工具调用，以及使用Langchain的工作流链接。',
          tech: ['Langchain', 'PostgreSQL', 'Milvus', 'Kafka', 'Docker'],
          github: 'https://github.com/crazyfrankie/voidx',
          live: '#',
          featured: true
        },
        {
          title: 'ZDocker: 轻量级容器运行时',
          description:
            '从零开始用Go构建的简化Docker运行时。实现Linux CGroup和Namespace隔离、镜像加载、overlay文件系统和基本容器生命周期管理，无需依赖containerd或runc。',
          tech: ['Linux Namespace', 'CGroup', 'OverlayFS', 'Go'],
          github: 'https://github.com/crazyfrankie/zdocker',
          live: '#',
          featured: true
        },
        {
          title: 'Cloud: 对象存储系统',
          description:
            '基于MinIO的云存储服务，具有EC冗余。支持分片上传、断点续传和通过Kafka进行任务编排。后端使用Gin和GORM构建，通过Prometheus提供可观测性。',
          tech: [
            'Gin',
            'GORM',
            'MinIO',
            'MySQL',
            'Redis',
            'Kafka',
            'Prometheus'
          ],
          github: 'https://github.com/crazyfrankie/cloud',
          live: '#',
          featured: false
        }
      ]
    },

    // Contact Section
    contact: {
      title: '联系我',
      description:
        '我目前正在寻找新的机会，我的收件箱始终开放。无论你有问题还是只是想打个招呼，我都会尽力回复你！',
      button: '打个招呼',
      footer: '使用Next.js和Framer Motion构建。'
    }
  }
}
