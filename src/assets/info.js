export default {
  name: '严海翔',
  tel: '15602564425',
  email: 'haixiang6123@gmail.com',
  github: 'https://github.com/haixiangyan',
  jianshu: 'https://www.jianshu.com/u/0340be4082b5',
  medium: 'https://medium.com/@haixiang6123',
  website: 'https://yanhaixiang.com',
  zhihu: 'https://www.zhihu.com/people/haixiangyan',
  juejin: 'https://juejin.cn/user/272334614432887',
  edus: [
    {
      left: '加州大学尔湾分校',
      right: '美国加州',
      children: [
        {
          left: '专业：Master of Networked System',
          right: '2018年9月 - 2020年3月'
        },
        {
          left: 'GPA: 3.3/4.0'
        }
      ]
    },
    {
      left: '东北大学',
      right: '中国沈阳',
      children: [
        {
          left: '专业：软件工程本科，GPA：3.6/5.0',
          right: '2014年10月 - 2018年6月'
        },
        {
          left: '荣誉：3年三等奖学金，1年二等奖学金',
        },
      ]
    },
  ],
  skills: {
    frameworks: ['Vue.js', 'React.js', 'TypeScript', 'Express.js', 'Koa.js'],
    libraries: ['Element UI', 'Ant Design', 'GraphQL'],
    tools: ['Sass', 'Webpack', 'Faker.js', 'Mock.js'],
    tests: ['Cypress', 'Jest', 'Mocha', 'Sinon', 'Chai', 'Karma', 'Travis CI'],
  },
  works: [
    {
      left: '腾讯@IMWeb',
      link: '',
      right: '2020年07月 - 至今',
      children: [
        {left: '主要负责开发微信私域流量运营工具，使用 *React* + *Dva.js* + *Ant Design* 技术栈开发企业微信侧边栏和业务管理后台'},
        {left: '开发企业微信侧边栏工具，总结并输出侧边栏开发指南，开发了一套侧边栏上手模板'},
        {left: '使用 *Nest.js* 开发业务流程的 Node 中台接口'},
        {left: '帮助项目工程化，接入 Coding 流水线以及添加 *CICD* 发布流程，接入页面告警和埋点上报'},
        {left: '调研并深入了解 single-spa 和 *qiankun* 两大微前端框架的源码，在重构的项目中落地微前端'},
      ]
    }
  ],
  interns: [
    {
      left: '大疆创新（前端实习，美国 Palo Alto）',
      link: '',
      right: '2019年06月',
      children: [
        {left: '开发 LAANC（Low-Altitude Authorization and Notification）系统'},
        {left: '使用 *Element UI* 重做原先使用 *Buefy* + *Bulma* 编写的组件，并根据新 UI 设计稿重写用户交互逻辑和组件样式'},
        {left: '运用 *GraphQL* 配合 Vue-Apollo 处理大部分数据请求，同时使用 Vue-Apollo 提供的 Subscription 功能实现通知模块'},
        {left: '使用 *Jest* 编写单元测试，用 *Puppeteer* 编写表单的集成测试，用 *MockServer* 和 Vue-Apollo 测试 RESTful API 和 GraphQL 接口，并在 Gitlab 上进行自动化测试。'},
      ]
    },
    {
      left: 'Brix（前端实习，美国 Irvine）',
      link: '',
      right: '2019年04月',
      children: [
        {left: '使用 *React.js* 单独开发一套 OJ（Online Judge）系统'},
        {left: '基于 *Ant Design* 和 *Sass* 编写组件样式和网页布局'},
        {left: '使用 *Ace Editor* 实现在线编辑代码功能，并用 Session 记住每道编程题的做题情况'},
        {left: '前后端分离，使用 *Mock.js* 生成假数据来测试后端提供的 RESTful API'}
      ]
    },
  ],
  projects: [
    {
      left: 'Linter 上手系列文章（Star: 100 +）',
      link: 'https://github.com/linter-guide',
      right: '2022年01月',
      children: [
        {left: '这本小书讲述了 Linter 的发展史，以及 Linter 工具的上手实践'},
        {left: '包含内容有 *ESLint, Prettier, TypeScript, JSX, Vue, LintStaged, Husky*'},
      ]
    },
    {
      left: '企业微信侧边栏开发指南&开发模板',
      link: 'https://github.com/wecom-sidebar',
      right: '2021年10月',
      children: [
        {left: '该 Github Organization 提供了一套完整的企业微信侧边栏的开发指'},
        {left: '高度封装企业微信提供的 JS-SDK，使开发者可快速上手，并将其与 *React* 技术栈结合作为一个前端开发模板'},
        {left: '使用 *Express* 封装企业微信服务端的转发服务，再结合 *Redis* 和 *Docker* 做一个 Node 端开发模板'},
        {left: '利上面面两个模板二次开发，结合 *qiankun* 微前端框架，使用微前端的思路管理侧边栏应用'},
      ]
    },
    {
      left: '造轮子文章系列（Star: 1.4k+）',
      link: 'https://github.com/Haixiang6123/one-day-one-npm-lib',
      right: '2021年05月',
      children: [
        {left: '小书会带读者造 10 个非常实用的 npm 库 📦，包括：*redux*, react-error-boundary, idb-keyval 等'},
        {left: '从一个最Low的解决方法，慢慢优化，并推导成源码的样子，将整个从 0 到 1 的设计与思考过程完整地呈现给读者。'},
      ]
    },
    {
      left: 'node-autodoc',
      link: 'https://github.com/Haixiang6123/node-autodoc',
      right: '2021年04月',
      children: [
        {left: '一个测试驱动文档的生成器。灵感来源于 *autodoc* 和 *supertest*.'},
        {left: '在写简单接口测试用例时，这个库可以配合 *Jest*，根据单元测试用例来生成对应 API 文档'},
      ]
    },
    {
      left: '守望先锋 UI 库（Star: 410+）',
      link: 'https://haixiang6123.github.io/overwatch-ui-doc/#/',
      right: '2019年02月',
      children: [
        {left: '本项目是基于 *Vue.js* 并模仿守望先锋 UI 开发的一套 UI 组件库'},
        {left: '合理运用 Vue 的特性来打造每个组件，如过渡，slot，provider，watch 属性，生命周期钩子等'},
        {left: '使用 CSS 预处理器 Sass 定制组件的样式，并定义不同 Mixins 来封装样式以提高样式的重用度'},
        {left: '使用 *Chai，Sinon，Mocha* 对组件进行单元测试，并结合 *Travis CI，Karma* 进行自动化测试'},
      ]
    },
    {
      left: '代码高亮插件（Star: 110+, 用户量：1k+）',
      link: 'https://github.com/Haixiang6123/codeblock-beautifier/blob/master/README-CN.md',
      right: '2019年01月',
      children: [
        {left: '一个用于高亮博客文章代码块的 *Chrome* 插件，支持 Medium，知乎，简书，StackOverflow 等大部分博客网站'},
        {left: '通过 *Highlight.js* 自动检测代码所使用的语言，用户可以通过设置语言偏好来提高自动检测语言的准确度'},
        {left: '使用深度搜索来合并连续出现的 pre 元素'},
        {left: '使用 *Event Hub* 来更新代码主题和语言偏好'},
        {left: '该插件提供支持 80 多种代码主题以及 20 多种编程语言'}
      ]
    },
    {
      left: '吉他谱编辑器（Star: 90+）',
      link: 'https://haixiang6123.github.io/guitar-editor/#/',
      right: '2018年05月',
      children: [
        {left: '本项目是基于 *React.js* 开发的吉他谱在线编辑器，吉他谱作者可以通过编写规定格式的文本来创作吉他谱'},
        {left: '将特定格式的文本渲染成转化成网页，并使用 *SVG* 来渲染吉他和弦图和六线谱'},
      ]
    },
  ],
}
